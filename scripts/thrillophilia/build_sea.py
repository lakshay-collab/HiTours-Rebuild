"""Build the Thailand, Singapore, Malaysia & Hong Kong trip from import/southeast-asia-highlights-tour/raw.json."""
import csv
import json
import os
import re
from PIL import Image

IMP = '/app/import/southeast-asia-highlights-tour'
SLUG = 'thailand-singapore-malaysia-hong-kong-13-days'
CAMEL = 'thailandSingaporeMalaysiaHongKong13Days'
PUB = f'/app/frontend/public/tours/{SLUG}'
raw = json.load(open(f'{IMP}/raw.json'))
info = json.load(open(f'{IMP}/image_info.json'))
idx = raw['image_index']
hero_tiles = set(raw['hero_tiles']) | set(g['url'] for g in raw['gallery'] if g['tab'] == 'product_images')


def ok(u, minw=1000):
    v = info.get(u)
    return bool(v) and not v.get('bad') and v['w'] >= minw and v['w'] > v['h'] and u not in hero_tiles


def good(urls, minw=1000):
    return [u for u in urls if ok(u, minw)]


dest = {c: good(u) for c, u in raw['dest_gallery'].items()}
hotels = {h['name']: h for h in raw['hotels']}
acts = {}
for a in raw['activities']:
    acts.setdefault((a['day'], a['name'].strip()), a)


def act(day, prefix):
    for (d, n), a in acts.items():
        if d == day and n.startswith(prefix):
            return a
    raise KeyError(prefix)


saved, sources = {}, []


def save(u, rel, maxw, section, name=''):
    """Convert to jpg q80, resize, record. Returns web path."""
    if (u, rel) in saved:
        return saved[(u, rel)]
    src = f"{IMP}/images/{idx[u]}"
    dst = f'{PUB}/{rel}'
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    im = Image.open(src).convert('RGB')
    if im.width > maxw:
        im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
    im.save(dst, 'JPEG', quality=80, optimize=True)
    web = f'/tours/{SLUG}/{rel}'
    saved[(u, rel)] = web
    m = re.search(r'shutterstock_(\d+)', u)
    sources.append([web, u, section, name, m.group(1) if m else '', f'{im.width}x{im.height}'])
    return web


def save_list(urls, folder, prefix, maxw, section, name='', start=1):
    return [save(u, f'{folder}/{prefix}{i:02d}.jpg', maxw, section, name) for i, u in enumerate(urls, start)]


P, B, S, K, H = dest['Pattaya'], dest['Bangkok'], dest['Singapore'], dest['Kuala Lumpur'], dest['Hong Kong']
hero_urls = [S[0], H[11], P[3], B[3], K[0], K[5], H[3], S[1], B[2], H[5]]
hero = save_list(hero_urls, 'hero', '', 2000, 'hero')
D = {
    'pattaya': save_list([P[3], P[4], P[2], P[8], P[0]], 'destinations', 'pattaya-', 1400, 'destination', 'Pattaya'),
    'bangkok': save_list([B[3], B[2], B[0], B[1], B[6], B[7]], 'destinations', 'bangkok-', 1400, 'destination', 'Bangkok'),
    'singapore': save_list([S[0], S[1], S[3], S[4], S[6], S[2]], 'destinations', 'singapore-', 1400, 'destination', 'Singapore'),
    'kuala-lumpur': save_list([K[0], K[4], K[5], K[3], K[6]], 'destinations', 'kuala-lumpur-', 1400, 'destination', 'Kuala Lumpur'),
    'hong-kong': save_list([H[11], H[3], H[0], H[1], H[5], H[6], H[10]], 'destinations', 'hong-kong-', 1400, 'destination', 'Hong Kong'),
}
HOTELS = [('ibis Pattaya', 'ibis-pattaya'), ('Hotel De Bangkok', 'hotel-de-bangkok'), ('ibis Singapore Novena', 'ibis-singapore-novena'),
          ('Days Hotel & Suites by Wyndham Fraser Business Park Kuala Lumpur', 'days-hotel-kuala-lumpur'), ('Harbour Plaza 8 Degrees, Hong Kong', 'harbour-plaza-8-degrees')]
