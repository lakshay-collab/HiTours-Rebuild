// Best of Bali with Flights and Nusa Penida. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
  img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
  img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
  img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
  img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
  img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
  img('vw1jdzp1l58j49c880uhxpm8jxfh_images%20(81).jpg'),
  img('d7r6g7g7gvn5bsd70bwvjbaqb79t_1470899547_red-eared-slider-1201602_960_720.jpg'),
  img('wdeo42e7dxvmmk4r2t06kw95kxli_Downpic.cc-image468394368.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kuta',
    subtitle: 'Kuta to Uluwatu and Nusa Penida',
    dayLabel: 'Day 1 to 4',
    images: [
      img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
      img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
      img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
      img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
    ],
    dayImages: {
      1: [
        img('vw1jdzp1l58j49c880uhxpm8jxfh_images%20(81).jpg'),
        img('d7r6g7g7gvn5bsd70bwvjbaqb79t_1470899547_red-eared-slider-1201602_960_720.jpg'),
        img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
        img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg')
      ],
      2: [
        img('wdeo42e7dxvmmk4r2t06kw95kxli_Downpic.cc-image468394368.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('usdgmsoaand8ytcb34q674qu6c2p_1470909118_Hanoman_Kecak_Dance_Uluwatu_sunset.jpg'),
        img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg')
      ],
      3: [
        img('cguivougdg0xu06qtmdqkhs278dr_Kelingking%20Beach,%20Nusa%20Penida%203.jpg'),
        img('juwl1o8l3l3t7cd3tign11f5qbwb_23cfa5a555774cb793ff972ba1311093.jpg'),
        img('xxjdwssfts50rzk5wfvzelladqqu_1498724507_beach.jpg'),
        img('o974vnhozbrtaa60gdp3uzoxorjz_37530932040_49a7318d15_o.jpg')
      ],
      4: [
        img('6dn215ssrisvwxp9ulwbfh7h0i1s_night-markets-phuket-thailand.jpg'),
        img('deriva74h0yzbv3z7xmdudk0w70b_1464167116_kuta-square.jpg'),
        img('g72m3ehync8t6tn7yjyz5dm47mq1_1470898081_17_Years_of_Sekar_Jepun_2014-11-01_64_edit.jpg'),
        img('85ll3znhmo6ucxcl0w2xq85ehe5i_1470899861_Bali__E2_80_93_Ground_Zero_Monument_(2692318786).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Flight to Bali and Kuta`,
      'Flight from Delhi to Denpasar, included in your package',
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your Legian hotel and settle in',
      'Rest of the day free near the beach',
      `${DAY_MARK}Day 2 · Water sports and Uluwatu`,
      'Breakfast, then a morning at Tanjung Benoa beach',
      'Parasailing, jet ski and a banana boat with an instructor',
      'Uluwatu temple on the cliffs at sunset',
      'Kecak fire dance in the temple amphitheatre afterwards',
      `${DAY_MARK}Day 3 · Nusa Penida and snorkelling`,
      'Early breakfast, then private transfer to Sanur harbour',
      'Speedboat across to Nusa Penida for the west coast',
      'Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach',
      'Snorkelling and a local lunch before the boat back',
      `${DAY_MARK}Day 4 · Free day in Kuta`,
      'Breakfast and a full day free on the coast',
      'Optional: a surf lesson with an instructor on Kuta beach',
      'Optional: Beachwalk mall or the Legian bars in the evening',
      'Optional: a spa afternoon near the hotel'
    ],
    accommodation: {
      name: 'Bliss Surfer Hotel Legian, Kuta',
      description: '4 nights · Breakfast · Super deluxe room · 4★ · Legian hotel with a rooftop pool, ten minutes from Kuta beach',
      images: [
        img('7jkezltbektvhcm8sex4mynast55_173524a_hb_w_010_20250414_071216.jpg'),
        img('jxobpxm1lrzonwgnibjotlg0kuvv_173524a_hb_p_002_20250414_070526.JPG'),
        img('9nd5mqxogl069fejmsifrczr15ol_173524a_hb_p_001_20250414_070525.JPG'),
        img('14aploch2071r5jtdx0virvo2h6x_173524a_hb_p_004_20250414_070529.JPG'),
        img('6ypij2ndzvw083luf0j8tjoyop4q_173524a_hb_p_003_20250414_070528.JPG'),
        img('kdt4p3ijnmxdr80os63mdjryj348_173524a_hb_ro_036_20250414_070130.jpg'),
        img('zvaaknzbu22olks2ujev0awdazdr_173524a_hb_ro_037_20251105_073034.jpg'),
        img('wc67i41tn35p6piyobkscl3jgvhb_173524a_hb_w_009_20250414_071214.jpg'),
        img('zwws3g9ajs93xzn3vfdaozfwywdp_173524a_hb_w_008_20250414_071213.jpg'),
        img('6lk5i6dgr7qr7njzn9qkr1b7wc8c_173524a_hb_w_005_20250414_071210.jpg'),
        img('2m0kegdw81a3d3r2yaeeyyw876cl_173524a_hb_w_007_20250414_071212.jpg'),
        img('bdv7kfmqfe1rfajgnlu0qjrbc8kl_173524a_hb_w_006_20250414_071211.jpg'),
        img('uqul6psgsojabr2u9atpd8rtevzz_173524a_hb_ro_035_20250414_070019.jpg'),
        img('hrk7gtazh6x0fvg3c21zgnieudc2_173524a_hb_ro_034_20250414_070018.jpg'),
        img('xbhrybt33hg8p10hlxojle3b9kc5_173524a_hb_k_002_20250414_070809.jpg'),
        img('qns0em2k2cnm3lukc2fxefi4ow0t_173524a_hb_w_001_20250414_070925.jpg'),
        img('pj6m4p7ogbz9qhi2g87dr518j432_173524a_hb_w_003_20250414_070928.jpg'),
        img('l6jquvhudlyhcfy2cr6eflpyc1rz_173524a_hb_w_002_20250414_070926.jpg'),
        img('lpbknw2t7uooi01t0nwmiv65nv7p_173524a_hb_k_003_20250414_070811.jpg')
      ]
    },
    activities: [
      {
        name: 'Water sports, Uluwatu and the Kecak dance',
        day: 2,
        optional: false,
        image: img('wdeo42e7dxvmmk4r2t06kw95kxli_Downpic.cc-image468394368.jpg'),
        description: 'Parasailing, jet ski and a banana boat at Tanjung Benoa, then Uluwatu temple at sunset and the Kecak fire dance in the cliff amphitheatre.'
      },
      {
        name: 'Nusa Penida west coast with snorkelling',
        day: 3,
        optional: false,
        image: img('cguivougdg0xu06qtmdqkhs278dr_Kelingking%20Beach,%20Nusa%20Penida%203.jpg'),
        description: 'Speedboat across for Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach, with snorkelling and a local lunch included.'
      },
      {
        name: 'Kuta beach and Legian',
        day: 4,
        optional: true,
        image: img('d7r6g7g7gvn5bsd70bwvjbaqb79t_1470899547_red-eared-slider-1201602_960_720.jpg'),
        description: 'The long surf beach below Legian, with boards and lessons on the sand, and beach bars that stay busy until the sun drops.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Four nights in Legian with a water sports and Uluwatu day, a full island day on Nusa Penida and a free day on the beach.',
      image: img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Ubud',
    subtitle: 'Ubud to Kintamani',
    dayLabel: 'Day 5 to 7',
    images: [
      img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
      img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
      img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
      img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg')
    ],
    dayImages: {
      5: [
        img('66bta6tykrqswxkgaqcapozcbqei_Kintamani%20Highlands,%20Bali%201.jpg'),
        img('p5qmu24btsi6rw9ye14yp9y3v9js_1464162732_things-to-do-in-bali-ubud-art-market.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('yx9uedsyf0x9qg3xk4d8v711tcfz_Mount%20Batur%201.jpg')
      ],
      6: [
        img('vyu0y3fqr4w6aj8mv2pg7pbc92ah_1498565182_d852a63e0c9dce4af4cbe8bd706394d2.jpg'),
        img('qc1yophslknxmsjuxv7tdovh1r3t_Monkey%20Forest,%20Ubud.jpg'),
        img('ktx4cnkx2n6hyba7l8hiksl71pd6_1470729311_12985404_1704992503123002_1339505952199382069_n.jpg'),
        img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg')
      ],
      7: [
        img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
        img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
        img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
        img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Kintamani and on to Ubud`,
      'Breakfast and check out, then north through the highlands',
      'Mount Batur viewpoint and a coffee plantation tasting',
      'Tegenungan waterfall and the Bali jungle swing',
      'Check in at your villa in the Ubud rice fields',
      `${DAY_MARK}Day 6 · Free day in Ubud`,
      'Breakfast and a full day free in Ubud',
      'Optional: the Monkey Forest and the Saraswati water temple',
      'Optional: the art market and the palace in the town centre',
      'Optional: a cooking class or a yoga session at the villa',
      `${DAY_MARK}Day 7 · Departure from Bali`,
      'Breakfast at the villa and check out',
      'Private transfer to Ngurah Rai Airport for your return flight'
    ],
    accommodation: {
      name: 'Alam Puisi Villa, Ubud',
      description: '2 nights · Breakfast · Super deluxe room · 4★ · Villa resort in the rice fields west of Ubud town',
      images: [
        img('9qxvk8xazllml0ifkv634rvqiqxn_download%20-%202024-07-10T140315.291.jpg'),
        img('tl9gdulptnw3fsuw0fgqotj11nta_download%20-%202024-07-10T135539.057.jpg'),
        img('78j6i291d76y9rmpou4hixoox7fu_Alam%20Puisi%20Vill.jpg'),
        img('x1pgpvhueutjsgsuwlnxhtnnjzme_download%20-%202024-07-10T135453.684.jpg'),
        img('gcd7n7js4bbx852ngm0n1sagfom1_download%20-%202024-07-10T135448.678.jpg'),
        img('x7dhhsbybgqobtbk3wr4m3wp6bep_download%20-%202024-07-10T135433.781.jpg'),
        img('fibzc5w6nf0oidghbw6gffrrsfxl_download%20-%202024-07-10T135458.363.jpg'),
        img('n69v6ar2tjzly80ujcg60qzxc2xq_download%20-%202024-07-10T135717.054.jpg'),
        img('49s6sskxqd293qvvenart50musdz_download%20-%202024-07-10T135517.756.jpg'),
        img('hdap7uxehjbe5o0f9v6o4nbfrtam_download%20-%202024-07-10T135444.852.jpg'),
        img('88euju6f8a8jsygn79w49tv8k0j1_download%20-%202024-07-10T135522.728.jpg'),
        img('o7ni3loz6ubseosegv2adaflsl7f_download%20-%202024-07-10T135544.966.jpg'),
        img('ix6zyw5jhmzonhrkkw59qq4jbw82_download%20-%202024-07-10T135727.667.jpg'),
        img('x9fcwcmj4n9lb9ie8d4s3g46u068_download%20-%202024-07-10T135439.531.jpg'),
        img('pz4o7d7yr3vrv1l7jx1bxgcof57i_download%20-%202024-07-10T135526.838.jpg'),
        img('w5uc1rllqrrjvazpjj8zy2ctg3cd_download%20-%202024-07-10T135601.049.jpg'),
        img('1xc927nt40pt8o94569myj48t4u7_download%20-%202024-07-10T135610.181.jpg'),
        img('kiuhlloz73np3v8i72b2mk6oct7l_download%20-%202024-07-10T135615.028.jpg')
      ]
    },
    activities: [
      {
        name: 'Kintamani highlands tour',
        day: 5,
        optional: false,
        image: img('66bta6tykrqswxkgaqcapozcbqei_Kintamani%20Highlands,%20Bali%201.jpg'),
        description: 'The Mount Batur viewpoint, a coffee plantation tasting, Tegenungan waterfall and a turn on the Bali jungle swing on the way to Ubud.'
      },
      {
        name: 'Ubud Monkey Forest',
        day: 6,
        optional: true,
        image: img('qc1yophslknxmsjuxv7tdovh1r3t_Monkey%20Forest,%20Ubud.jpg'),
        description: 'Banyan trees, moss covered shrines and a few hundred macaques in a sanctuary ten minutes on foot from the Ubud market.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Two nights in a rice field villa to finish, reached by way of the Kintamani highlands, with a free day for the town and its temples.',
      image: img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-bali-with-flights-and-nusa-penida',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Bali with Flights and Nusa Penida',
  alt: 'Cliffs above Kelingking beach on Nusa Penida, Bali',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Return flights, private transfers and guided tours',
  tag: 'Beach',
  tags: ['Honeymoon', 'Beach'],
  price: 70870,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kuta', 'Uluwatu', 'Nusa Penida', 'Ubud', 'Kintamani'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 3, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Flights, a four star beach hotel and a rice field villa in one price. This is the package I send most often.',
    quoteMore: 'Four nights on the coast means you can split the island days with a lazy one in between. Ask for a rooftop pool room in Legian and a garden villa in Ubud when we confirm.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days with return flights included: four nights in Legian for water sports, Uluwatu at sunset and a full day on Nusa Penida with snorkelling, then two nights in a rice field villa near Ubud by way of the Kintamani highlands.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: return flights from Delhi; 6 nights with daily breakfast; private airport and inter city transfers; water sports with Uluwatu and the Kecak dance; Nusa Penida west coast tour with snorkelling and lunch; Kintamani highlands tour.',
  intro2: 'Not included: Indonesia visa fees; lunches and dinners other than the one stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Flight to Bali and Kuta (Arrival)', text: 'Flight from Delhi to Denpasar, included in your package\nArrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your Legian hotel and settle in\nRest of the day free near the beach', hotel: 'Bliss Surfer Hotel Legian', highlights: ['Flight from Delhi to Denpasar, included in your package', 'Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your Legian hotel and settle in'] },
    { title: 'Day 2: Water sports and Uluwatu (B)', text: 'Breakfast, then a morning at Tanjung Benoa beach\nParasailing, jet ski and a banana boat with an instructor\nUluwatu temple on the cliffs at sunset\nKecak fire dance in the temple amphitheatre afterwards', hotel: 'Bliss Surfer Hotel Legian', highlights: ['Breakfast, then a morning at Tanjung Benoa beach', 'Parasailing, jet ski and a banana boat with an instructor', 'Uluwatu temple on the cliffs at sunset'] },
    { title: 'Day 3: Nusa Penida and snorkelling (B, L)', text: 'Early breakfast, then private transfer to Sanur harbour\nSpeedboat across to Nusa Penida for the west coast\nKelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach\nSnorkelling and a local lunch before the boat back', hotel: 'Bliss Surfer Hotel Legian', highlights: ['Early breakfast, then private transfer to Sanur harbour', 'Speedboat across to Nusa Penida for the west coast', 'Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach'] },
    { title: 'Day 4: Free day in Kuta (B)', text: 'Breakfast and a full day free on the coast\nOptional: a surf lesson with an instructor on Kuta beach\nOptional: Beachwalk mall or the Legian bars in the evening\nOptional: a spa afternoon near the hotel', hotel: 'Bliss Surfer Hotel Legian', highlights: ['Breakfast and a full day free on the coast', 'Optional: a surf lesson with an instructor on Kuta beach', 'Optional: Beachwalk mall or the Legian bars in the evening'] },
    { title: 'Day 5: Kintamani and on to Ubud (B)', text: 'Breakfast and check out, then north through the highlands\nMount Batur viewpoint and a coffee plantation tasting\nTegenungan waterfall and the Bali jungle swing\nCheck in at your villa in the Ubud rice fields', hotel: 'Alam Puisi Villa', highlights: ['Breakfast and check out, then north through the highlands', 'Mount Batur viewpoint and a coffee plantation tasting', 'Tegenungan waterfall and the Bali jungle swing'] },
    { title: 'Day 6: Free day in Ubud (B)', text: 'Breakfast and a full day free in Ubud\nOptional: the Monkey Forest and the Saraswati water temple\nOptional: the art market and the palace in the town centre\nOptional: a cooking class or a yoga session at the villa', hotel: 'Alam Puisi Villa', highlights: ['Breakfast and a full day free in Ubud', 'Optional: the Monkey Forest and the Saraswati water temple', 'Optional: the art market and the palace in the town centre'] },
    { title: 'Day 7: Departure from Bali (B)', text: 'Breakfast at the villa and check out\nPrivate transfer to Ngurah Rai Airport for your return flight', hotel: 'Departure', highlights: ['Breakfast at the villa and check out', 'Private transfer to Ngurah Rai Airport for your return flight'] }
  ],
  outro: 'Not included: Indonesia visa fees; lunches and dinners other than the one stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Indonesia', href: '/asia/indonesia' },
  { label: detail.title }
];

export const bestOfBaliFlightsNusaPenidaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfBaliFlightsNusaPenidaProduct = {
  slug: detail.slug,
  places: ['Kuta', 'Uluwatu', 'Nusa Penida', 'Ubud', 'Kintamani'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 3,
  transfers: 9,
  meals: 7,
  price: detail.price,
  images: cardImages
};
