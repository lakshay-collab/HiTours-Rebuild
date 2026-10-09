// Best of Tokyo and Hokkaido. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg'),
  img('bl6hzbwn09nocqbartnghh0ns788_shutterstock_2450448573.jpg'),
  img('udkn4h8at26lrvvwwmlaxguh16hf_shutterstock_1836078037.jpg'),
  img('u6n0y1mulym4sf5kbk9ouwqw2s4b_shutterstock_2414469733.jpg'),
  img('a74yrec3cxa5xj70wfrgwnxkyusd_shutterstock_1666322071.jpg'),
  img('i86oqelkptgqhizjkzsit6l08qjk_shutterstock_2313811545.jpg'),
  img('t70do4sx3jrtcq2v146hmuwx11x4_shutterstock_1201440004.jpg'),
  img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg'),
  img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg'),
  img('yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('u6n0y1mulym4sf5kbk9ouwqw2s4b_shutterstock_2414469733.jpg'),
  img('9gxo0w9zfmmbmjg8895gp4h3leqm_shutterstock_1966867324.jpg'),
  img('y3k997q6h24jz8lkh6kr76hgje4r_290901465_1393431314483525_1026574750672344637_n.jpg'),
  img('5xd8jsc66zh1d436rfkeaxxd31x4_shutterstock_707441656.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji and Disneyland',
    dayLabel: 'Day 1 to 4',
    images: [
      img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg'),
      img('1yv1a968ghyiwiwbsbwvzfu388l0_shutterstock_2300479567.jpg'),
      img('9gxo0w9zfmmbmjg8895gp4h3leqm_shutterstock_1966867324.jpg'),
      img('udkn4h8at26lrvvwwmlaxguh16hf_shutterstock_1836078037.jpg')
    ],
    dayImages: {
      1: [
        img('y3k997q6h24jz8lkh6kr76hgje4r_290901465_1393431314483525_1026574750672344637_n.jpg'),
        img('5xd8jsc66zh1d436rfkeaxxd31x4_shutterstock_707441656.jpg'),
        img('l07uhnch6008sp7nqwjxjeitr51s_top_01.jpg'),
        img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg')
      ],
      2: [
        img('oj5eocvwd5au1vpfuazquva3pcc9_shutterstock_1524921077.jpg'),
        img('kcoy8gk8ex5maofxb4mqnkm4psfx_shutterstock_2280133521.jpg'),
        img('iau3aw776fn443su99n2scmo27vl_25899482056_b1e61a167c_k.jpg'),
        img('0au3urvu530f5lbontv6ju088ggy_1619590602_shutterstock_1729078399.jpg')
      ],
      3: [
        img('bh78i8vib0rq4wewvyqt58nk746i_shutterstock_1023211282.jpg'),
        img('zhi5cd01p7wgj7gjtizf3oh8apdu_1616592423_shutterstock_312911786.jpg'),
        img('wxdd3dbvxrlns2e1fs0v9ncrpsyd_16707700517_0fa00ad224_5k.jpg'),
        img('mq1b6y8xt0nbhdf5ntp9hisjpp76_6922_01.jpg')
      ],
      4: [
        img('ao7v7y8hbcokyqpnc5q5vhmsfa0f_mainL_01%20(1).jpg'),
        img('8l3nfuzgvhuh0eyewnb0gav1t7w8_1617351605_mickey-mause-832112_1920.jpg'),
        img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg'),
        img('1yv1a968ghyiwiwbsbwvzfu388l0_shutterstock_2300479567.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Tokyo`,
      'Arrival at Narita or Haneda and transfer to your hotel',
      'Check in at your hotel by the palace gardens',
      'Rest of the day free at your own pace',
      'Optional: an evening walk through Ginza',
      `${DAY_MARK}Day 2 · Tokyo city tour`,
      'Breakfast, then a full day coach tour of the city',
      'Meiji shrine and the Imperial Palace gardens',
      'Lunch included on the tour',
      'Asakusa and the Senso-ji temple lanes',
      `${DAY_MARK}Day 3 · Mount Fuji and Hakone`,
      'Breakfast, then out of the city towards Mount Fuji',
      'The fifth station on the mountain, weather permitting',
      'A cruise on Lake Ashi',
      'The Hakone ropeway over the Owakudani vents',
      `${DAY_MARK}Day 4 · Tokyo Disneyland`,
      'Early breakfast, then across to Tokyo Disneyland',
      'Admission tickets included for the full day',
      'Evening free back in the city'
    ],
    accommodation: {
      name: 'The Peninsula Tokyo, Tokyo',
      description: '4 nights · Breakfast · Standard room · 5★ · Five star hotel facing the Imperial Palace gardens in Marunouchi',
      images: [
        img('k04o9ibu90w0besooztiuw8a8st4_the-peninsula-tokyo.jpg'),
        img('c078euznzntnjvng1kmpqqi0yp8w_633aeabf729f953360424929_the-peninsula-tokyo-five-star-hotel-japan-pool.jpeg'),
        img('39s05fng6ly4zwvzszecfe4wsg9w_The-Peninsula-Tokyo-005510-01-The-Lobby-Table-Set-up.jpg'),
        img('je2pii8dosbs1eb3x49tsosxa8u9_3k%20barcelona11%20(15).jpg'),
        img('tutayvn2ivjpsx52cborj9adjzf3_3k%20barcelona14%20(13).jpg'),
        img('0q3dtorv83hnjo5p43tibwj541sq_3k%20barcelona12%20(15).jpg'),
        img('nywnd74rm9mxamcpm0xijp3cg7d9_3k%20barcelona06%20(16).jpg'),
        img('dk0dre1p4i3qy17kujeecu2ysple_3k%20barcelona09%20(16).jpg'),
        img('r1s6s6ssy7pf24rcgo6ol4acfj60_430976725.jpg'),
        img('c5cplbgc4iakduy9mhyxoulruc4w_peninsula-tokyo-4.png'),
        img('taehmcv31cd1chqbt12al77xtaih_The-Peninsula-Tokyo_2018_The-Peninsula-Tokyo_2018_The-Peninsula-Tokyo---Deluxe-Suite-Bathroom.webp'),
        img('o0w886tra7u1kdab8ndtgit11rwk_3k%20barcelona16%20(12).jpg'),
        img('kdfuyzzsnwh4vbqjq910i2bvvc44_3k%20barcelona10%20(16).jpg'),
        img('462zz6imgqvo5n4ruohysvd2g1wv_3k%20barcelona19%20(10).jpg'),
        img('mqyhf8gtdvbqp1m8fmbc9p43zpyd_3k%20barcelona08%20(16).jpg')
      ]
    },
    activities: [
      {
        name: 'Tokyo city tour with lunch',
        day: 2,
        optional: false,
        image: img('oj5eocvwd5au1vpfuazquva3pcc9_shutterstock_1524921077.jpg'),
        description: 'A full day by coach from the LOVE statue in Shinjuku through Meiji shrine, the Imperial Palace gardens and Asakusa, with lunch included.'
      },
      {
        name: 'Mount Fuji and Hakone tour',
        day: 3,
        optional: false,
        image: img('bh78i8vib0rq4wewvyqt58nk746i_shutterstock_1023211282.jpg'),
        description: 'The fifth station on Mount Fuji, then Lake Ashi and the Hakone ropeway over the sulphur vents of Owakudani.'
      },
      {
        name: 'Tokyo Disneyland',
        day: 4,
        optional: false,
        image: img('ao7v7y8hbcokyqpnc5q5vhmsfa0f_mainL_01%20(1).jpg'),
        description: 'A full day at Tokyo Disneyland with your admission tickets included, so you can be at the gates when the park opens.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Four nights at a five star hotel by the palace gardens, with a city day, Mount Fuji with Hakone and a day at Disneyland.',
      image: img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Sapporo',
    subtitle: 'Sapporo to Otaru and Lake Toya',
    dayLabel: 'Day 5 to 9',
    images: [
      img('i86oqelkptgqhizjkzsit6l08qjk_shutterstock_2313811545.jpg'),
      img('bl6hzbwn09nocqbartnghh0ns788_shutterstock_2450448573.jpg'),
      img('u6n0y1mulym4sf5kbk9ouwqw2s4b_shutterstock_2414469733.jpg')
    ],
    dayImages: {
      5: [
        img('q9t6dbhvhygkulj7d53yztgvl6xq_dl.beatsnoop.com-3000-HMjTiLrQ9o.jpg'),
        img('7g0qi3v84ajj03zgezyqydy174nu_dl.beatsnoop.com-3000-meIahPrHLR.jpg'),
        img('h9v8le8re7n01jdrrdcyesexm9h4_Cover-The-Legendary-History-of-Snow-Royal-Ice-Cream-in-Hokkaido-2.jpg'),
        img('i86oqelkptgqhizjkzsit6l08qjk_shutterstock_2313811545.jpg')
      ],
      6: [
        img('onc76owdvms0360xfhvm8um5ql4a_dl.beatsnoop.com-3000-jhX5rHcJVk.jpg'),
        img('8xhvd0bfa3x0mcf4wjrwb7vyxh9x_Hokkaido_Jingu.jpg'),
        img('v9dfmry79xm7v64jsrwx21pjv8ab_1ba905cf-Sapporo-TV-Tower.jpg'),
        img('gogi2pryi3cw9b6s7tv2cjhdh3vb_hill-of-the-buddha-tadao-ando-ar.jpg')
      ],
      7: [
        img('z5swzbio3vehzimno0zsd1kdne38_dl.beatsnoop.com-3000-e8dxbAwRVZ-2.jpg'),
        img('uw6twx0p15ll0k5m9e3mbh6nznce_Hoheikyo%20Hot%20Spring%20Hokkaido.png'),
        img('jtk6dx4p3gtalpg1athf2su5lkdz_26380528716_7d0e63d579_b.jpg'),
        img('o7ia95as0iws6ktj1erg6cu33y5e_download%20-%202024-07-25T133910.673.jpg')
      ],
      8: [
        img('z02u2jgr2blv7aty3agnwxzn8lcs_dl.beatsnoop.com-3000-MNJ4AV9ayn.jpg'),
        img('nc5k5rj2mg0jrdsizlykugl2ri4g_126A2596-scaled-2.jpg'),
        img('r3cxkpuw6m7yt4r1ysc4x10gjfw9_shikotsu-toya_jigokudani_fu6ybo.jpeg'),
        img('gwqb51g3h6zlbirq5l1grlgv7yux_dl.beatsnoop.com-3000-1GzdPmVpD8.jpg')
      ],
      9: [
        img('i86oqelkptgqhizjkzsit6l08qjk_shutterstock_2313811545.jpg'),
        img('bl6hzbwn09nocqbartnghh0ns788_shutterstock_2450448573.jpg'),
        img('u6n0y1mulym4sf5kbk9ouwqw2s4b_shutterstock_2414469733.jpg'),
        img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Flight to Hokkaido`,
      'Breakfast and check out, then the flight to Hokkaido',
      'Transfer into Sapporo and check in',
      'Rest of the day free in the city',
      'Optional: dinner in the Susukino lanes',
      `${DAY_MARK}Day 6 · Sapporo sightseeing`,
      'Breakfast, then a guided day around Sapporo',
      'The clock tower, Odori park and the old government building',
      'The Hokkaido shrine in its woodland',
      'A stop at the Sapporo beer museum',
      `${DAY_MARK}Day 7 · Jozankei and Otaru`,
      'Breakfast, then the hot spring valley at Jozankei',
      'Otaru\'s canal, warehouses and glass workshops',
      'Shiroi Koibito chocolate park',
      'Evening free in Sapporo',
      `${DAY_MARK}Day 8 · Noboribetsu and Lake Toya`,
      'Breakfast, then south to Noboribetsu',
      'The steaming Jigokudani hell valley',
      'Lake Toya, a caldera lake with Mount Usu above it',
      'Back in Sapporo in the evening',
      `${DAY_MARK}Day 9 · Departure from Sapporo`,
      'Breakfast at the hotel and check out',
      'Private transfer to New Chitose Airport for your flight home'
    ],
    accommodation: {
      name: 'Hotel Emion SAPPORO, Sapporo',
      description: '4 nights · Breakfast · Standard room · 3★ · Comfortable hotel in Sapporo, close to the subway',
      images: [
        img('8wwrngw5ma7h9eedip1ez44bxu6m_635648418.jpg'),
        img('dvp5n0sw34c6pqqws73ef4a8riqf_492198903.jpg'),
        img('y4qluetosm4raoteqipql4dmtnd7_492199127.jpg'),
        img('wclk1cc69yeyp3xmlu52itx8lmv3_492198984.jpg'),
        img('6qna2r6s08dqbuwuxup3b9jled93_635648632.jpg')
      ]
    },
    activities: [
      {
        name: 'Sapporo sightseeing tour',
        day: 6,
        optional: false,
        image: img('onc76owdvms0360xfhvm8um5ql4a_dl.beatsnoop.com-3000-jhX5rHcJVk.jpg'),
        description: 'The clock tower, Odori park, the old government building and the Hokkaido shrine, with a stop at the beer museum.'
      },
      {
        name: 'Jozankei, Otaru and Shiroi Koibito park',
        day: 7,
        optional: false,
        image: img('z5swzbio3vehzimno0zsd1kdne38_dl.beatsnoop.com-3000-e8dxbAwRVZ-2.jpg'),
        description: 'The hot spring valley at Jozankei, the canal and glass workshops of Otaru, and the chocolate factory at Shiroi Koibito park.'
      },
      {
        name: 'Noboribetsu and Lake Toya',
        day: 8,
        optional: false,
        image: img('z02u2jgr2blv7aty3agnwxzn8lcs_dl.beatsnoop.com-3000-MNJ4AV9ayn.jpg'),
        description: 'The steaming Jigokudani hell valley at Noboribetsu, then the caldera lake at Toya with Mount Usu above it.'
      }
    ],
    program: {
      name: 'Sapporo',
      description: 'Four nights in the island capital with a city tour, Otaru\'s canal quarter and a day out to the hell valley and Lake Toya.',
      image: img('i86oqelkptgqhizjkzsit6l08qjk_shutterstock_2313811545.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-tokyo-and-hokkaido',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Tokyo and Hokkaido',
  alt: 'Odori park and the Sapporo TV tower, Hokkaido',
  days: '9 days / 8 nights',
  stations: '2 stops',
  transport: 'Domestic flight, private transfers and guided day tours',
  tag: 'Luxury',
  tags: ['Luxury', 'Nature'],
  price: 195742,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Hakone', 'Disneyland', 'Sapporo', 'Otaru', 'Lake Toya'],
  stats: { days: 9, cities: 2, hotels: 2, activities: 6, transfers: 13 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['13 transfers', 'Transport'],
    ['9 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Four nights at the Peninsula and then four in Hokkaido. City polish first, open country second, and only one flight between them.',
    quoteMore: 'Ask for a palace view room at the Peninsula. In Sapporo, keep the evenings for Susukino, the seafood there is the best in the country.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days split between two islands: four nights at a five star hotel by the Imperial Palace gardens with a city tour, Mount Fuji with Hakone and Tokyo Disneyland, then a flight north for four nights in Sapporo with Otaru, the hell valley and Lake Toya.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 8 nights with daily breakfast, including four at The Peninsula Tokyo; the domestic flight to Hokkaido; private airport and city transfers; full day Tokyo city tour with lunch; Mount Fuji and Hakone tour; Tokyo Disneyland tickets; Sapporo sightseeing tour; Jozankei, Otaru and Shiroi Koibito park day tour; Noboribetsu and Lake Toya tour.',
  intro2: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your hotel by the palace gardens\nRest of the day free at your own pace\nOptional: an evening walk through Ginza', hotel: 'The Peninsula Tokyo', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your hotel by the palace gardens', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo city tour (B, L)', text: 'Breakfast, then a full day coach tour of the city\nMeiji shrine and the Imperial Palace gardens\nLunch included on the tour\nAsakusa and the Senso-ji temple lanes', hotel: 'The Peninsula Tokyo', highlights: ['Breakfast, then a full day coach tour of the city', 'Meiji shrine and the Imperial Palace gardens', 'Lunch included on the tour'] },
    { title: 'Day 3: Mount Fuji and Hakone (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nA cruise on Lake Ashi\nThe Hakone ropeway over the Owakudani vents', hotel: 'The Peninsula Tokyo', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'A cruise on Lake Ashi'] },
    { title: 'Day 4: Tokyo Disneyland (B)', text: 'Early breakfast, then across to Tokyo Disneyland\nAdmission tickets included for the full day\nEvening free back in the city', hotel: 'The Peninsula Tokyo', highlights: ['Early breakfast, then across to Tokyo Disneyland', 'Admission tickets included for the full day', 'Evening free back in the city'] },
    { title: 'Day 5: Flight to Hokkaido (B)', text: 'Breakfast and check out, then the flight to Hokkaido\nTransfer into Sapporo and check in\nRest of the day free in the city\nOptional: dinner in the Susukino lanes', hotel: 'Hotel Emion SAPPORO', highlights: ['Breakfast and check out, then the flight to Hokkaido', 'Transfer into Sapporo and check in', 'Rest of the day free in the city'] },
    { title: 'Day 6: Sapporo sightseeing (B)', text: 'Breakfast, then a guided day around Sapporo\nThe clock tower, Odori park and the old government building\nThe Hokkaido shrine in its woodland\nA stop at the Sapporo beer museum', hotel: 'Hotel Emion SAPPORO', highlights: ['Breakfast, then a guided day around Sapporo', 'The clock tower, Odori park and the old government building', 'The Hokkaido shrine in its woodland'] },
    { title: 'Day 7: Jozankei and Otaru (B)', text: 'Breakfast, then the hot spring valley at Jozankei\nOtaru\'s canal, warehouses and glass workshops\nShiroi Koibito chocolate park\nEvening free in Sapporo', hotel: 'Hotel Emion SAPPORO', highlights: ['Breakfast, then the hot spring valley at Jozankei', 'Otaru\'s canal, warehouses and glass workshops', 'Shiroi Koibito chocolate park'] },
    { title: 'Day 8: Noboribetsu and Lake Toya (B)', text: 'Breakfast, then south to Noboribetsu\nThe steaming Jigokudani hell valley\nLake Toya, a caldera lake with Mount Usu above it\nBack in Sapporo in the evening', hotel: 'Hotel Emion SAPPORO', highlights: ['Breakfast, then south to Noboribetsu', 'The steaming Jigokudani hell valley', 'Lake Toya, a caldera lake with Mount Usu above it'] },
    { title: 'Day 9: Departure from Sapporo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to New Chitose Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to New Chitose Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Japan', href: '/asien/japan' },
  { label: detail.title }
];

export const bestOfTokyoAndHokkaidoBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfTokyoAndHokkaidoProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Hakone', 'Disneyland', 'Sapporo', 'Otaru', 'Lake Toya'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 6,
  transfers: 13,
  meals: 9,
  price: detail.price,
  images: cardImages
};
