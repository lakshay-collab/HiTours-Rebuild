// Spectacular Greece: Athens, Olympia and Delphi. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg'),
  img('7ki5kv6bdycjhml8lwmho1t0g3ju_shutterstock_1983127760.jpg'),
  img('ux33beh5axfdqqot0f81jlpl3c6f_shutterstock_1058519432.jpg'),
  img('b40yksgqm1wsa7v8sykw391nsgfd_shutterstock_1614715330.jpg'),
  img('h85co8qgkhleoa9jalnjgo4p008u_shutterstock_2055397688.jpg'),
  img('h2q34gderpe8dix2l4f3ol3z6591_shutterstock_254359237.jpg'),
  img('e8cu79ko4jdu2len8qt9mghtrtbn_shutterstock_1670430790.jpg'),
  img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg'),
  img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
  img('euzkc5ghn9obhy2jg4r6mf7o8u5z_shutterstock_694164988.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Athens',
    dayLabel: 'Day 1 to 2',
    images: [
      img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg'),
      img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
      img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
      img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg')
    ],
    dayImages: {
      1: [
        img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg'),
        img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
        img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
        img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg')
      ],
      2: [
        img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg'),
        img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
        img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
        img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Athens`,
      'Arrival at Athens International and transfer to your hotel',
      'Check in and the rest of the day at leisure',
      'Optional: a first walk through Monastiraki',
      'Optional: dinner with the rock floodlit above you',
      `${DAY_MARK}Day 2 · The Acropolis and its museum`,
      'Breakfast, then up to the rock with your guide',
      'The Parthenon, the Erechtheion and the Propylaea',
      'Down to the Acropolis Museum and its marbles',
      'The afternoon free for Plaka and the flea market'
    ],
    accommodation: {
      name: 'Athens city hotel, Athens',
      description: '2 nights · Breakfast · Standard room · 3★ · Central hotel within reach of the Acropolis and Plaka',
      images: [
        img('t94sp556bsbmi220x40ywdhoum32_download%20-%202021-05-24T154542.256.png'),
        img('syhgxszzgtljd4mbtns7v7rqze2g_download%20-%202021-05-24T131648.305.png'),
        img('mabiid618qnng3fun2xfx6ux4vy1_download%20-%202021-05-24T133234.786.png'),
        img('yqca26erd0e42ucs3txz9u2hu2to_Cathedral%20of%20Argos.png'),
        img('o8x0ubxw7rfimliep8f6sds0gh5g_tomb%20of%20unknown%20soilder.png'),
        img('sfbubt29leijxo6rqweldkivisq5_download%20-%202021-05-24T150001.617.png')
      ]
    },
    activities: [
      {
        name: 'Athens city tour with the Acropolis Museum',
        day: 2,
        optional: false,
        image: img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg'),
        description: 'A guided half day over the rock itself, then down into the glass and concrete museum that holds the sculptures taken off it.'
      }
    ],
    program: {
      name: 'Athens',
      description: 'Two nights in the capital, with a guided morning on the Acropolis and the museum below it.',
      image: img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Olympia',
    subtitle: 'Corinth → Epidaurus and Mycenae',
    dayLabel: 'Day 3',
    images: [
      img('euzkc5ghn9obhy2jg4r6mf7o8u5z_shutterstock_694164988.jpg'),
      img('7ki5kv6bdycjhml8lwmho1t0g3ju_shutterstock_1983127760.jpg'),
      img('h2q34gderpe8dix2l4f3ol3z6591_shutterstock_254359237.jpg'),
      img('6fhsc1rj34uy6ar1nhrofcagg2c0_shutterstock_2377887431.jpg')
    ],
    dayImages: {
      3: [
        img('euzkc5ghn9obhy2jg4r6mf7o8u5z_shutterstock_694164988.jpg'),
        img('7ki5kv6bdycjhml8lwmho1t0g3ju_shutterstock_1983127760.jpg'),
        img('h2q34gderpe8dix2l4f3ol3z6591_shutterstock_254359237.jpg'),
        img('6fhsc1rj34uy6ar1nhrofcagg2c0_shutterstock_2377887431.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Across the Peloponnese to Olympia`,
      'Breakfast and check out for the road west',
      'The narrow cut of the Corinth Canal',
      'The theatre at Epidaurus and its famous acoustics',
      'The Lion Gate at Mycenae before Olympia for the night'
    ],
    accommodation: {
      name: 'Olympia country hotel, Olympia',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Quiet hotel among the olive groves near the ancient site',
      images: [
        img('oazojnflxdnovi8v1ukx95y2dzxy_greece-998489_1920.jpg'),
        img('rq9ipzdzyoimgfirm5bxxaevpsd1_Epidaurus%20Theatre.jpg'),
        img('58dwgny7ujmg17xdqllrrnpt8m04_Ancient%20Olympia%20greece1.png'),
        img('b93ncyt7ixw2z30xl5xd0jjribeo_Rio%20Ontario%20Bridge.png'),
        img('yghsic2k6bafsjc30s80oq6k3cm8_Archeological%20Museum%20of%20Olympia.png'),
        img('lhdftk5xht01n2f4tohusqei6341_Mycanae.png')
      ]
    },
    activities: [
      {
        name: 'Corinth Canal, Epidaurus and Mycenae',
        day: 3,
        optional: false,
        image: img('euzkc5ghn9obhy2jg4r6mf7o8u5z_shutterstock_694164988.jpg'),
        description: 'The narrow cut of the Corinth Canal, the theatre at Epidaurus where a coin dropped on stage is heard in the back row, and the Lion Gate at Mycenae.'
      }
    ],
    program: {
      name: 'Olympia',
      description: 'West across the Peloponnese with stops at the Corinth Canal, the theatre at Epidaurus and the citadel of Mycenae.',
      image: img('euzkc5ghn9obhy2jg4r6mf7o8u5z_shutterstock_694164988.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Delphi',
    dayLabel: 'Day 4',
    images: [
      img('nugn4v1cbrnlnkpoyvv0j9aszg7r_shutterstock_582792850.jpg'),
      img('mi4cdmci11rrull0y5h6pj84lcd2_shutterstock_412315360.jpg'),
      img('ux33beh5axfdqqot0f81jlpl3c6f_shutterstock_1058519432.jpg'),
      img('e8cu79ko4jdu2len8qt9mghtrtbn_shutterstock_1670430790.jpg')
    ],
    dayImages: {
      4: [
        img('nugn4v1cbrnlnkpoyvv0j9aszg7r_shutterstock_582792850.jpg'),
        img('mi4cdmci11rrull0y5h6pj84lcd2_shutterstock_412315360.jpg'),
        img('ux33beh5axfdqqot0f81jlpl3c6f_shutterstock_1058519432.jpg'),
        img('e8cu79ko4jdu2len8qt9mghtrtbn_shutterstock_1670430790.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Ancient Olympia, then north to Delphi`,
      'Breakfast, then into the sanctuary of Zeus',
      'The workshop of Pheidias and the old stadium',
      'North over the gulf through Nafpaktos',
      'Into the mountains at Delphi for the night'
    ],
    accommodation: {
      name: 'Delphi mountain hotel, Delphi',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Hillside hotel with the olive valley falling away below',
      images: [
        img('h85co8qgkhleoa9jalnjgo4p008u_shutterstock_2055397688.jpg'),
        img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg'),
        img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg'),
        img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
        img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
        img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg')
      ]
    },
    activities: [
      {
        name: 'Ancient Olympia with a guide',
        day: 4,
        optional: false,
        image: img('nugn4v1cbrnlnkpoyvv0j9aszg7r_shutterstock_582792850.jpg'),
        description: 'The sanctuary of Zeus, the workshop of Pheidias and the stadium where the games were run for a thousand years.'
      }
    ],
    program: {
      name: 'Delphi',
      description: 'The sanctuary of Zeus and the original stadium at Olympia, then north over the gulf to Delphi.',
      image: img('nugn4v1cbrnlnkpoyvv0j9aszg7r_shutterstock_582792850.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Athens',
    dayLabel: 'Day 5 to 6',
    images: [
      img('b40yksgqm1wsa7v8sykw391nsgfd_shutterstock_1614715330.jpg'),
      img('c6v2jyerh0znzcm1c8oozrn12q3d_shutterstock_2076775708.jpg'),
      img('h85co8qgkhleoa9jalnjgo4p008u_shutterstock_2055397688.jpg'),
      img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg')
    ],
    dayImages: {
      5: [
        img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg'),
        img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
        img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
        img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg')
      ],
      6: [
        img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg'),
        img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
        img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
        img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · The oracle at Delphi and back to Athens`,
      'Breakfast below the slopes of Parnassus',
      'The Sacred Way, the treasuries and the Temple of Apollo',
      'The bronze charioteer in the site museum',
      'The mountain road back through Arachova to Athens',
      `${DAY_MARK}Day 6 · Departure from Athens`,
      'Breakfast at the hotel and check out',
      'Private transfer to Athens International for your flight home'
    ],
    accommodation: {
      name: 'Athens city hotel, Athens',
      description: '1 night · Breakfast · Standard room · 3★ · Central hotel within reach of the Acropolis and Plaka',
      images: [
        img('b40yksgqm1wsa7v8sykw391nsgfd_shutterstock_1614715330.jpg'),
        img('c6v2jyerh0znzcm1c8oozrn12q3d_shutterstock_2076775708.jpg'),
        img('6fhsc1rj34uy6ar1nhrofcagg2c0_shutterstock_2377887431.jpg'),
        img('59u1lvzz32ot4lhcjs97gj2bkpvf_shutterstock_682599097.jpg'),
        img('euzkc5ghn9obhy2jg4r6mf7o8u5z_shutterstock_694164988.jpg'),
        img('7ki5kv6bdycjhml8lwmho1t0g3ju_shutterstock_1983127760.jpg')
      ]
    },
    activities: [
      {
        name: 'The sanctuary of Delphi',
        day: 5,
        optional: false,
        image: img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
        description: 'The Sacred Way up past the treasuries to the Temple of Apollo, the stadium above it and the bronze charioteer in the museum.'
      }
    ],
    program: {
      name: 'Athens',
      description: 'The oracle at Delphi in the morning, then the mountain road back to Athens through Arachova.',
      image: img('b40yksgqm1wsa7v8sykw391nsgfd_shutterstock_1614715330.jpg')
    }
  }
];

const detail = {
  slug: 'spectacular-greece-athens-olympia-and-delphi',
  ctaHref: '/l/greece/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Spectacular Greece: Athens, Olympia and Delphi',
  alt: 'The Temple of Apollo at Delphi on the slopes of Mount Parnassus',
  days: '6 days / 5 nights',
  stations: '4 stops',
  transport: 'Private airport transfers and a shared coach tour of the mainland',
  tag: 'Culture',
  tags: ['Culture', 'Short trips'],
  price: 92140,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Athens', 'Olympia', 'Delphi', 'Athens'],
  stats: { days: 6, cities: 3, hotels: 4, activities: 4, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['6 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Eleni',
    image: '/experts/riya.webp',
    role: 'Greece expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'The mainland is the half of Greece most people skip. Olympia and Delphi are quieter than the Acropolis and twice as atmospheric.',
    quoteMore: 'Carry a hat and water for Olympia and Delphi. Both sites are open ground with almost no shade, and the middle of the day is punishing in summer.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days across classical Greece: the Acropolis and its museum in Athens, the Corinth Canal, Epidaurus and Mycenae on the road west, the sanctuary at Olympia, and the oracle at Delphi before the mountain road back.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights in Athens, 1 night at Olympia and 1 night at Delphi with breakfast; two dinners on the mainland tour; private airport and port transfers; ferry tickets between the islands; all sightseeing as listed with entrance fees where stated; daily breakfast; a guided Athens city tour with the Acropolis Museum; the three day coach tour of the Peloponnese and Delphi.',
  intro2: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are named on confirmation: the operator quotes a standard class rather than fixed properties.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Athens (Arrival)', text: 'Arrival at Athens International and transfer to your hotel\nCheck in and the rest of the day at leisure\nOptional: a first walk through Monastiraki\nOptional: dinner with the rock floodlit above you', hotel: 'Athens city hotel', highlights: ['Arrival at Athens International and transfer to your hotel', 'Check in and the rest of the day at leisure', 'Optional: a first walk through Monastiraki'] },
    { title: 'Day 2: The Acropolis and its museum (B)', text: 'Breakfast, then up to the rock with your guide\nThe Parthenon, the Erechtheion and the Propylaea\nDown to the Acropolis Museum and its marbles\nThe afternoon free for Plaka and the flea market', hotel: 'Athens city hotel', highlights: ['Breakfast, then up to the rock with your guide', 'The Parthenon, the Erechtheion and the Propylaea', 'Down to the Acropolis Museum and its marbles'] },
    { title: 'Day 3: Across the Peloponnese to Olympia (B, D)', text: 'Breakfast and check out for the road west\nThe narrow cut of the Corinth Canal\nThe theatre at Epidaurus and its famous acoustics\nThe Lion Gate at Mycenae before Olympia for the night', hotel: 'Olympia country hotel', highlights: ['Breakfast and check out for the road west', 'The narrow cut of the Corinth Canal', 'The theatre at Epidaurus and its famous acoustics'] },
    { title: 'Day 4: Ancient Olympia, then north to Delphi (B, D)', text: 'Breakfast, then into the sanctuary of Zeus\nThe workshop of Pheidias and the old stadium\nNorth over the gulf through Nafpaktos\nInto the mountains at Delphi for the night', hotel: 'Delphi mountain hotel', highlights: ['Breakfast, then into the sanctuary of Zeus', 'The workshop of Pheidias and the old stadium', 'North over the gulf through Nafpaktos'] },
    { title: 'Day 5: The oracle at Delphi and back to Athens (B)', text: 'Breakfast below the slopes of Parnassus\nThe Sacred Way, the treasuries and the Temple of Apollo\nThe bronze charioteer in the site museum\nThe mountain road back through Arachova to Athens', hotel: 'Athens city hotel', highlights: ['Breakfast below the slopes of Parnassus', 'The Sacred Way, the treasuries and the Temple of Apollo', 'The bronze charioteer in the site museum'] },
    { title: 'Day 6: Departure from Athens (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Athens International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Athens International for your flight home'] }
  ],
  outro: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are named on confirmation: the operator quotes a standard class rather than fixed properties.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Europe', href: '/europe' },
  { label: 'Greece', href: '/europe/greece' },
  { label: detail.title }
];

export const spectacularAthensOlympiaDelphiBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const spectacularAthensOlympiaDelphiProduct = {
  slug: detail.slug,
  places: ['Athens', 'Olympia', 'Delphi'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 4,
  hotels: 4,
  cities: 3,
  activities: 4,
  transfers: 6,
  meals: 7,
  price: detail.price,
  images: cardImages
};
