// Explore Japan: Tokyo and Osaka. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('7kxl7sgilrs8qq9u4vti16qxyujm_shutterstock_2278159137.jpg'),
  img('oakkcbyfm7n64pmrd0m216nlmoh0_shutterstock_761090425.jpg'),
  img('1yv1a968ghyiwiwbsbwvzfu388l0_shutterstock_2300479567.jpg'),
  img('92vedp6ukl0p8g52c9g80bjubq6p_shutterstock_788638972.jpg'),
  img('8uer6kpve5exz099231cw3oei92e_shutterstock_58934503.jpg'),
  img('8dnt21orzvcfmui89tb0d0wwxg9z_shutterstock_318859283.jpg'),
  img('re7iw91kyn2u863knugl7cr3ojwm_shutterstock_2301094731.jpg'),
  img('f0sfzrqf6mi7f98e2tuutgge6hk4_shutterstock_1900954018.jpg'),
  img('whkp4azssrlsyr0rofdwlnikzki2_shutterstock_517903198.jpg'),
  img('ex1tslqukb3q5nhoyy35nitmlfbw_shutterstock_1322129618%20(1).jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('oakkcbyfm7n64pmrd0m216nlmoh0_shutterstock_761090425.jpg'),
  img('92vedp6ukl0p8g52c9g80bjubq6p_shutterstock_788638972.jpg'),
  img('8dnt21orzvcfmui89tb0d0wwxg9z_shutterstock_318859283.jpg'),
  img('f0sfzrqf6mi7f98e2tuutgge6hk4_shutterstock_1900954018.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji and Hakone',
    dayLabel: 'Day 1 to 3',
    images: [
      img('7kxl7sgilrs8qq9u4vti16qxyujm_shutterstock_2278159137.jpg'),
      img('xwlhpz82r0k90be9vsoef19qcx6k_shutterstock_1901310499.jpg'),
      img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg'),
      img('1yv1a968ghyiwiwbsbwvzfu388l0_shutterstock_2300479567.jpg')
    ],
    dayImages: {
      1: [
        img('5d8zp8rm397hfvz02jntd54oueue_8221793202_67e195e47e_o.jpg'),
        img('pcgbwwkgqbfu2982lragk0yyuxtt_Sumida_Park_2011.jpg'),
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
      'Check in at your hotel in Hamamatsucho',
      'Rest of the day free at your own pace',
      'Optional: an evening walk through the Shiba park gardens',
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
      name: 'Keio Presso Inn Hamamatsucho, Tokyo',
      description: '3 nights · Breakfast · Standard room · 3★ · Neat hotel in Hamamatsucho, close to the monorail',
      images: [
        img('scte0ros9oaa9krnn4elsd1ijam3_140721685.jpg'),
        img('13qe98yd49i9mpc6ondokc4rbwkh_UV_2.jpg'),
        img('9gvl067amz6c6rvbnfe4mkqaki08_268608120.jpg'),
        img('ltzu1azyxby46whugbov9n2fij5d_uv_1.jpg'),
        img('olh0g1bpeo0oiu8sfalqauenkw4x_140721643.jpg'),
        img('mltbfn9ljcny3plbwiamzv6t9mjv_140721568.jpg'),
        img('8eydiysglcjoc4xu7vqzwyq0ffgu_264545522.jpg'),
        img('na7254g15zqyo1n2iuumd9y1hwkg_268608219.jpg'),
        img('3g8o65y9o5c974t5xh89ib25a76k_140721728.jpg'),
        img('ad457m32q36bdyxq4a224we19su8_140811300.jpg'),
        img('i4vnxqkuxce57pvj2p5okxvj7ibg_101186574.jpg')
      ]
    },
    activities: [
      {
        name: 'Tokyo city tour with lunch',
        day: 2,
        optional: false,
        image: img('oj5eocvwd5au1vpfuazquva3pcc9_shutterstock_1524921077.jpg'),
        description: 'A full day by coach from Matsuya Ginza through Meiji shrine, the Imperial Palace gardens and the temple lanes of Asakusa, with lunch included.'
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
      description: 'Three nights in Hamamatsucho, with a full city day and a day out to Mount Fuji and the Hakone lakes.',
      image: img('7kxl7sgilrs8qq9u4vti16qxyujm_shutterstock_2278159137.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Osaka',
    subtitle: 'Osaka to Kyoto and Nara',
    dayLabel: 'Day 4 to 6',
    images: [
      img('6k3h3zulkuxlsrwgqhlm3j0vbgwx_shutterstock_1370721374.jpg'),
      img('oakkcbyfm7n64pmrd0m216nlmoh0_shutterstock_761090425.jpg'),
      img('ej15n5xfj2cb7mr009esga4oml0w_shutterstock_1370574332.jpg'),
      img('idgqxbdhnqjuj74i3evh650mu98u_shutterstock_1576805158.jpg')
    ],
    dayImages: {
      4: [
        img('2hn59tmyw7g76wpw5js89g7jlxix_1619611599_shutterstock_560030653.jpg'),
        img('1cn9ugvideqjn8iv3g10d6ahpfty_1617195992_Osaka_Science_Museum_2020_Januar.jpg'),
        img('70u3tc8xuuarz97uhxty1b2m3rmq_1617192046_6dd23e1abb0539d588045e45b7e5ddfd.jpg'),
        img('5j6fefqxbxx17zmfusbgrdtk5fmt_1619611510_shutterstock_1494770918.jpg')
      ],
      5: [
        img('2hoazlacf7h8ydirg3skomjckiws_shutterstock_1089530210.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('e62d0zq7xrr0oa64907d13rlvm2i_Kasuga-taisha11bs3200.jpg')
      ],
      6: [
        img('6k3h3zulkuxlsrwgqhlm3j0vbgwx_shutterstock_1370721374.jpg'),
        img('oakkcbyfm7n64pmrd0m216nlmoh0_shutterstock_761090425.jpg'),
        img('ej15n5xfj2cb7mr009esga4oml0w_shutterstock_1370574332.jpg'),
        img('idgqxbdhnqjuj74i3evh650mu98u_shutterstock_1576805158.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Bullet train to Osaka`,
      'Breakfast and check out, then transfer to the station',
      'Bullet train south to Osaka',
      'Check in at your hotel in the centre',
      'Rest of the day free in the city',
      `${DAY_MARK}Day 5 · Kyoto and Nara`,
      'Breakfast, then a full day out of Osaka',
      'Kinkaku-ji, the golden pavilion, on its pond',
      'The deer park and Todai-ji temple in Nara',
      'Back in Osaka for the evening',
      `${DAY_MARK}Day 6 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'Private transfer to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'Osaka Tokyu REI Hotel, Osaka',
      description: '2 nights · Breakfast · Standard room · 3★ · Reliable hotel in central Osaka, a short walk to the subway',
      images: [
        img('ftecvik0q5dixtrqv3i55v79bdoh_346092157.jpg'),
        img('0l77z6g1ocdmlljwwm0q7fov53lp_28d46f6a-04bd-11e8-bcd6-06326e701dd4.jpeg'),
        img('zll59di00v50cfpca4cu06x20v1e_3k%20barcelona6.jpg'),
        img('p7n3hp4dxo1pshqg87ni9fcqduve_room_twin_images_07.jpg'),
        img('h7mzra0deg8p5wzc93gahv7gwi3y_3k%20barcelona7.jpg'),
        img('13tc1dqqb2h3x3obu0uaj577acrt_osaka-tokyu-rei-hotel-general-b44fd3f.jpg'),
        img('y3n88kjewnae9308dwif2w35dau7_3k%20barcelona8.jpg'),
        img('w5lrr1fi7xxelhm1e424cuzbjh2y_220l0w000000k6gja04D0_R_960_660_R5_D.webp')
      ]
    },
    activities: [
      {
        name: 'Kyoto and Nara day trip',
        day: 5,
        optional: false,
        image: img('2hoazlacf7h8ydirg3skomjckiws_shutterstock_1089530210.jpg'),
        description: 'A full day out of Osaka for Kinkaku-ji, the golden pavilion, and then the deer park and Todai-ji temple in Nara.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Two nights in central Osaka with a full day in Kyoto and Nara, and the food streets on your doorstep.',
      image: img('6k3h3zulkuxlsrwgqhlm3j0vbgwx_shutterstock_1370721374.jpg')
    }
  }
];

const detail = {
  slug: 'explore-japan-tokyo-and-osaka',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Explore Japan: Tokyo and Osaka',
  alt: 'Senso-ji temple gate in Asakusa, Tokyo',
  days: '6 days / 5 nights',
  stations: '2 stops',
  transport: 'Bullet train, private transfers and guided day tours',
  tag: 'Value',
  tags: ['First time', 'Short trips'],
  price: 157217,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Hakone', 'Osaka', 'Kyoto', 'Nara'],
  stats: { days: 6, cities: 2, hotels: 2, activities: 3, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'The shortest trip that still gets you Fuji, Kyoto and Nara. Simple hotels, strong days out.',
    quoteMore: 'Keep the last evening for Dotonbori. Osaka eats late and the hotel is a short subway ride from the stalls.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days between Tokyo and Osaka: three nights in Hamamatsucho with a guided city day and a Mount Fuji and Hakone trip, then two nights in central Osaka with a full day in Kyoto and Nara.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights with daily breakfast; bullet train from Tokyo to Osaka; private airport transfers; full day Tokyo city tour with lunch; Mount Fuji and Hakone day trip with bullet train return; Kyoto and Nara sightseeing day tour.',
  intro2: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your hotel in Hamamatsucho\nRest of the day free at your own pace\nOptional: an evening walk through the Shiba park gardens', hotel: 'Keio Presso Inn Hamamatsucho, Tokyo', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your hotel in Hamamatsucho', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo city tour (B, L)', text: 'Breakfast, then a full day coach tour of the city\nMeiji shrine and the Imperial Palace gardens\nLunch included on the tour\nAsakusa and the Senso-ji temple lanes', hotel: 'Keio Presso Inn Hamamatsucho, Tokyo', highlights: ['Breakfast, then a full day coach tour of the city', 'Meiji shrine and the Imperial Palace gardens', 'Lunch included on the tour'] },
    { title: 'Day 3: Mount Fuji and Hakone (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone ropeway\nBullet train back into Tokyo in the evening', hotel: 'Keio Presso Inn Hamamatsucho, Tokyo', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone ropeway'] },
    { title: 'Day 4: Bullet train to Osaka (B)', text: 'Breakfast and check out, then transfer to the station\nBullet train south to Osaka\nCheck in at your hotel in the centre\nRest of the day free in the city', hotel: 'Osaka Tokyu REI Hotel', highlights: ['Breakfast and check out, then transfer to the station', 'Bullet train south to Osaka', 'Check in at your hotel in the centre'] },
    { title: 'Day 5: Kyoto and Nara (B)', text: 'Breakfast, then a full day out of Osaka\nKinkaku-ji, the golden pavilion, on its pond\nThe deer park and Todai-ji temple in Nara\nBack in Osaka for the evening', hotel: 'Osaka Tokyu REI Hotel', highlights: ['Breakfast, then a full day out of Osaka', 'Kinkaku-ji, the golden pavilion, on its pond', 'The deer park and Todai-ji temple in Nara'] },
    { title: 'Day 6: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const exploreJapanTokyoOsakaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const exploreJapanTokyoOsakaProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Hakone', 'Osaka', 'Kyoto', 'Nara'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 3,
  transfers: 8,
  meals: 6,
  price: detail.price,
  images: cardImages
};