HI = {slug: save_list(good(hotels[n]['images'], 700), f'hotels/{slug}', '', 1400, 'hotel', n) for n, slug in HOTELS}
ACTS = [  # (day, source prefix, slug, picked card image index within good list)
    (2, 'Trip to Coral Island', 'coral-island', 0), (3, 'Bangkok Sightseeing Tour', 'bangkok-temples', 0), (3, 'Chao Phraya Princess', 'chao-phraya-dinner-cruise', 0),
    (4, 'Singapore Night Safari', 'night-safari', 3), (5, 'Universal Studios Singapore Tickets', 'universal-studios', 0), (7, 'Kuala Lumpur Half Day', 'kuala-lumpur-city-tour', 1),
    (8, 'Genting Highlands Day Trip', 'genting-batu-caves', 0), (10, 'Madame Tussauds Hong Kong Ticket', 'madame-tussauds', 0), (11, 'Macau Sightseeing Tour', 'macau-tour', 0), (12, 'Ocean Park Hong Kong Tickets', 'ocean-park', 0),
    (1, 'Alcazar', 'alcazar-show', 0), (1, 'Saturday Walking Street', 'walking-street', 0), (1, 'Jomtien', 'jomtien-beach', 0),
    (6, 'Merdeka Square', 'merdeka-square', 0), (6, 'Jalan Alor', 'jalan-alor', 0), (6, 'Illusion 3D', 'illusion-3d-museum', 0),
    (9, 'Senado Square', 'senado-square', 0), (9, 'Hac Sa Beach', 'hac-sa-beach', 0), (9, 'A-Ma Temple', 'a-ma-temple', 0),
]
AI = {}
for day, pre, slug, pick in ACTS:
    a = act(day, pre)
    urls = good(a['images']) or [u for u in a['images'] if info.get(u) and not info[u].get('bad')]
    urls = [urls[pick]] + [u for i, u in enumerate(urls) if i != pick]
    AI[slug] = save_list(urls[:7], f'activities/{slug}', '', 1400, 'activity', a['name'])

# ---------- data ----------
def img_js(paths):
    return '[' + ', '.join(f"'{p}'" for p in paths) + ']'


def day_imgs(*lists, n=6):
    out = []
    for lst in lists:
        for p in lst:
            if p not in out:
                out.append(p)
    return out[:n]


