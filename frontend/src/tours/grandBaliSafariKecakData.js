// Grand Bali Holiday with Safari and Kecak. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
  img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
  img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
  img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
  img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
  img('hhhu10tba5yumzkwh2ta9yvt82df_17015830_10154515632888931_1877145227028070565_o.jpg'),
  img('bs96fl43584uve7wwhbrody0iv75_1470736645_Bali_Safari__26_Marine_Park_(2688909441).jpg'),
  img('7tfkrhr259gnolwm9ec49ng5v2ff_Ulun%20Danu%20Temple%201.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Ubud',
    subtitle: 'Ubud to Kintamani and the safari park',
    dayLabel: 'Day 1 to 3',
    images: [
      img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
      img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
      img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
      img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg')
    ],
    dayImages: {
      1: [
        img('2kpx79s3vxrjrh07k2kaajmjalmw_shutterstock_2313711741.jpg'),
        img('p5qmu24btsi6rw9ye14yp9y3v9js_1464162732_things-to-do-in-bali-ubud-art-market.jpg'),
        img('kmleb6ur2b7j83f6gt2jg3z1kaw0_1470727921_Goa_Gajah_Front.JPG'),
        img('xhm7apn2p4xf3utfjc38fhrs94cs_1470740091_maxresdefault.jpg')
      ],
      2: [
        img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('p1tzfipjpmq6677grx16krlrwx9v_shutterstock_243349891.jpg')
      ],
      3: [
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
      'Rest of the day free in Bali\'s green interior',
      'Optional: the Monkey Forest or the Ubud art market',
      `${DAY_MARK}Day 2 · Kintamani and rice terraces`,
      'Breakfast, then a full day out with your own car and guide',
      'Coffee plantation tasting on the climb to Kintamani',
      'Tegenungan waterfall and the Tegalalang rice terraces',
      'A turn on the jungle swing above the valley',
      `${DAY_MARK}Day 3 · A day at Bali Safari`,
      'Breakfast, then a full day at Bali Safari and Marine Park',
      'Safari ride through the African and Indian enclosures',
      'Elephant and bird shows, then the water park',
      'Back at the villa in the evening'
    ],
    accommodation: {
      name: 'Asri Sari Villa, Ubud',
      description: '3 nights · Breakfast · Standard room · 3★ · Small villa property on the quiet edge of Ubud',
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
        description: 'Coffee plantation tasting on the climb to Kintamani, the crater lake view, Tegenungan waterfall, the Tegalalang terraces and the jungle swing.'
      },
      {
        name: 'Bali Safari and Marine Park',
        day: 3,
        optional: false,
        image: img('hhhu10tba5yumzkwh2ta9yvt82df_17015830_10154515632888931_1877145227028070565_o.jpg'),
        description: 'Jungle Hopper entry with a safari ride through the African and Indian enclosures, the elephant and bird shows and the water park included.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Three nights inland with a coffee plantation day up to Kintamani and a full day at the safari park, good for families with children.',
      image: img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuta',
    subtitle: 'Kuta to Bedugul and Uluwatu',
    dayLabel: 'Day 4 to 7',
    images: [
      img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
      img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
      img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
      img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
    ],
    dayImages: {
      4: [
        img('7tfkrhr259gnolwm9ec49ng5v2ff_Ulun%20Danu%20Temple%201.jpg'),
        img('e81e8w6ia95ocbac34rigtxfwddd_slide-8.jpg'),
        img('63rp5vt6fg9lnhd2bsolet8cpft3_ezgif-4-1fcf41f031.jpg'),
        img('zwzrpc8zhw3jl7ltwuqtrh8zmm8s_bali%20handara%20gate.jpg')
      ],
      5: [
        img('2alo20sd37carkcrs5xqxflflbhe_Uluwatu%20Temple%202.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg'),
        img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg')
      ],
      6: [
        img('og1gb1n28wstzow4pz3wysli5q3j_1464163781_Mal-Bali-Galeria.jpg'),
        img('6u10mdhy3dcpjb8pctpthpoe4f0a_pandawa-beach-mikebali-001.jpg'),
        img('85ll3znhmo6ucxcl0w2xq85ehe5i_1470899861_Bali__E2_80_93_Ground_Zero_Monument_(2692318786).jpg'),
        img('deriva74h0yzbv3z7xmdudk0w70b_1464167116_kuta-square.jpg')
      ],
      7: [
        img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
        img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Bedugul and on to Kuta`,
      'Breakfast and check out, then north to the Handara gate',
      'Ulun Danu Beratan, the temple standing on the lake',
      'Sunset at Tanah Lot, the sea temple on the rocks',
      'Check in at your Kuta hotel for three nights',
      `${DAY_MARK}Day 5 · Water sports and Kecak dance`,
      'Breakfast, then a morning at Tanjung Benoa beach',
      'Banana boat and jet ski with an instructor',
      'Uluwatu temple on the cliffs in the late afternoon',
      'Kecak fire dance in the temple amphitheatre afterwards',
      `${DAY_MARK}Day 6 · Free day in Kuta`,
      'Breakfast and a full day free on the coast',
      'Optional: a surf lesson with an instructor on Kuta beach',
      'Optional: Waterbom park, good for families',
      'Optional: Kuta Square and the art market',
      `${DAY_MARK}Day 7 · Departure from Bali`,
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
        name: 'Bedugul lakes and Tanah Lot sunset',
        day: 4,
        optional: false,
        image: img('7tfkrhr259gnolwm9ec49ng5v2ff_Ulun%20Danu%20Temple%201.jpg'),
        description: 'The Handara gate, the lake temple of Ulun Danu Beratan at Bedugul, then the sea temple of Tanah Lot as the sun goes down.'
      },
      {
        name: 'Water sports with the Kecak dance',
        day: 5,
        optional: false,
        image: img('2alo20sd37carkcrs5xqxflflbhe_Uluwatu%20Temple%202.jpg'),
        description: 'Banana boat and jet ski at Tanjung Benoa, Uluwatu temple in the late afternoon, then the Kecak fire dance in the cliff amphitheatre.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights on the coast, reached by way of the Bedugul lakes, with water sports at Tanjung Benoa, Uluwatu and a free beach day.',
      image: img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg')
    }
  }
];

const detail = {
  slug: 'grand-bali-holiday-with-safari-and-kecak',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Grand Bali Holiday with Safari and Kecak',
  alt: 'Ulun Danu Beratan temple at Bedugul, Bali',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided day tours',
  tag: 'Family',
  tags: ['Family', 'Culture'],
  price: 40280,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ubud', 'Kintamani', 'Bedugul', 'Kuta', 'Uluwatu'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 4, transfers: 7 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['7 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'The safari park and the water park make this one work for children. Parents get the temples in between.',
    quoteMore: 'Bali Safari needs a full day, so go early and carry swimwear for the water park. On the Bedugul day we leave Ubud by nine so you reach Tanah Lot comfortably before sunset.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days with three nights inland and three on the coast: Kintamani and the rice terraces, a full day at Bali Safari, the lake temples of Bedugul, sunset at Tanah Lot, water sports and the Kecak fire dance at Uluwatu.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with daily breakfast; private airport and inter city transfers; Kintamani and rice terrace tour; Bali Safari Jungle Hopper entry; Bedugul and Tanah Lot sunset tour; water sports with Uluwatu and the Kecak dance.',
  intro2: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Ubud (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your Ubud villa and settle in\nRest of the day free in Bali\'s green interior\nOptional: the Monkey Forest or the Ubud art market', hotel: 'Asri Sari Villa, Ubud', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your Ubud villa and settle in', 'Rest of the day free in Bali\'s green interior'] },
    { title: 'Day 2: Kintamani and rice terraces (B)', text: 'Breakfast, then a full day out with your own car and guide\nCoffee plantation tasting on the climb to Kintamani\nTegenungan waterfall and the Tegalalang rice terraces\nA turn on the jungle swing above the valley', hotel: 'Asri Sari Villa, Ubud', highlights: ['Breakfast, then a full day out with your own car and guide', 'Coffee plantation tasting on the climb to Kintamani', 'Tegenungan waterfall and the Tegalalang rice terraces'] },
    { title: 'Day 3: A day at Bali Safari (B)', text: 'Breakfast, then a full day at Bali Safari and Marine Park\nSafari ride through the African and Indian enclosures\nElephant and bird shows, then the water park\nBack at the villa in the evening', hotel: 'Asri Sari Villa, Ubud', highlights: ['Breakfast, then a full day at Bali Safari and Marine Park', 'Safari ride through the African and Indian enclosures', 'Elephant and bird shows, then the water park'] },
    { title: 'Day 4: Bedugul and on to Kuta (B)', text: 'Breakfast and check out, then north to the Handara gate\nUlun Danu Beratan, the temple standing on the lake\nSunset at Tanah Lot, the sea temple on the rocks\nCheck in at your Kuta hotel for three nights', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast and check out, then north to the Handara gate', 'Ulun Danu Beratan, the temple standing on the lake', 'Sunset at Tanah Lot, the sea temple on the rocks'] },
    { title: 'Day 5: Water sports and Kecak dance (B)', text: 'Breakfast, then a morning at Tanjung Benoa beach\nBanana boat and jet ski with an instructor\nUluwatu temple on the cliffs in the late afternoon\nKecak fire dance in the temple amphitheatre afterwards', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast, then a morning at Tanjung Benoa beach', 'Banana boat and jet ski with an instructor', 'Uluwatu temple on the cliffs in the late afternoon'] },
    { title: 'Day 6: Free day in Kuta (B)', text: 'Breakfast and a full day free on the coast\nOptional: a surf lesson with an instructor on Kuta beach\nOptional: Waterbom park, good for families\nOptional: Kuta Square and the art market', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast and a full day free on the coast', 'Optional: a surf lesson with an instructor on Kuta beach', 'Optional: Waterbom park, good for families'] },
    { title: 'Day 7: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Indonesia', href: '/asia/indonesia' },
  { label: detail.title }
];

export const grandBaliSafariKecakBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const grandBaliSafariKecakProduct = {
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
  meals: 6,
  price: detail.price,
  images: cardImages
};
