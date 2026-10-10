"""Generic builder: spec JSON + extracted raw.json -> frontend/src/tours/<camel>Data.js

Images are picked automatically from the source galleries (landscape only, hero tiles excluded)
and linked straight from Thrillophilia, per the import guide.
"""
import io
import json
import os
import re
import sys
from concurrent.futures import ThreadPoolExecutor

sys.path.insert(0, '/app/scripts/thrillophilia')
import extract as E
from PIL import Image

PREFIX = 'https://media1.thrillophilia.com/filestore/'
spec = json.load(open(sys.argv[1]))
raw = json.load(open('/app/import/%s/raw.json' % spec['source_slug']))
camel = spec['camel']
OUT = '/app/frontend/src/tours/%sData.js' % camel


def size(u):
    try:
        im = Image.open(io.BytesIO(E.fetch(u + '?w=600&dpr=1')))
        return u, im.size
    except Exception:
        return u, (0, 0)


# ---- usable destination images per city (landscape, not a hero tile)
tiles = set(raw['hero_tiles'])
cities = {}
with ThreadPoolExecutor(8) as pool:
    for city, urls in raw['dest_gallery'].items():
        good = []
        for u, (w, h) in pool.map(size, [u for u in urls if u not in tiles]):
            if w > h and w >= 500:
                good.append(u)
        cities[city] = good

# destinations with no Thrillophilia gallery (Swedish Lapland, rural Ireland) fall back to the
# product gallery of the tour itself, which is still a real photo of the place.
# destinations with no Thrillophilia gallery (Swedish Lapland, rural Ireland) fall back to the
# product gallery of the tour itself, which is still a real photo of the place.
if not all(cities.values()):
    prod = [m['url'] for m in (raw.get('gallery') or []) if m['url'] not in tiles]
    with ThreadPoolExecutor(8) as pool:
        prod = [u for u, (w, h) in pool.map(size, prod) if w > h and w >= 500]
    for _c in list(cities):
        if not cities[_c]:
            cities[_c] = list(prod)

# rotate each city pool per trip so trips sharing a city do not all open with the same photo
_off = sum(ord(c) for c in spec['slug'])
for _c, _l in cities.items():
    if _l:
        k = _off % len(_l)
        cities[_c] = _l[k:] + _l[:k]

used_city = {c: 0 for c in cities}


def city_img(city, n=1):
    """Next n unused destination images for a city, cycling if the gallery is short."""
    pool_ = cities.get(city) or sum(cities.values(), [])
    out = []
    for _ in range(n):
        out.append(pool_[used_city.get(city, 0) % len(pool_)])
        used_city[city] = used_city.get(city, 0) + 1
    return out


def act_images(match):
    for a in raw['activities']:
        if match.lower() in a['name'].lower() and a['images']:
            return [u for u in a['images'] if u not in tiles]
    return []


def day_item_images(day):
    out = []
    for a in raw['activities']:
        if a['day'] == day:
            for u in a['images'][:1]:
                if u not in tiles:
                    out.append(u)
    return out


hotel_images = {}
_hotel_fallback = set()
for h in raw['hotels']:
    hotel_images[h['name']] = [u for u in h['images'] if u not in tiles]

# ---- hero gallery: round robin across the stop cities
stop_cities = [s['city'] for s in spec['stops']]
hero = []
while len(hero) < 10:
    before = len(hero)
    for c in stop_cities:
        if len(hero) >= 10:
            break
        pick = [u for u in (cities.get(c) or []) if u not in hero]
        if pick:
            hero.append(pick[0] if not hero else pick[len(hero) % len(pick)])
    if len(hero) == before:
        break
hero = list(dict.fromkeys(hero))
extra = [u for c in stop_cities for u in (cities.get(c) or [])]
for u in extra:
    if len(hero) >= 10:
        break
    if u not in hero:
        hero.append(u)
if 'hero_first' in spec:
    first = [u for u in hero if spec['hero_first'] in u]
    if first:
        hero.remove(first[0])
        hero.insert(0, first[0])


def plural(n, word):
    return '%d %s' % (n, word if n == 1 else word + 's')


def q(s):
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"


def path(u):
    assert u.startswith(PREFIX), u
    return u[len(PREFIX):]


def js(u):
    return "img(%s)" % q(path(u))


def jslist(urls, indent=4):
    pad = ' ' * indent
    return '[\n' + ',\n'.join(pad + '  ' + js(u) for u in urls) + '\n' + pad + ']'


# ---- per stop blocks
_stop_taken = set()
_stop_cache = {}


def stop_images(stop):
    key = stop['letter']
    if key in _stop_cache:
        return _stop_cache[key]
    pool_ = cities.get(stop['city']) or sum(cities.values(), [])
    out = [u for u in pool_ if u not in _stop_taken][:4]
    if len(out) < 4:
        out += [u for u in pool_ if u not in out][:4 - len(out)]
    _stop_taken.update(out)
    _stop_cache[key] = out
    return out


def day_images(stop, day):
    out = []
    for u in day_item_images(day):
        if u not in out:
            out.append(u)
        if len(out) == 4:
            break
    pool_ = (cities.get(stop['city']) or []) + sum(cities.values(), [])
    for u in pool_:
        if len(out) >= 4:
            break
        if u not in out:
            out.append(u)
    return out[:4]


