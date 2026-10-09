// Discover Japan with Mount Fuji and Kyoto. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('rudp6bxggw53vaykvui9490l2twt_shutterstock_721643926.jpg'),
  img('gtk8i9anl0fl06gh6jr9ac6b4g33_shutterstock_1789061315.jpg'),
  img('yysqrbd9fq0qhd0o3wxl8nme0o2j_mainL_01%20(1).jpg'),
  img('yfbvuqj5t7yyjle11bzesj245xnj_shutterstock_1024764949%20(1).jpg'),
  img('5mdbo6issuau8lpnanxf7d6qhgdi_shutterstock_1208574490.jpg'),
  img('j4a2pg3qcw8w7pwsr1eyau64kdjj_shutterstock_691237765.jpg'),
  img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg'),
  img('wj9jxfmpxk6juy7qb1ok3i9d1ae2_shutterstock_1650091249.jpg'),
  img('7z6zke7b8kmw08mkqkclicf3rawn_shutterstock_310072442.jpg'),
  img('5d4ac52c1c7pu5k4ycnr79ifpor5_shutterstock_2324290629.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('rudp6bxggw53vaykvui9490l2twt_shutterstock_721643926.jpg'),
  img('yysqrbd9fq0qhd0o3wxl8nme0o2j_mainL_01%20(1).jpg'),
  img('5mdbo6issuau8lpnanxf7d6qhgdi_shutterstock_1208574490.jpg'),
  img('j4a2pg3qcw8w7pwsr1eyau64kdjj_shutterstock_691237765.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji and Hakone',
    dayLabel: 'Day 1 to 3',
    images: [
      img('rudp6bxggw53vaykvui9490l2twt_shutterstock_721643926.jpg'),
      img('pbglyllc58xvt8glj2u374y10ybf_shutterstock_598301423.jpg'),
      img('hjvdd18dwrrkfqh5hyjbyf1qy0md_shutterstock_2299917035.jpg'),
      img('yysqrbd9fq0qhd0o3wxl8nme0o2j_mainL_01%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('6hzy1swk98chjdiqrq77p05ks1hp_shutterstock_402603553%20(1).jpg'),
        img('dvnb132y05sidy9r0omo9zqe0ram_15849220641_a5a96af87c_o.jpg'),
        img('5d8zp8rm397hfvz02jntd54oueue_8221793202_67e195e47e_o.jpg'),
        img('f2lk3tg5wuhz3cdk1tnn750xqw31_4484_1_1400x1100.jpg')
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
      name: 'Premier Hotel Cabin Shinjuku, Tokyo',
      description: '3 nights · Breakfast · Standard room · 4★ · Four star hotel in Shinjuku, minutes from the station',
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
        name: 'Mount Fuji and Hakone day trip',
        day: 3,
        optional: false,
        image: img('39ndql7vpg0emtn4pc108qs5bzwf_shutterstock_1023211282.jpg'),
        description: 'Up to the fifth station on Mount Fuji, then Lake Ashi and the Hakone ropeway, with the bullet train back into Tokyo in the evening.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Three nights in Shinjuku, with a full city day and a trip out to Mount Fuji and Hakone that returns by bullet train.',
      image: img('rudp6bxggw53vaykvui9490l2twt_shutterstock_721643926.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Osaka',
    subtitle: 'Osaka to Kyoto and Nara',
    dayLabel: 'Day 4 to 8',
    images: [
      img('ptkkqebz4mj100bzruqlj5xbdczr_shutterstock_2268784351.jpg'),
      img('gtk8i9anl0fl06gh6jr9ac6b4g33_shutterstock_1789061315.jpg'),
      img('lnacm9xp9pgyiylr68qgl6aao0bp_shutterstock_2376751313.jpg'),
      img('rwd198veburqy2a8grssg5g7djer_shutterstock_469018031.jpg')
    ],
    dayImages: {
      4: [
        img('2hn59tmyw7g76wpw5js89g7jlxix_1619611599_shutterstock_560030653.jpg'),
        img('70u3tc8xuuarz97uhxty1b2m3rmq_1617192046_6dd23e1abb0539d588045e45b7e5ddfd.jpg'),
        img('jbkrddvnn2pgz9fmapmdkzlyuget_1617184794_tempat-wisata-di-osaka-3.jpg'),
        img('dwt6ckxokuqpaeo9sopjgm2kjgnq_1617177290_castle-5476737_1920.jpg')
      ],
      5: [
        img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('gsoze09r8ko0sbu1ceztnf0kmd3l_shutterstock_1720970440.jpg')
      ],
      6: [
        img('is1ejpaqiwr1iwdimb7nx5ml1oja_shutterstock_1024765225.jpg'),
        img('q1ibrb7a4xu4nq4a2rql7r0u3zft_1617177625_river-5572289_1920.jpg'),
        img('nozs79tjbgfixymgrh3voo9bhf1z_Osaka_Dotonbori_Ebisu_Bridge.jpg'),
        img('8fd2fbhoaurwbsxmgzdldygvuzk4_53207269026_e76f09ed3d_o.jpg')
      ],
      7: [
        img('bymtnmlbs6j35oge4c0k34d9c30m_gallery01.jpg'),
        img('80zahc6zqm4v0vjq2gdgwatc0glm_1617185962_Abe-no-Harukasu.jpg'),
        img('8eqfd09dtnyk0o5zl4ckmcl3qcjv_teamLab%20Botanical%20Garden%20Osaka%20(1).png'),
        img('i7nrvo8z1e7l0al6blhkoqjixwpa_shinsekai.jpg')
      ],
      8: [
        img('ptkkqebz4mj100bzruqlj5xbdczr_shutterstock_2268784351.jpg'),
        img('gtk8i9anl0fl06gh6jr9ac6b4g33_shutterstock_1789061315.jpg'),
        img('lnacm9xp9pgyiylr68qgl6aao0bp_shutterstock_2376751313.jpg'),
        img('rwd198veburqy2a8grssg5g7djer_shutterstock_469018031.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Bullet train to Osaka`,
      'Breakfast and check out, then transfer to the station',
      'Bullet train south to Osaka',
      'Check in at your hotel near Namba',
      'Rest of the day free in the city',
      `${DAY_MARK}Day 5 · Kyoto and Nara`,
      'Breakfast, then a full day out to Kyoto and Nara',
      'Kinkaku-ji, the golden pavilion, on its pond',
      'Buffet lunch included',
      'The deer park and Todai-ji temple in Nara',
      `${DAY_MARK}Day 6 · Osaka on foot`,
      'Breakfast, then a half day walking tour of Osaka',
      'Dotonbori and the Kuromon market stalls',
      'The lanes around Shinsekai with your guide',
      'Afternoon free in the city',
      `${DAY_MARK}Day 7 · A free day in Osaka`,
      'Breakfast and a free day in Osaka',
      'Optional: Universal Studios Japan for the day',
      'Optional: Osaka castle and its park',
      'Optional: a day trip to Himeji or Kobe by train',
      `${DAY_MARK}Day 8 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'Private transfer to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'Richmond Hotel Namba Daikokucho, Osaka',
      description: '4 nights · Breakfast · Standard room · 3★ · Comfortable hotel one stop from Namba, in central Osaka',
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
        name: 'Kyoto and Nara day trip',
        day: 5,
        optional: false,
        image: img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        description: 'Kinkaku-ji, the golden pavilion, then the deer park and Todai-ji temple in Nara, with a buffet lunch and coach travel from Namba.'
      },
      {
        name: 'Osaka walking tour',
        day: 6,
        optional: false,
        image: img('is1ejpaqiwr1iwdimb7nx5ml1oja_shutterstock_1024765225.jpg'),
        description: 'Half a day on foot through Dotonbori, the Kuromon market and the lanes around Shinsekai with a guide who knows where to eat.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Four nights in Osaka with a day out to Kyoto and Nara, a walking tour of the food streets and a free day to use as you like.',
      image: img('ptkkqebz4mj100bzruqlj5xbdczr_shutterstock_2268784351.jpg')
    }
  }
];

const detail = {
  slug: 'discover-japan-with-mount-fuji-and-kyoto',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Discover Japan with Mount Fuji and Kyoto',
  alt: 'Mount Fuji behind a pagoda in spring, Japan',
  days: '8 days / 7 nights',
  stations: '2 stops',
  transport: 'Bullet train, private transfers and guided day tours',
  tag: 'Culture',
  tags: ['Culture', 'First time'],
  price: 126825,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Hakone', 'Osaka', 'Kyoto', 'Nara'],
  stats: { days: 8, cities: 2, hotels: 2, activities: 4, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
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
    quote: 'Two bases, one bullet train and no packing every second night. It is the easiest way to see Japan for the first time.',
    quoteMore: 'Keep the free day in Osaka for Universal Studios or Himeji castle. Both are easy by train and neither needs a guide.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days between two cities: three nights in Shinjuku with a full Tokyo day and a trip to Mount Fuji and Hakone, then the bullet train to Osaka for four nights with Kyoto, Nara, a walking tour of the food streets and a free day.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights with daily breakfast; bullet train from Tokyo to Osaka; private airport transfers; full day Tokyo city tour with lunch; Mount Fuji and Hakone day trip with bullet train return; Kyoto and Nara day trip with buffet lunch; Osaka half day walking tour.',
  intro2: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your Shinjuku hotel\nRest of the day free at your own pace\nOptional: the Tokyo Metropolitan Building viewing decks, free of charge', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your Shinjuku hotel', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo city tour (B, L)', text: 'Breakfast, then a full day coach tour of the city\nMeiji shrine and the Imperial Palace gardens\nLunch included on the tour\nAsakusa and the Senso-ji temple lanes', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Breakfast, then a full day coach tour of the city', 'Meiji shrine and the Imperial Palace gardens', 'Lunch included on the tour'] },
    { title: 'Day 3: Mount Fuji and Hakone (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone ropeway\nBullet train back into Tokyo in the evening', hotel: 'Premier Hotel Cabin Shinjuku', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone ropeway'] },
    { title: 'Day 4: Bullet train to Osaka (B)', text: 'Breakfast and check out, then transfer to the station\nBullet train south to Osaka\nCheck in at your hotel near Namba\nRest of the day free in the city', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast and check out, then transfer to the station', 'Bullet train south to Osaka', 'Check in at your hotel near Namba'] },
    { title: 'Day 5: Kyoto and Nara (B, L)', text: 'Breakfast, then a full day out to Kyoto and Nara\nKinkaku-ji, the golden pavilion, on its pond\nBuffet lunch included\nThe deer park and Todai-ji temple in Nara', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast, then a full day out to Kyoto and Nara', 'Kinkaku-ji, the golden pavilion, on its pond', 'Buffet lunch included'] },
    { title: 'Day 6: Osaka on foot (B)', text: 'Breakfast, then a half day walking tour of Osaka\nDotonbori and the Kuromon market stalls\nThe lanes around Shinsekai with your guide\nAfternoon free in the city', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast, then a half day walking tour of Osaka', 'Dotonbori and the Kuromon market stalls', 'The lanes around Shinsekai with your guide'] },
    { title: 'Day 7: A free day in Osaka (B)', text: 'Breakfast and a free day in Osaka\nOptional: Universal Studios Japan for the day\nOptional: Osaka castle and its park\nOptional: a day trip to Himeji or Kobe by train', hotel: 'Richmond Hotel Namba Daikokucho', highlights: ['Breakfast and a free day in Osaka', 'Optional: Universal Studios Japan for the day', 'Optional: Osaka castle and its park'] },
    { title: 'Day 8: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Japan', href: '/asien/japan' },
  { label: detail.title }
];

export const discoverJapanFujiKyotoBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const discoverJapanFujiKyotoProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Hakone', 'Osaka', 'Kyoto', 'Nara'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 4,
  transfers: 9,
  meals: 9,
  price: detail.price,
  images: cardImages
};
