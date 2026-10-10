// Luxury Bali Escape with Mount Batur. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
  img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
  img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
  img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
  img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
  img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
  img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
  img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
  img('xwfs2claxjogsfoq88zi2778vkgg_1470897615_Vihara_Dharmayana_Kuta_3.jpg'),
  img('mpin67ioevxt7sgz5wklo6uvwt4m_dsc_3785.jpg'),
  img('og1gb1n28wstzow4pz3wysli5q3j_1464163781_Mal-Bali-Galeria.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kuta',
    subtitle: 'Kuta to Uluwatu',
    dayLabel: 'Day 1 to 2',
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
        img('55zrzs76oi5ijmcfe6pam0ngqzkk_shutterstock_1453687076.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Kuta`,
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your beachfront resort in Kuta',
      'Rest of the day free by the pool or on the sand',
      'Optional: Kuta Square, the night market or a sunset surf',
      `${DAY_MARK}Day 2 · Padang Padang and Uluwatu`,
      'Breakfast, then a private half day to the southern cliffs',
      'Padang Padang beach in its narrow limestone cove',
      'Uluwatu temple above the surf as the sun drops',
      'Optional: the Kecak fire dance in the temple amphitheatre'
    ],
    accommodation: {
      name: 'Bintang Bali Resort, Kuta',
      description: '2 nights · Breakfast · Standard room · 5★ · Beachfront resort on Tuban beach with three pools',
      images: [
        img('jtolkwll3an1727uu1z02hgyy0wk_157354462.jpg'),
        img('8qtzmoxdd3mkzlkxrycqqb0yax19_364716590.jpg'),
        img('n3fqv7jv0z4vn02eae783phna5kd_364716507.jpg'),
        img('horoz6tj7jqvlmh3l20wl9tq6l2u_35258985.jpg'),
        img('wki9ovxxilqvfv8f14h2pnlgytt9_364716532.jpg'),
        img('0xkxo0tdtzfp2ijes85lyvoyi6zk_33280597.jpg'),
        img('0mf8om9yosn4az3mn0wb6iaiwcli_364716691.jpg'),
        img('mm7ysa99ptl1a2ndlvfawkhqqq1m_364716393.jpg'),
        img('e71ekcitvaqj62s8erlw6k8b6z5j_33890403.jpg'),
        img('h2qlnv52tcscu7s82f293evfaq2n_364716644.jpg'),
        img('znzx1lsil91wqebxsv830vj1hzli_33890419.jpg'),
        img('xt84x0i2606mpjlyjnpshhowglfq_453451379.jpg'),
        img('16t4px9cdictvfhaqt40sgi32qd0_56809733.jpg'),
        img('qwqlzay86w6g6ibk3clsutewee3m_364716421.jpg'),
        img('a0wt0f9hk4s3pemvuj6v7xf78g2g_56809873.jpg')
      ]
    },
    activities: [
      {
        name: 'Uluwatu sunset with Padang Padang',
        day: 2,
        optional: false,
        image: img('55zrzs76oi5ijmcfe6pam0ngqzkk_shutterstock_1453687076.jpg'),
        description: 'A private half day along the southern cliffs: the cove at Padang Padang beach, then Uluwatu temple perched above the surf as the sun goes down.'
      },
      {
        name: 'Kuta beach and Kuta Square',
        day: 1,
        optional: true,
        image: img('deriva74h0yzbv3z7xmdudk0w70b_1464167116_kuta-square.jpg'),
        description: 'The long surf beach on your doorstep, with boards for hire, and the shops, bakeries and cafes of Kuta Square a few streets inland.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Two nights beachfront in the south to begin, with an afternoon along the cliffs at Padang Padang and Uluwatu temple for sunset.',
      image: img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Ubud',
    subtitle: 'Ubud to Mount Batur and Mount Agung',
    dayLabel: 'Day 3 to 7',
    images: [
      img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
      img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
      img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
      img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg')
    ],
    dayImages: {
      3: [
        img('q77aw23cnynqx76tj5h7hs0ehogc_Tirta%20Empul-2.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('2kpx79s3vxrjrh07k2kaajmjalmw_shutterstock_2313711741.jpg')
      ],
      4: [
        img('r5e1e6s3axt4h3lqg3jw6jpkbkqo_953d0ed8-fae2-4875-810c-01bf77c0d73b.jpg'),
        img('yx9uedsyf0x9qg3xk4d8v711tcfz_Mount%20Batur%201.jpg'),
        img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
        img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg')
      ],
      5: [
        img('0ff1u7afp5eoxul8mssvond3l454_shutterstock_277919342.jpg'),
        img('zx56qpfm1g0wvf1wmqkux6r8zgy9_1627479439_shutterstock_721010434.jpg'),
        img('2kqqcornjaa2tqsbasrl2qz1ud01_1498731878_besakih.jpg'),
        img('302b9mmn0sg6vh9vjvqanfccne5d_1580799476_35278627344_965ff71209_k.jpg')
      ],
      6: [
        img('bulqztounlsn8982w1dldr9qe1ki_shutterstock_130109834.jpg'),
        img('qc1yophslknxmsjuxv7tdovh1r3t_Monkey%20Forest,%20Ubud.jpg'),
        img('vyu0y3fqr4w6aj8mv2pg7pbc92ah_1498565182_d852a63e0c9dce4af4cbe8bd706394d2.jpg'),
        img('ktx4cnkx2n6hyba7l8hiksl71pd6_1470729311_12985404_1704992503123002_1339505952199382069_n.jpg')
      ],
      7: [
        img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
        img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
        img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
        img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Central Bali and on to Ubud`,
      'Breakfast and check out, then private transfer up to Ubud',
      'Tegalalang rice terraces and Tegenungan waterfall',
      'The holy spring temple at Tirta Empul',
      'Check in at your villa resort in the Ubud valley',
      `${DAY_MARK}Day 4 · Mount Batur at sunrise`,
      'Very early start for the guided climb up Mount Batur',
      'Reach the crater rim in time for sunrise over the lake',
      'Breakfast cooked in the volcanic steam at the top',
      'Back at the villa by late morning for a slow afternoon',
      `${DAY_MARK}Day 5 · Mount Agung and Besakih`,
      'Breakfast, then a private day on the slopes of Mount Agung',
      'Besakih, the mother temple of Bali, on the mountainside',
      'The water gardens and split gate at Lempuyang',
      'Optional: the old village lanes of Penglipuran',
      `${DAY_MARK}Day 6 · Spa day in Ubud`,
      'Breakfast and a free morning at the villa',
      'A traditional Balinese massage at an Ubud spa',
      'Optional: the Monkey Forest or the Saraswati water temple',
      'Optional: dinner above the valley at a hillside restaurant',
      `${DAY_MARK}Day 7 · Departure from Bali`,
      'Breakfast at the villa and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'The Payogan Villa Resort & Spa, Ubud',
      description: '4 nights · Breakfast · Standard room · 4★ · Villa resort in the valley north of Ubud town',
      images: [
        img('ao36h2mjg5fdwdemidrwz9u4bzqq_123058612.jpg'),
        img('g1pc2lb7fn0tsdu4j5z9ygperauc_190648311.jpg'),
        img('ok9tf9cc2xpymtkvycghptj3ayib_233132727.jpg'),
        img('pu2uya9vpbz4r6v86dmv8tdm8nc6_35760862.jpg'),
        img('dat84theujgki30x3co676u2w2ri_75708074.jpg'),
        img('9tqwq0459akv8dx7vqevhm61a9bz_75707945.jpg'),
        img('uxpy3jtu0yeybwhlwy8njjs6qqqf_213052504.jpg'),
        img('35zgaamc35b3narl984robnm1ldr_64589794.jpg'),
        img('76slkk08aedrzdunj8eb2g48gyen_65928787.jpg'),
        img('rh6xz5djfoou3ts48jny3bkcf04t_195552279.jpg'),
        img('sews05zoawt9xl1q40xjuaf0644h_126298389.jpg'),
        img('tk98ij9je2hfjcmxn50vg1q7c17f_190648294.jpg'),
        img('z6x5smj9jse4ck78nd29g4f2evny_401092868.jpg'),
        img('5e5ikblf5gvlxpjpd7pd07jje60o_190648325.jpg'),
        img('dnp0kztwzkykx4yopypqfziz8i1p_190648304.jpg'),
        img('lw95d9vqgs59wmp05hx0093n01ru_177844712.jpg')
      ]
    },
    activities: [
      {
        name: 'Central Bali with Tirta Empul',
        day: 3,
        optional: false,
        image: img('q77aw23cnynqx76tj5h7hs0ehogc_Tirta%20Empul-2.jpg'),
        description: 'A private tour through central Bali: the Tegalalang rice terraces, Tegenungan waterfall and the holy spring temple at Tirta Empul.'
      },
      {
        name: 'Mount Batur sunrise trek',
        day: 4,
        optional: false,
        image: img('r5e1e6s3axt4h3lqg3jw6jpkbkqo_953d0ed8-fae2-4875-810c-01bf77c0d73b.jpg'),
        description: 'A guided climb up the volcano in the dark to reach the rim for sunrise, with breakfast cooked in the steam vents at the top.'
      },
      {
        name: 'Mount Agung and Besakih temple',
        day: 5,
        optional: false,
        image: img('0ff1u7afp5eoxul8mssvond3l454_shutterstock_277919342.jpg'),
        description: 'A private day on the slopes of Bali\'s highest volcano, taking in Besakih, the mother temple, and the water gardens at Lempuyang.'
      },
      {
        name: 'Balinese massage in Ubud',
        day: 6,
        optional: false,
        image: img('bulqztounlsn8982w1dldr9qe1ki_shutterstock_130109834.jpg'),
        description: 'A traditional Balinese massage with warm oil and long pressure strokes, booked privately at a spa in Ubud on your free day.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Four nights in a valley villa with two volcano days, the holy spring temple at Tirta Empul and a spa afternoon to finish.',
      image: img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg')
    }
  }
];

const detail = {
  slug: 'luxury-bali-escape-with-mount-batur',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Luxury Bali Escape with Mount Batur',
  alt: 'Sunrise over the crater rim of Mount Batur, Bali',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Private transfers and private guided tours',
  tag: 'Luxury',
  tags: ['Luxury', 'Adventure'],
  price: 39188,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kuta', 'Uluwatu', 'Ubud', 'Mount Batur', 'Mount Agung'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 5, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Do the beach first and the volcanoes after. Ubud at the end means you fly home rested rather than sunburnt.',
    quoteMore: 'The Batur climb starts around two in the morning, so pack a light jacket, a head torch and trainers with grip. Keep the following afternoon completely free and let the villa spa do the rest.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days split between a beachfront resort in Kuta and a villa in the Ubud valley, with Uluwatu at sunset, the holy spring temple at Tirta Empul, a sunrise trek up Mount Batur and a private day on Mount Agung.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with daily breakfast; private airport and inter city transfers; Uluwatu and Padang Padang tour; central Bali tour with Tirta Empul; Mount Batur sunrise trek; Mount Agung and Besakih day; a Balinese massage in Ubud.',
  intro2: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Kuta (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your beachfront resort in Kuta\nRest of the day free by the pool or on the sand\nOptional: Kuta Square, the night market or a sunset surf', hotel: 'Bintang Bali Resort, Kuta', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your beachfront resort in Kuta', 'Rest of the day free by the pool or on the sand'] },
    { title: 'Day 2: Padang Padang and Uluwatu (B)', text: 'Breakfast, then a private half day to the southern cliffs\nPadang Padang beach in its narrow limestone cove\nUluwatu temple above the surf as the sun drops\nOptional: the Kecak fire dance in the temple amphitheatre', hotel: 'Bintang Bali Resort, Kuta', highlights: ['Breakfast, then a private half day to the southern cliffs', 'Padang Padang beach in its narrow limestone cove', 'Uluwatu temple above the surf as the sun drops'] },
    { title: 'Day 3: Central Bali and on to Ubud (B)', text: 'Breakfast and check out, then private transfer up to Ubud\nTegalalang rice terraces and Tegenungan waterfall\nThe holy spring temple at Tirta Empul\nCheck in at your villa resort in the Ubud valley', hotel: 'The Payogan Villa Resort & Spa, Ubud', highlights: ['Breakfast and check out, then private transfer up to Ubud', 'Tegalalang rice terraces and Tegenungan waterfall', 'The holy spring temple at Tirta Empul'] },
    { title: 'Day 4: Mount Batur at sunrise (B)', text: 'Very early start for the guided climb up Mount Batur\nReach the crater rim in time for sunrise over the lake\nBreakfast cooked in the volcanic steam at the top\nBack at the villa by late morning for a slow afternoon', hotel: 'The Payogan Villa Resort & Spa, Ubud', highlights: ['Very early start for the guided climb up Mount Batur', 'Reach the crater rim in time for sunrise over the lake', 'Breakfast cooked in the volcanic steam at the top'] },
    { title: 'Day 5: Mount Agung and Besakih (B)', text: 'Breakfast, then a private day on the slopes of Mount Agung\nBesakih, the mother temple of Bali, on the mountainside\nThe water gardens and split gate at Lempuyang\nOptional: the old village lanes of Penglipuran', hotel: 'The Payogan Villa Resort & Spa, Ubud', highlights: ['Breakfast, then a private day on the slopes of Mount Agung', 'Besakih, the mother temple of Bali, on the mountainside', 'The water gardens and split gate at Lempuyang'] },
    { title: 'Day 6: Spa day in Ubud (B)', text: 'Breakfast and a free morning at the villa\nA traditional Balinese massage at an Ubud spa\nOptional: the Monkey Forest or the Saraswati water temple\nOptional: dinner above the valley at a hillside restaurant', hotel: 'The Payogan Villa Resort & Spa, Ubud', highlights: ['Breakfast and a free morning at the villa', 'A traditional Balinese massage at an Ubud spa', 'Optional: the Monkey Forest or the Saraswati water temple'] },
    { title: 'Day 7: Departure from Bali (B)', text: 'Breakfast at the villa and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the villa and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Indonesia', href: '/asia/indonesia' },
  { label: detail.title }
];

export const luxuryBaliEscapeMountBaturBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const luxuryBaliEscapeMountBaturProduct = {
  slug: detail.slug,
  places: ['Kuta', 'Uluwatu', 'Ubud', 'Mount Batur', 'Mount Agung'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 5,
  transfers: 8,
  meals: 6,
  price: detail.price,
  images: cardImages
};
