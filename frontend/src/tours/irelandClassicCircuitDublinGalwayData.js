// Classic Ireland: Dublin, Cork and Galway. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ewkt9z88zbavvk5w483x11ym15q8_shutterstock_1877663632.jpg'),
  img('0haqpexpcv42uh1pmchz56ojuwtj_shutterstock_2140777789.jpg'),
  img('wb5h4w7dg3jccd1ff7vo8d195xtw_shutterstock_2078633215.jpg'),
  img('udxlu803rq5izg27of36zzda1exw_shutterstock_531710473.jpg'),
  img('9d5j7s7yiln65k2wpqrkeha6z69b_shutterstock_1930581248.jpg'),
  img('p8foamktllxhkisxp1rz647spth9_shutterstock_717478675.jpg'),
  img('kkwr3ovkj2o52lctqdg1u3assygv_shutterstock_1297045075%20(1).jpg'),
  img('b6yuowiya4r012ks9utt5ey1zeqp_shutterstock_540433816.jpg'),
  img('7t2hpiz015an48eedbazmabndilq_shutterstock_99092945%20(1).jpg'),
  img('a6lds961q74iwol2u1qrqzmuac5g_shutterstock_1670900953.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('ewkt9z88zbavvk5w483x11ym15q8_shutterstock_1877663632.jpg'),
  img('0haqpexpcv42uh1pmchz56ojuwtj_shutterstock_2140777789.jpg'),
  img('wb5h4w7dg3jccd1ff7vo8d195xtw_shutterstock_2078633215.jpg'),
  img('udxlu803rq5izg27of36zzda1exw_shutterstock_531710473.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Dublin',
    dayLabel: 'Day 1 to 2',
    images: [
      img('ewkt9z88zbavvk5w483x11ym15q8_shutterstock_1877663632.jpg'),
      img('a6lds961q74iwol2u1qrqzmuac5g_shutterstock_1670900953.jpg'),
      img('9d5j7s7yiln65k2wpqrkeha6z69b_shutterstock_1930581248.jpg'),
      img('0haqpexpcv42uh1pmchz56ojuwtj_shutterstock_2140777789.jpg')
    ],
    dayImages: {
      1: [
        img('ewkt9z88zbavvk5w483x11ym15q8_shutterstock_1877663632.jpg'),
        img('a6lds961q74iwol2u1qrqzmuac5g_shutterstock_1670900953.jpg'),
        img('9d5j7s7yiln65k2wpqrkeha6z69b_shutterstock_1930581248.jpg'),
        img('0haqpexpcv42uh1pmchz56ojuwtj_shutterstock_2140777789.jpg')
      ],
      2: [
        img('ewkt9z88zbavvk5w483x11ym15q8_shutterstock_1877663632.jpg'),
        img('a6lds961q74iwol2u1qrqzmuac5g_shutterstock_1670900953.jpg'),
        img('9d5j7s7yiln65k2wpqrkeha6z69b_shutterstock_1930581248.jpg'),
        img('0haqpexpcv42uh1pmchz56ojuwtj_shutterstock_2140777789.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Dublin`,
      'Arrival at the airport and private transfer to your hotel',
      'Check in and the rest of the day at leisure',
      'Optional: an evening in Temple Bar',
      `${DAY_MARK}Day 2 · Dublin sightseeing`,
      'Breakfast, then a guided day in the capital',
      'Trinity College, St Patrick\'s and the Guinness Storehouse',
      'The evening free'
    ],
    accommodation: {
      name: 'Hotel named on confirmation, Dublin',
      description: '2 nights · Breakfast · Standard room · 3★ · City-centre hotel near Temple Bar',
      images: [
      img('k1txx23sluz4qv3tlss1rwug1wwp_shutterstock_1098315935.jpg'),
      img('udxlu803rq5izg27of36zzda1exw_shutterstock_531710473.jpg'),
      img('m3of452si5zl7vy3va8ab67n8aai_shutterstock_638585515.jpg'),
      img('wlb5zzphgnw95fxvdfa73aya80es_shutterstock_84517771.jpg'),
      img('cu5adgjabrunj7n86mrv2nfla9i3_shutterstock_1234337506.jpg'),
      img('a5bfr7tbphpat87il8osv01zhr8t_shutterstock_1242247285.jpg')
    ]
    },
    activities: [
      {
        name: 'Dublin city tour',
        day: 2,
        optional: false,
        image: img('ewkt9z88zbavvk5w483x11ym15q8_shutterstock_1877663632.jpg'),
        description: 'Trinity College and the Book of Kells, St Patrick\'s Cathedral, the Guinness Storehouse and the Georgian squares.'
      }
    ],
    program: {
      name: 'Dublin',
      description: 'Two nights in the capital with a day of guided sightseeing.',
      image: img('ewkt9z88zbavvk5w483x11ym15q8_shutterstock_1877663632.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Cork',
    dayLabel: 'Day 3',
    images: [
      img('p8foamktllxhkisxp1rz647spth9_shutterstock_717478675.jpg'),
      img('wb5h4w7dg3jccd1ff7vo8d195xtw_shutterstock_2078633215.jpg'),
      img('k1txx23sluz4qv3tlss1rwug1wwp_shutterstock_1098315935.jpg'),
      img('udxlu803rq5izg27of36zzda1exw_shutterstock_531710473.jpg')
    ],
    dayImages: {
      3: [
        img('9d5j7s7yiln65k2wpqrkeha6z69b_shutterstock_1930581248.jpg'),
        img('0haqpexpcv42uh1pmchz56ojuwtj_shutterstock_2140777789.jpg'),
        img('p8foamktllxhkisxp1rz647spth9_shutterstock_717478675.jpg'),
        img('wb5h4w7dg3jccd1ff7vo8d195xtw_shutterstock_2078633215.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Dublin to Cork`,
      'Breakfast and check out',
      'Powerscourt Gardens and Kilkenny Castle',
      'The Rock of Cashel, then on to Cork'
    ],
    accommodation: {
      name: 'Hotel named on confirmation, Cork',
      description: '1 night · Breakfast · Standard room · 3★ · Hotel in the city centre',
      images: [
      img('uj8mcznj0fltb6iavswch0cptv5o_shutterstock_431693263%20(1).jpg'),
      img('kkwr3ovkj2o52lctqdg1u3assygv_shutterstock_1297045075%20(1).jpg'),
      img('l2cgdparev5wo4pvpmo27ofcpz92_shutterstock_751236664%20(1).jpg'),
      img('b6yuowiya4r012ks9utt5ey1zeqp_shutterstock_540433816.jpg'),
      img('jkaq0ecgla6bfkk6gydy84gpijjh_shutterstock_141772114.jpg'),
      img('7t2hpiz015an48eedbazmabndilq_shutterstock_99092945%20(1).jpg')
    ]
    },
    activities: [
      {
        name: 'Powerscourt, Kilkenny and Cashel',
        day: 3,
        optional: false,
        image: img('9d5j7s7yiln65k2wpqrkeha6z69b_shutterstock_1930581248.jpg'),
        description: 'The gardens at Powerscourt, Kilkenny Castle and the medieval Rock of Cashel on the road south.'
      }
    ],
    program: {
      name: 'Cork',
      description: 'South through Powerscourt, Kilkenny and the Rock of Cashel to Cork.',
      image: img('p8foamktllxhkisxp1rz647spth9_shutterstock_717478675.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Limerick',
    dayLabel: 'Day 4',
    images: [
      img('m3of452si5zl7vy3va8ab67n8aai_shutterstock_638585515.jpg'),
      img('wlb5zzphgnw95fxvdfa73aya80es_shutterstock_84517771.jpg'),
      img('cu5adgjabrunj7n86mrv2nfla9i3_shutterstock_1234337506.jpg'),
      img('a5bfr7tbphpat87il8osv01zhr8t_shutterstock_1242247285.jpg')
    ],
    dayImages: {
      4: [
        img('9d5j7s7yiln65k2wpqrkeha6z69b_shutterstock_1930581248.jpg'),
        img('0haqpexpcv42uh1pmchz56ojuwtj_shutterstock_2140777789.jpg'),
        img('p8foamktllxhkisxp1rz647spth9_shutterstock_717478675.jpg'),
        img('wb5h4w7dg3jccd1ff7vo8d195xtw_shutterstock_2078633215.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Cork to Limerick`,
      'Breakfast and check out',
      'Kinsale harbour and the Killarney lakes',
      'Adare village and on to Limerick'
    ],
    accommodation: {
      name: 'Hotel named on confirmation, Limerick',
      description: '1 night · Breakfast · Standard room · 3★ · Hotel near the Shannon',
      images: [
      img('w4mxvj42f8j8wtz2zv5n75hf7tca_shutterstock_651793372.jpg'),
      img('a6lds961q74iwol2u1qrqzmuac5g_shutterstock_1670900953.jpg'),
      img('9d5j7s7yiln65k2wpqrkeha6z69b_shutterstock_1930581248.jpg'),
      img('0haqpexpcv42uh1pmchz56ojuwtj_shutterstock_2140777789.jpg'),
      img('p8foamktllxhkisxp1rz647spth9_shutterstock_717478675.jpg'),
      img('wb5h4w7dg3jccd1ff7vo8d195xtw_shutterstock_2078633215.jpg')
    ]
    },
    activities: [
      {
        name: 'Kinsale, Killarney and Adare',
        day: 4,
        optional: false,
        image: img('9d5j7s7yiln65k2wpqrkeha6z69b_shutterstock_1930581248.jpg'),
        description: 'The harbour town of Kinsale, the lakes of Killarney and the thatched village of Adare.'
      }
    ],
    program: {
      name: 'Limerick',
      description: 'Kinsale, Killarney and Adare on the way to Limerick.',
      image: img('m3of452si5zl7vy3va8ab67n8aai_shutterstock_638585515.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Galway',
    dayLabel: 'Day 5',
    images: [
      img('uj8mcznj0fltb6iavswch0cptv5o_shutterstock_431693263%20(1).jpg'),
      img('kkwr3ovkj2o52lctqdg1u3assygv_shutterstock_1297045075%20(1).jpg'),
      img('l2cgdparev5wo4pvpmo27ofcpz92_shutterstock_751236664%20(1).jpg'),
      img('b6yuowiya4r012ks9utt5ey1zeqp_shutterstock_540433816.jpg')
    ],
    dayImages: {
      5: [
        img('9d5j7s7yiln65k2wpqrkeha6z69b_shutterstock_1930581248.jpg'),
        img('0haqpexpcv42uh1pmchz56ojuwtj_shutterstock_2140777789.jpg'),
        img('p8foamktllxhkisxp1rz647spth9_shutterstock_717478675.jpg'),
        img('wb5h4w7dg3jccd1ff7vo8d195xtw_shutterstock_2078633215.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Limerick to Galway`,
      'Breakfast and check out',
      'The Cliffs of Moher and the Burren',
      'Arrival in Galway and a free evening'
    ],
    accommodation: {
      name: 'Hotel named on confirmation, Galway',
      description: '1 night · Breakfast · Standard room · 3★ · Hotel in the city centre',
      images: [
      img('ewkt9z88zbavvk5w483x11ym15q8_shutterstock_1877663632.jpg'),
      img('4nu0rdr0wti09890ltk4nx2qocla_1620197018_shutterstock_570685774.jpg.jpg'),
      img('8ndte5qsul47o3qjvhfkd0ax4hkg_1620197366_shutterstock_1712683192.jpg.jpg')
    ]
    },
    activities: [
      {
        name: 'Cliffs of Moher',
        day: 5,
        optional: false,
        image: img('9d5j7s7yiln65k2wpqrkeha6z69b_shutterstock_1930581248.jpg'),
        description: 'Eight kilometres of cliffs 200 metres above the Atlantic, then the limestone Burren to Galway.'
      }
    ],
    program: {
      name: 'Galway',
      description: 'The Cliffs of Moher and the Burren on the road to Galway.',
      image: img('uj8mcznj0fltb6iavswch0cptv5o_shutterstock_431693263%20(1).jpg')
    }
  },
  {
    letter: 'E',
    name: 'Dublin',
    dayLabel: 'Day 6 to 7',
    images: [
      img('ewkt9z88zbavvk5w483x11ym15q8_shutterstock_1877663632.jpg'),
      img('a6lds961q74iwol2u1qrqzmuac5g_shutterstock_1670900953.jpg'),
      img('9d5j7s7yiln65k2wpqrkeha6z69b_shutterstock_1930581248.jpg'),
      img('0haqpexpcv42uh1pmchz56ojuwtj_shutterstock_2140777789.jpg')
    ],
    dayImages: {
      6: [
        img('ewkt9z88zbavvk5w483x11ym15q8_shutterstock_1877663632.jpg'),
        img('a6lds961q74iwol2u1qrqzmuac5g_shutterstock_1670900953.jpg'),
        img('9d5j7s7yiln65k2wpqrkeha6z69b_shutterstock_1930581248.jpg'),
        img('0haqpexpcv42uh1pmchz56ojuwtj_shutterstock_2140777789.jpg')
      ],
      7: [
        img('ewkt9z88zbavvk5w483x11ym15q8_shutterstock_1877663632.jpg'),
        img('a6lds961q74iwol2u1qrqzmuac5g_shutterstock_1670900953.jpg'),
        img('9d5j7s7yiln65k2wpqrkeha6z69b_shutterstock_1930581248.jpg'),
        img('0haqpexpcv42uh1pmchz56ojuwtj_shutterstock_2140777789.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Galway to Dublin`,
      'Breakfast and check out',
      'Clonmacnoise monastery on the Shannon',
      'Back in Dublin for a last evening',
      `${DAY_MARK}Day 7 · Departure from Dublin`,
      'Breakfast at the hotel and check out',
      'Transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Hotel named on confirmation, Dublin',
      description: '1 night · Breakfast · Standard room · 3★ · City-centre hotel near Temple Bar',
      images: [
      img('a6lds961q74iwol2u1qrqzmuac5g_shutterstock_1670900953.jpg'),
      img('9d5j7s7yiln65k2wpqrkeha6z69b_shutterstock_1930581248.jpg'),
      img('0haqpexpcv42uh1pmchz56ojuwtj_shutterstock_2140777789.jpg'),
      img('p8foamktllxhkisxp1rz647spth9_shutterstock_717478675.jpg'),
      img('wb5h4w7dg3jccd1ff7vo8d195xtw_shutterstock_2078633215.jpg'),
      img('ewkt9z88zbavvk5w483x11ym15q8_shutterstock_1877663632.jpg')
    ]
    },
    activities: [

    ],
    program: {
      name: 'Dublin',
      description: 'Across the midlands via Clonmacnoise for a last night in Dublin.',
      image: img('ewkt9z88zbavvk5w483x11ym15q8_shutterstock_1877663632.jpg')
    }
  }
];

const detail = {
  slug: 'classic-ireland-dublin-cork-and-galway',
  ctaHref: '/l/ireland/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Classic Ireland: Dublin, Cork and Galway',
  alt: 'The Cliffs of Moher dropping into the Atlantic on the west coast of Ireland',
  days: '7 days / 6 nights',
  stations: '5 stops',
  transport: 'Airport transfers and a private vehicle with driver for the full circuit',
  tag: 'Culture',
  tags: ['Culture', 'Nature', 'Road trip'],
  price: 75999,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Dublin', 'Cork', 'Limerick', 'Galway', 'Dublin'],
  stats: { days: 7, cities: 4, hotels: 5, activities: 4, transfers: 7 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['7 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aoife',
    image: '/experts/riya.webp',
    role: 'Ireland expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Ireland is small enough to circle in a week and warm enough that you will want to stay longer in every pub you pass.',
    quoteMore: 'Pack layers, not an umbrella. The weather changes every hour on the west coast and the wind makes umbrellas useless on the cliffs.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A week round Ireland by road: two nights in Dublin, the Rock of Cashel and Kilkenny on the way to Cork, Killarney and Adare to Limerick, the Cliffs of Moher to Galway and back across the midlands.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: all transfers and rail or ferry journeys as listed; sightseeing and cruises as listed with tickets where stated; daily breakfast.',
  intro2: 'Not included: international flights; Irish visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are quoted as a class and named on confirmation.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Dublin (Arrival)', text: 'Arrival at the airport and private transfer to your hotel\nCheck in and the rest of the day at leisure\nOptional: an evening in Temple Bar', hotel: 'Hotel named on confirmation', highlights: ['Arrival at the airport and private transfer to your hotel', 'Check in and the rest of the day at leisure', 'Optional: an evening in Temple Bar'] },
    { title: 'Day 2: Dublin sightseeing (B)', text: 'Breakfast, then a guided day in the capital\nTrinity College, St Patrick\'s and the Guinness Storehouse\nThe evening free', hotel: 'Hotel named on confirmation', highlights: ['Breakfast, then a guided day in the capital', 'Trinity College, St Patrick\'s and the Guinness Storehouse', 'The evening free'] },
    { title: 'Day 3: Dublin to Cork (B)', text: 'Breakfast and check out\nPowerscourt Gardens and Kilkenny Castle\nThe Rock of Cashel, then on to Cork', hotel: 'Hotel named on confirmation', highlights: ['Breakfast and check out', 'Powerscourt Gardens and Kilkenny Castle', 'The Rock of Cashel, then on to Cork'] },
    { title: 'Day 4: Cork to Limerick (B)', text: 'Breakfast and check out\nKinsale harbour and the Killarney lakes\nAdare village and on to Limerick', hotel: 'Hotel named on confirmation', highlights: ['Breakfast and check out', 'Kinsale harbour and the Killarney lakes', 'Adare village and on to Limerick'] },
    { title: 'Day 5: Limerick to Galway (B)', text: 'Breakfast and check out\nThe Cliffs of Moher and the Burren\nArrival in Galway and a free evening', hotel: 'Hotel named on confirmation', highlights: ['Breakfast and check out', 'The Cliffs of Moher and the Burren', 'Arrival in Galway and a free evening'] },
    { title: 'Day 6: Galway to Dublin (B)', text: 'Breakfast and check out\nClonmacnoise monastery on the Shannon\nBack in Dublin for a last evening', hotel: 'Hotel named on confirmation', highlights: ['Breakfast and check out', 'Clonmacnoise monastery on the Shannon', 'Back in Dublin for a last evening'] },
    { title: 'Day 7: Departure from Dublin (B)', text: 'Breakfast at the hotel and check out\nTransfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Irish visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are quoted as a class and named on confirmation.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Europe', href: '/europe' },
  { label: 'Ireland', href: '/europe/ireland' },
  { label: detail.title }
];

export const irelandClassicCircuitDublinGalwayBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const irelandClassicCircuitDublinGalwayProduct = {
  slug: detail.slug,
  places: ['Dublin', 'Cork', 'Limerick', 'Galway'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 5,
  hotels: 5,
  cities: 4,
  activities: 4,
  transfers: 7,
  meals: 6,
  price: detail.price,
  images: cardImages
};
