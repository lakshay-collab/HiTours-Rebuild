// Grand Bali Couples Holiday with Nusa Penida. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
  img('g0t0mh43qo71fxwqz74nrg63og6j_shutterstock_1016069797.jpg'),
  img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('rl2ltcl6c4qtzqfy1tezdt99jxse_shutterstock_1494211880.jpg'),
  img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
  img('943axaaz5w3zqf6uik398b0xxpzq_shutterstock_1426890086.jpg'),
  img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Kuta',
    subtitle: 'Kuta to Uluwatu',
    dayLabel: 'Day 1 to 2',
    images: [
      img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
      img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
      img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
      img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
    ],
    dayImages: {
      1: [
        img('51ipjklsbkrjnk7nmdfl5zq0cvfb_1580732870_shutterstock_491952556.jpg'),
        img('cxmrkz76yxosuiiwcc2v6zz8trhr_unnamed%20(4).webp'),
        img('1fqa7ueavxmfwfwlj7sjhj5zxobm_Vue%20beach%20club-1.webp'),
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
      ],
      2: [
        img('wdeo42e7dxvmmk4r2t06kw95kxli_Downpic.cc-image468394368.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('usdgmsoaand8ytcb34q674qu6c2p_1470909118_Hanoman_Kecak_Dance_Uluwatu_sunset.jpg'),
        img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Flight to Bali and Kuta`,
      'Flight from Delhi to Denpasar, included in your package',
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in and a first walk on Kuta beach',
      'Rest of the evening free near the hotel',
      `${DAY_MARK}Day 2 · Water sports and Uluwatu`,
      'Breakfast, then a morning at Tanjung Benoa beach',
      'Parasailing, jet ski and a banana boat with an instructor',
      'Uluwatu temple on the cliffs at sunset',
      'Kecak fire dance in the amphitheatre afterwards'
    ],
    accommodation: {
      name: 'Ramada by Wyndham Bali Sunset Road, Kuta',
      description: '2 nights · Breakfast · Super deluxe room · 4★ · Four star hotel on Sunset Road with a large pool deck',
      images: [
        img('3x1874gte30nk2aa5bn085zi63qv_img31.jpg'),
        img('9pgku2sip9elxsfzqadb2x4i9yjt_img2.jpg'),
        img('t4m2klxfie4g6ncr7rsbo526sjov_img8.jpg'),
        img('fesuopa899zu04hwqwv7vzddgywr_img12.jpg'),
        img('7qo88mrd9h0htlq4h4g7qwbwxdta_img1.jpg'),
        img('q9zcsj1bcyxy25ul916vg7iviel2_img3.jpg'),
        img('0jm8budvr14ud4osus4vmvr02uzd_img13.jpg'),
        img('94voehahs3pjrdmw5glq5f2cyo6o_img15.jpg'),
        img('j6en9104oanddm51s5lgtte9ksi3_img19.jpg'),
        img('ryl7977iwdrblyrg40kfotp2hiu4_img33.jpg'),
        img('40m5hqx9qf6caidr8lk1tx7huhod_img44.jpg'),
        img('izrc6o17hq427ebnu7p5c0sv3v3k_img38.jpg'),
        img('xoie1rpuw2y2g5w3l8hjnmaf6itx_88839247.jpg')
      ]
    },
    activities: [
      {
        name: 'Water sports, Uluwatu and the Kecak dance',
        day: 2,
        optional: false,
        image: img('wdeo42e7dxvmmk4r2t06kw95kxli_Downpic.cc-image468394368.jpg'),
        description: 'Parasailing, jet ski and a banana boat at Tanjung Benoa, then Uluwatu temple at sunset and the Kecak fire dance in the amphitheatre.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Two nights on the south coast to begin, with water sports at Tanjung Benoa and the Uluwatu cliffs at sunset.',
      image: img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Nusa Penida',
    dayLabel: 'Day 3',
    images: [
      img('yall971xpnuvgmp51j4mlomavis6_shutterstock_1480863929%20(1).jpg'),
      img('g0t0mh43qo71fxwqz74nrg63og6j_shutterstock_1016069797.jpg'),
      img('943axaaz5w3zqf6uik398b0xxpzq_shutterstock_1426890086.jpg'),
      img('tmm6hiprx1spsi12187aimsbn8fx_shutterstock_497436847.jpg')
    ],
    dayImages: {
      3: [
        img('cguivougdg0xu06qtmdqkhs278dr_Kelingking%20Beach,%20Nusa%20Penida%203.jpg'),
        img('juwl1o8l3l3t7cd3tign11f5qbwb_23cfa5a555774cb793ff972ba1311093.jpg'),
        img('xxjdwssfts50rzk5wfvzelladqqu_1498724507_beach.jpg'),
        img('o974vnhozbrtaa60gdp3uzoxorjz_37530932040_49a7318d15_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Across to Nusa Penida`,
      'Breakfast and check out, then on to Sanur harbour',
      'Speedboat across to Nusa Penida and check in',
      'Kelingking beach, Angel\'s Billabong and Broken Bay',
      'Snorkelling off Crystal Bay before dinner'
    ],
    accommodation: {
      name: 'The Angkal Resort, Nusa Penida',
      description: '1 night · Breakfast · Deluxe room · 3★ · Island resort with a pool, close to the west coast viewpoints',
      images: [
        img('i8bz37gei8wm5qcpgq2w2tl8t6un_pixelcut-export%20(5).jpeg'),
        img('zxogce8ky5lpjkjqc5uvxsg7hxbj_190029004.jpg'),
        img('tlh1tvrhlynt0aykkkl6q3kbd3yg_367289354.jpg'),
        img('1ah5o7djdyqpbsc0t4gxg567skbg_367286863.jpg'),
        img('bnczboqyccfaegy626mewey549rb_367286868.jpg'),
        img('1ii1rx7nb18dhg7zs42yev661n6e_367294102.jpg'),
        img('kmh90m6magbvlsim2vz6ttiv8zrm_367289349.jpg'),
        img('0fy247jqkg6ail5trblcvv0a62qy_367286876.jpg'),
        img('n028gixocerm4ywcggcuigbedb9o_354447152.jpg'),
        img('56mcna07wz8dxc8qnmdq5ya9hui1_367286869.jpg')
      ]
    },
    activities: [
      {
        name: 'Nusa Penida west with snorkelling',
        day: 3,
        optional: false,
        image: img('cguivougdg0xu06qtmdqkhs278dr_Kelingking%20Beach,%20Nusa%20Penida%203.jpg'),
        description: 'Kelingking beach, Angel\'s Billabong and Broken Bay with your own guide, then snorkelling in the clear water off Crystal Bay.'
      }
    ],
    program: {
      name: 'Nusa Penida',
      description: 'A night on the island itself, which means you see the west coast viewpoints without the rush of a day boat.',
      image: img('yall971xpnuvgmp51j4mlomavis6_shutterstock_1480863929%20(1).jpg')
    }
  },
  {
    letter: 'C',
    name: 'Ubud',
    subtitle: 'Ubud to Kintamani',
    dayLabel: 'Day 4 to 7',
    images: [
      img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
      img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
      img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
      img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg')
    ],
    dayImages: {
      4: [
        img('2lqubqpwc7pgzj7podybztx47o8g_k1pjs1b8l54axfq37sc0s10so5j1_shutterstock_132434978.webp'),
        img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
        img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
        img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg')
      ],
      5: [
        img('ufrk6ndjja0qqsjcik54drq43b02_shutterstock_2214240119%20(2).jpg'),
        img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
        img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
        img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg')
      ],
      6: [
        img('66bta6tykrqswxkgaqcapozcbqei_Kintamani%20Highlands,%20Bali%201.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('p1tzfipjpmq6677grx16krlrwx9v_shutterstock_243349891.jpg')
      ],
      7: [
        img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
        img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
        img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
        img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · On to Ubud and a spa hour`,
      'Breakfast, then the boat back to Bali',
      'Private transfer north to your Ubud resort',
      'An hour of Balinese massage for two at the spa',
      'Rest of the day free in the valley',
      `${DAY_MARK}Day 5 · Quad bikes in the rice fields`,
      'Breakfast, then ninety minutes on a tandem quad bike',
      'Rice fields, a river crossing and a cave tunnel',
      'Afternoon free at the resort pool',
      'Optional: the Monkey Forest or the Ubud market lanes',
      `${DAY_MARK}Day 6 · Kintamani and the jungle swing`,
      'Breakfast, then a full day out with your own car and guide',
      'Coffee plantation tasting on the climb to Kintamani',
      'The crater lake view across Mount Batur',
      'A turn on the jungle swing above the valley',
      `${DAY_MARK}Day 7 · Departure from Bali`,
      'Breakfast at the resort and check out',
      'Private transfer to Ngurah Rai Airport for your return flight'
    ],
    accommodation: {
      name: 'FuramaXclusive Resort & Villas, Ubud',
      description: '3 nights · Breakfast · Luxury room · 5★ · Five star resort in the valley north of Ubud town',
      images: [
        img('sbib0eycpqr574aaejjei16mn2zj_2e8a0466a93d37a55e383a1e8702cff16b1c3ca5.JPEG'),
        img('y8aexsx5xd4a4yp90sarlo0qo2q5_c7d4e096ce3358460ca872e4a8ffbb221181c185.jpeg'),
        img('mefj1chqqo1fie5ijjg9s693k1yg_2c5507345ac703ca50cd914f0f91a33ac7d7ad99.jpeg'),
        img('hggy3he5d8nzfg7g7q15rqdyy6ec_5ff001bfa61609f7095f966e22736665b13360a1.JPEG'),
        img('5cwm3q97rnue46z2gbsktmou0lmc_500ea19a9e25dac1dc63dd2867f7e649b714dc4c.JPEG'),
        img('hh8lalmd9r6xlyy1yh0xw3wiinqj_2c2db582f343907c35660688755ade8f627f6f0a.jpeg'),
        img('dyc2m01nj6tg1dow666enqkrstx5_6fc068ded8f781b10d5ac2e7c59faa2d21b8334c.jpeg'),
        img('goho1m173j98opqeoctjh8yahmze_9a5ab8f67be5b41875fb587e57b0d6b4d78a7e2e.JPEG'),
        img('vax924qdq0dvoadsb2al6dv25cjm_521b002e0ec0946c1b70f7a98c777b8e34e47656.JPEG'),
        img('jjqgzqgqenwwmei6ctjai1mghzw5_d82b968f4dcc52584a53b84cd18c1cd6cddf3a21.JPEG'),
        img('lbv45f9k8jqzjdxjxycr9qc7jkm7_73fb07638b75c96bebb198e393b91c058a814769.jpeg'),
        img('v6iw82oh2w7hjkdn9s95u1fa5eaz_45f234cc566760dd689156a5e188fd1a887c0ee6.jpeg'),
        img('3vhvkqhxsjicigx1k35e9rzh3psw_c27c59d2eb5dd0403cd3197d5ca2a0f23b8f25e9.jpeg'),
        img('d1djbgfl027f3xm7ollpy6ijqc4v_9e7580ddf75b46354431280a668fd4b772955ccb.jpeg'),
        img('qe90aghzdwcwsm4uv3if3rw0u7en_aaa462ca50cec7c2e5fcb20ce83b20b476ea7eaa.jpeg'),
        img('salcdc6pjtkvuwgomdmq0tajx2gk_8da79cd86e83fc5bc542806c0647023857c05eb6.jpeg'),
        img('rpaeo0suk1gajytj6zaqwi4sfa6p_f32bbda5e5ea42f1c68493a51f427c9247774ecf.jpeg'),
        img('8vrd0mitg0f82ww02emkqc13w2ht_86a89ae9d98e4b3b99330029a6234b6f1b694cba.jpeg'),
        img('m8btcqljkbxso7vuvyti2zynl2nl_7b561d57e31c558ff443489d8bfb863f2efbdd5e.jpeg'),
        img('i7503jqzdnonqa49wdntxae9hsg8_408c9a34c33e9487151112d69d5f8577ab81f25b.JPEG'),
        img('pn2hm4l3rb8rkdx6gzb4cpyzb7lq_be5ff19fe42ce5df8ee5cf7a74fde22b16852afb.jpeg'),
        img('szj2swgi590iw5qy7xe1pdqgyp3w_8b329d7a5629865c34192bf19e47fcd0c61df273.jpeg'),
        img('hjlaugin9gqsr9pgkmhst8k39ifl_19d4fe252765042b752ffaf77158cc26530845f3.jpeg'),
        img('58xjncxib9ygsex597swb5nzi7dy_6a76ba325f711c584f250b4de57224167ef1ad38.jpeg'),
        img('wurft6css4ptkmncuu0sb607ohz7_11272e864f3f9aad589207c1e602bf439c1f40d6.jpeg'),
        img('klm2m5flfqc8npa82sa6r4rlgayp_eba7b1108343e4b3b89cfe8b4cfe47b5c9431a2c.jpeg'),
        img('n9ih1soj91xhdw147fj1e4aizme5_98a0c406ebf733fc45ff681fa819a64ecc73a5aa.jpeg'),
        img('a9bwg4yth2s5s4iuvh5hlr8zdexl_8e759bbfce0ca1318dd6dd2087b3d903b178c912.jpeg'),
        img('dobl8e1shjwj936dfxmd46hdl9pu_5da68d64102cbeb727080c8c2ee40edbdcbca5b8.JPEG')
      ]
    },
    activities: [
      {
        name: 'Balinese massage for two',
        day: 4,
        optional: false,
        image: img('2lqubqpwc7pgzj7podybztx47o8g_k1pjs1b8l54axfq37sc0s10so5j1_shutterstock_132434978.webp'),
        description: 'An hour of traditional Balinese massage for both of you on arrival in Ubud, warm oil and long pressure strokes at the resort spa.'
      },
      {
        name: 'Tandem ATV ride',
        day: 5,
        optional: false,
        image: img('ufrk6ndjja0qqsjcik54drq43b02_shutterstock_2214240119%20(2).jpg'),
        description: 'Ninety minutes on a two seat quad bike through rice fields, a river crossing and a cave tunnel, with helmets and a guide ahead.'
      },
      {
        name: 'Kintamani with the jungle swing',
        day: 6,
        optional: false,
        image: img('66bta6tykrqswxkgaqcapozcbqei_Kintamani%20Highlands,%20Bali%201.jpg'),
        description: 'A coffee plantation tasting, the crater lake view at Kintamani and a turn on the jungle swing above the Tegalalang valley.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Three nights in a five star valley resort to finish, with a spa hour, a quad bike morning and a coffee plantation day up to Kintamani.',
      image: img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg')
    }
  }
];

const detail = {
  slug: 'grand-bali-couples-holiday-with-nusa-penida',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Grand Bali Couples Holiday with Nusa Penida',
  alt: 'Sunrise over the cliffs of Nusa Penida, Bali',
  days: '7 days / 6 nights',
  stations: '3 stops',
  transport: 'Return flights, private transfers and guided tours',
  tag: 'Luxury',
  tags: ['Honeymoon', 'Luxury'],
  price: 88112,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kuta', 'Uluwatu', 'Nusa Penida', 'Ubud', 'Kintamani'],
  stats: { days: 7, cities: 3, hotels: 3, activities: 5, transfers: 13 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['13 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Sleeping on Nusa Penida changes the trip. You get Kelingking in the soft morning light with nobody else on the path.',
    quoteMore: 'Pack an overnight bag for the island so the big cases stay in Kuta. The last boat back leaves in the early afternoon, which is why Ubud gets a gentle arrival day.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days with return flights, two nights on the Kuta coast, a night on Nusa Penida itself for the west coast viewpoints and snorkelling, then three nights in a five star valley resort near Ubud with a spa hour, quad bikes and Kintamani.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: return flights from Delhi; 6 nights with daily breakfast; private transfers and the Nusa Penida speedboat; water sports with Uluwatu and the Kecak dance; private Nusa Penida west coast tour with snorkelling; Balinese massage for two; tandem ATV ride; Kintamani highlands tour.',
  intro2: 'Not included: Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Flight to Bali and Kuta (Arrival)', text: 'Flight from Delhi to Denpasar, included in your package\nArrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in and a first walk on Kuta beach\nRest of the evening free near the hotel', hotel: 'Ramada by Wyndham Bali Sunset Road Kuta', highlights: ['Flight from Delhi to Denpasar, included in your package', 'Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in and a first walk on Kuta beach'] },
    { title: 'Day 2: Water sports and Uluwatu (B)', text: 'Breakfast, then a morning at Tanjung Benoa beach\nParasailing, jet ski and a banana boat with an instructor\nUluwatu temple on the cliffs at sunset\nKecak fire dance in the amphitheatre afterwards', hotel: 'Ramada by Wyndham Bali Sunset Road Kuta', highlights: ['Breakfast, then a morning at Tanjung Benoa beach', 'Parasailing, jet ski and a banana boat with an instructor', 'Uluwatu temple on the cliffs at sunset'] },
    { title: 'Day 3: Across to Nusa Penida (B)', text: 'Breakfast and check out, then on to Sanur harbour\nSpeedboat across to Nusa Penida and check in\nKelingking beach, Angel\'s Billabong and Broken Bay\nSnorkelling off Crystal Bay before dinner', hotel: 'The Angkal Resort Nusa Penida Bali', highlights: ['Breakfast and check out, then on to Sanur harbour', 'Speedboat across to Nusa Penida and check in', 'Kelingking beach, Angel\'s Billabong and Broken Bay'] },
    { title: 'Day 4: On to Ubud and a spa hour (B)', text: 'Breakfast, then the boat back to Bali\nPrivate transfer north to your Ubud resort\nAn hour of Balinese massage for two at the spa\nRest of the day free in the valley', hotel: 'FuramaXclusive Resort & Villas, Ubud Resort', highlights: ['Breakfast, then the boat back to Bali', 'Private transfer north to your Ubud resort', 'An hour of Balinese massage for two at the spa'] },
    { title: 'Day 5: Quad bikes in the rice fields (B)', text: 'Breakfast, then ninety minutes on a tandem quad bike\nRice fields, a river crossing and a cave tunnel\nAfternoon free at the resort pool\nOptional: the Monkey Forest or the Ubud market lanes', hotel: 'FuramaXclusive Resort & Villas, Ubud Resort', highlights: ['Breakfast, then ninety minutes on a tandem quad bike', 'Rice fields, a river crossing and a cave tunnel', 'Afternoon free at the resort pool'] },
    { title: 'Day 6: Kintamani and the jungle swing (B)', text: 'Breakfast, then a full day out with your own car and guide\nCoffee plantation tasting on the climb to Kintamani\nThe crater lake view across Mount Batur\nA turn on the jungle swing above the valley', hotel: 'FuramaXclusive Resort & Villas, Ubud Resort', highlights: ['Breakfast, then a full day out with your own car and guide', 'Coffee plantation tasting on the climb to Kintamani', 'The crater lake view across Mount Batur'] },
    { title: 'Day 7: Departure from Bali (B)', text: 'Breakfast at the resort and check out\nPrivate transfer to Ngurah Rai Airport for your return flight', hotel: 'Departure', highlights: ['Breakfast at the resort and check out', 'Private transfer to Ngurah Rai Airport for your return flight'] }
  ],
  outro: 'Not included: Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Indonesia', href: '/asien/indonesia' },
  { label: detail.title }
];

export const grandBaliCouplesNusaPenidaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const grandBaliCouplesNusaPenidaProduct = {
  slug: detail.slug,
  places: ['Kuta', 'Uluwatu', 'Nusa Penida', 'Ubud', 'Kintamani'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 5,
  transfers: 13,
  meals: 6,
  price: detail.price,
  images: cardImages
};
