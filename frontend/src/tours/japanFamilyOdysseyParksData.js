// Japan Family Odyssey with Both Parks. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg'),
  img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
  img('92vedp6ukl0p8g52c9g80bjubq6p_shutterstock_788638972.jpg'),
  img('rudp6bxggw53vaykvui9490l2twt_shutterstock_721643926.jpg'),
  img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
  img('tnr6dw1lihzobjh5bj5x09mp7nj0_shutterstock_793305754.jpg'),
  img('bod5zc2vlyf6hxsdznlki15x709y_mainR_01.jpg'),
  img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
  img('pme2kpd6zo6530pi31qoegli5gw5_shutterstock_2390555455.jpg'),
  img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg'),
  img('pcgbwwkgqbfu2982lragk0yyuxtt_Sumida_Park_2011.jpg'),
  img('eza7pai0tuvls4yy7l1nf1h52ioz_1617362184_Edo-Tokyo_Museum.jpg'),
  img('73lwr6ihkgjkyypyj9x24ukl24ym_Street%20Kart%20Tokyo%20Bay.png')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji and Disneyland',
    dayLabel: 'Day 1 to 5',
    images: [
      img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg'),
      img('soeej5dh7ua5fb98796aec6qre8x_shutterstock_129611225%20(2).jpg'),
      img('xdyj7i31bk427zhdgk2thbw2rv2d_shutterstock_572057020.jpg'),
      img('zcclccnpnk2b78cy9usi5x5zdoyk_shutterstock_666197236.jpg')
    ],
    dayImages: {
      1: [
        img('pcgbwwkgqbfu2982lragk0yyuxtt_Sumida_Park_2011.jpg'),
        img('eza7pai0tuvls4yy7l1nf1h52ioz_1617362184_Edo-Tokyo_Museum.jpg'),
        img('73lwr6ihkgjkyypyj9x24ukl24ym_Street%20Kart%20Tokyo%20Bay.png'),
        img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg')
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
      ],
      4: [
        img('tbzufp441ilceqhm2t56qker3mf2_image.jpg'),
        img('iele7cut7wosbp83440c5yyy4663_shutterstock_666196894.jpg'),
        img('18y3l04pv21bddj0wfbe5b2zdicy_tokyo-disneysea.png'),
        img('l22of6vt8v9e1xpnpy9ds8bcujak_Nakayama%20Pass%20Tokyo.png')
      ],
      5: [
        img('u64djmexd9srjx7ite2nn1s6v0xd_shutterstock_2055512132.jpg'),
        img('8l3nfuzgvhuh0eyewnb0gav1t7w8_1617351605_mickey-mause-832112_1920.jpg'),
        img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg'),
        img('soeej5dh7ua5fb98796aec6qre8x_shutterstock_129611225%20(2).jpg')
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
      'A shopping stop at the Gotemba outlets',
      `${DAY_MARK}Day 4 · A free day in Tokyo`,
      'Breakfast and a free day in Tokyo',
      'Optional: teamLab Planets or the Ghibli Museum',
      'Optional: Shibuya, Harajuku and the Omotesando lanes',
      'Optional: the Skytree observation decks',
      `${DAY_MARK}Day 5 · Tokyo Disneyland`,
      'Early breakfast, then across to Tokyo Disneyland',
      'Admission tickets included for the full day',
      'Evening free back in Shinjuku'
    ],
    accommodation: {
      name: 'Shinjuku Washington Hotel Annex, Tokyo',
      description: '5 nights · Breakfast · Super deluxe room · 4★ · Four star hotel in Shinjuku, a short walk from the station',
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
      },
      {
        name: 'Tokyo Disneyland',
        day: 5,
        optional: false,
        image: img('u64djmexd9srjx7ite2nn1s6v0xd_shutterstock_2055512132.jpg'),
        description: 'A full day at Tokyo Disneyland with your admission tickets included, so you can be at the gates when the park opens.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Five nights in one Shinjuku hotel with a city day, Mount Fuji with the Gotemba outlets, a free day and Tokyo Disneyland.',
      image: img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg')
    }
  },
  {
    letter: 'B',
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
      'Breakfast and check out, then transfer to the station',
      'Bullet train west to Kyoto',
      'Check in at your ryokan in Gion',
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
        name: 'Kyoto and Nara day trip',
        day: 7,
        optional: false,
        image: img('mwx6s89kahoera83qyd2vrirvf8u_[KyotoNaraDayTour]Arashiyamatrain,FushimiInariShrine%20(1).jpg'),
        description: 'Kinkaku-ji, the golden pavilion, then the deer park and Todai-ji temple in Nara, which holds the great bronze Buddha.'
      },
      {
        name: 'Arashiyama and the Sagano scenic train',
        day: 7,
        optional: false,
        image: img('ebjfufg76e72018e720vg87kgwq4_Togetsukyo-Bridge-Arashiyama.jpg'),
        description: 'The bamboo grove at Arashiyama and a ride on the open sided Sagano scenic train along the Hozugawa river gorge.'
      }
    ],
    program: {
      name: 'Kyoto',
      description: 'Two ryokan nights in Gion, with a day that takes in Kyoto, Nara and the bamboo grove and scenic train at Arashiyama.',
      image: img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Osaka',
    subtitle: 'Osaka to Universal Studios and Nabana no Sato',
    dayLabel: 'Day 8 to 11',
    images: [
      img('ej15n5xfj2cb7mr009esga4oml0w_shutterstock_1370574332.jpg'),
      img('idgqxbdhnqjuj74i3evh650mu98u_shutterstock_1576805158.jpg'),
      img('92vedp6ukl0p8g52c9g80bjubq6p_shutterstock_788638972.jpg'),
      img('rf2q8xarmubdq146v3y4624kctc7_shutterstock_209751268.jpg')
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
        img('ej15n5xfj2cb7mr009esga4oml0w_shutterstock_1370574332.jpg'),
        img('idgqxbdhnqjuj74i3evh650mu98u_shutterstock_1576805158.jpg')
      ],
      10: [
        img('z8wml2hpcxmnr4jbjewlh73ae0wm_Nabana%20no%20Sato-2.jpg'),
        img('3ylnmxrrfldqf8oz5lx3rnixqyxg_Kamagatani%20Valley-1.webp'),
        img('umsu8ptweryk02b7z0h7wal8omon_Nabana%20no%20Sato-1.webp'),
        img('ej15n5xfj2cb7mr009esga4oml0w_shutterstock_1370574332.jpg')
      ],
      11: [
        img('ej15n5xfj2cb7mr009esga4oml0w_shutterstock_1370574332.jpg'),
        img('idgqxbdhnqjuj74i3evh650mu98u_shutterstock_1576805158.jpg'),
        img('92vedp6ukl0p8g52c9g80bjubq6p_shutterstock_788638972.jpg'),
        img('rf2q8xarmubdq146v3y4624kctc7_shutterstock_209751268.jpg')
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
      `${DAY_MARK}Day 10 · Blossom and illuminations`,
      'Breakfast, then a day out to the blossom gardens',
      'Nabana no Sato in the late afternoon',
      'The light tunnels and fields after dark',
      'Back in Osaka in the evening',
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
        name: 'Sakura Magic and Nabana no Sato illumination',
        day: 10,
        optional: false,
        image: img('z8wml2hpcxmnr4jbjewlh73ae0wm_Nabana%20no%20Sato-2.jpg'),
        description: 'Blossom gardens by day and then Nabana no Sato after dark, where millions of lights are strung into tunnels and fields.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Three nights to finish with a walking tour, Universal Studios Japan and an evening at the Nabana no Sato illuminations.',
      image: img('ej15n5xfj2cb7mr009esga4oml0w_shutterstock_1370574332.jpg')
    }
  }
];

