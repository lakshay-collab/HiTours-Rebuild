// Scenic Japan in Three Cities. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg'),
  img('9gsnr4nv1g9jtu3xd9rimi0kxn50_shutterstock_720796201.jpg'),
  img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
  img('8uer6kpve5exz099231cw3oei92e_shutterstock_58934503.jpg'),
  img('fhk5y0ixfiuabs0dtpeqow4love0_shutterstock_1514039861.jpg'),
  img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
  img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg'),
  img('62uzveq9j4kgn1dqm9wgyg6n0zg3_shutterstock_1443072128.jpg'),
  img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
  img('8a1guib4pdk1t3rfaoo9h6fki7xm_shutterstock_637507525.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('9gsnr4nv1g9jtu3xd9rimi0kxn50_shutterstock_720796201.jpg'),
  img('fhk5y0ixfiuabs0dtpeqow4love0_shutterstock_1514039861.jpg'),
  img('681tftxkry0y47i4ozl9chz9333t_shutterstock_294096194.jpg'),
  img('3i8einrdhqd6dv79pgf8flgjyaaq_shutterstock_681749764%20(1).jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    dayLabel: 'Day 1 to 2',
    images: [
      img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg'),
      img('1yv1a968ghyiwiwbsbwvzfu388l0_shutterstock_2300479567.jpg'),
      img('9gxo0w9zfmmbmjg8895gp4h3leqm_shutterstock_1966867324.jpg'),
      img('udkn4h8at26lrvvwwmlaxguh16hf_shutterstock_1836078037.jpg')
    ],
    dayImages: {
      1: [
        img('6hzy1swk98chjdiqrq77p05ks1hp_shutterstock_402603553%20(1).jpg'),
        img('pcgbwwkgqbfu2982lragk0yyuxtt_Sumida_Park_2011.jpg'),
        img('dvnb132y05sidy9r0omo9zqe0ram_15849220641_a5a96af87c_o.jpg'),
        img('5zaop0gs0hj99wclc25wthm8rhcx_Rainbow_Bridge_(Tokyo)_at_night_8.jpg')
      ],
      2: [
        img('oj5eocvwd5au1vpfuazquva3pcc9_shutterstock_1524921077.jpg'),
        img('kcoy8gk8ex5maofxb4mqnkm4psfx_shutterstock_2280133521.jpg'),
        img('iau3aw776fn443su99n2scmo27vl_25899482056_b1e61a167c_k.jpg'),
        img('0au3urvu530f5lbontv6ju088ggy_1619590602_shutterstock_1729078399.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Tokyo`,
      'Arrival at Narita or Haneda and transfer to your hotel',
      'Check in at your Shinjuku hotel',
      'Rest of the day free at your own pace',
      'Optional: the Tokyo Metropolitan Building viewing decks, free of charge',
      `${DAY_MARK}Day 2 · Tokyo city tour`,
      'Breakfast, then a full day coach tour of the city',
      'Meiji shrine and the Imperial Palace gardens',
      'Lunch included on the tour',
      'Asakusa and the Senso-ji temple lanes'
    ],
    accommodation: {
      name: 'Premier Hotel Cabin Shinjuku, Tokyo',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel in Shinjuku, minutes from the station',
      images: [
        img('3o94vkahpdbu8csxpq9m9u65lpgr_leonardo-2101334-cnk-sand-beach-club-09_O-707799.jpg'),
        img('qj6u4qrdeeq0a7y1w0ptfdow7466_271275943.png'),
        img('51v8ymkq64vwfxohmdklpkpqi2m4_271275937.png'),
        img('hn3ikiry3vmzlvex4k7mtvxb3xiv_271275968.png'),
        img('30y4syj55woetgsj29xjky0pa540_271276015.png'),
        img('temirvmbn8rr6tlum2bgqjdw957c_400036635.png'),
        img('ymrlslq3bte39vyadlbuv0s0r8wu_271275975.png'),
        img('tbvz86mf6tuqn92ea3fe4w3w9ma6_302081209.png'),
        img('jec5g8bmkhtlvvu16bqsesnwjaqa_271275997.png'),
        img('mfvv0eqk46q5tdqjyuxo8lemw4ax_271275964.png')
      ]
    },
    activities: [
      {
        name: 'Tokyo city tour with lunch',
        day: 2,
        optional: false,
        image: img('oj5eocvwd5au1vpfuazquva3pcc9_shutterstock_1524921077.jpg'),
        description: 'A full day by coach from the LOVE statue in Shinjuku through Meiji shrine, the Imperial Palace gardens and Asakusa, with lunch included.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Two nights in Shinjuku to start, with a free first evening and a full guided city day.',
      image: img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Hiroshima',
    subtitle: 'Hiroshima to Miyajima',
    dayLabel: 'Day 3 to 4',
    images: [
      img('681tftxkry0y47i4ozl9chz9333t_shutterstock_294096194.jpg'),
      img('9gsnr4nv1g9jtu3xd9rimi0kxn50_shutterstock_720796201.jpg'),
      img('3i8einrdhqd6dv79pgf8flgjyaaq_shutterstock_681749764%20(1).jpg'),
      img('zbbx1ixoqg2typ8lp8xo56w85e4i_shutterstock_1439546591.jpg')
    ],
    dayImages: {
      3: [
        img('xa4j0wjprpfbgrj5ex3rnmz6kd92_Hiroshima-Castle-1024x683.jpg'),
        img('xx7adpg9x8y5bh7oaxh71c9mnhvn_shukkeien_garden_hiroshima_japan_016_xl.jpg'),
        img('681tftxkry0y47i4ozl9chz9333t_shutterstock_294096194.jpg'),
        img('9gsnr4nv1g9jtu3xd9rimi0kxn50_shutterstock_720796201.jpg')
      ],
      4: [
        img('k3sf085wsu1ruds6z7cd2ie75wj2_shutterstock_252533968.jpg'),
        img('6hqk9raek422s1htdubidnhqa0h9_40003599095_3d03c153fd_o.jpg'),
        img('9lzrldxkzxmqnzanh56c0l82e2y6_30886221447_8ff83ea243_o.jpg'),
        img('rdl3mr0ytwltczrxe46lugdutz5l_52530995501_589c03192f_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Bullet train to Hiroshima`,
      'Breakfast and check out, then transfer to the station',
      'Shinkansen bullet train west to Hiroshima',
      'Check in at your hotel beside the station',
      'Rest of the day free in the city',
      `${DAY_MARK}Day 4 · Hiroshima and Miyajima`,
      'Breakfast, then the Peace Memorial Park and museum',
      'The A-Bomb Dome and the memorial cenotaph',
      'Ferry across to Miyajima island',
      'The floating torii gate and Itsukushima shrine'
    ],
    accommodation: {
      name: 'Hotel Granvia Hiroshima, Hiroshima',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel attached to Hiroshima station',
      images: [
        img('vh6t87px56f8qgnbib8y9dj0b0wo_220a0g00000084huz6008_R_960_660_R5_D.webp'),
        img('ucmf3k7tzeh1v0wjwlliljzwxc4l_20755565.jpg'),
        img('0m5rofn8mmx0zrgdddbs1imp9kcy_32353314.jpg'),
        img('3fg1r7p01el78mo7s8fa1bu4b9pq_56350572.jpg'),
        img('ny0af8z6003vibhk37vfwfge2awf_1200px-Hotel-Granvia-Hiroshima-2.jpg'),
        img('mml0xbc8fr7gdd35l6o8fd6x06up_227704046.jpg'),
        img('onx0vu7p1jxecvjmoksyt2q6rk20_17605782.jpg'),
        img('jfimy91g1ndyg1nafoup8lqo5ey0_227704660.jpg'),
        img('vrfjgrb5fqcnm6pr7ebyg66dic6g_17605936.jpg'),
        img('rzrnrhh5vjbnot0tahs6jzblhehi_18790932.jpg'),
        img('pmgep5nbw5ud2srgfb57h26y6pzp_109607952.jpg'),
        img('xz8vfae8uyhm5iwl3m5bk9smfqvi_17605922.jpg'),
        img('142nbvd87mzmgtsrz34ueln3x8qo_105925940.jpg'),
        img('yle1nh4dcpdzi8gunnjbhpun6emr_14215996.jpg'),
        img('l1z7pgufpbbxialog3aiv5dawdx1_105926076.jpg'),
        img('g8l90h2sw4okhu1bprgti3bg6rk5_187882799.jpg'),
        img('kncjhwfh4ej5rpgum1s5jp7naxq8_14216002.jpg'),
        img('txuf1dsuesdn7lf7llgl2dh5gel0_18790853.jpg'),
        img('cswo40mo9ldydj77mqv6zn2zce4m_227704960.jpg'),
        img('w4xorjvnnc4w3jkmwylh33igoky9_18790995.jpg'),
        img('9xmlburqb04r97w7543gjogycq1f_18790992.jpg')
      ]
    },
    activities: [
      {
        name: 'Hiroshima and Miyajima tour',
        day: 4,
        optional: false,
        image: img('k3sf085wsu1ruds6z7cd2ie75wj2_shutterstock_252533968.jpg'),
        description: 'The Peace Memorial Park and museum in the morning, then the ferry to Miyajima for the floating torii gate and Itsukushima shrine.'
      }
    ],
    program: {
      name: 'Hiroshima',
      description: 'Two nights beside the station, with a quiet arrival day and the Peace Memorial Park paired with Miyajima.',
      image: img('681tftxkry0y47i4ozl9chz9333t_shutterstock_294096194.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Kyoto',
    subtitle: 'Kyoto to Nara and Osaka',
    dayLabel: 'Day 5 to 8',
    images: [
      img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
      img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
      img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg')
    ],
    dayImages: {
      5: [
        img('t2m2s7vbmrg4cb4h2rfkv3ugqr7l_frontpage_05_pc.jpg.webp'),
        img('hgd75m8wt8dus6fzoo948x43a79q_1920px-Kyoto_National_Museum_200.jpg'),
        img('w5gzhp0v048oru3ehscbs40ketmx_5116543131_5b675904e5_o.jpg'),
        img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg')
      ],
      6: [
        img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('gsoze09r8ko0sbu1ceztnf0kmd3l_shutterstock_1720970440.jpg')
      ],
      7: [
        img('nw809kt3nky9u7tvyxvc76ue98gy_JF4_063392.jpg'),
        img('dhue0icv67z5ii0lvwqb2w29i16b_gettyimages-509472000_tx4UVEk.jpg'),
        img('z7kchmsvf5ofta3efir0gv006ml9_3902_top.jpg'),
        img('b5y5t6gjtt7xrf6kxqmvvzh8bpgz_Maru.jpg')
      ],
      8: [
        img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
        img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
        img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · On to Kyoto`,
      'Breakfast and check out, then back to the station',
      'Bullet train east to Kyoto',
      'Check in at your hotel on Shijo street',
      'Optional: an evening walk through Gion and Pontocho',
      `${DAY_MARK}Day 6 · Kyoto and Nara`,
      'Breakfast, then a full day with your guide',
      'Kinkaku-ji, the golden pavilion, on its pond',
      'Buffet lunch included',
      'The deer park and Todai-ji temple in Nara',
      `${DAY_MARK}Day 7 · A free day in Kyoto`,
      'Breakfast and a free day in Kyoto',
      'Optional: the bamboo grove and monkey park at Arashiyama',
      'Optional: Fushimi Inari\'s torii gate paths at dawn',
      'Optional: Nishiki market and the Gion lanes',
      `${DAY_MARK}Day 8 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'Transfer to Osaka and on to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'ibis Styles Kyoto Shijo, Kyoto',
      description: '3 nights · Breakfast · Standard room · 3★ · Bright hotel on Shijo street, close to the Gion lanes',
      images: [
        img('nrd3ii677mncf69mivmwwxcbhu5u_caption.png'),
        img('b9vlj5lu892k3l7i3un30j7zt5vr_587409034.png'),
        img('1cotwgkf7et7hmvsw8t3j0tu86w6_guest-room-bath%20(1).png'),
        img('aipfd7j1dqwa634ooyk6zp99b34j_587409123.png'),
        img('padx9m4066vwd2z0l5r6qehti8j2_580275964.png'),
        img('vvaoh2xpv5whlmwbcopyd409wfd9_587409122.png'),
        img('rxcltsl5hw9cjwku07oo8os9duz2_609868774.png'),
        img('6kbowku7sjvmloyhco4m6bvji7m6_587409051.png'),
        img('jr5p5ox9ymxt20klii6x7glxj305_guest-room.png'),
        img('ldqm6g5v51cg3seyiti0a9pbvs2h_guest-room%20(1).png')
      ]
    },
    activities: [
      {
        name: 'Kyoto and Nara with buffet lunch',
        day: 6,
        optional: false,
        image: img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        description: 'A full day from Kyoto for Kinkaku-ji, the golden pavilion, then the deer park and Todai-ji temple in Nara, with a buffet lunch.'
      }
    ],
    program: {
      name: 'Kyoto',
      description: 'Three nights in the old capital with a guided day to Nara, a free day for the temples and a short hop to Osaka to fly home.',
      image: img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg')
    }
  }
];

const detail = {
  slug: 'scenic-japan-in-three-cities',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Scenic Japan in Three Cities',
  alt: 'Itsukushima shrine torii gate at high tide, Miyajima',
  days: '8 days / 7 nights',
  stations: '3 stops',
  transport: 'Shinkansen bullet train, private transfers and guided tours',
  tag: 'Culture',
  tags: ['Culture', 'First time'],
  price: 161537,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Hiroshima', 'Miyajima', 'Kyoto', 'Nara', 'Osaka'],
  stats: { days: 8, cities: 3, hotels: 3, activities: 3, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['9 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three nights in Kyoto with one of them free is the right shape. Fushimi Inari at seven in the morning is worth the alarm.',
    quoteMore: 'Each hotel is a step from a main station, so the two travel days cost you almost nothing in time.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days across three cities: Shinjuku with a guided city day, two nights in Hiroshima for the Peace Memorial Park and Miyajima, then three in Kyoto with Nara, a free day and a short hop to Osaka for the flight home.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights with daily breakfast; bullet train from Tokyo to Hiroshima and on to Kyoto; private airport transfers; full day Tokyo city tour with lunch; Hiroshima and Miyajima tour; Kyoto and Nara day tour with buffet lunch.',
  intro2: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your Shinjuku hotel\nRest of the day free at your own pace\nOptional: the Tokyo Metropolitan Building viewing decks, free of charge', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your Shinjuku hotel', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo city tour (B, L)', text: 'Breakfast, then a full day coach tour of the city\nMeiji shrine and the Imperial Palace gardens\nLunch included on the tour\nAsakusa and the Senso-ji temple lanes', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Breakfast, then a full day coach tour of the city', 'Meiji shrine and the Imperial Palace gardens', 'Lunch included on the tour'] },
    { title: 'Day 3: Bullet train to Hiroshima (B)', text: 'Breakfast and check out, then transfer to the station\nShinkansen bullet train west to Hiroshima\nCheck in at your hotel beside the station\nRest of the day free in the city', hotel: 'Hotel Granvia Hiroshima', highlights: ['Breakfast and check out, then transfer to the station', 'Shinkansen bullet train west to Hiroshima', 'Check in at your hotel beside the station'] },
    { title: 'Day 4: Hiroshima and Miyajima (B)', text: 'Breakfast, then the Peace Memorial Park and museum\nThe A-Bomb Dome and the memorial cenotaph\nFerry across to Miyajima island\nThe floating torii gate and Itsukushima shrine', hotel: 'Hotel Granvia Hiroshima', highlights: ['Breakfast, then the Peace Memorial Park and museum', 'The A-Bomb Dome and the memorial cenotaph', 'Ferry across to Miyajima island'] },
    { title: 'Day 5: On to Kyoto (B)', text: 'Breakfast and check out, then back to the station\nBullet train east to Kyoto\nCheck in at your hotel on Shijo street\nOptional: an evening walk through Gion and Pontocho', hotel: 'ibis Styles Kyoto Shijo', highlights: ['Breakfast and check out, then back to the station', 'Bullet train east to Kyoto', 'Check in at your hotel on Shijo street'] },
    { title: 'Day 6: Kyoto and Nara (B, L)', text: 'Breakfast, then a full day with your guide\nKinkaku-ji, the golden pavilion, on its pond\nBuffet lunch included\nThe deer park and Todai-ji temple in Nara', hotel: 'ibis Styles Kyoto Shijo', highlights: ['Breakfast, then a full day with your guide', 'Kinkaku-ji, the golden pavilion, on its pond', 'Buffet lunch included'] },
    { title: 'Day 7: A free day in Kyoto (B)', text: 'Breakfast and a free day in Kyoto\nOptional: the bamboo grove and monkey park at Arashiyama\nOptional: Fushimi Inari\'s torii gate paths at dawn\nOptional: Nishiki market and the Gion lanes', hotel: 'ibis Styles Kyoto Shijo', highlights: ['Breakfast and a free day in Kyoto', 'Optional: the bamboo grove and monkey park at Arashiyama', 'Optional: Fushimi Inari\'s torii gate paths at dawn'] },
    { title: 'Day 8: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nTransfer to Osaka and on to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to Osaka and on to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Japan', href: '/asien/japan' },
  { label: detail.title }
];

export const scenicJapanThreeCitiesBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const scenicJapanThreeCitiesProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Hiroshima', 'Miyajima', 'Kyoto', 'Nara', 'Osaka'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 3,
  transfers: 9,
  meals: 9,
  price: detail.price,
  images: cardImages
};
