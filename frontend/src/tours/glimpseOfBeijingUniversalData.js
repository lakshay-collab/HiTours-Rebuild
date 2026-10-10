// Glimpse of Beijing with Universal Studios. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ctm7putz8t317jfnvqrlmkbfjtf8_shutterstock_2373412537.jpg'),
  img('epv2sjl3l7kpmrcptkpax85imqtv_shutterstock_408343930.jpg'),
  img('x5ma6kudmhcbtv8d05yash9xvw8e_shutterstock_71208400.jpg'),
  img('76kulqjmtharkjpb3gh7emeezwb3_UniversalStudiosBeijingTicket%20(2).webp'),
  img('wckwegqdeu0401r3uat0wxuqjk9p_shutterstock_2087531911.jpg'),
  img('6vxmfc1l9jfx78wggvelsrxw1ve1_UniversalStudiosBeijingTicket%20(6).jpg'),
  img('denrct0p3k27hlab3he9qh4e9bux_UniversalStudiosBeijingTicket%20(4).jpg'),
  img('ux7cbrp2jopf9v7co1k3903ybxez_br2bnwd3xa9klj7u3jl7ylw3kx2r_shutterstock_1296100681-min.webp'),
  img('0g2mtmjgqtbr2alw8qd2tp65s99k_shutterstock_1828179890.jpg'),
  img('9rbtq82wxkcf00epyti53cehezub_Downpic.cc-image440642400.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('ctm7putz8t317jfnvqrlmkbfjtf8_shutterstock_2373412537.jpg'),
  img('epv2sjl3l7kpmrcptkpax85imqtv_shutterstock_408343930.jpg'),
  img('x5ma6kudmhcbtv8d05yash9xvw8e_shutterstock_71208400.jpg'),
  img('wckwegqdeu0401r3uat0wxuqjk9p_shutterstock_2087531911.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Beijing',
    dayLabel: 'Day 1 to 5',
    images: [
      img('ctm7putz8t317jfnvqrlmkbfjtf8_shutterstock_2373412537.jpg'),
      img('741xkb8mz2vbzp4ki46wd9wl8hf3_shutterstock_82092487.jpg'),
      img('epv2sjl3l7kpmrcptkpax85imqtv_shutterstock_408343930.jpg'),
      img('cqumwp6878dhqrvrgiiu7cte3cug_dl.beatsnoop.com-3000-gEZaF87Nmb.jpg')
    ],
    dayImages: {
      1: [
        img('cgvn0zymkzff9bznlpd8xrqwqv7j_1619597637_shutterstock_269743367.jpg'),
        img('x6xdiza6qwod8l8ofd9ytan5y5ol_Yuyuantan_Park_2010.jpg'),
        img('84gat8evimyzy1miparwyy6d1bch_tian-yi-jade-factory.png'),
        img('ctm7putz8t317jfnvqrlmkbfjtf8_shutterstock_2373412537.jpg')
      ],
      2: [
        img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
        img('ctm7putz8t317jfnvqrlmkbfjtf8_shutterstock_2373412537.jpg'),
        img('741xkb8mz2vbzp4ki46wd9wl8hf3_shutterstock_82092487.jpg'),
        img('epv2sjl3l7kpmrcptkpax85imqtv_shutterstock_408343930.jpg')
      ],
      3: [
        img('s12nn7g02u6anopsc500e2ohdkgi_shutterstock_408855481.jpg'),
        img('ui0rfb1kkyhudls0ncropdp1gukq_1619610265_shutterstock_71208424.jpg'),
        img('ctm7putz8t317jfnvqrlmkbfjtf8_shutterstock_2373412537.jpg'),
        img('741xkb8mz2vbzp4ki46wd9wl8hf3_shutterstock_82092487.jpg')
      ],
      4: [
        img('wt3hzz5toushzf6vnpc2boai2jta_UniversalStudiosBeijingTicket.webp'),
        img('uyax1rp8ugre6esy532onpia0k8i_shutterstock_2441137773.jpg'),
        img('ctm7putz8t317jfnvqrlmkbfjtf8_shutterstock_2373412537.jpg'),
        img('741xkb8mz2vbzp4ki46wd9wl8hf3_shutterstock_82092487.jpg')
      ],
      5: [
        img('ctm7putz8t317jfnvqrlmkbfjtf8_shutterstock_2373412537.jpg'),
        img('741xkb8mz2vbzp4ki46wd9wl8hf3_shutterstock_82092487.jpg'),
        img('epv2sjl3l7kpmrcptkpax85imqtv_shutterstock_408343930.jpg'),
        img('cqumwp6878dhqrvrgiiu7cte3cug_dl.beatsnoop.com-3000-gEZaF87Nmb.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Beijing`,
      'Arrival at Beijing Capital and transfer to your hotel',
      'Check in and the rest of the day free',
      'Optional: an evening in the Sanlitun lanes',
      'Optional: Peking duck at a neighbourhood restaurant',
      `${DAY_MARK}Day 2 · Great Wall and the Summer Palace`,
      'Early breakfast, then north to Mutianyu',
      'The cable car and the walk along the wall',
      'On to the Summer Palace in the afternoon',
      'Kunming lake, the long corridor and the marble boat',
      `${DAY_MARK}Day 3 · Beijing Zoo and the pandas`,
      'Breakfast, then across to the zoo',
      'The panda house and the giant pandas',
      'The old imperial menagerie grounds',
      'Afternoon free in the city',
      `${DAY_MARK}Day 4 · Universal Studios Beijing`,
      'Early breakfast, then out to Universal Studios',
      'Tickets included for the full day',
      'The Harry Potter area and the water park rides',
      'Back at the hotel in the evening',
      `${DAY_MARK}Day 5 · Departure from Beijing`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Holiday Inn Express Beijing Huacai, Beijing',
      description: '4 nights · Breakfast · Standard room · 3★ · Simple hotel in Chaoyang, close to the metro',
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
        description: 'The Mutianyu section of the wall, the steepest and least crowded of the restored stretches, then the lake and long corridor of the Summer Palace.'
      },
      {
        name: 'Beijing Zoo with the panda house',
        day: 3,
        optional: false,
        image: img('s12nn7g02u6anopsc500e2ohdkgi_shutterstock_408855481.jpg'),
        description: 'The old imperial menagerie grounds, with the panda house where the giant pandas are kept in their own enclosures.'
      },
      {
        name: 'Universal Studios Beijing',
        day: 4,
        optional: false,
        image: img('wt3hzz5toushzf6vnpc2boai2jta_UniversalStudiosBeijingTicket.webp'),
        description: 'A full day at Universal Studios Beijing with tickets included, home to the largest Harry Potter area built anywhere.'
      }
    ],
    program: {
      name: 'Beijing',
      description: 'Four nights with the wall at Mutianyu, the Summer Palace, the panda house and a full day at Universal Studios.',
      image: img('ctm7putz8t317jfnvqrlmkbfjtf8_shutterstock_2373412537.jpg')
    }
  }
];

const detail = {
  slug: 'glimpse-of-beijing-with-universal-studios',
  ctaHref: '/l/china/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Glimpse of Beijing with Universal Studios',
  alt: 'Entrance globe at Universal Studios Beijing',
  days: '5 days / 4 nights',
  stations: '1 stops',
  transport: 'Private airport transfers and guided day tours',
  tag: 'Family',
  tags: ['Family', 'Theme parks'],
  price: 37715,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Beijing', 'Mutianyu'],
  stats: { days: 5, cities: 1, hotels: 1, activities: 3, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['6 transfers', 'Transport'],
    ['4 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Mei',
    image: '/experts/riya.webp',
    role: 'China expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'The wall, the pandas and Universal in four nights. It is the version families ask for once they hear the park is here.',
    quoteMore: 'Universal Beijing is quietest midweek. Head left to the Harry Potter area first, the queues there build fastest.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five days in the capital: the Great Wall at Mutianyu with the Summer Palace, the panda house at Beijing Zoo, and a full day at Universal Studios Beijing with tickets included.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights with daily breakfast; private airport transfers; a full day guided tour of the Great Wall at Mutianyu and the Summer Palace; Beijing Zoo tickets with the panda house; Universal Studios Beijing tickets.',
  intro2: 'Not included: international flights; China visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Beijing (Arrival)', text: 'Arrival at Beijing Capital and transfer to your hotel\nCheck in and the rest of the day free\nOptional: an evening in the Sanlitun lanes\nOptional: Peking duck at a neighbourhood restaurant', hotel: 'Holiday Inn Express Beijing Huacai', highlights: ['Arrival at Beijing Capital and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: an evening in the Sanlitun lanes'] },
    { title: 'Day 2: Great Wall and the Summer Palace (B)', text: 'Early breakfast, then north to Mutianyu\nThe cable car and the walk along the wall\nOn to the Summer Palace in the afternoon\nKunming lake, the long corridor and the marble boat', hotel: 'Holiday Inn Express Beijing Huacai', highlights: ['Early breakfast, then north to Mutianyu', 'The cable car and the walk along the wall', 'On to the Summer Palace in the afternoon'] },
    { title: 'Day 3: Beijing Zoo and the pandas (B)', text: 'Breakfast, then across to the zoo\nThe panda house and the giant pandas\nThe old imperial menagerie grounds\nAfternoon free in the city', hotel: 'Holiday Inn Express Beijing Huacai', highlights: ['Breakfast, then across to the zoo', 'The panda house and the giant pandas', 'The old imperial menagerie grounds'] },
    { title: 'Day 4: Universal Studios Beijing (B)', text: 'Early breakfast, then out to Universal Studios\nTickets included for the full day\nThe Harry Potter area and the water park rides\nBack at the hotel in the evening', hotel: 'Holiday Inn Express Beijing Huacai', highlights: ['Early breakfast, then out to Universal Studios', 'Tickets included for the full day', 'The Harry Potter area and the water park rides'] },
    { title: 'Day 5: Departure from Beijing (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; China visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'China', href: '/asien/china' },
  { label: detail.title }
];

export const glimpseOfBeijingUniversalBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const glimpseOfBeijingUniversalProduct = {
  slug: detail.slug,
  places: ['Beijing', 'Mutianyu'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 3,
  transfers: 6,
  meals: 4,
  price: detail.price,
  images: cardImages
};
