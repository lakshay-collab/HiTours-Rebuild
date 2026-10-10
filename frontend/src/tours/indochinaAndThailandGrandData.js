// Indochina and Thailand Grand Tour. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('2kuteileb36cgbgpxwj5kw24c0gb_shutterstock_78665809.jpg'),
  img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
  img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
  img('tiuvxkux663ncun5lwbu02kv3n8i_shutterstock_707816683.jpg'),
  img('eioxrb4o57abr1cd0dck5n0h01ry_shutterstock_238473214.jpg'),
  img('772kirdev9kt0fj3txxq31gnnayr_shutterstock_236815570.jpg'),
  img('wgw28loe37wumwa59avtvzp7gcn4_shutterstock_2253884321.jpg'),
  img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
  img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('eioxrb4o57abr1cd0dck5n0h01ry_shutterstock_238473214.jpg'),
  img('772kirdev9kt0fj3txxq31gnnayr_shutterstock_236815570.jpg'),
  img('wgw28loe37wumwa59avtvzp7gcn4_shutterstock_2253884321.jpg'),
  img('zi12xgzjqrbv9gxjwy7w02yuczmb_shutterstock_1828092353-min.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    subtitle: 'Hanoi and Ninh Binh',
    dayLabel: 'Day 1 to 2',
    images: [
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
    ],
    dayImages: {
      1: [
        img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg'),
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
      ],
      2: [
        img('1b7t5qk08ptmrwnhze4z7t77pflc_shutterstock_2309649499.jpg'),
        img('yx7xjkegdm9ruyh3rv7d2qtwgjyg_8224556638_2c76bfbba5_o.jpg'),
        img('m9yizaucm34mdy6jeo07klf59c3r_51986787203_3b201c83cb_b.jpg'),
        img('8zsyn00w33flh1y50mn0irdngahv_shutterstock_591172484.jpg')
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
      'Bich Dong, a pagoda built into the rock'
    ],
    accommodation: {
      name: 'Hm Boutique Hotel Hanoi, Hanoi',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Small boutique hotel in the old quarter',
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
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Two nights in the old quarter, with a full day south to the rowing boats and rice fields of Ninh Binh.',
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
        img('e5y181gizy8jvyzc59gyilg4jawa_shutterstock_1425907181.jpg'),
        img('3yvzew883i398qg1nytjaz1ju0q8_48479739932_e3fe5de4a5_o.jpg'),
        img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg'),
        img('2kuteileb36cgbgpxwj5kw24c0gb_shutterstock_78665809.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Overnight on the bay`,
      'Breakfast and check out, then east towards the coast',
      'Board your cruise boat in the early afternoon',
      'Lunch and dinner on board',
      'A night moored among the limestone islands'
    ],
    accommodation: {
      name: 'Halong Royal Palace Cruise, Halong Bay',
      description: '1 night · All meals · Cabin with a window · 3★ · Timber cruise boat moored among the karsts overnight',
      images: [
        img('vfha4wn8g1939nz7blmv2zbezua8_img1.jpg'),
        img('l9966l7rud71rfw69v343f16mb19_img2.jpg'),
        img('n09ydj3cz91sv3y68w2zu33sibfu_img3.jpg'),
        img('kl90iojno6uwzhw9erd37sqd7hbr_img4.jpg'),
        img('lupm0drdxku9cdtsh908akadhb35_img6.jpg'),
        img('tx60hzkjj3yo3fawkwznd731yih5_img7.jpg'),
        img('6ulhot12pjkc35xwuq60fnlfq2j0_img9.jpg'),
        img('8qz5zlx21fua6f2s1ebf2pvimnvy_img8.jpg'),
        img('52fwashbztvumpmx5844pnfh9mjq_img5.jpg'),
        img('rksqnpehn5tm959cizcsgeoiudmd_img10.jpg'),
        img('z38906nmh7cvadosch9b3kj7itt5_img11.jpg'),
        img('qroxwpamvbmoyafswa3emewok9jr_img12.jpg'),
        img('726kp5lsbjey6is2udeg92t2q1f8_img13.jpg'),
        img('6akzil1d4hgz8m7a32o5xq59yn2p_img17.jpg'),
        img('zb77t02g3p3x30qi94l1s0oak9w4_img18.jpg'),
        img('w9jqo7e6b0lcd7pl8hagzkr2zocv_img19.jpg'),
        img('pi1shb8bokq4xs2vr0l6oopy0w8b_img20.jpg'),
        img('1ziwnoejr20kwl4mzy3fzdip0eyb_img21.jpg'),
        img('3trkv4fc1th5nohf83cgy45rdaz5_img22.jpg'),
        img('c8e81a9sfjvnbe7qiz7q8r9lp3wy_img23.jpg'),
        img('a02raiho83o298tsfzkur3e915ln_img24.jpg'),
        img('ornzzg481de8hogyln2fylxhfzel_img25.jpg'),
        img('p838rn62evnxen1k96g3zsg3gqk6_img32.jpg'),
        img('urg3fvttnue6s1c5gg2r7ngl0l6d_img35.jpg'),
        img('f0gv0k6ogfeh4er1s8letao9jd1l_img36.jpg'),
        img('ui9v9i2ooasrurv1zhzujhr37qbz_img37.jpg'),
        img('31uuev2q7tf9gkoft7iglxo77mdz_img38.jpg'),
        img('x731wrazuxssz9dhy7r82id72hu4_img42.jpg'),
        img('8vc8jh9jx29zvgzsmgfp7j5mo2ii_img43.jpg'),
        img('5zayqr1flqsdtd1tivi8o9cby29l_img44.jpg'),
        img('fi567e80wodqvyxlwafqwedyu577_img45.jpg'),
        img('20fev1zroqgxy8b06rnfibw4l43j_img46.jpg')
      ]
    },
    activities: [
      {
        name: 'Halong Bay overnight cruise',
        day: 3,
        optional: false,
        image: img('e5y181gizy8jvyzc59gyilg4jawa_shutterstock_1425907181.jpg'),
        description: 'A shared cruise out among the limestone islands, with lunch and dinner on board and a night moored in a quiet bay.'
      }
    ],
    program: {
      name: 'Halong Bay',
      description: 'A night on the water among the limestone islands, with all meals served on board.',
      image: img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Hanoi',
    subtitle: 'Back in Hanoi',
    dayLabel: 'Day 4',
    images: [
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg')
    ],
    dayImages: {
      4: [
        img('w12e64veaq0wv5ih134ampklbccr_shutterstock_1604743951.jpg'),
        img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg'),
        img('zv1gcf0zxn8h92yt1vcjn8cn04c0_1613631767_shutterstock_449720002.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Bay caves and back to Hanoi`,
      'Breakfast on board as the boat moves',
      'The Dark and Bright caves by sampan',
      'Back to the pier and on to Hanoi',
      'Check in and the evening free'
    ],
    accommodation: {
      name: 'Hm Boutique Hotel Hanoi, Hanoi',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Small boutique hotel in the old quarter',
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
        name: 'Dark and Bright caves',
        day: 4,
        optional: false,
        image: img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
        description: 'A kayak or sampan through the low openings of the Dark and Bright caves on the way off the water.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'The bay caves in the morning, then a night back in the city before the flight south.',
      image: img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Ho Chi Minh City',
    subtitle: 'Saigon, Cu Chi and the Mekong',
    dayLabel: 'Day 5 to 7',
    images: [
      img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
      img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
      img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
      img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg')
    ],
    dayImages: {
      5: [
        img('tonnwsasrtd050jxtlekyhfy34mv_1469613803_5967086564_fd29210949_o.jpg'),
        img('n75phneefos5hbnuuc33lg3il0vd_1484035791_city-hall-ho-chi-minh-city.jpg'),
        img('yopub1tyxa299n9cmdtc9hhqr4vn_1467884938_15756265548_301c16d1e2_o.jpg'),
        img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg')
      ],
      6: [
        img('k0iwrtaiemzmywouhcz1remyihfd_shutterstock_175128359.jpg'),
        img('f1dbl8hvclmsfb1jc8fob8ztpxuk_1467880098_5397869098_f0ce8370ed_o.jpg'),
        img('evxpd53708fszmcogueld24ki5be_1467883599_2814329078_1317aa23fe_o.jpg'),
        img('g026k1g5paxncu3aear1czkltedu_1469613255_7469930222_08a752c099_o.jpg')
      ],
      7: [
        img('4hlghe88itsu2x2yetdcq4mj42ni_1579700293_shutterstock_1529789570.jpg'),
        img('lvds5da20701ls58hbi447grx3s2_8193351650_d1ff3fd0b7_z.jpg'),
        img('ktw7z5gp3xhl3n59iymqv4ksukb2_Ben_Tre_Turtle_Island.jpg'),
        img('6cupjrsxzkngfv8zrrp9japoty1n_sgn15.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · South to Saigon`,
      'Breakfast and check out, then the flight south',
      'Check in in District 1',
      'Rest of the day free in the city',
      'Optional: the rooftop bars on Nguyen Hue',
      `${DAY_MARK}Day 6 · Saigon and the Cu Chi tunnels`,
      'Breakfast, then a half day of the city',
      'The palace, the cathedral and the war remnants museum',
      'North west to Cu Chi for the tunnels',
      'The trapdoors, the kitchens and the shafts',
      `${DAY_MARK}Day 7 · Mekong Delta`,
      'Breakfast, then south to My Tho in the delta',
      'A boat through the coconut creeks',
      'A sampan ride under the palms',
      'The coconut candy workshops, then back to the city'
    ],
    accommodation: {
      name: 'Avanti Saigon Hotel, Ho Chi Minh',
      description: '3 nights · Breakfast · Standard room · 3★ · Small hotel in District 1, a short walk from the opera house',
      images: [
        img('p1mdvoje0q9g9is81pbqakdxm7hw_img7.jpg'),
        img('c5g4ltwu93dyz27pbxvhf2j1ndyp_img1.jpg'),
        img('09wq44lgvnb8x2hkpabgxlyqf1ze_img2.jpg'),
        img('rxvam62ayf64w4u30l2ii68rbxbx_img5.jpg'),
        img('s82v4kv3y4ua81vfm79ix8aw8jn2_img9.jpg'),
        img('zlj0ektblbau1j7xc6clu344fvka_img10.jpg'),
        img('rr3xltqahf2cjqfi7avnx46x34r5_img18.jpg'),
        img('49fu4v8rtjok4rtmgps0zaept8cz_img3.jpg'),
        img('vbkpubbgpiyt4thbtyi8aavn9szw_img4.jpg'),
        img('sh4c9fqcmtnkx76l0dv3eegzgej2_img15.jpg')
      ]
    },
    activities: [
      {
        name: 'Saigon city tour',
        day: 6,
        optional: false,
        image: img('k0iwrtaiemzmywouhcz1remyihfd_shutterstock_175128359.jpg'),
        description: 'The Reunification Palace, the old post office and Notre Dame cathedral, then the war remnants museum and the Ben Thanh market.'
      },
      {
        name: 'Cu Chi tunnels half day tour',
        day: 6,
        optional: false,
        image: img('7c9y0w9lr632pl96udf5l9ek2h9h_shutterstock_690459592.jpg'),
        description: 'The tunnel network north west of the city, with the trapdoors, the kitchens and a crawl through a widened section of the original shafts.'
      },
      {
        name: 'Mekong Delta day tour',
        day: 7,
        optional: false,
        image: img('4hlghe88itsu2x2yetdcq4mj42ni_1579700293_shutterstock_1529789570.jpg'),
        description: 'South to My Tho for a boat into the coconut creeks, a sampan through the palms, and the workshops where they make coconut candy.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'Three nights in District 1 with the city, the Cu Chi tunnels and a full day in the Mekong Delta.',
      image: img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Siem Reap',
    subtitle: 'Tonle Sap and Angkor',
    dayLabel: 'Day 8 to 9',
    images: [
      img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg'),
      img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg'),
      img('6n3scmd5rlsnaop1pb6iwv19uv23_shutterstock_601657496.jpg'),
      img('ynhhbvyz5wx9z88wwhtsk4jb3eee_shutterstock_128239889.jpg')
    ],
    dayImages: {
      8: [
        img('0eeolh4m5vco2tlqhjedbgoybppc_shutterstock_172914194.jpg'),
        img('l0w57t2hz9ihtty4bgs1hvjkskvc_Tonle.jpg'),
        img('1mha8xsmyjpzp75qrrdfsbi12r17_Floating.jpg'),
        img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg')
      ],
      9: [
        img('1i89mdw0hjjxnkzcal9u7ad6845p_shutterstock_559574212.jpg'),
        img('y8n110g2u7oikuzpnvkd5w75si6q_1462522736_15912678764_da2931d075_o.jpg'),
        img('gg7x8uab6ewriuht9ighk7uzlael_1462523244_8147796611_5f3799b751_o.jpg'),
        img('mypd7ebfznu6f6367vtfattqkvj3_1462528175_7519280908_477d0bf15a_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · Siem Reap and Tonle Sap`,
      'Breakfast and check out, then the flight to Cambodia',
      'Check in at Siem Reap',
      'A boat out onto the great lake',
      'A floating village built on stilts and pontoons',
      `${DAY_MARK}Day 9 · Angkor Wat`,
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
        day: 8,
        optional: false,
        image: img('0eeolh4m5vco2tlqhjedbgoybppc_shutterstock_172914194.jpg'),
        description: 'A boat out onto the great lake, through a floating village of houses, schools and shops built on stilts and pontoons.'
      },
      {
        name: 'Angkor Wat day tour',
        day: 9,
        optional: false,
        image: img('1i89mdw0hjjxnkzcal9u7ad6845p_shutterstock_559574212.jpg'),
        description: 'Angkor Wat itself, the Bayon faces at Angkor Thom and the root covered ruins of Ta Prohm, with a guide for the full day.'
      }
    ],
    program: {
      name: 'Siem Reap',
      description: 'Two nights in Cambodia, with the floating villages of Tonle Sap and a full day among the Angkor temples.',
      image: img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg')
    }
  },
  {
    letter: 'F',
    name: 'Bangkok',
    dayLabel: 'Day 10 to 11',
    images: [
      img('zi12xgzjqrbv9gxjwy7w02yuczmb_shutterstock_1828092353-min.jpg'),
      img('cvd94dr8mjmqly8caqfs6ehd710n_co2.jpg'),
      img('mgac4dsd6bath7whtafidxvthqzc_shutterstock_368832815.jpg'),
      img('8esmek6ajh3sgyttq6cxyr5up2u6_shutterstock_482021800-min.jpg')
    ],
    dayImages: {
      10: [
        img('x6mukr6jdrnt14ol4qc9iyx3t1t8_1551439078_14153__1437988260.jpg'),
        img('khu67xids4smbtwbplqrdjj8ml88_1579166774_shutterstock_391516453.jpg'),
        img('zi12xgzjqrbv9gxjwy7w02yuczmb_shutterstock_1828092353-min.jpg'),
        img('cvd94dr8mjmqly8caqfs6ehd710n_co2.jpg')
      ],
      11: [
        img('jexvx55jgp4ivuae1w5du7fhn8if_shutterstock_2262818911.jpg'),
        img('uhomtxsemb8wpjie2mwarcb1o5vc_1472040579_494609992_8c10a230e8_b.jpg'),
        img('zi12xgzjqrbv9gxjwy7w02yuczmb_shutterstock_1828092353-min.jpg'),
        img('cvd94dr8mjmqly8caqfs6ehd710n_co2.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 10 · On to Bangkok`,
      'Breakfast and check out, then the flight to Thailand',
      'Check in on Sukhumvit in Bangkok',
      'Rest of the day free at your own pace',
      'Optional: the night markets and the skytrain',
      `${DAY_MARK}Day 11 · Bangkok city tour`,
      'Breakfast, then a guided day of the city',
      'The Grand Palace and the Emerald Buddha',
      'The temple quarter along the river',
      'Afternoon free in the city'
    ],
    accommodation: {
      name: 'Ambassador Hotel Bangkok, Bangkok',
      description: '2 nights · Breakfast · Standard room · 4★ · Large four star hotel on Sukhumvit, near the skytrain',
      images: [
        img('o2bpd1y85k9jaymrniswiw1oplnx_img5.jpg'),
        img('zbmriej5crh7l0xsd2xaa6plka4w_img8.jpg'),
        img('oiu0wgrv8rnbhy3bkbise3braqac_img7.jpg'),
        img('t1r04f956qju8arqjpc2ycxcbit0_img25.jpg'),
        img('doqoasdzsbnwa7b80pwg9fp9b0lc_download%20(2).jpg'),
        img('xvu0wj8nku8wapeior7n1bmwlifp_img41.jpg'),
        img('ynmvujm14krr2k1icxj6rivgs23z_download.jpg'),
        img('7jxd4jwsbdre5no1ze91ltc52694_download%20(4).jpg'),
        img('lz397dojpej1bsl1m9aifxwvxheh_download%20(1).jpg'),
        img('v8w3mkswqx7yhqgybi7tuxbg3ee0_img23.jpg'),
        img('jscef5nbxrn14ldluwt20tnl1ukt_download%20(3).jpg'),
        img('9oobkia0x9xbvmihhaljq01icdd7_img39.jpg'),
        img('wneqg71bkgtl60buhd32tf0cihb0_img9.jpg'),
        img('dlbzi9syc99hcqcz05qvos4m92yr_402387143.jpg')
      ]
    },
    activities: [
      {
        name: 'Bangkok city tour with the Grand Palace',
        day: 11,
        optional: false,
        image: img('jexvx55jgp4ivuae1w5du7fhn8if_shutterstock_2262818911.jpg'),
        description: 'The Grand Palace and the Emerald Buddha, then the temple quarter and the river boats along the Chao Phraya.'
      }
    ],
    program: {
      name: 'Bangkok',
      description: 'On to Thailand for two nights on Sukhumvit, with the Grand Palace and the Emerald Buddha.',
      image: img('zi12xgzjqrbv9gxjwy7w02yuczmb_shutterstock_1828092353-min.jpg')
    }
  },
  {
    letter: 'G',
    name: 'Pattaya',
    dayLabel: 'Day 12 to 13',
    images: [
      img('0k0xalzod2x1quwxoll1lt3t4ou9_shutterstock_289362893%20(1)-min.jpg'),
      img('v19tslpbpelnwcjlb8vdysyvm403_shutterstock_1008532504-min.jpg'),
      img('amvbk3tr55yxg3v3wt9blp27xt6w_shutterstock_1111917086-min.jpg'),
      img('9co979gu2vt35411lqkpvuivbo1s_shutterstock_317628221.jpg')
    ],
    dayImages: {
      12: [
        img('38g6th9f7n600c3477726l2oyt09_8530026361_f256711b6e_o.jpg'),
        img('evpqo5dpu51e57fvs4n5kmq88ecf_1577443336_shutterstock_404113681.jpg'),
        img('nggctysf3zkll29fcxyrltzdp0cg_1577351158_shutterstock_706822318.jpg'),
        img('0k0xalzod2x1quwxoll1lt3t4ou9_shutterstock_289362893%20(1)-min.jpg')
      ],
      13: [
        img('we68xopgvhxvi7wt9eyhehbvwv1w_dl.beatsnoop.com-VHomu5ki9h.jpg'),
        img('kz1jbr0anl74tbg4qaspajd1oxm4_1472036650_8237106102_1f7541157d_b.jpg'),
        img('26irbobpyxgu82qr3ngdovihfmw9_shutterstock_1801193749.jpg'),
        img('0k0xalzod2x1quwxoll1lt3t4ou9_shutterstock_289362893%20(1)-min.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 12 · Down to Pattaya`,
      'Breakfast and check out, then south to the gulf coast',
      'Check in near Pattaya beach road',
      'Rest of the day free at your own pace',
      'Optional: the walking street after dark',
      `${DAY_MARK}Day 13 · Coral Island`,
      'Breakfast, then a speedboat out to Koh Larn',
      'The beaches and the clear water',
      'Optional: parasailing off the headland',
      'Back in Pattaya in the evening'
    ],
    accommodation: {
      name: 'Golden Tulip Hotel Essential, Pattaya',
      description: '2 nights · Breakfast · Standard room · 3★ · Hotel a short walk from Pattaya beach road',
      images: [
        img('bprwd90sisq93jknm9gic6sm3odm_download%20(69).jpg'),
        img('4zo1i3iw3wms4j5qdi0u7lsqr8rr_download%20(76).jpg'),
        img('6kn77rmz3295w731s3ldvj5t4bgy_download%20(75).jpg'),
        img('i2fr8vh1swpype4e8oy8o1g32u3w_download%20(80).jpg'),
        img('j1odyw8ip54rj6n83nyimiqcbll3_download%20(74).jpg'),
        img('wrwg01cppms1vft37qpz52o3oogi_download%20(71).jpg'),
        img('aq63btncmk5nikrbgwd484svaf8p_download%20(79).jpg'),
        img('u1e3d6idlkn9pzu108avws9b0d3n_download%20(72).jpg'),
        img('tdbgqvc32a1fpq2cci8rjh413eq8_download%20(78).jpg'),
        img('ids1tm7dpbjyfyhrqsq32dt2kbju_download%20(77).jpg')
      ]
    },
    activities: [
      {
        name: 'Coral Island tour',
        day: 13,
        optional: false,
        image: img('we68xopgvhxvi7wt9eyhehbvwv1w_dl.beatsnoop.com-VHomu5ki9h.jpg'),
        description: 'A speedboat out to Koh Larn for the beaches, the clear water and the parasailing off the headland.'
      }
    ],
    program: {
      name: 'Pattaya',
      description: 'Two nights on the gulf coast, with a speedboat day out to Coral Island.',
      image: img('0k0xalzod2x1quwxoll1lt3t4ou9_shutterstock_289362893%20(1)-min.jpg')
    }
  },
  {
    letter: 'H',
    name: 'Phuket',
    subtitle: 'Phuket and Phi Phi',
    dayLabel: 'Day 14 to 16',
    images: [
      img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg'),
      img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg'),
      img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg'),
      img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg')
    ],
    dayImages: {
      14: [
        img('a8luqsni73mqhn0o6ekfzbwvrhc1_1469607104-simon-cabaret-show-1.jpg'),
        img('goahiuvxilncq43ac8db0v0rl8ac_shutterstock_394497928.jpg'),
        img('lknez6qnnfbvw2yujulecml5egsj_1579855096_shutterstock_1265137084.jpg'),
        img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg')
      ],
      15: [
        img('hpa4azp4say5a7xk7is7cvzn1v0m_dl.beatsnoop.com-R0BH6SMQ7h.jpg'),
        img('v6a17443ovp0a99j7nc95113gafl_1462975119_8082854403_dc5d2a88e5_o.jpg'),
        img('6kv2if7t8tqqp0ait2c0j5r8fm3h_shutterstock_176838932.jpg'),
        img('3mfwxmvwud1iv4bo1l0uihm5omzw_1627129752_shutterstock_1140016289_(2).jpg')
      ],
      16: [
        img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg'),
        img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg'),
        img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg'),
        img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 14 · Across to Phuket`,
      'Breakfast and check out, then the flight to Phuket',
      'Check in near Patong beach',
      'Rest of the day free at your own pace',
      'Optional: the big Buddha on its hill',
      `${DAY_MARK}Day 15 · Phi Phi islands`,
      'Breakfast, then down to the pier',
      'A boat out to the Phi Phi islands',
      'Maya Bay, Pileh lagoon and snorkelling',
      'Lunch on board, then back by late afternoon',
      `${DAY_MARK}Day 16 · Departure from Phuket`,
      'Check out after an early breakfast',
      'Private transfer to Phuket airport for your flight home'
    ],
    accommodation: {
      name: 'Journeyhub Phuket Patong, Phuket',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel a few minutes from Patong beach',
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
        name: 'Phi Phi island day trip with lunch',
        day: 15,
        optional: false,
        image: img('hpa4azp4say5a7xk7is7cvzn1v0m_dl.beatsnoop.com-R0BH6SMQ7h.jpg'),
        description: 'A boat out to the Phi Phi islands for the cliffs at Maya Bay and Pileh lagoon, with snorkelling and lunch on board.'
      }
    ],
    program: {
      name: 'Phuket',
      description: 'Across to the Andaman coast for the last two nights, with a boat day out to the Phi Phi islands.',
      image: img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg')
    }
  }
];

const detail = {
  slug: 'indochina-and-thailand-grand-tour',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Indochina and Thailand Grand Tour',
  alt: 'Grand Palace rooftops and spires in Bangkok',
  days: '16 days / 15 nights',
  stations: '8 stops',
  transport: 'Flights between the countries, private transfers and guided tours',
  tag: 'Grand tour',
  tags: ['Grand tour', 'Beach'],
  price: 142186,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Ho Chi Minh City', 'Siem Reap', 'Bangkok', 'Pattaya', 'Phuket'],
  stats: { days: 16, cities: 7, hotels: 7, activities: 11, transfers: 22 },
  gallery: heroGallery,
  services: [
    ['7 hotels', 'Accommodation'],
    ['11 experiences', 'Activities'],
    ['22 transfers', 'Transport'],
    ['22 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Sixteen days, three countries and seven hotels. It finishes on the Andaman coast, which is the right way round.',
    quoteMore: 'Do the shopping in Bangkok rather than earlier. You will not want to carry it through Cambodia and Vietnam.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Sixteen days through Vietnam, Cambodia and Thailand: Hanoi with Ninh Binh and an overnight cruise in Halong Bay, three nights in Saigon with the Cu Chi tunnels and the Mekong Delta, Siem Reap for Tonle Sap and Angkor, then Bangkok and the Grand Palace, Coral Island from Pattaya and the Phi Phi islands from Phuket.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 15 nights with breakfast daily, dinner at the Vietnamese and Cambodian hotels and all meals on the cruise boat; all flights between the countries; private transfers throughout; a Ninh Binh day tour with a cycle ride to Bich Dong; a shared overnight cruise in Halong Bay with the Dark and Bright caves; a Saigon city tour; the Cu Chi tunnels half day tour; a Mekong Delta day tour; a Tonle Sap lake boat ride; an Angkor Wat day tour; a Bangkok city tour with the Grand Palace and the Emerald Buddha; a Coral Island tour from Pattaya; a Phi Phi island day trip with lunch.',
  intro2: 'Not included: international flights; Vietnam, Cambodia and Thailand visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Ninh Binh and Bich Dong (B, D)', text: 'Breakfast, then south towards Ninh Binh\nA rowing boat through the flooded caves at Tam Coc\nA cycle ride through the rice fields\nBich Dong, a pagoda built into the rock', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then south towards Ninh Binh', 'A rowing boat through the flooded caves at Tam Coc', 'A cycle ride through the rice fields'] },
    { title: 'Day 3: Overnight on the bay (B, L, D)', text: 'Breakfast and check out, then east towards the coast\nBoard your cruise boat in the early afternoon\nLunch and dinner on board\nA night moored among the limestone islands', hotel: 'Halong Royal Palace Cruise', highlights: ['Breakfast and check out, then east towards the coast', 'Board your cruise boat in the early afternoon', 'Lunch and dinner on board'] },
    { title: 'Day 4: Bay caves and back to Hanoi (B, D)', text: 'Breakfast on board as the boat moves\nThe Dark and Bright caves by sampan\nBack to the pier and on to Hanoi\nCheck in and the evening free', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast on board as the boat moves', 'The Dark and Bright caves by sampan', 'Back to the pier and on to Hanoi'] },
    { title: 'Day 5: South to Saigon (B)', text: 'Breakfast and check out, then the flight south\nCheck in in District 1\nRest of the day free in the city\nOptional: the rooftop bars on Nguyen Hue', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast and check out, then the flight south', 'Check in in District 1', 'Rest of the day free in the city'] },
    { title: 'Day 6: Saigon and the Cu Chi tunnels (B)', text: 'Breakfast, then a half day of the city\nThe palace, the cathedral and the war remnants museum\nNorth west to Cu Chi for the tunnels\nThe trapdoors, the kitchens and the shafts', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast, then a half day of the city', 'The palace, the cathedral and the war remnants museum', 'North west to Cu Chi for the tunnels'] },
    { title: 'Day 7: Mekong Delta (B)', text: 'Breakfast, then south to My Tho in the delta\nA boat through the coconut creeks\nA sampan ride under the palms\nThe coconut candy workshops, then back to the city', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast, then south to My Tho in the delta', 'A boat through the coconut creeks', 'A sampan ride under the palms'] },
    { title: 'Day 8: Siem Reap and Tonle Sap (B, D)', text: 'Breakfast and check out, then the flight to Cambodia\nCheck in at Siem Reap\nA boat out onto the great lake\nA floating village built on stilts and pontoons', hotel: 'HARI Residence and Spa Siem Reap', highlights: ['Breakfast and check out, then the flight to Cambodia', 'Check in at Siem Reap', 'A boat out onto the great lake'] },
    { title: 'Day 9: Angkor Wat (B, D)', text: 'Early breakfast, then into the Angkor park\nAngkor Wat and the Bayon faces at Angkor Thom\nThe root covered ruins of Ta Prohm\nBack at the hotel by evening', hotel: 'HARI Residence and Spa Siem Reap', highlights: ['Early breakfast, then into the Angkor park', 'Angkor Wat and the Bayon faces at Angkor Thom', 'The root covered ruins of Ta Prohm'] },
    { title: 'Day 10: On to Bangkok (B)', text: 'Breakfast and check out, then the flight to Thailand\nCheck in on Sukhumvit in Bangkok\nRest of the day free at your own pace\nOptional: the night markets and the skytrain', hotel: 'Ambassador Hotel Bangkok', highlights: ['Breakfast and check out, then the flight to Thailand', 'Check in on Sukhumvit in Bangkok', 'Rest of the day free at your own pace'] },
    { title: 'Day 11: Bangkok city tour (B)', text: 'Breakfast, then a guided day of the city\nThe Grand Palace and the Emerald Buddha\nThe temple quarter along the river\nAfternoon free in the city', hotel: 'Ambassador Hotel Bangkok', highlights: ['Breakfast, then a guided day of the city', 'The Grand Palace and the Emerald Buddha', 'The temple quarter along the river'] },
    { title: 'Day 12: Down to Pattaya (B)', text: 'Breakfast and check out, then south to the gulf coast\nCheck in near Pattaya beach road\nRest of the day free at your own pace\nOptional: the walking street after dark', hotel: 'Golden Tulip Hotel Essential', highlights: ['Breakfast and check out, then south to the gulf coast', 'Check in near Pattaya beach road', 'Rest of the day free at your own pace'] },
    { title: 'Day 13: Coral Island (B)', text: 'Breakfast, then a speedboat out to Koh Larn\nThe beaches and the clear water\nOptional: parasailing off the headland\nBack in Pattaya in the evening', hotel: 'Golden Tulip Hotel Essential', highlights: ['Breakfast, then a speedboat out to Koh Larn', 'The beaches and the clear water', 'Optional: parasailing off the headland'] },
    { title: 'Day 14: Across to Phuket (B)', text: 'Breakfast and check out, then the flight to Phuket\nCheck in near Patong beach\nRest of the day free at your own pace\nOptional: the big Buddha on its hill', hotel: 'Journeyhub Phuket Patong', highlights: ['Breakfast and check out, then the flight to Phuket', 'Check in near Patong beach', 'Rest of the day free at your own pace'] },
    { title: 'Day 15: Phi Phi islands (B, L)', text: 'Breakfast, then down to the pier\nA boat out to the Phi Phi islands\nMaya Bay, Pileh lagoon and snorkelling\nLunch on board, then back by late afternoon', hotel: 'Journeyhub Phuket Patong', highlights: ['Breakfast, then down to the pier', 'A boat out to the Phi Phi islands', 'Maya Bay, Pileh lagoon and snorkelling'] },
    { title: 'Day 16: Departure from Phuket (-)', text: 'Check out after an early breakfast\nPrivate transfer to Phuket airport for your flight home', hotel: 'Departure', highlights: ['Check out after an early breakfast', 'Private transfer to Phuket airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam, Cambodia and Thailand visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const indochinaAndThailandGrandBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const indochinaAndThailandGrandProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Ho Chi Minh City', 'Siem Reap', 'Bangkok', 'Pattaya', 'Phuket'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 16,
  stops: 8,
  hotels: 7,
  cities: 7,
  activities: 11,
  transfers: 22,
  meals: 22,
  price: detail.price,
  images: cardImages
};
