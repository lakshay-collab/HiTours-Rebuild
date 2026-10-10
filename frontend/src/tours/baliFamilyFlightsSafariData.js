// Bali Family Holiday with Flights and Safari. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
  img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
  img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
  img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
  img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
  img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
  img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Kuta',
    subtitle: 'Kuta to Bedugul and the safari park',
    dayLabel: 'Day 1 to 3',
    images: [
      img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
      img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
      img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
      img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
    ],
    dayImages: {
      1: [
        img('xwfs2claxjogsfoq88zi2778vkgg_1470897615_Vihara_Dharmayana_Kuta_3.jpg'),
        img('mpin67ioevxt7sgz5wklo6uvwt4m_dsc_3785.jpg'),
        img('og1gb1n28wstzow4pz3wysli5q3j_1464163781_Mal-Bali-Galeria.jpg'),
        img('deriva74h0yzbv3z7xmdudk0w70b_1464167116_kuta-square.jpg')
      ],
      2: [
        img('b5grhpy6gbinxn5gvsa6ebyqlnq1_shutterstock_631736717.jpg'),
        img('fy743d4f63j2y9w1i1rg609a9dcw_1498542590_Civet-Coffee.jpg'),
        img('xae4oyhdvs0gd93x9hq87jmwwwu7_taman-ayun-bali-temple.jpg'),
        img('sv46d4k4ptuwymzm8glrch2taeyj_1498891116_botanicalgarden.jpg')
      ],
      3: [
        img('hhhu10tba5yumzkwh2ta9yvt82df_17015830_10154515632888931_1877145227028070565_o.jpg'),
        img('bs96fl43584uve7wwhbrody0iv75_1470736645_Bali_Safari__26_Marine_Park_(2688909441).jpg'),
        img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Flight to Bali and Kuta`,
      'Flight from Delhi to Denpasar, included in your package',
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your Kuta hotel near the beach',
      'Rest of the day free on the south coast',
      `${DAY_MARK}Day 2 · Bedugul lakes and Tanah Lot`,
      'Breakfast, then a full day north to the lake country',
      'The Handara gate and Ulun Danu Beratan temple',
      'A hill waterfall in the afternoon',
      'Sunset at Tanah Lot, the sea temple on the rocks',
      `${DAY_MARK}Day 3 · A day at Bali Safari`,
      'Breakfast, then a full day at Bali Safari and Marine Park',
      'Safari ride through the African and Indian enclosures',
      'Elephant and bird shows, then the water park',
      'Back at the hotel in the evening'
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
        name: 'Bedugul lakes and Tanah Lot',
        day: 2,
        optional: false,
        image: img('b5grhpy6gbinxn5gvsa6ebyqlnq1_shutterstock_631736717.jpg'),
        description: 'The Handara gate, the lake temple of Ulun Danu Beratan and a hill waterfall, finishing at the sea temple of Tanah Lot for sunset.'
      },
      {
        name: 'Bali Safari and Marine Park',
        day: 3,
        optional: false,
        image: img('hhhu10tba5yumzkwh2ta9yvt82df_17015830_10154515632888931_1877145227028070565_o.jpg'),
        description: 'A safari ride through the African and Indian enclosures, the elephant and bird shows, and the water park included in the ticket.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights on the coast to open the holiday, with a full day up to the Bedugul lakes and a safari park day the children will like.',
      image: img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Ubud',
    subtitle: 'Ubud to Kintamani',
    dayLabel: 'Day 4 to 6',
    images: [
      img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
      img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
      img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
      img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg')
    ],
    dayImages: {
      4: [
        img('qc1yophslknxmsjuxv7tdovh1r3t_Monkey%20Forest,%20Ubud.jpg'),
        img('xhm7apn2p4xf3utfjc38fhrs94cs_1470740091_maxresdefault.jpg'),
        img('rvjh27sir0w27tw8jq2tmlxzie3k_Hanging-Gardens-Ubud-view.jpg'),
        img('kmleb6ur2b7j83f6gt2jg3z1kaw0_1470727921_Goa_Gajah_Front.JPG')
      ],
      5: [
        img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('p1tzfipjpmq6677grx16krlrwx9v_shutterstock_243349891.jpg')
      ],
      6: [
        img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
        img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
        img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
        img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · On to Ubud`,
      'Breakfast and check out, then private transfer up to Ubud',
      'Check in at your garden resort near the market',
      'Afternoon free in the town lanes',
      'Optional: the Monkey Forest or the art market',
      `${DAY_MARK}Day 5 · Kintamani and the jungle swing`,
      'Breakfast, then a full day out with your own car and guide',
      'Coffee plantation tasting on the climb to Kintamani',
      'Tegenungan waterfall and the Tegalalang rice terraces',
      'A turn on the jungle swing above the valley',
      `${DAY_MARK}Day 6 · Departure from Bali`,
      'Breakfast at the resort and check out',
      'Private transfer to Ngurah Rai Airport for your return flight'
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
        name: 'Kintamani with the jungle swing',
        day: 5,
        optional: false,
        image: img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        description: 'Coffee plantation tasting on the climb to Kintamani, the crater lake view, Tegenungan waterfall, the Tegalalang terraces and the jungle swing.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Two nights inland to finish, with a free afternoon in town and a full day through the coffee country up to the Kintamani crater.',
      image: img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg')
    }
  }
];

