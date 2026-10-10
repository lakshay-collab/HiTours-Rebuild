// Vietnam Full Country Fortnight. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('vcv40zxdgi2yk3gzr7z58a6ydcid_shutterstock_145660013%20(1).jpg'),
  img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
  img('2kuteileb36cgbgpxwj5kw24c0gb_shutterstock_78665809.jpg'),
  img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
  img('6r7es5b1onpmozcvqas04rqr42bd_shutterstock_300005888.jpg'),
  img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
  img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
  img('kuu6ilj5a7xtrd9g0xiv8kv71jgr_shutterstock_2180265961%20(1).jpg'),
  img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('vcv40zxdgi2yk3gzr7z58a6ydcid_shutterstock_145660013%20(1).jpg'),
  img('1sre8kni33rqn21ysgtyjjqth2rq_shutterstock_666472522.jpg'),
  img('xgh1svqyg4p0x1ko6d8fe1ieri20_1467710266_4654925115_6af756b00f_o.jpg'),
  img('cisf0qbrjl6ds3sebcig4ti912px_a2-770x500.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    dayLabel: 'Day 1',
    images: [
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
    ],
    dayImages: {
      1: [
        img('xgh1svqyg4p0x1ko6d8fe1ieri20_1467710266_4654925115_6af756b00f_o.jpg'),
        img('zv1gcf0zxn8h92yt1vcjn8cn04c0_1613631767_shutterstock_449720002.jpg'),
        img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg'),
        img('xobo05epyrnuy77vlk7ujy36k4vh_1484035807_Quan-Su-pagoda.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Hanoi`,
      'Arrival at Noi Bai airport and transfer to your hotel',
      'Check in at your hotel in the old quarter',
      'Rest of the day free at your own pace',
      'Optional: an evening walk around Hoan Kiem lake'
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

    ],
    program: {
      name: 'Hanoi',
      description: 'A first night in the old quarter with the evening free around Hoan Kiem lake.',
      image: img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Sa Pa',
    dayLabel: 'Day 2',
    images: [
      img('suxus13xjsedltzx1nbiq8uyc8zg_shutterstock_126530108.jpg'),
      img('vcv40zxdgi2yk3gzr7z58a6ydcid_shutterstock_145660013%20(1).jpg'),
      img('kuu6ilj5a7xtrd9g0xiv8kv71jgr_shutterstock_2180265961%20(1).jpg'),
      img('yqz8mc9sdjkh3e508v1ruw9gkbzc_shutterstock_2194248193%20(1).jpg')
    ],
    dayImages: {
      2: [
        img('6ifg6z60bgarkmik080icbrwunbf_shutterstock_773552500.jpg'),
        img('z56fv8n6n0die2ms20u45syj1cmp_1579684995_5.jpg'),
        img('ufnfwmsjl1x8oh8ksxfjk3jx2atv_pixelcut-export%20(10).jpeg'),
        img('suxus13xjsedltzx1nbiq8uyc8zg_shutterstock_126530108.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Into the hills at Sa Pa`,
      'Breakfast and check out, then north into the hills',
      'Check in at Sa Pa in the afternoon',
      'A half day on foot down into Cat Cat village',
      'Terraced fields, water wheels and a waterfall'
    ],
    accommodation: {
      name: 'Delta Sapa Hotel, Sa Pa',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Simple hotel in the middle of Sa Pa town, near the lake',
      images: [
        img('limstmvnik08pip9jub690x51i84_recpetopo.jpg'),
        img('l3jqwsnembt6h7ioh5qidntd4qur_img1.jpg'),
        img('k80dpa4lv8wbswaiy9h7k21wsm26_img35.jpg'),
        img('ezbw70gbh3alih4n492xscwl7qyr_img3.jpg'),
        img('mefgng6du6hkttv60wjd98wdwvva_img33.jpg'),
        img('rhfkkotbpkfx0979l4t8b2r2wtz6_image%203.jpg'),
        img('rj01wl432uqn1u14ulc27ohaqbo5_image%201.jpg'),
        img('qfogcty56u0ulgku74nfxucdiffj_img2.jpg'),
        img('p37pox6pao7fvojofimayhaiplsx_img36.jpg'),
        img('rxvs5yu1pi7wbuw1kd27sy4phd5w_img17.jpg'),
        img('li1n7ag17t6xuywocim8rck8rmoz_f9fa89d2.jpg')
      ]
    },
    activities: [
      {
        name: 'Cat Cat village walk',
        day: 2,
        optional: false,
        image: img('6ifg6z60bgarkmik080icbrwunbf_shutterstock_773552500.jpg'),
        description: 'A half day on foot down into Cat Cat, a Black Hmong village of terraced fields, water wheels and a waterfall below Sa Pa.'
      }
    ],
    program: {
      name: 'Sa Pa',
      description: 'North into the hills for a night, with an afternoon walk down to Cat Cat village.',
      image: img('suxus13xjsedltzx1nbiq8uyc8zg_shutterstock_126530108.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Hanoi',
    subtitle: 'Fansipan, Hanoi and Ninh Binh',
    dayLabel: 'Day 3 to 4',
    images: [
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg')
    ],
    dayImages: {
      3: [
        img('ji2wic1vlv4njstfda8ssi80gujb_shutterstock_1624326598.jpg'),
        img('w1565k4lizf9lymbm5s521one5lx_14392097857_a356e64d93_o.jpg'),
        img('gybfeqfjpyn66xg228uafegj0gfn_Kim_Son_Bao_Thang_Pagoda_from_the_summit.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
      ],
      4: [
        img('1b7t5qk08ptmrwnhze4z7t77pflc_shutterstock_2309649499.jpg'),
        img('yx7xjkegdm9ruyh3rv7d2qtwgjyg_8224556638_2c76bfbba5_o.jpg'),
        img('m9yizaucm34mdy6jeo07klf59c3r_51986787203_3b201c83cb_b.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Fansipan and back to Hanoi`,
      'Breakfast, then the cable car up Fansipan',
      'The shrines and the viewing platform at the summit',
      'Back down and the long run to Hanoi',
      'Evening free in the city',
      `${DAY_MARK}Day 4 · Ninh Binh day trip`,
      'Breakfast, then south towards Ninh Binh',
      'A rowing boat through the flooded caves at Tam Coc',
      'The limestone country and the rice fields',
      'Back in Hanoi in the evening'
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
        name: 'Fansipan mountain tour',
        day: 3,
        optional: false,
        image: img('ji2wic1vlv4njstfda8ssi80gujb_shutterstock_1624326598.jpg'),
        description: 'The cable car up Fansipan, the highest peak in Indochina, to the shrines and the viewing platform at the summit.'
      },
      {
        name: 'Ninh Binh day tour',
        day: 4,
        optional: false,
        image: img('1b7t5qk08ptmrwnhze4z7t77pflc_shutterstock_2309649499.jpg'),
        description: 'South to Ninh Binh for a rowing boat through the flooded caves at Tam Coc and the limestone country around it.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'The Fansipan summit on the way down from the hills, then a full day south in Ninh Binh.',
      image: img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Halong Bay',
    dayLabel: 'Day 5',
    images: [
      img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg'),
      img('chc0brh1ox3ps4j2gkd3o7sltiku_shutterstock_298757792.jpg'),
      img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg'),
      img('2kuteileb36cgbgpxwj5kw24c0gb_shutterstock_78665809.jpg')
    ],
    dayImages: {
      5: [
        img('hjsa1pyia4bpq27c0rf4aemru3zw_e5y181gizy8jvyzc59gyilg4jawa_shutterstock_1425907181%20(1).webp'),
        img('3yvzew883i398qg1nytjaz1ju0q8_48479739932_e3fe5de4a5_o.jpg'),
        img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg'),
        img('chc0brh1ox3ps4j2gkd3o7sltiku_shutterstock_298757792.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Overnight on the bay`,
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
        day: 5,
        optional: false,
        image: img('hjsa1pyia4bpq27c0rf4aemru3zw_e5y181gizy8jvyzc59gyilg4jawa_shutterstock_1425907181%20(1).webp'),
        description: 'A shared cruise out among the limestone islands, with lunch and dinner on board and a night moored in a quiet bay.'
      }
    ],
    program: {
      name: 'Halong Bay',
      description: 'A night on the water among the limestone islands, with all meals served on board.',
      image: img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Da Nang',
    subtitle: 'Da Nang and Ba Na Hills',
    dayLabel: 'Day 6 to 7',
    images: [
      img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
      img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
      img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
      img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg')
    ],
    dayImages: {
      6: [
        img('hyouiedizd9klxg8535ludsjga8z_ve6w5hll44si2fa8qxx6b9sepbs3_shutterstock_1218765286.webp'),
        img('e7747wfxl9x32ioao96vp1zudykf_44844044645_6347bf750e_o.jpg'),
        img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
        img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg')
      ],
      7: [
        img('e0sv7qhxf4fg3gd33dfe1liycj4h_shutterstock_2178792551.jpg'),
        img('yhxwfmhdmt1hhx1z5nna2xphz1k3_golden-bridge-4912803_1280.jpg'),
        img('84tapj6qwgvbv9sgdfd6q1233uak_1467287160_Linh_Ung_Pagoda.jpg'),
        img('cisf0qbrjl6ds3sebcig4ti912px_a2-770x500.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Surprise Cave and on to Da Nang`,
      'Breakfast on board, then the climb into the Surprise Cave',
      'Back to the pier and on to Hanoi airport',
      'The flight to Da Nang',
      'Check in near the beach, evening free',
      `${DAY_MARK}Day 7 · Ba Na Hills`,
      'Breakfast, then the cable car up to Ba Na',
      'The bridge held up by two stone hands',
      'The French village and the gardens at the top',
      'Back down to Da Nang in the evening'
    ],
    accommodation: {
      name: 'Luxtery Da Nang, Da Nang',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Simple hotel a few streets back from My Khe beach',
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
        day: 6,
        optional: false,
        image: img('hyouiedizd9klxg8535ludsjga8z_ve6w5hll44si2fa8qxx6b9sepbs3_shutterstock_1218765286.webp'),
        description: 'A morning climb into the Surprise Cave, three great chambers of stalactites above the water, before the flight south.'
      },
      {
        name: 'Ba Na Hills with the Golden Bridge',
        day: 7,
        optional: false,
        image: img('e0sv7qhxf4fg3gd33dfe1liycj4h_shutterstock_2178792551.jpg'),
        description: 'The long cable car up to Ba Na, the bridge held up by two stone hands, and the French village and gardens at the top.'
      }
    ],
    program: {
      name: 'Da Nang',
      description: 'South by air for two nights near the beach, with a full day up at Ba Na Hills.',
      image: img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg')
    }
  },
  {
    letter: 'F',
    name: 'Phu Quoc',
    dayLabel: 'Day 8 to 9',
    images: [
      img('54kch29rr94yk4lxp6bgpo2rs46b_shutterstock_1077419603.jpg'),
      img('x8lbfvysk0qjliq58f20yvd3o5zl_shutterstock_1873823557.jpg'),
      img('sm1j3sb4ezlr770meq792t4bby7u_shutterstock_626326721.jpg'),
      img('1sre8kni33rqn21ysgtyjjqth2rq_shutterstock_666472522.jpg')
    ],
    dayImages: {
      8: [
        img('0jieq5sp8ith54kj7uh4y5t9161j_1467829069_3860272468_fd202613b2_o.jpg'),
        img('54kch29rr94yk4lxp6bgpo2rs46b_shutterstock_1077419603.jpg'),
        img('x8lbfvysk0qjliq58f20yvd3o5zl_shutterstock_1873823557.jpg'),
        img('sm1j3sb4ezlr770meq792t4bby7u_shutterstock_626326721.jpg')
      ],
      9: [
        img('8ergjom9yqqfayk5y36648hng0wm_shutterstock_1929719564.jpg'),
        img('0jieq5sp8ith54kj7uh4y5t9161j_1467829069_3860272468_fd202613b2_o.jpg'),
        img('ygyd2egvwghybvx1ysxb9lpojmlt_Sao%20beach.jpg'),
        img('nvgn3g2e28vfajdr2cuztlec4due_shutterstock_1662824851.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · Flight to Phu Quoc`,
      'Breakfast and check out, then the flight to the island',
      'Check in at your beach resort',
      'Rest of the day free at your own pace',
      'Optional: sunset from the west coast',
      `${DAY_MARK}Day 9 · Southern islets and snorkelling`,
      'Breakfast, then a boat down to the An Thoi islets',
      'Snorkelling over the reef',
      'The pepper farms and fish sauce distilleries',
      'Back to the resort in the late afternoon'
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
      {
        name: 'Phu Quoc south island tour with snorkelling',
        day: 9,
        optional: false,
        image: img('8ergjom9yqqfayk5y36648hng0wm_shutterstock_1929719564.jpg'),
        description: 'A boat down to the An Thoi islets for snorkelling over the reef, with the pepper farms and fish sauce distilleries on the way back.'
      }
    ],
    program: {
      name: 'Phu Quoc',
      description: 'Two nights at a beach resort on the island, with a boat day down to the southern islets.',
      image: img('54kch29rr94yk4lxp6bgpo2rs46b_shutterstock_1077419603.jpg')
    }
  },
  {
    letter: 'G',
    name: 'Ho Chi Minh City',
    subtitle: 'Saigon, the Mekong and Mui Ne',
    dayLabel: 'Day 10 to 14',
    images: [
      img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
      img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
      img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
      img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg')
    ],
    dayImages: {
      10: [
        img('zucc5keivv6qxqju15y9zmvpob71_What-is-Bui-Vien-street.jpg'),
        img('ismbrdjwl3hxuru0el0m36axenve_1598961746_shutterstock_730199131.jpg'),
        img('7f8le5eabd17goxjxilb5iglvse2_1467880850_5429069199_2814d210ac_o.jpg'),
        img('n75phneefos5hbnuuc33lg3il0vd_1484035791_city-hall-ho-chi-minh-city.jpg')
      ],
      11: [
        img('4hlghe88itsu2x2yetdcq4mj42ni_1579700293_shutterstock_1529789570.jpg'),
        img('lvds5da20701ls58hbi447grx3s2_8193351650_d1ff3fd0b7_z.jpg'),
        img('ktw7z5gp3xhl3n59iymqv4ksukb2_Ben_Tre_Turtle_Island.jpg'),
        img('6cupjrsxzkngfv8zrrp9japoty1n_sgn15.jpg')
      ],
      12: [
        img('e3atnnpknwx9mam7aenhxq8wgtl0_shutterstock_652868122.jpg'),
        img('9x6r3et67ksicha194z6rm8nc2cy_Mui%20Ne%20Red%20Sand%20Dune.jpg'),
        img('h13rreu2ujaeg4sowsf22tain07k_1467884543_Bitexco_Financial_Tower.jpg'),
        img('4v6uzks4tncmsj994n52g9qwwzii_notr.webp')
      ],
      13: [
        img('yopub1tyxa299n9cmdtc9hhqr4vn_1467884938_15756265548_301c16d1e2_o.jpg'),
        img('8f4cbq1kb1smfhrn66t25iefzmgo_1484035791_vinh-nghiem-pagoda-423.jpeg'),
        img('5bdfell934h4a4khr7y5jt0qsf4e_1467878737_4394112127_0f78e2de24_o.jpg'),
        img('hy92ewfqdodmxw9ubcvulnct25c3_1467881123_Ph_C6_B0_E1_BB_9Bc_H_E1_BA_A3i_T_E1_BB_B1.jpg')
      ],
      14: [
        img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
        img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
        img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
        img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 10 · On to Saigon`,
      'Breakfast and check out, then the flight to Saigon',
      'Check in in District 1',
      'Rest of the day free in the city',
      'Optional: the rooftop bars on Nguyen Hue',
      `${DAY_MARK}Day 11 · Mekong Delta`,
      'Breakfast, then south into the delta',
      'A boat through the coconut creeks at My Tho',
      'A sampan ride under the palms',
      'The coconut candy workshops, then back to the city',
      `${DAY_MARK}Day 12 · Mui Ne sand dunes`,
      'Early breakfast, then east to Mui Ne',
      'The red and white dunes above the village',
      'A jeep across the sand',
      'The Fairy Stream, then back to the city',
      `${DAY_MARK}Day 13 · A free day in Saigon`,
      'Breakfast, then a free day in Saigon',
      'Optional: the Cu Chi tunnels or a cooking class',
      'Optional: Saigon square and the market stalls',
      `${DAY_MARK}Day 14 · Departure from Saigon`,
      'Breakfast at the hotel and check out',
      'Private transfer to Tan Son Nhat for your flight home'
    ],
    accommodation: {
      name: 'Acnos Grand Hotel, Ho Chi Minh',
      description: '4 nights · Breakfast and dinner · Standard room · 3★ · Hotel in District 1, a short walk from Saigon square',
      images: [
        img('9c6czohyddr8kue9lfsp2zdm7auk_le-duy-grand-hotel-luxury.jpg'),
        img('vl4kbh7kaeeg0i6zfv00ceetq6un_433172382.jpg'),
        img('aliqs0cpgm6bza2gu8pgfpgvw5ip_433172268.jpg'),
        img('48fyfgf3ddjnp4gf7t5t55zksqeh_433172157.jpg'),
        img('16pv5fse6smtiqn4lx3jdl6dgb7f_433172219.jpg'),
        img('cx1iobpvvkv1j7xqzg4f1scx629p_433172188.jpg'),
        img('jsrk671uo0es77ihq2hwfiohyopf_433172255.jpg'),
        img('1hftqtbyg244t45yqqeaqsdargbg_481459315.jpg'),
        img('q4ut388f9hge62qvu9idk0as5r0t_433172214.jpg')
      ]
    },
    activities: [
      {
        name: 'Mekong Delta day tour',
        day: 11,
        optional: false,
        image: img('4hlghe88itsu2x2yetdcq4mj42ni_1579700293_shutterstock_1529789570.jpg'),
        description: 'South to My Tho for a boat into the coconut creeks, a sampan through the palms, and the workshops where they make coconut candy.'
      },
      {
        name: 'Mui Ne sand dunes tour',
        day: 12,
        optional: false,
        image: img('e3atnnpknwx9mam7aenhxq8wgtl0_shutterstock_652868122.jpg'),
        description: 'The red and white dunes above the fishing village at Mui Ne, with a jeep across the sand and the Fairy Stream below.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'Four nights in District 1 to finish, with the Mekong Delta, the Mui Ne dunes and free days.',
      image: img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg')
    }
  }
];

const detail = {
  slug: 'vietnam-full-country-fortnight',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Vietnam Full Country Fortnight',
  alt: 'Red sand dunes at Mui Ne on the south central coast',
  days: '14 days / 13 nights',
  stations: '7 stops',
  transport: 'Flights, private transfers and guided day tours',
  tag: 'Grand tour',
  tags: ['Grand tour', 'Nature'],
  price: 103422,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Sa Pa', 'Ninh Binh', 'Halong Bay', 'Da Nang', 'Phu Quoc', 'Ho Chi Minh City', 'Mui Ne'],
  stats: { days: 14, cities: 6, hotels: 6, activities: 9, transfers: 18 },
  gallery: heroGallery,
  services: [
    ['6 hotels', 'Accommodation'],
    ['9 experiences', 'Activities'],
    ['18 transfers', 'Transport'],
    ['20 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two weeks and almost nothing left out: the hills, the bay, the centre, an island and the dunes.',
    quoteMore: 'Mui Ne is an early start from Saigon. Go for the white dunes first, before the wind picks the sand up.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A fortnight the length of the country: Sa Pa and the Fansipan summit, Ninh Binh, an overnight cruise in Halong Bay, Ba Na Hills from Da Nang, two nights at a beach resort on Phu Quoc with a snorkelling boat day, then four in Saigon with the Mekong Delta and the Mui Ne dunes.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 13 nights with breakfast and dinner daily and all meals on the cruise boat; all domestic flights; private transfers throughout; a Cat Cat village walk; the Fansipan mountain tour; a Ninh Binh day tour; a shared overnight cruise in Halong Bay with the Surprise Cave; a full day at Ba Na Hills with the Golden Bridge; a Phu Quoc south island tour with snorkelling; a Mekong Delta day tour; a Mui Ne sand dunes tour.',
  intro2: 'Not included: international flights; Vietnam visa fees; lunches other than on the cruise; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Into the hills at Sa Pa (B, D)', text: 'Breakfast and check out, then north into the hills\nCheck in at Sa Pa in the afternoon\nA half day on foot down into Cat Cat village\nTerraced fields, water wheels and a waterfall', hotel: 'Delta Sapa Hotel', highlights: ['Breakfast and check out, then north into the hills', 'Check in at Sa Pa in the afternoon', 'A half day on foot down into Cat Cat village'] },
    { title: 'Day 3: Fansipan and back to Hanoi (B, D)', text: 'Breakfast, then the cable car up Fansipan\nThe shrines and the viewing platform at the summit\nBack down and the long run to Hanoi\nEvening free in the city', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then the cable car up Fansipan', 'The shrines and the viewing platform at the summit', 'Back down and the long run to Hanoi'] },
    { title: 'Day 4: Ninh Binh day trip (B, D)', text: 'Breakfast, then south towards Ninh Binh\nA rowing boat through the flooded caves at Tam Coc\nThe limestone country and the rice fields\nBack in Hanoi in the evening', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then south towards Ninh Binh', 'A rowing boat through the flooded caves at Tam Coc', 'The limestone country and the rice fields'] },
    { title: 'Day 5: Overnight on the bay (B, L, D)', text: 'Breakfast and check out, then east towards the coast\nBoard your cruise boat in the early afternoon\nLunch and dinner on board\nA night moored among the limestone islands', hotel: 'Halong Royal Palace Cruise', highlights: ['Breakfast and check out, then east towards the coast', 'Board your cruise boat in the early afternoon', 'Lunch and dinner on board'] },
    { title: 'Day 6: Surprise Cave and on to Da Nang (B, D)', text: 'Breakfast on board, then the climb into the Surprise Cave\nBack to the pier and on to Hanoi airport\nThe flight to Da Nang\nCheck in near the beach, evening free', hotel: 'Luxtery Da Nang', highlights: ['Breakfast on board, then the climb into the Surprise Cave', 'Back to the pier and on to Hanoi airport', 'The flight to Da Nang'] },
    { title: 'Day 7: Ba Na Hills (B, D)', text: 'Breakfast, then the cable car up to Ba Na\nThe bridge held up by two stone hands\nThe French village and the gardens at the top\nBack down to Da Nang in the evening', hotel: 'Luxtery Da Nang', highlights: ['Breakfast, then the cable car up to Ba Na', 'The bridge held up by two stone hands', 'The French village and the gardens at the top'] },
    { title: 'Day 8: Flight to Phu Quoc (B, D)', text: 'Breakfast and check out, then the flight to the island\nCheck in at your beach resort\nRest of the day free at your own pace\nOptional: sunset from the west coast', hotel: 'Amarin Resort and Spa', highlights: ['Breakfast and check out, then the flight to the island', 'Check in at your beach resort', 'Rest of the day free at your own pace'] },
    { title: 'Day 9: Southern islets and snorkelling (B, D)', text: 'Breakfast, then a boat down to the An Thoi islets\nSnorkelling over the reef\nThe pepper farms and fish sauce distilleries\nBack to the resort in the late afternoon', hotel: 'Amarin Resort and Spa', highlights: ['Breakfast, then a boat down to the An Thoi islets', 'Snorkelling over the reef', 'The pepper farms and fish sauce distilleries'] },
    { title: 'Day 10: On to Saigon (B, D)', text: 'Breakfast and check out, then the flight to Saigon\nCheck in in District 1\nRest of the day free in the city\nOptional: the rooftop bars on Nguyen Hue', hotel: 'Acnos Grand Hotel', highlights: ['Breakfast and check out, then the flight to Saigon', 'Check in in District 1', 'Rest of the day free in the city'] },
    { title: 'Day 11: Mekong Delta (B, D)', text: 'Breakfast, then south into the delta\nA boat through the coconut creeks at My Tho\nA sampan ride under the palms\nThe coconut candy workshops, then back to the city', hotel: 'Acnos Grand Hotel', highlights: ['Breakfast, then south into the delta', 'A boat through the coconut creeks at My Tho', 'A sampan ride under the palms'] },
    { title: 'Day 12: Mui Ne sand dunes (B, D)', text: 'Early breakfast, then east to Mui Ne\nThe red and white dunes above the village\nA jeep across the sand\nThe Fairy Stream, then back to the city', hotel: 'Acnos Grand Hotel', highlights: ['Early breakfast, then east to Mui Ne', 'The red and white dunes above the village', 'A jeep across the sand'] },
    { title: 'Day 13: A free day in Saigon (B, D)', text: 'Breakfast, then a free day in Saigon\nOptional: the Cu Chi tunnels or a cooking class\nOptional: Saigon square and the market stalls', hotel: 'Acnos Grand Hotel', highlights: ['Breakfast, then a free day in Saigon', 'Optional: the Cu Chi tunnels or a cooking class', 'Optional: Saigon square and the market stalls'] },
    { title: 'Day 14: Departure from Saigon (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Tan Son Nhat for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Tan Son Nhat for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; lunches other than on the cruise; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const vietnamFullCountryFortnightBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const vietnamFullCountryFortnightProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Sa Pa', 'Ninh Binh', 'Halong Bay', 'Da Nang', 'Phu Quoc', 'Ho Chi Minh City', 'Mui Ne'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 14,
  stops: 7,
  hotels: 6,
  cities: 6,
  activities: 9,
  transfers: 18,
  meals: 20,
  price: detail.price,
  images: cardImages
};
