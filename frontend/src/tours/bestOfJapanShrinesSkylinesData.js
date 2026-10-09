// Best of Japan: Shrines and Skylines. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ia89ezbshmwkpv1tpvpc0a2zc4k2_gallery-1.jpg'),
  img('62uzveq9j4kgn1dqm9wgyg6n0zg3_shutterstock_1443072128.jpg'),
  img('wj9jxfmpxk6juy7qb1ok3i9d1ae2_shutterstock_1650091249.jpg'),
  img('xhgc9a10q89566kee3xewg2tdxbu_shutterstock_245037472.jpg'),
  img('xetrn73mv4uqd247nxnoobi5fxsz_shutterstock_1906828666%20(1).jpg'),
  img('va7tu5iex0enjnq9uaqnfyufkowl_shutterstock_507147964%20(1).jpg'),
  img('xwlhpz82r0k90be9vsoef19qcx6k_shutterstock_1901310499.jpg'),
  img('jrtz4vq56xhqb8xes2py7d0u61a2_shutterstock_519395710.jpg'),
  img('n6o4af4ttsz5fvnf4luy4m8mkuit_shutterstock_1873243030.jpg'),
  img('udkn4h8at26lrvvwwmlaxguh16hf_shutterstock_1836078037.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji and Hakone',
    dayLabel: 'Day 1 to 3',
    images: [
      img('ia89ezbshmwkpv1tpvpc0a2zc4k2_gallery-1.jpg'),
      img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg'),
      img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg'),
      img('gj78fz8c0ymqhf34svyaxlbyx6e2_shutterstock_1017018754%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('pcgbwwkgqbfu2982lragk0yyuxtt_Sumida_Park_2011.jpg'),
        img('dvnb132y05sidy9r0omo9zqe0ram_15849220641_a5a96af87c_o.jpg'),
        img('6hzy1swk98chjdiqrq77p05ks1hp_shutterstock_402603553%20(1).jpg'),
        img('5zaop0gs0hj99wclc25wthm8rhcx_Rainbow_Bridge_(Tokyo)_at_night_8.jpg')
      ],
      2: [
        img('oj5eocvwd5au1vpfuazquva3pcc9_shutterstock_1524921077.jpg'),
        img('kcoy8gk8ex5maofxb4mqnkm4psfx_shutterstock_2280133521.jpg'),
        img('iau3aw776fn443su99n2scmo27vl_25899482056_b1e61a167c_k.jpg'),
        img('0au3urvu530f5lbontv6ju088ggy_1619590602_shutterstock_1729078399.jpg')
      ],
      3: [
        img('39ndql7vpg0emtn4pc108qs5bzwf_shutterstock_1023211282.jpg'),
        img('mq1b6y8xt0nbhdf5ntp9hisjpp76_6922_01.jpg'),
        img('4ijejmm9p326y1f1f6t762u0izb6_shutterstock_1303030627%20(1).jpg'),
        img('9hdwl7e2hucnek1jhe8l9hwk9s9m_OWAKUDANI%20VALLEY.png')
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
      'Asakusa and the Senso-ji temple lanes',
      `${DAY_MARK}Day 3 · Mount Fuji and Hakone`,
      'Breakfast, then out of the city towards Mount Fuji',
      'The fifth station on the mountain, weather permitting',
      'Lake Ashi and the Hakone ropeway',
      'Bullet train back into Tokyo in the evening'
    ],
    accommodation: {
      name: 'APA Hotel Shinjuku Kabukicho Chuo, Tokyo',
      description: '3 nights · Breakfast · Standard room · 3★ · Well placed hotel in Shinjuku, minutes from the station',
      images: [
        img('rs3elzkc1rrut6fk4247sps0kdms_download%20(2).png'),
        img('jkr5eckxbjif1c0qfhagseuibn8w_download%20(3).png'),
        img('aw5patnjnmem3hvxcez7wmc1x435_download.png'),
        img('0xrao4l0u3f2fu9xa5u0ofh859nn_download%20(6).png'),
        img('jmursjxr921isz0151hmm4nghc9b_download%20(1).png'),
        img('e36bxps39n38vbpd6rbds9as9cl7_download%20(4).png'),
        img('cm99fyb00i7w1yjnqnv6i16equ2h_download%20(5).png'),
        img('w3vj61jork4cblz9cf0xfm536cb2_download%20(7).png'),
        img('ngkqe7fvs3ag0t5vonca8vigou4d_download%20(8).png')
      ]
    },
    activities: [
      {
        name: 'Tokyo city tour with lunch',
        day: 2,
        optional: false,
        image: img('oj5eocvwd5au1vpfuazquva3pcc9_shutterstock_1524921077.jpg'),
        description: 'A full day by coach from the LOVE statue in Shinjuku through Meiji shrine, the Imperial Palace gardens and Asakusa, with lunch included.'
      },
      {
        name: 'Mount Fuji and Hakone day trip',
        day: 3,
        optional: false,
        image: img('39ndql7vpg0emtn4pc108qs5bzwf_shutterstock_1023211282.jpg'),
        description: 'The fifth station on Mount Fuji, Lake Ashi and the Hakone ropeway, with the bullet train back into Tokyo in the evening.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Three nights in Shinjuku, with a full city day and a day out to Mount Fuji and the Hakone lakes.',
      image: img('ia89ezbshmwkpv1tpvpc0a2zc4k2_gallery-1.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Hiroshima',
    subtitle: 'Hiroshima to Miyajima',
    dayLabel: 'Day 4 to 5',
    images: [
      img('iydw2l2uic40wgzusg1ovudevqjk_shutterstock_1514003927.jpg'),
      img('62uzveq9j4kgn1dqm9wgyg6n0zg3_shutterstock_1443072128.jpg'),
      img('xrahfic90qj47tsgysqanrchcxhl_shutterstock_1269393457.jpg'),
      img('bphn1d1cyqbrowbqsvsas9azq6v4_shutterstock_252533968.jpg')
    ],
    dayImages: {
      4: [
        img('xa4j0wjprpfbgrj5ex3rnmz6kd92_Hiroshima-Castle-1024x683.jpg'),
        img('xx7adpg9x8y5bh7oaxh71c9mnhvn_shukkeien_garden_hiroshima_japan_016_xl.jpg'),
        img('iydw2l2uic40wgzusg1ovudevqjk_shutterstock_1514003927.jpg'),
        img('62uzveq9j4kgn1dqm9wgyg6n0zg3_shutterstock_1443072128.jpg')
      ],
      5: [
        img('k3sf085wsu1ruds6z7cd2ie75wj2_shutterstock_252533968.jpg'),
        img('6hqk9raek422s1htdubidnhqa0h9_40003599095_3d03c153fd_o.jpg'),
        img('9lzrldxkzxmqnzanh56c0l82e2y6_30886221447_8ff83ea243_o.jpg'),
        img('rdl3mr0ytwltczrxe46lugdutz5l_52530995501_589c03192f_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Bullet train to Hiroshima`,
      'Breakfast and check out, then transfer to the station',
      'Shinkansen bullet train west to Hiroshima',
      'Check in at your hotel beside the station',
      'Rest of the day free in the city',
      `${DAY_MARK}Day 5 · Hiroshima and Miyajima`,
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
        day: 5,
        optional: false,
        image: img('k3sf085wsu1ruds6z7cd2ie75wj2_shutterstock_252533968.jpg'),
        description: 'The Peace Memorial Park and museum in the morning, then the ferry to Miyajima for the floating torii gate and Itsukushima shrine.'
      }
    ],
    program: {
      name: 'Hiroshima',
      description: 'Two nights beside the station, with a day that pairs the Peace Memorial Park with the island shrine at Miyajima.',
      image: img('iydw2l2uic40wgzusg1ovudevqjk_shutterstock_1514003927.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Osaka',
    subtitle: 'Osaka to Kyoto and Nara',
    dayLabel: 'Day 6 to 9',
    images: [
      img('gha64mnpiaj0sbznnq4r23wd1fid_shutterstock_1024765225.jpg'),
      img('fwucq6pta6ufuwkv79qf7vlkpar0_shutterstock_1764063716.jpg'),
      img('wj9jxfmpxk6juy7qb1ok3i9d1ae2_shutterstock_1650091249.jpg'),
      img('00skmif8mwx8yjwnjsksqqvv0qpc_shutterstock_1575106243.jpg')
    ],
    dayImages: {
      6: [
        img('1cn9ugvideqjn8iv3g10d6ahpfty_1617195992_Osaka_Science_Museum_2020_Januar.jpg'),
        img('70u3tc8xuuarz97uhxty1b2m3rmq_1617192046_6dd23e1abb0539d588045e45b7e5ddfd.jpg'),
        img('2hn59tmyw7g76wpw5js89g7jlxix_1619611599_shutterstock_560030653.jpg'),
        img('gqulgnlhs71itjrnpgi0fm1sw4t4_Kita_Umeda_District_JR_Osaka_Station-XL.jpg')
      ],
      7: [
        img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('gsoze09r8ko0sbu1ceztnf0kmd3l_shutterstock_1720970440.jpg')
      ],
      8: [
        img('dwt6ckxokuqpaeo9sopjgm2kjgnq_1617177290_castle-5476737_1920.jpg'),
        img('prlft4rmm7y6y2ja7qs3wngxt9nj_1617188433_100k1f000001gugmz756A.jpg'),
        img('5j6fefqxbxx17zmfusbgrdtk5fmt_1619611510_shutterstock_1494770918.jpg'),
        img('wkyvzo7dz46exr45w06byx2tvsw7_1617188739_Tenjinbashi-suji.jpg')
      ],
      9: [
        img('gha64mnpiaj0sbznnq4r23wd1fid_shutterstock_1024765225.jpg'),
        img('fwucq6pta6ufuwkv79qf7vlkpar0_shutterstock_1764063716.jpg'),
        img('wj9jxfmpxk6juy7qb1ok3i9d1ae2_shutterstock_1650091249.jpg'),
        img('00skmif8mwx8yjwnjsksqqvv0qpc_shutterstock_1575106243.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · On to Osaka`,
      'Breakfast and check out, then back to the station',
      'Bullet train east to Osaka',
      'Check in at your hotel near Namba',
      'Rest of the day free in the city',
      `${DAY_MARK}Day 7 · Kyoto and Nara`,
      'Breakfast, then a full day out to Kyoto and Nara',
      'Kinkaku-ji, the golden pavilion, on its pond',
      'Buffet lunch included',
      'The deer park and Todai-ji temple in Nara',
      `${DAY_MARK}Day 8 · A free day in Osaka`,
      'Breakfast and a free day in Osaka',
      'Optional: Dotonbori and the Kuromon market stalls',
      'Optional: Osaka castle and its park',
      'Optional: a day trip to Himeji or Kobe by train',
      `${DAY_MARK}Day 9 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'Private transfer to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'Sotetsu Fresa Inn Osaka Namba, Osaka',
      description: '3 nights · Breakfast · Standard room · 3★ · Clean modern hotel a short walk from Namba station',
      images: [
        img('619rl9yjm0na4vo4hgb8faf5ln2c_497756654.jpg'),
        img('s7arvqu97izqewo4bkq4gcul6689_213757825.jpg'),
        img('hi4fraga8y75micqvrh2jpulyku1_497755944.jpg'),
        img('n3ojol55mowla6feo81axnfmxkdq_497755772.jpg'),
        img('wz4zqa4ze80twru3828278mpmm5h_497756234.jpg'),
        img('78k8fyk3dtz5e1odghb11lmxfhjo_213758854.jpg'),
        img('ettodq0mer6ka6po79wcsk8axk1g_497755991.jpg'),
        img('cacze80v2769szvtlyxbmacxox48_187235246.jpg'),
        img('00y3cp35twncz6rf5oek79dmfy9o_497755662.jpg'),
        img('gi5738kv5pcqpcbjjclldf7ofina_213758813.jpg'),
        img('y22of2s5othfackw7rrozm76pozn_497756075.jpg')
      ]
    },
    activities: [
      {
        name: 'Kyoto and Nara day trip',
        day: 7,
        optional: false,
        image: img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        description: 'Kinkaku-ji, the golden pavilion, then the deer park and Todai-ji temple in Nara, with a buffet lunch and coach travel from Namba.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Three nights in Namba with a full day in Kyoto and Nara, and a free day for the food streets or a castle.',
      image: img('gha64mnpiaj0sbznnq4r23wd1fid_shutterstock_1024765225.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-japan-shrines-and-skylines',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Japan: Shrines and Skylines',
  alt: 'Lanterns at a shrine gate in Tokyo, Japan',
  days: '9 days / 8 nights',
  stations: '3 stops',
  transport: 'Shinkansen bullet train, private transfers and guided tours',
  tag: 'Best seller',
  tags: ['Culture', 'First time'],
  price: 192627,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Hiroshima', 'Miyajima', 'Osaka', 'Kyoto', 'Nara'],
  stats: { days: 9, cities: 3, hotels: 3, activities: 4, transfers: 11 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['11 transfers', 'Transport'],
    ['10 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three cities in nine days is the honest Japan. Shinjuku for the lights, Hiroshima for the quiet, Kansai for the temples.',
    quoteMore: 'The Hiroshima hotel is inside the station building, so the early train west costs you nothing in the morning.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days through three cities: Shinjuku with a city day and Mount Fuji, Hiroshima for the Peace Memorial Park and the floating torii gate at Miyajima, then Osaka with Kyoto, Nara and a free day.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 8 nights with daily breakfast; Shinkansen bullet train between Tokyo, Hiroshima and Osaka; private airport transfers; full day Tokyo city tour with lunch; Mount Fuji and Hakone day trip; Hiroshima and Miyajima tour; Kyoto and Nara day trip with buffet lunch.',
  intro2: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your Shinjuku hotel\nRest of the day free at your own pace\nOptional: the Tokyo Metropolitan Building viewing decks, free of charge', hotel: 'APA Hotel Shinjuku Kabukicho Chuo', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your Shinjuku hotel', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo city tour (B, L)', text: 'Breakfast, then a full day coach tour of the city\nMeiji shrine and the Imperial Palace gardens\nLunch included on the tour\nAsakusa and the Senso-ji temple lanes', hotel: 'APA Hotel Shinjuku Kabukicho Chuo', highlights: ['Breakfast, then a full day coach tour of the city', 'Meiji shrine and the Imperial Palace gardens', 'Lunch included on the tour'] },
    { title: 'Day 3: Mount Fuji and Hakone (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone ropeway\nBullet train back into Tokyo in the evening', hotel: 'APA Hotel Shinjuku Kabukicho Chuo', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone ropeway'] },
    { title: 'Day 4: Bullet train to Hiroshima (B)', text: 'Breakfast and check out, then transfer to the station\nShinkansen bullet train west to Hiroshima\nCheck in at your hotel beside the station\nRest of the day free in the city', hotel: 'Hotel Granvia Hiroshima', highlights: ['Breakfast and check out, then transfer to the station', 'Shinkansen bullet train west to Hiroshima', 'Check in at your hotel beside the station'] },
    { title: 'Day 5: Hiroshima and Miyajima (B)', text: 'Breakfast, then the Peace Memorial Park and museum\nThe A-Bomb Dome and the memorial cenotaph\nFerry across to Miyajima island\nThe floating torii gate and Itsukushima shrine', hotel: 'Hotel Granvia Hiroshima', highlights: ['Breakfast, then the Peace Memorial Park and museum', 'The A-Bomb Dome and the memorial cenotaph', 'Ferry across to Miyajima island'] },
    { title: 'Day 6: On to Osaka (B)', text: 'Breakfast and check out, then back to the station\nBullet train east to Osaka\nCheck in at your hotel near Namba\nRest of the day free in the city', hotel: 'Sotetsu Fresa Inn Osaka Namba', highlights: ['Breakfast and check out, then back to the station', 'Bullet train east to Osaka', 'Check in at your hotel near Namba'] },
    { title: 'Day 7: Kyoto and Nara (B, L)', text: 'Breakfast, then a full day out to Kyoto and Nara\nKinkaku-ji, the golden pavilion, on its pond\nBuffet lunch included\nThe deer park and Todai-ji temple in Nara', hotel: 'Sotetsu Fresa Inn Osaka Namba', highlights: ['Breakfast, then a full day out to Kyoto and Nara', 'Kinkaku-ji, the golden pavilion, on its pond', 'Buffet lunch included'] },
    { title: 'Day 8: A free day in Osaka (B)', text: 'Breakfast and a free day in Osaka\nOptional: Dotonbori and the Kuromon market stalls\nOptional: Osaka castle and its park\nOptional: a day trip to Himeji or Kobe by train', hotel: 'Sotetsu Fresa Inn Osaka Namba', highlights: ['Breakfast and a free day in Osaka', 'Optional: Dotonbori and the Kuromon market stalls', 'Optional: Osaka castle and its park'] },
    { title: 'Day 9: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Japan', href: '/asien/japan' },
  { label: detail.title }
];

export const bestOfJapanShrinesSkylinesBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfJapanShrinesSkylinesProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Hiroshima', 'Miyajima', 'Osaka', 'Kyoto', 'Nara'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 4,
  transfers: 11,
  meals: 10,
  price: detail.price,
  images: cardImages
};
