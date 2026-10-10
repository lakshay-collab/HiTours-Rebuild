// Best of Bali with Ubud and Kuta. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
  img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
  img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
  img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
  img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
  img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
  img('q6ma39ph66je68lv2fcr3ob5xiz3_Sea%20turtle-%20Turtle%20Island.jpg'),
  img('9fic8p6glc65e19fhpo69h3l54aw_DPS_20Bali_20Serangan_20Island_20and_20new_20bridge_20from_20aircraft_20b.jpg'),
  img('7uthq1eyr62ycjbiu2agb2wrace9_Denpasar_Turtle_Conservation_and_Education_Centre.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Ubud',
    subtitle: 'Ubud to Kintamani and Bedugul',
    dayLabel: 'Day 1 to 3',
    images: [
      img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
      img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
      img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
      img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg')
    ],
    dayImages: {
      1: [
        img('qc1yophslknxmsjuxv7tdovh1r3t_Monkey%20Forest,%20Ubud.jpg'),
        img('kmleb6ur2b7j83f6gt2jg3z1kaw0_1470727921_Goa_Gajah_Front.JPG'),
        img('xhm7apn2p4xf3utfjc38fhrs94cs_1470740091_maxresdefault.jpg'),
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
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Ubud`,
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your Ubud resort and settle in',
      'Rest of the day free in Bali\'s green interior',
      'Optional: the Monkey Forest, the art market or the water palace',
      `${DAY_MARK}Day 2 · Kintamani and rice terraces`,
      'Breakfast at the hotel, then a full day tour with your own guide',
      'Coffee plantation tasting on the road up to Kintamani',
      'Views across Mount Batur and its crater lake',
      'Tegenungan waterfall, Tegalalang rice terrace and the jungle swing',
      `${DAY_MARK}Day 3 · Bedugul lakes and Tanah Lot`,
      'Breakfast, then north to the Handara gate for photographs',
      'Ulun Danu Beratan, the temple standing on the lake',
      'Sunset at Tanah Lot, the sea temple on the rocks',
      'Evening back in Ubud at your own pace'
    ],
    accommodation: {
      name: 'Bakung Ubud Resort & Villa, Ubud',
      description: '3 nights · Breakfast · Standard room · 3★ · Garden resort a short walk from the Ubud market',
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
        description: 'A full day with your own car and guide: coffee plantation tasting, the Tegalalang rice terraces, Tegenungan waterfall and the Bali jungle swing.'
      },
      {
        name: 'Bedugul lakes and Tanah Lot sunset',
        day: 3,
        optional: false,
        image: img('7tfkrhr259gnolwm9ec49ng5v2ff_Ulun%20Danu%20Temple%201.jpg'),
        description: 'North to the Handara gate and Ulun Danu Beratan, the temple that sits on the lake, then the sea temple at Tanah Lot for sunset.'
      },
      {
        name: 'Ubud Monkey Forest',
        day: 1,
        optional: true,
        image: img('qc1yophslknxmsjuxv7tdovh1r3t_Monkey%20Forest,%20Ubud.jpg'),
        description: 'A sanctuary of banyan trees, moss covered shrines and several hundred long tailed macaques, ten minutes on foot from the Ubud market.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Three nights in the green heart of Bali, with temple mornings, a coffee plantation on the way to Kintamani and lake country to the north.',
      image: img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuta',
    subtitle: 'Kuta to Serangan Island and Uluwatu',
    dayLabel: 'Day 4 to 8',
    images: [
      img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
      img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
      img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
      img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg')
    ],
    dayImages: {
      4: [
        img('hhhu10tba5yumzkwh2ta9yvt82df_17015830_10154515632888931_1877145227028070565_o.jpg'),
        img('bs96fl43584uve7wwhbrody0iv75_1470736645_Bali_Safari__26_Marine_Park_(2688909441).jpg'),
        img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
        img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
      ],
      5: [
        img('q6ma39ph66je68lv2fcr3ob5xiz3_Sea%20turtle-%20Turtle%20Island.jpg'),
        img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg'),
        img('9fic8p6glc65e19fhpo69h3l54aw_DPS_20Bali_20Serangan_20Island_20and_20new_20bridge_20from_20aircraft_20b.jpg'),
        img('7uthq1eyr62ycjbiu2agb2wrace9_Denpasar_Turtle_Conservation_and_Education_Centre.jpg')
      ],
      6: [
        img('55zrzs76oi5ijmcfe6pam0ngqzkk_shutterstock_1453687076.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
        img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
      ],
      7: [
        img('neznowe35mxcnjj84559i40ojhl7_1628342893_f98dbd26-1189-4c22-9e39-d8b3054eabdd.jpeg.jpg'),
        img('deriva74h0yzbv3z7xmdudk0w70b_1464167116_kuta-square.jpg'),
        img('g72m3ehync8t6tn7yjyz5dm47mq1_1470898081_17_Years_of_Sekar_Jepun_2014-11-01_64_edit.jpg'),
        img('h3oys62dd0xro0wz26eputi96v5w_img_0291.jpg')
      ],
      8: [
        img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
        img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
        img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
        img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Bali Safari and on to Kuta`,
      'Breakfast and check out, then private transfer towards Kuta',
      'Jungle Hopper entry at Bali Safari and Marine Park',
      'Safari ride, animal shows and the water park',
      'Check in at your Kuta hotel near the beach',
      `${DAY_MARK}Day 5 · Water sports and Serangan Island`,
      'Breakfast, then private transfer to Tanjung Benoa beach',
      'Banana boat, jet ski and parasailing at the water sports club',
      'Boat across to Serangan Island and the turtle centre',
      'Back in Kuta for the evening',
      `${DAY_MARK}Day 6 · Uluwatu and Padang Padang`,
      'Breakfast, then a half day along the southern cliffs',
      'Padang Padang beach, framed by limestone walls',
      'Uluwatu temple at sunset, high above the ocean',
      'Optional: the Kecak fire dance in the temple amphitheatre',
      `${DAY_MARK}Day 7 · Free day in Kuta`,
      'Breakfast and a full day free on the coast',
      'Optional: a surf lesson with an instructor on Kuta beach',
      'Optional: shopping at Kuta Square or the night market',
      'Optional: Waterbom park or a Balinese spa afternoon',
      `${DAY_MARK}Day 8 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'Bliss Surfer Hotel, Kuta',
      description: '4 nights · Breakfast · Standard room · 3★ · Surf style hotel five minutes from Kuta beach',
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
        name: 'Bali Safari and Marine Park',
        day: 4,
        optional: false,
        image: img('hhhu10tba5yumzkwh2ta9yvt82df_17015830_10154515632888931_1877145227028070565_o.jpg'),
        description: 'Jungle Hopper entry to Bali Safari and Marine Park, with a safari ride through the African and Indian enclosures, animal shows and the water park.'
      },
      {
        name: 'Water sports and Serangan Island',
        day: 5,
        optional: false,
        image: img('q6ma39ph66je68lv2fcr3ob5xiz3_Sea%20turtle-%20Turtle%20Island.jpg'),
        description: 'Banana boat, jet ski and parasailing at Tanjung Benoa, then a boat across to Serangan Island and its turtle conservation centre.'
      },
      {
        name: 'Uluwatu and Padang Padang beach',
        day: 6,
        optional: false,
        image: img('55zrzs76oi5ijmcfe6pam0ngqzkk_shutterstock_1453687076.jpg'),
        description: 'A half day along the southern cliffs: Padang Padang beach between its limestone walls, then Uluwatu temple as the sun drops into the ocean.'
      },
      {
        name: 'Kuta beach and Kuta Square',
        day: 7,
        optional: true,
        image: img('deriva74h0yzbv3z7xmdudk0w70b_1464167116_kuta-square.jpg'),
        description: 'Bali\'s best known surf beach with boards for hire and beginner lessons, and the shops and cafes of Kuta Square two streets back.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Four nights on the south coast with a safari park day, water sports at Tanjung Benoa, the cliffs of Uluwatu and a free day on the beach.',
      image: img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-bali-with-ubud-and-kuta',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Bali with Ubud and Kuta',
  alt: 'Rice terraces above Ubud in central Bali',
  days: '8 days / 7 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided day tours',
  tag: 'Culture',
  tags: ['Culture', 'Family'],
  price: 45362,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ubud', 'Kintamani', 'Bedugul', 'Kuta', 'Uluwatu'],
  stats: { days: 8, cities: 2, hotels: 2, activities: 5, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
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
    quote: 'Give Ubud the first three nights. The island slows you down there, and the coast feels like a reward afterwards.',
    quoteMore: 'Leave Uluwatu for late afternoon and buy Kecak tickets as you arrive. The show starts as the sun sets and the amphitheatre fills quickly, so being early gets you a seat facing the ocean.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days across the two sides of Bali: three nights in Ubud for rice terraces, crater lakes and temple sunsets, then four nights in Kuta with a safari park day, water sports at Tanjung Benoa and the cliffs of Uluwatu.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights with daily breakfast; private airport and inter city transfers; Kintamani and rice terrace day tour; Bedugul and Tanah Lot sunset tour; Bali Safari Jungle Hopper entry; water sports and Serangan Island; Uluwatu and Padang Padang tour.',
  intro2: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Ubud (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your Ubud resort and settle in\nRest of the day free in Bali\'s green interior\nOptional: the Monkey Forest, the art market or the water palace', hotel: 'Bakung Ubud Resort & Villa, Ubud', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your Ubud resort and settle in', 'Rest of the day free in Bali\'s green interior'] },
    { title: 'Day 2: Kintamani and rice terraces (B)', text: 'Breakfast at the hotel, then a full day tour with your own guide\nCoffee plantation tasting on the road up to Kintamani\nViews across Mount Batur and its crater lake\nTegenungan waterfall, Tegalalang rice terrace and the jungle swing', hotel: 'Bakung Ubud Resort & Villa, Ubud', highlights: ['Breakfast at the hotel, then a full day tour with your own guide', 'Coffee plantation tasting on the road up to Kintamani', 'Views across Mount Batur and its crater lake'] },
    { title: 'Day 3: Bedugul lakes and Tanah Lot (B)', text: 'Breakfast, then north to the Handara gate for photographs\nUlun Danu Beratan, the temple standing on the lake\nSunset at Tanah Lot, the sea temple on the rocks\nEvening back in Ubud at your own pace', hotel: 'Bakung Ubud Resort & Villa, Ubud', highlights: ['Breakfast, then north to the Handara gate for photographs', 'Ulun Danu Beratan, the temple standing on the lake', 'Sunset at Tanah Lot, the sea temple on the rocks'] },
    { title: 'Day 4: Bali Safari and on to Kuta (B)', text: 'Breakfast and check out, then private transfer towards Kuta\nJungle Hopper entry at Bali Safari and Marine Park\nSafari ride, animal shows and the water park\nCheck in at your Kuta hotel near the beach', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast and check out, then private transfer towards Kuta', 'Jungle Hopper entry at Bali Safari and Marine Park', 'Safari ride, animal shows and the water park'] },
    { title: 'Day 5: Water sports and Serangan Island (B)', text: 'Breakfast, then private transfer to Tanjung Benoa beach\nBanana boat, jet ski and parasailing at the water sports club\nBoat across to Serangan Island and the turtle centre\nBack in Kuta for the evening', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast, then private transfer to Tanjung Benoa beach', 'Banana boat, jet ski and parasailing at the water sports club', 'Boat across to Serangan Island and the turtle centre'] },
    { title: 'Day 6: Uluwatu and Padang Padang (B)', text: 'Breakfast, then a half day along the southern cliffs\nPadang Padang beach, framed by limestone walls\nUluwatu temple at sunset, high above the ocean\nOptional: the Kecak fire dance in the temple amphitheatre', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast, then a half day along the southern cliffs', 'Padang Padang beach, framed by limestone walls', 'Uluwatu temple at sunset, high above the ocean'] },
    { title: 'Day 7: Free day in Kuta (B)', text: 'Breakfast and a full day free on the coast\nOptional: a surf lesson with an instructor on Kuta beach\nOptional: shopping at Kuta Square or the night market\nOptional: Waterbom park or a Balinese spa afternoon', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast and a full day free on the coast', 'Optional: a surf lesson with an instructor on Kuta beach', 'Optional: shopping at Kuta Square or the night market'] },
    { title: 'Day 8: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bali', href: '/asia/bali' },
  { label: detail.title }
];

export const bestOfBaliUbudAndKutaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfBaliUbudAndKutaProduct = {
  slug: detail.slug,
  places: ['Ubud', 'Kintamani', 'Bedugul', 'Kuta', 'Uluwatu'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 5,
  transfers: 10,
  meals: 7,
  price: detail.price,
  images: cardImages
};
