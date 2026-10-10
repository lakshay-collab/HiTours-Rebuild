// Highlights of Beijing. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('zn3xbbne69a0kbb8ji4o52cgcd0x_vnh8evdh13mzq66ikduyzt4g11dr_shutterstock_257936231.webp'),
  img('6ewump5le3pbzddytvn3l9hkenx3_shutterstock_82092487.jpg'),
  img('ok9opdlfrpj5koec0e42iu16b21d_dl.beatsnoop.com-final-zlrJO750No.jpg'),
  img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg'),
  img('eym5xev151ynqgk8hlkhaufeqvoa_dl.beatsnoop.com-final-FO30dKJxlR.jpg'),
  img('two5p215n1d7mje1km1t8gapopu6_dl.beatsnoop.com-3000-MQKn5sU4Oa.jpg'),
  img('49ndf08oq6dy0lneb21j3ppi58i8_shutterstock_408841948.jpg'),
  img('741xkb8mz2vbzp4ki46wd9wl8hf3_shutterstock_82092487.jpg'),
  img('cqumwp6878dhqrvrgiiu7cte3cug_dl.beatsnoop.com-3000-gEZaF87Nmb.jpg'),
  img('plfeu3uj0wqavg16eg3i0i70ln4a_Downpic.cc-106951027.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('zn3xbbne69a0kbb8ji4o52cgcd0x_vnh8evdh13mzq66ikduyzt4g11dr_shutterstock_257936231.webp'),
  img('6ewump5le3pbzddytvn3l9hkenx3_shutterstock_82092487.jpg'),
  img('ok9opdlfrpj5koec0e42iu16b21d_dl.beatsnoop.com-final-zlrJO750No.jpg'),
  img('two5p215n1d7mje1km1t8gapopu6_dl.beatsnoop.com-3000-MQKn5sU4Oa.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Beijing',
    dayLabel: 'Day 1 to 4',
    images: [
      img('zn3xbbne69a0kbb8ji4o52cgcd0x_vnh8evdh13mzq66ikduyzt4g11dr_shutterstock_257936231.webp'),
      img('phh17jj3rcvnsvx1dq94nk14ufr0_dl.beatsnoop.com-3000-MQKn5sU4Oa.jpg'),
      img('6ewump5le3pbzddytvn3l9hkenx3_shutterstock_82092487.jpg'),
      img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg')
    ],
    dayImages: {
      1: [
        img('cgvn0zymkzff9bznlpd8xrqwqv7j_1619597637_shutterstock_269743367.jpg'),
        img('x6xdiza6qwod8l8ofd9ytan5y5ol_Yuyuantan_Park_2010.jpg'),
        img('84gat8evimyzy1miparwyy6d1bch_tian-yi-jade-factory.png'),
        img('zn3xbbne69a0kbb8ji4o52cgcd0x_vnh8evdh13mzq66ikduyzt4g11dr_shutterstock_257936231.webp')
      ],
      2: [
        img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
        img('zn3xbbne69a0kbb8ji4o52cgcd0x_vnh8evdh13mzq66ikduyzt4g11dr_shutterstock_257936231.webp'),
        img('phh17jj3rcvnsvx1dq94nk14ufr0_dl.beatsnoop.com-3000-MQKn5sU4Oa.jpg'),
        img('6ewump5le3pbzddytvn3l9hkenx3_shutterstock_82092487.jpg')
      ],
      3: [
        img('s12nn7g02u6anopsc500e2ohdkgi_shutterstock_408855481.jpg'),
        img('ui0rfb1kkyhudls0ncropdp1gukq_1619610265_shutterstock_71208424.jpg'),
        img('zn3xbbne69a0kbb8ji4o52cgcd0x_vnh8evdh13mzq66ikduyzt4g11dr_shutterstock_257936231.webp'),
        img('phh17jj3rcvnsvx1dq94nk14ufr0_dl.beatsnoop.com-3000-MQKn5sU4Oa.jpg')
      ],
      4: [
        img('zn3xbbne69a0kbb8ji4o52cgcd0x_vnh8evdh13mzq66ikduyzt4g11dr_shutterstock_257936231.webp'),
        img('phh17jj3rcvnsvx1dq94nk14ufr0_dl.beatsnoop.com-3000-MQKn5sU4Oa.jpg'),
        img('6ewump5le3pbzddytvn3l9hkenx3_shutterstock_82092487.jpg'),
        img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg')
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
      `${DAY_MARK}Day 4 · Departure from Beijing`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Holiday Inn Express Beijing Airport Zone, Beijing',
      description: '3 nights · Breakfast · Standard room · 3★ · Simple hotel in the airport zone, handy for early flights',
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
      },
      {
        name: 'Beijing Zoo with the panda house',
        day: 3,
        optional: false,
        image: img('s12nn7g02u6anopsc500e2ohdkgi_shutterstock_408855481.jpg'),
        description: 'The old imperial menagerie grounds, with the panda house where the giant pandas are kept in their own enclosures.'
      }
    ],
    program: {
      name: 'Beijing',
      description: 'Three nights with the wall at Mutianyu, the Summer Palace and the panda house at the zoo.',
      image: img('zn3xbbne69a0kbb8ji4o52cgcd0x_vnh8evdh13mzq66ikduyzt4g11dr_shutterstock_257936231.webp')
    }
  }
];

