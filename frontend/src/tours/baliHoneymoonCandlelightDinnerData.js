// Bali Honeymoon with Candlelight Dinner. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
  img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
  img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
  img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
  img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
  img('jitvsn1pu1wu7z600iqswfgphod1_shutterstock_2291878411.jpg'),
  img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg'),
  img('deriva74h0yzbv3z7xmdudk0w70b_1464167116_kuta-square.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Ubud',
    subtitle: 'Ubud to Kintamani and Bedugul',
    dayLabel: 'Day 1 to 3',
    images: [
      img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
      img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
      img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
      img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg')
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
      'First evening free among the rice fields',
      'Optional: Goa Gajah cave temple or the Ubud art market',
      `${DAY_MARK}Day 2 · Kintamani and rice terraces`,
      'Breakfast, then a full day out with your own car and guide',
      'Coffee plantation tasting on the climb to Kintamani',
      'Tegenungan waterfall and the Tegalalang rice terraces',
      'A turn on the jungle swing above the valley',
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
        description: 'Coffee plantation tasting on the way to Kintamani, views across the crater lake, then Tegenungan waterfall, the Tegalalang terraces and the jungle swing.'
      },
      {
        name: 'Bedugul lakes and Tanah Lot sunset',
        day: 3,
        optional: false,
        image: img('7tfkrhr259gnolwm9ec49ng5v2ff_Ulun%20Danu%20Temple%201.jpg'),
        description: 'The Handara gate, Ulun Danu Beratan standing on the water at Bedugul, and the sea temple of Tanah Lot for sunset on the way back.'
      },
      {
        name: 'Goa Gajah cave temple',
        day: 1,
        optional: true,
        image: img('kmleb6ur2b7j83f6gt2jg3z1kaw0_1470727921_Goa_Gajah_Front.JPG'),
        description: 'The elephant cave, an eleventh century meditation site with a carved doorway and bathing pools, fifteen minutes from central Ubud.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Three nights inland for your first days together, with the crater lake at Kintamani, the terraces at Tegalalang and lake temples to the north.',
      image: img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuta',
    subtitle: 'Kuta to Tanjung Benoa and Uluwatu',
    dayLabel: 'Day 4 to 7',
    images: [
      img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
      img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
      img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
      img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
    ],
    dayImages: {
      4: [
        img('jitvsn1pu1wu7z600iqswfgphod1_shutterstock_2291878411.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg'),
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
      ],
      5: [
        img('deriva74h0yzbv3z7xmdudk0w70b_1464167116_kuta-square.jpg'),
        img('85ll3znhmo6ucxcl0w2xq85ehe5i_1470899861_Bali__E2_80_93_Ground_Zero_Monument_(2692318786).jpg'),
        img('6u10mdhy3dcpjb8pctpthpoe4f0a_pandawa-beach-mikebali-001.jpg'),
        img('d7r6g7g7gvn5bsd70bwvjbaqb79t_1470899547_red-eared-slider-1201602_960_720.jpg')
      ],
      6: [
        img('pntcqhuq42iqwedahw0vddb29dat_shutterstock_635175203.jpg'),
        img('neznowe35mxcnjj84559i40ojhl7_1628342893_f98dbd26-1189-4c22-9e39-d8b3054eabdd.jpeg.jpg'),
        img('knfbboa3r8mo0iluevx4bvv0elf4_new-kuta-green-park.jpg'),
        img('hkrdncuwgcykxqi9e21mapbvqz0g_image-20150929-30993-19x6l7.jpg')
      ],
      7: [
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
        img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
        img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
        img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Water sports and Uluwatu`,
      'Breakfast and check out, then private transfer to Kuta',
      'Water sports at Tanjung Benoa: banana boat, jet ski, parasailing',
      'Uluwatu temple on the cliffs in the late afternoon',
      'Check in at your Kuta hotel for three nights',
      `${DAY_MARK}Day 5 · Free day in Kuta`,
      'Breakfast and a full day free on the south coast',
      'Optional: a surf lesson on Kuta beach with an instructor',
      'Optional: Kuta Square, the art market or the night market',
      'Optional: grilled seafood on the sand at Jimbaran',
      `${DAY_MARK}Day 6 · Spa and candlelight dinner`,
      'Breakfast, then a slow morning by the pool',
      'A traditional Balinese massage for two at a nearby spa',
      'Candlelight dinner for two in the evening, set up privately',
      'Optional: a quiet walk along Kuta beach afterwards',
      `${DAY_MARK}Day 7 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your return flight'
    ],
    accommodation: {
      name: 'Diamond Hotel Kuta, Kuta',
      description: '3 nights · Breakfast · Standard room · 3★ · Quiet hotel with a pool, walking distance from Kuta beach',
      images: [
        img('5ihnxga92qbg7iqmv8ik6oys35vz_49470685.jpg'),
        img('sq3ofurpnwstttz9bycn3nq30fbb_49471816.jpg'),
        img('p0q6c55p4puivacdzd3u690etysf_49473349.jpg'),
        img('lqek785w4wrh79qs0xqqvbhgc7xu_49471119.jpg'),
        img('hhbgf084abvcvabmrgqjhhn5d1z9_49470684.jpg'),
        img('eob1zjyrkxkez3h8l4r3algq11rl_623498_14112616020023635311.webp'),
        img('mc4bbirb1icg3w6lj5wakmo7mt1s_351524004.jpg'),
        img('0mhdtv050y3jzq8mjpmzgqdtbkrw_49471168.jpg'),
        img('u4lo89bd5c9x0fyvdso13br8p4kl_219881817.jpg'),
        img('9mp8505jm8uoxxlt689wkwyfqajz_49471140.jpg'),
        img('ob6b5xggype0biytfjy25prvkdsm_351523960.jpg'),
        img('uncgyv1d6sbl13f30lozf41jb66w_219881736.jpg')
      ]
    },
    activities: [
      {
        name: 'Water sports and Uluwatu temple',
        day: 4,
        optional: false,
        image: img('jitvsn1pu1wu7z600iqswfgphod1_shutterstock_2291878411.jpg'),
        description: 'Banana boat, jet ski and parasailing at Tanjung Benoa, then the cliff top temple at Uluwatu in the late afternoon light.'
      },
      {
        name: 'Balinese massage for two',
        day: 6,
        optional: false,
        image: img('pntcqhuq42iqwedahw0vddb29dat_shutterstock_635175203.jpg'),
        description: 'A traditional Balinese massage for both of you, warm oil and long pressure strokes, booked privately at a spa near your hotel.'
      },
      {
        name: 'Kuta beach and Kuta Square',
        day: 5,
        optional: true,
        image: img('deriva74h0yzbv3z7xmdudk0w70b_1464167116_kuta-square.jpg'),
        description: 'The surf beach two streets from your hotel, with boards for hire, plus the shops and cafes of Kuta Square for a slow afternoon.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights on the coast with water sports at Tanjung Benoa, Uluwatu temple at sunset, a spa afternoon and a candlelight dinner by the sea.',
      image: img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
    }
  }
];

const detail = {
  slug: 'bali-honeymoon-with-candlelight-dinner',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bali Honeymoon with Candlelight Dinner',
  alt: 'Ulun Danu Beratan temple on the lake in Bedugul, Bali',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Return flights, private transfers and guided tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Luxury'],
  price: 75049,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ubud', 'Kintamani', 'Bedugul', 'Kuta', 'Uluwatu'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 4, transfers: 7 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['7 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Honeymooners always thank me for the free day in Kuta. Six days of touring with no gap is no honeymoon.',
    quoteMore: 'Ask us to set the candlelight dinner on the sand rather than at the hotel. Jimbaran bay works best at around seven, when the light has gone soft and the grills are just lit.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A seven day honeymoon with return flights, three nights in Ubud for crater lakes and temple sunsets, then three on the coast with water sports at Tanjung Benoa, Uluwatu at sunset, a couples massage and a private candlelight dinner.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: return international flights; 6 nights with daily breakfast; private airport and inter city transfers; Kintamani and rice terrace tour; Bedugul and Tanah Lot sunset tour; water sports with Uluwatu; Balinese massage for two; candlelight dinner.',
  intro2: 'Not included: Indonesia visa fees; lunches and other dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Ubud (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your Ubud resort and settle in\nFirst evening free among the rice fields\nOptional: Goa Gajah cave temple or the Ubud art market', hotel: 'Bakung Ubud Resort & Villa, Ubud', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your Ubud resort and settle in', 'First evening free among the rice fields'] },
    { title: 'Day 2: Kintamani and rice terraces (B)', text: 'Breakfast, then a full day out with your own car and guide\nCoffee plantation tasting on the climb to Kintamani\nTegenungan waterfall and the Tegalalang rice terraces\nA turn on the jungle swing above the valley', hotel: 'Bakung Ubud Resort & Villa, Ubud', highlights: ['Breakfast, then a full day out with your own car and guide', 'Coffee plantation tasting on the climb to Kintamani', 'Tegenungan waterfall and the Tegalalang rice terraces'] },
    { title: 'Day 3: Bedugul lakes and Tanah Lot (B)', text: 'Breakfast, then north to the Handara gate for photographs\nUlun Danu Beratan, the temple standing on the lake\nSunset at Tanah Lot, the sea temple on the rocks\nEvening back in Ubud at your own pace', hotel: 'Bakung Ubud Resort & Villa, Ubud', highlights: ['Breakfast, then north to the Handara gate for photographs', 'Ulun Danu Beratan, the temple standing on the lake', 'Sunset at Tanah Lot, the sea temple on the rocks'] },
    { title: 'Day 4: Water sports and Uluwatu (B)', text: 'Breakfast and check out, then private transfer to Kuta\nWater sports at Tanjung Benoa: banana boat, jet ski, parasailing\nUluwatu temple on the cliffs in the late afternoon\nCheck in at your Kuta hotel for three nights', hotel: 'Diamond Hotel Kuta, Bali', highlights: ['Breakfast and check out, then private transfer to Kuta', 'Water sports at Tanjung Benoa: banana boat, jet ski, parasailing', 'Uluwatu temple on the cliffs in the late afternoon'] },
    { title: 'Day 5: Free day in Kuta (B)', text: 'Breakfast and a full day free on the south coast\nOptional: a surf lesson on Kuta beach with an instructor\nOptional: Kuta Square, the art market or the night market\nOptional: grilled seafood on the sand at Jimbaran', hotel: 'Diamond Hotel Kuta, Bali', highlights: ['Breakfast and a full day free on the south coast', 'Optional: a surf lesson on Kuta beach with an instructor', 'Optional: Kuta Square, the art market or the night market'] },
    { title: 'Day 6: Spa and candlelight dinner (B, D)', text: 'Breakfast, then a slow morning by the pool\nA traditional Balinese massage for two at a nearby spa\nCandlelight dinner for two in the evening, set up privately\nOptional: a quiet walk along Kuta beach afterwards', hotel: 'Diamond Hotel Kuta, Bali', highlights: ['Breakfast, then a slow morning by the pool', 'A traditional Balinese massage for two at a nearby spa', 'Candlelight dinner for two in the evening, set up privately'] },
    { title: 'Day 7: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your return flight', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your return flight'] }
  ],
  outro: 'Not included: Indonesia visa fees; lunches and other dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Indonesia', href: '/asia/indonesia' },
  { label: detail.title }
];

export const baliHoneymoonCandlelightDinnerBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const baliHoneymoonCandlelightDinnerProduct = {
  slug: detail.slug,
  places: ['Ubud', 'Kintamani', 'Bedugul', 'Kuta', 'Uluwatu'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 4,
  transfers: 7,
  meals: 7,
  price: detail.price,
  images: cardImages
};
