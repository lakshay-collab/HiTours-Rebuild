// Japan Through Time: Historic Trails. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg'),
  img('cwl84srtffqjik0ayof7sgysfmvb_shutterstock_1385919368.jpg'),
  img('rwd198veburqy2a8grssg5g7djer_shutterstock_469018031.jpg'),
  img('8uer6kpve5exz099231cw3oei92e_shutterstock_58934503.jpg'),
  img('u8rryut2rpcx72ify5pfq7slfshl_shutterstock_2243167707.jpg'),
  img('j4a2pg3qcw8w7pwsr1eyau64kdjj_shutterstock_691237765.jpg'),
  img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg'),
  img('hbuf91h5gymrr43a6gefj76r8ete_shutterstock_634895807.jpg'),
  img('00skmif8mwx8yjwnjsksqqvv0qpc_shutterstock_1575106243.jpg'),
  img('8a1guib4pdk1t3rfaoo9h6fki7xm_shutterstock_637507525.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji and Hakone',
    dayLabel: 'Day 1 to 3',
    images: [
      img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg'),
      img('1yv1a968ghyiwiwbsbwvzfu388l0_shutterstock_2300479567.jpg'),
      img('9gxo0w9zfmmbmjg8895gp4h3leqm_shutterstock_1966867324.jpg'),
      img('udkn4h8at26lrvvwwmlaxguh16hf_shutterstock_1836078037.jpg')
    ],
    dayImages: {
      1: [
        img('dvnb132y05sidy9r0omo9zqe0ram_15849220641_a5a96af87c_o.jpg'),
        img('e5f438umy5kix56t1stawpi928a0_1618899525_shutterstock_1427133110.jpg'),
        img('5d8zp8rm397hfvz02jntd54oueue_8221793202_67e195e47e_o.jpg'),
        img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg')
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
      'Asakusa and the Senso-ji temple lanes',
      'Evening free in the city',
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
        name: 'Tokyo city tour by coach',
        day: 2,
        optional: false,
        image: img('oj5eocvwd5au1vpfuazquva3pcc9_shutterstock_1524921077.jpg'),
        description: 'A full day by coach from Matsuya Ginza through Meiji shrine, the Imperial Palace gardens and the temple lanes of Asakusa.'
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
      image: img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Hiroshima',
    subtitle: 'Hiroshima to Miyajima',
    dayLabel: 'Day 4 to 5',
    images: [
      img('xelgo3vvg7tvk0ho6klxvu4ejbmh_shutterstock_1620819760.jpg'),
      img('cwl84srtffqjik0ayof7sgysfmvb_shutterstock_1385919368.jpg'),
      img('nd48tylxzfdkb788tdezsrfcdr24_shutterstock_1673742691.jpg'),
      img('urexlkfkvz3whbtfb3k0rk3iu9rn_shutterstock_1618153279.jpg')
    ],
    dayImages: {
      4: [
        img('xa4j0wjprpfbgrj5ex3rnmz6kd92_Hiroshima-Castle-1024x683.jpg'),
        img('xx7adpg9x8y5bh7oaxh71c9mnhvn_shukkeien_garden_hiroshima_japan_016_xl.jpg'),
        img('xelgo3vvg7tvk0ho6klxvu4ejbmh_shutterstock_1620819760.jpg'),
        img('cwl84srtffqjik0ayof7sgysfmvb_shutterstock_1385919368.jpg')
      ],
      5: [
        img('trbz7j3iv4gug4ct6l5tlrfdomx4_shutterstock_1833107542.jpg'),
        img('6hqk9raek422s1htdubidnhqa0h9_40003599095_3d03c153fd_o.jpg'),
        img('9lzrldxkzxmqnzanh56c0l82e2y6_30886221447_8ff83ea243_o.jpg'),
        img('rdl3mr0ytwltczrxe46lugdutz5l_52530995501_589c03192f_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Bullet train to Hiroshima`,
      'Breakfast and check out, then transfer to the station',
      'Shinkansen bullet train west to Hiroshima',
      'Check in opposite the station',
      'Rest of the day free in the city',
      `${DAY_MARK}Day 5 · Hiroshima and Miyajima`,
      'Breakfast, then a full day tour with your guide',
      'The Peace Memorial Park, museum and the A-Bomb Dome',
      'Ferry across to Miyajima island',
      'The floating torii gate and Itsukushima shrine'
    ],
    accommodation: {
      name: 'APA Hiroshima Ekimae, Hiroshima',
      description: '2 nights · Breakfast · Standard room · 3★ · Simple comfortable hotel opposite Hiroshima station',
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
        name: 'Hiroshima and Miyajima full day tour',
        day: 5,
        optional: false,
        image: img('trbz7j3iv4gug4ct6l5tlrfdomx4_shutterstock_1833107542.jpg'),
        description: 'The Peace Memorial Park and museum, then the ferry to Miyajima for the floating torii gate and Itsukushima shrine.'
      }
    ],
    program: {
      name: 'Hiroshima',
      description: 'Two nights opposite the station, with a full day that pairs the Peace Memorial Park with the island shrine at Miyajima.',
      image: img('xelgo3vvg7tvk0ho6klxvu4ejbmh_shutterstock_1620819760.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Osaka',
    subtitle: 'Osaka to Kyoto and Nara',
    dayLabel: 'Day 6 to 10',
    images: [
      img('gtk8i9anl0fl06gh6jr9ac6b4g33_shutterstock_1789061315.jpg'),
      img('lnacm9xp9pgyiylr68qgl6aao0bp_shutterstock_2376751313.jpg'),
      img('rwd198veburqy2a8grssg5g7djer_shutterstock_469018031.jpg'),
      img('yfbvuqj5t7yyjle11bzesj245xnj_shutterstock_1024764949%20(1).jpg')
    ],
    dayImages: {
      6: [
        img('1cn9ugvideqjn8iv3g10d6ahpfty_1617195992_Osaka_Science_Museum_2020_Januar.jpg'),
        img('70u3tc8xuuarz97uhxty1b2m3rmq_1617192046_6dd23e1abb0539d588045e45b7e5ddfd.jpg'),
        img('2hn59tmyw7g76wpw5js89g7jlxix_1619611599_shutterstock_560030653.jpg'),
        img('sujymokpjevxdzsy7qbkkl8uauc0_1617192483_Taman-Nakanoshima-Jepang-Kedamai.jpg')
      ],
      7: [
        img('2hoazlacf7h8ydirg3skomjckiws_shutterstock_1089530210.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('e62d0zq7xrr0oa64907d13rlvm2i_Kasuga-taisha11bs3200.jpg')
      ],
      8: [
        img('is1ejpaqiwr1iwdimb7nx5ml1oja_shutterstock_1024765225.jpg'),
        img('q1ibrb7a4xu4nq4a2rql7r0u3zft_1617177625_river-5572289_1920.jpg'),
        img('nozs79tjbgfixymgrh3voo9bhf1z_Osaka_Dotonbori_Ebisu_Bridge.jpg'),
        img('8fd2fbhoaurwbsxmgzdldygvuzk4_53207269026_e76f09ed3d_o.jpg')
      ],
      9: [
        img('prlft4rmm7y6y2ja7qs3wngxt9nj_1617188433_100k1f000001gugmz756A.jpg'),
        img('5j6fefqxbxx17zmfusbgrdtk5fmt_1619611510_shutterstock_1494770918.jpg'),
        img('wkyvzo7dz46exr45w06byx2tvsw7_1617188739_Tenjinbashi-suji.jpg'),
        img('p8j21hegqw0bms3xb5bmdhyumt22_1618899586_shutterstock_1737784967.jpg')
      ],
      10: [
        img('gtk8i9anl0fl06gh6jr9ac6b4g33_shutterstock_1789061315.jpg'),
        img('lnacm9xp9pgyiylr68qgl6aao0bp_shutterstock_2376751313.jpg'),
        img('rwd198veburqy2a8grssg5g7djer_shutterstock_469018031.jpg'),
        img('yfbvuqj5t7yyjle11bzesj245xnj_shutterstock_1024764949%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · On to Osaka`,
      'Breakfast and check out, then back to the station',
      'Bullet train east to Osaka',
      'Check in at your hotel in the centre',
      'Rest of the day free in the city',
      `${DAY_MARK}Day 7 · Kyoto and Nara`,
      'Breakfast, then a full day out of Osaka',
      'Kinkaku-ji, the golden pavilion, on its pond',
      'The deer park and Todai-ji temple in Nara',
      'Back in Osaka for the evening',
      `${DAY_MARK}Day 8 · Osaka on foot`,
      'Breakfast, then a half day walking tour of Osaka',
      'Dotonbori and the Kuromon market stalls',
      'The lanes around Shinsekai with your guide',
      'Afternoon free in the city',
      `${DAY_MARK}Day 9 · A free day in Osaka`,
      'Breakfast and a free day in Osaka',
      'Optional: Osaka castle and its park',
      'Optional: Universal Studios Japan for the day',
      'Optional: a day trip to Himeji or Kobe by train',
      `${DAY_MARK}Day 10 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'Private transfer to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'Osaka Tokyu REI Hotel, Osaka',
      description: '4 nights · Breakfast · Standard room · 3★ · Reliable hotel in central Osaka, a short walk to the subway',
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
        day: 7,
        optional: false,
        image: img('2hoazlacf7h8ydirg3skomjckiws_shutterstock_1089530210.jpg'),
        description: 'A full day out of Osaka for Kinkaku-ji, the golden pavilion, and then the deer park and Todai-ji temple in Nara.'
      },
      {
        name: 'Osaka walking tour',
        day: 8,
        optional: false,
        image: img('is1ejpaqiwr1iwdimb7nx5ml1oja_shutterstock_1024765225.jpg'),
        description: 'Half a day on foot through Dotonbori, the Kuromon market and the lanes around Shinsekai with a guide who knows where to eat.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Four nights to finish with a Kyoto and Nara day, a walking tour of the food streets and a free day.',
      image: img('gtk8i9anl0fl06gh6jr9ac6b4g33_shutterstock_1789061315.jpg')
    }
  }
];

const detail = {
  slug: 'japan-through-time-historic-trails',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Japan Through Time: Historic Trails',
  alt: 'The A-Bomb Dome beside the river in Hiroshima, Japan',
  days: '10 days / 9 nights',
  stations: '3 stops',
  transport: 'Shinkansen bullet train, private transfers and guided tours',
  tag: 'Culture',
  tags: ['Culture', 'Value'],
  price: 168840,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Hiroshima', 'Miyajima', 'Osaka', 'Kyoto', 'Nara'],
  stats: { days: 10, cities: 3, hotels: 3, activities: 4, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Ten days, three cities and simple hotels in the right places. The money goes on the trains and the days out instead.',
    quoteMore: 'Hiroshima deserves two nights, not one. The park in the early morning before the coaches arrive is the reason to stay over.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Ten days on a simpler budget: three nights in Tokyo with a city tour and Mount Fuji, two in Hiroshima for the Peace Memorial Park and Miyajima, then four in Osaka with Kyoto, Nara, a walking tour and a free day.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 9 nights accommodation with breakfast on the first six mornings; bullet train between Tokyo, Hiroshima and Osaka; private airport transfers; full day Tokyo city tour; Mount Fuji and Hakone day trip; Hiroshima and Miyajima full day tour; Kyoto and Nara day trip; Osaka half day walking tour.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your hotel in Hamamatsucho\nRest of the day free at your own pace\nOptional: an evening walk through the Shiba park gardens', hotel: 'Keio Presso Inn Hamamatsucho, Tokyo', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your hotel in Hamamatsucho', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo city tour (B)', text: 'Breakfast, then a full day coach tour of the city\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in the city', hotel: 'Keio Presso Inn Hamamatsucho, Tokyo', highlights: ['Breakfast, then a full day coach tour of the city', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Mount Fuji and Hakone (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone ropeway\nBullet train back into Tokyo in the evening', hotel: 'Keio Presso Inn Hamamatsucho, Tokyo', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone ropeway'] },
    { title: 'Day 4: Bullet train to Hiroshima (B)', text: 'Breakfast and check out, then transfer to the station\nShinkansen bullet train west to Hiroshima\nCheck in opposite the station\nRest of the day free in the city', hotel: 'APA Hiroshima Ekimae', highlights: ['Breakfast and check out, then transfer to the station', 'Shinkansen bullet train west to Hiroshima', 'Check in opposite the station'] },
    { title: 'Day 5: Hiroshima and Miyajima (B)', text: 'Breakfast, then a full day tour with your guide\nThe Peace Memorial Park, museum and the A-Bomb Dome\nFerry across to Miyajima island\nThe floating torii gate and Itsukushima shrine', hotel: 'APA Hiroshima Ekimae', highlights: ['Breakfast, then a full day tour with your guide', 'The Peace Memorial Park, museum and the A-Bomb Dome', 'Ferry across to Miyajima island'] },
    { title: 'Day 6: On to Osaka (B)', text: 'Breakfast and check out, then back to the station\nBullet train east to Osaka\nCheck in at your hotel in the centre\nRest of the day free in the city', hotel: 'Osaka Tokyu REI Hotel', highlights: ['Breakfast and check out, then back to the station', 'Bullet train east to Osaka', 'Check in at your hotel in the centre'] },
    { title: 'Day 7: Kyoto and Nara (B)', text: 'Breakfast, then a full day out of Osaka\nKinkaku-ji, the golden pavilion, on its pond\nThe deer park and Todai-ji temple in Nara\nBack in Osaka for the evening', hotel: 'Osaka Tokyu REI Hotel', highlights: ['Breakfast, then a full day out of Osaka', 'Kinkaku-ji, the golden pavilion, on its pond', 'The deer park and Todai-ji temple in Nara'] },
    { title: 'Day 8: Osaka on foot (-)', text: 'Breakfast, then a half day walking tour of Osaka\nDotonbori and the Kuromon market stalls\nThe lanes around Shinsekai with your guide\nAfternoon free in the city', hotel: 'Osaka Tokyu REI Hotel', highlights: ['Breakfast, then a half day walking tour of Osaka', 'Dotonbori and the Kuromon market stalls', 'The lanes around Shinsekai with your guide'] },
    { title: 'Day 9: A free day in Osaka (-)', text: 'Breakfast and a free day in Osaka\nOptional: Osaka castle and its park\nOptional: Universal Studios Japan for the day\nOptional: a day trip to Himeji or Kobe by train', hotel: 'Osaka Tokyu REI Hotel', highlights: ['Breakfast and a free day in Osaka', 'Optional: Osaka castle and its park', 'Optional: Universal Studios Japan for the day'] },
    { title: 'Day 10: Departure from Osaka (-)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Japan', href: '/asien/japan' },
  { label: detail.title }
];

export const japanThroughTimeHistoricTrailsBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const japanThroughTimeHistoricTrailsProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Hiroshima', 'Miyajima', 'Osaka', 'Kyoto', 'Nara'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 10,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 4,
  transfers: 9,
  meals: 6,
  price: detail.price,
  images: cardImages
};
