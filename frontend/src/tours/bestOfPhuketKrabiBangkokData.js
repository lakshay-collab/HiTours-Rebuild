// Best of Phuket, Krabi and Bangkok. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('pru9lbfjag7aglyp59b91ovwja5j_shutterstock_1710737992.jpg'),
  img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg'),
  img('t9w8mxfvt7ol6qqqq7jzea3aa2o4_shutterstock_268422755.jpg'),
  img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg'),
  img('myp0svt552xqngaztwvvsb6ugnaj_shutterstock_740293555.jpg'),
  img('hyo0p91rzm8fip6pea4ixwjmonyo_shutterstock_1793108161.jpg'),
  img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg'),
  img('knpt0tp5t6sd970nzjivyl0p9zvq_shutterstock_1090315565.jpg'),
  img('n0twhi7ong2znp7u8ifv5gk22d9h_shutterstock_449998630.jpg'),
  img('zi12xgzjqrbv9gxjwy7w02yuczmb_shutterstock_1828092353-min.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Phuket',
    dayLabel: 'Day 1 to 2',
    images: [
      img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg'),
      img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg'),
      img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg'),
      img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg')
    ],
    dayImages: {
      1: [
        img('lxlbh7w1a64qyhyw24b8x6acl34p_1462975136_552513055_f06229494e_o.jpg'),
        img('a8luqsni73mqhn0o6ekfzbwvrhc1_1469607104-simon-cabaret-show-1.jpg'),
        img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg'),
        img('dt3g7wxiv0cq88va8n6qzye08rel_shutterstock_2130087425%20(1).jpg')
      ],
      2: [
        img('2d7qcxnrnv42shq3uu7tm001rz53_xet70gi3q5gi1kv2nqohp124lck3_Khai%20Nai%20island.jpg'),
        img('msu6t57ih97cc1343cz2vizg5zqu_uoeednf4e3n7do4m4ei3u00eqldz_shutterstock_1937982166.jpg'),
        img('wgw28loe37wumwa59avtvzp7gcn4_shutterstock_2253884321.jpg'),
        img('q0rofzuv74wu1axaon9rmkcob0jh_shutterstock_448476727.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Phuket`,
      'Arrival at Phuket International Airport and private transfer to your hotel in Patong',
      'Check in, then keep the day free beside Patong beach',
      'Optional: Simon Cabaret, a polished evening show close to the hotel',
      'Optional: a slow beach morning or a family visit to Phuket Bird Park',
      `${DAY_MARK}Day 2 · Phi Phi islands by speedboat`,
      'Breakfast at the hotel, then shared transfer to the Phuket pier',
      'Speedboat transfer across to the Phi Phi islands for the day',
      'Snorkelling stops, Maya Bay views and swimming time at Khai island',
      'Lunch is included on the tour, island fees are payable locally',
      'Return speedboat and shared transfer to Patong by early evening'
    ],
    accommodation: {
      name: 'AtEase Phuket Patong, Phuket',
      description: '2 nights · Continental Plan · Luxury room · 5★ · A few minutes from Patong beach and the Jungceylon shops',
      images: [
        img('fr1bj4z53ecx2bbaz6z8e7uo0li7_At%20ease-7.jpg'),
        img('mv7ed4am3zio0u5s8eruozhh2i0v_At%20ease-2.webp'),
        img('vyyeqxfn00nokvju0vhwlmo1i6ck_At%20ease-3.jpg'),
        img('wt2r21o31jpi813bv03gut3qkd0a_At%20ease-4.jpg'),
        img('23kqyebgumhajr1umoayyi36e86d_At%20ease-5.jpg'),
        img('aauvd36hr0jstsbf0ix8vw04hd2b_At%20ease-6.jpg')
      ]
    },
    activities: [
      {
        name: 'Phi Phi Islands by Speedboat',
        day: 2,
        optional: false,
        image: img('5gl6htdz30900cerq73vsj8rdr5n_91c2xwj697k5mvbt0zdazjqqafbh_shutterstock_2284053829.jpg'),
        description: 'A full day run out to the Phi Phi group, with snorkelling stops, Maya Bay views and lunch served on the tour.'
      },
      {
        name: 'Simon Cabaret Show',
        day: 1,
        optional: true,
        image: img('a8luqsni73mqhn0o6ekfzbwvrhc1_1469607104-simon-cabaret-show-1.jpg'),
        description: 'Phuket’s best known cabaret, an hour of costumes, live singing and big stage sets. Easy to add on your free first evening.'
      },
      {
        name: 'Evening on Patong Beach',
        day: 1,
        optional: true,
        image: img('lxlbh7w1a64qyhyw24b8x6acl34p_1462975136_552513055_f06229494e_o.jpg'),
        description: 'Walk the sand as the light goes, then browse the stalls and cafes a street back from the beach front.'
      },
      {
        name: 'Phuket Bird Park',
        day: 1,
        optional: true,
        image: img('2rrjqomoqtud4m8nis9ysmyculem_Phuket%20Bird%20Park.webp'),
        description: 'A shaded park with macaws, hornbills and crowned cranes, plus short keeper talks. A simple hit with younger children.'
      }
    ],
    program: {
      name: 'Patong base with an island day',
      description: 'Two nights in Patong, with a full day speedboat run to the Phi Phi islands and a free first evening to settle into Phuket.',
      image: img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg')
    }
  },
  {
    letter: 'B',
    name: 'Krabi',
    subtitle: 'Phuket → Krabi',
    dayLabel: 'Day 3 to 4',
    images: [
      img('pru9lbfjag7aglyp59b91ovwja5j_shutterstock_1710737992.jpg'),
      img('myp0svt552xqngaztwvvsb6ugnaj_shutterstock_740293555.jpg'),
      img('knpt0tp5t6sd970nzjivyl0p9zvq_shutterstock_1090315565.jpg'),
      img('2kxr2vxpxsk31qlbqaxlxfwulxif_shutterstock_1114284335.jpg')
    ],
    dayImages: {
      3: [
        img('u0pqsdaxi1xf5pmykhedhlviy06o_14599612777_e3275ab36b_o.jpg'),
        img('borb6kuo58oav08isv7557wu6m32_1626753964_shutterstock_1549724246.jpg.jpg'),
        img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg'),
        img('g00n2o6s2013n9ufu4d5m073o5fr_shutterstock_658385155-min%20(1).jpg')
      ],
      4: [
        img('m9qdu34qbl2nmju8t8pd0k9xwj64_Downpic.cc-95201209.jpg'),
        img('mj9iu60fs66r4w10pgyw8k4gn7mk_Downpic.cc-image245637211.jpg'),
        img('myp0svt552xqngaztwvvsb6ugnaj_shutterstock_740293555.jpg'),
        img('fbe59bwca0qjbwkqug0bm4fagkp8_shutterstock_394854601-min.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Phuket sights, then Krabi`,
      'Breakfast, check out and private transfer towards Krabi with stops on the way',
      'The Big Buddha on Nakkerd hill, with island views on a clear morning',
      'Walk the Sino Portuguese shophouse streets of Old Phuket Town',
      'Optional: Samet Nangshe viewpoint, with access fees payable locally',
      'Check in at your Krabi hotel below the limestone cliffs of Ao Nang',
      `${DAY_MARK}Day 4 · Krabi 7 Islands sunset tour`,
      'Breakfast, then shared transfer to the Ao Nang speedboat pier',
      'Speedboat transfer out to Chicken island, Koh Poda, Koh Tup and Koh Mor',
      'Snorkel the shallows and see Phra Nang cave before the sun drops',
      'Thai dinner on the sand, then glowing plankton in the dark water',
      'Return shared transfer to your hotel after the night swim'
    ],
    accommodation: {
      name: 'Sugar Marina Hotel Cliffhanger, Krabi',
      description: '2 nights · Continental Plan · Deluxe room · 3★ · Pool deck under the limestone cliffs, short walk to Ao Nang',
      images: [
      '/tours/best-of-phuket-krabi-bangkok/hotels/sugar-marina-cliffhanger/01.jpg',
      '/tours/best-of-phuket-krabi-bangkok/hotels/sugar-marina-cliffhanger/02.jpg',
      '/tours/best-of-phuket-krabi-bangkok/hotels/sugar-marina-cliffhanger/03.jpg',
      '/tours/best-of-phuket-krabi-bangkok/hotels/sugar-marina-cliffhanger/04.jpg',
      '/tours/best-of-phuket-krabi-bangkok/hotels/sugar-marina-cliffhanger/05.jpg',
      '/tours/best-of-phuket-krabi-bangkok/hotels/sugar-marina-cliffhanger/06.jpg'
    ]
    },
    activities: [
      {
        name: 'Phuket Sights on the Way to Krabi',
        day: 3,
        optional: false,
        image: img('bsu3jhumeuetsb2t2wguq7w4lpn1_24849801334_2ec4d7b2e1_b.jpg'),
        description: 'Break the road trip with the Big Buddha on Nakkerd hill and a walk through the painted shophouse streets of Old Phuket Town.'
      },
      {
        name: 'Krabi 7 Islands Sunset Tour',
        day: 4,
        optional: false,
        image: img('zd6kc7zaerri5u6ptwkeptn7ze11_Downpic.cc-94271501.jpg'),
        description: 'Speedboat hop across seven islands, snorkelling in the shallows, a Thai dinner on the beach and a swim with glowing plankton.'
      }
    ],
    program: {
      name: 'Cliffs, islands and a plankton swim',
      description: 'Sightseeing on the road from Phuket, then a sunset speedboat tour of seven Krabi islands with dinner on the sand and glowing plankton.',
      image: img('pru9lbfjag7aglyp59b91ovwja5j_shutterstock_1710737992.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Bangkok',
    dayLabel: 'Day 5 to 7',
    images: [
      img('t9w8mxfvt7ol6qqqq7jzea3aa2o4_shutterstock_268422755.jpg'),
      img('hyo0p91rzm8fip6pea4ixwjmonyo_shutterstock_1793108161.jpg'),
      img('zi12xgzjqrbv9gxjwy7w02yuczmb_shutterstock_1828092353-min.jpg'),
      img('n0twhi7ong2znp7u8ifv5gk22d9h_shutterstock_449998630.jpg')
    ],
    dayImages: {
      5: [
        img('ufpt1on0hvrsfe4vjro3akqpdsqv_zjj3gs95w7n6qt1fhgx3fv542y3h_bkk-cruise-chaophrayaprincess7.jpg'),
        img('t4z6usqsx2mig7y408krw5rq6itz_k880pjc7yrbiizfalgdnjxal8ito_ch87u0rxn2ukkiabmfjrgsdrh19e_bkk-cruise-chaophrayaprincess16.jpg'),
        img('t9w8mxfvt7ol6qqqq7jzea3aa2o4_shutterstock_268422755.jpg'),
        img('hyo0p91rzm8fip6pea4ixwjmonyo_shutterstock_1793108161.jpg')
      ],
      6: [
        img('kwirkm7c1gm0x2d67ulcyayih0x4_3zcahrcciono7m24vj5u62jqj9rg_Safari%20World-Gallery-1.jpg'),
        img('tcq1hgu94lzmq5kojlofq754f663_qr1fsnth22hi8zv1ces70jsdrvd0_srulgsdsyhhk5h9i3bc3.jpg.webp'),
        img('n0twhi7ong2znp7u8ifv5gk22d9h_shutterstock_449998630.jpg'),
        img('mgac4dsd6bath7whtafidxvthqzc_shutterstock_368832815.jpg')
      ],
      7: [
        img('hjog43uzmd5m162yaje2gsblopb4_shutterstock_1141409366-min.jpg'),
        img('eioxrb4o57abr1cd0dck5n0h01ry_shutterstock_238473214.jpg'),
        img('zi12xgzjqrbv9gxjwy7w02yuczmb_shutterstock_1828092353-min.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · On to Bangkok and a river cruise`,
      'Breakfast, check out and private transfer to Krabi airport',
      'Optional: flight from Krabi to Bangkok, booked separately and not included',
      'Private transfer from Bangkok airport to your hotel off Sukhumvit',
      'Evening shared transfer to the Chao Phraya Princess dinner cruise',
      'Buffet dinner, live music and lit up temples along the river',
      `${DAY_MARK}Day 6 · Safari World and Marine Park`,
      'Breakfast, then shared transfer to Safari World on the city edge',
      'Open safari loop past zebras, giraffes, lions and tigers',
      'Marine Park shows through the afternoon, with lunch included',
      'Evening free for the shops and street food near your hotel',
      `${DAY_MARK}Day 7 · Departure`,
      'Breakfast and a slow check out at your own pace',
      'Private transfer to Suvarnabhumi Airport for your trip home'
    ],
    accommodation: {
      name: 'Royal Benja Hotel, Bangkok',
      description: '2 nights · Continental Plan · Super Deluxe room · 4★ · Off Sukhumvit Soi 5, close to the Skytrain and night markets',
      images: [
        img('x084f1a0xlnm1xv5ns4rcmjko2z1_645188327.jpg'),
        img('qhxh44po7lul6cjek7da33smsaem_645185531.jpg'),
        img('a78nh27eg0klolx39too8sc667oq_650667646.jpg'),
        img('xbpg7xuuzgihqdk8p83h68oavasp_645187378.jpg'),
        img('7ybu6rzwbpxy8bvfsoc03deuo8sx_645186814.jpg'),
        img('ccyjejpju88i0fqson43huiksptz_650667636.jpg'),
        img('d6dhfemv4rtoa1y20d0o5qigcygn_113236853.jpg'),
        img('mp6xdop9n5ag8ps1guu8n3aslcc6_645185646.jpg'),
        img('onrxwe2y0ibhz0irr9v1tfcaebev_645185649.jpg')
      ]
    },
    activities: [
      {
        name: 'Chao Phraya Princess Dinner Cruise',
        day: 5,
        optional: false,
        image: img('sk5gmw2o1p1ryzg6wo1sxh77ksxb_jduxk748sgd7wmvnib3ufrzxt97b_bkk-cruise-chaophrayaprincess5.jpg'),
        description: 'Two hours on the river with a buffet dinner, live music and lit up views of Wat Arun and the Grand Palace from the water.'
      },
      {
        name: 'Safari World and Marine Park',
        day: 6,
        optional: false,
        image: img('kwirkm7c1gm0x2d67ulcyayih0x4_3zcahrcciono7m24vj5u62jqj9rg_Safari%20World-Gallery-1.jpg'),
        description: 'An open safari loop with zebras, giraffes and big cats, then dolphin and sea lion shows at Marine Park, with lunch included.'
      }
    ],
    program: {
      name: 'River cruise and Safari World',
      description: 'Two nights in Bangkok built around a Chao Phraya dinner cruise and a full day at Safari World and Marine Park with the family.',
      image: img('t9w8mxfvt7ol6qqqq7jzea3aa2o4_shutterstock_268422755.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-phuket-krabi-bangkok',
  ctaHref: '/l/thailand/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Phuket, Krabi and Bangkok',
  alt: 'Longtail boat moored below the limestone cliffs of Railay beach in Krabi',
  days: '7 days / 6 nights',
  stations: '3 stops',
  transport: 'Private and shared transfers with speedboat island tours',
  tag: 'Family',
  tags: ['Family', 'Beach'],
  price: 32894,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuket', 'Phi Phi Islands', 'Krabi', 'Bangkok'],
  stats: { days: 7, cities: 3, hotels: 3, activities: 5, transfers: 15 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['15 transfers', 'Transport'],
    ['10 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ananya Iyer',
    image: '/team/asia-2.webp',
    role: 'Thailand expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two island days and one city stretch. It is the easiest first Thailand trip for a family with children.',
    quoteMore: 'Book the Krabi to Bangkok flight for late morning so nobody rushes breakfast. Carry baht for the island entry fees, and ask the Krabi hotel for a packed breakfast on the 7 Islands day.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days across Thailand for a family that wants both beach and city. Two nights in Patong, two under the cliffs of Krabi and two in Bangkok, with speedboat island tours, a river dinner cruise and Safari World.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights in 3 hotels with daily breakfast; Phi Phi islands speedboat tour with lunch; Phuket sightseeing on the road to Krabi; Krabi 7 Islands sunset tour with Thai dinner and plankton swim; Chao Phraya Princess dinner cruise; Safari World and Marine Park with lunch; 15 airport, intercity and sightseeing transfers.',
  intro2: 'Not included: international flights; the Krabi to Bangkok flight; island entry fees; visa charges; travel insurance; meals and expenses not listed above.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuket (Arrival)', text: 'Arrival at Phuket International Airport and private transfer to your hotel in Patong\nCheck in, then keep the day free beside Patong beach\nOptional: Simon Cabaret, a polished evening show close to the hotel\nOptional: a slow beach morning or a family visit to Phuket Bird Park', hotel: 'AtEase Phuket Patong', highlights: ['Arrival at Phuket International Airport and private transfer to your hotel in Patong', 'Check in, then keep the day free beside Patong beach', 'Optional: Simon Cabaret, a polished evening show close to the hotel'] },
    { title: 'Day 2: Phi Phi islands by speedboat (B, L)', text: 'Breakfast at the hotel, then shared transfer to the Phuket pier\nSpeedboat transfer across to the Phi Phi islands for the day\nSnorkelling stops, Maya Bay views and swimming time at Khai island\nLunch is included on the tour, island fees are payable locally\nReturn speedboat and shared transfer to Patong by early evening', hotel: 'AtEase Phuket Patong', highlights: ['Breakfast at the hotel, then shared transfer to the Phuket pier', 'Speedboat transfer across to the Phi Phi islands for the day', 'Snorkelling stops, Maya Bay views and swimming time at Khai island'] },
    { title: 'Day 3: Phuket sights, then Krabi (B)', text: 'Breakfast, check out and private transfer towards Krabi with stops on the way\nThe Big Buddha on Nakkerd hill, with island views on a clear morning\nWalk the Sino Portuguese shophouse streets of Old Phuket Town\nOptional: Samet Nangshe viewpoint, with access fees payable locally\nCheck in at your Krabi hotel below the limestone cliffs of Ao Nang', hotel: 'Sugar Marina Hotel Cliffhanger', highlights: ['Breakfast, check out and private transfer towards Krabi with stops on the way', 'The Big Buddha on Nakkerd hill, with island views on a clear morning', 'Walk the Sino Portuguese shophouse streets of Old Phuket Town'] },
    { title: 'Day 4: Krabi 7 Islands sunset tour (B, D)', text: 'Breakfast, then shared transfer to the Ao Nang speedboat pier\nSpeedboat transfer out to Chicken island, Koh Poda, Koh Tup and Koh Mor\nSnorkel the shallows and see Phra Nang cave before the sun drops\nThai dinner on the sand, then glowing plankton in the dark water\nReturn shared transfer to your hotel after the night swim', hotel: 'Sugar Marina Hotel Cliffhanger', highlights: ['Breakfast, then shared transfer to the Ao Nang speedboat pier', 'Speedboat transfer out to Chicken island, Koh Poda, Koh Tup and Koh Mor', 'Snorkel the shallows and see Phra Nang cave before the sun drops'] },
    { title: 'Day 5: On to Bangkok and a river cruise (B, D)', text: 'Breakfast, check out and private transfer to Krabi airport\nOptional: flight from Krabi to Bangkok, booked separately and not included\nPrivate transfer from Bangkok airport to your hotel off Sukhumvit\nEvening shared transfer to the Chao Phraya Princess dinner cruise\nBuffet dinner, live music and lit up temples along the river', hotel: 'Royal Benja Hotel', highlights: ['Breakfast, check out and private transfer to Krabi airport', 'Optional: flight from Krabi to Bangkok, booked separately and not included', 'Private transfer from Bangkok airport to your hotel off Sukhumvit'] },
    { title: 'Day 6: Safari World and Marine Park (B, L)', text: 'Breakfast, then shared transfer to Safari World on the city edge\nOpen safari loop past zebras, giraffes, lions and tigers\nMarine Park shows through the afternoon, with lunch included\nEvening free for the shops and street food near your hotel', hotel: 'Royal Benja Hotel', highlights: ['Breakfast, then shared transfer to Safari World on the city edge', 'Open safari loop past zebras, giraffes, lions and tigers', 'Marine Park shows through the afternoon, with lunch included'] },
    { title: 'Day 7: Departure (B)', text: 'Breakfast and a slow check out at your own pace\nPrivate transfer to Suvarnabhumi Airport for your trip home', hotel: 'Departure', highlights: ['Breakfast and a slow check out at your own pace', 'Private transfer to Suvarnabhumi Airport for your trip home'] }
  ],
  outro: 'Not included: international flights; the Krabi to Bangkok flight; island entry fees; visa charges; travel insurance; meals and expenses not listed above.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Thailand', href: '/asien/thailand' },
  { label: detail.title }
];

export const bestOfPhuketKrabiBangkokBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfPhuketKrabiBangkokProduct = {
  slug: detail.slug,
  places: stops.map((s) => s.name),
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 5,
  transfers: 15,
  meals: 10,
  price: detail.price,
  images: cardImages
};
