// Romantic Japan Cultural Odyssey. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg'),
  img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
  img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg'),
  img('yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg'),
  img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
  img('6k3h3zulkuxlsrwgqhlm3j0vbgwx_shutterstock_1370721374.jpg'),
  img('xdyj7i31bk427zhdgk2thbw2rv2d_shutterstock_572057020.jpg'),
  img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
  img('92vedp6ukl0p8g52c9g80bjubq6p_shutterstock_788638972.jpg'),
  img('hjvdd18dwrrkfqh5hyjbyf1qy0md_shutterstock_2299917035.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg'),
  img('nc2finq48tuhv9jgrm2c7pm097jz_1617362315_Sensoji-Temple-tokyo-scaled.jpg'),
  img('k4r7mg7wmv277ov1alfi1wctpvzf_1618899299_shutterstock_456532732.jpg'),
  img('l2ve6s75yoif0uquecbp9gh6poh6_Screenshot%202022-09-21%20164951.png')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji and Disneyland',
    dayLabel: 'Day 1 to 4',
    images: [
      img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg'),
      img('8a1guib4pdk1t3rfaoo9h6fki7xm_shutterstock_637507525.jpg'),
      img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg'),
      img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg')
    ],
    dayImages: {
      1: [
        img('6hzy1swk98chjdiqrq77p05ks1hp_shutterstock_402603553%20(1).jpg'),
        img('5d8zp8rm397hfvz02jntd54oueue_8221793202_67e195e47e_o.jpg'),
        img('dvnb132y05sidy9r0omo9zqe0ram_15849220641_a5a96af87c_o.jpg'),
        img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg')
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
        img('u64djmexd9srjx7ite2nn1s6v0xd_shutterstock_2055512132.jpg'),
        img('8l3nfuzgvhuh0eyewnb0gav1t7w8_1617351605_mickey-mause-832112_1920.jpg'),
        img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg'),
        img('8a1guib4pdk1t3rfaoo9h6fki7xm_shutterstock_637507525.jpg')
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
      `${DAY_MARK}Day 4 · Tokyo Disneyland`,
      'Early breakfast, then across to Tokyo Disneyland',
      'Admission tickets included for the full day',
      'Evening free back in Shinjuku'
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
        name: 'Mount Fuji, Hakone and Gotemba outlets',
        day: 3,
        optional: false,
        image: img('fm7l8ugdzdu3knfcbz1r2t0n1ogm_shutterstock_2236560499.jpg'),
        description: 'The fifth station on Mount Fuji, Lake Ashi in Hakone and a shopping stop at the Gotemba outlets on the way back.'
      },
      {
        name: 'Tokyo Disneyland',
        day: 4,
        optional: false,
        image: img('u64djmexd9srjx7ite2nn1s6v0xd_shutterstock_2055512132.jpg'),
        description: 'A full day at Tokyo Disneyland with your admission tickets included, so you can be at the gates when the park opens.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Four nights in Shinjuku with a guided city day, Mount Fuji with the Gotemba outlets and a full day at Disneyland.',
      image: img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kyoto',
    dayLabel: 'Day 5',
    images: [
      img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
      img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
      img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg')
    ],
    dayImages: {
      5: [
        img('j8xcq76t3o64yxmui5m4kt22wejq_52980159201_640a74d15d_o.jpg'),
        img('z7kchmsvf5ofta3efir0gv006ml9_3902_top.jpg'),
        img('nw809kt3nky9u7tvyxvc76ue98gy_JF4_063392.jpg'),
        img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · A ryokan night in Gion`,
      'Breakfast and check out, then the bullet train to Kyoto',
      'Check in at your ryokan in the Gion lanes',
      'Futons, tatami and a soak in the shared bath',
      'An evening walk through Gion and Pontocho'
    ],
    accommodation: {
      name: 'Kyoto Ryokan Gion Sano, Kyoto',
      description: '1 night · Breakfast · Deluxe room · 3★ · Small ryokan in the Gion lanes, tatami rooms and a shared bath',
      images: [
        img('lojbk3roa5cbw79gcenww6gjqox7_Kyoto%20Ryokan%20Gion%20Sano-1.webp'),
        img('jtlqdmbyubh58tgi2kxajvb06xqg_Kyoto%20Ryokan%20Gion%20Sano-5.webp'),
        img('nzuhx72cytdgbfmq12a1pty0iyxf_Kyoto%20Ryokan%20Gion%20Sano-3.webp'),
        img('hilauyytcudrgiwc4obngtey1tyo_Kyoto%20Ryokan%20Gion%20Sano-4.webp'),
        img('mfofykresk307vqvd4dzgnwi0ssj_Kyoto%20Ryokan%20Gion%20Sano-2.webp')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Kyoto',
      description: 'A ryokan night in the Gion lanes, with the evening free to walk the old streets as the lanterns come on.',
      image: img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Osaka',
    subtitle: 'Osaka to Kyoto, Nara and Arashiyama',
    dayLabel: 'Day 6 to 9',
    images: [
      img('rwht4ysuk6m51sfh64cy7uri0w9j_shutterstock_1764836006.jpg'),
      img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg'),
      img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg'),
      img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg')
    ],
    dayImages: {
      6: [
        img('t7o4c4oy73osh6vb4q24lzmx6pd2_Osaka%20Castle-2.jpg'),
        img('dwt6ckxokuqpaeo9sopjgm2kjgnq_1617177290_castle-5476737_1920.jpg'),
        img('q1ibrb7a4xu4nq4a2rql7r0u3zft_1617177625_river-5572289_1920.jpg'),
        img('i7nrvo8z1e7l0al6blhkoqjixwpa_shinsekai.jpg')
      ],
      7: [
        img('z0gbue61m658oh3uz9206hthu9lt_USJ-Osaka-iStock-ymgerman-1024x752.jpg'),
        img('dzrrvkhl3x0bs4kcwkfqceusw3fe_1617186371_1200px-USJ_5years.jpg'),
        img('rwht4ysuk6m51sfh64cy7uri0w9j_shutterstock_1764836006.jpg'),
        img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg')
      ],
      8: [
        img('mwx6s89kahoera83qyd2vrirvf8u_[KyotoNaraDayTour]Arashiyamatrain,FushimiInariShrine%20(1).jpg'),
        img('gsoze09r8ko0sbu1ceztnf0kmd3l_shutterstock_1720970440.jpg'),
        img('175jjcq0s03pjbxnrgbvss1n0fyf_Fushimi%20Inari%20Taisha-1.jpg'),
        img('itn4b1gsmar7c1zpcwr0qwfb2fit_unnamed%20(5).jpg')
      ],
      9: [
        img('rwht4ysuk6m51sfh64cy7uri0w9j_shutterstock_1764836006.jpg'),
        img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg'),
        img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg'),
        img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · On to Osaka and a walking tour`,
      'Breakfast and check out, then the train to Osaka',
      'Check in opposite Shin-Osaka station',
      'A half day walking tour of the city',
      'Dotonbori and the Kuromon market stalls',
      `${DAY_MARK}Day 7 · Universal Studios Japan`,
      'Early breakfast, then across to Universal Studios Japan',
      'Tickets included for the full day',
      'Super Nintendo World and the Harry Potter area',
      'Evening free in the city',
      `${DAY_MARK}Day 8 · Kyoto, Nara and Arashiyama`,
      'Breakfast, then a full day out with your guide',
      'Kinkaku-ji, the golden pavilion, on its pond',
      'The deer park and Todai-ji temple in Nara',
      'The bamboo grove and Sagano scenic train at Arashiyama',
      `${DAY_MARK}Day 9 · Departure from Osaka`,
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
      },
      {
        name: 'Kyoto, Nara and Arashiyama',
        day: 8,
        optional: false,
        image: img('mwx6s89kahoera83qyd2vrirvf8u_[KyotoNaraDayTour]Arashiyamatrain,FushimiInariShrine%20(1).jpg'),
        description: 'Kinkaku-ji and the deer park at Nara, then the bamboo grove at Arashiyama with a ride on the open sided Sagano scenic train.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Three nights in Osaka with a walking tour, Universal Studios Japan and a full day through Kyoto, Nara and Arashiyama.',
      image: img('rwht4ysuk6m51sfh64cy7uri0w9j_shutterstock_1764836006.jpg')
    }
  }
];

const detail = {
  slug: 'romantic-japan-cultural-odyssey',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Romantic Japan Cultural Odyssey',
  alt: 'Lanterns glowing in the Gion lanes after dark, Kyoto',
  days: '9 days / 8 nights',
  stations: '3 stops',
  transport: 'Bullet train, private transfers and guided day tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Culture'],
  price: 194342,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Disneyland', 'Kyoto', 'Osaka', 'Nara', 'Arashiyama'],
  stats: { days: 9, cities: 3, hotels: 3, activities: 6, transfers: 16 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['16 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'One ryokan night in Gion in the middle of the trip. It costs little and it is the evening couples talk about afterwards.',
    quoteMore: 'Walk from the ryokan towards Kiyomizu at dusk. The lanes are quiet once the day visitors leave and the lanterns are already lit.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days for two: four nights in Shinjuku with a city day, Mount Fuji and Tokyo Disneyland, a ryokan night in the Gion lanes of Kyoto, then three nights in Osaka with a walking tour, Universal Studios and a day through Kyoto, Nara and Arashiyama.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 8 nights with breakfast on most mornings, including a ryokan night in Gion; bullet trains between Tokyo, Kyoto and Osaka; private airport transfers; Tokyo sightseeing tour; Mount Fuji fifth station with Hakone and the Gotemba outlets; Tokyo Disneyland tickets; Osaka walking tour; Universal Studios Japan tickets; Kyoto and Nara tour with Arashiyama and the Sagano train.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your Shinjuku hotel\nRest of the day free at your own pace\nOptional: the Tokyo Metropolitan Building viewing decks, free of charge', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your Shinjuku hotel', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo sightseeing (B)', text: 'Breakfast, then a guided day through the city\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in Shinjuku', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Breakfast, then a guided day through the city', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Mount Fuji and Gotemba (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone viewpoints\nA shopping stop at the Gotemba outlets', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone viewpoints'] },
    { title: 'Day 4: Tokyo Disneyland (B)', text: 'Early breakfast, then across to Tokyo Disneyland\nAdmission tickets included for the full day\nEvening free back in Shinjuku', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Early breakfast, then across to Tokyo Disneyland', 'Admission tickets included for the full day', 'Evening free back in Shinjuku'] },
    { title: 'Day 5: A ryokan night in Gion (B)', text: 'Breakfast and check out, then the bullet train to Kyoto\nCheck in at your ryokan in the Gion lanes\nFutons, tatami and a soak in the shared bath\nAn evening walk through Gion and Pontocho', hotel: 'Kyoto Ryokan Gion Sano', highlights: ['Breakfast and check out, then the bullet train to Kyoto', 'Check in at your ryokan in the Gion lanes', 'Futons, tatami and a soak in the shared bath'] },
    { title: 'Day 6: On to Osaka and a walking tour (-)', text: 'Breakfast and check out, then the train to Osaka\nCheck in opposite Shin-Osaka station\nA half day walking tour of the city\nDotonbori and the Kuromon market stalls', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Breakfast and check out, then the train to Osaka', 'Check in opposite Shin-Osaka station', 'A half day walking tour of the city'] },
    { title: 'Day 7: Universal Studios Japan (B)', text: 'Early breakfast, then across to Universal Studios Japan\nTickets included for the full day\nSuper Nintendo World and the Harry Potter area\nEvening free in the city', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Early breakfast, then across to Universal Studios Japan', 'Tickets included for the full day', 'Super Nintendo World and the Harry Potter area'] },
    { title: 'Day 8: Kyoto, Nara and Arashiyama (B)', text: 'Breakfast, then a full day out with your guide\nKinkaku-ji, the golden pavilion, on its pond\nThe deer park and Todai-ji temple in Nara\nThe bamboo grove and Sagano scenic train at Arashiyama', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Breakfast, then a full day out with your guide', 'Kinkaku-ji, the golden pavilion, on its pond', 'The deer park and Todai-ji temple in Nara'] },
    { title: 'Day 9: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const romanticJapanCulturalOdysseyBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const romanticJapanCulturalOdysseyProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Disneyland', 'Kyoto', 'Osaka', 'Nara', 'Arashiyama'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 6,
  transfers: 16,
  meals: 7,
  price: detail.price,
  images: cardImages
};
