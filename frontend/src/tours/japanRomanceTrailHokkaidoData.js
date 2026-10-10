// Japan Romance Trail with Hokkaido. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ia89ezbshmwkpv1tpvpc0a2zc4k2_gallery-1.jpg'),
  img('i86oqelkptgqhizjkzsit6l08qjk_shutterstock_2313811545.jpg'),
  img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg'),
  img('xhgc9a10q89566kee3xewg2tdxbu_shutterstock_245037472.jpg'),
  img('u6n0y1mulym4sf5kbk9ouwqw2s4b_shutterstock_2414469733.jpg'),
  img('oakkcbyfm7n64pmrd0m216nlmoh0_shutterstock_761090425.jpg'),
  img('xwlhpz82r0k90be9vsoef19qcx6k_shutterstock_1901310499.jpg'),
  img('bl6hzbwn09nocqbartnghh0ns788_shutterstock_2450448573.jpg'),
  img('rf2q8xarmubdq146v3y4624kctc7_shutterstock_209751268.jpg'),
  img('udkn4h8at26lrvvwwmlaxguh16hf_shutterstock_1836078037.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('i86oqelkptgqhizjkzsit6l08qjk_shutterstock_2313811545.jpg'),
  img('xhgc9a10q89566kee3xewg2tdxbu_shutterstock_245037472.jpg'),
  img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg'),
  img('5d8zp8rm397hfvz02jntd54oueue_8221793202_67e195e47e_o.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji',
    dayLabel: 'Day 1 to 3',
    images: [
      img('ia89ezbshmwkpv1tpvpc0a2zc4k2_gallery-1.jpg'),
      img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg'),
      img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg'),
      img('gj78fz8c0ymqhf34svyaxlbyx6e2_shutterstock_1017018754%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('6hzy1swk98chjdiqrq77p05ks1hp_shutterstock_402603553%20(1).jpg'),
        img('5d8zp8rm397hfvz02jntd54oueue_8221793202_67e195e47e_o.jpg'),
        img('dvnb132y05sidy9r0omo9zqe0ram_15849220641_a5a96af87c_o.jpg'),
        img('ia89ezbshmwkpv1tpvpc0a2zc4k2_gallery-1.jpg')
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
      image: img('ia89ezbshmwkpv1tpvpc0a2zc4k2_gallery-1.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Sapporo',
    subtitle: 'Sapporo to Furano and Lake Toya',
    dayLabel: 'Day 4 to 6',
    images: [
      img('u6n0y1mulym4sf5kbk9ouwqw2s4b_shutterstock_2414469733.jpg'),
      img('i86oqelkptgqhizjkzsit6l08qjk_shutterstock_2313811545.jpg'),
      img('bl6hzbwn09nocqbartnghh0ns788_shutterstock_2450448573.jpg')
    ],
    dayImages: {
      4: [
        img('uw6twx0p15ll0k5m9e3mbh6nznce_Hoheikyo%20Hot%20Spring%20Hokkaido.png'),
        img('8mcg5p9png2ezrtgbhhqygsccqt2_03-134469.jpg'),
        img('oqrse4awuk33xq0xylqnt49pyezu_30490458380_d499e45718_o.jpg'),
        img('u6n0y1mulym4sf5kbk9ouwqw2s4b_shutterstock_2414469733.jpg')
      ],
      5: [
        img('o2hhwnd6trqpnai3ii0roigtm284_Farm%20Tomita-2.webp'),
        img('8mcg5p9png2ezrtgbhhqygsccqt2_03-134469.jpg'),
        img('4mc664p95d5kb7256uu5lfs8dw9i_dl.beatsnoop.com-final-DdNmB3tQej.jpg'),
        img('yduuwdk0hj58pb3tddst0ehimivb_Downpic.cc-image543692143.jpg')
      ],
      6: [
        img('ykkv9tanrelnamkvoantsm5mwm62_Lake%20Hill%20Farm-1.webp'),
        img('gwqb51g3h6zlbirq5l1grlgv7yux_dl.beatsnoop.com-3000-1GzdPmVpD8.jpg'),
        img('ecbths9i27sf6508n53o7u51r6wo_dl.beatsnoop.com-3000-jbTkWpzOHa.jpg'),
        img('2lbc3hr6w6j8q7l9vfq53ohsocfo_10049_9_l.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · North to Sapporo`,
      'Breakfast and check out, then on to Hokkaido',
      'Transfer into central Sapporo and check in',
      'Rest of the day free in the city',
      'Optional: the hot spring bath on the top floor',
      `${DAY_MARK}Day 5 · Furano flower fields`,
      'Breakfast, then a full day out to Furano',
      'The lavender rows of Tomita Farm',
      'Shikisai Hill and the Blue Pond at Shirogane',
      'A stop at Campana Rokkatei on the way back',
      `${DAY_MARK}Day 6 · Lake Toya and the hell valley`,
      'Breakfast, then south to Lake Toya',
      'The caldera lake and Showa-shinzan volcano',
      'The steaming Jigokudani valley at Noboribetsu',
      'Back in Sapporo in the evening'
    ],
    accommodation: {
      name: 'Dormy Inn Premium Sapporo, Sapporo',
      description: '3 nights · Breakfast · Deluxe room · 3★ · Central Sapporo hotel with its own hot spring bath on the top floor',
      images: [
        img('opcwlwmxrvcjqu60c9ygsj6k79ld_Dormy%20Inn%20PREMIUM%20Sapporo-6.webp'),
        img('bpr858y1n5da4b59jr260naw4bm7_Dormy%20Inn%20PREMIUM%20Sapporo-2.webp'),
        img('1kgee32y9so3r7ey98lr1qloqwvw_Dormy%20Inn%20PREMIUM%20Sapporo-4.webp'),
        img('7kv4jnwgqmkzd9ntkcm7irupi34u_Dormy%20Inn%20PREMIUM%20Sapporo-1.webp'),
        img('ghvoqk58yc29k5elsev4svzyx52y_Dormy%20Inn%20PREMIUM%20Sapporo-5.webp'),
        img('0baw926bppj5urfr0ranynuqw9ob_Dormy%20Inn%20PREMIUM%20Sapporo-3.webp')
      ]
    },
    activities: [
      {
        name: 'Furano, Shikisai Hill and the Blue Pond',
        day: 5,
        optional: false,
        image: img('o2hhwnd6trqpnai3ii0roigtm284_Farm%20Tomita-2.webp'),
        description: 'The lavender rows of Tomita Farm, the flower slopes of Shikisai Hill, the Blue Pond at Shirogane and a stop at Campana Rokkatei.'
      },
      {
        name: 'Lake Toya, Showa-shinzan and the hell valley',
        day: 6,
        optional: false,
        image: img('ykkv9tanrelnamkvoantsm5mwm62_Lake%20Hill%20Farm-1.webp'),
        description: 'The caldera lake at Toya, the young volcano of Showa-shinzan and the steaming Jigokudani valley at Noboribetsu.'
      }
    ],
    program: {
      name: 'Sapporo',
      description: 'Two nights in Sapporo with the flower fields of Furano and Biei, and a volcano day around Lake Toya.',
      image: img('u6n0y1mulym4sf5kbk9ouwqw2s4b_shutterstock_2414469733.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Osaka',
    dayLabel: 'Day 7 to 9',
    images: [
      img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg'),
      img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg'),
      img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg'),
      img('fo7gecjnwvtcg8ygpphrauwfv1te_shutterstock_668037958.jpg')
    ],
    dayImages: {
      7: [
        img('bhizrt0u5iuiyuettppnmaamn0rv_OsakaSumoShow_SumoExperience,KimonoDress-UpChankoNabe.jpg'),
        img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg'),
        img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg'),
        img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg')
      ],
      8: [
        img('z0gbue61m658oh3uz9206hthu9lt_USJ-Osaka-iStock-ymgerman-1024x752.jpg'),
        img('dzrrvkhl3x0bs4kcwkfqceusw3fe_1617186371_1200px-USJ_5years.jpg'),
        img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg'),
        img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg')
      ],
      9: [
        img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg'),
        img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg'),
        img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg'),
        img('fo7gecjnwvtcg8ygpphrauwfv1te_shutterstock_668037958.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · South to Osaka and sumo`,
      'Breakfast and check out, then the journey south to Osaka',
      'Check in opposite Shin-Osaka station',
      'A sumo show with retired wrestlers',
      'The stew the wrestlers live on, served afterwards',
      `${DAY_MARK}Day 8 · Universal Studios Japan`,
      'Early breakfast, then across to Universal Studios Japan',
      'Tickets included for the full day',
      'Super Nintendo World and the Harry Potter area',
      'Evening free in the city',
      `${DAY_MARK}Day 9 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'Private transfer to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'APA Hotel Shin Osaka Ekimae, Osaka',
      description: '2 nights · Breakfast · Standard room · 3★ · Simple hotel opposite Shin-Osaka station, handy for the trains',
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
        name: 'Sumo show experience',
        day: 7,
        optional: false,
        image: img('bhizrt0u5iuiyuettppnmaamn0rv_OsakaSumoShow_SumoExperience,KimonoDress-UpChankoNabe.jpg'),
        description: 'A demonstration bout with retired wrestlers who explain the rituals, let you into the ring and serve the stew they live on.'
      },
      {
        name: 'Universal Studios Japan',
        day: 8,
        optional: false,
        image: img('z0gbue61m658oh3uz9206hthu9lt_USJ-Osaka-iStock-ymgerman-1024x752.jpg'),
        description: 'A full day at Universal Studios Japan with tickets included, home to Super Nintendo World and the Harry Potter area.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Two nights in Osaka to finish, with a sumo show on arrival and a full day at Universal Studios Japan.',
      image: img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg')
    }
  }
];

const detail = {
  slug: 'japan-romance-trail-with-hokkaido',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Japan Romance Trail with Hokkaido',
  alt: 'Lavender rows at Tomita Farm in Furano, Hokkaido',
  days: '9 days / 8 nights',
  stations: '3 stops',
  transport: 'Flights, bullet trains and guided day tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Nature'],
  price: 271360,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Sapporo', 'Furano', 'Biei', 'Lake Toya', 'Osaka'],
  stats: { days: 9, cities: 3, hotels: 3, activities: 6, transfers: 14 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['14 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Tokyo, the Hokkaido flower fields and then Osaka. Three very different weeks of Japan squeezed into nine days.',
    quoteMore: 'Go in July for the lavender at Tomita Farm. The Dormy Inn has a rooftop hot spring, which is the right way to end a long touring day.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days for two: three nights in Shinjuku with a city day and Mount Fuji, two in Sapporo for the Furano flower fields and a volcano day at Lake Toya, then two in Osaka with a sumo show and Universal Studios Japan.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 8 nights with breakfast on most mornings; flights and trains within Japan; private airport transfers; Tokyo sightseeing tour; Mount Fuji fifth station with Hakone and the Gotemba outlets; Furano Tomita Farm, Shikisai Hill and the Blue Pond; Lake Toya, Showa-shinzan and the Jigokudani valley; Osaka sumo show; Universal Studios Japan tickets.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your Shinjuku hotel\nRest of the day free at your own pace\nOptional: the Tokyo Metropolitan Building viewing decks, free of charge', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your Shinjuku hotel', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo sightseeing (B)', text: 'Breakfast, then a guided day through the city\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in Shinjuku', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Breakfast, then a guided day through the city', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Mount Fuji and Gotemba (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone viewpoints\nA shopping stop at the Gotemba outlets', hotel: 'Shinjuku Washington Hotel Annex', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone viewpoints'] },
    { title: 'Day 4: North to Sapporo (B)', text: 'Breakfast and check out, then on to Hokkaido\nTransfer into central Sapporo and check in\nRest of the day free in the city\nOptional: the hot spring bath on the top floor', hotel: 'Dormy Inn Premium Sapporo', highlights: ['Breakfast and check out, then on to Hokkaido', 'Transfer into central Sapporo and check in', 'Rest of the day free in the city'] },
    { title: 'Day 5: Furano flower fields (B)', text: 'Breakfast, then a full day out to Furano\nThe lavender rows of Tomita Farm\nShikisai Hill and the Blue Pond at Shirogane\nA stop at Campana Rokkatei on the way back', hotel: 'Dormy Inn Premium Sapporo', highlights: ['Breakfast, then a full day out to Furano', 'The lavender rows of Tomita Farm', 'Shikisai Hill and the Blue Pond at Shirogane'] },
    { title: 'Day 6: Lake Toya and the hell valley (B)', text: 'Breakfast, then south to Lake Toya\nThe caldera lake and Showa-shinzan volcano\nThe steaming Jigokudani valley at Noboribetsu\nBack in Sapporo in the evening', hotel: 'Dormy Inn Premium Sapporo', highlights: ['Breakfast, then south to Lake Toya', 'The caldera lake and Showa-shinzan volcano', 'The steaming Jigokudani valley at Noboribetsu'] },
    { title: 'Day 7: South to Osaka and sumo (-)', text: 'Breakfast and check out, then the journey south to Osaka\nCheck in opposite Shin-Osaka station\nA sumo show with retired wrestlers\nThe stew the wrestlers live on, served afterwards', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Breakfast and check out, then the journey south to Osaka', 'Check in opposite Shin-Osaka station', 'A sumo show with retired wrestlers'] },
    { title: 'Day 8: Universal Studios Japan (B)', text: 'Early breakfast, then across to Universal Studios Japan\nTickets included for the full day\nSuper Nintendo World and the Harry Potter area\nEvening free in the city', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Early breakfast, then across to Universal Studios Japan', 'Tickets included for the full day', 'Super Nintendo World and the Harry Potter area'] },
    { title: 'Day 9: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const japanRomanceTrailHokkaidoBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const japanRomanceTrailHokkaidoProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Sapporo', 'Furano', 'Biei', 'Lake Toya', 'Osaka'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 6,
  transfers: 14,
  meals: 7,
  price: detail.price,
  images: cardImages
};
