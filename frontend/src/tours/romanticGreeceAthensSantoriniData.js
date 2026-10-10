// Romantic Greece: Athens and Santorini. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg'),
  img('w5gmocvwqej55egqpk2v2oqudyrq_shutterstock_2044614554.jpg'),
  img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
  img('b40yksgqm1wsa7v8sykw391nsgfd_shutterstock_1614715330.jpg'),
  img('x9zmpd1nlnnf761falgbot5j7qsd_shutterstock_714536542.jpg'),
  img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg'),
  img('c6v2jyerh0znzcm1c8oozrn12q3d_shutterstock_2076775708.jpg'),
  img('cchzz6y5iupkblqxhuh6temqzaod_shutterstock_627071582.jpg'),
  img('h85co8qgkhleoa9jalnjgo4p008u_shutterstock_2055397688.jpg'),
  img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Athens',
    dayLabel: 'Day 1 to 2',
    images: [
      img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg'),
      img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg'),
      img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
      img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg')
    ],
    dayImages: {
      1: [
        img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg'),
        img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg'),
        img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
        img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg')
      ],
      2: [
        img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg'),
        img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg'),
        img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
        img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Athens`,
      'Arrival at Athens International and transfer to your hotel',
      'Check in and the rest of the day at leisure',
      'Optional: an evening in the lanes below the rock',
      'Optional: a rooftop dinner facing the Acropolis',
      `${DAY_MARK}Day 2 · The Acropolis and its museum`,
      'Breakfast, then up the rock with your guide',
      'The Parthenon and the porch of the Caryatids',
      'The Acropolis Museum and its marbles',
      'The afternoon free in Plaka'
    ],
    accommodation: {
      name: 'Athens city hotel, Athens',
      description: '2 nights · Breakfast · Standard room · 3★ · Central hotel within reach of the Acropolis and Plaka',
      images: [
        img('ed5oavk2x2zvjkjxr7rez55xpnu4_download%20-%202021-05-24T145812.648.png'),
        img('ja0rh2ckr3bk5w1qywpv673q1d30_Santorini%20Streets.png'),
        img('neiejditzy4xwb9ys7vnyi6680if_download%20-%202021-05-24T131648.305.png'),
        img('ietknmch8nwz2ft5xmceaa7oz9ya_download%20-%202021-05-24T133234.786.png'),
        img('rlj7rmifpj9x8p47jsea2c7q6hsh_Santorini%20Aerial1.png'),
        img('g28o37vpgk6odlrgijmjakqyosis_download%20-%202021-05-24T180545.136.png')
      ]
    },
    activities: [
      {
        name: 'Athens city tour with the Acropolis Museum',
        day: 2,
        optional: false,
        image: img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg'),
        description: 'A guided half day over the rock and through the museum below it, with the Parthenon marbles laid out as they once stood.'
      }
    ],
    program: {
      name: 'Athens',
      description: 'Two nights in the capital with a guided morning on the Acropolis and its museum.',
      image: img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Santorini',
    dayLabel: 'Day 3 to 4',
    images: [
      img('h8nzi1ck0sof5ln8kw27diaer7yv_shutterstock_2047687358.jpg'),
      img('w5gmocvwqej55egqpk2v2oqudyrq_shutterstock_2044614554.jpg'),
      img('d4yhk0q36ak73jca4q5e6o4lqqpx_shutterstock_1371491243.jpg'),
      img('s5yg4hv7hleoi9lbtvf6ssjsuc22_shutterstock_1031949604.jpg')
    ],
    dayImages: {
      3: [
        img('h8nzi1ck0sof5ln8kw27diaer7yv_shutterstock_2047687358.jpg'),
        img('w5gmocvwqej55egqpk2v2oqudyrq_shutterstock_2044614554.jpg'),
        img('d4yhk0q36ak73jca4q5e6o4lqqpx_shutterstock_1371491243.jpg'),
        img('s5yg4hv7hleoi9lbtvf6ssjsuc22_shutterstock_1031949604.jpg')
      ],
      4: [
        img('h8nzi1ck0sof5ln8kw27diaer7yv_shutterstock_2047687358.jpg'),
        img('w5gmocvwqej55egqpk2v2oqudyrq_shutterstock_2044614554.jpg'),
        img('d4yhk0q36ak73jca4q5e6o4lqqpx_shutterstock_1371491243.jpg'),
        img('s5yg4hv7hleoi9lbtvf6ssjsuc22_shutterstock_1031949604.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · The crossing to Santorini`,
      'Breakfast and check out of your Athens hotel',
      'Port transfer at Piraeus for the Aegean crossing',
      'Met at Athinios and taken up to the caldera rim',
      'The evening free for the sunset over the water',
      `${DAY_MARK}Day 4 · The volcano and the hot springs`,
      'Breakfast with the caldera below you',
      'A boat across to the lava island of Nea Kameni',
      'The climb to the crater rim and the steam vents',
      'A swim in the warm sulphur water off Palea Kameni'
    ],
    accommodation: {
      name: 'Santorini caldera hotel, Santorini',
      description: '2 nights · Breakfast · Standard room · 3★ · Hotel on the caldera side with the volcano across the water',
      images: [
        img('40qzhrgy4kh60gu41nrq4iqyp06c_Santorini%20with%20tourist2.png'),
        img('1cif2jztx83r5jaaflbjqfmqee0g_Panathinaikon%20Stadium.png'),
        img('6duwr5yz26p4mm70vrcn7vcuq9a7_Parthenon%20Acropolis.png'),
        img('qmtp1f3u8lrx7fnv2isr59hcqs5d_Santorini%20with%20tourist1.png'),
        img('dxmyzz3nhdiidpm75bre54m1l50g_Acropolis%20Museum%20interior2.png'),
        img('cg4j5frls1zn8abdg2o030nqc6yq_tomb%20of%20unknown%20soilder1.png')
      ]
    },
    activities: [
      {
        name: 'Santorini volcano and hot springs cruise',
        day: 4,
        optional: false,
        image: img('h8nzi1ck0sof5ln8kw27diaer7yv_shutterstock_2047687358.jpg'),
        description: 'A boat across the caldera to the black lava island of Nea Kameni, the walk up to the crater, then a swim in the warm sulphur water off Palea Kameni.'
      }
    ],
    program: {
      name: 'Santorini',
      description: 'Two nights on the rim of a drowned volcano, with a boat out to the crater and the hot springs.',
      image: img('h8nzi1ck0sof5ln8kw27diaer7yv_shutterstock_2047687358.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Athens',
    dayLabel: 'Day 5 to 6',
    images: [
      img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg'),
      img('b40yksgqm1wsa7v8sykw391nsgfd_shutterstock_1614715330.jpg'),
      img('c6v2jyerh0znzcm1c8oozrn12q3d_shutterstock_2076775708.jpg'),
      img('h85co8qgkhleoa9jalnjgo4p008u_shutterstock_2055397688.jpg')
    ],
    dayImages: {
      5: [
        img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg'),
        img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg'),
        img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
        img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg')
      ],
      6: [
        img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg'),
        img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg'),
        img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
        img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Back to Athens`,
      'Breakfast and check out for the return crossing',
      'The ferry to Piraeus and a transfer to your hotel',
      'The afternoon free for the Plaka quarter',
      'Optional: a last dinner in the old town',
      `${DAY_MARK}Day 6 · Departure from Athens`,
      'Breakfast at the hotel and check out',
      'Private transfer to Athens International for your flight home'
    ],
    accommodation: {
      name: 'Athens city hotel, Athens',
      description: '1 night · Breakfast · Standard room · 3★ · Central hotel within reach of the Acropolis and Plaka',
      images: [
        img('xxxsy5s4i46rd5i61wxk9oqdz375_download%20-%202021-05-25T181117.802.png'),
        img('h85co8qgkhleoa9jalnjgo4p008u_shutterstock_2055397688.jpg'),
        img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg'),
        img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg'),
        img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
        img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Athens',
      description: 'The crossing back for a last evening on the mainland.',
      image: img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg')
    }
  }
];

const detail = {
  slug: 'romantic-greece-athens-and-santorini',
  ctaHref: '/l/greece/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Romantic Greece: Athens and Santorini',
  alt: 'Whitewashed houses and blue domes above the Santorini caldera',
  days: '6 days / 5 nights',
  stations: '3 stops',
  transport: 'Private airport and port transfers, with the ferry to and from Santorini',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Culture', 'Beach'],
  price: 114000,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Athens', 'Santorini', 'Athens'],
  stats: { days: 6, cities: 2, hotels: 3, activities: 2, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['2 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Eleni',
    image: '/experts/riya.webp',
    role: 'Greece expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Athens first, islands second. Two days of ruins and then the ferry out feels like the holiday actually begins twice.',
    quoteMore: 'Take the morning ferry, not the afternoon one. The meltemi wind picks up after lunch and the crossing is a great deal less pleasant.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days for two: the Acropolis and its museum in Athens, then two nights on the Santorini caldera with a boat out to the volcano and a swim in the hot springs, before a last evening back in Plaka.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights in Athens and 2 nights on Santorini with breakfast; private airport and port transfers; ferry tickets between the islands; all sightseeing as listed with entrance fees where stated; daily breakfast; a guided Athens city tour with the Acropolis Museum; the Santorini volcano and hot springs cruise.',
  intro2: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are named on confirmation: the operator quotes a standard class rather than fixed properties.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Athens (Arrival)', text: 'Arrival at Athens International and transfer to your hotel\nCheck in and the rest of the day at leisure\nOptional: an evening in the lanes below the rock\nOptional: a rooftop dinner facing the Acropolis', hotel: 'Athens city hotel', highlights: ['Arrival at Athens International and transfer to your hotel', 'Check in and the rest of the day at leisure', 'Optional: an evening in the lanes below the rock'] },
    { title: 'Day 2: The Acropolis and its museum (B)', text: 'Breakfast, then up the rock with your guide\nThe Parthenon and the porch of the Caryatids\nThe Acropolis Museum and its marbles\nThe afternoon free in Plaka', hotel: 'Athens city hotel', highlights: ['Breakfast, then up the rock with your guide', 'The Parthenon and the porch of the Caryatids', 'The Acropolis Museum and its marbles'] },
    { title: 'Day 3: The crossing to Santorini (B)', text: 'Breakfast and check out of your Athens hotel\nPort transfer at Piraeus for the Aegean crossing\nMet at Athinios and taken up to the caldera rim\nThe evening free for the sunset over the water', hotel: 'Santorini caldera hotel', highlights: ['Breakfast and check out of your Athens hotel', 'Port transfer at Piraeus for the Aegean crossing', 'Met at Athinios and taken up to the caldera rim'] },
    { title: 'Day 4: The volcano and the hot springs (B)', text: 'Breakfast with the caldera below you\nA boat across to the lava island of Nea Kameni\nThe climb to the crater rim and the steam vents\nA swim in the warm sulphur water off Palea Kameni', hotel: 'Santorini caldera hotel', highlights: ['Breakfast with the caldera below you', 'A boat across to the lava island of Nea Kameni', 'The climb to the crater rim and the steam vents'] },
    { title: 'Day 5: Back to Athens (B)', text: 'Breakfast and check out for the return crossing\nThe ferry to Piraeus and a transfer to your hotel\nThe afternoon free for the Plaka quarter\nOptional: a last dinner in the old town', hotel: 'Athens city hotel', highlights: ['Breakfast and check out for the return crossing', 'The ferry to Piraeus and a transfer to your hotel', 'The afternoon free for the Plaka quarter'] },
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

export const romanticGreeceAthensSantoriniBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const romanticGreeceAthensSantoriniProduct = {
  slug: detail.slug,
  places: ['Athens', 'Santorini'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 3,
  hotels: 3,
  cities: 2,
  activities: 2,
  transfers: 8,
  meals: 5,
  price: detail.price,
  images: cardImages
};
