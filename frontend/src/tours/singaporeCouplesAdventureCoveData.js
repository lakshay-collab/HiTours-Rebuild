// Singapore for Couples with Adventure Cove. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg'),
  img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg'),
  img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
  img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
  img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
  img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
  img('3xb9b772fk8tq784ls9xw46bonlu_meric-dagli-RG7jGL8wkCs-unsplash.jpg'),
  img('3kicse3qojgtvpf5e4aqzvskrzu4_shutterstock_203804005.jpg'),
  img('uj4mfpnza7hzznm3ek5wzhawzdyl_shutterstock_1093285319.jpg'),
  img('35k7yjt1zzbgojfz9f69y4n9v43r_shutterstock_1068875402%20(1).jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg'),
  img('r2czdzcahwxac27q6mkguge3e6q6_wz4s4wcehx19skmd8tvs9mecuplw_Downpic.cc-image229620776.webp'),
  img('xkc5gws4qd4uax4hvxwihi35fv35_1563619864_shutterstock_793620280.jpg'),
  img('ywo4eleb1h86zh6h5e005qsm0kzs_d33lwqdb9mk4ml0qwdat0daij9n8_shutterstock_210555943.webp')
];

const stops = [
  {
    letter: 'A',
    name: 'Singapore',
    dayLabel: 'Day 1 to 6',
    images: [
      img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg'),
      img('itpl36920m8zfwwwt0es64uzpwzq_shutterstock_646707235.jpg'),
      img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg'),
      img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg')
    ],
    dayImages: {
      1: [
        img('r2czdzcahwxac27q6mkguge3e6q6_wz4s4wcehx19skmd8tvs9mecuplw_Downpic.cc-image229620776.webp'),
        img('cgx6ab1cspd7wu0e04jze3dzbibk_singapore_night_safari.jpg'),
        img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg'),
        img('itpl36920m8zfwwwt0es64uzpwzq_shutterstock_646707235.jpg')
      ],
      2: [
        img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        img('mmto1hk2nujlkltfsadj9s2ch3j9_1563452033_shutterstock_208160683_(1).jpg'),
        img('etwjtvxjtctcyj8zmdmmtz5rnff7_1563607619_shutterstock_1155676858.jpg'),
        img('xkc5gws4qd4uax4hvxwihi35fv35_1563619864_shutterstock_793620280.jpg')
      ],
      3: [
        img('ywo4eleb1h86zh6h5e005qsm0kzs_d33lwqdb9mk4ml0qwdat0daij9n8_shutterstock_210555943.webp'),
        img('s2r4nfl80qk64lm24j05vwdt984y_VIAL1673.JPG'),
        img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg'),
        img('itpl36920m8zfwwwt0es64uzpwzq_shutterstock_646707235.jpg')
      ],
      4: [
        img('qeze4csghbtda4u7a06o23o1bk03_esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.webp'),
        img('cdq7uq5tcqpjmy3ha56ibntcnm0y_Oceanraium-1.webp'),
        img('bksa9r6n2u3g1zl1grep2jo03oej_Oceanraium-1.webp'),
        img('9qh205t74nx95bmnuycnqgtu525x_Wings%20of%20Time-4.webp')
      ],
      5: [
        img('c8koccooceq5cfl6icuhsq29sv7w_hkzzydnii1tbtx2kec08mpn2dxz0_Waterpark-41.jpg'),
        img('xn9lk9obgfdswzotjh90r8e0ckq5_1563611407_WATERPARK.jpg'),
        img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg'),
        img('itpl36920m8zfwwwt0es64uzpwzq_shutterstock_646707235.jpg')
      ],
      6: [
        img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg'),
        img('itpl36920m8zfwwwt0es64uzpwzq_shutterstock_646707235.jpg'),
        img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg'),
        img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and the Night Safari`,
      'Arrival at Changi Airport and private sedan transfer to the One Farrer Hotel',
      'Check in to your super deluxe room and take the afternoon slowly',
      'Shared transfer to Mandai for the Night Safari and its tram circuit',
      'Nocturnal walking trails afterwards if you still have the energy',
      `${DAY_MARK}Day 2 · City tour, SkyPark and the Gardens`,
      'Breakfast, then shared transfer for the half day city tour',
      'Merlion Park, the Helix bridge, Chinatown and the civic district',
      'Marina Bay Sands SkyPark on level 57 above the bay',
      'Cloud Forest, Flower Dome and Jurassic World at Gardens by the Bay',
      `${DAY_MARK}Day 3 · Universal Studios`,
      'Breakfast, then shared transfer to Resorts World Sentosa',
      'One day pass for Universal Studios across all seven zones',
      'Lunch inside the park and the stunt show in the afternoon',
      'Evening free along the Sentosa boardwalk',
      `${DAY_MARK}Day 4 · Sentosa, oceanarium and Wings of Time`,
      'Breakfast, then shared transfer to Mount Faber for the cable car',
      'Two way sky pass over the harbour to Sentosa',
      'Singapore Oceanarium with its open ocean tank and reef galleries',
      'Wings of Time on Siloso beach once it is dark',
      `${DAY_MARK}Day 5 · Adventure Cove Waterpark`,
      'Breakfast, then shared transfer back across to Sentosa',
      'A full day at Adventure Cove with the lazy river and the slides',
      'Snorkel with the rays at Rainbow Reef, gear provided at the park',
      'Quiet evening in Little India near the hotel',
      `${DAY_MARK}Day 6 · Departure`,
      'Breakfast and a late check out where possible',
      'Private sedan transfer to Changi Airport for your flight home'
    ],
    accommodation: {
      name: 'One Farrer Hotel Singapore, Singapore',
      description: '5 nights · Breakfast included · Super deluxe room · 4★ · One Farrer Hotel with a garden pool, beside Farrer Park MRT and Little India',
      images: [
        img('9f1wtcp4poje33c26ou8z183pkka_43200695.jpg'),
        img('xf5ggofd13t2ckb77oy22ecf4smv_image_11.jpg'),
        img('onn6ld5mlixbku71mzqbwurkbcdk_image_12.jpg'),
        img('jm58xq7ggbsj4ywxgs9rzk8dq8d2_image_0.jpg'),
        img('mgezw8ft6tzjllqtgwd4qgghtd0k_image_2.jpg'),
        img('owzf20xcn22jvkh4asjzgr19azcj_image_39.jpg'),
        img('l7f7hpfzds40uta9xvg0pjshcmjq_109890874.jpg'),
        img('zyvy8cofaobqwyz7afkx7zlj6xro_image_6.jpg'),
        img('nbgusag9owwhi2od6rephdl4npjs_image_13.jpg'),
        img('o0s69spn2k2bkn3k92xmzy8njfen_image_15.jpg'),
        img('76mhc2r2auaapoda26fs52scgz6q_image_16.jpg'),
        img('gz03zsp35n9wrekfwp8t40n20apf_image_18.jpg'),
        img('845c8e2x8eypyqqrojs7vqyjyyox_image_19.jpg'),
        img('8jktcy8gwn87i1cmrgm6i045vt29_image_20.jpg'),
        img('lq1lff58twbwpn1p9s6gtrwgbbcd_image_23.jpg'),
        img('a2w7ldlq42m02ujh1kod7g1zd97q_image_25.jpg'),
        img('4o5eg7u4cn7r5l7sp3mxy1oo18o1_image_26.jpg'),
        img('s8z467b8qc9tg56twyz02s8tcgvn_image_27.jpg'),
        img('tpnk7ksbw0ppai8jj151oujbxcq0_image_29.jpg'),
        img('qgi5frlanjdmq7bofx0ebrnird1l_image_31.jpg'),
        img('ha91doav7p5v01a1umm5qt0haz0q_image_35.jpg'),
        img('x023w8je31u232wzkjryghpde3ow_image_37.jpg'),
        img('rwtgtpto28cxucozguis872lqcbw_317078320.jpg'),
        img('42rhwxiwm7x4l4nk57xprxz6dd18_image_7.jpg'),
        img('jci0tdaqwisdlmwtcwsykllmn1hz_image_32.jpg'),
        img('gpug742ivu4wu0e7vjrwma2z0sem_image_38.jpg')
      ]
    },
    activities: [
      {
        name: 'Night Safari with Tram Ride',
        day: 1,
        optional: false,
        image: img('r2czdzcahwxac27q6mkguge3e6q6_wz4s4wcehx19skmd8tvs9mecuplw_Downpic.cc-image229620776.webp'),
        description: 'A tram circuit through the Mandai park after dark, past elephants, rhinos, hyenas and the big cats.'
      },
      {
        name: 'Half Day Singapore City Tour',
        day: 2,
        optional: false,
        image: img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        description: 'A shared coach tour of Merlion Park, Marina Bay, the Helix bridge, Chinatown and the colonial quarter.'
      },
      {
        name: 'Marina Bay Sands SkyPark',
        day: 2,
        optional: false,
        image: img('ow6ofn6r1lddm2dbn8mafzgb9fnb_Marina%20Bay%20Skypark-7.webp'),
        description: 'The level 57 observation deck above Marina Bay, the Gardens and the towers of the business district.'
      },
      {
        name: 'Gardens by the Bay',
        day: 2,
        optional: false,
        image: img('hv7x3rvf7n6qfyx41kgt7goodft6_GBB-6.webp'),
        description: 'Cloud Forest with its indoor waterfall, the Flower Dome and the Jurassic World trail among the Supertrees.'
      },
      {
        name: 'Universal Studios Singapore',
        day: 3,
        optional: false,
        image: img('ywo4eleb1h86zh6h5e005qsm0kzs_d33lwqdb9mk4ml0qwdat0daij9n8_shutterstock_210555943.webp'),
        description: 'A one day pass covering Sci Fi City, Ancient Egypt, Far Far Away and the Hollywood boulevard shows.'
      },
      {
        name: 'Singapore Cable Car Sky Pass',
        day: 4,
        optional: false,
        image: img('qeze4csghbtda4u7a06o23o1bk03_esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.webp'),
        description: 'A two way ride from Mount Faber over HarbourFront to Sentosa, with the container port below.'
      },
      {
        name: 'Singapore Oceanarium',
        day: 4,
        optional: false,
        image: img('cdq7uq5tcqpjmy3ha56ibntcnm0y_Oceanraium-1.webp'),
        description: 'Sentosa\'s rebuilt aquarium with an open ocean tank, reef habitats and a research gallery.'
      },
      {
        name: 'Wings of Time',
        day: 4,
        optional: false,
        image: img('9qh205t74nx95bmnuycnqgtu525x_Wings%20of%20Time-4.webp'),
        description: 'A twenty minute beachfront show of water screens, lasers and fire, staged on Siloso beach.'
      },
      {
        name: 'Adventure Cove Waterpark',
        day: 5,
        optional: false,
        image: img('c8koccooceq5cfl6icuhsq29sv7w_hkzzydnii1tbtx2kec08mpn2dxz0_Waterpark-41.jpg'),
        description: 'Slides, a lazy river and a snorkel reef with rays and thousands of fish, all on the Sentosa waterfront.'
      },
      {
        name: 'Singapore River Cruise',
        day: 2,
        optional: true,
        image: img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg'),
        description: 'A bumboat along the quays past the old shophouses and warehouses, at its best after sunset.'
      }
    ],
    program: {
      name: 'One base, six different days',
      description: 'Five nights at Farrer Park with wildlife, the skyline, two theme parks and a water park all inside half an hour on the MRT.',
      image: img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg')
    }
  }
];

const detail = {
  slug: 'singapore-for-couples-with-adventure-cove',
  ctaHref: '/l/singapore/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Singapore for Couples with Adventure Cove',
  alt: 'Marina Bay Sands and the Singapore skyline seen across the water at dusk',
  days: '6 days / 5 nights',
  stations: '1 stops',
  transport: 'Private airport transfers with shared coaches for tours and tickets',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Luxury'],
  price: 57428,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Singapore', 'Marina Bay', 'Sentosa'],
  stats: { days: 6, cities: 1, hotels: 1, activities: 9, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['9 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Nisha Rao',
    image: '/experts/riya.webp',
    role: 'Singapore expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Five nights in one good hotel, no packing and unpacking, and a different side of the city every day. Couples like that rhythm.',
    quoteMore: 'Keep the Adventure Cove day for last. After two theme park days you will want the lazy river more than another queue.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days in the city for two. A wildlife evening at Mandai, the skyline from level 57, Gardens by the Bay, a full day at Universal Studios, Sentosa by cable car with the oceanarium and Wings of Time, then the water park at Adventure Cove.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights at the One Farrer Hotel with daily breakfast; Night Safari with tram ride; half day city tour; Marina Bay Sands SkyPark; the Gardens by the Bay domes with the Jurassic World trail; Universal Studios one day pass; two way cable car sky pass; Singapore Oceanarium; Wings of Time; Adventure Cove Waterpark; 10 private and shared transfers.',
  intro2: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; attractions not named above; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and the Night Safari (Arrival)', text: 'Arrival at Changi Airport and private sedan transfer to the One Farrer Hotel\nCheck in to your super deluxe room and take the afternoon slowly\nShared transfer to Mandai for the Night Safari and its tram circuit\nNocturnal walking trails afterwards if you still have the energy', hotel: 'One Farrer Hotel Singapore', highlights: ['Arrival at Changi Airport and private sedan transfer to the One Farrer Hotel', 'Check in to your super deluxe room and take the afternoon slowly', 'Shared transfer to Mandai for the Night Safari and its tram circuit'] },
    { title: 'Day 2: City tour, SkyPark and the Gardens (B)', text: 'Breakfast, then shared transfer for the half day city tour\nMerlion Park, the Helix bridge, Chinatown and the civic district\nMarina Bay Sands SkyPark on level 57 above the bay\nCloud Forest, Flower Dome and Jurassic World at Gardens by the Bay', hotel: 'One Farrer Hotel Singapore', highlights: ['Breakfast, then shared transfer for the half day city tour', 'Merlion Park, the Helix bridge, Chinatown and the civic district', 'Marina Bay Sands SkyPark on level 57 above the bay'] },
    { title: 'Day 3: Universal Studios (B)', text: 'Breakfast, then shared transfer to Resorts World Sentosa\nOne day pass for Universal Studios across all seven zones\nLunch inside the park and the stunt show in the afternoon\nEvening free along the Sentosa boardwalk', hotel: 'One Farrer Hotel Singapore', highlights: ['Breakfast, then shared transfer to Resorts World Sentosa', 'One day pass for Universal Studios across all seven zones', 'Lunch inside the park and the stunt show in the afternoon'] },
    { title: 'Day 4: Sentosa, oceanarium and Wings of Time (B)', text: 'Breakfast, then shared transfer to Mount Faber for the cable car\nTwo way sky pass over the harbour to Sentosa\nSingapore Oceanarium with its open ocean tank and reef galleries\nWings of Time on Siloso beach once it is dark', hotel: 'One Farrer Hotel Singapore', highlights: ['Breakfast, then shared transfer to Mount Faber for the cable car', 'Two way sky pass over the harbour to Sentosa', 'Singapore Oceanarium with its open ocean tank and reef galleries'] },
    { title: 'Day 5: Adventure Cove Waterpark (B)', text: 'Breakfast, then shared transfer back across to Sentosa\nA full day at Adventure Cove with the lazy river and the slides\nSnorkel with the rays at Rainbow Reef, gear provided at the park\nQuiet evening in Little India near the hotel', hotel: 'One Farrer Hotel Singapore', highlights: ['Breakfast, then shared transfer back across to Sentosa', 'A full day at Adventure Cove with the lazy river and the slides', 'Snorkel with the rays at Rainbow Reef, gear provided at the park'] },
    { title: 'Day 6: Departure (B)', text: 'Breakfast and a late check out where possible\nPrivate sedan transfer to Changi Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast and a late check out where possible', 'Private sedan transfer to Changi Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; attractions not named above; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Singapore', href: '/asia/singapore' },
  { label: detail.title }
];

export const singaporeCouplesAdventureCoveBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const singaporeCouplesAdventureCoveProduct = {
  slug: detail.slug,
  places: ['Singapore', 'Marina Bay', 'Sentosa'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 9,
  transfers: 10,
  meals: 5,
  price: detail.price,
  images: cardImages
};
