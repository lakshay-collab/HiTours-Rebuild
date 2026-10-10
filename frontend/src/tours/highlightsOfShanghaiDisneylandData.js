// Highlights of Shanghai with Disneyland. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('b5ynnfkw9xstwmj4vr3ybnhglozx_shutterstock_1358808083-min.jpg'),
  img('oicyzlfg5rxvg09pns4od3d22zww_shutterstock_71208400.jpg'),
  img('8pbhk6y03hh5e17wg0w40f56idrr_shutterstock_2541409255.jpg'),
  img('jq32h42gg8cf8nl926njywfrf9h0_shutterstock_2452309383.jpg'),
  img('yuqu648rid8hf8g09ip9lswxh2av_Downpic.cc-image263983358.jpg'),
  img('7bcibxc00vx6uv7vw5cozmbu00qa_Downpic.cc-image340093738.jpg'),
  img('7wo3949n5a1ce18z3vvclknx481b_Downpic.cc-132973436.jpg'),
  img('oideptqaj1zms1ji7qpuq2pig3bu_Downpic.cc-87026528.jpg'),
  img('p9etuo253h5gw8ttnc3rdw5pds6i_dl.beatsnoop.com-3000-msl1j40qR3.jpg'),
  img('n75mm3g228uoqgjm7ihbxc92l3k5_Downpic.cc-126094617.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('b5ynnfkw9xstwmj4vr3ybnhglozx_shutterstock_1358808083-min.jpg'),
  img('oicyzlfg5rxvg09pns4od3d22zww_shutterstock_71208400.jpg'),
  img('8pbhk6y03hh5e17wg0w40f56idrr_shutterstock_2541409255.jpg'),
  img('jq32h42gg8cf8nl926njywfrf9h0_shutterstock_2452309383.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Shanghai',
    dayLabel: 'Day 1 to 5',
    images: [
      img('b5ynnfkw9xstwmj4vr3ybnhglozx_shutterstock_1358808083-min.jpg'),
      img('nbi4azc881kr7m13zi038f0f6osd_shutterstock_2365549897-min.jpg'),
      img('oicyzlfg5rxvg09pns4od3d22zww_shutterstock_71208400.jpg'),
      img('67iq4c5jud5to71cpv9phay4ainn_shutterstock_2308664077.jpg')
    ],
    dayImages: {
      1: [
        img('2k4c4p2jzw25zkin4pr08mrop92w_1619596902_shutterstock_1462710089.jpg'),
        img('s8t3rwhg2yl68b7506zqum0o0x4d_1619599915_shutterstock_1149341150.jpg'),
        img('ijv4hicv8xdbd7kbr6u8y4ir0wp2_1619599753_shutterstock_1048697678.jpg'),
        img('b5ynnfkw9xstwmj4vr3ybnhglozx_shutterstock_1358808083-min.jpg')
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
        img('b5ynnfkw9xstwmj4vr3ybnhglozx_shutterstock_1358808083-min.jpg'),
        img('nbi4azc881kr7m13zi038f0f6osd_shutterstock_2365549897-min.jpg')
      ],
      4: [
        img('6uomrqckb5lnf5edd2hwphbaaeb9_shutterstock_38473243.jpg'),
        img('zk1jx6gfbtw9mue4g1kylrf7ib2i_1619609580_shutterstock_82092487.jpg'),
        img('b5ynnfkw9xstwmj4vr3ybnhglozx_shutterstock_1358808083-min.jpg'),
        img('nbi4azc881kr7m13zi038f0f6osd_shutterstock_2365549897-min.jpg')
      ],
      5: [
        img('b5ynnfkw9xstwmj4vr3ybnhglozx_shutterstock_1358808083-min.jpg'),
        img('nbi4azc881kr7m13zi038f0f6osd_shutterstock_2365549897-min.jpg'),
        img('oicyzlfg5rxvg09pns4od3d22zww_shutterstock_71208400.jpg'),
        img('67iq4c5jud5to71cpv9phay4ainn_shutterstock_2308664077.jpg')
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
      `${DAY_MARK}Day 4 · A day at Shanghai Zoo`,
      'Breakfast, then across to Shanghai Zoo',
      'Tickets included for the full day',
      'Giant pandas, big cat houses and old lawns',
      'Afternoon free for Xintiandi or the museum',
      `${DAY_MARK}Day 5 · Departure from Shanghai`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Holiday Inn Express Shanghai Putuo, Shanghai',
      description: '4 nights · Breakfast · Standard room · 3★ · Simple hotel in Putuo, handy for the metro',
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
        name: 'Shanghai Zoo',
        day: 4,
        optional: false,
        image: img('6uomrqckb5lnf5edd2hwphbaaeb9_shutterstock_38473243.jpg'),
        description: 'A full day at the zoo on the old Hongqiao golf course, with giant pandas, big cat houses and wide lawns for children.'
      }
    ],
    program: {
      name: 'Shanghai',
      description: 'Four nights in one city: the Bund and the Yu garden, the Pearl Tower and a river cruise, then full days at Disneyland and the zoo.',
      image: img('b5ynnfkw9xstwmj4vr3ybnhglozx_shutterstock_1358808083-min.jpg')
    }
  }
];

