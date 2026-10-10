// Nepal, Bhutan and Sikkim Grand Tour. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ksg5iycxfq01s5r36uwp5osmbacr_shutterstock_2246951467.jpg'),
  img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
  img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg'),
  img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
  img('6qgnb1v8sf4ibhrljcsve4amhmq3_darjeeling-photos.webp'),
  img('0dkc2u8egtn0z0n7hdbc79zsl2vc_nongriat-village-meghalaya.webp'),
  img('s9b6t60rn0cx6tra9s6vpj1sz0c4_darjeeling-tour-package.webp'),
  img('dk8zkftwegj6jbf180wogvm02f8w_shutterstock_684492346.jpg'),
  img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
  img('csfou3kxztfubm39810ryp5ifexy_shutterstock_1652381137.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('ksg5iycxfq01s5r36uwp5osmbacr_shutterstock_2246951467.jpg'),
  img('6qgnb1v8sf4ibhrljcsve4amhmq3_darjeeling-photos.webp'),
  img('s9b6t60rn0cx6tra9s6vpj1sz0c4_darjeeling-tour-package.webp'),
  img('dk8zkftwegj6jbf180wogvm02f8w_shutterstock_684492346.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kathmandu',
    dayLabel: 'Day 1 to 2',
    images: [
      img('ksg5iycxfq01s5r36uwp5osmbacr_shutterstock_2246951467.jpg'),
      img('5un1e0syy91seduvwab1zgifftn3_shutterstock_366785876.jpg'),
      img('vfeorrkfnc60v7ojvhmogwdj4v6p_shutterstock_223257994.jpg'),
      img('dk8zkftwegj6jbf180wogvm02f8w_shutterstock_684492346.jpg')
    ],
    dayImages: {
      1: [
        img('vc97rz8tlfx66z8lmt89gexijyw4_8581782765_ff3f72e5a6_b.jpg'),
        img('wxwrqaicar0ecnbj10z4tqhsahpb_shutterstock_162048632.jpg'),
        img('ksg5iycxfq01s5r36uwp5osmbacr_shutterstock_2246951467.jpg'),
        img('5un1e0syy91seduvwab1zgifftn3_shutterstock_366785876.jpg')
      ],
      2: [
        img('202sw23ytvjpwytk714s3hkcc9i5_shutterstock_643770787.jpg'),
        img('6sw3gdp5i7al6ry8bh55ayy4ea3t_shutterstock_643770787.jpg'),
        img('tjcqyhfk5t74wsr8n6df3ojs6mvu_49055384377_8b29638365_o.jpg'),
        img('1k8w34sazdkyyq2ejg26zapm19kr_8432255546_2c75667288_b.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Kathmandu`,
      'Arrival at Kathmandu Tribhuvan and transfer to your hotel',
      'Check in and the rest of the day free',
      'Check in and the rest of the day free',
      `${DAY_MARK}Day 2 · Kathmandu sightseeing`,
      'Breakfast, then out into Kathmandu',
      'Durbar Square and the old palace courtyards',
      'Boudhanath stupa and Pashupatinath'
    ],
    accommodation: {
      name: 'Hotel Vaishali, Kathmandu',
      description: '2 nights · Breakfast · Standard room · 3★ · Central hotel within reach of Thamel',
      images: [
        img('b6qbjngr943dpbdl2vgla0tqmsid_11132496.png'),
        img('yyv9p4dl7vrxfldpg0j6ldrhn3oq_c34ddb1e964111e9b5570242ac11000f.png'),
        img('3c5h828xze5bjvvgggsvms2817sm_8500ba98976511e7ad9c0a4cef95d023.png'),
        img('8zywk1r0oq4qjtgcuhh0mpzbz3wk_d3c7bac0594411eaa4660242ac110007.png'),
        img('42mw4l74u39q11jrio69le7pj457_d3df66de594411ea8d670242ac110005.png'),
        img('kbw6pcoxp3lgz4zclqx3x4vthmg0_da1eb2b6594411eab7e00242ac110003.png'),
        img('ct2wokqskmq3pc9lmy5ztgfo2kjh_c6e7de8a1a8111eba7e50242ac110004.png'),
        img('xkhf0w90ryhfl8ak2ukanqdo97rx_a8c2a9fe807611e98ce20242ac110006.png'),
        img('78qlgnlhmjqrai6h8mddzfer847t_c444c938964111e9b2d60242ac11000a.png'),
        img('7t9vl1ms2mdikrkn70wu40zyj9j8_29c7587a801811e8b8a40ad03efb9e28.png'),
        img('g5hvg0k3bqjpmmr7p5ft6m883d94_8b96ea4e976511e7bfa70a4cef95d023.png'),
        img('slr4c8gnotv8rtyalqznhaf23mrz_2eb199e65dc511ee835f0a58a9feac02.png'),
        img('4u6zw70z3cwceowiqd1rx7t8073z_86f71946976511e78b59025f77df004f.png'),
        img('p5ngcerle5qrthrtm2qmbrqcmt75_2092050e594511eab6ae0242ac110010.png')
      ]
    },
    activities: [
      {
        name: 'Kathmandu sightseeing tour',
        day: 2,
        optional: false,
        image: img('202sw23ytvjpwytk714s3hkcc9i5_shutterstock_643770787.jpg'),
        description: 'A guided day with Durbar Square, the stupa at Boudhanath, Swayambhunath and Pashupatinath on the Bagmati.'
      }
    ],
    program: {
      name: 'Kathmandu',
      description: 'Days in the Nepali capital, with Durbar Square, Boudhanath and Pashupatinath.',
      image: img('ksg5iycxfq01s5r36uwp5osmbacr_shutterstock_2246951467.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Paro',
    dayLabel: 'Day 3 to 4',
    images: [
      img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
      img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
      img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
      img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
    ],
    dayImages: {
      3: [
        img('unet3dsecufc4v8cka1tv9k6gerv_steptodown.com812355.jpg'),
        img('r4dreq5jqx0v2sjjwm6r9g9xvhxm_1578738831_Rinpung_Dzong_Monastery1.jpg'),
        img('xv3hvedhkq1g04vmez6l6l8h5g44_1578733577_Rinpung_Dzong_Monastery.jpg'),
        img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg')
      ],
      4: [
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg'),
        img('arryt9zia20eawdl6ai40dhg5aut_1481602641_kuil-terindah-di-asia.jpg'),
        img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
        img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · To Paro: Paro sightseeing`,
      'Breakfast and check out of your Kathmandu hotel',
      'Optional: flight Kathmandu to Paro, booked with us',
      'Arrival transfer from Paro International to your hotel',
      'Rinpung Dzong and the National Museum',
      'The shopfronts of Paro town',
      `${DAY_MARK}Day 4 · Tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face'
    ],
    accommodation: {
      name: 'Khamsum Inn, Paro, Paro',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Quiet hotel in the valley below Taktsang',
      images: [
        img('q5kqlcdrcmx955cc8we8msmlb0ub_Hotel-Khamsum%20(1).jpg'),
        img('9amu3ocnd5q4uk4bfg3h2dlc9nbk_R7.jpg'),
        img('8ii21o05v3okfgj2hqrwmzh90hiq_R3.jpg'),
        img('fp0b3mg1pp6992hhxni14mpb2o2h_R1.jpg'),
        img('sc3e9ucvki5bf7l6fwji9zml7j1n_R5.jpg'),
        img('twb2grgfcju9ab9qpm5rdvpplb15_R4.jpg'),
        img('uk37iv2svf2huuxsk61v9zvnn2nx_909cd040946711e78b59025f77df004f.jpg'),
        img('7j1oenttayx1rz1on8dibkc87r4q_R9.jpg'),
        img('ombqx8kiylz1njw9m526bt48sf08_10aaf0cab07a11eea25c0a58a9feac02.png'),
        img('udtsfvnst8mquxujct19rfjmca32_R11.jpg')
      ]
    },
    activities: [
      {
        name: 'Paro half day sightseeing tour',
        day: 3,
        optional: false,
        image: img('unet3dsecufc4v8cka1tv9k6gerv_steptodown.com812355.jpg'),
        description: 'A half day round the valley taking in Rinpung Dzong, the National Museum and the main street of Paro town.'
      },
      {
        name: 'Hike to the Tiger\'s Nest',
        day: 4,
        optional: false,
        image: img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg'),
        description: 'The climb to Taktsang, the monastery wedged into a cliff nine hundred metres above the Paro valley floor.'
      }
    ],
    program: {
      name: 'Paro',
      description: 'Days in the valley below Taktsang, with Rinpung Dzong, the National Museum and the Tiger’s Nest hike.',
      image: img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Thimphu',
    dayLabel: 'Day 5 to 6',
    images: [
      img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg'),
      img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
      img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg'),
      img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg')
    ],
    dayImages: {
      5: [
        img('9mjgmwz4uzguzddlci3crbdj5x60_Nation%20Memorial%20Chorten.jpg'),
        img('2xgygw98g58o2olcep4vlh9r5k0u_1481602683_View_of_the_National_Memorial_Chorten__Thimphu.jpg'),
        img('c5zdi543udorguyfdp6ju513rzxv_15656544270_421c572020_b.jpg'),
        img('imqbu0xbgl8bykm6i06y53tjkf4w_22423229676_75bc3a183f_b.jpg')
      ],
      6: [
        img('38kz4h1x67igl2szup6j3v7owa7v_steptodown.com744302.jpg'),
        img('056auoul5hww4jxhty1ioepx1oi7_5116835341_c68f3cb493_b.jpg'),
        img('0hlgpb14iwhgm0834fzkpbd5sgiv_8154575525_198c2ed1bb_b.jpg'),
        img('fk9rfodqaqcnh9gy9tsxw2opj4gf_1571658047_Drc_gk7VYAAMVE4.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · To Thimphu: Thimphu sightseeing`,
      'Breakfast, then north into the hills towards Thimphu',
      'The Chukha dam and the Wang Chhu gorge on the way',
      'The Memorial Chorten and the Buddha Dordenma',
      'Tashichho Dzong and the takin preserve',
      `${DAY_MARK}Day 6 · Punakha dzong`,
      'Breakfast, then out into the capital',
      'Punakha Dzong between the Pho and Mo rivers',
      'The long suspension bridge over the water'
    ],
    accommodation: {
      name: 'Hotel Taktsang, Thimphu City',
      description: '2 nights · Breakfast · Standard room · 3★ · Comfortable hotel in the capital, walkable to the clock tower',
      images: [
        img('n47t0s2vifsgno0b07huw4m68cp9_201711151332086038-096e0e64_z.jpg'),
        img('xss9f8n5p1np3xysl4fk9bjxv1kv_201711151332086038-f3e5c7bd_z.jpg'),
        img('e1kv44sddn2gj5agjbbvxkuqje79_201711151332086038-f0269b24_z.jpg'),
        img('5xbr1as4nkh14z90yn9fal3l3ak8_201711151332086038-340440-3148d8144d4811ee9e090a58a9feac02.webp'),
        img('qal92owd39bvhch43gbjziovenjg_download.png'),
        img('1mu7w8jsvqsuzuhg23i1w46ebb5w_201711151332086038-c5317585_z.jpg'),
        img('0xht2zr78te6w2cp55lllzbl41qu_201711151332086038-6cc922b44d4711eebcbd0a58a9feac02.jpg'),
        img('knhdk55kg1qp3y9lyp2i7burpcex_201711151332086038-346-3423122edf6211ed91460a58a9feac02.webp'),
        img('lm4ewwk5m05wz642c7lw8sm671xn_download%20(6).png'),
        img('bbnlfk2lopkszspmuvint5xc8p7u_bar.jpg'),
        img('73h5m6xos2isj8gniv3zkhwitgwn_restaurant-hotel-taktsang.jpg')
      ]
    },
    activities: [
      {
        name: 'Thimphu sightseeing tour',
        day: 5,
        optional: false,
        image: img('9mjgmwz4uzguzddlci3crbdj5x60_Nation%20Memorial%20Chorten.jpg'),
        description: 'A guided day round the capital with the Memorial Chorten, the Buddha Dordenma, Tashichho Dzong and the takin preserve.'
      },
      {
        name: 'Punakha sightseeing tour',
        day: 6,
        optional: false,
        image: img('38kz4h1x67igl2szup6j3v7owa7v_steptodown.com744302.jpg'),
        description: 'The fortress where Bhutan’s kings are crowned, built on the spit of land where two rivers meet below the town.'
      }
    ],
    program: {
      name: 'Thimphu',
      description: 'Days in the capital, with the Memorial Chorten, the Buddha Dordenma and Tashichho Dzong.',
      image: img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Phuentsholing',
    dayLabel: 'Day 7',
    images: [
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
    ],
    dayImages: {
      7: [
        img('l88l60hqvbtqu6e91xys6m43fw1r_Downpic.cc-43201249.jpg'),
        img('ljpqw4npv8wncod5fq1r7hw2zt5y_shutterstock_1344366731.jpg'),
        img('eljv9nfavq2ojeluvwgegg0j5t8o_shutterstock_1380814979.jpg'),
        img('l0fq7fjbnhs2rdw73cyv4fa8c62i_Phuentsholing-Market-1024x682.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · To Phuentsholing: Phuentsholing`,
      'Breakfast, then the long run back south',
      'Down through the Chukha gorge to the plains',
      'Zangto Pelri Lhakhang in the town centre',
      'The Bhutan Gate and the Torsa riverside'
    ],
    accommodation: {
      name: 'Alem Hotel & Resort, Phuntsholing',
      description: '1 night · Breakfast · Standard room · 3★ · Border town hotel on the Indian frontier',
      images: [
        img('xb0ui8y5x5wxjz4fdp2eelkzwop3_ALEM%20HOTEL%201.png'),
        img('vhwmxsf05k1b5zll1hdfgctkhzlw_ALEM%20HOTEL%20&%20RESORT%205.png'),
        img('hrne0ac1xq5ci854uv8hj866zmz2_ALEM%20HOTEL%20&%20RESORT%203.png'),
        img('n72sfstn5kuvb8qtp411ipj2m8cr_ALEM%20HOTEL%20&%20RESORT%206.png'),
        img('ckqlf4pmifsn79lh4yj5x9ayt60f_ALEM%20HOTEL%20&%20RESORt%202.png'),
        img('ty3kubkk6p85fr7v5el1m7agtfib_ALEM%20HOTEL%20&%20RESORT%204.png'),
        img('5qlfw5ho6mmsz0qwg0gwetm7pwqx_9720visit%20bhutan%20Alem%20Hotel%20and%20Resort%20Phuentsholing%2012.jpg'),
        img('wm6ngq43270xmmxvtgggew2eqp5k_ALEM%20HOTEL%20&%20RESORT%209.png'),
        img('pz67hsrfrwibbteak98y8nlv6pso_ALEM%20HOTEL%20&%20RESORT%208.png')
      ]
    },
    activities: [
      {
        name: 'Phuentsholing sightseeing tour',
        day: 7,
        optional: false,
        image: img('l88l60hqvbtqu6e91xys6m43fw1r_Downpic.cc-43201249.jpg'),
        description: 'The border town with Zangto Pelri Lhakhang, the crocodile breeding centre and the Bhutan Gate itself.'
      }
    ],
    program: {
      name: 'Phuentsholing',
      description: 'Time in the border town where Bhutan begins, with the Bhutan Gate and Kharbandi above the plains.',
      image: img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Kalimpong',
    dayLabel: 'Day 8',
    images: [
      img('46whxf3ny1cgy3x5dvql9ltvzmvm_darjeeling-trip.webp'),
      img('ch9chzfvhjaycm8zq5ziu2i0o3gf_darjeeling-photography.webp'),
      img('3bk4tps6wuus203kiwvifj8hfr36_trip-to-darjeeling.webp'),
      img('fs465f6elum58r667svsaaixz0ip_darjeeling-pictures.webp')
    ],
    dayImages: {
      8: [
        img('13ymo5r8f6snfxwwrsvdym5n99fp_Zang_Dhok_Palri_Phodang_01.jpg'),
        img('46whxf3ny1cgy3x5dvql9ltvzmvm_darjeeling-trip.webp'),
        img('ch9chzfvhjaycm8zq5ziu2i0o3gf_darjeeling-photography.webp'),
        img('3bk4tps6wuus203kiwvifj8hfr36_trip-to-darjeeling.webp')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · Onward to Kalimpong`,
      'Breakfast, then up to the Kalimpong ridge',
      'The Teesta running far below the road',
      'Optional: the Durpin monastery on the ridge',
      'Arrival transfer and check in for the night'
    ],
    accommodation: {
      name: 'Sood\'s Himalayan Vista, Darjeeling',
      description: '1 night · Breakfast · Standard room · 3★ · Quiet hotel on the ridge above the Teesta',
      images: [
        img('tp2wrf8uyxhli7vdc2dtai5jmohi_download%20(12).jpg'),
        img('v6rn7weqbh29d30kqlcu56tbm2kp_download%20(16).jpg'),
        img('xv1gpkndzj3cglzdhd4xrakgmd7i_download%20(18).jpg'),
        img('alm908r1l0500nz6yve7d232f53y_download%20(21).jpg'),
        img('mjm43dtynin7e44o3w8p9c5o2w37_download%20(15).jpg'),
        img('6fh1cw496lqjm6sy1gh4z4ruec35_download%20(17).jpg'),
        img('ousqut9brb3xerlt8jsutsz57rer_download%20(13).jpg'),
        img('i9313w6ioj2bnuwbk0fgsmkft74g_download%20(14).jpg'),
        img('n0jrq4y8kzps9xro7r37nsm6l2mp_download%20(19).jpg'),
        img('5mb2km76udqmwng28t6wji3q3p0k_download%20(20).jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Kalimpong',
      description: 'Time on the Kalimpong ridge above the Teesta, with the Durpin monastery and the orchid nurseries.',
      image: img('46whxf3ny1cgy3x5dvql9ltvzmvm_darjeeling-trip.webp')
    }
  },
  {
    letter: 'F',
    name: 'Gangtok',
    dayLabel: 'Day 9',
    images: [
      img('57va0dbfk2eg2ajiu7njv6oypi7y_dharma-chakra-centre%20-%20Copy.webp'),
      img('cif1spk52600bmunl7uec8cyvx8p_gangtok-tour-package.webp'),
      img('tzc6uzfu2z2omr34c0nq9bbldvi8_e7ca44a9-99fb-4fe9-a53f-79c0514128ec.png'),
      img('gpb655r4jc7e8dzm3mr4zyrmqjrm_rumtek-monastery-east-sikkim.webp')
    ],
    dayImages: {
      9: [
        img('lnoq5cg1jpiuadbsioyjjf057nz1_Tsomgo%20Lake%202.jpg'),
        img('j2em8empaive6elfouo2juw9i904_epsi6tih6w8ln9sdsq9yj2fv4r8k_Baba%20Mandir%201.png'),
        img('3foact1zgzyrf0n7kk4dhk2bjp7p_shutterstock_415638190.jpg'),
        img('57va0dbfk2eg2ajiu7njv6oypi7y_dharma-chakra-centre%20-%20Copy.webp')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 9 · To Gangtok: Gangtok sightseeing`,
      'Breakfast, then west into Sikkim',
      'Permit formalities at Rangpo on the Teesta',
      'Rumtek monastery above the valley',
      'The Namgyal institute and Ganesh Tok'
    ],
    accommodation: {
      name: 'The Regal, Gangtok',
      description: '1 night · Breakfast · Standard room · 3★ · Hillside hotel above MG Marg',
      images: [
        img('wuh174g6bxulwui5s8yj97twln0u_bcc183bcd4d411eb9ff80242ac110004.png'),
        img('0srviy15oq1mfjkg51y5mf5pgv8p_8ec64de66aff11e78bae02755708f0b3.png'),
        img('8994ypacv26oq0zwp42exzu1azi7_8b074d7c6aff11e7a40f02755708f0b3.png'),
        img('gu2io3a5uivtu65zp3vwao43dd93_98e95cc86aff11e7843d0224510f5e5b.png'),
        img('g5qsmoex5hi1ak83ebapn7p3lm7f_8e1904e26aff11e7a5b40a9df65c8753.png'),
        img('eglrgv8444qc776peytf21qeplzl_90109d9e666811e993220242ac110002.png'),
        img('y5shkx2ttb42za038b7o6rh6dc05_924bbe066aff11e7b3eb02755708f0b3.png'),
        img('x0liwl7hu341mnv29r8gcacpi2vr_8508574a6aff11e796240224510f5e5b.png'),
        img('gv82z3o8lulguqirpg19nmrh9i6g_ac3e1faad4d411eb876f0242ac110004.png'),
        img('t0hmdwjk3ijpgrlzz9pj4jlpcqpr_201707191128176923-7eb6f6ee7b6211e7be000a209fbd0127.png'),
        img('yz3eer142uy1xmf8ydekdoae9nar_7c14b3de666811e98d620242ac110002.png')
      ]
    },
    activities: [
      {
        name: 'Gangtok sightseeing tour',
        day: 9,
        optional: false,
        image: img('lnoq5cg1jpiuadbsioyjjf057nz1_Tsomgo%20Lake%202.jpg'),
        description: 'The Sikkimese capital with the Rumtek monastery, the Namgyal institute of Tibetology and the Ganesh Tok viewpoint.'
      }
    ],
    program: {
      name: 'Gangtok',
      description: 'Time in the Sikkimese capital, with Rumtek monastery and the ridge viewpoints.',
      image: img('57va0dbfk2eg2ajiu7njv6oypi7y_dharma-chakra-centre%20-%20Copy.webp')
    }
  },
  {
    letter: 'G',
    name: 'Darjeeling',
    dayLabel: 'Day 10 to 12',
    images: [
      img('6qgnb1v8sf4ibhrljcsve4amhmq3_darjeeling-photos.webp'),
      img('60d247qikoo9go8xab7fusfsrrvi_darjeeling-tours.webp'),
      img('n5y23t5adzl523usxqi4bbj9vnbn_darjeeling-queen-of-hills.webp'),
      img('s9b6t60rn0cx6tra9s6vpj1sz0c4_darjeeling-tour-package.webp')
    ],
    dayImages: {
      10: [
        img('roawirqeg5p324ovdsovtjojbqqt_1549275194_shutterstock_1274443372.jpg'),
        img('6eejchip2se6zjhqa4bk5puobwyr_1580994016_139583541_595697c2ee_o.jpg'),
        img('46whxf3ny1cgy3x5dvql9ltvzmvm_darjeeling-trip.webp'),
        img('ch9chzfvhjaycm8zq5ziu2i0o3gf_darjeeling-photography.webp')
      ],
      11: [
        img('nxoshg7hfg28dkc2vxm8458k7694_shutterstock_2500485541.jpg'),
        img('no9dyiumbarvh0jppslsvapsvh5m_12077980043_e555c92e11_o.jpg'),
        img('83r1dxsf65hwau3ajd20liik7lob_8416248089_56bef0a151_o.jpg'),
        img('m8kc7ns4miohpzp2s8z3nco8ffbx_1549110565_shutterstock_400800280.jpg')
      ],
      12: [
        img('46whxf3ny1cgy3x5dvql9ltvzmvm_darjeeling-trip.webp'),
        img('ch9chzfvhjaycm8zq5ziu2i0o3gf_darjeeling-photography.webp'),
        img('3bk4tps6wuus203kiwvifj8hfr36_trip-to-darjeeling.webp'),
        img('fs465f6elum58r667svsaaixz0ip_darjeeling-pictures.webp')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 10 · Onward to Darjeeling`,
      'Breakfast, then south along the ridge to Darjeeling',
      'Tea gardens dropping away on both sides',
      'Optional: the Happy Valley tea estate',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 11 · Darjeeling sightseeing`,
      'Breakfast with Kanchenjunga on the skyline',
      'Tiger Hill at sunrise for Kanchenjunga',
      'The toy train and the tea gardens at Ghum',
      `${DAY_MARK}Day 12 · Departure from Siliguri`,
      'Breakfast at the hotel and check out',
      'Border formalities and transfer to Siliguri'
    ],
    accommodation: {
      name: 'Yangs Inn, Darjeeling',
      description: '2 nights · Breakfast · Standard room · 3★ · Colonial era hotel near the Mall',
      images: [
        img('76y6gqmjlet7cjwl3fh0hll0epne_292e1d60633c11e9b2000242ac110003.jpg'),
        img('u5ex9lt90kslhotf469fu20pkr1z_reception.jpg'),
        img('pmyq1n6aex01wp0p8cejwvzc59fa_oyo-4305-yang-s-inn%20(1).jpg'),
        img('y5e0irmt72v69uctgnptd7dc71zi_oyo-4305-yang-s-inn.jpg'),
        img('wtmbdp2fqdi71qqr1kn14ukp39k8_48f5ca60-5667-4044-9ee9-423419c4.jpg'),
        img('662uejmwfu4hh167w1282a320o42_oyo-4305-yang-s-inn%20(3).jpg'),
        img('heugc3mhm2r7h2e5nkpm88efjeg3_oyo-4305-yang-s-inn%20(4).jpg'),
        img('v1ru56o9tey8zew6ws3sy8k6366o_oyo-4305-yang-s-inn%20(2).jpg'),
        img('0bf0odi81dbgm5m9a7gt8owlymy2_ec0e1becb8f911eea11e0a58a9feac02.jpg'),
        img('sdejjem5b38j9spjpiilfothaaym_70a82b8f-1a90-4dc5-b644-9907a9d7.jpg'),
        img('p7ybnt8k0f8dn4odntqyrom0yhw9_7d5ee82c-4e7c-4aaf-a3b3-86880638.jpg'),
        img('ck3ef41sra63cchly5fvqou6ozu3_2daecf3c118611eda2000a58a9feac02.jpg')
      ]
    },
    activities: [
      {
        name: 'Darjeeling sightseeing tour',
        day: 11,
        optional: false,
        image: img('nxoshg7hfg28dkc2vxm8458k7694_shutterstock_2500485541.jpg'),
        description: 'Tiger Hill at sunrise for Kanchenjunga, the Himalayan Mountaineering Institute and the toy train at Ghum.'
      }
    ],
    program: {
      name: 'Darjeeling',
      description: 'Days in the old hill station, with Tiger Hill at sunrise and the tea gardens below.',
      image: img('6qgnb1v8sf4ibhrljcsve4amhmq3_darjeeling-photos.webp')
    }
  }
];

const detail = {
  slug: 'nepal-bhutan-and-sikkim-grand-tour',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Nepal, Bhutan and Sikkim Grand Tour',
  alt: 'Himalayan ridges seen on the flight into Paro',
  days: '12 days / 11 nights',
  stations: '7 stops',
  transport: 'Private vehicles, a licensed guide and the Kathmandu to Paro flight',
  tag: 'Culture',
  tags: ['Culture', 'Multi-country'],
  price: 90656,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kathmandu', 'Paro', 'Thimphu', 'Phuentsholing', 'Kalimpong', 'Gangtok', 'Darjeeling'],
  stats: { days: 12, cities: 7, hotels: 7, activities: 8, transfers: 18 },
  gallery: heroGallery,
  services: [
    ['7 hotels', 'Accommodation'],
    ['8 experiences', 'Activities'],
    ['18 transfers', 'Transport'],
    ['11 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Twelve days, three countries and one flight. Kathmandu, the Bhutanese dzongs, then overland through Sikkim to Darjeeling.',
    quoteMore: 'Pack for two climates. Kathmandu and Siliguri are warm at sea level while Paro and Gangtok are cold after dark all year.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '12 days through Kathmandu, Paro, Thimphu, Phuentsholing, Kalimpong, Gangtok, Darjeeling, with 11 nights, daily breakfast and a licensed Bhutanese guide: the kathmandu sightseeing tour, the paro half day sightseeing tour, the hike to the tiger\'s nest, the thimphu sightseeing tour.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 11 nights across Kathmandu, Paro, Thimphu, Phuentsholing, Kalimpong, Gangtok, Darjeeling with daily breakfast; all land transfers by private vehicle; the Kathmandu sightseeing tour; the Paro half day sightseeing tour; the Hike to the Tiger\'s Nest; the Thimphu sightseeing tour; the Punakha sightseeing tour; the Phuentsholing sightseeing tour; the Gangtok sightseeing tour; the Darjeeling sightseeing tour; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international flights; the Kathmandu to Paro flight; Nepal, Bhutan and Sikkim permits and visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Kathmandu (Arrival)', text: 'Arrival at Kathmandu Tribhuvan and transfer to your hotel\nCheck in and the rest of the day free\nCheck in and the rest of the day free', hotel: 'Hotel Vaishali', highlights: ['Arrival at Kathmandu Tribhuvan and transfer to your hotel', 'Check in and the rest of the day free', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Kathmandu sightseeing (B)', text: 'Breakfast, then out into Kathmandu\nDurbar Square and the old palace courtyards\nBoudhanath stupa and Pashupatinath', hotel: 'Hotel Vaishali', highlights: ['Breakfast, then out into Kathmandu', 'Durbar Square and the old palace courtyards', 'Boudhanath stupa and Pashupatinath'] },
    { title: 'Day 3: To Paro: Paro sightseeing (B)', text: 'Breakfast and check out of your Kathmandu hotel\nOptional: flight Kathmandu to Paro, booked with us\nArrival transfer from Paro International to your hotel\nRinpung Dzong and the National Museum\nThe shopfronts of Paro town', hotel: 'Khamsum Inn, Paro', highlights: ['Breakfast and check out of your Kathmandu hotel', 'Optional: flight Kathmandu to Paro, booked with us', 'Arrival transfer from Paro International to your hotel'] },
    { title: 'Day 4: Tiger\'s nest hike (B)', text: 'Breakfast, then out into the Paro valley\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Khamsum Inn, Paro', highlights: ['Breakfast, then out into the Paro valley', 'The climb up the pine slope to Taktsang', 'The monastery wedged into the cliff face'] },
    { title: 'Day 5: To Thimphu: Thimphu sightseeing (B)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and the takin preserve', hotel: 'Hotel Taktsang', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'The Memorial Chorten and the Buddha Dordenma'] },
    { title: 'Day 6: Punakha dzong (B)', text: 'Breakfast, then out into the capital\nPunakha Dzong between the Pho and Mo rivers\nThe long suspension bridge over the water', hotel: 'Hotel Taktsang', highlights: ['Breakfast, then out into the capital', 'Punakha Dzong between the Pho and Mo rivers', 'The long suspension bridge over the water'] },
    { title: 'Day 7: To Phuentsholing: Phuentsholing (B)', text: 'Breakfast, then the long run back south\nDown through the Chukha gorge to the plains\nZangto Pelri Lhakhang in the town centre\nThe Bhutan Gate and the Torsa riverside', hotel: 'Alem Hotel & Resort', highlights: ['Breakfast, then the long run back south', 'Down through the Chukha gorge to the plains', 'Zangto Pelri Lhakhang in the town centre'] },
    { title: 'Day 8: Onward to Kalimpong (B)', text: 'Breakfast, then up to the Kalimpong ridge\nThe Teesta running far below the road\nOptional: the Durpin monastery on the ridge\nArrival transfer and check in for the night', hotel: 'Sood\'s Himalayan Vista', highlights: ['Breakfast, then up to the Kalimpong ridge', 'The Teesta running far below the road', 'Optional: the Durpin monastery on the ridge'] },
    { title: 'Day 9: To Gangtok: Gangtok sightseeing (B)', text: 'Breakfast, then west into Sikkim\nPermit formalities at Rangpo on the Teesta\nRumtek monastery above the valley\nThe Namgyal institute and Ganesh Tok', hotel: 'The Regal', highlights: ['Breakfast, then west into Sikkim', 'Permit formalities at Rangpo on the Teesta', 'Rumtek monastery above the valley'] },
    { title: 'Day 10: Onward to Darjeeling (B)', text: 'Breakfast, then south along the ridge to Darjeeling\nTea gardens dropping away on both sides\nOptional: the Happy Valley tea estate\nArrival transfer and check in for the night', hotel: 'Yangs Inn', highlights: ['Breakfast, then south along the ridge to Darjeeling', 'Tea gardens dropping away on both sides', 'Optional: the Happy Valley tea estate'] },
    { title: 'Day 11: Darjeeling sightseeing (B)', text: 'Breakfast with Kanchenjunga on the skyline\nTiger Hill at sunrise for Kanchenjunga\nThe toy train and the tea gardens at Ghum', hotel: 'Yangs Inn', highlights: ['Breakfast with Kanchenjunga on the skyline', 'Tiger Hill at sunrise for Kanchenjunga', 'The toy train and the tea gardens at Ghum'] },
    { title: 'Day 12: Departure from Siliguri (B)', text: 'Breakfast at the hotel and check out\nBorder formalities and transfer to Siliguri', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Border formalities and transfer to Siliguri'] }
  ],
  outro: 'Not included: international flights; the Kathmandu to Paro flight; Nepal, Bhutan and Sikkim permits and visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bhutan', href: '/asia/bhutan' },
  { label: detail.title }
];

export const nepalBhutanAndSikkimGrandBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const nepalBhutanAndSikkimGrandProduct = {
  slug: detail.slug,
  places: ['Kathmandu', 'Paro', 'Thimphu', 'Phuentsholing', 'Kalimpong', 'Gangtok', 'Darjeeling'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 12,
  stops: 7,
  hotels: 7,
  cities: 7,
  activities: 8,
  transfers: 18,
  meals: 11,
  price: detail.price,
  images: cardImages
};
