// Almaty and Nature Wonders for 18 to 39s. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
  img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg'),
  img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
  img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg'),
  img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('vnmkt7rf83tvt5btv8jsa7qz80h9_shutterstock_2306834949.jpg'),
  img('tgkjjttueltolvtjhdhzth4imi5a_Republic-square-Yerevan-resized-1444x848.jpg'),
  img('1qhux6c8q69fqd0cy0lr5ddp8lg9_shutterstock_1700442838.jpg'),
  img('idjq269orfgupjb7s882s3d3kovt_Shimbulak1.JPG')
];

const stops = [
  {
    letter: 'A',
    name: 'Almaty',
    dayLabel: 'Day 1 to 6',
    images: [
      img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
      img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg'),
      img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg'),
      img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg')
    ],
    dayImages: {
      1: [
        img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
        img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg'),
        img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg'),
        img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg')
      ],
      2: [
        img('vnmkt7rf83tvt5btv8jsa7qz80h9_shutterstock_2306834949.jpg'),
        img('hc5v8ecq194anwp7jvspf3io6mkb_d998a0de8f91053d322bb09c8999cc31.jpg'),
        img('tgkjjttueltolvtjhdhzth4imi5a_Republic-square-Yerevan-resized-1444x848.jpg'),
        img('sen8qo3cxac4ddexlpcw7m93m9pq_monument-of-independence-almaty.jpg')
      ],
      3: [
        img('1qhux6c8q69fqd0cy0lr5ddp8lg9_shutterstock_1700442838.jpg'),
        img('idjq269orfgupjb7s882s3d3kovt_Shimbulak1.JPG'),
        img('koghfpteo1o0tvkakl3yhx0ekrl9_compressed-Cable-Car-from-Shymbulak-Ski-Resort-Almaty-Kazakhsthan-min-min.jpeg'),
        img('dbct4ef4ky9y1g8o0o52w1hwn8nk_shutterstock_1507706288.jpg')
      ],
      4: [
        img('yg3jyhhol3xyr0hgbomtqudvpfjw_shutterstock_1462369043.jpg'),
        img('l33rnccy9xk7iglvrgmh0tb6gew0_1618298288_1554123490_charynskij-kanon-1.jpg'),
        img('bf9re4piyxv2baz9mqg5s1t1avl8_shutterstock_2368264505.jpg'),
        img('nhhhcutco2ex8he97hec1x5nb99m_1618294061_XXXL.jpeg')
      ],
      5: [
        img('deoqaz0x0f4p2e8daej7wh2s1ru5_shutterstock_1398209363.jpg'),
        img('g6h7dp9g7vhck53bbay9jz2emntw_Kok-Tobe-7.png'),
        img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
        img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg')
      ],
      6: [
        img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
        img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg'),
        img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg'),
        img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Almaty`,
      'Arrival at Almaty International and transfer to your hotel',
      'Check in and meet the rest of the group',
      'The evening free to find your feet',
      'Optional: dinner on Panfilov street',
      `${DAY_MARK}Day 2 · City tour and the chocolate factory`,
      'Breakfast, then out with the group into the city',
      'Republic Square and the Monument of Independence',
      'Panfilov Park and Abai Square',
      'The Rakhat chocolate factory and its shop',
      `${DAY_MARK}Day 3 · Medeu, Shymbulak and the bazaar`,
      'Breakfast, then up the Malaya Almatinka valley',
      'The Medeu dam and the Shymbulak resort',
      'Peaks of the Zailiysky Alatau above the gondola',
      'Back down for the Zelyony bazaar halls',
      `${DAY_MARK}Day 4 · Charyn Canyon and the Kolsai Lakes`,
      'Early breakfast and a long day out east',
      'The red walls of the Valley of Castles',
      'The canyon floor path beside the Charyn river',
      'On to the cold turquoise water of Kolsai',
      `${DAY_MARK}Day 5 · Kok Tobe mountain`,
      'Breakfast, then across town to Kok Tobe',
      'The cable car up the hillside',
      'The whole city laid out below the mountains',
      'The Alley of Lovers and the evening free',
      `${DAY_MARK}Day 6 · Mega Mall and departure`,
      'Breakfast at the hotel and check out',
      'A last stop at the Mega Mall for souvenirs',
      'Group transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Regardal Hotel, Almaty, Almaty',
      description: '5 nights · Breakfast · Standard room · 4★ · Warm city hotel with a sauna and indoor pool',
      images: [
        img('2sy36pj6sq2gdjy07mwyv2l2dl2d_61816584.jpg'),
        img('h7rdtte7v7tqd4tvp94o4iue7mpk_507265136.jpg'),
        img('f9omdcxfwnpn44j3cygh16aq4j8z_507262688.jpg'),
        img('nmpgy77qkq6eixf6ydw6cr98np3j_61816506.jpg'),
        img('pxh3gv85jiyoyd8sf20aofhx5u2i_518316136.jpg'),
        img('2ttjqkq7mhweuhmvtskhutby5mny_61816517.jpg'),
        img('kwarsty8uieohuvre9yvkw3pzsl3_507263930.jpg'),
        img('yp8k1u9iivi6gk6h4ablpf77w6ce_61816581.jpg'),
        img('ku3w19dt44dsfsuq26ikk127eikb_507262904.jpg'),
        img('2cggmgnev2bbtfk229k7smba0kd1_507263802.jpg'),
        img('ama2wp4qp1n9kxsuq8et2bpyzvar_89845212.jpg'),
        img('xj9vuiwgeiw41twzhoc2fb5nb8z5_507264126.jpg'),
        img('7zr3ehs1t7w3uxv6r0846b0hdzyy_507262872.jpg')
      ]
    },
    activities: [
      {
        name: 'Almaty city tour',
        day: 2,
        optional: false,
        image: img('vnmkt7rf83tvt5btv8jsa7qz80h9_shutterstock_2306834949.jpg'),
        description: 'Republic Square and the Monument of Independence, the Presidential Palace, Panfilov Park and Abai Square with the group.'
      },
      {
        name: 'Rakhat chocolate factory tour',
        day: 2,
        optional: false,
        image: img('6wyvt1lm7cc8m8zzr8cm8wr0xjx8_shutterstock_2417179605.jpg'),
        description: 'A look round the factory floor of the brand every Kazakh grew up on, finishing in the shop where the bars cost almost nothing.'
      },
      {
        name: 'Medeu and Shymbulak resort tour',
        day: 3,
        optional: false,
        image: img('1qhux6c8q69fqd0cy0lr5ddp8lg9_shutterstock_1700442838.jpg'),
        description: 'Up the valley to the Medeu dam and the Shymbulak resort, with the Zailiysky Alatau peaks standing over the gondola line.'
      },
      {
        name: 'Zelyony bazaar visit',
        day: 3,
        optional: false,
        image: img('dbct4ef4ky9y1g8o0o52w1hwn8nk_shutterstock_1507706288.jpg'),
        description: 'The Green Bazaar halls where horse meat, kurt cheese balls, dried apricots and spices are sold off the same long counters.'
      },
      {
        name: 'Charyn Canyon sightseeing tour',
        day: 4,
        optional: false,
        image: img('yg3jyhhol3xyr0hgbomtqudvpfjw_shutterstock_1462369043.jpg'),
        description: 'The red sandstone Valley of Castles, a canyon cut by the Charyn river and walked along its floor between sheer walls.'
      },
      {
        name: 'Kolsai Lakes excursion',
        day: 4,
        optional: false,
        image: img('bf9re4piyxv2baz9mqg5s1t1avl8_shutterstock_2368264505.jpg'),
        description: 'The first of the three Kolsai lakes, a stretch of cold turquoise water ringed by spruce forest in the Tien Shan foothills.'
      },
      {
        name: 'Kok Tobe mountain',
        day: 5,
        optional: false,
        image: img('deoqaz0x0f4p2e8daej7wh2s1ru5_shutterstock_1398209363.jpg'),
        description: 'The cable car up Kok Tobe for the whole city laid out below the mountains, with the Alley of Lovers at the top.'
      },
      {
        name: 'Mega Mall stop',
        day: 6,
        optional: false,
        image: img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
        description: 'A last stop at the city\'s biggest mall for souvenirs and lunch before the group transfer out to the airport.'
      }
    ],
    program: {
      name: 'Almaty',
      description: 'Five nights in the old capital for a younger group, with the city, Shymbulak, Charyn Canyon, the Kolsai lakes and Kok Tobe.',
      image: img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg')
    }
  }
];

const detail = {
  slug: 'almaty-and-nature-wonders-for-18-to-39s',
  ctaHref: '/l/kazakhstan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Almaty and Nature Wonders for 18 to 39s',
  alt: 'Turquoise water of the Kolsai lakes in the Tien Shan foothills',
  days: '6 days / 5 nights',
  stations: '1 stops',
  transport: 'Group transfers and shared day tours for young travellers',
  tag: 'Adventure',
  tags: ['Adventure', 'Nature'],
  price: 45600,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Almaty', 'Charyn Canyon', 'Kolsai Lakes'],
  stats: { days: 6, cities: 1, hotels: 1, activities: 8, transfers: 14 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['8 experiences', 'Activities'],
    ['14 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aisha',
    image: '/experts/riya.webp',
    role: 'Kazakhstan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Built for travellers in their twenties and thirties, so you land in a group rather than on your own. It is also the cheapest Kazakhstan we sell.',
    quoteMore: 'Day four runs to twelve hours with two hundred kilometres each way. Sleep on the outward leg and save your energy for the canyon floor.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days in Almaty for travellers aged 18 to 39: a group city tour with the Rakhat chocolate factory, Medeu and Shymbulak, the Zelyony bazaar, a long day at Charyn Canyon and the Kolsai lakes, and the Kok Tobe cable car.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights in Almaty with daily breakfast; group airport transfers; Almaty city tour; Rakhat chocolate factory tour; Medeu and Shymbulak resort tour; Zelyony bazaar visit; Charyn Canyon sightseeing tour; Kolsai Lakes excursion; Kok Tobe mountain; a Mega Mall stop on the last day.',
  intro2: 'Not included: international flights; Kazakhstan visa fees; meals beyond breakfast; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Almaty (Arrival)', text: 'Arrival at Almaty International and transfer to your hotel\nCheck in and meet the rest of the group\nThe evening free to find your feet\nOptional: dinner on Panfilov street', hotel: 'Regardal Hotel, Almaty', highlights: ['Arrival at Almaty International and transfer to your hotel', 'Check in and meet the rest of the group', 'The evening free to find your feet'] },
    { title: 'Day 2: City tour and the chocolate factory (B)', text: 'Breakfast, then out with the group into the city\nRepublic Square and the Monument of Independence\nPanfilov Park and Abai Square\nThe Rakhat chocolate factory and its shop', hotel: 'Regardal Hotel, Almaty', highlights: ['Breakfast, then out with the group into the city', 'Republic Square and the Monument of Independence', 'Panfilov Park and Abai Square'] },
    { title: 'Day 3: Medeu, Shymbulak and the bazaar (B)', text: 'Breakfast, then up the Malaya Almatinka valley\nThe Medeu dam and the Shymbulak resort\nPeaks of the Zailiysky Alatau above the gondola\nBack down for the Zelyony bazaar halls', hotel: 'Regardal Hotel, Almaty', highlights: ['Breakfast, then up the Malaya Almatinka valley', 'The Medeu dam and the Shymbulak resort', 'Peaks of the Zailiysky Alatau above the gondola'] },
    { title: 'Day 4: Charyn Canyon and the Kolsai Lakes (B)', text: 'Early breakfast and a long day out east\nThe red walls of the Valley of Castles\nThe canyon floor path beside the Charyn river\nOn to the cold turquoise water of Kolsai', hotel: 'Regardal Hotel, Almaty', highlights: ['Early breakfast and a long day out east', 'The red walls of the Valley of Castles', 'The canyon floor path beside the Charyn river'] },
    { title: 'Day 5: Kok Tobe mountain (B)', text: 'Breakfast, then across town to Kok Tobe\nThe cable car up the hillside\nThe whole city laid out below the mountains\nThe Alley of Lovers and the evening free', hotel: 'Regardal Hotel, Almaty', highlights: ['Breakfast, then across town to Kok Tobe', 'The cable car up the hillside', 'The whole city laid out below the mountains'] },
    { title: 'Day 6: Mega Mall and departure (B)', text: 'Breakfast at the hotel and check out\nA last stop at the Mega Mall for souvenirs\nGroup transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'A last stop at the Mega Mall for souvenirs', 'Group transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Kazakhstan visa fees; meals beyond breakfast; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Kazakhstan', href: '/asien/kazakhstan' },
  { label: detail.title }
];

export const almatyNatureWondersYoungBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const almatyNatureWondersYoungProduct = {
  slug: detail.slug,
  places: ['Almaty', 'Charyn Canyon', 'Kolsai Lakes'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 8,
  transfers: 14,
  meals: 5,
  price: detail.price,
  images: cardImages
};
