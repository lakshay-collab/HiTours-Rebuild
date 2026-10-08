"""Generate frontend/src/tours/bestOfPhuketKrabiBangkokData.js from the extracted raw.json."""
import json
import os
import re

RAW = '/app/import/phuket-krabi-bangkok-package/raw.json'
OUT = '/app/frontend/src/tours/bestOfPhuketKrabiBangkokData.js'
PREFIX = 'https://media1.thrillophilia.com/filestore/'
r = json.load(open(RAW))

P = r['dest_gallery']['Phuket']
K = r['dest_gallery']['Krabi']
B = r['dest_gallery']['Bangkok']


def act(match):
    for a in r['activities']:
        if match.lower() in a['name'].lower():
            return a['images']
    raise SystemExit('activity not found: ' + match)


simon, patong, bird = act('Simon Cabaret'), act('Patong Beach'), act('Bird Park')
phiphi, citytour = act('Phi Phi Island Tour from Phuket'), act('Enroute Phuket City Tour')
buddha, oldtown = act('Phuket Big Buddha'), act('Old Phuket Town')
k7 = act('Krabi 7 Island Tour')
cruise, safari = act('Chao Phraya Princess'), act('Safari World Bangkok Tickets')
hotels = {h['name']: h['images'] for h in r['hotels']}


def path(u):
    assert u.startswith(PREFIX), u
    return u[len(PREFIX):]


def js(u):
    return "img('%s')" % path(u)


def jslist(urls, indent=4):
    pad = ' ' * indent
    return '[\n' + ',\n'.join(pad + '  ' + js(u) for u in urls) + '\n' + pad + ']'


hero = [K[1], P[9], B[2], P[10], K[6], B[3], P[8], K[7], B[11], B[7]]

stopA_images = [P[9], P[10], P[8], P[7]]
stopB_images = [K[1], K[6], K[7], K[8]]
stopC_images = [B[2], B[3], B[7], B[11]]

day_images = {
    1: [patong[0], simon[0], P[8], P[1]],
    2: [phiphi[1], phiphi[2], P[2], P[11]],
    3: [buddha[0], oldtown[1], P[4], K[0]],
    4: [k7[1], k7[2], K[6], K[2]],
    5: [cruise[1], cruise[2], B[2], B[3]],
    6: [safari[1], safari[2], B[11], B[9]],
    7: [B[4], B[0], B[7]],
}

bullets = {
    1: ['Arrival at Phuket International Airport and private transfer to your hotel in Patong',
        'Check in, then keep the day free beside Patong beach',
        'Optional: Simon Cabaret, a polished evening show close to the hotel',
        'Optional: a slow beach morning or a family visit to Phuket Bird Park'],
    2: ['Breakfast at the hotel, then shared transfer to the Phuket pier',
        'Speedboat transfer across to the Phi Phi islands for the day',
        'Snorkelling stops, Maya Bay views and swimming time at Khai island',
        'Lunch is included on the tour, island fees are payable locally',
        'Return speedboat and shared transfer to Patong by early evening'],
    3: ['Breakfast, check out and private transfer towards Krabi with stops on the way',
        'The Big Buddha on Nakkerd hill, with island views on a clear morning',
        'Walk the Sino Portuguese shophouse streets of Old Phuket Town',
        'Optional: Samet Nangshe viewpoint, with access fees payable locally',
        'Check in at your Krabi hotel below the limestone cliffs of Ao Nang'],
    4: ['Breakfast, then shared transfer to the Ao Nang speedboat pier',
        'Speedboat transfer out to Chicken island, Koh Poda, Koh Tup and Koh Mor',
        'Snorkel the shallows and see Phra Nang cave before the sun drops',
        'Thai dinner on the sand, then glowing plankton in the dark water',
        'Return shared transfer to your hotel after the night swim'],
    5: ['Breakfast, check out and private transfer to Krabi airport',
        'Optional: flight from Krabi to Bangkok, booked separately and not included',
        'Private transfer from Bangkok airport to your hotel off Sukhumvit',
        'Evening shared transfer to the Chao Phraya Princess dinner cruise',
        'Buffet dinner, live music and lit up temples along the river'],
    6: ['Breakfast, then shared transfer to Safari World on the city edge',
        'Open safari loop past zebras, giraffes, lions and tigers',
        'Marine Park shows through the afternoon, with lunch included',
        'Evening free for the shops and street food near your hotel'],
    7: ['Breakfast and a slow check out at your own pace',
        'Private transfer to Suvarnabhumi Airport for your trip home'],
}

