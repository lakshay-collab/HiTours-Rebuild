// Vietnam, Laos and Cambodia. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
  img('kz2o1i094vsaodj2hkv3prbsrbsy_shutterstock_237338044.jpg'),
  img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
  img('6n3scmd5rlsnaop1pb6iwv19uv23_shutterstock_601657496.jpg'),
  img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
  img('8t8tbzlhfgky047nhali974ytiim_shutterstock_616405904.jpg'),
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg'),
  img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
  img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('kz2o1i094vsaodj2hkv3prbsrbsy_shutterstock_237338044.jpg'),
  img('ihukt6y3vv68yzcr72fyq3wqeqbz_31263620335_b87975222b_o.jpg'),
  img('wkacydb95r5vm7ce57ujw79ufdxh_16183432367_e73287079a_o.jpg'),
  img('y0r3x7bev54bbom6vzfdyhylqa22_1462532711_1280px-Night_Market_(Luang_Prabang).jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    subtitle: 'Hanoi, Ninh Binh and the bay',
    dayLabel: 'Day 1 to 3',
    images: [
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg')
    ],
    dayImages: {
      1: [
        img('yhb848cifhrtbttwsxy76l36fgik_87-ma-may.jpg'),
        img('of44v39wp9am3io7u2sxw0s5bjfg_87-ma-may.jpg'),
        img('mqh0cx5yilooc97j0h5bemeobg01_1613645047_shutterstock_1676139631.jpg'),
        img('xf5ltzlprl4wk40yrzti9k9n836e_St._Joseph\'s_Cathedral_Hanoi_2.jpg')
      ],
      2: [
        img('1b7t5qk08ptmrwnhze4z7t77pflc_shutterstock_2309649499.jpg'),
        img('yx7xjkegdm9ruyh3rv7d2qtwgjyg_8224556638_2c76bfbba5_o.jpg'),
        img('m9yizaucm34mdy6jeo07klf59c3r_51986787203_3b201c83cb_b.jpg'),
        img('8zsyn00w33flh1y50mn0irdngahv_shutterstock_591172484.jpg')
      ],
      3: [
        img('9vw4pgf1629bmnhci52iiqpvr119_shutterstock_363488339.jpg'),
        img('ihukt6y3vv68yzcr72fyq3wqeqbz_31263620335_b87975222b_o.jpg'),
        img('wkacydb95r5vm7ce57ujw79ufdxh_16183432367_e73287079a_o.jpg'),
        img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg')
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
      'Bich Dong, a pagoda built into the rock',
      `${DAY_MARK}Day 3 · Halong Bay day cruise`,
      'Early breakfast, then east towards the coast',
      'A full day on the bay aboard a dragon boat',
      'The limestone islands and the floating villages',
      'Back in Hanoi in the evening'
    ],
    accommodation: {
      name: 'Hm Boutique Hotel Hanoi, Hanoi',
      options: [
        {
          name: 'Hanoi Media Hotel & Spa, Hanoi',
          stars: 4,
          city: 'Hanoi',
          source: 'https://www.booking.com/hotel/vn/meracus.en-gb.html',
          description: '3 nights · Breakfast and dinner · 4★ · Old Quarter hotel on Hang Dau with a spa, restaurant and sky bar',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/295588951.jpg?k=abf730ac1f2ad8782ace70e0d29cac7555968196cf52bfb6a7c78d8228daa810&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/238700041.jpg?k=f7bc56e01a4b7decb68d48cd468bf8e5aac602df2d52976e701b21e8b983ebd4&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/295588886.jpg?k=bc42bbe4d4533bcbe67299853be67c4d7a7d4d945a5f70e3444cd2d9cbdef055&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/295588947.jpg?k=c7d80992d6f80cfc85b53266588ac413645147ab5369cd116ec0ec83d7dc9a03&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/732022328.jpg?k=bccd249ef94820aabf63e34e468ebbdf06465c91372071c7aa12c68cfdc4a325&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/295587753.jpg?k=7868a9df7e9d160c66c1bcc6c02f6e6e04adf8d69c167de665da78f1b94836e2&o='
          ]
        },
        {
          name: 'Hanoi Pearl Hotel, Hanoi',
          stars: 4,
          city: 'Hanoi',
          source: 'https://www.booking.com/hotel/vn/hanoi-pearl.en-gb.html',
          description: '3 nights · Breakfast and dinner · 4★ · Old Quarter hotel a minute on foot from Hoan Kiem lake, with a fitness centre and spa',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/223094802.jpg?k=d75f3d22c43b6d320e33cade349596846a01885473a35c67784c9ced86f565e2&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/285503600.jpg?k=3a24b437454cd1762e47e174bb31e5e4d6b8f0598cf347b38fdcdc1f055cb658&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/799686271.jpg?k=256d22d7ef2ce1eb1ba00325219b93ea1aeb034ac165a2428e8d1939866bc8e2&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/799738751.jpg?k=d4998c53181f8b8faeefde069304559f350a1b6d751915aa62f524d3cabe9cdb&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/799708719.jpg?k=1be40c49d11bb37e55c3df371702f90ebe9f5c250610ad1f218ea0422204dae9&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/799738740.jpg?k=428fcfeb45e7bffcbf7dcf34cfee5334594c515863d5a7eeef6c554d46d59aca&o='
          ]
        },
        {
          name: 'Capella Hanoi, Hanoi',
          stars: 5,
          city: 'Hanoi',
          source: 'https://www.booking.com/hotel/vn/capella-hoan-kiem.en-gb.html',
          description: '3 nights · Breakfast and dinner · 5★ · Luxury hotel in Hoan Kiem with a spa, indoor pool and fitness centre',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/848812097.jpg?k=2a31ebc64fa8d979cbc0cfd7f168cb4bb77732c51b571de80fd7cf0690735805&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/514728740.jpg?k=af906a02abf2951dc39bf2d65f504c5224d4bf3d21f9b411cdaf3afd2aa4e03f&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/514731631.jpg?k=5399dfe118aa81b4c15a4560ceba01f178b50dfe7a91b6ff38b377cb544c9797&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/285818899.jpg?k=19cca51bb241a4cd987e25b818e39b58e0c51ace9acc4c0bf784bb174ef5d0e2&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/842299901.jpg?k=be5bd6e384b26e39385b65f0526c98b0de254067685e7cb9ff5f8677963942e6&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/514735687.jpg?k=24396f43132c1934a37b884134ccc3d8e8e66f76fd7b82d4a70d4af6d747d367&o='
          ]
        }
      ],
      description: '3 nights · Breakfast and dinner · Standard room · 3★ · Small boutique hotel in the old quarter',
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
      },
      {
        name: 'Halong Bay full day dragon cruise',
        day: 3,
        optional: false,
        image: img('9vw4pgf1629bmnhci52iiqpvr119_shutterstock_363488339.jpg'),
        description: 'A full day out on the bay aboard a dragon boat, through the limestone islands and the floating villages, back in Hanoi by evening.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Two nights in the old quarter with a Ninh Binh day, a cycle ride to Bich Dong and a full day on Halong Bay.',
      image: img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Luang Prabang',
    dayLabel: 'Day 4 to 6',
    images: [
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg')
    ],
    dayImages: {
      4: [
        img('y0r3x7bev54bbom6vzfdyhylqa22_1462532711_1280px-Night_Market_(Luang_Prabang).jpg'),
        img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
        img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
      ],
      5: [
        img('o67u9vyzta2jlmhcsfjnu3tx311t_Phousi%20Hill,%20Luang%20Prabang%201.jpg'),
        img('oq28p57mhh1wfje0gcwrfdsf2x88_6775308825_66d6708b27_b.jpg'),
        img('myskj6ob95rm1jmrxek2guj4dl8j_1462531874_Wat_Xieng_Thong_(Luang_Prabang__Laos).JPG'),
        img('qjs310sp1okkvko2z9u3i9hx6m3h_1468392029_4097788342_da63d79b26_o.jpg')
      ],
      6: [
        img('6z4pv135lc1d9m5vf3nkssgt5din_Elephant%20Village%208.jpg'),
        img('bh0v16mp9r6vrgoh7ybzzz1vd9t7_1462529762_7590537556_28e5ff2d89_o.jpg'),
        img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
        img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · On to Luang Prabang`,
      'Check out, then the flight to Laos',
      'Check in on the river at Luang Prabang',
      'Rest of the day free at your own pace',
      'Optional: the night market along Sisavangvong road',
      `${DAY_MARK}Day 5 · Luang Prabang sightseeing`,
      'Breakfast, then a guided day of the old town',
      'The royal palace museum and Wat Xieng Thong',
      'The climb up Mount Phousi',
      'Sunset over the two rivers',
      `${DAY_MARK}Day 6 · Elephant village day`,
      'Breakfast, then out to the elephant camp',
      'A morning with the mahouts and their elephants',
      'Walking them down to the river',
      'Back in town in the late afternoon'
    ],
    accommodation: {
      name: 'Villa Namkhan River, Luang Prabang',
      options: [
        {
          name: 'Burasari Heritage Luang Prabang, Luang Prabang',
          stars: 5,
          city: 'Luang Prabang',
          source: 'https://www.booking.com/hotel/la/burasari-heritage.en-gb.html',
          description: '3 nights · Breakfast · 5★ · Old Town hotel overlooking the Nam Khan river, with a spa and restaurant',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/51476880.jpg?k=ec6e4bb431a89383d772196803e4f82f1d2d8492bed83594c4835f899b21806b&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/51476532.jpg?k=25bf4bbc69bca3c1188b851380fd2e474a972aac048edc0ab8c70af13466a353&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/229317509.jpg?k=4305e1c1ed1a8c232fcc70911860a5b890536bb0cc5ee6bbcafe934335047a3f&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/51476451.jpg?k=6f6fe11948e7840341f8797b7f37a09cd6a81a19df9369a94aab69d694b9420c&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/229321303.jpg?k=7992200c9a1147c37a1d766ef47d02d5e9bf8dba8b8db5d925d108f8cf4c3ba6&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/51476974.jpg?k=b1f8ce2d7f456c5331fb3b2e2a96e225def1c1fa48af530709c90dd2ddb22d48&o='
          ]
        },
        {
          name: 'Maison Dalabua, Luang Prabang',
          stars: 4,
          city: 'Luang Prabang',
          source: 'https://www.booking.com/hotel/la/maison-dalabua.en-gb.html',
          description: '3 nights · Breakfast · 4★ · Boutique hotel set among gardens and lotus ponds, with a pool, spa and two restaurants',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/898894924.jpg?k=839f747c68ac33b462aa174e42b0fb9b208573f95709bce2dfde14033c019318&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/896334632.jpg?k=c6f53e07a82209901c6e31e8a499005363f3101e855662578e2984d2c145fcee&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/898897840.jpg?k=ca8d9dca1206f475b4c209a50f11bbdea4a7f5daff15f31746b5fa2ab2f3b3e4&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/896338739.jpg?k=969f3dac1ad405bfc7798f356efa0af371926c5f799d48e9f7c1073bc6fdceb9&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/896340687.jpg?k=a21b26fffbfdc67e362265486dbf97b4588c3dfc870fbb97cbee53f166f680e6&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/584037008.jpg?k=e0a817a48750e0ffeffe171dfbf1df7571693a90310f1231d3391e7d7b971d79&o='
          ]
        },
        {
          name: 'Avani+ Luang Prabang Hotel, Luang Prabang',
          stars: 5,
          city: 'Luang Prabang',
          source: 'https://www.booking.com/hotel/la/avani-luang-prabang.en-gb.html',
          description: '3 nights · Breakfast · 5★ · Hotel in the heart of the UNESCO old town, steps from the night market, with an outdoor pool',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/831673885.jpg?k=3b6fff4d21aa41eee5e7e32d213bf761ac8a36f93ba7b0d22c3ac18c13ac6b66&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/870271966.jpg?k=03a37e4ecca9ea26e52018fd0747315bb9b9a7769d1c72b60adc10864d455cd5&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/94795274.jpg?k=69a26984f3aab33a78607143913d9a937efc356167e3c20a98df86c06be5de62&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/831673828.jpg?k=10ba5a61c2c72628117e3576124b5d49c6331e3196599b55d744bedb17056b40&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/141797780.jpg?k=a0f7d266d902bf19031e62ef86651f10019b07d157e95cb18ecc524d71470c58&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/238713700.jpg?k=dd08761a3e27203a9232b857ad7d5de4876a90fc2f8a6d3b682b2fcffec450a7&o='
          ]
        },
        {
          name: 'Sofitel Luang Prabang, Luang Prabang',
          stars: 5,
          city: 'Luang Prabang',
          source: 'https://www.booking.com/hotel/la/sofitel-luang-prabang.en-gb.html',
          description: '3 nights · Breakfast · 5★ · French colonial heritage hotel set in gardens, with an outdoor pool and spa',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/763980094.jpg?k=8884fcb3d5ea34a7f8191c5c8e4881e7da0b8c3ff56274d4de79cab029d53be1&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/611336751.jpg?k=1847eee9f238de2573125a932d837836aa1da190f7ee657333f96fc626c467a3&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/925840604.jpg?k=7ef908bc7ee4757352df2baef818a4413a1959a87de4e47bc79ed126ed40d631&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/931818977.jpg?k=3e3ac369d995b860f6cea70ef5c589f5e124a14533bc10da4739b582637e0be8&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/611336778.jpg?k=8e38663dc45bc5f25e843970faa7c95ce343842ada8c6e101f03877097c155a2&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/611336754.jpg?k=f6111aa1e3037918a14c246befc20b9339bd0b82043f67efcae97908d94c4806&o='
          ]
        }
      ],
      description: '3 nights · Breakfast · Standard room · 3★ · Small riverside villa hotel on the Nam Khan at Luang Prabang',
      images: [
        img('ydwnn0azeqi6zhzfz5xoll2kxjjm_photo0jpg%20(1).jpg'),
        img('ak2c19um1r1dz1x9by9accp5ntft_duluxe-family-room.jpg'),
        img('pd1fn73y7tn19koy6o24pfxatw3h_superior-triple-with.jpg'),
        img('sxwkgxqrfigb68nf6csnkqwqo3xb_photo8jpg.jpg'),
        img('ld449z8wj10uqz8j6vninvjbykza_villa-namkhan-river%20(2).jpg'),
        img('d3nsuyw3k6mo5s3to371sk2cuhd2_0e74601fe5d0a97732d67e6e7409b870.webp'),
        img('1sbho3e79cwlyw8u52dc294qnvfl_villa-namkhan-river%20(1).jpg'),
        img('vs0lidu8a7j0pf8z8ygpxwzs10hs_c92e2fc80cc4990c97454ffaeeab5c88.webp'),
        img('1enyybjezq4og7mtyogjdageo5h1_photo1jpg.jpg'),
        img('78xl25r0mciva1kz5tbmal1ukrb4_f4e8c48ee285f74a1a07384ebaf267c0.jpg'),
        img('8vgub60wdiascoj0iaucx87u502c_120284845.jpg')
      ]
    },
    activities: [
      {
        name: 'Luang Prabang sightseeing tour',
        day: 5,
        optional: false,
        image: img('o67u9vyzta2jlmhcsfjnu3tx311t_Phousi%20Hill,%20Luang%20Prabang%201.jpg'),
        description: 'The royal palace museum, the gilded Wat Xieng Thong and the climb up Mount Phousi for the view over the two rivers.'
      },
      {
        name: 'Elephant village and mahout day',
        day: 6,
        optional: false,
        image: img('6z4pv135lc1d9m5vf3nkssgt5din_Elephant%20Village%208.jpg'),
        description: 'A day at a rescue camp on the Nam Khan, learning how the mahouts work with the elephants and walking them down to the water.'
      }
    ],
    program: {
      name: 'Luang Prabang',
      description: 'Three nights on the Nam Khan in Laos, with the old royal town and a day at an elephant camp.',
      image: img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Siem Reap',
    subtitle: 'Tonle Sap, Angkor and Phnom Kulen',
    dayLabel: 'Day 7 to 10',
    images: [
      img('1xf3c51dyd41hxizgyq99uie61d9_shutterstock_381559081.jpg'),
      img('kz2o1i094vsaodj2hkv3prbsrbsy_shutterstock_237338044.jpg'),
      img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg'),
      img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg')
    ],
    dayImages: {
      7: [
        img('0eeolh4m5vco2tlqhjedbgoybppc_shutterstock_172914194.jpg'),
        img('l0w57t2hz9ihtty4bgs1hvjkskvc_Tonle.jpg'),
        img('1mha8xsmyjpzp75qrrdfsbi12r17_Floating.jpg'),
        img('1xf3c51dyd41hxizgyq99uie61d9_shutterstock_381559081.jpg')
      ],
      8: [
        img('1i89mdw0hjjxnkzcal9u7ad6845p_shutterstock_559574212.jpg'),
        img('y8n110g2u7oikuzpnvkd5w75si6q_1462522736_15912678764_da2931d075_o.jpg'),
        img('gg7x8uab6ewriuht9ighk7uzlael_1462523244_8147796611_5f3799b751_o.jpg'),
        img('mypd7ebfznu6f6367vtfattqkvj3_1462528175_7519280908_477d0bf15a_o.jpg')
      ],
      9: [
        img('jedta5mm7lceymkn8txfv3k7ruxg_Phnom%20Kulen%20Waterfall%201.jpg'),
        img('lqftj0cv1j4bbtgffmywtqja2g3m_download%20-%202024-10-17T115621.780.jpg'),
        img('vsbh1pytzq5832fv24mwnfqbt17n_Paranirvana.jfif'),
        img('bn1iq9ra2igz3b9ehxph9ujjs7ch_download%20-%202024-10-17T122821.112.png')
      ],
      10: [
        img('1xf3c51dyd41hxizgyq99uie61d9_shutterstock_381559081.jpg'),
        img('kz2o1i094vsaodj2hkv3prbsrbsy_shutterstock_237338044.jpg'),
        img('17gev5dob1lg6s5iuef76mu9qjih_shutterstock_224188177%20(1).jpg'),
        img('xaa9ytoxcpmjrwbnf7ucnl11wo30_shutterstock_289362896.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Siem Reap and Tonle Sap`,
      'Breakfast and check out, then the flight to Cambodia',
      'Check in at Siem Reap',
      'A boat out onto the great lake',
      'A floating village built on stilts and pontoons',
      `${DAY_MARK}Day 8 · Angkor Wat`,
      'Early breakfast, then into the Angkor park',
      'Angkor Wat and the Bayon faces at Angkor Thom',
      'The root covered ruins of Ta Prohm',
      'Back at the hotel by evening',
      `${DAY_MARK}Day 9 · Phnom Kulen`,
      'Breakfast, then north to the sacred mountain',
      'The waterfall and the pools at Phnom Kulen',
      'The reclining Buddha cut into the rock',
      'The river of a thousand lingas',
      `${DAY_MARK}Day 10 · Departure from Siem Reap`,
      'Check out after an early breakfast',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'HARI Residence and Spa Siem Reap, Siem Reap',
      options: [
        {
          name: 'Central Suite Residence, Siem Reap',
          stars: 4,
          city: 'Siem Reap',
          source: 'https://www.booking.com/hotel/kh/central-suite-residence.en-gb.html',
          description: '3 nights · Breakfast and dinner · 4★ · City centre hotel on Sok San Road near Pub Street, with an outdoor pool and restaurant',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/776104497.jpg?k=55b354516fd24632e1362a4c4fc75f4cb6c8d390bc0097088b11f5796fa27797&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/768987404.jpg?k=674505add5e91dbf3de607cc46e2b4b4cf8d70a1cc777e45f9f0d45728a33ab2&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/768990427.jpg?k=efd733eed62470f7302b4814ec9d2ae06b8dbf36b166436c6a470f6008c49e4f&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/227690805.jpg?k=2cabe71824992fe283e627e4c36ffb4c60ce5c452f86b33c8ba9a4ab92afea9d&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/769002537.jpg?k=c0cd805f00cd85354144da06f0d9c3fd583ce9e5b9874a140518591d3041a90f&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/219881594.jpg?k=4487382bc01cac3588c75d95b9b6035d271b086a5ab7426ba135c3e43d2181e0&o='
          ]
        },
        {
          name: 'Siem Reap Palace Hotel & Spa, Siem Reap',
          stars: 4,
          city: 'Siem Reap',
          source: 'https://www.booking.com/hotel/kh/siem-reap-palace-residence.en-gb.html',
          description: '3 nights · Breakfast and dinner · 4★ · Hotel in Wat Damnak village with an outdoor pool, spa and restaurant',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/226301582.jpg?k=6e09588a3386fd92b84956dd8c0474fa590f262c87ee30b6909f9b4a571ae004&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/225830827.jpg?k=7a477a573a46746ca045bc778ac1c450d9c92953b317f03700fa88f32fdca423&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/225229640.jpg?k=26c4f6d0847ed7eb4333d5bc38ec8d463cc0e21b542759dec7410e93e8a55f54&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/420872146.jpg?k=2b2dd5f13d2bf05a7cc266e55d0ebad1dadbbcf0c3dc587e0f53a9aa5132c416&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/217568243.jpg?k=6fa054a48dfe26dc322a58e2b8b38794fbeea59c47ce3fbd2698f267fcc51ce3&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/416937669.jpg?k=78685532702436aa835514b824ddd8d42ee5b17a95adff6e04ca174c94c6350f&o='
          ]
        },
        {
          name: 'Angkor Aurora, Siem Reap',
          stars: 4,
          city: 'Siem Reap',
          source: 'https://www.booking.com/hotel/kh/angkor-aurora.en-gb.html',
          description: '3 nights · Breakfast and dinner · 4★ · Hotel in Wat Bo with an outdoor pool, spa, restaurant and bar',
          images: [
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/269679630.jpg?k=0bd57c327ec2d23fe11e3193e85d3edf70a386bb8906e05622365e988313050c&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/544619105.jpg?k=a699108449309b57676bfe5f3f5e518bb20758c6522d57ba08e7c9b0f2a3cbae&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/544618665.jpg?k=92b033ee3a072b873bd1922e3200bcd3b6f8b569ecca177dda715b4b439cb803&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/544618453.jpg?k=cf2e37d5049bfba03ba1217bcca3ce91a922dee370fbbb34ec4768e9dd8fd9d6&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/499349389.jpg?k=cc6e81a38c6c962369b29863486b7ff89f547f60062345c6692b6cfead7da936&o=',
            'https://cf.bstatic.com/xdata/images/hotel/max1024x768/269680259.jpg?k=2ec004c0a7d1b4f0044cd2c3e12427807a8ddd398c95a3dea02e4a1b1edcc4ad&o='
          ]
        }
      ],
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
        day: 7,
        optional: false,
        image: img('0eeolh4m5vco2tlqhjedbgoybppc_shutterstock_172914194.jpg'),
        description: 'A boat out onto the great lake, through a floating village of houses, schools and shops built on stilts and pontoons.'
      },
      {
        name: 'Angkor Wat day tour',
        day: 8,
        optional: false,
        image: img('1i89mdw0hjjxnkzcal9u7ad6845p_shutterstock_559574212.jpg'),
        description: 'Angkor Wat itself, the Bayon faces at Angkor Thom and the root covered ruins of Ta Prohm, with a guide for the full day.'
      },
      {
        name: 'Phnom Kulen day trip',
        day: 9,
        optional: false,
        image: img('jedta5mm7lceymkn8txfv3k7ruxg_Phnom%20Kulen%20Waterfall%201.jpg'),
        description: 'The sacred mountain north of Angkor, with its waterfall, the reclining Buddha cut into the rock and the river of a thousand lingas.'
      }
    ],
    program: {
      name: 'Siem Reap',
      description: 'On to Cambodia for the floating villages of Tonle Sap, a full day at Angkor and the sacred mountain at Phnom Kulen.',
      image: img('1xf3c51dyd41hxizgyq99uie61d9_shutterstock_381559081.jpg')
    }
  }
];

