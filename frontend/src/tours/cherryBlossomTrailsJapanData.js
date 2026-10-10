// Cherry Blossom Trails of Japan. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('i7pvmoa5sgm8ekkupu1tyd6owiiv_shutterstock_2025119165.jpg'),
  img('reet28d8my7jdj9zm06al88c0djm_shutterstock_2311605163.jpg'),
  img('whkp4azssrlsyr0rofdwlnikzki2_shutterstock_517903198.jpg'),
  img('fdoqvdame8oqu21oq20porps9va3_shutterstock_575444659.jpg'),
  img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg'),
  img('g01jqzigcq3a7lifmh3xti6bmutl_shutterstock_162338060.jpg'),
  img('61izsuekzybkh86q2bvapmbmyrlt_shutterstock_355725083.jpg'),
  img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg'),
  img('xdyj7i31bk427zhdgk2thbw2rv2d_shutterstock_572057020.jpg'),
  img('a3klwqjmrp3w9t5hfpniopbrg0ho_shutterstock_2333983371.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('i7pvmoa5sgm8ekkupu1tyd6owiiv_shutterstock_2025119165.jpg'),
  img('2hn59tmyw7g76wpw5js89g7jlxix_1619611599_shutterstock_560030653.jpg'),
  img('70u3tc8xuuarz97uhxty1b2m3rmq_1617192046_6dd23e1abb0539d588045e45b7e5ddfd.jpg'),
  img('5j6fefqxbxx17zmfusbgrdtk5fmt_1619611510_shutterstock_1494770918.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Osaka',
    subtitle: 'Osaka to Hiroshima and Kyoto',
    dayLabel: 'Day 1 to 4',
    images: [
      img('i7pvmoa5sgm8ekkupu1tyd6owiiv_shutterstock_2025119165.jpg'),
      img('g8f2aex4vg106e8wh3k0x1np7hov_shutterstock_382909786.jpg'),
      img('bsns0t5k33qyabozvyhlfjfdcxg5_shutterstock_287934032.jpg'),
      img('n6o4af4ttsz5fvnf4luy4m8mkuit_shutterstock_1873243030.jpg')
    ],
    dayImages: {
      1: [
        img('2hn59tmyw7g76wpw5js89g7jlxix_1619611599_shutterstock_560030653.jpg'),
        img('70u3tc8xuuarz97uhxty1b2m3rmq_1617192046_6dd23e1abb0539d588045e45b7e5ddfd.jpg'),
        img('5j6fefqxbxx17zmfusbgrdtk5fmt_1619611510_shutterstock_1494770918.jpg'),
        img('i7pvmoa5sgm8ekkupu1tyd6owiiv_shutterstock_2025119165.jpg')
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
        img('5htqdfipqs85s23kd4yx18vs3n9b_dl.beatsnoop.com-3000-TzYXj0mMfK.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('175jjcq0s03pjbxnrgbvss1n0fyf_Fushimi%20Inari%20Taisha-1.jpg'),
        img('182vibmg4qqlf60do26572d7lrlg_Kyoto-Arashiyama-Bamboo-Grove1-SH.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Osaka`,
      'Arrival at Kansai Airport and transfer to your hotel',
      'Check in at your Osaka hotel',
      'Rest of the day free at your own pace',
      'Optional: an evening along the Dotonbori canal',
      `${DAY_MARK}Day 2 · Hiroshima and Miyajima`,
      'Early breakfast, then the bullet train west',
      'The Peace Memorial Park and the A-Bomb Dome',
      'Ferry across to Miyajima island',
      'The floating torii gate before the train back',
      `${DAY_MARK}Day 3 · Osaka sightseeing`,
      'Breakfast, then a guided day around Osaka',
      'Osaka castle and its park',
      'The Dotonbori canal and Kuromon market',
      'Afternoon free in the city',
      `${DAY_MARK}Day 4 · A day in Kyoto`,
      'Breakfast, then across to Kyoto for the day',
      'The golden pavilion on its pond',
      'A Zen garden and the temple district',
      'The torii gate paths above Fushimi'
    ],
    accommodation: {
      name: 'Rihga Royal Hotel, Osaka',
      description: '4 nights · Breakfast · Standard room · 4★ · Four star hotel with a river outlook and easy transport links',
      images: [
        img('o5gbd8f5dkdhheythv9szj4bxlz1_58323776.jpg'),
        img('v7zwmno2doc1qv6dfvbe4600uj8n_63999530.jpg'),
        img('b4asnm263o4daar4rl1ggvvjz1vz_158716805.jpg'),
        img('dmipoybbrsw2juaiij8rlswcn5xd_64003749.jpg'),
        img('bzguos5hvxrksv9rycn96x9udisa_158704072.jpg'),
        img('3bpdiekp3b74tf5sq2bfbh4joy4t_64003752.jpg'),
        img('30iif58kdmpdt623ltrwprrrewd7_158704202.jpg')
      ]
    },
    activities: [
      {
        name: 'Hiroshima and Miyajima by bullet train',
        day: 2,
        optional: false,
        image: img('k3sf085wsu1ruds6z7cd2ie75wj2_shutterstock_252533968.jpg'),
        description: 'The bullet train west to the Peace Memorial Park, then the ferry to Miyajima for the floating torii gate.'
      },
      {
        name: 'Osaka sightseeing tour',
        day: 3,
        optional: false,
        image: img('37obm7076dgurz51z848xmp2y2sy_dl.beatsnoop.com-3000-f481kYzbXg.jpg'),
        description: 'A guided day through the city: Osaka castle and its park, the Dotonbori canal and the market lanes around Kuromon.'
      },
      {
        name: 'Kyoto sightseeing tour',
        day: 4,
        optional: false,
        image: img('5htqdfipqs85s23kd4yx18vs3n9b_dl.beatsnoop.com-3000-TzYXj0mMfK.jpg'),
        description: 'A guided day in the old capital, taking in the golden pavilion, a Zen garden and the torii gate paths above Fushimi.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Four nights in one hotel, with Hiroshima and Miyajima by bullet train, a city tour and a full day in Kyoto.',
      image: img('i7pvmoa5sgm8ekkupu1tyd6owiiv_shutterstock_2025119165.jpg')
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
      name: 'The Strings Hotel, Nagoya',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel in Nagoya, close to the station',
      images: [
        img('t2dtzyhfjmxrfbegssb70pvq01ea_622788a_hb_a_010.jpg'),
        img('1jlyp8pm9g75e6ks13msizivc9qm_8cd0c99e_z.jpg'),
        img('qqzj71g7x9j1ed8t461m4tgks0rn_622788a_hb_a_025.jpg'),
        img('7es0m5pnhg4imaa7xoxvq6f7llfn_33164598_z.jpg'),
        img('i6e93msh4mpxd6jtckiry8k5vosv_09177296_z.jpg'),
        img('2xde2fpnga9b25hnay6f0wxhbbh2_622788a_hb_a_009.jpg'),
        img('zkxzgtngmrt2u3gbb9vi6czx3c0y_622788a_hb_a_016.jpg'),
        img('zb5gsez93eyjr87ffi96mxksdbkn_147cfb0b_z.webp'),
        img('5lm6ouiap5tea1fy10wwi9jchz6r_6680f21e_z.jpg'),
        img('ao7hmk9ibf3hk6ipvj4te0bjk2n4_5ccd4c3e_z.webp'),
        img('12szztngf3azgvpthmym7vgzxseh_85c0957d_z.webp')
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
      description: 'A night in Nagoya, reached through Nara\'s temple and deer park, with the Nabana no Sato lights after dark.',
      image: img('reet28d8my7jdj9zm06al88c0djm_shutterstock_2311605163.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Tokyo',
    subtitle: 'Tokyo to Hakone and Mount Fuji',
    dayLabel: 'Day 6 to 9',
    images: [
      img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg'),
      img('t70do4sx3jrtcq2v146hmuwx11x4_shutterstock_1201440004.jpg'),
      img('whkp4azssrlsyr0rofdwlnikzki2_shutterstock_517903198.jpg'),
      img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg')
    ],
    dayImages: {
      6: [
        img('mvxmcsvdyeiiv8yeixeo40nlrc23_Downpic.cc-image615343403.jpg'),
        img('9hdwl7e2hucnek1jhe8l9hwk9s9m_OWAKUDANI%20VALLEY.png'),
        img('lqh0fkdte6vzdbis3ufjabi89yps_Downpic.cc-image455947042.jpg'),
        img('4ijejmm9p326y1f1f6t762u0izb6_shutterstock_1303030627%20(1).jpg')
      ],
      7: [
        img('gb6n60wr8ydupm7g9qit8z2efbrz_Downpic.cc-image68884243.jpg'),
        img('0au3urvu530f5lbontv6ju088ggy_1619590602_shutterstock_1729078399.jpg'),
        img('wombbsemafqfmtmq6kcvgzfnngdg_1617362547_nakamise1-1024x768.jpg'),
        img('z5icwndfdu3fjhsdhejgqjq5empw_shutterstock_718177726.jpg')
      ],
      8: [
        img('y3k997q6h24jz8lkh6kr76hgje4r_290901465_1393431314483525_1026574750672344637_n.jpg'),
        img('5xd8jsc66zh1d436rfkeaxxd31x4_shutterstock_707441656.jpg'),
        img('8l3nfuzgvhuh0eyewnb0gav1t7w8_1617351605_mickey-mause-832112_1920.jpg'),
        img('18y3l04pv21bddj0wfbe5b2zdicy_tokyo-disneysea.png')
      ],
      9: [
        img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg'),
        img('t70do4sx3jrtcq2v146hmuwx11x4_shutterstock_1201440004.jpg'),
        img('whkp4azssrlsyr0rofdwlnikzki2_shutterstock_517903198.jpg'),
        img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Hakone, Mount Fuji and Tokyo`,
      'Breakfast and check out, then east to Hakone',
      'The ropeway over the Owakudani vents',
      'A cruise across Lake Ashi',
      'The Mount Fuji fifth station, then Tokyo',
      `${DAY_MARK}Day 7 · Tokyo and teamLab Planets`,
      'Breakfast, then a guided day through Tokyo',
      'Meiji shrine and the Imperial Palace gardens',
      'Asakusa and the Senso-ji temple lanes',
      'teamLab Planets in the afternoon',
      `${DAY_MARK}Day 8 · A free day in Tokyo`,
      'Breakfast and a free day in Tokyo',
      'Optional: the Skytree or the Ghibli Museum',
      'Optional: Shibuya, Harajuku and the Omotesando lanes',
      'Optional: a day trip to Nikko or Kamakura',
      `${DAY_MARK}Day 9 · Departure from Tokyo`,
      'Breakfast at the hotel and check out',
      'Transfer to Narita or Haneda for your flight home'
    ],
    accommodation: {
      name: 'Quintessa Hotel Tokyo Ginza, Tokyo',
      description: '3 nights · Breakfast · Standard room · 4★ · Four star hotel in Ginza, walking distance from the shops',
      images: [
        img('cvi2msh75gyj7d8231zbwdn7veqh_232660423.jpg'),
        img('yyeu18255y8gzqyfx95fgbvja8ux_232660692.jpg'),
        img('i2l1f8ntjy0f4xdwub7aegzjfq8p_232659840.jpg'),
        img('ctniyridmz2jdv4v93jvaad1ekiy_232659872.jpg'),
        img('k8dt3td2m07tdy0p8zy1in251c47_232660401.jpg'),
        img('ehwzczc51tak7lpgbmgruivrv2yy_232660695.jpg'),
        img('xbke5kzwavvdvcz0jdemeudcq6ou_232659882.jpg'),
        img('cp18bftv36gjvfgu6dcgilfv1742_232659824.jpg'),
        img('ictglc2xh0fvddh74rkpx3o1yssg_442f245d683df640579e37433e7a886d%20(1).jpg'),
        img('yqak4gp4tt7luryj8qvt27nel8w7_251661823.jpg'),
        img('g1n009k7pnffet5ysn5r9aj2q4w3_232660554.jpg')
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
        name: 'Mount Fuji fifth station',
        day: 6,
        optional: false,
        image: img('oz0eykwgk1p230z17gs8tno2reug_Downpic.cc-83470963.jpg'),
        description: 'Up the mountain road to the fifth station at 2,300 metres, where the treeline ends and the climbing trail begins.'
      },
      {
        name: 'Tokyo sightseeing with teamLab Planets',
        day: 7,
        optional: false,
        image: img('gb6n60wr8ydupm7g9qit8z2efbrz_Downpic.cc-image68884243.jpg'),
        description: 'A guided city day through Meiji shrine and Asakusa, then teamLab Planets, the barefoot digital art museum in Toyosu.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Three nights in Ginza, reached over the Hakone ropeway and Mount Fuji, with a city day, teamLab Planets and a free day.',
      image: img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg')
    }
  }
];

const detail = {
  slug: 'cherry-blossom-trails-of-japan',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Cherry Blossom Trails of Japan',
  alt: 'Cherry trees in full bloom along a Japanese canal',
  days: '9 days / 8 nights',
  stations: '3 stops',
  transport: 'Bullet trains, coaches and guided touring throughout',
  tag: 'Group tour',
  tags: ['Culture', 'Nature'],
  price: 166328,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Osaka', 'Hiroshima', 'Miyajima', 'Kyoto', 'Nagoya', 'Hakone', 'Tokyo'],
  stats: { days: 9, cities: 3, hotels: 3, activities: 10, transfers: 20 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['10 experiences', 'Activities'],
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
    quote: 'Four star hotels, ten included visits and a route timed for the blossom, from Kansai up to Tokyo.',
    quoteMore: 'Late March to early April is the window, and it moves north as the trip does. Book early, these dates sell out first.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days timed for the blossom: four nights in Osaka with Hiroshima and Miyajima, a city tour and a Kyoto day, a night in Nagoya via Nara and the Nabana no Sato lights, then three nights in Ginza reached over Hakone and Mount Fuji.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 8 nights in four star hotels with daily breakfast; bullet trains and coaches throughout; a guided day to Hiroshima with Miyajima island; a city tour of Osaka; a full day in Kyoto; Todai-ji temple with the Nara deer park; entry to the Nabana no Sato illuminations; the Hakone ropeway, a Lake Ashi cruise and the Mount Fuji fifth station; a guided Tokyo day with teamLab Planets tickets.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Osaka (Arrival)', text: 'Arrival at Kansai Airport and transfer to your hotel\nCheck in at your Osaka hotel\nRest of the day free at your own pace\nOptional: an evening along the Dotonbori canal', hotel: 'Rihga Royal Hotel', highlights: ['Arrival at Kansai Airport and transfer to your hotel', 'Check in at your Osaka hotel', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Hiroshima and Miyajima (B)', text: 'Early breakfast, then the bullet train west\nThe Peace Memorial Park and the A-Bomb Dome\nFerry across to Miyajima island\nThe floating torii gate before the train back', hotel: 'Rihga Royal Hotel', highlights: ['Early breakfast, then the bullet train west', 'The Peace Memorial Park and the A-Bomb Dome', 'Ferry across to Miyajima island'] },
    { title: 'Day 3: Osaka sightseeing (B)', text: 'Breakfast, then a guided day around Osaka\nOsaka castle and its park\nThe Dotonbori canal and Kuromon market\nAfternoon free in the city', hotel: 'Rihga Royal Hotel', highlights: ['Breakfast, then a guided day around Osaka', 'Osaka castle and its park', 'The Dotonbori canal and Kuromon market'] },
    { title: 'Day 4: A day in Kyoto (B)', text: 'Breakfast, then across to Kyoto for the day\nThe golden pavilion on its pond\nA Zen garden and the temple district\nThe torii gate paths above Fushimi', hotel: 'Rihga Royal Hotel', highlights: ['Breakfast, then across to Kyoto for the day', 'The golden pavilion on its pond', 'A Zen garden and the temple district'] },
    { title: 'Day 5: Nara and Nabana no Sato (B)', text: 'Breakfast and check out, then on to Nara\nTodai-ji and its great bronze Buddha\nThe deer park and its tame sika deer\nNabana no Sato illuminations, then Nagoya', hotel: 'The Strings Hotel', highlights: ['Breakfast and check out, then on to Nara', 'Todai-ji and its great bronze Buddha', 'The deer park and its tame sika deer'] },
    { title: 'Day 6: Hakone, Mount Fuji and Tokyo (B)', text: 'Breakfast and check out, then east to Hakone\nThe ropeway over the Owakudani vents\nA cruise across Lake Ashi\nThe Mount Fuji fifth station, then Tokyo', hotel: 'Quintessa Hotel Tokyo Ginza', highlights: ['Breakfast and check out, then east to Hakone', 'The ropeway over the Owakudani vents', 'A cruise across Lake Ashi'] },
    { title: 'Day 7: Tokyo and teamLab Planets (B)', text: 'Breakfast, then a guided day through Tokyo\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nteamLab Planets in the afternoon', hotel: 'Quintessa Hotel Tokyo Ginza', highlights: ['Breakfast, then a guided day through Tokyo', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 8: A free day in Tokyo (B)', text: 'Breakfast and a free day in Tokyo\nOptional: the Skytree or the Ghibli Museum\nOptional: Shibuya, Harajuku and the Omotesando lanes\nOptional: a day trip to Nikko or Kamakura', hotel: 'Quintessa Hotel Tokyo Ginza', highlights: ['Breakfast and a free day in Tokyo', 'Optional: the Skytree or the Ghibli Museum', 'Optional: Shibuya, Harajuku and the Omotesando lanes'] },
    { title: 'Day 9: Departure from Tokyo (B)', text: 'Breakfast at the hotel and check out\nTransfer to Narita or Haneda for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to Narita or Haneda for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const cherryBlossomTrailsJapanBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const cherryBlossomTrailsJapanProduct = {
  slug: detail.slug,
  places: ['Osaka', 'Hiroshima', 'Miyajima', 'Kyoto', 'Nagoya', 'Hakone', 'Tokyo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 10,
  transfers: 20,
  meals: 8,
  price: detail.price,
  images: cardImages
};
