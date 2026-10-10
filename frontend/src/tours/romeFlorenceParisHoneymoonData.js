// Rome, Florence and Paris Honeymoon. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('as9n3wymhizlhwz3t9z3s9waur6b_shutterstock_1656063637.jpg'),
  img('v4jveefa7yh97crwtdtww6v5lnfm_shutterstock_2345981205.jpg'),
  img('7ilxnqq6hu40qa37mum986ifakhl_shutterstock_662979433.jpg'),
  img('b530x4w1tyu2lbdaog1e931ckne0_shutterstock_2360655211.jpg'),
  img('yihjb3btwbvmxls92vf5xc481f1a_shutterstock_2233718341.jpg'),
  img('82ldbs1rvq2fsu8blwnsmb12c2wi_pexels-pixabay-2363.jpg'),
  img('vtw4fhf72oymnmah1mno7ccgnmtv_shutterstock_788995654.jpg'),
  img('t1njyh39k63dqqauf6mgz0ipqen9_shutterstock_145023565.jpg'),
  img('w1dwfnb8bwiu8yldd4r0x1eh8ass_paris%208.png'),
  img('krzy8lbrlz0fh9peaed4r8csar1f_shutterstock_1439825942.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('as9n3wymhizlhwz3t9z3s9waur6b_shutterstock_1656063637.jpg'),
  img('v4jveefa7yh97crwtdtww6v5lnfm_shutterstock_2345981205.jpg'),
  img('7ilxnqq6hu40qa37mum986ifakhl_shutterstock_662979433.jpg'),
  img('b530x4w1tyu2lbdaog1e931ckne0_shutterstock_2360655211.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Rome',
    dayLabel: 'Day 1 to 2',
    images: [
      img('as9n3wymhizlhwz3t9z3s9waur6b_shutterstock_1656063637.jpg'),
      img('e0j8aq86ko1r63ejgi2al3i8ptvc_shutterstock_2248023259.jpg'),
      img('xbmme517sltp4i4ivp79vq1avfbm_shutterstock_1218983827-min.jpg'),
      img('krzy8lbrlz0fh9peaed4r8csar1f_shutterstock_1439825942.jpg')
    ],
    dayImages: {
      1: [
        img('as9n3wymhizlhwz3t9z3s9waur6b_shutterstock_1656063637.jpg'),
        img('e0j8aq86ko1r63ejgi2al3i8ptvc_shutterstock_2248023259.jpg'),
        img('xbmme517sltp4i4ivp79vq1avfbm_shutterstock_1218983827-min.jpg'),
        img('krzy8lbrlz0fh9peaed4r8csar1f_shutterstock_1439825942.jpg')
      ],
      2: [
        img('as9n3wymhizlhwz3t9z3s9waur6b_shutterstock_1656063637.jpg'),
        img('e0j8aq86ko1r63ejgi2al3i8ptvc_shutterstock_2248023259.jpg'),
        img('xbmme517sltp4i4ivp79vq1avfbm_shutterstock_1218983827-min.jpg'),
        img('krzy8lbrlz0fh9peaed4r8csar1f_shutterstock_1439825942.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Rome`,
      'Arrival at Fiumicino and transfer to your hotel',
      'Check in and freshen up before heading out',
      'A 24 hour open top bus ticket for the city',
      'The Colosseum, the Forum and Piazza Venezia',
      `${DAY_MARK}Day 2 · The Vatican Museums`,
      'Breakfast, then across the river to the Vatican',
      'The papal collections and the long gallery of maps',
      'The Sistine Chapel under Michelangelo\'s ceiling',
      'The evening free for dinner in Trastevere'
    ],
    accommodation: {
      name: 'Rome boutique hotel, Rome',
      description: '2 nights · Breakfast · Standard room · 3★ · Comfortable hotel within reach of the centro storico',
      images: [
        img('whq2cgywtbii6ouaahz7r1g7fxjm_italy7-min.jpg'),
        img('spxcgeha4hbdaehmre90z99uxoak_italy5-min.jpg'),
        img('wvotnq56t4lle38jwo0vzkt7vmk1_paris%201-min.jpg'),
        img('ex055x8wcvu5twkoyotjqt8t4alf_france-min.jpg'),
        img('soqmg6iulsl57nragf3vrxw7adhi_Gondola%20ride-min.jpg'),
        img('c84t7x66wwalle6v9sz7lsqjzhhk_Florence-min.jpg')
      ]
    },
    activities: [
      {
        name: 'Rome hop on hop off bus tour',
        day: 1,
        optional: false,
        image: img('as9n3wymhizlhwz3t9z3s9waur6b_shutterstock_1656063637.jpg'),
        description: 'A 24 hour open top ticket looping the Colosseum, the Forum and Piazza Venezia, so you hop off wherever you please.'
      },
      {
        name: 'Vatican Museums',
        day: 2,
        optional: false,
        image: img('e0j8aq86ko1r63ejgi2al3i8ptvc_shutterstock_2248023259.jpg'),
        description: 'The papal collections and the long gallery of maps, ending in the Sistine Chapel under Michelangelo\'s ceiling.'
      }
    ],
    program: {
      name: 'Rome',
      description: 'Two nights in the Eternal City, with an open top bus loop and a morning in the Vatican Museums.',
      image: img('as9n3wymhizlhwz3t9z3s9waur6b_shutterstock_1656063637.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Florence',
    subtitle: 'Florence → Pisa and Tuscany',
    dayLabel: 'Day 3 to 4',
    images: [
      img('kezo85b5mgu198rtt43u1pfvb26p_shutterstock_2137654721.jpg'),
      img('v4jveefa7yh97crwtdtww6v5lnfm_shutterstock_2345981205.jpg'),
      img('3kkg3jn5ihqxs4s32xreta692f5x_shutterstock_1456815590.jpg'),
      img('t1njyh39k63dqqauf6mgz0ipqen9_shutterstock_145023565.jpg')
    ],
    dayImages: {
      3: [
        img('kezo85b5mgu198rtt43u1pfvb26p_shutterstock_2137654721.jpg'),
        img('v4jveefa7yh97crwtdtww6v5lnfm_shutterstock_2345981205.jpg'),
        img('3kkg3jn5ihqxs4s32xreta692f5x_shutterstock_1456815590.jpg'),
        img('t1njyh39k63dqqauf6mgz0ipqen9_shutterstock_145023565.jpg')
      ],
      4: [
        img('kezo85b5mgu198rtt43u1pfvb26p_shutterstock_2137654721.jpg'),
        img('v4jveefa7yh97crwtdtww6v5lnfm_shutterstock_2345981205.jpg'),
        img('3kkg3jn5ihqxs4s32xreta692f5x_shutterstock_1456815590.jpg'),
        img('t1njyh39k63dqqauf6mgz0ipqen9_shutterstock_145023565.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · On to Florence`,
      'Breakfast and check out of your Rome hotel',
      'Station transfer and the fast train north to Florence',
      'Check in within walking distance of the Duomo',
      'An open top loop up to the Piazzale Michelangelo',
      `${DAY_MARK}Day 4 · The Leaning Tower of Pisa`,
      'Breakfast, then west across the Tuscan countryside',
      'Vineyards and cypress ridges on the way to Pisa',
      'The leaning campanile on the Campo dei Miracoli',
      'The Romanesque cathedral before the run back'
    ],
    accommodation: {
      name: 'Florence city hotel, Florence',
      description: '2 nights · Breakfast · Standard room · 3★ · Central hotel within walking distance of the Duomo',
      images: [
        img('iottd4gr0f6k1qy90gzfhgvm3a3q_Pisa-min.jpg'),
        img('828uy4q8zlpqadt72zbei6a6x7ib_italy8-min.jpg'),
        img('r0ntcdpgltvvbragdwj921qynz6f_Eiffel%20tower-min.jpg'),
        img('l4vjct8p627v36l22e8pj3hdmpyz_paris%203-min.jpg'),
        img('kuovkn0mfz4b90xou9eizuhhp6w0_italy%202-min.jpg'),
        img('iift2hsosk2a5q0rsqmrwdpb53x3_pisa%202-min.jpg')
      ]
    },
    activities: [
      {
        name: 'Florence hop on hop off bus tour',
        day: 3,
        optional: false,
        image: img('kezo85b5mgu198rtt43u1pfvb26p_shutterstock_2137654721.jpg'),
        description: 'An open top loop of the Renaissance city, past the Duomo, the Ponte Vecchio and up to the Piazzale Michelangelo.'
      },
      {
        name: 'Leaning Tower of Pisa guided tour',
        day: 4,
        optional: false,
        image: img('v4jveefa7yh97crwtdtww6v5lnfm_shutterstock_2345981205.jpg'),
        description: 'A guided day across the Tuscan countryside to the Campo dei Miracoli, the leaning campanile and the Romanesque cathedral.'
      }
    ],
    program: {
      name: 'Florence',
      description: 'Two nights in Tuscany, with an open top loop of the Renaissance city and a day out at the Leaning Tower of Pisa.',
      image: img('kezo85b5mgu198rtt43u1pfvb26p_shutterstock_2137654721.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Paris',
    dayLabel: 'Day 5 to 7',
    images: [
      img('5zrbpf5moybkzsdm8hanptc529gr_shutterstock_645464011.jpg'),
      img('ljguj1uubhgdctkpq61zhcivvm88_shutterstock_2358990187.jpg'),
      img('7ilxnqq6hu40qa37mum986ifakhl_shutterstock_662979433.jpg'),
      img('y6r06603xrpbzjjxc9qqowbw29dl_shutterstock_1360097162.jpg')
    ],
    dayImages: {
      5: [
        img('5zrbpf5moybkzsdm8hanptc529gr_shutterstock_645464011.jpg'),
        img('ljguj1uubhgdctkpq61zhcivvm88_shutterstock_2358990187.jpg'),
        img('7ilxnqq6hu40qa37mum986ifakhl_shutterstock_662979433.jpg'),
        img('y6r06603xrpbzjjxc9qqowbw29dl_shutterstock_1360097162.jpg')
      ],
      6: [
        img('5zrbpf5moybkzsdm8hanptc529gr_shutterstock_645464011.jpg'),
        img('ljguj1uubhgdctkpq61zhcivvm88_shutterstock_2358990187.jpg'),
        img('7ilxnqq6hu40qa37mum986ifakhl_shutterstock_662979433.jpg'),
        img('y6r06603xrpbzjjxc9qqowbw29dl_shutterstock_1360097162.jpg')
      ],
      7: [
        img('5zrbpf5moybkzsdm8hanptc529gr_shutterstock_645464011.jpg'),
        img('ljguj1uubhgdctkpq61zhcivvm88_shutterstock_2358990187.jpg'),
        img('7ilxnqq6hu40qa37mum986ifakhl_shutterstock_662979433.jpg'),
        img('y6r06603xrpbzjjxc9qqowbw29dl_shutterstock_1360097162.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · To Paris, the Eiffel Tower and the Seine`,
      'Breakfast and check out for the journey to France',
      'Station transfer and the train on to Paris',
      'Check in, then out to the Eiffel Tower',
      'An hour on the Seine past Notre Dame',
      `${DAY_MARK}Day 6 · A day at Disneyland Paris`,
      'Breakfast, then east to Disneyland Paris',
      'A full day in the castle park and the studios',
      'Shops and restaurants along Disney Village',
      'Back at the hotel in the evening',
      `${DAY_MARK}Day 7 · Departure from Paris`,
      'Breakfast at the hotel and check out',
      'Private transfer to Charles de Gaulle for your flight home'
    ],
    accommodation: {
      name: 'Paris city hotel, Paris',
      description: '2 nights · Breakfast · Standard room · 3★ · Well placed hotel on the Metro within reach of the Eiffel Tower',
      images: [
        img('j1z2xh91jhro3st6bsnfnyc7v4zy_Rome-min.jpg'),
        img('iqt56wlag87sr4im4yfw0oav11t3_Vatican%20museum%202-min.jpg'),
        img('bfktnkm6cd3iicf8tar8kke3nrvz_Vatican%20museum-min.jpg'),
        img('3k2lfajzh6pwnxqt5i3cjeex59wf_Vatican%20museums-min.jpg'),
        img('v707sykbdyi07y74knm9j0f4u4hr_Venice-min.jpg'),
        img('5lhh3kvb1k09mzxpgruxv7ugepvk_Rome%203-min.jpg')
      ]
    },
    activities: [
      {
        name: 'Eiffel Tower and a Seine river cruise',
        day: 5,
        optional: false,
        image: img('5zrbpf5moybkzsdm8hanptc529gr_shutterstock_645464011.jpg'),
        description: 'Up the tower for the city from the air, then an hour on the Seine past the Louvre, the Musee d\'Orsay and Notre Dame.'
      },
      {
        name: 'Disneyland Paris',
        day: 6,
        optional: false,
        image: img('ljguj1uubhgdctkpq61zhcivvm88_shutterstock_2358990187.jpg'),
        description: 'A full day at Disneyland Paris, forty minutes east of the city, with both the castle park and the studios to choose from.'
      }
    ],
    program: {
      name: 'Paris',
      description: 'Two nights to finish, with the Eiffel Tower, a cruise on the Seine and a full day at Disneyland.',
      image: img('5zrbpf5moybkzsdm8hanptc529gr_shutterstock_645464011.jpg')
    }
  }
];

const detail = {
  slug: 'rome-florence-and-paris-honeymoon',
  ctaHref: '/l/europe/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Rome, Florence and Paris Honeymoon',
  alt: 'The dome of Florence Cathedral above the Tuscan rooftops',
  days: '7 days / 6 nights',
  stations: '3 stops',
  transport: 'Rail between cities, private transfers and guided sightseeing',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Multi-country'],
  price: 110409,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Rome', 'Florence', 'Pisa', 'Paris'],
  stats: { days: 7, cities: 3, hotels: 3, activities: 6, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['6 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Sharon',
    image: '/experts/sharon.webp',
    role: 'Europe expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Rome, Florence and Paris in six nights, with Pisa and Disneyland folded in. It is the classic first honeymoon in Europe.',
    quoteMore: 'Book the Vatican for a Tuesday or Thursday morning. Mondays and weekends are the worst and the Sistine Chapel becomes shoulder to shoulder.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days across Italy and France: two nights in Rome with an open top bus and the Vatican Museums, two in Florence with a day out at the Leaning Tower of Pisa, then Paris for the Eiffel Tower, a Seine cruise and Disneyland.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 2 nights in Rome, 2 nights in Florence and 2 nights in Paris with breakfast; private airport transfers; rail between the cities; a 24 hour Rome hop on hop off bus ticket; Vatican Museums entry; a Florence hop on hop off bus ticket; a guided Leaning Tower of Pisa day trip; the Eiffel Tower with a Seine river cruise; a full day at Disneyland Paris.',
  intro2: 'Not included: international flights; Schengen visa fees; lunches and dinners; travel insurance; personal expenses. Hotels on this itinerary are named on confirmation: the operator quotes a three star standard rather than fixed properties.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Rome (Arrival)', text: 'Arrival at Fiumicino and transfer to your hotel\nCheck in and freshen up before heading out\nA 24 hour open top bus ticket for the city\nThe Colosseum, the Forum and Piazza Venezia', hotel: 'Rome boutique hotel', highlights: ['Arrival at Fiumicino and transfer to your hotel', 'Check in and freshen up before heading out', 'A 24 hour open top bus ticket for the city'] },
    { title: 'Day 2: The Vatican Museums (B)', text: 'Breakfast, then across the river to the Vatican\nThe papal collections and the long gallery of maps\nThe Sistine Chapel under Michelangelo\'s ceiling\nThe evening free for dinner in Trastevere', hotel: 'Rome boutique hotel', highlights: ['Breakfast, then across the river to the Vatican', 'The papal collections and the long gallery of maps', 'The Sistine Chapel under Michelangelo\'s ceiling'] },
    { title: 'Day 3: On to Florence (B)', text: 'Breakfast and check out of your Rome hotel\nStation transfer and the fast train north to Florence\nCheck in within walking distance of the Duomo\nAn open top loop up to the Piazzale Michelangelo', hotel: 'Florence city hotel', highlights: ['Breakfast and check out of your Rome hotel', 'Station transfer and the fast train north to Florence', 'Check in within walking distance of the Duomo'] },
    { title: 'Day 4: The Leaning Tower of Pisa (B)', text: 'Breakfast, then west across the Tuscan countryside\nVineyards and cypress ridges on the way to Pisa\nThe leaning campanile on the Campo dei Miracoli\nThe Romanesque cathedral before the run back', hotel: 'Florence city hotel', highlights: ['Breakfast, then west across the Tuscan countryside', 'Vineyards and cypress ridges on the way to Pisa', 'The leaning campanile on the Campo dei Miracoli'] },
    { title: 'Day 5: To Paris, the Eiffel Tower and the Seine (B)', text: 'Breakfast and check out for the journey to France\nStation transfer and the train on to Paris\nCheck in, then out to the Eiffel Tower\nAn hour on the Seine past Notre Dame', hotel: 'Paris city hotel', highlights: ['Breakfast and check out for the journey to France', 'Station transfer and the train on to Paris', 'Check in, then out to the Eiffel Tower'] },
    { title: 'Day 6: A day at Disneyland Paris (B)', text: 'Breakfast, then east to Disneyland Paris\nA full day in the castle park and the studios\nShops and restaurants along Disney Village\nBack at the hotel in the evening', hotel: 'Paris city hotel', highlights: ['Breakfast, then east to Disneyland Paris', 'A full day in the castle park and the studios', 'Shops and restaurants along Disney Village'] },
    { title: 'Day 7: Departure from Paris (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Charles de Gaulle for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Charles de Gaulle for your flight home'] }
  ],
  outro: 'Not included: international flights; Schengen visa fees; lunches and dinners; travel insurance; personal expenses. Hotels on this itinerary are named on confirmation: the operator quotes a three star standard rather than fixed properties.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Europe', href: '/europe' },
  { label: detail.title }
];

export const romeFlorenceParisHoneymoonBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const romeFlorenceParisHoneymoonProduct = {
  slug: detail.slug,
  places: ['Rome', 'Florence', 'Pisa', 'Paris'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 6,
  transfers: 6,
  meals: 6,
  price: detail.price,
  images: cardImages
};
