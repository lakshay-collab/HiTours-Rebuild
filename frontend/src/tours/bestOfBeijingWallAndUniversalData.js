// Best of Beijing with Universal Studios. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('76kulqjmtharkjpb3gh7emeezwb3_UniversalStudiosBeijingTicket%20(2).webp'),
  img('wckwegqdeu0401r3uat0wxuqjk9p_shutterstock_2087531911.jpg'),
  img('6vxmfc1l9jfx78wggvelsrxw1ve1_UniversalStudiosBeijingTicket%20(6).jpg'),
  img('denrct0p3k27hlab3he9qh4e9bux_UniversalStudiosBeijingTicket%20(4).jpg'),
  img('7kapt01u3qxgs99fz91puudjscok_0g2mtmjgqtbr2alw8qd2tp65s99k_shutterstock_1828179890.webp'),
  img('owkvwbmwingdtidbq988gbfd9nnu_shutterstock_2087531707.jpg'),
  img('5mmylunyg0k99s2tx9cgx15zqy87_shutterstock_324699287.jpg'),
  img('ok9opdlfrpj5koec0e42iu16b21d_dl.beatsnoop.com-final-zlrJO750No.jpg'),
  img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg'),
  img('eym5xev151ynqgk8hlkhaufeqvoa_dl.beatsnoop.com-final-FO30dKJxlR.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('76kulqjmtharkjpb3gh7emeezwb3_UniversalStudiosBeijingTicket%20(2).webp'),
  img('6vxmfc1l9jfx78wggvelsrxw1ve1_UniversalStudiosBeijingTicket%20(6).jpg'),
  img('denrct0p3k27hlab3he9qh4e9bux_UniversalStudiosBeijingTicket%20(4).jpg'),
  img('7kapt01u3qxgs99fz91puudjscok_0g2mtmjgqtbr2alw8qd2tp65s99k_shutterstock_1828179890.webp')
];

