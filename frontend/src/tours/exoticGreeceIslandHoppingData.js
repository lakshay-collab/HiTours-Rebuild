// Exotic Greece: Island Hopping with Santorini. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
  img('xgm3zv0tlhxcoohf5jy7skt6qbbq_shutterstock_510889714.jpg'),
  img('cchzz6y5iupkblqxhuh6temqzaod_shutterstock_627071582.jpg'),
  img('c6v2jyerh0znzcm1c8oozrn12q3d_shutterstock_2076775708.jpg'),
  img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg'),
  img('poehrkj1p31e4ve62j4r38gzwc22_shutterstock_1760881922.jpg'),
  img('s5yg4hv7hleoi9lbtvf6ssjsuc22_shutterstock_1031949604.jpg'),
  img('b40yksgqm1wsa7v8sykw391nsgfd_shutterstock_1614715330.jpg'),
  img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
  img('kyjcqcd7mi1oh4m37xs5mwywy4g0_shutterstock_428874820.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Athens',
    dayLabel: 'Day 1 to 2',
    images: [
      img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
      img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
      img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg'),
      img('b40yksgqm1wsa7v8sykw391nsgfd_shutterstock_1614715330.jpg')
    ],
    dayImages: {
      1: [
        img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
        img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
        img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg'),
        img('b40yksgqm1wsa7v8sykw391nsgfd_shutterstock_1614715330.jpg')
      ],
      2: [
        img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
        img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
        img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg'),
        img('b40yksgqm1wsa7v8sykw391nsgfd_shutterstock_1614715330.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Athens`,
      'Arrival at Athens International and transfer to your hotel',
      'Check in and the rest of the day at leisure',
      'Optional: a first wander through Monastiraki',
      'Optional: dinner with the rock lit above you',
      `${DAY_MARK}Day 2 · The Acropolis and its museum`,
      'Breakfast, then up the rock with your guide',
      'The Parthenon and the porch of the Caryatids',
      'The Acropolis Museum below the hill',
      'Syntagma Square and the changing of the guard'
    ],
    accommodation: {
      name: 'Athens city hotel, Athens',
      description: '2 nights · Breakfast · Standard room · 3★ · Central hotel within reach of the Acropolis and Plaka',
      images: [
        img('f2g6lm1sebyojd86d32x9rvdp5tu_Santorini%20Streets.png'),
        img('jgcxlair3u7np3ruqmiha39ak6yo_Santorini%20Aerial2.png'),
        img('ue778f2yjwvjw2qjcbwt09kx1bkl_Parthenon%20Acropolis1.png'),
        img('tce02mgr5kurxg5fz8xt5nrzn9ei_download%20-%202021-05-28T125009.109.png'),
        img('026i00sigydce60doc4qkbm9jgsj_Acropolis%20Museum%20interior2.png'),
        img('x7xayr5b5vesvtms7agjtp7mhf7o_download%20-%202021-05-24T131718.547.png')
      ]
    },
    activities: [
      {
        name: 'Athens city tour with the Acropolis Museum',
        day: 2,
        optional: false,
        image: img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
        description: 'A guided half day over the rock and through the museum below it, finishing at Syntagma for the changing of the guard.'
      }
    ],
    program: {
      name: 'Athens',
      description: 'Two nights to begin, with a guided morning on the Acropolis and an afternoon in the old quarter.',
      image: img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Mykonos',
    dayLabel: 'Day 3 to 4',
    images: [
      img('kfzwrzf6avcex4aiz65ec2quqr0l_shutterstock_2155315083.jpg'),
      img('xgm3zv0tlhxcoohf5jy7skt6qbbq_shutterstock_510889714.jpg'),
      img('ljjt12jdpj7gwdpmsxp7nundj7y6_shutterstock_2158007085.jpg'),
      img('7c56sqbazyfylnioxrdqd29qj67d_shutterstock_458827315.jpg')
    ],
    dayImages: {
      3: [
        img('kfzwrzf6avcex4aiz65ec2quqr0l_shutterstock_2155315083.jpg'),
        img('xgm3zv0tlhxcoohf5jy7skt6qbbq_shutterstock_510889714.jpg'),
        img('ljjt12jdpj7gwdpmsxp7nundj7y6_shutterstock_2158007085.jpg'),
        img('7c56sqbazyfylnioxrdqd29qj67d_shutterstock_458827315.jpg')
      ],
      4: [
        img('kfzwrzf6avcex4aiz65ec2quqr0l_shutterstock_2155315083.jpg'),
        img('xgm3zv0tlhxcoohf5jy7skt6qbbq_shutterstock_510889714.jpg'),
        img('ljjt12jdpj7gwdpmsxp7nundj7y6_shutterstock_2158007085.jpg'),
        img('7c56sqbazyfylnioxrdqd29qj67d_shutterstock_458827315.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Ferry to Mykonos`,
      'Breakfast and check out of your Athens hotel',
      'Port transfer at Piraeus for the Aegean crossing',
      'Met at Mykonos harbour and taken to your hotel',
      'The evening free for sunset at Little Venice',
      `${DAY_MARK}Day 4 · Mykonos town and the island`,
      'Breakfast, then into the old town on foot',
      'The windmills on the ridge and the chapels below',
      'A coach circuit of the southern bays in the afternoon',
      'Inland villages and the long sandy beaches'
    ],
    accommodation: {
      name: 'Mykonos island hotel, Mykonos',
      description: '2 nights · Breakfast · Standard room · 3★ · Island hotel within reach of Mykonos town and the beaches',
      images: [
        img('uosk0ilodb8a9i70d7srfe98kw7b_download%20-%202021-05-28T124955.495.png'),
        img('mrvxji7hpkifhlfc4f58ape0ns4o_Parthenon%20Acropolis.png'),
        img('4sqtdochin0t76v6k2we6firru27_Propylae%20the%20gateway.png'),
        img('h85co8qgkhleoa9jalnjgo4p008u_shutterstock_2055397688.jpg'),
        img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg'),
        img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg')
      ]
    },
    activities: [
      {
        name: 'Mykonos sightseeing tour',
        day: 4,
        optional: false,
        image: img('kfzwrzf6avcex4aiz65ec2quqr0l_shutterstock_2155315083.jpg'),
        description: 'The windmills, the chapels of the old quarter and a coach circuit out to the southern bays and the inland villages.'
      }
    ],
    program: {
      name: 'Mykonos',
      description: 'Two nights on Mykonos, with the old town on foot and an island circuit by coach.',
      image: img('kfzwrzf6avcex4aiz65ec2quqr0l_shutterstock_2155315083.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Santorini',
    dayLabel: 'Day 5 to 7',
    images: [
      img('d4yhk0q36ak73jca4q5e6o4lqqpx_shutterstock_1371491243.jpg'),
      img('s5yg4hv7hleoi9lbtvf6ssjsuc22_shutterstock_1031949604.jpg'),
      img('cchzz6y5iupkblqxhuh6temqzaod_shutterstock_627071582.jpg'),
      img('x9zmpd1nlnnf761falgbot5j7qsd_shutterstock_714536542.jpg')
    ],
    dayImages: {
      5: [
        img('d4yhk0q36ak73jca4q5e6o4lqqpx_shutterstock_1371491243.jpg'),
        img('s5yg4hv7hleoi9lbtvf6ssjsuc22_shutterstock_1031949604.jpg'),
        img('cchzz6y5iupkblqxhuh6temqzaod_shutterstock_627071582.jpg'),
        img('x9zmpd1nlnnf761falgbot5j7qsd_shutterstock_714536542.jpg')
      ],
      6: [
        img('d4yhk0q36ak73jca4q5e6o4lqqpx_shutterstock_1371491243.jpg'),
        img('s5yg4hv7hleoi9lbtvf6ssjsuc22_shutterstock_1031949604.jpg'),
        img('cchzz6y5iupkblqxhuh6temqzaod_shutterstock_627071582.jpg'),
        img('x9zmpd1nlnnf761falgbot5j7qsd_shutterstock_714536542.jpg')
      ],
      7: [
        img('d4yhk0q36ak73jca4q5e6o4lqqpx_shutterstock_1371491243.jpg'),
        img('s5yg4hv7hleoi9lbtvf6ssjsuc22_shutterstock_1031949604.jpg'),
        img('cchzz6y5iupkblqxhuh6temqzaod_shutterstock_627071582.jpg'),
        img('x9zmpd1nlnnf761falgbot5j7qsd_shutterstock_714536542.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · On to Santorini`,
      'Breakfast and check out for the island crossing',
      'Port transfer and the ferry south through the Cyclades',
      'Met at Athinios and taken up to the caldera rim',
      'The evening free with the volcano across the water',
      `${DAY_MARK}Day 6 · The volcano and the hot springs`,
      'Breakfast with the caldera below you',
      'A boat across to the lava island of Nea Kameni',
      'The climb to the crater rim and the steam vents',
      'A swim in the warm sulphur water off Palea Kameni',
      `${DAY_MARK}Day 7 · The cliff villages of the rim`,
      'Breakfast, then out along the caldera path',
      'Fira, Imerovigli and the walk on to Oia',
      'Blue domes, white walls and the drop to the sea',
      'The sunset from the old castle ruins'
    ],
    accommodation: {
      name: 'Santorini caldera hotel, Santorini',
      description: '3 nights · Breakfast · Standard room · 3★ · Hotel on the caldera side with the volcano across the water',
      images: [
        img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
        img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
        img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg'),
        img('b40yksgqm1wsa7v8sykw391nsgfd_shutterstock_1614715330.jpg'),
        img('c6v2jyerh0znzcm1c8oozrn12q3d_shutterstock_2076775708.jpg'),
        img('1w4xocyvk1pjx2g7k9r99m5dipp3_shutterstock_427675363.jpg')
      ]
    },
    activities: [
      {
        name: 'Santorini volcano and hot springs cruise',
        day: 6,
        optional: false,
        image: img('d4yhk0q36ak73jca4q5e6o4lqqpx_shutterstock_1371491243.jpg'),
        description: 'A boat across to Nea Kameni, the climb to the crater rim, then a swim in the warm sulphur water off Palea Kameni.'
      },
      {
        name: 'Fira, Imerovigli and Oia',
        day: 7,
        optional: false,
        image: img('s5yg4hv7hleoi9lbtvf6ssjsuc22_shutterstock_1031949604.jpg'),
        description: 'The three cliff towns on the rim, linked by a path along the edge, with the caldera dropping away on one side the whole way.'
      }
    ],
    program: {
      name: 'Santorini',
      description: 'Three nights on the caldera, with the volcano cruise and a day among the cliff villages.',
      image: img('d4yhk0q36ak73jca4q5e6o4lqqpx_shutterstock_1371491243.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Athens',
    dayLabel: 'Day 8 to 9',
    images: [
      img('c6v2jyerh0znzcm1c8oozrn12q3d_shutterstock_2076775708.jpg'),
      img('h85co8qgkhleoa9jalnjgo4p008u_shutterstock_2055397688.jpg'),
      img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg'),
      img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg')
    ],
    dayImages: {
      8: [
        img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
        img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
        img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg'),
        img('b40yksgqm1wsa7v8sykw391nsgfd_shutterstock_1614715330.jpg')
      ],
      9: [
        img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
        img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
        img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg'),
        img('b40yksgqm1wsa7v8sykw391nsgfd_shutterstock_1614715330.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · Back to Athens`,
      'Breakfast and check out for the return crossing',
      'The ferry to Piraeus and a transfer to your hotel',
      'The afternoon free in the Plaka quarter',
      'Optional: a last dinner in the old town',
      `${DAY_MARK}Day 9 · Departure from Athens`,
      'Breakfast at the hotel and check out',
      'Private transfer to Athens International for your flight home'
    ],
    accommodation: {
      name: 'Athens city hotel, Athens',
      description: '1 night · Breakfast · Standard room · 3★ · Central hotel within reach of the Acropolis and Plaka',
      images: [
        img('kyjcqcd7mi1oh4m37xs5mwywy4g0_shutterstock_428874820.jpg'),
        img('poehrkj1p31e4ve62j4r38gzwc22_shutterstock_1760881922.jpg'),
        img('kfzwrzf6avcex4aiz65ec2quqr0l_shutterstock_2155315083.jpg'),
        img('xgm3zv0tlhxcoohf5jy7skt6qbbq_shutterstock_510889714.jpg'),
        img('ljjt12jdpj7gwdpmsxp7nundj7y6_shutterstock_2158007085.jpg'),
        img('7c56sqbazyfylnioxrdqd29qj67d_shutterstock_458827315.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Athens',
      description: 'The crossing back to the mainland for a last night in the capital.',
      image: img('c6v2jyerh0znzcm1c8oozrn12q3d_shutterstock_2076775708.jpg')
    }
  }
];

const detail = {
  slug: 'exotic-greece-island-hopping-with-santorini',
  ctaHref: '/l/greece/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Exotic Greece: Island Hopping with Santorini',
  alt: 'A blue domed church above the rooftops of Oia on Santorini',
  days: '9 days / 8 nights',
  stations: '4 stops',
  transport: 'Private airport and port transfers, with ferries between the islands',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Beach', 'Culture'],
  price: 169028,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Athens', 'Mykonos', 'Santorini', 'Athens'],
  stats: { days: 9, cities: 3, hotels: 4, activities: 4, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Eleni',
    image: '/experts/riya.webp',
    role: 'Greece expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Mykonos for the nights and Santorini for the light. Give each island three nights and you will never feel rushed.',
    quoteMore: 'Book your Santorini hotel on the caldera rim in Imerovigli rather than Oia. Same sunset, half the crowd, and you can walk to Oia along the cliff path.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days island hopping from Athens: the Acropolis and its museum, two nights on Mykonos for the old town and the bays, three on the Santorini caldera with the volcano and the cliff villages, then a last night on the mainland.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights in Athens, 2 nights on Mykonos and 3 nights on Santorini with breakfast; private airport and port transfers; ferry tickets between the islands; all sightseeing as listed with entrance fees where stated; daily breakfast; a guided Athens city tour with the Acropolis Museum; a Mykonos sightseeing tour; the Santorini volcano and hot springs cruise.',
  intro2: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are named on confirmation: the operator quotes a standard class rather than fixed properties.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Athens (Arrival)', text: 'Arrival at Athens International and transfer to your hotel\nCheck in and the rest of the day at leisure\nOptional: a first wander through Monastiraki\nOptional: dinner with the rock lit above you', hotel: 'Athens city hotel', highlights: ['Arrival at Athens International and transfer to your hotel', 'Check in and the rest of the day at leisure', 'Optional: a first wander through Monastiraki'] },
    { title: 'Day 2: The Acropolis and its museum (B)', text: 'Breakfast, then up the rock with your guide\nThe Parthenon and the porch of the Caryatids\nThe Acropolis Museum below the hill\nSyntagma Square and the changing of the guard', hotel: 'Athens city hotel', highlights: ['Breakfast, then up the rock with your guide', 'The Parthenon and the porch of the Caryatids', 'The Acropolis Museum below the hill'] },
    { title: 'Day 3: Ferry to Mykonos (B)', text: 'Breakfast and check out of your Athens hotel\nPort transfer at Piraeus for the Aegean crossing\nMet at Mykonos harbour and taken to your hotel\nThe evening free for sunset at Little Venice', hotel: 'Mykonos island hotel', highlights: ['Breakfast and check out of your Athens hotel', 'Port transfer at Piraeus for the Aegean crossing', 'Met at Mykonos harbour and taken to your hotel'] },
    { title: 'Day 4: Mykonos town and the island (B)', text: 'Breakfast, then into the old town on foot\nThe windmills on the ridge and the chapels below\nA coach circuit of the southern bays in the afternoon\nInland villages and the long sandy beaches', hotel: 'Mykonos island hotel', highlights: ['Breakfast, then into the old town on foot', 'The windmills on the ridge and the chapels below', 'A coach circuit of the southern bays in the afternoon'] },
    { title: 'Day 5: On to Santorini (B)', text: 'Breakfast and check out for the island crossing\nPort transfer and the ferry south through the Cyclades\nMet at Athinios and taken up to the caldera rim\nThe evening free with the volcano across the water', hotel: 'Santorini caldera hotel', highlights: ['Breakfast and check out for the island crossing', 'Port transfer and the ferry south through the Cyclades', 'Met at Athinios and taken up to the caldera rim'] },
    { title: 'Day 6: The volcano and the hot springs (B)', text: 'Breakfast with the caldera below you\nA boat across to the lava island of Nea Kameni\nThe climb to the crater rim and the steam vents\nA swim in the warm sulphur water off Palea Kameni', hotel: 'Santorini caldera hotel', highlights: ['Breakfast with the caldera below you', 'A boat across to the lava island of Nea Kameni', 'The climb to the crater rim and the steam vents'] },
    { title: 'Day 7: The cliff villages of the rim (B)', text: 'Breakfast, then out along the caldera path\nFira, Imerovigli and the walk on to Oia\nBlue domes, white walls and the drop to the sea\nThe sunset from the old castle ruins', hotel: 'Santorini caldera hotel', highlights: ['Breakfast, then out along the caldera path', 'Fira, Imerovigli and the walk on to Oia', 'Blue domes, white walls and the drop to the sea'] },
    { title: 'Day 8: Back to Athens (B)', text: 'Breakfast and check out for the return crossing\nThe ferry to Piraeus and a transfer to your hotel\nThe afternoon free in the Plaka quarter\nOptional: a last dinner in the old town', hotel: 'Athens city hotel', highlights: ['Breakfast and check out for the return crossing', 'The ferry to Piraeus and a transfer to your hotel', 'The afternoon free in the Plaka quarter'] },
    { title: 'Day 9: Departure from Athens (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Athens International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Athens International for your flight home'] }
  ],
  outro: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are named on confirmation: the operator quotes a standard class rather than fixed properties.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Europe', href: '/europe' },
  { label: 'Greece', href: '/europe/greece' },
  { label: detail.title }
];

export const exoticGreeceIslandHoppingBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const exoticGreeceIslandHoppingProduct = {
  slug: detail.slug,
  places: ['Athens', 'Mykonos', 'Santorini'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 4,
  hotels: 4,
  cities: 3,
  activities: 4,
  transfers: 10,
  meals: 8,
  price: detail.price,
  images: cardImages
};
