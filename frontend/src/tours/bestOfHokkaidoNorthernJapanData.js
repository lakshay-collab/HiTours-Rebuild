// Best of Hokkaido: Northern Japan. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('bl6hzbwn09nocqbartnghh0ns788_shutterstock_2450448573.jpg'),
  img('cjny0p3vmrizm8xqeuff76ciuwpt_Asahikawa-1.jpg'),
  img('u6n0y1mulym4sf5kbk9ouwqw2s4b_shutterstock_2414469733.jpg'),
  img('i86oqelkptgqhizjkzsit6l08qjk_shutterstock_2313811545.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('bl6hzbwn09nocqbartnghh0ns788_shutterstock_2450448573.jpg'),
  img('cjny0p3vmrizm8xqeuff76ciuwpt_Asahikawa-1.jpg'),
  img('q9t6dbhvhygkulj7d53yztgvl6xq_dl.beatsnoop.com-3000-HMjTiLrQ9o.jpg'),
  img('7g0qi3v84ajj03zgezyqydy174nu_dl.beatsnoop.com-3000-meIahPrHLR.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Sapporo',
    subtitle: 'Sapporo to Lake Toya and Otaru',
    dayLabel: 'Day 1 to 4',
    images: [
      img('bl6hzbwn09nocqbartnghh0ns788_shutterstock_2450448573.jpg'),
      img('u6n0y1mulym4sf5kbk9ouwqw2s4b_shutterstock_2414469733.jpg'),
      img('i86oqelkptgqhizjkzsit6l08qjk_shutterstock_2313811545.jpg')
    ],
    dayImages: {
      1: [
        img('q9t6dbhvhygkulj7d53yztgvl6xq_dl.beatsnoop.com-3000-HMjTiLrQ9o.jpg'),
        img('7g0qi3v84ajj03zgezyqydy174nu_dl.beatsnoop.com-3000-meIahPrHLR.jpg'),
        img('h9v8le8re7n01jdrrdcyesexm9h4_Cover-The-Legendary-History-of-Snow-Royal-Ice-Cream-in-Hokkaido-2.jpg'),
        img('bl6hzbwn09nocqbartnghh0ns788_shutterstock_2450448573.jpg')
      ],
      2: [
        img('onc76owdvms0360xfhvm8um5ql4a_dl.beatsnoop.com-3000-jhX5rHcJVk.jpg'),
        img('8xhvd0bfa3x0mcf4wjrwb7vyxh9x_Hokkaido_Jingu.jpg'),
        img('v9dfmry79xm7v64jsrwx21pjv8ab_1ba905cf-Sapporo-TV-Tower.jpg'),
        img('gogi2pryi3cw9b6s7tv2cjhdh3vb_hill-of-the-buddha-tadao-ando-ar.jpg')
      ],
      3: [
        img('z02u2jgr2blv7aty3agnwxzn8lcs_dl.beatsnoop.com-3000-MNJ4AV9ayn.jpg'),
        img('nc5k5rj2mg0jrdsizlykugl2ri4g_126A2596-scaled-2.jpg'),
        img('r3cxkpuw6m7yt4r1ysc4x10gjfw9_shikotsu-toya_jigokudani_fu6ybo.jpeg'),
        img('gwqb51g3h6zlbirq5l1grlgv7yux_dl.beatsnoop.com-3000-1GzdPmVpD8.jpg')
      ],
      4: [
        img('z5swzbio3vehzimno0zsd1kdne38_dl.beatsnoop.com-3000-e8dxbAwRVZ-2.jpg'),
        img('uw6twx0p15ll0k5m9e3mbh6nznce_Hoheikyo%20Hot%20Spring%20Hokkaido.png'),
        img('jtk6dx4p3gtalpg1athf2su5lkdz_26380528716_7d0e63d579_b.jpg'),
        img('o7ia95as0iws6ktj1erg6cu33y5e_download%20-%202024-07-25T133910.673.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Hokkaido`,
      'Arrival at New Chitose Airport and private transfer to Sapporo',
      'Check in at your hotel',
      'Rest of the day free at your own pace',
      'Optional: dinner in the Susukino lanes',
      `${DAY_MARK}Day 2 · Sapporo sightseeing`,
      'Breakfast, then a guided day around Sapporo',
      'The clock tower, Odori park and the old government building',
      'The Hokkaido shrine in its woodland',
      'A stop at the Sapporo beer museum',
      `${DAY_MARK}Day 3 · Noboribetsu and Lake Toya`,
      'Breakfast, then south to Noboribetsu',
      'The steaming Jigokudani hell valley',
      'Lake Toya, a caldera lake with Mount Usu above it',
      'Back in Sapporo in the evening',
      `${DAY_MARK}Day 4 · Jozankei and Otaru`,
      'Breakfast, then the hot spring valley at Jozankei',
      'Otaru\'s canal, warehouses and glass workshops',
      'Shiroi Koibito chocolate park',
      'Evening free in Sapporo'
    ],
    accommodation: {
      name: 'Hotel Emion SAPPORO, Sapporo',
      description: '4 nights · Breakfast · Standard room · 3★ · Comfortable hotel in Sapporo, close to the subway',
      images: [
        img('8wwrngw5ma7h9eedip1ez44bxu6m_635648418.jpg'),
        img('dvp5n0sw34c6pqqws73ef4a8riqf_492198903.jpg'),
        img('y4qluetosm4raoteqipql4dmtnd7_492199127.jpg'),
        img('wclk1cc69yeyp3xmlu52itx8lmv3_492198984.jpg'),
        img('6qna2r6s08dqbuwuxup3b9jled93_635648632.jpg')
      ]
    },
    activities: [
      {
        name: 'Sapporo sightseeing tour',
        day: 2,
        optional: false,
        image: img('onc76owdvms0360xfhvm8um5ql4a_dl.beatsnoop.com-3000-jhX5rHcJVk.jpg'),
        description: 'The clock tower, Odori park, the old government building and the Hokkaido shrine, with a stop at the beer museum.'
      },
      {
        name: 'Noboribetsu and Lake Toya',
        day: 3,
        optional: false,
        image: img('z02u2jgr2blv7aty3agnwxzn8lcs_dl.beatsnoop.com-3000-MNJ4AV9ayn.jpg'),
        description: 'The steaming Jigokudani hell valley at Noboribetsu, then the caldera lake at Toya with Mount Usu above it.'
      },
      {
        name: 'Jozankei, Otaru and Shiroi Koibito park',
        day: 4,
        optional: false,
        image: img('z5swzbio3vehzimno0zsd1kdne38_dl.beatsnoop.com-3000-e8dxbAwRVZ-2.jpg'),
        description: 'The hot spring valley at Jozankei, the canal and glass workshops of Otaru, and the chocolate factory at Shiroi Koibito park.'
      }
    ],
    program: {
      name: 'Sapporo',
      description: 'Four nights in the island capital with a city tour and two full days out, to the hell valley and lake, and to Otaru\'s canal.',
      image: img('bl6hzbwn09nocqbartnghh0ns788_shutterstock_2450448573.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Asahikawa',
    subtitle: 'Asahikawa to Furano and Daisetsuzan',
    dayLabel: 'Day 5 to 9',
    images: [
      img('cjny0p3vmrizm8xqeuff76ciuwpt_Asahikawa-1.jpg')
    ],
    dayImages: {
      5: [
        img('vsaukfdu1dygwtxw2vw9tifzt6xs_461502-Tokiwa-Park.jpg'),
        img('u6syy8fso90tvzjcr8x694cringk_Downpic.cc-image415115299.jpg'),
        img('twyqem5si4krkrmmxw1ki48kzhpk_IMG_6822_retouch_001_S.jpg'),
        img('cjny0p3vmrizm8xqeuff76ciuwpt_Asahikawa-1.jpg')
      ],
      6: [
        img('ujksqcge7dxfru2vhbwnud6s715u_dl.beatsnoop.com-3000-CEmHvigLRb.jpg'),
        img('m6j30lfnoda7quanse5ygstolh72_36179789871_5f996091cc_o.jpg'),
        img('m78abggmqom3p6uc1y3qw2dlq1wa_museum_section01.jpg'),
        img('0ltuqwcy7tju04zomb45nksx634a_Downpic.cc-image273613651.jpg')
      ],
      7: [
        img('zirmhgngu7d0prbwx975qhqz1k1w_dl.beatsnoop.com-3000-aAWMe2H58X.jpg'),
        img('8mcg5p9png2ezrtgbhhqygsccqt2_03-134469.jpg'),
        img('38thcuuobdji1940gpjyq33otixh_shirahige-falls-kv_ywofab.jpg'),
        img('4mc664p95d5kb7256uu5lfs8dw9i_dl.beatsnoop.com-final-DdNmB3tQej.jpg')
      ],
      8: [
        img('m18b8gaewk896pmuqrn5an9laxc8_ph23.jpg'),
        img('j0bbj0z9ygq2itjtezlrb7m4qbcg_dl.beatsnoop.com-3000-R9Qry572jN.jpg'),
        img('ryfravpqfcl6eae6oai794t0hrxp_%E6%97%AD%E5%B2%B3%E3%81%AE%E6%A6%82%E8%A6%81%20(1).png'),
        img('5wg318zy7i4yofhk3fx02ko3qt07_Downpic.cc-image556341869.jpg')
      ],
      9: [
        img('cjny0p3vmrizm8xqeuff76ciuwpt_Asahikawa-1.jpg'),
        img('bl6hzbwn09nocqbartnghh0ns788_shutterstock_2450448573.jpg'),
        img('u6n0y1mulym4sf5kbk9ouwqw2s4b_shutterstock_2414469733.jpg'),
        img('i86oqelkptgqhizjkzsit6l08qjk_shutterstock_2313811545.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · On to Asahikawa`,
      'Breakfast and check out, then inland to Asahikawa',
      'Check in opposite the station',
      'Rest of the day free in town',
      'Optional: the Asahiyama zoo for the afternoon',
      `${DAY_MARK}Day 6 · Asahikawa and sunflowers`,
      'Breakfast, then a guided day around Asahikawa',
      'The city sights and local markets',
      'The sunflower fields at Hokuryu village',
      'Back at the hotel in the evening',
      `${DAY_MARK}Day 7 · Furano and Biei`,
      'Breakfast, then south to Furano',
      'The lavender farms and flower fields',
      'The patchwork hills of Biei',
      'The blue pond at Shirogane on the way back',
      `${DAY_MARK}Day 8 · Daisetsuzan national park`,
      'Breakfast, then east into Daisetsuzan national park',
      'The ropeway up Asahidake and the alpine trails',
      'Sounkyo gorge and its waterfalls',
      'Back in Asahikawa for the evening',
      `${DAY_MARK}Day 9 · Departure from Asahikawa`,
      'Check out and private transfer to the airport',
      'Flight home or on to Tokyo'
    ],
    accommodation: {
      name: 'Hotel Wing International Asahikawa Ekimae, Asahikawa',
      description: '4 nights · Breakfast · Standard room · 3★ · Straightforward hotel opposite Asahikawa station',
      images: [
        img('pzfdddci96rbgpjjec5gvb9soy0v_207763133.jpg'),
        img('c6pq13zxlwpczkh6wrygjz0nh7uw_207763088.jpg'),
        img('xsnecu1z4hw6rkuuh4gpotl6hfod_207763199.jpg'),
        img('w4r2cxb22g7mllhiovzst31h5hyr_207763184.jpg'),
        img('awdiqf6sb9x9erzus5zly2685atk_207762982.jpg'),
        img('rfstatgmgi9ecdgtzqz6yn7sk5nu_207762993.jpg'),
        img('ezdvep9a8y35kvz43iryx8zv6xml_207762959.jpg'),
        img('59y51mqfrlmewr5nuq6c05xicog6_207762943.jpg'),
        img('xb5z1t4h3xbcz9v7kvtgmlclzu20_207762948.jpg'),
        img('lunknv11s6opuzcqvngwtje95tg5_207763229.jpg'),
        img('u2qaffeiuh2sabsakoi0m07aq747_207763027.jpg'),
        img('t60kp1aupbrzoc397chod1v4yc2z_207763106.jpg')
      ]
    },
    activities: [
      {
        name: 'Asahikawa with Hokuryu sunflower village',
        day: 6,
        optional: false,
        image: img('ujksqcge7dxfru2vhbwnud6s715u_dl.beatsnoop.com-3000-CEmHvigLRb.jpg'),
        description: 'The city sights and then the sunflower fields at Hokuryu, two million flowers in bloom across the hillside in season.'
      },
      {
        name: 'Furano and Biei day tour',
        day: 7,
        optional: false,
        image: img('zirmhgngu7d0prbwx975qhqz1k1w_dl.beatsnoop.com-3000-aAWMe2H58X.jpg'),
        description: 'The lavender farms of Furano and the patchwork hills of Biei, with the blue pond at Shirogane on the way back.'
      },
      {
        name: 'Daisetsuzan national park',
        day: 8,
        optional: false,
        image: img('m18b8gaewk896pmuqrn5an9laxc8_ph23.jpg'),
        description: 'Hokkaido\'s roof: the ropeway up Asahidake, the alpine trails and the gorge at Sounkyo with its waterfalls.'
      }
    ],
    program: {
      name: 'Asahikawa',
      description: 'Four nights inland with the sunflower fields, the lavender and patchwork hills of Furano and Biei, and a day in Daisetsuzan national park.',
      image: img('cjny0p3vmrizm8xqeuff76ciuwpt_Asahikawa-1.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-hokkaido-northern-japan',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Hokkaido: Northern Japan',
  alt: 'Lavender fields below the hills at Furano, Hokkaido',
  days: '9 days / 8 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided day tours',
  tag: 'New',
  tags: ['Nature', 'Adventure'],
  price: 190009,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Sapporo', 'Noboribetsu', 'Lake Toya', 'Otaru', 'Asahikawa', 'Furano', 'Biei'],
  stats: { days: 9, cities: 2, hotels: 2, activities: 6, transfers: 17 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['17 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Hokkaido is the Japan nobody expects: lavender hills, volcanic lakes and space to breathe. Two bases, six guided days.',
    quoteMore: 'Go between July and early September for the lavender and the sunflowers, or February if you want the snow festival instead. Both are worth the trip.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days in northern Japan: four nights in Sapporo with a city tour, the Noboribetsu hell valley with Lake Toya and Otaru\'s canal, then four in Asahikawa for the sunflower fields, the lavender hills of Furano and Biei, and Daisetsuzan national park.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 8 nights with daily breakfast; private airport and inter city transfers; Sapporo sightseeing tour; Noboribetsu and Lake Toya tour; Jozankei, Otaru and Shiroi Koibito park day tour; Asahikawa tour with Hokuryu sunflower village; Furano and Biei day tour; Daisetsuzan national park tour.',
  intro2: 'Not included: international and domestic flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hokkaido (Arrival)', text: 'Arrival at New Chitose Airport and private transfer to Sapporo\nCheck in at your hotel\nRest of the day free at your own pace\nOptional: dinner in the Susukino lanes', hotel: 'Hotel Emion SAPPORO', highlights: ['Arrival at New Chitose Airport and private transfer to Sapporo', 'Check in at your hotel', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Sapporo sightseeing (B)', text: 'Breakfast, then a guided day around Sapporo\nThe clock tower, Odori park and the old government building\nThe Hokkaido shrine in its woodland\nA stop at the Sapporo beer museum', hotel: 'Hotel Emion SAPPORO', highlights: ['Breakfast, then a guided day around Sapporo', 'The clock tower, Odori park and the old government building', 'The Hokkaido shrine in its woodland'] },
    { title: 'Day 3: Noboribetsu and Lake Toya (B)', text: 'Breakfast, then south to Noboribetsu\nThe steaming Jigokudani hell valley\nLake Toya, a caldera lake with Mount Usu above it\nBack in Sapporo in the evening', hotel: 'Hotel Emion SAPPORO', highlights: ['Breakfast, then south to Noboribetsu', 'The steaming Jigokudani hell valley', 'Lake Toya, a caldera lake with Mount Usu above it'] },
    { title: 'Day 4: Jozankei and Otaru (B)', text: 'Breakfast, then the hot spring valley at Jozankei\nOtaru\'s canal, warehouses and glass workshops\nShiroi Koibito chocolate park\nEvening free in Sapporo', hotel: 'Hotel Emion SAPPORO', highlights: ['Breakfast, then the hot spring valley at Jozankei', 'Otaru\'s canal, warehouses and glass workshops', 'Shiroi Koibito chocolate park'] },
    { title: 'Day 5: On to Asahikawa (B)', text: 'Breakfast and check out, then inland to Asahikawa\nCheck in opposite the station\nRest of the day free in town\nOptional: the Asahiyama zoo for the afternoon', hotel: 'Hotel Wing International Asahikawa Ekimae', highlights: ['Breakfast and check out, then inland to Asahikawa', 'Check in opposite the station', 'Rest of the day free in town'] },
    { title: 'Day 6: Asahikawa and sunflowers (B)', text: 'Breakfast, then a guided day around Asahikawa\nThe city sights and local markets\nThe sunflower fields at Hokuryu village\nBack at the hotel in the evening', hotel: 'Hotel Wing International Asahikawa Ekimae', highlights: ['Breakfast, then a guided day around Asahikawa', 'The city sights and local markets', 'The sunflower fields at Hokuryu village'] },
    { title: 'Day 7: Furano and Biei (B)', text: 'Breakfast, then south to Furano\nThe lavender farms and flower fields\nThe patchwork hills of Biei\nThe blue pond at Shirogane on the way back', hotel: 'Hotel Wing International Asahikawa Ekimae', highlights: ['Breakfast, then south to Furano', 'The lavender farms and flower fields', 'The patchwork hills of Biei'] },
    { title: 'Day 8: Daisetsuzan national park (B)', text: 'Breakfast, then east into Daisetsuzan national park\nThe ropeway up Asahidake and the alpine trails\nSounkyo gorge and its waterfalls\nBack in Asahikawa for the evening', hotel: 'Hotel Wing International Asahikawa Ekimae', highlights: ['Breakfast, then east into Daisetsuzan national park', 'The ropeway up Asahidake and the alpine trails', 'Sounkyo gorge and its waterfalls'] },
    { title: 'Day 9: Departure from Asahikawa (-)', text: 'Check out and private transfer to the airport\nFlight home or on to Tokyo', hotel: 'Departure', highlights: ['Check out and private transfer to the airport', 'Flight home or on to Tokyo'] }
  ],
  outro: 'Not included: international and domestic flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const bestOfHokkaidoNorthernJapanBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfHokkaidoNorthernJapanProduct = {
  slug: detail.slug,
  places: ['Sapporo', 'Noboribetsu', 'Lake Toya', 'Otaru', 'Asahikawa', 'Furano', 'Biei'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 6,
  transfers: 17,
  meals: 7,
  price: detail.price,
  images: cardImages
};
