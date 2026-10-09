// Urban Wonders of Tokyo and Osaka. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg'),
  img('j2yajxhi3hugp224iylhhjo0vdn4_shutterstock_2354853383.jpg'),
  img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg'),
  img('d52y3g1627qkpcuaym0v8w467dir_shutterstock_1075480004.jpg'),
  img('zcclccnpnk2b78cy9usi5x5zdoyk_shutterstock_666197236.jpg'),
  img('pme2kpd6zo6530pi31qoegli5gw5_shutterstock_2390555455.jpg'),
  img('hjvdd18dwrrkfqh5hyjbyf1qy0md_shutterstock_2299917035.jpg'),
  img('kttil6ut49ym2i5xxgnx6cu72osn_shutterstock_630286787.jpg'),
  img('vqjfk14m6s6fxufma6bl6urcehak_gallery-2.jpg'),
  img('lnacm9xp9pgyiylr68qgl6aao0bp_shutterstock_2376751313.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg'),
  img('kcoy8gk8ex5maofxb4mqnkm4psfx_shutterstock_2280133521.jpg'),
  img('iau3aw776fn443su99n2scmo27vl_25899482056_b1e61a167c_k.jpg'),
  img('0au3urvu530f5lbontv6ju088ggy_1619590602_shutterstock_1729078399.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji and Disneyland',
    dayLabel: 'Day 1 to 4',
    images: [
      img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg'),
      img('yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg'),
      img('61izsuekzybkh86q2bvapmbmyrlt_shutterstock_355725083.jpg'),
      img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg')
    ],
    dayImages: {
      1: [
        img('6hzy1swk98chjdiqrq77p05ks1hp_shutterstock_402603553%20(1).jpg'),
        img('dvnb132y05sidy9r0omo9zqe0ram_15849220641_a5a96af87c_o.jpg'),
        img('5d8zp8rm397hfvz02jntd54oueue_8221793202_67e195e47e_o.jpg'),
        img('f2lk3tg5wuhz3cdk1tnn750xqw31_4484_1_1400x1100.jpg')
      ],
      2: [
        img('oj5eocvwd5au1vpfuazquva3pcc9_shutterstock_1524921077.jpg'),
        img('kcoy8gk8ex5maofxb4mqnkm4psfx_shutterstock_2280133521.jpg'),
        img('iau3aw776fn443su99n2scmo27vl_25899482056_b1e61a167c_k.jpg'),
        img('0au3urvu530f5lbontv6ju088ggy_1619590602_shutterstock_1729078399.jpg')
      ],
      3: [
        img('39ndql7vpg0emtn4pc108qs5bzwf_shutterstock_1023211282.jpg'),
        img('mq1b6y8xt0nbhdf5ntp9hisjpp76_6922_01.jpg'),
        img('4ijejmm9p326y1f1f6t762u0izb6_shutterstock_1303030627%20(1).jpg'),
        img('9hdwl7e2hucnek1jhe8l9hwk9s9m_OWAKUDANI%20VALLEY.png')
      ],
      4: [
        img('ao7v7y8hbcokyqpnc5q5vhmsfa0f_mainL_01%20(1).jpg'),
        img('8l3nfuzgvhuh0eyewnb0gav1t7w8_1617351605_mickey-mause-832112_1920.jpg'),
        img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg'),
        img('yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Tokyo`,
      'Arrival at Narita or Haneda and transfer to your hotel',
      'Check in at your Shinjuku hotel',
      'Rest of the day free at your own pace',
      'Optional: the Tokyo Metropolitan Building viewing decks, free of charge',
      `${DAY_MARK}Day 2 · Tokyo city tour`,
      'Breakfast, then a full day coach tour of the city',
      'Meiji shrine and the Imperial Palace gardens',
      'Lunch included on the tour',
      'Asakusa and the Senso-ji temple lanes',
      `${DAY_MARK}Day 3 · Mount Fuji and Hakone`,
      'Breakfast, then out of the city towards Mount Fuji',
      'The fifth station on the mountain, weather permitting',
      'Lake Ashi and the Hakone ropeway',
      'Bullet train back into Tokyo in the evening',
      `${DAY_MARK}Day 4 · Tokyo Disneyland`,
      'Early breakfast, then across to Tokyo Disneyland',
      'Admission tickets included for the full day',
      'Evening free back in Shinjuku'
    ],
    accommodation: {
      name: 'Premier Hotel Cabin Shinjuku, Tokyo',
      description: '4 nights · Breakfast · Standard room · 4★ · Four star hotel in Shinjuku, minutes from the station',
      images: [
        img('3o94vkahpdbu8csxpq9m9u65lpgr_leonardo-2101334-cnk-sand-beach-club-09_O-707799.jpg'),
        img('qj6u4qrdeeq0a7y1w0ptfdow7466_271275943.png'),
        img('51v8ymkq64vwfxohmdklpkpqi2m4_271275937.png'),
        img('hn3ikiry3vmzlvex4k7mtvxb3xiv_271275968.png'),
        img('30y4syj55woetgsj29xjky0pa540_271276015.png'),
        img('temirvmbn8rr6tlum2bgqjdw957c_400036635.png'),
        img('ymrlslq3bte39vyadlbuv0s0r8wu_271275975.png'),
        img('tbvz86mf6tuqn92ea3fe4w3w9ma6_302081209.png'),
        img('jec5g8bmkhtlvvu16bqsesnwjaqa_271275997.png'),
        img('mfvv0eqk46q5tdqjyuxo8lemw4ax_271275964.png')
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
        name: 'Mount Fuji and Hakone day trip',
        day: 3,
        optional: false,
        image: img('39ndql7vpg0emtn4pc108qs5bzwf_shutterstock_1023211282.jpg'),
        description: 'The fifth station on Mount Fuji, Lake Ashi and the Hakone ropeway, with the bullet train back into Tokyo in the evening.'
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
      description: 'Four nights in Shinjuku with a city day, Mount Fuji and Hakone, and a full day at Tokyo Disneyland.',
      image: img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Osaka',
    subtitle: 'Osaka to Hiroshima, Kyoto and Nara',
    dayLabel: 'Day 5 to 10',
    images: [
      img('rf2q8xarmubdq146v3y4624kctc7_shutterstock_209751268.jpg'),
      img('j2yajxhi3hugp224iylhhjo0vdn4_shutterstock_2354853383.jpg'),
      img('8dnt21orzvcfmui89tb0d0wwxg9z_shutterstock_318859283.jpg'),
      img('tnr6dw1lihzobjh5bj5x09mp7nj0_shutterstock_793305754.jpg')
    ],
    dayImages: {
      5: [
        img('2hn59tmyw7g76wpw5js89g7jlxix_1619611599_shutterstock_560030653.jpg'),
        img('70u3tc8xuuarz97uhxty1b2m3rmq_1617192046_6dd23e1abb0539d588045e45b7e5ddfd.jpg'),
        img('jbkrddvnn2pgz9fmapmdkzlyuget_1617184794_tempat-wisata-di-osaka-3.jpg'),
        img('dwt6ckxokuqpaeo9sopjgm2kjgnq_1617177290_castle-5476737_1920.jpg')
      ],
      6: [
        img('trbz7j3iv4gug4ct6l5tlrfdomx4_shutterstock_1833107542.jpg'),
        img('6hqk9raek422s1htdubidnhqa0h9_40003599095_3d03c153fd_o.jpg'),
        img('9lzrldxkzxmqnzanh56c0l82e2y6_30886221447_8ff83ea243_o.jpg'),
        img('rdl3mr0ytwltczrxe46lugdutz5l_52530995501_589c03192f_o.jpg')
      ],
      7: [
        img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('gsoze09r8ko0sbu1ceztnf0kmd3l_shutterstock_1720970440.jpg')
      ],
      8: [
        img('is1ejpaqiwr1iwdimb7nx5ml1oja_shutterstock_1024765225.jpg'),
        img('q1ibrb7a4xu4nq4a2rql7r0u3zft_1617177625_river-5572289_1920.jpg'),
        img('nozs79tjbgfixymgrh3voo9bhf1z_Osaka_Dotonbori_Ebisu_Bridge.jpg'),
        img('8fd2fbhoaurwbsxmgzdldygvuzk4_53207269026_e76f09ed3d_o.jpg')
      ],
      9: [
        img('th13xucm57k9awbq3opc7a3p0ny8_Universal%20Studios,%20Japan%207.jpg'),
        img('dzrrvkhl3x0bs4kcwkfqceusw3fe_1617186371_1200px-USJ_5years.jpg'),
        img('rf2q8xarmubdq146v3y4624kctc7_shutterstock_209751268.jpg'),
        img('j2yajxhi3hugp224iylhhjo0vdn4_shutterstock_2354853383.jpg')
      ],
      10: [
        img('rf2q8xarmubdq146v3y4624kctc7_shutterstock_209751268.jpg'),
        img('j2yajxhi3hugp224iylhhjo0vdn4_shutterstock_2354853383.jpg'),
        img('8dnt21orzvcfmui89tb0d0wwxg9z_shutterstock_318859283.jpg'),
        img('tnr6dw1lihzobjh5bj5x09mp7nj0_shutterstock_793305754.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Bullet train to Osaka`,
      'Breakfast and check out, then transfer to the station',
      'Shinkansen bullet train south to Osaka',
      'Check in at your hotel near Namba',
      'Rest of the day free in the city',
      `${DAY_MARK}Day 6 · Hiroshima and Miyajima`,
      'Early breakfast, then a full day bus tour west',
      'The Peace Memorial Park and the A-Bomb Dome',
      'Ferry across to Miyajima island',
      'The floating torii gate before the ride back',
      `${DAY_MARK}Day 7 · Kyoto and Nara`,
      'Breakfast, then a full day out to Kyoto and Nara',
      'Kinkaku-ji, the golden pavilion, on its pond',
      'Buffet lunch included',
      'The deer park and Todai-ji temple in Nara',
      `${DAY_MARK}Day 8 · Osaka on foot`,
      'Breakfast, then a half day walking tour of Osaka',
      'Dotonbori and the Kuromon market stalls',
      'The lanes around Shinsekai with your guide',
      'Afternoon free in the city',
      `${DAY_MARK}Day 9 · Universal Studios Japan`,
      'Early breakfast, then across to Universal Studios Japan',
      'Tickets included for the full day',
      'Super Nintendo World and the Harry Potter area',
      'Evening free near Namba',
      `${DAY_MARK}Day 10 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'Private transfer to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'Richmond Hotel Namba Daikokucho, Osaka',
      description: '5 nights · Breakfast · Standard room · 3★ · Comfortable hotel one stop from Namba, in central Osaka',
      images: [
        img('o5z6i29uvpe9pfpzpcap52juxlba_Osaka4.jpg'),
        img('zlchn5e80bwx7udlhn5l1zp10z9y_Osaka2.jpg'),
        img('h9m078psd5kl3171l5vr0rcd8m7n_Osaka5.jpg'),
        img('i0vk8asa9da53zb0v0i51r0vew0s_Osaka1.jpg'),
        img('bt46asteiepzpl84gstomkgq0ew5_Osaka0.jpg'),
        img('mngyig2cj98qt5ictqkqk7tudd7c_Osaka3.jpg'),
        img('sve4kf8uih2z5dnp490wmfzclfx9_Osaka.jpg')
      ]
    },
    activities: [
      {
        name: 'Hiroshima and Miyajima day trip',
        day: 6,
        optional: false,
        image: img('trbz7j3iv4gug4ct6l5tlrfdomx4_shutterstock_1833107542.jpg'),
        description: 'A long day west to the Peace Memorial Park, then the ferry to Miyajima for the floating torii gate and Itsukushima shrine.'
      },
      {
        name: 'Kyoto and Nara day trip',
        day: 7,
        optional: false,
        image: img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        description: 'Kinkaku-ji, the golden pavilion, then the deer park and Todai-ji temple in Nara, with a buffet lunch and coach travel from Namba.'
      },
      {
        name: 'Osaka walking tour',
        day: 8,
        optional: false,
        image: img('is1ejpaqiwr1iwdimb7nx5ml1oja_shutterstock_1024765225.jpg'),
        description: 'Half a day on foot through Dotonbori, the Kuromon market and the lanes around Shinsekai with a guide who knows where to eat.'
      },
      {
        name: 'Universal Studios Japan',
        day: 9,
        optional: false,
        image: img('th13xucm57k9awbq3opc7a3p0ny8_Universal%20Studios,%20Japan%207.jpg'),
        description: 'A full day at Universal Studios Japan with tickets included, home to Super Nintendo World and the Harry Potter area.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Five nights in one hotel with day trips to Hiroshima, Kyoto and Nara, a walking tour and a day at Universal Studios Japan.',
      image: img('rf2q8xarmubdq146v3y4624kctc7_shutterstock_209751268.jpg')
    }
  }
];

const detail = {
  slug: 'urban-wonders-of-tokyo-and-osaka',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Urban Wonders of Tokyo and Osaka',
  alt: 'Crowds crossing Shibuya at night, Tokyo',
  days: '10 days / 9 nights',
  stations: '2 stops',
  transport: 'Shinkansen bullet train, private transfers and guided tours',
  tag: 'Grand tour',
  tags: ['Family', 'Culture'],
  price: 242465,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Disneyland', 'Osaka', 'Hiroshima', 'Kyoto', 'Nara'],
  stats: { days: 10, cities: 2, hotels: 2, activities: 7, transfers: 13 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['13 transfers', 'Transport'],
    ['11 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Five nights in one Osaka hotel and every big day out reachable from it. You see more and unpack once.',
    quoteMore: 'The Hiroshima day is long. Sleep on the bus both ways and keep the Osaka walking tour for the day after, as we have.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Ten days with four nights in Shinjuku for a city tour, Mount Fuji and Tokyo Disneyland, then five nights in one Osaka hotel with day trips to Hiroshima and Miyajima, Kyoto and Nara, a walking tour and Universal Studios Japan.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 9 nights with daily breakfast; Shinkansen bullet train from Tokyo down to Osaka; private airport transfers; full day Tokyo city tour with lunch; Mount Fuji and Hakone day trip; admission to Tokyo Disneyland; a guided day to Hiroshima with Miyajima island; Kyoto and Nara day trip with buffet lunch; a half day on foot through Osaka; entry to Universal Studios Japan.',
  intro2: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your Shinjuku hotel\nRest of the day free at your own pace\nOptional: the Tokyo Metropolitan Building viewing decks, free of charge', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your Shinjuku hotel', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo city tour (B, L)', text: 'Breakfast, then a full day coach tour of the city\nMeiji shrine and the Imperial Palace gardens\nLunch included on the tour\nAsakusa and the Senso-ji temple lanes', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Breakfast, then a full day coach tour of the city', 'Meiji shrine and the Imperial Palace gardens', 'Lunch included on the tour'] },
    { title: 'Day 3: Mount Fuji and Hakone (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone ropeway\nBullet train back into Tokyo in the evening', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone ropeway'] },
    { title: 'Day 4: Tokyo Disneyland (B)', text: 'Early breakfast, then across to Tokyo Disneyland\nAdmission tickets included for the full day\nEvening free back in Shinjuku', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Early breakfast, then across to Tokyo Disneyland', 'Admission tickets included for the full day', 'Evening free back in Shinjuku'] },
    { title: 'Day 5: Bullet train to Osaka (B)', text: 'Breakfast and check out, then transfer to the station\nShinkansen bullet train south to Osaka\nCheck in at your hotel near Namba\nRest of the day free in the city', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast and check out, then transfer to the station', 'Shinkansen bullet train south to Osaka', 'Check in at your hotel near Namba'] },
    { title: 'Day 6: Hiroshima and Miyajima (B)', text: 'Early breakfast, then a full day bus tour west\nThe Peace Memorial Park and the A-Bomb Dome\nFerry across to Miyajima island\nThe floating torii gate before the ride back', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Early breakfast, then a full day bus tour west', 'The Peace Memorial Park and the A-Bomb Dome', 'Ferry across to Miyajima island'] },
    { title: 'Day 7: Kyoto and Nara (B, L)', text: 'Breakfast, then a full day out to Kyoto and Nara\nKinkaku-ji, the golden pavilion, on its pond\nBuffet lunch included\nThe deer park and Todai-ji temple in Nara', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast, then a full day out to Kyoto and Nara', 'Kinkaku-ji, the golden pavilion, on its pond', 'Buffet lunch included'] },
    { title: 'Day 8: Osaka on foot (B)', text: 'Breakfast, then a half day walking tour of Osaka\nDotonbori and the Kuromon market stalls\nThe lanes around Shinsekai with your guide\nAfternoon free in the city', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast, then a half day walking tour of Osaka', 'Dotonbori and the Kuromon market stalls', 'The lanes around Shinsekai with your guide'] },
    { title: 'Day 9: Universal Studios Japan (B)', text: 'Early breakfast, then across to Universal Studios Japan\nTickets included for the full day\nSuper Nintendo World and the Harry Potter area\nEvening free near Namba', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Early breakfast, then across to Universal Studios Japan', 'Tickets included for the full day', 'Super Nintendo World and the Harry Potter area'] },
    { title: 'Day 10: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Japan', href: '/asien/japan' },
  { label: detail.title }
];

export const urbanWondersTokyoOsakaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const urbanWondersTokyoOsakaProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Disneyland', 'Osaka', 'Hiroshima', 'Kyoto', 'Nara'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 10,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 7,
  transfers: 13,
  meals: 11,
  price: detail.price,
  images: cardImages
};
