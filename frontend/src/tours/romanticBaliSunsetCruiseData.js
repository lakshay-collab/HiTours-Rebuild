// Romantic Bali Getaway with Sunset Cruise. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
  img('1fniznkys3hs4t18hsind858z8ok_shutterstock_464526401.jpg'),
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
  img('qzqg7qbx8pq33i7so7acy1c8d9c8_shutterstock_1346342258.jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('28l0mtv3v8g1z78gnzjsxjx0zbhd_shutterstock_1346345108.jpg'),
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
  img('ni2vsnbwe3rqwxohjdor002i2nha_shutterstock_559730524.jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
  img('x7ihmxsmcxo1ds6acpzc3vxyr4x5_shutterstock_1179917983.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('1fniznkys3hs4t18hsind858z8ok_shutterstock_464526401.jpg'),
  img('qzqg7qbx8pq33i7so7acy1c8d9c8_shutterstock_1346342258.jpg'),
  img('28l0mtv3v8g1z78gnzjsxjx0zbhd_shutterstock_1346345108.jpg'),
  img('ni2vsnbwe3rqwxohjdor002i2nha_shutterstock_559730524.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kuta',
    subtitle: 'Kuta to Uluwatu and Tanjung Benoa',
    dayLabel: 'Day 1 to 3',
    images: [
      img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
      img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
      img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
      img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
    ],
    dayImages: {
      1: [
        img('85ll3znhmo6ucxcl0w2xq85ehe5i_1470899861_Bali__E2_80_93_Ground_Zero_Monument_(2692318786).jpg'),
        img('h3oys62dd0xro0wz26eputi96v5w_img_0291.jpg'),
        img('6dn215ssrisvwxp9ulwbfh7h0i1s_night-markets-phuket-thailand.jpg'),
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
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
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Kuta`,
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your Kuta hotel near the beach',
      'First evening free on the south coast',
      'Optional: the Kuta night market or a walk on the sand',
      `${DAY_MARK}Day 2 · Temples and the monkey forest`,
      'Breakfast, then a private day among the temples',
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
        name: 'Temple tour with the monkey forest',
        day: 2,
        optional: false,
        image: img('umi9wd3cgyw3tpm6maoacj6e9rxy_shutterstock_1209289312.jpg'),
        description: 'A private day among the temples, taking in Taman Ayun, the Alas Kedaton monkey forest and the cliff top temple at Uluwatu.'
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
      description: 'Three nights on the south coast, with a private temple day, water sports at Tanjung Benoa and a sunset cruise with dinner on the water.',
      image: img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Seminyak',
    dayLabel: 'Day 4 to 6',
    images: [
      img('sp71g4gjrrcnxd24gznzr7ejpldf_Seminyak-Beach-Umbrellas-Tile-Image.jpg'),
      img('1fniznkys3hs4t18hsind858z8ok_shutterstock_464526401.jpg'),
      img('x7ihmxsmcxo1ds6acpzc3vxyr4x5_shutterstock_1179917983.jpg'),
      img('ni2vsnbwe3rqwxohjdor002i2nha_shutterstock_559730524.jpg')
    ],
    dayImages: {
      4: [
        img('pntcqhuq42iqwedahw0vddb29dat_shutterstock_635175203.jpg'),
        img('j56kcjat6wqhml2qvzduwjbbzgk4_1470836486_5094068950_8a63812968_b.jpg'),
        img('v044c2v9799gydmv4k6vwt8r1usz_1470817046_The_main_and_side_altars_of_the_Shrine_Church_of_St._Stanislaus.JPG'),
        img('ldv38l0lli296trns54n50pbwdsa_1498474095_fleamarket.jpg')
      ],
      5: [
        img('qkn5jjxgya8q0eudobpue4kvygst_nyaman-gallery.jpg'),
        img('oetfscwkcwfxn6ku1c706epso99j_Observatory-of-the-Self-3.1-2012-Kinetic-Installation-NIGHT-RESIZE-TEST-e1377502664704.jpg'),
        img('aef2a8z1owlrvhkct34kp4jdsib4_1576751076_BALI-double-six-beach.jpg'),
        img('bta09n0tfk1dx2fdsh0oal97yuez_shutterstock_1509544076.jpg')
      ],
      6: [
        img('sp71g4gjrrcnxd24gznzr7ejpldf_Seminyak-Beach-Umbrellas-Tile-Image.jpg'),
        img('1fniznkys3hs4t18hsind858z8ok_shutterstock_464526401.jpg'),
        img('x7ihmxsmcxo1ds6acpzc3vxyr4x5_shutterstock_1179917983.jpg'),
        img('ni2vsnbwe3rqwxohjdor002i2nha_shutterstock_559730524.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Spa day in Seminyak`,
      'Breakfast and check out, then private transfer to Seminyak',
      'Check in and a traditional Balinese massage for two',
      'Afternoon free on Seminyak beach',
      'Optional: dinner along Eat Street or Jalan Laksmana',
      `${DAY_MARK}Day 5 · Candlelight dinner for two`,
      'Breakfast and a full day free in Seminyak',
      'Optional: a beach club afternoon or the Nyaman gallery',
      'Candlelight dinner for two in the evening, set up privately',
      'Optional: a late walk along Double Six beach',
      `${DAY_MARK}Day 6 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'Furamaxclusive Ocean Beach, Seminyak',
      description: '2 nights · Breakfast · Standard room · 3★ · Pool hotel a few minutes from Seminyak beach',
      images: [
        img('e9gusjlkiy577uuwm1ehep9b8lmx_img42.jpg'),
        img('p48pit5vywl996z07c8tur6g4rlh_img4.jpg'),
        img('mf2ts1vefuu2yasucgne087o2987_img16.jpg'),
        img('860du70tb0c1z3qbv32upc14t50k_img5.jpg'),
        img('m5g8zf6rbbhxvkunmguq71c3h22n_img6.jpg'),
        img('yhy599m7z85fg089owalyvgnhdui_img15.jpg'),
        img('f5c1nsjem56yh561ken7xs7hp8j8_img21.jpg'),
        img('itmmrzb9az216lxnfaf4c038nx4k_img27.jpg'),
        img('bfb1g84q6fjd0ze943lcz9a0wnoc_img28.jpg'),
        img('0uwul33q0351m2dmso6k1l90zt2k_img32.jpg'),
        img('h8s7bafzc5julvwkg0sjgs1ybj8h_img33.jpg'),
        img('cqlgsgrp0eqngp7bah637uc0l02l_img38.jpg'),
        img('ibezgdtzqk3ytcuvvvnf82o4hj80_img34.jpg'),
        img('eu67hgzh0pbui23bex0sqilgw7e7_img39.jpg'),
        img('iuaz8x1vbpjo7zds83aegwvlvwiu_img31.jpg')
      ]
    },
    activities: [
      {
        name: 'Balinese massage for two',
        day: 4,
        optional: false,
        image: img('pntcqhuq42iqwedahw0vddb29dat_shutterstock_635175203.jpg'),
        description: 'A traditional Balinese massage for both of you on your first afternoon in Seminyak, warm oil and long pressure strokes at a private spa.'
      },
      {
        name: 'Seminyak beach and Eat Street',
        day: 5,
        optional: true,
        image: img('sp71g4gjrrcnxd24gznzr7ejpldf_Seminyak-Beach-Umbrellas-Tile-Image.jpg'),
        description: 'The long grey sand beach with its beach clubs, and the restaurants of Jalan Kayu Aya a short walk inland for a slow dinner.'
      }
    ],
    program: {
      name: 'Seminyak',
      description: 'Two quiet nights in Seminyak to finish, with a couples massage on arrival and a private candlelight dinner on the last evening.',
      image: img('sp71g4gjrrcnxd24gznzr7ejpldf_Seminyak-Beach-Umbrellas-Tile-Image.jpg')
    }
  }
];

const detail = {
  slug: 'romantic-bali-getaway-with-sunset-cruise',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Romantic Bali Getaway with Sunset Cruise',
  alt: 'Sunset over the sea off Tanjung Benoa, Bali',
  days: '6 days / 5 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided day tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Beach'],
  price: 32299,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kuta', 'Uluwatu', 'Tanjung Benoa', 'Seminyak'],
  stats: { days: 6, cities: 2, hotels: 2, activities: 4, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two beaches, two moods. Kuta for the activity, Seminyak for the dinners. Five nights, nothing rushed.',
    quoteMore: 'Book the sunset cruise for your second evening while you still have energy, and keep Seminyak for late starts. We can set the candlelight dinner on the sand if you prefer it to the hotel.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days for two on the south coast: three nights in Kuta with a private temple day, water sports at Tanjung Benoa and a sunset dinner cruise, then two quieter nights in Seminyak with a couples massage and a candlelight dinner.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights with daily breakfast; private airport and inter city transfers; private temple tour with the monkey forest and Uluwatu; water sports at Tanjung Benoa; sunset dinner cruise; Balinese massage for two; candlelight dinner.',
  intro2: 'Not included: international flights; Indonesia visa fees; lunches and other dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Kuta (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your Kuta hotel near the beach\nFirst evening free on the south coast\nOptional: the Kuta night market or a walk on the sand', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your Kuta hotel near the beach', 'First evening free on the south coast'] },
    { title: 'Day 2: Temples and the monkey forest (B)', text: 'Breakfast, then a private day among the temples\nTaman Ayun and the Alas Kedaton monkey forest\nUluwatu temple on the cliffs in the late afternoon\nOptional: the Kecak fire dance at the temple', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast, then a private day among the temples', 'Taman Ayun and the Alas Kedaton monkey forest', 'Uluwatu temple on the cliffs in the late afternoon'] },
    { title: 'Day 3: Water sports and sunset cruise (B, D)', text: 'Breakfast, then a morning at Tanjung Benoa beach\nBanana boat, jet ski and parasailing with an instructor\nSunset cruise out of Benoa harbour in the evening\nDinner and live music on board as the light goes', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast, then a morning at Tanjung Benoa beach', 'Banana boat, jet ski and parasailing with an instructor', 'Sunset cruise out of Benoa harbour in the evening'] },
    { title: 'Day 4: Spa day in Seminyak (B)', text: 'Breakfast and check out, then private transfer to Seminyak\nCheck in and a traditional Balinese massage for two\nAfternoon free on Seminyak beach\nOptional: dinner along Eat Street or Jalan Laksmana', hotel: 'Furamaxclusive Ocean Beach, Seminyak', highlights: ['Breakfast and check out, then private transfer to Seminyak', 'Check in and a traditional Balinese massage for two', 'Afternoon free on Seminyak beach'] },
    { title: 'Day 5: Candlelight dinner for two (B, D)', text: 'Breakfast and a full day free in Seminyak\nOptional: a beach club afternoon or the Nyaman gallery\nCandlelight dinner for two in the evening, set up privately\nOptional: a late walk along Double Six beach', hotel: 'Furamaxclusive Ocean Beach, Seminyak', highlights: ['Breakfast and a full day free in Seminyak', 'Optional: a beach club afternoon or the Nyaman gallery', 'Candlelight dinner for two in the evening, set up privately'] },
    { title: 'Day 6: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; lunches and other dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Indonesia', href: '/asia/indonesia' },
  { label: detail.title }
];

export const romanticBaliSunsetCruiseBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const romanticBaliSunsetCruiseProduct = {
  slug: detail.slug,
  places: ['Kuta', 'Uluwatu', 'Tanjung Benoa', 'Seminyak'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 4,
  transfers: 8,
  meals: 7,
  price: detail.price,
  images: cardImages
};
