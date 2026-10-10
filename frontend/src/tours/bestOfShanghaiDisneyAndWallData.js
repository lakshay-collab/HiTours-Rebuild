// Best of Shanghai with Disneyland and the Great Wall. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ro9oby50thlztabmp850uxrjndp0_shutterstock_2085179434.jpg'),
  img('0421zxjgsxc3o6suhl0084jsg0hl_shutterstock_2443032989.jpg'),
  img('mgctwlqrzm8uxqx13fwakh1v8gu3_fb52761xq6333hlgix1f0wwzxilo_n14xvnej0v0p0b0m9f5hcss5m0ln_parade.webp'),
  img('w9y49ftpznebx1d8wfeqmt9zd908_shutterstock_214399000.jpg'),
  img('xls8uhccjint0zsdpilf8wfwtau1_shutterstock_2402383203.jpg'),
  img('jtu8dmzefz6tdkkd99ltqxmxq8dv_dl.beatsnoop.com-3000-JzOFfe1HU3.jpg'),
  img('umyo226m9ttwcb214y2midgqmntg_Downpic.cc-55990140.jpg'),
  img('jm3vvjfv4vhm2g3tnazc5i7mn74w_Downpic.cc-image239536884.jpg'),
  img('h4ztzh96ymup5j5gp8ii4lckwcjg_Downpic.cc-image214394374.jpg'),
  img('hbiznl9dn0ljreo4r93opznkyfum_Downpic.cc-48151571.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('ro9oby50thlztabmp850uxrjndp0_shutterstock_2085179434.jpg'),
  img('0421zxjgsxc3o6suhl0084jsg0hl_shutterstock_2443032989.jpg'),
  img('mgctwlqrzm8uxqx13fwakh1v8gu3_fb52761xq6333hlgix1f0wwzxilo_n14xvnej0v0p0b0m9f5hcss5m0ln_parade.webp'),
  img('w9y49ftpznebx1d8wfeqmt9zd908_shutterstock_214399000.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Shanghai',
    dayLabel: 'Day 1 to 5',
    images: [
      img('ro9oby50thlztabmp850uxrjndp0_shutterstock_2085179434.jpg'),
      img('xvdh8aybv2jpmdxy2yds38xvnqsu_shutterstock_2443032969.jpg'),
      img('0421zxjgsxc3o6suhl0084jsg0hl_shutterstock_2443032989.jpg'),
      img('s332cq8qdx62zma2avl68g0xk67y_shutterstock_2443032971.jpg')
    ],
    dayImages: {
      1: [
        img('2k4c4p2jzw25zkin4pr08mrop92w_1619596902_shutterstock_1462710089.jpg'),
        img('s8t3rwhg2yl68b7506zqum0o0x4d_1619599915_shutterstock_1149341150.jpg'),
        img('ro9oby50thlztabmp850uxrjndp0_shutterstock_2085179434.jpg'),
        img('xvdh8aybv2jpmdxy2yds38xvnqsu_shutterstock_2443032969.jpg')
      ],
      2: [
        img('yuqu648rid8hf8g09ip9lswxh2av_Downpic.cc-image263983358.jpg'),
        img('3v46yytijdj44xwmcu10tpsd0agd_1619599983_shutterstock_199457384.jpg'),
        img('ac1pvfyncr6b3o6g64b7etpkzlyi_1619608001_shutterstock_1252745494.jpg'),
        img('imtxhf697qz3p06aemge77j1haun_1619600357_shutterstock_1148631992.jpg')
      ],
      3: [
        img('5nsftm4otoh627hj5ujec4kt1y27_disha.jpg'),
        img('t27m0ry317begwvn0sdy9kyugoen_18-03-12_ShanghaiDisney_013.jpg'),
        img('ro9oby50thlztabmp850uxrjndp0_shutterstock_2085179434.jpg'),
        img('xvdh8aybv2jpmdxy2yds38xvnqsu_shutterstock_2443032969.jpg')
      ],
      4: [
        img('4gb1k266gspgbdx5793pgkfidtbd_shutterstock_1478439887.jpg'),
        img('ro9oby50thlztabmp850uxrjndp0_shutterstock_2085179434.jpg'),
        img('xvdh8aybv2jpmdxy2yds38xvnqsu_shutterstock_2443032969.jpg'),
        img('0421zxjgsxc3o6suhl0084jsg0hl_shutterstock_2443032989.jpg')
      ],
      5: [
        img('ro9oby50thlztabmp850uxrjndp0_shutterstock_2085179434.jpg'),
        img('xvdh8aybv2jpmdxy2yds38xvnqsu_shutterstock_2443032969.jpg'),
        img('0421zxjgsxc3o6suhl0084jsg0hl_shutterstock_2443032989.jpg'),
        img('s332cq8qdx62zma2avl68g0xk67y_shutterstock_2443032971.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Shanghai`,
      'Arrival at Pudong or Hongqiao and transfer to your hotel',
      'Check in and the rest of the day free',
      'Optional: an evening walk on the Bund',
      'Optional: the Shanghai Museum on People\'s Square',
      `${DAY_MARK}Day 2 · City tour, tower and river cruise`,
      'Breakfast, then a guided half day of the city',
      'The Bund, the old town lanes and the Yu garden',
      'Up the Oriental Pearl Tower in the afternoon',
      'A cruise on the Huangpu as the towers light up',
      `${DAY_MARK}Day 3 · Shanghai Disneyland`,
      'Breakfast, then a day at Shanghai Disneyland',
      'Tickets included for the full day',
      'The Enchanted Storybook Castle and the Tron ride',
      'Back at the hotel in the evening',
      `${DAY_MARK}Day 4 · Southern Great Wall day trip`,
      'Early breakfast and transfer out of the city',
      'A full day at the Southern Great Wall',
      'Watchtowers, ramparts and the long ridge path',
      'Evening transfer back to your Shanghai hotel',
      `${DAY_MARK}Day 5 · Departure from Shanghai`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Holiday Inn Express Shanghai Putuo, Shanghai',
      description: '4 nights · Breakfast · Standard room · 3★ · Comfortable base in Putuo close to the metro',
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
        name: 'Half day guided tour of Shanghai',
        day: 2,
        optional: false,
        image: img('yuqu648rid8hf8g09ip9lswxh2av_Downpic.cc-image263983358.jpg'),
        description: 'A guided morning through the Bund waterfront, the old town lanes and the rockeries and ponds of the Yu garden.'
      },
      {
        name: 'Oriental Pearl Tower',
        day: 2,
        optional: false,
        image: img('p9etuo253h5gw8ttnc3rdw5pds6i_dl.beatsnoop.com-3000-msl1j40qR3.jpg'),
        description: 'Tickets up the city\'s best known tower, with the glass floor over Pudong and a long view back to the colonial Bund.'
      },
      {
        name: 'Huangpu river cruise',
        day: 2,
        optional: false,
        image: img('kyqi22drkx8f1w8fyrfliyqlswnk_Downpic.cc-92560468.jpg'),
        description: 'An evening sailing between the lit towers of Pudong and the stone facades of the Bund, the classic Shanghai skyline shot.'
      },
      {
        name: 'Shanghai Disneyland',
        day: 3,
        optional: false,
        image: img('5nsftm4otoh627hj5ujec4kt1y27_disha.jpg'),
        description: 'A full day at Shanghai Disneyland with tickets included, home to the Enchanted Storybook Castle and the Tron ride.'
      },
      {
        name: 'Southern Great Wall day trip',
        day: 4,
        optional: false,
        image: img('4gb1k266gspgbdx5793pgkfidtbd_shutterstock_1478439887.jpg'),
        description: 'A day out of the city to the Southern Great Wall, walking its watchtowers and ridge path away from the tour crowds.'
      }
    ],
    program: {
      name: 'Shanghai',
      description: 'Four nights in one city: the Bund, the Yu garden, the Pearl Tower and a river cruise, a full day at Disneyland and a day on the Southern Great Wall.',
      image: img('ro9oby50thlztabmp850uxrjndp0_shutterstock_2085179434.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-shanghai-disneyland-and-great-wall',
  ctaHref: '/l/china/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Shanghai with Disneyland and the Great Wall',
  alt: 'The Bund waterfront with the Pudong skyline behind it',
  days: '5 days / 4 nights',
  stations: '1 stops',
  transport: 'Private airport transfers and guided city touring',
  tag: 'Family',
  tags: ['Family', 'Culture'],
  price: 59185,
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
    quote: 'A park day and a wall day in the same four nights. Parents get the history, children get the rides, and nobody changes hotel.',
    quoteMore: 'Carry a hat and proper shoes for the wall day. The ridge path is steep in places and there is very little shade on top.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five days in Shanghai with daily breakfast: a guided half day of the Bund and the Yu garden, the Oriental Pearl Tower, a Huangpu cruise, a full day at Disneyland and a Southern Great Wall day trip.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights in Shanghai with daily breakfast; private airport transfers; half day guided city tour; Oriental Pearl Tower tickets; Huangpu river cruise tickets; Shanghai Disneyland tickets; Southern Great Wall day trip.',
  intro2: 'Not included: international flights; China visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Shanghai (Arrival)', text: 'Arrival at Pudong or Hongqiao and transfer to your hotel\nCheck in and the rest of the day free\nOptional: an evening walk on the Bund\nOptional: the Shanghai Museum on People\'s Square', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Arrival at Pudong or Hongqiao and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: an evening walk on the Bund'] },
    { title: 'Day 2: City tour, tower and river cruise (B)', text: 'Breakfast, then a guided half day of the city\nThe Bund, the old town lanes and the Yu garden\nUp the Oriental Pearl Tower in the afternoon\nA cruise on the Huangpu as the towers light up', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Breakfast, then a guided half day of the city', 'The Bund, the old town lanes and the Yu garden', 'Up the Oriental Pearl Tower in the afternoon'] },
    { title: 'Day 3: Shanghai Disneyland (B)', text: 'Breakfast, then a day at Shanghai Disneyland\nTickets included for the full day\nThe Enchanted Storybook Castle and the Tron ride\nBack at the hotel in the evening', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Breakfast, then a day at Shanghai Disneyland', 'Tickets included for the full day', 'The Enchanted Storybook Castle and the Tron ride'] },
    { title: 'Day 4: Southern Great Wall day trip (B)', text: 'Early breakfast and transfer out of the city\nA full day at the Southern Great Wall\nWatchtowers, ramparts and the long ridge path\nEvening transfer back to your Shanghai hotel', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Early breakfast and transfer out of the city', 'A full day at the Southern Great Wall', 'Watchtowers, ramparts and the long ridge path'] },
    { title: 'Day 5: Departure from Shanghai (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; China visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'China', href: '/asien/china' },
  { label: detail.title }
];

export const bestOfShanghaiDisneyAndWallBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfShanghaiDisneyAndWallProduct = {
  slug: detail.slug,
  places: ['Shanghai', 'Pudong'],
  href: `/asien/${detail.slug}`,
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
