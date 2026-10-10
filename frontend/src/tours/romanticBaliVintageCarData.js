// Romantic Bali with Vintage Car Tour. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
  img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
  img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
  img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
  img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Ubud',
    subtitle: 'Ubud to Tirta Empul',
    dayLabel: 'Day 1 to 2',
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
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Ubud`,
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your villa resort near Ubud',
      'Rest of the day free by the pool',
      'Optional: the Monkey Forest or the Ubud art market',
      `${DAY_MARK}Day 2 · Central Bali by vintage car`,
      'Breakfast, then a day out in an open top vintage Volkswagen',
      'The Bali swing and Tegenungan waterfall',
      'Tirta Empul, the holy spring temple',
      'The Tegalalang rice terraces on the way back'
    ],
    accommodation: {
      name: 'Ubud Raya Villa, Ubud',
      description: '2 nights · Breakfast · Standard room · 4★ · Villa resort with a pool, a short ride from Ubud town',
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
        description: 'A day out in an open top vintage Volkswagen taking in the Bali swing, Tegenungan waterfall, the holy spring temple at Tirta Empul and the rice terraces.'
      },
      {
        name: 'Ubud Monkey Forest',
        day: 1,
        optional: true,
        image: img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
        description: 'Banyan trees, moss covered shrines and a few hundred macaques in a sanctuary ten minutes on foot from the Ubud market.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Two nights in a villa near Ubud, with a vintage car day through the temples, waterfalls and rice terraces of central Bali.',
      image: img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuta',
    subtitle: 'Kuta to Uluwatu and Nusa Penida',
    dayLabel: 'Day 3 to 6',
    images: [
      img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
      img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
      img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
      img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
    ],
    dayImages: {
      3: [
        img('s6oia0oiagnkeq420r3mvctsnzst_1595487162_shutterstock_670236505.jpg'),
        img('31zu0xhezdzs012q3bgdac8wqgxj_Cretya%20Ubud%203.jpg'),
        img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
      ],
      4: [
        img('1qdn6qguf9y8ln1m9ose124ijwhw_7nhl94fzoxwgm2edpe3aiq7xmmo9_flta5d5mo8s03jlpajjqs558he49_ryic2uv982s07o41v9hoil255st1_Nusa-Dua-for-.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg'),
        img('v4i29j28zm6fic2s5hm5231e67ar_1498545551_meslastidronestagram.jpg')
      ],
      5: [
        img('t0maljvk56ovlztbtfx1w286arze_lrt2zsu6jyqlgqjvc2q9mn7dtt63_hr1pqdhfpxau4k7xzg517d1m7ht1_Broken-Beach-3.jpg'),
        img('juwl1o8l3l3t7cd3tign11f5qbwb_23cfa5a555774cb793ff972ba1311093.jpg'),
        img('xxjdwssfts50rzk5wfvzelladqqu_1498724507_beach.jpg'),
        img('o974vnhozbrtaa60gdp3uzoxorjz_37530932040_49a7318d15_o.jpg')
      ],
      6: [
        img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
        img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Quad bikes and on to Kuta`,
      'Breakfast and check out, then a tandem quad bike route',
      'Rice fields, a river crossing and a cave tunnel',
      'Afternoon at the Cretya day club above the Ayung valley',
      'Private transfer down to Kuta and check in',
      `${DAY_MARK}Day 4 · Water sports and Uluwatu`,
      'Breakfast, then a morning at Tanjung Benoa beach',
      'Banana boat and jet ski with an instructor',
      'Melasti beach, white sand below the cliffs',
      'Uluwatu temple and the Kecak fire dance at sunset',
      `${DAY_MARK}Day 5 · Nusa Penida and a spa evening`,
      'Early breakfast, then private transfer to Sanur harbour',
      'Speedboat across to Nusa Penida for the west coast',
      'Kelingking beach, Angel\'s Billabong and the Paluang cliff',
      'An hour of Balinese massage for two back in Kuta',
      `${DAY_MARK}Day 6 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'Desamuda Village, Kuta',
      description: '3 nights · Breakfast · Standard room · 3★ · Garden hotel in Seminyak, ten minutes from the beach',
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
        name: 'Tandem ATV ride',
        day: 3,
        optional: false,
        image: img('s6oia0oiagnkeq420r3mvctsnzst_1595487162_shutterstock_670236505.jpg'),
        description: 'A two seat quad bike route through rice fields, a river crossing and a cave tunnel, with helmets, boots and a guide ahead of you.'
      },
      {
        name: 'Cretya Ubud day club',
        day: 3,
        optional: false,
        image: img('31zu0xhezdzs012q3bgdac8wqgxj_Cretya%20Ubud%203.jpg'),
        description: 'Infinity pools and daybeds above the Ayung valley, with lunch and drinks available, and transfers from the ATV base included.'
      },
      {
        name: 'Water sports, Melasti and Uluwatu',
        day: 4,
        optional: false,
        image: img('1qdn6qguf9y8ln1m9ose124ijwhw_7nhl94fzoxwgm2edpe3aiq7xmmo9_flta5d5mo8s03jlpajjqs558he49_ryic2uv982s07o41v9hoil255st1_Nusa-Dua-for-.jpg'),
        description: 'Banana boat and jet ski at Tanjung Benoa, the white sand of Melasti beach, then Uluwatu temple and the Kecak fire dance at sunset.'
      },
      {
        name: 'Nusa Penida west with Paluang cliff',
        day: 5,
        optional: false,
        image: img('t0maljvk56ovlztbtfx1w286arze_lrt2zsu6jyqlgqjvc2q9mn7dtt63_hr1pqdhfpxau4k7xzg517d1m7ht1_Broken-Beach-3.jpg'),
        description: 'Speedboat across for Kelingking beach, Angel\'s Billabong, Broken Bay and the Paluang cliff viewpoint above the water.'
      },
      {
        name: 'Balinese massage for two',
        day: 5,
        optional: false,
        image: img('2lqubqpwc7pgzj7podybztx47o8g_k1pjs1b8l54axfq37sc0s10so5j1_shutterstock_132434978.webp'),
        description: 'An hour of traditional Balinese massage for both of you after the island day, warm oil and long pressure strokes at a spa in Kuta.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights on the coast with a quad bike morning, a cliff top day club, water sports at Tanjung Benoa and a full day on Nusa Penida.',
      image: img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg')
    }
  }
];

const detail = {
  slug: 'romantic-bali-with-vintage-car-tour',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Romantic Bali with Vintage Car Tour',
  alt: 'Tirta Empul holy spring temple in central Bali',
  days: '6 days / 5 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided day tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Adventure'],
  price: 35352,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ubud', 'Tirta Empul', 'Kuta', 'Uluwatu', 'Nusa Penida'],
  stats: { days: 6, cities: 2, hotels: 2, activities: 6, transfers: 15 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['15 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'The vintage car day is the one couples talk about afterwards. Open sides, no windows, and the whole of central Bali.',
    quoteMore: 'Quad bikes and the day club work best on the same day because they are ten minutes apart. Carry a change of clothes, the river crossing soaks everyone, and keep the massage for the evening after Nusa Penida.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days for two with a vintage Volkswagen day through central Bali, a tandem quad bike route, a cliff top day club above the Ayung valley, water sports at Tanjung Benoa, Uluwatu at sunset and a full day on Nusa Penida.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights with daily breakfast; private airport and inter city transfers; central Bali tour in a vintage Volkswagen; tandem ATV ride; Cretya Ubud day club; water sports with Melasti and Uluwatu; Nusa Penida west coast tour; Balinese massage for two.',
  intro2: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Ubud (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your villa resort near Ubud\nRest of the day free by the pool\nOptional: the Monkey Forest or the Ubud art market', hotel: 'Ubud Raya Villa', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your villa resort near Ubud', 'Rest of the day free by the pool'] },
    { title: 'Day 2: Central Bali by vintage car (B)', text: 'Breakfast, then a day out in an open top vintage Volkswagen\nThe Bali swing and Tegenungan waterfall\nTirta Empul, the holy spring temple\nThe Tegalalang rice terraces on the way back', hotel: 'Ubud Raya Villa', highlights: ['Breakfast, then a day out in an open top vintage Volkswagen', 'The Bali swing and Tegenungan waterfall', 'Tirta Empul, the holy spring temple'] },
    { title: 'Day 3: Quad bikes and on to Kuta (B)', text: 'Breakfast and check out, then a tandem quad bike route\nRice fields, a river crossing and a cave tunnel\nAfternoon at the Cretya day club above the Ayung valley\nPrivate transfer down to Kuta and check in', hotel: 'Desamuda Village', highlights: ['Breakfast and check out, then a tandem quad bike route', 'Rice fields, a river crossing and a cave tunnel', 'Afternoon at the Cretya day club above the Ayung valley'] },
    { title: 'Day 4: Water sports and Uluwatu (B)', text: 'Breakfast, then a morning at Tanjung Benoa beach\nBanana boat and jet ski with an instructor\nMelasti beach, white sand below the cliffs\nUluwatu temple and the Kecak fire dance at sunset', hotel: 'Desamuda Village', highlights: ['Breakfast, then a morning at Tanjung Benoa beach', 'Banana boat and jet ski with an instructor', 'Melasti beach, white sand below the cliffs'] },
    { title: 'Day 5: Nusa Penida and a spa evening (B)', text: 'Early breakfast, then private transfer to Sanur harbour\nSpeedboat across to Nusa Penida for the west coast\nKelingking beach, Angel\'s Billabong and the Paluang cliff\nAn hour of Balinese massage for two back in Kuta', hotel: 'Desamuda Village', highlights: ['Early breakfast, then private transfer to Sanur harbour', 'Speedboat across to Nusa Penida for the west coast', 'Kelingking beach, Angel\'s Billabong and the Paluang cliff'] },
    { title: 'Day 6: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bali', href: '/asia/bali' },
  { label: detail.title }
];

export const romanticBaliVintageCarBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const romanticBaliVintageCarProduct = {
  slug: detail.slug,
  places: ['Ubud', 'Tirta Empul', 'Kuta', 'Uluwatu', 'Nusa Penida'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 6,
  transfers: 15,
  meals: 5,
  price: detail.price,
  images: cardImages
};
