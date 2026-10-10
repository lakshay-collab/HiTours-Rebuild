// Classic Bali Break with Rafting. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
  img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
  img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
  img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
  img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
  img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
  img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
  img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Ubud',
    subtitle: 'Ubud to Kintamani and Uluwatu',
    dayLabel: 'Day 1 to 5',
    images: [
      img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
      img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
      img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
      img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('4qzfjlhp9rb7opyc8dzvjjpgi0cy_1470896048_9396103363_d354fd2bc4_b.jpg'),
        img('kmleb6ur2b7j83f6gt2jg3z1kaw0_1470727921_Goa_Gajah_Front.JPG'),
        img('blc7rv8lvishrrzjuxwmcwyxm2ev_1464182679_Bali-Bird-Park-42414.jpg'),
        img('8pw6xmdbulw0nv2o1mn4hytq1m9j_1470728820_Antonio_Blanco_le_mus_C3_A9e.JPG')
      ],
      2: [
        img('wzc294pdhssd5mnlos094w06oqw1_view-kintamani-tours_20160326064036.jpg'),
        img('yr3fpbu13cn8stfjp0zts9b4f588_1470742724_ubud-royal-palace.jpg'),
        img('p1tzfipjpmq6677grx16krlrwx9v_shutterstock_243349891.jpg'),
        img('0jvjotjk6d8ehikcc9djtaatmx6o_ezgif-2-b317c67e3b.jpg')
      ],
      3: [
        img('wks4cbgv6wmu4rczwoeiz1tz4vhb_shutterstock_2214240181.jpg'),
        img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
        img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
        img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg')
      ],
      4: [
        img('55zrzs76oi5ijmcfe6pam0ngqzkk_shutterstock_1453687076.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
        img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg')
      ],
      5: [
        img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
        img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
        img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
        img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Ubud`,
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your Ubud resort and settle in',
      'Rest of the day free in the town lanes',
      'Optional: the Monkey Forest or the Ubud art market',
      `${DAY_MARK}Day 2 · Kintamani and coffee country`,
      'Breakfast, then a private day out with your own guide',
      'Coffee plantation tasting on the climb to Kintamani',
      'The crater lake view across Mount Batur',
      'The royal palace and market lanes back in Ubud',
      `${DAY_MARK}Day 3 · Quad bikes and rafting`,
      'Breakfast, then a quad bike route through the fields',
      'Lunch is included between the two activities',
      'Twelve kilometres of rafting on the Ayung river',
      'Jungle gorges and carved rock faces along the way',
      `${DAY_MARK}Day 4 · Padang Padang and Uluwatu`,
      'Breakfast, then a half day to the southern cliffs',
      'Padang Padang beach in its limestone cove',
      'Uluwatu temple above the surf at sunset',
      'Kecak fire dance in the temple amphitheatre afterwards',
      `${DAY_MARK}Day 5 · Departure from Bali`,
      'Breakfast at the resort and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'Bakung Ubud Resort & Villa, Ubud',
      description: '4 nights · Breakfast · Standard room · 3★ · Garden resort a short walk from the Ubud market',
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
        name: 'Kintamani with the coffee plantation',
        day: 2,
        optional: false,
        image: img('wzc294pdhssd5mnlos094w06oqw1_view-kintamani-tours_20160326064036.jpg'),
        description: 'A private day with a coffee plantation tasting, the crater lake view at Kintamani and the royal palace and market lanes of Ubud.'
      },
      {
        name: 'Quad bikes and Ayung river rafting',
        day: 3,
        optional: false,
        image: img('wks4cbgv6wmu4rczwoeiz1tz4vhb_shutterstock_2214240181.jpg'),
        description: 'A quad bike route in the morning and twelve kilometres of grade two rapids on the Ayung river in the afternoon, with lunch included.'
      },
      {
        name: 'Padang Padang, Uluwatu and the Kecak dance',
        day: 4,
        optional: false,
        image: img('55zrzs76oi5ijmcfe6pam0ngqzkk_shutterstock_1453687076.jpg'),
        description: 'The cove at Padang Padang beach, the cliff top temple at Uluwatu for sunset, then the Kecak fire dance in the amphitheatre.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Four nights in one garden resort near the Ubud market, with a coffee plantation day, quad bikes and rafting, and a south coast sunset.',
      image: img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg')
    }
  }
];

const detail = {
  slug: 'classic-bali-break-with-rafting',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Classic Bali Break with Rafting',
  alt: 'Rafts on the Ayung river below Ubud, Bali',
  days: '5 days / 4 nights',
  stations: '1 stops',
  transport: 'Private transfers and private guided tours',
  tag: 'Adventure',
  tags: ['Adventure', 'Short trips'],
  price: 36765,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ubud', 'Kintamani', 'Ayung River', 'Padang Padang', 'Uluwatu'],
  stats: { days: 5, cities: 1, hotels: 1, activities: 3, transfers: 5 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['5 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'One hotel, four nights, and a day on the river. The short Bali trip for people who do not want to pack twice.',
    quoteMore: 'Rafting and quad bikes fall on the same day on purpose, they are ten minutes apart. Carry a dry bag and a change of clothes, and keep the Uluwatu evening for the day after.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five days from a single base near the Ubud market, with a private coffee plantation day up to Kintamani, a morning of quad bikes and an afternoon of rafting on the Ayung river, and sunset at Uluwatu with the Kecak dance.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights with daily breakfast; private airport transfers; private Kintamani tour with the coffee plantation and Ubud palace; quad bike ride and Ayung river rafting with lunch; Padang Padang and Uluwatu sunset tour with the Kecak dance.',
  intro2: 'Not included: international flights; Indonesia visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Ubud (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your Ubud resort and settle in\nRest of the day free in the town lanes\nOptional: the Monkey Forest or the Ubud art market', hotel: 'Bakung Ubud Resort & Villa', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your Ubud resort and settle in', 'Rest of the day free in the town lanes'] },
    { title: 'Day 2: Kintamani and coffee country (B)', text: 'Breakfast, then a private day out with your own guide\nCoffee plantation tasting on the climb to Kintamani\nThe crater lake view across Mount Batur\nThe royal palace and market lanes back in Ubud', hotel: 'Bakung Ubud Resort & Villa', highlights: ['Breakfast, then a private day out with your own guide', 'Coffee plantation tasting on the climb to Kintamani', 'The crater lake view across Mount Batur'] },
    { title: 'Day 3: Quad bikes and rafting (B, L)', text: 'Breakfast, then a quad bike route through the fields\nLunch is included between the two activities\nTwelve kilometres of rafting on the Ayung river\nJungle gorges and carved rock faces along the way', hotel: 'Bakung Ubud Resort & Villa', highlights: ['Breakfast, then a quad bike route through the fields', 'Lunch is included between the two activities', 'Twelve kilometres of rafting on the Ayung river'] },
    { title: 'Day 4: Padang Padang and Uluwatu (B)', text: 'Breakfast, then a half day to the southern cliffs\nPadang Padang beach in its limestone cove\nUluwatu temple above the surf at sunset\nKecak fire dance in the temple amphitheatre afterwards', hotel: 'Bakung Ubud Resort & Villa', highlights: ['Breakfast, then a half day to the southern cliffs', 'Padang Padang beach in its limestone cove', 'Uluwatu temple above the surf at sunset'] },
    { title: 'Day 5: Departure from Bali (B)', text: 'Breakfast at the resort and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the resort and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bali', href: '/asia/bali' },
  { label: detail.title }
];

export const classicBaliBreakRaftingBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const classicBaliBreakRaftingProduct = {
  slug: detail.slug,
  places: ['Ubud', 'Kintamani', 'Ayung River', 'Padang Padang', 'Uluwatu'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 3,
  transfers: 5,
  meals: 5,
  price: detail.price,
  images: cardImages
};
