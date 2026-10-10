// Enchanting Greece: Athens and Mykonos. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
  img('ljjt12jdpj7gwdpmsxp7nundj7y6_shutterstock_2158007085.jpg'),
  img('c6v2jyerh0znzcm1c8oozrn12q3d_shutterstock_2076775708.jpg'),
  img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg'),
  img('poehrkj1p31e4ve62j4r38gzwc22_shutterstock_1760881922.jpg'),
  img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg'),
  img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg'),
  img('1w4xocyvk1pjx2g7k9r99m5dipp3_shutterstock_427675363.jpg'),
  img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg'),
  img('h85co8qgkhleoa9jalnjgo4p008u_shutterstock_2055397688.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Athens',
    dayLabel: 'Day 1 to 2',
    images: [
      img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
      img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg'),
      img('b40yksgqm1wsa7v8sykw391nsgfd_shutterstock_1614715330.jpg'),
      img('c6v2jyerh0znzcm1c8oozrn12q3d_shutterstock_2076775708.jpg')
    ],
    dayImages: {
      1: [
        img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
        img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg'),
        img('b40yksgqm1wsa7v8sykw391nsgfd_shutterstock_1614715330.jpg'),
        img('c6v2jyerh0znzcm1c8oozrn12q3d_shutterstock_2076775708.jpg')
      ],
      2: [
        img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
        img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg'),
        img('b40yksgqm1wsa7v8sykw391nsgfd_shutterstock_1614715330.jpg'),
        img('c6v2jyerh0znzcm1c8oozrn12q3d_shutterstock_2076775708.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Athens`,
      'Arrival at Athens International and transfer to your hotel',
      'Check in and the rest of the day at leisure',
      'Optional: an evening walk up Lykavittos hill',
      'Optional: dinner in the lanes of Monastiraki',
      `${DAY_MARK}Day 2 · The Acropolis and the city`,
      'Breakfast, then up to the rock with your guide',
      'The Propylaea, the Parthenon and the Erechtheion',
      'Syntagma Square and the changing of the guard',
      'The afternoon free for the Acropolis Museum'
    ],
    accommodation: {
      name: 'Athens city hotel, Athens',
      description: '2 nights · Breakfast · Standard room · 3★ · Central hotel within reach of the Acropolis and Plaka',
      images: [
        img('3ugkni6mjh98r8cw50de7xtcn5aa_gal2.jpg'),
        img('r5adpb5firxegyor7vw6ehb4jsq6_gal4.jpg'),
        img('s9a8fq3sg5u097ena96sk1e45o42_gal6.jpg'),
        img('lmhplj7dee3brt2tdfrtpfjyys1x_gal10.jpg'),
        img('3du1tdoah7o9m3x9p766tpwmey0i_gal1.jpeg'),
        img('3qkufm220jfx981mjju7jbor40wk_Chora-Mykonos-Town.jpg')
      ]
    },
    activities: [
      {
        name: 'Acropolis and Athens city tour',
        day: 2,
        optional: false,
        image: img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
        description: 'A guided half day taking in the Acropolis, the Propylaea and the Parthenon, then Syntagma Square and the changing of the guard.'
      }
    ],
    program: {
      name: 'Athens',
      description: 'Two nights to start, with a half day round the Acropolis, Syntagma and the old quarter below the rock.',
      image: img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Mykonos',
    dayLabel: 'Day 3 to 5',
    images: [
      img('xgm3zv0tlhxcoohf5jy7skt6qbbq_shutterstock_510889714.jpg'),
      img('ljjt12jdpj7gwdpmsxp7nundj7y6_shutterstock_2158007085.jpg'),
      img('7c56sqbazyfylnioxrdqd29qj67d_shutterstock_458827315.jpg'),
      img('1w4xocyvk1pjx2g7k9r99m5dipp3_shutterstock_427675363.jpg')
    ],
    dayImages: {
      3: [
        img('xgm3zv0tlhxcoohf5jy7skt6qbbq_shutterstock_510889714.jpg'),
        img('ljjt12jdpj7gwdpmsxp7nundj7y6_shutterstock_2158007085.jpg'),
        img('7c56sqbazyfylnioxrdqd29qj67d_shutterstock_458827315.jpg'),
        img('1w4xocyvk1pjx2g7k9r99m5dipp3_shutterstock_427675363.jpg')
      ],
      4: [
        img('xgm3zv0tlhxcoohf5jy7skt6qbbq_shutterstock_510889714.jpg'),
        img('ljjt12jdpj7gwdpmsxp7nundj7y6_shutterstock_2158007085.jpg'),
        img('7c56sqbazyfylnioxrdqd29qj67d_shutterstock_458827315.jpg'),
        img('1w4xocyvk1pjx2g7k9r99m5dipp3_shutterstock_427675363.jpg')
      ],
      5: [
        img('xgm3zv0tlhxcoohf5jy7skt6qbbq_shutterstock_510889714.jpg'),
        img('ljjt12jdpj7gwdpmsxp7nundj7y6_shutterstock_2158007085.jpg'),
        img('7c56sqbazyfylnioxrdqd29qj67d_shutterstock_458827315.jpg'),
        img('1w4xocyvk1pjx2g7k9r99m5dipp3_shutterstock_427675363.jpg')
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
      'Whitewashed lanes, bougainvillea and the windmills',
      'An island circuit by coach in the afternoon',
      'Southern bays, inland villages and long beaches',
      `${DAY_MARK}Day 5 · A free day on Mykonos`,
      'Breakfast, then the whole day yours',
      'Optional: the boat across to ancient Delos',
      'Optional: a swim at Platis Gialos or Paradise beach',
      'Optional: a late lunch at a harbour taverna'
    ],
    accommodation: {
      name: 'Mykonos island hotel, Mykonos',
      description: '3 nights · Breakfast · Standard room · 3★ · Island hotel within reach of Mykonos town and the beaches',
      images: [
        img('o1tiruuh2obg7ci6edqgcdaw5ary_gal8.jpg'),
        img('xhwgweku2nzycwk1sr68th4attw2_gal5.jpg'),
        img('asf8fpi8kaefe09fj4sr379mrbuv_gal9.jpg'),
        img('8n4gtapx94k6r2inecpqvhlfk3z9_gal3.jpg'),
        img('6v9f89zqwuk4k5ll0fryf0py09yf_gal7.jpg'),
        img('qe5yinu57xgjwxjg91d218cdljar_75246a52996fb0ba1ece27ca80cc3452.jpg')
      ]
    },
    activities: [
      {
        name: 'Mykonos town walk',
        day: 4,
        optional: false,
        image: img('xgm3zv0tlhxcoohf5jy7skt6qbbq_shutterstock_510889714.jpg'),
        description: 'A morning on foot through the whitewashed lanes, the windmills on the ridge and the waterfront at Little Venice.'
      },
      {
        name: 'Island bus tour of Mykonos',
        day: 4,
        optional: false,
        image: img('ljjt12jdpj7gwdpmsxp7nundj7y6_shutterstock_2158007085.jpg'),
        description: 'A circuit of the island by coach, out to the southern bays, the inland villages and the long sandy beaches.'
      },
      {
        name: 'Optional: boat trip to Delos',
        day: 5,
        optional: true,
        image: img('7c56sqbazyfylnioxrdqd29qj67d_shutterstock_458827315.jpg'),
        description: 'The short crossing to the sacred island of Delos, birthplace of Apollo and one of the largest archaeological sites in the Aegean.'
      }
    ],
    program: {
      name: 'Mykonos',
      description: 'Three nights on Mykonos, with a walk through the old town, an island bus tour and a free day for the beaches.',
      image: img('xgm3zv0tlhxcoohf5jy7skt6qbbq_shutterstock_510889714.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Athens',
    dayLabel: 'Day 6 to 7',
    images: [
      img('h85co8qgkhleoa9jalnjgo4p008u_shutterstock_2055397688.jpg'),
      img('ag3fojtvv5hg2ttbs58l92zvo9y8_shutterstock_1013455141.jpg'),
      img('14mmoqwv144xc8sgff01inqwm6li_shutterstock_2383392321.jpg'),
      img('m2pbxs8f4144rcv6w3imaysb3n69_shutterstock_1193397715.jpg')
    ],
    dayImages: {
      6: [
        img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
        img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg'),
        img('b40yksgqm1wsa7v8sykw391nsgfd_shutterstock_1614715330.jpg'),
        img('c6v2jyerh0znzcm1c8oozrn12q3d_shutterstock_2076775708.jpg')
      ],
      7: [
        img('m99ypfp1aswmogx22ba8rvi15vx9_shutterstock_719305414.jpg'),
        img('t1g1793nds3me6f367gq3ua6anom_shutterstock_2025620126.jpg'),
        img('b40yksgqm1wsa7v8sykw391nsgfd_shutterstock_1614715330.jpg'),
        img('c6v2jyerh0znzcm1c8oozrn12q3d_shutterstock_2076775708.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Back to Athens`,
      'Breakfast and check out for the return crossing',
      'The ferry back to Piraeus and a transfer to your hotel',
      'The afternoon free in the Plaka quarter',
      'Pastel houses, bougainvillea and the rock above you',
      `${DAY_MARK}Day 7 · Departure from Athens`,
      'Breakfast at the hotel and check out',
      'Private transfer to Athens International for your flight home'
    ],
    accommodation: {
      name: 'Athens city hotel, Athens',
      description: '1 night · Breakfast · Standard room · 3★ · Central hotel within reach of the Acropolis and Plaka',
      images: [
        img('sklqc0768z8fvlfr4zdmv33wbz3b_gal2.jpg'),
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
      description: 'Back to the mainland for a last evening in Plaka under the floodlit rock.',
      image: img('h85co8qgkhleoa9jalnjgo4p008u_shutterstock_2055397688.jpg')
    }
  }
];

const detail = {
  slug: 'enchanting-greece-athens-and-mykonos',
  ctaHref: '/l/greece/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Enchanting Greece: Athens and Mykonos',
  alt: 'The Parthenon on the Acropolis above Athens in the late afternoon',
  days: '7 days / 6 nights',
  stations: '3 stops',
  transport: 'Private airport and port transfers, with ferries to and from Mykonos',
  tag: 'Culture',
  tags: ['Culture', 'Honeymoon', 'Beach'],
  price: 137750,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Athens', 'Mykonos', 'Athens'],
  stats: { days: 7, cities: 2, hotels: 3, activities: 4, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['6 meals', 'Meals'],
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
  short: 'Seven days between the mainland and the Cyclades: two nights in Athens with a guided morning on the Acropolis, three on Mykonos for the old town, an island circuit and the beaches, then a last night back in Plaka.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights in Athens and 3 nights on Mykonos with breakfast; private airport and port transfers; ferry tickets between the islands; all sightseeing as listed with entrance fees where stated; daily breakfast; a guided Acropolis and Athens city tour; a Mykonos town walk and island bus tour.',
  intro2: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are named on confirmation: the operator quotes a standard class rather than fixed properties.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Athens (Arrival)', text: 'Arrival at Athens International and transfer to your hotel\nCheck in and the rest of the day at leisure\nOptional: an evening walk up Lykavittos hill\nOptional: dinner in the lanes of Monastiraki', hotel: 'Athens city hotel', highlights: ['Arrival at Athens International and transfer to your hotel', 'Check in and the rest of the day at leisure', 'Optional: an evening walk up Lykavittos hill'] },
    { title: 'Day 2: The Acropolis and the city (B)', text: 'Breakfast, then up to the rock with your guide\nThe Propylaea, the Parthenon and the Erechtheion\nSyntagma Square and the changing of the guard\nThe afternoon free for the Acropolis Museum', hotel: 'Athens city hotel', highlights: ['Breakfast, then up to the rock with your guide', 'The Propylaea, the Parthenon and the Erechtheion', 'Syntagma Square and the changing of the guard'] },
    { title: 'Day 3: Ferry to Mykonos (B)', text: 'Breakfast and check out of your Athens hotel\nPort transfer at Piraeus for the Aegean crossing\nMet at Mykonos harbour and taken to your hotel\nThe evening free for sunset at Little Venice', hotel: 'Mykonos island hotel', highlights: ['Breakfast and check out of your Athens hotel', 'Port transfer at Piraeus for the Aegean crossing', 'Met at Mykonos harbour and taken to your hotel'] },
    { title: 'Day 4: Mykonos town and the island (B)', text: 'Breakfast, then into the old town on foot\nWhitewashed lanes, bougainvillea and the windmills\nAn island circuit by coach in the afternoon\nSouthern bays, inland villages and long beaches', hotel: 'Mykonos island hotel', highlights: ['Breakfast, then into the old town on foot', 'Whitewashed lanes, bougainvillea and the windmills', 'An island circuit by coach in the afternoon'] },
    { title: 'Day 5: A free day on Mykonos (B)', text: 'Breakfast, then the whole day yours\nOptional: the boat across to ancient Delos\nOptional: a swim at Platis Gialos or Paradise beach\nOptional: a late lunch at a harbour taverna', hotel: 'Mykonos island hotel', highlights: ['Breakfast, then the whole day yours', 'Optional: the boat across to ancient Delos', 'Optional: a swim at Platis Gialos or Paradise beach'] },
    { title: 'Day 6: Back to Athens (B)', text: 'Breakfast and check out for the return crossing\nThe ferry back to Piraeus and a transfer to your hotel\nThe afternoon free in the Plaka quarter\nPastel houses, bougainvillea and the rock above you', hotel: 'Athens city hotel', highlights: ['Breakfast and check out for the return crossing', 'The ferry back to Piraeus and a transfer to your hotel', 'The afternoon free in the Plaka quarter'] },
    { title: 'Day 7: Departure from Athens (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Athens International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Athens International for your flight home'] }
  ],
  outro: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are named on confirmation: the operator quotes a standard class rather than fixed properties.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Europe', href: '/europe' },
  { label: 'Greece', href: '/europe/greece' },
  { label: detail.title }
];

export const enchantingGreeceAthensMykonosBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const enchantingGreeceAthensMykonosProduct = {
  slug: detail.slug,
  places: ['Athens', 'Mykonos'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 3,
  hotels: 3,
  cities: 2,
  activities: 4,
  transfers: 8,
  meals: 6,
  price: detail.price,
  images: cardImages
};
