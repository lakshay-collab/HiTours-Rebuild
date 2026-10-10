// Majestic Greece: Athens, Mykonos and Santorini. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg'),
  img('1w4xocyvk1pjx2g7k9r99m5dipp3_shutterstock_427675363.jpg'),
  img('d4yhk0q36ak73jca4q5e6o4lqqpx_shutterstock_1371491243.jpg'),
  img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg'),
  img('xgm3zv0tlhxcoohf5jy7skt6qbbq_shutterstock_510889714.jpg'),
  img('h8nzi1ck0sof5ln8kw27diaer7yv_shutterstock_2047687358.jpg'),
  img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg'),
  img('poehrkj1p31e4ve62j4r38gzwc22_shutterstock_1760881922.jpg'),
  img('w5gmocvwqej55egqpk2v2oqudyrq_shutterstock_2044614554.jpg'),
  img('h85co8qgkhleoa9jalnjgo4p008u_shutterstock_2055397688.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Athens',
    dayLabel: 'Day 1 to 3',
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
      ],
      3: [
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
      'Optional: an evening walk around Monastiraki',
      'Optional: dinner under the floodlit rock',
      `${DAY_MARK}Day 2 · The Acropolis and its museum`,
      'Breakfast, then up the rock with your guide',
      'The Parthenon, the Erechtheion and the Propylaea',
      'The Acropolis Museum and its marbles',
      'Syntagma Square and the changing of the guard',
      `${DAY_MARK}Day 3 · A free day in Athens`,
      'Breakfast, then the day as you please',
      'Optional: the National Archaeological Museum',
      'Optional: the old stadium and the temple of Zeus',
      'Optional: an evening in the lanes of Plaka'
    ],
    accommodation: {
      name: 'Athens city hotel, Athens',
      description: '3 nights · Breakfast · Standard room · 3★ · Central hotel within reach of the Acropolis and Plaka',
      images: [
        img('ag83r5rvmpoyeferc0k9rseb7x0s_download%20-%202021-05-24T131648.305.png'),
        img('c916n5a0oaedx7doyccqz4pheieh_download%20-%202021-05-28T125058.053.png'),
        img('b71sd7pi9vegeqbum22ycxh87opp_download%20-%202021-05-28T124955.495.png'),
        img('lr6klxaje5owzlqkzsk84tuaagdv_download%20-%202021-05-24T134004.253.png'),
        img('n3u9sq2t26o6na4xpsw8xcd6gr14_download%20-%202021-05-28T125009.109.png'),
        img('5dtzu9eak1g7qx6ghpllcqpj6w8p_Santorini%20Oia.png')
      ]
    },
    activities: [
      {
        name: 'Athens city tour with the Acropolis Museum',
        day: 2,
        optional: false,
        image: img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg'),
        description: 'A guided half day over the rock and through the museum below, with Syntagma Square and the changing of the guard on the way.'
      }
    ],
    program: {
      name: 'Athens',
      description: 'Three nights in the capital, with a guided morning on the Acropolis and two days to wander.',
      image: img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Mykonos',
    dayLabel: 'Day 4 to 6',
    images: [
      img('7c56sqbazyfylnioxrdqd29qj67d_shutterstock_458827315.jpg'),
      img('1w4xocyvk1pjx2g7k9r99m5dipp3_shutterstock_427675363.jpg'),
      img('kyjcqcd7mi1oh4m37xs5mwywy4g0_shutterstock_428874820.jpg'),
      img('poehrkj1p31e4ve62j4r38gzwc22_shutterstock_1760881922.jpg')
    ],
    dayImages: {
      4: [
        img('7c56sqbazyfylnioxrdqd29qj67d_shutterstock_458827315.jpg'),
        img('1w4xocyvk1pjx2g7k9r99m5dipp3_shutterstock_427675363.jpg'),
        img('kyjcqcd7mi1oh4m37xs5mwywy4g0_shutterstock_428874820.jpg'),
        img('poehrkj1p31e4ve62j4r38gzwc22_shutterstock_1760881922.jpg')
      ],
      5: [
        img('7c56sqbazyfylnioxrdqd29qj67d_shutterstock_458827315.jpg'),
        img('1w4xocyvk1pjx2g7k9r99m5dipp3_shutterstock_427675363.jpg'),
        img('kyjcqcd7mi1oh4m37xs5mwywy4g0_shutterstock_428874820.jpg'),
        img('poehrkj1p31e4ve62j4r38gzwc22_shutterstock_1760881922.jpg')
      ],
      6: [
        img('7c56sqbazyfylnioxrdqd29qj67d_shutterstock_458827315.jpg'),
        img('1w4xocyvk1pjx2g7k9r99m5dipp3_shutterstock_427675363.jpg'),
        img('kyjcqcd7mi1oh4m37xs5mwywy4g0_shutterstock_428874820.jpg'),
        img('poehrkj1p31e4ve62j4r38gzwc22_shutterstock_1760881922.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Ferry to Mykonos`,
      'Breakfast and check out of your Athens hotel',
      'Port transfer at Piraeus for the Aegean crossing',
      'Met at Mykonos harbour and taken to your hotel',
      'The evening free at Little Venice',
      `${DAY_MARK}Day 5 · Mykonos town on foot`,
      'Breakfast, then into the whitewashed lanes',
      'The windmills on the ridge above the harbour',
      'Chapels, bougainvillea and the balconies over the water',
      'The afternoon free for a beach of your choosing',
      `${DAY_MARK}Day 6 · A free day on Mykonos`,
      'Breakfast, then the whole day yours',
      'Optional: the boat across to ancient Delos',
      'Optional: a swim at Ornos or Platis Gialos',
      'Optional: a long lunch at a harbour taverna'
    ],
    accommodation: {
      name: 'Mykonos island hotel, Mykonos',
      description: '3 nights · Breakfast · Standard room · 3★ · Island hotel within reach of Mykonos town and the beaches',
      images: [
        img('kqj36whxuvu32rv7m1yvdpqqf4ou_download%20-%202021-05-24T131734.837.png'),
        img('7tbqg47el2nfbsens4yap2fgca2y_Santorini%20with%20tourist.png'),
        img('fe61dn7yd1j5zzlwsf0jbh8ly8yf_download%20-%202021-05-28T124839.569.png'),
        img('9rpsrj6vyyj70zc2uowh4s93xv1j_download%20-%202021-05-28T125031.552.png'),
        img('9sl3d7a3ba61esweqf665jvhrlab_Santorini%20Streets.png'),
        img('eo5dyph8ay9yo554tv0h7qeov7ci_download%20-%202021-05-28T125144.031.png')
      ]
    },
    activities: [
      {
        name: 'Mykonos town walk',
        day: 5,
        optional: false,
        image: img('7c56sqbazyfylnioxrdqd29qj67d_shutterstock_458827315.jpg'),
        description: 'The windmills on the ridge, the chapels of the old quarter and the balconies of Little Venice hanging over the water.'
      },
      {
        name: 'Optional: boat trip to Delos',
        day: 6,
        optional: true,
        image: img('1w4xocyvk1pjx2g7k9r99m5dipp3_shutterstock_427675363.jpg'),
        description: 'The short crossing to Delos, birthplace of Apollo, with the terrace of lions and the mosaic houses of the old merchant town.'
      }
    ],
    program: {
      name: 'Mykonos',
      description: 'Three nights in the Cyclades, with the old town on foot and two days for the bays.',
      image: img('7c56sqbazyfylnioxrdqd29qj67d_shutterstock_458827315.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Santorini',
    dayLabel: 'Day 7 to 10',
    images: [
      img('h8nzi1ck0sof5ln8kw27diaer7yv_shutterstock_2047687358.jpg'),
      img('w5gmocvwqej55egqpk2v2oqudyrq_shutterstock_2044614554.jpg'),
      img('d4yhk0q36ak73jca4q5e6o4lqqpx_shutterstock_1371491243.jpg'),
      img('s5yg4hv7hleoi9lbtvf6ssjsuc22_shutterstock_1031949604.jpg')
    ],
    dayImages: {
      7: [
        img('h8nzi1ck0sof5ln8kw27diaer7yv_shutterstock_2047687358.jpg'),
        img('w5gmocvwqej55egqpk2v2oqudyrq_shutterstock_2044614554.jpg'),
        img('d4yhk0q36ak73jca4q5e6o4lqqpx_shutterstock_1371491243.jpg'),
        img('s5yg4hv7hleoi9lbtvf6ssjsuc22_shutterstock_1031949604.jpg')
      ],
      8: [
        img('h8nzi1ck0sof5ln8kw27diaer7yv_shutterstock_2047687358.jpg'),
        img('w5gmocvwqej55egqpk2v2oqudyrq_shutterstock_2044614554.jpg'),
        img('d4yhk0q36ak73jca4q5e6o4lqqpx_shutterstock_1371491243.jpg'),
        img('s5yg4hv7hleoi9lbtvf6ssjsuc22_shutterstock_1031949604.jpg')
      ],
      9: [
        img('h8nzi1ck0sof5ln8kw27diaer7yv_shutterstock_2047687358.jpg'),
        img('w5gmocvwqej55egqpk2v2oqudyrq_shutterstock_2044614554.jpg'),
        img('d4yhk0q36ak73jca4q5e6o4lqqpx_shutterstock_1371491243.jpg'),
        img('s5yg4hv7hleoi9lbtvf6ssjsuc22_shutterstock_1031949604.jpg')
      ],
      10: [
        img('h8nzi1ck0sof5ln8kw27diaer7yv_shutterstock_2047687358.jpg'),
        img('w5gmocvwqej55egqpk2v2oqudyrq_shutterstock_2044614554.jpg'),
        img('d4yhk0q36ak73jca4q5e6o4lqqpx_shutterstock_1371491243.jpg'),
        img('s5yg4hv7hleoi9lbtvf6ssjsuc22_shutterstock_1031949604.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · On to Santorini`,
      'Breakfast and check out for the island crossing',
      'Port transfer and the ferry south through the Cyclades',
      'Met at Athinios and taken up to the caldera rim',
      'The evening free with the volcano across the water',
      `${DAY_MARK}Day 8 · The volcano and the hot springs`,
      'Breakfast with the caldera below you',
      'A boat across to the lava island of Nea Kameni',
      'The climb to the crater rim and the steam vents',
      'A swim in the warm sulphur water off Palea Kameni',
      `${DAY_MARK}Day 9 · Oia and the caldera villages`,
      'Breakfast, then the cliff path towards Oia',
      'Blue domes, white walls and the drop to the sea',
      'The famous sunset from the castle ruins',
      'Optional: a wine tasting on the way back',
      `${DAY_MARK}Day 10 · Departure from Santorini`,
      'Breakfast at the hotel and check out',
      'Private transfer to Santorini airport for your flight home'
    ],
    accommodation: {
      name: 'Santorini caldera hotel, Santorini',
      description: '3 nights · Breakfast · Standard room · 3★ · Hotel on the caldera side with the volcano across the water',
      images: [
        img('2kocn6b2s2ccqhur6xr65orq2mhu_download%20-%202021-05-24T180545.136.png'),
        img('7p8ctox2yb8oekkrwz15tcseeeq5_Santorini%20Aerial5.png'),
        img('h85co8qgkhleoa9jalnjgo4p008u_shutterstock_2055397688.jpg'),
        img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg'),
        img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg'),
        img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg')
      ]
    },
    activities: [
      {
        name: 'Santorini volcano and hot springs cruise',
        day: 8,
        optional: false,
        image: img('h8nzi1ck0sof5ln8kw27diaer7yv_shutterstock_2047687358.jpg'),
        description: 'A boat across the caldera to Nea Kameni, the climb to the crater, then the warm sulphur water off Palea Kameni.'
      },
      {
        name: 'Oia sunset and the caldera villages',
        day: 9,
        optional: false,
        image: img('w5gmocvwqej55egqpk2v2oqudyrq_shutterstock_2044614554.jpg'),
        description: 'The cliff path from Imerovigli to Oia, the blue domes above the water and the best sunset in the Aegean.'
      }
    ],
    program: {
      name: 'Santorini',
      description: 'Three nights on the caldera rim to finish, with the volcano, the hot springs and the sunset at Oia.',
      image: img('h8nzi1ck0sof5ln8kw27diaer7yv_shutterstock_2047687358.jpg')
    }
  }
];

const detail = {
  slug: 'majestic-greece-athens-mykonos-and-santorini',
  ctaHref: '/l/greece/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Majestic Greece: Athens, Mykonos and Santorini',
  alt: 'The caldera cliffs of Santorini dropping to the Aegean',
  days: '10 days / 9 nights',
  stations: '3 stops',
  transport: 'Private airport and port transfers, with ferries between the islands',
  tag: 'Culture',
  tags: ['Culture', 'Honeymoon', 'Beach', 'Luxury'],
  price: 171000,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Athens', 'Mykonos', 'Santorini'],
  stats: { days: 10, cities: 3, hotels: 3, activities: 5, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['9 meals', 'Meals'],
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
  short: 'Ten days through the classics and the Cyclades: three nights in Athens with the Acropolis and its museum, three on Mykonos for the old town and the beaches, and three on the Santorini caldera with the volcano, the hot springs and the sunset at Oia.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights in Athens, 3 nights on Mykonos and 3 nights on Santorini with breakfast; private airport and port transfers; ferry tickets between the islands; all sightseeing as listed with entrance fees where stated; daily breakfast; a guided Athens city tour with the Acropolis Museum; a Mykonos town walk; the Santorini volcano and hot springs cruise.',
  intro2: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are named on confirmation: the operator quotes a standard class rather than fixed properties.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Athens (Arrival)', text: 'Arrival at Athens International and transfer to your hotel\nCheck in and the rest of the day at leisure\nOptional: an evening walk around Monastiraki\nOptional: dinner under the floodlit rock', hotel: 'Athens city hotel', highlights: ['Arrival at Athens International and transfer to your hotel', 'Check in and the rest of the day at leisure', 'Optional: an evening walk around Monastiraki'] },
    { title: 'Day 2: The Acropolis and its museum (B)', text: 'Breakfast, then up the rock with your guide\nThe Parthenon, the Erechtheion and the Propylaea\nThe Acropolis Museum and its marbles\nSyntagma Square and the changing of the guard', hotel: 'Athens city hotel', highlights: ['Breakfast, then up the rock with your guide', 'The Parthenon, the Erechtheion and the Propylaea', 'The Acropolis Museum and its marbles'] },
    { title: 'Day 3: A free day in Athens (B)', text: 'Breakfast, then the day as you please\nOptional: the National Archaeological Museum\nOptional: the old stadium and the temple of Zeus\nOptional: an evening in the lanes of Plaka', hotel: 'Athens city hotel', highlights: ['Breakfast, then the day as you please', 'Optional: the National Archaeological Museum', 'Optional: the old stadium and the temple of Zeus'] },
    { title: 'Day 4: Ferry to Mykonos (B)', text: 'Breakfast and check out of your Athens hotel\nPort transfer at Piraeus for the Aegean crossing\nMet at Mykonos harbour and taken to your hotel\nThe evening free at Little Venice', hotel: 'Mykonos island hotel', highlights: ['Breakfast and check out of your Athens hotel', 'Port transfer at Piraeus for the Aegean crossing', 'Met at Mykonos harbour and taken to your hotel'] },
    { title: 'Day 5: Mykonos town on foot (B)', text: 'Breakfast, then into the whitewashed lanes\nThe windmills on the ridge above the harbour\nChapels, bougainvillea and the balconies over the water\nThe afternoon free for a beach of your choosing', hotel: 'Mykonos island hotel', highlights: ['Breakfast, then into the whitewashed lanes', 'The windmills on the ridge above the harbour', 'Chapels, bougainvillea and the balconies over the water'] },
    { title: 'Day 6: A free day on Mykonos (B)', text: 'Breakfast, then the whole day yours\nOptional: the boat across to ancient Delos\nOptional: a swim at Ornos or Platis Gialos\nOptional: a long lunch at a harbour taverna', hotel: 'Mykonos island hotel', highlights: ['Breakfast, then the whole day yours', 'Optional: the boat across to ancient Delos', 'Optional: a swim at Ornos or Platis Gialos'] },
    { title: 'Day 7: On to Santorini (B)', text: 'Breakfast and check out for the island crossing\nPort transfer and the ferry south through the Cyclades\nMet at Athinios and taken up to the caldera rim\nThe evening free with the volcano across the water', hotel: 'Santorini caldera hotel', highlights: ['Breakfast and check out for the island crossing', 'Port transfer and the ferry south through the Cyclades', 'Met at Athinios and taken up to the caldera rim'] },
    { title: 'Day 8: The volcano and the hot springs (B)', text: 'Breakfast with the caldera below you\nA boat across to the lava island of Nea Kameni\nThe climb to the crater rim and the steam vents\nA swim in the warm sulphur water off Palea Kameni', hotel: 'Santorini caldera hotel', highlights: ['Breakfast with the caldera below you', 'A boat across to the lava island of Nea Kameni', 'The climb to the crater rim and the steam vents'] },
    { title: 'Day 9: Oia and the caldera villages (B)', text: 'Breakfast, then the cliff path towards Oia\nBlue domes, white walls and the drop to the sea\nThe famous sunset from the castle ruins\nOptional: a wine tasting on the way back', hotel: 'Santorini caldera hotel', highlights: ['Breakfast, then the cliff path towards Oia', 'Blue domes, white walls and the drop to the sea', 'The famous sunset from the castle ruins'] },
    { title: 'Day 10: Departure from Santorini (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Santorini airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Santorini airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are named on confirmation: the operator quotes a standard class rather than fixed properties.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Europe', href: '/europe' },
  { label: 'Greece', href: '/europe/greece' },
  { label: detail.title }
];

export const majesticGreeceAthensMykonosSantoriniBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const majesticGreeceAthensMykonosSantoriniProduct = {
  slug: detail.slug,
  places: ['Athens', 'Mykonos', 'Santorini'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 10,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 5,
  transfers: 10,
  meals: 9,
  price: detail.price,
  images: cardImages
};
