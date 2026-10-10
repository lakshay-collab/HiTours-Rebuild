// Bhutan with Phobjikha: Super Deluxe. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
  img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
  img('0vpwuvxmraalrdwkw7zhpar6pcnf_shutterstock_398906899.jpg'),
  img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg'),
  img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
  img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
  img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
  img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
  img('beeng6mjeqzf6ugz90sexdijnpsf_shutterstock_1043403151.jpg'),
  img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('0vpwuvxmraalrdwkw7zhpar6pcnf_shutterstock_398906899.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Phuentsholing',
    dayLabel: 'Day 1',
    images: [
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg')
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
      name: 'Hotel Ga Me Ga, Phuntsholing',
      description: '1 night · Breakfast · Standard room · 4★ · Border town hotel on the Indian frontier',
      images: [
        img('dftsgelbd2cwn4ilxokcbe0749b2_fb2d9940921311e7b5a30a4cef95d023.png'),
        img('4vtpa5rd7zj8gclglw1udeqmmzx2_fb0b5524a6d411e990f90242ac110003.png'),
        img('06dorbq8l4md94uu6xsnvohsumb9_fa84d4b8921311e78b59025f77df004f.png'),
        img('1ypfmrqjta2z28nklx2uhaxdz55g_fbe276f8921311e7b5a30a4cef95d023.png'),
        img('u06ihwtxszpib331ve8iuu8sgrd3_39f0863e83ba11eab07f0242ac110004.png'),
        img('9wnawpp4jsv0qzwca49jgfk4mzzp_fd2b1d76921311e78b59025f77df004f.png'),
        img('hk72m63lg3f0tlzi1ho5u48vvsoe_3095cbcea6d611e9b8800242ac110005.png'),
        img('yfezo4hjc97pvrarh0wiuqvic7jg_0b3791f6a6d511e9b7870242ac110003.png'),
        img('hs3bea3j2a26g5mesdbf3g4sy2cg_0790212aa6d611e992b70242ac110003.png'),
        img('95xsyjb91zgr8ftjzp1nk141mfju_fd7561ec921311e7bfa70a4cef95d023.png'),
        img('eu5ci72auhukb50vme14gvstv03h_fb54dffa921311e7a0a3025f77df004f.png'),
        img('oa0pezmzq4jz34mop9n7f60bms0y_3a1f5b8a83ba11eaa62a0242ac110005.png')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Phuentsholing',
      description: 'Time in the border town where Bhutan begins, with the Bhutan Gate and Kharbandi above the plains.',
      image: img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Thimphu',
    dayLabel: 'Day 2 to 3',
    images: [
      img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg'),
      img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
      img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg'),
      img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg')
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
      name: 'Hotel Osel, Thimphu City',
      description: '2 nights · Breakfast · Standard room · 4★ · Comfortable hotel in the capital, walkable to the clock tower',
      images: [
        img('w2i7xwwob3s3iwlvmrw3kcrehfae_download%20(2).jpg'),
        img('tdmxrvmaeyus6xshzymbx3pz70e3_download%20(11).jpg'),
        img('fk1ljjiszz4u6726qux71wu4wr7g_download%20(12).jpg'),
        img('eslyjmnizpu6vwqraunzg9r93g6b_download%20(6).jpg'),
        img('r9dp1wfuoxemrz684wl33efj24wn_download%20(5).jpg'),
        img('qwz5z8h0jniphgxj9dtpe2obpaw2_download%20(7).jpg'),
        img('6z7v3yv25nvlmtmbaribcx5eunei_download%20(9).jpg'),
        img('k47aoaf8kfxcf0jaynmtaror7qgr_download%20(4).jpg'),
        img('bjwtkmwghbw29feu71u6zs9tkq3n_download%20(10).jpg'),
        img('h0ns75h7h5rl8i33bf8inga39c81_download%20(3).jpg'),
        img('hy38xu2sutqffyb37nwr972ojhgg_download%20(8).jpg'),
        img('3luvgcgfv5eus1frz8jm1tkvelsw_download%20(1).jpg')
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
      image: img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Phobjikha',
    dayLabel: 'Day 4',
    images: [
      img('beeng6mjeqzf6ugz90sexdijnpsf_shutterstock_1043403151.jpg'),
      img('zgcaaqitv1y1o61fn2id84tqu7bx_shutterstock_2270002569.jpg'),
      img('0vpwuvxmraalrdwkw7zhpar6pcnf_shutterstock_398906899.jpg'),
      img('vh7ozp18k40nl2265ofjyqxsyy2r_shutterstock_404549494.jpg')
    ],
    dayImages: {
      4: [
        img('drvgw0cecqj73ca524ijipw1n1j6_Wangdue%20Phodrang%20Monastery%201.jpg'),
        img('156qgkjrva6kbo6cjgsqqvq3licz_Wangdue_Phodrang_Dzong.jpg'),
        img('beeng6mjeqzf6ugz90sexdijnpsf_shutterstock_1043403151.jpg'),
        img('zgcaaqitv1y1o61fn2id84tqu7bx_shutterstock_2270002569.jpg')
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
      name: 'RKPO Gangtey Lodge, Green Resort, Nubding',
      description: '1 night · Breakfast · Standard room · 4★ · Simple lodge on the edge of the Phobjikha valley',
      images: [
        img('29svakex5oy280om97845pgcpoyw_pixelcut-export.png'),
        img('6u6s2p2ad8ond35fscwayvdq3q3a_rkpo-gangtey-lodge%20(2).png'),
        img('qn0mmhgtz2hsjrgpj17uxy8fng17_IMG_1040-scaled.png'),
        img('tvfdnm797dkhbgqn1kus33ym9cvb_IMG_3398-scaled.png'),
        img('uvizk36az7b5rjv05lu17fct2g99_37930195_209244773088088_3503203874712322048_n.png'),
        img('e6it5wgx6it5xmrxa2jy7bcvsdsi_IMG_1043-scaled.png'),
        img('9xz6br9htklnba64emv1rtp8q8f3_IMG_3400-scaled.png')
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
      image: img('beeng6mjeqzf6ugz90sexdijnpsf_shutterstock_1043403151.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Punakha',
    dayLabel: 'Day 5',
    images: [
      img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
      img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
      img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg'),
      img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg')
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
      name: 'Zhingkham Resort, Punakha',
      description: '1 night · Breakfast · Standard room · 3★ · Riverside hotel in the warm old winter capital',
      images: [
        img('fkvhj7hficbujs7edhjfvx19rvk2_download%20-%202024-05-06T184600.722.jpg'),
        img('9dl9rfezmufjb3jucmuujkk3a108_download%20-%202024-05-06T184503.298.jpg'),
        img('t09ksrjypqq77a57rdmlnwbcx0sq_download%20-%202024-05-06T184704.513.jpg'),
        img('khplfu8nknquemuvvs1l3zs5wvr9_download%20-%202024-05-06T184455.878.jpg'),
        img('r0eka8y9hpi0jblv18a1go9x390n_download%20-%202024-05-06T184655.094.jpg'),
        img('6sayeft6o3z9493gir2r8g3m5s44_download%20-%202024-05-06T184553.967.jpg'),
        img('ti2cy51dvtxf4warjwdzzbijw24x_download%20-%202024-05-06T184647.881.jpg'),
        img('fzey4x7heq5le0wa2uhknsnnwslv_download%20-%202024-05-06T184712.168.jpg'),
        img('16bz3mzxmdfdfrwyu62qjees65i5_download%20-%202024-05-06T184415.962.jpg'),
        img('dw5ci7or1ry6l1mxyajdo2ib455e_download%20-%202024-05-06T184445.858.jpg'),
        img('bpws0qhyn3lxcg88773tj02nhjsb_download%20-%202024-05-06T184515.894.jpg')
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
      image: img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Paro',
    dayLabel: 'Day 6 to 8',
    images: [
      img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
      img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
      img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
      img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
    ],
    dayImages: {
      6: [
        img('bhp0lyp0ntb70w7pv4icfuv00hz5_Punakha%20Dzong%20Monastery%201.jpg'),
        img('056auoul5hww4jxhty1ioepx1oi7_5116835341_c68f3cb493_b.jpg'),
        img('0hlgpb14iwhgm0834fzkpbd5sgiv_8154575525_198c2ed1bb_b.jpg'),
        img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg')
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
      name: 'Tashi Namgay Resort, Paro',
      description: '3 nights · Breakfast · Standard room · 4★ · Quiet hotel in the valley below Taktsang',
      images: [
        img('7z8xpog1kmbjzpquz6lijih8xglg_5e3e264ceb1a11e9b4680242ac110004.png'),
        img('ns00ztpmf2kcnql7a5wbwz31dl05_346966058_180659094935008_2703367575132981477_n.png'),
        img('kc6awukghnqh8mbeyd33fxh4dghm_358129487_717083693761790_4386183972988994801_n.png'),
        img('2vfdjylkddij69m2jq1d06d4ue9t_350839587_3543811875757574_5537190552242602283_n.png'),
        img('kkdtq95880acemu5rop1mk2et2nw_c43880e08f2d11e8b2740a9df65c8753.png'),
        img('gyc31ly8h33udqpql4y6dq3rpq5q_359339454_720035376799955_724369798635276304_n.png'),
        img('f6dk8f98vq33zuvfym6nmjmwlcqp_359791179_720968866706606_8404366071197683343_n.png'),
        img('qzdg5bcygbmd1kos3hxd3u083xul_357529243_713072897496203_3531817052386242889_n.png'),
        img('4db9dren371zcsh62x78yxv8frwm_350637052_6353363548112985_1117311302403949784_n.png'),
        img('q96knkgpnyw6lj9bcdvg0svz4fam_343448531_894600871623605_1333730073829139333_n.png'),
        img('l5z26ginst3vcj5bwbid2qxcjnay_332629131_2214542088727749_7141962434421709352_n.png')
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
      image: img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg')
    }
  },
  {
    letter: 'F',
    name: 'Phuentsholing',
    dayLabel: 'Day 9 to 10',
    images: [
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg')
    ],
    dayImages: {
      9: [
        img('khf8y1lpqxenviw5vczf0uh2ytj0_Zangto_Pelri_Lhakhang,_Phuentsholing_during_LGFC_-_Bhutan_2019_(14).jpg'),
        img('eljv9nfavq2ojeluvwgegg0j5t8o_shutterstock_1380814979.jpg'),
        img('wzk43phe3f2n5pie7psn6bf6ehe8_torsa%201.jpg'),
        img('l0fq7fjbnhs2rdw73cyv4fa8c62i_Phuentsholing-Market-1024x682.jpg')
      ],
      10: [
        img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
        img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
        img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
        img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg')
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
      name: 'Hotel Druk, Phuntsholing',
      description: '1 night · Breakfast · Standard room · 4★ · Border town hotel on the Indian frontier',
      images: [
        img('xde10oc598xlltohkck8hkmnzeq6_b2a9baba_z.webp'),
        img('g4syfjt3kigxpn0c8ioohcgb8w7z_acc5c117_z.webp'),
        img('ydnbrgjqkmbdtv8t829trp0svhel_a3cc48f5_z%20copy.jpg'),
        img('9v9xsymup65ubgpi02xstv3f9l3i_5a06abc26cff04d0c22b9da5c44226e861865e3f747df64ded03a318bbfe.jpeg'),
        img('er89r32vdwblc6nmy7eg5ctwwiag_f2056d817d88465f376a4f75f3449dab935182db01632f41ce46ae102371.jpeg'),
        img('dchdfn3r01zgf0tch4tx9y6gd58k_13f82522dc0839dde721e724748263305376a8b9da587714d7fdb06fd867.jpeg'),
        img('vszek2yvedo2js4sfnt0t9gmm86g_283c4de7_z.webp'),
        img('0dwxiigaduskfr10tsuxy9h6n1s3_0d661332_z.webp'),
        img('r46kxzo0avn3nglcr1hx1jq3sk4p_02bcfbb1_z.webp')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Phuentsholing',
      description: 'Time in the border town where Bhutan begins, with the Bhutan Gate and Kharbandi above the plains.',
      image: img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
    }
  }
];

const detail = {
  slug: 'bhutan-with-phobjikha-super-deluxe',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bhutan with Phobjikha: Super Deluxe',
  alt: 'Four star lodge terrace facing the Phobjikha valley',
  days: '10 days / 9 nights',
  stations: '6 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Luxury',
  tags: ['Luxury', 'Nature'],
  price: 90364,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuentsholing', 'Thimphu', 'Phobjikha', 'Punakha', 'Paro', 'Phuentsholing'],
  stats: { days: 10, cities: 6, hotels: 6, activities: 7, transfers: 16 },
  gallery: heroGallery,
  services: [
    ['6 hotels', 'Accommodation'],
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
    quote: 'Ten days with Phobjikha and the Haa valley, in four star hotels. The widest route we run through western Bhutan.',
    quoteMore: 'Phobjikha and Haa are the two valleys where you will want a spare memory card. Both are at their best in the late afternoon light.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '10 days through Phuentsholing, Thimphu, Phobjikha, Punakha, Paro, with 9 nights, Breakfast and dinner each day and a licensed Bhutanese guide: the thimphu sightseeing with simtokha dzong, the wangdue phodrang dzong, the gangtey and the phobjikha valley, the punakha sightseeing tour.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 9 nights across Phuentsholing, Thimphu, Phobjikha, Punakha, Paro with Breakfast and dinner each day; all land transfers by private vehicle; the Thimphu sightseeing with Simtokha Dzong; the Wangdue Phodrang Dzong; the Gangtey and the Phobjikha valley; the Punakha sightseeing tour; the Ta Dzong and Rinpung Dzong; the Hike to the Tiger\'s Nest; the Haa valley day trip; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuentsholing (L)', text: 'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing\nBorder formalities at the Bhutan Gate\nCheck in and the rest of the day free', hotel: 'Hotel Ga Me Ga', highlights: ['Arrival at Bagdogra or Siliguri and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Onward to Thimphu (B, L)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nOptional: the Zorig Chusum school of arts\nArrival transfer and check in for the night', hotel: 'Hotel Osel', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'Optional: the Zorig Chusum school of arts'] },
    { title: 'Day 3: Thimphu and simtokha (B, L)', text: 'Breakfast, then out into the capital\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and Simtokha Dzong', hotel: 'Hotel Osel', highlights: ['Breakfast, then out into the capital', 'The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and Simtokha Dzong'] },
    { title: 'Day 4: To Phobjikha: Wangdue Phodrang (B, L)', text: 'Breakfast, then east over the Dochula pass\nOn through Wangdue towards the Phobjikha valley\nWangdue Phodrang Dzong on its rocky spur\nThe rivers meeting below the fortress walls', hotel: 'RKPO Gangtey Lodge, Green Resort', highlights: ['Breakfast, then east over the Dochula pass', 'On through Wangdue towards the Phobjikha valley', 'Wangdue Phodrang Dzong on its rocky spur'] },
    { title: 'Day 5: To Punakha: Gangtey (B, L)', text: 'Breakfast, then east over the Dochula pass\nThe hundred and eight chortens at the top\nGangtey Goemba on its low ridge\nThe crane valley spread out below', hotel: 'Zhingkham Resort', highlights: ['Breakfast, then east over the Dochula pass', 'The hundred and eight chortens at the top', 'Gangtey Goemba on its low ridge'] },
    { title: 'Day 6: To Paro: Punakha Dzong (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nPunakha Dzong between the Pho and Mo rivers\nThe long suspension bridge over the water', hotel: 'Tashi Namgay Resort', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'Punakha Dzong between the Pho and Mo rivers'] },
    { title: 'Day 7: Ta dzong and rinpung dzong and tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe round watchtower holding the National Museum\nRinpung Dzong on the slope above the river\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Tashi Namgay Resort', highlights: ['Breakfast, then out into the Paro valley', 'The round watchtower holding the National Museum', 'Rinpung Dzong on the slope above the river'] },
    { title: 'Day 8: Haa valley (B, L)', text: 'Breakfast, then out into the Paro valley\nOver the Chele La pass at 3,988 metres\nDown into the quiet Haa valley', hotel: 'Tashi Namgay Resort', highlights: ['Breakfast, then out into the Paro valley', 'Over the Chele La pass at 3,988 metres', 'Down into the quiet Haa valley'] },
    { title: 'Day 9: Onward to Phuentsholing (B, L)', text: 'Breakfast, then the long run back south\nDown through the Chukha gorge to the plains\nOptional: Zangto Pelri Lhakhang in the town\nArrival transfer and check in for the night', hotel: 'Hotel Druk', highlights: ['Breakfast, then the long run back south', 'Down through the Chukha gorge to the plains', 'Optional: Zangto Pelri Lhakhang in the town'] },
    { title: 'Day 10: Departure from Siliguri (B)', text: 'Breakfast at the hotel and check out\nBorder formalities and transfer to Siliguri', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Border formalities and transfer to Siliguri'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bhutan', href: '/asia/bhutan' },
  { label: detail.title }
];

export const bhutanPhobjikhaSuperDeluxeBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bhutanPhobjikhaSuperDeluxeProduct = {
  slug: detail.slug,
  places: ['Phuentsholing', 'Thimphu', 'Phobjikha', 'Punakha', 'Paro'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 10,
  stops: 6,
  hotels: 6,
  cities: 6,
  activities: 7,
  transfers: 16,
  meals: 18,
  price: detail.price,
  images: cardImages
};