const stops = [
  {
    letter: 'A',
    name: 'Beijing',
    dayLabel: 'Day 1 to 6',
    images: [
      img('76kulqjmtharkjpb3gh7emeezwb3_UniversalStudiosBeijingTicket%20(2).webp'),
      img('k2vx80tq8tycf04g2zku0sfxl5pc_shutterstock_2037974363.jpg'),
      img('wckwegqdeu0401r3uat0wxuqjk9p_shutterstock_2087531911.jpg'),
      img('f7mzhka10n1qxqbprrvh0pxsgnic_UniversalStudiosBeijingTicket%20(3).webp')
    ],
    dayImages: {
      1: [
        img('cgvn0zymkzff9bznlpd8xrqwqv7j_1619597637_shutterstock_269743367.jpg'),
        img('etf645xhd90ozb781uxlmzp1p7c2_1619610568_shutterstock_732680590.jpg'),
        img('vmb0lvweark7kfhqxjjsgtxokqj0_1619610325_shutterstock_293184050.jpg'),
        img('76kulqjmtharkjpb3gh7emeezwb3_UniversalStudiosBeijingTicket%20(2).webp')
      ],
      2: [
        img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
        img('76kulqjmtharkjpb3gh7emeezwb3_UniversalStudiosBeijingTicket%20(2).webp'),
        img('k2vx80tq8tycf04g2zku0sfxl5pc_shutterstock_2037974363.jpg'),
        img('wckwegqdeu0401r3uat0wxuqjk9p_shutterstock_2087531911.jpg')
      ],
      3: [
        img('uzcrzvz5okpx6n4cpj66bbxe6ek4_Downpic.cc-71935295.jpg'),
        img('4q5tejgfrgal67d9s1rm66myvq3e_1619595246_shutterstock_721311280.jpg'),
        img('wmzivohel7wnazhjlo5exrpawr6o_1619597766_shutterstock_31943836.jpg'),
        img('xhapwj9v3aun8mqo8zxnwqvaqp74_1619597223_shutterstock_141819499.jpg')
      ],
      4: [
        img('s12nn7g02u6anopsc500e2ohdkgi_shutterstock_408855481.jpg'),
        img('ui0rfb1kkyhudls0ncropdp1gukq_1619610265_shutterstock_71208424.jpg'),
        img('76kulqjmtharkjpb3gh7emeezwb3_UniversalStudiosBeijingTicket%20(2).webp'),
        img('k2vx80tq8tycf04g2zku0sfxl5pc_shutterstock_2037974363.jpg')
      ],
      5: [
        img('wt3hzz5toushzf6vnpc2boai2jta_UniversalStudiosBeijingTicket.webp'),
        img('uyax1rp8ugre6esy532onpia0k8i_shutterstock_2441137773.jpg'),
        img('76kulqjmtharkjpb3gh7emeezwb3_UniversalStudiosBeijingTicket%20(2).webp'),
        img('k2vx80tq8tycf04g2zku0sfxl5pc_shutterstock_2037974363.jpg')
      ],
      6: [
        img('76kulqjmtharkjpb3gh7emeezwb3_UniversalStudiosBeijingTicket%20(2).webp'),
        img('k2vx80tq8tycf04g2zku0sfxl5pc_shutterstock_2037974363.jpg'),
        img('wckwegqdeu0401r3uat0wxuqjk9p_shutterstock_2087531911.jpg'),
        img('f7mzhka10n1qxqbprrvh0pxsgnic_UniversalStudiosBeijingTicket%20(3).webp')
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
      `${DAY_MARK}Day 3 · Forbidden City and Temple of Heaven`,
      'Breakfast, then a guided day in the old centre',
      'Tiananmen Square and the Forbidden City courtyards',
      'The Temple of Heaven and its round halls',
      'A stop at the jade workshop on the way back',
      `${DAY_MARK}Day 4 · Beijing Zoo and the pandas`,
      'Breakfast, then across to the zoo',
      'The panda house and the giant pandas',
      'The old imperial menagerie grounds',
      'Afternoon free in the city',
      `${DAY_MARK}Day 5 · Universal Studios Beijing`,
      'Early breakfast, then out to Universal Studios',
      'Tickets included for the full day',
      'The Harry Potter area and the water park rides',
      'Back at the hotel in the evening',
      `${DAY_MARK}Day 6 · Departure from Beijing`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Holiday Inn Express Beijing Airport Zone, Beijing',
      description: '5 nights · Breakfast · Standard room · 3★ · Practical hotel near the airport expressway',
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
        description: 'The Mutianyu section of the wall, steep and far less crowded than Badaling, then the lake and long corridor of the Summer Palace.'
      },
      {
        name: 'Beijing city sightseeing tour',
        day: 3,
        optional: false,
        image: img('uzcrzvz5okpx6n4cpj66bbxe6ek4_Downpic.cc-71935295.jpg'),
        description: 'A guided day through Tiananmen Square, the courtyards of the Forbidden City and the round halls of the Temple of Heaven.'
      },
      {
        name: 'Beijing Zoo with the panda house',
        day: 4,
        optional: false,
        image: img('s12nn7g02u6anopsc500e2ohdkgi_shutterstock_408855481.jpg'),
        description: 'The old imperial menagerie grounds, with the panda house where the giant pandas are kept in their own enclosures.'
      },
      {
        name: 'Universal Studios Beijing',
        day: 5,
        optional: false,
        image: img('wt3hzz5toushzf6vnpc2boai2jta_UniversalStudiosBeijingTicket.webp'),
        description: 'A full day at Universal Studios Beijing with tickets included, home to the largest Harry Potter area built anywhere.'
      }
    ],
    program: {
      name: 'Beijing',
      description: 'Five nights in the capital: the wall at Mutianyu, the Summer Palace, Tiananmen Square and the Forbidden City, the panda house and Universal Studios.',
      image: img('76kulqjmtharkjpb3gh7emeezwb3_UniversalStudiosBeijingTicket%20(2).webp')
    }
  }
];

