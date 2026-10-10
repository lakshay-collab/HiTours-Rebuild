// Japan in Bloom Group Tour. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('rf2q8xarmubdq146v3y4624kctc7_shutterstock_209751268.jpg'),
  img('reet28d8my7jdj9zm06al88c0djm_shutterstock_2311605163.jpg'),
  img('re7iw91kyn2u863knugl7cr3ojwm_shutterstock_2301094731.jpg'),
  img('d52y3g1627qkpcuaym0v8w467dir_shutterstock_1075480004.jpg'),
  img('whkp4azssrlsyr0rofdwlnikzki2_shutterstock_517903198.jpg'),
  img('pme2kpd6zo6530pi31qoegli5gw5_shutterstock_2390555455.jpg'),
  img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg'),
  img('kttil6ut49ym2i5xxgnx6cu72osn_shutterstock_630286787.jpg'),
  img('61izsuekzybkh86q2bvapmbmyrlt_shutterstock_355725083.jpg'),
  img('lnacm9xp9pgyiylr68qgl6aao0bp_shutterstock_2376751313.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('rf2q8xarmubdq146v3y4624kctc7_shutterstock_209751268.jpg'),
  img('pme2kpd6zo6530pi31qoegli5gw5_shutterstock_2390555455.jpg'),
  img('k3sf085wsu1ruds6z7cd2ie75wj2_shutterstock_252533968.jpg'),
  img('6hqk9raek422s1htdubidnhqa0h9_40003599095_3d03c153fd_o.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Osaka',
    subtitle: 'Osaka to Hiroshima and Kyoto',
    dayLabel: 'Day 1 to 4',
    images: [
      img('rf2q8xarmubdq146v3y4624kctc7_shutterstock_209751268.jpg'),
      img('j2yajxhi3hugp224iylhhjo0vdn4_shutterstock_2354853383.jpg'),
      img('8dnt21orzvcfmui89tb0d0wwxg9z_shutterstock_318859283.jpg'),
      img('tnr6dw1lihzobjh5bj5x09mp7nj0_shutterstock_793305754.jpg')
    ],
    dayImages: {
      1: [
        img('dzrrvkhl3x0bs4kcwkfqceusw3fe_1617186371_1200px-USJ_5years.jpg'),
        img('82bpbtjbfuapwdt08qxisa8avn42_4031_11.jpg'),
        img('rf2q8xarmubdq146v3y4624kctc7_shutterstock_209751268.jpg'),
        img('j2yajxhi3hugp224iylhhjo0vdn4_shutterstock_2354853383.jpg')
      ],
      2: [
        img('k3sf085wsu1ruds6z7cd2ie75wj2_shutterstock_252533968.jpg'),
        img('6hqk9raek422s1htdubidnhqa0h9_40003599095_3d03c153fd_o.jpg'),
        img('9lzrldxkzxmqnzanh56c0l82e2y6_30886221447_8ff83ea243_o.jpg'),
        img('rdl3mr0ytwltczrxe46lugdutz5l_52530995501_589c03192f_o.jpg')
      ],
      3: [
        img('37obm7076dgurz51z848xmp2y2sy_dl.beatsnoop.com-3000-f481kYzbXg.jpg'),
        img('dwt6ckxokuqpaeo9sopjgm2kjgnq_1617177290_castle-5476737_1920.jpg'),
        img('q1ibrb7a4xu4nq4a2rql7r0u3zft_1617177625_river-5572289_1920.jpg'),
        img('6srmyfqfq5ujw4k378ms2ufech25_1617196350_a77c8b70-04bf-11e8-a07c-06326e70.jpg')
      ],
      4: [
        img('huoikx4ucbt477ige7c9vq6oh3jy_9ejf0olixqbt1551o8h552rcwnkx_Downpic.cc-83087282.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('175jjcq0s03pjbxnrgbvss1n0fyf_Fushimi%20Inari%20Taisha-1.jpg'),
        img('182vibmg4qqlf60do26572d7lrlg_Kyoto-Arashiyama-Bamboo-Grove1-SH.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Osaka`,
      'Arrival at Kansai Airport and transfer to your hotel',
      'Check in near Shinsaibashi',
      'Rest of the day free at your own pace',
      'Optional: an evening walk along the Dotonbori canal',
      `${DAY_MARK}Day 2 · Hiroshima and Miyajima`,
      'Early breakfast, then a full day west',
      'The Peace Memorial Park and the A-Bomb Dome',
      'Ferry across to Miyajima island',
      'The floating torii gate before the ride back',
      `${DAY_MARK}Day 3 · Osaka sightseeing`,
      'Breakfast, then a guided day around Osaka',
      'Osaka castle and its park',
      'The Dotonbori canal and Kuromon market',
      'Afternoon free in the city',
      `${DAY_MARK}Day 4 · Kyoto and Arashiyama`,
      'Breakfast, then across to Kyoto for the day',
      'Kinkaku-ji, the golden pavilion, on its pond',
      'The bamboo grove at Arashiyama',
      'The lanes along the Katsura river'
    ],
    accommodation: {
      name: 'Hearton Hotel Shinsaibashi Nagahoridori, Osaka',
      description: '4 nights · Breakfast · Standard room · 3★ · Central hotel on Nagahori street, a short walk from Shinsaibashi',
      images: [
        img('z867ghm56i3ar40rhm18u2bv4fdx_imgi_5_top_img05.jpg'),
        img('yj5luy8ipe43lbw5igjaqj5h394t_imgi_1_top_img01.jpg'),
        img('9qrttrwgxqgb71i1ktprlzfj6y2p_imgi_6_top_img06.jpg'),
        img('8ndincydibjeobnx3t3e3k6u4yj7_imgi_4_top_img04.jpg'),
        img('ts8kiq72huyic1yagpof1zs31ysx_imgi_2_top_img02.jpg'),
        img('r13t0zdmydr6gfu2oitvl760r17v_imgi_3_top_img03.jpg')
      ]
    },
    activities: [
      {
        name: 'Hiroshima and Miyajima day trip',
        day: 2,
        optional: false,
        image: img('k3sf085wsu1ruds6z7cd2ie75wj2_shutterstock_252533968.jpg'),
        description: 'A long day west to the Peace Memorial Park, then the ferry to Miyajima for the floating torii gate and Itsukushima shrine.'
      },
      {
        name: 'Osaka sightseeing tour',
        day: 3,
        optional: false,
        image: img('37obm7076dgurz51z848xmp2y2sy_dl.beatsnoop.com-3000-f481kYzbXg.jpg'),
        description: 'A guided day through the city: Osaka castle and its park, the Dotonbori canal and the market lanes around Kuromon.'
      },
      {
        name: 'Kyoto and Arashiyama day trip',
        day: 4,
        optional: false,
        image: img('huoikx4ucbt477ige7c9vq6oh3jy_9ejf0olixqbt1551o8h552rcwnkx_Downpic.cc-83087282.jpg'),
        description: 'Kinkaku-ji, the golden pavilion, then the bamboo grove at Arashiyama and the lanes along the Katsura river.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Four nights in one central hotel, with day trips to Hiroshima and Miyajima, a city tour and a day in Kyoto with Arashiyama.',
      image: img('rf2q8xarmubdq146v3y4624kctc7_shutterstock_209751268.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Nagoya',
    subtitle: 'Nagoya to Nara and Nabana no Sato',
    dayLabel: 'Day 5',
    images: [
      img('reet28d8my7jdj9zm06al88c0djm_shutterstock_2311605163.jpg')
    ],
    dayImages: {
      5: [
        img('8qeiy6mxw8b2mrdtl9ldpip1k9vk_Downpic.cc-103527091.jpg'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('gsoze09r8ko0sbu1ceztnf0kmd3l_shutterstock_1720970440.jpg'),
        img('0bs4ex793be65gwvrd5iubl0pmqy_Downpic.cc-image476786539.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Nara and Nabana no Sato`,
      'Breakfast and check out, then on to Nara',
      'Todai-ji and its great bronze Buddha',
      'The deer park and its tame sika deer',
      'Nabana no Sato illuminations, then Nagoya'
    ],
    accommodation: {
      name: 'Travelodge Nagoya Sakae, Nagoya',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Simple hotel in the Sakae district of Nagoya',
      images: [
        img('yilct8zctxlqf454agd6x1dt0nwr_TLNS-Overview-Facade-Entrance.webp'),
        img('coziidhc31xvklsslze37pa3p2s6_TLNS-Room-Standard-Single1.webp'),
        img('tdze35g3czu81d9jxwc6wdhiqb81_TLNS_Breakfast-Area_Working-Station3.webp'),
        img('5mgtk3vaw6s3iuy8biy1ow7lduib_TLNS_Breakfast-Area_Working-Station.webp'),
        img('2e2mizakuzhafred2vhs5ym40hdp_TLNS-Room-Standard-Single2.webp')
      ]
    },
    activities: [
      {
        name: 'Todai-ji temple and Nara deer park',
        day: 5,
        optional: false,
        image: img('8qeiy6mxw8b2mrdtl9ldpip1k9vk_Downpic.cc-103527091.jpg'),
        description: 'The great bronze Buddha inside Todai-ji, then the deer park where the tame sika deer bow for biscuits.'
      },
      {
        name: 'Nabana no Sato illumination',
        day: 5,
        optional: false,
        image: img('0bs4ex793be65gwvrd5iubl0pmqy_Downpic.cc-image476786539.jpg'),
        description: 'The flower park near Nagoya, where millions of lights are strung into tunnels and fields once the sun goes down.'
      }
    ],
    program: {
      name: 'Nagoya',
      description: 'A night in Nagoya, reached through Nara\'s great temple and deer park, with the Nabana no Sato lights after dark.',
      image: img('reet28d8my7jdj9zm06al88c0djm_shutterstock_2311605163.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Tokyo',
    subtitle: 'Tokyo to Hakone',
    dayLabel: 'Day 6 to 9',
    images: [
      img('wkz3rsmvvlhs2o7orc70p6masz8g_shutterstock_2248287787.jpg'),
      img('a74yrec3cxa5xj70wfrgwnxkyusd_shutterstock_1666322071.jpg'),
      img('re7iw91kyn2u863knugl7cr3ojwm_shutterstock_2301094731.jpg'),
      img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg')
    ],
    dayImages: {
      6: [
        img('mvxmcsvdyeiiv8yeixeo40nlrc23_Downpic.cc-image615343403.jpg'),
        img('9hdwl7e2hucnek1jhe8l9hwk9s9m_OWAKUDANI%20VALLEY.png'),
        img('lqh0fkdte6vzdbis3ufjabi89yps_Downpic.cc-image455947042.jpg'),
        img('4ijejmm9p326y1f1f6t762u0izb6_shutterstock_1303030627%20(1).jpg')
      ],
      7: [
        img('09pc1h9pa6s106upf2zvejsu4ma7_Ueno%20Park2.jpg'),
        img('iau3aw776fn443su99n2scmo27vl_25899482056_b1e61a167c_k.jpg'),
        img('z5icwndfdu3fjhsdhejgqjq5empw_shutterstock_718177726.jpg'),
        img('ud4obe32nzpk9xuits2o15npw4cs_31057468977_3697b11ae3_o.jpg')
      ],
      8: [
        img('8l3nfuzgvhuh0eyewnb0gav1t7w8_1617351605_mickey-mause-832112_1920.jpg'),
        img('6hzy1swk98chjdiqrq77p05ks1hp_shutterstock_402603553%20(1).jpg'),
        img('iele7cut7wosbp83440c5yyy4663_shutterstock_666196894.jpg'),
        img('wkz3rsmvvlhs2o7orc70p6masz8g_shutterstock_2248287787.jpg')
      ],
      9: [
        img('wkz3rsmvvlhs2o7orc70p6masz8g_shutterstock_2248287787.jpg'),
        img('a74yrec3cxa5xj70wfrgwnxkyusd_shutterstock_1666322071.jpg'),
        img('re7iw91kyn2u863knugl7cr3ojwm_shutterstock_2301094731.jpg'),
        img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Hakone and on to Tokyo`,
      'Breakfast and check out, then east to Hakone',
      'The ropeway over the Owakudani vents',
      'A cruise across Lake Ashi',
      'On to Tokyo and check in near the bay',
      `${DAY_MARK}Day 7 · Tokyo sightseeing`,
      'Breakfast, then a guided day through Tokyo',
      'Meiji shrine and the Imperial Palace gardens',
      'Asakusa and the Senso-ji temple lanes',
      'Dinner at the hotel in the evening',
      `${DAY_MARK}Day 8 · A free day in Tokyo`,
      'Breakfast and a free day in Tokyo',
      'Optional: Tokyo Disneyland or DisneySea, one stop away',
      'Optional: Shibuya, Harajuku and the Omotesando lanes',
      'Optional: the Skytree observation decks',
      `${DAY_MARK}Day 9 · Departure from Tokyo`,
      'Breakfast at the hotel and check out',
      'Transfer to Narita or Haneda for your flight home'
    ],
    accommodation: {
      name: 'MyStays Shin Urayasu, Tokyo',
      description: '3 nights · Breakfast and dinner · Standard room · 3★ · Comfortable hotel at Shin-Urayasu, one stop from Disney Resort',
      images: [
        img('2bofezzqc6alcdo6khf4worenq3u_exterior.jpg'),
        img('f5cedcw8eqlm82jvffcfwdj3rifc_caption.jpg'),
        img('ek5zvmjlxwc1okbdu6wp0gbulapw_caption%20(2).jpg'),
        img('8xz5er8ih6b4tb0mr0w36eiv7fj6_caption%20(1).jpg'),
        img('ljhggfe6mfeesls3qzw44hzyhuoq_caption%20(3).jpg'),
        img('9q2axblb5w2kcjzbivncche1otvw_exterior%20(1).jpg')
      ]
    },
    activities: [
      {
        name: 'Hakone ropeway',
        day: 6,
        optional: false,
        image: img('mvxmcsvdyeiiv8yeixeo40nlrc23_Downpic.cc-image615343403.jpg'),
        description: 'The cable car over the sulphur vents of Owakudani, with Mount Fuji across the valley when the sky is clear.'
      },
      {
        name: 'Lake Ashi cruise',
        day: 6,
        optional: false,
        image: img('lqh0fkdte6vzdbis3ufjabi89yps_Downpic.cc-image455947042.jpg'),
        description: 'A cruise across Lake Ashi past the red torii gate standing in the water at Hakone shrine.'
      },
      {
        name: 'Tokyo sightseeing tour',
        day: 7,
        optional: false,
        image: img('09pc1h9pa6s106upf2zvejsu4ma7_Ueno%20Park2.jpg'),
        description: 'A guided day through the city, from the Meiji shrine and the Imperial Palace gardens to the old temple lanes of Asakusa.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Three nights near the bay, reached over the Hakone ropeway and Lake Ashi, with a guided city day and a free day.',
      image: img('wkz3rsmvvlhs2o7orc70p6masz8g_shutterstock_2248287787.jpg')
    }
  }
];

const detail = {
  slug: 'japan-in-bloom-group-tour',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Japan in Bloom Group Tour',
  alt: 'Blossom trees in full flower beside a temple wall, Japan',
  days: '9 days / 8 nights',
  stations: '3 stops',
  transport: 'Coaches, trains and guided touring throughout',
  tag: 'Group tour',
  tags: ['Culture', 'Nature'],
  price: 172805,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Osaka', 'Hiroshima', 'Miyajima', 'Kyoto', 'Nara', 'Nagoya', 'Hakone', 'Tokyo'],
  stats: { days: 9, cities: 3, hotels: 3, activities: 9, transfers: 20 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['9 experiences', 'Activities'],
    ['20 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Starting in Osaka and ending in Tokyo means no backtracking, and the Nabana no Sato lights on the way through are a quiet highlight.',
    quoteMore: 'Fly into Kansai and home from Narita if your airline allows it. This itinerary is built that way and it saves a whole travel day.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days from Kansai to Tokyo: four nights in central Osaka with Hiroshima and Miyajima, a city tour and a Kyoto day with Arashiyama, a night in Nagoya via Nara and the Nabana no Sato lights, then three nights in Tokyo reached over the Hakone ropeway.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 8 nights with daily breakfast and dinner on four evenings; coaches and trains throughout; a guided day to Hiroshima with the island shrine at Miyajima; a city tour of Osaka; Kyoto with the Arashiyama bamboo grove; Todai-ji temple with the Nara deer park; entry to the Nabana no Sato illuminations; the Hakone ropeway and a Lake Ashi cruise; a guided day in Tokyo.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and other dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Osaka (Arrival)', text: 'Arrival at Kansai Airport and transfer to your hotel\nCheck in near Shinsaibashi\nRest of the day free at your own pace\nOptional: an evening walk along the Dotonbori canal', hotel: 'Hearton Hotel Shinsaibashi Nagahoridori', highlights: ['Arrival at Kansai Airport and transfer to your hotel', 'Check in near Shinsaibashi', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Hiroshima and Miyajima (B)', text: 'Early breakfast, then a full day west\nThe Peace Memorial Park and the A-Bomb Dome\nFerry across to Miyajima island\nThe floating torii gate before the ride back', hotel: 'Hearton Hotel Shinsaibashi Nagahoridori', highlights: ['Early breakfast, then a full day west', 'The Peace Memorial Park and the A-Bomb Dome', 'Ferry across to Miyajima island'] },
    { title: 'Day 3: Osaka sightseeing (B)', text: 'Breakfast, then a guided day around Osaka\nOsaka castle and its park\nThe Dotonbori canal and Kuromon market\nAfternoon free in the city', hotel: 'Hearton Hotel Shinsaibashi Nagahoridori', highlights: ['Breakfast, then a guided day around Osaka', 'Osaka castle and its park', 'The Dotonbori canal and Kuromon market'] },
    { title: 'Day 4: Kyoto and Arashiyama (B)', text: 'Breakfast, then across to Kyoto for the day\nKinkaku-ji, the golden pavilion, on its pond\nThe bamboo grove at Arashiyama\nThe lanes along the Katsura river', hotel: 'Hearton Hotel Shinsaibashi Nagahoridori', highlights: ['Breakfast, then across to Kyoto for the day', 'Kinkaku-ji, the golden pavilion, on its pond', 'The bamboo grove at Arashiyama'] },
    { title: 'Day 5: Nara and Nabana no Sato (B, D)', text: 'Breakfast and check out, then on to Nara\nTodai-ji and its great bronze Buddha\nThe deer park and its tame sika deer\nNabana no Sato illuminations, then Nagoya', hotel: 'Travelodge Nagoya Sakae', highlights: ['Breakfast and check out, then on to Nara', 'Todai-ji and its great bronze Buddha', 'The deer park and its tame sika deer'] },
    { title: 'Day 6: Hakone and on to Tokyo (B, D)', text: 'Breakfast and check out, then east to Hakone\nThe ropeway over the Owakudani vents\nA cruise across Lake Ashi\nOn to Tokyo and check in near the bay', hotel: 'MyStays Shin Urayasu', highlights: ['Breakfast and check out, then east to Hakone', 'The ropeway over the Owakudani vents', 'A cruise across Lake Ashi'] },
    { title: 'Day 7: Tokyo sightseeing (B, D)', text: 'Breakfast, then a guided day through Tokyo\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nDinner at the hotel in the evening', hotel: 'MyStays Shin Urayasu', highlights: ['Breakfast, then a guided day through Tokyo', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 8: A free day in Tokyo (B)', text: 'Breakfast and a free day in Tokyo\nOptional: Tokyo Disneyland or DisneySea, one stop away\nOptional: Shibuya, Harajuku and the Omotesando lanes\nOptional: the Skytree observation decks', hotel: 'MyStays Shin Urayasu', highlights: ['Breakfast and a free day in Tokyo', 'Optional: Tokyo Disneyland or DisneySea, one stop away', 'Optional: Shibuya, Harajuku and the Omotesando lanes'] },
    { title: 'Day 9: Departure from Tokyo (B)', text: 'Breakfast at the hotel and check out\nTransfer to Narita or Haneda for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to Narita or Haneda for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and other dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const japanInBloomGroupTourBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const japanInBloomGroupTourProduct = {
  slug: detail.slug,
  places: ['Osaka', 'Hiroshima', 'Miyajima', 'Kyoto', 'Nara', 'Nagoya', 'Hakone', 'Tokyo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 9,
  transfers: 20,
  meals: 8,
  price: detail.price,
  images: cardImages
};
