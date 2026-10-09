// Bali Honeymoon with Swing and Sea Shores. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
  img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
  img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Ubud',
    subtitle: 'Ubud to Bedugul',
    dayLabel: 'Day 1 to 3',
    images: [
      img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
      img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
      img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
      img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg')
    ],
    dayImages: {
      1: [
        img('kmleb6ur2b7j83f6gt2jg3z1kaw0_1470727921_Goa_Gajah_Front.JPG'),
        img('blc7rv8lvishrrzjuxwmcwyxm2ev_1464182679_Bali-Bird-Park-42414.jpg'),
        img('4qzfjlhp9rb7opyc8dzvjjpgi0cy_1470896048_9396103363_d354fd2bc4_b.jpg'),
        img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg')
      ],
      2: [
        img('q77aw23cnynqx76tj5h7hs0ehogc_Tirta%20Empul-2.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('2kpx79s3vxrjrh07k2kaajmjalmw_shutterstock_2313711741.jpg')
      ],
      3: [
        img('973natt55orxsysivg2b1xutcf22_3q6hx7s6er01ldwrq9sgh4twbokj_shutterstock_2474005447.webp'),
        img('63rp5vt6fg9lnhd2bsolet8cpft3_ezgif-4-1fcf41f031.jpg'),
        img('zwzrpc8zhw3jl7ltwuqtrh8zmm8s_bali%20handara%20gate.jpg'),
        img('357v9kk3cmxv2zbksyw0pxsixy9b_Leke%20Leke%20Waterfall-1.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Ubud`,
      'Arrival at Ngurah Rai Airport and private transfer to Ubud',
      'Check in at your villa in the rice fields',
      'Rest of the day free at your own pace',
      'Optional: the Ubud market lanes or the Monkey Forest',
      `${DAY_MARK}Day 2 · Central Bali by vintage Volkswagen`,
      'Breakfast, then an open top vintage Volkswagen for the day',
      'A turn on the jungle swing above the valley',
      'Tegenungan waterfall and the rice terraces',
      'Tirta Empul, the holy spring temple, before the drive back',
      `${DAY_MARK}Day 3 · Bedugul lakes and Tanah Lot`,
      'Breakfast, then north into the highlands',
      'The Handara gate for photographs',
      'Ulun Danu Beratan, the temple standing on the lake',
      'Sunset at Tanah Lot on the way back'
    ],
    accommodation: {
      name: 'Ubud Raya Villa, Ubud',
      description: '3 nights · Breakfast · Standard room · 4★ · Small villa property in the rice fields near Ubud town',
      images: [
        img('f8f6c0enql3nc2t5t4zej497ve2z_137adf09efe929bb30c35a5632e7cd3a34591259.JPEG'),
        img('8upqx7nh8ilbr65kslssl80uuw10_6af0fae2530455539112de991fbd52fa5d3176be.JPEG'),
        img('0mmojw8lypn0ao9v2yln31gbjmxi_4f389bc77d0650c8bd34e7be222984ac361a5466.jpeg'),
        img('au8z442kmjzjvs39bsor1afjlzpw_5fcc6898fbf069c1a42ce3f2e83dc3e4972d3b18.jpeg'),
        img('vidslljirg0ncemsstmlvlc0ybrb_91d6657239a5957a4d34122aec75ee53ebbbfdb1.jpeg'),
        img('6i1qu1ytgqp6mwnhyjm880b8cv7h_e66be96b7da8774494dae44a60527f489089f961.jpeg'),
        img('wgb8wynk0bylqlvv6rjdbrpxaq3k_d283ffe9cee43f5d96ef63c56bd4dd00599cacb5.jpeg'),
        img('82pftugcsu7mp5kvw5jiwx2ntgkp_c8a87f52234389f8743ca23947fe776c00222af1.jpeg'),
        img('wm87qpedv9mtqy57l3h4i7j5s2x6_0a9c888a61041c1deff45e6e3481cf9f6e4d8cdf.jpeg'),
        img('8f5alaxve7we1allf36eu80gdhu9_1a864a1e24c24528cee9356755aac39c44ab1ac2.jpeg'),
        img('a1nsxmg49gwg48q2kt8oqdgylko7_414ca3b9a26cc2781ff1000bee02b92140cf1d73.jpeg'),
        img('ebc1idwd1m3iq3lv0wrsbuq76x7k_165e519d62a0b49b666dd5f20267620926e6afaa.jpeg'),
        img('dsc6ivue69d6tbdb4q6uequ5fa1h_b730df7ae35d084549e8bb143095a6e342219a62.jpeg'),
        img('uq40his17pht9ui79weriyeplzql_ee427b2fb149bb1454d81d919e69356fd2c72db7.JPEG'),
        img('x9smr8uuvun15tfckzmg7p0a8x9d_f17346da73f9d4e7d7b1894b55060ef5ec8d0ff9.JPEG')
      ]
    },
    activities: [
      {
        name: 'Central Bali in a vintage Volkswagen',
        day: 2,
        optional: false,
        image: img('q77aw23cnynqx76tj5h7hs0ehogc_Tirta%20Empul-2.jpg'),
        description: 'An open top vintage Volkswagen for the day through the rice fields, with the jungle swing, Tegenungan waterfall and the holy spring temple at Tirta Empul.'
      },
      {
        name: 'Bedugul lakes and Tanah Lot sunset',
        day: 3,
        optional: false,
        image: img('973natt55orxsysivg2b1xutcf22_3q6hx7s6er01ldwrq9sgh4twbokj_shutterstock_2474005447.webp'),
        description: 'The Handara gate, the lake temple of Ulun Danu Beratan in the cool highlands, then Tanah Lot on the rocks as the sun goes down.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Three nights inland with a vintage Volkswagen day through central Bali and a highland day up to the Bedugul lake temples.',
      image: img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuta',
    subtitle: 'Kuta to Uluwatu and Nusa Penida',
    dayLabel: 'Day 4 to 6',
    images: [
      img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
      img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
      img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
      img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
    ],
    dayImages: {
      4: [
        img('hqmy02zrpajp8q2k7o4uuu4ww7nw_jjhc9ym7ybnvbjfwnziy2v4q3gac_hau587bp52lss2s707h2akmhw3gb_v4i29j28zm6fic2s5hm5231e67ar_1498545551_meslastidronestagram.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('usdgmsoaand8ytcb34q674qu6c2p_1470909118_Hanoman_Kecak_Dance_Uluwatu_sunset.jpg'),
        img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg')
      ],
      5: [
        img('t0maljvk56ovlztbtfx1w286arze_lrt2zsu6jyqlgqjvc2q9mn7dtt63_hr1pqdhfpxau4k7xzg517d1m7ht1_Broken-Beach-3.jpg'),
        img('juwl1o8l3l3t7cd3tign11f5qbwb_23cfa5a555774cb793ff972ba1311093.jpg'),
        img('xxjdwssfts50rzk5wfvzelladqqu_1498724507_beach.jpg'),
        img('o974vnhozbrtaa60gdp3uzoxorjz_37530932040_49a7318d15_o.jpg')
      ],
      6: [
        img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
        img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
        img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Melasti beach and Uluwatu`,
      'Breakfast and check out, then south to Melasti beach',
      'Parasailing and a jet ski at Tanjung Benoa',
      'Uluwatu temple on the cliffs at sunset',
      'Kecak fire dance, then check in near Seminyak',
      `${DAY_MARK}Day 5 · Nusa Penida west coast`,
      'Early breakfast, then private transfer to Sanur harbour',
      'Speedboat across to Nusa Penida',
      'The Paluang cliff viewpoint and Kelingking beach',
      'Angel\'s Billabong and Broken Bay before the boat back',
      `${DAY_MARK}Day 6 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'Desamuda Village, Kuta',
      description: '2 nights · Breakfast · Standard room · 3★ · Garden hotel with a pool, a short walk from Seminyak beach',
      images: [
        img('tihi7nmfou28yp27vnv8ajunx7kh_img1.jpg'),
        img('izwlsl57fc23172kvfb8mh3km9iv_img2.jpg'),
        img('b0sf6v4739f59xcfxxn7bmky6mng_img3.jpg'),
        img('5rt7plupwdrr0tnzx1ac1om28pfp_img4.jpg'),
        img('xeewx5hz49hrszng2mfd07cnkgy8_img5.jpg'),
        img('iqq82suwx7w15ka8cc059l0f1fr3_img6.jpg'),
        img('qprr1x5nrd6io215d0fqzugquxs3_img7.jpg'),
        img('6ub1qoqq5iw0q0g6sgtsc2gpszcn_img8.jpg'),
        img('vzjwkxphzn8fbht7tzovlolfycbw_img9.jpg'),
        img('llm75hlyhhkvvgk0dxhi1ikrnc40_img10.jpg'),
        img('p9yvddin8tj98zqmlhd4rjoyhpb7_img11.jpg'),
        img('04qo8tqqkxb46p98aulreehoymry_img12.jpg'),
        img('e52s04so7v1hqbd6q2mthv9i28jw_img13.jpg'),
        img('4kb1rso9octle78n99ojdv327yo8_img14.jpg'),
        img('g63uwk933wcabirutka6bc3bnd4j_img15.jpg'),
        img('a7d7fogbpeeg8p9h1crejqu9ssya_img16.jpg'),
        img('3o35eqlduw71u24fidfclfkr1yps_img17.jpg'),
        img('fgzs34me7nqr80csnwteno0c4qjc_img18.jpg'),
        img('yki52n487tjb9ivark0v16vn0h2n_img19.jpg'),
        img('3pfyobf7g62lx2lj7aqns0042q7x_img20.jpg'),
        img('b05haee9u9saknpysvjqu9azqckt_img21.jpg'),
        img('itowsrzmbnr9h209wlor0is86hwo_img22.jpg'),
        img('pqv2vh7br8867jceeqlawh71wr4y_img23.jpg'),
        img('9m17i0f1ki4jkjgbnbgv4p5cp67p_img24.jpg'),
        img('kz5rfnsrll1asjd2rfgrudivw444_img25.jpg'),
        img('idf8u65tsn0j2xt3r72htpl6ygq1_img26.jpg'),
        img('9e0r5brwvo33meefdw2drtbkyvgi_img27.jpg'),
        img('d4lhoexbj1jjgbiolwp9p2os5qbl_img28.jpg'),
        img('2ekq5e1lq2ktdv6sxwemx0smloo9_img29.jpg')
      ]
    },
    activities: [
      {
        name: 'Melasti beach, water sports and Uluwatu',
        day: 4,
        optional: false,
        image: img('hqmy02zrpajp8q2k7o4uuu4ww7nw_jjhc9ym7ybnvbjfwnziy2v4q3gac_hau587bp52lss2s707h2akmhw3gb_v4i29j28zm6fic2s5hm5231e67ar_1498545551_meslastidronestagram.jpg'),
        description: 'The white sand of Melasti beach, parasailing and a jet ski at Tanjung Benoa, then Uluwatu at sunset with the Kecak fire dance.'
      },
      {
        name: 'Nusa Penida west with Paluang cliff',
        day: 5,
        optional: false,
        image: img('t0maljvk56ovlztbtfx1w286arze_lrt2zsu6jyqlgqjvc2q9mn7dtt63_hr1pqdhfpxau4k7xzg517d1m7ht1_Broken-Beach-3.jpg'),
        description: 'Speedboat across for the Paluang cliff viewpoint, Kelingking beach, Angel\'s Billabong and Broken Bay with your own guide.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Two nights on the coast with a south Bali day that ends at Uluwatu, and a full island day on Nusa Penida.',
      image: img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
    }
  }
];

const detail = {
  slug: 'bali-honeymoon-with-swing-and-sea-shores',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bali Honeymoon with Swing and Sea Shores',
  alt: 'Jungle swing above the Tegalalang rice terraces, Bali',
  days: '6 days / 5 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided day tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Culture'],
  price: 34979,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ubud', 'Bedugul', 'Kuta', 'Uluwatu', 'Nusa Penida'],
  stats: { days: 6, cities: 2, hotels: 2, activities: 4, transfers: 13 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['13 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'The vintage Volkswagen day is the one couples put on the wall when they get home. Open top, rice fields, no hurry.',
    quoteMore: 'Keep the Nusa Penida day for the end so a rough sea morning can be swapped with the Uluwatu day. Both work either way around.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days for two with three nights in the Ubud rice fields for a vintage Volkswagen day and the Bedugul lake temples, then two nights near Seminyak with Melasti beach, water sports, Uluwatu at sunset and a full day on Nusa Penida.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights with daily breakfast; private airport and inter city transfers; central Bali tour in a vintage Volkswagen with Tirta Empul; full day Bedugul tour with Tanah Lot sunset; Melasti beach with water sports, Uluwatu and the Kecak dance; Nusa Penida west coast tour with the Paluang cliff.',
  intro2: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Ubud (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to Ubud\nCheck in at your villa in the rice fields\nRest of the day free at your own pace\nOptional: the Ubud market lanes or the Monkey Forest', hotel: 'Ubud Raya Villa', highlights: ['Arrival at Ngurah Rai Airport and private transfer to Ubud', 'Check in at your villa in the rice fields', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Central Bali by vintage Volkswagen (B)', text: 'Breakfast, then an open top vintage Volkswagen for the day\nA turn on the jungle swing above the valley\nTegenungan waterfall and the rice terraces\nTirta Empul, the holy spring temple, before the drive back', hotel: 'Ubud Raya Villa', highlights: ['Breakfast, then an open top vintage Volkswagen for the day', 'A turn on the jungle swing above the valley', 'Tegenungan waterfall and the rice terraces'] },
    { title: 'Day 3: Bedugul lakes and Tanah Lot (B)', text: 'Breakfast, then north into the highlands\nThe Handara gate for photographs\nUlun Danu Beratan, the temple standing on the lake\nSunset at Tanah Lot on the way back', hotel: 'Ubud Raya Villa', highlights: ['Breakfast, then north into the highlands', 'The Handara gate for photographs', 'Ulun Danu Beratan, the temple standing on the lake'] },
    { title: 'Day 4: Melasti beach and Uluwatu (B)', text: 'Breakfast and check out, then south to Melasti beach\nParasailing and a jet ski at Tanjung Benoa\nUluwatu temple on the cliffs at sunset\nKecak fire dance, then check in near Seminyak', hotel: 'Desamuda Village', highlights: ['Breakfast and check out, then south to Melasti beach', 'Parasailing and a jet ski at Tanjung Benoa', 'Uluwatu temple on the cliffs at sunset'] },
    { title: 'Day 5: Nusa Penida west coast (B)', text: 'Early breakfast, then private transfer to Sanur harbour\nSpeedboat across to Nusa Penida\nThe Paluang cliff viewpoint and Kelingking beach\nAngel\'s Billabong and Broken Bay before the boat back', hotel: 'Desamuda Village', highlights: ['Early breakfast, then private transfer to Sanur harbour', 'Speedboat across to Nusa Penida', 'The Paluang cliff viewpoint and Kelingking beach'] },
    { title: 'Day 6: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Indonesia', href: '/asien/indonesia' },
  { label: detail.title }
];

export const baliHoneymoonSwingAndSafariBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const baliHoneymoonSwingAndSafariProduct = {
  slug: detail.slug,
  places: ['Ubud', 'Bedugul', 'Kuta', 'Uluwatu', 'Nusa Penida'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 4,
  transfers: 13,
  meals: 5,
  price: detail.price,
  images: cardImages
};
