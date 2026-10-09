// Best of Vietnam and Cambodia in Fifteen Days. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
  img('dsxekypeedr6l4ri8eijlkm31h7f_shutterstock_196927403.jpg'),
  img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
  img('sm1j3sb4ezlr770meq792t4bby7u_shutterstock_626326721.jpg'),
  img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
  img('tiuvxkux663ncun5lwbu02kv3n8i_shutterstock_707816683.jpg'),
  img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
  img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg'),
  img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
  img('x8lbfvysk0qjliq58f20yvd3o5zl_shutterstock_1873823557.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('dsxekypeedr6l4ri8eijlkm31h7f_shutterstock_196927403.jpg'),
  img('sm1j3sb4ezlr770meq792t4bby7u_shutterstock_626326721.jpg'),
  img('i1g9vcnnzos2f5srkha63o2w72eg_1467789759_6914926621_5239080e32_o.jpg'),
  img('mpkg124uacuo2s71x3f0zfzuhuyo_1467790941_26937034641_89d6ed7fa5_o.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    subtitle: 'Hanoi and Ninh Binh',
    dayLabel: 'Day 1 to 2',
    images: [
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg')
    ],
    dayImages: {
      1: [
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('54e3a5zijt2l2wotojw4kgscrcfx_shutterstock_1904433682.jpg'),
        img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg')
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
      description: 'Two nights in the old quarter, with a full day south to Ninh Binh and a cycle ride to Bich Dong.',
      image: img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Halong Bay',
    dayLabel: 'Day 3',
    images: [
      img('4htmt1ezsgvun0n6isr7x482cgy6_shutterstock_211441507.jpg'),
      img('dsxekypeedr6l4ri8eijlkm31h7f_shutterstock_196927403.jpg'),
      img('g2t7tyua6nh3y7nqbspuhclty44n_shutterstock_1013044084.jpg'),
      img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg')
    ],
    dayImages: {
      3: [
        img('myltyaf6xdbhzxxat1nqdan10vpi_shutterstock_1424935796.jpg'),
        img('3yvzew883i398qg1nytjaz1ju0q8_48479739932_e3fe5de4a5_o.jpg'),
        img('4htmt1ezsgvun0n6isr7x482cgy6_shutterstock_211441507.jpg'),
        img('dsxekypeedr6l4ri8eijlkm31h7f_shutterstock_196927403.jpg')
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
        image: img('myltyaf6xdbhzxxat1nqdan10vpi_shutterstock_1424935796.jpg'),
        description: 'A shared cruise out among the limestone islands, with lunch and dinner on board and a night moored in a quiet bay.'
      }
    ],
    program: {
      name: 'Halong Bay',
      description: 'A night on the water among the limestone islands, with all meals served on board.',
      image: img('4htmt1ezsgvun0n6isr7x482cgy6_shutterstock_211441507.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Da Nang',
    subtitle: 'Da Nang, Ba Na and Hoi An',
    dayLabel: 'Day 4 to 6',
    images: [
      img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
      img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg'),
      img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
      img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg')
    ],
    dayImages: {
      4: [
        img('ve6w5hll44si2fa8qxx6b9sepbs3_shutterstock_1218765286.jpg'),
        img('e7747wfxl9x32ioao96vp1zudykf_44844044645_6347bf750e_o.jpg'),
        img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
        img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg')
      ],
      5: [
        img('4arj222jby0yobyhxutcze6movjx_1580714303_shutterstock_1343264876.jpg'),
        img('bbeokkqegcwgy51eqlvyhfvmlgis_1467287106_BaNaHillsCableCar.jpg'),
        img('84tapj6qwgvbv9sgdfd6q1233uak_1467287160_Linh_Ung_Pagoda.jpg'),
        img('yhxwfmhdmt1hhx1z5nna2xphz1k3_golden-bridge-4912803_1280.jpg')
      ],
      6: [
        img('6mvmwgt3baaojghbm3802hxvxtwo_shutterstock_1101234365.jpg'),
        img('i1g9vcnnzos2f5srkha63o2w72eg_1467789759_6914926621_5239080e32_o.jpg'),
        img('mpkg124uacuo2s71x3f0zfzuhuyo_1467790941_26937034641_89d6ed7fa5_o.jpg'),
        img('y7qz31iy6wdasr4qc3dbaxbs6jd2_Thu_B%E1%BB%93n_River_at_night_-_H%E1%BB%99i_An_2022.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Surprise Cave and on to Da Nang`,
      'Breakfast on board, then the climb into the Surprise Cave',
      'Back to the pier and on to Hanoi airport',
      'The flight to Da Nang',
      'Check in near the beach, evening free',
      `${DAY_MARK}Day 5 · Ba Na Hills`,
      'Breakfast, then the cable car up to Ba Na',
      'The Golden Bridge held up by two stone hands',
      'The French village and the gardens at the top',
      'Back down to Da Nang in the evening',
      `${DAY_MARK}Day 6 · Hoi An and the river`,
      'Breakfast, then south to Hoi An for the day',
      'The Japanese bridge and the merchant houses',
      'A boat out onto the Thu Bon river',
      'The lanterns coming on as you head back'
    ],
    accommodation: {
      name: 'Luxtery Da Nang, Da Nang',
      description: '3 nights · Breakfast and dinner · Standard room · 3★ · Simple hotel a few streets back from My Khe beach',
      images: [
        img('bt3i1gnd648i005c7ukinian0v7f_716d455e0818ea7e050e40523d4f7bac.jpg'),
        img('eop28g1inzoo9ya667pqrhdh1rlv_478766351.jpg'),
        img('nfxjf6q4ulh0dha6nt3mcirl56e6_img2.jpg'),
        img('afquyrovth2uupbnm3o6hgqcvfs8_img1.jpg'),
        img('oo3d2hm5caolatb91etff7qidvl1_img5.jpg'),
        img('exk9fpif6rldrbebi50o9wgys791_img8.jpg'),
        img('pjxfju4hrjayo3d7sxfw33cqz101_img9.jpg'),
        img('3zfln2aq0p751007t05ru119g4r8_img3.jpg'),
        img('4y93qy538z0maxe2gadfuq6pqmz7_img12.jpg'),
        img('so8h2z6ygq48oz3ben8vzcanhz3w_img16.jpg'),
        img('v6ma5zv5sgpf540rw43flca6rlmk_img10.jpg'),
        img('6x510mai9r9lvsua0r5nugpn226o_478766736.jpg')
      ]
    },
    activities: [
      {
        name: 'Surprise Cave on Bo Hon island',
        day: 4,
        optional: false,
        image: img('ve6w5hll44si2fa8qxx6b9sepbs3_shutterstock_1218765286.jpg'),
        description: 'A morning climb into the Surprise Cave, three great chambers of stalactites above the water, before the boat turns back.'
      },
      {
        name: 'Ba Na Hills and the Golden Bridge',
        day: 5,
        optional: false,
        image: img('4arj222jby0yobyhxutcze6movjx_1580714303_shutterstock_1343264876.jpg'),
        description: 'The long cable car up to Ba Na, the Golden Bridge held up by two stone hands, and the French village and gardens at the top.'
      },
      {
        name: 'Hoi An with a Thu Bon river boat ride',
        day: 6,
        optional: false,
        image: img('6mvmwgt3baaojghbm3802hxvxtwo_shutterstock_1101234365.jpg'),
        description: 'A day in the old trading town with the Japanese bridge and the merchant houses, and a boat out onto the Thu Bon river as the lanterns come on.'
      }
    ],
    program: {
      name: 'Da Nang',
      description: 'The flight to the central coast for three nights, with Ba Na Hills and a full day in Hoi An.',
      image: img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Phu Quoc',
    dayLabel: 'Day 7 to 8',
    images: [
      img('jh5bfu9i2bcczklx0uqx6n1dinjw_shutterstock_521611651.jpg'),
      img('54kch29rr94yk4lxp6bgpo2rs46b_shutterstock_1077419603.jpg'),
      img('x8lbfvysk0qjliq58f20yvd3o5zl_shutterstock_1873823557.jpg'),
      img('sm1j3sb4ezlr770meq792t4bby7u_shutterstock_626326721.jpg')
    ],
    dayImages: {
      7: [
        img('0jieq5sp8ith54kj7uh4y5t9161j_1467829069_3860272468_fd202613b2_o.jpg'),
        img('jh5bfu9i2bcczklx0uqx6n1dinjw_shutterstock_521611651.jpg'),
        img('54kch29rr94yk4lxp6bgpo2rs46b_shutterstock_1077419603.jpg'),
        img('x8lbfvysk0qjliq58f20yvd3o5zl_shutterstock_1873823557.jpg')
      ],
      8: [
        img('v80c9m6rzqotshapmz1gdi9n4l3c_6005268411_60ac0881e7_o.jpg'),
        img('ifvv7a8qgbcjl5pfcou0rbdwuo0n_phu-quoc-night-market-1_1645711900.jpg'),
        img('ygyd2egvwghybvx1ysxb9lpojmlt_Sao%20beach.jpg'),
        img('jh5bfu9i2bcczklx0uqx6n1dinjw_shutterstock_521611651.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Flight to Phu Quoc`,
      'Check out, then the flight to the island',
      'Check in at your beach resort',
      'Rest of the day free at your own pace',
      'Optional: sunset from the west coast',
      `${DAY_MARK}Day 8 · A free day on the island`,
      'Breakfast, then a free day on the island',
      'Optional: the cable car out to An Thoi',
      'Optional: a pepper farm and a fish sauce distillery'
    ],
    accommodation: {
      name: 'Amarin Resort and Spa, Phu Quoc',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Beach resort with a spa on the west coast of the island',
      images: [
        img('qyqsqzidevm3q9q1h9hl2u2ay0f4_img17.jpg'),
        img('6sszfktrn2nvrfng2erui5nv3wic_img11.jpg'),
        img('y76zbji37tgyd90vezgbhaol5mu2_img7.jpg'),
        img('w89z1jxhx1e6u21zn3db8xstdlvq_img36.jpg'),
        img('hdvvoooqss44omq6ehczwscbnab8_img30.jpg'),
        img('zpheaa1oheid62psoz5maiwu8oe4_img25.jpg'),
        img('8f4ct17riprcvivlv4su6ycr0hfj_img41.jpg'),
        img('4jws7ugvaqdyl45pdxocaid305b1_img27.jpg'),
        img('g685qrxp4sojnw900yugaw9dq7xy_img2.jpg'),
        img('iwv795l702q0skwemlwg1rstj7r6_img21.jpg'),
        img('inji9hgao8ssb0dbm4k5hn78cgkb_img6.jpg'),
        img('ecxetsdg9j33xtsn2hm0m6w4mwjm_img13.jpg'),
        img('5wwnvxcc859raj3ie0ikh6b7xdcm_img12.jpg'),
        img('w7uht15xsmvh5v6og8l3lyfr15dk_img39.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Phu Quoc',
      description: 'Two nights at a beach resort on the island with nothing scheduled at all.',
      image: img('jh5bfu9i2bcczklx0uqx6n1dinjw_shutterstock_521611651.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Ho Chi Minh City',
    subtitle: 'Saigon, Cu Chi and the Mekong',
    dayLabel: 'Day 9 to 11',
    images: [
      img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg'),
      img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
      img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
      img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg')
    ],
    dayImages: {
      9: [
        img('zucc5keivv6qxqju15y9zmvpob71_What-is-Bui-Vien-street.jpg'),
        img('amh35zxwovg79ivmzq3sn5qp0qai_Downpic.cc-1023316830.jpg'),
        img('rf84dwp1svg2u7ofqcozo0aof4cn_a4.jpg'),
        img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg')
      ],
      10: [
        img('k0iwrtaiemzmywouhcz1remyihfd_shutterstock_175128359.jpg'),
        img('f1dbl8hvclmsfb1jc8fob8ztpxuk_1467880098_5397869098_f0ce8370ed_o.jpg'),
        img('evxpd53708fszmcogueld24ki5be_1467883599_2814329078_1317aa23fe_o.jpg'),
        img('g026k1g5paxncu3aear1czkltedu_1469613255_7469930222_08a752c099_o.jpg')
      ],
      11: [
        img('4hlghe88itsu2x2yetdcq4mj42ni_1579700293_shutterstock_1529789570.jpg'),
        img('lvds5da20701ls58hbi447grx3s2_8193351650_d1ff3fd0b7_z.jpg'),
        img('ktw7z5gp3xhl3n59iymqv4ksukb2_Ben_Tre_Turtle_Island.jpg'),
        img('6cupjrsxzkngfv8zrrp9japoty1n_sgn15.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 9 · On to Saigon`,
      'Breakfast and check out, then the flight to Saigon',
      'Check in in District 1',
      'Rest of the day free in the city',
      'Optional: the rooftop bars on Nguyen Hue',
      `${DAY_MARK}Day 10 · Saigon and the Cu Chi tunnels`,
      'Breakfast, then a half day of the city',
      'The palace, the cathedral and the war remnants museum',
      'North west to Cu Chi for the tunnels',
      'The trapdoors, the kitchens and the shafts',
      `${DAY_MARK}Day 11 · Mekong Delta`,
      'Breakfast, then south into the delta',
      'A boat through the coconut creeks at My Tho',
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
        day: 10,
        optional: false,
        image: img('k0iwrtaiemzmywouhcz1remyihfd_shutterstock_175128359.jpg'),
        description: 'The Reunification Palace, the old post office and Notre Dame cathedral, then the war remnants museum and the Ben Thanh market.'
      },
      {
        name: 'Cu Chi tunnels half day tour',
        day: 10,
        optional: false,
        image: img('7c9y0w9lr632pl96udf5l9ek2h9h_shutterstock_690459592.jpg'),
        description: 'The tunnel network north west of the city, with the trapdoors, the kitchens and a crawl through a widened section of the original shafts.'
      },
      {
        name: 'Mekong Delta day tour',
        day: 11,
        optional: false,
        image: img('4hlghe88itsu2x2yetdcq4mj42ni_1579700293_shutterstock_1529789570.jpg'),
        description: 'South to My Tho for a boat into the coconut creeks, a sampan through the palms, and the workshops where they make coconut candy.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'Three nights in District 1 with the city, the Cu Chi tunnels and a full day in the Mekong Delta.',
      image: img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg')
    }
  },
  {
    letter: 'F',
    name: 'Siem Reap',
    subtitle: 'Tonle Sap and Angkor',
    dayLabel: 'Day 12 to 15',
    images: [
      img('kz2o1i094vsaodj2hkv3prbsrbsy_shutterstock_237338044.jpg'),
      img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg'),
      img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg'),
      img('6n3scmd5rlsnaop1pb6iwv19uv23_shutterstock_601657496.jpg')
    ],
    dayImages: {
      12: [
        img('kz2o1i094vsaodj2hkv3prbsrbsy_shutterstock_237338044.jpg'),
        img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg'),
        img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg'),
        img('6n3scmd5rlsnaop1pb6iwv19uv23_shutterstock_601657496.jpg')
      ],
      13: [
        img('0eeolh4m5vco2tlqhjedbgoybppc_shutterstock_172914194.jpg'),
        img('l0w57t2hz9ihtty4bgs1hvjkskvc_Tonle.jpg'),
        img('1mha8xsmyjpzp75qrrdfsbi12r17_Floating.jpg'),
        img('kz2o1i094vsaodj2hkv3prbsrbsy_shutterstock_237338044.jpg')
      ],
      14: [
        img('1i89mdw0hjjxnkzcal9u7ad6845p_shutterstock_559574212.jpg'),
        img('y8n110g2u7oikuzpnvkd5w75si6q_1462522736_15912678764_da2931d075_o.jpg'),
        img('gg7x8uab6ewriuht9ighk7uzlael_1462523244_8147796611_5f3799b751_o.jpg'),
        img('mypd7ebfznu6f6367vtfattqkvj3_1462528175_7519280908_477d0bf15a_o.jpg')
      ],
      15: [
        img('kz2o1i094vsaodj2hkv3prbsrbsy_shutterstock_237338044.jpg'),
        img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg'),
        img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg'),
        img('6n3scmd5rlsnaop1pb6iwv19uv23_shutterstock_601657496.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 12 · On to Siem Reap`,
      'Breakfast and check out, then the flight to Cambodia',
      'Check in at Siem Reap',
      'Rest of the day free at your own pace',
      'Optional: the old market and Pub Street',
      `${DAY_MARK}Day 13 · Tonle Sap lake`,
      'Breakfast, then out to the great lake',
      'A boat through a floating village on stilts',
      'Houses, schools and shops on the water',
      'Back in Siem Reap in the afternoon',
      `${DAY_MARK}Day 14 · Angkor Wat`,
      'Early breakfast, then into the Angkor park',
      'Angkor Wat and the Bayon faces at Angkor Thom',
      'The root covered ruins of Ta Prohm',
      'Back at the hotel by evening',
      `${DAY_MARK}Day 15 · Departure from Siem Reap`,
      'Breakfast at the hotel and check out',
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
        day: 13,
        optional: false,
        image: img('0eeolh4m5vco2tlqhjedbgoybppc_shutterstock_172914194.jpg'),
        description: 'A boat out onto the great lake, through a floating village of houses, schools and shops built on stilts and pontoons.'
      },
      {
        name: 'Angkor Wat day tour',
        day: 14,
        optional: false,
        image: img('1i89mdw0hjjxnkzcal9u7ad6845p_shutterstock_559574212.jpg'),
        description: 'Angkor Wat itself, the Bayon faces at Angkor Thom and the root covered ruins of Ta Prohm, with a guide for the full day.'
      }
    ],
    program: {
      name: 'Siem Reap',
      description: 'On to Cambodia for the last three nights, with the floating villages of Tonle Sap and a full day at Angkor.',
      image: img('kz2o1i094vsaodj2hkv3prbsrbsy_shutterstock_237338044.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-vietnam-and-cambodia-in-fifteen-days',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Vietnam and Cambodia in Fifteen Days',
  alt: 'Ta Prohm ruins held together by tree roots at Angkor',
  days: '15 days / 14 nights',
  stations: '6 stops',
  transport: 'Flights between the cities, private transfers and guided tours',
  tag: 'Grand tour',
  tags: ['Grand tour', 'Beach'],
  price: 152000,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Da Nang', 'Ba Na Hills', 'Hoi An', 'Phu Quoc', 'Ho Chi Minh City', 'Siem Reap', 'Angkor Wat'],
  stats: { days: 15, cities: 6, hotels: 6, activities: 10, transfers: 18 },
  gallery: heroGallery,
  services: [
    ['6 hotels', 'Accommodation'],
    ['10 experiences', 'Activities'],
    ['18 transfers', 'Transport'],
    ['22 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two weeks, two countries and two nights on a beach in the middle of it. The island is what keeps this one from feeling like a march.',
    quoteMore: 'Keep the Phu Quoc days empty as they are here. After six days of touring you will want them back.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Fifteen days across Vietnam and Cambodia: Hanoi with Ninh Binh, an overnight cruise in Halong Bay, three nights in Da Nang for Ba Na Hills and Hoi An, two at a beach resort on Phu Quoc, three in Saigon with the Cu Chi tunnels and the Mekong Delta, then three in Siem Reap for Tonle Sap and Angkor.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 14 nights with breakfast daily, dinner at most hotels and all meals on the cruise boat; all flights between the cities; private transfers throughout; a Ninh Binh day tour; a cycle ride to Bich Dong; a shared overnight cruise in Halong Bay with the Surprise Cave; a full day up at Ba Na with the Golden Bridge; a Hoi An day tour with a river boat ride; a Saigon city tour; the Cu Chi tunnels half day tour; a Mekong Delta day tour; a Tonle Sap lake boat ride; an Angkor Wat day tour.',
  intro2: 'Not included: international flights; Vietnam and Cambodia visa fees; lunches other than on the cruise; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Ninh Binh and Bich Dong (B, D)', text: 'Breakfast, then south towards Ninh Binh\nA rowing boat through the flooded caves at Tam Coc\nA cycle ride through the rice fields\nBich Dong, a pagoda built into the rock', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then south towards Ninh Binh', 'A rowing boat through the flooded caves at Tam Coc', 'A cycle ride through the rice fields'] },
    { title: 'Day 3: Overnight on the bay (B, L, D)', text: 'Breakfast and check out, then east towards the coast\nBoard your cruise boat in the early afternoon\nLunch and dinner on board\nA night moored among the limestone islands', hotel: 'Halong Royal Palace Cruise', highlights: ['Breakfast and check out, then east towards the coast', 'Board your cruise boat in the early afternoon', 'Lunch and dinner on board'] },
    { title: 'Day 4: Surprise Cave and on to Da Nang (B, D)', text: 'Breakfast on board, then the climb into the Surprise Cave\nBack to the pier and on to Hanoi airport\nThe flight to Da Nang\nCheck in near the beach, evening free', hotel: 'Luxtery Da Nang', highlights: ['Breakfast on board, then the climb into the Surprise Cave', 'Back to the pier and on to Hanoi airport', 'The flight to Da Nang'] },
    { title: 'Day 5: Ba Na Hills (B, D)', text: 'Breakfast, then the cable car up to Ba Na\nThe Golden Bridge held up by two stone hands\nThe French village and the gardens at the top\nBack down to Da Nang in the evening', hotel: 'Luxtery Da Nang', highlights: ['Breakfast, then the cable car up to Ba Na', 'The Golden Bridge held up by two stone hands', 'The French village and the gardens at the top'] },
    { title: 'Day 6: Hoi An and the river (B, D)', text: 'Breakfast, then south to Hoi An for the day\nThe Japanese bridge and the merchant houses\nA boat out onto the Thu Bon river\nThe lanterns coming on as you head back', hotel: 'Luxtery Da Nang', highlights: ['Breakfast, then south to Hoi An for the day', 'The Japanese bridge and the merchant houses', 'A boat out onto the Thu Bon river'] },
    { title: 'Day 7: Flight to Phu Quoc (D)', text: 'Check out, then the flight to the island\nCheck in at your beach resort\nRest of the day free at your own pace\nOptional: sunset from the west coast', hotel: 'Amarin Resort and Spa', highlights: ['Check out, then the flight to the island', 'Check in at your beach resort', 'Rest of the day free at your own pace'] },
    { title: 'Day 8: A free day on the island (B, D)', text: 'Breakfast, then a free day on the island\nOptional: the cable car out to An Thoi\nOptional: a pepper farm and a fish sauce distillery', hotel: 'Amarin Resort and Spa', highlights: ['Breakfast, then a free day on the island', 'Optional: the cable car out to An Thoi', 'Optional: a pepper farm and a fish sauce distillery'] },
    { title: 'Day 9: On to Saigon (B)', text: 'Breakfast and check out, then the flight to Saigon\nCheck in in District 1\nRest of the day free in the city\nOptional: the rooftop bars on Nguyen Hue', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast and check out, then the flight to Saigon', 'Check in in District 1', 'Rest of the day free in the city'] },
    { title: 'Day 10: Saigon and the Cu Chi tunnels (B)', text: 'Breakfast, then a half day of the city\nThe palace, the cathedral and the war remnants museum\nNorth west to Cu Chi for the tunnels\nThe trapdoors, the kitchens and the shafts', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast, then a half day of the city', 'The palace, the cathedral and the war remnants museum', 'North west to Cu Chi for the tunnels'] },
    { title: 'Day 11: Mekong Delta (B)', text: 'Breakfast, then south into the delta\nA boat through the coconut creeks at My Tho\nA sampan ride under the palms\nThe coconut candy workshops, then back to the city', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast, then south into the delta', 'A boat through the coconut creeks at My Tho', 'A sampan ride under the palms'] },
    { title: 'Day 12: On to Siem Reap (B, D)', text: 'Breakfast and check out, then the flight to Cambodia\nCheck in at Siem Reap\nRest of the day free at your own pace\nOptional: the old market and Pub Street', hotel: 'HARI Residence and Spa Siem Reap', highlights: ['Breakfast and check out, then the flight to Cambodia', 'Check in at Siem Reap', 'Rest of the day free at your own pace'] },
    { title: 'Day 13: Tonle Sap lake (B, D)', text: 'Breakfast, then out to the great lake\nA boat through a floating village on stilts\nHouses, schools and shops on the water\nBack in Siem Reap in the afternoon', hotel: 'HARI Residence and Spa Siem Reap', highlights: ['Breakfast, then out to the great lake', 'A boat through a floating village on stilts', 'Houses, schools and shops on the water'] },
    { title: 'Day 14: Angkor Wat (B, D)', text: 'Early breakfast, then into the Angkor park\nAngkor Wat and the Bayon faces at Angkor Thom\nThe root covered ruins of Ta Prohm\nBack at the hotel by evening', hotel: 'HARI Residence and Spa Siem Reap', highlights: ['Early breakfast, then into the Angkor park', 'Angkor Wat and the Bayon faces at Angkor Thom', 'The root covered ruins of Ta Prohm'] },
    { title: 'Day 15: Departure from Siem Reap (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam and Cambodia visa fees; lunches other than on the cruise; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Vietnam', href: '/asien/vietnam' },
  { label: detail.title }
];

export const bestOfVietnamCambodiaFifteenBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfVietnamCambodiaFifteenProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Da Nang', 'Ba Na Hills', 'Hoi An', 'Phu Quoc', 'Ho Chi Minh City', 'Siem Reap', 'Angkor Wat'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 15,
  stops: 6,
  hotels: 6,
  cities: 6,
  activities: 10,
  transfers: 18,
  meals: 22,
  price: detail.price,
  images: cardImages
};