stops = [
    dict(letter='A', name='Pattaya', dayLabel='Day 1 to 2', images=D['pattaya'], hotel=('ibis Pattaya, Pattaya', '2 nights · Breakfast · Standard room · 3★ · A short walk from Pattaya Beach and Walking Street', HI['ibis-pattaya']),
         days={1: day_imgs(D['pattaya'][:3], AI['alcazar-show'][:1], AI['jomtien-beach'][:1]), 2: day_imgs(AI['coral-island'][1:], D['pattaya'][1:2])},
         bullets={1: ('Arrival in Bangkok and onward to Pattaya', ['Arrival at Suvarnabhumi Airport and private sedan transfer to your hotel in Pattaya', 'Check in and settle into your room by the Gulf of Thailand', 'Rest of the day free to find your feet in Pattaya', 'Optional: Alcazar Cabaret Show, an evening of costumes and choreography', 'Optional: Browse the Saturday Walking Street Market or unwind at Jomtien Beach']),
                  2: ('Coral Island by speedboat', ['Breakfast at the hotel, then shared transfer to Bali Hai Pier', 'Speedboat transfer across to Coral Island, also called Koh Larn', 'Free time on Tawaen Beach, with water sports available at your own cost', 'Lunch on the island is included', 'Return speedboat and shared transfer back to your hotel'])},
         activities=[('Coral Island day trip with lunch', 2, False, 'coral-island', 'Speedboat out to Koh Larn for a day on Tawaen Beach. Swim, try parasailing or a banana boat at your own cost, and sit down to an included lunch.'),
                     ('Alcazar Cabaret Show', 1, True, 'alcazar-show', 'Pattaya\u2019s famous cabaret, a 70 minute production of elaborate costumes, big sets and polished choreography. Tickets can be added to your package.'),
                     ('Saturday Walking Street Market', 1, True, 'walking-street', 'Pattaya\u2019s weekend street market with food stalls, local crafts and live music, a relaxed way to spend your first evening.'),
                     ('Jomtien Beach', 1, True, 'jomtien-beach', 'The quieter beach south of Pattaya town, with a long promenade, beach chairs and seafood restaurants along the sand.')],
         program=('Pattaya', 'Two nights on the Gulf of Thailand to shake off the flight, with a full day on the white sand of Coral Island and evenings in the town.')),
    dict(letter='B', name='Bangkok', dayLabel='Day 3', images=D['bangkok'], hotel=('Hotel De Bangkok, Bangkok', '1 night · Breakfast · Standard room · 3★ · Central Bangkok base close to the BTS Skytrain', HI['hotel-de-bangkok']),
         days={3: day_imgs(AI['bangkok-temples'][1:3], AI['chao-phraya-dinner-cruise'][1:4], D['bangkok'][:2])},
         bullets={3: ('Bangkok temples and a dinner cruise', ['Breakfast, check out and road transfer from Pattaya to Bangkok', 'Check in at your Bangkok hotel and freshen up', 'Shared transfer to Wat Traimit, home of the five tonne Golden Buddha', 'Visit Wat Mahapruttaram and the Gems Gallery showroom', 'Evening Chao Phraya Princess dinner cruise with a buffet and live music', 'Shared transfer back to the hotel after the cruise'])},
         activities=[('Bangkok temples half day tour', 3, False, 'bangkok-temples', 'A guided afternoon at Wat Traimit with its solid gold Buddha, the quieter Wat Mahapruttaram and a stop at the Gems Gallery, Bangkok\u2019s largest jewellery showroom.'),
                     ('Chao Phraya Princess dinner cruise', 3, False, 'chao-phraya-dinner-cruise', 'Two hours on the river past the lit up Grand Palace and Wat Arun, with an international buffet dinner and a live band on board.')],
         program=('Bangkok', 'One full night in the capital, timed around a temple circuit in the afternoon and a dinner cruise on the Chao Phraya after dark.')),
    dict(letter='C', name='Singapore', dayLabel='Day 4 to 5', images=D['singapore'], hotel=('ibis Singapore Novena, Singapore', '2 nights · Breakfast · Standard room · 3★ · Next to Novena MRT, ten minutes to Orchard Road', HI['ibis-singapore-novena']),
         days={4: day_imgs(AI['night-safari'][1:5], D['singapore'][:2]), 5: day_imgs(AI['universal-studios'][1:5], D['singapore'][2:4])},
         bullets={4: ('Flight to Singapore and the Night Safari', ['Breakfast and transfer to Suvarnabhumi Airport', 'Flight from Bangkok to Singapore, booked separately and not included', 'Private transfer from Changi Airport to your hotel', 'Evening private transfer to the Night Safari for the tram ride and walking trails', 'Return transfer to the hotel']),
                  5: ('Universal Studios Singapore', ['Breakfast at the hotel', 'Private transfer to Universal Studios Singapore on Sentosa', 'Full day pass with rides and shows across seven themed zones', 'Evening free for Clarke Quay or Marina Bay on your own'])},
         activities=[('Night Safari with tram ride', 4, False, 'night-safari', 'The world\u2019s first night zoo. A guided tram loops past elephants, rhinos and big cats in open enclosures, with walking trails and the Creatures of the Night show.'),
                     ('Universal Studios Singapore', 5, False, 'universal-studios', 'A full day pass to the park on Sentosa, with Transformers, Battlestar Galactica, the Mummy ride and Minion Land plus street shows and character meets.')],
         program=('Singapore', 'Two nights in the city state with its two headline family experiences, the Night Safari tram on arrival and a full day at Universal Studios.')),
    dict(letter='D', name='Kuala Lumpur', subtitle='Kuala Lumpur → Genting Highlands', dayLabel='Day 6 to 8', images=D['kuala-lumpur'], hotel=('Days Hotel & Suites by Wyndham Fraser Business Park, Kuala Lumpur', '3 nights · Breakfast · Standard room · 3★ · Rated 4.5 on TripAdvisor, near the Chan Sow Lin LRT', HI['days-hotel-kuala-lumpur']),
         days={6: day_imgs(D['kuala-lumpur'][:2], AI['merdeka-square'][:1], AI['jalan-alor'][:1], AI['illusion-3d-museum'][:1]), 7: day_imgs(AI['kuala-lumpur-city-tour'][1:5], D['kuala-lumpur'][1:2]), 8: day_imgs(AI['genting-batu-caves'][1:5], D['kuala-lumpur'][2:3])},
         bullets={6: ('Road to Kuala Lumpur', ['Breakfast and check out in Singapore', 'Coach transfer from Singapore to Kuala Lumpur, about five hours by road', 'Check in and the rest of the day free', 'Optional: Merdeka Square and its colonial era buildings', 'Optional: Street food on Jalan Alor or the Illusion 3D Art Museum']),
                  7: ('Kuala Lumpur city tour and Petronas Towers', ['Breakfast, then private transfer for a half day city tour', 'Photo stops at Istana Negara, Tugu Negara and Merdeka Square', 'Petronas Twin Towers with the Skybridge and observation deck', 'Pass KL Tower on the way back', 'Private transfer back to the hotel']),
                  8: ('Batu Caves and Genting Highlands', ['Breakfast, then private transfer to Batu Caves and its 272 rainbow steps', 'Cable car transfer on the Awana Skyway up to Genting Highlands and back', 'Free time for the outlets, the casino floor and the cool hill air', 'Private transfer back to Kuala Lumpur in the evening'])},
         activities=[('Kuala Lumpur half day city tour', 7, False, 'kuala-lumpur-city-tour', 'A private half day through the capital with photo stops at the royal palace, the National Monument and Merdeka Square, then up the Petronas Twin Towers to the Skybridge and observation deck.'),
                     ('Genting Highlands and Batu Caves', 8, False, 'genting-batu-caves', 'Climb the painted steps at Batu Caves beneath the 43 metre Murugan statue, then ride the Awana Skyway cable car over the rainforest to Genting Highlands for the day.'),
                     ('Merdeka Square', 6, True, 'merdeka-square', 'The square where Malaysia declared independence in 1957, framed by the Sultan Abdul Samad Building and the old cricket club.'),
                     ('Jalan Alor food street', 6, True, 'jalan-alor', 'Kuala Lumpur\u2019s best known food street, lined with hawker stalls and open air restaurants serving satay, grilled seafood and noodles late into the night.'),
                     ('Illusion 3D Art Museum', 6, True, 'illusion-3d-museum', 'An interactive gallery of trick art and optical illusions near Petaling Street, a fun hour for families and photos.')],
         program=('Kuala Lumpur', 'Three nights in the Malaysian capital with a half day city tour, the Petronas Skybridge and a day out to Batu Caves and Genting Highlands.')),
    dict(letter='E', name='Hong Kong', subtitle='Hong Kong → Macau', dayLabel='Day 9 to 13', images=D['hong-kong'], hotel=('Harbour Plaza 8 Degrees, Hong Kong', '4 nights · Breakfast · Standard room · 3★ · Kowloon hotel with a rooftop pool and free shuttle to Tsim Sha Tsui', HI['harbour-plaza-8-degrees']),
         days={9: day_imgs(D['hong-kong'][:3], AI['senado-square'][:1], AI['a-ma-temple'][:1]), 10: day_imgs(AI['madame-tussauds'][1:5], D['hong-kong'][2:3]), 11: day_imgs(AI['macau-tour'][1:6], D['hong-kong'][4:5]), 12: day_imgs(AI['ocean-park'][1:6], D['hong-kong'][6:7]), 13: day_imgs(D['hong-kong'][3:6])},
         bullets={9: ('Onward to Hong Kong', ['Breakfast and check out in Kuala Lumpur', 'Flight from Kuala Lumpur to Hong Kong, booked separately and not included', 'Coach transfer from Hong Kong International Airport to your hotel', 'Rest of the day free in Kowloon', 'Optional: Senado Square, Hac Sa Beach and A-Ma Temple in Macau']),
                  10: ('Madame Tussauds on The Peak', ['Breakfast at the hotel', 'Coach transfer to Madame Tussauds Hong Kong at The Peak', 'Themed zones with wax figures of film stars, athletes and world leaders', 'Evening free in Hong Kong']),
                  11: ('Macau for the day', ['Breakfast, then private transfer to the ferry terminal', 'Ferry transfer across to Macau and coach transfer into the city', 'Macau Tower, the Ruins of St Paul\u2019s, Na Tcha Temple and the old city walls', 'See the Lotus Statue before heading back', 'Ferry transfer and private transfer back to your Hong Kong hotel']),
                  12: ('Ocean Park Hong Kong', ['Breakfast at the hotel', 'Private transfer to Ocean Park Hong Kong', 'One day pass across seven zones, with the park cable car between the Waterfront and the Summit', 'Giant pandas, the Grand Aquarium and the rides on the Summit']),
                  13: ('Departure', ['Breakfast and check out', 'Private transfer to Hong Kong International Airport for your journey home'])},
         activities=[('Madame Tussauds Hong Kong', 10, False, 'madame-tussauds', 'Entry to the wax museum at The Peak Tower, with Bruce Lee, Bollywood stars, K pop idols and world leaders across eleven themed zones.'),
                     ('Macau sightseeing tour', 11, False, 'macau-tour', 'A day across the water to Macau for the 338 metre Macau Tower, the baroque facade of the Ruins of St Paul\u2019s, Na Tcha Temple, the city walls and the golden Lotus Statue.'),
                     ('Ocean Park Hong Kong', 12, False, 'ocean-park', 'A one day pass to the marine theme park on the south side of the island, with giant pandas, the Grand Aquarium, the cable car and roller coasters on the Summit.'),
                     ('Senado Square', 9, True, 'senado-square', 'Macau\u2019s wave patterned main square, ringed by pastel Portuguese buildings and the start of the walk up to the Ruins of St Paul\u2019s.'),
                     ('Hac Sa Beach', 9, True, 'hac-sa-beach', 'The black sand beach on Coloane island at Macau\u2019s southern tip, with a quiet promenade and seafood restaurants.'),
                     ('A-Ma Temple', 9, True, 'a-ma-temple', 'Macau\u2019s oldest temple, dating from 1488 and dedicated to the sea goddess Mazu, with prayer halls climbing the hillside.')],
         program=('Hong Kong', 'Four nights in Kowloon to close the trip, with The Peak, a full day in Macau and Ocean Park before the flight home.')),
]
MEALS = {1: 'Arrival', 2: 'B, L', 3: 'B, D', **{d: 'B' for d in range(4, 14)}}


