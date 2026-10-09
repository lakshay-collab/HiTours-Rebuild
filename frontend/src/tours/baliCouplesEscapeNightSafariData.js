// Bali Couples Escape with Night Safari. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
  img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
  img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
  img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
  img('e81e8w6ia95ocbac34rigtxfwddd_slide-8.jpg'),
  img('63rp5vt6fg9lnhd2bsolet8cpft3_ezgif-4-1fcf41f031.jpg'),
  img('zwzrpc8zhw3jl7ltwuqtrh8zmm8s_bali%20handara%20gate.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Ubud',
    subtitle: 'Ubud to Bedugul and the safari park',
    dayLabel: 'Day 1 to 4',
    images: [
      img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
      img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
      img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
      img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg')
    ],
    dayImages: {
      1: [
        img('4qzfjlhp9rb7opyc8dzvjjpgi0cy_1470896048_9396103363_d354fd2bc4_b.jpg'),
        img('blc7rv8lvishrrzjuxwmcwyxm2ev_1464182679_Bali-Bird-Park-42414.jpg'),
        img('kmleb6ur2b7j83f6gt2jg3z1kaw0_1470727921_Goa_Gajah_Front.JPG'),
        img('p5qmu24btsi6rw9ye14yp9y3v9js_1464162732_things-to-do-in-bali-ubud-art-market.jpg')
      ],
      2: [
        img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('p1tzfipjpmq6677grx16krlrwx9v_shutterstock_243349891.jpg')
      ],
      3: [
        img('7tfkrhr259gnolwm9ec49ng5v2ff_Ulun%20Danu%20Temple%201.jpg'),
        img('e81e8w6ia95ocbac34rigtxfwddd_slide-8.jpg'),
        img('63rp5vt6fg9lnhd2bsolet8cpft3_ezgif-4-1fcf41f031.jpg'),
        img('zwzrpc8zhw3jl7ltwuqtrh8zmm8s_bali%20handara%20gate.jpg')
      ],
      4: [
        img('hhhu10tba5yumzkwh2ta9yvt82df_17015830_10154515632888931_1877145227028070565_o.jpg'),
        img('bs96fl43584uve7wwhbrody0iv75_1470736645_Bali_Safari__26_Marine_Park_(2688909441).jpg'),
        img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
        img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Ubud`,
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your Ubud villa and settle in',
      'First evening free among the rice fields',
      'Optional: Goa Gajah, the art market or the ARMA museum',
      `${DAY_MARK}Day 2 · Kintamani and rice terraces`,
      'Breakfast, then a full day out with your own car and guide',
      'Coffee plantation tasting on the climb to Kintamani',
      'Tegenungan waterfall and the Tegalalang rice terraces',
      'A turn on the jungle swing above the valley',
      `${DAY_MARK}Day 3 · Bedugul lakes and Tanah Lot`,
      'Breakfast, then north to the Handara gate for photographs',
      'Ulun Danu Beratan, the temple standing on the lake',
      'Sunset at Tanah Lot, the sea temple on the rocks',
      'Evening back in Ubud at your own pace',
      `${DAY_MARK}Day 4 · An evening at the night safari`,
      'Breakfast and a slow morning at the villa',
      'Afternoon at Bali Safari and Marine Park',
      'Night tram ride past the lions, tigers and rhinos',
      'Fire dance performance and dinner at the park'
    ],
    accommodation: {
      name: 'Asri Sari Villa, Ubud',
      description: '4 nights · Breakfast · Standard room · 3★ · Small villa property on the quiet edge of Ubud',
      images: [
        img('fmuyd4t6a8tae2mhjjq2kgvyrm4k_372195715.jpg'),
        img('19wdfzhuqz6ue1uwxbiwpekmran5_5a9b05866a6511e9b5360242ac110003.png'),
        img('cpejht313797g9yyaikchyjhgpty_372200719.jpg'),
        img('z1qa6sp20a5dd5vsi30pyts7fy36_59669518.jpg'),
        img('vns8yppqyy3ip3h6f9o64p0qtlu6_372195922.jpg'),
        img('3mow5ys0xodjbfm6xe5wputfa4iq_63fc5aee6a6511e9b2f80242ac110003.png'),
        img('7r40v7oznz3921ku04miantjszrm_372196695.jpg'),
        img('gwukjles0c8i1p4mrv8bmgomi1t0_04d0e9ad09ce12a36ef7fc8e0eaf6738.jpg'),
        img('9j5zhfyigdo6i2fi54u82rpmaqt4_372201177.jpg'),
        img('yue6hy3g3tnfbkw947izz0o2a69p_372199611.jpg')
      ]
    },
    activities: [
      {
        name: 'Kintamani and rice terrace day tour',
        day: 2,
        optional: false,
        image: img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        description: 'Coffee plantation tasting on the way to Kintamani, the crater lake view, Tegenungan waterfall, the Tegalalang terraces and the jungle swing.'
      },
      {
        name: 'Bedugul lakes and Tanah Lot sunset',
        day: 3,
        optional: false,
        image: img('7tfkrhr259gnolwm9ec49ng5v2ff_Ulun%20Danu%20Temple%201.jpg'),
        description: 'The Handara gate, the lake temple of Ulun Danu Beratan at Bedugul, then Tanah Lot on its rock shelf as the light goes.'
      },
      {
        name: 'Bali Night Safari',
        day: 4,
        optional: false,
        image: img('hhhu10tba5yumzkwh2ta9yvt82df_17015830_10154515632888931_1877145227028070565_o.jpg'),
        description: 'An evening tram ride through Bali Safari and Marine Park to see the night animals, with a fire dance performance and dinner at the park.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Four nights in a villa on the edge of town, with the crater lake at Kintamani, the lake temples of Bedugul and an evening safari.',
      image: img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuta',
    subtitle: 'Kuta to Nusa Penida',
    dayLabel: 'Day 5 to 7',
    images: [
      img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
      img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
      img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
      img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
    ],
    dayImages: {
      5: [
        img('g4aium5gj1oi4lbxfz1v2dgb2qp0_shutterstock_2427199549%20(1).jpg'),
        img('juwl1o8l3l3t7cd3tign11f5qbwb_23cfa5a555774cb793ff972ba1311093.jpg'),
        img('xxjdwssfts50rzk5wfvzelladqqu_1498724507_beach.jpg'),
        img('raz6i8qsplkduo2ddqpr2tqbahzi_download%20(11).jpg')
      ],
      6: [
        img('pntcqhuq42iqwedahw0vddb29dat_shutterstock_635175203.jpg'),
        img('neznowe35mxcnjj84559i40ojhl7_1628342893_f98dbd26-1189-4c22-9e39-d8b3054eabdd.jpeg.jpg'),
        img('g72m3ehync8t6tn7yjyz5dm47mq1_1470898081_17_Years_of_Sekar_Jepun_2014-11-01_64_edit.jpg'),
        img('hoz1563nqoiy0uepnjdcqadxfjrl_shutterstock_672105433.jpg')
      ],
      7: [
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
        img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
        img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Nusa Penida and on to Kuta`,
      'Early breakfast and check out, then on to Sanur harbour',
      'Speedboat across to Nusa Penida for the west coast',
      'Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach',
      'Private transfer to your Kuta hotel in the evening',
      `${DAY_MARK}Day 6 · Spa and sunset cruise`,
      'Breakfast and a slow morning by the pool',
      'A traditional Balinese massage for two at a nearby spa',
      'Sunset dinner cruise out of Benoa harbour',
      'Optional: Kuta Square or the art market before the cruise',
      `${DAY_MARK}Day 7 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'Kuta Central Park Hotel, Kuta',
      description: '2 nights · Breakfast · Standard room · 4★ · Large pool hotel ten minutes from Kuta beach',
      images: [
        img('l3z6cusnu3visu607x27ji8lg6w2_CghzgVUwY1-ANyOoAAJBeQxhhp4409_W_1280_853_R5.webp'),
        img('mnfh6tj3j57xibt9tv5mwytoc604_88283476.jpg'),
        img('b5wm3ckydivqpvnmhkyfhgge7njr_170843272.jpg'),
        img('z9u3fcsksv9v25zpebjkizk0m7el_220u0g0000007x8eoFA39_W_1280_853_R5.webp'),
        img('krk01wm460rwvbz5zp1984hjhp82_221713340.jpg'),
        img('s6qkb6bk0gg79gf3c60zl0nv9t5x_2ef9a499_z.jpg'),
        img('sb5x8ojhdp2ttzwfqck1ztwroxin_221712713.jpg'),
        img('vb5uibq6sjy972ddh09ua9r4674n_4f123f80_z.webp'),
        img('h59zs5lnd1ldayvg9c4c0ej93hn5_220l0g0000007xkkjCB82_W_1280_853_R5.webp'),
        img('b6f3qfufgppm63qciya2ikrcyv6m_221718558.jpg'),
        img('dxqnkgmvzitlqhd6c5lo3j55c2xf_221713612.jpg'),
        img('hdy12p7f58qw5en0h1302ak8yevw_216025896.jpg'),
        img('97yyx6xycbdme491w5hf5hop1cmt_161438a_hb_k_002.jpg'),
        img('zrnhedcus3vn7z9mtnxrbg5orkbk_1888d976_z.webp')
      ]
    },
    activities: [
      {
        name: 'Nusa Penida west coast by speedboat',
        day: 5,
        optional: false,
        image: img('g4aium5gj1oi4lbxfz1v2dgb2qp0_shutterstock_2427199549%20(1).jpg'),
        description: 'A private island day: Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach, with a speedboat each way from Sanur.'
      },
      {
        name: 'Balinese massage for two',
        day: 6,
        optional: false,
        image: img('pntcqhuq42iqwedahw0vddb29dat_shutterstock_635175203.jpg'),
        description: 'A traditional Balinese massage for both of you, warm oil and long pressure strokes, booked privately at a spa near your hotel.'
      },
      {
        name: 'Sunset dinner cruise',
        day: 6,
        optional: false,
        image: img('hoz1563nqoiy0uepnjdcqadxfjrl_shutterstock_672105433.jpg'),
        description: 'A half day cruise out of Benoa harbour with dinner on board and live music, timed for sunset over the Bukit peninsula.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Two nights on the coast with a private island day on Nusa Penida, a couples massage and a sunset cruise with dinner on the water.',
      image: img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
    }
  }
];

const detail = {
  slug: 'bali-couples-escape-with-night-safari',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bali Couples Escape with Night Safari',
  alt: 'Tegalalang rice terraces near Ubud, Bali',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided day tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Culture'],
  price: 40612,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ubud', 'Kintamani', 'Bedugul', 'Kuta', 'Nusa Penida'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 6, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Four nights in Ubud is the luxury here. You unpack once, and the island comes to you day by day.',
    quoteMore: 'The night safari runs late, so keep the next morning gentle. Couples usually ask for the cruise on the last full evening, and it is the better order because you fly home relaxed.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days for two with four nights in a villa near Ubud, the crater lake at Kintamani, lake temples at Bedugul, an evening safari with dinner, then Nusa Penida, a couples massage and a sunset dinner cruise from Kuta.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with daily breakfast; private airport and inter city transfers; Kintamani and rice terrace tour; Bedugul and Tanah Lot sunset tour; Bali Night Safari with dinner; private Nusa Penida west coast tour; Balinese massage for two; sunset dinner cruise.',
  intro2: 'Not included: international flights; Indonesia visa fees; lunches and other dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Ubud (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your Ubud villa and settle in\nFirst evening free among the rice fields\nOptional: Goa Gajah, the art market or the ARMA museum', hotel: 'Asri Sari Villa, Ubud', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your Ubud villa and settle in', 'First evening free among the rice fields'] },
    { title: 'Day 2: Kintamani and rice terraces (B)', text: 'Breakfast, then a full day out with your own car and guide\nCoffee plantation tasting on the climb to Kintamani\nTegenungan waterfall and the Tegalalang rice terraces\nA turn on the jungle swing above the valley', hotel: 'Asri Sari Villa, Ubud', highlights: ['Breakfast, then a full day out with your own car and guide', 'Coffee plantation tasting on the climb to Kintamani', 'Tegenungan waterfall and the Tegalalang rice terraces'] },
    { title: 'Day 3: Bedugul lakes and Tanah Lot (B)', text: 'Breakfast, then north to the Handara gate for photographs\nUlun Danu Beratan, the temple standing on the lake\nSunset at Tanah Lot, the sea temple on the rocks\nEvening back in Ubud at your own pace', hotel: 'Asri Sari Villa, Ubud', highlights: ['Breakfast, then north to the Handara gate for photographs', 'Ulun Danu Beratan, the temple standing on the lake', 'Sunset at Tanah Lot, the sea temple on the rocks'] },
    { title: 'Day 4: An evening at the night safari (B)', text: 'Breakfast and a slow morning at the villa\nAfternoon at Bali Safari and Marine Park\nNight tram ride past the lions, tigers and rhinos\nFire dance performance and dinner at the park', hotel: 'Asri Sari Villa, Ubud', highlights: ['Breakfast and a slow morning at the villa', 'Afternoon at Bali Safari and Marine Park', 'Night tram ride past the lions, tigers and rhinos'] },
    { title: 'Day 5: Nusa Penida and on to Kuta (B)', text: 'Early breakfast and check out, then on to Sanur harbour\nSpeedboat across to Nusa Penida for the west coast\nKelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach\nPrivate transfer to your Kuta hotel in the evening', hotel: 'Kuta Central Park Hotel, Bali', highlights: ['Early breakfast and check out, then on to Sanur harbour', 'Speedboat across to Nusa Penida for the west coast', 'Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach'] },
    { title: 'Day 6: Spa and sunset cruise (B, D)', text: 'Breakfast and a slow morning by the pool\nA traditional Balinese massage for two at a nearby spa\nSunset dinner cruise out of Benoa harbour\nOptional: Kuta Square or the art market before the cruise', hotel: 'Kuta Central Park Hotel, Bali', highlights: ['Breakfast and a slow morning by the pool', 'A traditional Balinese massage for two at a nearby spa', 'Sunset dinner cruise out of Benoa harbour'] },
    { title: 'Day 7: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; lunches and other dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Indonesia', href: '/asien/indonesia' },
  { label: detail.title }
];

export const baliCouplesEscapeNightSafariBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const baliCouplesEscapeNightSafariProduct = {
  slug: detail.slug,
  places: ['Ubud', 'Kintamani', 'Bedugul', 'Kuta', 'Nusa Penida'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 6,
  transfers: 10,
  meals: 7,
  price: detail.price,
  images: cardImages
};
