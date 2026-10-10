// Japan Unveiled Short Break. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('xdyj7i31bk427zhdgk2thbw2rv2d_shutterstock_572057020.jpg'),
  img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg'),
  img('pbglyllc58xvt8glj2u374y10ybf_shutterstock_598301423.jpg'),
  img('a3klwqjmrp3w9t5hfpniopbrg0ho_shutterstock_2333983371.jpg'),
  img('bod5zc2vlyf6hxsdznlki15x709y_mainR_01.jpg'),
  img('ej15n5xfj2cb7mr009esga4oml0w_shutterstock_1370574332.jpg'),
  img('ia89ezbshmwkpv1tpvpc0a2zc4k2_gallery-1.jpg'),
  img('rf2q8xarmubdq146v3y4624kctc7_shutterstock_209751268.jpg'),
  img('gj78fz8c0ymqhf34svyaxlbyx6e2_shutterstock_1017018754%20(1).jpg'),
  img('tnr6dw1lihzobjh5bj5x09mp7nj0_shutterstock_793305754.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('xdyj7i31bk427zhdgk2thbw2rv2d_shutterstock_572057020.jpg'),
  img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg'),
  img('pbglyllc58xvt8glj2u374y10ybf_shutterstock_598301423.jpg'),
  img('a3klwqjmrp3w9t5hfpniopbrg0ho_shutterstock_2333983371.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji and Hakone',
    dayLabel: 'Day 1 to 3',
    images: [
      img('xdyj7i31bk427zhdgk2thbw2rv2d_shutterstock_572057020.jpg'),
      img('zcclccnpnk2b78cy9usi5x5zdoyk_shutterstock_666197236.jpg'),
      img('rudp6bxggw53vaykvui9490l2twt_shutterstock_721643926.jpg'),
      img('pbglyllc58xvt8glj2u374y10ybf_shutterstock_598301423.jpg')
    ],
    dayImages: {
      1: [
        img('pcgbwwkgqbfu2982lragk0yyuxtt_Sumida_Park_2011.jpg'),
        img('6hzy1swk98chjdiqrq77p05ks1hp_shutterstock_402603553%20(1).jpg'),
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
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Tokyo`,
      'Arrival at Narita or Haneda and transfer to your hotel',
      'Check in beside Kamata station',
      'Rest of the day free at your own pace',
      'Optional: a first bowl of ramen in the lanes nearby',
      `${DAY_MARK}Day 2 · Tokyo city tour`,
      'Breakfast, then a shared full day coach tour',
      'Meiji shrine and the Imperial Palace gardens',
      'Asakusa and the Senso-ji temple lanes',
      'Evening free in the city',
      `${DAY_MARK}Day 3 · Mount Fuji and Hakone`,
      'Breakfast, then out of the city towards Mount Fuji',
      'The fifth station on the mountain, weather permitting',
      'Lake Ashi and the Hakone ropeway',
      'Bullet train back into Tokyo in the evening'
    ],
    accommodation: {
      name: 'APA Hotel Keikyu Kamata Ekimae, Tokyo',
      description: '3 nights · Breakfast · Standard room · 3★ · Handy hotel beside Kamata station, direct to Haneda',
      images: [
        img('vsa8mkvwhkk90ap3bsadcz2yqrur_388850263.jpg'),
        img('wzwnjduhd7cp1uumalyg6fb16391_caption.jpg'),
        img('3j8sw9e7ze31kwjd8l0h7ifk50gl_419529473.jpg'),
        img('ksb0u0rgwd4rrgyxv43cx7ve51nw_419529480.jpg'),
        img('fgaxsza2a4aijnw5bkfe9pc79drl_346301041.jpg'),
        img('tqbgak0saeyz0vf29xljixzv45el_419529404.jpg'),
        img('r8vmux1gwbqsczp9uko5jrz9vmit_328823817.jpg'),
        img('1gnxbpgt8a0ivxv0qswvc8z1m3we_419529499.jpg')
      ]
    },
    activities: [
      {
        name: 'Tokyo city tour by coach',
        day: 2,
        optional: false,
        image: img('oj5eocvwd5au1vpfuazquva3pcc9_shutterstock_1524921077.jpg'),
        description: 'A shared full day coach tour through Meiji shrine, the Imperial Palace gardens and the temple lanes of Asakusa.'
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
      description: 'Three nights in Tokyo with a shared city tour and a day out to Mount Fuji and Hakone.',
      image: img('xdyj7i31bk427zhdgk2thbw2rv2d_shutterstock_572057020.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Osaka',
    dayLabel: 'Day 4 to 6',
    images: [
      img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg'),
      img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg'),
      img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg'),
      img('fo7gecjnwvtcg8ygpphrauwfv1te_shutterstock_668037958.jpg')
    ],
    dayImages: {
      4: [
        img('1cn9ugvideqjn8iv3g10d6ahpfty_1617195992_Osaka_Science_Museum_2020_Januar.jpg'),
        img('70u3tc8xuuarz97uhxty1b2m3rmq_1617192046_6dd23e1abb0539d588045e45b7e5ddfd.jpg'),
        img('2hn59tmyw7g76wpw5js89g7jlxix_1619611599_shutterstock_560030653.jpg'),
        img('5j6fefqxbxx17zmfusbgrdtk5fmt_1619611510_shutterstock_1494770918.jpg')
      ],
      5: [
        img('is1ejpaqiwr1iwdimb7nx5ml1oja_shutterstock_1024765225.jpg'),
        img('q1ibrb7a4xu4nq4a2rql7r0u3zft_1617177625_river-5572289_1920.jpg'),
        img('nozs79tjbgfixymgrh3voo9bhf1z_Osaka_Dotonbori_Ebisu_Bridge.jpg'),
        img('8fd2fbhoaurwbsxmgzdldygvuzk4_53207269026_e76f09ed3d_o.jpg')
      ],
      6: [
        img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg'),
        img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg'),
        img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg'),
        img('fo7gecjnwvtcg8ygpphrauwfv1te_shutterstock_668037958.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Bullet train to Osaka`,
      'Breakfast and check out, then transfer to the station',
      'Shinkansen bullet train south to Osaka',
      'Check in at your hotel in Kitashinchi',
      'Rest of the day free in the city',
      `${DAY_MARK}Day 5 · Osaka on foot`,
      'Breakfast, then a half day walking tour of Osaka',
      'Dotonbori and the Kuromon market stalls',
      'The lanes around Shinsekai with your guide',
      'Afternoon free, or a train to Kyoto for the evening',
      `${DAY_MARK}Day 6 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'Private transfer to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'The Rise Osaka Kitashinchi, Osaka',
      description: '2 nights · Breakfast · Standard room · 4★ · New four star hotel in Kitashinchi, central Osaka',
      images: [
        img('63tug3mcibfolvc70z7ynzqevyu9_243444223.jpg'),
        img('2uj547nnu35ka5ei21of4tptpibk_147901645.jpg'),
        img('kw096pujz8x2ymr7mcuz7kq2evba_161304709.jpg'),
        img('3kgkot4x70282ui0dghdxyz47dm0_249355415.jpg'),
        img('80qcbmqegtx8jni9p4otypw3uw12_147901409.jpg'),
        img('fbji31b7kup83m8mfe3xe45hqqsn_147902218.jpg'),
        img('62ntcx70um6m7y67k0n16cn4h79b_147901556.jpg'),
        img('ag34i0vg2fcgidftendb9caw15c6_237827316.jpg'),
        img('86nopz4ngdlj46xhjadza2yf3pt9_147901597.jpg'),
        img('eiraelsewz5sfalhkoqzesh3x5iw_458252665.jpg'),
        img('mgxv6ammhxhyd5ltfro5xp3x6kkf_161305132.jpg'),
        img('nbseihantrl15tehmlphzhw3mrh6_458252673.jpg')
      ]
    },
    activities: [
      {
        name: 'Osaka walking tour',
        day: 5,
        optional: false,
        image: img('is1ejpaqiwr1iwdimb7nx5ml1oja_shutterstock_1024765225.jpg'),
        description: 'Half a day on foot through Dotonbori, the Kuromon market and the lanes around Shinsekai with a guide who knows where to eat.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Two nights in Osaka, reached by bullet train, with a walking tour of the food streets.',
      image: img('5pqn47yot0hp976ue9qnb8el3zsc_shutterstock_289656464.jpg')
    }
  }
];

const detail = {
  slug: 'japan-unveiled-short-break',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Japan Unveiled Short Break',
  alt: 'Neon signs reflected in the Dotonbori canal, Osaka',
  days: '6 days / 5 nights',
  stations: '2 stops',
  transport: 'Shinkansen bullet train, private transfers and guided tours',
  tag: 'Short trips',
  tags: ['Short trips', 'First time'],
  price: 142120,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Hakone', 'Osaka'],
  stats: { days: 6, cities: 2, hotels: 2, activities: 3, transfers: 7 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['7 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Six days, two cities and one bullet train. It is the cheapest honest way into Japan without cutting the good bits.',
    quoteMore: 'Fly into Haneda if you can. The Kamata hotel is one short train from the terminal, which saves a tired first evening.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days on a tighter budget: three nights in Tokyo with a shared city tour and a day out to Mount Fuji and Hakone, then the bullet train to Osaka for two nights and a walking tour of the food streets.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights with daily breakfast; Shinkansen bullet train from Tokyo to Osaka; private airport transfers; full day Tokyo city tour by coach; Mount Fuji and Hakone day trip with bullet train return; Osaka half day walking tour.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in beside Kamata station\nRest of the day free at your own pace\nOptional: a first bowl of ramen in the lanes nearby', hotel: 'APA Hotel Keikyu Kamata Ekimae, Tokyo', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in beside Kamata station', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo city tour (B)', text: 'Breakfast, then a shared full day coach tour\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in the city', hotel: 'APA Hotel Keikyu Kamata Ekimae, Tokyo', highlights: ['Breakfast, then a shared full day coach tour', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Mount Fuji and Hakone (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone ropeway\nBullet train back into Tokyo in the evening', hotel: 'APA Hotel Keikyu Kamata Ekimae, Tokyo', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone ropeway'] },
    { title: 'Day 4: Bullet train to Osaka (B)', text: 'Breakfast and check out, then transfer to the station\nShinkansen bullet train south to Osaka\nCheck in at your hotel in Kitashinchi\nRest of the day free in the city', hotel: 'The Rise Osaka Kitashinchi', highlights: ['Breakfast and check out, then transfer to the station', 'Shinkansen bullet train south to Osaka', 'Check in at your hotel in Kitashinchi'] },
    { title: 'Day 5: Osaka on foot (B)', text: 'Breakfast, then a half day walking tour of Osaka\nDotonbori and the Kuromon market stalls\nThe lanes around Shinsekai with your guide\nAfternoon free, or a train to Kyoto for the evening', hotel: 'The Rise Osaka Kitashinchi', highlights: ['Breakfast, then a half day walking tour of Osaka', 'Dotonbori and the Kuromon market stalls', 'The lanes around Shinsekai with your guide'] },
    { title: 'Day 6: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const japanUnveiledShortBreakBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const japanUnveiledShortBreakProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Hakone', 'Osaka'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 3,
  transfers: 7,
  meals: 5,
  price: detail.price,
  images: cardImages
};
