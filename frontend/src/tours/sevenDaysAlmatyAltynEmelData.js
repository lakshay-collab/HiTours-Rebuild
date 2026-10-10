// Seven Days in Almaty with Altyn Emel National Park. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
  img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg'),
  img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg'),
  img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg'),
  img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('rbsdlpmqrfga1bptwh7jhqywl58s_shutterstock_1873578235.jpg'),
  img('46q2uqsxkc2ew0xijdcove67axyr_dl.beatsnoop.com-final-mKejacPGXh.jpg'),
  img('l33rnccy9xk7iglvrgmh0tb6gew0_1618298288_1554123490_charynskij-kanon-1.jpg'),
  img('r1d98eg10nugezjii0mcf4bgeibk_download.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Almaty',
    dayLabel: 'Day 1 to 7',
    images: [
      img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
      img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
      img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg'),
      img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg')
    ],
    dayImages: {
      1: [
        img('rbsdlpmqrfga1bptwh7jhqywl58s_shutterstock_1873578235.jpg'),
        img('hc5v8ecq194anwp7jvspf3io6mkb_d998a0de8f91053d322bb09c8999cc31.jpg'),
        img('ax2aozks96i5vt0r92ag2n6dg2j0_shutterstock_1505534291.jpg'),
        img('o3buxw5c89li0ges674n4extpqzk_Palace_of_the_Republic,_Almaty_2022.jpg')
      ],
      2: [
        img('elvqtnsme6ctj6hi54h99ufvu092_dl.beatsnoop.com-1714737499.jpg'),
        img('sen8qo3cxac4ddexlpcw7m93m9pq_monument-of-independence-almaty.jpg'),
        img('x5107z3hn22853u89owu0rrfahox_28panfilov-guardsmen1.png'),
        img('3zw7eayhe7zqmhe4u76jo3iio0ux_ascension-cathedral-almaty-kazakhstan-2.jpg')
      ],
      3: [
        img('4i8g0lsj7q0pu5oaj873z2vjpmws_2023-03-30.jpg'),
        img('5m0alch5zf4q58f56zswg1orb2tp_shutterstock_2417179599.jpg'),
        img('c22ssqsccdxlwhwzv5arxpli5qa3_44803342642_bcc3abea6e_b.jpg'),
        img('vvl7sswynniu6efbczr7gqvd7jpk_Downpic.cc-1363512187.jpg')
      ],
      4: [
        img('46q2uqsxkc2ew0xijdcove67axyr_dl.beatsnoop.com-final-mKejacPGXh.jpg'),
        img('l33rnccy9xk7iglvrgmh0tb6gew0_1618298288_1554123490_charynskij-kanon-1.jpg'),
        img('r1d98eg10nugezjii0mcf4bgeibk_download.jpg'),
        img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg')
      ],
      5: [
        img('w3dhy3jnmc8fyqi0qykmoa9j04kj_Downpic.cc-78348034.jpg'),
        img('trcgsh6zpbn7c3tqrbtr24leiybu_1618298981_546870.jpg'),
        img('7e99ylb15o8mvs5hyaugcl3jkmde_getlstd-property-photo.jpg'),
        img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg')
      ],
      6: [
        img('v1aq4uptz7krhd6el5zzeiht1v32_Altyn%20Emel%20National%20Park-3.jpg'),
        img('6skak8dkkqz7ly1om3bfoeu2q7ze_1618293667_32062d568a02ee840cb0a10122723efb.jpg'),
        img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
        img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg')
      ],
      7: [
        img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
        img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
        img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg'),
        img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Almaty`,
      'Arrival at Almaty International and transfer to your hotel',
      'Check in and the rest of the day free',
      'Optional: the Palace of the Republic and Abai Square',
      'Optional: the stalls of the Zelyony bazaar',
      `${DAY_MARK}Day 2 · Almaty city tour`,
      'Breakfast, then a guided tour of the city',
      'The Monument of Independence on Republic Square',
      'Panfilov Park and the wooden Ascension Cathedral',
      'Afternoon free along Zhibek Zholy',
      `${DAY_MARK}Day 3 · Green Bazaar, chocolate and Kok Tobe`,
      'Breakfast, then into the Green Bazaar halls',
      'Horse meat counters, dried fruit and spice stalls',
      'The Rakhat chocolate factory and its shop',
      'Up the Kok Tobe cable car for the city at dusk',
      `${DAY_MARK}Day 4 · Charyn Canyon and Kolsai Lake`,
      'Early breakfast and a long day out east',
      'The red walls of the Valley of Castles',
      'The canyon floor path beside the Charyn river',
      'On to the forested shore of Kolsai lake',
      `${DAY_MARK}Day 5 · Lake Issyk day trip`,
      'Breakfast, then east towards the Issyk gorge',
      'The turquoise water of Lake Issyk',
      'The Saka burial mounds and the site museum',
      'Evening transfer back into Almaty',
      `${DAY_MARK}Day 6 · Altyn Emel National Park`,
      'Early breakfast and out onto the open steppe',
      'The Singing Dune that hums in the wind',
      'Striped chalk ridges of the Aktau mountains',
      'The Besshatyr burial mounds before the long run back',
      `${DAY_MARK}Day 7 · Departure from Almaty`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Astana International Hotel, Almaty',
      description: '6 nights · Breakfast · Standard room · 3★ · Long standing city hotel close to Republic Square',
      images: [
        img('0wg444qh81ppuk0exvvteedwk414_download%20-%202024-05-03T123959.847.jpg'),
        img('405j4hf3pvzwcon3x4p0vttvn757_download%20-%202024-05-03T122402.593.jpg'),
        img('j4iozddskot1ky4ri7n458k3u65g_download%20-%202024-05-03T122433.325.jpg'),
        img('wn5x4egjq9k99ryhqf3b9gucp0u5_download%20-%202024-05-03T122624.037.jpg'),
        img('5rgcxx76ns5mli0pxhy27db19wq5_download%20-%202024-05-03T122443.183.jpg'),
        img('jdg5if1pswzyacg5e8vtw7tzyl1h_download%20-%202024-05-03T122421.244.jpg'),
        img('m6pfjdmmp2wff9x54atxojkamx6k_download%20-%202024-05-03T122454.054.jpg'),
        img('9l23klzv8h01fatv0ckro0up7kk8_download%20-%202024-05-03T122340.939.jpg'),
        img('a35vbgqn6raiam1huf5h0hp6t2sk_download%20-%202024-05-03T122413.210.jpg'),
        img('t739w0qygqhwauh80b18xie8zdj6_download%20-%202024-05-03T122256.595.jpg'),
        img('zob9t4s9k9vyjaujtw3zgwlg3mvi_download%20-%202024-05-03T122246.858.jpg'),
        img('olpntlkef85m6g14mj479rvdnmrb_download%20-%202024-05-03T122349.630.jpg'),
        img('075wjystd82wqggccqm6sq3kglae_download%20-%202024-05-03T122234.015.jpg')
      ]
    },
    activities: [
      {
        name: 'Almaty city sightseeing tour',
        day: 2,
        optional: false,
        image: img('elvqtnsme6ctj6hi54h99ufvu092_dl.beatsnoop.com-1714737499.jpg'),
        description: 'A guided tour of the old capital, taking in the Monument of Independence, Panfilov Park and the wooden Ascension Cathedral.'
      },
      {
        name: 'Green Bazaar and the Rakhat chocolate factory',
        day: 3,
        optional: false,
        image: img('4i8g0lsj7q0pu5oaj873z2vjpmws_2023-03-30.jpg'),
        description: 'The spice and dried fruit halls of the Green Bazaar, then the Rakhat factory whose chocolate every Kazakh family grew up on.'
      },
      {
        name: 'Kok Tobe hill and the gondola',
        day: 3,
        optional: false,
        image: img('vvl7sswynniu6efbczr7gqvd7jpk_Downpic.cc-1363512187.jpg'),
        description: 'The cable car up Kok Tobe for the whole city laid out below the mountains, with the Alley of Lovers at the top.'
      },
      {
        name: 'Charyn Canyon and Kolsai Lake',
        day: 4,
        optional: false,
        image: img('46q2uqsxkc2ew0xijdcove67axyr_dl.beatsnoop.com-final-mKejacPGXh.jpg'),
        description: 'A long day out to the red sandstone Valley of Castles in Charyn Canyon, then up to the forested shore of Kolsai lake.'
      },
      {
        name: 'Lake Issyk day tour',
        day: 5,
        optional: false,
        image: img('w3dhy3jnmc8fyqi0qykmoa9j04kj_Downpic.cc-78348034.jpg'),
        description: 'A day east to the turquoise water of Lake Issyk, with the Saka burial mounds and the small site museum nearby.'
      },
      {
        name: 'Altyn Emel National Park',
        day: 6,
        optional: false,
        image: img('v1aq4uptz7krhd6el5zzeiht1v32_Altyn%20Emel%20National%20Park-3.jpg'),
        description: 'The Singing Dune that hums in the wind, the striped chalk ridges of the Aktau mountains and the Besshatyr burial mounds.'
      }
    ],
    program: {
      name: 'Almaty',
      description: 'Six nights in the old capital with five full days out: the city, Kok Tobe, Charyn Canyon, Lake Issyk and Altyn Emel.',
      image: img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg')
    }
  }
];

const detail = {
  slug: 'seven-days-in-almaty-with-altyn-emel',
  ctaHref: '/l/kazakhstan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Seven Days in Almaty with Altyn Emel National Park',
  alt: 'Chalk cliffs of the Aktau mountains in Altyn Emel National Park',
  days: '7 days / 6 nights',
  stations: '1 stops',
  transport: 'Private airport transfers and guided day tours',
  tag: 'Nature',
  tags: ['Nature', 'Adventure'],
  price: 79610,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Almaty', 'Charyn Canyon', 'Altyn Emel'],
  stats: { days: 7, cities: 1, hotels: 1, activities: 6, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aisha',
    image: '/experts/riya.webp',
    role: 'Kazakhstan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Altyn Emel is the one almost nobody books, and it is the day everyone talks about afterwards. Coloured hills and a dune that sings.',
    quoteMore: 'Altyn Emel is a long day on rough tracks. If anyone in the group gets carsick, swap it for a second day at Kolsai and Kaindy.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days based in Almaty with five full days out: the city tour and Kok Tobe, the red walls of Charyn Canyon with Kolsai Lake, Lake Issyk, and the Singing Dune and chalk mountains of Altyn Emel National Park.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights in Almaty with daily breakfast; private airport transfers; guided Almaty city sightseeing tour; Green Bazaar and Rakhat chocolate factory trip; Kok Tobe day trip; Charyn Canyon and Kolsai Lake day trip; Lake Issyk day tour; Altyn Emel National Park trip.',
  intro2: 'Not included: international flights; Kazakhstan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Almaty (Arrival)', text: 'Arrival at Almaty International and transfer to your hotel\nCheck in and the rest of the day free\nOptional: the Palace of the Republic and Abai Square\nOptional: the stalls of the Zelyony bazaar', hotel: 'Astana International Hotel', highlights: ['Arrival at Almaty International and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: the Palace of the Republic and Abai Square'] },
    { title: 'Day 2: Almaty city tour (B)', text: 'Breakfast, then a guided tour of the city\nThe Monument of Independence on Republic Square\nPanfilov Park and the wooden Ascension Cathedral\nAfternoon free along Zhibek Zholy', hotel: 'Astana International Hotel', highlights: ['Breakfast, then a guided tour of the city', 'The Monument of Independence on Republic Square', 'Panfilov Park and the wooden Ascension Cathedral'] },
    { title: 'Day 3: Green Bazaar, chocolate and Kok Tobe (B)', text: 'Breakfast, then into the Green Bazaar halls\nHorse meat counters, dried fruit and spice stalls\nThe Rakhat chocolate factory and its shop\nUp the Kok Tobe cable car for the city at dusk', hotel: 'Astana International Hotel', highlights: ['Breakfast, then into the Green Bazaar halls', 'Horse meat counters, dried fruit and spice stalls', 'The Rakhat chocolate factory and its shop'] },
    { title: 'Day 4: Charyn Canyon and Kolsai Lake (B)', text: 'Early breakfast and a long day out east\nThe red walls of the Valley of Castles\nThe canyon floor path beside the Charyn river\nOn to the forested shore of Kolsai lake', hotel: 'Astana International Hotel', highlights: ['Early breakfast and a long day out east', 'The red walls of the Valley of Castles', 'The canyon floor path beside the Charyn river'] },
    { title: 'Day 5: Lake Issyk day trip (B)', text: 'Breakfast, then east towards the Issyk gorge\nThe turquoise water of Lake Issyk\nThe Saka burial mounds and the site museum\nEvening transfer back into Almaty', hotel: 'Astana International Hotel', highlights: ['Breakfast, then east towards the Issyk gorge', 'The turquoise water of Lake Issyk', 'The Saka burial mounds and the site museum'] },
    { title: 'Day 6: Altyn Emel National Park (B)', text: 'Early breakfast and out onto the open steppe\nThe Singing Dune that hums in the wind\nStriped chalk ridges of the Aktau mountains\nThe Besshatyr burial mounds before the long run back', hotel: 'Astana International Hotel', highlights: ['Early breakfast and out onto the open steppe', 'The Singing Dune that hums in the wind', 'Striped chalk ridges of the Aktau mountains'] },
    { title: 'Day 7: Departure from Almaty (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Kazakhstan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Kazakhstan', href: '/asia/kazakhstan' },
  { label: detail.title }
];

export const sevenDaysAlmatyAltynEmelBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const sevenDaysAlmatyAltynEmelProduct = {
  slug: detail.slug,
  places: ['Almaty', 'Charyn Canyon', 'Altyn Emel'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 6,
  transfers: 9,
  meals: 6,
  price: detail.price,
  images: cardImages
};
