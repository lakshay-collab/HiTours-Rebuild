// Highlights of China: Shanghai, Xi'an and Beijing. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('i3spxmkiglaslxih8x4y2omra0q3_Downpic.cc-126450991.jpg'),
  img('g0q8ge1932ua6x659yrqdw8ehh4t_dl.beatsnoop.com-3000-0iBWPZUtkM.jpg'),
  img('rt3qolit04b8whdo6ochykico59k_china-shanghai-river-cruise-city-lights.jpg'),
  img('uzcrzvz5okpx6n4cpj66bbxe6ek4_Downpic.cc-71935295.jpg'),
  img('6kc1sxnr11zlr5te18n2l3oxtmro_Downpic.cc-image271892371.jpg'),
  img('zodayxagnlbou54hdjhi9k3k1v05_Downpic.cc-126451122.jpg'),
  img('5pvbujxd1klkc21p2bll3m17l9hn_Xian-2.jpg'),
  img('mn0mvarmun5whuu7m1nqqoce8pcu_Downpic.cc-image572325012.jpg'),
  img('7xakoo3854be02nsd13trbsnx1m8_Downpic.cc-145567473.jpg'),
  img('ppa39nlr958mhc26bs5azm4kgtro_shutterstock_354977165.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('i3spxmkiglaslxih8x4y2omra0q3_Downpic.cc-126450991.jpg'),
  img('g0q8ge1932ua6x659yrqdw8ehh4t_dl.beatsnoop.com-3000-0iBWPZUtkM.jpg'),
  img('uzcrzvz5okpx6n4cpj66bbxe6ek4_Downpic.cc-71935295.jpg'),
  img('6kc1sxnr11zlr5te18n2l3oxtmro_Downpic.cc-image271892371.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Shanghai',
    dayLabel: 'Day 1 to 2',
    images: [
      img('i3spxmkiglaslxih8x4y2omra0q3_Downpic.cc-126450991.jpg'),
      img('8kovjamf8j45dd1yqto455ayugy0_Downpic.cc-164393642.jpg'),
      img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
      img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg')
    ],
    dayImages: {
      1: [
        img('2k4c4p2jzw25zkin4pr08mrop92w_1619596902_shutterstock_1462710089.jpg'),
        img('s8t3rwhg2yl68b7506zqum0o0x4d_1619599915_shutterstock_1149341150.jpg'),
        img('ijv4hicv8xdbd7kbr6u8y4ir0wp2_1619599753_shutterstock_1048697678.jpg'),
        img('i3spxmkiglaslxih8x4y2omra0q3_Downpic.cc-126450991.jpg')
      ],
      2: [
        img('yuqu648rid8hf8g09ip9lswxh2av_Downpic.cc-image263983358.jpg'),
        img('3v46yytijdj44xwmcu10tpsd0agd_1619599983_shutterstock_199457384.jpg'),
        img('ac1pvfyncr6b3o6g64b7etpkzlyi_1619608001_shutterstock_1252745494.jpg'),
        img('imtxhf697qz3p06aemge77j1haun_1619600357_shutterstock_1148631992.jpg')
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
      'A cruise on the Huangpu as the towers light up'
    ],
    accommodation: {
      name: 'Holiday Inn Express Shanghai Gongkang, Shanghai',
      description: '2 nights · Breakfast · Standard room · 3★ · Practical base in Jing\'an with metro access',
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
      }
    ],
    program: {
      name: 'Shanghai',
      description: 'Two nights to open the trip: the Bund and the Yu garden, the Oriental Pearl Tower and a cruise on the Huangpu after dark.',
      image: img('i3spxmkiglaslxih8x4y2omra0q3_Downpic.cc-126450991.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Xi\'an',
    dayLabel: 'Day 3 to 4',
    images: [
      img('uaoqj4uymvj2l4h6bexxr487ghwg_Downpic.cc-16085578.jpg'),
      img('g0q8ge1932ua6x659yrqdw8ehh4t_dl.beatsnoop.com-3000-0iBWPZUtkM.jpg'),
      img('sjkzo9jpw27scc3kxj4k0czpzwhk_Downpic.cc-162138441.jpg'),
      img('qsd4pnphggjmneqh8h55d0orngp8_Downpic.cc-53302494.jpg')
    ],
    dayImages: {
      3: [
        img('uaoqj4uymvj2l4h6bexxr487ghwg_Downpic.cc-16085578.jpg'),
        img('g0q8ge1932ua6x659yrqdw8ehh4t_dl.beatsnoop.com-3000-0iBWPZUtkM.jpg'),
        img('sjkzo9jpw27scc3kxj4k0czpzwhk_Downpic.cc-162138441.jpg'),
        img('qsd4pnphggjmneqh8h55d0orngp8_Downpic.cc-53302494.jpg')
      ],
      4: [
        img('qsd4pnphggjmneqh8h55d0orngp8_Downpic.cc-53302494.jpg'),
        img('28jqw10gths76fk21d0ydlfw0c1r_3580316000_834731fe53_k.jpg'),
        img('yf0xij24jmlhljrktllgkpn43573_45d97b7b0af54590a43f47157858aa08.png'),
        img('5v2woqhwxncpenlzku9bwoa65yol_51714-Terracota-Army.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Shanghai to Xi'an`,
      'Breakfast, then check out of your Shanghai hotel',
      'Optional: the maglev run out to Pudong airport',
      'Optional: flight Shanghai to Xi\'an, booked with us',
      'Arrival transfer and check in beside the pagoda',
      'Indian lunch at a restaurant in the old centre',
      `${DAY_MARK}Day 4 · Terracotta warriors and old Xi'an`,
      'Breakfast, then a guided day around Xi\'an',
      'The terracotta warriors in their excavation pits',
      'The Bell Tower in the walled old centre',
      'The Giant Wild Goose Pagoda in the afternoon'
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
        day: 4,
        optional: false,
        image: img('qsd4pnphggjmneqh8h55d0orngp8_Downpic.cc-53302494.jpg'),
        description: 'A guided day with the terracotta warriors in their excavation pits, the Bell Tower and the Giant Wild Goose Pagoda.'
      }
    ],
    program: {
      name: 'Xi\'an',
      description: 'Two nights at the eastern end of the Silk Road, with the terracotta army, the Bell Tower and the walled old centre.',
      image: img('uaoqj4uymvj2l4h6bexxr487ghwg_Downpic.cc-16085578.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Beijing',
    dayLabel: 'Day 5 to 8',
    images: [
      img('ni2etmxz6i1vr6og0rcdib2jtaqv_Downpic.cc-135981216.jpg'),
      img('kyqi22drkx8f1w8fyrfliyqlswnk_Downpic.cc-92560468.jpg'),
      img('rt3qolit04b8whdo6ochykico59k_china-shanghai-river-cruise-city-lights.jpg'),
      img('cbleatj3z1okk9pao255p0l0v4dx_dl.beatsnoop.com-3000-NhkFAobrc4.jpg')
    ],
    dayImages: {
      5: [
        img('cgvn0zymkzff9bznlpd8xrqwqv7j_1619597637_shutterstock_269743367.jpg'),
        img('etf645xhd90ozb781uxlmzp1p7c2_1619610568_shutterstock_732680590.jpg'),
        img('vmb0lvweark7kfhqxjjsgtxokqj0_1619610325_shutterstock_293184050.jpg'),
        img('ni2etmxz6i1vr6og0rcdib2jtaqv_Downpic.cc-135981216.jpg')
      ],
      6: [
        img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
        img('ni2etmxz6i1vr6og0rcdib2jtaqv_Downpic.cc-135981216.jpg'),
        img('kyqi22drkx8f1w8fyrfliyqlswnk_Downpic.cc-92560468.jpg'),
        img('rt3qolit04b8whdo6ochykico59k_china-shanghai-river-cruise-city-lights.jpg')
      ],
      7: [
        img('uzcrzvz5okpx6n4cpj66bbxe6ek4_Downpic.cc-71935295.jpg'),
        img('4q5tejgfrgal67d9s1rm66myvq3e_1619595246_shutterstock_721311280.jpg'),
        img('wmzivohel7wnazhjlo5exrpawr6o_1619597766_shutterstock_31943836.jpg'),
        img('xhapwj9v3aun8mqo8zxnwqvaqp74_1619597223_shutterstock_141819499.jpg')
      ],
      8: [
        img('ni2etmxz6i1vr6og0rcdib2jtaqv_Downpic.cc-135981216.jpg'),
        img('kyqi22drkx8f1w8fyrfliyqlswnk_Downpic.cc-92560468.jpg'),
        img('rt3qolit04b8whdo6ochykico59k_china-shanghai-river-cruise-city-lights.jpg'),
        img('cbleatj3z1okk9pao255p0l0v4dx_dl.beatsnoop.com-3000-NhkFAobrc4.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Xi'an to Beijing by bullet train`,
      'Breakfast and check out of your Xi\'an hotel',
      'Station transfer and the bullet train north to Beijing',
      'Arrival transfer and check in at your hotel',
      'Optional: the Lama Temple or the 798 art district',
      `${DAY_MARK}Day 6 · Great Wall and the Summer Palace`,
      'Early breakfast, then north to Mutianyu',
      'The cable car and the walk along the wall',
      'On to the Summer Palace in the afternoon',
      'Kunming lake, the long corridor and the marble boat',
      `${DAY_MARK}Day 7 · Forbidden City and Temple of Heaven`,
      'Breakfast, then a guided day in the old centre',
      'Tiananmen Square and the Forbidden City courtyards',
      'The Temple of Heaven and its round halls',
      'Indian dinner before heading back to the hotel',
      `${DAY_MARK}Day 8 · Departure from Beijing`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Holiday Inn Express Beijing Airport Zone, Beijing',
      description: '3 nights · Breakfast · Standard room · 3★ · Practical hotel near the airport expressway',
      images: [
        img('ae0hac2g5qd1n9axh1jqpt99ozd1_230938408.jpg'),
        img('l99whlymbj2e9oq79r3k810j0tot_449523454.jpg'),
        img('n5eklhgzp2u01vpbddaa1r5zxi2y_562215035.jpg'),
        img('81eqlhk2zzjykqyh3pch031wknoy_449523548.jpg'),
        img('7kk13ainhi0qx7fo0tthv63ps91d_12482579.jpg'),
        img('jhawmh5e256sjdp1x2h23ps17h4g_449517694.jpg'),
        img('g88p34unkr9pk4pcj2iyenv2r8vm_562215034.jpg'),
        img('qwks499yg21lter3820b29gq6m5s_449517678.jpg'),
        img('z9de7zmyvi82jz0hr02swt3tcceh_562215021.jpg'),
        img('fcdpa7aud4793bc91732rlod14qv_449517685.jpg'),
        img('lqsxw6znys0rnvb0pkhp7hyaqwas_562232017.jpg')
      ]
    },
    activities: [
      {
        name: 'Great Wall at Mutianyu and the Summer Palace',
        day: 6,
        optional: false,
        image: img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
        description: 'The Mutianyu section of the wall, steep and far less crowded than Badaling, then the lake and long corridor of the Summer Palace.'
      },
      {
        name: 'Beijing city sightseeing tour',
        day: 7,
        optional: false,
        image: img('uzcrzvz5okpx6n4cpj66bbxe6ek4_Downpic.cc-71935295.jpg'),
        description: 'A guided day through Tiananmen Square, the courtyards of the Forbidden City and the round halls of the Temple of Heaven.'
      }
    ],
    program: {
      name: 'Beijing',
      description: 'Three nights in the capital with the wall at Mutianyu, the Summer Palace, Tiananmen Square and the Temple of Heaven.',
      image: img('ni2etmxz6i1vr6og0rcdib2jtaqv_Downpic.cc-135981216.jpg')
    }
  }
];

const detail = {
  slug: 'highlights-of-china-shanghai-xian-beijing',
  ctaHref: '/l/china/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Highlights of China: Shanghai, Xi\'an and Beijing',
  alt: 'Giant Wild Goose Pagoda rising above the gardens in Xi\'an',
  days: '8 days / 7 nights',
  stations: '3 stops',
  transport: 'Private transfers, guided city tours, bullet train and an internal flight',
  tag: 'Culture',
  tags: ['Culture', 'Luxury'],
  price: 179740,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Shanghai', 'Xi\'an', 'Beijing'],
  stats: { days: 8, cities: 3, hotels: 3, activities: 6, transfers: 11 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['11 transfers', 'Transport'],
    ['9 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Mei',
    image: '/experts/riya.webp',
    role: 'China expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Shanghai first, then Xi\'an, then Beijing. Running the route this way means the Great Wall is the last thing you see, not the first.',
    quoteMore: 'The Indian lunch and dinner are worth keeping. After five days of regional Chinese food most families are glad of one familiar plate.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days from the modern waterfront of Shanghai to the terracotta army at Xi\'an and imperial Beijing, with a bullet train leg, daily breakfast and an Indian lunch and dinner on the way.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights with daily breakfast across Shanghai, Xi\'an and Beijing; one Indian lunch and one Indian dinner; private transfers; half day guided Shanghai city tour; Oriental Pearl Tower tickets; Huangpu river cruise tickets; guided Xi\'an sightseeing tour; Xi\'an to Beijing bullet train; full day Great Wall at Mutianyu with the Summer Palace; guided Beijing city sightseeing tour.',
  intro2: 'Not included: international flights; the Shanghai to Xi\'an internal flight; China visa fees; meals beyond those listed; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Shanghai (Arrival)', text: 'Arrival at Pudong or Hongqiao and transfer to your hotel\nCheck in and the rest of the day free\nOptional: an evening walk on the Bund\nOptional: street food on Nanjing Road', hotel: 'Holiday Inn Express Shanghai Gongkang', highlights: ['Arrival at Pudong or Hongqiao and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: an evening walk on the Bund'] },
    { title: 'Day 2: City tour, tower and river cruise (B)', text: 'Breakfast, then a guided half day of the city\nThe Bund, the old town lanes and the Yu garden\nUp the Oriental Pearl Tower in the afternoon\nA cruise on the Huangpu as the towers light up', hotel: 'Holiday Inn Express Shanghai Gongkang', highlights: ['Breakfast, then a guided half day of the city', 'The Bund, the old town lanes and the Yu garden', 'Up the Oriental Pearl Tower in the afternoon'] },
    { title: 'Day 3: Shanghai to Xi\'an (B, L)', text: 'Breakfast, then check out of your Shanghai hotel\nOptional: the maglev run out to Pudong airport\nOptional: flight Shanghai to Xi\'an, booked with us\nArrival transfer and check in beside the pagoda\nIndian lunch at a restaurant in the old centre', hotel: 'Jinjiang Inn Xi\'an Giant Wild Goose Pagoda', highlights: ['Breakfast, then check out of your Shanghai hotel', 'Optional: the maglev run out to Pudong airport', 'Optional: flight Shanghai to Xi\'an, booked with us'] },
    { title: 'Day 4: Terracotta warriors and old Xi\'an (B)', text: 'Breakfast, then a guided day around Xi\'an\nThe terracotta warriors in their excavation pits\nThe Bell Tower in the walled old centre\nThe Giant Wild Goose Pagoda in the afternoon', hotel: 'Jinjiang Inn Xi\'an Giant Wild Goose Pagoda', highlights: ['Breakfast, then a guided day around Xi\'an', 'The terracotta warriors in their excavation pits', 'The Bell Tower in the walled old centre'] },
    { title: 'Day 5: Xi\'an to Beijing by bullet train (B)', text: 'Breakfast and check out of your Xi\'an hotel\nStation transfer and the bullet train north to Beijing\nArrival transfer and check in at your hotel\nOptional: the Lama Temple or the 798 art district', hotel: 'Holiday Inn Express Beijing Airport Zone', highlights: ['Breakfast and check out of your Xi\'an hotel', 'Station transfer and the bullet train north to Beijing', 'Arrival transfer and check in at your hotel'] },
    { title: 'Day 6: Great Wall and the Summer Palace (B)', text: 'Early breakfast, then north to Mutianyu\nThe cable car and the walk along the wall\nOn to the Summer Palace in the afternoon\nKunming lake, the long corridor and the marble boat', hotel: 'Holiday Inn Express Beijing Airport Zone', highlights: ['Early breakfast, then north to Mutianyu', 'The cable car and the walk along the wall', 'On to the Summer Palace in the afternoon'] },
    { title: 'Day 7: Forbidden City and Temple of Heaven (B, D)', text: 'Breakfast, then a guided day in the old centre\nTiananmen Square and the Forbidden City courtyards\nThe Temple of Heaven and its round halls\nIndian dinner before heading back to the hotel', hotel: 'Holiday Inn Express Beijing Airport Zone', highlights: ['Breakfast, then a guided day in the old centre', 'Tiananmen Square and the Forbidden City courtyards', 'The Temple of Heaven and its round halls'] },
    { title: 'Day 8: Departure from Beijing (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; the Shanghai to Xi\'an internal flight; China visa fees; meals beyond those listed; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'China', href: '/asia/china' },
  { label: detail.title }
];

export const highlightsOfChinaThreeCitiesBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const highlightsOfChinaThreeCitiesProduct = {
  slug: detail.slug,
  places: ['Shanghai', 'Xi\'an', 'Beijing'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 6,
  transfers: 11,
  meals: 9,
  price: detail.price,
  images: cardImages
};