const detail = {
  slug: 'vietnam-laos-and-cambodia',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Vietnam, Laos and Cambodia',
  alt: 'Monks crossing the bamboo bridge over the Nam Khan at Luang Prabang',
  days: '10 days / 9 nights',
  stations: '3 stops',
  transport: 'Flights between the countries, private transfers and guided tours',
  tag: 'Grand tour',
  tags: ['Grand tour', 'Culture'],
  price: 106875,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Luang Prabang', 'Siem Reap', 'Tonle Sap', 'Angkor Wat', 'Phnom Kulen'],
  stats: { days: 10, cities: 3, hotels: 3, activities: 8, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['8 experiences', 'Activities'],
    ['12 transfers', 'Transport'],
    ['14 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three countries in ten days, and Luang Prabang is the one nobody expects to like most. It is the slowest, quietest town in the region.',
    quoteMore: 'Get up for the alms giving in Luang Prabang at dawn. Stand well back, buy nothing from the touts, and just watch.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Ten days through three countries: two nights in Hanoi with Ninh Binh and a full day on Halong Bay, three on the river at Luang Prabang with the old royal town and an elephant camp day, then Siem Reap for Tonle Sap, Angkor and the sacred mountain at Phnom Kulen.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 9 nights with breakfast daily and dinner at the Vietnamese and Cambodian hotels; all flights between the countries; private transfers throughout; a Ninh Binh day tour; a cycle ride to Bich Dong; a full day dragon boat cruise on Halong Bay; a Luang Prabang sightseeing tour; an elephant village and mahout day; a Tonle Sap lake boat ride; an Angkor Wat day tour; a Phnom Kulen day trip.',
  intro2: 'Not included: international flights; Vietnam, Laos and Cambodia visa fees; lunches; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Ninh Binh and Bich Dong (B, D)', text: 'Breakfast, then south towards Ninh Binh\nA rowing boat through the flooded caves at Tam Coc\nA cycle ride through the rice fields\nBich Dong, a pagoda built into the rock', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then south towards Ninh Binh', 'A rowing boat through the flooded caves at Tam Coc', 'A cycle ride through the rice fields'] },
    { title: 'Day 3: Halong Bay day cruise (B, D)', text: 'Early breakfast, then east towards the coast\nA full day on the bay aboard a dragon boat\nThe limestone islands and the floating villages\nBack in Hanoi in the evening', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Early breakfast, then east towards the coast', 'A full day on the bay aboard a dragon boat', 'The limestone islands and the floating villages'] },
    { title: 'Day 4: On to Luang Prabang (Travel)', text: 'Check out, then the flight to Laos\nCheck in on the river at Luang Prabang\nRest of the day free at your own pace\nOptional: the night market along Sisavangvong road', hotel: 'Villa Namkhan River', highlights: ['Check out, then the flight to Laos', 'Check in on the river at Luang Prabang', 'Rest of the day free at your own pace'] },
    { title: 'Day 5: Luang Prabang sightseeing (B)', text: 'Breakfast, then a guided day of the old town\nThe royal palace museum and Wat Xieng Thong\nThe climb up Mount Phousi\nSunset over the two rivers', hotel: 'Villa Namkhan River', highlights: ['Breakfast, then a guided day of the old town', 'The royal palace museum and Wat Xieng Thong', 'The climb up Mount Phousi'] },
    { title: 'Day 6: Elephant village day (B)', text: 'Breakfast, then out to the elephant camp\nA morning with the mahouts and their elephants\nWalking them down to the river\nBack in town in the late afternoon', hotel: 'Villa Namkhan River', highlights: ['Breakfast, then out to the elephant camp', 'A morning with the mahouts and their elephants', 'Walking them down to the river'] },
    { title: 'Day 7: Siem Reap and Tonle Sap (B, D)', text: 'Breakfast and check out, then the flight to Cambodia\nCheck in at Siem Reap\nA boat out onto the great lake\nA floating village built on stilts and pontoons', hotel: 'HARI Residence and Spa Siem Reap', highlights: ['Breakfast and check out, then the flight to Cambodia', 'Check in at Siem Reap', 'A boat out onto the great lake'] },
    { title: 'Day 8: Angkor Wat (B, D)', text: 'Early breakfast, then into the Angkor park\nAngkor Wat and the Bayon faces at Angkor Thom\nThe root covered ruins of Ta Prohm\nBack at the hotel by evening', hotel: 'HARI Residence and Spa Siem Reap', highlights: ['Early breakfast, then into the Angkor park', 'Angkor Wat and the Bayon faces at Angkor Thom', 'The root covered ruins of Ta Prohm'] },
    { title: 'Day 9: Phnom Kulen (B, D)', text: 'Breakfast, then north to the sacred mountain\nThe waterfall and the pools at Phnom Kulen\nThe reclining Buddha cut into the rock\nThe river of a thousand lingas', hotel: 'HARI Residence and Spa Siem Reap', highlights: ['Breakfast, then north to the sacred mountain', 'The waterfall and the pools at Phnom Kulen', 'The reclining Buddha cut into the rock'] },
    { title: 'Day 10: Departure from Siem Reap (-)', text: 'Check out after an early breakfast\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Check out after an early breakfast', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam, Laos and Cambodia visa fees; lunches; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const vietnamLaosCambodiaTrioBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const vietnamLaosCambodiaTrioProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Luang Prabang', 'Siem Reap', 'Tonle Sap', 'Angkor Wat', 'Phnom Kulen'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 10,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 8,
  transfers: 12,
  meals: 14,
  price: detail.price,
  images: cardImages
};
