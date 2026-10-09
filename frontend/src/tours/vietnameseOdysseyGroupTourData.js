// Vietnamese Odyssey Group Tour. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('2kuteileb36cgbgpxwj5kw24c0gb_shutterstock_78665809.jpg'),
  img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
  img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
  img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
  img('dsxekypeedr6l4ri8eijlkm31h7f_shutterstock_196927403.jpg'),
  img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
  img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
  img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
  img('anokjwn2ztodzjiuh41v7xtsi4nb_shutterstock_257155450.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
  img('92e0xjaod8xo2bqaxq0zxz8tk5o5_1598881165_Red_Beach.jpg'),
  img('amjm6viflwijy3mqp16oowzwml9h_1467286408_15020501734_96bb077e0f_b.jpg'),
  img('bbeokkqegcwgy51eqlvyhfvmlgis_1467287106_BaNaHillsCableCar.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    dayLabel: 'Day 1 to 2',
    images: [
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
    ],
    dayImages: {
      1: [
        img('hw2qh1ogo8ea79v94qork3oe93e2_1467715654_311336200_3680af30d5_o.jpg'),
        img('l5niq4dr961ec6w2r5tzriikz2in_1613632679_shutterstock_1164526912.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
        img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg')
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
      image: img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Halong Bay',
    dayLabel: 'Day 3',
    images: [
      img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg'),
      img('2kuteileb36cgbgpxwj5kw24c0gb_shutterstock_78665809.jpg'),
      img('anokjwn2ztodzjiuh41v7xtsi4nb_shutterstock_257155450.jpg'),
      img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg')
    ],
    dayImages: {
      3: [
        img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg'),
        img('2kuteileb36cgbgpxwj5kw24c0gb_shutterstock_78665809.jpg'),
        img('anokjwn2ztodzjiuh41v7xtsi4nb_shutterstock_257155450.jpg'),
        img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Overnight on the bay`,
      'Breakfast and check out, then east towards the coast',
      'Board your cruise boat in the early afternoon',
      'Lunch and dinner served on deck',
      'A night moored among the limestone islands'
    ],
    accommodation: {
      name: 'Majestic Halong Cruise, Halong Bay',
      description: '1 night · All meals · Cabin with a window · 4★ · Four star cruise boat moored among the limestone islands overnight',
      images: [
        img('81m48m56kzq20ahapahs7971l2kj_4987b262_z.png'),
        img('motxbagtt6l85gig7uzos2zt8zbj_537a39ce_z.png'),
        img('4wxdm62xenu6g0inlavhq7ziuf4l_z5222526783863_7944dd85ac2b46dc2a5e6c013cb8db59-543x370.png'),
        img('jldj0jel067r6eqhld4i5s253cpr_z5222526766153_5383b23ec3c573e6525b0f5489b35cca-543x370.png'),
        img('tvji5x0p0ibyooqdz1jj4w3g59qy_z5222526734091_e181511fd2c268977bf4d48f0a9579e1-543x370.png'),
        img('ztdjpfv3auy53jdi1oqltjo9bbjp_03891d9b_z.png'),
        img('h4ncdtvs83isx6yf2j4uy3k1ibo4_z5222526813659_30f3befe328ea1dc4257ab6c9225e0f1-543x370.png'),
        img('rre18o5lgclb2ddfxmwwzw92m504_3f06f135_z.png'),
        img('8inz6lr6unx6ny07zw1phipz29pr_z5222526705828_bc9d7bd554552390152c8638f429bf0b-543x370.png'),
        img('13zkcdezhjc5p5g9wto6dem3ofxv_z5222526781279_e0a391597cdc736179bb51645153999f-543x370.png'),
        img('60tq8mg57kf6p8vdifdq89vj86f7_z5222526735469_75e67de2b0399e82252a53a3d064e296-543x370.png')
      ]
    },
    activities: [
      {
        name: 'Overnight stay on the bay',
        day: 3,
        optional: false,
        image: img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg'),
        description: 'Out among the limestone islands by boat, with lunch and dinner served on deck and a night moored in a quiet bay.'
      }
    ],
    program: {
      name: 'Halong Bay',
      description: 'A night aboard a four star cruise boat on the bay, with all meals included.',
      image: img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Da Nang',
    subtitle: 'Da Nang and Ba Na Hills',
    dayLabel: 'Day 4 to 5',
    images: [
      img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
      img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg'),
      img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
      img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg')
    ],
    dayImages: {
      4: [
        img('ujk4qbm4n62ojzh1oi2cead2qneb_shutterstock_469510655.jpg'),
        img('92e0xjaod8xo2bqaxq0zxz8tk5o5_1598881165_Red_Beach.jpg'),
        img('amjm6viflwijy3mqp16oowzwml9h_1467286408_15020501734_96bb077e0f_b.jpg'),
        img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg')
      ],
      5: [
        img('4arj222jby0yobyhxutcze6movjx_1580714303_shutterstock_1343264876.jpg'),
        img('bbeokkqegcwgy51eqlvyhfvmlgis_1467287106_BaNaHillsCableCar.jpg'),
        img('84tapj6qwgvbv9sgdfd6q1233uak_1467287160_Linh_Ung_Pagoda.jpg'),
        img('yhxwfmhdmt1hhx1z5nna2xphz1k3_golden-bridge-4912803_1280.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · South to Da Nang`,
      'Breakfast on board as the boat moves',
      'Back to the pier and on to Hanoi airport',
      'The flight to Da Nang',
      'Check in between the river and the beach',
      `${DAY_MARK}Day 5 · Ba Na Hills`,
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
        day: 5,
        optional: false,
        image: img('4arj222jby0yobyhxutcze6movjx_1580714303_shutterstock_1343264876.jpg'),
        description: 'The long cable car up to Ba Na, the Golden Bridge held up by two stone hands, and the French village and gardens at the top.'
      }
    ],
    program: {
      name: 'Da Nang',
      description: 'Off the water and south by air for two nights near the beach, with a full day up at Ba Na.',
      image: img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Ho Chi Minh City',
    subtitle: 'Hoi An, Saigon and Cu Chi',
    dayLabel: 'Day 6 to 8',
    images: [
      img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
      img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
      img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
      img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg')
    ],
    dayImages: {
      6: [
        img('u1kuyk38lwg3c9f5wcam4o01z9nf_tz9g4l7k88a1hrtmdz131guvyz6r_shutterstock_613077128.webp'),
        img('febp6o1j6ee0kt0t5o5yvhblb5x5_Hoi_An_(III).jpg'),
        img('b1am4dd48wk2rhoneqtae2z2l1wr_1467800477_Inside_of_Handicraft_Workshop_Hoi_An.JPG'),
        img('mpkg124uacuo2s71x3f0zfzuhuyo_1467790941_26937034641_89d6ed7fa5_o.jpg')
      ],
      7: [
        img('bha5xa67yo8v5fyl3aek5432qz39_shutterstock_1037846602.jpg'),
        img('f1dbl8hvclmsfb1jc8fob8ztpxuk_1467880098_5397869098_f0ce8370ed_o.jpg'),
        img('2fqc9nmqifyv07bhi7n7gqf3cxhl_shutterstock_690459592.jpg'),
        img('g026k1g5paxncu3aear1czkltedu_1469613255_7469930222_08a752c099_o.jpg')
      ],
      8: [
        img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
        img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
        img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
        img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Hoi An and on to Saigon`,
      'Breakfast and check out, then south to Hoi An',
      'The Japanese bridge and the merchant houses',
      'The assembly halls and the old lanes',
      'The flight to Saigon, then check in',
      `${DAY_MARK}Day 7 · Saigon and the Cu Chi tunnels`,
      'Breakfast, then a half day of the city',
      'The Reunification Palace and the cathedral',
      'The war remnants museum',
      'North west to the Cu Chi tunnels',
      `${DAY_MARK}Day 8 · Departure from Saigon`,
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
        name: 'Hoi An city tour',
        day: 6,
        optional: false,
        image: img('u1kuyk38lwg3c9f5wcam4o01z9nf_tz9g4l7k88a1hrtmdz131guvyz6r_shutterstock_613077128.webp'),
        description: 'The old trading town on foot, the Japanese covered bridge, the assembly halls and the merchant houses before the flight south.'
      },
      {
        name: 'Saigon city tour with the Cu Chi tunnels',
        day: 7,
        optional: false,
        image: img('bha5xa67yo8v5fyl3aek5432qz39_shutterstock_1037846602.jpg'),
        description: 'The Reunification Palace, the cathedral and the war remnants museum, then north west to the tunnel network at Cu Chi.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'A morning in Hoi An, the flight south, then the city and the Cu Chi tunnels.',
      image: img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg')
    }
  }
];

const detail = {
  slug: 'vietnamese-odyssey-group-tour',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Vietnamese Odyssey Group Tour',
  alt: 'Cruise boat anchored among the karsts of Halong Bay at dusk',
  days: '8 days / 7 nights',
  stations: '4 stops',
  transport: 'Two domestic flights, an overnight cruise and guided tours',
  tag: 'Group tour',
  tags: ['Group tour', 'Nature'],
  price: 63760,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Halong Bay', 'Da Nang', 'Ba Na Hills', 'Hoi An', 'Ho Chi Minh City', 'Cu Chi'],
  stats: { days: 8, cities: 4, hotels: 4, activities: 5, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['12 transfers', 'Transport'],
    ['14 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'The same route as our shorter group tour with a night on the bay added, which is the one thing worth the extra day.',
    quoteMore: 'The Majestic is a four star boat, so take the sun deck in the evening. The bay goes quiet once the day boats leave.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days north to south with a small group: two nights in Hanoi with a guided city day, a night aboard a four star cruise boat on Halong Bay, two in Da Nang with Ba Na Hills and the Golden Bridge, a morning in Hoi An, then two in Saigon with the city and the Cu Chi tunnels.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights with daily breakfast and all meals on the cruise boat; two domestic flights; all coach travel and transfers; a guided Hanoi city tour; an overnight cruise in Halong Bay; a full day up at Ba Na with the Golden Bridge; a Hoi An city tour; a half day Saigon city tour with the Cu Chi tunnels.',
  intro2: 'Not included: international flights; Vietnam visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in and meet the rest of the group\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Beryl Charm Hotel and Spa', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in and meet the rest of the group', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Hanoi city tour (B)', text: 'Breakfast, then a guided day of the city\nThe mausoleum and the one pillar pagoda\nThe Temple of Literature, the old university\nThe old quarter lanes in the afternoon', hotel: 'Beryl Charm Hotel and Spa', highlights: ['Breakfast, then a guided day of the city', 'The mausoleum and the one pillar pagoda', 'The Temple of Literature, the old university'] },
    { title: 'Day 3: Overnight on the bay (B, L, D)', text: 'Breakfast and check out, then east towards the coast\nBoard your cruise boat in the early afternoon\nLunch and dinner served on deck\nA night moored among the limestone islands', hotel: 'Majestic Halong Cruise', highlights: ['Breakfast and check out, then east towards the coast', 'Board your cruise boat in the early afternoon', 'Lunch and dinner served on deck'] },
    { title: 'Day 4: South to Da Nang (B)', text: 'Breakfast on board as the boat moves\nBack to the pier and on to Hanoi airport\nThe flight to Da Nang\nCheck in between the river and the beach', hotel: 'Eden Hotel Vietnam', highlights: ['Breakfast on board as the boat moves', 'Back to the pier and on to Hanoi airport', 'The flight to Da Nang'] },
    { title: 'Day 5: Ba Na Hills (B)', text: 'Breakfast, then the cable car up to Ba Na\nThe Golden Bridge held up by two stone hands\nThe French village and the gardens at the top\nBack down to Da Nang in the evening', hotel: 'Eden Hotel Vietnam', highlights: ['Breakfast, then the cable car up to Ba Na', 'The Golden Bridge held up by two stone hands', 'The French village and the gardens at the top'] },
    { title: 'Day 6: Hoi An and on to Saigon (B)', text: 'Breakfast and check out, then south to Hoi An\nThe Japanese bridge and the merchant houses\nThe assembly halls and the old lanes\nThe flight to Saigon, then check in', hotel: 'Liberty Hotel Saigon Parkview', highlights: ['Breakfast and check out, then south to Hoi An', 'The Japanese bridge and the merchant houses', 'The assembly halls and the old lanes'] },
    { title: 'Day 7: Saigon and the Cu Chi tunnels (B)', text: 'Breakfast, then a half day of the city\nThe Reunification Palace and the cathedral\nThe war remnants museum\nNorth west to the Cu Chi tunnels', hotel: 'Liberty Hotel Saigon Parkview', highlights: ['Breakfast, then a half day of the city', 'The Reunification Palace and the cathedral', 'The war remnants museum'] },
    { title: 'Day 8: Departure from Saigon (B)', text: 'Breakfast at the hotel and check out\nTransfer to Tan Son Nhat for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to Tan Son Nhat for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Vietnam', href: '/asien/vietnam' },
  { label: detail.title }
];

export const vietnameseOdysseyGroupTourBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const vietnameseOdysseyGroupTourProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Halong Bay', 'Da Nang', 'Ba Na Hills', 'Hoi An', 'Ho Chi Minh City', 'Cu Chi'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 5,
  transfers: 12,
  meals: 14,
  price: detail.price,
  images: cardImages
};
