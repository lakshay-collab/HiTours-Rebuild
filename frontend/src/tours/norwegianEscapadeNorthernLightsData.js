// Norwegian Escapade: Fjords and Northern Lights. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
  img('2sqxkzvwd8oezvjr0tj00lxqs4xb_shutterstock_574920763.jpg'),
  img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg'),
  img('b2s092g38ovdvcgv9wxa8u2cpp35_shutterstock_234045358.jpg'),
  img('o3foa9gjr1pw0091p9hxdnzp9bdk_shutterstock_737227516.jpg'),
  img('wvmhfp7buu3v6f67733fws7bhdev_shutterstock_521834434.jpg'),
  img('ja2q6wd8j469isi5hvjl8y84eksp_shutterstock_1741016771.jpg'),
  img('dfsrhlwsic87rba2ec9crsr21fqv_shutterstock_1028413972.jpg'),
  img('zbspcsgm6m5afsz8yhkvlgdblony_shutterstock_240355108.jpg'),
  img('0kaiil793tkjczdx28mh961ibe87_shutterstock_357890156.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
  img('2sqxkzvwd8oezvjr0tj00lxqs4xb_shutterstock_574920763.jpg'),
  img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg'),
  img('b2s092g38ovdvcgv9wxa8u2cpp35_shutterstock_234045358.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Oslo',
    dayLabel: 'Day 1 to 2',
    images: [
      img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
      img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
      img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg'),
      img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg')
    ],
    dayImages: {
      1: [
        img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
        img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg'),
        img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg')
      ],
      2: [
        img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
        img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg'),
        img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Oslo`,
      'Arrival at the airport and private transfer to your hotel',
      'Check in and the rest of the day at leisure',
      `${DAY_MARK}Day 2 · Oslo with the Oslo Pass`,
      'Breakfast, then the ferry to the Bygdøy museums',
      'Vigeland Park and the Opera House roof',
      'The evening free in Aker Brygge'
    ],
    accommodation: {
      name: 'Oslo city hotel, Oslo',
      description: '2 nights · Breakfast · Standard room · 3★ · Central hotel with the Oslo Pass included for your free day',
      images: [
        img('4hzn2djiynpfadey8qsksq03xald_shutterstock_2284654923.jpg'),
        img('kk2bdh6uml9utqoqq8067af1exqf_shutterstock_1476737957%20(2).jpg'),
        img('ub1am4mlbpxyn13hnn9p0jed76b5_shutterstock_1861975831%20(1).jpg'),
        img('s080bhe6kd2zqrrkkywn1ohokcmm_shutterstock_713063371%20(2).jpg'),
        img('vlthk5esgh3yiu6wbqmi0rtpldoi_shutterstock_529626991%20(1).jpg'),
        img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg')
      ]
    },
    activities: [
      {
        name: 'Oslo Pass day',
        day: 2,
        optional: false,
        image: img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        description: 'Free entry to the Fram, Kon-Tiki and Viking Ship museums on Bygdøy, Vigeland Park and the city ferries, all on one pass.'
      }
    ],
    program: {
      name: 'Oslo',
      description: 'Two nights in the capital with an Oslo Pass for the museums, ferries and the Opera House.',
      image: img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Bergen',
    dayLabel: 'Day 3 to 4',
    images: [
      img('2jl0pmyg6uxim7bv0qtkzregfpp9_shutterstock_755058535.jpg'),
      img('2sqxkzvwd8oezvjr0tj00lxqs4xb_shutterstock_574920763.jpg'),
      img('0kaiil793tkjczdx28mh961ibe87_shutterstock_357890156.jpg'),
      img('zyilm9qq260d6u1rm9fq0lt3ezvw_shutterstock_312358982.jpg')
    ],
    dayImages: {
      3: [
        img('2jl0pmyg6uxim7bv0qtkzregfpp9_shutterstock_755058535.jpg'),
        img('2sqxkzvwd8oezvjr0tj00lxqs4xb_shutterstock_574920763.jpg'),
        img('0kaiil793tkjczdx28mh961ibe87_shutterstock_357890156.jpg'),
        img('zyilm9qq260d6u1rm9fq0lt3ezvw_shutterstock_312358982.jpg')
      ],
      4: [
        img('2jl0pmyg6uxim7bv0qtkzregfpp9_shutterstock_755058535.jpg'),
        img('2sqxkzvwd8oezvjr0tj00lxqs4xb_shutterstock_574920763.jpg'),
        img('0kaiil793tkjczdx28mh961ibe87_shutterstock_357890156.jpg'),
        img('zyilm9qq260d6u1rm9fq0lt3ezvw_shutterstock_312358982.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Norway in a Nutshell to Bergen`,
      'Breakfast and an early check out',
      'Bergen line to Myrdal and the Flåm Railway down',
      'Nærøyfjord ferry and the Stalheim coach',
      'Train into Bergen for the night',
      `${DAY_MARK}Day 4 · Bergen and the Mostraumen cruise`,
      'Breakfast, then three hours on the Osterfjord',
      'The afternoon free for Bryggen and the fish market'
    ],
    accommodation: {
      name: 'Bergen city hotel, Bergen',
      description: '2 nights · Breakfast · Standard room · 3★ · Hotel within walking distance of Bryggen',
      images: [
        img('o3foa9gjr1pw0091p9hxdnzp9bdk_shutterstock_737227516.jpg'),
        img('lhrxnajg0bnweyzs1ec3ml0r5wrd_shutterstock_205089337.jpg'),
        img('yw3zpcri0kcqrog688ilmp09em92_shutterstock_205982242.jpg'),
        img('ja2q6wd8j469isi5hvjl8y84eksp_shutterstock_1741016771.jpg'),
        img('dp61y4mfdrkmzf3sgey7grlfqlef_shutterstock_1239376453.jpg'),
        img('yegd14kes1i2oonnxhtvk4m2tsac_shutterstock_366817250.jpg')
      ]
    },
    activities: [
      {
        name: 'Norway in a Nutshell to Bergen',
        day: 3,
        optional: false,
        image: img('2jl0pmyg6uxim7bv0qtkzregfpp9_shutterstock_755058535.jpg'),
        description: 'Bergen line, Flåm Railway, Nærøyfjord ferry and the Stalheim coach in one unforgettable day of travelling.'
      },
      {
        name: 'Mostraumen fjord cruise',
        day: 4,
        optional: false,
        image: img('2sqxkzvwd8oezvjr0tj00lxqs4xb_shutterstock_574920763.jpg'),
        description: 'Three hours up the Osterfjord from Bergen harbour to the tidal rapids and waterfalls at Mostraumen.'
      }
    ],
    program: {
      name: 'Bergen',
      description: 'The Norway in a Nutshell route west by train, railway and fjord ferry, then a cruise to the Mostraumen rapids.',
      image: img('2jl0pmyg6uxim7bv0qtkzregfpp9_shutterstock_755058535.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Tromsø',
    dayLabel: 'Day 5 to 8',
    images: [
      img('5a74z8igkplq54pijog9od4hitlo_shutterstock_471957197.jpg'),
      img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg'),
      img('o3foa9gjr1pw0091p9hxdnzp9bdk_shutterstock_737227516.jpg'),
      img('lhrxnajg0bnweyzs1ec3ml0r5wrd_shutterstock_205089337.jpg')
    ],
    dayImages: {
      5: [
        img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
        img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg'),
        img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg')
      ],
      6: [
        img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
        img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg'),
        img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg')
      ],
      7: [
        img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
        img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg'),
        img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg')
      ],
      8: [
        img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
        img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg'),
        img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Fly north to Tromsø`,
      'Breakfast and transfer to Bergen airport',
      'Flight to Tromsø and transfer to your hotel',
      'The evening free under the Arctic sky',
      `${DAY_MARK}Day 6 · Reindeer and the northern lights`,
      'Breakfast, then an afternoon at a Sami reindeer camp',
      'Sled ride and stories in the lavvu',
      'Evening aurora chase by minibus',
      `${DAY_MARK}Day 7 · A free day in Tromsø`,
      'Breakfast, then the day yours',
      'Optional: the Arctic Cathedral and the Fjellheisen cable car',
      'Optional: a second aurora chase',
      `${DAY_MARK}Day 8 · Fly to Oslo and depart`,
      'Breakfast and check out',
      'Flight to Oslo to connect with your flight home'
    ],
    accommodation: {
      name: 'Tromsø city hotel, Tromsø',
      description: '3 nights · Breakfast · Standard room · 3★ · Central hotel in the northern lights capital',
      images: [
        img('zbspcsgm6m5afsz8yhkvlgdblony_shutterstock_240355108.jpg'),
        img('eydp90sld1vxxzhmmkgz6bo1lf2w_shutterstock_1895074444.jpg'),
        img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
        img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg'),
        img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg')
      ]
    },
    activities: [
      {
        name: 'Reindeer sledding and Sami culture',
        day: 6,
        optional: false,
        image: img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        description: 'An afternoon at a Sami camp with reindeer feeding, a sled ride and stories around the fire in the lavvu tent.'
      },
      {
        name: 'Northern lights chase',
        day: 6,
        optional: false,
        image: img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
        description: 'A small-group evening hunt for clear skies by minibus, with warm suits, a campfire and a guide who photographs the lights for you.'
      },
      {
        name: 'Optional: Fjellheisen cable car',
        day: 7,
        optional: true,
        image: img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg'),
        description: 'The cable car up Storsteinen for the view over Tromsø island, the bridge and the mountains.'
      }
    ],
    program: {
      name: 'Tromsø',
      description: 'Three nights above the Arctic Circle: reindeer sledding with the Sami, an aurora chase and a free day for the Arctic Cathedral and cable car.',
      image: img('5a74z8igkplq54pijog9od4hitlo_shutterstock_471957197.jpg')
    }
  }
];

const detail = {
  slug: 'norwegian-escapade-fjords-and-northern-lights',
  ctaHref: '/l/norway/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Norwegian Escapade: Fjords and Northern Lights',
  alt: 'Green northern lights over a snow-covered fjord outside Tromsø',
  days: '8 days / 7 nights',
  stations: '3 stops',
  transport: 'Airport transfers, the Norway in a Nutshell rail and fjord route, and flights Bergen to Tromsø and Tromsø to Oslo',
  tag: 'Northern Lights',
  tags: ['Northern Lights', 'Nature', 'Honeymoon'],
  price: 213750,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Oslo', 'Bergen', 'Tromsø'],
  stats: { days: 8, cities: 3, hotels: 3, activities: 6, transfers: 7 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['7 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ingrid',
    image: '/experts/riya.webp',
    role: 'Norway expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'For the northern lights you need three things: darkness, a clear sky and patience. Tromsø gives you the first two; we build in the third.',
    quoteMore: 'Book the aurora chase for your first night in the north, not the last. If the sky stays cloudy, most operators let you join again free of charge.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days from the capital to the Arctic: Oslo with a city pass, the Norway in a Nutshell route to Bergen and a fjord cruise, then three nights in Tromsø for reindeer sledding and a guided northern lights chase.',
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
    { title: 'Day 1: Arrival in Oslo (Arrival)', text: 'Arrival at the airport and private transfer to your hotel\nCheck in and the rest of the day at leisure', hotel: 'Oslo city hotel', highlights: ['Arrival at the airport and private transfer to your hotel', 'Check in and the rest of the day at leisure'] },
    { title: 'Day 2: Oslo with the Oslo Pass (B)', text: 'Breakfast, then the ferry to the Bygdøy museums\nVigeland Park and the Opera House roof\nThe evening free in Aker Brygge', hotel: 'Oslo city hotel', highlights: ['Breakfast, then the ferry to the Bygdøy museums', 'Vigeland Park and the Opera House roof', 'The evening free in Aker Brygge'] },
    { title: 'Day 3: Norway in a Nutshell to Bergen (B)', text: 'Breakfast and an early check out\nBergen line to Myrdal and the Flåm Railway down\nNærøyfjord ferry and the Stalheim coach\nTrain into Bergen for the night', hotel: 'Bergen city hotel', highlights: ['Breakfast and an early check out', 'Bergen line to Myrdal and the Flåm Railway down', 'Nærøyfjord ferry and the Stalheim coach'] },
    { title: 'Day 4: Bergen and the Mostraumen cruise (B)', text: 'Breakfast, then three hours on the Osterfjord\nThe afternoon free for Bryggen and the fish market', hotel: 'Bergen city hotel', highlights: ['Breakfast, then three hours on the Osterfjord', 'The afternoon free for Bryggen and the fish market'] },
    { title: 'Day 5: Fly north to Tromsø (B)', text: 'Breakfast and transfer to Bergen airport\nFlight to Tromsø and transfer to your hotel\nThe evening free under the Arctic sky', hotel: 'Tromsø city hotel', highlights: ['Breakfast and transfer to Bergen airport', 'Flight to Tromsø and transfer to your hotel', 'The evening free under the Arctic sky'] },
    { title: 'Day 6: Reindeer and the northern lights (B)', text: 'Breakfast, then an afternoon at a Sami reindeer camp\nSled ride and stories in the lavvu\nEvening aurora chase by minibus', hotel: 'Tromsø city hotel', highlights: ['Breakfast, then an afternoon at a Sami reindeer camp', 'Sled ride and stories in the lavvu', 'Evening aurora chase by minibus'] },
    { title: 'Day 7: A free day in Tromsø (B)', text: 'Breakfast, then the day yours\nOptional: the Arctic Cathedral and the Fjellheisen cable car\nOptional: a second aurora chase', hotel: 'Tromsø city hotel', highlights: ['Breakfast, then the day yours', 'Optional: the Arctic Cathedral and the Fjellheisen cable car', 'Optional: a second aurora chase'] },
    { title: 'Day 8: Fly to Oslo and depart (B)', text: 'Breakfast and check out\nFlight to Oslo to connect with your flight home', hotel: 'Departure', highlights: ['Breakfast and check out', 'Flight to Oslo to connect with your flight home'] }
  ],
  outro: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are quoted as a class and named on confirmation.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Europe', href: '/europe' },
  { label: 'Norway', href: '/europe/norway' },
  { label: detail.title }
];

export const norwegianEscapadeNorthernLightsBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const norwegianEscapadeNorthernLightsProduct = {
  slug: detail.slug,
  places: ['Oslo', 'Bergen', 'Tromsø'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 6,
  transfers: 7,
  meals: 7,
  price: detail.price,
  images: cardImages
};
