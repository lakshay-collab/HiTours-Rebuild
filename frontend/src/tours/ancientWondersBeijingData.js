// Ancient Wonders of Beijing. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg'),
  img('eym5xev151ynqgk8hlkhaufeqvoa_dl.beatsnoop.com-final-FO30dKJxlR.jpg'),
  img('pnd6g0pa1iglst74lum00gr9m2hg_shutterstock_107003903.jpg'),
  img('br2bnwd3xa9klj7u3jl7ylw3kx2r_shutterstock_1296100681-min.jpg'),
  img('nv0x1b4ik8nw7d02dqt7jnf71i04_shutterstock_2470002109.jpg'),
  img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
  img('65lttyqfgunfqo2co9g349dekzsb_dl.beatsnoop.com-final-rnfwMY0T7P.jpg'),
  img('vnh8evdh13mzq66ikduyzt4g11dr_shutterstock_257936231.jpg'),
  img('9elrk1q3gfmuwr2c3q9dja7qzj7t_shutterstock_238805386.jpg'),
  img('saunp7o9x734fy5y35mmjqscrstd_shutterstock_689660482.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg'),
  img('eym5xev151ynqgk8hlkhaufeqvoa_dl.beatsnoop.com-final-FO30dKJxlR.jpg'),
  img('pnd6g0pa1iglst74lum00gr9m2hg_shutterstock_107003903.jpg'),
  img('br2bnwd3xa9klj7u3jl7ylw3kx2r_shutterstock_1296100681-min.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Beijing',
    dayLabel: 'Day 1 to 3',
    images: [
      img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg'),
      img('ttve56fzzz4sxqskdmvkehcia0w3_dl.beatsnoop.com-final-s8tCIEWjyY.jpg'),
      img('eym5xev151ynqgk8hlkhaufeqvoa_dl.beatsnoop.com-final-FO30dKJxlR.jpg'),
      img('vnh8evdh13mzq66ikduyzt4g11dr_shutterstock_257936231.jpg')
    ],
    dayImages: {
      1: [
        img('cgvn0zymkzff9bznlpd8xrqwqv7j_1619597637_shutterstock_269743367.jpg'),
        img('etf645xhd90ozb781uxlmzp1p7c2_1619610568_shutterstock_732680590.jpg'),
        img('vmb0lvweark7kfhqxjjsgtxokqj0_1619610325_shutterstock_293184050.jpg'),
        img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg')
      ],
      2: [
        img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
        img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg'),
        img('ttve56fzzz4sxqskdmvkehcia0w3_dl.beatsnoop.com-final-s8tCIEWjyY.jpg'),
        img('eym5xev151ynqgk8hlkhaufeqvoa_dl.beatsnoop.com-final-FO30dKJxlR.jpg')
      ],
      3: [
        img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg'),
        img('ttve56fzzz4sxqskdmvkehcia0w3_dl.beatsnoop.com-final-s8tCIEWjyY.jpg'),
        img('eym5xev151ynqgk8hlkhaufeqvoa_dl.beatsnoop.com-final-FO30dKJxlR.jpg'),
        img('vnh8evdh13mzq66ikduyzt4g11dr_shutterstock_257936231.jpg')
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
      `${DAY_MARK}Day 3 · Departure from Beijing`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Holiday Inn Express Beijing Airport Zone, Beijing',
      description: '2 nights · Breakfast · Standard room · 3★ · Simple hotel in the airport zone, handy for early flights',
      images: [
        img('ae0hac2g5qd1n9axh1jqpt99ozd1_230938408.jpg'),
        img('l99whlymbj2e9oq79r3k810j0tot_449523454.jpg'),
        img('n5eklhgzp2u01vpbddaa1r5zxi2y_562215035.jpg'),
        img('81eqlhk2zzjykqyh3pch031wknoy_449523548.jpg'),
        img('7kk13ainhi0qx7fo0tthv63ps91d_12482579.jpg'),
        img('jhawmh5e256sjdp1x2h23ps17h4g_449517694.jpg'),
        img('g88p34unkr9pk4pcj2iyenv2r8vm_562215034.jpg'),
        img('qwks499yg21lter3820b29gq6m5s_449517678.jpg'),
        img('z9de7zmyvi82jz0hr02swt3tcceh_562215021.jpg'),
        img('fcdpa7aud4793bc91732rlod14qv_449517685.jpg'),
        img('lqsxw6znys0rnvb0pkhp7hyaqwas_562232017.jpg')
      ]
    },
    activities: [
      {
        name: 'Great Wall at Mutianyu and the Summer Palace',
        day: 2,
        optional: false,
        image: img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
        description: 'The Mutianyu section of the wall, the steepest and least crowded of the restored stretches, then the lake and long corridor of the Summer Palace.'
      }
    ],
    program: {
      name: 'Beijing',
      description: 'Two nights with one long guided day: the wall at Mutianyu in the morning and the Summer Palace after it.',
      image: img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg')
    }
  }
];

const detail = {
  slug: 'ancient-wonders-of-beijing',
  ctaHref: '/l/china/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Ancient Wonders of Beijing',
  alt: 'Mutianyu section of the Great Wall winding over the hills',
  days: '3 days / 2 nights',
  stations: '1 stops',
  transport: 'Private airport transfers and a guided full day',
  tag: 'Short break',
  tags: ['Short break', 'Culture'],
  price: 23750,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Beijing', 'Mutianyu'],
  stats: { days: 3, cities: 1, hotels: 1, activities: 1, transfers: 4 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['1 experience', 'Activities'],
    ['4 transfers', 'Transport'],
    ['2 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Mei',
    image: '/experts/riya.webp',
    role: 'China expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Mutianyu rather than Badaling is the right call. Same wall, a fraction of the crowd and a far better walk.',
    quoteMore: 'Take the cable car up and walk down. The steps on the lower towers are punishing in the other direction.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A two night stop with the one day that matters: the Great Wall at Mutianyu, the quietest of the restored sections, followed by the lake and long corridor of the Summer Palace.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 2 nights with daily breakfast; private airport transfers; a full day guided tour of the Great Wall at Mutianyu and the Summer Palace.',
  intro2: 'Not included: international flights; China visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Beijing (Arrival)', text: 'Arrival at Beijing Capital and transfer to your hotel\nCheck in and the rest of the day free\nOptional: an evening in the Sanlitun lanes\nOptional: Peking duck at a neighbourhood restaurant', hotel: 'Holiday Inn Express Beijing Airport Zone', highlights: ['Arrival at Beijing Capital and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: an evening in the Sanlitun lanes'] },
    { title: 'Day 2: Great Wall and the Summer Palace (B)', text: 'Early breakfast, then north to Mutianyu\nThe cable car and the walk along the wall\nOn to the Summer Palace in the afternoon\nKunming lake, the long corridor and the marble boat', hotel: 'Holiday Inn Express Beijing Airport Zone', highlights: ['Early breakfast, then north to Mutianyu', 'The cable car and the walk along the wall', 'On to the Summer Palace in the afternoon'] },
    { title: 'Day 3: Departure from Beijing (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; China visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'China', href: '/asien/china' },
  { label: detail.title }
];

export const ancientWondersBeijingBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const ancientWondersBeijingProduct = {
  slug: detail.slug,
  places: ['Beijing', 'Mutianyu'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 3,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 1,
  transfers: 4,
  meals: 2,
  price: detail.price,
  images: cardImages
};