DM = '`${DAY_MARK}Day %d \u00b7 %s`'
titles = {1: 'Arrival in Phuket', 2: 'Phi Phi islands by speedboat', 3: 'Phuket sights, then Krabi',
          4: 'Krabi 7 Islands sunset tour', 5: 'On to Bangkok and a river cruise',
          6: 'Safari World and Marine Park', 7: 'Departure'}


def bullet_block(days, indent=4):
    pad = ' ' * indent
    out = []
    for d in days:
        out.append(pad + '  ' + DM % (d, titles[d]))
        for line in bullets[d]:
            out.append(pad + "  '%s'" % line.replace("'", "\\'"))
    return '[\n' + ',\n'.join(out) + '\n' + pad + ']'


def day_images_block(days, indent=4):
    pad = ' ' * indent
    rows = []
    for d in days:
        rows.append(pad + '  %d: %s' % (d, jslist(day_images[d], indent + 2)))
    return '{\n' + ',\n'.join(rows) + '\n' + pad + '}'


SUGAR = "'/tours/best-of-phuket-krabi-bangkok/hotels/sugar-marina-cliffhanger/%02d.jpg'"
sugar_imgs = '[\n' + ',\n'.join('      ' + SUGAR % i for i in range(1, 7)) + '\n    ]'

activities = {
    'A': [('Phi Phi Islands by Speedboat', 2, 'false', phiphi[0],
           'A full day run out to the Phi Phi group, with snorkelling stops, Maya Bay views and lunch served on the tour.'),
          ('Simon Cabaret Show', 1, 'true', simon[0],
           'Phuket\u2019s best known cabaret, an hour of costumes, live singing and big stage sets. Easy to add on your free first evening.'),
          ('Evening on Patong Beach', 1, 'true', patong[0],
           'Walk the sand as the light goes, then browse the stalls and cafes a street back from the beach front.'),
          ('Phuket Bird Park', 1, 'true', bird[0],
           'A shaded park with macaws, hornbills and crowned cranes, plus short keeper talks. A simple hit with younger children.')],
    'B': [('Phuket Sights on the Way to Krabi', 3, 'false', buddha[1],
           'Break the road trip with the Big Buddha on Nakkerd hill and a walk through the painted shophouse streets of Old Phuket Town.'),
          ('Krabi 7 Islands Sunset Tour', 4, 'false', k7[0],
           'Speedboat hop across seven islands, snorkelling in the shallows, a Thai dinner on the beach and a swim with glowing plankton.')],
    'C': [('Chao Phraya Princess Dinner Cruise', 5, 'false', cruise[0],
           'Two hours on the river with a buffet dinner, live music and lit up views of Wat Arun and the Grand Palace from the water.'),
          ('Safari World and Marine Park', 6, 'false', safari[1],
           'An open safari loop with zebras, giraffes and big cats, then dolphin and sea lion shows at Marine Park, with lunch included.')],
}


def activities_block(letter, indent=4):
    pad = ' ' * indent
    rows = []
    for name, day, opt, image, desc in activities[letter]:
        rows.append(pad + '  {\n' + pad + "    name: '%s',\n" % name.replace("'", "\\'")
                    + pad + '    day: %d,\n' % day
                    + pad + '    optional: %s,\n' % opt
                    + pad + '    image: %s,\n' % js(image)
                    + pad + "    description: '%s'\n" % desc.replace("'", "\\'")
                    + pad + '  }')
    return '[\n' + ',\n'.join(rows) + '\n' + pad + ']'


