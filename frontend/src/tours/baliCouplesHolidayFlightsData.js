// Bali Couples Holiday with Flights. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
  img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
  img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Ubud',
    subtitle: 'Ubud to Bedugul and Kintamani',
    dayLabel: 'Day 1 to 3',
    images: [
      img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
      img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
      img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
      img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg')
    ],
    dayImages: {
      1: [
        img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
        img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
        img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
        img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg')
      ],
      2: [
        img('7tfkrhr259gnolwm9ec49ng5v2ff_Ulun%20Danu%20Temple%201.jpg'),
        img('e81e8w6ia95ocbac34rigtxfwddd_slide-8.jpg'),
        img('63rp5vt6fg9lnhd2bsolet8cpft3_ezgif-4-1fcf41f031.jpg'),
        img('zwzrpc8zhw3jl7ltwuqtrh8zmm8s_bali%20handara%20gate.jpg')
      ],
      3: [
        img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('p1tzfipjpmq6677grx16krlrwx9v_shutterstock_243349891.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Flight to Bali and a dinner`,
      'Flight from Delhi to Denpasar, included in your package',
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your Ubud resort and settle in',
      'Candlelight dinner for two in the evening',
      `${DAY_MARK}Day 2 · Bedugul lakes and Tanah Lot`,
      'Breakfast, then north to the Handara gate for photographs',
      'Ulun Danu Beratan, the temple standing on the lake',
      'Sunset at Tanah Lot, the sea temple on the rocks',
      'Evening back in Ubud at your own pace',
      `${DAY_MARK}Day 3 · Kintamani and rice terraces`,
      'Breakfast, then a full day out with your own car and guide',
      'Coffee plantation tasting on the climb to Kintamani',
      'Tegenungan waterfall and the Tegalalang rice terraces',
      'A turn on the jungle swing above the valley'
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
        name: 'Bedugul lakes and Tanah Lot sunset',
        day: 2,
        optional: false,
        image: img('7tfkrhr259gnolwm9ec49ng5v2ff_Ulun%20Danu%20Temple%201.jpg'),
        description: 'The Handara gate, the lake temple of Ulun Danu Beratan at Bedugul, then the sea temple of Tanah Lot as the sun goes down.'
      },
      {
        name: 'Kintamani and rice terrace day tour',
        day: 3,
        optional: false,
        image: img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        description: 'Coffee plantation tasting on the climb to Kintamani, the crater lake view, Tegenungan waterfall, the terraces and the jungle swing.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Three nights inland with a candlelight dinner on arrival, the Bedugul lake temples and a coffee plantation day up to Kintamani.',
      image: img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuta',
    subtitle: 'Kuta to Uluwatu',
    dayLabel: 'Day 4 to 7',
    images: [
      img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
      img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
      img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
      img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
    ],
    dayImages: {
      4: [
        img('xwfs2claxjogsfoq88zi2778vkgg_1470897615_Vihara_Dharmayana_Kuta_3.jpg'),
        img('mpin67ioevxt7sgz5wklo6uvwt4m_dsc_3785.jpg'),
        img('og1gb1n28wstzow4pz3wysli5q3j_1464163781_Mal-Bali-Galeria.jpg'),
        img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
      ],
      5: [
        img('jitvsn1pu1wu7z600iqswfgphod1_shutterstock_2291878411.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg'),
        img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
      ],
      6: [
        img('deriva74h0yzbv3z7xmdudk0w70b_1464167116_kuta-square.jpg'),
        img('6dn215ssrisvwxp9ulwbfh7h0i1s_night-markets-phuket-thailand.jpg'),
        img('pntcqhuq42iqwedahw0vddb29dat_shutterstock_635175203.jpg'),
        img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
      ],
      7: [
        img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
        img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
        img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · On to Kuta`,
      'Breakfast and check out, then private transfer to Kuta',
      'Check in at your hotel near the beach',
      'Rest of the day free on the south coast',
      'Optional: Kuta Square, the art market or a sunset walk',
      `${DAY_MARK}Day 5 · Water sports and Uluwatu`,
      'Breakfast, then a morning at Tanjung Benoa beach',
      'Banana boat, jet ski and parasailing with an instructor',
      'Uluwatu temple on the cliffs in the late afternoon',
      'Optional: the Kecak fire dance at the temple',
      `${DAY_MARK}Day 6 · Spa day in Kuta`,
      'Breakfast and a free day on the coast',
      'An hour of Balinese massage for two at a nearby spa',
      'Optional: a surf lesson on Kuta beach with an instructor',
      'Optional: grilled seafood on the sand at Jimbaran',
      `${DAY_MARK}Day 7 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your return flight'
    ],
    accommodation: {
      name: 'Diamond Hotel Kuta, Kuta',
      description: '3 nights · Breakfast · Standard room · 3★ · Quiet pool hotel walking distance from Kuta beach',
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
        name: 'Water sports with Uluwatu temple',
        day: 5,
        optional: false,
        image: img('jitvsn1pu1wu7z600iqswfgphod1_shutterstock_2291878411.jpg'),
        description: 'Banana boat, jet ski and parasailing at Tanjung Benoa in the morning, then the cliff top temple at Uluwatu in the late afternoon.'
      },
      {
        name: 'Balinese massage for two',
        day: 6,
        optional: false,
        image: img('pntcqhuq42iqwedahw0vddb29dat_shutterstock_635175203.jpg'),
        description: 'An hour of traditional Balinese massage for both of you on your free day, warm oil and long pressure strokes at a spa in Kuta.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights on the coast with a water sports and Uluwatu day, a free day on the beach and a spa hour before you fly home.',
      image: img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
    }
  }
];

const detail = {
  slug: 'bali-couples-holiday-with-flights',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bali Couples Holiday with Flights',
  alt: 'Handara gate in the hills at Bedugul, Bali',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Return flights, private transfers and guided tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Culture'],
  price: 91133,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ubud', 'Bedugul', 'Tanah Lot', 'Kuta', 'Uluwatu'],
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
    quote: 'Flights included and a candlelight dinner on the first night. Couples land, eat well and sleep, and the trip starts right.',
    quoteMore: 'Three nights in each base is the sweet spot for a week. Keep the sixth day completely free, it is the one couples thank us for when they get home.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days for two with return flights, three nights in Ubud for a candlelight dinner, the Bedugul lake temples and Kintamani, then three nights in Kuta with water sports, Uluwatu, a free beach day and a couples massage.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: return flights from Delhi; 6 nights with daily breakfast; private airport and inter city transfers; candlelight dinner; Bedugul and Tanah Lot sunset tour; Kintamani and rice terrace tour; water sports with Uluwatu; Balinese massage for two.',
  intro2: 'Not included: Indonesia visa fees; lunches and other dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Flight to Bali and a dinner (D)', text: 'Flight from Delhi to Denpasar, included in your package\nArrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your Ubud resort and settle in\nCandlelight dinner for two in the evening', hotel: 'Bakung Ubud Resort & Villa', highlights: ['Flight from Delhi to Denpasar, included in your package', 'Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your Ubud resort and settle in'] },
    { title: 'Day 2: Bedugul lakes and Tanah Lot (B)', text: 'Breakfast, then north to the Handara gate for photographs\nUlun Danu Beratan, the temple standing on the lake\nSunset at Tanah Lot, the sea temple on the rocks\nEvening back in Ubud at your own pace', hotel: 'Bakung Ubud Resort & Villa', highlights: ['Breakfast, then north to the Handara gate for photographs', 'Ulun Danu Beratan, the temple standing on the lake', 'Sunset at Tanah Lot, the sea temple on the rocks'] },
    { title: 'Day 3: Kintamani and rice terraces (B)', text: 'Breakfast, then a full day out with your own car and guide\nCoffee plantation tasting on the climb to Kintamani\nTegenungan waterfall and the Tegalalang rice terraces\nA turn on the jungle swing above the valley', hotel: 'Bakung Ubud Resort & Villa', highlights: ['Breakfast, then a full day out with your own car and guide', 'Coffee plantation tasting on the climb to Kintamani', 'Tegenungan waterfall and the Tegalalang rice terraces'] },
    { title: 'Day 4: On to Kuta (B)', text: 'Breakfast and check out, then private transfer to Kuta\nCheck in at your hotel near the beach\nRest of the day free on the south coast\nOptional: Kuta Square, the art market or a sunset walk', hotel: 'Diamond Hotel Kuta, Bali', highlights: ['Breakfast and check out, then private transfer to Kuta', 'Check in at your hotel near the beach', 'Rest of the day free on the south coast'] },
    { title: 'Day 5: Water sports and Uluwatu (B)', text: 'Breakfast, then a morning at Tanjung Benoa beach\nBanana boat, jet ski and parasailing with an instructor\nUluwatu temple on the cliffs in the late afternoon\nOptional: the Kecak fire dance at the temple', hotel: 'Diamond Hotel Kuta, Bali', highlights: ['Breakfast, then a morning at Tanjung Benoa beach', 'Banana boat, jet ski and parasailing with an instructor', 'Uluwatu temple on the cliffs in the late afternoon'] },
    { title: 'Day 6: Spa day in Kuta (B)', text: 'Breakfast and a free day on the coast\nAn hour of Balinese massage for two at a nearby spa\nOptional: a surf lesson on Kuta beach with an instructor\nOptional: grilled seafood on the sand at Jimbaran', hotel: 'Diamond Hotel Kuta, Bali', highlights: ['Breakfast and a free day on the coast', 'An hour of Balinese massage for two at a nearby spa', 'Optional: a surf lesson on Kuta beach with an instructor'] },
    { title: 'Day 7: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your return flight', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your return flight'] }
  ],
  outro: 'Not included: Indonesia visa fees; lunches and other dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bali', href: '/asia/bali' },
  { label: detail.title }
];

export const baliCouplesHolidayFlightsBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const baliCouplesHolidayFlightsProduct = {
  slug: detail.slug,
  places: ['Ubud', 'Bedugul', 'Tanah Lot', 'Kuta', 'Uluwatu'],
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
