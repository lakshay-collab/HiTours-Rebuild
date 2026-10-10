// Japan Cultural and Scenic Tour, Kansai First. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('wj9jxfmpxk6juy7qb1ok3i9d1ae2_shutterstock_1650091249.jpg'),
  img('a74yrec3cxa5xj70wfrgwnxkyusd_shutterstock_1666322071.jpg'),
  img('5d4ac52c1c7pu5k4ycnr79ifpor5_shutterstock_2324290629.jpg'),
  img('t70do4sx3jrtcq2v146hmuwx11x4_shutterstock_1201440004.jpg'),
  img('g8f2aex4vg106e8wh3k0x1np7hov_shutterstock_382909786.jpg'),
  img('8a1guib4pdk1t3rfaoo9h6fki7xm_shutterstock_637507525.jpg'),
  img('fdoqvdame8oqu21oq20porps9va3_shutterstock_575444659.jpg'),
  img('yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg'),
  img('g01jqzigcq3a7lifmh3xti6bmutl_shutterstock_162338060.jpg'),
  img('soeej5dh7ua5fb98796aec6qre8x_shutterstock_129611225%20(2).jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('wj9jxfmpxk6juy7qb1ok3i9d1ae2_shutterstock_1650091249.jpg'),
  img('a74yrec3cxa5xj70wfrgwnxkyusd_shutterstock_1666322071.jpg'),
  img('5d4ac52c1c7pu5k4ycnr79ifpor5_shutterstock_2324290629.jpg'),
  img('00skmif8mwx8yjwnjsksqqvv0qpc_shutterstock_1575106243.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Osaka',
    subtitle: 'Osaka to Kyoto and Nara',
    dayLabel: 'Day 1 to 4',
    images: [
      img('wj9jxfmpxk6juy7qb1ok3i9d1ae2_shutterstock_1650091249.jpg'),
      img('00skmif8mwx8yjwnjsksqqvv0qpc_shutterstock_1575106243.jpg'),
      img('wriotvvbfc3o6tb222ad7qf9vnlp_shutterstock_2401915617.jpg'),
      img('5d4ac52c1c7pu5k4ycnr79ifpor5_shutterstock_2324290629.jpg')
    ],
    dayImages: {
      1: [
        img('y0wjmvsis7tcqbf6vu0ix1adtbus_image_processing20200118-4-2fqyhe.jpg'),
        img('3nunl823jzo3pc4axkpvfg4naojq_l-intro-1664219638.jpg'),
        img('uq6d9va2ibv5todcy2zw4ylo1b5f_images%20-%202026-09-29T195924.971.jpg'),
        img('wj9jxfmpxk6juy7qb1ok3i9d1ae2_shutterstock_1650091249.jpg')
      ],
      2: [
        img('5htqdfipqs85s23kd4yx18vs3n9b_dl.beatsnoop.com-3000-TzYXj0mMfK.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('175jjcq0s03pjbxnrgbvss1n0fyf_Fushimi%20Inari%20Taisha-1.jpg'),
        img('182vibmg4qqlf60do26572d7lrlg_Kyoto-Arashiyama-Bamboo-Grove1-SH.jpg')
      ],
      3: [
        img('d93gvewfeu9f3yecjl2nuem7n7dw_nara-park-japan-deer-view-2-scaled.jpeg'),
        img('gojr7cm2h85e5bmusa8zexe0fish_gsoze09r8ko0sbu1ceztnf0kmd3l_shutterstock_1720970440.webp'),
        img('vr0mxjsiv533n3bcoc4a97ek5h3s_h.jpg'),
        img('ljy1bq45d05z46c85bm046lj7y0b_dotonburi.jpg')
      ],
      4: [
        img('70u3tc8xuuarz97uhxty1b2m3rmq_1617192046_6dd23e1abb0539d588045e45b7e5ddfd.jpg'),
        img('2hn59tmyw7g76wpw5js89g7jlxix_1619611599_shutterstock_560030653.jpg'),
        img('8eqfd09dtnyk0o5zl4ckmcl3qcjv_teamLab%20Botanical%20Garden%20Osaka%20(1).png'),
        img('wj9jxfmpxk6juy7qb1ok3i9d1ae2_shutterstock_1650091249.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Osaka`,
      'Arrival at Kansai Airport and transfer to your hotel',
      'Check in at your riverside hotel in Osaka',
      'Free time to explore the neighbourhood',
      'Optional: an evening along the Dotonbori canal',
      `${DAY_MARK}Day 2 · Kyoto highlights`,
      'Breakfast, then a guided day in Kyoto',
      'The golden pavilion on its pond',
      'A Zen garden and the temple district',
      'The torii gate paths above Fushimi',
      `${DAY_MARK}Day 3 · Nara and Osaka city`,
      'Breakfast, then across to Nara',
      'Todai-ji and its great bronze Buddha',
      'The deer park and its tame sika deer',
      'The Umeda Sky Building deck back in Osaka',
      `${DAY_MARK}Day 4 · A free day in Osaka`,
      'Breakfast and a free day in Osaka',
      'Optional: Osaka castle and its park',
      'Optional: Universal Studios Japan for the day',
      'Optional: Kobe or Himeji by train'
    ],
    accommodation: {
      name: 'Mitsui Garden Hotel Osaka Premier, Osaka',
      description: '4 nights · Breakfast · Standard room · 4★ · Four star hotel on the river in Osaka, with a top floor bath house',
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
        name: 'Kyoto cultural highlights',
        day: 2,
        optional: false,
        image: img('5htqdfipqs85s23kd4yx18vs3n9b_dl.beatsnoop.com-3000-TzYXj0mMfK.jpg'),
        description: 'A guided day through the old capital: the golden pavilion, a Zen garden and the torii gate paths climbing the hill above Fushimi.'
      },
      {
        name: 'Nara park, Todai-ji and the Umeda Sky Building',
        day: 3,
        optional: false,
        image: img('d93gvewfeu9f3yecjl2nuem7n7dw_nara-park-japan-deer-view-2-scaled.jpeg'),
        description: 'Todai-ji with its great bronze Buddha and the tame deer of Nara park, then the floating garden deck of the Umeda Sky Building.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'Four nights on the river in Osaka, with a guided Kyoto day, Nara and the Umeda Sky Building, and a free day.',
      image: img('wj9jxfmpxk6juy7qb1ok3i9d1ae2_shutterstock_1650091249.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Tokyo',
    subtitle: 'Tokyo to Mount Fuji and Hakone',
    dayLabel: 'Day 5 to 8',
    images: [
      img('wkz3rsmvvlhs2o7orc70p6masz8g_shutterstock_2248287787.jpg'),
      img('a74yrec3cxa5xj70wfrgwnxkyusd_shutterstock_1666322071.jpg'),
      img('re7iw91kyn2u863knugl7cr3ojwm_shutterstock_2301094731.jpg'),
      img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg')
    ],
    dayImages: {
      5: [
        img('elj1nday9vqxwa66zgar1a3zbd5i_m_TeamLab%20Planets%20Tokyo%205_l_2560_3840.jpg'),
        img('idr24lhuwupkqjw87hmxi2ukc0tb_width=3840,quality=80%20(1).webp'),
        img('5it4oardulo8m4o3x88o2a3a9dse_6hzy1swk98chjdiqrq77p05ks1hp_shutterstock_402603553%20(1).webp'),
        img('wkz3rsmvvlhs2o7orc70p6masz8g_shutterstock_2248287787.jpg')
      ],
      6: [
        img('bh78i8vib0rq4wewvyqt58nk746i_shutterstock_1023211282.jpg'),
        img('ixj2dcwesho68eit8ru4zte24rji_01.jpg'),
        img('0yixgt1gpkdb1dsgno7vsupygi7w_lqh0fkdte6vzdbis3ufjabi89yps_Downpic.cc-image455947042.webp'),
        img('lswne3c41x3oh76z5t49dlz2s96n_gvpe7htofi1xqnvhqejuximxk8f1_Hakone%20Ropeway.webp')
      ],
      7: [
        img('uyue7k16qfbvr34j4hd4aykh5p9o_Imperial%20palace-tokyo-1.jpg'),
        img('636poo12k9vkswwzbdia7w4ihr5w_sfph4dv7mc8lgzow9zjbspez2lvb_1618899444_shutterstock_667925704.webp'),
        img('e4xkllxsr511v0vhb6a3aewax06i_nc2finq48tuhv9jgrm2c7pm097jz_1617362315_Sensoji-Temple-tokyo-scaled.webp'),
        img('lmvivqcmwo5w2cduizjwfndf7jkp_5k0ljnbvir36h5tz95kiptkpuuy8_jw-5d157a90eb4624.93666565.webp')
      ],
      8: [
        img('wkz3rsmvvlhs2o7orc70p6masz8g_shutterstock_2248287787.jpg'),
        img('a74yrec3cxa5xj70wfrgwnxkyusd_shutterstock_1666322071.jpg'),
        img('re7iw91kyn2u863knugl7cr3ojwm_shutterstock_2301094731.jpg'),
        img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Bullet train to Tokyo and teamLab`,
      'Breakfast and check out, then the Shinkansen to Tokyo',
      'Check in at your hotel in Shiodome',
      'teamLab Planets, the barefoot art museum',
      'Evening free near the bay',
      `${DAY_MARK}Day 6 · Mount Fuji and Hakone`,
      'Breakfast, then out of the city towards Mount Fuji',
      'The fifth station on the mountain, weather permitting',
      'A cruise on Lake Ashi',
      'The Hakone ropeway over the Owakudani vents',
      `${DAY_MARK}Day 7 · Tokyo and the Skytree`,
      'Breakfast, then a guided day in the city',
      'Asakusa, Senso-ji and the Nakamise street',
      'Up the Tokyo Skytree for the view',
      'Evening free in Tokyo',
      `${DAY_MARK}Day 8 · Departure from Tokyo`,
      'Breakfast at the hotel and check out',
      'Private transfer to Narita or Haneda for your flight home'
    ],
    accommodation: {
      name: 'Mitsui Garden Hotel Shiodome, Tokyo',
      description: '3 nights · Breakfast · Standard room · 4★ · Four star hotel in Shiodome, a short walk from the bay',
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
        name: 'teamLab Planets',
        day: 5,
        optional: false,
        image: img('elj1nday9vqxwa66zgar1a3zbd5i_m_TeamLab%20Planets%20Tokyo%205_l_2560_3840.jpg'),
        description: 'The barefoot digital art museum in Toyosu, where you wade through water gardens and mirrored rooms of light.'
      },
      {
        name: 'Mount Fuji and Hakone with the ropeway',
        day: 6,
        optional: false,
        image: img('bh78i8vib0rq4wewvyqt58nk746i_shutterstock_1023211282.jpg'),
        description: 'The fifth station on Mount Fuji, a cruise on Lake Ashi and the Hakone ropeway over the sulphur vents of Owakudani.'
      },
      {
        name: 'Tokyo sightseeing with the Skytree',
        day: 7,
        optional: false,
        image: img('uyue7k16qfbvr34j4hd4aykh5p9o_Imperial%20palace-tokyo-1.jpg'),
        description: 'Asakusa and Senso-ji with the Nakamise shopping street, then up the Tokyo Skytree for the view across the whole city.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Three nights in Shiodome, arriving by bullet train for teamLab Planets, then Mount Fuji with Hakone and a city day up the Skytree.',
      image: img('wkz3rsmvvlhs2o7orc70p6masz8g_shutterstock_2248287787.jpg')
    }
  }
];

const detail = {
  slug: 'japan-cultural-and-scenic-tour-kansai-first',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Japan Cultural and Scenic Tour, Kansai First',
  alt: 'The Umeda Sky Building floating garden deck, Osaka',
  days: '8 days / 7 nights',
  stations: '2 stops',
  transport: 'Shinkansen bullet train, private transfers and guided tours',
  tag: 'Value',
  tags: ['Culture', 'First time'],
  price: 153900,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Osaka', 'Kyoto', 'Nara', 'Tokyo', 'Mount Fuji', 'Hakone'],
  stats: { days: 8, cities: 2, hotels: 2, activities: 5, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Starting in Kansai and finishing in Tokyo means the long flight home leaves from the busier airport, and you never double back.',
    quoteMore: 'Both Mitsui Garden hotels have a top floor bath house with a view. Go up after the Nara day, it is better than any spa treatment.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days from Kansai to Tokyo: four nights on the river in Osaka with a guided Kyoto day, Nara and the Umeda Sky Building and a free day, then the bullet train to Tokyo for teamLab Planets, Mount Fuji with Hakone and a city day up the Skytree.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights in four star hotels with daily breakfast; Shinkansen bullet train from Osaka to Tokyo; private airport transfers; Kyoto sightseeing tour; Nara park and Todai-ji with the Umeda Sky Building; teamLab Planets tickets; Mount Fuji and Hakone tour with the Lake Ashi cruise and ropeway; Tokyo sightseeing tour with the Skytree.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Osaka (Arrival)', text: 'Arrival at Kansai Airport and transfer to your hotel\nCheck in at your riverside hotel in Osaka\nFree time to explore the neighbourhood\nOptional: an evening along the Dotonbori canal', hotel: 'Mitsui Garden Hotel Osaka Premier', highlights: ['Arrival at Kansai Airport and transfer to your hotel', 'Check in at your riverside hotel in Osaka', 'Free time to explore the neighbourhood'] },
    { title: 'Day 2: Kyoto highlights (B)', text: 'Breakfast, then a guided day in Kyoto\nThe golden pavilion on its pond\nA Zen garden and the temple district\nThe torii gate paths above Fushimi', hotel: 'Mitsui Garden Hotel Osaka Premier', highlights: ['Breakfast, then a guided day in Kyoto', 'The golden pavilion on its pond', 'A Zen garden and the temple district'] },
    { title: 'Day 3: Nara and Osaka city (B)', text: 'Breakfast, then across to Nara\nTodai-ji and its great bronze Buddha\nThe deer park and its tame sika deer\nThe Umeda Sky Building deck back in Osaka', hotel: 'Mitsui Garden Hotel Osaka Premier', highlights: ['Breakfast, then across to Nara', 'Todai-ji and its great bronze Buddha', 'The deer park and its tame sika deer'] },
    { title: 'Day 4: A free day in Osaka (B)', text: 'Breakfast and a free day in Osaka\nOptional: Osaka castle and its park\nOptional: Universal Studios Japan for the day\nOptional: Kobe or Himeji by train', hotel: 'Mitsui Garden Hotel Osaka Premier', highlights: ['Breakfast and a free day in Osaka', 'Optional: Osaka castle and its park', 'Optional: Universal Studios Japan for the day'] },
    { title: 'Day 5: Bullet train to Tokyo and teamLab (B)', text: 'Breakfast and check out, then the Shinkansen to Tokyo\nCheck in at your hotel in Shiodome\nteamLab Planets, the barefoot art museum\nEvening free near the bay', hotel: 'Mitsui Garden Hotel Shiodome', highlights: ['Breakfast and check out, then the Shinkansen to Tokyo', 'Check in at your hotel in Shiodome', 'teamLab Planets, the barefoot art museum'] },
    { title: 'Day 6: Mount Fuji and Hakone (B)', text: 'Breakfast, then out of the city towards Mount Fuji\nThe fifth station on the mountain, weather permitting\nA cruise on Lake Ashi\nThe Hakone ropeway over the Owakudani vents', hotel: 'Mitsui Garden Hotel Shiodome', highlights: ['Breakfast, then out of the city towards Mount Fuji', 'The fifth station on the mountain, weather permitting', 'A cruise on Lake Ashi'] },
    { title: 'Day 7: Tokyo and the Skytree (B)', text: 'Breakfast, then a guided day in the city\nAsakusa, Senso-ji and the Nakamise street\nUp the Tokyo Skytree for the view\nEvening free in Tokyo', hotel: 'Mitsui Garden Hotel Shiodome', highlights: ['Breakfast, then a guided day in the city', 'Asakusa, Senso-ji and the Nakamise street', 'Up the Tokyo Skytree for the view'] },
    { title: 'Day 8: Departure from Tokyo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Narita or Haneda for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Narita or Haneda for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const japanCulturalScenicKansaiFirstBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const japanCulturalScenicKansaiFirstProduct = {
  slug: detail.slug,
  places: ['Osaka', 'Kyoto', 'Nara', 'Tokyo', 'Mount Fuji', 'Hakone'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 5,
  transfers: 9,
  meals: 7,
  price: detail.price,
  images: cardImages
};