glance_days = [
    (1, 'Arrival in Phuket', 'Arrival', 'AtEase Phuket Patong'),
    (2, 'Phi Phi islands by speedboat', 'B, L', 'AtEase Phuket Patong'),
    (3, 'Phuket sights, then Krabi', 'B', 'Sugar Marina Hotel Cliffhanger'),
    (4, 'Krabi 7 Islands sunset tour', 'B, D', 'Sugar Marina Hotel Cliffhanger'),
    (5, 'On to Bangkok and a river cruise', 'B, D', 'Royal Benja Hotel'),
    (6, 'Safari World and Marine Park', 'B, L', 'Royal Benja Hotel'),
    (7, 'Departure', 'B', 'Departure'),
]


def glance_block():
    rows = []
    for d, title, code, hotel in glance_days:
        text = '\\n'.join(bullets[d]).replace("'", "\\'")
        hl = ', '.join("'%s'" % x.replace("'", "\\'") for x in bullets[d][:3])
        rows.append("    { title: 'Day %d: %s (%s)', text: '%s', hotel: '%s', highlights: [%s] }"
                    % (d, title, code, text, hotel, hl))
    return '[\n' + ',\n'.join(rows) + '\n  ]'


tpl = """// Best of Phuket, Krabi and Bangkok. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${{p}}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = {hero};
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {{
    letter: 'A',
    name: 'Phuket',
    dayLabel: 'Day 1 to 2',
    images: {a_images},
    dayImages: {a_days},
    bullets: {a_bullets},
    accommodation: {{
      name: 'AtEase Phuket Patong, Phuket',
      description: '2 nights \u00b7 Continental Plan \u00b7 Luxury room \u00b7 5\u2605 \u00b7 A few minutes from Patong beach and the Jungceylon shops',
      images: {a_hotel}
    }},
    activities: {a_acts},
    program: {{
      name: 'Patong base with an island day',
      description: 'Two nights in Patong, with a full day speedboat run to the Phi Phi islands and a free first evening to settle into Phuket.',
      image: {a_prog}
    }}
  }},
  {{
    letter: 'B',
    name: 'Krabi',
    subtitle: 'Phuket \u2192 Krabi',
    dayLabel: 'Day 3 to 4',
    images: {b_images},
    dayImages: {b_days},
    bullets: {b_bullets},
    accommodation: {{
      name: 'Sugar Marina Hotel Cliffhanger, Krabi',
      description: '2 nights \u00b7 Continental Plan \u00b7 Deluxe room \u00b7 3\u2605 \u00b7 Pool deck under the limestone cliffs, short walk to Ao Nang',
      images: {b_hotel}
    }},
    activities: {b_acts},
    program: {{
      name: 'Cliffs, islands and a plankton swim',
      description: 'Sightseeing on the road from Phuket, then a sunset speedboat tour of seven Krabi islands with dinner on the sand and glowing plankton.',
      image: {b_prog}
    }}
  }},
  {{
    letter: 'C',
    name: 'Bangkok',
    dayLabel: 'Day 5 to 7',
    images: {c_images},
    dayImages: {c_days},
    bullets: {c_bullets},
    accommodation: {{
      name: 'Royal Benja Hotel, Bangkok',
      description: '2 nights \u00b7 Continental Plan \u00b7 Super Deluxe room \u00b7 4\u2605 \u00b7 Off Sukhumvit Soi 5, close to the Skytrain and night markets',
      images: {c_hotel}
    }},
    activities: {c_acts},
    program: {{
      name: 'River cruise and Safari World',
      description: 'Two nights in Bangkok built around a Chao Phraya dinner cruise and a full day at Safari World and Marine Park with the family.',
      image: {c_prog}
    }}
  }}
];

const detail = {{
  slug: 'best-of-phuket-krabi-bangkok',
  ctaHref: '/l/thailand/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Phuket, Krabi and Bangkok',
  alt: 'Longtail boat moored below the limestone cliffs of Railay beach in Krabi',
  days: '7 days / 6 nights',
  stations: '3 stops',
  transport: 'Private and shared transfers with speedboat island tours',
  tag: 'Family',
  tags: ['Family', 'Beach'],
  price: 32894,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuket', 'Phi Phi Islands', 'Krabi', 'Bangkok'],
  stats: {{ days: 7, cities: 3, hotels: 3, activities: 5, transfers: 15 }},
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['15 transfers', 'Transport'],
    ['10 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {{
    name: 'Ananya Iyer',
    image: '/team/asia-2.webp',
    role: 'Thailand expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two island days and one city stretch. It is the easiest first Thailand trip for a family with children.',
    quoteMore: 'Book the Krabi to Bangkok flight for late morning so nobody rushes breakfast. Carry baht for the island entry fees, and ask the Krabi hotel for a packed breakfast on the 7 Islands day.',
    more: 'Read more',
    less: 'Read less'
  }}
}};

const route = {{ stops }};

const glance = {{
  h2: 'Tour summary',
  short: 'Seven days across Thailand for a family that wants both beach and city. Two nights in Patong, two under the cliffs of Krabi and two in Bangkok, with speedboat island tours, a river dinner cruise and Safari World.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights in 3 hotels with daily breakfast; Phi Phi islands speedboat tour with lunch; Phuket sightseeing on the road to Krabi; Krabi 7 Islands sunset tour with Thai dinner and plankton swim; Chao Phraya Princess dinner cruise; Safari World and Marine Park with lunch; 15 airport, intercity and sightseeing transfers.',
  intro2: 'Not included: international flights; the Krabi to Bangkok flight; island entry fees; visa charges; travel insurance; meals and expenses not listed above.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: {glance_days},
  outro: 'Not included: international flights; the Krabi to Bangkok flight; island entry fees; visa charges; travel insurance; meals and expenses not listed above.'
}};

const crumbs = [
  {{ label: 'Destinations', href: '/reiseziele/' }},
  {{ label: 'Asia', href: '#' }},
  {{ label: 'Thailand', href: '/asien/thailand' }},
  {{ label: detail.title }}
];

export const bestOfPhuketKrabiBangkokBySlug = {{ [detail.slug]: {{ detail, route, glance, crumbs }} }};

export const bestOfPhuketKrabiBangkokProduct = {{
  slug: detail.slug,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 5,
  transfers: 15,
  meals: 10,
  price: detail.price,
  images: cardImages
}};
"""

