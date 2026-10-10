// Bhutan with Paro Taktsang: Super Deluxe. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
  img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
  img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg'),
  img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
  img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
  img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
  img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg'),
  img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
  img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
  img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('l0fq7fjbnhs2rdw73cyv4fa8c62i_Phuentsholing-Market-1024x682.jpg'),
  img('rujgh8ecafx36mfda2llkk92i1hk_1578666304_drukgyal_dzong.jpg')
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
        img('l0fq7fjbnhs2rdw73cyv4fa8c62i_Phuentsholing-Market-1024x682.jpg'),
        img('eljv9nfavq2ojeluvwgegg0j5t8o_shutterstock_1380814979.jpg'),
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
      image: img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg')
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
        img('o4xiotph7os69ac0uxsmaew06pbw_1621019442_shutterstock_1187906419.jpg'),
        img('cdl5xosospzimjwzry1vumk497kb_The-Romantic-Nature-Park-of-Thimphu-Ludrong-Memorial-Garden.jpg'),
        img('wt6f33c5vmnsp4nxwzgz9yzoxhmm_1621018987_shutterstock_1459271045.jpg'),
        img('4r58yve0h6te2i0muhp7hprr7rtu_24024165679_103d7a2e7c_b.jpg')
      ],
      3: [
        img('9mjgmwz4uzguzddlci3crbdj5x60_Nation%20Memorial%20Chorten.jpg'),
        img('2xgygw98g58o2olcep4vlh9r5k0u_1481602683_View_of_the_National_Memorial_Chorten__Thimphu.jpg'),
        img('c5zdi543udorguyfdp6ju513rzxv_15656544270_421c572020_b.jpg'),
        img('imqbu0xbgl8bykm6i06y53tjkf4w_22423229676_75bc3a183f_b.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Onward to Thimphu`,
      'Breakfast, then north into the hills towards Thimphu',
      'The Chukha dam and the Wang Chhu gorge on the way',
      'Optional: the Zorig Chusum school of arts',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 3 · Thimphu sightseeing`,
      'Breakfast, then out into the capital',
      'The Memorial Chorten and the Buddha Dordenma',
      'Tashichho Dzong and the takin preserve'
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
        name: 'Thimphu sightseeing tour',
        day: 3,
        optional: false,
        image: img('9mjgmwz4uzguzddlci3crbdj5x60_Nation%20Memorial%20Chorten.jpg'),
        description: 'A guided day round the capital with the Memorial Chorten, the Buddha Dordenma, Tashichho Dzong and the takin preserve.'
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
    name: 'Punakha',
    dayLabel: 'Day 4',
    images: [
      img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
      img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg'),
      img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg'),
      img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg')
    ],
    dayImages: {
      4: [
        img('38kz4h1x67igl2szup6j3v7owa7v_steptodown.com744302.jpg'),
        img('056auoul5hww4jxhty1ioepx1oi7_5116835341_c68f3cb493_b.jpg'),
        img('0hlgpb14iwhgm0834fzkpbd5sgiv_8154575525_198c2ed1bb_b.jpg'),
        img('fk9rfodqaqcnh9gy9tsxw2opj4gf_1571658047_Drc_gk7VYAAMVE4.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · To Punakha: Punakha Dzong`,
      'Breakfast, then east over the Dochula pass',
      'The hundred and eight chortens at the top',
      'Punakha Dzong between the Pho and Mo rivers',
      'The long suspension bridge over the water'
    ],
    accommodation: {
      name: 'Hotel Rivervalley, Punakha',
      description: '1 night · Breakfast · Standard room · 3★ · Riverside hotel in the warm old winter capital',
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
      }
    ],
    program: {
      name: 'Punakha',
      description: 'Time in the warm old winter capital, with the Dzong between two rivers and the suspension bridge.',
      image: img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Paro',
    dayLabel: 'Day 5 to 6',
    images: [
      img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
      img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
      img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
      img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
    ],
    dayImages: {
      5: [
        img('bygb5od4ky5td3nbroqcrcpqdjmt_Ta%20Dzong%20National%20Museum%201.jpg'),
        img('utlsa7h3bnz1p6gok760pdjo12j1_15221606394_bd3684a0fa_b.jpg'),
        img('rujgh8ecafx36mfda2llkk92i1hk_1578666304_drukgyal_dzong.jpg'),
        img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg')
      ],
      6: [
        img('gooh6qmdymk3a1sxb9077xxgevgd_Rinpung%20Dzong%201.jpg'),
        img('lvrrucang7e4i29fjjrr5dv1hfbg_1481602680_Ta_Dzong_museum.jpg'),
        img('40nfujj31s5rphnc2usp8a680fzp_1571657529_1280px-Rinpung_Dzong__Bhutan_01.jpg'),
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · To Paro: Paro sightseeing`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'The National Museum in the old watchtower',
      'Rinpung Dzong and the Drukgyel ruins',
      `${DAY_MARK}Day 6 · Ta dzong and rinpung dzong and tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The round watchtower holding the National Museum',
      'Rinpung Dzong on the slope above the river',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face'
    ],
    accommodation: {
      name: 'Himalayan Keys Forest Resort, Paro',
      description: '2 nights · Breakfast · Standard room · 5★ · Quiet hotel in the valley below Taktsang',
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
        name: 'Paro sightseeing tour',
        day: 5,
        optional: false,
        image: img('bygb5od4ky5td3nbroqcrcpqdjmt_Ta%20Dzong%20National%20Museum%201.jpg'),
        description: 'A guided round of the valley with the National Museum, Rinpung Dzong and the ruins of Drukgyel Dzong.'
      },
      {
        name: 'Ta Dzong and Rinpung Dzong',
        day: 6,
        optional: false,
        image: img('gooh6qmdymk3a1sxb9077xxgevgd_Rinpung%20Dzong%201.jpg'),
        description: 'The round watchtower that now holds the National Museum, and the whitewashed Rinpung fortress above the river.'
      },
      {
        name: 'Hike to the Tiger\'s Nest',
        day: 6,
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
    letter: 'E',
    name: 'Phuentsholing',
    dayLabel: 'Day 7 to 8',
    images: [
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg')
    ],
    dayImages: {
      7: [
        img('ljpqw4npv8wncod5fq1r7hw2zt5y_shutterstock_1344366731.jpg'),
        img('wzk43phe3f2n5pie7psn6bf6ehe8_torsa%201.jpg'),
        img('khf8y1lpqxenviw5vczf0uh2ytj0_Zangto_Pelri_Lhakhang,_Phuentsholing_during_LGFC_-_Bhutan_2019_(14).jpg'),
        img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg')
      ],
      8: [
        img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
        img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
        img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
        img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Onward to Phuentsholing`,
      'Breakfast, then the long run back south',
      'Down through the Chukha gorge to the plains',
      'Optional: Zangto Pelri Lhakhang in the town',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 8 · Departure from Phuentsholing`,
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
      image: img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
    }
  }
];

const detail = {
  slug: 'bhutan-with-paro-taktsang-super-deluxe',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bhutan with Paro Taktsang: Super Deluxe',
  alt: 'Four star resort courtyard in the Paro valley',
  days: '8 days / 7 nights',
  stations: '5 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Luxury',
  tags: ['Luxury', 'Culture'],
  price: 74100,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuentsholing', 'Thimphu', 'Punakha', 'Paro', 'Phuentsholing'],
  stats: { days: 8, cities: 5, hotels: 5, activities: 5, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['12 transfers', 'Transport'],
    ['13 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'The middle tier of our eight day circuit: four star hotels throughout, at a long way below the five star price.',
    quoteMore: 'Super deluxe is the sweet spot in Bhutan. The jump from three to four star is big and from four to five star is mostly the view.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '8 days through Phuentsholing, Thimphu, Punakha, Paro, with 7 nights, Breakfast and dinner each day and a licensed Bhutanese guide: the thimphu sightseeing tour, the punakha sightseeing tour, the paro sightseeing tour, the ta dzong and rinpung dzong.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights across Phuentsholing, Thimphu, Punakha, Paro with Breakfast and dinner each day; all land transfers by private vehicle; the Thimphu sightseeing tour; the Punakha sightseeing tour; the Paro sightseeing tour; the Ta Dzong and Rinpung Dzong; the Hike to the Tiger\'s Nest; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuentsholing (Arrival)', text: 'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing\nBorder formalities at the Bhutan Gate\nCheck in and the rest of the day free', hotel: 'Hotel Ga Me Ga', highlights: ['Arrival at Bagdogra or Siliguri and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Onward to Thimphu (B, L)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nOptional: the Zorig Chusum school of arts\nArrival transfer and check in for the night', hotel: 'Hotel Osel', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'Optional: the Zorig Chusum school of arts'] },
    { title: 'Day 3: Thimphu sightseeing (B, L)', text: 'Breakfast, then out into the capital\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and the takin preserve', hotel: 'Hotel Osel', highlights: ['Breakfast, then out into the capital', 'The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and the takin preserve'] },
    { title: 'Day 4: To Punakha: Punakha Dzong (B, L)', text: 'Breakfast, then east over the Dochula pass\nThe hundred and eight chortens at the top\nPunakha Dzong between the Pho and Mo rivers\nThe long suspension bridge over the water', hotel: 'Hotel Rivervalley', highlights: ['Breakfast, then east over the Dochula pass', 'The hundred and eight chortens at the top', 'Punakha Dzong between the Pho and Mo rivers'] },
    { title: 'Day 5: To Paro: Paro sightseeing (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nThe National Museum in the old watchtower\nRinpung Dzong and the Drukgyel ruins', hotel: 'Himalayan Keys Forest Resort', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'The National Museum in the old watchtower'] },
    { title: 'Day 6: Ta dzong and rinpung dzong and tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe round watchtower holding the National Museum\nRinpung Dzong on the slope above the river\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Himalayan Keys Forest Resort', highlights: ['Breakfast, then out into the Paro valley', 'The round watchtower holding the National Museum', 'Rinpung Dzong on the slope above the river'] },
    { title: 'Day 7: Onward to Phuentsholing (B, L)', text: 'Breakfast, then the long run back south\nDown through the Chukha gorge to the plains\nOptional: Zangto Pelri Lhakhang in the town\nArrival transfer and check in for the night', hotel: 'Hotel Druk', highlights: ['Breakfast, then the long run back south', 'Down through the Chukha gorge to the plains', 'Optional: Zangto Pelri Lhakhang in the town'] },
    { title: 'Day 8: Departure from Phuentsholing (B)', text: 'Breakfast at the hotel and check out\nBorder formalities and transfer to Siliguri', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Border formalities and transfer to Siliguri'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bhutan', href: '/asia/bhutan' },
  { label: detail.title }
];

export const bhutanTaktsangSuperDeluxeBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bhutanTaktsangSuperDeluxeProduct = {
  slug: detail.slug,
  places: ['Phuentsholing', 'Thimphu', 'Punakha', 'Paro'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 5,
  transfers: 12,
  meals: 13,
  price: detail.price,
  images: cardImages
};
