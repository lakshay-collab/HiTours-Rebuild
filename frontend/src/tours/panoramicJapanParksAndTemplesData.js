// Panoramic Japan Parks and Temples. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg'),
  img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
  img('fo7gecjnwvtcg8ygpphrauwfv1te_shutterstock_668037958.jpg'),
  img('7z6zke7b8kmw08mkqkclicf3rawn_shutterstock_310072442.jpg'),
  img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
  img('ej15n5xfj2cb7mr009esga4oml0w_shutterstock_1370574332.jpg'),
  img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg'),
  img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
  img('j2yajxhi3hugp224iylhhjo0vdn4_shutterstock_2354853383.jpg'),
  img('8uer6kpve5exz099231cw3oei92e_shutterstock_58934503.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg'),
  img('iele7cut7wosbp83440c5yyy4663_shutterstock_666196894.jpg'),
  img('e5f438umy5kix56t1stawpi928a0_1618899525_shutterstock_1427133110.jpg'),
  img('ao7v7y8hbcokyqpnc5q5vhmsfa0f_mainL_01%20(1).jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo, Mount Fuji and the Disney parks',
    dayLabel: 'Day 1 to 6',
    images: [
      img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg'),
      img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg'),
      img('gj78fz8c0ymqhf34svyaxlbyx6e2_shutterstock_1017018754%20(1).jpg'),
      img('xhgc9a10q89566kee3xewg2tdxbu_shutterstock_245037472.jpg')
    ],
    dayImages: {
      1: [
        img('iele7cut7wosbp83440c5yyy4663_shutterstock_666196894.jpg'),
        img('f2lk3tg5wuhz3cdk1tnn750xqw31_4484_1_1400x1100.jpg'),
        img('e5f438umy5kix56t1stawpi928a0_1618899525_shutterstock_1427133110.jpg'),
        img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg')
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
        img('ao7v7y8hbcokyqpnc5q5vhmsfa0f_mainL_01%20(1).jpg'),
        img('8l3nfuzgvhuh0eyewnb0gav1t7w8_1617351605_mickey-mause-832112_1920.jpg'),
        img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg'),
        img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg')
      ],
      5: [
        img('eyli0vjkur81nvicqy9zm5k5n56h_disneysea%201%20-%20Fortress%20Explorations.jpg'),
        img('18y3l04pv21bddj0wfbe5b2zdicy_tokyo-disneysea.png'),
        img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg'),
        img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg')
      ],
      6: [
        img('eza7pai0tuvls4yy7l1nf1h52ioz_1617362184_Edo-Tokyo_Museum.jpg'),
        img('niw86i1a8r1u1szdy86zzg506wbs_7802055432_10eee8a1e2_o.jpg'),
        img('jiig0t533s2mlh69taq29l4juz48_Kabuki-za_Theatre_2013_1125.jpg'),
        img('jlkstwh18usdjddohot9ti3p2z7r_1618899250_shutterstock_198478373.jpg')
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
      `${DAY_MARK}Day 4 · Tokyo Disneyland`,
      'Early breakfast, then across to Tokyo Disneyland',
      'Admission tickets included for the full day',
      'Evening free back in Shinjuku',
      `${DAY_MARK}Day 5 · Tokyo DisneySea`,
      'Early breakfast, then across to Tokyo DisneySea',
      'A one day passport, included',
      'Evening free back in Shinjuku',
      `${DAY_MARK}Day 6 · A free day in Tokyo`,
      'Breakfast, then a day of your own in Tokyo',
      'Optional: the Shibuya crossing and Harajuku lanes',
      'Optional: teamLab Planets or the Skytree deck'
    ],
    accommodation: {
      name: 'Premier Hotel Cabin Shinjuku, Tokyo',
      description: '6 nights · Breakfast · Standard room · 4★ · Four star hotel in Shinjuku, a few minutes from the station',
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
        name: 'Mount Fuji and Hakone by bullet train',
        day: 3,
        optional: false,
        image: img('39ndql7vpg0emtn4pc108qs5bzwf_shutterstock_1023211282.jpg'),
        description: 'The fifth station on Mount Fuji and Lake Ashi in Hakone, returning to Tokyo on the bullet train in the evening.'
      },
      {
        name: 'Tokyo Disneyland',
        day: 4,
        optional: false,
        image: img('ao7v7y8hbcokyqpnc5q5vhmsfa0f_mainL_01%20(1).jpg'),
        description: 'A full day at Tokyo Disneyland with your admission tickets included, so you can be at the gates when the park opens.'
      },
      {
        name: 'Tokyo DisneySea',
        day: 5,
        optional: false,
        image: img('eyli0vjkur81nvicqy9zm5k5n56h_disneysea%201%20-%20Fortress%20Explorations.jpg'),
        description: 'A one day passport to DisneySea, the harbour park built around a volcano that exists nowhere else in the world.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Five nights in Shinjuku with a city day, Mount Fuji and Hakone, both Disney parks and a day of your own.',
      image: img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kyoto',
    subtitle: 'Kyoto and Nara',
    dayLabel: 'Day 7 to 8',
    images: [
      img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
      img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
      img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg')
    ],
    dayImages: {
      7: [
        img('w5gzhp0v048oru3ehscbs40ketmx_5116543131_5b675904e5_o.jpg'),
        img('hgd75m8wt8dus6fzoo948x43a79q_1920px-Kyoto_National_Museum_200.jpg'),
        img('t2m2s7vbmrg4cb4h2rfkv3ugqr7l_frontpage_05_pc.jpg.webp'),
        img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg')
      ],
      8: [
        img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('gsoze09r8ko0sbu1ceztnf0kmd3l_shutterstock_1720970440.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Bullet train to Kyoto`,
      'Breakfast and check out, then the bullet train west',
      'Check in on Shijo street in Kyoto',
      'Rest of the day free at your own pace',
      'Optional: an evening walk through Gion',
      `${DAY_MARK}Day 8 · Kyoto and Nara`,
      'Breakfast, then a full day out with your guide',
      'Kinkaku-ji and the shrine gates of Fushimi Inari',
      'Buffet lunch included',
      'Todai-ji and the deer park at Nara'
    ],
    accommodation: {
      name: 'ibis Styles Kyoto Shijo, Kyoto',
      description: '2 nights · Breakfast · Standard room · 3★ · Bright hotel on Shijo street, close to the Gion lanes',
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
        day: 8,
        optional: false,
        image: img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        description: 'Kinkaku-ji and Fushimi Inari in Kyoto, then Todai-ji and the deer park at Nara, with a buffet lunch on the way.'
      }
    ],
    program: {
      name: 'Kyoto',
      description: 'Two nights on Shijo street, with a free arrival afternoon and a full day through Kyoto and Nara.',
      image: img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Osaka',
    dayLabel: 'Day 9 to 13',
    images: [
      img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg'),
      img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg'),
      img('fo7gecjnwvtcg8ygpphrauwfv1te_shutterstock_668037958.jpg'),
      img('a3klwqjmrp3w9t5hfpniopbrg0ho_shutterstock_2333983371.jpg')
    ],
    dayImages: {
      9: [
        img('5j6fefqxbxx17zmfusbgrdtk5fmt_1619611510_shutterstock_1494770918.jpg'),
        img('xbbuylxsdv442c8wklawh551iqnb_1617186185_1200px-Shitennoji03s3200_(1).jpg'),
        img('jbkrddvnn2pgz9fmapmdkzlyuget_1617184794_tempat-wisata-di-osaka-3.jpg'),
        img('dwt6ckxokuqpaeo9sopjgm2kjgnq_1617177290_castle-5476737_1920.jpg')
      ],
      10: [
        img('th13xucm57k9awbq3opc7a3p0ny8_Universal%20Studios,%20Japan%207.jpg'),
        img('dzrrvkhl3x0bs4kcwkfqceusw3fe_1617186371_1200px-USJ_5years.jpg'),
        img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg'),
        img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg')
      ],
      11: [
        img('is1ejpaqiwr1iwdimb7nx5ml1oja_shutterstock_1024765225.jpg'),
        img('q1ibrb7a4xu4nq4a2rql7r0u3zft_1617177625_river-5572289_1920.jpg'),
        img('nozs79tjbgfixymgrh3voo9bhf1z_Osaka_Dotonbori_Ebisu_Bridge.jpg'),
        img('8fd2fbhoaurwbsxmgzdldygvuzk4_53207269026_e76f09ed3d_o.jpg')
      ],
      12: [
        img('bymtnmlbs6j35oge4c0k34d9c30m_gallery01.jpg'),
        img('80zahc6zqm4v0vjq2gdgwatc0glm_1617185962_Abe-no-Harukasu.jpg'),
        img('8eqfd09dtnyk0o5zl4ckmcl3qcjv_teamLab%20Botanical%20Garden%20Osaka%20(1).png'),
        img('i7nrvo8z1e7l0al6blhkoqjixwpa_shinsekai.jpg')
      ],
      13: [
        img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg'),
        img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg'),
        img('fo7gecjnwvtcg8ygpphrauwfv1te_shutterstock_668037958.jpg'),
        img('a3klwqjmrp3w9t5hfpniopbrg0ho_shutterstock_2333983371.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 9 · On to Osaka`,
      'Breakfast and check out, then the short hop to Osaka',
      'Check in near Namba',
      'Rest of the day free in the city',
      'Optional: an evening along the Dotonbori canal',
      `${DAY_MARK}Day 10 · Universal Studios Japan`,
      'Early breakfast, then across to Universal Studios Japan',
      'Tickets included for the full day',
      'Super Nintendo World and the Harry Potter area',
      'Evening free in the city',
      `${DAY_MARK}Day 11 · Osaka on foot`,
      'Breakfast, then a half day walking tour of Osaka',
      'Dotonbori and the Kuromon market stalls',
      'The lanes around Shinsekai with your guide',
      'Afternoon free in the city',
      `${DAY_MARK}Day 12 · A free day in Osaka`,
      'Breakfast, then a day of your own in Osaka',
      'Optional: Osaka castle and its park',
      'Optional: the aquarium at Osaka Bay',
      `${DAY_MARK}Day 13 · Departure from Osaka`,
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
        name: 'Universal Studios Japan',
        day: 10,
        optional: false,
        image: img('th13xucm57k9awbq3opc7a3p0ny8_Universal%20Studios,%20Japan%207.jpg'),
        description: 'A full day at Universal Studios Japan with tickets included, home to Super Nintendo World and the Harry Potter area.'
      },
      {
        name: 'Osaka half day walking tour',
        day: 11,
        optional: false,
        image: img('is1ejpaqiwr1iwdimb7nx5ml1oja_shutterstock_1024765225.jpg'),
        description: 'Half a day on foot through Dotonbori, the Kuromon market and the lanes around Shinsekai with a guide who knows where to eat.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Four nights near Namba with Universal Studios Japan, a walking tour and two free days for the city.',
      image: img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg')
    }
  }
];

const detail = {
  slug: 'panoramic-japan-parks-and-temples',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Panoramic Japan Parks and Temples',
  alt: 'Fushimi Inari shrine gates on the hillside in Kyoto',
  days: '13 days / 12 nights',
  stations: '3 stops',
  transport: 'Bullet trains, private transfers and guided day tours',
  tag: 'Family',
  tags: ['Family', 'Theme parks'],
  price: 271861,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Hakone', 'Disneyland', 'DisneySea', 'Kyoto', 'Nara', 'Osaka'],
  stats: { days: 13, cities: 3, hotels: 3, activities: 7, transfers: 16 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['16 transfers', 'Transport'],
    ['14 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Thirteen days with both Disney parks and Universal, and still enough free days that nobody is worn out by the end.',
    quoteMore: 'Do DisneySea on a weekday if you can, and start at Journey to the Center of the Earth before the queues build.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Thirteen days at a comfortable pace: five nights in Shinjuku with a city tour, Mount Fuji and Hakone and both Disney parks, two in Kyoto with a Kyoto and Nara day, then four in Osaka with Universal Studios Japan, a walking tour and free days.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 12 nights with daily breakfast; bullet trains between the cities; private airport transfers; a full day of guided sightseeing in Tokyo with lunch; the Mount Fuji fifth station and Lake Ashi, returning by bullet train; admission to Tokyo Disneyland; a one day passport for Tokyo DisneySea; a guided day through Kyoto and Nara with a buffet lunch; admission to Universal Studios Japan; a guided walk through central Osaka.',
  intro2: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your Shinjuku hotel\nRest of the day free at your own pace\nOptional: the Tokyo Metropolitan Building viewing decks, free of charge', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your Shinjuku hotel', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo city tour (B, L)', text: 'Breakfast, then a full day coach tour of the city\nMeiji shrine and the Imperial Palace gardens\nLunch included on the tour\nAsakusa and the Senso-ji temple lanes', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Breakfast, then a full day coach tour of the city', 'Meiji shrine and the Imperial Palace gardens', 'Lunch included on the tour'] },
    { title: 'Day 3: Mount Fuji and Hakone (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone viewpoints\nBack to Tokyo by bullet train', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone viewpoints'] },
    { title: 'Day 4: Tokyo Disneyland (B)', text: 'Early breakfast, then across to Tokyo Disneyland\nAdmission tickets included for the full day\nEvening free back in Shinjuku', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Early breakfast, then across to Tokyo Disneyland', 'Admission tickets included for the full day', 'Evening free back in Shinjuku'] },
    { title: 'Day 5: Tokyo DisneySea (B)', text: 'Early breakfast, then across to Tokyo DisneySea\nA one day passport, included\nEvening free back in Shinjuku', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Early breakfast, then across to Tokyo DisneySea', 'A one day passport, included', 'Evening free back in Shinjuku'] },
    { title: 'Day 6: A free day in Tokyo (B)', text: 'Breakfast, then a day of your own in Tokyo\nOptional: the Shibuya crossing and Harajuku lanes\nOptional: teamLab Planets or the Skytree deck', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Breakfast, then a day of your own in Tokyo', 'Optional: the Shibuya crossing and Harajuku lanes', 'Optional: teamLab Planets or the Skytree deck'] },
    { title: 'Day 7: Bullet train to Kyoto (B)', text: 'Breakfast and check out, then the bullet train west\nCheck in on Shijo street in Kyoto\nRest of the day free at your own pace\nOptional: an evening walk through Gion', hotel: 'ibis Styles Kyoto Shijo', highlights: ['Breakfast and check out, then the bullet train west', 'Check in on Shijo street in Kyoto', 'Rest of the day free at your own pace'] },
    { title: 'Day 8: Kyoto and Nara (B, L)', text: 'Breakfast, then a full day out with your guide\nKinkaku-ji and the shrine gates of Fushimi Inari\nBuffet lunch included\nTodai-ji and the deer park at Nara', hotel: 'ibis Styles Kyoto Shijo', highlights: ['Breakfast, then a full day out with your guide', 'Kinkaku-ji and the shrine gates of Fushimi Inari', 'Buffet lunch included'] },
    { title: 'Day 9: On to Osaka (B)', text: 'Breakfast and check out, then the short hop to Osaka\nCheck in near Namba\nRest of the day free in the city\nOptional: an evening along the Dotonbori canal', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast and check out, then the short hop to Osaka', 'Check in near Namba', 'Rest of the day free in the city'] },
    { title: 'Day 10: Universal Studios Japan (B)', text: 'Early breakfast, then across to Universal Studios Japan\nTickets included for the full day\nSuper Nintendo World and the Harry Potter area\nEvening free in the city', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Early breakfast, then across to Universal Studios Japan', 'Tickets included for the full day', 'Super Nintendo World and the Harry Potter area'] },
    { title: 'Day 11: Osaka on foot (B)', text: 'Breakfast, then a half day walking tour of Osaka\nDotonbori and the Kuromon market stalls\nThe lanes around Shinsekai with your guide\nAfternoon free in the city', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast, then a half day walking tour of Osaka', 'Dotonbori and the Kuromon market stalls', 'The lanes around Shinsekai with your guide'] },
    { title: 'Day 12: A free day in Osaka (B)', text: 'Breakfast, then a day of your own in Osaka\nOptional: Osaka castle and its park\nOptional: the aquarium at Osaka Bay', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast, then a day of your own in Osaka', 'Optional: Osaka castle and its park', 'Optional: the aquarium at Osaka Bay'] },
    { title: 'Day 13: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const panoramicJapanParksAndTemplesBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const panoramicJapanParksAndTemplesProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Hakone', 'Disneyland', 'DisneySea', 'Kyoto', 'Nara', 'Osaka'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 13,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 7,
  transfers: 16,
  meals: 14,
  price: detail.price,
  images: cardImages
};
