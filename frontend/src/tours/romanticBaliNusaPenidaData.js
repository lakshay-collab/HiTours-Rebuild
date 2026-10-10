// Romantic Bali Honeymoon with Nusa Penida. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
  img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
  img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
  img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
  img('f6z8i3l0jqwujzqeosh56dgkj38a_padang-padang-beach-19-1440x960.jpg'),
  img('p0tyf5xa92nbblmla956dmfsaqrd_shutterstock_1453687076.jpg'),
  img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Ubud',
    subtitle: 'Ubud to Kintamani',
    dayLabel: 'Day 1 to 2',
    images: [
      img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
      img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
      img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
      img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg')
    ],
    dayImages: {
      1: [
        img('kmleb6ur2b7j83f6gt2jg3z1kaw0_1470727921_Goa_Gajah_Front.JPG'),
        img('inmyi8xx1sbyfrozppimmryvz6db_sekumpul.jpg'),
        img('p5qmu24btsi6rw9ye14yp9y3v9js_1464162732_things-to-do-in-bali-ubud-art-market.jpg'),
        img('blc7rv8lvishrrzjuxwmcwyxm2ev_1464182679_Bali-Bird-Park-42414.jpg')
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
      'Check in at your Ubud resort and settle in',
      'First evening free among the rice fields',
      'Optional: the Monkey Forest or the Ubud art market',
      `${DAY_MARK}Day 2 · Kintamani and rice terraces`,
      'Breakfast, then a full day out with your own car and guide',
      'Coffee plantation tasting on the climb to Kintamani',
      'Tegenungan waterfall and the Tegalalang rice terraces',
      'A turn on the jungle swing above the valley'
    ],
    accommodation: {
      name: 'Bakung Ubud Resort & Villa, Ubud',
      description: '2 nights · Breakfast · Standard room · 3★ · Garden resort a short walk from the Ubud market',
      images: [
        img('q6zgelz98v5kbftom1frp3ue32g1_173822791.jpg'),
        img('iz5cujufuwfqtntxg636u4gy8tuv_173822761.jpg'),
        img('hcvkzwnjgr94hwetf4dl0oket9t9_173822678.jpg'),
        img('upfjfdwka8me9tpttnoucqns6bhl_173822709.jpg'),
        img('5w92c9d49j3xgci27zz4ci5v9hju_173822673.jpg'),
        img('x2gjvzwlcxzxepv8oj66z4kya8rw_173822721.jpg'),
        img('6dmfjxqmk42rm2yuboamz9edv1rt_173822779.jpg'),
        img('j9qn1ykahshgxluwm6zed5j4fgo4_173825040.jpg'),
        img('980vtfp7zvo1jb1y0sf4g6sro4k1_59584268.jpg'),
        img('6gdmnd7cj4egkuk7hgepou1we1bo_173866707.jpg'),
        img('nbus5yxsh83tm8tz0qt283avv8ua_173822675.jpg'),
        img('uhhu92jn9usu53pjc2llrkm2vqqp_173822684.jpg'),
        img('z32dunr9mw486f91h5balma9mvei_173867651.jpg'),
        img('tch6q3pwlyue02esd15qrl2hew08_173867130.jpg'),
        img('hii71e6wq2ldnjskkz8cw4luo0z2_173822763.jpg'),
        img('sqyres45da5veqed7cte9x086102_173822785.jpg')
      ]
    },
    activities: [
      {
        name: 'Kintamani and rice terrace day tour',
        day: 2,
        optional: false,
        image: img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        description: 'Coffee plantation tasting on the road to Kintamani, the crater lake view, Tegenungan waterfall, the Tegalalang terraces and the jungle swing.'
      },
      {
        name: 'Ubud Monkey Forest',
        day: 1,
        optional: true,
        image: img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
        description: 'Banyan trees, moss covered shrines and a few hundred macaques in a sanctuary ten minutes on foot from the Ubud market.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Two nights inland to begin, with the crater lake at Kintamani, a coffee plantation stop and the rice terraces at Tegalalang.',
      image: img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuta',
    subtitle: 'Kuta to Uluwatu and Nusa Penida',
    dayLabel: 'Day 3 to 6',
    images: [
      img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
      img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
      img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
      img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
    ],
    dayImages: {
      3: [
        img('f6z8i3l0jqwujzqeosh56dgkj38a_padang-padang-beach-19-1440x960.jpg'),
        img('p0tyf5xa92nbblmla956dmfsaqrd_shutterstock_1453687076.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg')
      ],
      4: [
        img('g4aium5gj1oi4lbxfz1v2dgb2qp0_shutterstock_2427199549%20(1).jpg'),
        img('juwl1o8l3l3t7cd3tign11f5qbwb_23cfa5a555774cb793ff972ba1311093.jpg'),
        img('xxjdwssfts50rzk5wfvzelladqqu_1498724507_beach.jpg'),
        img('raz6i8qsplkduo2ddqpr2tqbahzi_download%20(11).jpg')
      ],
      5: [
        img('pntcqhuq42iqwedahw0vddb29dat_shutterstock_635175203.jpg'),
        img('6dn215ssrisvwxp9ulwbfh7h0i1s_night-markets-phuket-thailand.jpg'),
        img('g72m3ehync8t6tn7yjyz5dm47mq1_1470898081_17_Years_of_Sekar_Jepun_2014-11-01_64_edit.jpg'),
        img('knfbboa3r8mo0iluevx4bvv0elf4_new-kuta-green-park.jpg')
      ],
      6: [
        img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
        img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
        img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Uluwatu and on to Kuta`,
      'Breakfast and check out, then private transfer to the coast',
      'Water sports at Tanjung Benoa: banana boat and jet ski',
      'Padang Padang beach, then Uluwatu temple for sunset',
      'Check in at your Kuta hotel for three nights',
      `${DAY_MARK}Day 4 · Nusa Penida and four beaches`,
      'Early breakfast, then private transfer to Sanur harbour',
      'Speedboat across to Nusa Penida for the west coast',
      'Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach',
      'Return boat to Bali and back to your hotel',
      `${DAY_MARK}Day 5 · Spa day in Kuta`,
      'Breakfast and a slow morning by the pool',
      'A traditional Balinese massage for two at a nearby spa',
      'Optional: a sunset dinner cruise from Benoa harbour',
      'Optional: the Kuta night market or dinner on the beach',
      `${DAY_MARK}Day 6 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'Bliss Surfer Hotel, Kuta',
      description: '3 nights · Breakfast · Standard room · 3★ · Surf style hotel five minutes from Kuta beach',
      images: [
        img('fjsv6nb5db9144gg87q32urho5wa_484740773.jpg'),
        img('pwg81jxqrv1u4naeo4ukf4h1b18h_download%20-%202025-03-03T172949.032.jfif'),
        img('xpggn7bvlfos7midh1bqvhhobd8p_170823083.jpg'),
        img('3yvmr2cq9c7ddz98k85c0p6pk6l3_52479662.jpg'),
        img('2j1lw6s5n4tx4uq4v6z63lmyip7p_484740786.jpg'),
        img('y6y9gu3nob6y276srlaotcye9kok_7782339.jpg'),
        img('bj7h0oxhewoic375hfawboe671ut_download%20-%202025-03-03T172757.318.jfif'),
        img('xqgpnyinu1agtvzreapofm1imsm4_231315479.jpg'),
        img('mrc4g8m73ym0f7vawmwm1l3h9nie_47670873.jpg'),
        img('x7clnbk1yamdlxxtxe8t1q61lae2_download%20-%202025-03-03T172743.053.jfif'),
        img('f3hml59i887d1i36am508d4o3y6y_download%20-%202025-03-03T172816.619.jfif'),
        img('689y3p9kidm5qpyevoee55fgecif_download%20-%202025-03-03T172835.646.jfif')
      ]
    },
    activities: [
      {
        name: 'Water sports, Padang Padang and Uluwatu',
        day: 3,
        optional: false,
        image: img('f6z8i3l0jqwujzqeosh56dgkj38a_padang-padang-beach-19-1440x960.jpg'),
        description: 'Banana boat and jet ski at Tanjung Benoa, the cove at Padang Padang beach, then Uluwatu temple above the surf for sunset.'
      },
      {
        name: 'Nusa Penida west coast by speedboat',
        day: 4,
        optional: false,
        image: img('g4aium5gj1oi4lbxfz1v2dgb2qp0_shutterstock_2427199549%20(1).jpg'),
        description: 'Speedboat across to Nusa Penida for Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach, the island\'s four best known stops.'
      },
      {
        name: 'Balinese massage for two',
        day: 5,
        optional: false,
        image: img('pntcqhuq42iqwedahw0vddb29dat_shutterstock_635175203.jpg'),
        description: 'A traditional Balinese massage for both of you, warm oil and long pressure strokes, booked privately at a spa near your hotel.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights on the south coast, with water sports and Uluwatu, a full day on Nusa Penida and a spa afternoon before you fly home.',
      image: img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
    }
  }
];

const detail = {
  slug: 'romantic-bali-honeymoon-with-nusa-penida',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Romantic Bali Honeymoon with Nusa Penida',
  alt: 'Angel\'s Billabong rock pool on Nusa Penida, Bali',
  days: '6 days / 5 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided day tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Beach'],
  price: 32775,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ubud', 'Kintamani', 'Kuta', 'Uluwatu', 'Nusa Penida'],
  stats: { days: 6, cities: 2, hotels: 2, activities: 4, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Keep Nusa Penida for the middle of the trip. It is the big day out, and you want the spa after it.',
    quoteMore: 'The Kelingking viewpoint has a steep path down and most couples stop at the top, which is the better photograph anyway. Flat shoes, water and an early boat make the day easy.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days for two, with two nights in Ubud for the crater lake at Kintamani and the rice terraces, then three on the coast with water sports, Uluwatu at sunset, a full day on Nusa Penida and a couples massage.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights with daily breakfast; private airport and inter city transfers; Kintamani and rice terrace tour; water sports with Padang Padang and Uluwatu; Nusa Penida west coast tour; Balinese massage for two; visa assistance.',
  intro2: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Ubud (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your Ubud resort and settle in\nFirst evening free among the rice fields\nOptional: the Monkey Forest or the Ubud art market', hotel: 'Bakung Ubud Resort & Villa, Ubud', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your Ubud resort and settle in', 'First evening free among the rice fields'] },
    { title: 'Day 2: Kintamani and rice terraces (B)', text: 'Breakfast, then a full day out with your own car and guide\nCoffee plantation tasting on the climb to Kintamani\nTegenungan waterfall and the Tegalalang rice terraces\nA turn on the jungle swing above the valley', hotel: 'Bakung Ubud Resort & Villa, Ubud', highlights: ['Breakfast, then a full day out with your own car and guide', 'Coffee plantation tasting on the climb to Kintamani', 'Tegenungan waterfall and the Tegalalang rice terraces'] },
    { title: 'Day 3: Uluwatu and on to Kuta (B)', text: 'Breakfast and check out, then private transfer to the coast\nWater sports at Tanjung Benoa: banana boat and jet ski\nPadang Padang beach, then Uluwatu temple for sunset\nCheck in at your Kuta hotel for three nights', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast and check out, then private transfer to the coast', 'Water sports at Tanjung Benoa: banana boat and jet ski', 'Padang Padang beach, then Uluwatu temple for sunset'] },
    { title: 'Day 4: Nusa Penida and four beaches (B)', text: 'Early breakfast, then private transfer to Sanur harbour\nSpeedboat across to Nusa Penida for the west coast\nKelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach\nReturn boat to Bali and back to your hotel', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Early breakfast, then private transfer to Sanur harbour', 'Speedboat across to Nusa Penida for the west coast', 'Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach'] },
    { title: 'Day 5: Spa day in Kuta (B)', text: 'Breakfast and a slow morning by the pool\nA traditional Balinese massage for two at a nearby spa\nOptional: a sunset dinner cruise from Benoa harbour\nOptional: the Kuta night market or dinner on the beach', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast and a slow morning by the pool', 'A traditional Balinese massage for two at a nearby spa', 'Optional: a sunset dinner cruise from Benoa harbour'] },
    { title: 'Day 6: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bali', href: '/asia/bali' },
  { label: detail.title }
];

export const romanticBaliNusaPenidaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const romanticBaliNusaPenidaProduct = {
  slug: detail.slug,
  places: ['Ubud', 'Kintamani', 'Kuta', 'Uluwatu', 'Nusa Penida'],
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
  meals: 5,
  price: detail.price,
  images: cardImages
};
