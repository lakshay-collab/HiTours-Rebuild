// Best of Hong Kong and Bali Holiday. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ghehnrab63ereurmnrqbpohtdzqz_shutterstock_1066838393.jpg'),
  img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
  img('khhimp8bk1jnmhpdm4eh6zplqh09_shutterstock_1399107680.jpg'),
  img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('66st1acnn47k8vw3qdun8mhrtko2_shutterstock_144116347.jpg'),
  img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
  img('2eacdx6582j62evhoxlc4akh1dr8_shutterstock_793844776%20(1).jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Hong Kong',
    dayLabel: 'Day 1 to 3',
    images: [
      img('ghehnrab63ereurmnrqbpohtdzqz_shutterstock_1066838393.jpg'),
      img('iinz3p192ck17u6bsn0h3fwkst6i_shutterstock_605396150.jpg'),
      img('e96si2oif10k11p6iagjq1vsbi9e_shutterstock_535647694%20(3).jpg'),
      img('6q17beifiizggtghufswgk727h42_shutterstock_2160956777.jpg')
    ],
    dayImages: {
      1: [
        img('ve6x7lhzmb1sn8130prtze3c0dbm_11284222906_eb0f060fbf_o.jpg'),
        img('dh82z3tjkgre0on4sr12976fqotk_shutterstock_518840509.jpg'),
        img('c3s3krvdk9vshptv8cs320x3hna9_Noahs-Ark-Gallery-light_box4-p-5%20(1).jpg'),
        img('d5vg3cp4bk45sijr5ufx9uvuwq13_1566548361_shutterstock_697919881_(1).jpg')
      ],
      2: [
        img('0zqom9ifiaumj6imkzcovvdtty8d_West%20Kowloon%20Art%20Park%201.jpg'),
        img('5v5vor8ikmphihtng57aa1rbdvzx_1566994554_Tsim_Sha_Tsui.jpg'),
        img('2yb5srl3cq1duebs2shn6o01f5p5_IMG_4466.JPG'),
        img('m8pvft0rhm1cyn9fuhw1qqzriqcl_DSC00589.jpg')
      ],
      3: [
        img('z5rmy84eeb213vosb7cebscdo96y_shutterstock_1164945472.jpg'),
        img('djef193baftkk9wjior2tm972pj4_1566997430_ocean_park.png'),
        img('ghehnrab63ereurmnrqbpohtdzqz_shutterstock_1066838393.jpg'),
        img('iinz3p192ck17u6bsn0h3fwkst6i_shutterstock_605396150.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Hong Kong`,
      'Arrival at Hong Kong Airport and private transfer to your hotel',
      'Check in at your hotel in Kowloon',
      'Rest of the day free near the harbour',
      'Optional: the Symphony of Lights show from the promenade',
      `${DAY_MARK}Day 2 · Hong Kong sightseeing`,
      'Breakfast, then a full day in the city with a guide',
      'Victoria Peak by the old tram line',
      'Aberdeen harbour and its sampan boats',
      'Repulse Bay and the jewellery workshops',
      `${DAY_MARK}Day 3 · A day at Ocean Park`,
      'Breakfast, then a full day at Ocean Park',
      'Cable car over the headland to the Summit',
      'The aquarium, the pandas and the rides',
      'Evening free in Kowloon'
    ],
    accommodation: {
      name: 'Regal Kowloon Hotel, Hong Kong',
      description: '3 nights · Breakfast · Standard room · 3★ · Tsim Sha Tsui East hotel, walking distance from the harbour',
      images: [
        img('kmelxg3o9t1gdcv7mxx5ih8uqyri_229469165.jpg'),
        img('cjj5r9gni5vja4o9es8fz69qaf8k_84746117.jpg'),
        img('w0zokeupxwgi9lj7aob37rm2zdru_222321920.jpg'),
        img('h6tgr2oj9ego138sa2pdimdvxs20_84745642.jpg'),
        img('yetv4bw0izrvq47kkm6ccee1cj7b_194404283.jpg'),
        img('rorfad055624cwpwenggm6ts94fh_229469047.jpg'),
        img('p8orsu15n5fcx7buv3z1omxro2lx_67293131.jpg'),
        img('9vwkxobnm4rb5mubn3wio3y6yjcv_67213609.jpg'),
        img('i1i8ryjrkxt5nmfghux83dsxka05_263627091.jpg'),
        img('c23k9ghluvj1hwykeib1zzffueob_112360452.jpg'),
        img('tu17mh150ga0icdzmqak0y8efj2h_73990709.jpg'),
        img('b25dl3jkrmapbgcrahwyexsvcvqg_112358447.jpg'),
        img('ert4jyp301jnip73gq37awf1hf2h_67214214.jpg'),
        img('g9yija2zjp7stvfbqptga1r5sfzo_5998354.jpg')
      ]
    },
    activities: [
      {
        name: 'Hong Kong sightseeing tour',
        day: 2,
        optional: false,
        image: img('0zqom9ifiaumj6imkzcovvdtty8d_West%20Kowloon%20Art%20Park%201.jpg'),
        description: 'Victoria Peak by tram, Aberdeen harbour and its sampans, Repulse Bay and the jewellery workshops, with a guide for the day.'
      },
      {
        name: 'Ocean Park Hong Kong',
        day: 3,
        optional: false,
        image: img('z5rmy84eeb213vosb7cebscdo96y_shutterstock_1164945472.jpg'),
        description: 'A full day ticket for the marine park on the south side, with the cable car over the headland, the aquarium and the pandas.'
      }
    ],
    program: {
      name: 'Hong Kong',
      description: 'Three nights in Kowloon with a city day by peak tram and sampan, and a full day at Ocean Park on the south side of the island.',
      image: img('ghehnrab63ereurmnrqbpohtdzqz_shutterstock_1066838393.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Ubud',
    subtitle: 'Ubud to Kintamani',
    dayLabel: 'Day 4 to 5',
    images: [
      img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
      img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
      img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
      img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg')
    ],
    dayImages: {
      4: [
        img('p5qmu24btsi6rw9ye14yp9y3v9js_1464162732_things-to-do-in-bali-ubud-art-market.jpg'),
        img('xhm7apn2p4xf3utfjc38fhrs94cs_1470740091_maxresdefault.jpg'),
        img('blc7rv8lvishrrzjuxwmcwyxm2ev_1464182679_Bali-Bird-Park-42414.jpg'),
        img('kmleb6ur2b7j83f6gt2jg3z1kaw0_1470727921_Goa_Gajah_Front.JPG')
      ],
      5: [
        img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('p1tzfipjpmq6677grx16krlrwx9v_shutterstock_243349891.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · On to Bali and Ubud`,
      'Breakfast and check out, then private transfer to the airport',
      'Optional: flight from Hong Kong to Denpasar, which we can add',
      'Arrival in Bali and private transfer to your Ubud villa',
      'Rest of the day free among the rice fields',
      `${DAY_MARK}Day 5 · Kintamani and the jungle swing`,
      'Breakfast, then a full day out with your own car and guide',
      'Coffee plantation tasting on the climb to Kintamani',
      'Tegenungan waterfall and the Tegalalang rice terraces',
      'A turn on the jungle swing above the valley'
    ],
    accommodation: {
      name: 'Asri Sari Villa, Ubud',
      description: '2 nights · Breakfast · Standard room · 3★ · Small villa property on the quiet edge of Ubud',
      images: [
        img('fmuyd4t6a8tae2mhjjq2kgvyrm4k_372195715.jpg'),
        img('19wdfzhuqz6ue1uwxbiwpekmran5_5a9b05866a6511e9b5360242ac110003.png'),
        img('cpejht313797g9yyaikchyjhgpty_372200719.jpg'),
        img('z1qa6sp20a5dd5vsi30pyts7fy36_59669518.jpg'),
        img('vns8yppqyy3ip3h6f9o64p0qtlu6_372195922.jpg'),
        img('3mow5ys0xodjbfm6xe5wputfa4iq_63fc5aee6a6511e9b2f80242ac110003.png'),
        img('7r40v7oznz3921ku04miantjszrm_372196695.jpg'),
        img('gwukjles0c8i1p4mrv8bmgomi1t0_04d0e9ad09ce12a36ef7fc8e0eaf6738.jpg'),
        img('9j5zhfyigdo6i2fi54u82rpmaqt4_372201177.jpg'),
        img('yue6hy3g3tnfbkw947izz0o2a69p_372199611.jpg')
      ]
    },
    activities: [
      {
        name: 'Kintamani with the jungle swing',
        day: 5,
        optional: false,
        image: img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        description: 'Coffee plantation tasting on the climb to Kintamani, the crater lake view, Tegenungan waterfall, the Tegalalang terraces and the jungle swing.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Two nights inland after the city, with a coffee plantation road up to the Kintamani crater and the rice terraces at Tegalalang.',
      image: img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Kuta',
    subtitle: 'Kuta to Tanah Lot and Nusa Penida',
    dayLabel: 'Day 6 to 8',
    images: [
      img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
      img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
      img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
      img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
    ],
    dayImages: {
      6: [
        img('gm4z6h3ftihhgfjz5wv0dkxygzy1_Tanah%20Lot%20Temple.jpg'),
        img('yypn4ifqplle2k6xycas2byxrje8_The-beautiful-looks-of-Ulun-Danu-temple-at-Beratan-lakeside-in-Bedugul-highland-Buleleng-regency-Bali-island-Bali-Hello-Travel-21.jpg'),
        img('xae4oyhdvs0gd93x9hq87jmwwwu7_taman-ayun-bali-temple.jpg'),
        img('i8sgqoounk3c3pnd81f80w1nhk0o_1498892801_alaskedaton.JPG')
      ],
      7: [
        img('g4aium5gj1oi4lbxfz1v2dgb2qp0_shutterstock_2427199549%20(1).jpg'),
        img('juwl1o8l3l3t7cd3tign11f5qbwb_23cfa5a555774cb793ff972ba1311093.jpg'),
        img('xxjdwssfts50rzk5wfvzelladqqu_1498724507_beach.jpg'),
        img('raz6i8qsplkduo2ddqpr2tqbahzi_download%20(11).jpg')
      ],
      8: [
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
        img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
        img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Tanah Lot and on to Kuta`,
      'Breakfast and check out, then on to the west coast',
      'Taman Ayun and the Alas Kedaton monkey forest',
      'Sunset at Tanah Lot, the sea temple on the rocks',
      'Check in at your Kuta hotel for two nights',
      `${DAY_MARK}Day 7 · Nusa Penida and four beaches`,
      'Early breakfast, then private transfer to Sanur harbour',
      'Speedboat across to Nusa Penida for the west coast',
      'Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach',
      'Return boat to Bali and back to your hotel',
      `${DAY_MARK}Day 8 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'Kuta Central Park Hotel, Kuta',
      description: '2 nights · Breakfast · Standard room · 4★ · Large pool hotel ten minutes from Kuta beach',
      images: [
        img('l3z6cusnu3visu607x27ji8lg6w2_CghzgVUwY1-ANyOoAAJBeQxhhp4409_W_1280_853_R5.webp'),
        img('mnfh6tj3j57xibt9tv5mwytoc604_88283476.jpg'),
        img('b5wm3ckydivqpvnmhkyfhgge7njr_170843272.jpg'),
        img('z9u3fcsksv9v25zpebjkizk0m7el_220u0g0000007x8eoFA39_W_1280_853_R5.webp'),
        img('krk01wm460rwvbz5zp1984hjhp82_221713340.jpg'),
        img('s6qkb6bk0gg79gf3c60zl0nv9t5x_2ef9a499_z.jpg'),
        img('sb5x8ojhdp2ttzwfqck1ztwroxin_221712713.jpg'),
        img('vb5uibq6sjy972ddh09ua9r4674n_4f123f80_z.webp'),
        img('h59zs5lnd1ldayvg9c4c0ej93hn5_220l0g0000007xkkjCB82_W_1280_853_R5.webp'),
        img('b6f3qfufgppm63qciya2ikrcyv6m_221718558.jpg'),
        img('dxqnkgmvzitlqhd6c5lo3j55c2xf_221713612.jpg'),
        img('hdy12p7f58qw5en0h1302ak8yevw_216025896.jpg'),
        img('97yyx6xycbdme491w5hf5hop1cmt_161438a_hb_k_002.jpg'),
        img('zrnhedcus3vn7z9mtnxrbg5orkbk_1888d976_z.webp')
      ]
    },
    activities: [
      {
        name: 'Monkey forest with Tanah Lot sunset',
        day: 6,
        optional: false,
        image: img('gm4z6h3ftihhgfjz5wv0dkxygzy1_Tanah%20Lot%20Temple.jpg'),
        description: 'Taman Ayun, the Alas Kedaton monkey forest and the lake temple at Beratan, finishing with sunset at the sea temple of Tanah Lot.'
      },
      {
        name: 'Nusa Penida west coast by speedboat',
        day: 7,
        optional: false,
        image: img('g4aium5gj1oi4lbxfz1v2dgb2qp0_shutterstock_2427199549%20(1).jpg'),
        description: 'Speedboat across to Nusa Penida for Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach, the island\'s four best known stops.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Two nights on the coast to finish, with a temple day that ends at Tanah Lot and a full island day on Nusa Penida.',
      image: img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-hong-kong-and-bali-holiday',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Hong Kong and Bali Holiday',
  alt: 'Victoria Harbour and the Hong Kong skyline at dusk',
  days: '8 days / 7 nights',
  stations: '3 stops',
  transport: 'Private transfers, city tours and guided day tours',
  tag: 'Family',
  tags: ['Family', 'Culture'],
  price: 94002,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hong Kong', 'Ocean Park', 'Ubud', 'Kuta', 'Nusa Penida'],
  stats: { days: 8, cities: 3, hotels: 3, activities: 5, transfers: 13 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['13 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Hong Kong for three nights is exactly right. Long enough for the peak and Ocean Park, short enough to still want Bali.',
    quoteMore: 'Take an Octopus card on arrival in Hong Kong, it works on the tram, the metro and the Star Ferry. Fly to Bali in the morning so you still have a rice field evening in Ubud.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days across two very different places: three nights in Kowloon for Victoria Peak, Aberdeen harbour and Ocean Park, then five in Bali for Kintamani, the jungle swing, sunset at Tanah Lot and a day on Nusa Penida.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights with daily breakfast; private airport and inter city transfers; Hong Kong sightseeing tour; Ocean Park day ticket; Kintamani and jungle swing tour; monkey forest with Tanah Lot sunset; Nusa Penida west coast tour.',
  intro2: 'Not included: international flights; the Hong Kong to Denpasar flight, which we can add; visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hong Kong (Arrival)', text: 'Arrival at Hong Kong Airport and private transfer to your hotel\nCheck in at your hotel in Kowloon\nRest of the day free near the harbour\nOptional: the Symphony of Lights show from the promenade', hotel: 'Regal Kowloon Hotel, Hong Kong', highlights: ['Arrival at Hong Kong Airport and private transfer to your hotel', 'Check in at your hotel in Kowloon', 'Rest of the day free near the harbour'] },
    { title: 'Day 2: Hong Kong sightseeing (B)', text: 'Breakfast, then a full day in the city with a guide\nVictoria Peak by the old tram line\nAberdeen harbour and its sampan boats\nRepulse Bay and the jewellery workshops', hotel: 'Regal Kowloon Hotel, Hong Kong', highlights: ['Breakfast, then a full day in the city with a guide', 'Victoria Peak by the old tram line', 'Aberdeen harbour and its sampan boats'] },
    { title: 'Day 3: A day at Ocean Park (B)', text: 'Breakfast, then a full day at Ocean Park\nCable car over the headland to the Summit\nThe aquarium, the pandas and the rides\nEvening free in Kowloon', hotel: 'Regal Kowloon Hotel, Hong Kong', highlights: ['Breakfast, then a full day at Ocean Park', 'Cable car over the headland to the Summit', 'The aquarium, the pandas and the rides'] },
    { title: 'Day 4: On to Bali and Ubud (B)', text: 'Breakfast and check out, then private transfer to the airport\nOptional: flight from Hong Kong to Denpasar, which we can add\nArrival in Bali and private transfer to your Ubud villa\nRest of the day free among the rice fields', hotel: 'Asri Sari Villa, Ubud', highlights: ['Breakfast and check out, then private transfer to the airport', 'Optional: flight from Hong Kong to Denpasar, which we can add', 'Arrival in Bali and private transfer to your Ubud villa'] },
    { title: 'Day 5: Kintamani and the jungle swing (B)', text: 'Breakfast, then a full day out with your own car and guide\nCoffee plantation tasting on the climb to Kintamani\nTegenungan waterfall and the Tegalalang rice terraces\nA turn on the jungle swing above the valley', hotel: 'Asri Sari Villa, Ubud', highlights: ['Breakfast, then a full day out with your own car and guide', 'Coffee plantation tasting on the climb to Kintamani', 'Tegenungan waterfall and the Tegalalang rice terraces'] },
    { title: 'Day 6: Tanah Lot and on to Kuta (B)', text: 'Breakfast and check out, then on to the west coast\nTaman Ayun and the Alas Kedaton monkey forest\nSunset at Tanah Lot, the sea temple on the rocks\nCheck in at your Kuta hotel for two nights', hotel: 'Kuta Central Park Hotel, Bali', highlights: ['Breakfast and check out, then on to the west coast', 'Taman Ayun and the Alas Kedaton monkey forest', 'Sunset at Tanah Lot, the sea temple on the rocks'] },
    { title: 'Day 7: Nusa Penida and four beaches (B)', text: 'Early breakfast, then private transfer to Sanur harbour\nSpeedboat across to Nusa Penida for the west coast\nKelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach\nReturn boat to Bali and back to your hotel', hotel: 'Kuta Central Park Hotel, Bali', highlights: ['Early breakfast, then private transfer to Sanur harbour', 'Speedboat across to Nusa Penida for the west coast', 'Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach'] },
    { title: 'Day 8: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; the Hong Kong to Denpasar flight, which we can add; visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Indonesia', href: '/asien/indonesia' },
  { label: detail.title }
];

export const hongKongBaliHolidayBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const hongKongBaliHolidayProduct = {
  slug: detail.slug,
  places: ['Hong Kong', 'Ocean Park', 'Ubud', 'Kuta', 'Nusa Penida'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 5,
  transfers: 13,
  meals: 7,
  price: detail.price,
  images: cardImages
};
