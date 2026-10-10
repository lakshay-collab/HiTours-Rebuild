#!/usr/bin/env python3
"""Extract a Thrillophilia tour served from the LEGACY (non Next.js) template.

The legacy page carries its payload in a single data-react-props blob whose
itinerary is prose only: no structured hotels, transfers or activities. We emit
a raw.json in the same shape as extract.py so build_trip.py can consume it, with
hotels left empty (build_trip falls back to the trip gallery) and the day items
derived from the prose bullets.
"""
import html, json, re, sys, os, urllib.request

UA = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36'}
API = 'https://www.thrillophilia.com/website/api/'
ROOT = '/app/import'


def fetch(url):
    return urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60).read()


def media_urls(objs):
    out, seen = [], set()
    for o in objs:
        u = o.get('url')
        if u and u not in seen and re.search(r'\.(jpe?g|png|webp)(\?|$)', u, re.I):
            seen.add(u)
            out.append({'url': u, 'caption': o.get('caption') or ''})
    return out


def walk(obj, acc):
    if isinstance(obj, dict):
        if isinstance(obj.get('url'), str):
            acc.append(obj)
        mu = obj.get('media_urls')
        if isinstance(mu, dict) and isinstance(mu.get('original'), str):
            acc.append({'url': mu['original'], 'caption': obj.get('caption') or ''})
        for v in obj.values():
            walk(v, acc)
    elif isinstance(obj, list):
        for v in obj:
            walk(v, acc)
    return acc


def strip(h):
    h = re.sub(r'<li[^>]*>', '\n\u2022 ', h or '')
    h = re.sub(r'<[^>]+>', '', h)
    return html.unescape(h).replace('\xa0', ' ')


def bullets(h):
    return [re.sub(r'\s+', ' ', b).strip(' .') for b in strip(h).split('\u2022') if b.strip()]


def extract(url, cities):
    page = fetch(url).decode('utf-8', 'ignore')
    blob = re.search(r'data-react-props="(.*?)"\s', page, re.S).group(1)
    t = json.loads(html.unescape(blob))['tour_data']
    slug = t['slug']

    gallery = [{**m, 'tab': 'product_images'} for m in media_urls(walk(t.get('gallery_media'), []))]
    hero_tiles = [m['url'] for m in media_urls(walk(t.get('featured_media'), []))]
    dest_gallery = {}
    for c in cities:
        try:
            dj = json.loads(fetch(API + 'gallery_media/destination/' + urllib.request.quote(c)))
            dest_gallery[c] = [m['url'] for m in media_urls(walk(dj.get('data'), []))]
            gallery += [{'url': u, 'caption': '', 'tab': 'Destinations', 'city': c} for u in dest_gallery[c]]
        except Exception as ex:  # noqa
            print('  destination gallery failed', c, ex)
            dest_gallery[c] = []

    days = []
    for d in t['itinerary']['itinerary_days']:
        days.append({'day': d['day_number'], 'title': (d.get('title') or '').strip(),
                     'city': '', 'meals': [], 'items': [],
                     'prose': bullets(d.get('description'))})
    nights = len(days) - 1
    raw = {
        'source': url, 'title': t['name'], 'slug': slug,
        'duration': f'{len(days)}D/{nights}N', 'city_split': [[c, 0] for c in cities],
        'counts': {}, 'price_per_adult': t.get('starting_price'),
        'struck_price': t.get('strike_through_price'), 'currency': t.get('currency'),
        'overview': strip(t.get('long_description')),
        'highlights': [strip(x) for x in (t.get('highlights') or [])],
        'inclusions': [], 'exclusions': [],
        'hotels': [], 'activities': [], 'days': days,
        'gallery': gallery, 'dest_gallery': dest_gallery, 'hero_tiles': hero_tiles,
        'legacy': True,
    }
    os.makedirs(f'{ROOT}/{slug}', exist_ok=True)
    json.dump(raw, open(f'{ROOT}/{slug}/raw.json', 'w'), indent=1, ensure_ascii=False)
    print('OK', slug, raw['duration'], raw['price_per_adult'], 'gallery', len(gallery),
          {k: len(v) for k, v in dest_gallery.items()})
    for d in days:
        print(f"  D{d['day']} {d['title'][:50]}")
        for b in d['prose']:
            print('     -', b[:130])


if __name__ == '__main__':
    extract(sys.argv[1], sys.argv[2:])
