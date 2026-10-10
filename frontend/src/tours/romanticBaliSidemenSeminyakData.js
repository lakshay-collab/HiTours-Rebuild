// Romantic Bali with Sidemen and Seminyak. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('3a4r2lf40d3k0mk24cytk9idnrk4_Sidemen-2.jpg'),
  img('ni2vsnbwe3rqwxohjdor002i2nha_shutterstock_559730524.jpg'),
  img('n68mbz0snjjmepr9pbrv7r4irisp_Sidemen-3.jpg'),
  img('y62r8ggt0rho68aopabqyheu469s_shutterstock_620692622.jpg'),
  img('s9ol91erdvgfkb3eb9etyav9clbd_Sidemen-1.jpg'),
  img('1fniznkys3hs4t18hsind858z8ok_shutterstock_464526401.jpg'),
  img('qzqg7qbx8pq33i7so7acy1c8d9c8_shutterstock_1346342258.jpg'),
  img('sp71g4gjrrcnxd24gznzr7ejpldf_Seminyak-Beach-Umbrellas-Tile-Image.jpg'),
  img('28l0mtv3v8g1z78gnzjsxjx0zbhd_shutterstock_1346345108.jpg'),
  img('bfd9i7vnfl0rfpza6aodswecrybt_shutterstock_524421913.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Sidemen',
    subtitle: 'Sidemen to east Bali',
    dayLabel: 'Day 1 to 3',
    images: [
      img('3a4r2lf40d3k0mk24cytk9idnrk4_Sidemen-2.jpg'),
      img('n68mbz0snjjmepr9pbrv7r4irisp_Sidemen-3.jpg'),
      img('s9ol91erdvgfkb3eb9etyav9clbd_Sidemen-1.jpg')
    ],
    dayImages: {
      1: [
        img('inmyxsti6qbehlv5h1rppp7xm86s_Downpic.cc-image593166519.jpg'),
        img('dyi8tdymqgl867sfcss4htbknd1n_caption%20(85).jpg'),
        img('ytsylw139z6dh3x28r4hbbdswdom_Ananda-in-the-Himalayas-3-scaled.jpeg'),
        img('3a4r2lf40d3k0mk24cytk9idnrk4_Sidemen-2.jpg')
      ],
      2: [
        img('wx9jmruke492apwk18pjdj5ipscf_Lempuyang%20Temple-1.jpg'),
        img('fw0y06dvz7la8vhiaun0yyvlfnzi_Bali__Tirtagangga_3.jpg'),
        img('302b9mmn0sg6vh9vjvqanfccne5d_1580799476_35278627344_965ff71209_k.jpg'),
        img('ikxdqkbwaho2qido9hksfdx3zouc_bukit-cinta-2-1024x731.jpg')
      ],
      3: [
        img('yfhnf8xyizfvnwoopgn01ljwnz5u_zn7dyv85o7mqcomgyu1ijy4fyvgo_145%20(1).jpg'),
        img('11kxm99527x2ww3vx7rvxpp69q4t_1570175723_1562050066_zzzzzzzz.jpg.jpg'),
        img('3a4r2lf40d3k0mk24cytk9idnrk4_Sidemen-2.jpg'),
        img('n68mbz0snjjmepr9pbrv7r4irisp_Sidemen-3.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Sidemen`,
      'Arrival at Ngurah Rai Airport and private transfer to your villa',
      'Check in above the Sidemen rice terraces',
      'Rest of the day free on the valley terrace',
      'Optional: a walk through the rice fields before dinner',
      `${DAY_MARK}Day 2 · East Bali and Tirta Gangga`,
      'Breakfast, then a full day in east Bali',
      'The water palace and pools at Tirta Gangga',
      'The split gate at Lempuyang temple',
      'The Bukit Cinta viewpoint on the way back',
      `${DAY_MARK}Day 3 · Quad bikes and the Bali swing`,
      'Breakfast, then a quad bike route through the fields',
      'A cave tunnel and a river crossing on the way',
      'A turn on the jungle swing above the valley',
      'Evening free at the villa'
    ],
    accommodation: {
      name: 'Astana swaha Villa, Sidemen',
      description: '3 nights · Breakfast · Standard room · 3★ · Valley villa in the rice terraces above Sidemen',
      images: [
        img('8m5dhjlqq80mf9cv61kqocb0qtgv_234285424.jpg'),
        img('6rxcpvxjp03883cvrctjsvrfpyr8_234277450.jpg'),
        img('37zluod8rpysyi5cs5bjq6eu7voj_535432380.jpg'),
        img('0g3e6uue7ipp066ikwwbsegvr6ci_535439622.jpg'),
        img('f7mr8wc9kmoo9tl9p5fitf77ej6q_234285446.jpg'),
        img('q9mxc1mzbz5bni7kjcsuig1amppx_234276999.jpg'),
        img('rvopj7dmloquugo743ng50xkqm6h_535437954.jpg'),
        img('33ts2jnt86ruqo9fvm5dqbq94w00_234277433.jpg')
      ]
    },
    activities: [
      {
        name: 'East Bali sightseeing tour',
        day: 2,
        optional: false,
        image: img('wx9jmruke492apwk18pjdj5ipscf_Lempuyang%20Temple-1.jpg'),
        description: 'The water palace at Tirta Gangga, the split gate at Lempuyang and the Bukit Cinta viewpoint, a quiet side of the island few visitors see.'
      },
      {
        name: 'ATV ride with the Bali swing',
        day: 3,
        optional: false,
        image: img('yfhnf8xyizfvnwoopgn01ljwnz5u_zn7dyv85o7mqcomgyu1ijy4fyvgo_145%20(1).jpg'),
        description: 'A quad bike route through rice fields and a cave tunnel, then a turn on the jungle swing with the valley below your feet.'
      }
    ],
    program: {
      name: 'Sidemen',
      description: 'Three nights in a valley villa above the Sidemen rice terraces, with east Bali temples, a quad bike route and the jungle swing.',
      image: img('3a4r2lf40d3k0mk24cytk9idnrk4_Sidemen-2.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Seminyak',
    subtitle: 'Seminyak to Nusa Penida and Uluwatu',
    dayLabel: 'Day 4 to 7',
    images: [
      img('x7ihmxsmcxo1ds6acpzc3vxyr4x5_shutterstock_1179917983.jpg'),
      img('ni2vsnbwe3rqwxohjdor002i2nha_shutterstock_559730524.jpg'),
      img('qzqg7qbx8pq33i7so7acy1c8d9c8_shutterstock_1346342258.jpg'),
      img('bfd9i7vnfl0rfpza6aodswecrybt_shutterstock_524421913.jpg')
    ],
    dayImages: {
      4: [
        img('gw3wgdw62fw8p0yfhtxt0mnvsdf4_8dc98d50-2faa-4897-a6f3-c1cbc9a4f79f.webp'),
        img('kmleb6ur2b7j83f6gt2jg3z1kaw0_1470727921_Goa_Gajah_Front.JPG'),
        img('iuwcx7ytria2ev2dt4f94t3lh4uj_Downpic.cc-image208115031.jpg'),
        img('pfupn2n49j2c1jiymw5keyw1su88_cover-for-kanto-lampo.jpg')
      ],
      5: [
        img('lrt2zsu6jyqlgqjvc2q9mn7dtt63_hr1pqdhfpxau4k7xzg517d1m7ht1_Broken-Beach-3.jpg'),
        img('xxjdwssfts50rzk5wfvzelladqqu_1498724507_beach.jpg'),
        img('juwl1o8l3l3t7cd3tign11f5qbwb_23cfa5a555774cb793ff972ba1311093.jpg'),
        img('raz6i8qsplkduo2ddqpr2tqbahzi_download%20(11).jpg')
      ],
      6: [
        img('2lqubqpwc7pgzj7podybztx47o8g_k1pjs1b8l54axfq37sc0s10so5j1_shutterstock_132434978.webp'),
        img('00b2uf0c5x6tuxukledzsu5o74rt_wbw4auds8eg847kmndjzy85v7rlt_6vgd0e7t52gqjbz83iq3ira9enxp_dl.beatsnoop.com-3000-WXh1xPaymD.webp'),
        img('a62p0paetrwut5oyqetviies2zrd_uluwatu-temple.jpg'),
        img('usdgmsoaand8ytcb34q674qu6c2p_1470909118_Hanoman_Kecak_Dance_Uluwatu_sunset.jpg')
      ],
      7: [
        img('x7ihmxsmcxo1ds6acpzc3vxyr4x5_shutterstock_1179917983.jpg'),
        img('ni2vsnbwe3rqwxohjdor002i2nha_shutterstock_559730524.jpg'),
        img('qzqg7qbx8pq33i7so7acy1c8d9c8_shutterstock_1346342258.jpg'),
        img('bfd9i7vnfl0rfpza6aodswecrybt_shutterstock_524421913.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Waterfalls and on to Seminyak`,
      'Breakfast and check out, then on towards the coast',
      'The Sidemen rice terraces and Kanto Lampo waterfall',
      'Goa Gajah, the carved elephant cave temple',
      'Candlelight dinner for two at your Seminyak villa',
      `${DAY_MARK}Day 5 · Nusa Penida and snorkelling`,
      'Early breakfast, then private transfer to Sanur harbour',
      'Speedboat across to Nusa Penida for the west coast',
      'Kelingking beach, Angel\'s Billabong and Broken Bay',
      'Snorkelling in the clear water before the boat back',
      `${DAY_MARK}Day 6 · Melasti beach and Uluwatu`,
      'Breakfast, then an hour of Balinese massage for two',
      'Melasti beach, white sand below the cliffs',
      'Uluwatu temple on the cliffs at sunset',
      'Kecak fire dance in the amphitheatre afterwards',
      `${DAY_MARK}Day 7 · Departure from Bali`,
      'Breakfast at the villa and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'The Bali Bliss Villa, Seminyak',
      description: '3 nights · Breakfast · Standard room · 4★ · Private pool villa a short ride from Seminyak beach',
      images: [
        img('xuep3g9hc9cmlrw57uh0aftpz16y_34176265.jpg'),
        img('aaeuf73rawbvgtfie68u8jkkj5ea_34176289.jpg'),
        img('7ynvty872zgtswdt9jip5n3xeqev_34176494.jpg'),
        img('3pkzf400g3m1mg9i6esn0sh06tmc_34010888.jpg'),
        img('v8kd3stydymdzd4rk6z4dul5c1cu_34010899.jpg'),
        img('ebjrb5emwj6rc4fzxdb3kawm2yve_34176449.jpg')
      ]
    },
    activities: [
      {
        name: 'Sidemen terraces, Kanto Lampo and Goa Gajah',
        day: 4,
        optional: false,
        image: img('gw3wgdw62fw8p0yfhtxt0mnvsdf4_8dc98d50-2faa-4897-a6f3-c1cbc9a4f79f.webp'),
        description: 'The terraces on the way out of the valley, the wide fan of Kanto Lampo waterfall and the carved doorway at Goa Gajah cave temple.'
      },
      {
        name: 'Nusa Penida west coast',
        day: 5,
        optional: false,
        image: img('lrt2zsu6jyqlgqjvc2q9mn7dtt63_hr1pqdhfpxau4k7xzg517d1m7ht1_Broken-Beach-3.jpg'),
        description: 'Speedboat across for Kelingking beach, Angel\'s Billabong and Broken Bay, the three viewpoints that make the early start worth it.'
      },
      {
        name: 'Snorkelling off Nusa Penida',
        day: 5,
        optional: false,
        image: img('lrt2zsu6jyqlgqjvc2q9mn7dtt63_hr1pqdhfpxau4k7xzg517d1m7ht1_Broken-Beach-3.jpg'),
        description: 'Mask and fins in the clear water on the way back, with coral heads and reef fish close enough to the shore for beginners.'
      },
      {
        name: 'Balinese massage for two',
        day: 6,
        optional: false,
        image: img('2lqubqpwc7pgzj7podybztx47o8g_k1pjs1b8l54axfq37sc0s10so5j1_shutterstock_132434978.webp'),
        description: 'An hour of traditional Balinese massage for both of you, warm oil and long pressure strokes, booked privately near the villa.'
      },
      {
        name: 'Melasti beach and Uluwatu with Kecak',
        day: 6,
        optional: false,
        image: img('00b2uf0c5x6tuxukledzsu5o74rt_wbw4auds8eg847kmndjzy85v7rlt_6vgd0e7t52gqjbz83iq3ira9enxp_dl.beatsnoop.com-3000-WXh1xPaymD.webp'),
        description: 'The white sand at Melasti beach, then the cliff top temple at Uluwatu for sunset and the Kecak fire dance in the amphitheatre.'
      }
    ],
    program: {
      name: 'Seminyak',
      description: 'Three nights in a private pool villa with a candlelight dinner on arrival, a Nusa Penida day, a couples massage and the Kecak dance.',
      image: img('x7ihmxsmcxo1ds6acpzc3vxyr4x5_shutterstock_1179917983.jpg')
    }
  }
];

const detail = {
  slug: 'romantic-bali-with-sidemen-and-seminyak',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Romantic Bali with Sidemen and Seminyak',
  alt: 'Rice terraces in the Sidemen valley, east Bali',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Private transfers and guided day tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Culture'],
  price: 46750,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Sidemen', 'Tirta Gangga', 'Seminyak', 'Nusa Penida', 'Uluwatu'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 7, transfers: 16 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['16 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Sidemen is the Bali people picture before they arrive. Three nights there, three in Seminyak, and you have seen both islands.',
    quoteMore: 'Sidemen is an hour and a half from the airport and worth every minute. Carry light walking shoes for the terraces, and let us set the candlelight dinner for your first Seminyak evening.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days for two with three nights in a valley villa above the Sidemen rice terraces and three in a private pool villa near Seminyak, taking in east Bali temples, a quad bike route, waterfalls, Nusa Penida and the Kecak dance at Uluwatu.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights with daily breakfast; private airport and inter city transfers; east Bali tour; ATV ride with the Bali swing; Sidemen terraces with Kanto Lampo and Goa Gajah; candlelight dinner; Nusa Penida west coast tour with snorkelling; Balinese massage for two; Melasti beach and Uluwatu with the Kecak dance.',
  intro2: 'Not included: international flights; Indonesia visa fees; lunches and other dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Sidemen (Arrival)', text: 'Arrival at Ngurah Rai Airport and private transfer to your villa\nCheck in above the Sidemen rice terraces\nRest of the day free on the valley terrace\nOptional: a walk through the rice fields before dinner', hotel: 'Astana swaha Villa', highlights: ['Arrival at Ngurah Rai Airport and private transfer to your villa', 'Check in above the Sidemen rice terraces', 'Rest of the day free on the valley terrace'] },
    { title: 'Day 2: East Bali and Tirta Gangga (B)', text: 'Breakfast, then a full day in east Bali\nThe water palace and pools at Tirta Gangga\nThe split gate at Lempuyang temple\nThe Bukit Cinta viewpoint on the way back', hotel: 'Astana swaha Villa', highlights: ['Breakfast, then a full day in east Bali', 'The water palace and pools at Tirta Gangga', 'The split gate at Lempuyang temple'] },
    { title: 'Day 3: Quad bikes and the Bali swing (B)', text: 'Breakfast, then a quad bike route through the fields\nA cave tunnel and a river crossing on the way\nA turn on the jungle swing above the valley\nEvening free at the villa', hotel: 'Astana swaha Villa', highlights: ['Breakfast, then a quad bike route through the fields', 'A cave tunnel and a river crossing on the way', 'A turn on the jungle swing above the valley'] },
    { title: 'Day 4: Waterfalls and on to Seminyak (B, D)', text: 'Breakfast and check out, then on towards the coast\nThe Sidemen rice terraces and Kanto Lampo waterfall\nGoa Gajah, the carved elephant cave temple\nCandlelight dinner for two at your Seminyak villa', hotel: 'The Bali Bliss Villa', highlights: ['Breakfast and check out, then on towards the coast', 'The Sidemen rice terraces and Kanto Lampo waterfall', 'Goa Gajah, the carved elephant cave temple'] },
    { title: 'Day 5: Nusa Penida and snorkelling (B)', text: 'Early breakfast, then private transfer to Sanur harbour\nSpeedboat across to Nusa Penida for the west coast\nKelingking beach, Angel\'s Billabong and Broken Bay\nSnorkelling in the clear water before the boat back', hotel: 'The Bali Bliss Villa', highlights: ['Early breakfast, then private transfer to Sanur harbour', 'Speedboat across to Nusa Penida for the west coast', 'Kelingking beach, Angel\'s Billabong and Broken Bay'] },
    { title: 'Day 6: Melasti beach and Uluwatu (B)', text: 'Breakfast, then an hour of Balinese massage for two\nMelasti beach, white sand below the cliffs\nUluwatu temple on the cliffs at sunset\nKecak fire dance in the amphitheatre afterwards', hotel: 'The Bali Bliss Villa', highlights: ['Breakfast, then an hour of Balinese massage for two', 'Melasti beach, white sand below the cliffs', 'Uluwatu temple on the cliffs at sunset'] },
    { title: 'Day 7: Departure from Bali (B)', text: 'Breakfast at the villa and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the villa and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Indonesia visa fees; lunches and other dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bali', href: '/asia/bali' },
  { label: detail.title }
];

export const romanticBaliSidemenSeminyakBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const romanticBaliSidemenSeminyakProduct = {
  slug: detail.slug,
  places: ['Sidemen', 'Tirta Gangga', 'Seminyak', 'Nusa Penida', 'Uluwatu'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 7,
  transfers: 16,
  meals: 7,
  price: detail.price,
  images: cardImages
};
