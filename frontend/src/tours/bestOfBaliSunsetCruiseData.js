// Best of Bali with Sunset Cruise. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
  img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
  img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
  img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
  img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
  img('g72m3ehync8t6tn7yjyz5dm47mq1_1470898081_17_Years_of_Sekar_Jepun_2014-11-01_64_edit.jpg'),
  img('85ll3znhmo6ucxcl0w2xq85ehe5i_1470899861_Bali__E2_80_93_Ground_Zero_Monument_(2692318786).jpg'),
  img('csin0xxhwed8fwwferdx9ch6ecpt_1464263127_18203176383_8414817a7b_o.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kuta',
    subtitle: 'Kuta to Uluwatu and Tanjung Benoa',
    dayLabel: 'Day 1 to 3',
    images: [
      img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
      img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
      img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
      img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg')
    ],
    dayImages: {
      1: [
        img('g72m3ehync8t6tn7yjyz5dm47mq1_1470898081_17_Years_of_Sekar_Jepun_2014-11-01_64_edit.jpg'),
        img('85ll3znhmo6ucxcl0w2xq85ehe5i_1470899861_Bali__E2_80_93_Ground_Zero_Monument_(2692318786).jpg'),
        img('csin0xxhwed8fwwferdx9ch6ecpt_1464263127_18203176383_8414817a7b_o.jpg'),
        img('neznowe35mxcnjj84559i40ojhl7_1628342893_f98dbd26-1189-4c22-9e39-d8b3054eabdd.jpeg.jpg')
      ],
      2: [
        img('umi9wd3cgyw3tpm6maoacj6e9rxy_shutterstock_1209289312.jpg'),
        img('p0tyf5xa92nbblmla956dmfsaqrd_shutterstock_1453687076.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('xae4oyhdvs0gd93x9hq87jmwwwu7_taman-ayun-bali-temple.jpg')
      ],
      3: [
        img('7oejukf3xf12ens04wed9luc0cuw_shutterstock_2242711319%20(1).jpg'),
        img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg'),
        img('hoz1563nqoiy0uepnjdcqadxfjrl_shutterstock_672105433.jpg'),
        img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Kuta`,
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your beachfront resort at Tuban',
      'Rest of the day free by the pool or on the sand',
      'Optional: Kuta Square, the art market or a sunset walk',
      `${DAY_MARK}Day 2 · Temples and the monkey forest`,
      'Breakfast, then a full day among the temples',
      'Taman Ayun and the Alas Kedaton monkey forest',
      'Uluwatu temple on the cliffs in the late afternoon',
      'Optional: the Kecak fire dance at the temple',
      `${DAY_MARK}Day 3 · Water sports and sunset cruise`,
      'Breakfast, then a morning at Tanjung Benoa beach',
      'Banana boat, jet ski and parasailing with an instructor',
      'Sunset cruise out of Benoa harbour in the evening',
      'Dinner and live music on board as the light goes'
    ],
    accommodation: {
      name: 'Rama Beach Resort & Villas, Kuta',
      description: '3 nights · Breakfast · Standard room · 4★ · Beachfront resort at Tuban with two pools and a spa',
      images: [
        img('bjgnyxtv8a9nnoat7v0w3dacknm0_img2(1).jpg'),
        img('lkg8ddqgctn2wmbeb03n1ml9719w_img9(1).jpg'),
        img('3k5y1bfaoa65124q0fhfbjutduxh_img3(1).jpg'),
        img('073dw9cmuz3higc3o6ejayq3lodf_img11.jpg'),
        img('vwshfhh5btqhoc0enrrnl4j7cpol_img24(1).jpg'),
        img('3bpsxlz8wj945c7340r7wi1ynw07_img13(1).jpg'),
        img('i0zpmgh7xcevhsvexj1953yjhy78_img17.jpg'),
        img('tfrhlcrifesulliijx40y0gvny4f_img14.jpg'),
        img('l7xnr2q1wv28ay3o3bimlnhol2fv_img39.jpg'),
        img('d6wu8p02wqdxhw88l3dx3t23hie4_img32(1).jpg'),
        img('m778vvtb9tczpl5cbf4loauq5ww4_img35.jpg'),
        img('73f8ku3sreqslhd3610glihx0nz7_img30(1).jpg')
      ]
    },
    activities: [
      {
        name: 'Temple tour with the monkey forest',
        day: 2,
        optional: false,
        image: img('umi9wd3cgyw3tpm6maoacj6e9rxy_shutterstock_1209289312.jpg'),
        description: 'A full day among the temples, taking in Taman Ayun, the Alas Kedaton monkey forest and the cliff top temple at Uluwatu.'
      },
      {
        name: 'Water sports at Tanjung Benoa',
        day: 3,
        optional: false,
        image: img('7oejukf3xf12ens04wed9luc0cuw_shutterstock_2242711319%20(1).jpg'),
        description: 'A half day combo at Tanjung Benoa with banana boat, jet ski and parasailing, all with life jackets and an instructor in the water.'
      },
      {
        name: 'Sunset dinner cruise',
        day: 3,
        optional: false,
        image: img('hoz1563nqoiy0uepnjdcqadxfjrl_shutterstock_672105433.jpg'),
        description: 'A half day cruise out of Benoa harbour with dinner on board and live music, timed for sunset over the Bukit peninsula.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights beachfront at Tuban, with a temple day that ends at Uluwatu, water sports at Tanjung Benoa and a sunset cruise with dinner.',
      image: img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Ubud',
    subtitle: 'Ubud to Kintamani',
    dayLabel: 'Day 4 to 6',
    images: [
      img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
      img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
      img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
      img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg')
    ],
    dayImages: {
      4: [
        img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('p1tzfipjpmq6677grx16krlrwx9v_shutterstock_243349891.jpg')
      ],
      5: [
        img('bulqztounlsn8982w1dldr9qe1ki_shutterstock_130109834.jpg'),
        img('blc7rv8lvishrrzjuxwmcwyxm2ev_1464182679_Bali-Bird-Park-42414.jpg'),
        img('4qzfjlhp9rb7opyc8dzvjjpgi0cy_1470896048_9396103363_d354fd2bc4_b.jpg'),
        img('js18aeuqxymzifw80ggnq5bi75my_1470740587_15393446070_baba6998db_o.jpg')
      ],
      6: [
        img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
        img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
        img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
        img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Kintamani and on to Ubud`,
      'Breakfast and check out, then north through coffee country',
      'The crater lake view at Kintamani',
      'Tegenungan waterfall, the rice terraces and the jungle swing',
      'Check in at your rice field resort near Ubud',
      `${DAY_MARK}Day 5 · Spa day in Ubud`,
      'Breakfast and a free morning at the resort',
      'A traditional Balinese massage at an Ubud spa',
      'Optional: the Monkey Forest or the Saraswati water temple',
      'Optional: the art market and the palace in the town centre',
      `${DAY_MARK}Day 6 · Departure from Bali`,
      'Breakfast at the resort and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'The Sun Of Granary Resort And Villas, Ubud',
      description: '2 nights · Breakfast · Standard room · 4★ · Rice field resort with a pool, a short ride from Ubud town',
      images: [
        img('v3ioepsjg7e2oawhd4506m0rtxey_img4.jpg'),
        img('kku1savmw44kg3jqcto857kkud5r_img2.jpg'),
        img('t6pn6aiqiv9k1vf9tuusqaqac9uo_img9.jpg'),
        img('y4ydkbdw7nqd40rnkorgx1x8l3dy_img12.jpg'),
        img('a42me8hfrzafyptvgr4degpd0aw0_img26.jpg'),
        img('ne1vxjhh6p149j5ff9n4895rp787_img29.jpg'),
        img('aalsvund3y9f90q9f5xrdhn96ri0_img3.jpg'),
        img('ft83jub6ybl5sv7eklynxlvh2ww4_img18.jpg'),
        img('b82zrbsc1nyse7h9acoudyhlru7h_img22.jpg'),
        img('vh62l7widoc4r73amfv5dgg1mdui_img42.jpg'),
        img('tbma2zxjlpavxscosiv71hwyw1ei_img35.jpg'),
        img('1lo1p6zp54f5v79fdm4iga8c0bjp_img31.jpg'),
        img('w9a9zz06dj9fo4e15rer2h3m3bwj_img37.jpg'),
        img('fvgx3njse154zgrts5ocecnbqmi0_5d01b4ea_z.jpg'),
        img('ak22mx4qv5wd9sapr72d31nvx8jx_dfb2f81f_z.jpg')
      ]
    },
    activities: [
      {
        name: 'Kintamani with the jungle swing',
        day: 4,
        optional: false,
        image: img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        description: 'Coffee plantation tasting on the climb to Kintamani, the crater lake view, Tegenungan waterfall, the Tegalalang terraces and the jungle swing.'
      },
      {
        name: 'Balinese massage in Ubud',
        day: 5,
        optional: false,
        image: img('bulqztounlsn8982w1dldr9qe1ki_shutterstock_130109834.jpg'),
        description: 'A traditional Balinese massage with warm oil and long pressure strokes, booked privately at a spa in Ubud on your free day.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Two nights in a rice field resort to finish, reached by way of Kintamani, with a spa afternoon and a free day for the town.',
      image: img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-bali-with-sunset-cruise',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Bali with Sunset Cruise',
  alt: 'Boats off Benoa harbour at sunset, Bali',
  days: '6 days / 5 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided day tours',
  tag: 'Culture',
  tags: ['Honeymoon', 'Culture'],
  price: 66452,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kuta', 'Uluwatu', 'Tanjung Benoa', 'Ubud', 'Kintamani'],
  stats: { days: 6, cities: 2, hotels: 2, activities: 5, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Beach first, rice fields second, and a four star hotel at both ends. It is the easiest Bali week to recommend.',
    quoteMore: 'Ask for a pool view room at Rama Beach and a garden villa at Granary. On the cruise day have a light lunch, dinner on board is generous and starts around seven.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days with four star hotels at both ends: three nights beachfront at Tuban with a temple day at Uluwatu, water sports and a sunset dinner cruise, then two nights in the Ubud rice fields by way of Kintamani, with a spa afternoon.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights with daily breakfast; private airport and inter city transfers; temple tour with the monkey forest and Uluwatu; water sports at Tanjung Benoa; sunset dinner cruise; Kintamani and jungle swing tour; a Balinese massage in Ubud.',
  intro2: 'Not included: international flights; Indonesia visa fees; lunches and other dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Kuta (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your beachfront resort at Tuban\nRest of the day free by the pool or on the sand\nOptional: Kuta Square, the art market or a sunset walk', hotel: 'Rama Beach Resort & Villas, Kuta', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your beachfront resort at Tuban', 'Rest of the day free by the pool or on the sand'] },
    { title: 'Day 2: Temples and the monkey forest (B)', text: 'Breakfast, then a full day among the temples\nTaman Ayun and the Alas Kedaton monkey forest\nUluwatu temple on the cliffs in the late afternoon\nOptional: the Kecak fire dance at the temple', hotel: 'Rama Beach Resort & Villas, Kuta', highlights: ['Breakfast, then a full day among the temples', 'Taman Ayun and the Alas Kedaton monkey forest', 'Uluwatu temple on the cliffs in the late afternoon'] },
    { title: 'Day 3: Water sports and sunset cruise (B, D)', text: 'Breakfast, then a morning at Tanjung Benoa beach\nBanana boat, jet ski and parasailing with an instructor\nSunset cruise out of Benoa harbour in the evening\nDinner and live music on board as the light goes', hotel: 'Rama Beach Resort & Villas, Kuta', highlights: ['Breakfast, then a morning at Tanjung Benoa beach', 'Banana boat, jet ski and parasailing with an instructor', 'Sunset cruise out of Benoa harbour in the evening'] },
    { title: 'Day 4: Kintamani and on to Ubud (B)', text: 'Breakfast and check out, then north through coffee country\nThe crater lake view at Kintamani\nTegenungan waterfall, the rice terraces and the jungle swing\nCheck in at your rice field resort near Ubud', hotel: 'The Sun Of Granary Resort And Villas, Ubud', highlights: ['Breakfast and check out, then north through coffee country', 'The crater lake view at Kintamani', 'Tegenungan waterfall, the rice terraces and the jungle swing'] },
    { title: 'Day 5: Spa day in Ubud (B)', text: 'Breakfast and a free morning at the resort\nA traditional Balinese massage at an Ubud spa\nOptional: the Monkey Forest or the Saraswati water temple\nOptional: the art market and the palace in the town centre', hotel: 'The Sun Of Granary Resort And Villas, Ubud', highlights: ['Breakfast and a free morning at the resort', 'A traditional Balinese massage at an Ubud spa', 'Optional: the Monkey Forest or the Saraswati water temple'] },
    { title: 'Day 6: Departure from Bali (B)', text: 'Breakfast at the resort and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the resort and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; lunches and other dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Indonesia', href: '/asien/indonesia' },
  { label: detail.title }
];

export const bestOfBaliSunsetCruiseBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfBaliSunsetCruiseProduct = {
  slug: detail.slug,
  places: ['Kuta', 'Uluwatu', 'Tanjung Benoa', 'Ubud', 'Kintamani'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 5,
  transfers: 9,
  meals: 6,
  price: detail.price,
  images: cardImages
};
