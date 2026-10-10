// Vietnamese Delights Group Tour. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
  img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
  img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
  img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
  img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
  img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg'),
  img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg'),
  img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
  img('k4237a90nk8xibepikvgyi90wlx2_1597997208_shutterstock_165233060.jpg'),
  img('61g0voi7c8a0ecdei69194thjegp_1467704790_168753961_57e3d08b85_o.jpg'),
  img('ujk4qbm4n62ojzh1oi2cead2qneb_shutterstock_469510655.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    dayLabel: 'Day 1 to 2',
    images: [
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg')
    ],
    dayImages: {
      1: [
        img('hw2qh1ogo8ea79v94qork3oe93e2_1467715654_311336200_3680af30d5_o.jpg'),
        img('l5niq4dr961ec6w2r5tzriikz2in_1613632679_shutterstock_1164526912.jpg'),
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg')
      ],
      2: [
        img('k4237a90nk8xibepikvgyi90wlx2_1597997208_shutterstock_165233060.jpg'),
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('61g0voi7c8a0ecdei69194thjegp_1467704790_168753961_57e3d08b85_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Hanoi`,
      'Arrival at Noi Bai airport and transfer to your hotel',
      'Check in and meet the rest of the group',
      'Rest of the day free at your own pace',
      'Optional: an evening walk around Hoan Kiem lake',
      `${DAY_MARK}Day 2 · Hanoi city tour`,
      'Breakfast, then a guided day of the city',
      'The mausoleum and the one pillar pagoda',
      'The Temple of Literature, the old university',
      'The old quarter lanes in the afternoon'
    ],
    accommodation: {
      name: 'Beryl Charm Hotel and Spa, Hanoi',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel with a spa, a few streets from the old quarter',
      images: [
        img('x0ls2e5p3etcu5mcws5merbjmfwb_59c897b9_z.png'),
        img('ql605ua11ho9ul1cobnykrbllt6f_516705424.png'),
        img('qng3t5wa1nrx267lwpzysdh2q9im_516705867.png'),
        img('tp44o025j9kafgcufq5gc55uivqi_293921652.png'),
        img('1nvmjbxgyub8volil2ens3e4yhy2_lobby--v11777867.png'),
        img('s348xki7myr4d0x0h1eba572g6z5_516705420.png'),
        img('qw0gh9bgfn3mk5b6g8n8exjdwv5i_516705868.png'),
        img('n6s6zpx4lfc30nkz46lf2kh7amka_0b94a51b_z.png'),
        img('5vlwtmv96ss3mr3ccbwugf6kc7l5_af322d5b_z.png'),
        img('zqsr2o0y5bjluzzrl5ph5suijnpw_285771261.png'),
        img('tmxnxe2896ocrr4i239okwczvamj_516705274.png'),
        img('pz3hf7d9cuvz9m21ef7kj0uowepu_516705422.png')
      ]
    },
    activities: [
      {
        name: 'Hanoi city tour',
        day: 2,
        optional: false,
        image: img('k4237a90nk8xibepikvgyi90wlx2_1597997208_shutterstock_165233060.jpg'),
        description: 'The Ho Chi Minh mausoleum and the one pillar pagoda, the Temple of Literature and the lanes of the old quarter with a guide.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Two nights in the capital with a guided day of the mausoleum, the pagoda and the old quarter.',
      image: img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Da Nang',
    subtitle: 'Da Nang and Ba Na Hills',
    dayLabel: 'Day 3 to 4',
    images: [
      img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
      img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
      img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
      img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg')
    ],
    dayImages: {
      3: [
        img('ujk4qbm4n62ojzh1oi2cead2qneb_shutterstock_469510655.jpg'),
        img('92e0xjaod8xo2bqaxq0zxz8tk5o5_1598881165_Red_Beach.jpg'),
        img('amjm6viflwijy3mqp16oowzwml9h_1467286408_15020501734_96bb077e0f_b.jpg'),
        img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg')
      ],
      4: [
        img('4arj222jby0yobyhxutcze6movjx_1580714303_shutterstock_1343264876.jpg'),
        img('bbeokkqegcwgy51eqlvyhfvmlgis_1467287106_BaNaHillsCableCar.jpg'),
        img('84tapj6qwgvbv9sgdfd6q1233uak_1467287160_Linh_Ung_Pagoda.jpg'),
        img('yhxwfmhdmt1hhx1z5nna2xphz1k3_golden-bridge-4912803_1280.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Flight to Da Nang`,
      'Breakfast and check out, then the flight to Da Nang',
      'Check in between the river and the beach',
      'Rest of the day free at your own pace',
      'Optional: the Dragon Bridge after dark',
      `${DAY_MARK}Day 4 · Ba Na Hills`,
      'Breakfast, then the cable car up to Ba Na',
      'The Golden Bridge held up by two stone hands',
      'The French village and the gardens at the top',
      'Back down to Da Nang in the evening'
    ],
    accommodation: {
      name: 'Eden Hotel Vietnam, Da Nang',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel between the river and My Khe beach',
      images: [
        img('r7phdstou45zgnfs92hvkwrz5qw9_2cf43f3c_z.png'),
        img('tz4kppppdp3ioxaetopngm37g9kz_ad359046_z.png'),
        img('3vthh0macdoplci2vq83xx6vk8hb_43669ca2_z.png'),
        img('du4cdsorauh7fq4qs7pc9rvq6lgz_2adfcc7b_z.png'),
        img('tizain1mwtztj0nf6tieziwg5ubc_f91f6bac_z.png'),
        img('ujqjpcd5znchn68snj6g48a7spsk_f828e5e7_z.png'),
        img('5i8zsn24lmd19f36r2euimtb463l_c6e9df5c_z.png'),
        img('wpav1c4a9mtexjmn4qyyc6uvnm2g_3a87fe3d_z.png'),
        img('3dyw4ep9hxup3cmy5ezbhu0n0ila_5f9e5262_z%20(1).png'),
        img('agdzseg97ulnhz5nbe9ae8txdps5_8824d512_z.png'),
        img('63hph8rkzesbfzn04orvq8djat4p_a1d401cf_z.png'),
        img('jp8o5iwlt6anwuutxk9qof7r3ql7_52c3c3a8_z.png'),
        img('dbazirheg4gnyevu8di7kmmthu44_882cb088_z.png'),
        img('8hxsr1rcf01dh0bzqg5o9eyek18p_4f58879c_z.png')
      ]
    },
    activities: [
      {
        name: 'Ba Na Hills and the Golden Bridge',
        day: 4,
        optional: false,
        image: img('4arj222jby0yobyhxutcze6movjx_1580714303_shutterstock_1343264876.jpg'),
        description: 'The long cable car up to Ba Na, the Golden Bridge held up by two stone hands, and the French village and gardens at the top.'
      }
    ],
    program: {
      name: 'Da Nang',
      description: 'The flight to the central coast for two nights near the beach, with a full day up at Ba Na.',
      image: img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg')
    }
  },
  {
    letter: 'C',
    name: 'Ho Chi Minh City',
    subtitle: 'Saigon and Cu Chi',
    dayLabel: 'Day 5 to 7',
    images: [
      img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg'),
      img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
      img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
      img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg')
    ],
    dayImages: {
      5: [
        img('fx3oyqr68fwk8eob6dgnw6qeb5ol_1598961538_shutterstock_390573640.jpg'),
        img('evxpd53708fszmcogueld24ki5be_1467883599_2814329078_1317aa23fe_o.jpg'),
        img('w9dkaedmj3e8e5tqumgf7lpv587h_1467883935_1280px-Ben_Thanh_Market.jpg'),
        img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg')
      ],
      6: [
        img('bha5xa67yo8v5fyl3aek5432qz39_shutterstock_1037846602.jpg'),
        img('f1dbl8hvclmsfb1jc8fob8ztpxuk_1467880098_5397869098_f0ce8370ed_o.jpg'),
        img('2fqc9nmqifyv07bhi7n7gqf3cxhl_shutterstock_690459592.jpg'),
        img('g026k1g5paxncu3aear1czkltedu_1469613255_7469930222_08a752c099_o.jpg')
      ],
      7: [
        img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg'),
        img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
        img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
        img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · On to Saigon`,
      'Breakfast and check out, then the flight south',
      'Check in beside the park in District 1',
      'Rest of the day free in the city',
      'Optional: the rooftop bars on Nguyen Hue',
      `${DAY_MARK}Day 6 · Saigon and the Cu Chi tunnels`,
      'Breakfast, then a half day of the city',
      'The Reunification Palace and the cathedral',
      'The war remnants museum',
      'North west to the Cu Chi tunnels',
      `${DAY_MARK}Day 7 · Departure from Saigon`,
      'Breakfast at the hotel and check out',
      'Transfer to Tan Son Nhat for your flight home'
    ],
    accommodation: {
      name: 'Liberty Hotel Saigon Parkview, Ho Chi Minh',
      description: '2 nights · Breakfast · Standard room · 3★ · Hotel beside the park in District 1, near the Ben Thanh market',
      images: [
        img('wy3sqmvygtpg1cgyndd6xy4bu5ay_238348246.jpg'),
        img('t26gsouer50vvyrsockv9zw8o30n_238347411.jpg'),
        img('ocjf63t3wwsqqj1ld85nenkqid9u_17270961.jpg'),
        img('5gq6vzqw3s6d05ejimzlv44tlexg_736b090c31b311ee86780a58a9feac02.jpg'),
        img('zs97hh37vli3wx0x0lbx5mbkkzr9_279457476.jpg'),
        img('vyhet7mc4crq5266z66zk8rb28zn_238348260.jpg'),
        img('pzp1qzx3civf5d99ngyu5s2z6i6k_15250946.jpg'),
        img('uq1vt47q5gs4033u5wol1vjm57hj_238347737.jpg'),
        img('65uo9ykrpkzqwgyjabkrkvi3magb_265bfd8e31b211eea1dd0a58a9feac02.jpg'),
        img('ewt5055uq79vam6idanypy9lvhbj_279457488.jpg'),
        img('02cj2xdh7q866slv6ufmvlqhbeuq_279460250.jpg')
      ]
    },
    activities: [
      {
        name: 'Saigon city tour with the Cu Chi tunnels',
        day: 6,
        optional: false,
        image: img('bha5xa67yo8v5fyl3aek5432qz39_shutterstock_1037846602.jpg'),
        description: 'The Reunification Palace, the cathedral and the war remnants museum, then north west to the tunnel network at Cu Chi.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'The flight south for the last two nights, with the city and the Cu Chi tunnels on one day.',
      image: img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg')
    }
  }
];

const detail = {
  slug: 'vietnamese-delights-group-tour',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Vietnamese Delights Group Tour',
  alt: 'One pillar pagoda standing over its pond in Hanoi',
  days: '7 days / 6 nights',
  stations: '3 stops',
  transport: 'Two domestic flights, coach travel and guided tours',
  tag: 'Group tour',
  tags: ['Group tour', 'Culture'],
  price: 62786,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Da Nang', 'Ba Na Hills', 'Ho Chi Minh City', 'Cu Chi'],
  stats: { days: 7, cities: 3, hotels: 3, activities: 3, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['12 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three cities in a week with a group, two nights in each, and nothing on the itinerary you will wish you had skipped.',
    quoteMore: 'Da Nang is the one to use for an early swim. My Khe beach is twenty minutes on foot and calm before eight.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A week in three cities with a small group: two nights in Hanoi with a guided city day, two in Da Nang with a full day at Ba Na Hills and the Golden Bridge, then two in Saigon with the city and the Cu Chi tunnels.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with daily breakfast; two domestic flights; all coach travel and transfers; a guided Hanoi city tour; a full day up at Ba Na with the Golden Bridge; a half day Saigon city tour with the Cu Chi tunnels.',
  intro2: 'Not included: international flights; Vietnam visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in and meet the rest of the group\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Beryl Charm Hotel and Spa', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in and meet the rest of the group', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Hanoi city tour (B)', text: 'Breakfast, then a guided day of the city\nThe mausoleum and the one pillar pagoda\nThe Temple of Literature, the old university\nThe old quarter lanes in the afternoon', hotel: 'Beryl Charm Hotel and Spa', highlights: ['Breakfast, then a guided day of the city', 'The mausoleum and the one pillar pagoda', 'The Temple of Literature, the old university'] },
    { title: 'Day 3: Flight to Da Nang (B)', text: 'Breakfast and check out, then the flight to Da Nang\nCheck in between the river and the beach\nRest of the day free at your own pace\nOptional: the Dragon Bridge after dark', hotel: 'Eden Hotel Vietnam', highlights: ['Breakfast and check out, then the flight to Da Nang', 'Check in between the river and the beach', 'Rest of the day free at your own pace'] },
    { title: 'Day 4: Ba Na Hills (B)', text: 'Breakfast, then the cable car up to Ba Na\nThe Golden Bridge held up by two stone hands\nThe French village and the gardens at the top\nBack down to Da Nang in the evening', hotel: 'Eden Hotel Vietnam', highlights: ['Breakfast, then the cable car up to Ba Na', 'The Golden Bridge held up by two stone hands', 'The French village and the gardens at the top'] },
    { title: 'Day 5: On to Saigon (B)', text: 'Breakfast and check out, then the flight south\nCheck in beside the park in District 1\nRest of the day free in the city\nOptional: the rooftop bars on Nguyen Hue', hotel: 'Liberty Hotel Saigon Parkview', highlights: ['Breakfast and check out, then the flight south', 'Check in beside the park in District 1', 'Rest of the day free in the city'] },
    { title: 'Day 6: Saigon and the Cu Chi tunnels (B)', text: 'Breakfast, then a half day of the city\nThe Reunification Palace and the cathedral\nThe war remnants museum\nNorth west to the Cu Chi tunnels', hotel: 'Liberty Hotel Saigon Parkview', highlights: ['Breakfast, then a half day of the city', 'The Reunification Palace and the cathedral', 'The war remnants museum'] },
    { title: 'Day 7: Departure from Saigon (B)', text: 'Breakfast at the hotel and check out\nTransfer to Tan Son Nhat for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to Tan Son Nhat for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const vietnameseDelightsGroupTourBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const vietnameseDelightsGroupTourProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Da Nang', 'Ba Na Hills', 'Ho Chi Minh City', 'Cu Chi'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 3,
  transfers: 10,
  meals: 12,
  price: detail.price,
  images: cardImages
};