const detail = {
  slug: 'japan-family-odyssey-with-both-parks',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Japan Family Odyssey with Both Parks',
  alt: 'Illuminated tunnel of lights at Nabana no Sato, Japan',
  days: '11 days / 10 nights',
  stations: '3 stops',
  transport: 'Bullet train, private transfers and guided day tours',
  tag: 'Family',
  tags: ['Family', 'Culture'],
  price: 243472,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Disneyland', 'Kyoto', 'Arashiyama', 'Nara', 'Osaka'],
  stats: { days: 11, cities: 3, hotels: 3, activities: 8, transfers: 18 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['8 experiences', 'Activities'],
    ['18 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Five nights in one Tokyo hotel with a free day in the middle is what makes eleven days work with children.',
    quoteMore: 'Put the ryokan night in the middle of the trip, not at the start. By Kyoto the children are used to the food and the shoes-off routine is fun rather than strange.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eleven days for a family: five nights in Shinjuku with a city day, Mount Fuji with the Gotemba outlets and Tokyo Disneyland, two ryokan nights in Gion with Kyoto, Nara and Arashiyama, then three in Osaka with Universal Studios and the Nabana no Sato illuminations.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 10 nights with breakfast on most mornings; bullet trains between Tokyo, Kyoto and Osaka; private airport transfers; Tokyo sightseeing tour; Mount Fuji fifth station with Hakone and the Gotemba outlets; Tokyo Disneyland tickets; Kyoto and Nara day trip; Arashiyama with the Sagano scenic train; Osaka walking tour; Universal Studios Japan tickets; Sakura Magic and Nabana no Sato tour.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your Shinjuku hotel\nRest of the day free at your own pace\nOptional: the Tokyo Metropolitan Building viewing decks, free of charge', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your Shinjuku hotel', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo sightseeing (B)', text: 'Breakfast, then a guided day through the city\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in Shinjuku', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Breakfast, then a guided day through the city', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Mount Fuji and Gotemba (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone viewpoints\nA shopping stop at the Gotemba outlets', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone viewpoints'] },
    { title: 'Day 4: A free day in Tokyo (B)', text: 'Breakfast and a free day in Tokyo\nOptional: teamLab Planets or the Ghibli Museum\nOptional: Shibuya, Harajuku and the Omotesando lanes\nOptional: the Skytree observation decks', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Breakfast and a free day in Tokyo', 'Optional: teamLab Planets or the Ghibli Museum', 'Optional: Shibuya, Harajuku and the Omotesando lanes'] },
    { title: 'Day 5: Tokyo Disneyland (B)', text: 'Early breakfast, then across to Tokyo Disneyland\nAdmission tickets included for the full day\nEvening free back in Shinjuku', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Early breakfast, then across to Tokyo Disneyland', 'Admission tickets included for the full day', 'Evening free back in Shinjuku'] },
    { title: 'Day 6: Bullet train to Kyoto (B)', text: 'Breakfast and check out, then transfer to the station\nBullet train west to Kyoto\nCheck in at your ryokan in Gion\nOptional: an evening walk through Pontocho', hotel: 'Kyoto Ryokan Gion Sano', highlights: ['Breakfast and check out, then transfer to the station', 'Bullet train west to Kyoto', 'Check in at your ryokan in Gion'] },
    { title: 'Day 7: Kyoto, Nara and Arashiyama (-)', text: 'Breakfast, then a full day out with your guide\nKinkaku-ji, the golden pavilion, on its pond\nThe deer park and Todai-ji temple in Nara\nThe bamboo grove and Sagano scenic train at Arashiyama', hotel: 'Kyoto Ryokan Gion Sano', highlights: ['Breakfast, then a full day out with your guide', 'Kinkaku-ji, the golden pavilion, on its pond', 'The deer park and Todai-ji temple in Nara'] },
    { title: 'Day 8: On to Osaka and a walking tour (-)', text: 'Breakfast and check out, then the train to Osaka\nCheck in opposite Shin-Osaka station\nA half day walking tour of the city\nDotonbori and the Kuromon market stalls', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Breakfast and check out, then the train to Osaka', 'Check in opposite Shin-Osaka station', 'A half day walking tour of the city'] },
    { title: 'Day 9: Universal Studios Japan (B)', text: 'Early breakfast, then across to Universal Studios Japan\nTickets included for the full day\nSuper Nintendo World and the Harry Potter area\nEvening free in the city', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Early breakfast, then across to Universal Studios Japan', 'Tickets included for the full day', 'Super Nintendo World and the Harry Potter area'] },
    { title: 'Day 10: Blossom and illuminations (B)', text: 'Breakfast, then a day out to the blossom gardens\nNabana no Sato in the late afternoon\nThe light tunnels and fields after dark\nBack in Osaka in the evening', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Breakfast, then a day out to the blossom gardens', 'Nabana no Sato in the late afternoon', 'The light tunnels and fields after dark'] },
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

export const japanFamilyOdysseyParksBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const japanFamilyOdysseyParksProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Disneyland', 'Kyoto', 'Arashiyama', 'Nara', 'Osaka'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 11,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 8,
  transfers: 18,
  meals: 8,
  price: detail.price,
  images: cardImages
};
