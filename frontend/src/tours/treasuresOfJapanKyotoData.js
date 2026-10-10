// Treasures of Japan with Kyoto. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('re7iw91kyn2u863knugl7cr3ojwm_shutterstock_2301094731.jpg'),
  img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
  img('idgqxbdhnqjuj74i3evh650mu98u_shutterstock_1576805158.jpg'),
  img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg'),
  img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
  img('8dnt21orzvcfmui89tb0d0wwxg9z_shutterstock_318859283.jpg'),
  img('yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg'),
  img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
  img('nperxppzyea8k9fcvudr94ss24x6_shutterstock_272327813.jpg'),
  img('xdyj7i31bk427zhdgk2thbw2rv2d_shutterstock_572057020.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('re7iw91kyn2u863knugl7cr3ojwm_shutterstock_2301094731.jpg'),
  img('idgqxbdhnqjuj74i3evh650mu98u_shutterstock_1576805158.jpg'),
  img('nperxppzyea8k9fcvudr94ss24x6_shutterstock_272327813.jpg'),
  img('8l3nfuzgvhuh0eyewnb0gav1t7w8_1617351605_mickey-mause-832112_1920.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji and Hakone',
    dayLabel: 'Day 1 to 3',
    images: [
      img('re7iw91kyn2u863knugl7cr3ojwm_shutterstock_2301094731.jpg'),
      img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg'),
      img('t70do4sx3jrtcq2v146hmuwx11x4_shutterstock_1201440004.jpg'),
      img('whkp4azssrlsyr0rofdwlnikzki2_shutterstock_517903198.jpg')
    ],
    dayImages: {
      1: [
        img('8l3nfuzgvhuh0eyewnb0gav1t7w8_1617351605_mickey-mause-832112_1920.jpg'),
        img('6hzy1swk98chjdiqrq77p05ks1hp_shutterstock_402603553%20(1).jpg'),
        img('7v0pb5achz6hdl8vmiejhfx5ocg9_1617352304_Shinjuku_Gyoen_National_Garden.jpg'),
        img('e5f438umy5kix56t1stawpi928a0_1618899525_shutterstock_1427133110.jpg')
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
      image: img('re7iw91kyn2u863knugl7cr3ojwm_shutterstock_2301094731.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kyoto',
    subtitle: 'Kyoto to Nara',
    dayLabel: 'Day 4 to 5',
    images: [
      img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
      img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
      img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg')
    ],
    dayImages: {
      4: [
        img('w5gzhp0v048oru3ehscbs40ketmx_5116543131_5b675904e5_o.jpg'),
        img('hgd75m8wt8dus6fzoo948x43a79q_1920px-Kyoto_National_Museum_200.jpg'),
        img('t2m2s7vbmrg4cb4h2rfkv3ugqr7l_frontpage_05_pc.jpg.webp'),
        img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg')
      ],
      5: [
        img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('gsoze09r8ko0sbu1ceztnf0kmd3l_shutterstock_1720970440.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Bullet train to Kyoto`,
      'Breakfast and check out, then transfer to the station',
      'Shinkansen bullet train west to Kyoto',
      'Check in at your hotel on Shijo street',
      'Optional: an evening walk through Gion and Pontocho',
      `${DAY_MARK}Day 5 · Kyoto and Nara`,
      'Breakfast, then a full day with your guide',
      'Kinkaku-ji, the golden pavilion, on its pond',
      'Buffet lunch included',
      'The deer park and Todai-ji temple in Nara'
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
        name: 'Kyoto and Nara sightseeing with lunch',
        day: 5,
        optional: false,
        image: img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        description: 'A full day from Kyoto taking in Kinkaku-ji, the golden pavilion, then the deer park and Todai-ji temple in Nara, with a buffet lunch.'
      }
    ],
    program: {
      name: 'Kyoto',
      description: 'Two nights in the old capital, with a guided day that covers Kyoto\'s temples and the deer park at Nara.',
      image: img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Osaka',
    dayLabel: 'Day 6 to 7',
    images: [
      img('oakkcbyfm7n64pmrd0m216nlmoh0_shutterstock_761090425.jpg'),
      img('ej15n5xfj2cb7mr009esga4oml0w_shutterstock_1370574332.jpg'),
      img('idgqxbdhnqjuj74i3evh650mu98u_shutterstock_1576805158.jpg'),
      img('92vedp6ukl0p8g52c9g80bjubq6p_shutterstock_788638972.jpg')
    ],
    dayImages: {
      6: [
        img('5j6fefqxbxx17zmfusbgrdtk5fmt_1619611510_shutterstock_1494770918.jpg'),
        img('70u3tc8xuuarz97uhxty1b2m3rmq_1617192046_6dd23e1abb0539d588045e45b7e5ddfd.jpg'),
        img('jbkrddvnn2pgz9fmapmdkzlyuget_1617184794_tempat-wisata-di-osaka-3.jpg'),
        img('dwt6ckxokuqpaeo9sopjgm2kjgnq_1617177290_castle-5476737_1920.jpg')
      ],
      7: [
        img('oakkcbyfm7n64pmrd0m216nlmoh0_shutterstock_761090425.jpg'),
        img('ej15n5xfj2cb7mr009esga4oml0w_shutterstock_1370574332.jpg'),
        img('idgqxbdhnqjuj74i3evh650mu98u_shutterstock_1576805158.jpg'),
        img('92vedp6ukl0p8g52c9g80bjubq6p_shutterstock_788638972.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · On to Osaka`,
      'Breakfast and check out, then the short train to Osaka',
      'Check in at your hotel near Namba',
      'Afternoon free in the city',
      'Optional: Dotonbori and the Kuromon market stalls',
      `${DAY_MARK}Day 7 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'Private transfer to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'Sotetsu Fresa Inn Osaka Namba, Osaka',
      description: '1 night · Breakfast · Standard room · 3★ · Clean modern hotel a short walk from Namba station',
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

    ],
    program: {
      name: 'Osaka',
      description: 'A last night near Namba, close to the airport train and the food streets of Dotonbori.',
      image: img('oakkcbyfm7n64pmrd0m216nlmoh0_shutterstock_761090425.jpg')
    }
  }
];

const detail = {
  slug: 'treasures-of-japan-with-kyoto',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Treasures of Japan with Kyoto',
  alt: 'Bamboo grove path at Arashiyama, Kyoto',
  days: '7 days / 6 nights',
  stations: '3 stops',
  transport: 'Shinkansen bullet train, private transfers and guided tours',
  tag: 'Culture',
  tags: ['Culture', 'First time'],
  price: 145154,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Hakone', 'Kyoto', 'Nara', 'Osaka'],
  stats: { days: 7, cities: 3, hotels: 3, activities: 3, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Sleeping in Kyoto, not visiting it on a day trip, is what people remember. The lanes after dark are a different city.',
    quoteMore: 'Walk from the Shijo hotel to Gion at dusk, about fifteen minutes. The last night in Osaka keeps the airport train short.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days through three cities: Shinjuku with a city tour and Mount Fuji, two nights in Kyoto with a guided day to Nara, then a final night in Osaka near Namba before you fly home.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with daily breakfast; bullet train from Tokyo to Kyoto and the train on to Osaka; private airport transfers; full day Tokyo city tour with lunch; Mount Fuji and Hakone day trip; a guided day through Kyoto and Nara with buffet lunch.',
  intro2: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your Shinjuku hotel\nRest of the day free at your own pace\nOptional: the Tokyo Metropolitan Building viewing decks, free of charge', hotel: 'APA Hotel Shinjuku Kabukicho Chuo', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your Shinjuku hotel', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo city tour (B, L)', text: 'Breakfast, then a full day coach tour of the city\nMeiji shrine and the Imperial Palace gardens\nLunch included on the tour\nAsakusa and the Senso-ji temple lanes', hotel: 'APA Hotel Shinjuku Kabukicho Chuo', highlights: ['Breakfast, then a full day coach tour of the city', 'Meiji shrine and the Imperial Palace gardens', 'Lunch included on the tour'] },
    { title: 'Day 3: Mount Fuji and Hakone (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone ropeway\nBullet train back into Tokyo in the evening', hotel: 'APA Hotel Shinjuku Kabukicho Chuo', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone ropeway'] },
    { title: 'Day 4: Bullet train to Kyoto (B)', text: 'Breakfast and check out, then transfer to the station\nShinkansen bullet train west to Kyoto\nCheck in at your hotel on Shijo street\nOptional: an evening walk through Gion and Pontocho', hotel: 'ibis Styles Kyoto Shijo', highlights: ['Breakfast and check out, then transfer to the station', 'Shinkansen bullet train west to Kyoto', 'Check in at your hotel on Shijo street'] },
    { title: 'Day 5: Kyoto and Nara (B, L)', text: 'Breakfast, then a full day with your guide\nKinkaku-ji, the golden pavilion, on its pond\nBuffet lunch included\nThe deer park and Todai-ji temple in Nara', hotel: 'ibis Styles Kyoto Shijo', highlights: ['Breakfast, then a full day with your guide', 'Kinkaku-ji, the golden pavilion, on its pond', 'Buffet lunch included'] },
    { title: 'Day 6: On to Osaka (B)', text: 'Breakfast and check out, then the short train to Osaka\nCheck in at your hotel near Namba\nAfternoon free in the city\nOptional: Dotonbori and the Kuromon market stalls', hotel: 'Sotetsu Fresa Inn Osaka Namba', highlights: ['Breakfast and check out, then the short train to Osaka', 'Check in at your hotel near Namba', 'Afternoon free in the city'] },
    { title: 'Day 7: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const treasuresOfJapanKyotoBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const treasuresOfJapanKyotoProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Hakone', 'Kyoto', 'Nara', 'Osaka'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 3,
  transfers: 10,
  meals: 8,
  price: detail.price,
  images: cardImages
};
