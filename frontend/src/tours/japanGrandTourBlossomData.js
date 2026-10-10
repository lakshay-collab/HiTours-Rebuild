// Japan Grand Tour with Blossom and City Lights. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('8uer6kpve5exz099231cw3oei92e_shutterstock_58934503.jpg'),
  img('73svf06vwzmwzz5c9z7jwb9v8vjw_shutterstock_1751063663.jpg'),
  img('g8f2aex4vg106e8wh3k0x1np7hov_shutterstock_382909786.jpg'),
  img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg'),
  img('bphn1d1cyqbrowbqsvsas9azq6v4_shutterstock_252533968.jpg'),
  img('ak7a5cwtaszfalvktkldmcm7rnm0_shutterstock_2321474899.jpg'),
  img('8a1guib4pdk1t3rfaoo9h6fki7xm_shutterstock_637507525.jpg'),
  img('y15djz3hkp6h28e904ufyevchatx_shutterstock_625537166.jpg'),
  img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg'),
  img('61izsuekzybkh86q2bvapmbmyrlt_shutterstock_355725083.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('8uer6kpve5exz099231cw3oei92e_shutterstock_58934503.jpg'),
  img('bphn1d1cyqbrowbqsvsas9azq6v4_shutterstock_252533968.jpg'),
  img('s5n4t57ymv7th4yg1bqkxh3xe7gn_shutterstock_1514003930.jpg'),
  img('39ndql7vpg0emtn4pc108qs5bzwf_shutterstock_1023211282.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji and Disneyland',
    dayLabel: 'Day 1 to 4',
    images: [
      img('8uer6kpve5exz099231cw3oei92e_shutterstock_58934503.jpg'),
      img('wkz3rsmvvlhs2o7orc70p6masz8g_shutterstock_2248287787.jpg'),
      img('a74yrec3cxa5xj70wfrgwnxkyusd_shutterstock_1666322071.jpg'),
      img('re7iw91kyn2u863knugl7cr3ojwm_shutterstock_2301094731.jpg')
    ],
    dayImages: {
      1: [
        img('6hzy1swk98chjdiqrq77p05ks1hp_shutterstock_402603553%20(1).jpg'),
        img('dvnb132y05sidy9r0omo9zqe0ram_15849220641_a5a96af87c_o.jpg'),
        img('5d8zp8rm397hfvz02jntd54oueue_8221793202_67e195e47e_o.jpg'),
        img('f2lk3tg5wuhz3cdk1tnn750xqw31_4484_1_1400x1100.jpg')
      ],
      2: [
        img('39ndql7vpg0emtn4pc108qs5bzwf_shutterstock_1023211282.jpg'),
        img('mq1b6y8xt0nbhdf5ntp9hisjpp76_6922_01.jpg'),
        img('4ijejmm9p326y1f1f6t762u0izb6_shutterstock_1303030627%20(1).jpg'),
        img('9hdwl7e2hucnek1jhe8l9hwk9s9m_OWAKUDANI%20VALLEY.png')
      ],
      3: [
        img('oj5eocvwd5au1vpfuazquva3pcc9_shutterstock_1524921077.jpg'),
        img('kcoy8gk8ex5maofxb4mqnkm4psfx_shutterstock_2280133521.jpg'),
        img('iau3aw776fn443su99n2scmo27vl_25899482056_b1e61a167c_k.jpg'),
        img('0au3urvu530f5lbontv6ju088ggy_1619590602_shutterstock_1729078399.jpg')
      ],
      4: [
        img('ao7v7y8hbcokyqpnc5q5vhmsfa0f_mainL_01%20(1).jpg'),
        img('8l3nfuzgvhuh0eyewnb0gav1t7w8_1617351605_mickey-mause-832112_1920.jpg'),
        img('8uer6kpve5exz099231cw3oei92e_shutterstock_58934503.jpg'),
        img('wkz3rsmvvlhs2o7orc70p6masz8g_shutterstock_2248287787.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Tokyo`,
      'Arrival at Narita or Haneda and transfer to your hotel',
      'Check in at your Shinjuku hotel',
      'Rest of the day free at your own pace',
      'Optional: the Tokyo Metropolitan Building viewing decks, free of charge',
      `${DAY_MARK}Day 2 · Mount Fuji and Hakone`,
      'Breakfast, then out of the city towards Mount Fuji',
      'The fifth station on the mountain, weather permitting',
      'Lake Ashi and the Hakone ropeway',
      'Bullet train back into Tokyo in the evening',
      `${DAY_MARK}Day 3 · Tokyo city tour`,
      'Breakfast, then a full day coach tour of the city',
      'Meiji shrine and the Imperial Palace gardens',
      'Lunch included on the tour',
      'Asakusa and the Senso-ji temple lanes',
      `${DAY_MARK}Day 4 · Tokyo Disneyland`,
      'Early breakfast, then across to Tokyo Disneyland',
      'Admission tickets included for the full day',
      'Evening free back in Shinjuku'
    ],
    accommodation: {
      name: 'APA Hotel Shinjuku Kabukicho Chuo, Tokyo',
      description: '4 nights · Breakfast · Standard room · 3★ · Well placed hotel in Shinjuku, minutes from the station',
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
        name: 'Mount Fuji and Hakone day trip',
        day: 2,
        optional: false,
        image: img('39ndql7vpg0emtn4pc108qs5bzwf_shutterstock_1023211282.jpg'),
        description: 'The fifth station on Mount Fuji, Lake Ashi and the Hakone ropeway, with the bullet train back into Tokyo in the evening.'
      },
      {
        name: 'Tokyo city tour with lunch',
        day: 3,
        optional: false,
        image: img('oj5eocvwd5au1vpfuazquva3pcc9_shutterstock_1524921077.jpg'),
        description: 'A full day by coach from the LOVE statue in Shinjuku through Meiji shrine, the Imperial Palace gardens and Asakusa, with lunch included.'
      },
      {
        name: 'Tokyo Disneyland',
        day: 4,
        optional: false,
        image: img('ao7v7y8hbcokyqpnc5q5vhmsfa0f_mainL_01%20(1).jpg'),
        description: 'A full day at Tokyo Disneyland with your admission tickets included, so you can be at the gates when the park opens.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Four nights in Shinjuku with Mount Fuji and Hakone first, then a full city day and a day at Disneyland.',
      image: img('8uer6kpve5exz099231cw3oei92e_shutterstock_58934503.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Hiroshima',
    subtitle: 'Hiroshima to Miyajima',
    dayLabel: 'Day 5 to 6',
    images: [
      img('s5n4t57ymv7th4yg1bqkxh3xe7gn_shutterstock_1514003930.jpg'),
      img('73svf06vwzmwzz5c9z7jwb9v8vjw_shutterstock_1751063663.jpg'),
      img('iydw2l2uic40wgzusg1ovudevqjk_shutterstock_1514003927.jpg'),
      img('62uzveq9j4kgn1dqm9wgyg6n0zg3_shutterstock_1443072128.jpg')
    ],
    dayImages: {
      5: [
        img('xa4j0wjprpfbgrj5ex3rnmz6kd92_Hiroshima-Castle-1024x683.jpg'),
        img('xx7adpg9x8y5bh7oaxh71c9mnhvn_shukkeien_garden_hiroshima_japan_016_xl.jpg'),
        img('s5n4t57ymv7th4yg1bqkxh3xe7gn_shutterstock_1514003930.jpg'),
        img('73svf06vwzmwzz5c9z7jwb9v8vjw_shutterstock_1751063663.jpg')
      ],
      6: [
        img('k3sf085wsu1ruds6z7cd2ie75wj2_shutterstock_252533968.jpg'),
        img('6hqk9raek422s1htdubidnhqa0h9_40003599095_3d03c153fd_o.jpg'),
        img('9lzrldxkzxmqnzanh56c0l82e2y6_30886221447_8ff83ea243_o.jpg'),
        img('rdl3mr0ytwltczrxe46lugdutz5l_52530995501_589c03192f_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Bullet train to Hiroshima`,
      'Breakfast and check out, then transfer to the station',
      'Shinkansen bullet train west to Hiroshima',
      'Check in at your hotel beside the station',
      'Rest of the day free in the city',
      `${DAY_MARK}Day 6 · Hiroshima and Miyajima`,
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
        day: 6,
        optional: false,
        image: img('k3sf085wsu1ruds6z7cd2ie75wj2_shutterstock_252533968.jpg'),
        description: 'The Peace Memorial Park and museum in the morning, then the ferry to Miyajima for the floating torii gate and Itsukushima shrine.'
      }
    ],
    program: {
      name: 'Hiroshima',
      description: 'Two nights beside the station, with a free arrival day and the Peace Memorial Park paired with the island shrine.',
      image: img('s5n4t57ymv7th4yg1bqkxh3xe7gn_shutterstock_1514003930.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Osaka',
    subtitle: 'Osaka to Kyoto, Nara and Universal Studios',
    dayLabel: 'Day 7 to 12',
    images: [
      img('va7tu5iex0enjnq9uaqnfyufkowl_shutterstock_507147964%20(1).jpg'),
      img('i7pvmoa5sgm8ekkupu1tyd6owiiv_shutterstock_2025119165.jpg'),
      img('g8f2aex4vg106e8wh3k0x1np7hov_shutterstock_382909786.jpg'),
      img('bsns0t5k33qyabozvyhlfjfdcxg5_shutterstock_287934032.jpg')
    ],
    dayImages: {
      7: [
        img('2hn59tmyw7g76wpw5js89g7jlxix_1619611599_shutterstock_560030653.jpg'),
        img('1cn9ugvideqjn8iv3g10d6ahpfty_1617195992_Osaka_Science_Museum_2020_Januar.jpg'),
        img('jbkrddvnn2pgz9fmapmdkzlyuget_1617184794_tempat-wisata-di-osaka-3.jpg'),
        img('va7tu5iex0enjnq9uaqnfyufkowl_shutterstock_507147964%20(1).jpg')
      ],
      8: [
        img('is1ejpaqiwr1iwdimb7nx5ml1oja_shutterstock_1024765225.jpg'),
        img('q1ibrb7a4xu4nq4a2rql7r0u3zft_1617177625_river-5572289_1920.jpg'),
        img('nozs79tjbgfixymgrh3voo9bhf1z_Osaka_Dotonbori_Ebisu_Bridge.jpg'),
        img('8fd2fbhoaurwbsxmgzdldygvuzk4_53207269026_e76f09ed3d_o.jpg')
      ],
      9: [
        img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('gsoze09r8ko0sbu1ceztnf0kmd3l_shutterstock_1720970440.jpg')
      ],
      10: [
        img('th13xucm57k9awbq3opc7a3p0ny8_Universal%20Studios,%20Japan%207.jpg'),
        img('dzrrvkhl3x0bs4kcwkfqceusw3fe_1617186371_1200px-USJ_5years.jpg'),
        img('va7tu5iex0enjnq9uaqnfyufkowl_shutterstock_507147964%20(1).jpg'),
        img('i7pvmoa5sgm8ekkupu1tyd6owiiv_shutterstock_2025119165.jpg')
      ],
      11: [
        img('bymtnmlbs6j35oge4c0k34d9c30m_gallery01.jpg'),
        img('80zahc6zqm4v0vjq2gdgwatc0glm_1617185962_Abe-no-Harukasu.jpg'),
        img('8eqfd09dtnyk0o5zl4ckmcl3qcjv_teamLab%20Botanical%20Garden%20Osaka%20(1).png'),
        img('i7nrvo8z1e7l0al6blhkoqjixwpa_shinsekai.jpg')
      ],
      12: [
        img('va7tu5iex0enjnq9uaqnfyufkowl_shutterstock_507147964%20(1).jpg'),
        img('i7pvmoa5sgm8ekkupu1tyd6owiiv_shutterstock_2025119165.jpg'),
        img('g8f2aex4vg106e8wh3k0x1np7hov_shutterstock_382909786.jpg'),
        img('bsns0t5k33qyabozvyhlfjfdcxg5_shutterstock_287934032.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · On to Osaka`,
      'Breakfast and check out, then back to the station',
      'Bullet train east to Osaka',
      'Check in at your hotel in the centre',
      'Rest of the day free in the city',
      `${DAY_MARK}Day 8 · Osaka on foot`,
      'Breakfast, then a half day walking tour of Osaka',
      'Dotonbori and the Kuromon market stalls',
      'The lanes around Shinsekai with your guide',
      'Afternoon free in the city',
      `${DAY_MARK}Day 9 · Kyoto and Nara`,
      'Breakfast, then a full day out to Kyoto and Nara',
      'Kinkaku-ji, the golden pavilion, on its pond',
      'Buffet lunch included',
      'The deer park and Todai-ji temple in Nara',
      `${DAY_MARK}Day 10 · Universal Studios Japan`,
      'Early breakfast, then across to Universal Studios Japan',
      'Tickets included for the full day',
      'Super Nintendo World and the Harry Potter area',
      'Evening free in the city',
      `${DAY_MARK}Day 11 · A free day in Osaka`,
      'Breakfast and a free day in Osaka',
      'Optional: Osaka castle and its park',
      'Optional: a day trip to Himeji or Kobe by train',
      'Optional: the aquarium at Osaka Bay',
      `${DAY_MARK}Day 12 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'Private transfer to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'Hotel Resol Trinity Osaka, Osaka',
      description: '5 nights · Breakfast · Standard room · 4★ · Four star hotel in central Osaka, near Sakaisuji Honmachi',
      images: [
        img('tfxenphcq96mgb3xivcxgfjeht6k_457487645.jpg'),
        img('8ygzec76ix7kn647aypmywjbreg9_457491756.jpg'),
        img('959u6rzco6m07pdzi3ko39yqri97_457491493.jpg'),
        img('3xgcfvyxzlgbl684c57v5qeghy3y_457491620.jpg'),
        img('px079rhnccuq5c4mfozebpr30qki_515429801.jpg'),
        img('393ftl808m7qw1a8qalrq15yi5pp_457491737.jpg'),
        img('06wzhpr7h8xquk3gwl09653ct5jm_467938772.jpg'),
        img('2w6rpch35pwrwhroiwwyrsdjdiiq_caption%20(1).jpg'),
        img('w9a60o0e34k5o239fw1uvcu4unpe_513709587.jpg'),
        img('iiqyt9ipl2udcfeina7ecn6fok7k_457491446.jpg')
      ]
    },
    activities: [
      {
        name: 'Osaka walking tour',
        day: 8,
        optional: false,
        image: img('is1ejpaqiwr1iwdimb7nx5ml1oja_shutterstock_1024765225.jpg'),
        description: 'Half a day on foot through Dotonbori, the Kuromon market and the lanes around Shinsekai with a guide who knows where to eat.'
      },
      {
        name: 'Kyoto and Nara with buffet lunch',
        day: 9,
        optional: false,
        image: img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        description: 'Kinkaku-ji, the golden pavilion, then the deer park and Todai-ji temple in Nara, with a buffet lunch and coach travel from Namba.'
      },
      {
        name: 'Universal Studios Japan',
        day: 10,
        optional: false,
        image: img('th13xucm57k9awbq3opc7a3p0ny8_Universal%20Studios,%20Japan%207.jpg'),
        description: 'A full day at Universal Studios Japan with tickets included, home to Super Nintendo World and the Harry Potter area.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Five nights in one hotel with a walking tour, Kyoto and Nara, Universal Studios Japan and a free day before you fly home.',
      image: img('va7tu5iex0enjnq9uaqnfyufkowl_shutterstock_507147964%20(1).jpg')
    }
  }
];

const detail = {
  slug: 'japan-grand-tour-with-blossom-and-city-lights',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Japan Grand Tour with Blossom and City Lights',
  alt: 'Cherry blossom along a canal with city towers behind, Japan',
  days: '12 days / 11 nights',
  stations: '3 stops',
  transport: 'Shinkansen bullet train, private transfers and guided tours',
  tag: 'Grand tour',
  tags: ['Culture', 'Family'],
  price: 273386,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Disneyland', 'Hiroshima', 'Miyajima', 'Osaka', 'Kyoto', 'Nara'],
  stats: { days: 12, cities: 3, hotels: 3, activities: 7, transfers: 15 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['15 transfers', 'Transport'],
    ['13 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Twelve days means you can put Fuji on day two and still have a free day at the end. Nothing is rushed.',
    quoteMore: 'Taking Mount Fuji early is deliberate: if the cloud sits low we can swap it with the city day and you still get the mountain.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Twelve days across three cities: four nights in Shinjuku with Mount Fuji, a city tour and Tokyo Disneyland, two in Hiroshima for the Peace Memorial Park and Miyajima, then five in Osaka with a walking tour, Kyoto and Nara, Universal Studios and a free day.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 11 nights with daily breakfast; bullet train between Tokyo, Hiroshima and Osaka; private airport transfers; Mount Fuji and Hakone day trip; full day Tokyo city tour with lunch; Tokyo Disneyland tickets; Hiroshima and Miyajima tour; Osaka half day walking tour; Kyoto and Nara day trip with buffet lunch; Universal Studios Japan tickets.',
  intro2: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your Shinjuku hotel\nRest of the day free at your own pace\nOptional: the Tokyo Metropolitan Building viewing decks, free of charge', hotel: 'APA Hotel Shinjuku Kabukicho Chuo', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your Shinjuku hotel', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Mount Fuji and Hakone (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone ropeway\nBullet train back into Tokyo in the evening', hotel: 'APA Hotel Shinjuku Kabukicho Chuo', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone ropeway'] },
    { title: 'Day 3: Tokyo city tour (B, L)', text: 'Breakfast, then a full day coach tour of the city\nMeiji shrine and the Imperial Palace gardens\nLunch included on the tour\nAsakusa and the Senso-ji temple lanes', hotel: 'APA Hotel Shinjuku Kabukicho Chuo', highlights: ['Breakfast, then a full day coach tour of the city', 'Meiji shrine and the Imperial Palace gardens', 'Lunch included on the tour'] },
    { title: 'Day 4: Tokyo Disneyland (B)', text: 'Early breakfast, then across to Tokyo Disneyland\nAdmission tickets included for the full day\nEvening free back in Shinjuku', hotel: 'APA Hotel Shinjuku Kabukicho Chuo', highlights: ['Early breakfast, then across to Tokyo Disneyland', 'Admission tickets included for the full day', 'Evening free back in Shinjuku'] },
    { title: 'Day 5: Bullet train to Hiroshima (B)', text: 'Breakfast and check out, then transfer to the station\nShinkansen bullet train west to Hiroshima\nCheck in at your hotel beside the station\nRest of the day free in the city', hotel: 'Hotel Granvia Hiroshima', highlights: ['Breakfast and check out, then transfer to the station', 'Shinkansen bullet train west to Hiroshima', 'Check in at your hotel beside the station'] },
    { title: 'Day 6: Hiroshima and Miyajima (B)', text: 'Breakfast, then the Peace Memorial Park and museum\nThe A-Bomb Dome and the memorial cenotaph\nFerry across to Miyajima island\nThe floating torii gate and Itsukushima shrine', hotel: 'Hotel Granvia Hiroshima', highlights: ['Breakfast, then the Peace Memorial Park and museum', 'The A-Bomb Dome and the memorial cenotaph', 'Ferry across to Miyajima island'] },
    { title: 'Day 7: On to Osaka (B)', text: 'Breakfast and check out, then back to the station\nBullet train east to Osaka\nCheck in at your hotel in the centre\nRest of the day free in the city', hotel: 'Hotel Resol Trinity Osaka', highlights: ['Breakfast and check out, then back to the station', 'Bullet train east to Osaka', 'Check in at your hotel in the centre'] },
    { title: 'Day 8: Osaka on foot (B)', text: 'Breakfast, then a half day walking tour of Osaka\nDotonbori and the Kuromon market stalls\nThe lanes around Shinsekai with your guide\nAfternoon free in the city', hotel: 'Hotel Resol Trinity Osaka', highlights: ['Breakfast, then a half day walking tour of Osaka', 'Dotonbori and the Kuromon market stalls', 'The lanes around Shinsekai with your guide'] },
    { title: 'Day 9: Kyoto and Nara (B, L)', text: 'Breakfast, then a full day out to Kyoto and Nara\nKinkaku-ji, the golden pavilion, on its pond\nBuffet lunch included\nThe deer park and Todai-ji temple in Nara', hotel: 'Hotel Resol Trinity Osaka', highlights: ['Breakfast, then a full day out to Kyoto and Nara', 'Kinkaku-ji, the golden pavilion, on its pond', 'Buffet lunch included'] },
    { title: 'Day 10: Universal Studios Japan (B)', text: 'Early breakfast, then across to Universal Studios Japan\nTickets included for the full day\nSuper Nintendo World and the Harry Potter area\nEvening free in the city', hotel: 'Hotel Resol Trinity Osaka', highlights: ['Early breakfast, then across to Universal Studios Japan', 'Tickets included for the full day', 'Super Nintendo World and the Harry Potter area'] },
    { title: 'Day 11: A free day in Osaka (B)', text: 'Breakfast and a free day in Osaka\nOptional: Osaka castle and its park\nOptional: a day trip to Himeji or Kobe by train\nOptional: the aquarium at Osaka Bay', hotel: 'Hotel Resol Trinity Osaka', highlights: ['Breakfast and a free day in Osaka', 'Optional: Osaka castle and its park', 'Optional: a day trip to Himeji or Kobe by train'] },
    { title: 'Day 12: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const japanGrandTourBlossomBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const japanGrandTourBlossomProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Disneyland', 'Hiroshima', 'Miyajima', 'Osaka', 'Kyoto', 'Nara'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 12,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 7,
  transfers: 15,
  meals: 13,
  price: detail.price,
  images: cardImages
};
