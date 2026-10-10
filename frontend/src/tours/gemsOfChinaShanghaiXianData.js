// Gems of China: Shanghai and Xi'an. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('uaoqj4uymvj2l4h6bexxr487ghwg_Downpic.cc-16085578.jpg'),
  img('p9etuo253h5gw8ttnc3rdw5pds6i_dl.beatsnoop.com-3000-msl1j40qR3.jpg'),
  img('sjkzo9jpw27scc3kxj4k0czpzwhk_Downpic.cc-162138441.jpg'),
  img('p2wn40xv1ltgb9q0y5dm5d36xhdr_Downpic.cc-52729952.jpg'),
  img('1tdh7ysujyyj6v7fh6cb0kakvbk4_mini.jpg'),
  img('64xrlm3ona44f2jmcn07eyyhwqbe_dl.beatsnoop.com-3000-DOuW5FdA78.jpg'),
  img('tvs4o3a5oj2jtfqv7hvzevzdoi9i_Downpic.cc-image387264098.jpg'),
  img('v3jseos9sbwk7z9xvksncfwre300_pixelcut-export%20(9).jpeg'),
  img('s332cq8qdx62zma2avl68g0xk67y_shutterstock_2443032971.jpg'),
  img('4gb1k266gspgbdx5793pgkfidtbd_shutterstock_1478439887.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('uaoqj4uymvj2l4h6bexxr487ghwg_Downpic.cc-16085578.jpg'),
  img('p9etuo253h5gw8ttnc3rdw5pds6i_dl.beatsnoop.com-3000-msl1j40qR3.jpg'),
  img('sjkzo9jpw27scc3kxj4k0czpzwhk_Downpic.cc-162138441.jpg'),
  img('p2wn40xv1ltgb9q0y5dm5d36xhdr_Downpic.cc-52729952.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Shanghai',
    dayLabel: 'Day 1 to 4',
    images: [
      img('uaoqj4uymvj2l4h6bexxr487ghwg_Downpic.cc-16085578.jpg'),
      img('gbpiso0axqgkohebhs9y4n433u50_dl.beatsnoop.com-3000-HNaMrjnykF.jpg'),
      img('rt3qolit04b8whdo6ochykico59k_china-shanghai-river-cruise-city-lights.jpg'),
      img('sjkzo9jpw27scc3kxj4k0czpzwhk_Downpic.cc-162138441.jpg')
    ],
    dayImages: {
      1: [
        img('2k4c4p2jzw25zkin4pr08mrop92w_1619596902_shutterstock_1462710089.jpg'),
        img('s8t3rwhg2yl68b7506zqum0o0x4d_1619599915_shutterstock_1149341150.jpg'),
        img('ijv4hicv8xdbd7kbr6u8y4ir0wp2_1619599753_shutterstock_1048697678.jpg'),
        img('uaoqj4uymvj2l4h6bexxr487ghwg_Downpic.cc-16085578.jpg')
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
        img('uaoqj4uymvj2l4h6bexxr487ghwg_Downpic.cc-16085578.jpg'),
        img('gbpiso0axqgkohebhs9y4n433u50_dl.beatsnoop.com-3000-HNaMrjnykF.jpg')
      ],
      4: [
        img('4gb1k266gspgbdx5793pgkfidtbd_shutterstock_1478439887.jpg'),
        img('uaoqj4uymvj2l4h6bexxr487ghwg_Downpic.cc-16085578.jpg'),
        img('gbpiso0axqgkohebhs9y4n433u50_dl.beatsnoop.com-3000-HNaMrjnykF.jpg'),
        img('rt3qolit04b8whdo6ochykico59k_china-shanghai-river-cruise-city-lights.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Shanghai`,
      'Arrival at Pudong or Hongqiao and transfer to your hotel',
      'Check in and the rest of the day free',
      'Optional: an evening walk on the Bund',
      'Optional: street food on Nanjing Road',
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
      'Evening transfer back to your Shanghai hotel'
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
      description: 'Four nights in the port city: the Bund and the Yu garden, the Pearl Tower, a Huangpu cruise, Disneyland and a day on the Southern Great Wall.',
      image: img('uaoqj4uymvj2l4h6bexxr487ghwg_Downpic.cc-16085578.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Xi\'an',
    dayLabel: 'Day 5 to 7',
    images: [
      img('oideptqaj1zms1ji7qpuq2pig3bu_Downpic.cc-87026528.jpg'),
      img('p9etuo253h5gw8ttnc3rdw5pds6i_dl.beatsnoop.com-3000-msl1j40qR3.jpg'),
      img('n75mm3g228uoqgjm7ihbxc92l3k5_Downpic.cc-126094617.jpg'),
      img('92ft5g8z6z8vc0ludgo5oxgkt6ec_Downpic.cc-81794122.jpg')
    ],
    dayImages: {
      5: [
        img('mbp5rl9oqg9c4t56w6nxgp0eznor_Shaanxi_History_Museum_2.jpg'),
        img('oideptqaj1zms1ji7qpuq2pig3bu_Downpic.cc-87026528.jpg'),
        img('p9etuo253h5gw8ttnc3rdw5pds6i_dl.beatsnoop.com-3000-msl1j40qR3.jpg'),
        img('n75mm3g228uoqgjm7ihbxc92l3k5_Downpic.cc-126094617.jpg')
      ],
      6: [
        img('qsd4pnphggjmneqh8h55d0orngp8_Downpic.cc-53302494.jpg'),
        img('28jqw10gths76fk21d0ydlfw0c1r_3580316000_834731fe53_k.jpg'),
        img('yf0xij24jmlhljrktllgkpn43573_45d97b7b0af54590a43f47157858aa08.png'),
        img('5v2woqhwxncpenlzku9bwoa65yol_51714-Terracota-Army.jpg')
      ],
      7: [
        img('oideptqaj1zms1ji7qpuq2pig3bu_Downpic.cc-87026528.jpg'),
        img('p9etuo253h5gw8ttnc3rdw5pds6i_dl.beatsnoop.com-3000-msl1j40qR3.jpg'),
        img('n75mm3g228uoqgjm7ihbxc92l3k5_Downpic.cc-126094617.jpg'),
        img('92ft5g8z6z8vc0ludgo5oxgkt6ec_Downpic.cc-81794122.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Shanghai to Xi'an`,
      'Breakfast, then check out of your Shanghai hotel',
      'Optional: the maglev run out to Pudong airport',
      'Optional: flight Shanghai to Xi\'an, booked with us',
      'Arrival transfer and check in at Xi\'an',
      'Rest of the day free beside the pagoda',
      `${DAY_MARK}Day 6 · Terracotta warriors and old Xi'an`,
      'Breakfast, then a guided day around Xi\'an',
      'The terracotta warriors in their excavation pits',
      'The Bell Tower in the walled old centre',
      'The Giant Wild Goose Pagoda in the afternoon',
      `${DAY_MARK}Day 7 · Departure from Xi'an`,
      'Breakfast at the hotel and check out',
      'Private transfer to Xianyang airport for your flight home'
    ],
    accommodation: {
      name: 'Jinjiang Inn Xi\'an Giant Wild Goose Pagoda, Xi An',
      description: '2 nights · Breakfast · Standard room · 3★ · Friendly hotel beside the Giant Wild Goose Pagoda',
      images: [
        img('mcpdai76id3i5xlmafowaz37k23d_77682400.jpg'),
        img('969fmzoz95ljtflim4egr7cq7cju_77682420.jpg'),
        img('89t0iwwakzhqfrg0zl3ap4xrrcfk_77682402.jpg'),
        img('oybhs5tmwq4dun4ypisb5zwfsyll_78780964.jpg'),
        img('5exbm4j2d9rrfv5kt6xs0km5bt61_\'.jpg'),
        img('fkr6x0zk9tayq13yawkbpygzq3ws_77682403.jpg'),
        img('y3htwsvtpn44d1d4z7b22tcv4gmn_78780966.jpg'),
        img('c5mamcekitg8whcf1aordcrf56ys_78780952.jpg'),
        img('prwwvcsm5v25zjexmgm1yzqp0qyv_78780946.jpg')
      ]
    },
    activities: [
      {
        name: 'Xi\'an sightseeing tour',
        day: 6,
        optional: false,
        image: img('qsd4pnphggjmneqh8h55d0orngp8_Downpic.cc-53302494.jpg'),
        description: 'A guided day with the terracotta warriors in their excavation pits, the Bell Tower and the Giant Wild Goose Pagoda.'
      }
    ],
    program: {
      name: 'Xi\'an',
      description: 'Two nights at the eastern end of the Silk Road, with the terracotta army, the Bell Tower and the Giant Wild Goose Pagoda.',
      image: img('oideptqaj1zms1ji7qpuq2pig3bu_Downpic.cc-87026528.jpg')
    }
  }
];

const detail = {
  slug: 'gems-of-china-shanghai-and-xian',
  ctaHref: '/l/china/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Gems of China: Shanghai and Xi\'an',
  alt: 'Ranks of terracotta warriors in the excavation pit at Xi\'an',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Private transfers, guided city tours and an internal flight',
  tag: 'Culture',
  tags: ['Culture', 'Family'],
  price: 66500,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Shanghai', 'Xi\'an'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 6, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Mei',
    image: '/experts/riya.webp',
    role: 'China expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Shanghai shows you where China is going and Xi\'an shows you where it came from. Six nights covers both without a long train day.',
    quoteMore: 'At the terracotta site, start in Pit One, then walk back through the museum. Going the other way you reach the big pit when it is at its most crowded.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days across two Chinese cities with daily breakfast: the Bund, the Pearl Tower, a Huangpu cruise, Disneyland and the Southern Great Wall in Shanghai, then the terracotta warriors and the walled old centre of Xi\'an.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights in Shanghai and 2 nights in Xi\'an with daily breakfast; private transfers; half day guided Shanghai city tour; Oriental Pearl Tower tickets; Huangpu river cruise tickets; Shanghai Disneyland tickets; Southern Great Wall day trip; guided Xi\'an sightseeing tour.',
  intro2: 'Not included: international flights; the Shanghai to Xi\'an internal flight; China visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Shanghai (Arrival)', text: 'Arrival at Pudong or Hongqiao and transfer to your hotel\nCheck in and the rest of the day free\nOptional: an evening walk on the Bund\nOptional: street food on Nanjing Road', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Arrival at Pudong or Hongqiao and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: an evening walk on the Bund'] },
    { title: 'Day 2: City tour, tower and river cruise (B)', text: 'Breakfast, then a guided half day of the city\nThe Bund, the old town lanes and the Yu garden\nUp the Oriental Pearl Tower in the afternoon\nA cruise on the Huangpu as the towers light up', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Breakfast, then a guided half day of the city', 'The Bund, the old town lanes and the Yu garden', 'Up the Oriental Pearl Tower in the afternoon'] },
    { title: 'Day 3: Shanghai Disneyland (B)', text: 'Breakfast, then a day at Shanghai Disneyland\nTickets included for the full day\nThe Enchanted Storybook Castle and the Tron ride\nBack at the hotel in the evening', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Breakfast, then a day at Shanghai Disneyland', 'Tickets included for the full day', 'The Enchanted Storybook Castle and the Tron ride'] },
    { title: 'Day 4: Southern Great Wall day trip (B)', text: 'Early breakfast and transfer out of the city\nA full day at the Southern Great Wall\nWatchtowers, ramparts and the long ridge path\nEvening transfer back to your Shanghai hotel', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Early breakfast and transfer out of the city', 'A full day at the Southern Great Wall', 'Watchtowers, ramparts and the long ridge path'] },
    { title: 'Day 5: Shanghai to Xi\'an (B)', text: 'Breakfast, then check out of your Shanghai hotel\nOptional: the maglev run out to Pudong airport\nOptional: flight Shanghai to Xi\'an, booked with us\nArrival transfer and check in at Xi\'an\nRest of the day free beside the pagoda', hotel: 'Jinjiang Inn Xi\'an Giant Wild Goose Pagoda', highlights: ['Breakfast, then check out of your Shanghai hotel', 'Optional: the maglev run out to Pudong airport', 'Optional: flight Shanghai to Xi\'an, booked with us'] },
    { title: 'Day 6: Terracotta warriors and old Xi\'an (B)', text: 'Breakfast, then a guided day around Xi\'an\nThe terracotta warriors in their excavation pits\nThe Bell Tower in the walled old centre\nThe Giant Wild Goose Pagoda in the afternoon', hotel: 'Jinjiang Inn Xi\'an Giant Wild Goose Pagoda', highlights: ['Breakfast, then a guided day around Xi\'an', 'The terracotta warriors in their excavation pits', 'The Bell Tower in the walled old centre'] },
    { title: 'Day 7: Departure from Xi\'an (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Xianyang airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Xianyang airport for your flight home'] }
  ],
  outro: 'Not included: international flights; the Shanghai to Xi\'an internal flight; China visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'China', href: '/asia/china' },
  { label: detail.title }
];

export const gemsOfChinaShanghaiXianBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const gemsOfChinaShanghaiXianProduct = {
  slug: detail.slug,
  places: ['Shanghai', 'Xi\'an'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 6,
  transfers: 10,
  meals: 6,
  price: detail.price,
  images: cardImages
};