def js_str(s):
    return "'" + s.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n") + "'"


def stop_js(s):
    bullets = []
    for d in sorted(s['bullets']):
        title, lines = s['bullets'][d]
        bullets.append(f"    `${{DAY_MARK}}Day {d} · {title}`")
        bullets += [f'    {js_str(l)}' for l in lines]
    acts_js = ',\n'.join(f"  {{\n    name: {js_str(n)},\n    day: {d},\n    optional: {'true' if o else 'false'},\n    image: {js_str(AI[sl][0])},\n    description: {js_str(desc)}\n  }}" for n, d, o, sl, desc in s['activities'])
    sub = f"  subtitle: {js_str(s['subtitle'])},\n" if s.get('subtitle') else ''
    day_imgs_js = ',\n'.join(f'    {d}: {img_js(v)}' for d, v in sorted(s['days'].items()))
    return (f"{{\n  letter: '{s['letter']}',\n  name: {js_str(s['name'])},\n{sub}  dayLabel: '{s['dayLabel']}',\n  images: {img_js(s['images'])},\n  dayImages: {{\n{day_imgs_js}\n  }},\n  bullets: [\n" + ',\n'.join(bullets) + f"\n  ],\n  accommodation: {{\n    name: {js_str(s['hotel'][0])},\n    description: {js_str(s['hotel'][1])},\n    images: {img_js(s['hotel'][2])}\n  }},\n  activities: [\n{acts_js}\n  ],\n  program: {{\n    name: {js_str(s['program'][0])},\n    description: {js_str(s['program'][1])},\n    image: {js_str(s['images'][0])}\n  }}\n}}")


