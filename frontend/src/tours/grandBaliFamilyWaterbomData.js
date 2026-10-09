// Grand Bali Family Holiday with Waterbom. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
  img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
  img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg'),
  img('r6j9ygbrrhn1qmqenspvxmohyjxz_shutterstock_577260061.jpg'),
  img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
  img('ulp3dckh9xf6kke0x9yw56xqydgq_shutterstock_599438597.jpg'),
  img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
  img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg'),
  img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
  img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Ubud',
    subtitle: 'Ubud to the safari park',
    dayLabel: 'Day 1 to 3',
    images: [
      img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg'),
      img('yuvqwpy0ygrdyymcob5uhszpa3go_Ubud-2.jpg'),
      img('vaf9vgs1dkk4fpuu0r78nxnehhat_shutterstock_1507517912%20(1).jpg'),
      img('5t4monlh12ki9eu3vkpb3264k212_shutterstock_1463319173%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('kmleb6ur2b7j83f6gt2jg3z1kaw0_1470727921_Goa_Gajah_Front.JPG'),
        img('blc7rv8lvishrrzjuxwmcwyxm2ev_1464182679_Bali-Bird-Park-42414.jpg'),
        img('4qzfjlhp9rb7opyc8dzvjjpgi0cy_1470896048_9396103363_d354fd2bc4_b.jpg'),
        img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg')
      ],
      2: [
        img('i0abja5rd56bprr72hq1rsrb6a4u_Kanto%20Lampo%20Waterfall4.jpg'),
        img('pfupn2n49j2c1jiymw5keyw1su88_cover-for-kanto-lampo.jpg'),
        img('hhhu10tba5yumzkwh2ta9yvt82df_17015830_10154515632888931_1877145227028070565_o.jpg'),
        img('bs96fl43584uve7wwhbrody0iv75_1470736645_Bali_Safari__26_Marine_Park_(2688909441).jpg')
      ],
      3: [
        img('q77aw23cnynqx76tj5h7hs0ehogc_Tirta%20Empul-2.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('2kpx79s3vxrjrh07k2kaajmjalmw_shutterstock_2313711741.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Ubud`,
      'Arrival at Ngurah Rai Airport and private transfer to your hotel',
      'Check in at your valley resort near Ubud',
      'Rest of the day free by the pool',
      'Optional: the Monkey Forest or the Ubud art market',
      `${DAY_MARK}Day 2 · Waterfall and safari park`,
      'Breakfast, then on to Kanto Lampo waterfall',
      'A full afternoon at Bali Safari and Marine Park',
      'Safari ride, animal shows and the water park',
      'Back at the resort in the evening',
      `${DAY_MARK}Day 3 · Central Bali and Tirta Empul`,
      'Breakfast, then a full day in central Bali',
      'The Bali swing and Tegenungan waterfall',
      'Tirta Empul, the holy spring temple',
      'The Tegalalang rice terraces on the way back'
    ],
    accommodation: {
      name: 'Alam Ubud Culture Villas, Ubud',
      description: '3 nights · Breakfast · Standard room · 4★ · Villa resort in the valley west of Ubud town',
      images: [
        img('pnv27xiiuppljhciu8xb8isw8rmg_72394098.jpg'),
        img('z2z86mbmacaqtuuwjl8civbm7jo1_184825958.jpg'),
        img('xnhxv3ldp0pnrs6ksy95bpo9lrvl_148955459.jpg'),
        img('mivkfq90mt2fjmuxnhfdqn2oql48_75854437.jpg'),
        img('okvt1r5ylu96kazwjfjhu5mq5rrk_41175357.jpg'),
        img('xceav5imnq3it4u0u79tizinsi8c_215151935.jpg'),
        img('dtwjlks2vuzt4uqeuzyuwh5hwz0t_72406388.jpg'),
        img('ty1s00y5v6fjdlpavst4e9uodm8t_72393623.jpg'),
        img('wvnlawyj174q0v7mfj89nvangvkg_215143418.jpg'),
        img('3cxelnto1hqs85cq1ruucweejpv4_215143605.jpg')
      ]
    },
    activities: [
      {
        name: 'Kanto Lampo waterfall',
        day: 2,
        optional: false,
        image: img('i0abja5rd56bprr72hq1rsrb6a4u_Kanto%20Lampo%20Waterfall4.jpg'),
        description: 'The wide stepped fan of Kanto Lampo, one of the easiest waterfalls in Bali to reach and the best for photographs with children.'
      },
      {
        name: 'Bali Safari and Marine Park',
        day: 2,
        optional: false,
        image: img('hhhu10tba5yumzkwh2ta9yvt82df_17015830_10154515632888931_1877145227028070565_o.jpg'),
        description: 'A safari ride through the African and Indian enclosures, the elephant and bird shows, and the water park on the same ticket.'
      },
      {
        name: 'Central Bali with Tirta Empul',
        day: 3,
        optional: false,
        image: img('q77aw23cnynqx76tj5h7hs0ehogc_Tirta%20Empul-2.jpg'),
        description: 'The Bali swing, Tegenungan waterfall, the holy spring temple at Tirta Empul and a photo stop at the Tegalalang rice terraces.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Three nights in a valley resort with a waterfall and safari day and a full day through the temples of central Bali.',
      image: img('ks4p5sp0hujf9j9p5ny6lewe5iuf_shutterstock_758638468.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kuta',
    subtitle: 'Kuta to Nusa Penida and Uluwatu',
    dayLabel: 'Day 4 to 7',
    images: [
      img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
      img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
      img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
      img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
    ],
    dayImages: {
      4: [
        img('t0maljvk56ovlztbtfx1w286arze_lrt2zsu6jyqlgqjvc2q9mn7dtt63_hr1pqdhfpxau4k7xzg517d1m7ht1_Broken-Beach-3.jpg'),
        img('xxjdwssfts50rzk5wfvzelladqqu_1498724507_beach.jpg'),
        img('juwl1o8l3l3t7cd3tign11f5qbwb_23cfa5a555774cb793ff972ba1311093.jpg'),
        img('raz6i8qsplkduo2ddqpr2tqbahzi_download%20(11).jpg')
      ],
      5: [
        img('3rxuj0x7hy1ze2033tmuvwap1bv0_23.jpg'),
        img('zuv05ihy4mjut0suvo7y6si5tlg3_1627651888_shutterstock_620348576.jpg'),
        img('jcaw0fh3e8840z60pd3mo1knd3ly_4wdft36thxaq9hfim4jmco0u524j_Photo-Shoot-36.webp'),
        img('4qzfjlhp9rb7opyc8dzvjjpgi0cy_1470896048_9396103363_d354fd2bc4_b.jpg')
      ],
      6: [
        img('hqmy02zrpajp8q2k7o4uuu4ww7nw_jjhc9ym7ybnvbjfwnziy2v4q3gac_hau587bp52lss2s707h2akmhw3gb_v4i29j28zm6fic2s5hm5231e67ar_1498545551_meslastidronestagram.jpg'),
        img('wmemo0bldjtn5v4umv6k5zcxka3o_tanjung-benoa.jpg'),
        img('kla77b44phylq0s0e23j9zfkur68_Couple%20Parasailing-1.jpg'),
        img('19pcq5gostfla16izbg1m0ie319s_Jet%20Skiing-1.jpg')
      ],
      7: [
        img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg'),
        img('j8qqpvf20swcc9g66yo67jylfdtq_shutterstock_571418086.jpg'),
        img('uhgk8t3t7sin8r6478yy1ileukdy_shutterstock_539058235.jpg'),
        img('8406tnajvssc29d2ayhofuay1vqz_shutterstock_1280607826.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Nusa Penida and on to Kuta`,
      'Early breakfast and check out, then on to Sanur harbour',
      'Speedboat across to Nusa Penida for the west coast',
      'The Paluang cliff, Kelingking beach and Angel\'s Billabong',
      'An hour of Balinese massage once you reach Kuta',
      `${DAY_MARK}Day 5 · GWK park and Waterbom`,
      'Breakfast, then entry to the Garuda Wisnu Kencana park',
      'The giant statue and the afternoon dance performances',
      'The rest of the day at Waterbom Bali',
      'Slides, the lazy river and the gardens',
      `${DAY_MARK}Day 6 · Water sports and Uluwatu`,
      'Breakfast, then a morning at Tanjung Benoa beach',
      'Parasailing, jet ski and a banana boat with an instructor',
      'Uluwatu temple on the cliffs at sunset',
      'Kecak fire dance in the amphitheatre afterwards',
      `${DAY_MARK}Day 7 · Departure from Bali`,
      'Breakfast at the hotel and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'Cross Vibe Paasha Atelier, Kuta',
      description: '3 nights · Breakfast · Standard room · 4★ · Design hotel in Kuta with a rooftop pool',
      images: [
        img('ce2oeybx4mt3fs7bjj7mst419cnc_download%20-%202024-07-10T160615.777.jpg'),
        img('zy6vtjd399cc5vzpsuccim8m1xis_download%20-%202024-07-10T160628.652.jpg'),
        img('rl185lf361eo0bg1rwuv117godel_download%20-%202024-07-10T160637.967.jpg'),
        img('uxgieudy2gtcin8n3lz6f09b282h_download%20-%202024-07-10T160703.848.jpg'),
        img('ug2051jbqdib1yu5htdnysmv4fn4_download%20-%202024-07-10T160634.294.jpg'),
        img('nxjs331lpigkwdbvmqklq5dzlruh_download%20-%202024-07-10T160709.481.jpg'),
        img('szrucswzfgdraflrpwt6ee34zzge_rossvibepaashaatelierbalikuta.jpg'),
        img('0bnenrgl55ym54yiizzz1cx2xce6_download%20-%202024-07-10T160741.457.jpg'),
        img('3rosxwy3d4zaj3i8kn5qr7w5cv5u_download%20-%202024-07-10T160720.921.jpg'),
        img('pro7ql9xkx40hbub7cjm0lrzhwpn_download%20-%202024-07-10T160653.804.jpg'),
        img('pvwpooe3z4lo83tdzi6hwqhtkr23_download%20-%202024-07-10T160735.743.jpg'),
        img('sih89zy8wlp3z83uogumh3nti3yi_download%20-%202024-07-10T160611.892.jpg'),
        img('venvfwwyngtycjgjyp4og04yck64_download%20-%202024-07-10T160716.832.jpg'),
        img('rtftwdlzqbwslty23dph4pi5b315_download%20-%202024-07-10T160624.001.jpg'),
        img('g6dp6geoj8uykjcgd3u5vnqpgy4c_download%20-%202024-07-10T160648.973.jpg'),
        img('lsj3hqu56a7fac38g1d06ruaele9_download%20-%202024-07-10T160748.245.jpg'),
        img('ogcglhwqigjc00a1otnudysmqyhr_download%20-%202024-07-10T160619.736.jpg')
      ]
    },
    activities: [
      {
        name: 'Nusa Penida west coast',
        day: 4,
        optional: false,
        image: img('t0maljvk56ovlztbtfx1w286arze_lrt2zsu6jyqlgqjvc2q9mn7dtt63_hr1pqdhfpxau4k7xzg517d1m7ht1_Broken-Beach-3.jpg'),
        description: 'Speedboat across for the Paluang cliff viewpoint, Kelingking beach and the rock arch at Angel\'s Billabong, with Broken Bay after it.'
      },
      {
        name: 'Balinese massage',
        day: 4,
        optional: false,
        image: img('2lqubqpwc7pgzj7podybztx47o8g_k1pjs1b8l54axfq37sc0s10so5j1_shutterstock_132434978.webp'),
        description: 'An hour of traditional Balinese massage after the island day, warm oil and long pressure strokes at a spa near the hotel.'
      },
      {
        name: 'GWK cultural park',
        day: 5,
        optional: false,
        image: img('3rxuj0x7hy1ze2033tmuvwap1bv0_23.jpg'),
        description: 'Entry to the Garuda Wisnu Kencana park, with its giant statue, the amphitheatre and the dance performances through the afternoon.'
      },
      {
        name: 'Waterbom Bali',
        day: 5,
        optional: false,
        image: img('jcaw0fh3e8840z60pd3mo1knd3ly_4wdft36thxaq9hfim4jmco0u524j_Photo-Shoot-36.webp'),
        description: 'The best water park in Asia by most lists, with slides for every age, a lazy river and gardens to sit in between them.'
      },
      {
        name: 'Water sports and Uluwatu with Kecak',
        day: 6,
        optional: false,
        image: img('hqmy02zrpajp8q2k7o4uuu4ww7nw_jjhc9ym7ybnvbjfwnziy2v4q3gac_hau587bp52lss2s707h2akmhw3gb_v4i29j28zm6fic2s5hm5231e67ar_1498545551_meslastidronestagram.jpg'),
        description: 'Parasailing, jet ski and a banana boat at Tanjung Benoa, then Uluwatu temple at sunset and the Kecak fire dance.'
      }
    ],
    program: {
      name: 'Kuta',
      description: 'Three nights on the coast with an island day, the GWK park, Waterbom and a south Bali day that ends with the Kecak dance.',
      image: img('mdlzdpcghdt5wbuiemeg58ko1h2e_shutterstock_1260067975.jpg')
    }
  }
];

