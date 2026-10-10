// Glimpse of Shanghai. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('m1hxti52l3lyw5w8wjx3cel3bzdh_shutterstock_1591019908.jpg'),
  img('o6vlw6xbd7uwlkqbi0rhzyc2djap_shutterstock_156237860.jpg'),
  img('airr5bm779k6fxj7e6p975s928zw_shutterstock_2392812787.jpg'),
  img('siwqcr3qj236x0r46g73d05m3stf_shutterstock_2458850765-min.jpg'),
  img('umyo226m9ttwcb214y2midgqmntg_Downpic.cc-55990140.jpg'),
  img('jm3vvjfv4vhm2g3tnazc5i7mn74w_Downpic.cc-image239536884.jpg'),
  img('h4ztzh96ymup5j5gp8ii4lckwcjg_Downpic.cc-image214394374.jpg'),
  img('hbiznl9dn0ljreo4r93opznkyfum_Downpic.cc-48151571.jpg'),
  img('4or1588bvqw4so17b75s4ukxxjt3_Downpic.cc-87319053.jpg'),
  img('86zde6fi4irba93s9q1h056e2vdb_Downpic.cc-168023554.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('m1hxti52l3lyw5w8wjx3cel3bzdh_shutterstock_1591019908.jpg'),
  img('o6vlw6xbd7uwlkqbi0rhzyc2djap_shutterstock_156237860.jpg'),
  img('airr5bm779k6fxj7e6p975s928zw_shutterstock_2392812787.jpg'),
  img('siwqcr3qj236x0r46g73d05m3stf_shutterstock_2458850765-min.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Shanghai',
    dayLabel: 'Day 1 to 3',
    images: [
      img('m1hxti52l3lyw5w8wjx3cel3bzdh_shutterstock_1591019908.jpg'),
      img('ymxa4dw5vj996pce1mo9yjig6yao_shutterstock_1460092493.jpg'),
      img('o6vlw6xbd7uwlkqbi0rhzyc2djap_shutterstock_156237860.jpg'),
      img('4dowlbxy1pl7cm3cscutgc6h8ema_shutterstock_2017480202-min.jpg')
    ],
    dayImages: {
      1: [
        img('2k4c4p2jzw25zkin4pr08mrop92w_1619596902_shutterstock_1462710089.jpg'),
        img('s8t3rwhg2yl68b7506zqum0o0x4d_1619599915_shutterstock_1149341150.jpg'),
        img('ijv4hicv8xdbd7kbr6u8y4ir0wp2_1619599753_shutterstock_1048697678.jpg'),
        img('m1hxti52l3lyw5w8wjx3cel3bzdh_shutterstock_1591019908.jpg')
      ],
      2: [
        img('yuqu648rid8hf8g09ip9lswxh2av_Downpic.cc-image263983358.jpg'),
        img('3v46yytijdj44xwmcu10tpsd0agd_1619599983_shutterstock_199457384.jpg'),
        img('ac1pvfyncr6b3o6g64b7etpkzlyi_1619608001_shutterstock_1252745494.jpg'),
        img('imtxhf697qz3p06aemge77j1haun_1619600357_shutterstock_1148631992.jpg')
      ],
      3: [
        img('m1hxti52l3lyw5w8wjx3cel3bzdh_shutterstock_1591019908.jpg'),
        img('ymxa4dw5vj996pce1mo9yjig6yao_shutterstock_1460092493.jpg'),
        img('o6vlw6xbd7uwlkqbi0rhzyc2djap_shutterstock_156237860.jpg'),
        img('4dowlbxy1pl7cm3cscutgc6h8ema_shutterstock_2017480202-min.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Shanghai`,
      'Arrival at Pudong or Hongqiao and transfer to your hotel',
      'Check in and the rest of the day free',
      'Optional: an evening walk on the Bund',
      'Optional: dinner in the Xintiandi lanes',
      `${DAY_MARK}Day 2 · Shanghai city tour and river cruise`,
      'Breakfast, then a guided half day of the city',
      'The Bund, the old town lanes and the Yu garden',
      'Up the Oriental Pearl Tower in the afternoon',
      'A cruise on the Huangpu as the towers light up',
      `${DAY_MARK}Day 3 · Departure from Shanghai`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Holiday Inn Express Shanghai Gongkang, Shanghai',
      description: '2 nights · Breakfast · Standard room · 3★ · Simple hotel in Jing\'an, two metro stops from the centre',
      images: [
        img('t2237dgb54uv7s4rx4d6ia1773m3_254540841.png'),
        img('w9ivrioc0218ptdjg2ux6k3l7k6w_252126148.png'),
        img('7j685fea2v362rrz8zpp6b7dqhyo_252477212.png'),
        img('ui2qybbjs89a4z5krgj3vsb0nf0f_192744987.png'),
        img('ilgwg755ts2z2yj8x9ugsqlq786y_295410234.png'),
        img('s0o6ump4njlgmgmvpcf6pht58wwi_252477204.png'),
        img('941vca46ob7vgexpzb8c3wy0qman_252127522.png'),
        img('8dj51afdp4eqkjs14tvc7enjb6hx_295410221.png'),
        img('jjg4sx0q5lmchhjoebkp8qfwu49z_289966229.png'),
        img('e2yjnulvma27jqq7wura2k5f99xw_289966159.png')
      ]
    },
    activities: [
      {
        name: 'Shanghai half day sightseeing tour',
        day: 2,
        optional: false,
        image: img('yuqu648rid8hf8g09ip9lswxh2av_Downpic.cc-image263983358.jpg'),
        description: 'The Bund waterfront, the lanes of the old town and the Yu garden with its teahouse, with a guide for the morning.'
      },
      {
        name: 'Oriental Pearl Tower',
        day: 2,
        optional: false,
        image: img('p9etuo253h5gw8ttnc3rdw5pds6i_dl.beatsnoop.com-3000-msl1j40qR3.jpg'),
        description: 'The lifts up the Oriental Pearl Tower to the observation spheres, with the glass floor looking straight down on Pudong.'
      },
      {
        name: 'Huangpu river cruise',
        day: 2,
        optional: false,
        image: img('kyqi22drkx8f1w8fyrfliyqlswnk_Downpic.cc-92560468.jpg'),
        description: 'A cruise along the Huangpu between the colonial facades of the Bund and the lit towers of Pudong.'
      }
    ],
    program: {
      name: 'Shanghai',
      description: 'Two nights in the city with a guided half day, the Pearl Tower and a river cruise after dark.',
      image: img('m1hxti52l3lyw5w8wjx3cel3bzdh_shutterstock_1591019908.jpg')
    }
  }
];

const detail = {
  slug: 'glimpse-of-shanghai',
  ctaHref: '/l/china/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Glimpse of Shanghai',
  alt: 'Pudong skyline across the Huangpu river from the Bund',
  days: '3 days / 2 nights',
  stations: '1 stops',
  transport: 'Private airport transfers and a guided half day',
  tag: 'Short break',
  tags: ['Short break', 'Culture'],
  price: 23750,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Shanghai'],
  stats: { days: 3, cities: 1, hotels: 1, activities: 3, transfers: 4 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['4 transfers', 'Transport'],
    ['2 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Mei',
    image: '/experts/riya.webp',
    role: 'China expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two nights is enough for Shanghai if you spend one evening on the water. The skyline is the whole point of the city.',
    quoteMore: 'Take the river cruise after dark rather than at dusk. The towers only switch everything on once the light has gone.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A short city break: two nights in Shanghai with a guided half day through the Bund, the old town and the Yu garden, the Oriental Pearl Tower, and a Huangpu river cruise under the lit skyline.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 2 nights with daily breakfast; private airport transfers; a half day guided tour of Shanghai; Oriental Pearl Tower tickets; a Huangpu river cruise.',
  intro2: 'Not included: international flights; China visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Shanghai (Arrival)', text: 'Arrival at Pudong or Hongqiao and transfer to your hotel\nCheck in and the rest of the day free\nOptional: an evening walk on the Bund\nOptional: dinner in the Xintiandi lanes', hotel: 'Holiday Inn Express Shanghai Gongkang', highlights: ['Arrival at Pudong or Hongqiao and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: an evening walk on the Bund'] },
    { title: 'Day 2: Shanghai city tour and river cruise (B)', text: 'Breakfast, then a guided half day of the city\nThe Bund, the old town lanes and the Yu garden\nUp the Oriental Pearl Tower in the afternoon\nA cruise on the Huangpu as the towers light up', hotel: 'Holiday Inn Express Shanghai Gongkang', highlights: ['Breakfast, then a guided half day of the city', 'The Bund, the old town lanes and the Yu garden', 'Up the Oriental Pearl Tower in the afternoon'] },
    { title: 'Day 3: Departure from Shanghai (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; China visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'China', href: '/asien/china' },
  { label: detail.title }
];

export const glimpseOfShanghaiBreakBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const glimpseOfShanghaiBreakProduct = {
  slug: detail.slug,
  places: ['Shanghai'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 3,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 3,
  transfers: 4,
  meals: 2,
  price: detail.price,
  images: cardImages
};
