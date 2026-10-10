// Highlights of Bali with Nusa Penida and Uluwatu. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
  img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
  img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
  img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg'),
  img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
  img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
  img('js18aeuqxymzifw80ggnq5bi75my_1470740587_15393446070_baba6998db_o.jpg'),
  img('2kpx79s3vxrjrh07k2kaajmjalmw_shutterstock_2313711741.jpg'),
  img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Ubud',
    subtitle: 'Ubud to Kintamani',
    dayLabel: 'Day 1 to 2',
    images: [
      img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
      img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
      img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
      img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('blc7rv8lvishrrzjuxwmcwyxm2ev_1464182679_Bali-Bird-Park-42414.jpg'),
        img('js18aeuqxymzifw80ggnq5bi75my_1470740587_15393446070_baba6998db_o.jpg'),
        img('2kpx79s3vxrjrh07k2kaajmjalmw_shutterstock_2313711741.jpg'),
        img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg')
      ],
      2: [
        img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('p1tzfipjpmq6677grx16krlrwx9v_shutterstock_243349891.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Ubud`,
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your villa resort in the Ubud rice fields',
      'Rest of the day free by the pool',
      'Optional: the Monkey Forest or the Ubud art market',
      `${DAY_MARK}Day 2 · Kintamani and the jungle swing`,
      'Breakfast, then a full day out with your own car and guide',
      'Coffee plantation tasting on the climb to Kintamani',
      'Tegenungan waterfall and the Tegalalang rice terraces',
      'A turn on the jungle swing above the valley'
    ],
    accommodation: {
      name: 'Ubud Green, Ubud',
      description: '2 nights · Breakfast · Luxury room · 5★ · Villa resort set in the rice fields south of Ubud',
      images: [
        img('dg6prsp1g0nwlxr06gbolfag010j_img1.jpg'),
        img('0t5sdnst5mgloqdtoehjl9dfctnd_img2.jpg'),
        img('ojbcvco1xlbrmh0o3jcpuaz8xlwo_img3.jpg'),
        img('ex8irb841xnt5x50b1sadwfovdm6_img4.jpg'),
        img('rqhn414sdj4zl9i4luuha5p3mz35_img5.jpg'),
        img('koxaq4hnrrw6uv3utniy90c2ogyn_img6.jpg'),
        img('o79j5zjhdi2z6avloukxyaneozg8_img7.jpg'),
        img('r0vdrrgxobyny9y0zkzbfvv8sh7e_img8.jpg'),
        img('r9yv6ug9c12su17ym56yywutpn7b_img9.jpg'),
        img('fx8nwfgm2019uw12ff8ha450eyji_img10.jpg'),
        img('d8uqqw97bb02fsfk6zdxbuqyo9lr_img11.jpg'),
        img('218rzxhrklonlphrymtxkbrd7ze5_img12.jpg'),
        img('3rz0o919gevj7yh4940g102pdds6_img13.jpg'),
        img('q3uv7ax82yskj3t8twi3u1i18ktk_img14.jpg'),
        img('4aj5mq6zex590uh7l25tpoo3b22x_img15.jpg'),
        img('ovq1qhhggay3o97rgq73bfojqx7z_img16.jpg'),
        img('4okz9ymd93sdpqptrj5and94rt38_img17.jpg'),
        img('z17ypgadxedik3s6a7jka713i0cx_img18.jpg'),
        img('aqwbyvuccnzxpumj5y266dw54w5p_img19.jpg'),
        img('5wjjq5lv351ocfsvoh8m7jizg4s6_img20.jpg'),
        img('0ke8hg8zjhxisqxz55kf8doxdyfy_img21.jpg'),
        img('jg3qdqez8cfcv93q5nf0nvooaxlw_img22.jpg'),
        img('1jls07p5g40iz7ip7et6geohj4tp_img23.jpg'),
        img('sg4634iv8xmgpanic5ynlfvdponb_img24.jpg'),
        img('r8bzauuzd00kah2o88tkqzqmqwvh_img25.jpg'),
        img('icy2ewd6szul1eshd6te7nl46i7w_img26.jpg'),
        img('g992kf5iw3jkfak6ji9qs2asp27e_img27.jpg'),
        img('s7643wucj3bvrgv7ecj2ay4y64ul_img28.jpg'),
        img('t09ykzqi6f4f2g771t6uxyl7eq3n_img29.jpg'),
        img('poa7utcfbf8vyqyq0qutpg6qijdb_img30.jpg'),
        img('4q94cmqtqo1wy95tool6cvd0pbvo_img31.jpg'),
        img('yhosxgor8bwk598cnxz1cm7ckq24_img32.jpg'),
        img('cjcueumohbhp6rp64qc3dpyryzk6_img33.jpg'),
        img('d6ovah3x5amy3lru90hsywtpb6s4_img34.jpg'),
        img('yiu81zej5wopwudv45gm2k33t2c3_img35.jpg'),
        img('9iebo7eivmfvko4m6kp3t1pv8v5t_img36.jpg'),
        img('j8t2nc5l79xmxv4g8fsim5w41m90_img37.jpg'),
        img('ntneb7syvs1w23jas5sbzcltgayc_img38.jpg'),
        img('6fgs95xj60emv1fh2dsmwamo67dj_img39.jpg'),
        img('nqqri6de5pw6hv78h8flk7zg98sf_img40.jpg'),
        img('2cd2q05498jtgpw9srtjpjvjrxea_img41.jpg'),
        img('eugciktm23z4qox3hlqnyvf6poz0_img42.jpg'),
        img('ps4aw6cn9wla6ajfk444k916715w_img43.jpg'),
        img('wlwojdojxmncsgwmhxq7qopspiwo_img44.jpg'),
        img('573k33gmtmsdggr0obz3oqk7y7t2_img45.jpg')
      ]
    },
    activities: [
      {
        name: 'Kintamani with the jungle swing',
        day: 2,
        optional: false,
        image: img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        description: 'Coffee plantation tasting on the climb to Kintamani, the crater lake view, Tegenungan waterfall, the Tegalalang terraces and a turn on the jungle swing.'
      },
      {
        name: 'Ubud Monkey Forest',
        day: 1,
        optional: true,
        image: img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
        description: 'Banyan trees, moss covered shrines and a few hundred macaques in a sanctuary ten minutes on foot from the Ubud market.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Two nights in a five star villa resort among the rice fields, with a full day up through the coffee country to the Kintamani crater.',
      image: img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuta',
    subtitle: 'Kuta to Bedugul and Nusa Penida',
    dayLabel: 'Day 3 to 6',
    images: [
      img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
      img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
      img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
      img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
    ],
    dayImages: {
      3: [
        img('p5yrnrm901qott26imp7giagdswk_m24fyfxxipomu40jypglrbvqtyi7_Ulun%20Danu%20Temple,%20Bali%206.webp'),
        img('waeg3nbxipr9941qeily6t9qtcce_1498891384_gitgi.jpg'),
        img('63rp5vt6fg9lnhd2bsolet8cpft3_ezgif-4-1fcf41f031.jpg'),
        img('zwzrpc8zhw3jl7ltwuqtrh8zmm8s_bali%20handara%20gate.jpg')
      ],
      4: [
        img('5vypuz59sdnia5qufsjvhxmocvha_kelingking-beach.webp'),
        img('juwl1o8l3l3t7cd3tign11f5qbwb_23cfa5a555774cb793ff972ba1311093.jpg'),
        img('xxjdwssfts50rzk5wfvzelladqqu_1498724507_beach.jpg'),
        img('o974vnhozbrtaa60gdp3uzoxorjz_37530932040_49a7318d15_o.jpg')
      ],
      5: [
        img('xu1a4ekjznbw7ixyfvj7tor24zn3_shutterstock_620348576(1).jpg'),
        img('p0tyf5xa92nbblmla956dmfsaqrd_shutterstock_1453687076.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('zuv05ihy4mjut0suvo7y6si5tlg3_1627651888_shutterstock_620348576.jpg')
      ],
      6: [
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
        img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
        img('gkbklyxrqdoxqbu8h39eq1n478ki_shutterstock_631087334.jpg'),
        img('e2agk3i6mkl215p79pi09wthtqij_shutterstock_132817514.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Ulun Danu and on to Kuta`,
      'Breakfast and check out, then north to the Handara gate',
      'Ulun Danu Beratan, the temple standing on the lake',
      'The tall Git Git waterfall in the hills',
      'Private transfer down to Kuta and check in',
      `${DAY_MARK}Day 4 · Nusa Penida and four beaches`,
      'Early breakfast, then private transfer to Sanur harbour',
      'Speedboat across to Nusa Penida for the west coast',
      'Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach',
      'Return boat to Bali and back to your hotel',
      `${DAY_MARK}Day 5 · GWK park and Uluwatu`,
      'Breakfast, then on to the Garuda Wisnu Kencana park',
      'The giant Garuda statue and the park amphitheatre',
      'Padang Padang beach in its limestone cove',
      'Uluwatu temple on the cliffs at sunset',
      `${DAY_MARK}Day 6 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'Ramada by Wyndham Bali Sunset Road, Kuta',
      description: '3 nights · Breakfast · Super deluxe room · 4★ · Four star hotel on Sunset Road with a large pool deck',
      images: [
        img('3x1874gte30nk2aa5bn085zi63qv_img31.jpg'),
        img('9pgku2sip9elxsfzqadb2x4i9yjt_img2.jpg'),
        img('t4m2klxfie4g6ncr7rsbo526sjov_img8.jpg'),
        img('fesuopa899zu04hwqwv7vzddgywr_img12.jpg'),
        img('7qo88mrd9h0htlq4h4g7qwbwxdta_img1.jpg'),
        img('q9zcsj1bcyxy25ul916vg7iviel2_img3.jpg'),
        img('0jm8budvr14ud4osus4vmvr02uzd_img13.jpg'),
        img('94voehahs3pjrdmw5glq5f2cyo6o_img15.jpg'),
        img('j6en9104oanddm51s5lgtte9ksi3_img19.jpg'),
        img('ryl7977iwdrblyrg40kfotp2hiu4_img33.jpg'),
        img('40m5hqx9qf6caidr8lk1tx7huhod_img44.jpg'),
        img('izrc6o17hq427ebnu7p5c0sv3v3k_img38.jpg'),
        img('xoie1rpuw2y2g5w3l8hjnmaf6itx_88839247.jpg')
      ]
    },
    activities: [
      {
        name: 'Ulun Danu with Git Git waterfall',
        day: 3,
        optional: false,
        image: img('p5yrnrm901qott26imp7giagdswk_m24fyfxxipomu40jypglrbvqtyi7_Ulun%20Danu%20Temple,%20Bali%206.webp'),
        description: 'The Handara gate, the lake temple of Ulun Danu Beratan and the tall Git Git waterfall in the hills, on the way down to the coast.'
      },
      {
        name: 'Nusa Penida west coast by speedboat',
        day: 4,
        optional: false,
        image: img('5vypuz59sdnia5qufsjvhxmocvha_kelingking-beach.webp'),
        description: 'Speedboat across for Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach, the island\'s four most photographed stops.'
      },
      {
        name: 'GWK park with Uluwatu and Padang Padang',
        day: 5,
        optional: false,
        image: img('xu1a4ekjznbw7ixyfvj7tor24zn3_shutterstock_620348576(1).jpg'),
        description: 'Entry to the Garuda Wisnu Kencana cultural park and its giant statue, then Padang Padang beach and Uluwatu temple for sunset.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights on the coast with the Bedugul lake temples and Git Git waterfall on the way, a full island day and the GWK park.',
      image: img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
    }
  }
];

const detail = {
  slug: 'highlights-of-bali-with-nusa-penida-and-uluwatu',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Highlights of Bali with Nusa Penida and Uluwatu',
  alt: 'Garuda Wisnu Kencana park in south Bali',
  days: '6 days / 5 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided day tours',
  tag: 'Culture',
  tags: ['Culture', 'Luxury'],
  price: 34485,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ubud', 'Kintamani', 'Bedugul', 'Kuta', 'Nusa Penida'],
  stats: { days: 6, cities: 2, hotels: 2, activities: 4, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['12 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Five nights, a five star villa in Ubud and a four star on the coast. The hotels are the reason to pick this one.',
    quoteMore: 'Ubud Green is spread over a hillside, so ask for a villa near the pool if steps are a problem. On the Nusa Penida day we book the first boat out of Sanur and you are back by six.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days with a five star villa in the Ubud rice fields and a four star on the coast, taking in Kintamani, the Ulun Danu lake temple, Git Git waterfall, a full day on Nusa Penida and the GWK park with Uluwatu at sunset.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights with daily breakfast; private airport and inter city transfers; Kintamani and jungle swing tour; Ulun Danu with Git Git waterfall; Nusa Penida west coast tour; GWK park with Padang Padang and Uluwatu.',
  intro2: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Ubud (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your villa resort in the Ubud rice fields\nRest of the day free by the pool\nOptional: the Monkey Forest or the Ubud art market', hotel: 'Ubud Green', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your villa resort in the Ubud rice fields', 'Rest of the day free by the pool'] },
    { title: 'Day 2: Kintamani and the jungle swing (B)', text: 'Breakfast, then a full day out with your own car and guide\nCoffee plantation tasting on the climb to Kintamani\nTegenungan waterfall and the Tegalalang rice terraces\nA turn on the jungle swing above the valley', hotel: 'Ubud Green', highlights: ['Breakfast, then a full day out with your own car and guide', 'Coffee plantation tasting on the climb to Kintamani', 'Tegenungan waterfall and the Tegalalang rice terraces'] },
    { title: 'Day 3: Ulun Danu and on to Kuta (B)', text: 'Breakfast and check out, then north to the Handara gate\nUlun Danu Beratan, the temple standing on the lake\nThe tall Git Git waterfall in the hills\nPrivate transfer down to Kuta and check in', hotel: 'Ramada by Wyndham Bali Sunset Road Kuta', highlights: ['Breakfast and check out, then north to the Handara gate', 'Ulun Danu Beratan, the temple standing on the lake', 'The tall Git Git waterfall in the hills'] },
    { title: 'Day 4: Nusa Penida and four beaches (B)', text: 'Early breakfast, then private transfer to Sanur harbour\nSpeedboat across to Nusa Penida for the west coast\nKelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach\nReturn boat to Bali and back to your hotel', hotel: 'Ramada by Wyndham Bali Sunset Road Kuta', highlights: ['Early breakfast, then private transfer to Sanur harbour', 'Speedboat across to Nusa Penida for the west coast', 'Kelingking beach, Angel\'s Billabong, Broken Bay and Bubu beach'] },
    { title: 'Day 5: GWK park and Uluwatu (B)', text: 'Breakfast, then on to the Garuda Wisnu Kencana park\nThe giant Garuda statue and the park amphitheatre\nPadang Padang beach in its limestone cove\nUluwatu temple on the cliffs at sunset', hotel: 'Ramada by Wyndham Bali Sunset Road Kuta', highlights: ['Breakfast, then on to the Garuda Wisnu Kencana park', 'The giant Garuda statue and the park amphitheatre', 'Padang Padang beach in its limestone cove'] },
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

export const highlightsOfBaliNusaPenidaUluwatuBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const highlightsOfBaliNusaPenidaUluwatuProduct = {
  slug: detail.slug,
  places: ['Ubud', 'Kintamani', 'Bedugul', 'Kuta', 'Nusa Penida'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 4,
  transfers: 12,
  meals: 5,
  price: detail.price,
  images: cardImages
};