const detail = {
  slug: 'grand-bali-family-holiday-with-waterbom',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Grand Bali Family Holiday with Waterbom',
  alt: 'Waterbom park slides in Kuta, Bali',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided day tours',
  tag: 'Family',
  tags: ['Family', 'Adventure'],
  price: 39852,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ubud', 'Bali Safari', 'Kuta', 'Nusa Penida', 'Uluwatu'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 8, transfers: 17 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['8 experiences', 'Activities'],
    ['17 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Eight included activities in seven days, and two of them are water parks. This is the family trip that earns its keep.',
    quoteMore: 'Pair the GWK park with Waterbom, they are fifteen minutes apart. Carry swimwear from the morning and the children will happily skip the statue photographs.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days for a family with three nights near Ubud for Kanto Lampo waterfall, Bali Safari and the temples of central Bali, then three in Kuta with Nusa Penida, the GWK park, Waterbom and the Kecak dance at Uluwatu.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with daily breakfast; private airport and inter city transfers; Kanto Lampo waterfall; Bali Safari and Marine Park; central Bali tour with Tirta Empul; Nusa Penida west coast tour; a Balinese massage; GWK park entry; Waterbom Bali tickets; water sports with Uluwatu and the Kecak dance.',
  intro2: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Ubud (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your hotel\nCheck in at your valley resort near Ubud\nRest of the day free by the pool\nOptional: the Monkey Forest or the Ubud art market', hotel: 'Alam Ubud Culture Villas & Residences', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your hotel', 'Check in at your valley resort near Ubud', 'Rest of the day free by the pool'] },
    { title: 'Day 2: Waterfall and safari park (B)', text: 'Breakfast, then on to Kanto Lampo waterfall\nA full afternoon at Bali Safari and Marine Park\nSafari ride, animal shows and the water park\nBack at the resort in the evening', hotel: 'Alam Ubud Culture Villas & Residences', highlights: ['Breakfast, then on to Kanto Lampo waterfall', 'A full afternoon at Bali Safari and Marine Park', 'Safari ride, animal shows and the water park'] },
    { title: 'Day 3: Central Bali and Tirta Empul (B)', text: 'Breakfast, then a full day in central Bali\nThe Bali swing and Tegenungan waterfall\nTirta Empul, the holy spring temple\nThe Tegalalang rice terraces on the way back', hotel: 'Alam Ubud Culture Villas & Residences', highlights: ['Breakfast, then a full day in central Bali', 'The Bali swing and Tegenungan waterfall', 'Tirta Empul, the holy spring temple'] },
    { title: 'Day 4: Nusa Penida and on to Kuta (B)', text: 'Early breakfast and check out, then on to Sanur harbour\nSpeedboat across to Nusa Penida for the west coast\nThe Paluang cliff, Kelingking beach and Angel\'s Billabong\nAn hour of Balinese massage once you reach Kuta', hotel: 'Cross Vibe Paasha Atelier Bali Kuta', highlights: ['Early breakfast and check out, then on to Sanur harbour', 'Speedboat across to Nusa Penida for the west coast', 'The Paluang cliff, Kelingking beach and Angel\'s Billabong'] },
    { title: 'Day 5: GWK park and Waterbom (B)', text: 'Breakfast, then entry to the Garuda Wisnu Kencana park\nThe giant statue and the afternoon dance performances\nThe rest of the day at Waterbom Bali\nSlides, the lazy river and the gardens', hotel: 'Cross Vibe Paasha Atelier Bali Kuta', highlights: ['Breakfast, then entry to the Garuda Wisnu Kencana park', 'The giant statue and the afternoon dance performances', 'The rest of the day at Waterbom Bali'] },
    { title: 'Day 6: Water sports and Uluwatu (B)', text: 'Breakfast, then a morning at Tanjung Benoa beach\nParasailing, jet ski and a banana boat with an instructor\nUluwatu temple on the cliffs at sunset\nKecak fire dance in the amphitheatre afterwards', hotel: 'Cross Vibe Paasha Atelier Bali Kuta', highlights: ['Breakfast, then a morning at Tanjung Benoa beach', 'Parasailing, jet ski and a banana boat with an instructor', 'Uluwatu temple on the cliffs at sunset'] },
    { title: 'Day 7: Departure from Bali (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Indonesia', href: '/asien/indonesia' },
  { label: detail.title }
];

export const grandBaliFamilyWaterbomBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const grandBaliFamilyWaterbomProduct = {
  slug: detail.slug,
  places: ['Ubud', 'Bali Safari', 'Kuta', 'Nusa Penida', 'Uluwatu'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 8,
  transfers: 17,
  meals: 6,
  price: detail.price,
  images: cardImages
};
