// Saigon and the Delta Break. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
  img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
  img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
  img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg'),
  img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
  img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
  img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg'),
  img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
  img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
  img('o3s5ddj3fn5qait83kv3nh7svc0p_shutterstock_2312652627.jpg'),
  img('4v6uzks4tncmsj994n52g9qwwzii_notr.webp')
];

const stops = [
  {
    letter: 'A',
    name: 'Ho Chi Minh City',
    dayLabel: 'Day 1 to 5',
    images: [
      img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
      img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
      img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
      img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg')
    ],
    dayImages: {
      1: [
        img('o3s5ddj3fn5qait83kv3nh7svc0p_shutterstock_2312652627.jpg'),
        img('4v6uzks4tncmsj994n52g9qwwzii_notr.webp'),
        img('f1dbl8hvclmsfb1jc8fob8ztpxuk_1467880098_5397869098_f0ce8370ed_o.jpg'),
        img('edv5z4jl7qnqqv3sn3jzh2droay4_1484035778_1-saigon-central-post-office-saigon-central-post-office.jpg')
      ],
      2: [
        img('vwsw0i1iub615jrlp8wyibkg4mmh_shutterstock_1035848284.jpg'),
        img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
        img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
        img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg')
      ],
      3: [
        img('38ft2d9t2l6ai0ktyxllrhdbncvc_shutterstock_429912322.jpg'),
        img('2fqc9nmqifyv07bhi7n7gqf3cxhl_shutterstock_690459592.jpg'),
        img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
        img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg')
      ],
      4: [
        img('wefyte71ipd6xp8scxmv0hsna1qs_1484035784_maxresdefault.jpg'),
        img('ismbrdjwl3hxuru0el0m36axenve_1598961746_shutterstock_730199131.jpg'),
        img('r0lxtxmfzjsz6xcki0dz70w93ezt_18457897792_86a04df17d_o.jpg'),
        img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg')
      ],
      5: [
        img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
        img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
        img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
        img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and Saigon city tour`,
      'Arrival at Tan Son Nhat and transfer to your hotel',
      'A half day of the city with a guide',
      'The palace, the cathedral and the war remnants museum',
      'Check in and the evening free',
      `${DAY_MARK}Day 2 · Mekong Delta`,
      'Breakfast, then south into the delta',
      'A boat through the coconut creeks at My Tho',
      'A sampan ride under the palms',
      'The coconut candy workshops, then back to the city',
      `${DAY_MARK}Day 3 · Cu Chi tunnels`,
      'Breakfast, then north west to Cu Chi',
      'The tunnels in a small group with a guide',
      'The trapdoors, the kitchens and the shafts',
      'Afternoon free in the city',
      `${DAY_MARK}Day 4 · A free day in Saigon`,
      'Breakfast, then a free day in Saigon',
      'Optional: a cooking class or the Cao Dai temple',
      'Optional: Saigon square and the market stalls',
      `${DAY_MARK}Day 5 · Departure from Saigon`,
      'Breakfast at the hotel and check out',
      'Private transfer to Tan Son Nhat for your flight home'
    ],
    accommodation: {
      name: 'Cap Town Hotel, Ho Chi Minh',
      description: '4 nights · Breakfast and dinner · Standard room · 3★ · Small hotel in District 1, close to the market lanes',
      images: [
        img('v3r70yumd9oix321y3dedc9k034j_492412384.jpg'),
        img('7sdctznou6wldszxhp0djhhhnze2_208440539.jpg'),
        img('udfzc6af25eclyv7x15gvybcla9m_30352783.jpg'),
        img('qsuqjc0wchle7h4v9959opts8khm_208440615.jpg'),
        img('iz7e3padv2gzjeirxxqp5wp82alz_492388583.jpg'),
        img('cf9ukw2tk6py8kuyl2v7nyr0wzb7_208440529.jpg')
      ]
    },
    activities: [
      {
        name: 'Saigon half day city tour',
        day: 1,
        optional: false,
        image: img('o3s5ddj3fn5qait83kv3nh7svc0p_shutterstock_2312652627.jpg'),
        description: 'The Reunification Palace, the old post office and Notre Dame cathedral, then the war remnants museum and the Ben Thanh market.'
      },
      {
        name: 'Mekong Delta full day tour',
        day: 2,
        optional: false,
        image: img('vwsw0i1iub615jrlp8wyibkg4mmh_shutterstock_1035848284.jpg'),
        description: 'South to My Tho for a boat into the coconut creeks, a sampan through the palms, and the workshops where they make coconut candy.'
      },
      {
        name: 'Cu Chi tunnels in a small group',
        day: 3,
        optional: false,
        image: img('38ft2d9t2l6ai0ktyxllrhdbncvc_shutterstock_429912322.jpg'),
        description: 'The tunnel network north west of the city in a small group, with the trapdoors, the kitchens and a crawl through the shafts.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'Four nights in District 1 with the city, a full day in the Mekong Delta, the Cu Chi tunnels and a day of your own.',
      image: img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg')
    }
  }
];

const detail = {
  slug: 'saigon-and-the-delta-break',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Saigon and the Delta Break',
  alt: 'Floating market boats loaded with fruit in the Mekong Delta',
  days: '5 days / 4 nights',
  stations: '1 stops',
  transport: 'Private transfers and guided day tours from the city',
  tag: 'Short break',
  tags: ['Short break', 'Culture'],
  price: 42750,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ho Chi Minh City', 'Mekong Delta', 'Cu Chi'],
  stats: { days: 5, cities: 1, hotels: 1, activities: 3, transfers: 5 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['5 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'One hotel, four nights, three days out. The easiest way to see the south without moving your bags.',
    quoteMore: 'Take the small group Cu Chi tour rather than the coach. You get into the tunnels while they are still empty.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A short southern break: four nights in District 1 in Saigon with a guided half day of the city on arrival, a full day in the Mekong Delta, the Cu Chi tunnels in a small group, and a free day before the flight home.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights with breakfast and dinner daily; private transfers throughout; a half day Saigon city tour; a full day Mekong Delta tour; a small group Cu Chi tunnels tour.',
  intro2: 'Not included: international flights; Vietnam visa fees; lunches; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and Saigon city tour (Arrival)', text: 'Arrival at Tan Son Nhat and transfer to your hotel\nA half day of the city with a guide\nThe palace, the cathedral and the war remnants museum\nCheck in and the evening free', hotel: 'Cap Town Hotel', highlights: ['Arrival at Tan Son Nhat and transfer to your hotel', 'A half day of the city with a guide', 'The palace, the cathedral and the war remnants museum'] },
    { title: 'Day 2: Mekong Delta (B, D)', text: 'Breakfast, then south into the delta\nA boat through the coconut creeks at My Tho\nA sampan ride under the palms\nThe coconut candy workshops, then back to the city', hotel: 'Cap Town Hotel', highlights: ['Breakfast, then south into the delta', 'A boat through the coconut creeks at My Tho', 'A sampan ride under the palms'] },
    { title: 'Day 3: Cu Chi tunnels (B, D)', text: 'Breakfast, then north west to Cu Chi\nThe tunnels in a small group with a guide\nThe trapdoors, the kitchens and the shafts\nAfternoon free in the city', hotel: 'Cap Town Hotel', highlights: ['Breakfast, then north west to Cu Chi', 'The tunnels in a small group with a guide', 'The trapdoors, the kitchens and the shafts'] },
    { title: 'Day 4: A free day in Saigon (B, D)', text: 'Breakfast, then a free day in Saigon\nOptional: a cooking class or the Cao Dai temple\nOptional: Saigon square and the market stalls', hotel: 'Cap Town Hotel', highlights: ['Breakfast, then a free day in Saigon', 'Optional: a cooking class or the Cao Dai temple', 'Optional: Saigon square and the market stalls'] },
    { title: 'Day 5: Departure from Saigon (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Tan Son Nhat for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Tan Son Nhat for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; lunches; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const saigonAndTheDeltaBreakBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const saigonAndTheDeltaBreakProduct = {
  slug: detail.slug,
  places: ['Ho Chi Minh City', 'Mekong Delta', 'Cu Chi'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 3,
  transfers: 5,
  meals: 8,
  price: detail.price,
  images: cardImages
};
