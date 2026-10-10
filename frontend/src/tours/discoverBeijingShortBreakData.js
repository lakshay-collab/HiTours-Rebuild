// Discover Beijing: Great Wall and Universal Studios. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('65lttyqfgunfqo2co9g349dekzsb_dl.beatsnoop.com-final-rnfwMY0T7P.jpg'),
  img('ttve56fzzz4sxqskdmvkehcia0w3_dl.beatsnoop.com-final-s8tCIEWjyY.jpg'),
  img('wt3hzz5toushzf6vnpc2boai2jta_UniversalStudiosBeijingTicket.webp'),
  img('k2vx80tq8tycf04g2zku0sfxl5pc_shutterstock_2037974363.jpg'),
  img('f7mzhka10n1qxqbprrvh0pxsgnic_UniversalStudiosBeijingTicket%20(3).webp'),
  img('mugn7n061ldb6kas47nhgos2rs6k_UniversalStudiosBeijingTicket%20(5).jpg'),
  img('8a7cqv1118cjp1rl82jfkr0vss41_maxresdefault%20(4).jpg'),
  img('pe03k2v0qjdf57oi5ftomtsnqls1_osougxumyaicoutw445a.webp'),
  img('lcii7axh6tobdq5z7a3i4wowohbf_shutterstock_159898340.jpg'),
  img('3zmfq3kro6712p921d9wf07at4nc_shutterstock_1849707601.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('65lttyqfgunfqo2co9g349dekzsb_dl.beatsnoop.com-final-rnfwMY0T7P.jpg'),
  img('ttve56fzzz4sxqskdmvkehcia0w3_dl.beatsnoop.com-final-s8tCIEWjyY.jpg'),
  img('wt3hzz5toushzf6vnpc2boai2jta_UniversalStudiosBeijingTicket.webp'),
  img('k2vx80tq8tycf04g2zku0sfxl5pc_shutterstock_2037974363.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Beijing',
    dayLabel: 'Day 1 to 4',
    images: [
      img('65lttyqfgunfqo2co9g349dekzsb_dl.beatsnoop.com-final-rnfwMY0T7P.jpg'),
      img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg'),
      img('ttve56fzzz4sxqskdmvkehcia0w3_dl.beatsnoop.com-final-s8tCIEWjyY.jpg'),
      img('eym5xev151ynqgk8hlkhaufeqvoa_dl.beatsnoop.com-final-FO30dKJxlR.jpg')
    ],
    dayImages: {
      1: [
        img('cgvn0zymkzff9bznlpd8xrqwqv7j_1619597637_shutterstock_269743367.jpg'),
        img('x6xdiza6qwod8l8ofd9ytan5y5ol_Yuyuantan_Park_2010.jpg'),
        img('84gat8evimyzy1miparwyy6d1bch_tian-yi-jade-factory.png'),
        img('65lttyqfgunfqo2co9g349dekzsb_dl.beatsnoop.com-final-rnfwMY0T7P.jpg')
      ],
      2: [
        img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
        img('65lttyqfgunfqo2co9g349dekzsb_dl.beatsnoop.com-final-rnfwMY0T7P.jpg'),
        img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg'),
        img('ttve56fzzz4sxqskdmvkehcia0w3_dl.beatsnoop.com-final-s8tCIEWjyY.jpg')
      ],
      3: [
        img('wt3hzz5toushzf6vnpc2boai2jta_UniversalStudiosBeijingTicket.webp'),
        img('uyax1rp8ugre6esy532onpia0k8i_shutterstock_2441137773.jpg'),
        img('65lttyqfgunfqo2co9g349dekzsb_dl.beatsnoop.com-final-rnfwMY0T7P.jpg'),
        img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg')
      ],
      4: [
        img('65lttyqfgunfqo2co9g349dekzsb_dl.beatsnoop.com-final-rnfwMY0T7P.jpg'),
        img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg'),
        img('ttve56fzzz4sxqskdmvkehcia0w3_dl.beatsnoop.com-final-s8tCIEWjyY.jpg'),
        img('eym5xev151ynqgk8hlkhaufeqvoa_dl.beatsnoop.com-final-FO30dKJxlR.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Beijing`,
      'Arrival at Beijing Capital and transfer to your hotel',
      'Check in and the rest of the day free',
      'Optional: the National Museum on Tiananmen Square',
      'Optional: Peking duck at a neighbourhood restaurant',
      `${DAY_MARK}Day 2 · Great Wall and the Summer Palace`,
      'Early breakfast, then north to Mutianyu',
      'The cable car and the walk along the wall',
      'On to the Summer Palace in the afternoon',
      'Kunming lake, the long corridor and the marble boat',
      `${DAY_MARK}Day 3 · Universal Studios Beijing`,
      'Early breakfast, then out to Universal Studios',
      'Tickets included for the full day',
      'The Harry Potter area and the water park rides',
      'Back at the hotel in the evening',
      `${DAY_MARK}Day 4 · Departure from Beijing`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Holiday Inn Express Beijing Huacai, Beijing',
      description: '3 nights · Breakfast · Standard room · 3★ · Simple hotel in Chaoyang, close to the metro',
      images: [
        img('3b4gz9aov40t96ogrda2jhvg1q1t_download%20(3).png'),
        img('ji2e1fiswpb2bh6a0f9tw74wciq7_download.png'),
        img('4klt1p2b0p6084tozhz8v1sqeoon_download%20(5).png'),
        img('f6ur39l3yfs9cfsrx76cgjmynx36_download%20(10).png'),
        img('stuz5zpxnigri6crm4sbcl0vipiz_download%20(7).png'),
        img('4m23luywihiiew6he29e7ne5y9pd_download%20(2).png'),
        img('4jm1r5udgur3oj27w7b11po95by8_download%20(8).png'),
        img('z4wfj6rsuku27ileod8ejxv1g31t_download%20(4).png'),
        img('fcd5rd430f52k5hihctlwqkn6fqa_download%20(6).png'),
        img('wkxjbpeobmslop2ifzhcg6o3dn4w_download%20(1).png'),
        img('mt62w350l0rnv10hpz2lm7bg2ucn_download%20(9).png')
      ]
    },
    activities: [
      {
        name: 'Great Wall at Mutianyu and the Summer Palace',
        day: 2,
        optional: false,
        image: img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
        description: 'The Mutianyu section of the wall, steep and far less crowded than Badaling, then the lake and long corridor of the Summer Palace.'
      },
      {
        name: 'Universal Studios Beijing',
        day: 3,
        optional: false,
        image: img('wt3hzz5toushzf6vnpc2boai2jta_UniversalStudiosBeijingTicket.webp'),
        description: 'A full day at Universal Studios Beijing with tickets included, home to the largest Harry Potter area built anywhere.'
      }
    ],
    program: {
      name: 'Beijing',
      description: 'Three nights in the capital with the wall at Mutianyu, the Summer Palace and a full day at Universal Studios Beijing.',
      image: img('65lttyqfgunfqo2co9g349dekzsb_dl.beatsnoop.com-final-rnfwMY0T7P.jpg')
    }
  }
];

const detail = {
  slug: 'discover-beijing-wall-and-universal',
  ctaHref: '/l/china/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Discover Beijing: Great Wall and Universal Studios',
  alt: 'Watchtowers of the Great Wall at Mutianyu',
  days: '4 days / 3 nights',
  stations: '1 stops',
  transport: 'Private airport transfers and a guided day tour',
  tag: 'Family',
  tags: ['Family', 'Theme parks'],
  price: 33250,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Beijing', 'Mutianyu'],
  stats: { days: 4, cities: 1, hotels: 1, activities: 2, transfers: 3 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['2 experiences', 'Activities'],
    ['3 transfers', 'Transport'],
    ['3 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Mei',
    image: '/experts/riya.webp',
    role: 'China expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three nights, two big days. It is the short Beijing break people take when they only have a long weekend to spare.',
    quoteMore: 'Take the toboggan down from the wall at Mutianyu. It is quicker than the cable car queue and the children will talk about it for weeks.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Four days in the Chinese capital with daily breakfast: a full guided day on the Great Wall at Mutianyu with the Summer Palace, and a full day at Universal Studios Beijing with tickets included.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights in Beijing with daily breakfast; private airport transfers; full day guided tour of the Great Wall at Mutianyu and the Summer Palace; Universal Studios Beijing tickets; visa assistance.',
  intro2: 'Not included: international flights; China visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Beijing (Arrival)', text: 'Arrival at Beijing Capital and transfer to your hotel\nCheck in and the rest of the day free\nOptional: the National Museum on Tiananmen Square\nOptional: Peking duck at a neighbourhood restaurant', hotel: 'Holiday Inn Express Beijing Huacai', highlights: ['Arrival at Beijing Capital and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: the National Museum on Tiananmen Square'] },
    { title: 'Day 2: Great Wall and the Summer Palace (B)', text: 'Early breakfast, then north to Mutianyu\nThe cable car and the walk along the wall\nOn to the Summer Palace in the afternoon\nKunming lake, the long corridor and the marble boat', hotel: 'Holiday Inn Express Beijing Huacai', highlights: ['Early breakfast, then north to Mutianyu', 'The cable car and the walk along the wall', 'On to the Summer Palace in the afternoon'] },
    { title: 'Day 3: Universal Studios Beijing (B)', text: 'Early breakfast, then out to Universal Studios\nTickets included for the full day\nThe Harry Potter area and the water park rides\nBack at the hotel in the evening', hotel: 'Holiday Inn Express Beijing Huacai', highlights: ['Early breakfast, then out to Universal Studios', 'Tickets included for the full day', 'The Harry Potter area and the water park rides'] },
    { title: 'Day 4: Departure from Beijing (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; China visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'China', href: '/asia/china' },
  { label: detail.title }
];

export const discoverBeijingShortBreakBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const discoverBeijingShortBreakProduct = {
  slug: detail.slug,
  places: ['Beijing', 'Mutianyu'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 4,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 2,
  transfers: 3,
  meals: 3,
  price: detail.price,
  images: cardImages
};
