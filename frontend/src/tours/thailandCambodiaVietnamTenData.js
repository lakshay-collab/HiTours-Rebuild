// Thailand, Cambodia and Vietnam in Ten Days. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('dt3g7wxiv0cq88va8n6qzye08rel_shutterstock_2130087425%20(1).jpg'),
  img('t9w8mxfvt7ol6qqqq7jzea3aa2o4_shutterstock_268422755.jpg'),
  img('ivmbzlpj8a1md149k1oq28089dmq_shutterstock_402517945.jpg'),
  img('8t8tbzlhfgky047nhali974ytiim_shutterstock_616405904.jpg'),
  img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
  img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg'),
  img('cvd94dr8mjmqly8caqfs6ehd710n_co2.jpg'),
  img('cf1wt5v30jdw97rqmcuvj6ilsdui_shutterstock_1251727690.jpg'),
  img('ynhhbvyz5wx9z88wwhtsk4jb3eee_shutterstock_128239889.jpg'),
  img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('dt3g7wxiv0cq88va8n6qzye08rel_shutterstock_2130087425%20(1).jpg'),
  img('t9w8mxfvt7ol6qqqq7jzea3aa2o4_shutterstock_268422755.jpg'),
  img('ivmbzlpj8a1md149k1oq28089dmq_shutterstock_402517945.jpg'),
  img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Phuket',
    subtitle: 'Phuket and Phi Phi',
    dayLabel: 'Day 1 to 2',
    images: [
      img('dt3g7wxiv0cq88va8n6qzye08rel_shutterstock_2130087425%20(1).jpg'),
      img('wgw28loe37wumwa59avtvzp7gcn4_shutterstock_2253884321.jpg'),
      img('umnq4yyhbbiotdz92vz7xwlhhhgl_shutterstock_1515443948-min.jpg'),
      img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg')
    ],
    dayImages: {
      1: [
        img('kzkr3zqno9rsfhkvraj550v5gt3b_1595937744_shutterstock_191863577.jpg'),
        img('u0pqsdaxi1xf5pmykhedhlviy06o_14599612777_e3275ab36b_o.jpg'),
        img('0aehywgij1ieurhvsiwdwlfgx98k_36371281724_a12a505647_o.jpg'),
        img('dt3g7wxiv0cq88va8n6qzye08rel_shutterstock_2130087425%20(1).jpg')
      ],
      2: [
        img('hpa4azp4say5a7xk7is7cvzn1v0m_dl.beatsnoop.com-R0BH6SMQ7h.jpg'),
        img('v6a17443ovp0a99j7nc95113gafl_1462975119_8082854403_dc5d2a88e5_o.jpg'),
        img('6kv2if7t8tqqp0ait2c0j5r8fm3h_shutterstock_176838932.jpg'),
        img('3mfwxmvwud1iv4bo1l0uihm5omzw_1627129752_shutterstock_1140016289_(2).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and Phuket tour`,
      'Arrival at Phuket and transfer to your resort',
      'A half day of the island with a guide',
      'The big Buddha and the Karon viewpoint',
      'Check in and the evening free',
      `${DAY_MARK}Day 2 · Phi Phi islands`,
      'Breakfast, then down to the pier',
      'A boat out to the Phi Phi islands',
      'Maya Bay, Pileh lagoon and snorkelling',
      'Lunch on board, then back by late afternoon'
    ],
    accommodation: {
      name: 'Club Bamboo Boutique Resort, Phuket',
      description: '2 nights · Breakfast · Standard room · 3★ · Small resort in the hills above Patong beach',
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
        name: 'Phuket half day discovery tour',
        day: 1,
        optional: false,
        image: img('kzkr3zqno9rsfhkvraj550v5gt3b_1595937744_shutterstock_191863577.jpg'),
        description: 'The old town shophouses, the big Buddha on its hill and the Karon viewpoint over the three southern bays.'
      },
      {
        name: 'Phi Phi island day trip with lunch',
        day: 2,
        optional: false,
        image: img('hpa4azp4say5a7xk7is7cvzn1v0m_dl.beatsnoop.com-R0BH6SMQ7h.jpg'),
        description: 'A boat out to the Phi Phi islands for the cliffs at Maya Bay and Pileh lagoon, with snorkelling and lunch on board.'
      }
    ],
    program: {
      name: 'Phuket',
      description: 'Two nights above Patong, with a half day of the island and a boat day out to Phi Phi.',
      image: img('dt3g7wxiv0cq88va8n6qzye08rel_shutterstock_2130087425%20(1).jpg')
    }
  },
  {
    letter: 'B',
    name: 'Bangkok',
    dayLabel: 'Day 3',
    images: [
      img('nn3ddc2jsww3ka4dt8ovqbpyhh49_shutterstock_1753947629-min%20(1).jpg'),
      img('t9w8mxfvt7ol6qqqq7jzea3aa2o4_shutterstock_268422755.jpg'),
      img('hyo0p91rzm8fip6pea4ixwjmonyo_shutterstock_1793108161.jpg'),
      img('hjog43uzmd5m162yaje2gsblopb4_shutterstock_1141409366-min.jpg')
    ],
    dayImages: {
      3: [
        img('kij74av4d68faayvaf1v9lexqblo_shutterstock_79950817.jpg'),
        img('q3gxvgo3fib86rqmes7b33i4k830_52637615382_533cdff4ec_o.jpg'),
        img('7g3upt25027exlolwfudwmtldrgx_1200px-01-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%9A%E0%B8%8D%E0%B8%88%E0%B8%A1%E0%B8%9A%E0%B8%9E%E0%B8%B4%E0%B8%95%E0%B8%A3%E0%B8%94%E0%B8%B8%E0%B8%AA%E0%B8%B4%E0%B8%95%E0%B8%A7%E0%B8%99%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%A3%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg'),
        img('s0dvtb7g96zt2o6fkpk5cgu6zf8f_download%20-%202024-04-26T160628.352.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · On to Bangkok`,
      'Breakfast and check out, then the flight to Bangkok',
      'A half day of the city with a guide',
      'The Golden Buddha and the Marble Temple',
      'Check in and the evening free'
    ],
    accommodation: {
      name: 'Convenient Park Hotel, Bangkok',
      description: '1 night · Breakfast · Standard room · 3★ · Simple hotel on the eastern side of Bangkok',
      images: [
        img('yrzephwewqerv3lrfnp5hoaiu2tx_img44.jpg'),
        img('47ctn6ztterbx5a11fx58v67idej_img13.jpg'),
        img('rtz8watjoct0ps2wo0ulguenm8or_img2.jpg'),
        img('od401ezaffa4v61makk0datudi8e_img5.jpg'),
        img('10zrfb3hi0tgftfvy9ymylj7fcle_img1.jpg'),
        img('gkqp8kmspjc4hea560awdshddous_img34.jpg'),
        img('f5e88ebtevdcmkeb6t6d6wnpxo35_img11.jpg'),
        img('ppdnesp004ftokvde8rwbloz18y2_img7.jpg'),
        img('cr0rjrw6en45c9qka0fi55ylmfpl_img3.jpg'),
        img('5lcvn4hq1zjvsre9monftzfh3dex_img9.jpg'),
        img('yh58lzxe0hy6sxy9euwnuggfor8q_img21.jpg'),
        img('g1rz269gkkgxgrj50yk01e2zhekq_img37.jpg'),
        img('acw7lx0l6f8xzvy3oejy02kc8y3g_img36.jpg'),
        img('dlecj5g7l1rsr362y3ko7yit5lw2_img39.jpg')
      ]
    },
    activities: [
      {
        name: 'Bangkok half day city tour',
        day: 3,
        optional: false,
        image: img('kij74av4d68faayvaf1v9lexqblo_shutterstock_79950817.jpg'),
        description: 'The Golden Buddha at Wat Traimit and the Marble Temple, with the gem and silk showrooms on the way back.'
      }
    ],
    program: {
      name: 'Bangkok',
      description: 'A night in the Thai capital, with the Golden Buddha and the Marble Temple on arrival.',
      image: img('nn3ddc2jsww3ka4dt8ovqbpyhh49_shutterstock_1753947629-min%20(1).jpg')
    }
  },
  {
    letter: 'C',
    name: 'Phnom Penh',
    dayLabel: 'Day 4',
    images: [
      img('cf1wt5v30jdw97rqmcuvj6ilsdui_shutterstock_1251727690.jpg'),
      img('uq24i5e8zc0u3bofcjhm94tzgi3a_shutterstock_586403648.jpg'),
      img('ivmbzlpj8a1md149k1oq28089dmq_shutterstock_402517945.jpg'),
      img('qkbdpqcsc1zcc6fx3ixjk6d8ddfm_shutterstock_1294346341.jpg')
    ],
    dayImages: {
      4: [
        img('ldw8opq10movuk9bl0makfptm0t7_shutterstock_265547957.jpg'),
        img('fhqadaegn3avfb8w76ybivw4zh63_1462451212_8686874370_7e550a07fc_o.jpg'),
        img('yhnsv95w6wk5p6k62d12qahs8ut9_1462444879_Silver_pagoda_cambodia.jpg'),
        img('14v30n70bzkabewngyg7u4iy5vvb_1462449203_4893624294_ea20a1f64a_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Phnom Penh`,
      'Breakfast and check out, then the flight to Cambodia',
      'The Royal Palace and the Silver Pagoda',
      'The national museum and Tuol Sleng',
      'Check in at the riverside retreat'
    ],
    accommodation: {
      name: 'The Bale Phnom Penh, Phnom Penh',
      description: '1 night · Breakfast · Standard room · 5★ · Five star retreat on the Mekong riverbank outside the city',
      images: [
        img('ud5p8zukk0gr9uixrtxqz8st7dmy_115732353.jpg'),
        img('huafh812agvwqdlrjfvm2zm8yxvf_115738355.jpg'),
        img('lri6ofc0lv6wbelsuac3y5x2cfny_115735811.jpg'),
        img('atpos6fq65aw4ifoxlki3beyj3p6_13151349794b30282d3b71d2c173e04f.webp'),
        img('rngybhhvlyixs7ms889cvnw9mpo0_115735756.jpg'),
        img('5b2htjwpyubwjvw7tl00qtc3xisb_274895497.jpg'),
        img('x408xe3gb7twyy9bni0nk0mwxb1q_115738411.jpg'),
        img('sgdeevx1613u8xy9q68u55fofr1c_115729782.jpg'),
        img('gu66rx34bo6j3f1xlr60iwa5mhyf_115729742.jpg'),
        img('ujddjx2w8f6cnlnf23jdf6ps4k8t_115741116.jpg'),
        img('pptt8x412661y44ml9l8dfysef83_2b10760279445e05f348980062ee40b8.webp'),
        img('i854pwq699idy4s6jga40l3m1bbt_115729799.jpg')
      ]
    },
    activities: [
      {
        name: 'Phnom Penh city tour',
        day: 4,
        optional: false,
        image: img('ldw8opq10movuk9bl0makfptm0t7_shutterstock_265547957.jpg'),
        description: 'The Royal Palace and the Silver Pagoda, the national museum, and the Tuol Sleng memorial that records what the Khmer Rouge did here.'
      }
    ],
    program: {
      name: 'Phnom Penh',
      description: 'A night at a five star riverside retreat, with the palace, the museum and the memorial on arrival.',
      image: img('cf1wt5v30jdw97rqmcuvj6ilsdui_shutterstock_1251727690.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Siem Reap',
    subtitle: 'Tonle Sap and Angkor',
    dayLabel: 'Day 5 to 6',
    images: [
      img('6n3scmd5rlsnaop1pb6iwv19uv23_shutterstock_601657496.jpg'),
      img('ynhhbvyz5wx9z88wwhtsk4jb3eee_shutterstock_128239889.jpg'),
      img('tiuvxkux663ncun5lwbu02kv3n8i_shutterstock_707816683.jpg'),
      img('8t8tbzlhfgky047nhali974ytiim_shutterstock_616405904.jpg')
    ],
    dayImages: {
      5: [
        img('0eeolh4m5vco2tlqhjedbgoybppc_shutterstock_172914194.jpg'),
        img('l0w57t2hz9ihtty4bgs1hvjkskvc_Tonle.jpg'),
        img('1mha8xsmyjpzp75qrrdfsbi12r17_Floating.jpg'),
        img('6n3scmd5rlsnaop1pb6iwv19uv23_shutterstock_601657496.jpg')
      ],
      6: [
        img('1i89mdw0hjjxnkzcal9u7ad6845p_shutterstock_559574212.jpg'),
        img('y8n110g2u7oikuzpnvkd5w75si6q_1462522736_15912678764_da2931d075_o.jpg'),
        img('gg7x8uab6ewriuht9ighk7uzlael_1462523244_8147796611_5f3799b751_o.jpg'),
        img('mypd7ebfznu6f6367vtfattqkvj3_1462528175_7519280908_477d0bf15a_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Siem Reap and Tonle Sap`,
      'Breakfast and check out, then north to Siem Reap',
      'Check in and a short rest',
      'A boat out onto the great lake',
      'A floating village built on stilts and pontoons',
      `${DAY_MARK}Day 6 · Angkor Wat`,
      'Early breakfast, then into the Angkor park',
      'Angkor Wat and the Bayon faces at Angkor Thom',
      'The root covered ruins of Ta Prohm',
      'Back at the hotel by evening'
    ],
    accommodation: {
      name: 'HARI Residence and Spa Siem Reap, Siem Reap',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Small hotel with a pool, a short ride from the old market',
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
        day: 5,
        optional: false,
        image: img('0eeolh4m5vco2tlqhjedbgoybppc_shutterstock_172914194.jpg'),
        description: 'A boat out onto the great lake, through a floating village of houses, schools and shops built on stilts and pontoons.'
      },
      {
        name: 'Angkor Wat day tour',
        day: 6,
        optional: false,
        image: img('1i89mdw0hjjxnkzcal9u7ad6845p_shutterstock_559574212.jpg'),
        description: 'Angkor Wat itself, the Bayon faces at Angkor Thom and the root covered ruins of Ta Prohm, with a guide for the full day.'
      }
    ],
    program: {
      name: 'Siem Reap',
      description: 'Two nights north, with the floating villages of Tonle Sap and a full day among the Angkor temples.',
      image: img('6n3scmd5rlsnaop1pb6iwv19uv23_shutterstock_601657496.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Hanoi',
    subtitle: 'Hanoi and Ninh Binh',
    dayLabel: 'Day 7 to 10',
    images: [
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg')
    ],
    dayImages: {
      7: [
        img('yhb848cifhrtbttwsxy76l36fgik_87-ma-may.jpg'),
        img('of44v39wp9am3io7u2sxw0s5bjfg_87-ma-may.jpg'),
        img('mqh0cx5yilooc97j0h5bemeobg01_1613645047_shutterstock_1676139631.jpg'),
        img('xf5ltzlprl4wk40yrzti9k9n836e_St._Joseph\'s_Cathedral_Hanoi_2.jpg')
      ],
      8: [
        img('kqd5m6rp6dmyc273ucrauw1z79kk_shutterstock_360194189.jpg'),
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg')
      ],
      9: [
        img('1b7t5qk08ptmrwnhze4z7t77pflc_shutterstock_2309649499.jpg'),
        img('yx7xjkegdm9ruyh3rv7d2qtwgjyg_8224556638_2c76bfbba5_o.jpg'),
        img('m9yizaucm34mdy6jeo07klf59c3r_51986787203_3b201c83cb_b.jpg'),
        img('8zsyn00w33flh1y50mn0irdngahv_shutterstock_591172484.jpg')
      ],
      10: [
        img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
        img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
        img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
        img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · On to Hanoi`,
      'Breakfast and check out, then the flight to Hanoi',
      'Check in at your hotel in the old quarter',
      'Rest of the day free at your own pace',
      'Optional: an evening walk around Hoan Kiem lake',
      `${DAY_MARK}Day 8 · Hanoi city tour`,
      'Breakfast, then a full guided day of the city',
      'The mausoleum and the one pillar pagoda',
      'The Temple of Literature, the old university',
      'Lunch included, then the old quarter lanes',
      `${DAY_MARK}Day 9 · Ninh Binh and Bich Dong`,
      'Breakfast, then south towards Ninh Binh',
      'A rowing boat through the flooded caves at Tam Coc',
      'A cycle ride through the rice fields',
      'Bich Dong, a pagoda built into the rock',
      `${DAY_MARK}Day 10 · Departure from Hanoi`,
      'Check out after an early breakfast',
      'Private transfer to the airport for your flight home'
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
        name: 'Hanoi full day city tour with lunch',
        day: 8,
        optional: false,
        image: img('kqd5m6rp6dmyc273ucrauw1z79kk_shutterstock_360194189.jpg'),
        description: 'A full day with a guide through the Ho Chi Minh mausoleum, the one pillar pagoda, the Temple of Literature and the old quarter, with lunch included.'
      },
      {
        name: 'Ninh Binh day tour',
        day: 9,
        optional: false,
        image: img('1b7t5qk08ptmrwnhze4z7t77pflc_shutterstock_2309649499.jpg'),
        description: 'South to Ninh Binh for a rowing boat through the flooded caves at Tam Coc and the limestone country around it.'
      },
      {
        name: 'Cycle ride to Bich Dong pagoda',
        day: 9,
        optional: false,
        image: img('8zsyn00w33flh1y50mn0irdngahv_shutterstock_591172484.jpg'),
        description: 'A cycle ride through the rice fields to Bich Dong, a three tier pagoda built into the rock face.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'On to Vietnam for the last nights, with a full guided day of the capital and a day in Ninh Binh.',
      image: img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg')
    }
  }
];

const detail = {
  slug: 'thailand-cambodia-and-vietnam-in-ten-days',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Thailand, Cambodia and Vietnam in Ten Days',
  alt: 'Longtail boats in the bay at Phi Phi island, Thailand',
  days: '10 days / 9 nights',
  stations: '5 stops',
  transport: 'Flights between the countries, private transfers and guided tours',
  tag: 'Grand tour',
  tags: ['Grand tour', 'Beach'],
  price: 98278,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuket', 'Phi Phi', 'Bangkok', 'Phnom Penh', 'Siem Reap', 'Tonle Sap', 'Angkor Wat', 'Hanoi', 'Ninh Binh'],
  stats: { days: 10, cities: 5, hotels: 5, activities: 8, transfers: 14 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['8 experiences', 'Activities'],
    ['14 transfers', 'Transport'],
    ['14 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three countries, five cities and a beach at the start. It is the sampler, and it works best if you treat the flights as part of the trip.',
    quoteMore: 'Keep hand luggage light. You have four internal flights and you will be glad not to wait at a belt in each airport.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Ten days across three countries: two nights above Patong in Phuket with a Phi Phi island boat day, a night in Bangkok, a night at a five star riverside retreat in Phnom Penh, two in Siem Reap for Tonle Sap and Angkor, then three in Hanoi with a full city day and a Ninh Binh day trip.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 9 nights with breakfast daily and dinner at the Cambodian and Vietnamese hotels, including a five star riverside retreat; all flights between the countries; private transfers throughout; a Phuket half day tour; a Phi Phi island day trip with lunch; a Bangkok half day city tour; a Phnom Penh city tour; a Tonle Sap lake boat ride; an Angkor Wat day tour; a full day Hanoi city tour with lunch; a Ninh Binh day tour with a cycle ride to Bich Dong.',
  intro2: 'Not included: international flights; Thailand, Cambodia and Vietnam visa fees; other lunches; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and Phuket tour (Arrival)', text: 'Arrival at Phuket and transfer to your resort\nA half day of the island with a guide\nThe big Buddha and the Karon viewpoint\nCheck in and the evening free', hotel: 'Club Bamboo Boutique Resort', highlights: ['Arrival at Phuket and transfer to your resort', 'A half day of the island with a guide', 'The big Buddha and the Karon viewpoint'] },
    { title: 'Day 2: Phi Phi islands (B, L)', text: 'Breakfast, then down to the pier\nA boat out to the Phi Phi islands\nMaya Bay, Pileh lagoon and snorkelling\nLunch on board, then back by late afternoon', hotel: 'Club Bamboo Boutique Resort', highlights: ['Breakfast, then down to the pier', 'A boat out to the Phi Phi islands', 'Maya Bay, Pileh lagoon and snorkelling'] },
    { title: 'Day 3: On to Bangkok (B)', text: 'Breakfast and check out, then the flight to Bangkok\nA half day of the city with a guide\nThe Golden Buddha and the Marble Temple\nCheck in and the evening free', hotel: 'Convenient Park Hotel', highlights: ['Breakfast and check out, then the flight to Bangkok', 'A half day of the city with a guide', 'The Golden Buddha and the Marble Temple'] },
    { title: 'Day 4: Phnom Penh (B)', text: 'Breakfast and check out, then the flight to Cambodia\nThe Royal Palace and the Silver Pagoda\nThe national museum and Tuol Sleng\nCheck in at the riverside retreat', hotel: 'The Bale Phnom Penh', highlights: ['Breakfast and check out, then the flight to Cambodia', 'The Royal Palace and the Silver Pagoda', 'The national museum and Tuol Sleng'] },
    { title: 'Day 5: Siem Reap and Tonle Sap (B, D)', text: 'Breakfast and check out, then north to Siem Reap\nCheck in and a short rest\nA boat out onto the great lake\nA floating village built on stilts and pontoons', hotel: 'HARI Residence and Spa Siem Reap', highlights: ['Breakfast and check out, then north to Siem Reap', 'Check in and a short rest', 'A boat out onto the great lake'] },
    { title: 'Day 6: Angkor Wat (B, D)', text: 'Early breakfast, then into the Angkor park\nAngkor Wat and the Bayon faces at Angkor Thom\nThe root covered ruins of Ta Prohm\nBack at the hotel by evening', hotel: 'HARI Residence and Spa Siem Reap', highlights: ['Early breakfast, then into the Angkor park', 'Angkor Wat and the Bayon faces at Angkor Thom', 'The root covered ruins of Ta Prohm'] },
    { title: 'Day 7: On to Hanoi (B, D)', text: 'Breakfast and check out, then the flight to Hanoi\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast and check out, then the flight to Hanoi', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 8: Hanoi city tour (B, L, D)', text: 'Breakfast, then a full guided day of the city\nThe mausoleum and the one pillar pagoda\nThe Temple of Literature, the old university\nLunch included, then the old quarter lanes', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then a full guided day of the city', 'The mausoleum and the one pillar pagoda', 'The Temple of Literature, the old university'] },
    { title: 'Day 9: Ninh Binh and Bich Dong (B, D)', text: 'Breakfast, then south towards Ninh Binh\nA rowing boat through the flooded caves at Tam Coc\nA cycle ride through the rice fields\nBich Dong, a pagoda built into the rock', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then south towards Ninh Binh', 'A rowing boat through the flooded caves at Tam Coc', 'A cycle ride through the rice fields'] },
    { title: 'Day 10: Departure from Hanoi (-)', text: 'Check out after an early breakfast\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Check out after an early breakfast', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Thailand, Cambodia and Vietnam visa fees; other lunches; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const thailandCambodiaVietnamTenBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const thailandCambodiaVietnamTenProduct = {
  slug: detail.slug,
  places: ['Phuket', 'Phi Phi', 'Bangkok', 'Phnom Penh', 'Siem Reap', 'Tonle Sap', 'Angkor Wat', 'Hanoi', 'Ninh Binh'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 10,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 8,
  transfers: 14,
  meals: 14,
  price: detail.price,
  images: cardImages
};
