// Bali Honeymoon with Rooftop Candlelight Dinner. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
  img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
  img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
  img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Ubud',
    subtitle: 'Ubud to Bedugul',
    dayLabel: 'Day 1 to 3',
    images: [
      img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
      img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
      img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
      img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg')
    ],
    dayImages: {
      1: [
        img('kmleb6ur2b7j83f6gt2jg3z1kaw0_1470727921_Goa_Gajah_Front.JPG'),
        img('blc7rv8lvishrrzjuxwmcwyxm2ev_1464182679_Bali-Bird-Park-42414.jpg'),
        img('4qzfjlhp9rb7opyc8dzvjjpgi0cy_1470896048_9396103363_d354fd2bc4_b.jpg'),
        img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg')
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
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your valley villa at Sayan',
      'First evening free above the Ayung river',
      'Optional: the Monkey Forest or the Ubud art market',
      `${DAY_MARK}Day 2 · Central Bali by vintage car`,
      'Breakfast, then a day out in an open top vintage Volkswagen',
      'The Bali swing and Tegenungan waterfall',
      'Tirta Empul, the holy spring temple',
      'The Tegalalang rice terraces on the way back',
      `${DAY_MARK}Day 3 · Bedugul lakes and Tanah Lot`,
      'Breakfast, then a full day north to the lake country',
      'The Handara gate and Ulun Danu Beratan temple',
      'A hill waterfall in the afternoon',
      'Sunset at Tanah Lot, the sea temple on the rocks'
    ],
    accommodation: {
      name: 'Ubud Heaven Sayan, Ubud',
      description: '3 nights · Breakfast · Standard room · 4★ · Villa resort above the Ayung valley at Sayan',
      images: [
        img('wc3917ho5z2ifk9mnpyv70zbwwad_img9.jpg'),
        img('o6osnibkluh0lsmf7089la3tnbkc_img6.jpg'),
        img('79orgblfzjtnqcfigip71vf7dtpe_img8.jpg'),
        img('lgm8aqt2wg3nugr777i0egp96coc_img11.jpg'),
        img('386zr97o5xvo3bqaaidlz17o1ur9_img4.jpg'),
        img('8cw48n3xms811hwho6vs9ro1n0dq_img12.jpg'),
        img('8nh37uilsjmbaf45djl2mtzxz5f7_img10.jpg'),
        img('lhgs73siqys573zwgfgyi01gombs_img18.jpg'),
        img('8h1otchpup76q543dpreosq3hjub_img3.jpg'),
        img('rxej4mg5qvkfnrvptuko0se4f3e2_img13.jpg'),
        img('yo35qgfpvs7m6luk2ibl8sqvdoeh_img15.jpg'),
        img('g8pmzj7tfce0rl8jy96beidurxjs_img20.jpg'),
        img('binjb2fghu7pav20na2maf0sm688_img16.jpg'),
        img('62pkt8zij47pufzvqi32moxg71dz_img14.jpg')
      ]
    },
    activities: [
      {
        name: 'Central Bali in a vintage Volkswagen',
        day: 2,
        optional: false,
        image: img('q77aw23cnynqx76tj5h7hs0ehogc_Tirta%20Empul-2.jpg'),
        description: 'A day out in an open top vintage Volkswagen taking in the Bali swing, Tegenungan waterfall, the spring temple at Tirta Empul and the rice terraces.'
      },
      {
        name: 'Bedugul lakes and Tanah Lot',
        day: 3,
        optional: false,
        image: img('973natt55orxsysivg2b1xutcf22_3q6hx7s6er01ldwrq9sgh4twbokj_shutterstock_2474005447.webp'),
        description: 'The Handara gate, the lake temple of Ulun Danu Beratan and a hill waterfall, finishing at the sea temple of Tanah Lot for sunset.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Three nights in a valley villa at Sayan, with a vintage car day through central Bali and a full day up to the Bedugul lakes.',
      image: img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuta',
    subtitle: 'Kuta to Uluwatu and Nusa Penida',
    dayLabel: 'Day 4 to 7',
    images: [
      img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
      img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
      img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
      img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
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
        img('neznowe35mxcnjj84559i40ojhl7_1628342893_f98dbd26-1189-4c22-9e39-d8b3054eabdd.jpeg.jpg'),
        img('d7r6g7g7gvn5bsd70bwvjbaqb79t_1470899547_red-eared-slider-1201602_960_720.jpg'),
        img('pntcqhuq42iqwedahw0vddb29dat_shutterstock_635175203.jpg'),
        img('v8yxtyrf2yaqg2myhcgwzn17t4nl_WhatsApp%20Image%202025-10-14%20at%204.25.23%20PM.jpeg')
      ],
      7: [
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
        img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
        img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Melasti beach and Uluwatu`,
      'Breakfast and check out, then private transfer to the coast',
      'Melasti beach, white sand below the cliffs',
      'Banana boat and jet ski at Tanjung Benoa',
      'Uluwatu temple and the Kecak fire dance at sunset',
      `${DAY_MARK}Day 5 · Nusa Penida and Paluang cliff`,
      'Early breakfast, then private transfer to Sanur harbour',
      'Speedboat across to Nusa Penida for the west coast',
      'The Paluang cliff, Kelingking beach and Angel\'s Billabong',
      'Return boat to Bali and back to your hotel',
      `${DAY_MARK}Day 6 · Spa and rooftop dinner`,
      'Breakfast and a free day on the coast',
      'An hour of Balinese massage for two at a nearby spa',
      'Rooftop candlelight dinner for two in the evening',
      'Optional: a late walk along the beach afterwards',
      `${DAY_MARK}Day 7 · Departure from Bali`,
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
        name: 'Melasti beach, water sports and Uluwatu',
        day: 4,
        optional: false,
        image: img('hqmy02zrpajp8q2k7o4uuu4ww7nw_jjhc9ym7ybnvbjfwnziy2v4q3gac_hau587bp52lss2s707h2akmhw3gb_v4i29j28zm6fic2s5hm5231e67ar_1498545551_meslastidronestagram.jpg'),
        description: 'The white sand at Melasti beach, banana boat and jet ski at Tanjung Benoa, then Uluwatu temple and the Kecak fire dance at sunset.'
      },
      {
        name: 'Nusa Penida west with Paluang cliff',
        day: 5,
        optional: false,
        image: img('t0maljvk56ovlztbtfx1w286arze_lrt2zsu6jyqlgqjvc2q9mn7dtt63_hr1pqdhfpxau4k7xzg517d1m7ht1_Broken-Beach-3.jpg'),
        description: 'Speedboat across for the Paluang cliff viewpoint, Kelingking beach and the rock arch at Angel\'s Billabong, with Broken Bay after it.'
      },
      {
        name: 'Balinese massage for two',
        day: 6,
        optional: false,
        image: img('pntcqhuq42iqwedahw0vddb29dat_shutterstock_635175203.jpg'),
        description: 'An hour of traditional Balinese massage for both of you on your free day, warm oil and long pressure strokes at a spa in Kuta.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights on the coast with a south Bali beach day, a full island day on Nusa Penida and a rooftop candlelight dinner to finish.',
      image: img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
    }
  }
];

const detail = {
  slug: 'bali-honeymoon-with-rooftop-candlelight-dinner',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bali Honeymoon with Rooftop Candlelight Dinner',
  alt: 'Rooftop dinner table above Kuta beach, Bali',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided day tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Luxury'],
  price: 44595,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ubud', 'Bedugul', 'Kuta', 'Uluwatu', 'Nusa Penida'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 5, transfers: 15 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['15 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'The rooftop dinner is included, not an upsell. It is the last evening, five floors above the beach, and it lands well.',
    quoteMore: 'Book the massage for late afternoon on the dinner day so you walk up to the roof relaxed. Sunset is around half past six all year, and we hold the best table for seven.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days for two with three nights in a valley villa at Sayan and three on the coast, taking in a vintage car day through central Bali, the Bedugul lakes, Melasti beach, Uluwatu, Nusa Penida and a rooftop candlelight dinner.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with daily breakfast; private airport and inter city transfers; central Bali tour in a vintage Volkswagen; full day Bedugul tour with Tanah Lot; Melasti beach with water sports, Uluwatu and the Kecak dance; Nusa Penida west coast tour; Balinese massage for two; rooftop candlelight dinner.',
  intro2: 'Not included: international flights; Indonesia visa fees; lunches and other dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Ubud (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your valley villa at Sayan\nFirst evening free above the Ayung river\nOptional: the Monkey Forest or the Ubud art market', hotel: 'Ubud Heaven Sayan', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your valley villa at Sayan', 'First evening free above the Ayung river'] },
    { title: 'Day 2: Central Bali by vintage car (B)', text: 'Breakfast, then a day out in an open top vintage Volkswagen\nThe Bali swing and Tegenungan waterfall\nTirta Empul, the holy spring temple\nThe Tegalalang rice terraces on the way back', hotel: 'Ubud Heaven Sayan', highlights: ['Breakfast, then a day out in an open top vintage Volkswagen', 'The Bali swing and Tegenungan waterfall', 'Tirta Empul, the holy spring temple'] },
    { title: 'Day 3: Bedugul lakes and Tanah Lot (B)', text: 'Breakfast, then a full day north to the lake country\nThe Handara gate and Ulun Danu Beratan temple\nA hill waterfall in the afternoon\nSunset at Tanah Lot, the sea temple on the rocks', hotel: 'Ubud Heaven Sayan', highlights: ['Breakfast, then a full day north to the lake country', 'The Handara gate and Ulun Danu Beratan temple', 'A hill waterfall in the afternoon'] },
    { title: 'Day 4: Melasti beach and Uluwatu (B)', text: 'Breakfast and check out, then private transfer to the coast\nMelasti beach, white sand below the cliffs\nBanana boat and jet ski at Tanjung Benoa\nUluwatu temple and the Kecak fire dance at sunset', hotel: 'Desamuda Village', highlights: ['Breakfast and check out, then private transfer to the coast', 'Melasti beach, white sand below the cliffs', 'Banana boat and jet ski at Tanjung Benoa'] },
    { title: 'Day 5: Nusa Penida and Paluang cliff (B)', text: 'Early breakfast, then private transfer to Sanur harbour\nSpeedboat across to Nusa Penida for the west coast\nThe Paluang cliff, Kelingking beach and Angel\'s Billabong\nReturn boat to Bali and back to your hotel', hotel: 'Desamuda Village', highlights: ['Early breakfast, then private transfer to Sanur harbour', 'Speedboat across to Nusa Penida for the west coast', 'The Paluang cliff, Kelingking beach and Angel\'s Billabong'] },
    { title: 'Day 6: Spa and rooftop dinner (B, D)', text: 'Breakfast and a free day on the coast\nAn hour of Balinese massage for two at a nearby spa\nRooftop candlelight dinner for two in the evening\nOptional: a late walk along the beach afterwards', hotel: 'Desamuda Village', highlights: ['Breakfast and a free day on the coast', 'An hour of Balinese massage for two at a nearby spa', 'Rooftop candlelight dinner for two in the evening'] },
    { title: 'Day 7: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; lunches and other dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Indonesia', href: '/asia/indonesia' },
  { label: detail.title }
];

export const baliHoneymoonRooftopDinnerBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const baliHoneymoonRooftopDinnerProduct = {
  slug: detail.slug,
  places: ['Ubud', 'Bedugul', 'Kuta', 'Uluwatu', 'Nusa Penida'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 5,
  transfers: 15,
  meals: 6,
  price: detail.price,
  images: cardImages
};