const detail = {
  slug: 'highlights-of-beijing',
  ctaHref: '/l/china/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Highlights of Beijing',
  alt: 'Giant panda feeding at the panda house in Beijing',
  days: '4 days / 3 nights',
  stations: '1 stops',
  transport: 'Private airport transfers and guided day tours',
  tag: 'Family',
  tags: ['Family', 'Culture'],
  price: 28025,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Beijing', 'Mutianyu'],
  stats: { days: 4, cities: 1, hotels: 1, activities: 2, transfers: 5 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['2 experiences', 'Activities'],
    ['5 transfers', 'Transport'],
    ['3 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Mei',
    image: '/experts/riya.webp',
    role: 'China expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three nights, the wall and the pandas. For families with small children this is the right length for Beijing.',
    quoteMore: 'Get to the panda house when the zoo opens. The pandas are active for the first hour and asleep by eleven.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Four days in the capital: the Great Wall at Mutianyu with the Summer Palace, then the panda house at Beijing Zoo, with free time in the city around them.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights with daily breakfast; private airport transfers; a full day guided tour of the Great Wall at Mutianyu and the Summer Palace; Beijing Zoo tickets with the panda house.',
  intro2: 'Not included: international flights; China visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Beijing (Arrival)', text: 'Arrival at Beijing Capital and transfer to your hotel\nCheck in and the rest of the day free\nOptional: an evening in the Sanlitun lanes\nOptional: Peking duck at a neighbourhood restaurant', hotel: 'Holiday Inn Express Beijing Airport Zone', highlights: ['Arrival at Beijing Capital and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: an evening in the Sanlitun lanes'] },
    { title: 'Day 2: Great Wall and the Summer Palace (B)', text: 'Early breakfast, then north to Mutianyu\nThe cable car and the walk along the wall\nOn to the Summer Palace in the afternoon\nKunming lake, the long corridor and the marble boat', hotel: 'Holiday Inn Express Beijing Airport Zone', highlights: ['Early breakfast, then north to Mutianyu', 'The cable car and the walk along the wall', 'On to the Summer Palace in the afternoon'] },
    { title: 'Day 3: Beijing Zoo and the pandas (B)', text: 'Breakfast, then across to the zoo\nThe panda house and the giant pandas\nThe old imperial menagerie grounds\nAfternoon free in the city', hotel: 'Holiday Inn Express Beijing Airport Zone', highlights: ['Breakfast, then across to the zoo', 'The panda house and the giant pandas', 'The old imperial menagerie grounds'] },
    { title: 'Day 4: Departure from Beijing (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; China visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'China', href: '/asia/china' },
  { label: detail.title }
];

export const highlightsOfBeijingShortBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const highlightsOfBeijingShortProduct = {
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
  transfers: 5,
  meals: 3,
  price: detail.price,
  images: cardImages
};
