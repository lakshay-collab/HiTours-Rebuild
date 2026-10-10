// Japan Family Trip: Temples and Theme Parks. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg'),
  img('bsns0t5k33qyabozvyhlfjfdcxg5_shutterstock_287934032.jpg'),
  img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg'),
  img('ak7a5cwtaszfalvktkldmcm7rnm0_shutterstock_2321474899.jpg'),
  img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg'),
  img('rwht4ysuk6m51sfh64cy7uri0w9j_shutterstock_1764836006.jpg'),
  img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg'),
  img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg'),
  img('zcclccnpnk2b78cy9usi5x5zdoyk_shutterstock_666197236.jpg'),
  img('6k3h3zulkuxlsrwgqhlm3j0vbgwx_shutterstock_1370721374.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('bsns0t5k33qyabozvyhlfjfdcxg5_shutterstock_287934032.jpg'),
  img('6k3h3zulkuxlsrwgqhlm3j0vbgwx_shutterstock_1370721374.jpg'),
  img('g8f2aex4vg106e8wh3k0x1np7hov_shutterstock_382909786.jpg'),
  img('n6o4af4ttsz5fvnf4luy4m8mkuit_shutterstock_1873243030.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji and Disneyland',
    dayLabel: 'Day 1 to 4',
    images: [
      img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg'),
      img('t70do4sx3jrtcq2v146hmuwx11x4_shutterstock_1201440004.jpg'),
      img('whkp4azssrlsyr0rofdwlnikzki2_shutterstock_517903198.jpg'),
      img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('nbq3lee7epj70q7acxsfr0p64o44_8323438665_0a0837eb91_b.jpg'),
        img('eza7pai0tuvls4yy7l1nf1h52ioz_1617362184_Edo-Tokyo_Museum.jpg'),
        img('73lwr6ihkgjkyypyj9x24ukl24ym_Street%20Kart%20Tokyo%20Bay.png'),
        img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg')
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
        img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg'),
        img('t70do4sx3jrtcq2v146hmuwx11x4_shutterstock_1201440004.jpg')
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
      description: 'Four nights in one Shinjuku hotel with a city day, Mount Fuji with the Gotemba outlets and a full day at Disneyland.',
      image: img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Osaka',
    subtitle: 'Osaka to Kyoto, Nara and Arashiyama',
    dayLabel: 'Day 5 to 9',
    images: [
      img('g8f2aex4vg106e8wh3k0x1np7hov_shutterstock_382909786.jpg'),
      img('bsns0t5k33qyabozvyhlfjfdcxg5_shutterstock_287934032.jpg'),
      img('n6o4af4ttsz5fvnf4luy4m8mkuit_shutterstock_1873243030.jpg'),
      img('fdoqvdame8oqu21oq20porps9va3_shutterstock_575444659.jpg')
    ],
    dayImages: {
      5: [
        img('bhizrt0u5iuiyuettppnmaamn0rv_OsakaSumoShow_SumoExperience,KimonoDress-UpChankoNabe.jpg'),
        img('g8f2aex4vg106e8wh3k0x1np7hov_shutterstock_382909786.jpg'),
        img('bsns0t5k33qyabozvyhlfjfdcxg5_shutterstock_287934032.jpg'),
        img('n6o4af4ttsz5fvnf4luy4m8mkuit_shutterstock_1873243030.jpg')
      ],
      6: [
        img('mwx6s89kahoera83qyd2vrirvf8u_[KyotoNaraDayTour]Arashiyamatrain,FushimiInariShrine%20(1).jpg'),
        img('gsoze09r8ko0sbu1ceztnf0kmd3l_shutterstock_1720970440.jpg'),
        img('175jjcq0s03pjbxnrgbvss1n0fyf_Fushimi%20Inari%20Taisha-1.jpg'),
        img('itn4b1gsmar7c1zpcwr0qwfb2fit_unnamed%20(5).jpg')
      ],
      7: [
        img('z0gbue61m658oh3uz9206hthu9lt_USJ-Osaka-iStock-ymgerman-1024x752.jpg'),
        img('dzrrvkhl3x0bs4kcwkfqceusw3fe_1617186371_1200px-USJ_5years.jpg'),
        img('g8f2aex4vg106e8wh3k0x1np7hov_shutterstock_382909786.jpg'),
        img('bsns0t5k33qyabozvyhlfjfdcxg5_shutterstock_287934032.jpg')
      ],
      8: [
        img('z8wml2hpcxmnr4jbjewlh73ae0wm_Nabana%20no%20Sato-2.jpg'),
        img('3ylnmxrrfldqf8oz5lx3rnixqyxg_Kamagatani%20Valley-1.webp'),
        img('umsu8ptweryk02b7z0h7wal8omon_Nabana%20no%20Sato-1.webp'),
        img('g8f2aex4vg106e8wh3k0x1np7hov_shutterstock_382909786.jpg')
      ],
      9: [
        img('g8f2aex4vg106e8wh3k0x1np7hov_shutterstock_382909786.jpg'),
        img('bsns0t5k33qyabozvyhlfjfdcxg5_shutterstock_287934032.jpg'),
        img('n6o4af4ttsz5fvnf4luy4m8mkuit_shutterstock_1873243030.jpg'),
        img('fdoqvdame8oqu21oq20porps9va3_shutterstock_575444659.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · On to Osaka and the sumo ring`,
      'Breakfast and check out, then the bullet train to Osaka',
      'Check in opposite Shin-Osaka station',
      'A sumo show with retired wrestlers',
      'The stew the wrestlers live on, served afterwards',
      `${DAY_MARK}Day 6 · Kyoto, Nara and Arashiyama`,
      'Breakfast, then a full day out with your guide',
      'Kinkaku-ji, the golden pavilion, on its pond',
      'The deer park and Todai-ji temple in Nara',
      'The bamboo grove and Sagano scenic train at Arashiyama',
      `${DAY_MARK}Day 7 · Universal Studios Japan`,
      'Early breakfast, then across to Universal Studios Japan',
      'Tickets included for the full day',
      'Super Nintendo World and the Harry Potter area',
      'Evening free in the city',
      `${DAY_MARK}Day 8 · Blossom and illuminations`,
      'Breakfast, then a day out to the blossom gardens',
      'Nabana no Sato in the late afternoon',
      'The light tunnels and fields after dark',
      'Back in Osaka in the evening',
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
        name: 'Sumo show experience',
        day: 5,
        optional: false,
        image: img('bhizrt0u5iuiyuettppnmaamn0rv_OsakaSumoShow_SumoExperience,KimonoDress-UpChankoNabe.jpg'),
        description: 'A demonstration bout with retired wrestlers who explain the rituals, let the children into the ring and serve the stew they live on.'
      },
      {
        name: 'Kyoto, Nara and Arashiyama',
        day: 6,
        optional: false,
        image: img('mwx6s89kahoera83qyd2vrirvf8u_[KyotoNaraDayTour]Arashiyamatrain,FushimiInariShrine%20(1).jpg'),
        description: 'Kinkaku-ji and the deer park at Nara, then the bamboo grove at Arashiyama with a ride on the open sided Sagano scenic train.'
      },
      {
        name: 'Universal Studios Japan',
        day: 7,
        optional: false,
        image: img('z0gbue61m658oh3uz9206hthu9lt_USJ-Osaka-iStock-ymgerman-1024x752.jpg'),
        description: 'A full day at Universal Studios Japan with tickets included, home to Super Nintendo World and the Harry Potter area.'
      },
      {
        name: 'Sakura Magic and Nabana no Sato illumination',
        day: 8,
        optional: false,
        image: img('z8wml2hpcxmnr4jbjewlh73ae0wm_Nabana%20no%20Sato-2.jpg'),
        description: 'Blossom gardens by day and then Nabana no Sato after dark, where millions of lights are strung into tunnels and fields.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Four nights in Osaka with a sumo show, a day through Kyoto, Nara and Arashiyama, Universal Studios and the Nabana no Sato lights.',
      image: img('g8f2aex4vg106e8wh3k0x1np7hov_shutterstock_382909786.jpg')
    }
  }
];

const detail = {
  slug: 'japan-family-trip-temples-and-theme-parks',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Japan Family Trip: Temples and Theme Parks',
  alt: 'Super Nintendo World entrance at Universal Studios Japan',
  days: '9 days / 8 nights',
  stations: '2 stops',
  transport: 'Bullet train, private transfers and guided day tours',
  tag: 'Family',
  tags: ['Family', 'Adventure'],
  price: 233292,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Disneyland', 'Osaka', 'Kyoto', 'Nara', 'Arashiyama'],
  stats: { days: 9, cities: 2, hotels: 2, activities: 7, transfers: 17 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['17 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two hotels, nine days and both theme parks, with a sumo ring and a bamboo grove to keep the grown ups happy.',
    quoteMore: 'The sumo show is the surprise hit with children. Book the early sitting, they are more talkative before the stew comes out.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days for a family between two cities: four nights in Shinjuku with a city day, Mount Fuji and Tokyo Disneyland, then four in Osaka with a sumo show, Kyoto and Nara with Arashiyama, Universal Studios and the Nabana no Sato lights.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 8 nights with daily breakfast; bullet train from Tokyo to Osaka; private airport transfers; Tokyo sightseeing tour; Mount Fuji fifth station with Hakone and the Gotemba outlets; Tokyo Disneyland tickets; Osaka sumo show; Kyoto and Nara tour with Arashiyama and the Sagano train; Universal Studios Japan tickets; Sakura Magic and Nabana no Sato tour.',
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
    { title: 'Day 5: On to Osaka and the sumo ring (B)', text: 'Breakfast and check out, then the bullet train to Osaka\nCheck in opposite Shin-Osaka station\nA sumo show with retired wrestlers\nThe stew the wrestlers live on, served afterwards', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Breakfast and check out, then the bullet train to Osaka', 'Check in opposite Shin-Osaka station', 'A sumo show with retired wrestlers'] },
    { title: 'Day 6: Kyoto, Nara and Arashiyama (B)', text: 'Breakfast, then a full day out with your guide\nKinkaku-ji, the golden pavilion, on its pond\nThe deer park and Todai-ji temple in Nara\nThe bamboo grove and Sagano scenic train at Arashiyama', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Breakfast, then a full day out with your guide', 'Kinkaku-ji, the golden pavilion, on its pond', 'The deer park and Todai-ji temple in Nara'] },
    { title: 'Day 7: Universal Studios Japan (B)', text: 'Early breakfast, then across to Universal Studios Japan\nTickets included for the full day\nSuper Nintendo World and the Harry Potter area\nEvening free in the city', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Early breakfast, then across to Universal Studios Japan', 'Tickets included for the full day', 'Super Nintendo World and the Harry Potter area'] },
    { title: 'Day 8: Blossom and illuminations (B)', text: 'Breakfast, then a day out to the blossom gardens\nNabana no Sato in the late afternoon\nThe light tunnels and fields after dark\nBack in Osaka in the evening', hotel: 'APA Hotel Shin Osaka Ekimae', highlights: ['Breakfast, then a day out to the blossom gardens', 'Nabana no Sato in the late afternoon', 'The light tunnels and fields after dark'] },
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

export const japanFamilyTempleThemeBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const japanFamilyTempleThemeProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Disneyland', 'Osaka', 'Kyoto', 'Nara', 'Arashiyama'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 7,
  transfers: 17,
  meals: 8,
  price: detail.price,
  images: cardImages
};
