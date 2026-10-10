// Classic Bali Honeymoon with Bali Swing. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
  img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
  img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
  img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
  img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
  img('4qzfjlhp9rb7opyc8dzvjjpgi0cy_1470896048_9396103363_d354fd2bc4_b.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Ubud',
    subtitle: 'Ubud to Kintamani',
    dayLabel: 'Day 1 to 2',
    images: [
      img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
      img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
      img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
      img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('4qzfjlhp9rb7opyc8dzvjjpgi0cy_1470896048_9396103363_d354fd2bc4_b.jpg'),
        img('blc7rv8lvishrrzjuxwmcwyxm2ev_1464182679_Bali-Bird-Park-42414.jpg'),
        img('j77jznt391oh7jxf1trzt8ni4ova_1576135551_13307387475_d799ea8cae_b.jpg'),
        img('85xy1teajhb01uc00o1q7nny4bot_1585761031_celluk_village.jpg')
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
      'Check in at your Ubud villa and settle in',
      'First evening free among the rice fields',
      'Optional: Goa Gajah cave temple or the art market',
      `${DAY_MARK}Day 2 · Kintamani and the Bali swing`,
      'Breakfast, then a full day out with your own car and guide',
      'Coffee plantation tasting on the climb to Kintamani',
      'Tegenungan waterfall and the Tegalalang rice terraces',
      'A ride on the Bali jungle swing, included in your package'
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
        name: 'Kintamani with the Bali swing',
        day: 2,
        optional: false,
        image: img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        description: 'Coffee plantation tasting, the crater lake view at Kintamani, Tegenungan waterfall, the Tegalalang terraces and a ride on the Bali jungle swing.'
      },
      {
        name: 'Goa Gajah cave temple',
        day: 1,
        optional: true,
        image: img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
        description: 'The elephant cave, an eleventh century meditation site with a carved doorway and bathing pools, fifteen minutes from central Ubud.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Two nights inland for the first half, with the crater lake at Kintamani, a waterfall stop and the Bali swing over the Tegalalang valley.',
      image: img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuta',
    subtitle: 'Kuta to Bedugul and Uluwatu',
    dayLabel: 'Day 3 to 5',
    images: [
      img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
      img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
      img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
      img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
    ],
    dayImages: {
      3: [
        img('7tfkrhr259gnolwm9ec49ng5v2ff_Ulun%20Danu%20Temple%201.jpg'),
        img('e81e8w6ia95ocbac34rigtxfwddd_slide-8.jpg'),
        img('63rp5vt6fg9lnhd2bsolet8cpft3_ezgif-4-1fcf41f031.jpg'),
        img('zwzrpc8zhw3jl7ltwuqtrh8zmm8s_bali%20handara%20gate.jpg')
      ],
      4: [
        img('f6z8i3l0jqwujzqeosh56dgkj38a_padang-padang-beach-19-1440x960.jpg'),
        img('p0tyf5xa92nbblmla956dmfsaqrd_shutterstock_1453687076.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg')
      ],
      5: [
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
        img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
        img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
        img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Bedugul and on to Kuta`,
      'Breakfast and check out, then north to the Handara gate',
      'Ulun Danu Beratan, the temple standing on the lake',
      'Sunset at Tanah Lot, the sea temple on the rocks',
      'Check in at your Kuta hotel near the beach',
      `${DAY_MARK}Day 4 · Water sports and Uluwatu`,
      'Breakfast, then a morning at Tanjung Benoa beach',
      'Banana boat and jet ski with an instructor',
      'Padang Padang beach in its limestone cove',
      'Uluwatu temple on the cliffs at sunset',
      `${DAY_MARK}Day 5 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'Bliss Surfer Hotel, Kuta',
      description: '2 nights · Breakfast · Standard room · 3★ · Surf style hotel five minutes from Kuta beach',
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
        name: 'Bedugul lakes and Tanah Lot sunset',
        day: 3,
        optional: false,
        image: img('7tfkrhr259gnolwm9ec49ng5v2ff_Ulun%20Danu%20Temple%201.jpg'),
        description: 'The Handara gate, the lake temple of Ulun Danu Beratan at Bedugul, then the sea temple of Tanah Lot as the sun goes down.'
      },
      {
        name: 'Water sports, Padang Padang and Uluwatu',
        day: 4,
        optional: false,
        image: img('f6z8i3l0jqwujzqeosh56dgkj38a_padang-padang-beach-19-1440x960.jpg'),
        description: 'Banana boat and jet ski at Tanjung Benoa, the cove at Padang Padang beach, then Uluwatu temple above the surf for sunset.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Two nights on the coast, with the Bedugul lake temples on the way down, water sports at Tanjung Benoa and the Uluwatu cliffs.',
      image: img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
    }
  }
];

const detail = {
  slug: 'classic-bali-honeymoon-with-bali-swing',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Classic Bali Honeymoon with Bali Swing',
  alt: 'The Bali jungle swing above the Tegalalang valley',
  days: '5 days / 4 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided day tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Short trips'],
  price: 28690,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ubud', 'Kintamani', 'Bedugul', 'Kuta', 'Uluwatu'],
  stats: { days: 5, cities: 2, hotels: 2, activities: 3, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['6 transfers', 'Transport'],
    ['4 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Our most affordable honeymoon. Four nights, both sides of Bali, and the swing photo everyone comes home with.',
    quoteMore: 'The swing queues are shortest before eleven, so we start the Kintamani day early. Bring a dress or shirt with some colour, it makes a real difference in those valley photographs.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A five day honeymoon on a sensible budget: two nights in Ubud for the crater lake, the rice terraces and the Bali jungle swing, then two on the coast with the Bedugul lake temples, water sports and sunset at Uluwatu.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights with daily breakfast; private airport and inter city transfers; Kintamani and rice terrace tour with the Bali swing; Bedugul and Tanah Lot sunset tour; water sports with Padang Padang and Uluwatu.',
  intro2: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Ubud (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your Ubud villa and settle in\nFirst evening free among the rice fields\nOptional: Goa Gajah cave temple or the art market', hotel: 'Asri Sari Villa, Ubud', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your Ubud villa and settle in', 'First evening free among the rice fields'] },
    { title: 'Day 2: Kintamani and the Bali swing (B)', text: 'Breakfast, then a full day out with your own car and guide\nCoffee plantation tasting on the climb to Kintamani\nTegenungan waterfall and the Tegalalang rice terraces\nA ride on the Bali jungle swing, included in your package', hotel: 'Asri Sari Villa, Ubud', highlights: ['Breakfast, then a full day out with your own car and guide', 'Coffee plantation tasting on the climb to Kintamani', 'Tegenungan waterfall and the Tegalalang rice terraces'] },
    { title: 'Day 3: Bedugul and on to Kuta (B)', text: 'Breakfast and check out, then north to the Handara gate\nUlun Danu Beratan, the temple standing on the lake\nSunset at Tanah Lot, the sea temple on the rocks\nCheck in at your Kuta hotel near the beach', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast and check out, then north to the Handara gate', 'Ulun Danu Beratan, the temple standing on the lake', 'Sunset at Tanah Lot, the sea temple on the rocks'] },
    { title: 'Day 4: Water sports and Uluwatu (B)', text: 'Breakfast, then a morning at Tanjung Benoa beach\nBanana boat and jet ski with an instructor\nPadang Padang beach in its limestone cove\nUluwatu temple on the cliffs at sunset', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast, then a morning at Tanjung Benoa beach', 'Banana boat and jet ski with an instructor', 'Padang Padang beach in its limestone cove'] },
    { title: 'Day 5: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Indonesia', href: '/asia/indonesia' },
  { label: detail.title }
];

export const classicBaliHoneymoonSwingBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const classicBaliHoneymoonSwingProduct = {
  slug: detail.slug,
  places: ['Ubud', 'Kintamani', 'Bedugul', 'Kuta', 'Uluwatu'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 3,
  transfers: 6,
  meals: 4,
  price: detail.price,
  images: cardImages
};
