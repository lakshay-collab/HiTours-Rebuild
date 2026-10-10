// Grand Shanghai Holiday with Disneyland. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('y8xjg2r26v9kpva3vqmywn04w98f_shutterstock_2471291589.jpg'),
  img('c1x6o7lf87drt6eqd7q25efd57ln_shutterstock_88557799.jpg'),
  img('7e6gjm22k301xpnm9r5mg68fzpfw_shutterstock_2085179434.jpg'),
  img('yuqu648rid8hf8g09ip9lswxh2av_Downpic.cc-image263983358.jpg'),
  img('7bcibxc00vx6uv7vw5cozmbu00qa_Downpic.cc-image340093738.jpg'),
  img('7wo3949n5a1ce18z3vvclknx481b_Downpic.cc-132973436.jpg'),
  img('oideptqaj1zms1ji7qpuq2pig3bu_Downpic.cc-87026528.jpg'),
  img('p9etuo253h5gw8ttnc3rdw5pds6i_dl.beatsnoop.com-3000-msl1j40qR3.jpg'),
  img('n75mm3g228uoqgjm7ihbxc92l3k5_Downpic.cc-126094617.jpg'),
  img('92ft5g8z6z8vc0ludgo5oxgkt6ec_Downpic.cc-81794122.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('y8xjg2r26v9kpva3vqmywn04w98f_shutterstock_2471291589.jpg'),
  img('c1x6o7lf87drt6eqd7q25efd57ln_shutterstock_88557799.jpg'),
  img('7e6gjm22k301xpnm9r5mg68fzpfw_shutterstock_2085179434.jpg'),
  img('yuqu648rid8hf8g09ip9lswxh2av_Downpic.cc-image263983358.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Shanghai',
    dayLabel: 'Day 1 to 6',
    images: [
      img('y8xjg2r26v9kpva3vqmywn04w98f_shutterstock_2471291589.jpg'),
      img('dmpvzkjvlyp3dgikl7ibeb360a8t_5nsftm4otoh627hj5ujec4kt1y27_disha.jpg'),
      img('c1x6o7lf87drt6eqd7q25efd57ln_shutterstock_88557799.jpg'),
      img('ncwe4066v9zrifmyrtv7b5cn0jc4_shutterstock_1478439887.jpg')
    ],
    dayImages: {
      1: [
        img('2k4c4p2jzw25zkin4pr08mrop92w_1619596902_shutterstock_1462710089.jpg'),
        img('s8t3rwhg2yl68b7506zqum0o0x4d_1619599915_shutterstock_1149341150.jpg'),
        img('ijv4hicv8xdbd7kbr6u8y4ir0wp2_1619599753_shutterstock_1048697678.jpg'),
        img('y8xjg2r26v9kpva3vqmywn04w98f_shutterstock_2471291589.jpg')
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
        img('y8xjg2r26v9kpva3vqmywn04w98f_shutterstock_2471291589.jpg'),
        img('dmpvzkjvlyp3dgikl7ibeb360a8t_5nsftm4otoh627hj5ujec4kt1y27_disha.jpg')
      ],
      4: [
        img('6uomrqckb5lnf5edd2hwphbaaeb9_shutterstock_38473243.jpg'),
        img('zk1jx6gfbtw9mue4g1kylrf7ib2i_1619609580_shutterstock_82092487.jpg'),
        img('y8xjg2r26v9kpva3vqmywn04w98f_shutterstock_2471291589.jpg'),
        img('dmpvzkjvlyp3dgikl7ibeb360a8t_5nsftm4otoh627hj5ujec4kt1y27_disha.jpg')
      ],
      5: [
        img('4gb1k266gspgbdx5793pgkfidtbd_shutterstock_1478439887.jpg'),
        img('y8xjg2r26v9kpva3vqmywn04w98f_shutterstock_2471291589.jpg'),
        img('dmpvzkjvlyp3dgikl7ibeb360a8t_5nsftm4otoh627hj5ujec4kt1y27_disha.jpg'),
        img('c1x6o7lf87drt6eqd7q25efd57ln_shutterstock_88557799.jpg')
      ],
      6: [
        img('y8xjg2r26v9kpva3vqmywn04w98f_shutterstock_2471291589.jpg'),
        img('dmpvzkjvlyp3dgikl7ibeb360a8t_5nsftm4otoh627hj5ujec4kt1y27_disha.jpg'),
        img('c1x6o7lf87drt6eqd7q25efd57ln_shutterstock_88557799.jpg'),
        img('ncwe4066v9zrifmyrtv7b5cn0jc4_shutterstock_1478439887.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Shanghai`,
      'Arrival at Pudong or Hongqiao and transfer to your hotel',
      'Check in and the rest of the day free',
      'Optional: an evening walk on the Bund',
      'Optional: dinner in the Xintiandi lanes',
      `${DAY_MARK}Day 2 · City tour, tower and river cruise`,
      'Breakfast, then a guided half day of the city',
      'The Bund, the old town lanes and the Yu garden',
      'Up the Oriental Pearl Tower in the afternoon',
      'A cruise on the Huangpu as the towers light up',
      `${DAY_MARK}Day 3 · Shanghai Disneyland`,
      'Early breakfast, then transfer out to Disneyland',
      'Tickets included for the full day',
      'The Enchanted Storybook Castle and the Tron ride',
      'Back at the hotel in the evening',
      `${DAY_MARK}Day 4 · A day at Shanghai Zoo`,
      'Breakfast, then across to Shanghai Zoo',
      'Tickets included for the full day',
      'Giant pandas, big cat houses and old lawns',
      'Afternoon free for Nanjing Road or the museum',
      `${DAY_MARK}Day 5 · Southern Great Wall day trip`,
      'Early breakfast and transfer out of the city',
      'A full day at the Southern Great Wall',
      'Watchtowers, ramparts and the long ridge path',
      'Evening transfer back to your Shanghai hotel',
      `${DAY_MARK}Day 6 · Departure from Shanghai`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Holiday Inn Express Shanghai Gongkang, Shanghai',
      description: '5 nights · Breakfast · Standard room · 3★ · Practical base in Jing\'an with metro access',
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
      },
      {
        name: 'Southern Great Wall day trip',
        day: 5,
        optional: false,
        image: img('4gb1k266gspgbdx5793pgkfidtbd_shutterstock_1478439887.jpg'),
        description: 'A day out of the city to the Southern Great Wall, walking its watchtowers and ridge path away from the tour crowds.'
      }
    ],
    program: {
      name: 'Shanghai',
      description: 'Five nights in one city: the Bund and the Yu garden, the Pearl Tower, a river cruise, Disneyland, the zoo and the Southern Great Wall.',
      image: img('y8xjg2r26v9kpva3vqmywn04w98f_shutterstock_2471291589.jpg')
    }
  }
];

const detail = {
  slug: 'grand-shanghai-holiday-with-disneyland',
  ctaHref: '/l/china/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Grand Shanghai Holiday with Disneyland',
  alt: 'Towers of Pudong seen across the Huangpu river at dusk',
  days: '6 days / 5 nights',
  stations: '1 stops',
  transport: 'Private airport transfers and guided city touring',
  tag: 'Family',
  tags: ['Family', 'Theme parks'],
  price: 61750,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Shanghai', 'Pudong'],
  stats: { days: 6, cities: 1, hotels: 1, activities: 6, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Mei',
    image: '/experts/riya.webp',
    role: 'China expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Six days in one city, so nobody packs and repacks. Families get the park, the zoo and the skyline without a single internal flight.',
    quoteMore: 'Keep the river cruise for after dark. The Pudong towers only switch on their full light show once the sun has gone.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days in Shanghai with daily breakfast: a guided half day of the Bund and the Yu garden, the Oriental Pearl Tower, a Huangpu cruise, Disneyland, the zoo and a Southern Great Wall day trip.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights in Shanghai with daily breakfast; private airport transfers; half day guided city tour; Oriental Pearl Tower tickets; Huangpu river cruise tickets; Shanghai Disneyland tickets; Shanghai Zoo tickets; Southern Great Wall day trip.',
  intro2: 'Not included: international flights; China visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Shanghai (Arrival)', text: 'Arrival at Pudong or Hongqiao and transfer to your hotel\nCheck in and the rest of the day free\nOptional: an evening walk on the Bund\nOptional: dinner in the Xintiandi lanes', hotel: 'Holiday Inn Express Shanghai Gongkang', highlights: ['Arrival at Pudong or Hongqiao and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: an evening walk on the Bund'] },
    { title: 'Day 2: City tour, tower and river cruise (B)', text: 'Breakfast, then a guided half day of the city\nThe Bund, the old town lanes and the Yu garden\nUp the Oriental Pearl Tower in the afternoon\nA cruise on the Huangpu as the towers light up', hotel: 'Holiday Inn Express Shanghai Gongkang', highlights: ['Breakfast, then a guided half day of the city', 'The Bund, the old town lanes and the Yu garden', 'Up the Oriental Pearl Tower in the afternoon'] },
    { title: 'Day 3: Shanghai Disneyland (B)', text: 'Early breakfast, then transfer out to Disneyland\nTickets included for the full day\nThe Enchanted Storybook Castle and the Tron ride\nBack at the hotel in the evening', hotel: 'Holiday Inn Express Shanghai Gongkang', highlights: ['Early breakfast, then transfer out to Disneyland', 'Tickets included for the full day', 'The Enchanted Storybook Castle and the Tron ride'] },
    { title: 'Day 4: A day at Shanghai Zoo (B)', text: 'Breakfast, then across to Shanghai Zoo\nTickets included for the full day\nGiant pandas, big cat houses and old lawns\nAfternoon free for Nanjing Road or the museum', hotel: 'Holiday Inn Express Shanghai Gongkang', highlights: ['Breakfast, then across to Shanghai Zoo', 'Tickets included for the full day', 'Giant pandas, big cat houses and old lawns'] },
    { title: 'Day 5: Southern Great Wall day trip (B)', text: 'Early breakfast and transfer out of the city\nA full day at the Southern Great Wall\nWatchtowers, ramparts and the long ridge path\nEvening transfer back to your Shanghai hotel', hotel: 'Holiday Inn Express Shanghai Gongkang', highlights: ['Early breakfast and transfer out of the city', 'A full day at the Southern Great Wall', 'Watchtowers, ramparts and the long ridge path'] },
    { title: 'Day 6: Departure from Shanghai (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; China visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'China', href: '/asien/china' },
  { label: detail.title }
];

export const grandShanghaiDisneylandHolidayBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const grandShanghaiDisneylandHolidayProduct = {
  slug: detail.slug,
  places: ['Shanghai', 'Pudong'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 6,
  transfers: 8,
  meals: 5,
  price: detail.price,
  images: cardImages
};
