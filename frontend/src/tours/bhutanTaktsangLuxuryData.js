// Bhutan with Paro Taktsang: Luxury. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
  img('csfou3kxztfubm39810ryp5ifexy_shutterstock_1652381137.jpg'),
  img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
  img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
  img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
  img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
  img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg'),
  img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
  img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
  img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
  img('wt6f33c5vmnsp4nxwzgz9yzoxhmm_1621018987_shutterstock_1459271045.jpg'),
  img('bygb5od4ky5td3nbroqcrcpqdjmt_Ta%20Dzong%20National%20Museum%201.jpg'),
  img('utlsa7h3bnz1p6gok760pdjo12j1_15221606394_bd3684a0fa_b.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Phuentsholing',
    dayLabel: 'Day 1',
    images: [
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
    ],
    dayImages: {
      1: [
        img('l0fq7fjbnhs2rdw73cyv4fa8c62i_Phuentsholing-Market-1024x682.jpg'),
        img('eljv9nfavq2ojeluvwgegg0j5t8o_shutterstock_1380814979.jpg'),
        img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
        img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg')
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
      image: img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg')
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
      image: img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Punakha',
    dayLabel: 'Day 4',
    images: [
      img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg'),
      img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg'),
      img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
      img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg')
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
      name: 'RKPO Green Resort, Punakha',
      description: '1 night · Breakfast · Standard room · 5★ · Riverside hotel in the warm old winter capital',
      images: [
        img('xnknu5wj3e07umfmrnk51i64yug3_eae0335e329011e8bcb602755708f0b3.png'),
        img('1o5f3sjtsgn8vqnchorp70lwtrnx_7c5ae9d474cd11eab3900242ac110002.png'),
        img('xsg5307anmsx6p7rndoi2ao7r2e4_f365216a329011e898920224510f5e5b.png'),
        img('mygnio03l9aizmh0rqy0ff0fsxuw_9d839892c3dd11e89d680224510f5e5b.png'),
        img('rjsk9nsez88yxfotz2b6oysa43h4_279f5671_z.png'),
        img('zrba4iych8245wzy2rnoiwhm9m3a_7afbfb7874cd11ea9b140242ac110002.png'),
        img('sxstah32em9m5v7864vnw8b6re4f_91be85ae_z.png'),
        img('fmruziq87olx7qbkhuuhqq20q1mn_hgunmvncrwnxeugadf3m4jn01rn9_1d83b11e328c11e8a5f602755708f0b3%20copy.jpg'),
        img('aghjr02rb4bcqluvuz05d1bop9lq_f71f62ca329011e898a402755708f0b3.png'),
        img('n2nlkw257804tb2m6citqe22mync_gmdfou7kvh8djzg4qg4p1z5qg593_1581d112328c11e8bc6b0a9df65c8753%20copy.jpg'),
        img('nqoebxenazjia35jjzsgcmmqnnn2_fce336d2329011e8b76b02755708f0b3.png'),
        img('hh62fyt8q4gnjs220rzfm2z7w1vs_cad1e6dc_z.png'),
        img('afxkg3g5gq0z81x0dv3hsabo15jv_ffaf117e329011e8bb2002755708f0b3.png')
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
      image: img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Paro',
    dayLabel: 'Day 5 to 6',
    images: [
      img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
      img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
      img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
      img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg')
    ],
    dayImages: {
      5: [
        img('bygb5od4ky5td3nbroqcrcpqdjmt_Ta%20Dzong%20National%20Museum%201.jpg'),
        img('utlsa7h3bnz1p6gok760pdjo12j1_15221606394_bd3684a0fa_b.jpg'),
        img('rujgh8ecafx36mfda2llkk92i1hk_1578666304_drukgyal_dzong.jpg'),
        img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg')
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
      image: img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Phuentsholing',
    dayLabel: 'Day 7 to 8',
    images: [
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
    ],
    dayImages: {
      7: [
        img('ljpqw4npv8wncod5fq1r7hw2zt5y_shutterstock_1344366731.jpg'),
        img('wzk43phe3f2n5pie7psn6bf6ehe8_torsa%201.jpg'),
        img('khf8y1lpqxenviw5vczf0uh2ytj0_Zangto_Pelri_Lhakhang,_Phuentsholing_during_LGFC_-_Bhutan_2019_(14).jpg'),
        img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg')
      ],
      8: [
        img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
        img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
        img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
        img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
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
  }
];

const detail = {
  slug: 'bhutan-with-paro-taktsang-luxury',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bhutan with Paro Taktsang: Luxury',
  alt: 'Five star resort room looking onto a Bhutanese river',
  days: '8 days / 7 nights',
  stations: '5 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Luxury',
  tags: ['Luxury', 'Culture'],
  price: 100700,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuentsholing', 'Thimphu', 'Punakha', 'Paro', 'Phuentsholing'],
  stats: { days: 8, cities: 5, hotels: 4, activities: 5, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['12 transfers', 'Transport'],
    ['12 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'The eight day circuit in five star properties, including Le Méridien in both Thimphu and Paro.',
    quoteMore: 'Le Méridien Paro backs onto the river and the Taktsang trailhead is fifteen minutes away. Ask for a riverfront room.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '8 days through Phuentsholing, Thimphu, Punakha, Paro, with 7 nights, daily breakfast and a licensed Bhutanese guide: the thimphu sightseeing tour, the punakha sightseeing tour, the paro sightseeing tour, the ta dzong and rinpung dzong.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights across Phuentsholing, Thimphu, Punakha, Paro with daily breakfast; all land transfers by private vehicle; the Thimphu sightseeing tour; the Punakha sightseeing tour; the Paro sightseeing tour; the Ta Dzong and Rinpung Dzong; the Hike to the Tiger\'s Nest; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuentsholing (Arrival)', text: 'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing\nBorder formalities at the Bhutan Gate\nCheck in and the rest of the day free', hotel: 'Tashi Namgay Grand Resort', highlights: ['Arrival at Bagdogra or Siliguri and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Onward to Thimphu (B, L)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nOptional: the Zorig Chusum school of arts\nArrival transfer and check in for the night', hotel: 'dusitD2 Yarkay Thimphu', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'Optional: the Zorig Chusum school of arts'] },
    { title: 'Day 3: Thimphu sightseeing (B, L)', text: 'Breakfast, then out into the capital\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and the takin preserve', hotel: 'dusitD2 Yarkay Thimphu', highlights: ['Breakfast, then out into the capital', 'The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and the takin preserve'] },
    { title: 'Day 4: To Punakha: Punakha Dzong (B, L)', text: 'Breakfast, then east over the Dochula pass\nThe hundred and eight chortens at the top\nPunakha Dzong between the Pho and Mo rivers\nThe long suspension bridge over the water', hotel: 'RKPO Green Resort', highlights: ['Breakfast, then east over the Dochula pass', 'The hundred and eight chortens at the top', 'Punakha Dzong between the Pho and Mo rivers'] },
    { title: 'Day 5: To Paro: Paro sightseeing (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nThe National Museum in the old watchtower\nRinpung Dzong and the Drukgyel ruins', hotel: 'Himalayan Keys Forest Resort', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'The National Museum in the old watchtower'] },
    { title: 'Day 6: Ta dzong and rinpung dzong and tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe round watchtower holding the National Museum\nRinpung Dzong on the slope above the river\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Himalayan Keys Forest Resort', highlights: ['Breakfast, then out into the Paro valley', 'The round watchtower holding the National Museum', 'Rinpung Dzong on the slope above the river'] },
    { title: 'Day 7: Onward to Phuentsholing (B)', text: 'Breakfast, then the long run back south\nDown through the Chukha gorge to the plains\nOptional: Zangto Pelri Lhakhang in the town\nArrival transfer and check in for the night', hotel: 'Tashi Namgay Grand Resort', highlights: ['Breakfast, then the long run back south', 'Down through the Chukha gorge to the plains', 'Optional: Zangto Pelri Lhakhang in the town'] },
    { title: 'Day 8: Departure from Phuentsholing (B)', text: 'Breakfast at the hotel and check out\nBorder formalities and transfer to Siliguri', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Border formalities and transfer to Siliguri'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Bhutan', href: '/asien/bhutan' },
  { label: detail.title }
];

export const bhutanTaktsangLuxuryBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bhutanTaktsangLuxuryProduct = {
  slug: detail.slug,
  places: ['Phuentsholing', 'Thimphu', 'Punakha', 'Paro'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 5,
  hotels: 4,
  cities: 5,
  activities: 5,
  transfers: 12,
  meals: 12,
  price: detail.price,
  images: cardImages
};
