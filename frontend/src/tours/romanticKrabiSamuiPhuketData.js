// Romantic Krabi, Koh Samui and Phuket. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg'),
  img('2kxr2vxpxsk31qlbqaxlxfwulxif_shutterstock_1114284335.jpg'),
  img('0h1vvi2l2j5ukteevblc9rifyj3n_shutterstock_406440082.jpg'),
  img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg'),
  img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg'),
  img('xf4ja2z7pa5m0rtqxup6gr50qyj9_shutterstock_2172676377-min.jpg'),
  img('ezxz70swo9zrybv8o8pus5c6klaf_shutterstock_2090520271.jpg'),
  img('wgw28loe37wumwa59avtvzp7gcn4_shutterstock_2253884321.jpg'),
  img('uhyclhw5d3ngfvigxaavcrl0getu_shutterstock_1111881161%20(1).jpg'),
  img('pru9lbfjag7aglyp59b91ovwja5j_shutterstock_1710737992.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Phuket',
    dayLabel: 'Day 1',
    images: [
      img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg'),
      img('uhyclhw5d3ngfvigxaavcrl0getu_shutterstock_1111881161%20(1).jpg'),
      img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg'),
      img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg')
    ],
    dayImages: {
      1: [
        img('u0pqsdaxi1xf5pmykhedhlviy06o_14599612777_e3275ab36b_o.jpg'),
        img('2rrjqomoqtud4m8nis9ysmyculem_Phuket%20Bird%20Park.webp'),
        img('goahiuvxilncq43ac8db0v0rl8ac_shutterstock_394497928.jpg'),
        img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Phuket`,
      'Arrival at Phuket International Airport and private sedan transfer to Patong',
      'Check in at Club Bamboo for one night and unwind',
      'Optional: the Big Buddha on Nakkerd hill or the Phuket FantaSea show'
    ],
    accommodation: {
      name: 'Club Bamboo Boutique Resort & Spa, Phuket',
      description: '1 night · Breakfast included · Deluxe room · 3★ · Club Bamboo in Patong, a short walk from the beach',
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
        name: 'Phuket Big Buddha',
        day: 1,
        optional: true,
        image: img('u0pqsdaxi1xf5pmykhedhlviy06o_14599612777_e3275ab36b_o.jpg'),
        description: 'A white marble Buddha on Nakkerd hill with views over Chalong bay and Kata on a clear afternoon.'
      },
      {
        name: 'Phuket FantaSea Show',
        day: 1,
        optional: true,
        image: img('goahiuvxilncq43ac8db0v0rl8ac_shutterstock_394497928.jpg'),
        description: 'A large stage show on Thai myth with elephants, acrobatics and a buffet hall, out at Kamala beach.'
      }
    ],
    program: {
      name: 'One night to land and settle',
      description: 'A single night in Patong to shake off the flight, with the beach close enough to walk to before dinner.',
      image: img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Krabi',
    dayLabel: 'Day 2 to 3',
    images: [
      img('knpt0tp5t6sd970nzjivyl0p9zvq_shutterstock_1090315565.jpg'),
      img('2kxr2vxpxsk31qlbqaxlxfwulxif_shutterstock_1114284335.jpg'),
      img('g00n2o6s2013n9ufu4d5m073o5fr_shutterstock_658385155-min%20(1).jpg'),
      img('pru9lbfjag7aglyp59b91ovwja5j_shutterstock_1710737992.jpg')
    ],
    dayImages: {
      2: [
        img('dp6g8cre788anal2l10ylpwej48u_1555911053_shutterstock_1134985199.jpg'),
        img('xei5626zpmtpca4kmfo4cb2kayxw_1552285067_Elephant_Trekking_in_Thailand.jpg'),
        img('ozbjx414ocqs9g01xsbryegaq67x_29165073020_769fcbfae9_o.jpg'),
        img('knpt0tp5t6sd970nzjivyl0p9zvq_shutterstock_1090315565.jpg')
      ],
      3: [
        img('to8jo7wc7mxmbgiq0o1ew9wvo5va_shutterstock_2264861337.jpg'),
        img('rt5uovc0zbqf6uk001aib0eluclg_1551088163_maxresdefault_(2).jpg'),
        img('ftmjlf4ozjzfkbsr6lrrux9aa2yy_1551087923_island-26.jpg'),
        img('dyq7wlnu8wksdjgpv9zcxy47b9zh_1463033673_7448089582_2b0ec2c665_b.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · On to Krabi`,
      'Breakfast, check out and private sedan transfer by road to Krabi',
      'Check in at Timber House in Ao Nang, under the limestone cliffs',
      'Afternoon free along the beach road and on the sand',
      'Optional: Tiger Cave temple, an elephant sanctuary or the night market',
      `${DAY_MARK}Day 3 · Krabi 4 Islands by speedboat`,
      'Breakfast, then shared transfer to the Ao Nang pier',
      'Speedboat transfer out to Koh Poda, Tup island and Chicken island',
      'Snorkel the shallows, walk the sand bar and stop at Phra Nang beach',
      'Lunch box on the boat, then a shared transfer back to your hotel'
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
        day: 3,
        optional: false,
        image: img('to8jo7wc7mxmbgiq0o1ew9wvo5va_shutterstock_2264861337.jpg'),
        description: 'A speedboat day across Koh Poda, Tup island and Chicken island, with snorkelling, Phra Nang beach and a lunch box on board.'
      },
      {
        name: 'Tiger Cave Temple',
        day: 2,
        optional: true,
        image: img('ozbjx414ocqs9g01xsbryegaq67x_29165073020_769fcbfae9_o.jpg'),
        description: 'Wat Tham Suea, with over twelve hundred steps up to a golden Buddha and a long view across the Krabi plain.'
      },
      {
        name: 'Krabi Elephant Sanctuary',
        day: 2,
        optional: true,
        image: img('xei5626zpmtpca4kmfo4cb2kayxw_1552285067_Elephant_Trekking_in_Thailand.jpg'),
        description: 'A no riding sanctuary inland from Ao Nang where you feed and walk with rescued elephants alongside their keepers.'
      }
    ],
    program: {
      name: 'Cliffs, islands and quiet evenings',
      description: 'Two nights in Ao Nang with a speedboat tour of the 4 Islands and evenings on the beach road.',
      image: img('knpt0tp5t6sd970nzjivyl0p9zvq_shutterstock_1090315565.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Koh Samui',
    dayLabel: 'Day 4 to 5',
    images: [
      img('zfufmlme2f3a44qw91thxjln52wn_shutterstock_1797497632.jpg'),
      img('ezxz70swo9zrybv8o8pus5c6klaf_shutterstock_2090520271.jpg'),
      img('0h1vvi2l2j5ukteevblc9rifyj3n_shutterstock_406440082.jpg'),
      img('2zpq4fa4vvvgrj3tzt28iw9j0squ_shutterstock_2324766599%20(1).jpg')
    ],
    dayImages: {
      4: [
        img('njhp2o1nraijqoqmk79b7bea93jj_1554916268_23943_og_1.jpeg'),
        img('lple13ito1icrfd7gvub3vtwdhnh_1555492653_views-on-koh-samui.jpg.optimal.jpg'),
        img('akyzr0n4tb4fu8su6yzo20nsynzr_1555489674_shutterstock_760663750.jpg'),
        img('zfufmlme2f3a44qw91thxjln52wn_shutterstock_1797497632.jpg')
      ],
      5: [
        img('rhb73iq754sfw03q4ojcx1r5juts_1554900436_big-bhudda-koi-sumui.jpg'),
        img('se8q57fnbwtkktiufxjsgisvb8xk_1555488717_shutterstock_554125543.jpg'),
        img('d4dhfjms2qdxf0hyqglbge7aw2d1_1554904766_Fishermans-Village-Samui.png'),
        img('qjekh59bnk9oblbcods20nvhhiez_1555488998_shutterstock_1246975717.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Ferry to Koh Samui`,
      'Breakfast, check out and shared transfer to the ferry terminal',
      'Ferry transfer across to Koh Samui, then on to Chaweng',
      'Check in at Montien House, set back from the beach among palms',
      'Optional: Lad Koh viewpoint, Wat Sila Ngu or the Laem Sor pagoda',
      `${DAY_MARK}Day 5 · Koh Samui at leisure`,
      'Breakfast, then a full day with nothing at all booked',
      'Optional: the Big Buddha temple and the Hin Ta and Hin Yai rocks',
      'Optional: a boat day out to the Ang Thong marine park',
      'Fisherman\'s Village at Bophut is the nicest spot for dinner'
    ],
    accommodation: {
      name: 'Montien House, Koh Samui',
      description: '2 nights · Breakfast included · Deluxe room · 3★ · Montien House among palms behind Chaweng beach',
      images: [
        img('xirlawwor2gfrtjlru9i0a5iw6o0_download%20(1).jpg'),
        img('w5ow5d80tycyt1dpteyki4lrmbv2_download%20(2).jpg'),
        img('t5pbjuqs7ddynpj2kjghghmpiv22_download%20(9).jpg'),
        img('t99oq2sr4npt392p9m1ofb9xj0pr_download%20(4).jpg'),
        img('8qhpiksqr2ymcigs1yq4oaimlbgq_download%20(8).jpg'),
        img('hnx32by8f1bqvlkoxxnav9p63tlg_download%20(11).jpg'),
        img('90ify2x6ttp92cb2ywfjqo6r2l3l_download%20(10).jpg'),
        img('c8bt2u7d15o0z1yxobw5jkuou416_download%20(5).jpg'),
        img('ugqj1naiqzinfh9d11gzsw7unzfv_download%20(7).jpg'),
        img('ka9kdtg2r59n3ospa8w5h4m8ah6l_download%20(6).jpg'),
        img('3vvalj2z2s2uz2phetdlej9sxdmz_download%20(12).jpg'),
        img('ew6m3jvcdwptk6vjok4c7kayohco_download%20(3).jpg')
      ]
    },
    activities: [
      {
        name: 'Big Buddha Temple',
        day: 5,
        optional: true,
        image: img('rhb73iq754sfw03q4ojcx1r5juts_1554900436_big-bhudda-koi-sumui.jpg'),
        description: 'Wat Phra Yai on its small island, reached by causeway, with a golden seated Buddha looking out over the sea.'
      },
      {
        name: 'Ang Thong Marine Park',
        day: 5,
        optional: true,
        image: img('se8q57fnbwtkktiufxjsgisvb8xk_1555488717_shutterstock_554125543.jpg'),
        description: 'A boat day out to forty two islands with a hidden lagoon, snorkelling stops and a viewpoint climb on Koh Wua Talap.'
      },
      {
        name: 'Fisherman\'s Village',
        day: 5,
        optional: true,
        image: img('d4dhfjms2qdxf0hyqglbge7aw2d1_1554904766_Fishermans-Village-Samui.png'),
        description: 'Old wooden shophouses at Bophut turned into cafes and bars, with a walking street market on Friday evenings.'
      }
    ],
    program: {
      name: 'Two slow days on Samui',
      description: 'Nothing booked on the island. Chaweng beach on the doorstep, temples and viewpoints on the ring road when you feel like moving.',
      image: img('zfufmlme2f3a44qw91thxjln52wn_shutterstock_1797497632.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Phuket',
    dayLabel: 'Day 6 to 7',
    images: [
      img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg'),
      img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg'),
      img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg'),
      img('q0rofzuv74wu1axaon9rmkcob0jh_shutterstock_448476727.jpg')
    ],
    dayImages: {
      6: [
        img('u435b4jdyx17w5m20t1395p73pis_9613826184_ba3186465a_o.jpg'),
        img('0aehywgij1ieurhvsiwdwlfgx98k_36371281724_a12a505647_o.jpg'),
        img('ggq5dfnyssg392eaitpapwop1gpe_4306254299_2cedb10a52_o.jpg'),
        img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg')
      ],
      7: [
        img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg'),
        img('uhyclhw5d3ngfvigxaavcrl0getu_shutterstock_1111881161%20(1).jpg'),
        img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg'),
        img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Back to Phuket`,
      'Breakfast, check out and shared transfer to the Samui pier',
      'Ferry transfer back across to Phuket and on to Patong',
      'Check in for the last night and take the afternoon slowly',
      'Optional: sunset at Promthep Cape, Wat Chalong or Karon viewpoint',
      `${DAY_MARK}Day 7 · Departure`,
      'Breakfast and an unhurried check out',
      'Private sedan transfer to Phuket International Airport'
    ],
    accommodation: {
      name: 'Club Bamboo Boutique Resort & Spa, Phuket',
      description: '1 night · Breakfast included · Deluxe room · 3★ · Back at Club Bamboo in Patong for the final night',
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
        name: 'Sunset at Promthep Cape',
        day: 6,
        optional: true,
        image: img('u435b4jdyx17w5m20t1395p73pis_9613826184_ba3186465a_o.jpg'),
        description: 'The southern tip of Phuket, where the headland drops into the sea and the sunset draws a crowd every evening.'
      },
      {
        name: 'Wat Chalong',
        day: 6,
        optional: true,
        image: img('0aehywgij1ieurhvsiwdwlfgx98k_36371281724_a12a505647_o.jpg'),
        description: 'Phuket\'s largest temple, gilded and tiled, with a pagoda holding a splinter of bone relic on the top floor.'
      },
      {
        name: 'Karon View Point',
        day: 6,
        optional: true,
        image: img('ggq5dfnyssg392eaitpapwop1gpe_4306254299_2cedb10a52_o.jpg'),
        description: 'The classic three bay lookout over Kata Noi, Kata and Karon on the road south from Patong.'
      }
    ],
    program: {
      name: 'A last Phuket night',
      description: 'Back across from Samui for a final evening, with the west coast viewpoints close by for a last sunset.',
      image: img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg')
    }
  }
];

const detail = {
  slug: 'romantic-krabi-koh-samui-and-phuket',
  ctaHref: '/l/thailand/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Romantic Krabi, Koh Samui and Phuket',
  alt: 'Limestone cliffs and clear shallow water at Ao Nang beach in Krabi',
  days: '7 days / 6 nights',
  stations: '4 stops',
  transport: 'Private and shared transfers with speedboat and ferry crossings',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Beach'],
  price: 41799,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuket', 'Krabi', 'Koh Samui'],
  stats: { days: 7, cities: 3, hotels: 3, activities: 1, transfers: 14 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['1 experience', 'Activities'],
    ['14 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ananya Iyer',
    image: '/team/asia-2.webp',
    role: 'Thailand expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'One booked tour in six nights. Couples who want long mornings and no schedule usually pick this one.',
    quoteMore: 'Ask for a top floor room at Timber House so you get the cliffs from the balcony. On Samui, dinner at Fisherman\'s Village in Bophut is worth the short ride from Chaweng.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days for two across three Thai beaches. A night to land in Phuket, two under the cliffs of Ao Nang with the Krabi 4 Islands tour, two slow days on Koh Samui and a final Phuket night, with most of the time left free.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights in 3 hotels with daily breakfast; Krabi 4 Islands speedboat tour with a lunch box; 14 airport, intercity and island transfers including the Samui ferry crossings both ways; visa assistance.',
  intro2: 'Not included: international flights; visa charges; travel insurance; temple and park entry fees; lunches and dinners other than the island tour lunch box; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuket (Arrival)', text: 'Arrival at Phuket International Airport and private sedan transfer to Patong\nCheck in at Club Bamboo for one night and unwind\nOptional: the Big Buddha on Nakkerd hill or the Phuket FantaSea show', hotel: 'Club Bamboo Boutique Resort & Spa', highlights: ['Arrival at Phuket International Airport and private sedan transfer to Patong', 'Check in at Club Bamboo for one night and unwind', 'Optional: the Big Buddha on Nakkerd hill or the Phuket FantaSea show'] },
    { title: 'Day 2: On to Krabi (B)', text: 'Breakfast, check out and private sedan transfer by road to Krabi\nCheck in at Timber House in Ao Nang, under the limestone cliffs\nAfternoon free along the beach road and on the sand\nOptional: Tiger Cave temple, an elephant sanctuary or the night market', hotel: 'Timber House Resort, Krabi', highlights: ['Breakfast, check out and private sedan transfer by road to Krabi', 'Check in at Timber House in Ao Nang, under the limestone cliffs', 'Afternoon free along the beach road and on the sand'] },
    { title: 'Day 3: Krabi 4 Islands by speedboat (B, L)', text: 'Breakfast, then shared transfer to the Ao Nang pier\nSpeedboat transfer out to Koh Poda, Tup island and Chicken island\nSnorkel the shallows, walk the sand bar and stop at Phra Nang beach\nLunch box on the boat, then a shared transfer back to your hotel', hotel: 'Timber House Resort, Krabi', highlights: ['Breakfast, then shared transfer to the Ao Nang pier', 'Speedboat transfer out to Koh Poda, Tup island and Chicken island', 'Snorkel the shallows, walk the sand bar and stop at Phra Nang beach'] },
    { title: 'Day 4: Ferry to Koh Samui (B)', text: 'Breakfast, check out and shared transfer to the ferry terminal\nFerry transfer across to Koh Samui, then on to Chaweng\nCheck in at Montien House, set back from the beach among palms\nOptional: Lad Koh viewpoint, Wat Sila Ngu or the Laem Sor pagoda', hotel: 'Montien House', highlights: ['Breakfast, check out and shared transfer to the ferry terminal', 'Ferry transfer across to Koh Samui, then on to Chaweng', 'Check in at Montien House, set back from the beach among palms'] },
    { title: 'Day 5: Koh Samui at leisure (B)', text: 'Breakfast, then a full day with nothing at all booked\nOptional: the Big Buddha temple and the Hin Ta and Hin Yai rocks\nOptional: a boat day out to the Ang Thong marine park\nFisherman\'s Village at Bophut is the nicest spot for dinner', hotel: 'Montien House', highlights: ['Breakfast, then a full day with nothing at all booked', 'Optional: the Big Buddha temple and the Hin Ta and Hin Yai rocks', 'Optional: a boat day out to the Ang Thong marine park'] },
    { title: 'Day 6: Back to Phuket (B)', text: 'Breakfast, check out and shared transfer to the Samui pier\nFerry transfer back across to Phuket and on to Patong\nCheck in for the last night and take the afternoon slowly\nOptional: sunset at Promthep Cape, Wat Chalong or Karon viewpoint', hotel: 'Club Bamboo Boutique Resort & Spa', highlights: ['Breakfast, check out and shared transfer to the Samui pier', 'Ferry transfer back across to Phuket and on to Patong', 'Check in for the last night and take the afternoon slowly'] },
    { title: 'Day 7: Departure (B)', text: 'Breakfast and an unhurried check out\nPrivate sedan transfer to Phuket International Airport', hotel: 'Departure', highlights: ['Breakfast and an unhurried check out', 'Private sedan transfer to Phuket International Airport'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; temple and park entry fees; lunches and dinners other than the island tour lunch box; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Thailand', href: '/asien/thailand' },
  { label: detail.title }
];

export const romanticKrabiSamuiPhuketBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const romanticKrabiSamuiPhuketProduct = {
  slug: detail.slug,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 4,
  hotels: 3,
  cities: 3,
  activities: 1,
  transfers: 14,
  meals: 7,
  price: detail.price,
  images: cardImages
};
