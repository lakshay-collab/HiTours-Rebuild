// Best of Bhutan with Taktsang: Super Deluxe. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
  img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
  img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg'),
  img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
  img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
  img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
  img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg'),
  img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
  img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
  img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('wzk43phe3f2n5pie7psn6bf6ehe8_torsa%201.jpg'),
  img('q8phludak72pr8ojnm2cmpi4w33n_1481602623_Paro-Kyichu-Lhakhang299.jpg'),
  img('rart59u3umfaty65dt0fpejnn4ex_Drukgyel%20Dzong.jpg'),
  img('msz1iztswlp21hlu64vxiq9516bj_mount-jomolhari.jpgxDV.jpg')
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
        img('yiup7qro2cobgjuqbppy9xaxknbw_pic3.jpg'),
        img('wzk43phe3f2n5pie7psn6bf6ehe8_torsa%201.jpg'),
        img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
        img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg')
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
      img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg'),
      img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
      img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg'),
      img('csfou3kxztfubm39810ryp5ifexy_shutterstock_1652381137.jpg')
    ],
    dayImages: {
      2: [
        img('cdl5xosospzimjwzry1vumk497kb_The-Romantic-Nature-Park-of-Thimphu-Ludrong-Memorial-Garden.jpg'),
        img('o4xiotph7os69ac0uxsmaew06pbw_1621019442_shutterstock_1187906419.jpg'),
        img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg'),
        img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg')
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
      image: img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Punakha',
    dayLabel: 'Day 4 to 5',
    images: [
      img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
      img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
      img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg'),
      img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg')
    ],
    dayImages: {
      4: [
        img('38kz4h1x67igl2szup6j3v7owa7v_steptodown.com744302.jpg'),
        img('056auoul5hww4jxhty1ioepx1oi7_5116835341_c68f3cb493_b.jpg'),
        img('0hlgpb14iwhgm0834fzkpbd5sgiv_8154575525_198c2ed1bb_b.jpg'),
        img('fk9rfodqaqcnh9gy9tsxw2opj4gf_1571658047_Drc_gk7VYAAMVE4.jpg')
      ],
      5: [
        img('hwdpzwlcu41cs2x6cq1rpgsee8zq_Gangtey%20Goemba%20Buddhist%20monastery%201.jpg'),
        img('j6mdu0tk28hq758kizrzzcm2hb9z_Bhutan-Dana_Scheffler-1.png'),
        img('tu7006jnl2qdcjom4vk9czur2rz7_1621019190_shutterstock_197981387.jpg'),
        img('lmylwwkh8qs7zmhzxppfsordx82s_shutterstock_684974815.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · To Punakha: Punakha Dzong`,
      'Breakfast, then east over the Dochula pass',
      'The hundred and eight chortens at the top',
      'Punakha Dzong between the Pho and Mo rivers',
      'The long suspension bridge over the water',
      `${DAY_MARK}Day 5 · Gangtey`,
      'Breakfast in the warm Punakha valley',
      'Gangtey Goemba on its low ridge',
      'The crane valley spread out below'
    ],
    accommodation: {
      name: 'Hotel Rivervalley, Punakha',
      description: '2 nights · Breakfast · Standard room · 3★ · Riverside hotel in the warm old winter capital',
      images: [
        img('48sbqdfd62yprtyqeein5tw8ff44_y48c0273.jpg'),
        img('nbiy2klsy4vccrebcl42jz67m7nk_66c5c6ce.png'),
        img('wrblv2mtrt8970ayecsyobwu2fgg_2d1f656b.png'),
        img('6udjeko5hifga92x0x4o1syya994_41e25ab2.png'),
        img('vgel99h62hbr8ko8rcbpk0q38tu2_4183e25c.png'),
        img('42hvmhcqd8s8lpjc1yh4vg5ijj6k_ba3114a8.png'),
        img('xsnkdyrysglqpxxnr2yrghhwnz0j_ae99f0ce.png'),
        img('fxdqoq3nrf7nkimzxcs45sefvins_b72c20d3.png')
      ]
    },
    activities: [
      {
        name: 'Punakha sightseeing tour',
        day: 4,
        optional: false,
        image: img('38kz4h1x67igl2szup6j3v7owa7v_steptodown.com744302.jpg'),
        description: 'The fortress where Bhutan’s kings are crowned, built on the spit of land where two rivers meet below the town.'
      },
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
      description: 'Days in the warm old winter capital, with the Dzong between two rivers and the suspension bridge.',
      image: img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Paro',
    dayLabel: 'Day 6 to 7',
    images: [
      img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
      img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
      img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
      img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg')
    ],
    dayImages: {
      6: [
        img('94bhu1r9yb0mjh5ypvuhjgg2dlgo_Drukgyel%20Dzong%203.jpg'),
        img('q8phludak72pr8ojnm2cmpi4w33n_1481602623_Paro-Kyichu-Lhakhang299.jpg'),
        img('rart59u3umfaty65dt0fpejnn4ex_Drukgyel%20Dzong.jpg'),
        img('msz1iztswlp21hlu64vxiq9516bj_mount-jomolhari.jpgxDV.jpg')
      ],
      7: [
        img('gooh6qmdymk3a1sxb9077xxgevgd_Rinpung%20Dzong%201.jpg'),
        img('lvrrucang7e4i29fjjrr5dv1hfbg_1481602680_Ta_Dzong_museum.jpg'),
        img('40nfujj31s5rphnc2usp8a680fzp_1571657529_1280px-Rinpung_Dzong__Bhutan_01.jpg'),
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · To Paro: Paro and Kyichu Lhakhang`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'A guided round of the Paro valley',
      'Kyichu Lhakhang, among the oldest temples in Bhutan',
      `${DAY_MARK}Day 7 · Ta dzong and rinpung dzong and tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The round watchtower holding the National Museum',
      'Rinpung Dzong on the slope above the river',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face'
    ],
    accommodation: {
      name: 'Tashi Namgay Resort, Paro',
      description: '2 nights · Breakfast · Standard room · 4★ · Quiet hotel in the valley below Taktsang',
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
        name: 'Paro sightseeing with Kyichu Lhakhang',
        day: 6,
        optional: false,
        image: img('94bhu1r9yb0mjh5ypvuhjgg2dlgo_Drukgyel%20Dzong%203.jpg'),
        description: 'A guided day around Paro finishing at Kyichu Lhakhang, one of the oldest temples standing in Bhutan.'
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
      }
    ],
    program: {
      name: 'Paro',
      description: 'Days in the valley below Taktsang, with Rinpung Dzong, the National Museum and the Tiger’s Nest hike.',
      image: img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Phuentsholing',
    dayLabel: 'Day 8 to 9',
    images: [
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg')
    ],
    dayImages: {
      8: [
        img('l88l60hqvbtqu6e91xys6m43fw1r_Downpic.cc-43201249.jpg'),
        img('ljpqw4npv8wncod5fq1r7hw2zt5y_shutterstock_1344366731.jpg'),
        img('eljv9nfavq2ojeluvwgegg0j5t8o_shutterstock_1380814979.jpg'),
        img('l0fq7fjbnhs2rdw73cyv4fa8c62i_Phuentsholing-Market-1024x682.jpg')
      ],
      9: [
        img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
        img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
        img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
        img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · To Phuentsholing: Phuentsholing`,
      'Breakfast, then the long run back south',
      'Down through the Chukha gorge to the plains',
      'Zangto Pelri Lhakhang in the town centre',
      'The Bhutan Gate and the Torsa riverside',
      `${DAY_MARK}Day 9 · Departure from Phuentsholing`,
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
      {
        name: 'Phuentsholing sightseeing tour',
        day: 8,
        optional: false,
        image: img('l88l60hqvbtqu6e91xys6m43fw1r_Downpic.cc-43201249.jpg'),
        description: 'The border town with Zangto Pelri Lhakhang, the crocodile breeding centre and the Bhutan Gate itself.'
      }
    ],
    program: {
      name: 'Phuentsholing',
      description: 'Time in the border town where Bhutan begins, with the Bhutan Gate and Kharbandi above the plains.',
      image: img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-bhutan-with-taktsang-super-deluxe',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Bhutan with Taktsang: Super Deluxe',
  alt: 'Four star resort garden below the Paro hills',
  days: '9 days / 8 nights',
  stations: '5 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Luxury',
  tags: ['Luxury', 'Culture'],
  price: 83600,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuentsholing', 'Thimphu', 'Punakha', 'Paro', 'Phuentsholing'],
  stats: { days: 9, cities: 5, hotels: 5, activities: 7, transfers: 14 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['14 transfers', 'Transport'],
    ['15 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Our fullest western circuit in four star hotels, with the Gangtey day and a Phuentsholing tour on the way out.',
    quoteMore: 'The last day includes a Phuentsholing tour, so you are not just sitting at the border. Zangto Pelri is worth the half hour.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '9 days through Phuentsholing, Thimphu, Punakha, Paro, with 8 nights, Breakfast and dinner each day and a licensed Bhutanese guide: the thimphu sightseeing with simtokha dzong, the punakha sightseeing tour, the gangtey and the phobjikha valley, the paro sightseeing with kyichu lhakhang.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 8 nights across Phuentsholing, Thimphu, Punakha, Paro with Breakfast and dinner each day; all land transfers by private vehicle; the Thimphu sightseeing with Simtokha Dzong; the Punakha sightseeing tour; the Gangtey and the Phobjikha valley; the Paro sightseeing with Kyichu Lhakhang; the Ta Dzong and Rinpung Dzong; the Hike to the Tiger\'s Nest; the Phuentsholing sightseeing tour; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuentsholing (L)', text: 'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing\nBorder formalities at the Bhutan Gate\nCheck in and the rest of the day free', hotel: 'Hotel Ga Me Ga', highlights: ['Arrival at Bagdogra or Siliguri and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Onward to Thimphu (B, L)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nOptional: the Zorig Chusum school of arts\nArrival transfer and check in for the night', hotel: 'Hotel Osel', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'Optional: the Zorig Chusum school of arts'] },
    { title: 'Day 3: Thimphu and simtokha (B, L)', text: 'Breakfast, then out into the capital\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and Simtokha Dzong', hotel: 'Hotel Osel', highlights: ['Breakfast, then out into the capital', 'The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and Simtokha Dzong'] },
    { title: 'Day 4: To Punakha: Punakha Dzong (B, L)', text: 'Breakfast, then east over the Dochula pass\nThe hundred and eight chortens at the top\nPunakha Dzong between the Pho and Mo rivers\nThe long suspension bridge over the water', hotel: 'Hotel Rivervalley', highlights: ['Breakfast, then east over the Dochula pass', 'The hundred and eight chortens at the top', 'Punakha Dzong between the Pho and Mo rivers'] },
    { title: 'Day 5: Gangtey (B, L)', text: 'Breakfast in the warm Punakha valley\nGangtey Goemba on its low ridge\nThe crane valley spread out below', hotel: 'Hotel Rivervalley', highlights: ['Breakfast in the warm Punakha valley', 'Gangtey Goemba on its low ridge', 'The crane valley spread out below'] },
    { title: 'Day 6: To Paro: Paro and Kyichu Lhakhang (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nA guided round of the Paro valley\nKyichu Lhakhang, among the oldest temples in Bhutan', hotel: 'Tashi Namgay Resort', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'A guided round of the Paro valley'] },
    { title: 'Day 7: Ta dzong and rinpung dzong and tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe round watchtower holding the National Museum\nRinpung Dzong on the slope above the river\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Tashi Namgay Resort', highlights: ['Breakfast, then out into the Paro valley', 'The round watchtower holding the National Museum', 'Rinpung Dzong on the slope above the river'] },
    { title: 'Day 8: To Phuentsholing: Phuentsholing (B)', text: 'Breakfast, then the long run back south\nDown through the Chukha gorge to the plains\nZangto Pelri Lhakhang in the town centre\nThe Bhutan Gate and the Torsa riverside', hotel: 'Hotel Druk', highlights: ['Breakfast, then the long run back south', 'Down through the Chukha gorge to the plains', 'Zangto Pelri Lhakhang in the town centre'] },
    { title: 'Day 9: Departure from Phuentsholing (B)', text: 'Breakfast at the hotel and check out\nBorder formalities and transfer to Siliguri', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Border formalities and transfer to Siliguri'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bhutan', href: '/asia/bhutan' },
  { label: detail.title }
];

export const bestOfBhutanTaktsangSuperDeluxeBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfBhutanTaktsangSuperDeluxeProduct = {
  slug: detail.slug,
  places: ['Phuentsholing', 'Thimphu', 'Punakha', 'Paro'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 7,
  transfers: 14,
  meals: 15,
  price: detail.price,
  images: cardImages
};
