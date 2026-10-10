// Best of Bali Honeymoon with Seminyak. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('bfd9i7vnfl0rfpza6aodswecrybt_shutterstock_524421913.jpg'),
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
  img('sp71g4gjrrcnxd24gznzr7ejpldf_Seminyak-Beach-Umbrellas-Tile-Image.jpg'),
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
  img('ni2vsnbwe3rqwxohjdor002i2nha_shutterstock_559730524.jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('28l0mtv3v8g1z78gnzjsxjx0zbhd_shutterstock_1346345108.jpg'),
  img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
  img('y62r8ggt0rho68aopabqyheu469s_shutterstock_620692622.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('bfd9i7vnfl0rfpza6aodswecrybt_shutterstock_524421913.jpg'),
  img('sp71g4gjrrcnxd24gznzr7ejpldf_Seminyak-Beach-Umbrellas-Tile-Image.jpg'),
  img('y62r8ggt0rho68aopabqyheu469s_shutterstock_620692622.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kuta',
    subtitle: 'Kuta to Mount Batur and the temples',
    dayLabel: 'Day 1 to 3',
    images: [
      img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
      img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
      img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
      img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg')
    ],
    dayImages: {
      1: [
        img('85ll3znhmo6ucxcl0w2xq85ehe5i_1470899861_Bali__E2_80_93_Ground_Zero_Monument_(2692318786).jpg'),
        img('g72m3ehync8t6tn7yjyz5dm47mq1_1470898081_17_Years_of_Sekar_Jepun_2014-11-01_64_edit.jpg'),
        img('csin0xxhwed8fwwferdx9ch6ecpt_1464263127_18203176383_8414817a7b_o.jpg'),
        img('6u10mdhy3dcpjb8pctpthpoe4f0a_pandawa-beach-mikebali-001.jpg')
      ],
      2: [
        img('r5e1e6s3axt4h3lqg3jw6jpkbkqo_953d0ed8-fae2-4875-810c-01bf77c0d73b.jpg'),
        img('yx9uedsyf0x9qg3xk4d8v711tcfz_Mount%20Batur%201.jpg'),
        img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
        img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
      ],
      3: [
        img('umi9wd3cgyw3tpm6maoacj6e9rxy_shutterstock_1209289312.jpg'),
        img('p0tyf5xa92nbblmla956dmfsaqrd_shutterstock_1453687076.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('xae4oyhdvs0gd93x9hq87jmwwwu7_taman-ayun-bali-temple.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Kuta`,
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your Kuta hotel near the beach',
      'First evening free on the south coast',
      'Optional: the night market, Kuta theatre or Karma beach',
      `${DAY_MARK}Day 2 · Mount Batur at sunrise`,
      'Very early start for the guided climb up Mount Batur',
      'Sunrise on the crater rim above the lake',
      'Breakfast cooked in the volcanic steam at the top',
      'Back at the hotel by midday for a slow afternoon',
      `${DAY_MARK}Day 3 · Temples and the monkey forest`,
      'Breakfast, then a private day among the temples',
      'Taman Ayun and the Alas Kedaton monkey forest',
      'Padang Padang beach in its limestone cove',
      'Uluwatu temple on the cliffs in the late afternoon'
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
        name: 'Mount Batur sunrise trek',
        day: 2,
        optional: false,
        image: img('r5e1e6s3axt4h3lqg3jw6jpkbkqo_953d0ed8-fae2-4875-810c-01bf77c0d73b.jpg'),
        description: 'A guided climb up the volcano in the dark to reach the rim for sunrise, with breakfast cooked in the steam vents at the top.'
      },
      {
        name: 'Temple tour with the monkey forest',
        day: 3,
        optional: false,
        image: img('umi9wd3cgyw3tpm6maoacj6e9rxy_shutterstock_1209289312.jpg'),
        description: 'A private day taking in Taman Ayun, the Alas Kedaton monkey forest and the cliff temple at Uluwatu, with Padang Padang beach on the way.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights on the south coast to begin, with a sunrise climb up Mount Batur and a temple day that ends on the Uluwatu cliffs.',
      image: img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Seminyak',
    subtitle: 'Seminyak to Tanjung Benoa',
    dayLabel: 'Day 4 to 7',
    images: [
      img('qzqg7qbx8pq33i7so7acy1c8d9c8_shutterstock_1346342258.jpg'),
      img('bfd9i7vnfl0rfpza6aodswecrybt_shutterstock_524421913.jpg'),
      img('y62r8ggt0rho68aopabqyheu469s_shutterstock_620692622.jpg'),
      img('28l0mtv3v8g1z78gnzjsxjx0zbhd_shutterstock_1346345108.jpg')
    ],
    dayImages: {
      4: [
        img('pntcqhuq42iqwedahw0vddb29dat_shutterstock_635175203.jpg'),
        img('j56kcjat6wqhml2qvzduwjbbzgk4_1470836486_5094068950_8a63812968_b.jpg'),
        img('hvkdbfumxhdzl9jp9qo6fzgx06bk_jalan-seminyak-street.jpg'),
        img('2s3yw7dyiwdnxstx2g1iesdqyw9l_1498483780_seminyaksquareexpedia.jpg')
      ],
      5: [
        img('7oejukf3xf12ens04wed9luc0cuw_shutterstock_2242711319%20(1).jpg'),
        img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg'),
        img('hoz1563nqoiy0uepnjdcqadxfjrl_shutterstock_672105433.jpg'),
        img('qzqg7qbx8pq33i7so7acy1c8d9c8_shutterstock_1346342258.jpg')
      ],
      6: [
        img('oetfscwkcwfxn6ku1c706epso99j_Observatory-of-the-Self-3.1-2012-Kinetic-Installation-NIGHT-RESIZE-TEST-e1377502664704.jpg'),
        img('qkn5jjxgya8q0eudobpue4kvygst_nyaman-gallery.jpg'),
        img('cykeyb8buzlkqaw5oxny5nlh79lw_alila-seminyak-panoramic.jpg'),
        img('ivgtg54gt5di1ys5j5fiwkixctsg_132392085.jpg')
      ],
      7: [
        img('qzqg7qbx8pq33i7so7acy1c8d9c8_shutterstock_1346342258.jpg'),
        img('bfd9i7vnfl0rfpza6aodswecrybt_shutterstock_524421913.jpg'),
        img('y62r8ggt0rho68aopabqyheu469s_shutterstock_620692622.jpg'),
        img('28l0mtv3v8g1z78gnzjsxjx0zbhd_shutterstock_1346345108.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Spa day in Seminyak`,
      'Breakfast and check out, then private transfer to Seminyak',
      'Check in and a traditional Balinese massage for two',
      'Afternoon free on Seminyak beach',
      'Optional: dinner along Eat Street or Jalan Laksmana',
      `${DAY_MARK}Day 5 · Water sports and sunset cruise`,
      'Breakfast, then a morning at Tanjung Benoa beach',
      'Banana boat, jet ski and parasailing with an instructor',
      'Sunset dinner cruise out of Benoa harbour',
      'Live music and dinner on board as the light goes',
      `${DAY_MARK}Day 6 · Candlelight dinner for two`,
      'Breakfast and a full day free in Seminyak',
      'Optional: a beach club afternoon or the Nyaman gallery',
      'Candlelight dinner for two in the evening, set up privately',
      'Optional: a late walk along Double Six beach',
      `${DAY_MARK}Day 7 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'THE 1O1 Bali Fontana Seminyak, Seminyak',
      description: '3 nights · Breakfast · Standard room · 3★ · Pool hotel in Seminyak, a short walk from Eat Street',
      images: [
        img('gd7cuvpcyyzkjxymxlipg7vpta0q_501975026.jpg'),
        img('jab2viyck506aa5ai8e1y2jcx1zi_501975156.jpg'),
        img('zj88333y9cv7nouwv11psc7pxzzz_309383740_590510406184481_8386870170937249344_n.jpg'),
        img('nh3s33wcbdwllsitjkb00e9zzz9k_501975149.jpg'),
        img('93ljvvvz3waxfnymgwbe7dvqr9y9_501975193.jpg'),
        img('mszgbx7n7qwycdwl3jx0kcacgm8u_501975230.jpg'),
        img('oentxgcjo8cswbkcuaqtjf4ryfqs_501975775.jpg'),
        img('fu7x1dymbnasajfk1wb9ysrl7ox9_501975145.jpg'),
        img('440fy7f3mh4afu2cfulokhqojvmw_501975779.jpg'),
        img('4dslfaiwy1xluwhi6l46fmreskmw_501975154.jpg'),
        img('z9xrhr0fd2fdvzdpzb7dx4cmxqlq_501975312.jpg'),
        img('veqccbzfplgy6jmlkgloni3nnc1r_501975152.jpg')
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
        name: 'Water sports at Tanjung Benoa',
        day: 5,
        optional: false,
        image: img('7oejukf3xf12ens04wed9luc0cuw_shutterstock_2242711319%20(1).jpg'),
        description: 'A half day combo at Tanjung Benoa with banana boat, jet ski and parasailing, all with life jackets and an instructor in the water.'
      },
      {
        name: 'Sunset dinner cruise',
        day: 5,
        optional: false,
        image: img('hoz1563nqoiy0uepnjdcqadxfjrl_shutterstock_672105433.jpg'),
        description: 'A half day cruise out of Benoa harbour with dinner on board and live music, timed for sunset over the Bukit peninsula.'
      },
      {
        name: 'Seminyak beach and Eat Street',
        day: 6,
        optional: true,
        image: img('cykeyb8buzlkqaw5oxny5nlh79lw_alila-seminyak-panoramic.jpg'),
        description: 'The long grey sand beach with its beach clubs, and the restaurants of Jalan Kayu Aya a few minutes inland for a last dinner out.'
      }
    ],
    program: {
      name: 'Seminyak',
      description: 'Three nights in Seminyak with a couples massage, water sports at Tanjung Benoa, a sunset cruise with dinner and a private candlelight dinner.',
      image: img('qzqg7qbx8pq33i7so7acy1c8d9c8_shutterstock_1346342258.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-bali-honeymoon-with-seminyak',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Bali Honeymoon with Seminyak',
  alt: 'Sunset over the beach at Seminyak, Bali',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided day tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Beach'],
  price: 38000,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kuta', 'Mount Batur', 'Uluwatu', 'Seminyak', 'Tanjung Benoa'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 5, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Kuta first, Seminyak second. The second half is quieter, smarter and exactly where a honeymoon should finish.',
    quoteMore: 'Do the Batur climb on your first full day while you are still on Indian time, it makes the two in the morning start far easier. Keep Seminyak for late dinners and nothing more demanding.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days for two across the south coast: three nights in Kuta with a sunrise climb up Mount Batur and a temple day at Uluwatu, then three in Seminyak with a couples massage, water sports, a sunset cruise and a candlelight dinner.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with daily breakfast; private airport and inter city transfers; Mount Batur sunrise trek; temple tour with the monkey forest and Uluwatu; Balinese massage for two; water sports at Tanjung Benoa; sunset dinner cruise; candlelight dinner.',
  intro2: 'Not included: international flights; Indonesia visa fees; lunches and other dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Kuta (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your Kuta hotel near the beach\nFirst evening free on the south coast\nOptional: the night market, Kuta theatre or Karma beach', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your Kuta hotel near the beach', 'First evening free on the south coast'] },
    { title: 'Day 2: Mount Batur at sunrise (B)', text: 'Very early start for the guided climb up Mount Batur\nSunrise on the crater rim above the lake\nBreakfast cooked in the volcanic steam at the top\nBack at the hotel by midday for a slow afternoon', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Very early start for the guided climb up Mount Batur', 'Sunrise on the crater rim above the lake', 'Breakfast cooked in the volcanic steam at the top'] },
    { title: 'Day 3: Temples and the monkey forest (B)', text: 'Breakfast, then a private day among the temples\nTaman Ayun and the Alas Kedaton monkey forest\nPadang Padang beach in its limestone cove\nUluwatu temple on the cliffs in the late afternoon', hotel: 'Bliss Surfer Hotel, Kuta', highlights: ['Breakfast, then a private day among the temples', 'Taman Ayun and the Alas Kedaton monkey forest', 'Padang Padang beach in its limestone cove'] },
    { title: 'Day 4: Spa day in Seminyak (B)', text: 'Breakfast and check out, then private transfer to Seminyak\nCheck in and a traditional Balinese massage for two\nAfternoon free on Seminyak beach\nOptional: dinner along Eat Street or Jalan Laksmana', hotel: 'THE 1O1 Bali Fontana Seminyak', highlights: ['Breakfast and check out, then private transfer to Seminyak', 'Check in and a traditional Balinese massage for two', 'Afternoon free on Seminyak beach'] },
    { title: 'Day 5: Water sports and sunset cruise (B, D)', text: 'Breakfast, then a morning at Tanjung Benoa beach\nBanana boat, jet ski and parasailing with an instructor\nSunset dinner cruise out of Benoa harbour\nLive music and dinner on board as the light goes', hotel: 'THE 1O1 Bali Fontana Seminyak', highlights: ['Breakfast, then a morning at Tanjung Benoa beach', 'Banana boat, jet ski and parasailing with an instructor', 'Sunset dinner cruise out of Benoa harbour'] },
    { title: 'Day 6: Candlelight dinner for two (B, D)', text: 'Breakfast and a full day free in Seminyak\nOptional: a beach club afternoon or the Nyaman gallery\nCandlelight dinner for two in the evening, set up privately\nOptional: a late walk along Double Six beach', hotel: 'THE 1O1 Bali Fontana Seminyak', highlights: ['Breakfast and a full day free in Seminyak', 'Optional: a beach club afternoon or the Nyaman gallery', 'Candlelight dinner for two in the evening, set up privately'] },
    { title: 'Day 7: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; lunches and other dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bali', href: '/asia/bali' },
  { label: detail.title }
];

export const baliHoneymoonSeminyakBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const baliHoneymoonSeminyakProduct = {
  slug: detail.slug,
  places: ['Kuta', 'Mount Batur', 'Uluwatu', 'Seminyak', 'Tanjung Benoa'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 5,
  transfers: 9,
  meals: 8,
  price: detail.price,
  images: cardImages
};
