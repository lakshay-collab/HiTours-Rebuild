// Sweden Northern Lights Safari: Luleå, Kiruna and Abisko. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('xw337880hspscrhtm7ezubrhxhzs_shutterstock_2053235654.jpg'),
  img('kosd8xns7x7r7eryh1qwllyukedw_shutterstock_1517191469.jpg'),
  img('7icim47y81sid6g5a73xo12gz320_shutterstock_1092977711.jpg'),
  img('pmf3cryl6qo7tdts11v2dv3v8b0q_shutterstock_1113921812.jpg'),
  img('iaj18rd8o196ru5f7ayo0hm2iosv_shutterstock_2041773053.jpg'),
  img('yhyyp5ybeblx2qq2cmuowzgbej8v_shutterstock_1896883903.jpg'),
  img('c1x8uee6s7ecpsiu56fx9dxyti1j_shutterstock_1518000098.jpg'),
  img('4dq9ay5lrrzcd4vzk6gebeekscgt_shutterstock_1504345343.jpg'),
  img('9w9ul0b8vssex06n0qr1rono0f67_shutterstock_201392054.jpg'),
  img('l0a31sglr9aeqfz7tjdc5s7c5w7o_shutterstock_1200235720.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('xw337880hspscrhtm7ezubrhxhzs_shutterstock_2053235654.jpg'),
  img('kosd8xns7x7r7eryh1qwllyukedw_shutterstock_1517191469.jpg'),
  img('7icim47y81sid6g5a73xo12gz320_shutterstock_1092977711.jpg'),
  img('pmf3cryl6qo7tdts11v2dv3v8b0q_shutterstock_1113921812.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Brändön Lodge',
    dayLabel: 'Day 1 to 3',
    images: [
      img('xw337880hspscrhtm7ezubrhxhzs_shutterstock_2053235654.jpg'),
      img('6a8eyc25290s9y5b7pni4hqnrxvs_shutterstock_1643019955.jpg'),
      img('kosd8xns7x7r7eryh1qwllyukedw_shutterstock_1517191469.jpg'),
      img('9w9ul0b8vssex06n0qr1rono0f67_shutterstock_201392054.jpg')
    ],
    dayImages: {
      1: [
        img('xw337880hspscrhtm7ezubrhxhzs_shutterstock_2053235654.jpg'),
        img('6a8eyc25290s9y5b7pni4hqnrxvs_shutterstock_1643019955.jpg'),
        img('kosd8xns7x7r7eryh1qwllyukedw_shutterstock_1517191469.jpg'),
        img('9w9ul0b8vssex06n0qr1rono0f67_shutterstock_201392054.jpg')
      ],
      2: [
        img('xw337880hspscrhtm7ezubrhxhzs_shutterstock_2053235654.jpg'),
        img('6a8eyc25290s9y5b7pni4hqnrxvs_shutterstock_1643019955.jpg'),
        img('kosd8xns7x7r7eryh1qwllyukedw_shutterstock_1517191469.jpg'),
        img('9w9ul0b8vssex06n0qr1rono0f67_shutterstock_201392054.jpg')
      ],
      3: [
        img('xw337880hspscrhtm7ezubrhxhzs_shutterstock_2053235654.jpg'),
        img('6a8eyc25290s9y5b7pni4hqnrxvs_shutterstock_1643019955.jpg'),
        img('kosd8xns7x7r7eryh1qwllyukedw_shutterstock_1517191469.jpg'),
        img('9w9ul0b8vssex06n0qr1rono0f67_shutterstock_201392054.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Luleå`,
      'Arrival at Luleå airport and private transfer to Brändön Lodge',
      'Check in to your cabin on the frozen shore',
      `${DAY_MARK}Day 2 · Husky safari and dinner on the ice`,
      'Breakfast, then a husky safari across the sea ice',
      'Dinner cooked over a fire on the ice',
      `${DAY_MARK}Day 3 · Northern lights safari`,
      'Breakfast and a free day at the lodge',
      'Evening safari onto the ice in search of the aurora'
    ],
    accommodation: {
      name: 'Brändön Lodge, Luleå',
      description: '3 nights · Breakfast · Standard room · 3★ · Cabins on the shore of the frozen Bothnian Sea',
      images: [
      img('4dq9ay5lrrzcd4vzk6gebeekscgt_shutterstock_1504345343.jpg'),
      img('xw337880hspscrhtm7ezubrhxhzs_shutterstock_2053235654.jpg'),
      img('6a8eyc25290s9y5b7pni4hqnrxvs_shutterstock_1643019955.jpg'),
      img('kosd8xns7x7r7eryh1qwllyukedw_shutterstock_1517191469.jpg'),
      img('9w9ul0b8vssex06n0qr1rono0f67_shutterstock_201392054.jpg'),
      img('7icim47y81sid6g5a73xo12gz320_shutterstock_1092977711.jpg')
    ]
    },
    activities: [
      {
        name: 'Husky safari and dinner on the ice',
        day: 2,
        optional: false,
        image: img('xw337880hspscrhtm7ezubrhxhzs_shutterstock_2053235654.jpg'),
        description: 'Drive a husky team across the frozen sea, then dinner cooked over a fire on the ice.'
      },
      {
        name: 'Northern lights safari',
        day: 3,
        optional: false,
        image: img('6a8eyc25290s9y5b7pni4hqnrxvs_shutterstock_1643019955.jpg'),
        description: 'An evening on snowmobile sledges out onto the sea ice away from every light.'
      }
    ],
    program: {
      name: 'Brändön Lodge',
      description: 'Three nights at Brändön Lodge for a husky safari, dinner on the ice and a northern lights safari.',
      image: img('xw337880hspscrhtm7ezubrhxhzs_shutterstock_2053235654.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kiruna',
    dayLabel: 'Day 4',
    images: [
      img('7icim47y81sid6g5a73xo12gz320_shutterstock_1092977711.jpg'),
      img('5f4ycqz7ho5c7otw649vvu0v1kjs_shutterstock_1575980860.jpg'),
      img('pmf3cryl6qo7tdts11v2dv3v8b0q_shutterstock_1113921812.jpg'),
      img('uvwsj7qslom5mf2ocrx659gf7gko_shutterstock_723656929.jpg')
    ],
    dayImages: {
      4: [
        img('xw337880hspscrhtm7ezubrhxhzs_shutterstock_2053235654.jpg'),
        img('6a8eyc25290s9y5b7pni4hqnrxvs_shutterstock_1643019955.jpg'),
        img('kosd8xns7x7r7eryh1qwllyukedw_shutterstock_1517191469.jpg'),
        img('9w9ul0b8vssex06n0qr1rono0f67_shutterstock_201392054.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Train to Kiruna`,
      'Breakfast and check out',
      'Train north to Kiruna and Camp Ripan',
      'Optional: the Aurora Spa'
    ],
    accommodation: {
      name: 'Camp Ripan, Kiruna',
      description: '1 night · Breakfast · Standard room · 3★ · Resort with Aurora Spa in Kiruna',
      images: [
      img('5f4ycqz7ho5c7otw649vvu0v1kjs_shutterstock_1575980860.jpg'),
      img('pmf3cryl6qo7tdts11v2dv3v8b0q_shutterstock_1113921812.jpg'),
      img('uvwsj7qslom5mf2ocrx659gf7gko_shutterstock_723656929.jpg'),
      img('iaj18rd8o196ru5f7ayo0hm2iosv_shutterstock_2041773053.jpg'),
      img('l0a31sglr9aeqfz7tjdc5s7c5w7o_shutterstock_1200235720.jpg'),
      img('yhyyp5ybeblx2qq2cmuowzgbej8v_shutterstock_1896883903.jpg')
    ]
    },
    activities: [
      {
        name: 'Optional: Aurora Spa',
        day: 4,
        optional: true,
        image: img('xw337880hspscrhtm7ezubrhxhzs_shutterstock_2053235654.jpg'),
        description: 'Outdoor hot pools under the Arctic sky.'
      }
    ],
    program: {
      name: 'Kiruna',
      description: 'North by train to Kiruna and a night at Camp Ripan with its outdoor Aurora Spa.',
      image: img('7icim47y81sid6g5a73xo12gz320_shutterstock_1092977711.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Abisko',
    dayLabel: 'Day 5',
    images: [
      img('iaj18rd8o196ru5f7ayo0hm2iosv_shutterstock_2041773053.jpg'),
      img('l0a31sglr9aeqfz7tjdc5s7c5w7o_shutterstock_1200235720.jpg'),
      img('yhyyp5ybeblx2qq2cmuowzgbej8v_shutterstock_1896883903.jpg'),
      img('472por4t5ygdzc6rwu86uuqbvr88_shutterstock_365993996.jpg')
    ],
    dayImages: {
      5: [
        img('xw337880hspscrhtm7ezubrhxhzs_shutterstock_2053235654.jpg'),
        img('6a8eyc25290s9y5b7pni4hqnrxvs_shutterstock_1643019955.jpg'),
        img('kosd8xns7x7r7eryh1qwllyukedw_shutterstock_1517191469.jpg'),
        img('9w9ul0b8vssex06n0qr1rono0f67_shutterstock_201392054.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Abisko`,
      'Breakfast and check out',
      'Train to Abisko in the national park',
      'Optional: the Aurora Sky Station'
    ],
    accommodation: {
      name: 'Abisko mountain lodge, Abisko',
      description: '1 night · Breakfast · Standard room · 3★ · Lodge in the national park',
      images: [
      img('472por4t5ygdzc6rwu86uuqbvr88_shutterstock_365993996.jpg'),
      img('c1x8uee6s7ecpsiu56fx9dxyti1j_shutterstock_1518000098.jpg'),
      img('uoui27h5xobaw75ln54ilx0qm2ki_shutterstock_556209544.jpg')
    ]
    },
    activities: [
      {
        name: 'Optional: Aurora Sky Station',
        day: 5,
        optional: true,
        image: img('xw337880hspscrhtm7ezubrhxhzs_shutterstock_2053235654.jpg'),
        description: 'The chairlift up Mount Nuolja to the Aurora Sky Station.'
      }
    ],
    program: {
      name: 'Abisko',
      description: 'A night in Abisko, the clearest-sky aurora spot in the Nordics.',
      image: img('iaj18rd8o196ru5f7ayo0hm2iosv_shutterstock_2041773053.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Icehotel',
    dayLabel: 'Day 6 to 7',
    images: [
      img('c1x8uee6s7ecpsiu56fx9dxyti1j_shutterstock_1518000098.jpg'),
      img('uoui27h5xobaw75ln54ilx0qm2ki_shutterstock_556209544.jpg'),
      img('4dq9ay5lrrzcd4vzk6gebeekscgt_shutterstock_1504345343.jpg'),
      img('c1x8uee6s7ecpsiu56fx9dxyti1j_shutterstock_1518000098.jpg')
    ],
    dayImages: {
      6: [
        img('xw337880hspscrhtm7ezubrhxhzs_shutterstock_2053235654.jpg'),
        img('6a8eyc25290s9y5b7pni4hqnrxvs_shutterstock_1643019955.jpg'),
        img('kosd8xns7x7r7eryh1qwllyukedw_shutterstock_1517191469.jpg'),
        img('9w9ul0b8vssex06n0qr1rono0f67_shutterstock_201392054.jpg')
      ],
      7: [
        img('xw337880hspscrhtm7ezubrhxhzs_shutterstock_2053235654.jpg'),
        img('6a8eyc25290s9y5b7pni4hqnrxvs_shutterstock_1643019955.jpg'),
        img('kosd8xns7x7r7eryh1qwllyukedw_shutterstock_1517191469.jpg'),
        img('9w9ul0b8vssex06n0qr1rono0f67_shutterstock_201392054.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · The Icehotel`,
      'Breakfast and check out',
      'Transfer to Jukkasjärvi and the Icehotel',
      'A night in a room of ice',
      `${DAY_MARK}Day 7 · Departure from Kiruna`,
      'Hot drinks and breakfast after your ice night',
      'Transfer to Kiruna airport for your flight home'
    ],
    accommodation: {
      name: 'Icehotel, Jukkasjärvi',
      description: '1 night · Breakfast · Standard room · 3★ · A night in the original Icehotel',
      images: [
      img('6a8eyc25290s9y5b7pni4hqnrxvs_shutterstock_1643019955.jpg'),
      img('kosd8xns7x7r7eryh1qwllyukedw_shutterstock_1517191469.jpg'),
      img('9w9ul0b8vssex06n0qr1rono0f67_shutterstock_201392054.jpg'),
      img('7icim47y81sid6g5a73xo12gz320_shutterstock_1092977711.jpg'),
      img('5f4ycqz7ho5c7otw649vvu0v1kjs_shutterstock_1575980860.jpg'),
      img('pmf3cryl6qo7tdts11v2dv3v8b0q_shutterstock_1113921812.jpg')
    ]
    },
    activities: [
      {
        name: 'Icehotel night',
        day: 6,
        optional: false,
        image: img('xw337880hspscrhtm7ezubrhxhzs_shutterstock_2053235654.jpg'),
        description: 'Sleep in an art suite of ice and snow at minus five, with a sauna and hot lingonberry juice in the morning.'
      }
    ],
    program: {
      name: 'Icehotel',
      description: 'A night in a room carved from ice before your flight from Kiruna.',
      image: img('c1x8uee6s7ecpsiu56fx9dxyti1j_shutterstock_1518000098.jpg')
    }
  }
];

const detail = {
  slug: 'sweden-northern-lights-safari-lulea-kiruna-abisko',
  ctaHref: '/l/sweden/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Sweden Northern Lights Safari: Luleå, Kiruna and Abisko',
  alt: 'Northern lights over the frozen sea at Brändön near Luleå',
  days: '7 days / 6 nights',
  stations: '4 stops',
  transport: 'Airport transfers and trains Luleå to Kiruna and Abisko',
  tag: 'Northern Lights',
  tags: ['Northern Lights', 'Adventure', 'Winter'],
  price: 103820,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Luleå', 'Kiruna', 'Abisko', 'Jukkasjärvi'],
  stats: { days: 7, cities: 4, hotels: 4, activities: 5, transfers: 5 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['5 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Elsa',
    image: '/experts/riya.webp',
    role: 'Sweden expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Swedish Lapland is the aurora trip for people who want the wild version: huskies, ice and very few other travellers.',
    quoteMore: 'Abisko sits in a rain shadow and has the clearest skies in the Nordics. If you only have one night to chase the lights, make it that one.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A week in Swedish Lapland built round the aurora: huskies and dinner on the frozen sea at Brändön, a northern lights safari, Camp Ripan in Kiruna, a night in Abisko and a final night in the Icehotel.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: all transfers and rail or ferry journeys as listed; sightseeing and cruises as listed with tickets where stated; daily breakfast.',
  intro2: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are quoted as a class and named on confirmation.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Luleå (Arrival)', text: 'Arrival at Luleå airport and private transfer to Brändön Lodge\nCheck in to your cabin on the frozen shore', hotel: 'Brändön Lodge', highlights: ['Arrival at Luleå airport and private transfer to Brändön Lodge', 'Check in to your cabin on the frozen shore'] },
    { title: 'Day 2: Husky safari and dinner on the ice (B, D)', text: 'Breakfast, then a husky safari across the sea ice\nDinner cooked over a fire on the ice', hotel: 'Brändön Lodge', highlights: ['Breakfast, then a husky safari across the sea ice', 'Dinner cooked over a fire on the ice'] },
    { title: 'Day 3: Northern lights safari (B)', text: 'Breakfast and a free day at the lodge\nEvening safari onto the ice in search of the aurora', hotel: 'Brändön Lodge', highlights: ['Breakfast and a free day at the lodge', 'Evening safari onto the ice in search of the aurora'] },
    { title: 'Day 4: Train to Kiruna (B)', text: 'Breakfast and check out\nTrain north to Kiruna and Camp Ripan\nOptional: the Aurora Spa', hotel: 'Camp Ripan', highlights: ['Breakfast and check out', 'Train north to Kiruna and Camp Ripan', 'Optional: the Aurora Spa'] },
    { title: 'Day 5: Abisko (B)', text: 'Breakfast and check out\nTrain to Abisko in the national park\nOptional: the Aurora Sky Station', hotel: 'Abisko mountain lodge', highlights: ['Breakfast and check out', 'Train to Abisko in the national park', 'Optional: the Aurora Sky Station'] },
    { title: 'Day 6: The Icehotel (B)', text: 'Breakfast and check out\nTransfer to Jukkasjärvi and the Icehotel\nA night in a room of ice', hotel: 'Icehotel', highlights: ['Breakfast and check out', 'Transfer to Jukkasjärvi and the Icehotel', 'A night in a room of ice'] },
    { title: 'Day 7: Departure from Kiruna (B)', text: 'Hot drinks and breakfast after your ice night\nTransfer to Kiruna airport for your flight home', hotel: 'Departure', highlights: ['Hot drinks and breakfast after your ice night', 'Transfer to Kiruna airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are quoted as a class and named on confirmation.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Europe', href: '/europe' },
  { label: 'Sweden', href: '/europe/sweden' },
  { label: detail.title }
];

export const swedenNorthernLightsSafariBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const swedenNorthernLightsSafariProduct = {
  slug: detail.slug,
  places: ['Luleå', 'Kiruna', 'Abisko', 'Jukkasjärvi'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 5,
  transfers: 5,
  meals: 7,
  price: detail.price,
  images: cardImages
};