const detail = {
  slug: 'bali-family-holiday-with-flights-and-safari',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bali Family Holiday with Flights and Safari',
  alt: 'Elephants at Bali Safari and Marine Park',
  days: '6 days / 5 nights',
  stations: '2 stops',
  transport: 'Return flights, private transfers and guided tours',
  tag: 'Family',
  tags: ['Family', 'Culture'],
  price: 43396,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kuta', 'Bedugul', 'Bali Safari', 'Ubud', 'Kintamani'],
  stats: { days: 6, cities: 2, hotels: 2, activities: 3, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['6 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Flights, a safari day and a free afternoon in Ubud. For a family of four this is the simplest Bali week to book.',
    quoteMore: 'Bali Safari takes a full day, so carry swimwear for the water park and book the elephant show slot in the morning. Ubud at the end keeps the last two days slow.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days with return flights from Delhi: three nights in Kuta with the Bedugul lakes, sunset at Tanah Lot and a full day at Bali Safari, then two nights in Ubud with a coffee plantation day up to the Kintamani crater.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: return flights from Delhi; 5 nights with daily breakfast; private airport and inter city transfers; full day Bedugul tour with Tanah Lot; Bali Safari and Marine Park tickets; Kintamani and jungle swing tour.',
  intro2: 'Not included: Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Flight to Bali and Kuta (Arrival)', text: 'Flight from Delhi to Denpasar, included in your package\nArrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your Kuta hotel near the beach\nRest of the day free on the south coast', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Flight from Delhi to Denpasar, included in your package', 'Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your Kuta hotel near the beach'] },
    { title: 'Day 2: Bedugul lakes and Tanah Lot (B)', text: 'Breakfast, then a full day north to the lake country\nThe Handara gate and Ulun Danu Beratan temple\nA hill waterfall in the afternoon\nSunset at Tanah Lot, the sea temple on the rocks', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast, then a full day north to the lake country', 'The Handara gate and Ulun Danu Beratan temple', 'A hill waterfall in the afternoon'] },
    { title: 'Day 3: A day at Bali Safari (B)', text: 'Breakfast, then a full day at Bali Safari and Marine Park\nSafari ride through the African and Indian enclosures\nElephant and bird shows, then the water park\nBack at the hotel in the evening', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast, then a full day at Bali Safari and Marine Park', 'Safari ride through the African and Indian enclosures', 'Elephant and bird shows, then the water park'] },
    { title: 'Day 4: On to Ubud (B)', text: 'Breakfast and check out, then private transfer up to Ubud\nCheck in at your garden resort near the market\nAfternoon free in the town lanes\nOptional: the Monkey Forest or the art market', hotel: 'Bakung Ubud Resort & Villa', highlights: ['Breakfast and check out, then private transfer up to Ubud', 'Check in at your garden resort near the market', 'Afternoon free in the town lanes'] },
    { title: 'Day 5: Kintamani and the jungle swing (B)', text: 'Breakfast, then a full day out with your own car and guide\nCoffee plantation tasting on the climb to Kintamani\nTegenungan waterfall and the Tegalalang rice terraces\nA turn on the jungle swing above the valley', hotel: 'Bakung Ubud Resort & Villa', highlights: ['Breakfast, then a full day out with your own car and guide', 'Coffee plantation tasting on the climb to Kintamani', 'Tegenungan waterfall and the Tegalalang rice terraces'] },
    { title: 'Day 6: Departure from Bali (B)', text: 'Breakfast at the resort and check out\nPrivate transfer to Ngurah Rai Airport for your return flight', hotel: 'Departure', highlights: ['Breakfast at the resort and check out', 'Private transfer to Ngurah Rai Airport for your return flight'] }
  ],
  outro: 'Not included: Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bali', href: '/asia/bali' },
  { label: detail.title }
];

export const baliFamilyFlightsSafariBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const baliFamilyFlightsSafariProduct = {
  slug: detail.slug,
  places: ['Kuta', 'Bedugul', 'Bali Safari', 'Ubud', 'Kintamani'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 3,
  transfers: 6,
  meals: 5,
  price: detail.price,
  images: cardImages
};