const detail = {
  slug: 'best-of-beijing-with-universal-studios',
  ctaHref: '/l/china/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Beijing with Universal Studios',
  alt: 'The Mutianyu section of the Great Wall along a green ridge',
  days: '6 days / 5 nights',
  stations: '1 stops',
  transport: 'Private airport transfers and guided day tours',
  tag: 'Family',
  tags: ['Family', 'Culture'],
  price: 44555,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Beijing', 'Mutianyu'],
  stats: { days: 6, cities: 1, hotels: 1, activities: 4, transfers: 4 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['4 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Mei',
    image: '/experts/riya.webp',
    role: 'China expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Five nights is the right length for Beijing. You get the wall, the imperial city, the pandas and Universal without rushing any of them.',
    quoteMore: 'Start the Forbidden City from the south gate at Tiananmen. Walking north with the crowd keeps you ahead of the big tour groups.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days in the Chinese capital with daily breakfast: the Great Wall at Mutianyu with the Summer Palace, a guided day through Tiananmen Square and the Forbidden City, the panda house at Beijing Zoo and a full day at Universal Studios.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights in Beijing with daily breakfast; private airport transfers; full day guided tour of the Great Wall at Mutianyu and the Summer Palace; guided Beijing city sightseeing tour; Beijing Zoo tickets with the panda house; Universal Studios Beijing tickets.',
  intro2: 'Not included: international flights; China visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Beijing (Arrival)', text: 'Arrival at Beijing Capital and transfer to your hotel\nCheck in and the rest of the day free\nOptional: an evening in the Sanlitun lanes\nOptional: Peking duck at a neighbourhood restaurant', hotel: 'Holiday Inn Express Beijing Airport Zone', highlights: ['Arrival at Beijing Capital and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: an evening in the Sanlitun lanes'] },
    { title: 'Day 2: Great Wall and the Summer Palace (B)', text: 'Early breakfast, then north to Mutianyu\nThe cable car and the walk along the wall\nOn to the Summer Palace in the afternoon\nKunming lake, the long corridor and the marble boat', hotel: 'Holiday Inn Express Beijing Airport Zone', highlights: ['Early breakfast, then north to Mutianyu', 'The cable car and the walk along the wall', 'On to the Summer Palace in the afternoon'] },
    { title: 'Day 3: Forbidden City and Temple of Heaven (B)', text: 'Breakfast, then a guided day in the old centre\nTiananmen Square and the Forbidden City courtyards\nThe Temple of Heaven and its round halls\nA stop at the jade workshop on the way back', hotel: 'Holiday Inn Express Beijing Airport Zone', highlights: ['Breakfast, then a guided day in the old centre', 'Tiananmen Square and the Forbidden City courtyards', 'The Temple of Heaven and its round halls'] },
    { title: 'Day 4: Beijing Zoo and the pandas (B)', text: 'Breakfast, then across to the zoo\nThe panda house and the giant pandas\nThe old imperial menagerie grounds\nAfternoon free in the city', hotel: 'Holiday Inn Express Beijing Airport Zone', highlights: ['Breakfast, then across to the zoo', 'The panda house and the giant pandas', 'The old imperial menagerie grounds'] },
    { title: 'Day 5: Universal Studios Beijing (B)', text: 'Early breakfast, then out to Universal Studios\nTickets included for the full day\nThe Harry Potter area and the water park rides\nBack at the hotel in the evening', hotel: 'Holiday Inn Express Beijing Airport Zone', highlights: ['Early breakfast, then out to Universal Studios', 'Tickets included for the full day', 'The Harry Potter area and the water park rides'] },
    { title: 'Day 6: Departure from Beijing (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; China visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'China', href: '/asien/china' },
  { label: detail.title }
];

export const bestOfBeijingWallAndUniversalBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfBeijingWallAndUniversalProduct = {
  slug: detail.slug,
  places: ['Beijing', 'Mutianyu'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 4,
  transfers: 4,
  meals: 5,
  price: detail.price,
  images: cardImages
};
