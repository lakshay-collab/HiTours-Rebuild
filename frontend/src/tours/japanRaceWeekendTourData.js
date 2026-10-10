// Japan Race Weekend Tour. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('wj9jxfmpxk6juy7qb1ok3i9d1ae2_shutterstock_1650091249.jpg'),
  img('reet28d8my7jdj9zm06al88c0djm_shutterstock_2311605163.jpg'),
  img('bod5zc2vlyf6hxsdznlki15x709y_mainR_01.jpg'),
  img('va7tu5iex0enjnq9uaqnfyufkowl_shutterstock_507147964%20(1).jpg'),
  img('ia89ezbshmwkpv1tpvpc0a2zc4k2_gallery-1.jpg'),
  img('bsns0t5k33qyabozvyhlfjfdcxg5_shutterstock_287934032.jpg'),
  img('gj78fz8c0ymqhf34svyaxlbyx6e2_shutterstock_1017018754%20(1).jpg'),
  img('ak7a5cwtaszfalvktkldmcm7rnm0_shutterstock_2321474899.jpg'),
  img('se7fozuzxltz0frileh5he3jkl4u_shutterstock_2359266537.jpg'),
  img('rwht4ysuk6m51sfh64cy7uri0w9j_shutterstock_1764836006.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('reet28d8my7jdj9zm06al88c0djm_shutterstock_2311605163.jpg'),
  img('dzrrvkhl3x0bs4kcwkfqceusw3fe_1617186371_1200px-USJ_5years.jpg'),
  img('82bpbtjbfuapwdt08qxisa8avn42_4031_11.jpg'),
  img('403p4tnqrmw5sin3dddu9588rtro_4325_01.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Osaka',
    subtitle: 'Osaka to Kyoto',
    dayLabel: 'Day 1 to 4',
    images: [
      img('wj9jxfmpxk6juy7qb1ok3i9d1ae2_shutterstock_1650091249.jpg'),
      img('00skmif8mwx8yjwnjsksqqvv0qpc_shutterstock_1575106243.jpg'),
      img('wriotvvbfc3o6tb222ad7qf9vnlp_shutterstock_2401915617.jpg'),
      img('5d4ac52c1c7pu5k4ycnr79ifpor5_shutterstock_2324290629.jpg')
    ],
    dayImages: {
      1: [
        img('dzrrvkhl3x0bs4kcwkfqceusw3fe_1617186371_1200px-USJ_5years.jpg'),
        img('82bpbtjbfuapwdt08qxisa8avn42_4031_11.jpg'),
        img('wj9jxfmpxk6juy7qb1ok3i9d1ae2_shutterstock_1650091249.jpg'),
        img('00skmif8mwx8yjwnjsksqqvv0qpc_shutterstock_1575106243.jpg')
      ],
      2: [
        img('403p4tnqrmw5sin3dddu9588rtro_4325_01.jpg'),
        img('9wn25mtj79tn8eu3ujd7rvvy8chu_a-bomb-dome-hiroshima.jpg'),
        img('wj9jxfmpxk6juy7qb1ok3i9d1ae2_shutterstock_1650091249.jpg'),
        img('00skmif8mwx8yjwnjsksqqvv0qpc_shutterstock_1575106243.jpg')
      ],
      3: [
        img('37obm7076dgurz51z848xmp2y2sy_dl.beatsnoop.com-3000-f481kYzbXg.jpg'),
        img('dwt6ckxokuqpaeo9sopjgm2kjgnq_1617177290_castle-5476737_1920.jpg'),
        img('q1ibrb7a4xu4nq4a2rql7r0u3zft_1617177625_river-5572289_1920.jpg'),
        img('6srmyfqfq5ujw4k378ms2ufech25_1617196350_a77c8b70-04bf-11e8-a07c-06326e70.jpg')
      ],
      4: [
        img('huoikx4ucbt477ige7c9vq6oh3jy_9ejf0olixqbt1551o8h552rcwnkx_Downpic.cc-83087282.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('175jjcq0s03pjbxnrgbvss1n0fyf_Fushimi%20Inari%20Taisha-1.jpg'),
        img('182vibmg4qqlf60do26572d7lrlg_Kyoto-Arashiyama-Bamboo-Grove1-SH.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Osaka`,
      'Arrival at Kansai Airport and transfer to your hotel',
      'Check in at Kadoma in Osaka',
      'Rest of the day free at your own pace',
      'Dinner at the hotel in the evening',
      `${DAY_MARK}Day 2 · A free day in Osaka`,
      'Breakfast, then a free day in Osaka',
      'Optional: race tickets and the transfer to the circuit',
      'Optional: Universal Studios Japan for the day',
      'Dinner at the hotel in the evening',
      `${DAY_MARK}Day 3 · Osaka sightseeing`,
      'Breakfast, then a guided day around Osaka',
      'Osaka castle and its park',
      'The Dotonbori canal and Kuromon market',
      'Dinner at the hotel in the evening',
      `${DAY_MARK}Day 4 · Kyoto and Arashiyama`,
      'Breakfast, then across to Kyoto for the day',
      'Kinkaku-ji, the golden pavilion, on its pond',
      'The bamboo grove at Arashiyama',
      'The lanes along the Katsura river'
    ],
    accommodation: {
      name: 'Eins Osaka Kadoma City Station, Osaka',
      description: '4 nights · Breakfast and dinner · Standard room · 3★ · Simple hotel at Kadoma, on the line into central Osaka',
      images: [
        img('3vcp59ts5es7w0aycpceyiw16yzx_19afec13536165b7510dc2d7b2b70e6a.webp'),
        img('52plq4kgsoeunewu399he1xav8sv_1ed70c2d65a2faabe2a8c2cb22f37402.webp'),
        img('229k6nzue7bqymwztz5hyukygaov_9b35d0f994011099d5fb0ee06f9f3743.webp'),
        img('phy5dic9582y0seqkjkojii3cxa7_a59f39e0ca6c0185dd29775c33340e27.webp'),
        img('nqh1fl5t93k079pgk3i0muv0ci44_c6bbd1f310d9c8386f90a61d0332faee.webp'),
        img('trdnd7n6k7bhwcdup4wp79uq4pe4_696fe0d0c72625c59fef4617c9500089.webp')
      ]
    },
    activities: [
      {
        name: 'Osaka sightseeing tour',
        day: 3,
        optional: false,
        image: img('37obm7076dgurz51z848xmp2y2sy_dl.beatsnoop.com-3000-f481kYzbXg.jpg'),
        description: 'A guided day through the city: Osaka castle and its park, the Dotonbori canal and the market lanes around Kuromon.'
      },
      {
        name: 'Kyoto and Arashiyama day trip',
        day: 4,
        optional: false,
        image: img('huoikx4ucbt477ige7c9vq6oh3jy_9ejf0olixqbt1551o8h552rcwnkx_Downpic.cc-83087282.jpg'),
        description: 'Kinkaku-ji, the golden pavilion, then the bamboo grove at Arashiyama and the lanes along the Katsura river.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Four nights at Kadoma with a free day for the race or optional tours, a city day and a day out to Kyoto with Arashiyama.',
      image: img('wj9jxfmpxk6juy7qb1ok3i9d1ae2_shutterstock_1650091249.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Nagoya',
    subtitle: 'Nagoya to Nara and Nabana no Sato',
    dayLabel: 'Day 5',
    images: [
      img('reet28d8my7jdj9zm06al88c0djm_shutterstock_2311605163.jpg')
    ],
    dayImages: {
      5: [
        img('8qeiy6mxw8b2mrdtl9ldpip1k9vk_Downpic.cc-103527091.jpg'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('gsoze09r8ko0sbu1ceztnf0kmd3l_shutterstock_1720970440.jpg'),
        img('0bs4ex793be65gwvrd5iubl0pmqy_Downpic.cc-image476786539.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Nara and Nabana no Sato`,
      'Breakfast and check out, then on to Nara',
      'Todai-ji and its great bronze Buddha',
      'The deer park and its tame sika deer',
      'Nabana no Sato illuminations, then Nagoya'
    ],
    accommodation: {
      name: 'Prince Smart Inn Nagoya Sakae, Nagoya',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Modern hotel in the Sakae district of Nagoya',
      images: [
        img('gaa1opxm21j0y2u3zt954a7do8ph_c5d3db5c7bd201164c5191f2acefec3970c8568a.JPEG'),
        img('fkbdgybgqy14ob0pnowfifagaxas_694f193e0fcb9c90d311c9e1d0db17bd9438c1d7.jpeg'),
        img('hl9pbytpcsrv3t4fzzpr889d6p0m_a7ecf81816874cd4b205c0fc3d56b0d05740a549.jpeg'),
        img('bnxyxa7qvn72loeqd0wrjk2poldw_c68c7902fa8d3ada7be7ac27a43a80897bd83205.jpeg'),
        img('uxauj000h8eu83jm0af6p50u7oqv_77e4542a93917c153e05e3d758aeaad5ba92b226.jpeg'),
        img('khma7lv7gx53m1alw8s682fiasne_e974566f07b6389754ce180528a625f898970d83.JPEG'),
        img('qnxhlwogyh9ujqnhnavdjctt8l3w_383f16c988466fd7050b175d5cc7e42898091482.JPEG'),
        img('ab3kxy6mmrle94gsjso4kef7ul3h_2b8aaf7c65b3bd25f09171d1236c9a3b33dcefa9.jpeg'),
        img('2c2wllhtllp51pca2pa7xmf1i6mm_9a67ef9ff8ea5c7dcf73a84b0e98db38c9916993.jpeg'),
        img('uxat555k1ozhpxigdnfo621yqftl_6eff24ea92c6246e3142629e143fd63595bd7db1.jpeg'),
        img('03grmmu8dsoqywo8rlgaeh0qn58c_119dca9e2ad7d046738545b94e4013a03f67e9a3.jpeg'),
        img('s5sgftv33utu4j50j3q4jfqp8jy7_569dc1c36aa783117213b79daff8762dc693fb3f.jpeg'),
        img('eh2p8jqq7pg70ep0bmhtd9uqmchz_2c726dd85f19665a64ecdc927349a04abdde893d.jpeg'),
        img('vj5wgen48jvo41cufymud2vdbpv2_bd47ddf4269d6f301fdddbcb92790c5910f1ae4a.jpeg'),
        img('fru6ii6acx4cj8ep7i45jh3cbkya_a5aebf13beb2a848782f6b898e28c9b109b7b354.jpeg'),
        img('6ogq8wn8wmbbnkf8uuhch0m830lc_815bdbc9328ba1984ed502258887c0643011a748.jpeg'),
        img('7eh0j9yw19fuc0nrirluq2myg5q0_52113dc670b4e4da2fc9efdf205a5fd99cf54607.jpeg'),
        img('i5lol8me8efbrc58vzf9c5hj91fw_7a702562831261e1f32a1ad2685f4d5fe9f13569.jpeg'),
        img('6btggrhdhwasgph5r1mcxi8bdj6c_f733e2c09d18eba59c3b2bc56fdc86aa5ddf824c.jpeg'),
        img('bzn3vzswmnr0wqqk3pqs431wz3t6_b325ff3fed9935261376f51392f08a066b334e6e.JPEG'),
        img('w3vw8d9pr9dw8jhti1t7oxweq5lu_5a555c7dce1bef7d94f1d17b1f15ffb4bf871cae.JPEG'),
        img('342470vn6v7ahqwl7636ragpnkjm_fe83fad3e573c6a3fe1e257fa221faf7ebfdd216.jpeg')
      ]
    },
    activities: [
      {
        name: 'Todai-ji temple and Nara deer park',
        day: 5,
        optional: false,
        image: img('8qeiy6mxw8b2mrdtl9ldpip1k9vk_Downpic.cc-103527091.jpg'),
        description: 'The great bronze Buddha inside Todai-ji, then the deer park where the tame sika deer bow for biscuits.'
      },
      {
        name: 'Nabana no Sato illumination',
        day: 5,
        optional: false,
        image: img('0bs4ex793be65gwvrd5iubl0pmqy_Downpic.cc-image476786539.jpg'),
        description: 'The flower park near Nagoya, where millions of lights are strung into tunnels and fields once the sun goes down.'
      }
    ],
    program: {
      name: 'Nagoya',
      description: 'A night in Nagoya, reached through Nara\'s temple and deer park, with the Nabana no Sato lights after dark.',
      image: img('reet28d8my7jdj9zm06al88c0djm_shutterstock_2311605163.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Tokyo',
    subtitle: 'Tokyo to Hakone',
    dayLabel: 'Day 6 to 9',
    images: [
      img('hjvdd18dwrrkfqh5hyjbyf1qy0md_shutterstock_2299917035.jpg'),
      img('yysqrbd9fq0qhd0o3wxl8nme0o2j_mainL_01%20(1).jpg'),
      img('bod5zc2vlyf6hxsdznlki15x709y_mainR_01.jpg'),
      img('vqjfk14m6s6fxufma6bl6urcehak_gallery-2.jpg')
    ],
    dayImages: {
      6: [
        img('mvxmcsvdyeiiv8yeixeo40nlrc23_Downpic.cc-image615343403.jpg'),
        img('9hdwl7e2hucnek1jhe8l9hwk9s9m_OWAKUDANI%20VALLEY.png'),
        img('lqh0fkdte6vzdbis3ufjabi89yps_Downpic.cc-image455947042.jpg'),
        img('4ijejmm9p326y1f1f6t762u0izb6_shutterstock_1303030627%20(1).jpg')
      ],
      7: [
        img('09pc1h9pa6s106upf2zvejsu4ma7_Ueno%20Park2.jpg'),
        img('iau3aw776fn443su99n2scmo27vl_25899482056_b1e61a167c_k.jpg'),
        img('z5icwndfdu3fjhsdhejgqjq5empw_shutterstock_718177726.jpg'),
        img('ud4obe32nzpk9xuits2o15npw4cs_31057468977_3697b11ae3_o.jpg')
      ],
      8: [
        img('8l3nfuzgvhuh0eyewnb0gav1t7w8_1617351605_mickey-mause-832112_1920.jpg'),
        img('6hzy1swk98chjdiqrq77p05ks1hp_shutterstock_402603553%20(1).jpg'),
        img('iele7cut7wosbp83440c5yyy4663_shutterstock_666196894.jpg'),
        img('hjvdd18dwrrkfqh5hyjbyf1qy0md_shutterstock_2299917035.jpg')
      ],
      9: [
        img('hjvdd18dwrrkfqh5hyjbyf1qy0md_shutterstock_2299917035.jpg'),
        img('yysqrbd9fq0qhd0o3wxl8nme0o2j_mainL_01%20(1).jpg'),
        img('bod5zc2vlyf6hxsdznlki15x709y_mainR_01.jpg'),
        img('vqjfk14m6s6fxufma6bl6urcehak_gallery-2.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Hakone and on to Tokyo`,
      'Breakfast and check out, then east to Hakone',
      'The ropeway over the Owakudani vents',
      'A cruise across Lake Ashi',
      'On to Tokyo and check in at Musashi-Kosugi',
      `${DAY_MARK}Day 7 · Tokyo sightseeing`,
      'Breakfast, then a guided day through Tokyo',
      'Meiji shrine and the Imperial Palace gardens',
      'Asakusa and the Senso-ji temple lanes',
      'Evening free in the city',
      `${DAY_MARK}Day 8 · A free day in Tokyo`,
      'Breakfast and a free day in Tokyo',
      'Optional: teamLab Planets or the Skytree',
      'Optional: Shibuya, Harajuku and the Omotesando lanes',
      'Optional: a day trip to Nikko by train',
      `${DAY_MARK}Day 9 · Departure from Tokyo`,
      'Breakfast at the hotel and check out',
      'Transfer to Narita or Haneda for your flight home'
    ],
    accommodation: {
      name: 'Richmond Hotel Premier Musashikosugi, Tokyo',
      description: '3 nights · Breakfast · Standard room · 3★ · Comfortable hotel at Musashi-Kosugi, fifteen minutes from Shibuya',
      images: [
        img('qyqdjcqra4rau111lje1ue2ojuyo_432792251.jpg'),
        img('c289ywy1aobxmpzeptsq13qrdqnd_432801533.jpg'),
        img('voib77l1aa1e16mpb5lziqj29zn4_78127339.jpg'),
        img('3etccyqxydcpxhg1bd1ibpbyewbu_432802193.jpg'),
        img('dpm6hhriom83u7og89osnox4iwlg_432794714.jpg'),
        img('hww2ly6tso5lmc2nrymrjwn1qxvn_432794699.jpg'),
        img('0kebgr97q8ervja5jhk58isykrlh_581114252.jpg')
      ]
    },
    activities: [
      {
        name: 'Hakone ropeway',
        day: 6,
        optional: false,
        image: img('mvxmcsvdyeiiv8yeixeo40nlrc23_Downpic.cc-image615343403.jpg'),
        description: 'The cable car over the sulphur vents of Owakudani, with Mount Fuji across the valley when the sky is clear.'
      },
      {
        name: 'Lake Ashi cruise',
        day: 6,
        optional: false,
        image: img('lqh0fkdte6vzdbis3ufjabi89yps_Downpic.cc-image455947042.jpg'),
        description: 'A cruise across Lake Ashi past the red torii gate standing in the water at Hakone shrine.'
      },
      {
        name: 'Tokyo sightseeing tour',
        day: 7,
        optional: false,
        image: img('09pc1h9pa6s106upf2zvejsu4ma7_Ueno%20Park2.jpg'),
        description: 'A guided day through the city, from the Meiji shrine and the Imperial Palace gardens to the old temple lanes of Asakusa.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Three nights at Musashi-Kosugi, reached over the Hakone ropeway and Lake Ashi, with a city day and a free day.',
      image: img('hjvdd18dwrrkfqh5hyjbyf1qy0md_shutterstock_2299917035.jpg')
    }
  }
];

const detail = {
  slug: 'japan-race-weekend-tour',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Japan Race Weekend Tour',
  alt: 'Floodlit grandstand and track in Japan at dusk',
  days: '9 days / 8 nights',
  stations: '3 stops',
  transport: 'Coaches, trains and guided touring throughout',
  tag: 'Group tour',
  tags: ['Adventure', 'Culture'],
  price: 183246,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Osaka', 'Kyoto', 'Nara', 'Nagoya', 'Hakone', 'Tokyo'],
  stats: { days: 9, cities: 3, hotels: 3, activities: 7, transfers: 18 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['18 transfers', 'Transport'],
    ['10 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Built around a race weekend in Kansai, with two free days to use for the circuit and the rest of Japan around it.',
    quoteMore: 'Tell us your race dates and we will line the free days up with practice and the main event, then keep the touring for the days between.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days built around a race weekend: four nights near Osaka with a free day for the circuit, a city tour and Kyoto with Arashiyama, a night in Nagoya via Nara and the Nabana no Sato lights, then three nights in Tokyo reached over the Hakone ropeway.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 8 nights with daily breakfast and dinner on four evenings; coaches and trains throughout; Osaka sightseeing tour; Kyoto tour with the Arashiyama bamboo grove; Todai-ji temple and Nara deer park; Nabana no Sato tickets; Hakone ropeway and Lake Ashi cruise; Tokyo sightseeing tour; two free days for the race or optional tours.',
  intro2: 'Not included: international flights; Japan visa fees; race tickets and circuit transfers; lunches and other dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Osaka (D)', text: 'Arrival at Kansai Airport and transfer to your hotel\nCheck in at Kadoma in Osaka\nRest of the day free at your own pace\nDinner at the hotel in the evening', hotel: 'Eins Osaka Kadoma City Station', highlights: ['Arrival at Kansai Airport and transfer to your hotel', 'Check in at Kadoma in Osaka', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: A free day in Osaka (B, D)', text: 'Breakfast, then a free day in Osaka\nOptional: race tickets and the transfer to the circuit\nOptional: Universal Studios Japan for the day\nDinner at the hotel in the evening', hotel: 'Eins Osaka Kadoma City Station', highlights: ['Breakfast, then a free day in Osaka', 'Optional: race tickets and the transfer to the circuit', 'Optional: Universal Studios Japan for the day'] },
    { title: 'Day 3: Osaka sightseeing (B, D)', text: 'Breakfast, then a guided day around Osaka\nOsaka castle and its park\nThe Dotonbori canal and Kuromon market\nDinner at the hotel in the evening', hotel: 'Eins Osaka Kadoma City Station', highlights: ['Breakfast, then a guided day around Osaka', 'Osaka castle and its park', 'The Dotonbori canal and Kuromon market'] },
    { title: 'Day 4: Kyoto and Arashiyama (B)', text: 'Breakfast, then across to Kyoto for the day\nKinkaku-ji, the golden pavilion, on its pond\nThe bamboo grove at Arashiyama\nThe lanes along the Katsura river', hotel: 'Eins Osaka Kadoma City Station', highlights: ['Breakfast, then across to Kyoto for the day', 'Kinkaku-ji, the golden pavilion, on its pond', 'The bamboo grove at Arashiyama'] },
    { title: 'Day 5: Nara and Nabana no Sato (B, D)', text: 'Breakfast and check out, then on to Nara\nTodai-ji and its great bronze Buddha\nThe deer park and its tame sika deer\nNabana no Sato illuminations, then Nagoya', hotel: 'Prince Smart Inn Nagoya Sakae', highlights: ['Breakfast and check out, then on to Nara', 'Todai-ji and its great bronze Buddha', 'The deer park and its tame sika deer'] },
    { title: 'Day 6: Hakone and on to Tokyo (B)', text: 'Breakfast and check out, then east to Hakone\nThe ropeway over the Owakudani vents\nA cruise across Lake Ashi\nOn to Tokyo and check in at Musashi-Kosugi', hotel: 'Richmond Hotel Premier Musashikosugi', highlights: ['Breakfast and check out, then east to Hakone', 'The ropeway over the Owakudani vents', 'A cruise across Lake Ashi'] },
    { title: 'Day 7: Tokyo sightseeing (B)', text: 'Breakfast, then a guided day through Tokyo\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in the city', hotel: 'Richmond Hotel Premier Musashikosugi', highlights: ['Breakfast, then a guided day through Tokyo', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 8: A free day in Tokyo (B)', text: 'Breakfast and a free day in Tokyo\nOptional: teamLab Planets or the Skytree\nOptional: Shibuya, Harajuku and the Omotesando lanes\nOptional: a day trip to Nikko by train', hotel: 'Richmond Hotel Premier Musashikosugi', highlights: ['Breakfast and a free day in Tokyo', 'Optional: teamLab Planets or the Skytree', 'Optional: Shibuya, Harajuku and the Omotesando lanes'] },
    { title: 'Day 9: Departure from Tokyo (B)', text: 'Breakfast at the hotel and check out\nTransfer to Narita or Haneda for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to Narita or Haneda for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; race tickets and circuit transfers; lunches and other dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const japanRaceWeekendTourBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const japanRaceWeekendTourProduct = {
  slug: detail.slug,
  places: ['Osaka', 'Kyoto', 'Nara', 'Nagoya', 'Hakone', 'Tokyo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 7,
  transfers: 18,
  meals: 10,
  price: detail.price,
  images: cardImages
};
