// Grand Bangkok, Phuket and Krabi. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('tmdwb6jcjtio9ny86psxkkbeougk_daybangkokskycomp.jpg'),
  img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg'),
  img('2kxr2vxpxsk31qlbqaxlxfwulxif_shutterstock_1114284335.jpg'),
  img('8esmek6ajh3sgyttq6cxyr5up2u6_shutterstock_482021800-min.jpg'),
  img('q0rofzuv74wu1axaon9rmkcob0jh_shutterstock_448476727.jpg'),
  img('x82hyykufd6uh6gr0lr054hlwjio_shutterstock_1045107625-min.jpg'),
  img('t9w8mxfvt7ol6qqqq7jzea3aa2o4_shutterstock_268422755.jpg'),
  img('umnq4yyhbbiotdz92vz7xwlhhhgl_shutterstock_1515443948-min.jpg'),
  img('knpt0tp5t6sd970nzjivyl0p9zvq_shutterstock_1090315565.jpg'),
  img('zi12xgzjqrbv9gxjwy7w02yuczmb_shutterstock_1828092353-min.jpg')
];
// Listing-card photos: kept unique across every Thailand trip so no two cards repeat a shot.
const cardImages = [
  img('tmdwb6jcjtio9ny86psxkkbeougk_daybangkokskycomp.jpg'),
  img('zi12xgzjqrbv9gxjwy7w02yuczmb_shutterstock_1828092353-min.jpg'),
  img('cvd94dr8mjmqly8caqfs6ehd710n_co2.jpg'),
  img('mgac4dsd6bath7whtafidxvthqzc_shutterstock_368832815.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Bangkok',
    dayLabel: 'Day 1 to 2',
    images: [
      img('tmdwb6jcjtio9ny86psxkkbeougk_daybangkokskycomp.jpg'),
      img('zi12xgzjqrbv9gxjwy7w02yuczmb_shutterstock_1828092353-min.jpg'),
      img('cvd94dr8mjmqly8caqfs6ehd710n_co2.jpg'),
      img('mgac4dsd6bath7whtafidxvthqzc_shutterstock_368832815.jpg')
    ],
    dayImages: {
      1: [
        img('hl7veqhiwluelf7n1iso1eiv2f4m_16657760497_8163428827_o.jpg'),
        img('khu67xids4smbtwbplqrdjj8ml88_1579166774_shutterstock_391516453.jpg'),
        img('tmdwb6jcjtio9ny86psxkkbeougk_daybangkokskycomp.jpg'),
        img('zi12xgzjqrbv9gxjwy7w02yuczmb_shutterstock_1828092353-min.jpg')
      ],
      2: [
        img('t6oeeneexy5ok1bvsoqz8xc1sbnx_shutterstock_2317763115.jpg'),
        img('q3gxvgo3fib86rqmes7b33i4k830_52637615382_533cdff4ec_o.jpg'),
        img('qnp0s6axsuql4voi9rz7pz3079gq_stock-photo-wat-maha-phruettharam-worawihan-in-bangkok-thailand-2198439611-transformed.jpeg'),
        img('s0dvtb7g96zt2o6fkpk5cgu6zf8f_download%20-%202024-04-26T160628.352.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Bangkok`,
      'Arrival at Suvarnabhumi Airport and private sedan transfer to your hotel',
      'Check in on Sukhumvit Soi 4 and keep the evening free',
      'Optional: Chatuchak weekend market or the Amphawa floating market',
      `${DAY_MARK}Day 2 · Bangkok city tour and a river cruise`,
      'Breakfast, then a private car and guide for the full day city tour',
      'The Golden Buddha at Wat Traimit and Wat Maha Phruettharam',
      'Evening private transfer to the ICONSIAM pier on the river',
      'Chao Phraya Princess cruise with an international buffet on board'
    ],
    accommodation: {
      name: 'Ibis Bangkok Sukhumvit 4, Bangkok',
      description: '2 nights · Breakfast included · Deluxe room · 3★ · On Sukhumvit Soi 4, a minute from Nana Skytrain',
      images: [
        img('0xay5l56kfsxrlcchu69hswdu7ac_111697575.jpg'),
        img('msz9t3zeeysqf8uez6w5klnxidnn_7295_ro_03_p_2048x1536.jpg'),
        img('n9hl3nl3oakyoyou9f1lgwki61io_251938943.jpg'),
        img('98b40i8dowyvjmn9dgcayoerohfr_323331662.jpg'),
        img('y0ppza1io9n9asus2cdjc8xmrmf7_14272570.jpg'),
        img('d4nseiziqikshllnvy4ljxpotapn_323331647.jpg'),
        img('diurinxm5k3fnbol5uj434fwx80i_7295_ro_05_p_2048x1536.jpg'),
        img('ca6dbu5nl4f99dsyfvhyo4cp5ql4_42397911.jpg'),
        img('06yy3f3fzub5jc71asbeod585edm_323331670.jpg'),
        img('tim2ofeidyywmgdhbqkcn0zigwte_97566917.jpg'),
        img('u7owq4v4qc4ujrmospaq7brs67ij_322295003.jpg')
      ]
    },
    activities: [
      {
        name: 'Full Day Bangkok City Tour',
        day: 2,
        optional: false,
        image: img('t6oeeneexy5ok1bvsoqz8xc1sbnx_shutterstock_2317763115.jpg'),
        description: 'A private car and guide for the day, taking in the Golden Buddha at Wat Traimit, Wat Maha Phruettharam and a gem gallery.'
      },
      {
        name: 'Chao Phraya Princess Dinner Cruise',
        day: 2,
        optional: false,
        image: img('cma8x9xlh36krzh2elnu4skx3law_b5m2149v9cwxs67v3sjrwkpe430q_chaoprhaaya-princess.webp'),
        description: 'Boarding at ICONSIAM pier for an international buffet, live music and lit up temples along the riverbanks.'
      },
      {
        name: 'Chatuchak Weekend Market',
        day: 1,
        optional: true,
        image: img('khu67xids4smbtwbplqrdjj8ml88_1579166774_shutterstock_391516453.jpg'),
        description: 'Thousands of stalls across a vast weekend market, best reached by Skytrain and best walked early before the heat.'
      },
      {
        name: 'Amphawa Floating Market',
        day: 1,
        optional: true,
        image: img('hl7veqhiwluelf7n1iso1eiv2f4m_16657760497_8163428827_o.jpg'),
        description: 'A canal market outside the city where boats cook seafood at the water. Liveliest in the late afternoon.'
      }
    ],
    program: {
      name: 'Temples, gems and a dinner cruise',
      description: 'Two nights in the capital with a private full day city tour and a buffet dinner cruise down the Chao Phraya after dark.',
      image: img('tmdwb6jcjtio9ny86psxkkbeougk_daybangkokskycomp.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Phuket',
    dayLabel: 'Day 3 to 5',
    images: [
      img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg'),
      img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg'),
      img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg'),
      img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg')
    ],
    dayImages: {
      3: [
        img('lxlbh7w1a64qyhyw24b8x6acl34p_1462975136_552513055_f06229494e_o.jpg'),
        img('lknez6qnnfbvw2yujulecml5egsj_1579855096_shutterstock_1265137084.jpg'),
        img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg'),
        img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg')
      ],
      4: [
        img('hpa4azp4say5a7xk7is7cvzn1v0m_dl.beatsnoop.com-R0BH6SMQ7h.jpg'),
        img('v6a17443ovp0a99j7nc95113gafl_1462975119_8082854403_dc5d2a88e5_o.jpg'),
        img('6kv2if7t8tqqp0ait2c0j5r8fm3h_shutterstock_176838932.jpg'),
        img('3mfwxmvwud1iv4bo1l0uihm5omzw_1627129752_shutterstock_1140016289_(2).jpg')
      ],
      5: [
        img('qtfqjk6vmzm6n3qo4wqm60dsswuk_phuket.jpg'),
        img('0aehywgij1ieurhvsiwdwlfgx98k_36371281724_a12a505647_o.jpg'),
        img('495y5x6h2qo8ln8v8etzufhkt5h0_shutterstock_1283102005.jpg'),
        img('ggq5dfnyssg392eaitpapwop1gpe_4306254299_2cedb10a52_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · On to Phuket`,
      'Breakfast, check out and private transfer to Don Mueang airport',
      'Optional: flight from Bangkok to Phuket, booked separately and not included',
      'Private transfer from Phuket airport to your Patong hotel',
      'Optional: an evening on Patong beach or along Bangla Road',
      `${DAY_MARK}Day 4 · Phi Phi island excursion`,
      'Breakfast, then private transfer down to the Phuket pier',
      'Boat transfer out to the Phi Phi group for the whole day',
      'Maya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, with lunch',
      'Return boat and private transfer to Patong in the evening',
      `${DAY_MARK}Day 5 · Phuket city tour`,
      'Breakfast, then shared transfer for the half day city tour',
      'Wat Chalong, Old Phuket Town and Karon viewpoint on the west coast',
      'Back at the hotel by mid afternoon with the rest of the day free'
    ],
    accommodation: {
      name: 'Club Bamboo Boutique Resort & Spa, Phuket',
      description: '3 nights · Breakfast included · Deluxe room · 3★ · Club Bamboo in Patong, a short walk from the beach',
      images: [
        img('aw0j2zdkhsshjpwh8n6fink5h7xx_club-bamboo-boutique.jpg'),
        img('ao8b9sp0qq4boyrp2ble3sggg58g_209361068.jpg'),
        img('0fbjsav4ijrstks2y9tgmmro1gzv_61745490.jpg'),
        img('xfi4hof95zgq9rz9y5nfx654xtw1_Club-Bamboo-Superior-Room-5.jpg'),
        img('791r10d8c7lnts4rj1muegtve0x5_209360949.jpg'),
        img('whle8k4efwxwjk5s018woh00r05r_244597929.jpg'),
        img('eg6fo5l52jxxi0jjbfr6dd5jy4sj_Club-Bamboo-Superior-Room-3.jpg'),
        img('6eudibm2fkxh364k5chi72n9r9ls_210189658.jpg'),
        img('jwkjc9aatk4qwwo40091aodp8qc8_209250892.jpg'),
        img('3wyfnirdo8kt6c4ch9khjymhah9n_209360940.jpg'),
        img('37nfc1qsewfh7x7jdybh37fwlu38_210532395.jpg')
      ]
    },
    activities: [
      {
        name: 'Phi Phi Islands Excursion',
        day: 4,
        optional: false,
        image: img('hpa4azp4say5a7xk7is7cvzn1v0m_dl.beatsnoop.com-R0BH6SMQ7h.jpg'),
        description: 'A full day across the Phi Phi group with Maya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, and lunch on the tour.'
      },
      {
        name: 'Phuket City Tour',
        day: 5,
        optional: false,
        image: img('qtfqjk6vmzm6n3qo4wqm60dsswuk_phuket.jpg'),
        description: 'A half day run through Wat Chalong, the painted shophouse streets of Old Phuket Town and Karon viewpoint over the west coast.'
      },
      {
        name: 'Evening on Patong Beach',
        day: 3,
        optional: true,
        image: img('lxlbh7w1a64qyhyw24b8x6acl34p_1462975136_552513055_f06229494e_o.jpg'),
        description: 'Walk the sand as the light goes, then browse the stalls and cafes a street back from the beach front.'
      },
      {
        name: 'Bangla Road After Dark',
        day: 3,
        optional: true,
        image: img('lknez6qnnfbvw2yujulecml5egsj_1579855096_shutterstock_1265137084.jpg'),
        description: 'Patong\'s night strip, closed to traffic after dark and lined with bars, street food and live music.'
      }
    ],
    program: {
      name: 'Patong, Phi Phi and the old town',
      description: 'Three nights in Patong with a full day on the water at Phi Phi and a half day tour of Wat Chalong, the old town and Karon viewpoint.',
      image: img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Krabi',
    dayLabel: 'Day 6 to 8',
    images: [
      img('myp0svt552xqngaztwvvsb6ugnaj_shutterstock_740293555.jpg'),
      img('knpt0tp5t6sd970nzjivyl0p9zvq_shutterstock_1090315565.jpg'),
      img('2kxr2vxpxsk31qlbqaxlxfwulxif_shutterstock_1114284335.jpg'),
      img('g00n2o6s2013n9ufu4d5m073o5fr_shutterstock_658385155-min%20(1).jpg')
    ],
    dayImages: {
      6: [
        img('gxoylnz315eksjm86jgiaix4lwkf_1579614981_Nang_Beach.jpg'),
        img('qdftgwbjn1hstbew4ukv8f3gpaa6_1552225709_shutterstock_1313447231.jpg'),
        img('myp0svt552xqngaztwvvsb6ugnaj_shutterstock_740293555.jpg'),
        img('knpt0tp5t6sd970nzjivyl0p9zvq_shutterstock_1090315565.jpg')
      ],
      7: [
        img('c8yj5qwy02ce1e6bsp0f3wizxb55_Krabi-Boat-Tour.jpg'),
        img('rt5uovc0zbqf6uk001aib0eluclg_1551088163_maxresdefault_(2).jpg'),
        img('ftmjlf4ozjzfkbsr6lrrux9aa2yy_1551087923_island-26.jpg'),
        img('i4n5n1t53b4vbnm37vof5bt4mvu7_1551940678_shutterstock_405384235.jpg')
      ],
      8: [
        img('myp0svt552xqngaztwvvsb6ugnaj_shutterstock_740293555.jpg'),
        img('knpt0tp5t6sd970nzjivyl0p9zvq_shutterstock_1090315565.jpg'),
        img('2kxr2vxpxsk31qlbqaxlxfwulxif_shutterstock_1114284335.jpg'),
        img('g00n2o6s2013n9ufu4d5m073o5fr_shutterstock_658385155-min%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · On to Krabi`,
      'Breakfast, check out and private sedan transfer by road to Krabi',
      'Check in at Ao Nang, where the cliffs come down to the beach',
      'Optional: an evening on Ao Nang beach or the Emerald Pool inland',
      `${DAY_MARK}Day 7 · Krabi 4 Islands tour`,
      'Breakfast, then private transfer to the Ao Nang pier',
      'Long tail boat transfer out to Koh Poda, Tup and Chicken island',
      'Snorkel the shallows and see Phra Nang cave on the headland',
      'Return boat and private transfer to your hotel in the afternoon',
      `${DAY_MARK}Day 8 · Departure`,
      'Breakfast and an easy check out',
      'Private sedan transfer to Krabi airport for your trip home'
    ],
    accommodation: {
      name: 'Timber House Resort, Krabi, Krabi',
      description: '2 nights · Breakfast included · Deluxe room · 3★ · Timber House in Ao Nang, close to the beach road',
      images: [
        img('514r4x35px0pz9xnf7jfoyz9aked_6f1154f0920f11e7ae5d0a4cef95d023.png'),
        img('nr1r0wysopq47d8uua7k3n1bfiv8_6c3c8664920f11e7ae5d0a4cef95d023.png'),
        img('ekpbeillfaguda7fct005jehv0xs_6c654536920f11e78d7d025f77df004f.png'),
        img('gz2yl1b2whrgrvvf6t5cxepgtj4p_6cf0e104920f11e7ae5d0a4cef95d023.png'),
        img('1mst5ng1b9olzadro2452aks0xay_6d1b84b8920f11e7b9140a4cef95d023.png'),
        img('47vmw73i4dfrt7gunbvy9tou9z39_7eef47e2999211e9b65f0242ac11000a.png'),
        img('4hxnxlbcazw48z8m562ho3uwsipj_6f3f5af8920f11e78b59025f77df004f.png'),
        img('fz6idd01eep433k9ownky2kwv518_6c57b1e6920f11e788c50a4cef95d023.png'),
        img('e7ozwa0qi9tx3aavgx5duxvr1kro_6e596d9a920f11e7ae5d0a4cef95d023.png'),
        img('k2bur11omn14f4nc9n48h6wj67sr_6dd2b638920f11e79385025f77df004f.png'),
        img('4z7tm2y02cmacm4k2d75sfk94nnp_6e8d6ec4920f11e78b59025f77df004f.png'),
        img('zm8b2qv7wws42kotwiefusb1ho9r_7eebf628999211e9bd080242ac110002.png'),
        img('qxl4ushmkktcj8kntih7je2oltgs_6d165da8920f11e788c50a4cef95d023.png'),
        img('5tnyumd6a5aslsag35xymlzb796b_6fdeb7f6920f11e78d7d025f77df004f.png')
      ]
    },
    activities: [
      {
        name: 'Krabi 4 Islands Tour',
        day: 7,
        optional: false,
        image: img('c8yj5qwy02ce1e6bsp0f3wizxb55_Krabi-Boat-Tour.jpg'),
        description: 'A long tail boat day across Koh Poda, Tup island and Chicken island, with snorkelling stops and Phra Nang cave on the headland.'
      },
      {
        name: 'Ao Nang Beach',
        day: 6,
        optional: true,
        image: img('gxoylnz315eksjm86jgiaix4lwkf_1579614981_Nang_Beach.jpg'),
        description: 'The main Krabi beach strip, with long tail boats pulled up on the sand and cliffs rising straight out of the sea.'
      },
      {
        name: 'The Emerald Pool',
        day: 6,
        optional: true,
        image: img('qdftgwbjn1hstbew4ukv8f3gpaa6_1552225709_shutterstock_1313447231.jpg'),
        description: 'A spring fed pool in the Khao Phra Bang Khram forest inland from Krabi, clear green and warm all year.'
      }
    ],
    program: {
      name: 'Ao Nang and the 4 Islands',
      description: 'Two nights under the Ao Nang cliffs with a long tail boat tour of Koh Poda, Tup island, Chicken island and Phra Nang cave.',
      image: img('myp0svt552xqngaztwvvsb6ugnaj_shutterstock_740293555.jpg')
    }
  }
];

const detail = {
  slug: 'grand-bangkok-phuket-and-krabi',
  ctaHref: '/l/thailand/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Grand Bangkok, Phuket and Krabi',
  alt: 'Lit up temples on the banks of the Chao Phraya river in Bangkok',
  days: '8 days / 7 nights',
  stations: '3 stops',
  transport: 'Private sedan transfers with boat crossings and one shared city tour',
  tag: 'Family',
  tags: ['Family', 'Beach'],
  price: 41790,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Bangkok', 'Phuket', 'Phi Phi Islands', 'Krabi'],
  stats: { days: 8, cities: 3, hotels: 3, activities: 5, transfers: 18 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['18 transfers', 'Transport'],
    ['9 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ananya Iyer',
    image: '/team/asia-2.webp',
    role: 'Thailand expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'City first, then two beaches. Seven nights is the shortest stretch that makes this route feel unhurried.',
    quoteMore: 'Book the Bangkok to Phuket flight before midday so you still get an afternoon on Patong beach. The Krabi road transfer from Phuket takes about three hours with a stop, so eat before you leave.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days from Bangkok to the Andaman coast. A private city tour and a dinner cruise in the capital, three nights in Patong with a Phi Phi excursion and a Phuket city tour, then two nights in Ao Nang with the Krabi 4 Islands tour.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights in 3 hotels with daily breakfast; full day private Bangkok city tour; Chao Phraya Princess dinner cruise with international buffet; Phi Phi islands excursion with lunch; half day Phuket city tour; Krabi 4 Islands long tail boat tour; 18 airport, intercity and sightseeing transfers.',
  intro2: 'Not included: international flights; the Bangkok to Phuket flight; visa charges; travel insurance; island and temple entry fees; meals other than those listed; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Bangkok (Arrival)', text: 'Arrival at Suvarnabhumi Airport and private sedan transfer to your hotel\nCheck in on Sukhumvit Soi 4 and keep the evening free\nOptional: Chatuchak weekend market or the Amphawa floating market', hotel: 'Ibis Bangkok Sukhumvit 4', highlights: ['Arrival at Suvarnabhumi Airport and private sedan transfer to your hotel', 'Check in on Sukhumvit Soi 4 and keep the evening free', 'Optional: Chatuchak weekend market or the Amphawa floating market'] },
    { title: 'Day 2: Bangkok city tour and a river cruise (B, D)', text: 'Breakfast, then a private car and guide for the full day city tour\nThe Golden Buddha at Wat Traimit and Wat Maha Phruettharam\nEvening private transfer to the ICONSIAM pier on the river\nChao Phraya Princess cruise with an international buffet on board', hotel: 'Ibis Bangkok Sukhumvit 4', highlights: ['Breakfast, then a private car and guide for the full day city tour', 'The Golden Buddha at Wat Traimit and Wat Maha Phruettharam', 'Evening private transfer to the ICONSIAM pier on the river'] },
    { title: 'Day 3: On to Phuket (B)', text: 'Breakfast, check out and private transfer to Don Mueang airport\nOptional: flight from Bangkok to Phuket, booked separately and not included\nPrivate transfer from Phuket airport to your Patong hotel\nOptional: an evening on Patong beach or along Bangla Road', hotel: 'Club Bamboo Boutique Resort & Spa', highlights: ['Breakfast, check out and private transfer to Don Mueang airport', 'Optional: flight from Bangkok to Phuket, booked separately and not included', 'Private transfer from Phuket airport to your Patong hotel'] },
    { title: 'Day 4: Phi Phi island excursion (B, L)', text: 'Breakfast, then private transfer down to the Phuket pier\nBoat transfer out to the Phi Phi group for the whole day\nMaya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, with lunch\nReturn boat and private transfer to Patong in the evening', hotel: 'Club Bamboo Boutique Resort & Spa', highlights: ['Breakfast, then private transfer down to the Phuket pier', 'Boat transfer out to the Phi Phi group for the whole day', 'Maya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, with lunch'] },
    { title: 'Day 5: Phuket city tour (B)', text: 'Breakfast, then shared transfer for the half day city tour\nWat Chalong, Old Phuket Town and Karon viewpoint on the west coast\nBack at the hotel by mid afternoon with the rest of the day free', hotel: 'Club Bamboo Boutique Resort & Spa', highlights: ['Breakfast, then shared transfer for the half day city tour', 'Wat Chalong, Old Phuket Town and Karon viewpoint on the west coast', 'Back at the hotel by mid afternoon with the rest of the day free'] },
    { title: 'Day 6: On to Krabi (B)', text: 'Breakfast, check out and private sedan transfer by road to Krabi\nCheck in at Ao Nang, where the cliffs come down to the beach\nOptional: an evening on Ao Nang beach or the Emerald Pool inland', hotel: 'Timber House Resort, Krabi', highlights: ['Breakfast, check out and private sedan transfer by road to Krabi', 'Check in at Ao Nang, where the cliffs come down to the beach', 'Optional: an evening on Ao Nang beach or the Emerald Pool inland'] },
    { title: 'Day 7: Krabi 4 Islands tour (B)', text: 'Breakfast, then private transfer to the Ao Nang pier\nLong tail boat transfer out to Koh Poda, Tup and Chicken island\nSnorkel the shallows and see Phra Nang cave on the headland\nReturn boat and private transfer to your hotel in the afternoon', hotel: 'Timber House Resort, Krabi', highlights: ['Breakfast, then private transfer to the Ao Nang pier', 'Long tail boat transfer out to Koh Poda, Tup and Chicken island', 'Snorkel the shallows and see Phra Nang cave on the headland'] },
    { title: 'Day 8: Departure (B)', text: 'Breakfast and an easy check out\nPrivate sedan transfer to Krabi airport for your trip home', hotel: 'Departure', highlights: ['Breakfast and an easy check out', 'Private sedan transfer to Krabi airport for your trip home'] }
  ],
  outro: 'Not included: international flights; the Bangkok to Phuket flight; visa charges; travel insurance; island and temple entry fees; meals other than those listed; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Thailand', href: '/asien/thailand' },
  { label: detail.title }
];

export const grandBangkokPhuketKrabiBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const grandBangkokPhuketKrabiProduct = {
  slug: detail.slug,
  places: stops.map((s) => s.name),
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 5,
  transfers: 18,
  meals: 9,
  price: detail.price,
  images: cardImages
};