out = tpl.format(
    hero=jslist(hero, 0),
    a_images=jslist(stopA_images), a_days=day_images_block([1, 2]), a_bullets=bullet_block([1, 2]),
    a_hotel=jslist(hotels['AtEase Phuket Patong'], 6), a_acts=activities_block('A'), a_prog=js(P[9]),
    b_images=jslist(stopB_images), b_days=day_images_block([3, 4]), b_bullets=bullet_block([3, 4]),
    b_hotel=sugar_imgs, b_acts=activities_block('B'), b_prog=js(K[1]),
    c_images=jslist(stopC_images), c_days=day_images_block([5, 6, 7]), c_bullets=bullet_block([5, 6, 7]),
    c_hotel=jslist(hotels['Royal Benja Hotel'], 6), c_acts=activities_block('C'), c_prog=js(B[2]),
    glance_days=glance_block(),
)
open(OUT, 'w').write(out)
print('written', OUT, len(out.splitlines()), 'lines')

# image sources csv
csv = ['file,original_url,section,name,shutterstock_id']
def sid(u):
    m = re.search(r'shutterstock_(\d+)', u)
    return m.group(1) if m else ''
for i, u in enumerate(hero, 1):
    csv.append('hero-%02d,%s,hero,hero gallery,%s' % (i, u, sid(u)))
for letter, city, imgs in [('A', 'Phuket', stopA_images), ('B', 'Krabi', stopB_images), ('C', 'Bangkok', stopC_images)]:
    for i, u in enumerate(imgs, 1):
        csv.append('%s-dest-%02d,%s,destination,%s,%s' % (letter.lower(), i, u, city, sid(u)))
for name, imgs in hotels.items():
    for i, u in enumerate(imgs, 1):
        csv.append('hotel-%02d,%s,hotel,"%s",%s' % (i, u, name, sid(u)))
for i in range(1, 7):
    csv.append('hotels/sugar-marina-cliffhanger/%02d.jpg,https://www.sugarmarinahotel.com/cliffhanger/,hotel,"Sugar Marina Hotel Cliffhanger (official hotel website, source gallery empty)",' % i)
open('/app/import/phuket-krabi-bangkok-package/image_sources.csv', 'w').write('\n'.join(csv) + '\n')
print('csv rows', len(csv))
