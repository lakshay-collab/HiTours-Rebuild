// Saigon, Phnom Penh and Angkor. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
  img('iaqnbtm5mds71h4u750titpq91uj_shutterstock_1982536544.jpg'),
  img('6n3scmd5rlsnaop1pb6iwv19uv23_shutterstock_601657496.jpg'),
  img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg'),
  img('qkbdpqcsc1zcc6fx3ixjk6d8ddfm_shutterstock_1294346341.jpg'),
  img('1xf3c51dyd41hxizgyq99uie61d9_shutterstock_381559081.jpg'),
  img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
  img('cf1wt5v30jdw97rqmcuvj6ilsdui_shutterstock_1251727690.jpg'),
  img('ynhhbvyz5wx9z88wwhtsk4jb3eee_shutterstock_128239889.jpg'),
  img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('iaqnbtm5mds71h4u750titpq91uj_shutterstock_1982536544.jpg'),
  img('qkbdpqcsc1zcc6fx3ixjk6d8ddfm_shutterstock_1294346341.jpg'),
  img('1xf3c51dyd41hxizgyq99uie61d9_shutterstock_381559081.jpg'),
  img('cf1wt5v30jdw97rqmcuvj6ilsdui_shutterstock_1251727690.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Ho Chi Minh City',
    subtitle: 'Saigon, Cu Chi and the Mekong',
    dayLabel: 'Day 1 to 3',
    images: [
      img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
      img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
      img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
      img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg')
    ],
    dayImages: {
      1: [
        img('w9dkaedmj3e8e5tqumgf7lpv587h_1467883935_1280px-Ben_Thanh_Market.jpg'),
        img('7f8le5eabd17goxjxilb5iglvse2_1467880850_5429069199_2814d210ac_o.jpg'),
        img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
        img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg')
      ],
      2: [
        img('bha5xa67yo8v5fyl3aek5432qz39_shutterstock_1037846602.jpg'),
        img('f1dbl8hvclmsfb1jc8fob8ztpxuk_1467880098_5397869098_f0ce8370ed_o.jpg'),
        img('2fqc9nmqifyv07bhi7n7gqf3cxhl_shutterstock_690459592.jpg'),
        img('g026k1g5paxncu3aear1czkltedu_1469613255_7469930222_08a752c099_o.jpg')
      ],
      3: [
        img('4hlghe88itsu2x2yetdcq4mj42ni_1579700293_shutterstock_1529789570.jpg'),
        img('lvds5da20701ls58hbi447grx3s2_8193351650_d1ff3fd0b7_z.jpg'),
        img('ktw7z5gp3xhl3n59iymqv4ksukb2_Ben_Tre_Turtle_Island.jpg'),
        img('6cupjrsxzkngfv8zrrp9japoty1n_sgn15.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Saigon`,
      'Arrival at Tan Son Nhat and transfer to your hotel',
      'Check in in District 1',
      'Rest of the day free at your own pace',
      'Optional: the rooftop bars on Nguyen Hue',
      `${DAY_MARK}Day 2 · Saigon and the Cu Chi tunnels`,
      'Breakfast, then a half day of the city',
      'The palace, the cathedral and the war remnants museum',
      'North west to Cu Chi for the tunnels',
      'The trapdoors, the kitchens and the shafts',
      `${DAY_MARK}Day 3 · Mekong Delta`,
      'Breakfast, then south into the delta',
      'A boat through the coconut creeks at My Tho',
      'A sampan ride under the palms',
      'The coconut candy workshops, then back to the city'
    ],
    accommodation: {
      name: 'Acnos Grand Hotel, Ho Chi Minh',
      description: '3 nights · Breakfast and dinner · Standard room · 3★ · Hotel in District 1, a short walk from Saigon square',
      images: [
        img('9c6czohyddr8kue9lfsp2zdm7auk_le-duy-grand-hotel-luxury.jpg'),
        img('vl4kbh7kaeeg0i6zfv00ceetq6un_433172382.jpg'),
        img('aliqs0cpgm6bza2gu8pgfpgvw5ip_433172268.jpg'),
        img('48fyfgf3ddjnp4gf7t5t55zksqeh_433172157.jpg'),
        img('16pv5fse6smtiqn4lx3jdl6dgb7f_433172219.jpg'),
        img('cx1iobpvvkv1j7xqzg4f1scx629p_433172188.jpg'),
        img('jsrk671uo0es77ihq2hwfiohyopf_433172255.jpg'),
        img('1hftqtbyg244t45yqqeaqsdargbg_481459315.jpg'),
        img('q4ut388f9hge62qvu9idk0as5r0t_433172214.jpg')
      ]
    },
    activities: [
      {
        name: 'Saigon city tour with the Cu Chi tunnels',
        day: 2,
        optional: false,
        image: img('bha5xa67yo8v5fyl3aek5432qz39_shutterstock_1037846602.jpg'),
        description: 'The Reunification Palace, the cathedral and the war remnants museum, then north west to the tunnel network at Cu Chi.'
      },
      {
        name: 'Mekong Delta day tour',
        day: 3,
        optional: false,
        image: img('4hlghe88itsu2x2yetdcq4mj42ni_1579700293_shutterstock_1529789570.jpg'),
        description: 'South to My Tho for a boat into the coconut creeks, a sampan through the palms, and the workshops where they make coconut candy.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'Three nights in District 1 with the city, the Cu Chi tunnels and a full day in the Mekong Delta.',
      image: img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Phnom Penh',
    dayLabel: 'Day 4 to 5',
    images: [
      img('9g0bhfdj25ox19dxzejb2fge2yut_pexels-monyserei-ra-1697936-12098898.jpg'),
      img('iaqnbtm5mds71h4u750titpq91uj_shutterstock_1982536544.jpg'),
      img('cf1wt5v30jdw97rqmcuvj6ilsdui_shutterstock_1251727690.jpg'),
      img('uq24i5e8zc0u3bofcjhm94tzgi3a_shutterstock_586403648.jpg')
    ],
    dayImages: {
      4: [
        img('hhgs4htrmrkkfvxyy5y0o8b0vzi1_1468412870_6781884529_94f8747f55_o.jpg'),
        img('nijgquo7njqi41teza2lg6a5u8se_Phsar%20Toul%20Tum%20Poung.jpg'),
        img('ved7smrxagbajhzyhsi5ua72swu6_1464592297_ounalom1.PNG'),
        img('rjz7wy9u4gifx2co9m04b1xj2xzr_1468413121_Market_in_Cambodia.jpg')
      ],
      5: [
        img('ldw8opq10movuk9bl0makfptm0t7_shutterstock_265547957.jpg'),
        img('fhqadaegn3avfb8w76ybivw4zh63_1462451212_8686874370_7e550a07fc_o.jpg'),
        img('yhnsv95w6wk5p6k62d12qahs8ut9_1462444879_Silver_pagoda_cambodia.jpg'),
        img('14v30n70bzkabewngyg7u4iy5vvb_1462449203_4893624294_ea20a1f64a_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · On to Phnom Penh`,
      'Breakfast and check out, then on to Cambodia',
      'Check in at the riverside retreat',
      'Rest of the day free at your own pace',
      'Optional: an evening on the riverfront promenade',
      `${DAY_MARK}Day 5 · Phnom Penh city tour`,
      'Breakfast, then a guided day of the capital',
      'The Royal Palace and the Silver Pagoda',
      'The national museum',
      'The Tuol Sleng memorial in the afternoon'
    ],
    accommodation: {
      name: 'The Bale Phnom Penh, Phnom Penh',
      description: '2 nights · Breakfast · Standard room · 5★ · Five star retreat on the Mekong riverbank outside the city',
      images: [
        img('ud5p8zukk0gr9uixrtxqz8st7dmy_115732353.jpg'),
        img('huafh812agvwqdlrjfvm2zm8yxvf_115738355.jpg'),
        img('lri6ofc0lv6wbelsuac3y5x2cfny_115735811.jpg'),
        img('atpos6fq65aw4ifoxlki3beyj3p6_13151349794b30282d3b71d2c173e04f.webp'),
        img('rngybhhvlyixs7ms889cvnw9mpo0_115735756.jpg'),
        img('5b2htjwpyubwjvw7tl00qtc3xisb_274895497.jpg'),
        img('x408xe3gb7twyy9bni0nk0mwxb1q_115738411.jpg'),
        img('sgdeevx1613u8xy9q68u55fofr1c_115729782.jpg'),
        img('gu66rx34bo6j3f1xlr60iwa5mhyf_115729742.jpg'),
        img('ujddjx2w8f6cnlnf23jdf6ps4k8t_115741116.jpg'),
        img('pptt8x412661y44ml9l8dfysef83_2b10760279445e05f348980062ee40b8.webp'),
        img('i854pwq699idy4s6jga40l3m1bbt_115729799.jpg')
      ]
    },
    activities: [
      {
        name: 'Phnom Penh city tour',
        day: 5,
        optional: false,
        image: img('ldw8opq10movuk9bl0makfptm0t7_shutterstock_265547957.jpg'),
        description: 'The Royal Palace and the Silver Pagoda, the national museum, and the Tuol Sleng memorial that records what the Khmer Rouge did here.'
      }
    ],
    program: {
      name: 'Phnom Penh',
      description: 'Two nights at a five star riverside retreat, with a guided day of the palace, the museum and the memorial.',
      image: img('9g0bhfdj25ox19dxzejb2fge2yut_pexels-monyserei-ra-1697936-12098898.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Siem Reap',
    subtitle: 'Tonle Sap and Angkor',
    dayLabel: 'Day 6 to 8',
    images: [
      img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg'),
      img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg'),
      img('6n3scmd5rlsnaop1pb6iwv19uv23_shutterstock_601657496.jpg'),
      img('ynhhbvyz5wx9z88wwhtsk4jb3eee_shutterstock_128239889.jpg')
    ],
    dayImages: {
      6: [
        img('0eeolh4m5vco2tlqhjedbgoybppc_shutterstock_172914194.jpg'),
        img('l0w57t2hz9ihtty4bgs1hvjkskvc_Tonle.jpg'),
        img('1mha8xsmyjpzp75qrrdfsbi12r17_Floating.jpg'),
        img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg')
      ],
      7: [
        img('1i89mdw0hjjxnkzcal9u7ad6845p_shutterstock_559574212.jpg'),
        img('y8n110g2u7oikuzpnvkd5w75si6q_1462522736_15912678764_da2931d075_o.jpg'),
        img('gg7x8uab6ewriuht9ighk7uzlael_1462523244_8147796611_5f3799b751_o.jpg'),
        img('mypd7ebfznu6f6367vtfattqkvj3_1462528175_7519280908_477d0bf15a_o.jpg')
      ],
      8: [
        img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg'),
        img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg'),
        img('6n3scmd5rlsnaop1pb6iwv19uv23_shutterstock_601657496.jpg'),
        img('ynhhbvyz5wx9z88wwhtsk4jb3eee_shutterstock_128239889.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Siem Reap and Tonle Sap`,
      'Breakfast and check out, then north to Siem Reap',
      'Check in and a short rest',
      'A boat out onto the great lake',
      'A floating village built on stilts and pontoons',
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
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Small hotel with a pool, a short ride from the old market',
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
      description: 'North for the last two nights, with the floating villages of Tonle Sap and a full day at Angkor.',
      image: img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg')
    }
  }
];

const detail = {
  slug: 'saigon-phnom-penh-and-angkor',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Saigon, Phnom Penh and Angkor',
  alt: 'Royal Palace spires above the riverfront in Phnom Penh',
  days: '8 days / 7 nights',
  stations: '3 stops',
  transport: 'Flights between the cities, private transfers and guided tours',
  tag: 'Luxury',
  tags: ['Culture', 'Luxury'],
  price: 123500,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ho Chi Minh City', 'Cu Chi', 'Mekong Delta', 'Phnom Penh', 'Siem Reap', 'Tonle Sap', 'Angkor Wat'],
  stats: { days: 8, cities: 3, hotels: 3, activities: 6, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['13 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three cities, two countries and two nights at a five star on the Mekong at Phnom Penh. The capital is usually skipped and it should not be.',
    quoteMore: 'Tuol Sleng is hard going. Keep the afternoon light after it and sit on the riverfront with a coffee.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days through two countries: three nights in Saigon with the city, the Cu Chi tunnels and the Mekong Delta, two at a five star riverside retreat in Phnom Penh with a guided day of the capital, then two in Siem Reap for Tonle Sap and a full day at Angkor.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights with breakfast daily and dinner at the Saigon and Siem Reap hotels, including two at a five star riverside retreat; all flights between the cities; private transfers throughout; a Saigon city tour with the Cu Chi tunnels; a Mekong Delta day tour; a Phnom Penh city tour; a Tonle Sap lake boat ride; an Angkor Wat day tour.',
  intro2: 'Not included: international flights; Vietnam and Cambodia visa fees; lunches; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Saigon (Arrival)', text: 'Arrival at Tan Son Nhat and transfer to your hotel\nCheck in in District 1\nRest of the day free at your own pace\nOptional: the rooftop bars on Nguyen Hue', hotel: 'Acnos Grand Hotel', highlights: ['Arrival at Tan Son Nhat and transfer to your hotel', 'Check in in District 1', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Saigon and the Cu Chi tunnels (B, D)', text: 'Breakfast, then a half day of the city\nThe palace, the cathedral and the war remnants museum\nNorth west to Cu Chi for the tunnels\nThe trapdoors, the kitchens and the shafts', hotel: 'Acnos Grand Hotel', highlights: ['Breakfast, then a half day of the city', 'The palace, the cathedral and the war remnants museum', 'North west to Cu Chi for the tunnels'] },
    { title: 'Day 3: Mekong Delta (B, D)', text: 'Breakfast, then south into the delta\nA boat through the coconut creeks at My Tho\nA sampan ride under the palms\nThe coconut candy workshops, then back to the city', hotel: 'Acnos Grand Hotel', highlights: ['Breakfast, then south into the delta', 'A boat through the coconut creeks at My Tho', 'A sampan ride under the palms'] },
    { title: 'Day 4: On to Phnom Penh (B)', text: 'Breakfast and check out, then on to Cambodia\nCheck in at the riverside retreat\nRest of the day free at your own pace\nOptional: an evening on the riverfront promenade', hotel: 'The Bale Phnom Penh', highlights: ['Breakfast and check out, then on to Cambodia', 'Check in at the riverside retreat', 'Rest of the day free at your own pace'] },
    { title: 'Day 5: Phnom Penh city tour (B)', text: 'Breakfast, then a guided day of the capital\nThe Royal Palace and the Silver Pagoda\nThe national museum\nThe Tuol Sleng memorial in the afternoon', hotel: 'The Bale Phnom Penh', highlights: ['Breakfast, then a guided day of the capital', 'The Royal Palace and the Silver Pagoda', 'The national museum'] },
    { title: 'Day 6: Siem Reap and Tonle Sap (B, D)', text: 'Breakfast and check out, then north to Siem Reap\nCheck in and a short rest\nA boat out onto the great lake\nA floating village built on stilts and pontoons', hotel: 'HARI Residence and Spa Siem Reap', highlights: ['Breakfast and check out, then north to Siem Reap', 'Check in and a short rest', 'A boat out onto the great lake'] },
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

export const saigonPhnomPenhAngkorBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const saigonPhnomPenhAngkorProduct = {
  slug: detail.slug,
  places: ['Ho Chi Minh City', 'Cu Chi', 'Mekong Delta', 'Phnom Penh', 'Siem Reap', 'Tonle Sap', 'Angkor Wat'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 6,
  transfers: 10,
  meals: 13,
  price: detail.price,
  images: cardImages
};