const detail = {
  slug: 'highlights-of-shanghai-with-disneyland',
  ctaHref: '/l/china/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Highlights of Shanghai with Disneyland',
  alt: 'Castle at Shanghai Disneyland under an evening sky',
  days: '5 days / 4 nights',
  stations: '1 stops',
  transport: 'Private airport transfers and guided city touring',
  tag: 'Family',
  tags: ['Family', 'Theme parks'],
  price: 31825,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Shanghai', 'Pudong'],
  stats: { days: 5, cities: 1, hotels: 1, activities: 5, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['6 transfers', 'Transport'],
    ['4 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Mei',
    image: '/experts/riya.webp',
    role: 'China expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'This is the cheapest way into Shanghai with the park included. Four nights, one hotel, and the children get their full Disney day.',
    quoteMore: 'Reach Disneyland before the gates open. The Tron queue is the longest in the park within the first ninety minutes.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five days in Shanghai with daily breakfast: a guided half day of the Bund and the Yu garden, the Oriental Pearl Tower, a Huangpu cruise, then full days at Shanghai Disneyland and the zoo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights in Shanghai with daily breakfast; private airport transfers; half day guided city tour; Oriental Pearl Tower tickets; Huangpu river cruise tickets; Shanghai Disneyland tickets; Shanghai Zoo tickets.',
  intro2: 'Not included: international flights; China visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Shanghai (Arrival)', text: 'Arrival at Pudong or Hongqiao and transfer to your hotel\nCheck in and the rest of the day free\nOptional: an evening walk on the Bund\nOptional: street food on Nanjing Road', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Arrival at Pudong or Hongqiao and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: an evening walk on the Bund'] },
    { title: 'Day 2: City tour, tower and river cruise (B)', text: 'Breakfast, then a guided half day of the city\nThe Bund, the old town lanes and the Yu garden\nUp the Oriental Pearl Tower in the afternoon\nA cruise on the Huangpu as the towers light up', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Breakfast, then a guided half day of the city', 'The Bund, the old town lanes and the Yu garden', 'Up the Oriental Pearl Tower in the afternoon'] },
    { title: 'Day 3: Shanghai Disneyland (B)', text: 'Breakfast, then a day at Shanghai Disneyland\nTickets included for the full day\nThe Enchanted Storybook Castle and the Tron ride\nBack at the hotel in the evening', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Breakfast, then a day at Shanghai Disneyland', 'Tickets included for the full day', 'The Enchanted Storybook Castle and the Tron ride'] },
    { title: 'Day 4: A day at Shanghai Zoo (B)', text: 'Breakfast, then across to Shanghai Zoo\nTickets included for the full day\nGiant pandas, big cat houses and old lawns\nAfternoon free for Xintiandi or the museum', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Breakfast, then across to Shanghai Zoo', 'Tickets included for the full day', 'Giant pandas, big cat houses and old lawns'] },
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

export const highlightsOfShanghaiDisneylandBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const highlightsOfShanghaiDisneylandProduct = {
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
  transfers: 6,
  meals: 4,
  price: detail.price,
  images: cardImages
};
