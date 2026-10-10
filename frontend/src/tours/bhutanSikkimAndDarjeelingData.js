// Bhutan, Sikkim and Darjeeling. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
  img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg'),
  img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
  img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
  img('xb59wm2y3fh5erkd1qwebge20qf1_gangtok-tour-packages.webp'),
  img('f7uzdvpkg6s6ehhmuk83j7w78dqu_darjeeling.webp'),
  img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
  img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg'),
  img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
  img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg'),
  img('xb59wm2y3fh5erkd1qwebge20qf1_gangtok-tour-packages.webp'),
  img('f7uzdvpkg6s6ehhmuk83j7w78dqu_darjeeling.webp'),
  img('0dkc2u8egtn0z0n7hdbc79zsl2vc_nongriat-village-meghalaya.webp')
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
        img('yiup7qro2cobgjuqbppy9xaxknbw_pic3.jpg'),
        img('wzk43phe3f2n5pie7psn6bf6ehe8_torsa%201.jpg'),
        img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
        img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Phuentsholing`,
      'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing',
      'Border formalities at the Bhutan Gate',
      'Check in and the rest of the day free'
    ],
    accommodation: {
      name: 'Alem Hotel & Resort, Bhutan, Phuntsholing',
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
    dayLabel: 'Day 2',
    images: [
      img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
      img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg'),
      img('csfou3kxztfubm39810ryp5ifexy_shutterstock_1652381137.jpg'),
      img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg')
    ],
    dayImages: {
      2: [
        img('xguiebm2y88fnap7eww10g8cwpvc_1578661243_simply.jpg'),
        img('z1nao5xw3j8otdqp9mapxinwhbc8_43467023271_24c0307027_b.jpg'),
        img('wpd0woa96sv8ztpl35qc0pohtx5e_shutterstock_1698546493.jpg'),
        img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Onward to Thimphu`,
      'Breakfast, then north into the hills towards Thimphu',
      'The Chukha dam and the Wang Chhu gorge on the way',
      'Optional: the Zorig Chusum school of arts',
      'Arrival transfer and check in for the night'
    ],
    accommodation: {
      name: 'Forest Boutique, Thimphu City',
      description: '1 night · Breakfast · Standard room · 3★ · Comfortable hotel in the capital, walkable to the clock tower',
      images: [
        img('0jmhncfthbwg7veihsbti5jnqdwc_xugz5vg4mpmzb13moklxsm6jav27_03-1-scaled%20copy.jpg'),
        img('7qxq3pn5fbgm3q31j26sujtdwkit_044-scaled.jpg'),
        img('hbbyvwgqhtqbp60s9yb0s98e1e8a_06-2-scaled.jpg'),
        img('uui2a7icqan259yrzsb213xb79my_hp74y9qzh0b8hhnbm09yrz6abm46_016-scaled%20copy.jpg'),
        img('jutb45auzwrsofd0jnjbn76ipqi2_1y1g9te3x10lod7y4uzt35469ij0_015-scaled%20copy.jpg'),
        img('cxqrkos0xdba3hxdgcit78w2fdpw_ieds25oc6cibkbwi8e9o10p5a4km_013-scaled%20copy.jpg'),
        img('a67snidctr2pvndbaun6icvh2smt_gh09wij4qgjn9ll4dvl8cfqjj2nt_019-scaled%20copy.jpg'),
        img('8ivabl7tsoao6408x76xp47pun0w_63c279tr22qa2ltinjj0xb0wh3wt_047-scaled%20copy.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Thimphu',
      description: 'Time in the capital, with the Memorial Chorten, the Buddha Dordenma and Tashichho Dzong.',
      image: img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Paro',
    dayLabel: 'Day 3 to 4',
    images: [
      img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
      img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
      img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
      img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg')
    ],
    dayImages: {
      3: [
        img('9mjgmwz4uzguzddlci3crbdj5x60_Nation%20Memorial%20Chorten.jpg'),
        img('2xgygw98g58o2olcep4vlh9r5k0u_1481602683_View_of_the_National_Memorial_Chorten__Thimphu.jpg'),
        img('c5zdi543udorguyfdp6ju513rzxv_15656544270_421c572020_b.jpg'),
        img('imqbu0xbgl8bykm6i06y53tjkf4w_22423229676_75bc3a183f_b.jpg')
      ],
      4: [
        img('gooh6qmdymk3a1sxb9077xxgevgd_Rinpung%20Dzong%201.jpg'),
        img('lvrrucang7e4i29fjjrr5dv1hfbg_1481602680_Ta_Dzong_museum.jpg'),
        img('40nfujj31s5rphnc2usp8a680fzp_1571657529_1280px-Rinpung_Dzong__Bhutan_01.jpg'),
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · To Paro: Thimphu sightseeing`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'The Memorial Chorten and the Buddha Dordenma',
      'Tashichho Dzong and the takin preserve',
      `${DAY_MARK}Day 4 · Ta dzong and rinpung dzong and tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The round watchtower holding the National Museum',
      'Rinpung Dzong on the slope above the river',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face'
    ],
    accommodation: {
      name: 'Paro deluxe hotel, Paro',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Quiet hotel in the valley below Taktsang',
      images: [
        img('jwvjc9c6gv6d2flblfjvlh1rj9wg_m780z73v60sekafjxeygt2l3crpk_Tiger\'s_20Nest_20Monastery_20in_20Paro.png'),
        img('x67l1oikuuxtjoc94h2c4f8mgt39_lvjhy40355965uvaqabp062t0vmv_bhutan_20tour_20package_20from_20jaigaon.png'),
        img('59uby0xmymw793fk5zvxds5l7q2e_3keovru0zv94ws0zm81c5r2ce5x1_tsomgo_20lake.png'),
        img('2jneg4hedfigansafe21fjbw1ewf_w2y7ot8gkxsxcrjl3sx5n5ma1tvz_Tiger\'s_20Nest_20Monastery_20adorned_20with_20colourful_20flags.png'),
        img('q6x3x0dvweggex7xmpnoj4lpnhqc_5zr4lm768yao2e9i87vxtxpe7p2v_shutterstock_1036479649.png'),
        img('c95zgwsj5o4k0ba27tu5blbhv78i_shutterstock_426131383.jpg')
      ]
    },
    activities: [
      {
        name: 'Thimphu sightseeing tour',
        day: 3,
        optional: false,
        image: img('9mjgmwz4uzguzddlci3crbdj5x60_Nation%20Memorial%20Chorten.jpg'),
        description: 'A guided day round the capital with the Memorial Chorten, the Buddha Dordenma, Tashichho Dzong and the takin preserve.'
      },
      {
        name: 'Ta Dzong and Rinpung Dzong',
        day: 4,
        optional: false,
        image: img('gooh6qmdymk3a1sxb9077xxgevgd_Rinpung%20Dzong%201.jpg'),
        description: 'The round watchtower that now holds the National Museum, and the whitewashed Rinpung fortress above the river.'
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
      image: img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Phuentsholing',
    dayLabel: 'Day 5',
    images: [
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg')
    ],
    dayImages: {
      5: [
        img('t524u3xv63svk6fkf5xqyvn08j3g_mandir.jpg'),
        img('ljpqw4npv8wncod5fq1r7hw2zt5y_shutterstock_1344366731.jpg'),
        img('khf8y1lpqxenviw5vczf0uh2ytj0_Zangto_Pelri_Lhakhang,_Phuentsholing_during_LGFC_-_Bhutan_2019_(14).jpg'),
        img('r216cx5wtx6y2mlcx31wzb1avzpz_Palden_Tashi_Chholing_Shedra_01.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Onward to Phuentsholing`,
      'Breakfast, then the long run back south',
      'Down through the Chukha gorge to the plains',
      'Optional: Zangto Pelri Lhakhang in the town',
      'Arrival transfer and check in for the night'
    ],
    accommodation: {
      name: 'Meto Pema Hotel, Phuentsholing, Phuntsholing',
      description: '1 night · Breakfast · Standard room · 3★ · Border town hotel on the Indian frontier',
      images: [
        img('jvsj1mo3z7syibtze5hp33urjgvm_banner_2.jpg'),
        img('yizwu8lwffe3ypfwui8fsbr1owzr_lobby_pic.jpg'),
        img('17akakniwi6zon4vlordyq59qf55_Room_3.jpg'),
        img('sa3beas1crxmfb0q4ky7xt3hgcco_banner_4.jpg'),
        img('9iq0rwl7nto3yvhxsbwp8xq6xm0h_482732061.webp'),
        img('lt1t9hqbes7924p1x2ejgnvvffge_king_suite.jpg'),
        img('a6gq2kawj6mcbrx2o2aw34dfsmc4_bar-pic.jpg'),
        img('2byuwy023to85xadaiwtat0akqq6_king.jpg'),
        img('nwulrwfzevs293qnfxmtuvhupwic_482730465.webp'),
        img('mlpzqzcxatnrb9xyewyn8mhnkdzw_banner_3.jpg')
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
    letter: 'E',
    name: 'Gangtok',
    dayLabel: 'Day 6 to 8',
    images: [
      img('0dkc2u8egtn0z0n7hdbc79zsl2vc_nongriat-village-meghalaya.webp'),
      img('8qcin89ktg3rqi14gx5oxyk86d77_mahatma-gandhi-marg-gangtok.webp'),
      img('dw3yf8ac4zjosr4zbp5259gx1wg4_gangtok-trip.webp'),
      img('0zgpyxr3cbcoq3r3bza0t4oz5pcv_nathula-pass-in-sikkim.webp')
    ],
    dayImages: {
      6: [
        img('kgtx3y0qfw9uwg8djxiwsj6vqajr_21514854359_c795d1008b_b.jpg'),
        img('h75y6hiojl1u3hugmsbu4ih1ddaz_shutterstock_1847697862.jpg'),
        img('0dkc2u8egtn0z0n7hdbc79zsl2vc_nongriat-village-meghalaya.webp'),
        img('8qcin89ktg3rqi14gx5oxyk86d77_mahatma-gandhi-marg-gangtok.webp')
      ],
      7: [
        img('i868np2r9mupwmbmb0n4kwjeiz08_shutterstock_2322338265.jpg'),
        img('2p7y1cfsvqj8tw4wx8duoelu8va5_shutterstock_661867516.jpg'),
        img('3bcwl90vkn6jpnqdkvwhb4b47ogw_t1.png'),
        img('a4s5ef3qr7suuwizurlddrja8gei_QNfE3QEpThCU.jpg')
      ],
      8: [
        img('lnoq5cg1jpiuadbsioyjjf057nz1_Tsomgo%20Lake%202.jpg'),
        img('j2em8empaive6elfouo2juw9i904_epsi6tih6w8ln9sdsq9yj2fv4r8k_Baba%20Mandir%201.png'),
        img('3foact1zgzyrf0n7kk4dhk2bjp7p_shutterstock_415638190.jpg'),
        img('0dkc2u8egtn0z0n7hdbc79zsl2vc_nongriat-village-meghalaya.webp')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Onward to Gangtok`,
      'Breakfast, then west into Sikkim',
      'Permit formalities at Rangpo on the Teesta',
      'Optional: the ropeway over the ridge',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 7 · Gangtok sightseeing`,
      'Breakfast, then out into Gangtok',
      'Rumtek monastery above the valley',
      'The Namgyal institute and Ganesh Tok',
      `${DAY_MARK}Day 8 · Gangtok sightseeing`,
      'Breakfast, then out into Gangtok',
      'Rumtek monastery above the valley',
      'The Namgyal institute and Ganesh Tok'
    ],
    accommodation: {
      name: 'The Royal Heritage Gangtok, Gangtok',
      description: '3 nights · Breakfast · Standard room · 3★ · Hillside hotel above MG Marg',
      images: [
        img('dytwp8kzrqrinvjppgy0msqsfh77_16960777541.jpg'),
        img('ndd0ktixyeubc6ubweeon4te5nr6_16960777723.jpg'),
        img('98jlxn698izm83al824qewxavf9b_16960780725.jpg'),
        img('tkatfjtta8frqc024jg3xjiqlni2_16960780276.jpg'),
        img('jap1vrmalkmg33d00yzh117ltlyx_16960777652.jpg'),
        img('l2aartfxlklmbfrowehnztnxyven_169607782513.jpg'),
        img('5dj1rjdnvrlqxsv9qjkv7mpp3ep5_16990967353.jpg'),
        img('rihgwwhwvxkycdv2551n3uxtdden_169607792726.jpg'),
        img('576o3wi9esautvf0nscl66pm1yrr_16960780032.jpg'),
        img('tlblo7f3lw6u1mr8gkrmx7oroz47_169607781912.jpg'),
        img('7cj1ncutjabe32kwid7l7xgoldj7_16960779981.jpg')
      ]
    },
    activities: [
      {
        name: 'Gangtok sightseeing tour',
        day: 7,
        optional: false,
        image: img('i868np2r9mupwmbmb0n4kwjeiz08_shutterstock_2322338265.jpg'),
        description: 'The Sikkimese capital with the Rumtek monastery, the Namgyal institute of Tibetology and the Ganesh Tok viewpoint.'
      },
      {
        name: 'Gangtok sightseeing tour',
        day: 8,
        optional: false,
        image: img('lnoq5cg1jpiuadbsioyjjf057nz1_Tsomgo%20Lake%202.jpg'),
        description: 'The Sikkimese capital with the Rumtek monastery, the Namgyal institute of Tibetology and the Ganesh Tok viewpoint.'
      }
    ],
    program: {
      name: 'Gangtok',
      description: 'Days in the Sikkimese capital, with Rumtek monastery and the ridge viewpoints.',
      image: img('0dkc2u8egtn0z0n7hdbc79zsl2vc_nongriat-village-meghalaya.webp')
    }
  },
  {
    letter: 'F',
    name: 'Darjeeling',
    dayLabel: 'Day 9 to 11',
    images: [
      img('fs465f6elum58r667svsaaixz0ip_darjeeling-pictures.webp'),
      img('6qgnb1v8sf4ibhrljcsve4amhmq3_darjeeling-photos.webp'),
      img('60d247qikoo9go8xab7fusfsrrvi_darjeeling-tours.webp'),
      img('n5y23t5adzl523usxqi4bbj9vnbn_darjeeling-queen-of-hills.webp')
    ],
    dayImages: {
      9: [
        img('6eejchip2se6zjhqa4bk5puobwyr_1580994016_139583541_595697c2ee_o.jpg'),
        img('63ykweldzxr2xtrknx923rao07nl_1580994305_St_Andrew\'s_Church_2017.jpg'),
        img('zmjg8129930ibn2um8bx14lmyor6_1549115665_shutterstock_87852172.jpg'),
        img('hezw9x0rdbfkazazzdtvwc382zpo_8716424889_34334b5b04_o.jpg')
      ],
      10: [
        img('xu94yg4mnre6wcz6hcvk8v8jbhjg_Peace%20Pagoda.jpg'),
        img('no9dyiumbarvh0jppslsvapsvh5m_12077980043_e555c92e11_o.jpg'),
        img('1mev6c1ps65f9ebn1kv6vdxjqatc_shutterstock_1040248168.jpg'),
        img('m8kc7ns4miohpzp2s8z3nco8ffbx_1549110565_shutterstock_400800280.jpg')
      ],
      11: [
        img('fs465f6elum58r667svsaaixz0ip_darjeeling-pictures.webp'),
        img('6qgnb1v8sf4ibhrljcsve4amhmq3_darjeeling-photos.webp'),
        img('60d247qikoo9go8xab7fusfsrrvi_darjeeling-tours.webp'),
        img('n5y23t5adzl523usxqi4bbj9vnbn_darjeeling-queen-of-hills.webp')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 9 · Onward to Darjeeling`,
      'Breakfast, then south along the ridge to Darjeeling',
      'Tea gardens dropping away on both sides',
      'Optional: the Happy Valley tea estate',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 10 · Darjeeling sightseeing`,
      'Breakfast with Kanchenjunga on the skyline',
      'Tiger Hill at sunrise for Kanchenjunga',
      'The toy train and the tea gardens at Ghum',
      `${DAY_MARK}Day 11 · Departure from Bagdogra`,
      'Breakfast at the hotel and check out',
      'Border formalities and transfer to Siliguri'
    ],
    accommodation: {
      name: 'New Mandala, Darjeeling',
      description: '2 nights · Breakfast · Standard room · 3★ · Colonial era hotel near the Mall',
      images: [
        img('0vumlcjxeofmwye1r9m6tiwghesc_874350968ef511ebbccc0242ac110003.png'),
        img('oj3vqvcokddrqzamgr3udzc98gkc_500613870.jpg'),
        img('b20zuxneszv7ojrniziplf39mwa4_500613869.jpg'),
        img('i61260jvug1z82iaoraf3obswaor_500613862.jpg'),
        img('xt9xpbp4lylbuoukq7bnv4cgyf54_new-mandala-golden-spa.jpg'),
        img('7rhtyiz1xx53iajsd1v6mvhoefus_new-mandala-golden-spa%20(1).jpg'),
        img('m3xs5tplqxhdvlw3fs33ldvrx8xj_new-mandala-golden-spa%20(2).jpg'),
        img('o86a9kknagz1n1kn992gyo162h0t_500613865.jpg')
      ]
    },
    activities: [
      {
        name: 'Darjeeling sightseeing tour',
        day: 10,
        optional: false,
        image: img('xu94yg4mnre6wcz6hcvk8v8jbhjg_Peace%20Pagoda.jpg'),
        description: 'Tiger Hill at sunrise for Kanchenjunga, the Himalayan Mountaineering Institute and the toy train at Ghum.'
      }
    ],
    program: {
      name: 'Darjeeling',
      description: 'Days in the old hill station, with Tiger Hill at sunrise and the tea gardens below.',
      image: img('fs465f6elum58r667svsaaixz0ip_darjeeling-pictures.webp')
    }
  }
];

const detail = {
  slug: 'bhutan-sikkim-and-darjeeling',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bhutan, Sikkim and Darjeeling',
  alt: 'Kanchenjunga at sunrise from a Darjeeling ridge',
  days: '11 days / 10 nights',
  stations: '6 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Culture',
  tags: ['Culture', 'Multi-country'],
  price: 57950,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuentsholing', 'Thimphu', 'Paro', 'Phuentsholing', 'Gangtok', 'Darjeeling'],
  stats: { days: 11, cities: 6, hotels: 6, activities: 6, transfers: 13 },
  gallery: heroGallery,
  services: [
    ['6 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['13 transfers', 'Transport'],
    ['16 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three Himalayan worlds in one overland run: Bhutan, then Sikkim, then the old tea hills of Darjeeling.',
    quoteMore: 'Sikkim needs its own inner line permit on top of the Bhutan paperwork. Send us your passport scans a month ahead and we handle both.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '11 days through Phuentsholing, Thimphu, Paro, Gangtok, Darjeeling, with 10 nights, daily breakfast and a licensed Bhutanese guide: the thimphu sightseeing tour, the ta dzong and rinpung dzong, the hike to the tiger\'s nest, the gangtok sightseeing tour.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 10 nights across Phuentsholing, Thimphu, Paro, Gangtok, Darjeeling with daily breakfast; all land transfers by private vehicle; the Thimphu sightseeing tour; the Ta Dzong and Rinpung Dzong; the Hike to the Tiger\'s Nest; the Gangtok sightseeing tour; the Darjeeling sightseeing tour; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuentsholing (L)', text: 'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing\nBorder formalities at the Bhutan Gate\nCheck in and the rest of the day free', hotel: 'Alem Hotel & Resort, Bhutan', highlights: ['Arrival at Bagdogra or Siliguri and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Onward to Thimphu (B, L)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nOptional: the Zorig Chusum school of arts\nArrival transfer and check in for the night', hotel: 'Forest Boutique', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'Optional: the Zorig Chusum school of arts'] },
    { title: 'Day 3: To Paro: Thimphu sightseeing (B)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and the takin preserve', hotel: 'Paro deluxe hotel', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'The Memorial Chorten and the Buddha Dordenma'] },
    { title: 'Day 4: Ta dzong and rinpung dzong and tiger\'s nest hike (Travel day)', text: 'Breakfast, then out into the Paro valley\nThe round watchtower holding the National Museum\nRinpung Dzong on the slope above the river\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Paro deluxe hotel', highlights: ['Breakfast, then out into the Paro valley', 'The round watchtower holding the National Museum', 'Rinpung Dzong on the slope above the river'] },
    { title: 'Day 5: Onward to Phuentsholing (L)', text: 'Breakfast, then the long run back south\nDown through the Chukha gorge to the plains\nOptional: Zangto Pelri Lhakhang in the town\nArrival transfer and check in for the night', hotel: 'Meto Pema Hotel, Phuentsholing', highlights: ['Breakfast, then the long run back south', 'Down through the Chukha gorge to the plains', 'Optional: Zangto Pelri Lhakhang in the town'] },
    { title: 'Day 6: Onward to Gangtok (B, L)', text: 'Breakfast, then west into Sikkim\nPermit formalities at Rangpo on the Teesta\nOptional: the ropeway over the ridge\nArrival transfer and check in for the night', hotel: 'The Royal Heritage Gangtok', highlights: ['Breakfast, then west into Sikkim', 'Permit formalities at Rangpo on the Teesta', 'Optional: the ropeway over the ridge'] },
    { title: 'Day 7: Gangtok sightseeing (B, L)', text: 'Breakfast, then out into Gangtok\nRumtek monastery above the valley\nThe Namgyal institute and Ganesh Tok', hotel: 'The Royal Heritage Gangtok', highlights: ['Breakfast, then out into Gangtok', 'Rumtek monastery above the valley', 'The Namgyal institute and Ganesh Tok'] },
    { title: 'Day 8: Gangtok sightseeing (B, L)', text: 'Breakfast, then out into Gangtok\nRumtek monastery above the valley\nThe Namgyal institute and Ganesh Tok', hotel: 'The Royal Heritage Gangtok', highlights: ['Breakfast, then out into Gangtok', 'Rumtek monastery above the valley', 'The Namgyal institute and Ganesh Tok'] },
    { title: 'Day 9: Onward to Darjeeling (B, L)', text: 'Breakfast, then south along the ridge to Darjeeling\nTea gardens dropping away on both sides\nOptional: the Happy Valley tea estate\nArrival transfer and check in for the night', hotel: 'New Mandala', highlights: ['Breakfast, then south along the ridge to Darjeeling', 'Tea gardens dropping away on both sides', 'Optional: the Happy Valley tea estate'] },
    { title: 'Day 10: Darjeeling sightseeing (B, L)', text: 'Breakfast with Kanchenjunga on the skyline\nTiger Hill at sunrise for Kanchenjunga\nThe toy train and the tea gardens at Ghum', hotel: 'New Mandala', highlights: ['Breakfast with Kanchenjunga on the skyline', 'Tiger Hill at sunrise for Kanchenjunga', 'The toy train and the tea gardens at Ghum'] },
    { title: 'Day 11: Departure from Bagdogra (B)', text: 'Breakfast at the hotel and check out\nBorder formalities and transfer to Siliguri', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Border formalities and transfer to Siliguri'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bhutan', href: '/asia/bhutan' },
  { label: detail.title }
];

export const bhutanSikkimAndDarjeelingBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bhutanSikkimAndDarjeelingProduct = {
  slug: detail.slug,
  places: ['Phuentsholing', 'Thimphu', 'Paro', 'Gangtok', 'Darjeeling'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 11,
  stops: 6,
  hotels: 6,
  cities: 6,
  activities: 6,
  transfers: 13,
  meals: 16,
  price: detail.price,
  images: cardImages
};
