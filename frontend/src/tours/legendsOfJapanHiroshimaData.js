// Legends of Japan with Hiroshima. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('wkz3rsmvvlhs2o7orc70p6masz8g_shutterstock_2248287787.jpg'),
  img('v8dhd0k6bqroomol92p84t0xmf1u_shutterstock_685846135%20(1).jpg'),
  img('i9klbfl00zb48dsdbko8ioz88wzx_shutterstock_513091054.jpg'),
  img('t70do4sx3jrtcq2v146hmuwx11x4_shutterstock_1201440004.jpg'),
  img('zbbx1ixoqg2typ8lp8xo56w85e4i_shutterstock_1439546591.jpg'),
  img('lnacm9xp9pgyiylr68qgl6aao0bp_shutterstock_2376751313.jpg'),
  img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg'),
  img('73svf06vwzmwzz5c9z7jwb9v8vjw_shutterstock_1751063663.jpg'),
  img('6mx3dets08l8fqucy8q5ptmmbaih_shutterstock_426748243.jpg'),
  img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('wkz3rsmvvlhs2o7orc70p6masz8g_shutterstock_2248287787.jpg'),
  img('v8dhd0k6bqroomol92p84t0xmf1u_shutterstock_685846135%20(1).jpg'),
  img('i9klbfl00zb48dsdbko8ioz88wzx_shutterstock_513091054.jpg'),
  img('zbbx1ixoqg2typ8lp8xo56w85e4i_shutterstock_1439546591.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji and Hakone',
    dayLabel: 'Day 1 to 4',
    images: [
      img('wkz3rsmvvlhs2o7orc70p6masz8g_shutterstock_2248287787.jpg'),
      img('a74yrec3cxa5xj70wfrgwnxkyusd_shutterstock_1666322071.jpg'),
      img('re7iw91kyn2u863knugl7cr3ojwm_shutterstock_2301094731.jpg'),
      img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg')
    ],
    dayImages: {
      1: [
        img('pcgbwwkgqbfu2982lragk0yyuxtt_Sumida_Park_2011.jpg'),
        img('6hzy1swk98chjdiqrq77p05ks1hp_shutterstock_402603553%20(1).jpg'),
        img('5zaop0gs0hj99wclc25wthm8rhcx_Rainbow_Bridge_(Tokyo)_at_night_8.jpg'),
        img('5d8zp8rm397hfvz02jntd54oueue_8221793202_67e195e47e_o.jpg')
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
        img('eza7pai0tuvls4yy7l1nf1h52ioz_1617362184_Edo-Tokyo_Museum.jpg'),
        img('niw86i1a8r1u1szdy86zzg506wbs_7802055432_10eee8a1e2_o.jpg'),
        img('jiig0t533s2mlh69taq29l4juz48_Kabuki-za_Theatre_2013_1125.jpg'),
        img('jlkstwh18usdjddohot9ti3p2z7r_1618899250_shutterstock_198478373.jpg')
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
      `${DAY_MARK}Day 4 · A free day in Tokyo`,
      'Breakfast and a free day in the city',
      'Optional: teamLab Planets or the Ghibli Museum',
      'Optional: Shibuya, Harajuku and the Omotesando lanes',
      'Optional: a day trip to Nikko by train'
    ],
    accommodation: {
      name: 'APA Hotel Shinjuku Kabukicho Chuo, Tokyo',
      description: '4 nights · Breakfast · Standard room · 3★ · Well placed hotel in Shinjuku, minutes from the station',
      images: [
        img('rs3elzkc1rrut6fk4247sps0kdms_download%20(2).png'),
        img('jkr5eckxbjif1c0qfhagseuibn8w_download%20(3).png'),
        img('aw5patnjnmem3hvxcez7wmc1x435_download.png'),
        img('0xrao4l0u3f2fu9xa5u0ofh859nn_download%20(6).png'),
        img('jmursjxr921isz0151hmm4nghc9b_download%20(1).png'),
        img('e36bxps39n38vbpd6rbds9as9cl7_download%20(4).png'),
        img('cm99fyb00i7w1yjnqnv6i16equ2h_download%20(5).png'),
        img('w3vj61jork4cblz9cf0xfm536cb2_download%20(7).png'),
        img('ngkqe7fvs3ag0t5vonca8vigou4d_download%20(8).png')
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
        name: 'Mount Fuji fifth station and Hakone',
        day: 3,
        optional: false,
        image: img('39ndql7vpg0emtn4pc108qs5bzwf_shutterstock_1023211282.jpg'),
        description: 'Up to the fifth station on Mount Fuji, then Lake Ashi and the Hakone ropeway, with the bullet train back into Tokyo in the evening.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Four nights in Shinjuku with a full city day, a Mount Fuji and Hakone day and a free day for the neighbourhoods.',
      image: img('wkz3rsmvvlhs2o7orc70p6masz8g_shutterstock_2248287787.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Hiroshima',
    subtitle: 'Hiroshima to Miyajima',
    dayLabel: 'Day 5 to 6',
    images: [
      img('hbuf91h5gymrr43a6gefj76r8ete_shutterstock_634895807.jpg'),
      img('v8dhd0k6bqroomol92p84t0xmf1u_shutterstock_685846135%20(1).jpg'),
      img('681tftxkry0y47i4ozl9chz9333t_shutterstock_294096194.jpg'),
      img('9gsnr4nv1g9jtu3xd9rimi0kxn50_shutterstock_720796201.jpg')
    ],
    dayImages: {
      5: [
        img('xa4j0wjprpfbgrj5ex3rnmz6kd92_Hiroshima-Castle-1024x683.jpg'),
        img('xx7adpg9x8y5bh7oaxh71c9mnhvn_shukkeien_garden_hiroshima_japan_016_xl.jpg'),
        img('c2zwqv2hq8mi2rcfuvucpq16lf69_IMG_4298.jpeg'),
        img('hbuf91h5gymrr43a6gefj76r8ete_shutterstock_634895807.jpg')
      ],
      6: [
        img('k3sf085wsu1ruds6z7cd2ie75wj2_shutterstock_252533968.jpg'),
        img('6hqk9raek422s1htdubidnhqa0h9_40003599095_3d03c153fd_o.jpg'),
        img('9lzrldxkzxmqnzanh56c0l82e2y6_30886221447_8ff83ea243_o.jpg'),
        img('rdl3mr0ytwltczrxe46lugdutz5l_52530995501_589c03192f_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Bullet train to Hiroshima`,
      'Breakfast and check out, then transfer to the station',
      'Shinkansen bullet train west to Hiroshima',
      'Check in at your hotel beside the station',
      'Rest of the day free in the city',
      `${DAY_MARK}Day 6 · Hiroshima and Miyajima`,
      'Breakfast, then the Peace Memorial Park and museum',
      'The A-Bomb Dome and the memorial cenotaph',
      'Ferry across to Miyajima island',
      'The floating torii gate and Itsukushima shrine'
    ],
    accommodation: {
      name: 'Hotel Granvia Hiroshima, Hiroshima',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel attached to Hiroshima station',
      images: [
        img('vh6t87px56f8qgnbib8y9dj0b0wo_220a0g00000084huz6008_R_960_660_R5_D.webp'),
        img('ucmf3k7tzeh1v0wjwlliljzwxc4l_20755565.jpg'),
        img('0m5rofn8mmx0zrgdddbs1imp9kcy_32353314.jpg'),
        img('3fg1r7p01el78mo7s8fa1bu4b9pq_56350572.jpg'),
        img('ny0af8z6003vibhk37vfwfge2awf_1200px-Hotel-Granvia-Hiroshima-2.jpg'),
        img('mml0xbc8fr7gdd35l6o8fd6x06up_227704046.jpg'),
        img('onx0vu7p1jxecvjmoksyt2q6rk20_17605782.jpg'),
        img('jfimy91g1ndyg1nafoup8lqo5ey0_227704660.jpg'),
        img('vrfjgrb5fqcnm6pr7ebyg66dic6g_17605936.jpg'),
        img('rzrnrhh5vjbnot0tahs6jzblhehi_18790932.jpg'),
        img('pmgep5nbw5ud2srgfb57h26y6pzp_109607952.jpg'),
        img('xz8vfae8uyhm5iwl3m5bk9smfqvi_17605922.jpg'),
        img('142nbvd87mzmgtsrz34ueln3x8qo_105925940.jpg'),
        img('yle1nh4dcpdzi8gunnjbhpun6emr_14215996.jpg'),
        img('l1z7pgufpbbxialog3aiv5dawdx1_105926076.jpg'),
        img('g8l90h2sw4okhu1bprgti3bg6rk5_187882799.jpg'),
        img('kncjhwfh4ej5rpgum1s5jp7naxq8_14216002.jpg'),
        img('txuf1dsuesdn7lf7llgl2dh5gel0_18790853.jpg'),
        img('cswo40mo9ldydj77mqv6zn2zce4m_227704960.jpg'),
        img('w4xorjvnnc4w3jkmwylh33igoky9_18790995.jpg'),
        img('9xmlburqb04r97w7543gjogycq1f_18790992.jpg')
      ]
    },
    activities: [
      {
        name: 'Hiroshima and Miyajima tour',
        day: 6,
        optional: false,
        image: img('k3sf085wsu1ruds6z7cd2ie75wj2_shutterstock_252533968.jpg'),
        description: 'The Peace Memorial Park and museum in the morning, then the ferry to Miyajima for the floating torii gate and Itsukushima shrine.'
      }
    ],
    program: {
      name: 'Hiroshima',
      description: 'Two nights beside the station, with a day that pairs the Peace Memorial Park with the island shrine at Miyajima.',
      image: img('hbuf91h5gymrr43a6gefj76r8ete_shutterstock_634895807.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Osaka',
    subtitle: 'Osaka to Kyoto and Nara',
    dayLabel: 'Day 7 to 11',
    images: [
      img('pme2kpd6zo6530pi31qoegli5gw5_shutterstock_2390555455.jpg'),
      img('ex1tslqukb3q5nhoyy35nitmlfbw_shutterstock_1322129618%20(1).jpg'),
      img('i9klbfl00zb48dsdbko8ioz88wzx_shutterstock_513091054.jpg'),
      img('kttil6ut49ym2i5xxgnx6cu72osn_shutterstock_630286787.jpg')
    ],
    dayImages: {
      7: [
        img('1cn9ugvideqjn8iv3g10d6ahpfty_1617195992_Osaka_Science_Museum_2020_Januar.jpg'),
        img('2hn59tmyw7g76wpw5js89g7jlxix_1619611599_shutterstock_560030653.jpg'),
        img('sujymokpjevxdzsy7qbkkl8uauc0_1617192483_Taman-Nakanoshima-Jepang-Kedamai.jpg'),
        img('5j6fefqxbxx17zmfusbgrdtk5fmt_1619611510_shutterstock_1494770918.jpg')
      ],
      8: [
        img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('gsoze09r8ko0sbu1ceztnf0kmd3l_shutterstock_1720970440.jpg')
      ],
      9: [
        img('is1ejpaqiwr1iwdimb7nx5ml1oja_shutterstock_1024765225.jpg'),
        img('q1ibrb7a4xu4nq4a2rql7r0u3zft_1617177625_river-5572289_1920.jpg'),
        img('nozs79tjbgfixymgrh3voo9bhf1z_Osaka_Dotonbori_Ebisu_Bridge.jpg'),
        img('8fd2fbhoaurwbsxmgzdldygvuzk4_53207269026_e76f09ed3d_o.jpg')
      ],
      10: [
        img('prlft4rmm7y6y2ja7qs3wngxt9nj_1617188433_100k1f000001gugmz756A.jpg'),
        img('wkyvzo7dz46exr45w06byx2tvsw7_1617188739_Tenjinbashi-suji.jpg'),
        img('p8j21hegqw0bms3xb5bmdhyumt22_1618899586_shutterstock_1737784967.jpg'),
        img('70u3tc8xuuarz97uhxty1b2m3rmq_1617192046_6dd23e1abb0539d588045e45b7e5ddfd.jpg')
      ],
      11: [
        img('pme2kpd6zo6530pi31qoegli5gw5_shutterstock_2390555455.jpg'),
        img('ex1tslqukb3q5nhoyy35nitmlfbw_shutterstock_1322129618%20(1).jpg'),
        img('i9klbfl00zb48dsdbko8ioz88wzx_shutterstock_513091054.jpg'),
        img('kttil6ut49ym2i5xxgnx6cu72osn_shutterstock_630286787.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · On to Osaka`,
      'Breakfast and check out, then back to the station',
      'Bullet train east to Osaka',
      'Check in at your hotel near Namba',
      'Rest of the day free in the city',
      `${DAY_MARK}Day 8 · Kyoto and Nara`,
      'Breakfast, then a full day out to Kyoto and Nara',
      'Kinkaku-ji, the golden pavilion, on its pond',
      'Buffet lunch included',
      'The deer park and Todai-ji temple in Nara',
      `${DAY_MARK}Day 9 · Osaka on foot`,
      'Breakfast, then a half day walking tour of Osaka',
      'Dotonbori and the Kuromon market stalls',
      'The lanes around Shinsekai with your guide',
      'Afternoon free in the city',
      `${DAY_MARK}Day 10 · A free day in Osaka`,
      'Breakfast and a free day in Osaka',
      'Optional: Universal Studios Japan for the day',
      'Optional: Osaka castle and its park',
      'Optional: a day trip to Himeji or Kobe by train',
      `${DAY_MARK}Day 11 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'Private transfer to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'Richmond Hotel Namba Daikokucho, Osaka',
      description: '4 nights · Breakfast · Standard room · 3★ · Comfortable hotel one stop from Namba, in central Osaka',
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
        name: 'Kyoto and Nara day trip',
        day: 8,
        optional: false,
        image: img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        description: 'Kinkaku-ji, the golden pavilion, then the deer park and Todai-ji temple in Nara, with a buffet lunch and coach travel from Namba.'
      },
      {
        name: 'Osaka walking tour',
        day: 9,
        optional: false,
        image: img('is1ejpaqiwr1iwdimb7nx5ml1oja_shutterstock_1024765225.jpg'),
        description: 'Half a day on foot through Dotonbori, the Kuromon market and the lanes around Shinsekai with a guide who knows where to eat.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Four nights to finish, with Kyoto and Nara, a walking tour of the food streets and a free day before you fly home.',
      image: img('pme2kpd6zo6530pi31qoegli5gw5_shutterstock_2390555455.jpg')
    }
  }
];

const detail = {
  slug: 'legends-of-japan-with-hiroshima',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Legends of Japan with Hiroshima',
  alt: 'The floating torii gate at Miyajima, Japan',
  days: '11 days / 10 nights',
  stations: '3 stops',
  transport: 'Shinkansen bullet train, private transfers and guided tours',
  tag: 'Grand tour',
  tags: ['Culture', 'Luxury'],
  price: 204458,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Hiroshima', 'Miyajima', 'Osaka', 'Kyoto', 'Nara'],
  stats: { days: 11, cities: 3, hotels: 3, activities: 5, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['12 transfers', 'Transport'],
    ['12 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Adding Hiroshima and Miyajima is what turns a Japan holiday into the trip people talk about years later.',
    quoteMore: 'Two free days are deliberate. Japan is tiring in the best way, and the Shinkansen means you can still add Nikko or Himeji on a whim.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eleven days from Tokyo to Kansai: four nights in Shinjuku with a city day and Mount Fuji, two in Hiroshima for the Peace Memorial Park and the floating torii gate at Miyajima, then four in Osaka with Kyoto, Nara and a walking tour.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 10 nights with daily breakfast; Shinkansen bullet train between Tokyo, Hiroshima and Osaka; private airport transfers; full day Tokyo city tour with lunch; Mount Fuji and Hakone day trip; Hiroshima and Miyajima tour; Kyoto and Nara day trip with buffet lunch; Osaka half day walking tour.',
  intro2: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your Shinjuku hotel\nRest of the day free at your own pace\nOptional: the Tokyo Metropolitan Building viewing decks, free of charge', hotel: 'APA Hotel Shinjuku Kabukicho Chuo', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your Shinjuku hotel', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo city tour (B, L)', text: 'Breakfast, then a full day coach tour of the city\nMeiji shrine and the Imperial Palace gardens\nLunch included on the tour\nAsakusa and the Senso-ji temple lanes', hotel: 'APA Hotel Shinjuku Kabukicho Chuo', highlights: ['Breakfast, then a full day coach tour of the city', 'Meiji shrine and the Imperial Palace gardens', 'Lunch included on the tour'] },
    { title: 'Day 3: Mount Fuji and Hakone (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone ropeway\nBullet train back into Tokyo in the evening', hotel: 'APA Hotel Shinjuku Kabukicho Chuo', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone ropeway'] },
    { title: 'Day 4: A free day in Tokyo (B)', text: 'Breakfast and a free day in the city\nOptional: teamLab Planets or the Ghibli Museum\nOptional: Shibuya, Harajuku and the Omotesando lanes\nOptional: a day trip to Nikko by train', hotel: 'APA Hotel Shinjuku Kabukicho Chuo', highlights: ['Breakfast and a free day in the city', 'Optional: teamLab Planets or the Ghibli Museum', 'Optional: Shibuya, Harajuku and the Omotesando lanes'] },
    { title: 'Day 5: Bullet train to Hiroshima (B)', text: 'Breakfast and check out, then transfer to the station\nShinkansen bullet train west to Hiroshima\nCheck in at your hotel beside the station\nRest of the day free in the city', hotel: 'Hotel Granvia Hiroshima', highlights: ['Breakfast and check out, then transfer to the station', 'Shinkansen bullet train west to Hiroshima', 'Check in at your hotel beside the station'] },
    { title: 'Day 6: Hiroshima and Miyajima (B)', text: 'Breakfast, then the Peace Memorial Park and museum\nThe A-Bomb Dome and the memorial cenotaph\nFerry across to Miyajima island\nThe floating torii gate and Itsukushima shrine', hotel: 'Hotel Granvia Hiroshima', highlights: ['Breakfast, then the Peace Memorial Park and museum', 'The A-Bomb Dome and the memorial cenotaph', 'Ferry across to Miyajima island'] },
    { title: 'Day 7: On to Osaka (B)', text: 'Breakfast and check out, then back to the station\nBullet train east to Osaka\nCheck in at your hotel near Namba\nRest of the day free in the city', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast and check out, then back to the station', 'Bullet train east to Osaka', 'Check in at your hotel near Namba'] },
    { title: 'Day 8: Kyoto and Nara (B, L)', text: 'Breakfast, then a full day out to Kyoto and Nara\nKinkaku-ji, the golden pavilion, on its pond\nBuffet lunch included\nThe deer park and Todai-ji temple in Nara', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast, then a full day out to Kyoto and Nara', 'Kinkaku-ji, the golden pavilion, on its pond', 'Buffet lunch included'] },
    { title: 'Day 9: Osaka on foot (B)', text: 'Breakfast, then a half day walking tour of Osaka\nDotonbori and the Kuromon market stalls\nThe lanes around Shinsekai with your guide\nAfternoon free in the city', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast, then a half day walking tour of Osaka', 'Dotonbori and the Kuromon market stalls', 'The lanes around Shinsekai with your guide'] },
    { title: 'Day 10: A free day in Osaka (B)', text: 'Breakfast and a free day in Osaka\nOptional: Universal Studios Japan for the day\nOptional: Osaka castle and its park\nOptional: a day trip to Himeji or Kobe by train', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast and a free day in Osaka', 'Optional: Universal Studios Japan for the day', 'Optional: Osaka castle and its park'] },
    { title: 'Day 11: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const legendsOfJapanHiroshimaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const legendsOfJapanHiroshimaProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Hiroshima', 'Miyajima', 'Osaka', 'Kyoto', 'Nara'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 11,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 5,
  transfers: 12,
  meals: 12,
  price: detail.price,
  images: cardImages
};
