// Tokyo and Osaka: A Tale of Two Cities. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg'),
  img('rwd198veburqy2a8grssg5g7djer_shutterstock_469018031.jpg'),
  img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg'),
  img('6mx3dets08l8fqucy8q5ptmmbaih_shutterstock_426748243.jpg'),
  img('zcclccnpnk2b78cy9usi5x5zdoyk_shutterstock_666197236.jpg'),
  img('fwucq6pta6ufuwkv79qf7vlkpar0_shutterstock_1764063716.jpg'),
  img('hjvdd18dwrrkfqh5hyjbyf1qy0md_shutterstock_2299917035.jpg'),
  img('wriotvvbfc3o6tb222ad7qf9vnlp_shutterstock_2401915617.jpg'),
  img('vqjfk14m6s6fxufma6bl6urcehak_gallery-2.jpg'),
  img('i7pvmoa5sgm8ekkupu1tyd6owiiv_shutterstock_2025119165.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji and Hakone',
    dayLabel: 'Day 1 to 3',
    images: [
      img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg'),
      img('yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg'),
      img('61izsuekzybkh86q2bvapmbmyrlt_shutterstock_355725083.jpg'),
      img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg')
    ],
    dayImages: {
      1: [
        img('ff9ne69wjyszbq1k1clsjfk1c4dv_1617358384_Inokashira-Park-1024x683.jpg'),
        img('iele7cut7wosbp83440c5yyy4663_shutterstock_666196894.jpg'),
        img('pcgbwwkgqbfu2982lragk0yyuxtt_Sumida_Park_2011.jpg'),
        img('dvnb132y05sidy9r0omo9zqe0ram_15849220641_a5a96af87c_o.jpg')
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
      description: 'Three nights in Tokyo with a shared city tour and a day out to Mount Fuji and the Hakone lakes.',
      image: img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Osaka',
    subtitle: 'Osaka to Kyoto and Nara',
    dayLabel: 'Day 4 to 8',
    images: [
      img('lnacm9xp9pgyiylr68qgl6aao0bp_shutterstock_2376751313.jpg'),
      img('rwd198veburqy2a8grssg5g7djer_shutterstock_469018031.jpg'),
      img('yfbvuqj5t7yyjle11bzesj245xnj_shutterstock_1024764949%20(1).jpg'),
      img('hr6rqa9fuvyffjnfzg8t9nnmi4ct_shutterstock_787582243%20(1).jpg')
    ],
    dayImages: {
      4: [
        img('jbkrddvnn2pgz9fmapmdkzlyuget_1617184794_tempat-wisata-di-osaka-3.jpg'),
        img('70u3tc8xuuarz97uhxty1b2m3rmq_1617192046_6dd23e1abb0539d588045e45b7e5ddfd.jpg'),
        img('dwt6ckxokuqpaeo9sopjgm2kjgnq_1617177290_castle-5476737_1920.jpg'),
        img('2hn59tmyw7g76wpw5js89g7jlxix_1619611599_shutterstock_560030653.jpg')
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
        img('5j6fefqxbxx17zmfusbgrdtk5fmt_1619611510_shutterstock_1494770918.jpg'),
        img('p8j21hegqw0bms3xb5bmdhyumt22_1618899586_shutterstock_1737784967.jpg'),
        img('2wlx7w6wiyazb20ydbkvnjzmyhri_1617184267_1pNqAoqzxTJKSXnV27DrpxA.jpg'),
        img('wkyvzo7dz46exr45w06byx2tvsw7_1617188739_Tenjinbashi-suji.jpg')
      ],
      8: [
        img('lnacm9xp9pgyiylr68qgl6aao0bp_shutterstock_2376751313.jpg'),
        img('rwd198veburqy2a8grssg5g7djer_shutterstock_469018031.jpg'),
        img('yfbvuqj5t7yyjle11bzesj245xnj_shutterstock_1024764949%20(1).jpg'),
        img('hr6rqa9fuvyffjnfzg8t9nnmi4ct_shutterstock_787582243%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Bullet train to Osaka`,
      'Breakfast and check out, then transfer to the station',
      'Shinkansen bullet train south to Osaka',
      'Check in at your hotel in Kitashinchi',
      'Rest of the day free in the city',
      `${DAY_MARK}Day 5 · Kyoto and Nara`,
      'Breakfast, then the train across to Kyoto',
      'A shared day tour from Kyoto station',
      'Kinkaku-ji, the golden pavilion, on its pond',
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
      name: 'The Rise Osaka Kitashinchi, Osaka',
      description: '4 nights · Breakfast · Standard room · 4★ · New four star hotel in Kitashinchi, central Osaka',
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
        name: 'Kyoto and Nara day trip',
        day: 5,
        optional: false,
        image: img('e0q6h7smzeb2ecapas5xaz4mi238_shutterstock_762780751.jpg'),
        description: 'A shared day from Kyoto station taking in the golden pavilion at Kinkaku-ji, then the deer park and Todai-ji temple in Nara.'
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
      description: 'Four nights in one hotel with a Kyoto and Nara day, a walking tour of the food streets and two free days.',
      image: img('lnacm9xp9pgyiylr68qgl6aao0bp_shutterstock_2376751313.jpg')
    }
  }
];

const detail = {
  slug: 'tokyo-and-osaka-tale-of-two-cities',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Tokyo and Osaka: A Tale of Two Cities',
  alt: 'Skyscrapers above the Shinjuku streets, Tokyo',
  days: '8 days / 7 nights',
  stations: '2 stops',
  transport: 'Shinkansen bullet train, private transfers and shared day tours',
  tag: 'Best seller',
  tags: ['First time', 'Short trips'],
  price: 142405,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Hakone', 'Osaka', 'Kyoto', 'Nara'],
  stats: { days: 8, cities: 2, hotels: 2, activities: 4, transfers: 7 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['7 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Shared tours keep the price down without losing the sights. Four nights in Osaka then buys you two days of your own.',
    quoteMore: 'Use one free day for Himeji castle, an hour away by train, and the other for Universal Studios if there are teenagers with you.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days between two cities on a shared tour basis: three nights in Tokyo with a city tour and Mount Fuji, then four nights in one Osaka hotel with Kyoto, Nara, a walking tour of the food streets and two free days.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights with daily breakfast; Shinkansen bullet train from Tokyo to Osaka; private airport transfers; shared full day Tokyo city tour; Mount Fuji and Hakone day trip with bullet train return; shared Kyoto and Nara day tour; Osaka half day walking tour.',
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
    { title: 'Day 5: Kyoto and Nara (B)', text: 'Breakfast, then the train across to Kyoto\nA shared day tour from Kyoto station\nKinkaku-ji, the golden pavilion, on its pond\nThe deer park and Todai-ji temple in Nara', hotel: 'The Rise Osaka Kitashinchi', highlights: ['Breakfast, then the train across to Kyoto', 'A shared day tour from Kyoto station', 'Kinkaku-ji, the golden pavilion, on its pond'] },
    { title: 'Day 6: Osaka on foot (B)', text: 'Breakfast, then a half day walking tour of Osaka\nDotonbori and the Kuromon market stalls\nThe lanes around Shinsekai with your guide\nAfternoon free in the city', hotel: 'The Rise Osaka Kitashinchi', highlights: ['Breakfast, then a half day walking tour of Osaka', 'Dotonbori and the Kuromon market stalls', 'The lanes around Shinsekai with your guide'] },
    { title: 'Day 7: A free day in Osaka (B)', text: 'Breakfast and a free day in Osaka\nOptional: Universal Studios Japan for the day\nOptional: Osaka castle and its park\nOptional: a day trip to Himeji or Kobe by train', hotel: 'The Rise Osaka Kitashinchi', highlights: ['Breakfast and a free day in Osaka', 'Optional: Universal Studios Japan for the day', 'Optional: Osaka castle and its park'] },
    { title: 'Day 8: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Japan', href: '/asien/japan' },
  { label: detail.title }
];

export const taleOfTwoCitiesJapanBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const taleOfTwoCitiesJapanProduct = {
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
  transfers: 7,
  meals: 8,
  price: detail.price,
  images: cardImages
};
