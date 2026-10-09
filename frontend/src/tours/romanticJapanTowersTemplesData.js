// Romantic Japan: Towers and Temples. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg'),
  img('fdoqvdame8oqu21oq20porps9va3_shutterstock_575444659.jpg'),
  img('7z6zke7b8kmw08mkqkclicf3rawn_shutterstock_310072442.jpg'),
  img('g01jqzigcq3a7lifmh3xti6bmutl_shutterstock_162338060.jpg'),
  img('xwlhpz82r0k90be9vsoef19qcx6k_shutterstock_1901310499.jpg'),
  img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg'),
  img('9gxo0w9zfmmbmjg8895gp4h3leqm_shutterstock_1966867324.jpg'),
  img('a3klwqjmrp3w9t5hfpniopbrg0ho_shutterstock_2333983371.jpg'),
  img('wkz3rsmvvlhs2o7orc70p6masz8g_shutterstock_2248287787.jpg'),
  img('ej15n5xfj2cb7mr009esga4oml0w_shutterstock_1370574332.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg'),
  img('7z6zke7b8kmw08mkqkclicf3rawn_shutterstock_310072442.jpg'),
  img('dvnb132y05sidy9r0omo9zqe0ram_15849220641_a5a96af87c_o.jpg'),
  img('ln9lthkbf3fh2phj519shusjemgc_shutterstock_1435466990.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Disneyland and Mount Fuji',
    dayLabel: 'Day 1 to 4',
    images: [
      img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg'),
      img('gj78fz8c0ymqhf34svyaxlbyx6e2_shutterstock_1017018754%20(1).jpg'),
      img('xhgc9a10q89566kee3xewg2tdxbu_shutterstock_245037472.jpg'),
      img('7z6zke7b8kmw08mkqkclicf3rawn_shutterstock_310072442.jpg')
    ],
    dayImages: {
      1: [
        img('6hzy1swk98chjdiqrq77p05ks1hp_shutterstock_402603553%20(1).jpg'),
        img('5d8zp8rm397hfvz02jntd54oueue_8221793202_67e195e47e_o.jpg'),
        img('dvnb132y05sidy9r0omo9zqe0ram_15849220641_a5a96af87c_o.jpg'),
        img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg')
      ],
      2: [
        img('ln9lthkbf3fh2phj519shusjemgc_shutterstock_1435466990.jpg'),
        img('nc2finq48tuhv9jgrm2c7pm097jz_1617362315_Sensoji-Temple-tokyo-scaled.jpg'),
        img('k4r7mg7wmv277ov1alfi1wctpvzf_1618899299_shutterstock_456532732.jpg'),
        img('l2ve6s75yoif0uquecbp9gh6poh6_Screenshot%202022-09-21%20164951.png')
      ],
      3: [
        img('u64djmexd9srjx7ite2nn1s6v0xd_shutterstock_2055512132.jpg'),
        img('8l3nfuzgvhuh0eyewnb0gav1t7w8_1617351605_mickey-mause-832112_1920.jpg'),
        img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg'),
        img('gj78fz8c0ymqhf34svyaxlbyx6e2_shutterstock_1017018754%20(1).jpg')
      ],
      4: [
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
      `${DAY_MARK}Day 3 · Tokyo Disneyland`,
      'Early breakfast, then across to Tokyo Disneyland',
      'Admission tickets included for the full day',
      'Evening free back in Shinjuku',
      `${DAY_MARK}Day 4 · Mount Fuji and Gotemba`,
      'Breakfast, then out of the city towards Mount Fuji',
      'The fifth station on the mountain, weather permitting',
      'Lake Ashi and the Hakone viewpoints',
      'A shopping stop at the Gotemba outlets'
    ],
    accommodation: {
      name: 'Shinjuku Washington Hotel Annex, Tokyo',
      description: '4 nights · Breakfast · Super deluxe room · 4★ · Four star hotel in Shinjuku, a short walk from the station',
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
        name: 'Tokyo Disneyland',
        day: 3,
        optional: false,
        image: img('u64djmexd9srjx7ite2nn1s6v0xd_shutterstock_2055512132.jpg'),
        description: 'A full day at Tokyo Disneyland with your admission tickets included, so you can be at the gates when the park opens.'
      },
      {
        name: 'Mount Fuji, Hakone and Gotemba outlets',
        day: 4,
        optional: false,
        image: img('fm7l8ugdzdu3knfcbz1r2t0n1ogm_shutterstock_2236560499.jpg'),
        description: 'The fifth station on Mount Fuji, Lake Ashi in Hakone and a shopping stop at the Gotemba outlets on the way back.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Four nights in Shinjuku for the two of you, with a city day, Disneyland and the mountain with the outlets.',
      image: img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Osaka',
    subtitle: 'Osaka to Universal Studios',
    dayLabel: 'Day 5 to 9',
    images: [
      img('n6o4af4ttsz5fvnf4luy4m8mkuit_shutterstock_1873243030.jpg'),
      img('fdoqvdame8oqu21oq20porps9va3_shutterstock_575444659.jpg'),
      img('ak7a5cwtaszfalvktkldmcm7rnm0_shutterstock_2321474899.jpg'),
      img('ug749uyawgi0crazlxtbrjwlx10y_shutterstock_281002256.jpg')
    ],
    dayImages: {
      5: [
        img('nozs79tjbgfixymgrh3voo9bhf1z_Osaka_Dotonbori_Ebisu_Bridge.jpg'),
        img('8eqfd09dtnyk0o5zl4ckmcl3qcjv_teamLab%20Botanical%20Garden%20Osaka%20(1).png'),
        img('qt8xpjtgf4n47anz6bv7cbtfoc3d_1617184992_tower-5719067_1920.jpg'),
        img('6ler7sujf35tfk5o4c0knfk97jlp_1617178150_osaka-2159435_1920.jpg')
      ],
      6: [
        img('t7o4c4oy73osh6vb4q24lzmx6pd2_Osaka%20Castle-2.jpg'),
        img('dwt6ckxokuqpaeo9sopjgm2kjgnq_1617177290_castle-5476737_1920.jpg'),
        img('q1ibrb7a4xu4nq4a2rql7r0u3zft_1617177625_river-5572289_1920.jpg'),
        img('i7nrvo8z1e7l0al6blhkoqjixwpa_shinsekai.jpg')
      ],
      7: [
        img('z0gbue61m658oh3uz9206hthu9lt_USJ-Osaka-iStock-ymgerman-1024x752.jpg'),
        img('dzrrvkhl3x0bs4kcwkfqceusw3fe_1617186371_1200px-USJ_5years.jpg'),
        img('n6o4af4ttsz5fvnf4luy4m8mkuit_shutterstock_1873243030.jpg'),
        img('fdoqvdame8oqu21oq20porps9va3_shutterstock_575444659.jpg')
      ],
      8: [
        img('2wlx7w6wiyazb20ydbkvnjzmyhri_1617184267_1pNqAoqzxTJKSXnV27DrpxA.jpg'),
        img('5j6fefqxbxx17zmfusbgrdtk5fmt_1619611510_shutterstock_1494770918.jpg'),
        img('6fgbls7elwmdsmdd84t1bya267gj_view004-001.jpg'),
        img('n6o4af4ttsz5fvnf4luy4m8mkuit_shutterstock_1873243030.jpg')
      ],
      9: [
        img('n6o4af4ttsz5fvnf4luy4m8mkuit_shutterstock_1873243030.jpg'),
        img('fdoqvdame8oqu21oq20porps9va3_shutterstock_575444659.jpg'),
        img('ak7a5cwtaszfalvktkldmcm7rnm0_shutterstock_2321474899.jpg'),
        img('ug749uyawgi0crazlxtbrjwlx10y_shutterstock_281002256.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Bullet train to Osaka`,
      'Breakfast and check out, then transfer to the station',
      'Bullet train south to Osaka',
      'Check in opposite Shin-Osaka station',
      'Rest of the day free in the city',
      `${DAY_MARK}Day 6 · Osaka on foot`,
      'Breakfast, then a half day walking tour of Osaka',
      'Dotonbori and the Kuromon market stalls',
      'The lanes around Shinsekai with your guide',
      'Afternoon free in the city',
      `${DAY_MARK}Day 7 · Universal Studios Japan`,
      'Early breakfast, then across to Universal Studios Japan',
      'Tickets included for the full day',
      'Super Nintendo World and the Harry Potter area',
      'Evening free in the city',
      `${DAY_MARK}Day 8 · A free day in Osaka`,
      'Breakfast and a free day in Osaka',
      'Optional: a day in Kyoto, fifteen minutes by bullet train',
      'Optional: Osaka castle and its park',
      'Optional: Kobe for beef and the harbour',
      `${DAY_MARK}Day 9 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'Private transfer to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'APA Hotel Shin Osaka Ekimae, Osaka',
      description: '4 nights · Breakfast · Standard room · 3★ · Simple hotel opposite Shin-Osaka station, handy for the trains',
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
        day: 6,
        optional: false,
        image: img('t7o4c4oy73osh6vb4q24lzmx6pd2_Osaka%20Castle-2.jpg'),
        description: 'Half a day on foot through Dotonbori, the Kuromon market and the lanes around Shinsekai with a guide who knows where to eat.'
      },
      {
        name: 'Universal Studios Japan',
        day: 7,
        optional: false,
        image: img('z0gbue61m658oh3uz9206hthu9lt_USJ-Osaka-iStock-ymgerman-1024x752.jpg'),
        description: 'A full day at Universal Studios Japan with tickets included, home to Super Nintendo World and the Harry Potter area.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Four nights in Osaka with a walking tour, Universal Studios Japan and two free days for Kyoto, Kobe or the food streets.',
      image: img('n6o4af4ttsz5fvnf4luy4m8mkuit_shutterstock_1873243030.jpg')
    }
  }
];

const detail = {
  slug: 'romantic-japan-towers-and-temples',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Romantic Japan: Towers and Temples',
  alt: 'Tokyo Tower lit at dusk above the rooftops, Japan',
  days: '9 days / 8 nights',
  stations: '2 stops',
  transport: 'Bullet train, private transfers and guided day tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Culture'],
  price: 199548,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Disneyland', 'Mount Fuji', 'Gotemba', 'Osaka'],
  stats: { days: 9, cities: 2, hotels: 2, activities: 5, transfers: 13 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['13 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two hotels, nine days and two free days. Couples who want Japan without a packing schedule book this one.',
    quoteMore: 'Kyoto is fifteen minutes from Shin-Osaka by bullet train, so use a free day for it and go early before the coaches arrive.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days for two between Tokyo and Osaka: four nights in Shinjuku with a city day, Tokyo Disneyland and the Mount Fuji fifth station with the Gotemba outlets, then four nights in Osaka with a walking tour, Universal Studios and free days for Kyoto or Kobe.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 8 nights with daily breakfast; bullet train from Tokyo to Osaka; private airport transfers; Tokyo sightseeing tour; Tokyo Disneyland tickets; Mount Fuji fifth station with Hakone and the Gotemba outlets; Osaka walking tour; Universal Studios Japan tickets.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your Shinjuku hotel\nRest of the day free at your own pace\nOptional: the Tokyo Metropolitan Building viewing decks, free of charge', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your Shinjuku hotel', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo sightseeing (B)', text: 'Breakfast, then a guided day through the city\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in Shinjuku', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Breakfast, then a guided day through the city', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Tokyo Disneyland (B)', text: 'Early breakfast, then across to Tokyo Disneyland\nAdmission tickets included for the full day\nEvening free back in Shinjuku', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Early breakfast, then across to Tokyo Disneyland', 'Admission tickets included for the full day', 'Evening free back in Shinjuku'] },
    { title: 'Day 4: Mount Fuji and Gotemba (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone viewpoints\nA shopping stop at the Gotemba outlets', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone viewpoints'] },
    { title: 'Day 5: Bullet train to Osaka (B)', text: 'Breakfast and check out, then transfer to the station\nBullet train south to Osaka\nCheck in opposite Shin-Osaka station\nRest of the day free in the city', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Breakfast and check out, then transfer to the station', 'Bullet train south to Osaka', 'Check in opposite Shin-Osaka station'] },
    { title: 'Day 6: Osaka on foot (B)', text: 'Breakfast, then a half day walking tour of Osaka\nDotonbori and the Kuromon market stalls\nThe lanes around Shinsekai with your guide\nAfternoon free in the city', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Breakfast, then a half day walking tour of Osaka', 'Dotonbori and the Kuromon market stalls', 'The lanes around Shinsekai with your guide'] },
    { title: 'Day 7: Universal Studios Japan (B)', text: 'Early breakfast, then across to Universal Studios Japan\nTickets included for the full day\nSuper Nintendo World and the Harry Potter area\nEvening free in the city', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Early breakfast, then across to Universal Studios Japan', 'Tickets included for the full day', 'Super Nintendo World and the Harry Potter area'] },
    { title: 'Day 8: A free day in Osaka (B)', text: 'Breakfast and a free day in Osaka\nOptional: a day in Kyoto, fifteen minutes by bullet train\nOptional: Osaka castle and its park\nOptional: Kobe for beef and the harbour', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Breakfast and a free day in Osaka', 'Optional: a day in Kyoto, fifteen minutes by bullet train', 'Optional: Osaka castle and its park'] },
    { title: 'Day 9: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Japan', href: '/asien/japan' },
  { label: detail.title }
];

export const romanticJapanTowersTemplesBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const romanticJapanTowersTemplesProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Disneyland', 'Mount Fuji', 'Gotemba', 'Osaka'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 5,
  transfers: 13,
  meals: 8,
  price: detail.price,
  images: cardImages
};
