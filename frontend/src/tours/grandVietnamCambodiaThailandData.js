// Grand Vietnam, Cambodia and Thailand. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
  img('ess8tbxn8tc68q49uptyn8nsx4he_shutterstock_1218764578.jpg'),
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
  img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg'),
  img('qw46v2de4a78q03dsvrujuwjzdvn_shutterstock_1463281034.jpg'),
  img('9co979gu2vt35411lqkpvuivbo1s_shutterstock_317628221.jpg'),
  img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg'),
  img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
  img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    dayLabel: 'Day 1 to 2',
    images: [
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
    ],
    dayImages: {
      1: [
        img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg'),
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg')
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
      'Arrival at Noi Bai Airport and private sedan transfer into Hanoi',
      'Check in from two in the afternoon and keep the day free',
      'Optional: Hoan Kiem lake, Ngoc Son temple or the Temple of Literature',
      `${DAY_MARK}Day 2 · Ninh Binh day trip`,
      'Breakfast, then shared coach transfer south to Ninh Binh',
      'Sampan ride between the karst hills and the rice fields',
      'Cycle out to Bich Dong pagoda through the villages',
      'Return shared transfer to Hanoi in the evening'
    ],
    accommodation: {
      name: 'Hm Boutique Hotel Hanoi, Hanoi',
      description: '2 nights · Breakfast included · Deluxe room · 3★ · Hm Boutique in the old quarter of Hanoi',
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
        name: 'Ninh Binh Day Tour',
        day: 2,
        optional: false,
        image: img('1b7t5qk08ptmrwnhze4z7t77pflc_shutterstock_2309649499.jpg'),
        description: 'A day south of Hanoi among limestone hills and flooded rice fields, with a rowed sampan through the caves and channels.'
      },
      {
        name: 'Bich Dong Cycle Ride',
        day: 2,
        optional: false,
        image: img('8zsyn00w33flh1y50mn0irdngahv_shutterstock_591172484.jpg'),
        description: 'A flat ride out through the villages to the Bich Dong pagoda, built into the rock on three levels.'
      },
      {
        name: 'Temple of Literature',
        day: 1,
        optional: true,
        image: img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg'),
        description: 'Vietnam\'s first university, a walled garden of courtyards and stelae in the middle of the city.'
      },
      {
        name: 'Hoan Kiem Lake',
        day: 1,
        optional: true,
        image: img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        description: 'The lake at the heart of the old quarter, with Ngoc Son temple on its island and the streets busiest at dusk.'
      }
    ],
    program: {
      name: 'Old quarter and the Ninh Binh karst',
      description: 'Two nights in Hanoi with a day out to Ninh Binh, a sampan ride between the karst hills and a cycle to Bich Dong pagoda.',
      image: img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Halong Bay',
    dayLabel: 'Day 3',
    images: [
      img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg'),
      img('ess8tbxn8tc68q49uptyn8nsx4he_shutterstock_1218764578.jpg'),
      img('4htmt1ezsgvun0n6isr7x482cgy6_shutterstock_211441507.jpg'),
      img('dsxekypeedr6l4ri8eijlkm31h7f_shutterstock_196927403.jpg')
    ],
    dayImages: {
      3: [
        img('e5y181gizy8jvyzc59gyilg4jawa_shutterstock_1425907181.jpg'),
        img('3yvzew883i398qg1nytjaz1ju0q8_48479739932_e3fe5de4a5_o.jpg'),
        img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg'),
        img('ess8tbxn8tc68q49uptyn8nsx4he_shutterstock_1218764578.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Halong Bay overnight cruise`,
      'Breakfast, then shared coach transfer out to Halong Bay',
      'Board the Royal Palace cruise and sail among the limestone islands',
      'Kayaking and swimming stops, then a night on board at anchor'
    ],
    accommodation: {
      name: 'Halong Royal Palace Cruise, Halong Bay',
      description: '1 night · Breakfast included · Standard cabin · 3★ · Overnight on the Halong Royal Palace cruise at anchor in the bay',
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
        name: 'Halong Bay Overnight Cruise',
        day: 3,
        optional: false,
        image: img('e5y181gizy8jvyzc59gyilg4jawa_shutterstock_1425907181.jpg'),
        description: 'A cruise out among the limestone islands with kayaking, swimming stops and a night at anchor in a quiet channel.'
      }
    ],
    program: {
      name: 'A night among the limestone islands',
      description: 'Sailing out from the harbour into Halong Bay, with kayaking, swimming stops and a cabin on board for the night.',
      image: img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Hanoi',
    dayLabel: 'Day 4',
    images: [
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg')
    ],
    dayImages: {
      4: [
        img('w12e64veaq0wv5ih134ampklbccr_shutterstock_1604743951.jpg'),
        img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg'),
        img('zv1gcf0zxn8h92yt1vcjn8cn04c0_1613631767_shutterstock_449720002.jpg'),
        img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Back to Hanoi`,
      'Breakfast on board while the boat cruises the quieter channels',
      'The Dark and Bright caves by small boat before docking',
      'Shared coach transfer back to Hanoi and check in again',
      'Optional: the Ho Chi Minh mausoleum or the Temple of Literature'
    ],
    accommodation: {
      name: 'Hm Boutique Hotel Hanoi, Hanoi',
      description: '1 night · Breakfast included · Deluxe room · 3★ · Back at Hm Boutique in Hanoi for one more night',
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
        name: 'Halong Bay Morning Cruise',
        day: 4,
        optional: false,
        image: img('w12e64veaq0wv5ih134ampklbccr_shutterstock_1604743951.jpg'),
        description: 'The last hours on the water, cruising the quieter channels of the bay before the boat docks at the harbour.'
      },
      {
        name: 'Dark and Bright Cave',
        day: 4,
        optional: false,
        image: img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
        description: 'A small boat passage through a low cave into a hidden lagoon ringed by cliffs, rowed by hand.'
      },
      {
        name: 'Ho Chi Minh Mausoleum',
        day: 4,
        optional: true,
        image: img('zv1gcf0zxn8h92yt1vcjn8cn04c0_1613631767_shutterstock_449720002.jpg'),
        description: 'The marble mausoleum on Ba Dinh square, with the presidential palace grounds and the stilt house alongside.'
      }
    ],
    program: {
      name: 'Caves, then back to the city',
      description: 'A morning cruise through the Dark and Bright caves, then back to Hanoi with the evening free in the old quarter.',
      image: img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg')
    }
  },
  {
    letter: 'D',
    name: 'Ho Chi Minh City',
    dayLabel: 'Day 5 to 7',
    images: [
      img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
      img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
      img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg'),
      img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg')
    ],
    dayImages: {
      5: [
        img('tonnwsasrtd050jxtlekyhfy34mv_1469613803_5967086564_fd29210949_o.jpg'),
        img('n75phneefos5hbnuuc33lg3il0vd_1484035791_city-hall-ho-chi-minh-city.jpg'),
        img('yopub1tyxa299n9cmdtc9hhqr4vn_1467884938_15756265548_301c16d1e2_o.jpg'),
        img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg')
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
      `${DAY_MARK}Day 5 · Flight to Ho Chi Minh City`,
      'Breakfast, then shared transfer to Noi Bai Airport',
      'Included flight from Hanoi to Ho Chi Minh City',
      'Shared transfer from Tan Son Nhat Airport to your Saigon hotel',
      'Optional: the Saigon river front, City Hall or the Mariamman temple',
      `${DAY_MARK}Day 6 · Cu Chi tunnels and the city`,
      'Breakfast, then shared transfer for the Ho Chi Minh city tour',
      'Colonial landmarks and markets through the old centre of Saigon',
      'Afternoon shared transfer out to the Cu Chi tunnels',
      'Crawl a cleared section of tunnel and see the traps and workshops',
      `${DAY_MARK}Day 7 · Mekong Delta day trip`,
      'Breakfast, then shared transfer down to My Tho on the delta',
      'Boat out to the islands, then a sampan along the narrow canals',
      'Coconut candy workshops and fruit gardens along the way',
      'Return shared transfer to Ho Chi Minh City in the evening'
    ],
    accommodation: {
      name: 'Avanti Saigon Hotel, Ho Chi Minh',
      description: '3 nights · Breakfast included · Deluxe room · 3★ · Avanti Saigon in District 1, walkable to the old centre',
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
        name: 'Ho Chi Minh City Tour',
        day: 6,
        optional: false,
        image: img('k0iwrtaiemzmywouhcz1remyihfd_shutterstock_175128359.jpg'),
        description: 'A shared tour through the colonial centre of Saigon, its landmarks and the markets, with time to walk.'
      },
      {
        name: 'Cu Chi Tunnels',
        day: 6,
        optional: false,
        image: img('7c9y0w9lr632pl96udf5l9ek2h9h_shutterstock_690459592.jpg'),
        description: 'A half day at the tunnel network north of the city, with a cleared section you can crawl and the traps and workshops above.'
      },
      {
        name: 'Mekong Delta Day Tour',
        day: 7,
        optional: false,
        image: img('4hlghe88itsu2x2yetdcq4mj42ni_1579700293_shutterstock_1529789570.jpg'),
        description: 'A full day down at My Tho with boats out to the islands, sampans along the canals and coconut candy workshops.'
      },
      {
        name: 'Saigon River Front',
        day: 5,
        optional: true,
        image: img('tonnwsasrtd050jxtlekyhfy34mv_1469613803_5967086564_fd29210949_o.jpg'),
        description: 'The promenade along the river, best in the early evening when the city lights come on across the water.'
      }
    ],
    program: {
      name: 'Saigon, the tunnels and the delta',
      description: 'Three nights in the south with a city tour, a half day at the Cu Chi tunnels and a full day out on the Mekong Delta.',
      image: img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Siem Reap',
    dayLabel: 'Day 8 to 9',
    images: [
      img('8t8tbzlhfgky047nhali974ytiim_shutterstock_616405904.jpg'),
      img('1xf3c51dyd41hxizgyq99uie61d9_shutterstock_381559081.jpg'),
      img('kz2o1i094vsaodj2hkv3prbsrbsy_shutterstock_237338044.jpg'),
      img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg')
    ],
    dayImages: {
      8: [
        img('0eeolh4m5vco2tlqhjedbgoybppc_shutterstock_172914194.jpg'),
        img('l0w57t2hz9ihtty4bgs1hvjkskvc_Tonle.jpg'),
        img('1mha8xsmyjpzp75qrrdfsbi12r17_Floating.jpg'),
        img('8t8tbzlhfgky047nhali974ytiim_shutterstock_616405904.jpg')
      ],
      9: [
        img('1i89mdw0hjjxnkzcal9u7ad6845p_shutterstock_559574212.jpg'),
        img('y8n110g2u7oikuzpnvkd5w75si6q_1462522736_15912678764_da2931d075_o.jpg'),
        img('gg7x8uab6ewriuht9ighk7uzlael_1462523244_8147796611_5f3799b751_o.jpg'),
        img('mypd7ebfznu6f6367vtfattqkvj3_1462528175_7519280908_477d0bf15a_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · Flight to Siem Reap and Tonle Sap`,
      'Breakfast, then shared transfer to Tan Son Nhat Airport',
      'Included flight from Ho Chi Minh City to Siem Reap',
      'Boat ride on Tonle Sap lake past the floating villages',
      'Shared transfer on to your Siem Reap hotel',
      `${DAY_MARK}Day 9 · Angkor Wat day tour`,
      'Breakfast, then shared transfer to the Angkor archaeological park',
      'Angkor Wat itself, at its best in the morning light',
      'Angkor Thom, the Bayon faces and Ta Prohm in the afternoon',
      'Return shared transfer to the hotel'
    ],
    accommodation: {
      name: 'HARI Residence and Spa, Siem Reap',
      description: '2 nights · Breakfast included · Standard room · 3★ · HARI Residence and Spa, a short ride from Pub Street',
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
        name: 'Tonle Sap Lake Boat Ride',
        day: 8,
        optional: false,
        image: img('0eeolh4m5vco2tlqhjedbgoybppc_shutterstock_172914194.jpg'),
        description: 'A boat out onto the lake past floating villages, schools and markets that rise and fall with the water.'
      },
      {
        name: 'Angkor Wat Day Tour',
        day: 9,
        optional: false,
        image: img('1i89mdw0hjjxnkzcal9u7ad6845p_shutterstock_559574212.jpg'),
        description: 'A full day across the Angkor park, from Angkor Wat itself to the Bayon faces of Angkor Thom and the roots at Ta Prohm.'
      }
    ],
    program: {
      name: 'Tonle Sap and the Angkor temples',
      description: 'Two nights in Siem Reap with a boat ride on Tonle Sap lake and a full day across the Angkor temples.',
      image: img('8t8tbzlhfgky047nhali974ytiim_shutterstock_616405904.jpg')
    }
  },
  {
    letter: 'F',
    name: 'Bangkok',
    dayLabel: 'Day 10 to 11',
    images: [
      img('eioxrb4o57abr1cd0dck5n0h01ry_shutterstock_238473214.jpg'),
      img('nn3ddc2jsww3ka4dt8ovqbpyhh49_shutterstock_1753947629-min%20(1).jpg'),
      img('t9w8mxfvt7ol6qqqq7jzea3aa2o4_shutterstock_268422755.jpg'),
      img('hyo0p91rzm8fip6pea4ixwjmonyo_shutterstock_1793108161.jpg')
    ],
    dayImages: {
      10: [
        img('x6mukr6jdrnt14ol4qc9iyx3t1t8_1551439078_14153__1437988260.jpg'),
        img('khu67xids4smbtwbplqrdjj8ml88_1579166774_shutterstock_391516453.jpg'),
        img('eioxrb4o57abr1cd0dck5n0h01ry_shutterstock_238473214.jpg'),
        img('nn3ddc2jsww3ka4dt8ovqbpyhh49_shutterstock_1753947629-min%20(1).jpg')
      ],
      11: [
        img('jexvx55jgp4ivuae1w5du7fhn8if_shutterstock_2262818911.jpg'),
        img('uhomtxsemb8wpjie2mwarcb1o5vc_1472040579_494609992_8c10a230e8_b.jpg'),
        img('eioxrb4o57abr1cd0dck5n0h01ry_shutterstock_238473214.jpg'),
        img('nn3ddc2jsww3ka4dt8ovqbpyhh49_shutterstock_1753947629-min%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 10 · Flight to Bangkok`,
      'Breakfast, then shared transfer to Siem Reap Airport',
      'Included flight from Siem Reap to Bangkok',
      'Shared transfer from Suvarnabhumi Airport to your hotel',
      'Optional: Chatuchak market or an evening by the Chao Phraya',
      `${DAY_MARK}Day 11 · Bangkok city tour`,
      'Breakfast, then shared transfer for the Bangkok city tour',
      'The Grand Palace and the Emerald Buddha inside Wat Phra Kaew',
      'Back at the hotel by mid afternoon with the evening free'
    ],
    accommodation: {
      name: 'Ambassador Hotel Bangkok, Bangkok',
      description: '2 nights · Breakfast included · Super Deluxe room · 4★ · Ambassador Hotel on Sukhumvit, close to the Skytrain',
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
        name: 'Bangkok City Tour with the Grand Palace',
        day: 11,
        optional: false,
        image: img('jexvx55jgp4ivuae1w5du7fhn8if_shutterstock_2262818911.jpg'),
        description: 'A shared tour of the Grand Palace complex and Wat Phra Kaew, where the Emerald Buddha sits above the main hall.'
      },
      {
        name: 'Chatuchak Weekend Market',
        day: 10,
        optional: true,
        image: img('khu67xids4smbtwbplqrdjj8ml88_1579166774_shutterstock_391516453.jpg'),
        description: 'Thousands of stalls across a vast weekend market, best reached by Skytrain and best walked early.'
      }
    ],
    program: {
      name: 'The Grand Palace and the city',
      description: 'Two nights in the Thai capital with a tour of the Grand Palace and the Emerald Buddha, and a free evening for markets.',
      image: img('eioxrb4o57abr1cd0dck5n0h01ry_shutterstock_238473214.jpg')
    }
  },
  {
    letter: 'G',
    name: 'Pattaya',
    dayLabel: 'Day 12 to 13',
    images: [
      img('gy6ydvck32nkrqc0a957hn6qa1gn_shutterstock_1273928071.jpg'),
      img('xqqgyuisthrhpr1pt4k869ukngar_shutterstock_1424645588-min.jpg'),
      img('hx1mex42a0hqgfl09mzf4titrit9_shutterstock_1272430873-min.jpg'),
      img('0k0xalzod2x1quwxoll1lt3t4ou9_shutterstock_289362893%20(1)-min.jpg')
    ],
    dayImages: {
      12: [
        img('38g6th9f7n600c3477726l2oyt09_8530026361_f256711b6e_o.jpg'),
        img('evpqo5dpu51e57fvs4n5kmq88ecf_1577443336_shutterstock_404113681.jpg'),
        img('nggctysf3zkll29fcxyrltzdp0cg_1577351158_shutterstock_706822318.jpg'),
        img('gy6ydvck32nkrqc0a957hn6qa1gn_shutterstock_1273928071.jpg')
      ],
      13: [
        img('we68xopgvhxvi7wt9eyhehbvwv1w_dl.beatsnoop.com-VHomu5ki9h.jpg'),
        img('kz1jbr0anl74tbg4qaspajd1oxm4_1472036650_8237106102_1f7541157d_b.jpg'),
        img('26irbobpyxgu82qr3ngdovihfmw9_shutterstock_1801193749.jpg'),
        img('gy6ydvck32nkrqc0a957hn6qa1gn_shutterstock_1273928071.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 12 · On to Pattaya`,
      'Breakfast, then shared coach transfer down to Pattaya',
      'Check in from two in the afternoon and head for the beach',
      'Optional: the night bazaar, the floating market or Pattaya beach',
      `${DAY_MARK}Day 13 · Coral Island day trip`,
      'Breakfast, then shared transfer to the Bali Hai pier',
      'Speedboat transfer across to Coral Island for the day',
      'Swim and sunbathe at Tawaen beach, water sports payable on the sand',
      'Return speedboat and shared transfer to your hotel'
    ],
    accommodation: {
      name: 'Golden Tulip Hotel Essential, Pattaya',
      description: '2 nights · Breakfast included · Standard room · 3★ · Golden Tulip Essential, a short walk from the beach road',
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
        name: 'Coral Island by Speedboat',
        day: 13,
        optional: false,
        image: img('we68xopgvhxvi7wt9eyhehbvwv1w_dl.beatsnoop.com-VHomu5ki9h.jpg'),
        description: 'A speedboat day out to Koh Larn with clear water at Tawaen beach, loungers on the sand and water sports if you want them.'
      },
      {
        name: 'Pattaya Floating Market',
        day: 12,
        optional: true,
        image: img('evpqo5dpu51e57fvs4n5kmq88ecf_1577443336_shutterstock_404113681.jpg'),
        description: 'Four sections of stilted walkways and boats selling food and crafts across a lake south of the city.'
      },
      {
        name: 'Pattaya Night Bazaar',
        day: 12,
        optional: true,
        image: img('38g6th9f7n600c3477726l2oyt09_8530026361_f256711b6e_o.jpg'),
        description: 'Stalls of clothes, souvenirs and street food along the beach road, busiest from early evening onwards.'
      }
    ],
    program: {
      name: 'Coral Island and the markets',
      description: 'Two nights on the Gulf coast with a speedboat day at Koh Larn and the night bazaar close by in the evening.',
      image: img('gy6ydvck32nkrqc0a957hn6qa1gn_shutterstock_1273928071.jpg')
    }
  },
  {
    letter: 'H',
    name: 'Phuket',
    dayLabel: 'Day 14 to 16',
    images: [
      img('nl697ledztoenvi45t7u86mnkm6v_shutterstock_2337247967%20(1)%20(1).jpg'),
      img('dt3g7wxiv0cq88va8n6qzye08rel_shutterstock_2130087425%20(1).jpg'),
      img('wgw28loe37wumwa59avtvzp7gcn4_shutterstock_2253884321.jpg'),
      img('umnq4yyhbbiotdz92vz7xwlhhhgl_shutterstock_1515443948-min.jpg')
    ],
    dayImages: {
      14: [
        img('a8luqsni73mqhn0o6ekfzbwvrhc1_1469607104-simon-cabaret-show-1.jpg'),
        img('goahiuvxilncq43ac8db0v0rl8ac_shutterstock_394497928.jpg'),
        img('lknez6qnnfbvw2yujulecml5egsj_1579855096_shutterstock_1265137084.jpg'),
        img('nl697ledztoenvi45t7u86mnkm6v_shutterstock_2337247967%20(1)%20(1).jpg')
      ],
      15: [
        img('hpa4azp4say5a7xk7is7cvzn1v0m_dl.beatsnoop.com-R0BH6SMQ7h.jpg'),
        img('v6a17443ovp0a99j7nc95113gafl_1462975119_8082854403_dc5d2a88e5_o.jpg'),
        img('6kv2if7t8tqqp0ait2c0j5r8fm3h_shutterstock_176838932.jpg'),
        img('3mfwxmvwud1iv4bo1l0uihm5omzw_1627129752_shutterstock_1140016289_(2).jpg')
      ],
      16: [
        img('nl697ledztoenvi45t7u86mnkm6v_shutterstock_2337247967%20(1)%20(1).jpg'),
        img('dt3g7wxiv0cq88va8n6qzye08rel_shutterstock_2130087425%20(1).jpg'),
        img('wgw28loe37wumwa59avtvzp7gcn4_shutterstock_2253884321.jpg'),
        img('umnq4yyhbbiotdz92vz7xwlhhhgl_shutterstock_1515443948-min.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 14 · Flight to Phuket`,
      'Breakfast, then shared transfer to U Tapao Airport',
      'Included flight from U Tapao to Phuket',
      'Shared transfer to Patong and check in from three in the afternoon',
      'Optional: Simon Cabaret, Phuket FantaSea or Bangla Road',
      `${DAY_MARK}Day 15 · Phi Phi islands excursion`,
      'Breakfast, then shared transfer down to the Phuket pier',
      'Boat transfer out to the Phi Phi group for the day, with lunch',
      'Maya Bay, Viking Cave and Monkey Beach along the route',
      'Return boat and shared transfer to Patong in the evening',
      `${DAY_MARK}Day 16 · Departure`,
      'Check out at your own pace',
      'Private sedan transfer to Phuket International Airport'
    ],
    accommodation: {
      name: 'Journeyhub Phuket Patong, Phuket',
      description: '2 nights · Breakfast included · Super Deluxe room · 4★ · Journeyhub in Patong, minutes from the beach',
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
        name: 'Phi Phi Islands Excursion',
        day: 15,
        optional: false,
        image: img('hpa4azp4say5a7xk7is7cvzn1v0m_dl.beatsnoop.com-R0BH6SMQ7h.jpg'),
        description: 'A full day across the Phi Phi group with Maya Bay, Viking Cave and Monkey Beach, and lunch served on the tour.'
      },
      {
        name: 'Simon Cabaret Show',
        day: 14,
        optional: true,
        image: img('a8luqsni73mqhn0o6ekfzbwvrhc1_1469607104-simon-cabaret-show-1.jpg'),
        description: 'Phuket\'s best known cabaret, an hour of costumes, live singing and big stage sets close to Patong beach.'
      },
      {
        name: 'Bangla Road After Dark',
        day: 14,
        optional: true,
        image: img('lknez6qnnfbvw2yujulecml5egsj_1579855096_shutterstock_1265137084.jpg'),
        description: 'Patong\'s night strip, closed to traffic after dark and lined with bars, street food and live music.'
      }
    ],
    program: {
      name: 'Patong and the Phi Phi islands',
      description: 'The last two nights in Patong with a full day out at the Phi Phi islands before the flight home.',
      image: img('nl697ledztoenvi45t7u86mnkm6v_shutterstock_2337247967%20(1)%20(1).jpg')
    }
  }
];

const detail = {
  slug: 'grand-vietnam-cambodia-and-thailand',
  ctaHref: '/l/thailand/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Grand Vietnam, Cambodia and Thailand',
  alt: 'Limestone islands rising from the water in Halong Bay, Vietnam',
  days: '16 days / 15 nights',
  stations: '8 stops',
  transport: 'Four included internal flights with private and shared transfers',
  tag: 'Culture',
  tags: ['Culture', 'Family'],
  price: 142186,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Ho Chi Minh', 'Siem Reap', 'Bangkok', 'Pattaya', 'Phuket'],
  stats: { days: 16, cities: 7, hotels: 7, activities: 13, transfers: 33 },
  gallery: heroGallery,
  services: [
    ['7 hotels', 'Accommodation'],
    ['13 experiences', 'Activities'],
    ['33 transfers', 'Transport'],
    ['15 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ananya Iyer',
    image: '/team/asia-2.webp',
    role: 'Thailand expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three countries, four internal flights already included, and the pace eases off as you go south.',
    quoteMore: 'Pack one small bag for the Halong cruise night and leave the rest in Hanoi. Carry US dollars in small notes for Cambodia, where they are used as often as riel.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Sixteen days through Vietnam, Cambodia and Thailand with four internal flights included. Ninh Binh and a Halong Bay cruise, the Cu Chi tunnels and the Mekong Delta, Angkor Wat and Tonle Sap, then the Grand Palace, Coral Island and the Phi Phi islands.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 15 nights in 7 hotels and one cruise cabin with daily breakfast; four internal flights, Hanoi to Ho Chi Minh City, Ho Chi Minh City to Siem Reap, Siem Reap to Bangkok and U Tapao to Phuket; Ninh Binh day tour with the Bich Dong cycle ride; Halong Bay overnight cruise; Ho Chi Minh city tour, Cu Chi tunnels and a Mekong Delta day; Tonle Sap boat ride and the Angkor Wat day tour; Bangkok city tour with the Grand Palace and the Emerald Buddha; Coral Island speedboat tour; Phi Phi islands excursion with lunch; 33 airport, intercity and sightseeing transfers.',
  intro2: 'Not included: international flights into Hanoi and out of Phuket; visa charges for Vietnam, Cambodia and Thailand; travel insurance; temple and park entry fees not listed; meals other than those listed; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai Airport and private sedan transfer into Hanoi\nCheck in from two in the afternoon and keep the day free\nOptional: Hoan Kiem lake, Ngoc Son temple or the Temple of Literature', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai Airport and private sedan transfer into Hanoi', 'Check in from two in the afternoon and keep the day free', 'Optional: Hoan Kiem lake, Ngoc Son temple or the Temple of Literature'] },
    { title: 'Day 2: Ninh Binh day trip (B)', text: 'Breakfast, then shared coach transfer south to Ninh Binh\nSampan ride between the karst hills and the rice fields\nCycle out to Bich Dong pagoda through the villages\nReturn shared transfer to Hanoi in the evening', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then shared coach transfer south to Ninh Binh', 'Sampan ride between the karst hills and the rice fields', 'Cycle out to Bich Dong pagoda through the villages'] },
    { title: 'Day 3: Halong Bay overnight cruise (B)', text: 'Breakfast, then shared coach transfer out to Halong Bay\nBoard the Royal Palace cruise and sail among the limestone islands\nKayaking and swimming stops, then a night on board at anchor', hotel: 'Halong Royal Palace Cruise', highlights: ['Breakfast, then shared coach transfer out to Halong Bay', 'Board the Royal Palace cruise and sail among the limestone islands', 'Kayaking and swimming stops, then a night on board at anchor'] },
    { title: 'Day 4: Back to Hanoi (B)', text: 'Breakfast on board while the boat cruises the quieter channels\nThe Dark and Bright caves by small boat before docking\nShared coach transfer back to Hanoi and check in again\nOptional: the Ho Chi Minh mausoleum or the Temple of Literature', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast on board while the boat cruises the quieter channels', 'The Dark and Bright caves by small boat before docking', 'Shared coach transfer back to Hanoi and check in again'] },
    { title: 'Day 5: Flight to Ho Chi Minh City (B)', text: 'Breakfast, then shared transfer to Noi Bai Airport\nIncluded flight from Hanoi to Ho Chi Minh City\nShared transfer from Tan Son Nhat Airport to your Saigon hotel\nOptional: the Saigon river front, City Hall or the Mariamman temple', hotel: 'Avanti Saigon Hotel, Ho Chi Minh', highlights: ['Breakfast, then shared transfer to Noi Bai Airport', 'Included flight from Hanoi to Ho Chi Minh City', 'Shared transfer from Tan Son Nhat Airport to your Saigon hotel'] },
    { title: 'Day 6: Cu Chi tunnels and the city (B)', text: 'Breakfast, then shared transfer for the Ho Chi Minh city tour\nColonial landmarks and markets through the old centre of Saigon\nAfternoon shared transfer out to the Cu Chi tunnels\nCrawl a cleared section of tunnel and see the traps and workshops', hotel: 'Avanti Saigon Hotel, Ho Chi Minh', highlights: ['Breakfast, then shared transfer for the Ho Chi Minh city tour', 'Colonial landmarks and markets through the old centre of Saigon', 'Afternoon shared transfer out to the Cu Chi tunnels'] },
    { title: 'Day 7: Mekong Delta day trip (B)', text: 'Breakfast, then shared transfer down to My Tho on the delta\nBoat out to the islands, then a sampan along the narrow canals\nCoconut candy workshops and fruit gardens along the way\nReturn shared transfer to Ho Chi Minh City in the evening', hotel: 'Avanti Saigon Hotel, Ho Chi Minh', highlights: ['Breakfast, then shared transfer down to My Tho on the delta', 'Boat out to the islands, then a sampan along the narrow canals', 'Coconut candy workshops and fruit gardens along the way'] },
    { title: 'Day 8: Flight to Siem Reap and Tonle Sap (B)', text: 'Breakfast, then shared transfer to Tan Son Nhat Airport\nIncluded flight from Ho Chi Minh City to Siem Reap\nBoat ride on Tonle Sap lake past the floating villages\nShared transfer on to your Siem Reap hotel', hotel: 'HARI Residence and Spa, Siem Reap', highlights: ['Breakfast, then shared transfer to Tan Son Nhat Airport', 'Included flight from Ho Chi Minh City to Siem Reap', 'Boat ride on Tonle Sap lake past the floating villages'] },
    { title: 'Day 9: Angkor Wat day tour (B)', text: 'Breakfast, then shared transfer to the Angkor archaeological park\nAngkor Wat itself, at its best in the morning light\nAngkor Thom, the Bayon faces and Ta Prohm in the afternoon\nReturn shared transfer to the hotel', hotel: 'HARI Residence and Spa, Siem Reap', highlights: ['Breakfast, then shared transfer to the Angkor archaeological park', 'Angkor Wat itself, at its best in the morning light', 'Angkor Thom, the Bayon faces and Ta Prohm in the afternoon'] },
    { title: 'Day 10: Flight to Bangkok (B)', text: 'Breakfast, then shared transfer to Siem Reap Airport\nIncluded flight from Siem Reap to Bangkok\nShared transfer from Suvarnabhumi Airport to your hotel\nOptional: Chatuchak market or an evening by the Chao Phraya', hotel: 'Ambassador Hotel Bangkok', highlights: ['Breakfast, then shared transfer to Siem Reap Airport', 'Included flight from Siem Reap to Bangkok', 'Shared transfer from Suvarnabhumi Airport to your hotel'] },
    { title: 'Day 11: Bangkok city tour (B)', text: 'Breakfast, then shared transfer for the Bangkok city tour\nThe Grand Palace and the Emerald Buddha inside Wat Phra Kaew\nBack at the hotel by mid afternoon with the evening free', hotel: 'Ambassador Hotel Bangkok', highlights: ['Breakfast, then shared transfer for the Bangkok city tour', 'The Grand Palace and the Emerald Buddha inside Wat Phra Kaew', 'Back at the hotel by mid afternoon with the evening free'] },
    { title: 'Day 12: On to Pattaya (B)', text: 'Breakfast, then shared coach transfer down to Pattaya\nCheck in from two in the afternoon and head for the beach\nOptional: the night bazaar, the floating market or Pattaya beach', hotel: 'Golden Tulip Hotel Essential, Pattaya', highlights: ['Breakfast, then shared coach transfer down to Pattaya', 'Check in from two in the afternoon and head for the beach', 'Optional: the night bazaar, the floating market or Pattaya beach'] },
    { title: 'Day 13: Coral Island day trip (B)', text: 'Breakfast, then shared transfer to the Bali Hai pier\nSpeedboat transfer across to Coral Island for the day\nSwim and sunbathe at Tawaen beach, water sports payable on the sand\nReturn speedboat and shared transfer to your hotel', hotel: 'Golden Tulip Hotel Essential, Pattaya', highlights: ['Breakfast, then shared transfer to the Bali Hai pier', 'Speedboat transfer across to Coral Island for the day', 'Swim and sunbathe at Tawaen beach, water sports payable on the sand'] },
    { title: 'Day 14: Flight to Phuket (B)', text: 'Breakfast, then shared transfer to U Tapao Airport\nIncluded flight from U Tapao to Phuket\nShared transfer to Patong and check in from three in the afternoon\nOptional: Simon Cabaret, Phuket FantaSea or Bangla Road', hotel: 'Journeyhub Phuket Patong', highlights: ['Breakfast, then shared transfer to U Tapao Airport', 'Included flight from U Tapao to Phuket', 'Shared transfer to Patong and check in from three in the afternoon'] },
    { title: 'Day 15: Phi Phi islands excursion (B, L)', text: 'Breakfast, then shared transfer down to the Phuket pier\nBoat transfer out to the Phi Phi group for the day, with lunch\nMaya Bay, Viking Cave and Monkey Beach along the route\nReturn boat and shared transfer to Patong in the evening', hotel: 'Journeyhub Phuket Patong', highlights: ['Breakfast, then shared transfer down to the Phuket pier', 'Boat transfer out to the Phi Phi group for the day, with lunch', 'Maya Bay, Viking Cave and Monkey Beach along the route'] },
    { title: 'Day 16: Departure (No meals)', text: 'Check out at your own pace\nPrivate sedan transfer to Phuket International Airport', hotel: 'Departure', highlights: ['Check out at your own pace', 'Private sedan transfer to Phuket International Airport'] }
  ],
  outro: 'Not included: international flights into Hanoi and out of Phuket; visa charges for Vietnam, Cambodia and Thailand; travel insurance; temple and park entry fees not listed; meals other than those listed; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Thailand', href: '/asien/thailand' },
  { label: detail.title }
];

export const grandVietnamCambodiaThailandBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const grandVietnamCambodiaThailandProduct = {
  slug: detail.slug,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 16,
  stops: 8,
  hotels: 7,
  cities: 7,
  activities: 13,
  transfers: 33,
  meals: 15,
  price: detail.price,
  images: cardImages
};
