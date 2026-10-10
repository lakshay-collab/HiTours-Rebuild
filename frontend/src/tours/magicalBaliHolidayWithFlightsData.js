// Magical Bali Holiday with Flights. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
  img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
  img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
  img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
  img('j77jznt391oh7jxf1trzt8ni4ova_1576135551_13307387475_d799ea8cae_b.jpg'),
  img('p1tzfipjpmq6677grx16krlrwx9v_shutterstock_243349891.jpg'),
  img('gm4z6h3ftihhgfjz5wv0dkxygzy1_Tanah%20Lot%20Temple.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Ubud',
    subtitle: 'Ubud to Kintamani',
    dayLabel: 'Day 1 to 2',
    images: [
      img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
      img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
      img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
      img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg')
    ],
    dayImages: {
      1: [
        img('4qzfjlhp9rb7opyc8dzvjjpgi0cy_1470896048_9396103363_d354fd2bc4_b.jpg'),
        img('j77jznt391oh7jxf1trzt8ni4ova_1576135551_13307387475_d799ea8cae_b.jpg'),
        img('blc7rv8lvishrrzjuxwmcwyxm2ev_1464182679_Bali-Bird-Park-42414.jpg'),
        img('kmleb6ur2b7j83f6gt2jg3z1kaw0_1470727921_Goa_Gajah_Front.JPG')
      ],
      2: [
        img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('p1tzfipjpmq6677grx16krlrwx9v_shutterstock_243349891.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Ubud`,
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your Ubud villa and unwind',
      'Evening free among the rice fields',
      'Optional: the Ubud art market or Goa Gajah cave temple',
      `${DAY_MARK}Day 2 · Kintamani and the jungle swing`,
      'Breakfast, then a full day out with your own car and guide',
      'Coffee plantation tasting on the climb to Kintamani',
      'Tegalalang rice terraces and Tegenungan waterfall',
      'A turn on the jungle swing, with lunch included'
    ],
    accommodation: {
      name: 'Asri Sari Villa, Ubud',
      description: '2 nights · Breakfast · Standard room · 3★ · Small villa property on the quiet edge of Ubud',
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
        name: 'Kintamani with the jungle swing',
        day: 2,
        optional: false,
        image: img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        description: 'Coffee plantation tasting, the Tegalalang rice terraces, Tegenungan waterfall and a turn on the jungle swing, with lunch included along the way.'
      },
      {
        name: 'Ubud art market',
        day: 1,
        optional: true,
        image: img('p5qmu24btsi6rw9ye14yp9y3v9js_1464162732_things-to-do-in-bali-ubud-art-market.jpg'),
        description: 'Two floors of carvings, batik, woven bags and silver, best in the early morning when the stalls open and the prices are softest.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Two nights inland to start, with a coffee plantation road up to Kintamani, the rice terraces at Tegalalang and a waterfall stop.',
      image: img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuta',
    subtitle: 'Kuta to Tanah Lot and Nusa Penida',
    dayLabel: 'Day 3 to 6',
    images: [
      img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
      img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
      img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
      img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
    ],
    dayImages: {
      3: [
        img('gm4z6h3ftihhgfjz5wv0dkxygzy1_Tanah%20Lot%20Temple.jpg'),
        img('yypn4ifqplle2k6xycas2byxrje8_The-beautiful-looks-of-Ulun-Danu-temple-at-Beratan-lakeside-in-Bedugul-highland-Buleleng-regency-Bali-island-Bali-Hello-Travel-21.jpg'),
        img('xae4oyhdvs0gd93x9hq87jmwwwu7_taman-ayun-bali-temple.jpg'),
        img('i8sgqoounk3c3pnd81f80w1nhk0o_1498892801_alaskedaton.JPG')
      ],
      4: [
        img('jitvsn1pu1wu7z600iqswfgphod1_shutterstock_2291878411.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg'),
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
      ],
      5: [
        img('g4aium5gj1oi4lbxfz1v2dgb2qp0_shutterstock_2427199549%20(1).jpg'),
        img('juwl1o8l3l3t7cd3tign11f5qbwb_23cfa5a555774cb793ff972ba1311093.jpg'),
        img('xxjdwssfts50rzk5wfvzelladqqu_1498724507_beach.jpg'),
        img('raz6i8qsplkduo2ddqpr2tqbahzi_download%20(11).jpg')
      ],
      6: [
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
        img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
        img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Temples and Tanah Lot sunset`,
      'Breakfast and check out, then private transfer towards Kuta',
      'Taman Ayun temple and the Alas Kedaton monkey forest',
      'Lake Beratan, then sunset at the sea temple of Tanah Lot',
      'Check in at your Kuta hotel for the next three nights',
      `${DAY_MARK}Day 4 · Water sports and Uluwatu`,
      'Breakfast, then a morning at Tanjung Benoa beach',
      'Banana boat, jet ski and parasailing at the water sports club',
      'Uluwatu temple on the cliffs in the late afternoon',
      'Evening free in Kuta',
      `${DAY_MARK}Day 5 · Nusa Penida and four beaches`,
      'Early breakfast, then private transfer to Sanur harbour',
      'Speedboat across to Nusa Penida for the west coast',
      'Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach',
      'Return boat to Bali and back to your hotel',
      `${DAY_MARK}Day 6 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your return flight'
    ],
    accommodation: {
      name: 'Kuta Central Park Hotel, Kuta',
      description: '3 nights · Breakfast · Standard room · 4★ · Large pool hotel ten minutes from Kuta beach',
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
        name: 'Temple tour with Tanah Lot sunset',
        day: 3,
        optional: false,
        image: img('gm4z6h3ftihhgfjz5wv0dkxygzy1_Tanah%20Lot%20Temple.jpg'),
        description: 'Taman Ayun, the Alas Kedaton monkey forest and the lake temple at Beratan, finishing with sunset at the sea temple of Tanah Lot.'
      },
      {
        name: 'Water sports and Uluwatu temple',
        day: 4,
        optional: false,
        image: img('jitvsn1pu1wu7z600iqswfgphod1_shutterstock_2291878411.jpg'),
        description: 'Banana boat, jet ski and parasailing at Tanjung Benoa in the morning, then the cliff top temple at Uluwatu in the late afternoon.'
      },
      {
        name: 'Nusa Penida west coast by speedboat',
        day: 5,
        optional: false,
        image: img('g4aium5gj1oi4lbxfz1v2dgb2qp0_shutterstock_2427199549%20(1).jpg'),
        description: 'Speedboat across to Nusa Penida for Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach, the island\'s four most photographed stops.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights on the south coast, with a temple day that ends at Tanah Lot, water sports at Tanjung Benoa and a full day on Nusa Penida.',
      image: img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
    }
  }
];

const detail = {
  slug: 'magical-bali-holiday-with-flights',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Magical Bali Holiday with Flights',
  alt: 'Kelingking beach on Nusa Penida, Bali',
  days: '6 days / 5 nights',
  stations: '2 stops',
  transport: 'Return flights, private transfers and guided tours',
  tag: 'Beach',
  tags: ['Beach', 'Family'],
  price: 73150,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ubud', 'Kintamani', 'Kuta', 'Tanah Lot', 'Nusa Penida'],
  stats: { days: 6, cities: 2, hotels: 2, activities: 4, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Six days is enough for Bali if you split them. Two nights inland, three on the coast, one big island day.',
    quoteMore: 'Nusa Penida days start early because the sea is calmest before noon. Carry flat shoes for the Kelingking steps, keep a dry bag for your phone, and plan a slow evening afterwards.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A short Bali holiday with return flights built in. Two nights in Ubud for the rice terraces and Kintamani, then three on the south coast with a temple day at Tanah Lot, water sports at Tanjung Benoa and a full day on Nusa Penida.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: return international flights; 5 nights with daily breakfast; private airport and inter city transfers; Kintamani and jungle swing tour with lunch; temple tour with Tanah Lot sunset; water sports with Uluwatu; Nusa Penida west coast tour; visa assistance.',
  intro2: 'Not included: Indonesia visa fees; lunches and dinners other than the one stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Ubud (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your Ubud villa and unwind\nEvening free among the rice fields\nOptional: the Ubud art market or Goa Gajah cave temple', hotel: 'Asri Sari Villa, Ubud', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your Ubud villa and unwind', 'Evening free among the rice fields'] },
    { title: 'Day 2: Kintamani and the jungle swing (B, L)', text: 'Breakfast, then a full day out with your own car and guide\nCoffee plantation tasting on the climb to Kintamani\nTegalalang rice terraces and Tegenungan waterfall\nA turn on the jungle swing, with lunch included', hotel: 'Asri Sari Villa, Ubud', highlights: ['Breakfast, then a full day out with your own car and guide', 'Coffee plantation tasting on the climb to Kintamani', 'Tegalalang rice terraces and Tegenungan waterfall'] },
    { title: 'Day 3: Temples and Tanah Lot sunset (B)', text: 'Breakfast and check out, then private transfer towards Kuta\nTaman Ayun temple and the Alas Kedaton monkey forest\nLake Beratan, then sunset at the sea temple of Tanah Lot\nCheck in at your Kuta hotel for the next three nights', hotel: 'Kuta Central Park Hotel, Bali', highlights: ['Breakfast and check out, then private transfer towards Kuta', 'Taman Ayun temple and the Alas Kedaton monkey forest', 'Lake Beratan, then sunset at the sea temple of Tanah Lot'] },
    { title: 'Day 4: Water sports and Uluwatu (B)', text: 'Breakfast, then a morning at Tanjung Benoa beach\nBanana boat, jet ski and parasailing at the water sports club\nUluwatu temple on the cliffs in the late afternoon\nEvening free in Kuta', hotel: 'Kuta Central Park Hotel, Bali', highlights: ['Breakfast, then a morning at Tanjung Benoa beach', 'Banana boat, jet ski and parasailing at the water sports club', 'Uluwatu temple on the cliffs in the late afternoon'] },
    { title: 'Day 5: Nusa Penida and four beaches (B)', text: 'Early breakfast, then private transfer to Sanur harbour\nSpeedboat across to Nusa Penida for the west coast\nKelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach\nReturn boat to Bali and back to your hotel', hotel: 'Kuta Central Park Hotel, Bali', highlights: ['Early breakfast, then private transfer to Sanur harbour', 'Speedboat across to Nusa Penida for the west coast', 'Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach'] },
    { title: 'Day 6: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your return flight', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your return flight'] }
  ],
  outro: 'Not included: Indonesia visa fees; lunches and dinners other than the one stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Indonesia', href: '/asia/indonesia' },
  { label: detail.title }
];

export const magicalBaliHolidayWithFlightsBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const magicalBaliHolidayWithFlightsProduct = {
  slug: detail.slug,
  places: ['Ubud', 'Kintamani', 'Kuta', 'Tanah Lot', 'Nusa Penida'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 4,
  transfers: 10,
  meals: 6,
  price: detail.price,
  images: cardImages
};
