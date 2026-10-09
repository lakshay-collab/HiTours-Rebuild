// Japan Romantic Escape with the Imperial Hotel. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg'),
  img('va7tu5iex0enjnq9uaqnfyufkowl_shutterstock_507147964%20(1).jpg'),
  img('61izsuekzybkh86q2bvapmbmyrlt_shutterstock_355725083.jpg'),
  img('bsns0t5k33qyabozvyhlfjfdcxg5_shutterstock_287934032.jpg'),
  img('xdyj7i31bk427zhdgk2thbw2rv2d_shutterstock_572057020.jpg'),
  img('ak7a5cwtaszfalvktkldmcm7rnm0_shutterstock_2321474899.jpg'),
  img('pbglyllc58xvt8glj2u374y10ybf_shutterstock_598301423.jpg'),
  img('rwht4ysuk6m51sfh64cy7uri0w9j_shutterstock_1764836006.jpg'),
  img('bod5zc2vlyf6hxsdznlki15x709y_mainR_01.jpg'),
  img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg'),
  img('61izsuekzybkh86q2bvapmbmyrlt_shutterstock_355725083.jpg'),
  img('ak7a5cwtaszfalvktkldmcm7rnm0_shutterstock_2321474899.jpg'),
  img('rwht4ysuk6m51sfh64cy7uri0w9j_shutterstock_1764836006.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji and Hakone',
    dayLabel: 'Day 1 to 3',
    images: [
      img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg'),
      img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg'),
      img('yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg'),
      img('61izsuekzybkh86q2bvapmbmyrlt_shutterstock_355725083.jpg')
    ],
    dayImages: {
      1: [
        img('dvnb132y05sidy9r0omo9zqe0ram_15849220641_a5a96af87c_o.jpg'),
        img('e5f438umy5kix56t1stawpi928a0_1618899525_shutterstock_1427133110.jpg'),
        img('5d8zp8rm397hfvz02jntd54oueue_8221793202_67e195e47e_o.jpg'),
        img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg')
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
      'Optional: an evening at the Tokyo Tower observatory',
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
      description: 'Three nights in Tokyo for the two of you, with a city day and a day out to Mount Fuji and the Hakone lakes.',
      image: img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg')
    }
  },
  {
    letter: 'B',
    name: 'Osaka',
    subtitle: 'Osaka to Kyoto and Nara',
    dayLabel: 'Day 4 to 7',
    images: [
      img('5d4ac52c1c7pu5k4ycnr79ifpor5_shutterstock_2324290629.jpg'),
      img('va7tu5iex0enjnq9uaqnfyufkowl_shutterstock_507147964%20(1).jpg'),
      img('i7pvmoa5sgm8ekkupu1tyd6owiiv_shutterstock_2025119165.jpg'),
      img('g8f2aex4vg106e8wh3k0x1np7hov_shutterstock_382909786.jpg')
    ],
    dayImages: {
      4: [
        img('1cn9ugvideqjn8iv3g10d6ahpfty_1617195992_Osaka_Science_Museum_2020_Januar.jpg'),
        img('2hn59tmyw7g76wpw5js89g7jlxix_1619611599_shutterstock_560030653.jpg'),
        img('5d4ac52c1c7pu5k4ycnr79ifpor5_shutterstock_2324290629.jpg'),
        img('va7tu5iex0enjnq9uaqnfyufkowl_shutterstock_507147964%20(1).jpg')
      ],
      5: [
        img('2hoazlacf7h8ydirg3skomjckiws_shutterstock_1089530210.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('e62d0zq7xrr0oa64907d13rlvm2i_Kasuga-taisha11bs3200.jpg')
      ],
      6: [
        img('is1ejpaqiwr1iwdimb7nx5ml1oja_shutterstock_1024765225.jpg'),
        img('q1ibrb7a4xu4nq4a2rql7r0u3zft_1617177625_river-5572289_1920.jpg'),
        img('nozs79tjbgfixymgrh3voo9bhf1z_Osaka_Dotonbori_Ebisu_Bridge.jpg'),
        img('8fd2fbhoaurwbsxmgzdldygvuzk4_53207269026_e76f09ed3d_o.jpg')
      ],
      7: [
        img('5d4ac52c1c7pu5k4ycnr79ifpor5_shutterstock_2324290629.jpg'),
        img('va7tu5iex0enjnq9uaqnfyufkowl_shutterstock_507147964%20(1).jpg'),
        img('i7pvmoa5sgm8ekkupu1tyd6owiiv_shutterstock_2025119165.jpg'),
        img('g8f2aex4vg106e8wh3k0x1np7hov_shutterstock_382909786.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Bullet train to Osaka`,
      'Breakfast and check out, then transfer to the station',
      'Shinkansen bullet train south to Osaka',
      'Check in at the Imperial Hotel on the river',
      'Rest of the day free for the two of you',
      `${DAY_MARK}Day 5 · Kyoto and Nara`,
      'Breakfast, then a full day out of Osaka',
      'Kinkaku-ji, the golden pavilion, on its pond',
      'The deer park and Todai-ji temple in Nara',
      'Back in Osaka for the evening',
      `${DAY_MARK}Day 6 · Osaka on foot`,
      'Breakfast, then a half day walking tour of Osaka',
      'Dotonbori and the Kuromon market stalls',
      'The lanes around Shinsekai with your guide',
      'Afternoon free, or a riverside walk from the hotel',
      `${DAY_MARK}Day 7 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'Private transfer to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'Imperial Hotel Osaka, Osaka',
      description: '3 nights · Breakfast · Standard room · 5★ · Five star riverside landmark, a short drive from Umeda',
      images: [
        img('c6jabjdgzt8jl8t0xtt29go97yio_directory_appearance_S.jpg'),
        img('r5kgk2yjevh9ay5nvk26hoqir0g0_download%20-%202024-01-04T171407.339.jfif'),
        img('zhgqzaa0mzlveqcp2pxf6hb9db3l_download%20-%202024-01-04T171353.164.jfif'),
        img('k5j5to0n4pgrwyt369xmdbdtpupz_download%20-%202024-01-04T171425.522.jfif'),
        img('6vxsbuvw75l5zo9l08rm73emt80e_download%20-%202024-01-04T171230.198.jfif'),
        img('2vlaruqb5yakfklqzbrguzuq57g7_download%20-%202024-01-04T171505.382.jfif'),
        img('j4b818blu0smyxpsjkmuda5aw8co_download%20-%202024-01-04T171219.520.jfif'),
        img('055zlsm8uny9zbnxk10lfs2fvcmt_download%20-%202024-01-04T171246.992.jfif'),
        img('teci3qmbec40q54o2qxhrfr89uwq_download%20-%202024-01-04T171439.248.jfif'),
        img('brz66o7i6mrn1as1ugpe3dpykor8_download%20-%202024-01-04T171346.099.jfif'),
        img('9fcmpdzq9cb7mddi2q5dfdrmy2gp_download%20-%202024-01-04T171418.085.jfif'),
        img('0cazw7l50d0iwa0i2hikvgk374fo_download%20-%202024-01-04T171433.054.jfif'),
        img('p17z81e3ycvku7za7nptnmupq564_download%20-%202024-01-04T171334.128.jfif'),
        img('ai3lfov63bnk0jye81hw1xnysfqd_download%20-%202024-01-04T171236.448.jfif'),
        img('60rc77dr3tknzwydn311p2cj7n16_download%20-%202024-01-04T171341.586.jfif')
      ]
    },
    activities: [
      {
        name: 'Kyoto and Nara day trip',
        day: 5,
        optional: false,
        image: img('2hoazlacf7h8ydirg3skomjckiws_shutterstock_1089530210.jpg'),
        description: 'A full day out of Osaka for Kinkaku-ji, the golden pavilion, and then the deer park and Todai-ji temple in Nara.'
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
      description: 'Three nights at a five star riverside hotel, with a day in Kyoto and Nara and a walking tour of the food streets.',
      image: img('5d4ac52c1c7pu5k4ycnr79ifpor5_shutterstock_2324290629.jpg')
    }
  }
];

const detail = {
  slug: 'japan-romantic-escape-with-imperial-hotel',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Japan Romantic Escape with the Imperial Hotel',
  alt: 'Cherry blossom along a quiet canal in Osaka, Japan',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Shinkansen bullet train, private transfers and guided tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Luxury'],
  price: 142215,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Hakone', 'Osaka', 'Kyoto', 'Nara'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 4, transfers: 7 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['7 transfers', 'Transport'],
    ['4 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three simple nights in Tokyo, then three at the Imperial in Osaka. Spend the hotel money where you will actually sit still.',
    quoteMore: 'Ask for a river view room at the Imperial. The cherry trees along the Okawa are a five minute walk from the lobby in spring.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days for two: three nights in Tokyo with a city tour and a Mount Fuji day, then the bullet train to Osaka for three nights at the five star Imperial Hotel, with Kyoto, Nara and a walking tour of the food streets.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights accommodation including three at the Imperial Hotel Osaka, with breakfast on the first four mornings; bullet train from Tokyo to Osaka; private airport transfers; full day Tokyo city tour; Mount Fuji and Hakone day trip; Kyoto and Nara day trip; Osaka half day walking tour.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your hotel in Hamamatsucho\nRest of the day free at your own pace\nOptional: an evening at the Tokyo Tower observatory', hotel: 'Keio Presso Inn Hamamatsucho, Tokyo', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your hotel in Hamamatsucho', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo city tour (B)', text: 'Breakfast, then a full day coach tour of the city\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in the city', hotel: 'Keio Presso Inn Hamamatsucho, Tokyo', highlights: ['Breakfast, then a full day coach tour of the city', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Mount Fuji and Hakone (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone ropeway\nBullet train back into Tokyo in the evening', hotel: 'Keio Presso Inn Hamamatsucho, Tokyo', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone ropeway'] },
    { title: 'Day 4: Bullet train to Osaka (B)', text: 'Breakfast and check out, then transfer to the station\nShinkansen bullet train south to Osaka\nCheck in at the Imperial Hotel on the river\nRest of the day free for the two of you', hotel: 'Imperial Hotel Osaka', highlights: ['Breakfast and check out, then transfer to the station', 'Shinkansen bullet train south to Osaka', 'Check in at the Imperial Hotel on the river'] },
    { title: 'Day 5: Kyoto and Nara (-)', text: 'Breakfast, then a full day out of Osaka\nKinkaku-ji, the golden pavilion, on its pond\nThe deer park and Todai-ji temple in Nara\nBack in Osaka for the evening', hotel: 'Imperial Hotel Osaka', highlights: ['Breakfast, then a full day out of Osaka', 'Kinkaku-ji, the golden pavilion, on its pond', 'The deer park and Todai-ji temple in Nara'] },
    { title: 'Day 6: Osaka on foot (-)', text: 'Breakfast, then a half day walking tour of Osaka\nDotonbori and the Kuromon market stalls\nThe lanes around Shinsekai with your guide\nAfternoon free, or a riverside walk from the hotel', hotel: 'Imperial Hotel Osaka', highlights: ['Breakfast, then a half day walking tour of Osaka', 'Dotonbori and the Kuromon market stalls', 'The lanes around Shinsekai with your guide'] },
    { title: 'Day 7: Departure from Osaka (-)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Japan', href: '/asien/japan' },
  { label: detail.title }
];

export const japanRomanticEscapeImperialBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const japanRomanticEscapeImperialProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Hakone', 'Osaka', 'Kyoto', 'Nara'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 4,
  transfers: 7,
  meals: 4,
  price: detail.price,
  images: cardImages
};
