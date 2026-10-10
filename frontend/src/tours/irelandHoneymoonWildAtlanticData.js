// Ireland Honeymoon: The Wild Atlantic Way. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg'),
  img('qt20ivwr4c43dwgke8nhfirybwgl_shutterstock_638585515.jpg'),
  img('naiexm97lo9itrtm72d1pmf1y20q_shutterstock_717478675.jpg'),
  img('1chj7w2szs7ixez8grasz3qfu95u_shutterstock_1602336076.jpg'),
  img('kswygcdg2707429y3xsdibo2f9sc_shutterstock_2034377051.jpg'),
  img('trrhfvsk81z0s57b3zzqwg0r0t8y_shutterstock_1525638521.jpg'),
  img('o27tv3bz2nk2cynxzkrixnm1ajko_shutterstock_617752049.jpg'),
  img('36ewvjvq02k4httmg2ms20h6df6l_shutterstock_659109607.jpg'),
  img('ftywwkfvjb5oq1gpheacafsgcct1_shutterstock_1123224029.jpg'),
  img('cbdfmsicjoh7rumcgzmfabmh2v8l_shutterstock_497190247.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg'),
  img('qt20ivwr4c43dwgke8nhfirybwgl_shutterstock_638585515.jpg'),
  img('naiexm97lo9itrtm72d1pmf1y20q_shutterstock_717478675.jpg'),
  img('1chj7w2szs7ixez8grasz3qfu95u_shutterstock_1602336076.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Galway',
    dayLabel: 'Day 1 to 2',
    images: [
      img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg'),
      img('o27tv3bz2nk2cynxzkrixnm1ajko_shutterstock_617752049.jpg'),
      img('qt20ivwr4c43dwgke8nhfirybwgl_shutterstock_638585515.jpg'),
      img('ftywwkfvjb5oq1gpheacafsgcct1_shutterstock_1123224029.jpg')
    ],
    dayImages: {
      1: [
        img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg'),
        img('o27tv3bz2nk2cynxzkrixnm1ajko_shutterstock_617752049.jpg'),
        img('qt20ivwr4c43dwgke8nhfirybwgl_shutterstock_638585515.jpg'),
        img('ftywwkfvjb5oq1gpheacafsgcct1_shutterstock_1123224029.jpg')
      ],
      2: [
        img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg'),
        img('o27tv3bz2nk2cynxzkrixnm1ajko_shutterstock_617752049.jpg'),
        img('qt20ivwr4c43dwgke8nhfirybwgl_shutterstock_638585515.jpg'),
        img('ftywwkfvjb5oq1gpheacafsgcct1_shutterstock_1123224029.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Galway`,
      'Arrival at the airport and private transfer to your hotel',
      'Check in and the rest of the day at leisure',
      'Optional: music in the pubs of the Latin Quarter',
      `${DAY_MARK}Day 2 · Connemara`,
      'Breakfast, then a day through Connemara',
      'Kylemore Abbey and the Sky Road',
      'Back to Galway for the night'
    ],
    accommodation: {
      name: 'Hotel named on confirmation, Galway',
      description: '2 nights · Breakfast · Standard room · 3★ · Hotel in the harbour city',
      images: [
      img('kswygcdg2707429y3xsdibo2f9sc_shutterstock_2034377051.jpg'),
      img('0vbuoosh2m39vw3vn05hf5fgiv26_shutterstock_1111600892.jpg'),
      img('trrhfvsk81z0s57b3zzqwg0r0t8y_shutterstock_1525638521.jpg'),
      img('n5qydabii6iukva0oirj8hyumymb_shutterstock_2016082586.jpg'),
      img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg'),
      img('o27tv3bz2nk2cynxzkrixnm1ajko_shutterstock_617752049.jpg')
    ]
    },
    activities: [
      {
        name: 'Connemara and Kylemore Abbey',
        day: 2,
        optional: false,
        image: img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg'),
        description: 'The Twelve Bens, Kylemore Abbey and the Sky Road above Clifden.'
      }
    ],
    program: {
      name: 'Galway',
      description: 'Two nights in Galway with a day through Connemara.',
      image: img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Clare',
    dayLabel: 'Day 3',
    images: [
      img('naiexm97lo9itrtm72d1pmf1y20q_shutterstock_717478675.jpg'),
      img('cbdfmsicjoh7rumcgzmfabmh2v8l_shutterstock_497190247.jpg'),
      img('1chj7w2szs7ixez8grasz3qfu95u_shutterstock_1602336076.jpg'),
      img('36ewvjvq02k4httmg2ms20h6df6l_shutterstock_659109607.jpg')
    ],
    dayImages: {
      3: [
        img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg'),
        img('o27tv3bz2nk2cynxzkrixnm1ajko_shutterstock_617752049.jpg'),
        img('qt20ivwr4c43dwgke8nhfirybwgl_shutterstock_638585515.jpg'),
        img('ftywwkfvjb5oq1gpheacafsgcct1_shutterstock_1123224029.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · To County Clare`,
      'Breakfast and check out',
      'The Burren and the Cliffs of Moher',
      'A country hotel for the night'
    ],
    accommodation: {
      name: 'Hotel named on confirmation, Clare',
      description: '1 night · Breakfast · Standard room · 3★ · Country hotel in County Clare',
      images: [
      img('qt20ivwr4c43dwgke8nhfirybwgl_shutterstock_638585515.jpg'),
      img('ftywwkfvjb5oq1gpheacafsgcct1_shutterstock_1123224029.jpg'),
      img('naiexm97lo9itrtm72d1pmf1y20q_shutterstock_717478675.jpg'),
      img('cbdfmsicjoh7rumcgzmfabmh2v8l_shutterstock_497190247.jpg'),
      img('1chj7w2szs7ixez8grasz3qfu95u_shutterstock_1602336076.jpg'),
      img('36ewvjvq02k4httmg2ms20h6df6l_shutterstock_659109607.jpg')
    ]
    },
    activities: [
      {
        name: 'Cliffs of Moher',
        day: 3,
        optional: false,
        image: img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg'),
        description: 'The great cliffs above the Atlantic and the karst landscape of the Burren.'
      }
    ],
    program: {
      name: 'Clare',
      description: 'The Burren and the Cliffs of Moher.',
      image: img('naiexm97lo9itrtm72d1pmf1y20q_shutterstock_717478675.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Killarney',
    dayLabel: 'Day 4 to 5',
    images: [
      img('kswygcdg2707429y3xsdibo2f9sc_shutterstock_2034377051.jpg'),
      img('0vbuoosh2m39vw3vn05hf5fgiv26_shutterstock_1111600892.jpg'),
      img('trrhfvsk81z0s57b3zzqwg0r0t8y_shutterstock_1525638521.jpg'),
      img('n5qydabii6iukva0oirj8hyumymb_shutterstock_2016082586.jpg')
    ],
    dayImages: {
      4: [
        img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg'),
        img('o27tv3bz2nk2cynxzkrixnm1ajko_shutterstock_617752049.jpg'),
        img('qt20ivwr4c43dwgke8nhfirybwgl_shutterstock_638585515.jpg'),
        img('ftywwkfvjb5oq1gpheacafsgcct1_shutterstock_1123224029.jpg')
      ],
      5: [
        img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg'),
        img('o27tv3bz2nk2cynxzkrixnm1ajko_shutterstock_617752049.jpg'),
        img('qt20ivwr4c43dwgke8nhfirybwgl_shutterstock_638585515.jpg'),
        img('ftywwkfvjb5oq1gpheacafsgcct1_shutterstock_1123224029.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Clare to Kerry`,
      'Breakfast and check out',
      'The Shannon ferry and the Dingle coast',
      'Arrival in Killarney',
      `${DAY_MARK}Day 5 · Ring of Kerry`,
      'Breakfast, then the full Ring of Kerry',
      'Killarney National Park and the Skellig views'
    ],
    accommodation: {
      name: 'Hotel named on confirmation, Kerry',
      description: '2 nights · Breakfast · Standard room · 3★ · Hotel in Killarney',
      images: [
      img('8ndte5qsul47o3qjvhfkd0ax4hkg_1620197366_shutterstock_1712683192.jpg.jpg'),
      img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg'),
      img('qt20ivwr4c43dwgke8nhfirybwgl_shutterstock_638585515.jpg')
    ]
    },
    activities: [
      {
        name: 'Ring of Kerry',
        day: 5,
        optional: false,
        image: img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg'),
        description: 'The 179-kilometre coastal circuit past Killarney National Park, Sneem and the Skellig views.'
      }
    ],
    program: {
      name: 'Killarney',
      description: 'Two nights in Kerry for the lakes and the Ring of Kerry.',
      image: img('kswygcdg2707429y3xsdibo2f9sc_shutterstock_2034377051.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Cork',
    dayLabel: 'Day 6',
    images: [
      img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg'),
      img('o27tv3bz2nk2cynxzkrixnm1ajko_shutterstock_617752049.jpg'),
      img('qt20ivwr4c43dwgke8nhfirybwgl_shutterstock_638585515.jpg'),
      img('ftywwkfvjb5oq1gpheacafsgcct1_shutterstock_1123224029.jpg')
    ],
    dayImages: {
      6: [
        img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg'),
        img('o27tv3bz2nk2cynxzkrixnm1ajko_shutterstock_617752049.jpg'),
        img('qt20ivwr4c43dwgke8nhfirybwgl_shutterstock_638585515.jpg'),
        img('ftywwkfvjb5oq1gpheacafsgcct1_shutterstock_1123224029.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Romantic Cork`,
      'Breakfast and check out',
      'Kinsale harbour and Blarney Castle',
      'Dinner in Cork'
    ],
    accommodation: {
      name: 'Hotel named on confirmation, Cork',
      description: '1 night · Breakfast · Standard room · 3★ · Hotel in the city centre',
      images: [
      img('o27tv3bz2nk2cynxzkrixnm1ajko_shutterstock_617752049.jpg'),
      img('qt20ivwr4c43dwgke8nhfirybwgl_shutterstock_638585515.jpg'),
      img('ftywwkfvjb5oq1gpheacafsgcct1_shutterstock_1123224029.jpg'),
      img('naiexm97lo9itrtm72d1pmf1y20q_shutterstock_717478675.jpg'),
      img('cbdfmsicjoh7rumcgzmfabmh2v8l_shutterstock_497190247.jpg'),
      img('1chj7w2szs7ixez8grasz3qfu95u_shutterstock_1602336076.jpg')
    ]
    },
    activities: [
      {
        name: 'Kinsale and Blarney',
        day: 6,
        optional: false,
        image: img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg'),
        description: 'The harbour town of Kinsale and the stone at Blarney Castle.'
      }
    ],
    program: {
      name: 'Cork',
      description: 'Kinsale and Cork for a romantic evening.',
      image: img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Dromoland',
    dayLabel: 'Day 7',
    images: [
      img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg'),
      img('o27tv3bz2nk2cynxzkrixnm1ajko_shutterstock_617752049.jpg'),
      img('qt20ivwr4c43dwgke8nhfirybwgl_shutterstock_638585515.jpg'),
      img('ftywwkfvjb5oq1gpheacafsgcct1_shutterstock_1123224029.jpg')
    ],
    dayImages: {
      7: [
        img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg'),
        img('o27tv3bz2nk2cynxzkrixnm1ajko_shutterstock_617752049.jpg'),
        img('qt20ivwr4c43dwgke8nhfirybwgl_shutterstock_638585515.jpg'),
        img('ftywwkfvjb5oq1gpheacafsgcct1_shutterstock_1123224029.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Dromoland Castle and departure`,
      'Breakfast and check out',
      'A visit to Dromoland Castle',
      'Transfer to Shannon airport for your flight home'
    ],
    accommodation: {
      name: 'Dromoland Castle, Dromoland',
      description: '0 nights · Breakfast · Standard room · 3★ · Castle hotel near Shannon airport',
      images: [
      img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg'),
      img('o27tv3bz2nk2cynxzkrixnm1ajko_shutterstock_617752049.jpg'),
      img('qt20ivwr4c43dwgke8nhfirybwgl_shutterstock_638585515.jpg'),
      img('ftywwkfvjb5oq1gpheacafsgcct1_shutterstock_1123224029.jpg'),
      img('naiexm97lo9itrtm72d1pmf1y20q_shutterstock_717478675.jpg'),
      img('cbdfmsicjoh7rumcgzmfabmh2v8l_shutterstock_497190247.jpg')
    ]
    },
    activities: [

    ],
    program: {
      name: 'Dromoland',
      description: 'A final morning at Dromoland Castle before your flight from Shannon.',
      image: img('twrkqehpaaoqctmojjajd4g0au6z_shutterstock_1790952959.jpg')
    }
  }
];

const detail = {
  slug: 'ireland-honeymoon-wild-atlantic-way',
  ctaHref: '/l/ireland/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Ireland Honeymoon: The Wild Atlantic Way',
  alt: 'A couple on the shore of a Connemara lake with the Twelve Bens behind',
  days: '7 days / 6 nights',
  stations: '5 stops',
  transport: 'Airport transfers and a private vehicle with driver along the west coast',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Nature', 'Road trip'],
  price: 82649,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Galway', 'Connemara', 'Clare', 'Kerry', 'Cork', 'Dromoland'],
  stats: { days: 7, cities: 5, hotels: 5, activities: 4, transfers: 7 },
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
  short: 'A week for two along Ireland\'s west coast: Galway and Connemara, the Cliffs of Moher, two nights in Killarney for the Ring of Kerry, Kinsale and Cork, and a castle finale at Dromoland.',
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
    { title: 'Day 1: Arrival in Galway (Arrival)', text: 'Arrival at the airport and private transfer to your hotel\nCheck in and the rest of the day at leisure\nOptional: music in the pubs of the Latin Quarter', hotel: 'Hotel named on confirmation', highlights: ['Arrival at the airport and private transfer to your hotel', 'Check in and the rest of the day at leisure', 'Optional: music in the pubs of the Latin Quarter'] },
    { title: 'Day 2: Connemara (B)', text: 'Breakfast, then a day through Connemara\nKylemore Abbey and the Sky Road\nBack to Galway for the night', hotel: 'Hotel named on confirmation', highlights: ['Breakfast, then a day through Connemara', 'Kylemore Abbey and the Sky Road', 'Back to Galway for the night'] },
    { title: 'Day 3: To County Clare (B)', text: 'Breakfast and check out\nThe Burren and the Cliffs of Moher\nA country hotel for the night', hotel: 'Hotel named on confirmation', highlights: ['Breakfast and check out', 'The Burren and the Cliffs of Moher', 'A country hotel for the night'] },
    { title: 'Day 4: Clare to Kerry (B)', text: 'Breakfast and check out\nThe Shannon ferry and the Dingle coast\nArrival in Killarney', hotel: 'Hotel named on confirmation', highlights: ['Breakfast and check out', 'The Shannon ferry and the Dingle coast', 'Arrival in Killarney'] },
    { title: 'Day 5: Ring of Kerry (B)', text: 'Breakfast, then the full Ring of Kerry\nKillarney National Park and the Skellig views', hotel: 'Hotel named on confirmation', highlights: ['Breakfast, then the full Ring of Kerry', 'Killarney National Park and the Skellig views'] },
    { title: 'Day 6: Romantic Cork (B)', text: 'Breakfast and check out\nKinsale harbour and Blarney Castle\nDinner in Cork', hotel: 'Hotel named on confirmation', highlights: ['Breakfast and check out', 'Kinsale harbour and Blarney Castle', 'Dinner in Cork'] },
    { title: 'Day 7: Dromoland Castle and departure (B)', text: 'Breakfast and check out\nA visit to Dromoland Castle\nTransfer to Shannon airport for your flight home', hotel: 'Departure', highlights: ['Breakfast and check out', 'A visit to Dromoland Castle', 'Transfer to Shannon airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Irish visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are quoted as a class and named on confirmation.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Europe', href: '/europe' },
  { label: 'Ireland', href: '/europe/ireland' },
  { label: detail.title }
];

export const irelandHoneymoonWildAtlanticBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const irelandHoneymoonWildAtlanticProduct = {
  slug: detail.slug,
  places: ['Galway', 'Connemara', 'Clare', 'Kerry', 'Cork', 'Dromoland'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 4,
  transfers: 7,
  meals: 6,
  price: detail.price,
  images: cardImages
};
