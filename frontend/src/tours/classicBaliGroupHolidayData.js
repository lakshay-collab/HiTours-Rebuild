// Classic Bali Group Holiday. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('pfkfv6qfobdvdyi4ry5jvqetvbtd_576434519-shutterstock_2360921289.jpg'),
  img('mscr1dg0gxytqwa3t2k9xman1gvo_576959237-shutterstock_1313803682-min.jpg'),
  img('xlb76bhjjqk8l2yqkmxeqf4irs7g_shutterstock_725111986.png'),
  img('hd79uhk32t98wxuw46yp5ze5qpks_shutterstock_2147747043.jpg'),
  img('wmyrr76nlv8ur2bijjbl3m8nux44_shutterstock_2377723489.jpg'),
  img('pvi2tsy7fx5kh50ob9frqaj8mcmt_576434302-shutterstock_489708613.jpg'),
  img('g0o5hi68simua95kghd8nrho4ogt_576959367-shutterstock_1884502246.jpg'),
  img('1j0qb1d5kp6zadtlt8rw02y1v09t_shutterstock_599438597.jpg'),
  img('ngxbozm452mtzlm7g0lu9fqiiv3u_576435387-shutterstock_2359094599.jpg'),
  img('t0wj5hqo1jyrwov5dpr3vn9k4zx4_576434740-shutterstock_664589182.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Legian',
    subtitle: 'Legian to Kintamani, Tanah Lot and north Bali',
    dayLabel: 'Day 1 to 7',
    images: [
      img('pfkfv6qfobdvdyi4ry5jvqetvbtd_576434519-shutterstock_2360921289.jpg'),
      img('hf8qixt6jjsg8c1dwz4o0xyd1gyk_babana%20ride%20bali.jpg'),
      img('mscr1dg0gxytqwa3t2k9xman1gvo_576959237-shutterstock_1313803682-min.jpg'),
      img('61pmdk60pju1wqid4krddgorj31b_576434935-shutterstock_1506817649.jpg')
    ],
    dayImages: {
      1: [
        img('kmleb6ur2b7j83f6gt2jg3z1kaw0_1470727921_Goa_Gajah_Front.JPG'),
        img('inmyi8xx1sbyfrozppimmryvz6db_sekumpul.jpg'),
        img('4qzfjlhp9rb7opyc8dzvjjpgi0cy_1470896048_9396103363_d354fd2bc4_b.jpg'),
        img('lxbm5m7gqnr03h9guzaf2alsm3vk_1627619193_shutterstock_1255843249.jpg')
      ],
      2: [
        img('u7k7oahq5ce42vve4hawp2qxw3vl_2024-05-28.jpg'),
        img('muoear8tsuuji6anz7lk0pbqtb6x_tukad.jpg'),
        img('pfkfv6qfobdvdyi4ry5jvqetvbtd_576434519-shutterstock_2360921289.jpg'),
        img('hf8qixt6jjsg8c1dwz4o0xyd1gyk_babana%20ride%20bali.jpg')
      ],
      3: [
        img('vdsob5d0my1v3n3fpsncvsd8b23r_unnamed%20(1).jpg'),
        img('0d7ma1hcu2q4sm2jc7zgew41a0w3_1498563522_Tanah_Lot_1.jpg'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('pfkfv6qfobdvdyi4ry5jvqetvbtd_576434519-shutterstock_2360921289.jpg')
      ],
      4: [
        img('xwpbcgf1g3fj8xgjr0bwavpavrb5_20230617_155314.jpg'),
        img('xae4oyhdvs0gd93x9hq87jmwwwu7_taman-ayun-bali-temple.jpg'),
        img('nw6j7wr8udw90mkjlws1h4oqg2c8_pb8denvsywdyk6tz89p4rkythtru_1559286199_shutterstock_534449596.jpg'),
        img('pfkfv6qfobdvdyi4ry5jvqetvbtd_576434519-shutterstock_2360921289.jpg')
      ],
      5: [
        img('qc1yophslknxmsjuxv7tdovh1r3t_Monkey%20Forest,%20Ubud.jpg'),
        img('js18aeuqxymzifw80ggnq5bi75my_1470740587_15393446070_baba6998db_o.jpg'),
        img('vyu0y3fqr4w6aj8mv2pg7pbc92ah_1498565182_d852a63e0c9dce4af4cbe8bd706394d2.jpg'),
        img('2kpx79s3vxrjrh07k2kaajmjalmw_shutterstock_2313711741.jpg')
      ],
      6: [
        img('g72m3ehync8t6tn7yjyz5dm47mq1_1470898081_17_Years_of_Sekar_Jepun_2014-11-01_64_edit.jpg'),
        img('deriva74h0yzbv3z7xmdudk0w70b_1464167116_kuta-square.jpg'),
        img('d7r6g7g7gvn5bsd70bwvjbaqb79t_1470899547_red-eared-slider-1201602_960_720.jpg'),
        img('6u10mdhy3dcpjb8pctpthpoe4f0a_pandawa-beach-mikebali-001.jpg')
      ],
      7: [
        img('pfkfv6qfobdvdyi4ry5jvqetvbtd_576434519-shutterstock_2360921289.jpg'),
        img('hf8qixt6jjsg8c1dwz4o0xyd1gyk_babana%20ride%20bali.jpg'),
        img('mscr1dg0gxytqwa3t2k9xman1gvo_576959237-shutterstock_1313803682-min.jpg'),
        img('61pmdk60pju1wqid4krddgorj31b_576434935-shutterstock_1506817649.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Bali`,
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your Legian hotel for the whole week',
      'Rest of the day free near the beach',
      'Optional: an evening walk along Legian and Kuta beach',
      `${DAY_MARK}Day 2 · Kintamani and Tukad Cepung`,
      'Breakfast, then a shared tour up to the Kintamani crater',
      'Coffee plantation tasting on the climb',
      'The crater rim view across Mount Batur and its lake',
      'Light shafts inside the Tukad Cepung cave waterfall',
      `${DAY_MARK}Day 3 · Tanah Lot and Uluwatu`,
      'Breakfast, then a shared tour to the west coast',
      'Tanah Lot, the sea temple on its rock shelf',
      'Uluwatu temple on the cliffs at sunset',
      'Kecak fire dance in the temple amphitheatre afterwards',
      `${DAY_MARK}Day 4 · North Bali and the lakes`,
      'Breakfast, then a shared day north through the hills',
      'Ulun Danu Beratan, the temple standing on the lake',
      'The twin lakes viewpoint above Bedugul',
      'A rainforest waterfall before the road back',
      `${DAY_MARK}Day 5 · Free day for Ubud`,
      'Breakfast and a free day',
      'Optional: Ubud for the Monkey Forest and the art market',
      'Optional: a cooking class or a Balinese massage',
      'Optional: the rice terraces at Tegalalang',
      `${DAY_MARK}Day 6 · Free day in Kuta`,
      'Breakfast and a second free day',
      'Optional: a surf lesson with an instructor on Kuta beach',
      'Optional: Waterbom park or Beachwalk mall',
      'Optional: grilled seafood on the sand at Jimbaran',
      `${DAY_MARK}Day 7 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'Mercure Bali Legian, Bali',
      description: '6 nights · Breakfast · Standard room · 4★ · Four star hotel in Legian, a short walk from the beach',
      images: [
        img('9yqzwkkz1jjzzua7xp92qhzjnwfk_img1.jpg'),
        img('dxn8lnp979qjoe7urrioemiadlt6_img2.jpg'),
        img('6e50g3jt299dvcj8wq0tiw40t3u1_img3.jpg'),
        img('bex85qwopeydfbiodwfh1bj6gm22_img4.jpg'),
        img('01dps7sa7cs591j2tv9tr579sa5d_img5.jpg'),
        img('fupkkz2mexywq55q6nzgpposg0k8_img6.jpg'),
        img('zmy0k4wytpdu71gl5snjv1svhusl_img7.jpg'),
        img('fgz52nayzvqkm8nvykbv6gm0146w_img8.jpg'),
        img('bnisvvmg7w0faftrok95nazf4emk_img9.jpg'),
        img('tnkyzgzx2oc1hbdak4rufd2f51s2_img10.jpg'),
        img('01b7zujc1j4hej1kqc8f2v44xspl_img11.jpg'),
        img('0mnflg5rcom1cs3itsmkaphe51c1_img12.jpg'),
        img('aoeq82eyrbojup3bri6uslkc72ur_img13.jpg'),
        img('cz4stqi6tm874mjcdgfrt4fz4dm7_img14.jpg'),
        img('ksgqylrppq3xhz97od12jw5ayivu_img15.jpg'),
        img('j57717ulty94ty4un12m2dc29u9p_img16.jpg'),
        img('klv3bjm3m9paxqa4p5az01vc9yfk_img17.jpg'),
        img('vknio0h61s329ipmcv2ewh44e1eu_img18.jpg'),
        img('3qt1s7ykn58rl2qi5n7fw38kd6ny_img19.jpg'),
        img('vdofssqa5cytpbcvmtfckud5ggxs_img20.jpg'),
        img('kc18u5lmfj423jd100p03kd9nc18_img21.jpg'),
        img('673m68gtkasjb5sz784pp9m65czx_img22.jpg'),
        img('sr987zpznb6a0nk04zfmhtrpp05q_img23.jpg'),
        img('osi52fvrizccpnknym1by6obmqht_img24.jpg'),
        img('76glfy38clz3iizv3ui68dsn71ll_img25.jpg'),
        img('c1fmhc7t73pxq6jwhuwfathjdjfs_img26.jpg'),
        img('cgvppuqnedduuqda1eooywk4tqez_img27.jpg'),
        img('0kyrkk494n1prii6xbe1m2455c3j_img28.jpg'),
        img('s37w0yfaq0tmyvyrwtuwhy7nrbt6_img29.jpg'),
        img('qa7nadxzhiem1jxi26l5eqvml6fj_img30.jpg'),
        img('zcszmloof9cgbqeganqx03wmq07j_img31.jpg'),
        img('d589sl6qr3nf7vnw5bxxjev5sdpf_img32.jpg'),
        img('4sop8a9689iqrmji54jtmuvdi5md_img33.jpg'),
        img('ohmbd0pxexxxlzcpqcgxcyfvezla_img34.jpg'),
        img('8za37rsrun7xz9rw6nro799tlzsi_img35.jpg'),
        img('ab0ak0jcxauhsvtx96mm83v4ndn5_img36.jpg'),
        img('f3wlaax89o9wv77wk6ux7jiuti8g_img37.jpg'),
        img('ca2my5yrhqhw6bby2smda6i5m22y_img38.jpg'),
        img('szmj5rn8p5wfn9w212wqafsvg2ut_img39.jpg'),
        img('luql736id07xg97mk5nrfqlozopy_img40.jpg'),
        img('3rwfyavdyz65qwgdji91bp04wpgg_img41.jpg'),
        img('uit7amfvr767k90dpsyni2ub6i1s_img42.jpg'),
        img('tgl5rpi6np4z2kfnam0yor9a9cdi_img43.jpg'),
        img('417tmh58y0s3hsu6el2i3o7e30aw_img44.jpg'),
        img('k2h6aw3el03ny0qfb6dh878suipp_img45.jpg'),
        img('bdaox05rrrrubuwn24fp2dc3f5v3_img46.jpg')
      ]
    },
    activities: [
      {
        name: 'Kintamani village and Tukad Cepung',
        day: 2,
        optional: false,
        image: img('u7k7oahq5ce42vve4hawp2qxw3vl_2024-05-28.jpg'),
        description: 'A shared day up to the Kintamani crater rim, with a coffee plantation stop and the light shafts inside the Tukad Cepung cave waterfall.'
      },
      {
        name: 'Tanah Lot, Uluwatu and the Kecak dance',
        day: 3,
        optional: false,
        image: img('vdsob5d0my1v3n3fpsncvsd8b23r_unnamed%20(1).jpg'),
        description: 'The sea temple at Tanah Lot, then the cliff top temple at Uluwatu for sunset and the Kecak fire dance in the amphitheatre.'
      },
      {
        name: 'North Bali sightseeing tour',
        day: 4,
        optional: false,
        image: img('xwpbcgf1g3fj8xgjr0bwavpavrb5_20230617_155314.jpg'),
        description: 'A shared day north through the hills to the lake temple at Beratan, the twin lakes viewpoint and a waterfall in the rainforest.'
      }
    ],
    program: {
      name: 'Legian',
      description: 'Six nights in one four star hotel in Legian, with three shared touring days and two free days for the beach, Ubud or the shops.',
      image: img('pfkfv6qfobdvdyi4ry5jvqetvbtd_576434519-shutterstock_2360921289.jpg')
    }
  }
];

const detail = {
  slug: 'classic-bali-group-holiday',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Classic Bali Group Holiday',
  alt: 'Tukad Cepung waterfall inside its cave in east Bali',
  days: '7 days / 6 nights',
  stations: '1 stops',
  transport: 'Shared group tours and private airport transfers',
  tag: 'Culture',
  tags: ['Culture', 'Short trips'],
  price: 32330,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Legian', 'Kintamani', 'Tanah Lot', 'Uluwatu', 'North Bali'],
  stats: { days: 7, cities: 1, hotels: 1, activities: 3, transfers: 5 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['5 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'One hotel, six nights, three touring days. Unpack once and let the island come to you.',
    quoteMore: 'The shared tours are good value and start early, so breakfast opens before pick up. Use the two free days for Ubud and the beach, and we can add a private car on either if you prefer.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days from one four star base in Legian, with shared touring days to the Kintamani crater and Tukad Cepung waterfall, Tanah Lot and Uluwatu with the Kecak dance, and the lakes of north Bali, plus two free days.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with daily breakfast; private airport transfers; Kintamani village tour with Tukad Cepung waterfall; Tanah Lot and Uluwatu with the Kecak fire dance; north Bali sightseeing tour, all on a shared basis.',
  intro2: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Bali (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your Legian hotel for the whole week\nRest of the day free near the beach\nOptional: an evening walk along Legian and Kuta beach', hotel: 'Mercure Bali Legian', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your Legian hotel for the whole week', 'Rest of the day free near the beach'] },
    { title: 'Day 2: Kintamani and Tukad Cepung (B)', text: 'Breakfast, then a shared tour up to the Kintamani crater\nCoffee plantation tasting on the climb\nThe crater rim view across Mount Batur and its lake\nLight shafts inside the Tukad Cepung cave waterfall', hotel: 'Mercure Bali Legian', highlights: ['Breakfast, then a shared tour up to the Kintamani crater', 'Coffee plantation tasting on the climb', 'The crater rim view across Mount Batur and its lake'] },
    { title: 'Day 3: Tanah Lot and Uluwatu (B)', text: 'Breakfast, then a shared tour to the west coast\nTanah Lot, the sea temple on its rock shelf\nUluwatu temple on the cliffs at sunset\nKecak fire dance in the temple amphitheatre afterwards', hotel: 'Mercure Bali Legian', highlights: ['Breakfast, then a shared tour to the west coast', 'Tanah Lot, the sea temple on its rock shelf', 'Uluwatu temple on the cliffs at sunset'] },
    { title: 'Day 4: North Bali and the lakes (B)', text: 'Breakfast, then a shared day north through the hills\nUlun Danu Beratan, the temple standing on the lake\nThe twin lakes viewpoint above Bedugul\nA rainforest waterfall before the road back', hotel: 'Mercure Bali Legian', highlights: ['Breakfast, then a shared day north through the hills', 'Ulun Danu Beratan, the temple standing on the lake', 'The twin lakes viewpoint above Bedugul'] },
    { title: 'Day 5: Free day for Ubud (B)', text: 'Breakfast and a free day\nOptional: Ubud for the Monkey Forest and the art market\nOptional: a cooking class or a Balinese massage\nOptional: the rice terraces at Tegalalang', hotel: 'Mercure Bali Legian', highlights: ['Breakfast and a free day', 'Optional: Ubud for the Monkey Forest and the art market', 'Optional: a cooking class or a Balinese massage'] },
    { title: 'Day 6: Free day in Kuta (B)', text: 'Breakfast and a second free day\nOptional: a surf lesson with an instructor on Kuta beach\nOptional: Waterbom park or Beachwalk mall\nOptional: grilled seafood on the sand at Jimbaran', hotel: 'Mercure Bali Legian', highlights: ['Breakfast and a second free day', 'Optional: a surf lesson with an instructor on Kuta beach', 'Optional: Waterbom park or Beachwalk mall'] },
    { title: 'Day 7: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Indonesia', href: '/asia/indonesia' },
  { label: detail.title }
];

export const classicBaliGroupHolidayBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const classicBaliGroupHolidayProduct = {
  slug: detail.slug,
  places: ['Legian', 'Kintamani', 'Tanah Lot', 'Uluwatu', 'North Bali'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 3,
  transfers: 5,
  meals: 6,
  price: detail.price,
  images: cardImages
};
