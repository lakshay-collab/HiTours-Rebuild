// Classic Krabi and Phuket Holiday. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('2kxr2vxpxsk31qlbqaxlxfwulxif_shutterstock_1114284335.jpg'),
  img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg'),
  img('fbe59bwca0qjbwkqug0bm4fagkp8_shutterstock_394854601-min.jpg'),
  img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg'),
  img('85coxuo6jf2r4e35epvg592l0gn6_shutterstock_2172918973-min.jpg'),
  img('nl697ledztoenvi45t7u86mnkm6v_shutterstock_2337247967%20(1)%20(1).jpg'),
  img('g00n2o6s2013n9ufu4d5m073o5fr_shutterstock_658385155-min%20(1).jpg'),
  img('umnq4yyhbbiotdz92vz7xwlhhhgl_shutterstock_1515443948-min.jpg'),
  img('myp0svt552xqngaztwvvsb6ugnaj_shutterstock_740293555.jpg'),
  img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Krabi',
    dayLabel: 'Day 1 to 2',
    images: [
      img('2kxr2vxpxsk31qlbqaxlxfwulxif_shutterstock_1114284335.jpg'),
      img('g00n2o6s2013n9ufu4d5m073o5fr_shutterstock_658385155-min%20(1).jpg'),
      img('pru9lbfjag7aglyp59b91ovwja5j_shutterstock_1710737992.jpg'),
      img('fbe59bwca0qjbwkqug0bm4fagkp8_shutterstock_394854601-min.jpg')
    ],
    dayImages: {
      1: [
        img('qdftgwbjn1hstbew4ukv8f3gpaa6_1552225709_shutterstock_1313447231.jpg'),
        img('mwn961gwbea3uab9x4k1hs2yf3cr_1552284043_Screen_Shot_2017-10-02_at_4.17.57_PM.png'),
        img('zrgoy650csioyvsmait1towl641r_1552282631_e7f67f54ad218b5e81fcb861171c1f2e.jpg'),
        img('2kxr2vxpxsk31qlbqaxlxfwulxif_shutterstock_1114284335.jpg')
      ],
      2: [
        img('to8jo7wc7mxmbgiq0o1ew9wvo5va_shutterstock_2264861337.jpg'),
        img('rt5uovc0zbqf6uk001aib0eluclg_1551088163_maxresdefault_(2).jpg'),
        img('ftmjlf4ozjzfkbsr6lrrux9aa2yy_1551087923_island-26.jpg'),
        img('dyq7wlnu8wksdjgpv9zcxy47b9zh_1463033673_7448089582_2b0ec2c665_b.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and on to Krabi`,
      'Arrival at Phuket International Airport and private sedan transfer on to Krabi',
      'Check in at Timber House in Ao Nang and settle in',
      'Optional: the Emerald Pool, the Ao Luk mangroves or Klong Thom hot springs',
      `${DAY_MARK}Day 2 · Krabi 4 Islands by speedboat`,
      'Breakfast, then shared transfer to the Ao Nang pier',
      'Speedboat transfer out to Koh Poda, Tup island and Chicken island',
      'Snorkel the shallows and stop at Phra Nang beach, lunch box on board',
      'Return shared transfer to your hotel in the afternoon'
    ],
    accommodation: {
      name: 'Timber House Resort, Krabi, Krabi',
      description: '2 nights · Breakfast included · Deluxe room · 3★ · Timber House in Ao Nang, close to the beach road',
      images: [
        img('514r4x35px0pz9xnf7jfoyz9aked_6f1154f0920f11e7ae5d0a4cef95d023.png'),
        img('nr1r0wysopq47d8uua7k3n1bfiv8_6c3c8664920f11e7ae5d0a4cef95d023.png'),
        img('ekpbeillfaguda7fct005jehv0xs_6c654536920f11e78d7d025f77df004f.png'),
        img('gz2yl1b2whrgrvvf6t5cxepgtj4p_6cf0e104920f11e7ae5d0a4cef95d023.png'),
        img('1mst5ng1b9olzadro2452aks0xay_6d1b84b8920f11e7b9140a4cef95d023.png'),
        img('47vmw73i4dfrt7gunbvy9tou9z39_7eef47e2999211e9b65f0242ac11000a.png'),
        img('4hxnxlbcazw48z8m562ho3uwsipj_6f3f5af8920f11e78b59025f77df004f.png'),
        img('fz6idd01eep433k9ownky2kwv518_6c57b1e6920f11e788c50a4cef95d023.png'),
        img('e7ozwa0qi9tx3aavgx5duxvr1kro_6e596d9a920f11e7ae5d0a4cef95d023.png'),
        img('k2bur11omn14f4nc9n48h6wj67sr_6dd2b638920f11e79385025f77df004f.png'),
        img('4z7tm2y02cmacm4k2d75sfk94nnp_6e8d6ec4920f11e78b59025f77df004f.png'),
        img('zm8b2qv7wws42kotwiefusb1ho9r_7eebf628999211e9bd080242ac110002.png'),
        img('qxl4ushmkktcj8kntih7je2oltgs_6d165da8920f11e788c50a4cef95d023.png'),
        img('5tnyumd6a5aslsag35xymlzb796b_6fdeb7f6920f11e78d7d025f77df004f.png')
      ]
    },
    activities: [
      {
        name: 'Krabi 4 Islands by Speedboat',
        day: 2,
        optional: false,
        image: img('to8jo7wc7mxmbgiq0o1ew9wvo5va_shutterstock_2264861337.jpg'),
        description: 'A speedboat day across Koh Poda, Tup island and Chicken island, with snorkelling, Phra Nang beach and a lunch box on board.'
      },
      {
        name: 'The Emerald Pool',
        day: 1,
        optional: true,
        image: img('qdftgwbjn1hstbew4ukv8f3gpaa6_1552225709_shutterstock_1313447231.jpg'),
        description: 'A spring fed pool in the Khao Phra Bang Khram forest inland from Krabi, clear green and warm all year.'
      },
      {
        name: 'Klong Thom Hot Springs',
        day: 1,
        optional: true,
        image: img('zrgoy650csioyvsmait1towl641r_1552282631_e7f67f54ad218b5e81fcb861171c1f2e.jpg'),
        description: 'Warm water running over smooth rock into forest pools, usually paired with the Emerald Pool on the same drive.'
      }
    ],
    program: {
      name: 'Ao Nang and the 4 Islands',
      description: 'Two nights under the Ao Nang cliffs with a speedboat tour of Koh Poda, Tup island, Chicken island and Phra Nang beach.',
      image: img('2kxr2vxpxsk31qlbqaxlxfwulxif_shutterstock_1114284335.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Phuket',
    dayLabel: 'Day 3 to 7',
    images: [
      img('uhyclhw5d3ngfvigxaavcrl0getu_shutterstock_1111881161%20(1).jpg'),
      img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg'),
      img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg'),
      img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg')
    ],
    dayImages: {
      3: [
        img('n1mxrcrn6we3fpayzfl5wwlq5gd5_35155433276_a7a0df4751_o.jpg'),
        img('awq9ode41purq52jf9k57w93ocy5_umbb0ryypnggnpqg4yafakrvx45n_1560598714_raya1.jpg.jfif'),
        img('q95sywvuokettt60rnf7jwofx4xk_1463385168_Thalang20337-1038x5761.jpg'),
        img('uhyclhw5d3ngfvigxaavcrl0getu_shutterstock_1111881161%20(1).jpg')
      ],
      4: [
        img('qtfqjk6vmzm6n3qo4wqm60dsswuk_phuket.jpg'),
        img('0aehywgij1ieurhvsiwdwlfgx98k_36371281724_a12a505647_o.jpg'),
        img('495y5x6h2qo8ln8v8etzufhkt5h0_shutterstock_1283102005.jpg'),
        img('ggq5dfnyssg392eaitpapwop1gpe_4306254299_2cedb10a52_o.jpg')
      ],
      5: [
        img('hpa4azp4say5a7xk7is7cvzn1v0m_dl.beatsnoop.com-R0BH6SMQ7h.jpg'),
        img('v6a17443ovp0a99j7nc95113gafl_1462975119_8082854403_dc5d2a88e5_o.jpg'),
        img('6kv2if7t8tqqp0ait2c0j5r8fm3h_shutterstock_176838932.jpg'),
        img('3mfwxmvwud1iv4bo1l0uihm5omzw_1627129752_shutterstock_1140016289_(2).jpg')
      ],
      6: [
        img('lknez6qnnfbvw2yujulecml5egsj_1579855096_shutterstock_1265137084.jpg'),
        img('wo25xea1v2xqfmkfuacy9hm3cd48_17346039968_40ac000ab9_o.jpg'),
        img('3rcqywg77boav06oh5rz5criksvz_shutterstock_2080788463.jpg'),
        img('xszu4dyb1z9f678sjpq5oywf4wkb_1463046136_3084521736_b7cddfa74a_o.jpg')
      ],
      7: [
        img('uhyclhw5d3ngfvigxaavcrl0getu_shutterstock_1111881161%20(1).jpg'),
        img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg'),
        img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg'),
        img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · On to Phuket`,
      'Breakfast, check out and private sedan transfer by road to Phuket',
      'Check in at Club Bamboo in Patong for the next four nights',
      'Afternoon free on the beach or beside the pool',
      'Optional: Freedom Beach by long tail boat or Wat Srisoonthorn',
      `${DAY_MARK}Day 4 · Phuket city tour`,
      'Breakfast, then shared transfer for the Phuket city tour',
      'Wat Chalong, Old Phuket Town and Karon viewpoint over the three bays',
      'Back by mid afternoon with the evening free',
      `${DAY_MARK}Day 5 · Phi Phi islands by speedboat`,
      'Breakfast, then shared transfer down to the Phuket pier',
      'Speedboat transfer out to the Phi Phi group for the whole day',
      'Maya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, with lunch',
      'Return speedboat and shared transfer to Patong in the evening',
      `${DAY_MARK}Day 6 · A free day in Phuket`,
      'Breakfast, then a full day with nothing at all booked',
      'Optional: Kata beach, Banana beach or quiet Tri Trang beach',
      'Optional: an evening along Bangla Road',
      `${DAY_MARK}Day 7 · Departure`,
      'Breakfast and an unhurried check out',
      'Private sedan transfer to Phuket International Airport'
    ],
    accommodation: {
      name: 'Club Bamboo Boutique Resort & Spa, Phuket',
      description: '4 nights · Breakfast included · Deluxe room · 3★ · Club Bamboo in Patong, a short walk from the beach',
      images: [
        img('aw0j2zdkhsshjpwh8n6fink5h7xx_club-bamboo-boutique.jpg'),
        img('ao8b9sp0qq4boyrp2ble3sggg58g_209361068.jpg'),
        img('0fbjsav4ijrstks2y9tgmmro1gzv_61745490.jpg'),
        img('xfi4hof95zgq9rz9y5nfx654xtw1_Club-Bamboo-Superior-Room-5.jpg'),
        img('791r10d8c7lnts4rj1muegtve0x5_209360949.jpg'),
        img('whle8k4efwxwjk5s018woh00r05r_244597929.jpg'),
        img('eg6fo5l52jxxi0jjbfr6dd5jy4sj_Club-Bamboo-Superior-Room-3.jpg'),
        img('6eudibm2fkxh364k5chi72n9r9ls_210189658.jpg'),
        img('jwkjc9aatk4qwwo40091aodp8qc8_209250892.jpg'),
        img('3wyfnirdo8kt6c4ch9khjymhah9n_209360940.jpg'),
        img('37nfc1qsewfh7x7jdybh37fwlu38_210532395.jpg')
      ]
    },
    activities: [
      {
        name: 'Phuket City Tour',
        day: 4,
        optional: false,
        image: img('qtfqjk6vmzm6n3qo4wqm60dsswuk_phuket.jpg'),
        description: 'A half day run through Wat Chalong, the painted shophouse streets of Old Phuket Town and Karon viewpoint.'
      },
      {
        name: 'Phi Phi Islands by Speedboat',
        day: 5,
        optional: false,
        image: img('hpa4azp4say5a7xk7is7cvzn1v0m_dl.beatsnoop.com-R0BH6SMQ7h.jpg'),
        description: 'A full day across the Phi Phi group with Maya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, and lunch on the tour.'
      },
      {
        name: 'Kata Beach',
        day: 6,
        optional: true,
        image: img('wo25xea1v2xqfmkfuacy9hm3cd48_17346039968_40ac000ab9_o.jpg'),
        description: 'A quieter curve of sand south of Patong, good for swimming and a short ride from the hotel.'
      },
      {
        name: 'Banana Beach',
        day: 6,
        optional: true,
        image: img('3rcqywg77boav06oh5rz5criksvz_shutterstock_2080788463.jpg'),
        description: 'A small bay on the north west coast with calm water and shade, reached down a steep track off the main road.'
      }
    ],
    program: {
      name: 'Patong, the old town and Phi Phi',
      description: 'Four nights in Patong with a city tour, a full day at the Phi Phi islands and a last day left completely open.',
      image: img('uhyclhw5d3ngfvigxaavcrl0getu_shutterstock_1111881161%20(1).jpg')
    }
  }
];

const detail = {
  slug: 'classic-krabi-and-phuket-holiday',
  ctaHref: '/l/thailand/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Classic Krabi and Phuket Holiday',
  alt: 'Long tail boats on the sand at Ao Nang beach below the Krabi cliffs',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Private sedan transfers with shared tours and speedboat crossings',
  tag: 'Beach',
  tags: ['Beach', 'Family'],
  price: 50112,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Krabi', 'Phuket', 'Phi Phi Islands'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 3, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['12 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ananya Iyer',
    image: '/team/asia-2.webp',
    role: 'Thailand expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Krabi first, then four nights in Phuket. The last day is deliberately empty so you leave rested.',
    quoteMore: 'Land in Phuket and drive straight to Krabi while you are still fresh. Keep the 4 Islands tour and the Phi Phi tour apart by a day, as both are long on the water.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days on the Andaman coast. Two nights in Ao Nang with the Krabi 4 Islands tour, then four nights in Patong with a Phuket city tour, a Phi Phi island day and a final day with nothing booked.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights in Krabi and Phuket with daily breakfast; Krabi 4 Islands speedboat tour with a lunch box; Phuket city tour; Phi Phi islands speedboat tour with lunch; 12 airport, intercity and sightseeing transfers.',
  intro2: 'Not included: international flights; visa charges; travel insurance; island and temple entry fees; meals other than those listed; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and on to Krabi (Arrival)', text: 'Arrival at Phuket International Airport and private sedan transfer on to Krabi\nCheck in at Timber House in Ao Nang and settle in\nOptional: the Emerald Pool, the Ao Luk mangroves or Klong Thom hot springs', hotel: 'Timber House Resort, Krabi', highlights: ['Arrival at Phuket International Airport and private sedan transfer on to Krabi', 'Check in at Timber House in Ao Nang and settle in', 'Optional: the Emerald Pool, the Ao Luk mangroves or Klong Thom hot springs'] },
    { title: 'Day 2: Krabi 4 Islands by speedboat (B, L)', text: 'Breakfast, then shared transfer to the Ao Nang pier\nSpeedboat transfer out to Koh Poda, Tup island and Chicken island\nSnorkel the shallows and stop at Phra Nang beach, lunch box on board\nReturn shared transfer to your hotel in the afternoon', hotel: 'Timber House Resort, Krabi', highlights: ['Breakfast, then shared transfer to the Ao Nang pier', 'Speedboat transfer out to Koh Poda, Tup island and Chicken island', 'Snorkel the shallows and stop at Phra Nang beach, lunch box on board'] },
    { title: 'Day 3: On to Phuket (B)', text: 'Breakfast, check out and private sedan transfer by road to Phuket\nCheck in at Club Bamboo in Patong for the next four nights\nAfternoon free on the beach or beside the pool\nOptional: Freedom Beach by long tail boat or Wat Srisoonthorn', hotel: 'Club Bamboo Boutique Resort & Spa', highlights: ['Breakfast, check out and private sedan transfer by road to Phuket', 'Check in at Club Bamboo in Patong for the next four nights', 'Afternoon free on the beach or beside the pool'] },
    { title: 'Day 4: Phuket city tour (B)', text: 'Breakfast, then shared transfer for the Phuket city tour\nWat Chalong, Old Phuket Town and Karon viewpoint over the three bays\nBack by mid afternoon with the evening free', hotel: 'Club Bamboo Boutique Resort & Spa', highlights: ['Breakfast, then shared transfer for the Phuket city tour', 'Wat Chalong, Old Phuket Town and Karon viewpoint over the three bays', 'Back by mid afternoon with the evening free'] },
    { title: 'Day 5: Phi Phi islands by speedboat (B, L)', text: 'Breakfast, then shared transfer down to the Phuket pier\nSpeedboat transfer out to the Phi Phi group for the whole day\nMaya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, with lunch\nReturn speedboat and shared transfer to Patong in the evening', hotel: 'Club Bamboo Boutique Resort & Spa', highlights: ['Breakfast, then shared transfer down to the Phuket pier', 'Speedboat transfer out to the Phi Phi group for the whole day', 'Maya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, with lunch'] },
    { title: 'Day 6: A free day in Phuket (B)', text: 'Breakfast, then a full day with nothing at all booked\nOptional: Kata beach, Banana beach or quiet Tri Trang beach\nOptional: an evening along Bangla Road', hotel: 'Club Bamboo Boutique Resort & Spa', highlights: ['Breakfast, then a full day with nothing at all booked', 'Optional: Kata beach, Banana beach or quiet Tri Trang beach', 'Optional: an evening along Bangla Road'] },
    { title: 'Day 7: Departure (B)', text: 'Breakfast and an unhurried check out\nPrivate sedan transfer to Phuket International Airport', hotel: 'Departure', highlights: ['Breakfast and an unhurried check out', 'Private sedan transfer to Phuket International Airport'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; island and temple entry fees; meals other than those listed; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Thailand', href: '/asien/thailand' },
  { label: detail.title }
];

export const classicKrabiPhuketHolidayBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const classicKrabiPhuketHolidayProduct = {
  slug: detail.slug,
  places: stops.map((s) => s.name),
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 3,
  transfers: 12,
  meals: 8,
  price: detail.price,
  images: cardImages
};
