// Classic Shanghai with the Great Wall. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('pw7gjvgfrjk5j22utq6pymz51jao_9w3qmz9sebev4puib4t66k7gglhy_shutterstock_2017480202-min.webp'),
  img('a8qan7r2ossz88815zxai3b00n75_Downpic.cc-25519323.jpg'),
  img('8grj4n22aikgc4r19x56pasryndm_7e6gjm22k301xpnm9r5mg68fzpfw_shutterstock_2085179434.webp'),
  img('6uomrqckb5lnf5edd2hwphbaaeb9_shutterstock_38473243.jpg'),
  img('egnfqv83jw89o3wy72iqo9z5ws1w_shutterstock_1219931926.jpg'),
  img('6cfxhhzrfbdykn7r7n8an0n7uw2v_shutterstock_1294919260.jpg'),
  img('00ngi32r9iovk0p57essxez53xiu_shutterstock_2381627201.jpg'),
  img('4gb1k266gspgbdx5793pgkfidtbd_shutterstock_1478439887.jpg'),
  img('jjc6tewhbsjo375skvv5ow8hucd1_Downpic.cc-image387264121.jpg'),
  img('ro9oby50thlztabmp850uxrjndp0_shutterstock_2085179434.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('pw7gjvgfrjk5j22utq6pymz51jao_9w3qmz9sebev4puib4t66k7gglhy_shutterstock_2017480202-min.webp'),
  img('a8qan7r2ossz88815zxai3b00n75_Downpic.cc-25519323.jpg'),
  img('8grj4n22aikgc4r19x56pasryndm_7e6gjm22k301xpnm9r5mg68fzpfw_shutterstock_2085179434.webp'),
  img('6uomrqckb5lnf5edd2hwphbaaeb9_shutterstock_38473243.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Shanghai',
    dayLabel: 'Day 1 to 5',
    images: [
      img('pw7gjvgfrjk5j22utq6pymz51jao_9w3qmz9sebev4puib4t66k7gglhy_shutterstock_2017480202-min.webp'),
      img('gzxi1ubs8tvhasuyoljjktb6p76d_shutterstock_2444156141.jpg'),
      img('a8qan7r2ossz88815zxai3b00n75_Downpic.cc-25519323.jpg'),
      img('y90ebc5rgo15g6kfgvuix1ulc0zs_uso5ypmayd80738cc3gi11nyveat_shutterstock_1294919260.webp')
    ],
    dayImages: {
      1: [
        img('2k4c4p2jzw25zkin4pr08mrop92w_1619596902_shutterstock_1462710089.jpg'),
        img('s8t3rwhg2yl68b7506zqum0o0x4d_1619599915_shutterstock_1149341150.jpg'),
        img('ijv4hicv8xdbd7kbr6u8y4ir0wp2_1619599753_shutterstock_1048697678.jpg'),
        img('pw7gjvgfrjk5j22utq6pymz51jao_9w3qmz9sebev4puib4t66k7gglhy_shutterstock_2017480202-min.webp')
      ],
      2: [
        img('6uomrqckb5lnf5edd2hwphbaaeb9_shutterstock_38473243.jpg'),
        img('zk1jx6gfbtw9mue4g1kylrf7ib2i_1619609580_shutterstock_82092487.jpg'),
        img('pw7gjvgfrjk5j22utq6pymz51jao_9w3qmz9sebev4puib4t66k7gglhy_shutterstock_2017480202-min.webp'),
        img('gzxi1ubs8tvhasuyoljjktb6p76d_shutterstock_2444156141.jpg')
      ],
      3: [
        img('4gb1k266gspgbdx5793pgkfidtbd_shutterstock_1478439887.jpg'),
        img('pw7gjvgfrjk5j22utq6pymz51jao_9w3qmz9sebev4puib4t66k7gglhy_shutterstock_2017480202-min.webp'),
        img('gzxi1ubs8tvhasuyoljjktb6p76d_shutterstock_2444156141.jpg'),
        img('a8qan7r2ossz88815zxai3b00n75_Downpic.cc-25519323.jpg')
      ],
      4: [
        img('yuqu648rid8hf8g09ip9lswxh2av_Downpic.cc-image263983358.jpg'),
        img('3v46yytijdj44xwmcu10tpsd0agd_1619599983_shutterstock_199457384.jpg'),
        img('ac1pvfyncr6b3o6g64b7etpkzlyi_1619608001_shutterstock_1252745494.jpg'),
        img('imtxhf697qz3p06aemge77j1haun_1619600357_shutterstock_1148631992.jpg')
      ],
      5: [
        img('pw7gjvgfrjk5j22utq6pymz51jao_9w3qmz9sebev4puib4t66k7gglhy_shutterstock_2017480202-min.webp'),
        img('gzxi1ubs8tvhasuyoljjktb6p76d_shutterstock_2444156141.jpg'),
        img('a8qan7r2ossz88815zxai3b00n75_Downpic.cc-25519323.jpg'),
        img('y90ebc5rgo15g6kfgvuix1ulc0zs_uso5ypmayd80738cc3gi11nyveat_shutterstock_1294919260.webp')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Shanghai`,
      'Arrival at Pudong or Hongqiao and transfer to your hotel',
      'Check in and the rest of the day free',
      'Optional: an evening walk on the Bund',
      'Optional: the Shanghai Museum on People\'s Square',
      `${DAY_MARK}Day 2 · A day at Shanghai Zoo`,
      'Breakfast, then across to Shanghai Zoo',
      'Tickets included for the full day',
      'Giant pandas, big cat houses and old lawns',
      'Afternoon free for Nanjing Road',
      `${DAY_MARK}Day 3 · Southern Great Wall day trip`,
      'Early breakfast and transfer out of the city',
      'A full day at the Southern Great Wall',
      'Watchtowers, ramparts and the long ridge path',
      'Evening transfer back to your Shanghai hotel',
      `${DAY_MARK}Day 4 · City tour, tower and river cruise`,
      'Breakfast, then a guided half day of the city',
      'The Bund, the old town lanes and the Yu garden',
      'Up the Oriental Pearl Tower in the afternoon',
      'A cruise on the Huangpu as the towers light up',
      `${DAY_MARK}Day 5 · Departure from Shanghai`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Holiday Inn Express Shanghai Putuo, Shanghai',
      description: '4 nights · Breakfast · Standard room · 3★ · Quiet hotel in Putuo with a metro stop nearby',
      images: [
        img('188urx9bxrn69hyen8dqimsfx72z_488327823.jpg'),
        img('zd8xrskcgxv1m891xi4hubp2zh2k_230102610.jpg'),
        img('b33lqmz9fptgbbbv9x6whorw1hnt_442573332.jpg'),
        img('8x53ctpvg2e8ip14l9l2o3rtph3c_230101393.jpg'),
        img('eodhcam38r7paz9kzxawyn987n0v_477503847.jpg'),
        img('iaxtmbul7js7efqmjhwxvyoddim4_442572974.jpg'),
        img('7eqwvpucafh1p7ykqyo3zzhzlydy_517810410.jpg'),
        img('gs8w4peye1g9l2dvvj0jjugiwr4b_517810411.jpg')
      ]
    },
    activities: [
      {
        name: 'Shanghai Zoo',
        day: 2,
        optional: false,
        image: img('6uomrqckb5lnf5edd2hwphbaaeb9_shutterstock_38473243.jpg'),
        description: 'A full day at the zoo on the old Hongqiao golf course, with giant pandas, big cat houses and wide lawns for children.'
      },
      {
        name: 'Southern Great Wall day trip',
        day: 3,
        optional: false,
        image: img('4gb1k266gspgbdx5793pgkfidtbd_shutterstock_1478439887.jpg'),
        description: 'A day out of the city to the Southern Great Wall, walking its watchtowers and ridge path away from the tour crowds.'
      },
      {
        name: 'Half day guided tour of Shanghai',
        day: 4,
        optional: false,
        image: img('yuqu648rid8hf8g09ip9lswxh2av_Downpic.cc-image263983358.jpg'),
        description: 'A guided morning through the Bund waterfront, the old town lanes and the rockeries and ponds of the Yu garden.'
      },
      {
        name: 'Oriental Pearl Tower',
        day: 4,
        optional: false,
        image: img('p9etuo253h5gw8ttnc3rdw5pds6i_dl.beatsnoop.com-3000-msl1j40qR3.jpg'),
        description: 'Tickets up the city\'s best known tower, with the glass floor over Pudong and a long view back to the colonial Bund.'
      },
      {
        name: 'Huangpu river cruise',
        day: 4,
        optional: false,
        image: img('kyqi22drkx8f1w8fyrfliyqlswnk_Downpic.cc-92560468.jpg'),
        description: 'An evening sailing between the lit towers of Pudong and the stone facades of the Bund, the classic Shanghai skyline shot.'
      }
    ],
    program: {
      name: 'Shanghai',
      description: 'Four nights in one city: the zoo and its pandas, a day on the Southern Great Wall, then the Bund, the Yu garden, the Pearl Tower and a river cruise.',
      image: img('pw7gjvgfrjk5j22utq6pymz51jao_9w3qmz9sebev4puib4t66k7gglhy_shutterstock_2017480202-min.webp')
    }
  }
];

const detail = {
  slug: 'classic-shanghai-with-the-great-wall',
  ctaHref: '/l/china/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Classic Shanghai with the Great Wall',
  alt: 'Watchtower of the Southern Great Wall on a wooded ridge',
  days: '5 days / 4 nights',
  stations: '1 stops',
  transport: 'Private airport transfers and guided city touring',
  tag: 'Culture',
  tags: ['Culture', 'City break'],
  price: 55575,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Shanghai', 'Pudong'],
  stats: { days: 5, cities: 1, hotels: 1, activities: 5, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['4 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Mei',
    image: '/experts/riya.webp',
    role: 'China expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Most people never hear that Shanghai has its own stretch of wall. It makes this short break feel bigger than four nights.',
    quoteMore: 'Do the city tour last. After the wall and the zoo, the Bund and the tower read as the finish rather than the warm up.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five days in Shanghai with daily breakfast: a full day at the zoo with its giant pandas, a day trip to the Southern Great Wall, then a guided half day of the Bund, the Yu garden, the Pearl Tower and a Huangpu cruise.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights in Shanghai with daily breakfast; private airport transfers; Shanghai Zoo tickets; Southern Great Wall day trip; half day guided city tour; Oriental Pearl Tower tickets; Huangpu river cruise tickets.',
  intro2: 'Not included: international flights; China visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Shanghai (Arrival)', text: 'Arrival at Pudong or Hongqiao and transfer to your hotel\nCheck in and the rest of the day free\nOptional: an evening walk on the Bund\nOptional: the Shanghai Museum on People\'s Square', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Arrival at Pudong or Hongqiao and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: an evening walk on the Bund'] },
    { title: 'Day 2: A day at Shanghai Zoo (B)', text: 'Breakfast, then across to Shanghai Zoo\nTickets included for the full day\nGiant pandas, big cat houses and old lawns\nAfternoon free for Nanjing Road', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Breakfast, then across to Shanghai Zoo', 'Tickets included for the full day', 'Giant pandas, big cat houses and old lawns'] },
    { title: 'Day 3: Southern Great Wall day trip (B)', text: 'Early breakfast and transfer out of the city\nA full day at the Southern Great Wall\nWatchtowers, ramparts and the long ridge path\nEvening transfer back to your Shanghai hotel', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Early breakfast and transfer out of the city', 'A full day at the Southern Great Wall', 'Watchtowers, ramparts and the long ridge path'] },
    { title: 'Day 4: City tour, tower and river cruise (B)', text: 'Breakfast, then a guided half day of the city\nThe Bund, the old town lanes and the Yu garden\nUp the Oriental Pearl Tower in the afternoon\nA cruise on the Huangpu as the towers light up', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Breakfast, then a guided half day of the city', 'The Bund, the old town lanes and the Yu garden', 'Up the Oriental Pearl Tower in the afternoon'] },
    { title: 'Day 5: Departure from Shanghai (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; China visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'China', href: '/asia/china' },
  { label: detail.title }
];

export const classicShanghaiGreatWallBreakBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const classicShanghaiGreatWallBreakProduct = {
  slug: detail.slug,
  places: ['Shanghai', 'Pudong'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 5,
  transfers: 8,
  meals: 4,
  price: detail.price,
  images: cardImages
};