glance_days = []
for s in stops:
    for d in sorted(s['bullets']):
        title, lines = s['bullets'][d]
        hotel = 'Departure' if d == 13 else s['hotel'][0].split(',')[0]
        glance_days.append(f"    {{ title: {js_str(f'Day {d}: {title} ({MEALS[d]})')}, text: {js_str(chr(10).join(lines))}, hotel: {js_str(hotel)}, highlights: {img_js([l for l in lines if not l.startswith('Optional')][:3])} }}")

price = round(raw['price_per_adult'] * 0.95)
TITLE = 'Thailand, Singapore, Malaysia & Hong Kong'
included = 'Included: 12 nights in 3 star hotels with daily breakfast; lunch on Coral Island and dinner on the Chao Phraya cruise; 27 private and shared transfers including the Macau ferry; Coral Island, Bangkok temples, Night Safari, Universal Studios, Kuala Lumpur city tour, Genting Highlands and Batu Caves, Madame Tussauds, Macau tour and Ocean Park; 24/7 support.'
not_included = 'Not included: international flights; the flights from Bangkok to Singapore and from Kuala Lumpur to Hong Kong; visa charges; travel insurance; meals not listed; optional experiences; personal expenses.'

STOPS_JS = ', '.join(stop_js(s) for s in stops)
GLANCE_JS = ',\n'.join(glance_days)
data = f"""// {TITLE} for the Hi Tours trip page template. Facts from the source itinerary, all copy written fresh, INR pricing.
const BASE = '/tours/{SLUG}';
const HERO = f => `${{BASE}}/hero/${{f}}`;
const DEST = f => `${{BASE}}/destinations/${{f}}`;
const HOT = f => `${{BASE}}/hotels/${{f}}`;
const A = f => `${{BASE}}/activities/${{f}}`;
const DAY_MARK = '__day__';

const heroGallery = {img_js(hero)};
const cardImages = [heroGallery[0], heroGallery[1], heroGallery[2], heroGallery[3]];

const stops = [{STOPS_JS}];

const detail = {{
  slug: '{SLUG}',
  ctaHref: '/l/thailand/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: {js_str(TITLE)},
  alt: 'Marina Bay Sands and the Merlion at sunset, Singapore',
  days: '13 days / 12 nights',
  stations: '5 stops',
  transport: 'Private and shared transfers, speedboat, cable car and ferry',
  tag: 'Family',
  tags: ['Family', 'Culture'],
  price: {price},
  routeLabel: 'This holiday takes you to',
  routeCities: ['Pattaya', 'Bangkok', 'Singapore', 'Kuala Lumpur', 'Genting Highlands', 'Hong Kong', 'Macau'],
  stats: {{ days: 13, cities: 5, hotels: 5, activities: 10, transfers: 27 }},
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['10 experiences', 'Activities'],
    ['27 transfers', 'Transport'],
    ['14 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {{
    name: 'Ananya Iyer',
    image: '/team/asia-2.webp',
    role: 'Thailand expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Four countries in thirteen days sounds hectic. It is not, because every stop has at least one free evening built in.',
    quoteMore: 'Book the two internal flights early, Bangkok to Singapore and Kuala Lumpur to Hong Kong, as morning departures. Ask us to add the Alcazar show in Pattaya, it is the best value evening on the trip.',
    more: 'Read more',
    less: 'Read less'
  }}
}};

const route = {{ stops }};

const glance = {{
  h2: 'Tour summary',
  short: 'Thirteen days across four countries: beach time in Pattaya, temples and a dinner cruise in Bangkok, the Night Safari and Universal Studios in Singapore, Petronas and Genting from Kuala Lumpur, then The Peak, Macau and Ocean Park in Hong Kong.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: {js_str(included)},
  intro2: {js_str(not_included)},
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
{GLANCE_JS}
  ],
  outro: {js_str(not_included)}
}};

const crumbs = [
  {{ label: 'Destinations', href: '/reiseziele/' }},
  {{ label: 'Asia', href: '#' }},
  {{ label: 'Thailand', href: '/asien/thailand' }},
  {{ label: detail.title }}
];

export const {CAMEL}BySlug = {{ [detail.slug]: {{ detail, route, glance, crumbs }} }};

export const {CAMEL}Product = {{
  slug: detail.slug,
  href: '/asien/' + detail.slug,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 13,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 10,
  transfers: 27,
  meals: 14,
  price: detail.price,
  images: cardImages
}};
"""
open(f'/app/frontend/src/tours/{CAMEL}Data.js', 'w').write(data)
with open(f'{IMP}/image_sources.csv', 'w', newline='') as f:
    w = csv.writer(f)
    w.writerow(['file', 'original_url', 'section', 'name', 'shutterstock_id', 'size'])
    w.writerows(sources)
print('price', price, '| hero', len(hero), '| hotels', {k: len(v) for k, v in HI.items()}, '| activities', {k: len(v) for k, v in AI.items()})
print('dash check:', bool(re.search(r'[—–]| - ', re.sub(r"'/tours/[^']*'", '', data))))
