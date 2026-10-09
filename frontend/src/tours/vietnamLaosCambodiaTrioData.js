// Vietnam, Laos and Cambodia. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
  img('kz2o1i094vsaodj2hkv3prbsrbsy_shutterstock_237338044.jpg'),
  img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
  img('6n3scmd5rlsnaop1pb6iwv19uv23_shutterstock_601657496.jpg'),
  img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
  img('8t8tbzlhfgky047nhali974ytiim_shutterstock_616405904.jpg'),
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg'),
  img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
  img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('kz2o1i094vsaodj2hkv3prbsrbsy_shutterstock_237338044.jpg'),
  img('ihukt6y3vv68yzcr72fyq3wqeqbz_31263620335_b87975222b_o.jpg'),
  img('wkacydb95r5vm7ce57ujw79ufdxh_16183432367_e73287079a_o.jpg'),
  img('y0r3x7bev54bbom6vzfdyhylqa22_1462532711_1280px-Night_Market_(Luang_Prabang).jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    subtitle: 'Hanoi, Ninh Binh and the bay',
    dayLabel: 'Day 1 to 3',
    images: [
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg')
    ],
    dayImages: {
      1: [
        img('yhb848cifhrtbttwsxy76l36fgik_87-ma-may.jpg'),
        img('of44v39wp9am3io7u2sxw0s5bjfg_87-ma-may.jpg'),
        img('mqh0cx5yilooc97j0h5bemeobg01_1613645047_shutterstock_1676139631.jpg'),
        img('xf5ltzlprl4wk40yrzti9k9n836e_St._Joseph\'s_Cathedral_Hanoi_2.jpg')
      ],
      2: [
        img('1b7t5qk08ptmrwnhze4z7t77pflc_shutterstock_2309649499.jpg'),
        img('yx7xjkegdm9ruyh3rv7d2qtwgjyg_8224556638_2c76bfbba5_o.jpg'),
        img('m9yizaucm34mdy6jeo07klf59c3r_51986787203_3b201c83cb_b.jpg'),
        img('8zsyn00w33flh1y50mn0irdngahv_shutterstock_591172484.jpg')
      ],
      3: [
        img('9vw4pgf1629bmnhci52iiqpvr119_shutterstock_363488339.jpg'),
        img('ihukt6y3vv68yzcr72fyq3wqeqbz_31263620335_b87975222b_o.jpg'),
        img('wkacydb95r5vm7ce57ujw79ufdxh_16183432367_e73287079a_o.jpg'),
        img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Hanoi`,
      'Arrival at Noi Bai airport and transfer to your hotel',
      'Check in at your hotel in the old quarter',
      'Rest of the day free at your own pace',
      'Optional: an evening walk around Hoan Kiem lake',
      `${DAY_MARK}Day 2 · Ninh Binh and Bich Dong`,
      'Breakfast, then south towards Ninh Binh',
      'A rowing boat through the flooded caves at Tam Coc',
      'A cycle ride through the rice fields',
      'Bich Dong, a pagoda built into the rock',
      `${DAY_MARK}Day 3 · Halong Bay day cruise`,
      'Early breakfast, then east towards the coast',
      'A full day on the bay aboard a dragon boat',
      'The limestone islands and the floating villages',
      'Back in Hanoi in the evening'
    ],
    accommodation: {
      name: 'Hm Boutique Hotel Hanoi, Hanoi',
      description: '3 nights · Breakfast and dinner · Standard room · 3★ · Small boutique hotel in the old quarter',
      images: [
        img('7sy9oqqi7pnpuwxq2fv81z2bt2hf_DSC01260-1280.jpg'),
        img('7twnl25zq5eu5l1fatdv4aobarjv_img45.jpg'),
        img('mn4kwii0rj637p1fy1n5gk9ic3xw_img23.jpg'),
        img('k73z8uhny5i8235x93i1rn0ndji0_244884180.jpg'),
        img('kdrzv1d2gpyuv349jwo9j1p8e55i_244885999.jpg'),
        img('mzluxd5hc3n50hwl1r6m1cvga072_img41.jpg')
      ]
    },
    activities: [
      {
        name: 'Ninh Binh day tour',
        day: 2,
        optional: false,
        image: img('1b7t5qk08ptmrwnhze4z7t77pflc_shutterstock_2309649499.jpg'),
        description: 'South to Ninh Binh for a rowing boat through the flooded caves at Tam Coc and the limestone country around it.'
      },
      {
        name: 'Cycle ride to Bich Dong pagoda',
        day: 2,
        optional: false,
        image: img('8zsyn00w33flh1y50mn0irdngahv_shutterstock_591172484.jpg'),
        description: 'A cycle ride through the rice fields to Bich Dong, a three tier pagoda built into the rock face.'
      },
      {
        name: 'Halong Bay full day dragon cruise',
        day: 3,
        optional: false,
        image: img('9vw4pgf1629bmnhci52iiqpvr119_shutterstock_363488339.jpg'),
        description: 'A full day out on the bay aboard a dragon boat, through the limestone islands and the floating villages, back in Hanoi by evening.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Two nights in the old quarter with a Ninh Binh day, a cycle ride to Bich Dong and a full day on Halong Bay.',
      image: img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Luang Prabang',
    dayLabel: 'Day 4 to 6',
    images: [
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg')
    ],
    dayImages: {
      4: [
        img('y0r3x7bev54bbom6vzfdyhylqa22_1462532711_1280px-Night_Market_(Luang_Prabang).jpg'),
        img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
        img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
      ],
      5: [
        img('o67u9vyzta2jlmhcsfjnu3tx311t_Phousi%20Hill,%20Luang%20Prabang%201.jpg'),
        img('oq28p57mhh1wfje0gcwrfdsf2x88_6775308825_66d6708b27_b.jpg'),
        img('myskj6ob95rm1jmrxek2guj4dl8j_1462531874_Wat_Xieng_Thong_(Luang_Prabang__Laos).JPG'),
        img('qjs310sp1okkvko2z9u3i9hx6m3h_1468392029_4097788342_da63d79b26_o.jpg')
      ],
      6: [
        img('6z4pv135lc1d9m5vf3nkssgt5din_Elephant%20Village%208.jpg'),
        img('bh0v16mp9r6vrgoh7ybzzz1vd9t7_1462529762_7590537556_28e5ff2d89_o.jpg'),
        img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
        img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · On to Luang Prabang`,
      'Check out, then the flight to Laos',
      'Check in on the river at Luang Prabang',
      'Rest of the day free at your own pace',
      'Optional: the night market along Sisavangvong road',
      `${DAY_MARK}Day 5 · Luang Prabang sightseeing`,
      'Breakfast, then a guided day of the old town',
      'The royal palace museum and Wat Xieng Thong',
      'The climb up Mount Phousi',
      'Sunset over the two rivers',
      `${DAY_MARK}Day 6 · Elephant village day`,
      'Breakfast, then out to the elephant camp',
      'A morning with the mahouts and their elephants',
      'Walking them down to the river',
      'Back in town in the late afternoon'
    ],
    accommodation: {
      name: 'Villa Namkhan River, Luang Prabang',
      description: '3 nights · Breakfast · Standard room · 3★ · Small riverside villa hotel on the Nam Khan at Luang Prabang',
      images: [
        img('ydwnn0azeqi6zhzfz5xoll2kxjjm_photo0jpg%20(1).jpg'),
        img('ak2c19um1r1dz1x9by9accp5ntft_duluxe-family-room.jpg'),
        img('pd1fn73y7tn19koy6o24pfxatw3h_superior-triple-with.jpg'),
        img('sxwkgxqrfigb68nf6csnkqwqo3xb_photo8jpg.jpg'),
        img('ld449z8wj10uqz8j6vninvjbykza_villa-namkhan-river%20(2).jpg'),
        img('d3nsuyw3k6mo5s3to371sk2cuhd2_0e74601fe5d0a97732d67e6e7409b870.webp'),
        img('1sbho3e79cwlyw8u52dc294qnvfl_villa-namkhan-river%20(1).jpg'),
        img('vs0lidu8a7j0pf8z8ygpxwzs10hs_c92e2fc80cc4990c97454ffaeeab5c88.webp'),
        img('1enyybjezq4og7mtyogjdageo5h1_photo1jpg.jpg'),
        img('78xl25r0mciva1kz5tbmal1ukrb4_f4e8c48ee285f74a1a07384ebaf267c0.jpg'),
        img('8vgub60wdiascoj0iaucx87u502c_120284845.jpg')
      ]
    },
    activities: [
      {
        name: 'Luang Prabang sightseeing tour',
        day: 5,
        optional: false,
        image: img('o67u9vyzta2jlmhcsfjnu3tx311t_Phousi%20Hill,%20Luang%20Prabang%201.jpg'),
        description: 'The royal palace museum, the gilded Wat Xieng Thong and the climb up Mount Phousi for the view over the two rivers.'
      },
      {
        name: 'Elephant village and mahout day',
        day: 6,
        optional: false,
        image: img('6z4pv135lc1d9m5vf3nkssgt5din_Elephant%20Village%208.jpg'),
        description: 'A day at a rescue camp on the Nam Khan, learning how the mahouts work with the elephants and walking them down to the water.'
      }
    ],
    program: {
      name: 'Luang Prabang',
      description: 'Three nights on the Nam Khan in Laos, with the old royal town and a day at an elephant camp.',
      image: img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Siem Reap',
    subtitle: 'Tonle Sap, Angkor and Phnom Kulen',
    dayLabel: 'Day 7 to 10',
    images: [
      img('1xf3c51dyd41hxizgyq99uie61d9_shutterstock_381559081.jpg'),
      img('kz2o1i094vsaodj2hkv3prbsrbsy_shutterstock_237338044.jpg'),
      img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg'),
      img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg')
    ],
    dayImages: {
      7: [
        img('0eeolh4m5vco2tlqhjedbgoybppc_shutterstock_172914194.jpg'),
        img('l0w57t2hz9ihtty4bgs1hvjkskvc_Tonle.jpg'),
        img('1mha8xsmyjpzp75qrrdfsbi12r17_Floating.jpg'),
        img('1xf3c51dyd41hxizgyq99uie61d9_shutterstock_381559081.jpg')
      ],
      8: [
        img('1i89mdw0hjjxnkzcal9u7ad6845p_shutterstock_559574212.jpg'),
        img('y8n110g2u7oikuzpnvkd5w75si6q_1462522736_15912678764_da2931d075_o.jpg'),
        img('gg7x8uab6ewriuht9ighk7uzlael_1462523244_8147796611_5f3799b751_o.jpg'),
        img('mypd7ebfznu6f6367vtfattqkvj3_1462528175_7519280908_477d0bf15a_o.jpg')
      ],
      9: [
        img('jedta5mm7lceymkn8txfv3k7ruxg_Phnom%20Kulen%20Waterfall%201.jpg'),
        img('lqftj0cv1j4bbtgffmywtqja2g3m_download%20-%202024-10-17T115621.780.jpg'),
        img('vsbh1pytzq5832fv24mwnfqbt17n_Paranirvana.jfif'),
        img('bn1iq9ra2igz3b9ehxph9ujjs7ch_download%20-%202024-10-17T122821.112.png')
      ],
      10: [
        img('1xf3c51dyd41hxizgyq99uie61d9_shutterstock_381559081.jpg'),
        img('kz2o1i094vsaodj2hkv3prbsrbsy_shutterstock_237338044.jpg'),
        img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg'),
        img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Siem Reap and Tonle Sap`,
      'Breakfast and check out, then the flight to Cambodia',
      'Check in at Siem Reap',
      'A boat out onto the great lake',
      'A floating village built on stilts and pontoons',
      `${DAY_MARK}Day 8 · Angkor Wat`,
      'Early breakfast, then into the Angkor park',
      'Angkor Wat and the Bayon faces at Angkor Thom',
      'The root covered ruins of Ta Prohm',
      'Back at the hotel by evening',
      `${DAY_MARK}Day 9 · Phnom Kulen`,
      'Breakfast, then north to the sacred mountain',
      'The waterfall and the pools at Phnom Kulen',
      'The reclining Buddha cut into the rock',
      'The river of a thousand lingas',
      `${DAY_MARK}Day 10 · Departure from Siem Reap`,
      'Check out after an early breakfast',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'HARI Residence and Spa Siem Reap, Siem Reap',
      description: '3 nights · Breakfast and dinner · Standard room · 3★ · Small hotel with a pool, a short ride from the old market',
      images: [
        img('31ed6uyw36ewbejmdmw3oevnjtb3_3C2A7845%20copy%20(1).jpg'),
        img('1nw9tc4uftb6qs4m79o37cybooce__V0A0690%20copy%20(1).jpg'),
        img('946uwaxujy0tef05mzn15owfna6l__V0A0228%20copy.jpg'),
        img('1n0u2yh1rkix6ek7f26glxqa898s_009%20copy%20(1).jpg'),
        img('wxjg4uilol303hl7tw0nx9uzcfp4_DJI_0290%20(1).jpg'),
        img('447nu4vz3wurg17hdy17sx05a60n__V0A0498.jpg'),
        img('ej2ge86ngndj1omkwpoi31ktapoz__V0A0602%20(1).jpg'),
        img('2yakiv90q6oty76jziy1nicd2mre__V0A9740.jpg'),
        img('bffkbqz6a04c3pfp0qt4szn9wmwg__V0A0594%20(1).jpg'),
        img('qa7v4bwwq5rmppftw5ofvr8x1naj__V0A0619.jpg'),
        img('cki4fowhz1ocp1txlylcfiwjp5ny__V0A9722.jpg'),
        img('rrqj4bdzevrwqee1elwfb4anyfxy__V0A0672%20copy.jpg'),
        img('fx6l3oilx64bvdekjolhgsu9uesi__V0A0166%20copy.jpg'),
        img('2cn6xaa6mu8j32zg1r6als81wx5k__V0A0618.jpg'),
        img('czs09egy7scy9msy2zy9uin8krxa__V0A0679.jpg')
      ]
    },
    activities: [
      {
        name: 'Tonle Sap lake boat ride',
        day: 7,
        optional: false,
        image: img('0eeolh4m5vco2tlqhjedbgoybppc_shutterstock_172914194.jpg'),
        description: 'A boat out onto the great lake, through a floating village of houses, schools and shops built on stilts and pontoons.'
      },
      {
        name: 'Angkor Wat day tour',
        day: 8,
        optional: false,
        image: img('1i89mdw0hjjxnkzcal9u7ad6845p_shutterstock_559574212.jpg'),
        description: 'Angkor Wat itself, the Bayon faces at Angkor Thom and the root covered ruins of Ta Prohm, with a guide for the full day.'
      },
      {
        name: 'Phnom Kulen day trip',
        day: 9,
        optional: false,
        image: img('jedta5mm7lceymkn8txfv3k7ruxg_Phnom%20Kulen%20Waterfall%201.jpg'),
        description: 'The sacred mountain north of Angkor, with its waterfall, the reclining Buddha cut into the rock and the river of a thousand lingas.'
      }
    ],
    program: {
      name: 'Siem Reap',
      description: 'On to Cambodia for the floating villages of Tonle Sap, a full day at Angkor and the sacred mountain at Phnom Kulen.',
      image: img('1xf3c51dyd41hxizgyq99uie61d9_shutterstock_381559081.jpg')
    }
  }
];

const detail = {
  slug: 'vietnam-laos-and-cambodia',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Vietnam, Laos and Cambodia',
  alt: 'Monks crossing the bamboo bridge over the Nam Khan at Luang Prabang',
  days: '10 days / 9 nights',
  stations: '3 stops',
  transport: 'Flights between the countries, private transfers and guided tours',
  tag: 'Grand tour',
  tags: ['Grand tour', 'Culture'],
  price: 106875,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Luang Prabang', 'Siem Reap', 'Tonle Sap', 'Angkor Wat', 'Phnom Kulen'],
  stats: { days: 10, cities: 3, hotels: 3, activities: 8, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['8 experiences', 'Activities'],
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
    quote: 'Three countries in ten days, and Luang Prabang is the one nobody expects to like most. It is the slowest, quietest town in the region.',
    quoteMore: 'Get up for the alms giving in Luang Prabang at dawn. Stand well back, buy nothing from the touts, and just watch.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Ten days through three countries: two nights in Hanoi with Ninh Binh and a full day on Halong Bay, three on the river at Luang Prabang with the old royal town and an elephant camp day, then Siem Reap for Tonle Sap, Angkor and the sacred mountain at Phnom Kulen.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 9 nights with breakfast daily and dinner at the Vietnamese and Cambodian hotels; all flights between the countries; private transfers throughout; a Ninh Binh day tour; a cycle ride to Bich Dong; a full day dragon boat cruise on Halong Bay; a Luang Prabang sightseeing tour; an elephant village and mahout day; a Tonle Sap lake boat ride; an Angkor Wat day tour; a Phnom Kulen day trip.',
  intro2: 'Not included: international flights; Vietnam, Laos and Cambodia visa fees; lunches; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Ninh Binh and Bich Dong (B, D)', text: 'Breakfast, then south towards Ninh Binh\nA rowing boat through the flooded caves at Tam Coc\nA cycle ride through the rice fields\nBich Dong, a pagoda built into the rock', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then south towards Ninh Binh', 'A rowing boat through the flooded caves at Tam Coc', 'A cycle ride through the rice fields'] },
    { title: 'Day 3: Halong Bay day cruise (B, D)', text: 'Early breakfast, then east towards the coast\nA full day on the bay aboard a dragon boat\nThe limestone islands and the floating villages\nBack in Hanoi in the evening', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Early breakfast, then east towards the coast', 'A full day on the bay aboard a dragon boat', 'The limestone islands and the floating villages'] },
    { title: 'Day 4: On to Luang Prabang (Travel)', text: 'Check out, then the flight to Laos\nCheck in on the river at Luang Prabang\nRest of the day free at your own pace\nOptional: the night market along Sisavangvong road', hotel: 'Villa Namkhan River', highlights: ['Check out, then the flight to Laos', 'Check in on the river at Luang Prabang', 'Rest of the day free at your own pace'] },
    { title: 'Day 5: Luang Prabang sightseeing (B)', text: 'Breakfast, then a guided day of the old town\nThe royal palace museum and Wat Xieng Thong\nThe climb up Mount Phousi\nSunset over the two rivers', hotel: 'Villa Namkhan River', highlights: ['Breakfast, then a guided day of the old town', 'The royal palace museum and Wat Xieng Thong', 'The climb up Mount Phousi'] },
    { title: 'Day 6: Elephant village day (B)', text: 'Breakfast, then out to the elephant camp\nA morning with the mahouts and their elephants\nWalking them down to the river\nBack in town in the late afternoon', hotel: 'Villa Namkhan River', highlights: ['Breakfast, then out to the elephant camp', 'A morning with the mahouts and their elephants', 'Walking them down to the river'] },
    { title: 'Day 7: Siem Reap and Tonle Sap (B, D)', text: 'Breakfast and check out, then the flight to Cambodia\nCheck in at Siem Reap\nA boat out onto the great lake\nA floating village built on stilts and pontoons', hotel: 'HARI Residence and Spa Siem Reap', highlights: ['Breakfast and check out, then the flight to Cambodia', 'Check in at Siem Reap', 'A boat out onto the great lake'] },
    { title: 'Day 8: Angkor Wat (B, D)', text: 'Early breakfast, then into the Angkor park\nAngkor Wat and the Bayon faces at Angkor Thom\nThe root covered ruins of Ta Prohm\nBack at the hotel by evening', hotel: 'HARI Residence and Spa Siem Reap', highlights: ['Early breakfast, then into the Angkor park', 'Angkor Wat and the Bayon faces at Angkor Thom', 'The root covered ruins of Ta Prohm'] },
    { title: 'Day 9: Phnom Kulen (B, D)', text: 'Breakfast, then north to the sacred mountain\nThe waterfall and the pools at Phnom Kulen\nThe reclining Buddha cut into the rock\nThe river of a thousand lingas', hotel: 'HARI Residence and Spa Siem Reap', highlights: ['Breakfast, then north to the sacred mountain', 'The waterfall and the pools at Phnom Kulen', 'The reclining Buddha cut into the rock'] },
    { title: 'Day 10: Departure from Siem Reap (-)', text: 'Check out after an early breakfast\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Check out after an early breakfast', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam, Laos and Cambodia visa fees; lunches; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Vietnam', href: '/asien/vietnam' },
  { label: detail.title }
];

export const vietnamLaosCambodiaTrioBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const vietnamLaosCambodiaTrioProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Luang Prabang', 'Siem Reap', 'Tonle Sap', 'Angkor Wat', 'Phnom Kulen'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 10,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 8,
  transfers: 12,
  meals: 14,
  price: detail.price,
  images: cardImages
};
