// Bhutan with Phobjikha: Luxury. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
  img('csfou3kxztfubm39810ryp5ifexy_shutterstock_1652381137.jpg'),
  img('vh7ozp18k40nl2265ofjyqxsyy2r_shutterstock_404549494.jpg'),
  img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
  img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
  img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
  img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
  img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
  img('zgcaaqitv1y1o61fn2id84tqu7bx_shutterstock_2270002569.jpg'),
  img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('vh7ozp18k40nl2265ofjyqxsyy2r_shutterstock_404549494.jpg'),
  img('luzoq7sxa7srm7dvmm8v3z2mdi61_53723990545_edacfc45d2_k.png')
];

const stops = [
  {
    letter: 'A',
    name: 'Phuentsholing',
    dayLabel: 'Day 1',
    images: [
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
    ],
    dayImages: {
      1: [
        img('r216cx5wtx6y2mlcx31wzb1avzpz_Palden_Tashi_Chholing_Shedra_01.jpg'),
        img('ljpqw4npv8wncod5fq1r7hw2zt5y_shutterstock_1344366731.jpg'),
        img('t524u3xv63svk6fkf5xqyvn08j3g_mandir.jpg'),
        img('yiup7qro2cobgjuqbppy9xaxknbw_pic3.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Phuentsholing`,
      'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing',
      'Border formalities at the Bhutan Gate',
      'Check in and the rest of the day free'
    ],
    accommodation: {
      name: 'Tashi Namgay Grand Resort, Phuntsholing',
      description: '1 night · Breakfast · Standard room · 4★ · Border town hotel on the Indian frontier',
      images: [
        img('w47is3ljf54flmuyzuro7gopkiye_download%20(6).jpg'),
        img('cluj5h6bj5pom3lu89t6poxsffq0_download%20(5).jpg'),
        img('a3znxzo9xo282s3t3x5br3hw6ynr_download%20(1).jpg'),
        img('x8fi22al87fhd5dxdbcqglzwfy31_download%20(3).jpg'),
        img('i9gx74ziaod88z0w097p357pvt9m_download%20(4).jpg'),
        img('e4w4g6np7w1rai4gscb1o1x3eu8t_download%20(2).jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Phuentsholing',
      description: 'Time in the border town where Bhutan begins, with the Bhutan Gate and Kharbandi above the plains.',
      image: img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Thimphu',
    dayLabel: 'Day 2 to 3',
    images: [
      img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg'),
      img('csfou3kxztfubm39810ryp5ifexy_shutterstock_1652381137.jpg'),
      img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg'),
      img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg')
    ],
    dayImages: {
      2: [
        img('wpd0woa96sv8ztpl35qc0pohtx5e_shutterstock_1698546493.jpg'),
        img('bug5yze180o5xjfqveckpjqiqtoe_0378-JGF-Dechen-Phodrang-Bhutan.jpg'),
        img('fecad1jg1gwzqki7ltqfxszyzl24_1200px-Changangkha_Lhakhang_2021.jpg'),
        img('xguiebm2y88fnap7eww10g8cwpvc_1578661243_simply.jpg')
      ],
      3: [
        img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
        img('2xgygw98g58o2olcep4vlh9r5k0u_1481602683_View_of_the_National_Memorial_Chorten__Thimphu.jpg'),
        img('4r58yve0h6te2i0muhp7hprr7rtu_24024165679_103d7a2e7c_b.jpg'),
        img('fecad1jg1gwzqki7ltqfxszyzl24_1200px-Changangkha_Lhakhang_2021.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Onward to Thimphu`,
      'Breakfast, then north into the hills towards Thimphu',
      'The Chukha dam and the Wang Chhu gorge on the way',
      'Optional: the Zorig Chusum school of arts',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 3 · Thimphu and simtokha`,
      'Breakfast, then out into the capital',
      'The Memorial Chorten and the Buddha Dordenma',
      'Tashichho Dzong and Simtokha Dzong'
    ],
    accommodation: {
      name: 'dusitD2 Yarkay Thimphu, Thimphu City',
      description: '2 nights · Breakfast · Standard room · 5★ · Comfortable hotel in the capital, walkable to the clock tower',
      images: [
        img('f3t9hzt7b1elk3dam0sha3x0ekh4_dusitd2-yarkay-thimphu.jpg'),
        img('xh53vxjlvl50x3o9u6quh04omndw_200c1a00000194y1e820E_W_1280_853_R5.webp'),
        img('ixtb5nwvix3ykxws8ih3t3ec77tk_0222d12000cmddkz79D38_W_1280_853_R5.webp'),
        img('z7vdmvdfrswebmswlbvq88tb2h9c_0224u12000amdy0e5649E_W_1280_853_R5.webp'),
        img('k4561mfj2ubbfa2czap32eadm8f1_0221512000amdy0zh2A33_W_1280_853_R5.webp'),
        img('cedgs6codp0zc2dzco6a78uvye8l_0225a12000at6yarf56F6_W_1280_853_R5.webp'),
        img('uajfem3zqg0hclaa9kb9r16yzl0x_0223s12000bbe465240CE_W_1280_853_R5.webp'),
        img('32pkoimx2yof8qom6ap0vxm6vl98_0224v12000amdy1d30370_W_1280_853_R5.webp'),
        img('4mx1so1ytvqh1wor3x6p0onmwpcu_0224h12000b350oo2387B_W_1280_853_R5.webp'),
        img('v5v0ieh7ys8lqyisyjvj63xbn7qu_0225412000amdxzo01ED8_W_1280_853_R5.webp'),
        img('6i7tt23pvkt2qlatni64tootndme_0221912000ap7yzbl25F4_W_1280_853_R5.webp'),
        img('7bicib0jct0d1s78klry0ongpg8s_02204120008lukzeu14A0_W_1280_853_R5.webp')
      ]
    },
    activities: [
      {
        name: 'Thimphu sightseeing with Simtokha Dzong',
        day: 3,
        optional: false,
        image: img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
        description: 'The capital on foot and by road, finishing at Simtokha Dzong, the oldest fortress still standing in the country.'
      }
    ],
    program: {
      name: 'Thimphu',
      description: 'Days in the capital, with the Memorial Chorten, the Buddha Dordenma and Tashichho Dzong.',
      image: img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Phobjikha',
    dayLabel: 'Day 4',
    images: [
      img('zgcaaqitv1y1o61fn2id84tqu7bx_shutterstock_2270002569.jpg'),
      img('0vpwuvxmraalrdwkw7zhpar6pcnf_shutterstock_398906899.jpg'),
      img('vh7ozp18k40nl2265ofjyqxsyy2r_shutterstock_404549494.jpg'),
      img('62ay59x8u2qfi8ezdhofxgy7kceg_shutterstock_422773819.jpg')
    ],
    dayImages: {
      4: [
        img('drvgw0cecqj73ca524ijipw1n1j6_Wangdue%20Phodrang%20Monastery%201.jpg'),
        img('156qgkjrva6kbo6cjgsqqvq3licz_Wangdue_Phodrang_Dzong.jpg'),
        img('zgcaaqitv1y1o61fn2id84tqu7bx_shutterstock_2270002569.jpg'),
        img('0vpwuvxmraalrdwkw7zhpar6pcnf_shutterstock_398906899.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · To Phobjikha: Wangdue Phodrang`,
      'Breakfast, then east over the Dochula pass',
      'On through Wangdue towards the Phobjikha valley',
      'Wangdue Phodrang Dzong on its rocky spur',
      'The rivers meeting below the fortress walls'
    ],
    accommodation: {
      name: 'Gangtey Lodge Bhutan, Nubding',
      description: '1 night · Breakfast · Standard room · 5★ · Simple lodge on the edge of the Phobjikha valley',
      images: [
        img('bsjbvswztmh7fczast4v34yfoe1c_download%20-%202024-05-06T183636.121.jpg'),
        img('k4t8g73qcqijwzr6n8gdr6e2681m_download%20-%202024-05-06T183858.716.jpg'),
        img('h7sjmamr051lfz4lcygewruvjm1f_download%20-%202024-05-06T183539.669.jpg'),
        img('slm05wmm57uh2lo6tn7tv2r4b89i_download%20-%202024-05-06T183558.166.jpg'),
        img('oz5n8hnku56m5fnlqilepkoxbjmh_download%20-%202024-05-06T183448.627.jpg'),
        img('1ioae6gdlj2ezc4n2s8ftyg8agrl_download%20-%202024-05-06T183549.440.jpg'),
        img('84u6d8fqfbrpzh423qhwsylb1q8s_download%20-%202024-05-06T183610.120.jpg'),
        img('75qvkymg6clwgu0qygx90d53od19_download%20-%202024-05-06T183531.612.jpg'),
        img('5phw97a0jlctszy7h5h6k596nzgj_download%20-%202024-05-06T183626.514.jpg'),
        img('3fwsj3mq29g61hw2vrfwp4223l1k_download%20-%202024-05-06T183504.801.jpg'),
        img('6ga4mqzku7moe1mu5blxgh2lq10z_download%20-%202024-05-06T183604.165.jpg'),
        img('yxliptx0yb5l37yik1w95c3k0zls_download%20-%202024-05-06T183648.394.jpg')
      ]
    },
    activities: [
      {
        name: 'Wangdue Phodrang Dzong',
        day: 4,
        optional: false,
        image: img('drvgw0cecqj73ca524ijipw1n1j6_Wangdue%20Phodrang%20Monastery%201.jpg'),
        description: 'The fortress on a spur above the confluence of the Puna Tsang and Dang Chhu, rebuilt after the fire of 2012.'
      }
    ],
    program: {
      name: 'Phobjikha',
      description: 'Time on the edge of the Phobjikha valley, the winter ground of the black necked cranes.',
      image: img('zgcaaqitv1y1o61fn2id84tqu7bx_shutterstock_2270002569.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Punakha',
    dayLabel: 'Day 5',
    images: [
      img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
      img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg'),
      img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg'),
      img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg')
    ],
    dayImages: {
      5: [
        img('hwdpzwlcu41cs2x6cq1rpgsee8zq_Gangtey%20Goemba%20Buddhist%20monastery%201.jpg'),
        img('j6mdu0tk28hq758kizrzzcm2hb9z_Bhutan-Dana_Scheffler-1.png'),
        img('tu7006jnl2qdcjom4vk9czur2rz7_1621019190_shutterstock_197981387.jpg'),
        img('lmylwwkh8qs7zmhzxppfsordx82s_shutterstock_684974815.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · To Punakha: Gangtey`,
      'Breakfast, then east over the Dochula pass',
      'The hundred and eight chortens at the top',
      'Gangtey Goemba on its low ridge',
      'The crane valley spread out below'
    ],
    accommodation: {
      name: 'Dhensa Boutique Resort, Punakha',
      description: '1 night · Breakfast · Standard room · 5★ · Riverside hotel in the warm old winter capital',
      images: [
        img('9mtgyg89amk49o9stag409pfcb5t_dhensa-boutique-resort.jpg'),
        img('0n7ds4zegk8lbpduz46uj6wnqi8o_6ef08bee838211e79a9b025f77df004f.jpg'),
        img('1z38fa2rsz65dd9z73vj51zs1bc3_6e5a2c80838211e7a50c0a4cef95d023.jpg'),
        img('luv99z8p28h6fyoicsnp7le0r1u6_51731ee29e4c11e9aa2e0242ac110003.jpg'),
        img('8i9cslg7n8f3evj9x2o1cbw80r8r_0fa7ef31_z.jpg'),
        img('s0lvb462u40kvpz8jzecvxbqpgxc_6db6888c838211e78e650a4cef95d023.jpg'),
        img('teep4uv57vvm36ryeokon36xt5qh_5c9c14469e4b11e993780242ac110003.jpg'),
        img('t7sqboxh2sv6077ibr3q27cszo0x_6db76f22838211e7bc96025f77df004f.jpg'),
        img('gusvoyjtkfinqynnvt7v47sdda32_6e4fb624838211e7bc96025f77df004f.jpg')
      ]
    },
    activities: [
      {
        name: 'Gangtey and the Phobjikha valley',
        day: 5,
        optional: false,
        image: img('hwdpzwlcu41cs2x6cq1rpgsee8zq_Gangtey%20Goemba%20Buddhist%20monastery%201.jpg'),
        description: 'Gangtey Goemba on its low ridge above the Phobjikha valley, the winter ground of the black necked cranes.'
      }
    ],
    program: {
      name: 'Punakha',
      description: 'Time in the warm old winter capital, with the Dzong between two rivers and the suspension bridge.',
      image: img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Paro',
    dayLabel: 'Day 6 to 8',
    images: [
      img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
      img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
      img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
      img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg')
    ],
    dayImages: {
      6: [
        img('bhp0lyp0ntb70w7pv4icfuv00hz5_Punakha%20Dzong%20Monastery%201.jpg'),
        img('056auoul5hww4jxhty1ioepx1oi7_5116835341_c68f3cb493_b.jpg'),
        img('0hlgpb14iwhgm0834fzkpbd5sgiv_8154575525_198c2ed1bb_b.jpg'),
        img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg')
      ],
      7: [
        img('gooh6qmdymk3a1sxb9077xxgevgd_Rinpung%20Dzong%201.jpg'),
        img('lvrrucang7e4i29fjjrr5dv1hfbg_1481602680_Ta_Dzong_museum.jpg'),
        img('40nfujj31s5rphnc2usp8a680fzp_1571657529_1280px-Rinpung_Dzong__Bhutan_01.jpg'),
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg')
      ],
      8: [
        img('yu1h20ntlvu7vzurh3ahrr62uwqc_Haa%20Valley%203.jpg'),
        img('byjqlczjh3p5qzvwbjhnm8utazy3_1481602664_HaaValley.jpg'),
        img('vks3jk2dtk15pwnvwjc72mlbgokm_Lhakhang%20Karpo.jpg'),
        img('luzoq7sxa7srm7dvmm8v3z2mdi61_53723990545_edacfc45d2_k.png')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · To Paro: Punakha Dzong`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'Punakha Dzong between the Pho and Mo rivers',
      'The long suspension bridge over the water',
      `${DAY_MARK}Day 7 · Ta dzong and rinpung dzong and tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The round watchtower holding the National Museum',
      'Rinpung Dzong on the slope above the river',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face',
      `${DAY_MARK}Day 8 · Haa valley`,
      'Breakfast, then out into the Paro valley',
      'Over the Chele La pass at 3,988 metres',
      'Down into the quiet Haa valley'
    ],
    accommodation: {
      name: 'Himalayan Keys Forest Resort, Paro',
      description: '3 nights · Breakfast · Standard room · 5★ · Quiet hotel in the valley below Taktsang',
      images: [
        img('t0kj737z6kll901wtj95kh6u3y8l_download%20-%202024-05-06T190201.307.jpg'),
        img('6vxojcg2nanz6535xuvly05a55gn_ece7ee0d.png'),
        img('nl2g0a7z7k1w4osan7esb2i2cswx_download%20-%202024-05-06T190231.107.jpg'),
        img('2l3essmx9b2t05ak34m4m73fufbs_download%20-%202024-05-06T190612.011.jpg'),
        img('r8knalj28mixzm2eqe3nyrjd2ehq_download%20-%202024-05-06T190226.042.jpg'),
        img('088w38ged9lx1hxqgp5opgi2mp33_download%20-%202024-05-06T190632.764.jpg'),
        img('0poh489qx10u8zcwh6w68741kdad_download%20-%202024-05-06T190601.426.jpg'),
        img('g5ymafcxe4gr3w1v84bx9yz20xhf_download%20-%202024-05-06T190243.503.jpg'),
        img('ad6d4qzlgttwq1xostntv2gxd0m2_download%20-%202024-05-06T190250.831.jpg'),
        img('ddyrnet9h0lu7uagmcecowixcgwg_download%20-%202024-05-06T190650.463.jpg'),
        img('j4bemhisyc02pvjah8cd6rx6in4v_download%20-%202024-05-06T190218.558.jpg'),
        img('8zh1n6hglq5zrn8bx8f89owj31bh_download%20-%202024-05-06T190210.401.jpg')
      ]
    },
    activities: [
      {
        name: 'Punakha sightseeing tour',
        day: 6,
        optional: false,
        image: img('bhp0lyp0ntb70w7pv4icfuv00hz5_Punakha%20Dzong%20Monastery%201.jpg'),
        description: 'The fortress where Bhutan’s kings are crowned, built on the spit of land where two rivers meet below the town.'
      },
      {
        name: 'Ta Dzong and Rinpung Dzong',
        day: 7,
        optional: false,
        image: img('gooh6qmdymk3a1sxb9077xxgevgd_Rinpung%20Dzong%201.jpg'),
        description: 'The round watchtower that now holds the National Museum, and the whitewashed Rinpung fortress above the river.'
      },
      {
        name: 'Hike to the Tiger\'s Nest',
        day: 7,
        optional: false,
        image: img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg'),
        description: 'The climb to Taktsang, the monastery wedged into a cliff nine hundred metres above the Paro valley floor.'
      },
      {
        name: 'Haa valley day trip',
        day: 8,
        optional: false,
        image: img('yu1h20ntlvu7vzurh3ahrr62uwqc_Haa%20Valley%203.jpg'),
        description: 'Over the Chele La pass into Haa, a quiet border valley only opened to visitors in 2002.'
      }
    ],
    program: {
      name: 'Paro',
      description: 'Days in the valley below Taktsang, with Rinpung Dzong, the National Museum and the Tiger’s Nest hike.',
      image: img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg')
    }
  },
  {
    letter: 'F',
    name: 'Phuentsholing',
    dayLabel: 'Day 9 to 10',
    images: [
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg')
    ],
    dayImages: {
      9: [
        img('khf8y1lpqxenviw5vczf0uh2ytj0_Zangto_Pelri_Lhakhang,_Phuentsholing_during_LGFC_-_Bhutan_2019_(14).jpg'),
        img('eljv9nfavq2ojeluvwgegg0j5t8o_shutterstock_1380814979.jpg'),
        img('wzk43phe3f2n5pie7psn6bf6ehe8_torsa%201.jpg'),
        img('l0fq7fjbnhs2rdw73cyv4fa8c62i_Phuentsholing-Market-1024x682.jpg')
      ],
      10: [
        img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
        img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
        img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
        img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 9 · Onward to Phuentsholing`,
      'Breakfast, then the long run back south',
      'Down through the Chukha gorge to the plains',
      'Optional: Zangto Pelri Lhakhang in the town',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 10 · Departure from Siliguri`,
      'Breakfast at the hotel and check out',
      'Border formalities and transfer to Siliguri'
    ],
    accommodation: {
      name: 'Tashi Namgay Grand Resort, Phuntsholing',
      description: '1 night · Breakfast · Standard room · 4★ · Border town hotel on the Indian frontier',
      images: [
        img('w47is3ljf54flmuyzuro7gopkiye_download%20(6).jpg'),
        img('cluj5h6bj5pom3lu89t6poxsffq0_download%20(5).jpg'),
        img('a3znxzo9xo282s3t3x5br3hw6ynr_download%20(1).jpg'),
        img('x8fi22al87fhd5dxdbcqglzwfy31_download%20(3).jpg'),
        img('i9gx74ziaod88z0w097p357pvt9m_download%20(4).jpg'),
        img('e4w4g6np7w1rai4gscb1o1x3eu8t_download%20(2).jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Phuentsholing',
      description: 'Time in the border town where Bhutan begins, with the Bhutan Gate and Kharbandi above the plains.',
      image: img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
    }
  }
];

const detail = {
  slug: 'bhutan-with-phobjikha-luxury',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bhutan with Phobjikha: Luxury',
  alt: 'Luxury lodge window looking onto the Phobjikha valley',
  days: '10 days / 9 nights',
  stations: '6 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Luxury',
  tags: ['Luxury', 'Nature'],
  price: 121600,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuentsholing', 'Thimphu', 'Phobjikha', 'Punakha', 'Paro', 'Phuentsholing'],
  stats: { days: 10, cities: 6, hotels: 5, activities: 7, transfers: 16 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['16 transfers', 'Transport'],
    ['18 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Nine nights in five star properties including Six Senses at Gangtey and Le Méridien in Paro. The best of Bhutan without compromise.',
    quoteMore: 'Six Senses Gangtey is the one to arrive at in daylight. The whole lodge is built around one window onto the crane valley.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '10 days through Phuentsholing, Thimphu, Phobjikha, Punakha, Paro, with 9 nights, daily breakfast and a licensed Bhutanese guide: the thimphu sightseeing with simtokha dzong, the wangdue phodrang dzong, the gangtey and the phobjikha valley, the punakha sightseeing tour.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 9 nights across Phuentsholing, Thimphu, Phobjikha, Punakha, Paro with daily breakfast; all land transfers by private vehicle; the Thimphu sightseeing with Simtokha Dzong; the Wangdue Phodrang Dzong; the Gangtey and the Phobjikha valley; the Punakha sightseeing tour; the Ta Dzong and Rinpung Dzong; the Hike to the Tiger\'s Nest; the Haa valley day trip; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuentsholing (L)', text: 'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing\nBorder formalities at the Bhutan Gate\nCheck in and the rest of the day free', hotel: 'Tashi Namgay Grand Resort', highlights: ['Arrival at Bagdogra or Siliguri and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Onward to Thimphu (B, L)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nOptional: the Zorig Chusum school of arts\nArrival transfer and check in for the night', hotel: 'dusitD2 Yarkay Thimphu', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'Optional: the Zorig Chusum school of arts'] },
    { title: 'Day 3: Thimphu and simtokha (B, L)', text: 'Breakfast, then out into the capital\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and Simtokha Dzong', hotel: 'dusitD2 Yarkay Thimphu', highlights: ['Breakfast, then out into the capital', 'The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and Simtokha Dzong'] },
    { title: 'Day 4: To Phobjikha: Wangdue Phodrang (B, L)', text: 'Breakfast, then east over the Dochula pass\nOn through Wangdue towards the Phobjikha valley\nWangdue Phodrang Dzong on its rocky spur\nThe rivers meeting below the fortress walls', hotel: 'Gangtey Lodge Bhutan', highlights: ['Breakfast, then east over the Dochula pass', 'On through Wangdue towards the Phobjikha valley', 'Wangdue Phodrang Dzong on its rocky spur'] },
    { title: 'Day 5: To Punakha: Gangtey (B, L)', text: 'Breakfast, then east over the Dochula pass\nThe hundred and eight chortens at the top\nGangtey Goemba on its low ridge\nThe crane valley spread out below', hotel: 'Dhensa Boutique Resort', highlights: ['Breakfast, then east over the Dochula pass', 'The hundred and eight chortens at the top', 'Gangtey Goemba on its low ridge'] },
    { title: 'Day 6: To Paro: Punakha Dzong (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nPunakha Dzong between the Pho and Mo rivers\nThe long suspension bridge over the water', hotel: 'Himalayan Keys Forest Resort', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'Punakha Dzong between the Pho and Mo rivers'] },
    { title: 'Day 7: Ta dzong and rinpung dzong and tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe round watchtower holding the National Museum\nRinpung Dzong on the slope above the river\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Himalayan Keys Forest Resort', highlights: ['Breakfast, then out into the Paro valley', 'The round watchtower holding the National Museum', 'Rinpung Dzong on the slope above the river'] },
    { title: 'Day 8: Haa valley (B, L)', text: 'Breakfast, then out into the Paro valley\nOver the Chele La pass at 3,988 metres\nDown into the quiet Haa valley', hotel: 'Himalayan Keys Forest Resort', highlights: ['Breakfast, then out into the Paro valley', 'Over the Chele La pass at 3,988 metres', 'Down into the quiet Haa valley'] },
    { title: 'Day 9: Onward to Phuentsholing (B, L)', text: 'Breakfast, then the long run back south\nDown through the Chukha gorge to the plains\nOptional: Zangto Pelri Lhakhang in the town\nArrival transfer and check in for the night', hotel: 'Tashi Namgay Grand Resort', highlights: ['Breakfast, then the long run back south', 'Down through the Chukha gorge to the plains', 'Optional: Zangto Pelri Lhakhang in the town'] },
    { title: 'Day 10: Departure from Siliguri (B)', text: 'Breakfast at the hotel and check out\nBorder formalities and transfer to Siliguri', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Border formalities and transfer to Siliguri'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Bhutan', href: '/asien/bhutan' },
  { label: detail.title }
];

export const bhutanPhobjikhaLuxuryBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bhutanPhobjikhaLuxuryProduct = {
  slug: detail.slug,
  places: ['Phuentsholing', 'Thimphu', 'Phobjikha', 'Punakha', 'Paro'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 10,
  stops: 6,
  hotels: 5,
  cities: 6,
  activities: 7,
  transfers: 16,
  meals: 18,
  price: detail.price,
  images: cardImages
};
