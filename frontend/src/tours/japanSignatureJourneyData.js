// Japan Signature Journey. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg'),
  img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg'),
  img('zcclccnpnk2b78cy9usi5x5zdoyk_shutterstock_666197236.jpg'),
  img('6k3h3zulkuxlsrwgqhlm3j0vbgwx_shutterstock_1370721374.jpg'),
  img('hjvdd18dwrrkfqh5hyjbyf1qy0md_shutterstock_2299917035.jpg'),
  img('idgqxbdhnqjuj74i3evh650mu98u_shutterstock_1576805158.jpg'),
  img('vqjfk14m6s6fxufma6bl6urcehak_gallery-2.jpg'),
  img('j2yajxhi3hugp224iylhhjo0vdn4_shutterstock_2354853383.jpg'),
  img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg'),
  img('d52y3g1627qkpcuaym0v8w467dir_shutterstock_1075480004.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg'),
  img('j2yajxhi3hugp224iylhhjo0vdn4_shutterstock_2354853383.jpg'),
  img('d52y3g1627qkpcuaym0v8w467dir_shutterstock_1075480004.jpg'),
  img('fo7gecjnwvtcg8ygpphrauwfv1te_shutterstock_668037958.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji and Hakone',
    dayLabel: 'Day 1 to 3',
    images: [
      img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg'),
      img('soeej5dh7ua5fb98796aec6qre8x_shutterstock_129611225%20(2).jpg'),
      img('xdyj7i31bk427zhdgk2thbw2rv2d_shutterstock_572057020.jpg'),
      img('zcclccnpnk2b78cy9usi5x5zdoyk_shutterstock_666197236.jpg')
    ],
    dayImages: {
      1: [
        img('67joqdg0wbphbrfl9wed93p9bk48_images%20-%202026-09-30T164600.925.jpg'),
        img('vhs3w7c8r02d346dealn89dnbjwx_dawn-cafe-robot-tokyo-640x427.jpg'),
        img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg'),
        img('soeej5dh7ua5fb98796aec6qre8x_shutterstock_129611225%20(2).jpg')
      ],
      2: [
        img('bh78i8vib0rq4wewvyqt58nk746i_shutterstock_1023211282.jpg'),
        img('ixj2dcwesho68eit8ru4zte24rji_01.jpg'),
        img('0yixgt1gpkdb1dsgno7vsupygi7w_lqh0fkdte6vzdbis3ufjabi89yps_Downpic.cc-image455947042.webp'),
        img('lswne3c41x3oh76z5t49dlz2s96n_gvpe7htofi1xqnvhqejuximxk8f1_Hakone%20Ropeway.webp')
      ],
      3: [
        img('gb6n60wr8ydupm7g9qit8z2efbrz_Downpic.cc-image68884243.jpg'),
        img('636poo12k9vkswwzbdia7w4ihr5w_sfph4dv7mc8lgzow9zjbspez2lvb_1618899444_shutterstock_667925704.webp'),
        img('e4xkllxsr511v0vhb6a3aewax06i_nc2finq48tuhv9jgrm2c7pm097jz_1617362315_Sensoji-Temple-tokyo-scaled.webp'),
        img('lmvivqcmwo5w2cduizjwfndf7jkp_5k0ljnbvir36h5tz95kiptkpuuy8_jw-5d157a90eb4624.93666565.webp')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Tokyo`,
      'Arrival at Narita or Haneda and transfer to your hotel',
      'Check in at your hotel in Shiodome',
      'Free time to explore the neighbourhood',
      'Optional: an evening walk to the bay at Hamarikyu',
      `${DAY_MARK}Day 2 · Mount Fuji and Hakone`,
      'Out of the city towards Mount Fuji',
      'The fifth station on the mountain, weather permitting',
      'A cruise on Lake Ashi',
      'The Hakone ropeway over the Owakudani vents',
      `${DAY_MARK}Day 3 · Tokyo and the Skytree`,
      'A guided day through the city',
      'Asakusa, Senso-ji and the Nakamise street',
      'Up the Tokyo Skytree for the view',
      'Evening free in Tokyo'
    ],
    accommodation: {
      name: 'Mitsui Garden Hotel Shiodome, Tokyo',
      description: '3 nights · Super deluxe room · 4★ · Four star hotel in Shiodome, a short walk from the bay',
      images: [
        img('ulpi7s381cjie206sucy495a1zi1_Mitsui7.jpg'),
        img('hqk25zz03bvobs57gq9r3nvtwis0_Mitsui6.jpg'),
        img('q3bn9ixsoetnz86gatx7czo3oyzr_Mitsui3.jpg'),
        img('0d8fdwstsgycx7dn2ztz9xllohzi_Mitsui5.jpg'),
        img('3eeg58j6qw28uc2ygp00xzcpov0n_Mitsui8.jpg'),
        img('9ua390bqrkho0ohz0iv8epvmr1e7_Mitsui2.jpg'),
        img('tuc4xizgv2kig0un52ph4vg516of_Mitsui4.jpg'),
        img('5ks5ee5ho7swk4duxi0cts9c6aei_Mitsui1.jpg')
      ]
    },
    activities: [
      {
        name: 'Mount Fuji and Hakone with the ropeway',
        day: 2,
        optional: false,
        image: img('bh78i8vib0rq4wewvyqt58nk746i_shutterstock_1023211282.jpg'),
        description: 'The fifth station on Mount Fuji, a cruise on Lake Ashi and the Hakone ropeway over the sulphur vents of Owakudani.'
      },
      {
        name: 'Tokyo sightseeing with the Skytree',
        day: 3,
        optional: false,
        image: img('gb6n60wr8ydupm7g9qit8z2efbrz_Downpic.cc-image68884243.jpg'),
        description: 'Asakusa and Senso-ji with the Nakamise shopping street, then up the Tokyo Skytree for the view across the whole city.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Three nights in Shiodome, with Mount Fuji and Hakone on the first full day and a city day up the Skytree.',
      image: img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Osaka',
    subtitle: 'Osaka to Kyoto and Nara',
    dayLabel: 'Day 4 to 8',
    images: [
      img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg'),
      img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg'),
      img('fo7gecjnwvtcg8ygpphrauwfv1te_shutterstock_668037958.jpg'),
      img('a3klwqjmrp3w9t5hfpniopbrg0ho_shutterstock_2333983371.jpg')
    ],
    dayImages: {
      4: [
        img('a31bludek8xaxpql8dwmkr8fthdt_images%20-%202026-09-29T202800.670.jpg'),
        img('002cfd2b4tvdts0z25hjprd1krev_width=3840,quality=80%20(2).webp'),
        img('q3wel6ntilto7q0wx9o5luzmipc1_images%20-%202026-09-30T180018.409.jpg'),
        img('6hzy1swk98chjdiqrq77p05ks1hp_shutterstock_402603553%20(1).jpg')
      ],
      5: [
        img('5htqdfipqs85s23kd4yx18vs3n9b_dl.beatsnoop.com-3000-TzYXj0mMfK.jpg'),
        img('182vibmg4qqlf60do26572d7lrlg_Kyoto-Arashiyama-Bamboo-Grove1-SH.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('175jjcq0s03pjbxnrgbvss1n0fyf_Fushimi%20Inari%20Taisha-1.jpg')
      ],
      6: [
        img('u4fsl9h8cwrkb9b3j9cxlxqmt75h_nara-park-japan-deer-view-2-scaled.jpeg'),
        img('gojr7cm2h85e5bmusa8zexe0fish_gsoze09r8ko0sbu1ceztnf0kmd3l_shutterstock_1720970440.webp'),
        img('vr0mxjsiv533n3bcoc4a97ek5h3s_h.jpg'),
        img('v0ek50f3vmmcp5d1l0btu104vkwh_7fd1efc91c9d16b8adf2a3e288e38e283c92f68bb2105003721ecfad6fdfa943.jpg')
      ],
      7: [
        img('dwt6ckxokuqpaeo9sopjgm2kjgnq_1617177290_castle-5476737_1920.jpg'),
        img('oydogrqjtqo4lo70ljs3dbb9j8e6_shopping-in-osaka.jpg'),
        img('g75qp7l28yr9o7lhqk56ylfx9pkz_ogasuta458A7885_TP_V4.jpg'),
        img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg')
      ],
      8: [
        img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg'),
        img('88omfx0oth10x9i9dim8paszltiz_shutterstock_1870991974.jpg'),
        img('fo7gecjnwvtcg8ygpphrauwfv1te_shutterstock_668037958.jpg'),
        img('a3klwqjmrp3w9t5hfpniopbrg0ho_shutterstock_2333983371.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · teamLab, Ginza and the bullet train`,
      'Check out, then teamLab Planets in Toyosu',
      'An afternoon in the Ginza streets',
      'Shinkansen bullet train south to Osaka',
      'Check in at your riverside hotel',
      `${DAY_MARK}Day 5 · Kyoto and the Sagano train`,
      'A guided day in Kyoto',
      'The golden pavilion and the temple district',
      'The torii gate paths above Fushimi',
      'A one way ride on the Sagano romantic train',
      `${DAY_MARK}Day 6 · Nara and Osaka city`,
      'Across to Nara for the morning',
      'Todai-ji and its great bronze Buddha',
      'The deer park and its tame sika deer',
      'The Umeda Sky Building deck back in Osaka',
      `${DAY_MARK}Day 7 · A free day in Osaka`,
      'A free day in Osaka',
      'Optional: Osaka castle and its park',
      'Optional: Universal Studios Japan for the day',
      'Optional: Kobe or Himeji by train',
      `${DAY_MARK}Day 8 · Departure from Osaka`,
      'Check out and private transfer to Kansai Airport',
      'Flight home'
    ],
    accommodation: {
      name: 'Mitsui Garden Hotel Osaka Premier, Osaka',
      description: '4 nights · Super deluxe room · 4★ · Four star hotel on the river in Osaka, with a top floor bath house',
      images: [
        img('pr6czr31xfhk1b49fqgfdcnlexxj_download%20(79).jfif'),
        img('q9klcksquk9j87oy9e8lvymt5t71_286694930.jpg'),
        img('49jgk64tlk1p7y5s1ehnt4tdhmig_download%20(55).jfif'),
        img('b3xjdm94y0w6fwl86ivnatcwkrxs_download%20(51).jfif'),
        img('mujb4scvi538wx0xyda7mpsrrjyt_download%20(54).jfif'),
        img('0461jr4a7fv2nlwpou1z8ewm2lru_download%20(57).jfif'),
        img('aup8sbkev6kqfs4za3z45kqznplt_download%20(80).jfif'),
        img('sptfkmoe090t9ufmf68uhzers2pu_download%20(56).jfif'),
        img('vrzq6p1rfr4751crvdeghqbu63pn_286695242.jpg'),
        img('sitat02zeuwrxvffq1s1e5ipohie_download%20(60).jfif'),
        img('7rx1tge78qzi41kutx3av1ngzryl_286694904.jpg'),
        img('l49rjfavnmxmf9810xubv0ah980j_download%20(59).jfif'),
        img('x9yfdlfk1hqjo0wld41o5ja00suc_download%20(52).jfif'),
        img('wckgv7zj7hqsre0yk4dn34xjjoev_286695768.jpg')
      ]
    },
    activities: [
      {
        name: 'teamLab Planets',
        day: 4,
        optional: false,
        image: img('a31bludek8xaxpql8dwmkr8fthdt_images%20-%202026-09-29T202800.670.jpg'),
        description: 'The barefoot digital art museum in Toyosu, where you wade through water gardens and mirrored rooms of light.'
      },
      {
        name: 'Ginza shopping district',
        day: 4,
        optional: false,
        image: img('q3wel6ntilto7q0wx9o5luzmipc1_images%20-%202026-09-30T180018.409.jpg'),
        description: 'An afternoon in Ginza before the train south, from the department store food halls to the quiet side street galleries.'
      },
      {
        name: 'Kyoto with the Sagano romantic train',
        day: 5,
        optional: false,
        image: img('0i8bqn9pprywnp983pcs2g6rccnm_FromOsaka_SaganoTrainRideandGuidedDayTour.jpg'),
        description: 'A guided Kyoto day with a one way ride on the open sided Sagano romantic train along the Hozugawa river gorge.'
      },
      {
        name: 'Nara park, Todai-ji and the Umeda Sky Building',
        day: 6,
        optional: false,
        image: img('u4fsl9h8cwrkb9b3j9cxlxqmt75h_nara-park-japan-deer-view-2-scaled.jpeg'),
        description: 'Todai-ji with its great bronze Buddha and the tame deer of Nara park, then the floating garden deck of the Umeda Sky Building.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Four nights on the river in Osaka, with Kyoto and the Sagano train, Nara with the Umeda Sky Building and a free day.',
      image: img('qgggx5awo0vle1rmlj153witj3qq_shutterstock_2104840295.jpg')
    }
  }
];

const detail = {
  slug: 'japan-signature-journey',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Japan Signature Journey',
  alt: 'The Sagano romantic train crossing the Hozugawa gorge, Kyoto',
  days: '8 days / 7 nights',
  stations: '2 stops',
  transport: 'Shinkansen bullet train, private transfers and guided tours',
  tag: 'Best seller',
  tags: ['Culture', 'Luxury'],
  price: 172188,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Mount Fuji', 'Hakone', 'Osaka', 'Kyoto', 'Nara'],
  stats: { days: 8, cities: 2, hotels: 2, activities: 6, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['0 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Four star hotels in both cities, six strong days out and the Sagano train thrown in. This is the one we book most often.',
    quoteMore: 'Breakfast is not included here, which is deliberate. Walk to a konbini or a station stand and eat like everyone else, it is half the fun.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days between Tokyo and Osaka in four star hotels: three nights in Shiodome with Mount Fuji, Hakone and a city day up the Skytree, then four on the river in Osaka with teamLab, Ginza, Kyoto with the Sagano romantic train, Nara and a free day.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights in four star hotels; Shinkansen bullet train from Tokyo to Osaka; private airport transfers; Mount Fuji and Hakone tour with the Lake Ashi cruise and ropeway; Tokyo sightseeing tour with the Skytree; teamLab Planets tickets; a visit to the Ginza shopping district; Kyoto sightseeing tour with a one way Sagano romantic train ride; Nara park and Todai-ji with the Umeda Sky Building.',
  intro2: 'Not included: international flights; Japan visa fees; all meals; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your hotel in Shiodome\nFree time to explore the neighbourhood\nOptional: an evening walk to the bay at Hamarikyu', hotel: 'Mitsui Garden Hotel Shiodome', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your hotel in Shiodome', 'Free time to explore the neighbourhood'] },
    { title: 'Day 2: Mount Fuji and Hakone (-)', text: 'Out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nA cruise on Lake Ashi\nThe Hakone ropeway over the Owakudani vents', hotel: 'Mitsui Garden Hotel Shiodome', highlights: ['Out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'A cruise on Lake Ashi'] },
    { title: 'Day 3: Tokyo and the Skytree (-)', text: 'A guided day through the city\nAsakusa, Senso-ji and the Nakamise street\nUp the Tokyo Skytree for the view\nEvening free in Tokyo', hotel: 'Mitsui Garden Hotel Shiodome', highlights: ['A guided day through the city', 'Asakusa, Senso-ji and the Nakamise street', 'Up the Tokyo Skytree for the view'] },
    { title: 'Day 4: teamLab, Ginza and the bullet train (-)', text: 'Check out, then teamLab Planets in Toyosu\nAn afternoon in the Ginza streets\nShinkansen bullet train south to Osaka\nCheck in at your riverside hotel', hotel: 'Mitsui Garden Hotel Osaka Premier', highlights: ['Check out, then teamLab Planets in Toyosu', 'An afternoon in the Ginza streets', 'Shinkansen bullet train south to Osaka'] },
    { title: 'Day 5: Kyoto and the Sagano train (-)', text: 'A guided day in Kyoto\nThe golden pavilion and the temple district\nThe torii gate paths above Fushimi\nA one way ride on the Sagano romantic train', hotel: 'Mitsui Garden Hotel Osaka Premier', highlights: ['A guided day in Kyoto', 'The golden pavilion and the temple district', 'The torii gate paths above Fushimi'] },
    { title: 'Day 6: Nara and Osaka city (-)', text: 'Across to Nara for the morning\nTodai-ji and its great bronze Buddha\nThe deer park and its tame sika deer\nThe Umeda Sky Building deck back in Osaka', hotel: 'Mitsui Garden Hotel Osaka Premier', highlights: ['Across to Nara for the morning', 'Todai-ji and its great bronze Buddha', 'The deer park and its tame sika deer'] },
    { title: 'Day 7: A free day in Osaka (-)', text: 'A free day in Osaka\nOptional: Osaka castle and its park\nOptional: Universal Studios Japan for the day\nOptional: Kobe or Himeji by train', hotel: 'Mitsui Garden Hotel Osaka Premier', highlights: ['A free day in Osaka', 'Optional: Osaka castle and its park', 'Optional: Universal Studios Japan for the day'] },
    { title: 'Day 8: Departure from Osaka (-)', text: 'Check out and private transfer to Kansai Airport\nFlight home', hotel: 'Departure', highlights: ['Check out and private transfer to Kansai Airport', 'Flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; all meals; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const japanSignatureJourneyBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const japanSignatureJourneyProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Mount Fuji', 'Hakone', 'Osaka', 'Kyoto', 'Nara'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 6,
  transfers: 9,
  meals: 0,
  price: detail.price,
  images: cardImages
};