blocks = []
for stop in spec['stops']:
    days = stop['days']
    bullets = []
    for d in days:
        bullets.append('      `${DAY_MARK}Day %d \u00b7 %s`' % (d, spec['day_titles'][str(d)]))
        bullets += ['      ' + q(b) for b in spec['bullets'][str(d)]]
    day_img_rows = ',\n'.join(
        '      %d: %s' % (d, jslist(day_images(stop, d), 6)) for d in days)
    acts = []
    for a in stop['activities']:
        imgs = act_images(a.get('match') or a['name'])
        image = imgs[0] if imgs else city_img(stop['city'])[0]
        acts.append('      {\n        name: %s,\n        day: %d,\n        optional: %s,\n        image: %s,\n        description: %s\n      }'
                    % (q(a['name']), a['day'], 'true' if a.get('optional') else 'false', js(image), q(a['description'])))
    prog_img = stop_images(stop)[0]
    hotel = stop['hotel']
    himgs = hotel_images.get(hotel)
    if not himgs:
        gal = [m['url'] for m in (raw.get('gallery') or []) if m['url'] not in tiles and m['url'] not in _hotel_fallback]
        himgs = gal[:6] or city_img(stop['city'], 6)
        _hotel_fallback.update(himgs)
    sub = "\n    subtitle: %s," % q(stop['subtitle']) if stop.get('subtitle') else ''
    blocks.append("""  {
    letter: '%s',
    name: %s,%s
    dayLabel: '%s',
    images: %s,
    dayImages: {
%s
    },
    bullets: [
%s
    ],
    accommodation: {
      name: %s,
      description: %s,
      images: %s
    },
    activities: [
%s
    ],
    program: {
      name: %s,
      description: %s,
      image: %s
    }
  }""" % (stop['letter'], q(stop['name']), sub, stop['dayLabel'],
            jslist(stop_images(stop)), day_img_rows, ',\n'.join(bullets),
            q(stop.get('hotel_label', hotel) + ', ' + stop['city']), q(stop['accom']), jslist(himgs, 6),
            ',\n'.join(acts), q(stop['program']['name']), q(stop['program']['description']), js(prog_img)))

glance_rows = []
for d in sorted(int(k) for k in spec['day_titles']):
    k = str(d)
    text = '\\n'.join(spec['bullets'][k]).replace("'", "\\'")
    hl = ', '.join(q(x) for x in spec['bullets'][k][:3])
    glance_rows.append("    { title: %s, text: '%s', hotel: %s, highlights: [%s] }"
                       % (q('Day %d: %s (%s)' % (d, spec['day_titles'][k], spec['meals'][k])), text, q(spec['hotel_by_day'][k]), hl))

counts = spec['counts']
crumbs = ',\n'.join("  { label: %s, href: %s }" % (q(c[0]), q(c[1])) for c in spec['crumbs']) + ',\n  { label: detail.title }'

out = """// %s. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = %s;
const cardImages = heroGallery.slice(0, 4);

const stops = [
%s
];

const detail = {
  slug: %s,
  ctaHref: '/l/%s/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: %s,
  alt: %s,
  days: '%d days / %d nights',
  stations: '%d stops',
  transport: %s,
  tag: %s,
  tags: [%s],
  price: %d,
  routeLabel: 'This holiday takes you to',
  routeCities: [%s],
  stats: { days: %d, cities: %d, hotels: %d, activities: %d, transfers: %d },
  gallery: heroGallery,
  services: [
    ['%s', 'Accommodation'],
    ['%s', 'Activities'],
    ['%s', 'Transport'],
    ['%s', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: %s,
    image: %s,
    role: %s,
    createdBy: 'Trip created by',
    quote: %s,
    quoteMore: %s,
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: %s,
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: %s,
  intro2: %s,
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
%s
  ],
  outro: %s
};

const crumbs = [
%s
];

export const %sBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const %sProduct = {
  slug: detail.slug,
  places: [%s],
  href: `%s/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: %d,
  stops: %d,
  hotels: %d,
  cities: %d,
  activities: %d,
  transfers: %d,
  meals: %d,
  price: detail.price,
  images: cardImages
};
""" % (spec['title'], jslist(hero[:10], 0), ',\n'.join(blocks),
       q(spec['slug']), spec['cta_country'], q(spec['title']), q(spec['alt']),
       counts['days'], counts['nights'], len(spec['stops']), q(spec['transport']), q(spec['tag']),
       ', '.join(q(t) for t in spec['tags']), spec['price'],
       ', '.join(q(c) for c in spec['route_cities']),
       counts['days'], counts['cities'], counts['hotels'], counts['experiences'], counts['transfers'],
       plural(counts['hotels'], 'hotel'), plural(counts['experiences'], 'experience'),
       plural(counts['transfers'], 'transfer'), plural(counts['meals'], 'meal'),
       q(spec['expert']['name']), q(spec['expert']['image']), q(spec['expert']['role']),
       q(spec['expert']['quote']), q(spec['expert']['tip']),
       q(spec['summary']), q(spec['included']), q(spec['not_included']),
       ',\n'.join(glance_rows), q(spec['not_included']), crumbs, camel, camel,
       ', '.join(q(c) for c in dict.fromkeys(spec['route_cities'])), spec.get('base', '/asien'),
       counts['days'], len(spec['stops']), counts['hotels'], counts['cities'],
       counts['experiences'], counts['transfers'], counts['meals'])

open(OUT, 'w').write(out)
print('written', OUT, len(out.splitlines()), 'lines')
