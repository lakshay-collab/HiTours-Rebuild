// Best of Pattaya, Bangkok and Phuket. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('gy6ydvck32nkrqc0a957hn6qa1gn_shutterstock_1273928071.jpg'),
  img('8esmek6ajh3sgyttq6cxyr5up2u6_shutterstock_482021800-min.jpg'),
  img('q0rofzuv74wu1axaon9rmkcob0jh_shutterstock_448476727.jpg'),
  img('v19tslpbpelnwcjlb8vdysyvm403_shutterstock_1008532504-min.jpg'),
  img('t9w8mxfvt7ol6qqqq7jzea3aa2o4_shutterstock_268422755.jpg'),
  img('umnq4yyhbbiotdz92vz7xwlhhhgl_shutterstock_1515443948-min.jpg'),
  img('o5bkskf1hm5ywiqtcl6lf5lps6zu_shutterstock_427872661.jpg'),
  img('tmdwb6jcjtio9ny86psxkkbeougk_daybangkokskycomp.jpg'),
  img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg'),
  img('hx1mex42a0hqgfl09mzf4titrit9_shutterstock_1272430873-min.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Pattaya',
    dayLabel: 'Day 1 to 2',
    images: [
      img('gy6ydvck32nkrqc0a957hn6qa1gn_shutterstock_1273928071.jpg'),
      img('xqqgyuisthrhpr1pt4k869ukngar_shutterstock_1424645588-min.jpg'),
      img('hx1mex42a0hqgfl09mzf4titrit9_shutterstock_1272430873-min.jpg'),
      img('0k0xalzod2x1quwxoll1lt3t4ou9_shutterstock_289362893%20(1)-min.jpg')
    ],
    dayImages: {
      1: [
        img('zrxata0eyg8ov4agkbcyc4oehwvj_1578641727_5457359187_ce9abc1e5c_o.jpg'),
        img('x6v1lfbxae08ps310ebyqcp2tqmm_Art%20in%20Paradise.jpg'),
        img('l6mvyy7uuspahqb7kssc2j0sz46h_1579529269_shutterstock_620692271.jpg'),
        img('gy6ydvck32nkrqc0a957hn6qa1gn_shutterstock_1273928071.jpg')
      ],
      2: [
        img('we68xopgvhxvi7wt9eyhehbvwv1w_dl.beatsnoop.com-VHomu5ki9h.jpg'),
        img('kz1jbr0anl74tbg4qaspajd1oxm4_1472036650_8237106102_1f7541157d_b.jpg'),
        img('26irbobpyxgu82qr3ngdovihfmw9_shutterstock_1801193749.jpg'),
        img('gy6ydvck32nkrqc0a957hn6qa1gn_shutterstock_1273928071.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and on to Pattaya`,
      'Arrival at Suvarnabhumi Airport and private sedan transfer down to Pattaya',
      'Check in at the Centara and keep the first evening free',
      'Optional: the Sanctuary of Truth, Art in Paradise or Jomtien beach',
      `${DAY_MARK}Day 2 · Coral Island day trip`,
      'Breakfast, then shared transfer to the Bali Hai pier',
      'Speedboat transfer across to Coral Island for the day',
      'Swim and sunbathe at Tawaen beach, water sports payable on the sand',
      'Return speedboat and shared transfer to your Pattaya hotel'
    ],
    accommodation: {
      name: 'Centara Pattaya Hotel, Pattaya',
      description: '2 nights · Breakfast included · Deluxe room · 4★ · Centara Pattaya, a short ride from the beach road',
      images: [
        img('fd4jn7pese14yt8lbkrh4hgiwx2i_415688449.jpg'),
        img('5s95z7fg7n5i81b9j0ae6kwiy8eq_415691259.jpg'),
        img('593e2w2g094ajao5rynhjchxiemr_414740655.jpg'),
        img('rzxqnc1nna4mx0i59go8lmprv5b0_download%20(15).jpg'),
        img('2k95sn0w1fkpz37n06ttikyv8fif_415691249.jpg'),
        img('mtvzkhyimhm10npr9aau2qpjfx1p_415688459.jpg'),
        img('ijevrfal489sdx2yacxeacbfwa6c_415688255.jpg'),
        img('zdsw0l39bqvbtv3kb6fbb46aa3ri_415688456.jpg'),
        img('tx7ke60gdk9ife93baw96t1zokpd_415691244.jpg'),
        img('37uv62mw2he1okr2fdfq5ttzfuyy_415691275.jpg'),
        img('sy1q1db9rv9amubnhgr3t9t95wfn_415688471.jpg')
      ]
    },
    activities: [
      {
        name: 'Coral Island by Speedboat',
        day: 2,
        optional: false,
        image: img('we68xopgvhxvi7wt9eyhehbvwv1w_dl.beatsnoop.com-VHomu5ki9h.jpg'),
        description: 'A speedboat day out to Koh Larn with clear water at Tawaen beach, loungers on the sand and water sports if you want them.'
      },
      {
        name: 'Sanctuary of Truth',
        day: 1,
        optional: true,
        image: img('zrxata0eyg8ov4agkbcyc4oehwvj_1578641727_5457359187_ce9abc1e5c_o.jpg'),
        description: 'An enormous carved teak temple on the shore at Naklua, still being built by hand after forty years.'
      },
      {
        name: 'Art in Paradise Museum',
        day: 1,
        optional: true,
        image: img('x6v1lfbxae08ps310ebyqcp2tqmm_Art%20in%20Paradise.jpg'),
        description: 'A trick art gallery where the paintings are built for photographs. An easy hour with children in the heat.'
      }
    ],
    program: {
      name: 'Coral Island and easy evenings',
      description: 'Two nights on the Gulf coast with a speedboat day at Koh Larn and the Pattaya markets close by in the evening.',
      image: img('gy6ydvck32nkrqc0a957hn6qa1gn_shutterstock_1273928071.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Bangkok',
    dayLabel: 'Day 3 to 4',
    images: [
      img('mgac4dsd6bath7whtafidxvthqzc_shutterstock_368832815.jpg'),
      img('8esmek6ajh3sgyttq6cxyr5up2u6_shutterstock_482021800-min.jpg'),
      img('n0twhi7ong2znp7u8ifv5gk22d9h_shutterstock_449998630.jpg'),
      img('eioxrb4o57abr1cd0dck5n0h01ry_shutterstock_238473214.jpg')
    ],
    dayImages: {
      3: [
        img('epxuwsna2eh4eb5ji4f7w2678u05_shutterstock_1386401228.jpg'),
        img('x6mukr6jdrnt14ol4qc9iyx3t1t8_1551439078_14153__1437988260.jpg'),
        img('mgac4dsd6bath7whtafidxvthqzc_shutterstock_368832815.jpg'),
        img('8esmek6ajh3sgyttq6cxyr5up2u6_shutterstock_482021800-min.jpg')
      ],
      4: [
        img('3zcahrcciono7m24vj5u62jqj9rg_Safari%20World-Gallery-1.jpg'),
        img('e0lxtn2z0futa521hs8ncr3tkjf8_1462282366_53325272.jpg'),
        img('sl6ueffzi892mh3z4jflvujppt5i_4tna3uqn3a03h9mq677iaeqra14p_u08.jpg'),
        img('mgac4dsd6bath7whtafidxvthqzc_shutterstock_368832815.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · On to Bangkok and a river cruise`,
      'Breakfast, check out and private sedan transfer up to Bangkok',
      'Check in at the Bangkok Palace in the afternoon',
      'Evening shared transfer to the Chao Phraya river dinner cruise',
      'Buffet dinner on board with lit up temples along the banks',
      `${DAY_MARK}Day 4 · Safari World and Marine Park`,
      'Breakfast, then shared transfer out to Safari World',
      'Open safari loop past zebras, giraffes, lions and tigers',
      'Marine Park shows through the afternoon on the single day pass',
      'Evening free around the markets near your hotel'
    ],
    accommodation: {
      name: 'Bangkok Palace Hotel, Bangkok',
      description: '2 nights · Breakfast included · Super Deluxe room · 5★ · Bangkok Palace, walking distance from Pratunam market',
      images: [
        img('cohf035b5eslzmfuip919jl8jeaj_img1.jpg'),
        img('mo6vpz4s313sydnvgjtt2acypo5l_img21.jpg'),
        img('gjph80lawpc2ydstrclak0go05xk_img2.jpg'),
        img('i97m228ykhxt5xb5l24al3kt2f8g_img14.jpg'),
        img('xguysc2dn6vvao4cqgkbguond7kj_img29.jpg'),
        img('aox569ulb07p30816f2f4topg0wj_img7.jpg'),
        img('qp30c2vdym5smxn7lbj4g3fd9pmu_download%20(7).jpg'),
        img('xibvrj4cmah9nffgmahcricd6d4v_img37.jpg'),
        img('fnt4b0ok8bdiw4qofh6kjjqzt3gi_img31.jpg'),
        img('gv0nqd5ci1y4jtado2lhrbcothwg_img23.jpg'),
        img('wclh36suvz9wp9842or2z1ra35dc_download%20(8).jpg')
      ]
    },
    activities: [
      {
        name: 'Chao Phraya River Dinner Cruise',
        day: 3,
        optional: false,
        image: img('epxuwsna2eh4eb5ji4f7w2678u05_shutterstock_1386401228.jpg'),
        description: 'Two hours on the river with a buffet dinner, live music and lit up views of Wat Arun and the Grand Palace from the water.'
      },
      {
        name: 'Safari World and Marine Park',
        day: 4,
        optional: false,
        image: img('3zcahrcciono7m24vj5u62jqj9rg_Safari%20World-Gallery-1.jpg'),
        description: 'An open safari loop with zebras, giraffes and big cats, then dolphin and sea lion shows at Marine Park, on a single day pass.'
      }
    ],
    program: {
      name: 'River cruise and Safari World',
      description: 'Two nights in the capital with a buffet dinner cruise on the Chao Phraya and a full day at Safari World and Marine Park.',
      image: img('mgac4dsd6bath7whtafidxvthqzc_shutterstock_368832815.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Phuket',
    dayLabel: 'Day 5 to 9',
    images: [
      img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg'),
      img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg'),
      img('q0rofzuv74wu1axaon9rmkcob0jh_shutterstock_448476727.jpg'),
      img('nl697ledztoenvi45t7u86mnkm6v_shutterstock_2337247967%20(1)%20(1).jpg')
    ],
    dayImages: {
      5: [
        img('lxlbh7w1a64qyhyw24b8x6acl34p_1462975136_552513055_f06229494e_o.jpg'),
        img('rff04hp28q6uu4xgzym5r9g3ngqx_sbg4f813z1zgkxrswpl6gcs3hkb8_1559034252_00.jpg'),
        img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg'),
        img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg')
      ],
      6: [
        img('qtfqjk6vmzm6n3qo4wqm60dsswuk_phuket.jpg'),
        img('0aehywgij1ieurhvsiwdwlfgx98k_36371281724_a12a505647_o.jpg'),
        img('495y5x6h2qo8ln8v8etzufhkt5h0_shutterstock_1283102005.jpg'),
        img('ggq5dfnyssg392eaitpapwop1gpe_4306254299_2cedb10a52_o.jpg')
      ],
      7: [
        img('hpa4azp4say5a7xk7is7cvzn1v0m_dl.beatsnoop.com-R0BH6SMQ7h.jpg'),
        img('v6a17443ovp0a99j7nc95113gafl_1462975119_8082854403_dc5d2a88e5_o.jpg'),
        img('6kv2if7t8tqqp0ait2c0j5r8fm3h_shutterstock_176838932.jpg'),
        img('3mfwxmvwud1iv4bo1l0uihm5omzw_1627129752_shutterstock_1140016289_(2).jpg')
      ],
      8: [
        img('mcbactshzbps6qfjv7b4n7jxjf7v_shutterstock_1070503607.jpg'),
        img('qsvbg8xqjyo5kwvemsenqgipdtic_riwmt3ygoh284tfu7z8usi8s0e8w_tk3.jpg'),
        img('pd5ajyy1qihvxyct4gyd87fhu9nt_1462873140_3709375362_b0f1303477_b.jpg'),
        img('sz0v2h8zow0es6se40n88gfzm819_1472028446_4345682460_5bd058ee28_b.jpg')
      ],
      9: [
        img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg'),
        img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg'),
        img('q0rofzuv74wu1axaon9rmkcob0jh_shutterstock_448476727.jpg'),
        img('nl697ledztoenvi45t7u86mnkm6v_shutterstock_2337247967%20(1)%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · On to Phuket`,
      'Breakfast, check out and private transfer to Suvarnabhumi Airport',
      'Optional: flight from Bangkok to Phuket, booked separately and not included',
      'Private sedan transfer from Phuket airport to Patong',
      'Optional: an evening on Patong beach or the Trickeye museum',
      `${DAY_MARK}Day 6 · Phuket city tour`,
      'Breakfast, then shared transfer for the Phuket city tour',
      'Wat Chalong, Old Phuket Town and Karon viewpoint over the three bays',
      'Back by mid afternoon with the evening free',
      `${DAY_MARK}Day 7 · Phi Phi islands by speedboat`,
      'Breakfast, then shared transfer down to the Phuket pier',
      'Speedboat transfer out to the Phi Phi group for the whole day',
      'Maya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, with lunch',
      'Return speedboat and shared transfer to Patong',
      `${DAY_MARK}Day 8 · Tiger Kingdom and a free afternoon`,
      'Breakfast, then private transfer out to Tiger Kingdom',
      'Big tiger encounter with the keepers alongside you throughout',
      'Afternoon free beside the pool or down on the beach',
      'Optional: the Phuket Aquarium at Cape Panwa or the Tha Rua shrine',
      `${DAY_MARK}Day 9 · Departure`,
      'Breakfast and an easy check out',
      'Private sedan transfer to Phuket International Airport'
    ],
    accommodation: {
      name: 'Journeyhub Phuket Patong, Phuket',
      description: '4 nights · Breakfast included · Super Deluxe room · 4★ · Journeyhub in Patong, minutes from the beach',
      images: [
        img('m7nog01oy4v3mrlmsjcz32mebvn8_download%20(84).jpg'),
        img('fl4h1qv2irp3wr033bjg12ylxqj9_download%20(70).jpg'),
        img('dmgmneqqgc1t69gj7ys4fuzu8kbl_download%20(71).jpg'),
        img('q71gynpb0vhi3u0bnlz51rvvy4vu_download%20(83).jpg'),
        img('excq0q3zw91utmvzrnnww9dwmcn3_download%20(80).jpg'),
        img('hens3p3r6o89e4gsyo6ga7czdha3_download%20(86).jpg'),
        img('9a3cujdq427sfaafoc0gd50s3ikq_download%20(81).jpg'),
        img('ww72g4zstuucshn6u36retmewbl8_135177910.jpg'),
        img('t64v5vgss9gfc95t11qo3urpvhza_download%20(74).jpg'),
        img('c39hglao1lmynkv3l8oxaw46ge0b_download%20(77).jpg'),
        img('47djz5tedrh7sspxgmh7urqjbcv2_357887317.jpg'),
        img('7u2sk6ci4bt6nyfhfrz3ddm362mz_download%20(79).jpg'),
        img('j8x7fd6hh39axhope0dwufdb37dg_download%20(69).jpg'),
        img('7kr7mu2aq70i4ccl860ddpm5uoiy_download%20(78).jpg')
      ]
    },
    activities: [
      {
        name: 'Phuket City Tour',
        day: 6,
        optional: false,
        image: img('qtfqjk6vmzm6n3qo4wqm60dsswuk_phuket.jpg'),
        description: 'A half day run through Wat Chalong, the painted shophouse streets of Old Phuket Town and Karon viewpoint.'
      },
      {
        name: 'Phi Phi Islands by Speedboat',
        day: 7,
        optional: false,
        image: img('hpa4azp4say5a7xk7is7cvzn1v0m_dl.beatsnoop.com-R0BH6SMQ7h.jpg'),
        description: 'A full day across the Phi Phi group with Maya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, and lunch on the tour.'
      },
      {
        name: 'Tiger Kingdom Phuket',
        day: 8,
        optional: false,
        image: img('mcbactshzbps6qfjv7b4n7jxjf7v_shutterstock_1070503607.jpg'),
        description: 'Time inside the enclosure with the big tigers, keepers beside you throughout, with a private transfer each way.'
      },
      {
        name: 'Evening on Patong Beach',
        day: 5,
        optional: true,
        image: img('lxlbh7w1a64qyhyw24b8x6acl34p_1462975136_552513055_f06229494e_o.jpg'),
        description: 'Walk the sand as the light goes, then browse the stalls and cafes a street back from the beach front.'
      }
    ],
    program: {
      name: 'Patong, Phi Phi and the tigers',
      description: 'Four nights in Patong with a city tour, a full day at the Phi Phi islands, a tiger encounter and an afternoon left open.',
      image: img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg')
    }
  }
];

const detail = {
  slug: 'best-of-pattaya-bangkok-and-phuket',
  ctaHref: '/l/thailand/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Pattaya, Bangkok and Phuket',
  alt: 'Speedboats moored in clear water off Coral Island near Pattaya',
  days: '9 days / 8 nights',
  stations: '3 stops',
  transport: 'Private sedan transfers with shared tours and speedboat crossings',
  tag: 'Family',
  tags: ['Family', 'Beach'],
  price: 50255,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Pattaya', 'Coral Island', 'Bangkok', 'Phuket', 'Phi Phi Islands'],
  stats: { days: 9, cities: 3, hotels: 3, activities: 6, transfers: 18 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['18 transfers', 'Transport'],
    ['10 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ananya Iyer',
    image: '/team/asia-2.webp',
    role: 'Thailand expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Nine days is enough to do Pattaya, Bangkok and Phuket without living out of a suitcase.',
    quoteMore: 'Safari World and the Phi Phi tour are both long days, so keep day eight for the pool. Book the Bangkok to Phuket flight before noon and you still get the afternoon on Patong beach.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days across the Gulf coast, the capital and the Andaman. Coral Island by speedboat from Pattaya, a river dinner cruise and Safari World in Bangkok, then four nights in Patong with a city tour, the Phi Phi islands and a tiger encounter.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 8 nights in 3 hotels with daily breakfast; Coral Island speedboat tour from Pattaya; Chao Phraya river dinner cruise; Safari World and Marine Park single day pass; Phuket city tour; Phi Phi islands speedboat tour with lunch; Tiger Kingdom big tiger encounter with private transfer; 18 airport, intercity and sightseeing transfers.',
  intro2: 'Not included: international flights; the Bangkok to Phuket flight; visa charges; travel insurance; island entry fees; meals other than those listed; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and on to Pattaya (Arrival)', text: 'Arrival at Suvarnabhumi Airport and private sedan transfer down to Pattaya\nCheck in at the Centara and keep the first evening free\nOptional: the Sanctuary of Truth, Art in Paradise or Jomtien beach', hotel: 'Centara Pattaya Hotel', highlights: ['Arrival at Suvarnabhumi Airport and private sedan transfer down to Pattaya', 'Check in at the Centara and keep the first evening free', 'Optional: the Sanctuary of Truth, Art in Paradise or Jomtien beach'] },
    { title: 'Day 2: Coral Island day trip (B)', text: 'Breakfast, then shared transfer to the Bali Hai pier\nSpeedboat transfer across to Coral Island for the day\nSwim and sunbathe at Tawaen beach, water sports payable on the sand\nReturn speedboat and shared transfer to your Pattaya hotel', hotel: 'Centara Pattaya Hotel', highlights: ['Breakfast, then shared transfer to the Bali Hai pier', 'Speedboat transfer across to Coral Island for the day', 'Swim and sunbathe at Tawaen beach, water sports payable on the sand'] },
    { title: 'Day 3: On to Bangkok and a river cruise (B, D)', text: 'Breakfast, check out and private sedan transfer up to Bangkok\nCheck in at the Bangkok Palace in the afternoon\nEvening shared transfer to the Chao Phraya river dinner cruise\nBuffet dinner on board with lit up temples along the banks', hotel: 'Bangkok Palace Hotel', highlights: ['Breakfast, check out and private sedan transfer up to Bangkok', 'Check in at the Bangkok Palace in the afternoon', 'Evening shared transfer to the Chao Phraya river dinner cruise'] },
    { title: 'Day 4: Safari World and Marine Park (B)', text: 'Breakfast, then shared transfer out to Safari World\nOpen safari loop past zebras, giraffes, lions and tigers\nMarine Park shows through the afternoon on the single day pass\nEvening free around the markets near your hotel', hotel: 'Bangkok Palace Hotel', highlights: ['Breakfast, then shared transfer out to Safari World', 'Open safari loop past zebras, giraffes, lions and tigers', 'Marine Park shows through the afternoon on the single day pass'] },
    { title: 'Day 5: On to Phuket (B)', text: 'Breakfast, check out and private transfer to Suvarnabhumi Airport\nOptional: flight from Bangkok to Phuket, booked separately and not included\nPrivate sedan transfer from Phuket airport to Patong\nOptional: an evening on Patong beach or the Trickeye museum', hotel: 'Journeyhub Phuket Patong', highlights: ['Breakfast, check out and private transfer to Suvarnabhumi Airport', 'Optional: flight from Bangkok to Phuket, booked separately and not included', 'Private sedan transfer from Phuket airport to Patong'] },
    { title: 'Day 6: Phuket city tour (B)', text: 'Breakfast, then shared transfer for the Phuket city tour\nWat Chalong, Old Phuket Town and Karon viewpoint over the three bays\nBack by mid afternoon with the evening free', hotel: 'Journeyhub Phuket Patong', highlights: ['Breakfast, then shared transfer for the Phuket city tour', 'Wat Chalong, Old Phuket Town and Karon viewpoint over the three bays', 'Back by mid afternoon with the evening free'] },
    { title: 'Day 7: Phi Phi islands by speedboat (B, L)', text: 'Breakfast, then shared transfer down to the Phuket pier\nSpeedboat transfer out to the Phi Phi group for the whole day\nMaya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, with lunch\nReturn speedboat and shared transfer to Patong', hotel: 'Journeyhub Phuket Patong', highlights: ['Breakfast, then shared transfer down to the Phuket pier', 'Speedboat transfer out to the Phi Phi group for the whole day', 'Maya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, with lunch'] },
    { title: 'Day 8: Tiger Kingdom and a free afternoon (B)', text: 'Breakfast, then private transfer out to Tiger Kingdom\nBig tiger encounter with the keepers alongside you throughout\nAfternoon free beside the pool or down on the beach\nOptional: the Phuket Aquarium at Cape Panwa or the Tha Rua shrine', hotel: 'Journeyhub Phuket Patong', highlights: ['Breakfast, then private transfer out to Tiger Kingdom', 'Big tiger encounter with the keepers alongside you throughout', 'Afternoon free beside the pool or down on the beach'] },
    { title: 'Day 9: Departure (B)', text: 'Breakfast and an easy check out\nPrivate sedan transfer to Phuket International Airport', hotel: 'Departure', highlights: ['Breakfast and an easy check out', 'Private sedan transfer to Phuket International Airport'] }
  ],
  outro: 'Not included: international flights; the Bangkok to Phuket flight; visa charges; travel insurance; island entry fees; meals other than those listed; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Thailand', href: '/asien/thailand' },
  { label: detail.title }
];

export const bestOfPattayaBangkokPhuketBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfPattayaBangkokPhuketProduct = {
  slug: detail.slug,
  places: stops.map((s) => s.name),
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 6,
  transfers: 18,
  meals: 10,
  price: detail.price,
  images: cardImages
};
