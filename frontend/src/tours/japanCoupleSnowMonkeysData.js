// Japan Couple Getaway with Snow Monkeys. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('vqjfk14m6s6fxufma6bl6urcehak_gallery-2.jpg'),
  img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg'),
  img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
  img('nperxppzyea8k9fcvudr94ss24x6_shutterstock_272327813.jpg'),
  img('gj78fz8c0ymqhf34svyaxlbyx6e2_shutterstock_1017018754%20(1).jpg'),
  img('raxb9kxswnyu9cfxwl7hriz6e6dq_shutterstock_2464578063.jpg'),
  img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
  img('ptkkqebz4mj100bzruqlj5xbdczr_shutterstock_2268784351.jpg'),
  img('xwlhpz82r0k90be9vsoef19qcx6k_shutterstock_1901310499.jpg'),
  img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('vqjfk14m6s6fxufma6bl6urcehak_gallery-2.jpg'),
  img('9hdwl7e2hucnek1jhe8l9hwk9s9m_OWAKUDANI%20VALLEY.png'),
  img('bhqkjkp9r26gnr32grx0x1ygccx4_6005_top.jpg'),
  img('coejtrreokuqm3ua5uboz838cclw_matsumoto_castle_1-1024x704.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji',
    dayLabel: 'Day 1 to 3',
    images: [
      img('vqjfk14m6s6fxufma6bl6urcehak_gallery-2.jpg'),
      img('5mdbo6issuau8lpnanxf7d6qhgdi_shutterstock_1208574490.jpg'),
      img('ia89ezbshmwkpv1tpvpc0a2zc4k2_gallery-1.jpg'),
      img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg')
    ],
    dayImages: {
      1: [
        img('6hzy1swk98chjdiqrq77p05ks1hp_shutterstock_402603553%20(1).jpg'),
        img('5d8zp8rm397hfvz02jntd54oueue_8221793202_67e195e47e_o.jpg'),
        img('dvnb132y05sidy9r0omo9zqe0ram_15849220641_a5a96af87c_o.jpg'),
        img('vqjfk14m6s6fxufma6bl6urcehak_gallery-2.jpg')
      ],
      2: [
        img('ln9lthkbf3fh2phj519shusjemgc_shutterstock_1435466990.jpg'),
        img('nc2finq48tuhv9jgrm2c7pm097jz_1617362315_Sensoji-Temple-tokyo-scaled.jpg'),
        img('k4r7mg7wmv277ov1alfi1wctpvzf_1618899299_shutterstock_456532732.jpg'),
        img('l2ve6s75yoif0uquecbp9gh6poh6_Screenshot%202022-09-21%20164951.png')
      ],
      3: [
        img('fm7l8ugdzdu3knfcbz1r2t0n1ogm_shutterstock_2236560499.jpg'),
        img('mq1b6y8xt0nbhdf5ntp9hisjpp76_6922_01.jpg'),
        img('4ijejmm9p326y1f1f6t762u0izb6_shutterstock_1303030627%20(1).jpg'),
        img('9hdwl7e2hucnek1jhe8l9hwk9s9m_OWAKUDANI%20VALLEY.png')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Tokyo`,
      'Arrival at Narita or Haneda and transfer to your hotel',
      'Check in at your Shinjuku hotel',
      'Rest of the day free at your own pace',
      'Optional: the Tokyo Metropolitan Building viewing decks, free of charge',
      `${DAY_MARK}Day 2 · Tokyo sightseeing`,
      'Breakfast, then a guided day through the city',
      'Meiji shrine and the Imperial Palace gardens',
      'Asakusa and the Senso-ji temple lanes',
      'Evening free in Shinjuku',
      `${DAY_MARK}Day 3 · Mount Fuji and Gotemba`,
      'Breakfast, then out of the city towards Mount Fuji',
      'The fifth station on the mountain, weather permitting',
      'Lake Ashi and the Hakone viewpoints',
      'A shopping stop at the Gotemba outlets'
    ],
    accommodation: {
      name: 'Shinjuku Washington Hotel Annex, Tokyo',
      description: '3 nights · Breakfast · Super deluxe room · 4★ · Four star hotel in Shinjuku, a short walk from the station',
      images: [
        img('5xxzve0xthj993jtzjk7ktk3uu6h_pixelcut-export%20(1).jpeg'),
        img('i3yxzwe18ulp03frne8pk67dz260_4190725563809895-8af87888_z.png'),
        img('z7qmjecd45zdvg32hu1jel42gyh8_4190725563809895-2f11415d_z.png'),
        img('uqebg4ttfn10igi04ldyakc8h51s_pixelcut-export.jpeg'),
        img('eohlxoc941sctlbsjrhk2o70thav_4190725563809895-cc975d5d_z.png'),
        img('2dtdr47j869uiygsyfmmw20omoa0_pixelcut-export%20(1).jpeg'),
        img('0xlksm3m2vkh6grxvjoxqg50tgd1_4190725563809895-8e402282_z.png'),
        img('oqqxh5rgf0thm5it2x8h2hznxazy_4190725563809895-c97492a3_z.png')
      ]
    },
    activities: [
      {
        name: 'Tokyo sightseeing tour',
        day: 2,
        optional: false,
        image: img('ln9lthkbf3fh2phj519shusjemgc_shutterstock_1435466990.jpg'),
        description: 'A guided day from the LOVE statue in Shinjuku through Meiji shrine, the Imperial Palace gardens and the temple lanes of Asakusa.'
      },
      {
        name: 'Mount Fuji, Hakone and Gotemba outlets',
        day: 3,
        optional: false,
        image: img('fm7l8ugdzdu3knfcbz1r2t0n1ogm_shutterstock_2236560499.jpg'),
        description: 'The fifth station on Mount Fuji, Lake Ashi in Hakone and a shopping stop at the Gotemba outlets on the way back.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Three nights in Shinjuku with a guided city day and the Mount Fuji fifth station with the Gotemba outlets.',
      image: img('vqjfk14m6s6fxufma6bl6urcehak_gallery-2.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Nagano',
    dayLabel: 'Day 4 to 5',
    images: [
      img('raxb9kxswnyu9cfxwl7hriz6e6dq_shutterstock_2464578063.jpg'),
      img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg')
    ],
    dayImages: {
      4: [
        img('bhqkjkp9r26gnr32grx0x1ygccx4_6005_top.jpg'),
        img('coejtrreokuqm3ua5uboz838cclw_matsumoto_castle_1-1024x704.jpg'),
        img('raxb9kxswnyu9cfxwl7hriz6e6dq_shutterstock_2464578063.jpg'),
        img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg')
      ],
      5: [
        img('pnvpps8nmrnpkcqtug43bikvj3h2_Zenkoji-2.jpg'),
        img('glvvy2079nzaqhmmd7wfo2enbc02_8668551948_a995d63ec2_b.jpg'),
        img('yygb1wvvs8vkalt4i206rz7ah6vo_Jigokudani%20Yaen-Koen-1.jpg'),
        img('l58h2rpdyefy0o8sjov25ntliaiy_Nishinomon-Yoshinoya%20Sake%20Brewery-1.webp')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · On to the Nagano mountains`,
      'Breakfast and check out, then the train north',
      'Check in at Nozawa Onsen in the mountains',
      'Rest of the day free at the hot spring baths',
      'Optional: a walk through the old village lanes',
      `${DAY_MARK}Day 5 · Snow monkeys and sake`,
      'Breakfast, then a full day out with your guide',
      'The macaques bathing at Jigokudani',
      'Zenkoji temple in Nagano',
      'A tasting at an old sake brewery'
    ],
    accommodation: {
      name: 'Nozawa Grand Hotel, Nagano',
      description: '2 nights · Breakfast · Deluxe room · 3★ · Mountain hotel at Nozawa Onsen, with hot spring baths',
      images: [
        img('02p8fy015jtcv64i80x6isrdts1v_5540162.jpg'),
        img('7blloz2yxvrkyquwl3rmcf4hsiqa_5540152.jpg'),
        img('yid3rr2cn7uv835zih6ihdm8c4tn_14031816.jpg'),
        img('vv4l5hbeazv3t5xxwlawetq80bx2_14031818.jpg'),
        img('l4wn580c2k0vztsebxteiqeeohio_14031817.jpg'),
        img('4lwd0fiq1qi26dikf5h2jjjp4jez_14031803.jpg'),
        img('t0zhhdgtbwh5i95yt3yjctch2fkp_5540041.jpg'),
        img('ftmkfck2vudd5ldhygj2rva7zys8_14031819.jpg'),
        img('w13mdel0czq3bn3acbwxecpg078p_5538208.jpg')
      ]
    },
    activities: [
      {
        name: 'Snow monkeys, Zenkoji temple and a sake tasting',
        day: 5,
        optional: false,
        image: img('pnvpps8nmrnpkcqtug43bikvj3h2_Zenkoji-2.jpg'),
        description: 'The macaques bathing at Jigokudani, Nagano\'s great Zenkoji temple and a tasting at one of the valley\'s old sake breweries.'
      }
    ],
    program: {
      name: 'Nagano',
      description: 'Two nights in the mountains at Nozawa Onsen, with the snow monkeys, Zenkoji temple and a sake tasting.',
      image: img('raxb9kxswnyu9cfxwl7hriz6e6dq_shutterstock_2464578063.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Kyoto',
    subtitle: 'Kyoto to Nara and Arashiyama',
    dayLabel: 'Day 6 to 7',
    images: [
      img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
      img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
      img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg')
    ],
    dayImages: {
      6: [
        img('j8xcq76t3o64yxmui5m4kt22wejq_52980159201_640a74d15d_o.jpg'),
        img('z7kchmsvf5ofta3efir0gv006ml9_3902_top.jpg'),
        img('nw809kt3nky9u7tvyxvc76ue98gy_JF4_063392.jpg'),
        img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg')
      ],
      7: [
        img('mwx6s89kahoera83qyd2vrirvf8u_[KyotoNaraDayTour]Arashiyamatrain,FushimiInariShrine%20(1).jpg'),
        img('gsoze09r8ko0sbu1ceztnf0kmd3l_shutterstock_1720970440.jpg'),
        img('175jjcq0s03pjbxnrgbvss1n0fyf_Fushimi%20Inari%20Taisha-1.jpg'),
        img('itn4b1gsmar7c1zpcwr0qwfb2fit_unnamed%20(5).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Bullet train to Kyoto`,
      'Breakfast and check out, then the train to Kyoto',
      'Check in at your ryokan in Gion',
      'Futons, tatami and a soak in the shared bath',
      'Optional: an evening walk through Pontocho',
      `${DAY_MARK}Day 7 · Kyoto, Nara and Arashiyama`,
      'Breakfast, then a full day out with your guide',
      'Kinkaku-ji, the golden pavilion, on its pond',
      'The deer park and Todai-ji temple in Nara',
      'The bamboo grove and Sagano scenic train at Arashiyama'
    ],
    accommodation: {
      name: 'Kyoto Ryokan Gion Sano, Kyoto',
      description: '2 nights · Breakfast · Deluxe room · 3★ · Small ryokan in the Gion lanes, tatami rooms and a shared bath',
      images: [
        img('lojbk3roa5cbw79gcenww6gjqox7_Kyoto%20Ryokan%20Gion%20Sano-1.webp'),
        img('jtlqdmbyubh58tgi2kxajvb06xqg_Kyoto%20Ryokan%20Gion%20Sano-5.webp'),
        img('nzuhx72cytdgbfmq12a1pty0iyxf_Kyoto%20Ryokan%20Gion%20Sano-3.webp'),
        img('hilauyytcudrgiwc4obngtey1tyo_Kyoto%20Ryokan%20Gion%20Sano-4.webp'),
        img('mfofykresk307vqvd4dzgnwi0ssj_Kyoto%20Ryokan%20Gion%20Sano-2.webp')
      ]
    },
    activities: [
      {
        name: 'Kyoto, Nara and Arashiyama',
        day: 7,
        optional: false,
        image: img('mwx6s89kahoera83qyd2vrirvf8u_[KyotoNaraDayTour]Arashiyamatrain,FushimiInariShrine%20(1).jpg'),
        description: 'Kinkaku-ji and the deer park at Nara, then the bamboo grove at Arashiyama with a ride on the open sided Sagano scenic train.'
      }
    ],
    program: {
      name: 'Kyoto',
      description: 'Two ryokan nights in Gion, with a quiet arrival day and a full day through Kyoto, Nara and Arashiyama.',
      image: img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Osaka',
    subtitle: 'Osaka to Universal Studios and Hiroshima',
    dayLabel: 'Day 8 to 11',
    images: [
      img('tnr6dw1lihzobjh5bj5x09mp7nj0_shutterstock_793305754.jpg'),
      img('d52y3g1627qkpcuaym0v8w467dir_shutterstock_1075480004.jpg'),
      img('f0sfzrqf6mi7f98e2tuutgge6hk4_shutterstock_1900954018.jpg'),
      img('nperxppzyea8k9fcvudr94ss24x6_shutterstock_272327813.jpg')
    ],
    dayImages: {
      8: [
        img('t7o4c4oy73osh6vb4q24lzmx6pd2_Osaka%20Castle-2.jpg'),
        img('dwt6ckxokuqpaeo9sopjgm2kjgnq_1617177290_castle-5476737_1920.jpg'),
        img('q1ibrb7a4xu4nq4a2rql7r0u3zft_1617177625_river-5572289_1920.jpg'),
        img('i7nrvo8z1e7l0al6blhkoqjixwpa_shinsekai.jpg')
      ],
      9: [
        img('z0gbue61m658oh3uz9206hthu9lt_USJ-Osaka-iStock-ymgerman-1024x752.jpg'),
        img('dzrrvkhl3x0bs4kcwkfqceusw3fe_1617186371_1200px-USJ_5years.jpg'),
        img('tnr6dw1lihzobjh5bj5x09mp7nj0_shutterstock_793305754.jpg'),
        img('d52y3g1627qkpcuaym0v8w467dir_shutterstock_1075480004.jpg')
      ],
      10: [
        img('k3sf085wsu1ruds6z7cd2ie75wj2_shutterstock_252533968.jpg'),
        img('6hqk9raek422s1htdubidnhqa0h9_40003599095_3d03c153fd_o.jpg'),
        img('9lzrldxkzxmqnzanh56c0l82e2y6_30886221447_8ff83ea243_o.jpg'),
        img('rdl3mr0ytwltczrxe46lugdutz5l_52530995501_589c03192f_o.jpg')
      ],
      11: [
        img('tnr6dw1lihzobjh5bj5x09mp7nj0_shutterstock_793305754.jpg'),
        img('d52y3g1627qkpcuaym0v8w467dir_shutterstock_1075480004.jpg'),
        img('f0sfzrqf6mi7f98e2tuutgge6hk4_shutterstock_1900954018.jpg'),
        img('nperxppzyea8k9fcvudr94ss24x6_shutterstock_272327813.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · On to Osaka and a walking tour`,
      'Breakfast and check out, then the train to Osaka',
      'Check in opposite Shin-Osaka station',
      'A half day walking tour of the city',
      'Dotonbori and the Kuromon market stalls',
      `${DAY_MARK}Day 9 · Universal Studios Japan`,
      'Early breakfast, then across to Universal Studios Japan',
      'Tickets included for the full day',
      'Super Nintendo World and the Harry Potter area',
      'Evening free in the city',
      `${DAY_MARK}Day 10 · Hiroshima and Miyajima`,
      'Early breakfast, then a full day west',
      'The Peace Memorial Park and the A-Bomb Dome',
      'Ferry across to Miyajima island',
      'The floating torii gate before the ride back',
      `${DAY_MARK}Day 11 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'Private transfer to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'APA Hotel Shin Osaka Ekimae, Osaka',
      description: '3 nights · Breakfast · Standard room · 3★ · Simple hotel opposite Shin-Osaka station, handy for the trains',
      images: [
        img('ah66h1vh6wudb3995119k30usoaq_APA%20Hotel%20Shin%20Osaka%20Ekimae-1.webp'),
        img('cy3uvlr3hth9ri8zm8998swddotj_APA%20Hotel%20Shin%20Osaka%20Ekimae-6.webp'),
        img('p9u8gxrilfwf8qyr1sbevr0411yh_APA%20Hotel%20Shin%20Osaka%20Ekimae-3.webp'),
        img('by69ive16anhtuv4pmtkdeyxlf9r_APA%20Hotel%20Shin%20Osaka%20Ekimae-4.webp'),
        img('nu2xq3hh9za0jkjrk9ooba4pnqcx_APA%20Hotel%20Shin%20Osaka%20Ekimae-2.webp'),
        img('ulc5h15cuhxgeambladv8hzljxom_APA%20Hotel%20Shin%20Osaka%20Ekimae-5.webp')
      ]
    },
    activities: [
      {
        name: 'Osaka walking tour',
        day: 8,
        optional: false,
        image: img('t7o4c4oy73osh6vb4q24lzmx6pd2_Osaka%20Castle-2.jpg'),
        description: 'Half a day on foot through Dotonbori, the Kuromon market and the lanes around Shinsekai with a guide who knows where to eat.'
      },
      {
        name: 'Universal Studios Japan',
        day: 9,
        optional: false,
        image: img('z0gbue61m658oh3uz9206hthu9lt_USJ-Osaka-iStock-ymgerman-1024x752.jpg'),
        description: 'A full day at Universal Studios Japan with tickets included, home to Super Nintendo World and the Harry Potter area.'
      },
      {
        name: 'Hiroshima and Miyajima day trip',
        day: 10,
        optional: false,
        image: img('k3sf085wsu1ruds6z7cd2ie75wj2_shutterstock_252533968.jpg'),
        description: 'A long day west to the Peace Memorial Park, then the ferry to Miyajima for the floating torii gate and Itsukushima shrine.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Three nights in Osaka with a walking tour, Universal Studios Japan and a day out to Hiroshima and Miyajima.',
      image: img('tnr6dw1lihzobjh5bj5x09mp7nj0_shutterstock_793305754.jpg')
    }
  }
];

const detail = {
  slug: 'japan-couple-getaway-with-snow-monkeys',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Japan Couple Getaway with Snow Monkeys',
  alt: 'Macaques in the steaming hot spring at Jigokudani, Nagano',
  days: '11 days / 10 nights',
  stations: '4 stops',
  transport: 'Bullet trains, private transfers and guided day tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Nature'],
  price: 253851,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Nagano', 'Kyoto', 'Nara', 'Osaka', 'Hiroshima'],
  stats: { days: 11, cities: 4, hotels: 4, activities: 7, transfers: 20 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
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
    quote: 'Two nights in the Nagano mountains is what lifts this above the usual Tokyo and Kyoto week. Hot spring baths and monkeys.',
    quoteMore: 'Nozawa Onsen has free public baths dotted through the village. Take a small towel and work your way round after the monkeys.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eleven days for two: three nights in Shinjuku with a city day and Mount Fuji, two in the Nagano mountains for the snow monkeys and a sake tasting, two ryokan nights in Gion with Kyoto, Nara and Arashiyama, then three in Osaka with Universal Studios and Hiroshima.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 10 nights with breakfast on most mornings, including a mountain hotel at Nozawa Onsen and a Kyoto ryokan; bullet trains throughout; private airport transfers; Tokyo sightseeing tour; Mount Fuji fifth station with Hakone and the Gotemba outlets; snow monkeys, Zenkoji temple and sake day trip; Kyoto and Nara tour with Arashiyama and the Sagano train; Osaka walking tour; Universal Studios Japan tickets; Hiroshima and Miyajima tour.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your Shinjuku hotel\nRest of the day free at your own pace\nOptional: the Tokyo Metropolitan Building viewing decks, free of charge', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your Shinjuku hotel', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo sightseeing (B)', text: 'Breakfast, then a guided day through the city\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in Shinjuku', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Breakfast, then a guided day through the city', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Mount Fuji and Gotemba (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone viewpoints\nA shopping stop at the Gotemba outlets', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone viewpoints'] },
    { title: 'Day 4: On to the Nagano mountains (B)', text: 'Breakfast and check out, then the train north\nCheck in at Nozawa Onsen in the mountains\nRest of the day free at the hot spring baths\nOptional: a walk through the old village lanes', hotel: 'Nozawa Grand Hotel', highlights: ['Breakfast and check out, then the train north', 'Check in at Nozawa Onsen in the mountains', 'Rest of the day free at the hot spring baths'] },
    { title: 'Day 5: Snow monkeys and sake (B)', text: 'Breakfast, then a full day out with your guide\nThe macaques bathing at Jigokudani\nZenkoji temple in Nagano\nA tasting at an old sake brewery', hotel: 'Nozawa Grand Hotel', highlights: ['Breakfast, then a full day out with your guide', 'The macaques bathing at Jigokudani', 'Zenkoji temple in Nagano'] },
    { title: 'Day 6: Bullet train to Kyoto (B)', text: 'Breakfast and check out, then the train to Kyoto\nCheck in at your ryokan in Gion\nFutons, tatami and a soak in the shared bath\nOptional: an evening walk through Pontocho', hotel: 'Kyoto Ryokan Gion Sano', highlights: ['Breakfast and check out, then the train to Kyoto', 'Check in at your ryokan in Gion', 'Futons, tatami and a soak in the shared bath'] },
    { title: 'Day 7: Kyoto, Nara and Arashiyama (-)', text: 'Breakfast, then a full day out with your guide\nKinkaku-ji, the golden pavilion, on its pond\nThe deer park and Todai-ji temple in Nara\nThe bamboo grove and Sagano scenic train at Arashiyama', hotel: 'Kyoto Ryokan Gion Sano', highlights: ['Breakfast, then a full day out with your guide', 'Kinkaku-ji, the golden pavilion, on its pond', 'The deer park and Todai-ji temple in Nara'] },
    { title: 'Day 8: On to Osaka and a walking tour (-)', text: 'Breakfast and check out, then the train to Osaka\nCheck in opposite Shin-Osaka station\nA half day walking tour of the city\nDotonbori and the Kuromon market stalls', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Breakfast and check out, then the train to Osaka', 'Check in opposite Shin-Osaka station', 'A half day walking tour of the city'] },
    { title: 'Day 9: Universal Studios Japan (B)', text: 'Early breakfast, then across to Universal Studios Japan\nTickets included for the full day\nSuper Nintendo World and the Harry Potter area\nEvening free in the city', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Early breakfast, then across to Universal Studios Japan', 'Tickets included for the full day', 'Super Nintendo World and the Harry Potter area'] },
    { title: 'Day 10: Hiroshima and Miyajima (B)', text: 'Early breakfast, then a full day west\nThe Peace Memorial Park and the A-Bomb Dome\nFerry across to Miyajima island\nThe floating torii gate before the ride back', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Early breakfast, then a full day west', 'The Peace Memorial Park and the A-Bomb Dome', 'Ferry across to Miyajima island'] },
    { title: 'Day 11: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Japan', href: '/asien/japan' },
  { label: detail.title }
];

export const japanCoupleSnowMonkeysBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const japanCoupleSnowMonkeysProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Nagano', 'Kyoto', 'Nara', 'Osaka', 'Hiroshima'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 11,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 7,
  transfers: 20,
  meals: 8,
  price: detail.price,
  images: cardImages
};
