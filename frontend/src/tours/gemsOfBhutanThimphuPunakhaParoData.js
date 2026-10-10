// Gems of Bhutan: Thimphu, Punakha and Paro. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
  img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
  img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg'),
  img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
  img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
  img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
  img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
  img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
  img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg'),
  img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Thimphu',
    dayLabel: 'Day 1 to 2',
    images: [
      img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
      img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
      img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
      img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg')
    ],
    dayImages: {
      1: [
        img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
        img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
        img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
        img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg')
      ],
      2: [
        img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
        img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
        img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
        img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Thimphu`,
      'Arrival at Paro International and transfer to Thimphu',
      'The road east along the Pa Chhu and the Wang Chhu',
      'Check in and the rest of the day free',
      `${DAY_MARK}Day 2 · Local sightseeing`,
      'Breakfast, then out into the capital',
      'A guided half day round the town',
      'The dzong, the temple and the market'
    ],
    accommodation: {
      name: 'Thimphu deluxe hotel, Thimphu City',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Comfortable hotel in the capital, walkable to the clock tower',
      images: [
        img('v9uo5lid0n4qaesyy7gmcd0ia1ov_1567000196_Dochula_Pass.jpg'),
        img('oh1gexaupxa22jhlbewzh61ss4jr_1567058265_Rinpung_Monastery1.jpg'),
        img('8pkfc2n3cg0x502xryg6h6sy6lpt_1567161873_shutterstock_642962251.jpg'),
        img('5ocq5egc7nqrn1s8ruanbjkerxh2_1567161874_shutterstock_1384348070.jpg'),
        img('unlpcns0dcitydgrdkb4oute3q3r_1566998066_Tourist_at_TNM.jpg'),
        img('i5q5af42wy59xur6qoniy8wowzxh_4b0mqyu219qne0kbau5rw3k3tvpv_1530784296_chimi.jpg')
      ]
    },
    activities: [
      {
        name: 'Local sightseeing tour',
        day: 2,
        optional: false,
        image: img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
        description: 'A guided half day of the town with your driver and guide, covering the main dzong, temple and market.'
      }
    ],
    program: {
      name: 'Thimphu',
      description: 'Days in the capital, with the Memorial Chorten, the Buddha Dordenma and Tashichho Dzong.',
      image: img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Punakha',
    dayLabel: 'Day 3',
    images: [
      img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg'),
      img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
      img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
      img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg')
    ],
    dayImages: {
      3: [
        img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
        img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
        img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
        img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · To Punakha: local sightseeing`,
      'Breakfast, then east over the Dochula pass',
      'The hundred and eight chortens at the top',
      'A guided half day round the town',
      'The dzong, the temple and the market'
    ],
    accommodation: {
      name: 'Punakha deluxe hotel, Punakha',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Riverside hotel in the warm old winter capital',
      images: [
        img('qv5dr3smbx8pds6unr8y6ryqd6aq_84rpvos8v1j9njr3x6a5fo2zz9u5_1594459594_Phuentsholing.jpg'),
        img('fes4piv0dtybtdv6dhfxtxrpbazz_a90ux68q546hrifyt4qov5ras1d3_1594645941_Changangkha_Monastery.jpg'),
        img('gljpncywnw2ljojnzjkr74kh9tk6_47u744iu64q8nk5hndrdpaw4klbr_1594648353_Divine_Madman.jpg'),
        img('jhvq1wsn3wk6rduss3gtybpgms63_66y3q1wrfzyqye59bmq69ijpk59z_1530784295_Tashi_Dzong.jpg'),
        img('rf7wgk3yvynv4z9ufvbz6i6yefwg_d8yfybry21wd15qp23pj4g2ox5wg_1594648356_dochula_pass1.jpg'),
        img('oh92jrq6sh8ttgsvubkyvdt59xgl_fp29rlb9yvnuch60xbq22vkk0exp_1594645941_Takin_Zoo.jpg')
      ]
    },
    activities: [
      {
        name: 'Local sightseeing tour',
        day: 3,
        optional: false,
        image: img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
        description: 'A guided half day of the town with your driver and guide, covering the main dzong, temple and market.'
      }
    ],
    program: {
      name: 'Punakha',
      description: 'Time in the warm old winter capital, with the Dzong between two rivers and the suspension bridge.',
      image: img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Paro',
    dayLabel: 'Day 4 to 6',
    images: [
      img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
      img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
      img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
      img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg')
    ],
    dayImages: {
      4: [
        img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
        img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
        img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
        img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg')
      ],
      5: [
        img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
        img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
        img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
        img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg')
      ],
      6: [
        img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
        img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
        img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
        img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · To Paro: Paro sightseeing`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'The National Museum in the old watchtower',
      'Rinpung Dzong and the Drukgyel ruins',
      `${DAY_MARK}Day 5 · Tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face',
      `${DAY_MARK}Day 6 · Departure from Paro`,
      'Breakfast at the hotel and check out',
      'Private transfer to Paro International for your flight home'
    ],
    accommodation: {
      name: 'Paro deluxe hotel, Paro',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Quiet hotel in the valley below Taktsang',
      images: [
        img('6bf17prwf3sc8619ydnhku7ql3im_2ss9r01c3uy63cm4cdsofjutm12c_1594647137_shutterstock_332339996.jpg'),
        img('g8jaarxigbsjtewijx2h4zrcdhu5_buildings-g30b54c53a_1920.jpg'),
        img('5w80mmnw4s9y37c9l4em6hj7weny_bhutan-g2fe144609_1920.jpg'),
        img('gm0gzzjx5k3mrqrkidwpyf8udp5f_shutterstock_1133789885.jpg'),
        img('d6pnacj0qx40us5i5qktnuzocce9_shutterstock_1255335592.jpg'),
        img('491ywszgfwbfx2sjm1ed19r5uscw_shutterstock_1253338396.jpg')
      ]
    },
    activities: [
      {
        name: 'Paro sightseeing tour',
        day: 4,
        optional: false,
        image: img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
        description: 'A guided round of the valley with the National Museum, Rinpung Dzong and the ruins of Drukgyel Dzong.'
      },
      {
        name: 'Hike to the Tiger\'s Nest',
        day: 5,
        optional: false,
        image: img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
        description: 'The climb to Taktsang, the monastery wedged into a cliff nine hundred metres above the Paro valley floor.'
      }
    ],
    program: {
      name: 'Paro',
      description: 'Days in the valley below Taktsang, with Rinpung Dzong, the National Museum and the Tiger’s Nest hike.',
      image: img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg')
    }
  }
];

const detail = {
  slug: 'gems-of-bhutan-thimphu-punakha-and-paro',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Gems of Bhutan: Thimphu, Punakha and Paro',
  alt: 'Whitewashed dzong walls above a Bhutanese river',
  days: '6 days / 5 nights',
  stations: '3 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Short trips',
  tags: ['Short trips', 'Culture'],
  price: 37326,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Thimphu', 'Punakha', 'Paro'],
  stats: { days: 6, cities: 3, hotels: 3, activities: 4, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['6 transfers', 'Transport'],
    ['0 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Fly in, three valleys, fly out. Five nights with every meal covered and nothing left for you to arrange.',
    quoteMore: 'Permits are handled for you, but carry two passport photographs anyway. Checkpoints inside the country still ask for them.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '6 days through Thimphu, Punakha, Paro, with 5 nights, all meals and a licensed Bhutanese guide: the local sightseeing tour, the paro sightseeing tour, the hike to the tiger\'s nest.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights across Thimphu, Punakha, Paro with all meals; all land transfers by private vehicle; the Local sightseeing tour; the Paro sightseeing tour; the Hike to the Tiger\'s Nest; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Thimphu (Arrival)', text: 'Arrival at Paro International and transfer to Thimphu\nThe road east along the Pa Chhu and the Wang Chhu\nCheck in and the rest of the day free', hotel: 'Thimphu deluxe hotel', highlights: ['Arrival at Paro International and transfer to Thimphu', 'The road east along the Pa Chhu and the Wang Chhu', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Local sightseeing (Travel day)', text: 'Breakfast, then out into the capital\nA guided half day round the town\nThe dzong, the temple and the market', hotel: 'Thimphu deluxe hotel', highlights: ['Breakfast, then out into the capital', 'A guided half day round the town', 'The dzong, the temple and the market'] },
    { title: 'Day 3: To Punakha: local sightseeing (Travel day)', text: 'Breakfast, then east over the Dochula pass\nThe hundred and eight chortens at the top\nA guided half day round the town\nThe dzong, the temple and the market', hotel: 'Punakha deluxe hotel', highlights: ['Breakfast, then east over the Dochula pass', 'The hundred and eight chortens at the top', 'A guided half day round the town'] },
    { title: 'Day 4: To Paro: Paro sightseeing (Travel day)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nThe National Museum in the old watchtower\nRinpung Dzong and the Drukgyel ruins', hotel: 'Paro deluxe hotel', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'The National Museum in the old watchtower'] },
    { title: 'Day 5: Tiger\'s nest hike (Travel day)', text: 'Breakfast, then out into the Paro valley\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Paro deluxe hotel', highlights: ['Breakfast, then out into the Paro valley', 'The climb up the pine slope to Taktsang', 'The monastery wedged into the cliff face'] },
    { title: 'Day 6: Departure from Paro (Travel day)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Paro International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Paro International for your flight home'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Bhutan', href: '/asien/bhutan' },
  { label: detail.title }
];

export const gemsOfBhutanThimphuPunakhaParoBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const gemsOfBhutanThimphuPunakhaParoProduct = {
  slug: detail.slug,
  places: ['Thimphu', 'Punakha', 'Paro'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 4,
  transfers: 6,
  meals: 0,
  price: detail.price,
  images: cardImages
};
