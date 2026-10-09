// Saigon and Angkor in Eight Days. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
  img('6n3scmd5rlsnaop1pb6iwv19uv23_shutterstock_601657496.jpg'),
  img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg'),
  img('8t8tbzlhfgky047nhali974ytiim_shutterstock_616405904.jpg'),
  img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg'),
  img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg'),
  img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
  img('tiuvxkux663ncun5lwbu02kv3n8i_shutterstock_707816683.jpg'),
  img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
  img('ynhhbvyz5wx9z88wwhtsk4jb3eee_shutterstock_128239889.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('6n3scmd5rlsnaop1pb6iwv19uv23_shutterstock_601657496.jpg'),
  img('8t8tbzlhfgky047nhali974ytiim_shutterstock_616405904.jpg'),
  img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg'),
  img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Ho Chi Minh City',
    subtitle: 'Saigon and Cu Chi',
    dayLabel: 'Day 1 to 4',
    images: [
      img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
      img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
      img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
      img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg')
    ],
    dayImages: {
      1: [
        img('tonnwsasrtd050jxtlekyhfy34mv_1469613803_5967086564_fd29210949_o.jpg'),
        img('yopub1tyxa299n9cmdtc9hhqr4vn_1467884938_15756265548_301c16d1e2_o.jpg'),
        img('n75phneefos5hbnuuc33lg3il0vd_1484035791_city-hall-ho-chi-minh-city.jpg'),
        img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg')
      ],
      2: [
        img('k0iwrtaiemzmywouhcz1remyihfd_shutterstock_175128359.jpg'),
        img('f1dbl8hvclmsfb1jc8fob8ztpxuk_1467880098_5397869098_f0ce8370ed_o.jpg'),
        img('evxpd53708fszmcogueld24ki5be_1467883599_2814329078_1317aa23fe_o.jpg'),
        img('g026k1g5paxncu3aear1czkltedu_1469613255_7469930222_08a752c099_o.jpg')
      ],
      3: [
        img('7c9y0w9lr632pl96udf5l9ek2h9h_shutterstock_690459592.jpg'),
        img('2fqc9nmqifyv07bhi7n7gqf3cxhl_shutterstock_690459592.jpg'),
        img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
        img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg')
      ],
      4: [
        img('h13rreu2ujaeg4sowsf22tain07k_1467884543_Bitexco_Financial_Tower.jpg'),
        img('l091smvq7b63cids4ghsgi4phytf_1598961402_shutterstock_457520230.jpg'),
        img('fx3oyqr68fwk8eob6dgnw6qeb5ol_1598961538_shutterstock_390573640.jpg'),
        img('x1ikdkrzcb1uh896bfnwulzurpj9_1598962036_shutterstock_1096062560.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Saigon`,
      'Arrival at Tan Son Nhat and transfer to your hotel',
      'Check in in District 1',
      'Rest of the day free at your own pace',
      'Optional: the rooftop bars on Nguyen Hue',
      `${DAY_MARK}Day 2 · Saigon city tour`,
      'Breakfast, then a guided day of the city',
      'The Reunification Palace and the old post office',
      'The war remnants museum',
      'Ben Thanh market in the afternoon',
      `${DAY_MARK}Day 3 · Cu Chi tunnels`,
      'Breakfast, then north west to Cu Chi',
      'The tunnels, the trapdoors and the kitchens',
      'A crawl through a widened section of the shafts',
      'Afternoon free in the city',
      `${DAY_MARK}Day 4 · A free day in Saigon`,
      'Breakfast, then a free day in Saigon',
      'Optional: a Mekong Delta day trip',
      'Optional: a cooking class or the Cao Dai temple'
    ],
    accommodation: {
      name: 'Lotus Saigon Hotel, Ho Chi Minh',
      description: '4 nights · Breakfast · Standard room · 3★ · Hotel in District 1, a few streets from the cathedral',
      images: [
        img('5s8dn7ezs17q5dp6xdzgr6h7dw0c_426092368.jpg'),
        img('yyyib4mggodcdn34c01wdb61s9sz_425742511.jpg'),
        img('92n3iwdw7xmx6imuvaxk10wbj3jz_413699896.jpg'),
        img('ufn9atvhpsacg26y9x2rs1smydsn_219964599.jpg'),
        img('odarm9999w4byp1fkpqkx510y73p_219928034.jpg'),
        img('e2tmmdasuatnqvv6zkcm8i3rl8it_419656479.jpg'),
        img('blmwnciyko8bwvjtyz67r0de6w92_419367148.jpg'),
        img('sd419c7u6ev165dv1ks8cy8npai4_421095720.jpg'),
        img('hgbaxgltl6ra7mup77nq8k8w89l9_219962450.jpg'),
        img('gtrd0p5551usdpcf34d7xylnrwvi_219927531.jpg')
      ]
    },
    activities: [
      {
        name: 'Saigon city tour',
        day: 2,
        optional: false,
        image: img('k0iwrtaiemzmywouhcz1remyihfd_shutterstock_175128359.jpg'),
        description: 'The Reunification Palace, the old post office and Notre Dame cathedral, then the war remnants museum and the Ben Thanh market.'
      },
      {
        name: 'Cu Chi tunnels half day tour',
        day: 3,
        optional: false,
        image: img('7c9y0w9lr632pl96udf5l9ek2h9h_shutterstock_690459592.jpg'),
        description: 'The tunnel network north west of the city, with the trapdoors, the kitchens and a crawl through a widened section of the original shafts.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'Four nights in District 1 with a city day, the Cu Chi tunnels and a day of your own.',
      image: img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Siem Reap',
    subtitle: 'Tonle Sap and Angkor',
    dayLabel: 'Day 5 to 8',
    images: [
      img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg'),
      img('6n3scmd5rlsnaop1pb6iwv19uv23_shutterstock_601657496.jpg'),
      img('ynhhbvyz5wx9z88wwhtsk4jb3eee_shutterstock_128239889.jpg'),
      img('tiuvxkux663ncun5lwbu02kv3n8i_shutterstock_707816683.jpg')
    ],
    dayImages: {
      5: [
        img('7z3l0axu6t0slzm4apisyxp4a7es_1462523648_7282141138_deb6a9ba96_o.jpg'),
        img('wtdp1xaizdaqro2i56b8xo3qgt9p_1464768809_a1.PNG'),
        img('6jwqzhsuw3b36a1x9i5reng29zq1_1462527776_Cambodian_Civil_War-era_T-54_or_Type_59.jpg'),
        img('leoqg877sngpe057u7ubp0rl98is_1484034993_Banteay_Kdei__Angkor__Camboya__2013-08-16__DD_13.JPG')
      ],
      6: [
        img('0eeolh4m5vco2tlqhjedbgoybppc_shutterstock_172914194.jpg'),
        img('l0w57t2hz9ihtty4bgs1hvjkskvc_Tonle.jpg'),
        img('1mha8xsmyjpzp75qrrdfsbi12r17_Floating.jpg'),
        img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg')
      ],
      7: [
        img('1i89mdw0hjjxnkzcal9u7ad6845p_shutterstock_559574212.jpg'),
        img('y8n110g2u7oikuzpnvkd5w75si6q_1462522736_15912678764_da2931d075_o.jpg'),
        img('gg7x8uab6ewriuht9ighk7uzlael_1462523244_8147796611_5f3799b751_o.jpg'),
        img('mypd7ebfznu6f6367vtfattqkvj3_1462528175_7519280908_477d0bf15a_o.jpg')
      ],
      8: [
        img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg'),
        img('6n3scmd5rlsnaop1pb6iwv19uv23_shutterstock_601657496.jpg'),
        img('ynhhbvyz5wx9z88wwhtsk4jb3eee_shutterstock_128239889.jpg'),
        img('tiuvxkux663ncun5lwbu02kv3n8i_shutterstock_707816683.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · On to Siem Reap`,
      'Breakfast and check out, then the flight to Cambodia',
      'Check in at Siem Reap',
      'Rest of the day free at your own pace',
      'Optional: the old market and Pub Street',
      `${DAY_MARK}Day 6 · Tonle Sap lake`,
      'Breakfast, then out to the great lake',
      'A boat through a floating village on stilts',
      'Houses, schools and shops on the water',
      'Back in Siem Reap in the afternoon',
      `${DAY_MARK}Day 7 · Angkor Wat`,
      'Early breakfast, then into the Angkor park',
      'Angkor Wat and the Bayon faces at Angkor Thom',
      'The root covered ruins of Ta Prohm',
      'Back at the hotel by evening',
      `${DAY_MARK}Day 8 · Departure from Siem Reap`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'HARI Residence and Spa Siem Reap, Siem Reap',
      description: '3 nights · Breakfast and dinner · Standard room · 3★ · Small hotel with a pool, a short ride from the old market',
      images: [
        img('31ed6uyw36ewbejmdmw3oevnjtb3_3C2A7845%20copy%20(1).jpg'),
        img('1nw9tc4uftb6qs4m79o37cybooce__V0A0690%20copy%20(1).jpg'),
        img('946uwaxujy0tef05mzn15owfna6l__V0A0228%20copy.jpg'),
        img('1n0u2yh1rkix6ek7f26glxqa898s_009%20copy%20(1).jpg'),
        img('wxjg4uilol303hl7tw0nx9uzcfp4_DJI_0290%20(1).jpg'),
        img('447nu4vz3wurg17hdy17sx05a60n__V0A0498.jpg'),
        img('ej2ge86ngndj1omkwpoi31ktapoz__V0A0602%20(1).jpg'),
        img('2yakiv90q6oty76jziy1nicd2mre__V0A9740.jpg'),
        img('bffkbqz6a04c3pfp0qt4szn9wmwg__V0A0594%20(1).jpg'),
        img('qa7v4bwwq5rmppftw5ofvr8x1naj__V0A0619.jpg'),
        img('cki4fowhz1ocp1txlylcfiwjp5ny__V0A9722.jpg'),
        img('rrqj4bdzevrwqee1elwfb4anyfxy__V0A0672%20copy.jpg'),
        img('fx6l3oilx64bvdekjolhgsu9uesi__V0A0166%20copy.jpg'),
        img('2cn6xaa6mu8j32zg1r6als81wx5k__V0A0618.jpg'),
        img('czs09egy7scy9msy2zy9uin8krxa__V0A0679.jpg')
      ]
    },
    activities: [
      {
        name: 'Tonle Sap lake boat ride',
        day: 6,
        optional: false,
        image: img('0eeolh4m5vco2tlqhjedbgoybppc_shutterstock_172914194.jpg'),
        description: 'A boat out onto the great lake, through a floating village of houses, schools and shops built on stilts and pontoons.'
      },
      {
        name: 'Angkor Wat day tour',
        day: 7,
        optional: false,
        image: img('1i89mdw0hjjxnkzcal9u7ad6845p_shutterstock_559574212.jpg'),
        description: 'Angkor Wat itself, the Bayon faces at Angkor Thom and the root covered ruins of Ta Prohm, with a guide for the full day.'
      }
    ],
    program: {
      name: 'Siem Reap',
      description: 'Three nights in Cambodia, with the floating villages of Tonle Sap and a full day among the Angkor temples.',
      image: img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg')
    }
  }
];

const detail = {
  slug: 'saigon-and-angkor-in-eight-days',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Saigon and Angkor in Eight Days',
  alt: 'Angkor Wat towers reflected in the moat at sunrise',
  days: '8 days / 7 nights',
  stations: '2 stops',
  transport: 'A flight between countries, private transfers and guided tours',
  tag: 'Grand tour',
  tags: ['Culture', 'Grand tour'],
  price: 80274,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ho Chi Minh City', 'Cu Chi', 'Siem Reap', 'Tonle Sap', 'Angkor Wat'],
  stats: { days: 8, cities: 2, hotels: 2, activities: 4, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['12 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two countries, two hotels, one flight. Saigon and Angkor are an hour apart by air and nothing like each other.',
    quoteMore: 'Do Angkor Wat at sunrise if your guide will take you. The towers against the first light are worth losing the lie in.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days across two countries: four nights in Saigon with a city tour, the Cu Chi tunnels and a free day, then three in Siem Reap with the floating villages of Tonle Sap and a full day among the Angkor temples.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights with daily breakfast and dinner in Siem Reap; the flight between the two countries; private transfers throughout; a Saigon city tour; the Cu Chi tunnels half day tour; a Tonle Sap lake boat ride; an Angkor Wat day tour.',
  intro2: 'Not included: international flights; Vietnam and Cambodia visa fees; lunches; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Saigon (Arrival)', text: 'Arrival at Tan Son Nhat and transfer to your hotel\nCheck in in District 1\nRest of the day free at your own pace\nOptional: the rooftop bars on Nguyen Hue', hotel: 'Lotus Saigon Hotel', highlights: ['Arrival at Tan Son Nhat and transfer to your hotel', 'Check in in District 1', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Saigon city tour (B)', text: 'Breakfast, then a guided day of the city\nThe Reunification Palace and the old post office\nThe war remnants museum\nBen Thanh market in the afternoon', hotel: 'Lotus Saigon Hotel', highlights: ['Breakfast, then a guided day of the city', 'The Reunification Palace and the old post office', 'The war remnants museum'] },
    { title: 'Day 3: Cu Chi tunnels (B)', text: 'Breakfast, then north west to Cu Chi\nThe tunnels, the trapdoors and the kitchens\nA crawl through a widened section of the shafts\nAfternoon free in the city', hotel: 'Lotus Saigon Hotel', highlights: ['Breakfast, then north west to Cu Chi', 'The tunnels, the trapdoors and the kitchens', 'A crawl through a widened section of the shafts'] },
    { title: 'Day 4: A free day in Saigon (B)', text: 'Breakfast, then a free day in Saigon\nOptional: a Mekong Delta day trip\nOptional: a cooking class or the Cao Dai temple', hotel: 'Lotus Saigon Hotel', highlights: ['Breakfast, then a free day in Saigon', 'Optional: a Mekong Delta day trip', 'Optional: a cooking class or the Cao Dai temple'] },
    { title: 'Day 5: On to Siem Reap (B, D)', text: 'Breakfast and check out, then the flight to Cambodia\nCheck in at Siem Reap\nRest of the day free at your own pace\nOptional: the old market and Pub Street', hotel: 'HARI Residence and Spa Siem Reap', highlights: ['Breakfast and check out, then the flight to Cambodia', 'Check in at Siem Reap', 'Rest of the day free at your own pace'] },
    { title: 'Day 6: Tonle Sap lake (B, D)', text: 'Breakfast, then out to the great lake\nA boat through a floating village on stilts\nHouses, schools and shops on the water\nBack in Siem Reap in the afternoon', hotel: 'HARI Residence and Spa Siem Reap', highlights: ['Breakfast, then out to the great lake', 'A boat through a floating village on stilts', 'Houses, schools and shops on the water'] },
    { title: 'Day 7: Angkor Wat (B, D)', text: 'Early breakfast, then into the Angkor park\nAngkor Wat and the Bayon faces at Angkor Thom\nThe root covered ruins of Ta Prohm\nBack at the hotel by evening', hotel: 'HARI Residence and Spa Siem Reap', highlights: ['Early breakfast, then into the Angkor park', 'Angkor Wat and the Bayon faces at Angkor Thom', 'The root covered ruins of Ta Prohm'] },
    { title: 'Day 8: Departure from Siem Reap (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam and Cambodia visa fees; lunches; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Vietnam', href: '/asien/vietnam' },
  { label: detail.title }
];

export const saigonAndAngkorEightBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const saigonAndAngkorEightProduct = {
  slug: detail.slug,
  places: ['Ho Chi Minh City', 'Cu Chi', 'Siem Reap', 'Tonle Sap', 'Angkor Wat'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 4,
  transfers: 8,
  meals: 12,
  price: detail.price,
  images: cardImages
};
