// Offbeat Japan Hiroshima Route. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('xwlhpz82r0k90be9vsoef19qcx6k_shutterstock_1901310499.jpg'),
  img('y15djz3hkp6h28e904ufyevchatx_shutterstock_625537166.jpg'),
  img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
  img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg'),
  img('8uer6kpve5exz099231cw3oei92e_shutterstock_58934503.jpg'),
  img('dhigogxu5pw7pj4lyvjcaw4jdrpz_shutterstock_2350324587.jpg'),
  img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
  img('oakkcbyfm7n64pmrd0m216nlmoh0_shutterstock_761090425.jpg'),
  img('t70do4sx3jrtcq2v146hmuwx11x4_shutterstock_1201440004.jpg'),
  img('nd48tylxzfdkb788tdezsrfcdr24_shutterstock_1673742691.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('xwlhpz82r0k90be9vsoef19qcx6k_shutterstock_1901310499.jpg'),
  img('dhigogxu5pw7pj4lyvjcaw4jdrpz_shutterstock_2350324587.jpg'),
  img('852ajgt1b0g8yqohozdopci32za8_shutterstock_1457990534.jpg'),
  img('5zaop0gs0hj99wclc25wthm8rhcx_Rainbow_Bridge_(Tokyo)_at_night_8.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo and Mount Fuji',
    dayLabel: 'Day 1 to 4',
    images: [
      img('xwlhpz82r0k90be9vsoef19qcx6k_shutterstock_1901310499.jpg'),
      img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg'),
      img('1yv1a968ghyiwiwbsbwvzfu388l0_shutterstock_2300479567.jpg'),
      img('9gxo0w9zfmmbmjg8895gp4h3leqm_shutterstock_1966867324.jpg')
    ],
    dayImages: {
      1: [
        img('6hzy1swk98chjdiqrq77p05ks1hp_shutterstock_402603553%20(1).jpg'),
        img('dvnb132y05sidy9r0omo9zqe0ram_15849220641_a5a96af87c_o.jpg'),
        img('5zaop0gs0hj99wclc25wthm8rhcx_Rainbow_Bridge_(Tokyo)_at_night_8.jpg'),
        img('5d8zp8rm397hfvz02jntd54oueue_8221793202_67e195e47e_o.jpg')
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
      ],
      4: [
        img('73lwr6ihkgjkyypyj9x24ukl24ym_Street%20Kart%20Tokyo%20Bay.png'),
        img('pcgbwwkgqbfu2982lragk0yyuxtt_Sumida_Park_2011.jpg'),
        img('tbzufp441ilceqhm2t56qker3mf2_image.jpg'),
        img('7v0pb5achz6hdl8vmiejhfx5ocg9_1617352304_Shinjuku_Gyoen_National_Garden.jpg')
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
      'Lake Ashi and the Hakone viewpoints',
      'Back to Tokyo by bullet train',
      `${DAY_MARK}Day 4 · A free day in Tokyo`,
      'Breakfast, then a day of your own in Tokyo',
      'Optional: the Shibuya crossing and Harajuku lanes',
      'Optional: teamLab Planets or the Skytree deck'
    ],
    accommodation: {
      name: 'Premier Hotel Cabin Shinjuku, Tokyo',
      description: '4 nights · Breakfast · Standard room · 4★ · Four star hotel in Shinjuku, a few minutes from the station',
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
      },
      {
        name: 'Mount Fuji fifth station and Hakone',
        day: 3,
        optional: false,
        image: img('39ndql7vpg0emtn4pc108qs5bzwf_shutterstock_1023211282.jpg'),
        description: 'The fifth station on Mount Fuji and Lake Ashi in Hakone, returning to Tokyo on the bullet train in the evening.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Four nights in Shinjuku with a full day city tour, Mount Fuji and Hakone, and a free day for the city.',
      image: img('xwlhpz82r0k90be9vsoef19qcx6k_shutterstock_1901310499.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Hiroshima',
    subtitle: 'Hiroshima and Miyajima',
    dayLabel: 'Day 5 to 7',
    images: [
      img('lmncb5fl0ouw8usdv7i2pp5ovnd1_shutterstock_774829150%20(1).jpg'),
      img('y15djz3hkp6h28e904ufyevchatx_shutterstock_625537166.jpg'),
      img('852ajgt1b0g8yqohozdopci32za8_shutterstock_1457990534.jpg'),
      img('jrtz4vq56xhqb8xes2py7d0u61a2_shutterstock_519395710.jpg')
    ],
    dayImages: {
      5: [
        img('xa4j0wjprpfbgrj5ex3rnmz6kd92_Hiroshima-Castle-1024x683.jpg'),
        img('xx7adpg9x8y5bh7oaxh71c9mnhvn_shukkeien_garden_hiroshima_japan_016_xl.jpg'),
        img('lmncb5fl0ouw8usdv7i2pp5ovnd1_shutterstock_774829150%20(1).jpg'),
        img('y15djz3hkp6h28e904ufyevchatx_shutterstock_625537166.jpg')
      ],
      6: [
        img('k3sf085wsu1ruds6z7cd2ie75wj2_shutterstock_252533968.jpg'),
        img('6hqk9raek422s1htdubidnhqa0h9_40003599095_3d03c153fd_o.jpg'),
        img('9lzrldxkzxmqnzanh56c0l82e2y6_30886221447_8ff83ea243_o.jpg'),
        img('rdl3mr0ytwltczrxe46lugdutz5l_52530995501_589c03192f_o.jpg')
      ],
      7: [
        img('ju6zu5tvrcbmxi95y272o71wk7gy_original%20(1).jpg'),
        img('oy28gaw2wjagsbhtsk0pe9wl48a5_pic_museum_front.jpg'),
        img('h487uqgo3o84xhzdboq1nacn67im_download%20-%202024-12-11T133716.057.png'),
        img('lmncb5fl0ouw8usdv7i2pp5ovnd1_shutterstock_774829150%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · West to Hiroshima`,
      'Breakfast and check out, then the bullet train west',
      'Check in across from Hiroshima station',
      'Rest of the day free at your own pace',
      'Optional: an evening walk along the river',
      `${DAY_MARK}Day 6 · Hiroshima and Miyajima`,
      'Breakfast, then a full day out with your guide',
      'The peace park and the memorial museum',
      'The dome left standing after 1945',
      'The ferry to Miyajima and Itsukushima shrine',
      `${DAY_MARK}Day 7 · A free day in Hiroshima`,
      'Breakfast, then a day of your own in Hiroshima',
      'Optional: Shukkeien garden and the castle',
      'Optional: okonomiyaki in the station lanes'
    ],
    accommodation: {
      name: 'APA Hiroshima Ekimae, Hiroshima',
      description: '3 nights · Breakfast · Standard room · 3★ · Simple hotel across from Hiroshima station',
      images: [
        img('ta0c43z64sxsjk1rruq3vob3lhdm_download%20-%202024-01-04T173159.642.jfif'),
        img('eh1lje05a1ad7l10ul1hfog28n2u_download%20-%202024-01-04T173353.152.jfif'),
        img('wm0nqr6eg5nqxmqww4d58m29yn4j_download%20-%202024-01-04T173248.966.jfif'),
        img('pkvgie9gv516gp3c6fv442zd45q7_download%20-%202024-01-04T173313.256.jfif'),
        img('kxpii7e0d8wsv6l2qpui8indgsbd_download%20-%202024-01-04T173242.420.jfif'),
        img('obqjzihi9hco7h2ny3tieba6ok1q_download%20-%202024-01-04T173318.414.jfif'),
        img('x2zn6bb39v7y8zz9t0w7v9adbo17_download%20-%202024-01-04T173207.449.jfif'),
        img('n37br24zt9lkbk1q3n0y2d5ugz4a_download%20-%202024-01-04T173212.698.jfif'),
        img('8vprvtp7qng1ypwhwouz09i97ev7_download%20-%202024-01-04T173325.714.jfif'),
        img('4u4xwc4pl3hdcjlokrq5s6pl6x3t_download%20-%202024-01-04T173226.086.jfif'),
        img('402wiix3jm0gsl8enghe9y6teqir_download%20-%202024-01-04T173218.121.jfif'),
        img('y0f97y0j4sb3ihgq2ply1h74r258_download%20-%202024-01-04T173303.632.jfif'),
        img('yzyzk76xtorcqhhlnw5mmcwzv24n_download%20-%202024-01-04T173256.161.jfif')
      ]
    },
    activities: [
      {
        name: 'Hiroshima and Miyajima island tour',
        day: 6,
        optional: false,
        image: img('k3sf085wsu1ruds6z7cd2ie75wj2_shutterstock_252533968.jpg'),
        description: 'The peace park, the dome left standing after 1945, then the ferry to Miyajima and the vermilion gate that stands in the water.'
      }
    ],
    program: {
      name: 'Hiroshima',
      description: 'Three nights across from the station, with the peace park and Miyajima island on the full day between.',
      image: img('lmncb5fl0ouw8usdv7i2pp5ovnd1_shutterstock_774829150%20(1).jpg')
    }
  },
  {
    letter: 'C',
    name: 'Kyoto',
    subtitle: 'Kyoto and Nara',
    dayLabel: 'Day 8 to 10',
    images: [
      img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
      img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
      img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg')
    ],
    dayImages: {
      8: [
        img('w5gzhp0v048oru3ehscbs40ketmx_5116543131_5b675904e5_o.jpg'),
        img('hgd75m8wt8dus6fzoo948x43a79q_1920px-Kyoto_National_Museum_200.jpg'),
        img('t2m2s7vbmrg4cb4h2rfkv3ugqr7l_frontpage_05_pc.jpg.webp'),
        img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg')
      ],
      9: [
        img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('gsoze09r8ko0sbu1ceztnf0kmd3l_shutterstock_1720970440.jpg')
      ],
      10: [
        img('nw809kt3nky9u7tvyxvc76ue98gy_JF4_063392.jpg'),
        img('dhue0icv67z5ii0lvwqb2w29i16b_gettyimages-509472000_tx4UVEk.jpg'),
        img('z7kchmsvf5ofta3efir0gv006ml9_3902_top.jpg'),
        img('b5y5t6gjtt7xrf6kxqmvvzh8bpgz_Maru.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · On to Kyoto`,
      'Breakfast and check out, then the train to Kyoto',
      'Check in on Shijo street',
      'Rest of the day free at your own pace',
      'Optional: an evening walk through Gion',
      `${DAY_MARK}Day 9 · Kyoto and Nara`,
      'Breakfast, then a full day out with your guide',
      'Kinkaku-ji and the shrine gates of Fushimi Inari',
      'Buffet lunch included',
      'Todai-ji and the deer park at Nara',
      `${DAY_MARK}Day 10 · A free day in Kyoto`,
      'Breakfast, then a day of your own in Kyoto',
      'Optional: the bamboo grove at Arashiyama',
      'Optional: Kiyomizu-dera and the Higashiyama lanes'
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
        day: 9,
        optional: false,
        image: img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        description: 'Kinkaku-ji and Fushimi Inari in Kyoto, then Todai-ji and the deer park at Nara, with a buffet lunch on the way.'
      }
    ],
    program: {
      name: 'Kyoto',
      description: 'Three nights on Shijo street with a full day through Kyoto and Nara, and a free day for the temples you choose.',
      image: img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Osaka',
    dayLabel: 'Day 11 to 15',
    images: [
      img('g01jqzigcq3a7lifmh3xti6bmutl_shutterstock_162338060.jpg'),
      img('rwht4ysuk6m51sfh64cy7uri0w9j_shutterstock_1764836006.jpg'),
      img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg'),
      img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg')
    ],
    dayImages: {
      11: [
        img('2hn59tmyw7g76wpw5js89g7jlxix_1619611599_shutterstock_560030653.jpg'),
        img('70u3tc8xuuarz97uhxty1b2m3rmq_1617192046_6dd23e1abb0539d588045e45b7e5ddfd.jpg'),
        img('jbkrddvnn2pgz9fmapmdkzlyuget_1617184794_tempat-wisata-di-osaka-3.jpg'),
        img('dwt6ckxokuqpaeo9sopjgm2kjgnq_1617177290_castle-5476737_1920.jpg')
      ],
      12: [
        img('is1ejpaqiwr1iwdimb7nx5ml1oja_shutterstock_1024765225.jpg'),
        img('q1ibrb7a4xu4nq4a2rql7r0u3zft_1617177625_river-5572289_1920.jpg'),
        img('nozs79tjbgfixymgrh3voo9bhf1z_Osaka_Dotonbori_Ebisu_Bridge.jpg'),
        img('8fd2fbhoaurwbsxmgzdldygvuzk4_53207269026_e76f09ed3d_o.jpg')
      ],
      13: [
        img('th13xucm57k9awbq3opc7a3p0ny8_Universal%20Studios,%20Japan%207.jpg'),
        img('dzrrvkhl3x0bs4kcwkfqceusw3fe_1617186371_1200px-USJ_5years.jpg'),
        img('g01jqzigcq3a7lifmh3xti6bmutl_shutterstock_162338060.jpg'),
        img('rwht4ysuk6m51sfh64cy7uri0w9j_shutterstock_1764836006.jpg')
      ],
      14: [
        img('bymtnmlbs6j35oge4c0k34d9c30m_gallery01.jpg'),
        img('80zahc6zqm4v0vjq2gdgwatc0glm_1617185962_Abe-no-Harukasu.jpg'),
        img('8eqfd09dtnyk0o5zl4ckmcl3qcjv_teamLab%20Botanical%20Garden%20Osaka%20(1).png'),
        img('i7nrvo8z1e7l0al6blhkoqjixwpa_shinsekai.jpg')
      ],
      15: [
        img('g01jqzigcq3a7lifmh3xti6bmutl_shutterstock_162338060.jpg'),
        img('rwht4ysuk6m51sfh64cy7uri0w9j_shutterstock_1764836006.jpg'),
        img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg'),
        img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 11 · On to Osaka`,
      'Breakfast and check out, then the short hop to Osaka',
      'Check in near Namba',
      'Rest of the day free in the city',
      'Optional: an evening along the Dotonbori canal',
      `${DAY_MARK}Day 12 · Osaka on foot`,
      'Breakfast, then a half day walking tour of Osaka',
      'Dotonbori and the Kuromon market stalls',
      'The lanes around Shinsekai with your guide',
      'Afternoon free in the city',
      `${DAY_MARK}Day 13 · Universal Studios Japan`,
      'Early breakfast, then across to Universal Studios Japan',
      'Tickets included for the full day',
      'Super Nintendo World and the Harry Potter area',
      'Evening free in the city',
      `${DAY_MARK}Day 14 · A free day in Osaka`,
      'Breakfast, then a day of your own in Osaka',
      'Optional: Osaka castle and its park',
      'Optional: the aquarium at Osaka Bay',
      `${DAY_MARK}Day 15 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'Private transfer to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'Richmond Hotel Namba Daikokucho, Osaka',
      description: '4 nights · Breakfast · Standard room · 3★ · Well run hotel near Namba, two subway stops from Dotonbori',
      images: [
        img('o5z6i29uvpe9pfpzpcap52juxlba_Osaka4.jpg'),
        img('zlchn5e80bwx7udlhn5l1zp10z9y_Osaka2.jpg'),
        img('h9m078psd5kl3171l5vr0rcd8m7n_Osaka5.jpg'),
        img('i0vk8asa9da53zb0v0i51r0vew0s_Osaka1.jpg'),
        img('bt46asteiepzpl84gstomkgq0ew5_Osaka0.jpg'),
        img('mngyig2cj98qt5ictqkqk7tudd7c_Osaka3.jpg'),
        img('sve4kf8uih2z5dnp490wmfzclfx9_Osaka.jpg')
      ]
    },
    activities: [
      {
        name: 'Osaka half day walking tour',
        day: 12,
        optional: false,
        image: img('is1ejpaqiwr1iwdimb7nx5ml1oja_shutterstock_1024765225.jpg'),
        description: 'Half a day on foot through Dotonbori, the Kuromon market and the lanes around Shinsekai with a guide who knows where to eat.'
      },
      {
        name: 'Universal Studios Japan',
        day: 13,
        optional: false,
        image: img('th13xucm57k9awbq3opc7a3p0ny8_Universal%20Studios,%20Japan%207.jpg'),
        description: 'A full day at Universal Studios Japan with tickets included, home to Super Nintendo World and the Harry Potter area.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Four nights near Namba to finish, with a walking tour, Universal Studios Japan and a free day.',
      image: img('g01jqzigcq3a7lifmh3xti6bmutl_shutterstock_162338060.jpg')
    }
  }
];

const detail = {
  slug: 'offbeat-japan-hiroshima-route',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Offbeat Japan Hiroshima Route',
  alt: 'Floating torii gate at Miyajima island near Hiroshima',
  days: '15 days / 14 nights',
  stations: '4 stops',
  transport: 'Bullet trains, a ferry to Miyajima and guided day tours',
  tag: 'Grand tour',
  tags: ['Culture', 'Grand tour'],
  price: 279785,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Hakone', 'Hiroshima', 'Miyajima', 'Kyoto', 'Nara', 'Osaka'],
  stats: { days: 15, cities: 4, hotels: 4, activities: 6, transfers: 18 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['18 transfers', 'Transport'],
    ['16 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Fifteen days with three nights in Hiroshima, which almost no itinerary gives you. It changes the trip.',
    quoteMore: 'Keep the free Hiroshima day for Shukkeien garden in the morning and okonomiyaki in the station lanes at night.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Fifteen unhurried days through four cities: four nights in Shinjuku with a city tour and Mount Fuji, three in Hiroshima for the peace park and Miyajima island, three in Kyoto with a Kyoto and Nara day, then four in Osaka with a walking tour and Universal Studios Japan.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 14 nights with daily breakfast; bullet trains between the cities; private airport transfers; a full day of guided sightseeing in Tokyo with lunch; the Mount Fuji fifth station and Lake Ashi, returning by bullet train; a guided day through the Hiroshima peace park with the ferry to Miyajima; a guided day through Kyoto and Nara with a buffet lunch; a guided walk through central Osaka; admission to Universal Studios Japan.',
  intro2: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your Shinjuku hotel\nRest of the day free at your own pace\nOptional: the Tokyo Metropolitan Building viewing decks, free of charge', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your Shinjuku hotel', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo city tour (B, L)', text: 'Breakfast, then a full day coach tour of the city\nMeiji shrine and the Imperial Palace gardens\nLunch included on the tour\nAsakusa and the Senso-ji temple lanes', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Breakfast, then a full day coach tour of the city', 'Meiji shrine and the Imperial Palace gardens', 'Lunch included on the tour'] },
    { title: 'Day 3: Mount Fuji and Hakone (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone viewpoints\nBack to Tokyo by bullet train', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone viewpoints'] },
    { title: 'Day 4: A free day in Tokyo (B)', text: 'Breakfast, then a day of your own in Tokyo\nOptional: the Shibuya crossing and Harajuku lanes\nOptional: teamLab Planets or the Skytree deck', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Breakfast, then a day of your own in Tokyo', 'Optional: the Shibuya crossing and Harajuku lanes', 'Optional: teamLab Planets or the Skytree deck'] },
    { title: 'Day 5: West to Hiroshima (B)', text: 'Breakfast and check out, then the bullet train west\nCheck in across from Hiroshima station\nRest of the day free at your own pace\nOptional: an evening walk along the river', hotel: 'APA Hiroshima Ekimae', highlights: ['Breakfast and check out, then the bullet train west', 'Check in across from Hiroshima station', 'Rest of the day free at your own pace'] },
    { title: 'Day 6: Hiroshima and Miyajima (B)', text: 'Breakfast, then a full day out with your guide\nThe peace park and the memorial museum\nThe dome left standing after 1945\nThe ferry to Miyajima and Itsukushima shrine', hotel: 'APA Hiroshima Ekimae', highlights: ['Breakfast, then a full day out with your guide', 'The peace park and the memorial museum', 'The dome left standing after 1945'] },
    { title: 'Day 7: A free day in Hiroshima (B)', text: 'Breakfast, then a day of your own in Hiroshima\nOptional: Shukkeien garden and the castle\nOptional: okonomiyaki in the station lanes', hotel: 'APA Hiroshima Ekimae', highlights: ['Breakfast, then a day of your own in Hiroshima', 'Optional: Shukkeien garden and the castle', 'Optional: okonomiyaki in the station lanes'] },
    { title: 'Day 8: On to Kyoto (B)', text: 'Breakfast and check out, then the train to Kyoto\nCheck in on Shijo street\nRest of the day free at your own pace\nOptional: an evening walk through Gion', hotel: 'ibis Styles Kyoto Shijo', highlights: ['Breakfast and check out, then the train to Kyoto', 'Check in on Shijo street', 'Rest of the day free at your own pace'] },
    { title: 'Day 9: Kyoto and Nara (B, L)', text: 'Breakfast, then a full day out with your guide\nKinkaku-ji and the shrine gates of Fushimi Inari\nBuffet lunch included\nTodai-ji and the deer park at Nara', hotel: 'ibis Styles Kyoto Shijo', highlights: ['Breakfast, then a full day out with your guide', 'Kinkaku-ji and the shrine gates of Fushimi Inari', 'Buffet lunch included'] },
    { title: 'Day 10: A free day in Kyoto (B)', text: 'Breakfast, then a day of your own in Kyoto\nOptional: the bamboo grove at Arashiyama\nOptional: Kiyomizu-dera and the Higashiyama lanes', hotel: 'ibis Styles Kyoto Shijo', highlights: ['Breakfast, then a day of your own in Kyoto', 'Optional: the bamboo grove at Arashiyama', 'Optional: Kiyomizu-dera and the Higashiyama lanes'] },
    { title: 'Day 11: On to Osaka (B)', text: 'Breakfast and check out, then the short hop to Osaka\nCheck in near Namba\nRest of the day free in the city\nOptional: an evening along the Dotonbori canal', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast and check out, then the short hop to Osaka', 'Check in near Namba', 'Rest of the day free in the city'] },
    { title: 'Day 12: Osaka on foot (B)', text: 'Breakfast, then a half day walking tour of Osaka\nDotonbori and the Kuromon market stalls\nThe lanes around Shinsekai with your guide\nAfternoon free in the city', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast, then a half day walking tour of Osaka', 'Dotonbori and the Kuromon market stalls', 'The lanes around Shinsekai with your guide'] },
    { title: 'Day 13: Universal Studios Japan (B)', text: 'Early breakfast, then across to Universal Studios Japan\nTickets included for the full day\nSuper Nintendo World and the Harry Potter area\nEvening free in the city', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Early breakfast, then across to Universal Studios Japan', 'Tickets included for the full day', 'Super Nintendo World and the Harry Potter area'] },
    { title: 'Day 14: A free day in Osaka (B)', text: 'Breakfast, then a day of your own in Osaka\nOptional: Osaka castle and its park\nOptional: the aquarium at Osaka Bay', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast, then a day of your own in Osaka', 'Optional: Osaka castle and its park', 'Optional: the aquarium at Osaka Bay'] },
    { title: 'Day 15: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const offbeatJapanHiroshimaRouteBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const offbeatJapanHiroshimaRouteProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Hakone', 'Hiroshima', 'Miyajima', 'Kyoto', 'Nara', 'Osaka'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 15,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 6,
  transfers: 18,
  meals: 16,
  price: detail.price,
  images: cardImages
};
