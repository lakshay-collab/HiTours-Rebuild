// Jewels of Japan with Mount Fuji. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ia89ezbshmwkpv1tpvpc0a2zc4k2_gallery-1.jpg'),
  img('a3klwqjmrp3w9t5hfpniopbrg0ho_shutterstock_2333983371.jpg'),
  img('gj78fz8c0ymqhf34svyaxlbyx6e2_shutterstock_1017018754%20(1).jpg'),
  img('ej15n5xfj2cb7mr009esga4oml0w_shutterstock_1370574332.jpg'),
  img('se7fozuzxltz0frileh5he3jkl4u_shutterstock_2359266537.jpg'),
  img('rf2q8xarmubdq146v3y4624kctc7_shutterstock_209751268.jpg'),
  img('5cc7r5rgr3pakqu6cu75wh1retvg_shutterstock_1281956065.jpg'),
  img('tnr6dw1lihzobjh5bj5x09mp7nj0_shutterstock_793305754.jpg'),
  img('udkn4h8at26lrvvwwmlaxguh16hf_shutterstock_1836078037.jpg'),
  img('nperxppzyea8k9fcvudr94ss24x6_shutterstock_272327813.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('ia89ezbshmwkpv1tpvpc0a2zc4k2_gallery-1.jpg'),
  img('gj78fz8c0ymqhf34svyaxlbyx6e2_shutterstock_1017018754%20(1).jpg'),
  img('ej15n5xfj2cb7mr009esga4oml0w_shutterstock_1370574332.jpg'),
  img('se7fozuzxltz0frileh5he3jkl4u_shutterstock_2359266537.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji and Hakone',
    dayLabel: 'Day 1 to 3',
    images: [
      img('ia89ezbshmwkpv1tpvpc0a2zc4k2_gallery-1.jpg'),
      img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg'),
      img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg'),
      img('gj78fz8c0ymqhf34svyaxlbyx6e2_shutterstock_1017018754%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('e5f438umy5kix56t1stawpi928a0_1618899525_shutterstock_1427133110.jpg'),
        img('dvnb132y05sidy9r0omo9zqe0ram_15849220641_a5a96af87c_o.jpg'),
        img('5d8zp8rm397hfvz02jntd54oueue_8221793202_67e195e47e_o.jpg'),
        img('iele7cut7wosbp83440c5yyy4663_shutterstock_666196894.jpg')
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
      'Check in at your hotel in Kyobashi',
      'Rest of the day free at your own pace',
      'Optional: an evening walk through Ginza',
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
      name: 'Mitsui Garden Hotel Kyobashi, Tokyo',
      description: '3 nights · Breakfast · Standard room · 3★ · Smart hotel in Kyobashi, a short walk from Tokyo station',
      images: [
        img('3u38lfnrby1di9mbhlz5qt13loa7_288006099.jpg'),
        img('r9k315qdlnf416xjt6r4qqxi4pzc_288015164.jpg'),
        img('jqdfuwllw8xdsw7k92vkajpunaoc_288016624.jpg'),
        img('qxijdvoq42q42ancz9osw1bfdgo0_287863001.jpg'),
        img('ujphn3p5v2w0btzb6ej7bfzu21b5_288016825.jpg'),
        img('4aiif37dkczhszh7l4lvdrzhs33x_288021015.jpg'),
        img('n31dkr74tx46lteb3xlltxugri9n_02.jpg'),
        img('8t9wtla8xjxfhwqpqz88vrg40c57_288113341.jpg'),
        img('jprc484xf99gmkl5c7il29dd2y6x_img2017022314225036579400.jpg'),
        img('k3wdvs3iskz4izqoalfced8ntsa4_287862997.jpg'),
        img('j5mhnr4f1grl049y1xht7ajjsg45_287862989.jpg'),
        img('x6oj1c13bq06czm96fnkj5n2yhov_501283806.jpg')
      ]
    },
    activities: [
      {
        name: 'Tokyo city tour with lunch',
        day: 2,
        optional: false,
        image: img('oj5eocvwd5au1vpfuazquva3pcc9_shutterstock_1524921077.jpg'),
        description: 'A full day by coach from Matsuya Ginza through Meiji shrine, the Imperial Palace gardens and Asakusa, with lunch included.'
      },
      {
        name: 'Mount Fuji and Hakone day trip',
        day: 3,
        optional: false,
        image: img('39ndql7vpg0emtn4pc108qs5bzwf_shutterstock_1023211282.jpg'),
        description: 'The fifth station on Mount Fuji, Lake Ashi and the Hakone ropeway, with the bullet train back into Tokyo at the end of the day.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Three nights beside Tokyo station, with a full city day and a day out to Mount Fuji and Hakone that returns by bullet train.',
      image: img('ia89ezbshmwkpv1tpvpc0a2zc4k2_gallery-1.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Osaka',
    subtitle: 'Osaka to Kyoto and Nara',
    dayLabel: 'Day 4 to 7',
    images: [
      img('fo7gecjnwvtcg8ygpphrauwfv1te_shutterstock_668037958.jpg'),
      img('a3klwqjmrp3w9t5hfpniopbrg0ho_shutterstock_2333983371.jpg'),
      img('6k3h3zulkuxlsrwgqhlm3j0vbgwx_shutterstock_1370721374.jpg'),
      img('oakkcbyfm7n64pmrd0m216nlmoh0_shutterstock_761090425.jpg')
    ],
    dayImages: {
      4: [
        img('1cn9ugvideqjn8iv3g10d6ahpfty_1617195992_Osaka_Science_Museum_2020_Januar.jpg'),
        img('2hn59tmyw7g76wpw5js89g7jlxix_1619611599_shutterstock_560030653.jpg'),
        img('5j6fefqxbxx17zmfusbgrdtk5fmt_1619611510_shutterstock_1494770918.jpg'),
        img('jbkrddvnn2pgz9fmapmdkzlyuget_1617184794_tempat-wisata-di-osaka-3.jpg')
      ],
      5: [
        img('2hoazlacf7h8ydirg3skomjckiws_shutterstock_1089530210.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('e62d0zq7xrr0oa64907d13rlvm2i_Kasuga-taisha11bs3200.jpg')
      ],
      6: [
        img('dwt6ckxokuqpaeo9sopjgm2kjgnq_1617177290_castle-5476737_1920.jpg'),
        img('z0k8sk0d2hiuy3hcxzh1v5vxtz2b_42930256402_5921da6d16_o.jpg'),
        img('6ler7sujf35tfk5o4c0knfk97jlp_1617178150_osaka-2159435_1920.jpg'),
        img('6srmyfqfq5ujw4k378ms2ufech25_1617196350_a77c8b70-04bf-11e8-a07c-06326e70.jpg')
      ],
      7: [
        img('fo7gecjnwvtcg8ygpphrauwfv1te_shutterstock_668037958.jpg'),
        img('a3klwqjmrp3w9t5hfpniopbrg0ho_shutterstock_2333983371.jpg'),
        img('6k3h3zulkuxlsrwgqhlm3j0vbgwx_shutterstock_1370721374.jpg'),
        img('oakkcbyfm7n64pmrd0m216nlmoh0_shutterstock_761090425.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Bullet train to Osaka`,
      'Breakfast and check out, then transfer to the station',
      'Shinkansen bullet train south to Osaka',
      'Check in at your hotel in Kita',
      'Rest of the day free in the city',
      `${DAY_MARK}Day 5 · Kyoto and Nara`,
      'Breakfast, then a full day out to Kyoto and Nara',
      'Kinkaku-ji, the golden pavilion, on its pond',
      'The torii gate paths at Fushimi Inari',
      'The deer park and Todai-ji temple in Nara',
      `${DAY_MARK}Day 6 · A free day in Osaka`,
      'Breakfast and a free day in Osaka',
      'Optional: Dotonbori and the Kuromon market stalls',
      'Optional: Osaka castle and its park',
      'Optional: Universal Studios Japan for the day',
      `${DAY_MARK}Day 7 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'Private transfer to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'Hotel Monterey Osaka, Osaka',
      description: '3 nights · Breakfast · Standard room · 3★ · European styled hotel in Kita, close to Osaka station',
      images: [
        img('mbdwjcwwm0tdt0c6o5ct7uvg00mm_caption.jpg'),
        img('bqv1muvxrsr0huf0nidv73s8fqs5_3k%20barcelona09%20(18).jpg'),
        img('qpt3b75vn8gcub5l4d97xv9kl3vq_3k%20barcelona18%20(13).jpg'),
        img('u84e4o8wwby9kvovgh6p85rv06my_72208826.jpg'),
        img('8wd2kwqk53te0rn96gub4bvume4s_3k%20barcelona11%20(17).jpg'),
        img('c2zak4iwl1ak3e6lzh98gw0143ta_3k%20barcelona17%20(14).jpg'),
        img('eb91824avgkcig991093y8nv7q0e_3k%20barcelona14%20(15).jpg'),
        img('32k0xelygklda61ndkpthvinn8tt_206373962.jpg'),
        img('bhpjz6eyv0x57trddl3x9848f2ao_3k%20barcelona10%20(18).jpg'),
        img('jom2i4z2mfhv7w46kdo4lrb3cv3x_3k%20barcelona02%20(18).jpg'),
        img('pzla0luqoay0xfrwh2ltspswqrrh_3k%20barcelona01%20(18).jpg'),
        img('a5ac7waxmlhvcjgy0e5moepi8dw5_3k%20barcelona04%20(18).jpg')
      ]
    },
    activities: [
      {
        name: 'Kyoto and Nara day trip',
        day: 5,
        optional: false,
        image: img('2hoazlacf7h8ydirg3skomjckiws_shutterstock_1089530210.jpg'),
        description: 'Kinkaku-ji, the golden pavilion, Fushimi Inari\'s torii gates and then the deer park and Todai-ji temple in Nara, departing from Osaka.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Three nights in Osaka with a full day in Kyoto and Nara, and a free day for the food streets or a castle.',
      image: img('fo7gecjnwvtcg8ygpphrauwfv1te_shutterstock_668037958.jpg')
    }
  }
];

const detail = {
  slug: 'jewels-of-japan-with-mount-fuji',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Jewels of Japan with Mount Fuji',
  alt: 'The Shinkansen bullet train passing Mount Fuji, Japan',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Shinkansen bullet train, private transfers and guided tours',
  tag: 'Best seller',
  tags: ['Culture', 'First time'],
  price: 161206,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Hakone', 'Osaka', 'Kyoto', 'Nara'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 3, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'A week is enough for Tokyo and Kansai if you let the bullet train do the work. This is that trip, nothing wasted.',
    quoteMore: 'Both hotels sit next to a main station, so the free day can become Himeji, Kobe or Nara again without a transfer.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days with three nights in central Tokyo for a city day and Mount Fuji with Hakone, then the Shinkansen to Osaka for three nights with a full day in Kyoto and Nara and a free day in the city.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with daily breakfast; Shinkansen bullet train from Tokyo to Osaka; private airport transfers; full day Tokyo city tour with lunch; Mount Fuji and Hakone day trip with bullet train return; Kyoto and Nara sightseeing day tour.',
  intro2: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your hotel in Kyobashi\nRest of the day free at your own pace\nOptional: an evening walk through Ginza', hotel: 'Mitsui Garden Hotel Kyobashi, Tokyo', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your hotel in Kyobashi', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Tokyo city tour (B, L)', text: 'Breakfast, then a full day coach tour of the city\nMeiji shrine and the Imperial Palace gardens\nLunch included on the tour\nAsakusa and the Senso-ji temple lanes', hotel: 'Mitsui Garden Hotel Kyobashi, Tokyo', highlights: ['Breakfast, then a full day coach tour of the city', 'Meiji shrine and the Imperial Palace gardens', 'Lunch included on the tour'] },
    { title: 'Day 3: Mount Fuji and Hakone (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nLake Ashi and the Hakone ropeway\nBullet train back into Tokyo in the evening', hotel: 'Mitsui Garden Hotel Kyobashi, Tokyo', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'Lake Ashi and the Hakone ropeway'] },
    { title: 'Day 4: Bullet train to Osaka (B)', text: 'Breakfast and check out, then transfer to the station\nShinkansen bullet train south to Osaka\nCheck in at your hotel in Kita\nRest of the day free in the city', hotel: 'Hotel Monterery Osaka', highlights: ['Breakfast and check out, then transfer to the station', 'Shinkansen bullet train south to Osaka', 'Check in at your hotel in Kita'] },
    { title: 'Day 5: Kyoto and Nara (B)', text: 'Breakfast, then a full day out to Kyoto and Nara\nKinkaku-ji, the golden pavilion, on its pond\nThe torii gate paths at Fushimi Inari\nThe deer park and Todai-ji temple in Nara', hotel: 'Hotel Monterery Osaka', highlights: ['Breakfast, then a full day out to Kyoto and Nara', 'Kinkaku-ji, the golden pavilion, on its pond', 'The torii gate paths at Fushimi Inari'] },
    { title: 'Day 6: A free day in Osaka (B)', text: 'Breakfast and a free day in Osaka\nOptional: Dotonbori and the Kuromon market stalls\nOptional: Osaka castle and its park\nOptional: Universal Studios Japan for the day', hotel: 'Hotel Monterery Osaka', highlights: ['Breakfast and a free day in Osaka', 'Optional: Dotonbori and the Kuromon market stalls', 'Optional: Osaka castle and its park'] },
    { title: 'Day 7: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const jewelsOfJapanMountFujiBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const jewelsOfJapanMountFujiProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Hakone', 'Osaka', 'Kyoto', 'Nara'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 3,
  transfers: 8,
  meals: 8,
  price: detail.price,
  images: cardImages
};
