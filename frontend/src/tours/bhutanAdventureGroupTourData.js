// Bhutan Adventure Group Tour. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
  img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
  img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg'),
  img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
  img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg'),
  img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
  img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
  img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
  img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
  img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
  img('909kqfhk9q0juri0so4yu6g560w6_shutterstock_1265829700.jpg'),
  img('mw0vtnl1c4j20324s03kbhyv01vp_5352842185_407113b581_o.jpg'),
  img('ifsuk5vesg7xl19ofwaqzy6krdcp_shutterstock_151345934.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Thimphu',
    dayLabel: 'Day 1 to 2',
    images: [
      img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
      img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
      img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg'),
      img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg')
    ],
    dayImages: {
      1: [
        img('909kqfhk9q0juri0so4yu6g560w6_shutterstock_1265829700.jpg'),
        img('mw0vtnl1c4j20324s03kbhyv01vp_5352842185_407113b581_o.jpg'),
        img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
        img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg')
      ],
      2: [
        img('ifsuk5vesg7xl19ofwaqzy6krdcp_shutterstock_151345934.jpg'),
        img('imqbu0xbgl8bykm6i06y53tjkf4w_22423229676_75bc3a183f_b.jpg'),
        img('z1nao5xw3j8otdqp9mapxinwhbc8_43467023271_24c0307027_b.jpg'),
        img('xguiebm2y88fnap7eww10g8cwpvc_1578661243_simply.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Thimphu`,
      'Arrival at Paro International and transfer to Thimphu',
      'The road east along the Pa Chhu and the Wang Chhu',
      'The riverside market halls by the Wang Chhu',
      'Chillies, ferns and strings of dried beef',
      `${DAY_MARK}Day 2 · Thimphu sightseeing`,
      'Breakfast, then out into the capital',
      'The Memorial Chorten and the Buddha Dordenma',
      'Tashichho Dzong and the takin preserve'
    ],
    accommodation: {
      name: 'Hotel Nordenma, Thimphu City',
      description: '2 nights · Breakfast · Standard room · 3★ · Comfortable hotel in the capital, walkable to the clock tower',
      images: [
        img('mzvifzg1ohglg8q731zavsww8ks4_448293399.jpg'),
        img('50majoj39u60nxihfarkuachbmbr_447802036.jpg'),
        img('r0cwbqbn8zzrfkqdchcrz6itzhuk_room4.jpg'),
        img('jtzb7baisu5shqm821vox4f3nxrp_main-2.jpg'),
        img('ytgoleeu3mlrrvgxule88jxm84ae_447801998.jpg'),
        img('km8ksgedb7vco8s9kttvtbun4ip1_room8_1706783589516.jpg'),
        img('khf0qkklub1z2z5zqu93b4ptdfnp_IMG_9802.jpeg'),
        img('mmc5kml2y0kuhur0pk62izrpbpd7_room5-transformed.jpeg')
      ]
    },
    activities: [
      {
        name: 'Thimphu weekend market',
        day: 1,
        optional: false,
        image: img('909kqfhk9q0juri0so4yu6g560w6_shutterstock_1265829700.jpg'),
        description: 'The riverside market halls where farmers bring chillies, ferns, yak cheese and strings of dried beef.'
      },
      {
        name: 'Thimphu sightseeing tour',
        day: 2,
        optional: false,
        image: img('ifsuk5vesg7xl19ofwaqzy6krdcp_shutterstock_151345934.jpg'),
        description: 'A guided day round the capital with the Memorial Chorten, the Buddha Dordenma, Tashichho Dzong and the takin preserve.'
      }
    ],
    program: {
      name: 'Thimphu',
      description: 'Days in the capital, with the Memorial Chorten, the Buddha Dordenma and Tashichho Dzong.',
      image: img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Punakha',
    dayLabel: 'Day 3 to 4',
    images: [
      img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
      img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
      img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
      img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg')
    ],
    dayImages: {
      3: [
        img('8lbjtorwyrlyt28x2kdppeuya0ze_shutterstock_151345925.jpg'),
        img('056auoul5hww4jxhty1ioepx1oi7_5116835341_c68f3cb493_b.jpg'),
        img('0hlgpb14iwhgm0834fzkpbd5sgiv_8154575525_198c2ed1bb_b.jpg'),
        img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg')
      ],
      4: [
        img('s54fa8joyoy2aulsobj35e525xr5_shutterstock_2406324949.jpg'),
        img('2mbj50ldadrw28t69osbp7h5yumh_Khamsum-Yuelley-Namgyrl-Buddhist-temple-in-Bhutan-bhud.jpg'),
        img('j813nq72vnzer1308zigrwjh4b5v_Drak_Yerpa_valley.jpg'),
        img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · To Punakha: Punakha Dzong`,
      'Breakfast, then east over the Dochula pass',
      'The hundred and eight chortens at the top',
      'Punakha Dzong between the Pho and Mo rivers',
      'Chimi Lhakhang across the paddy fields',
      `${DAY_MARK}Day 4 · Punakha dzong`,
      'Breakfast in the warm Punakha valley',
      'Punakha Dzong between the Pho and Mo rivers',
      'The long suspension bridge over the water'
    ],
    accommodation: {
      name: 'Hotel Rivervalley, Punakha, Punakha',
      description: '2 nights · Breakfast · Standard room · 3★ · Riverside hotel in the warm old winter capital',
      images: [
        img('48sbqdfd62yprtyqeein5tw8ff44_y48c0273.jpg'),
        img('nbiy2klsy4vccrebcl42jz67m7nk_66c5c6ce.png'),
        img('wrblv2mtrt8970ayecsyobwu2fgg_2d1f656b.png'),
        img('6udjeko5hifga92x0x4o1syya994_41e25ab2.png'),
        img('vgel99h62hbr8ko8rcbpk0q38tu2_4183e25c.png'),
        img('42hvmhcqd8s8lpjc1yh4vg5ijj6k_ba3114a8.png'),
        img('xsnkdyrysglqpxxnr2yrghhwnz0j_ae99f0ce.png'),
        img('fxdqoq3nrf7nkimzxcs45sefvins_b72c20d3.png')
      ]
    },
    activities: [
      {
        name: 'Punakha Dzong and Chimi Lhakhang',
        day: 3,
        optional: false,
        image: img('8lbjtorwyrlyt28x2kdppeuya0ze_shutterstock_151345925.jpg'),
        description: 'The fortress where the kings are crowned, set between two rivers, and the fertility temple of Chimi Lhakhang.'
      },
      {
        name: 'Punakha sightseeing tour',
        day: 4,
        optional: false,
        image: img('s54fa8joyoy2aulsobj35e525xr5_shutterstock_2406324949.jpg'),
        description: 'The fortress where Bhutan’s kings are crowned, built on the spit of land where two rivers meet below the town.'
      }
    ],
    program: {
      name: 'Punakha',
      description: 'Days in the warm old winter capital, with the Dzong between two rivers and the suspension bridge.',
      image: img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Paro',
    dayLabel: 'Day 5 to 7',
    images: [
      img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
      img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
      img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
      img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg')
    ],
    dayImages: {
      5: [
        img('lvrrucang7e4i29fjjrr5dv1hfbg_1481602680_Ta_Dzong_museum.jpg'),
        img('r4dreq5jqx0v2sjjwm6r9g9xvhxm_1578738831_Rinpung_Dzong_Monastery1.jpg'),
        img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
        img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg')
      ],
      6: [
        img('ix42u9m8t0js0gqtfhk9anhn48jh_shutterstock_648785491.jpg'),
        img('rart59u3umfaty65dt0fpejnn4ex_Drukgyel%20Dzong.jpg'),
        img('q8phludak72pr8ojnm2cmpi4w33n_1481602623_Paro-Kyichu-Lhakhang299.jpg'),
        img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg')
      ],
      7: [
        img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
        img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
        img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
        img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · To Paro: Ta Dzong and Rinpung Dzong`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'The round watchtower holding the National Museum',
      'Rinpung Dzong on the slope above the river',
      `${DAY_MARK}Day 6 · Paro sightseeing`,
      'Breakfast, then out into the Paro valley',
      'The National Museum in the old watchtower',
      'Rinpung Dzong and the Drukgyel ruins',
      `${DAY_MARK}Day 7 · Departure from Paro`,
      'Breakfast at the hotel and check out',
      'Private transfer to Paro International for your flight home'
    ],
    accommodation: {
      name: 'Tshang Tshang Villa, Paro, Paro',
      description: '2 nights · Breakfast · Standard room · 3★ · Quiet hotel in the valley below Taktsang',
      images: [
        img('x4kd3s40lzf1h9ja0k82plnkyx3r_ttv1.jpeg'),
        img('1yjglspv9kpsnhgh91jb5gezat1u_ttv3.jpeg'),
        img('o3od2mmrm0cap1yogwr3tlk7plkw_ttv7.jpeg'),
        img('yfwkh68xckltndxltjkfi61bb7vk_ttv2.jpeg'),
        img('njl5oyxyv8le7928tzduhqjn8843_ttv6-1110x739x0x147x1110x592x1659801074.jpeg'),
        img('6emv20ve786oxhldi2bzu9bucpxi_Tshang%20Tshang%20Villa%203.png')
      ]
    },
    activities: [
      {
        name: 'Ta Dzong and Rinpung Dzong',
        day: 5,
        optional: false,
        image: img('lvrrucang7e4i29fjjrr5dv1hfbg_1481602680_Ta_Dzong_museum.jpg'),
        description: 'The round watchtower that now holds the National Museum, and the whitewashed Rinpung fortress above the river.'
      },
      {
        name: 'Paro sightseeing tour',
        day: 6,
        optional: false,
        image: img('ix42u9m8t0js0gqtfhk9anhn48jh_shutterstock_648785491.jpg'),
        description: 'A guided round of the valley with the National Museum, Rinpung Dzong and the ruins of Drukgyel Dzong.'
      }
    ],
    program: {
      name: 'Paro',
      description: 'Days in the valley below Taktsang, with Rinpung Dzong, the National Museum and the Tiger’s Nest hike.',
      image: img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg')
    }
  }
];

const detail = {
  slug: 'bhutan-adventure-group-tour',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bhutan Adventure Group Tour',
  alt: 'Chimi Lhakhang temple across the Punakha paddy fields',
  days: '7 days / 6 nights',
  stations: '3 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Adventure',
  tags: ['Adventure', 'Culture'],
  price: 49390,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Thimphu', 'Punakha', 'Paro'],
  stats: { days: 7, cities: 3, hotels: 3, activities: 6, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['12 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'A fixed departure group tour, so you travel with others and the price stays down. Two nights each in Thimphu, Punakha and Paro.',
    quoteMore: 'Two nights in Punakha is rare on a group tour. Use the spare afternoon for a float down the Mo Chhu rather than another temple.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '7 days through Thimphu, Punakha, Paro, with 6 nights, all meals and a licensed Bhutanese guide: the thimphu weekend market, the thimphu sightseeing tour, the punakha dzong and chimi lhakhang, the punakha sightseeing tour.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights across Thimphu, Punakha, Paro with all meals; all land transfers by private vehicle; the Thimphu weekend market; the Thimphu sightseeing tour; the Punakha Dzong and Chimi Lhakhang; the Punakha sightseeing tour; the Ta Dzong and Rinpung Dzong; the Paro sightseeing tour; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Thimphu (L)', text: 'Arrival at Paro International and transfer to Thimphu\nThe road east along the Pa Chhu and the Wang Chhu\nThe riverside market halls by the Wang Chhu\nChillies, ferns and strings of dried beef', hotel: 'Hotel Nordenma', highlights: ['Arrival at Paro International and transfer to Thimphu', 'The road east along the Pa Chhu and the Wang Chhu', 'The riverside market halls by the Wang Chhu'] },
    { title: 'Day 2: Thimphu sightseeing (B, L)', text: 'Breakfast, then out into the capital\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and the takin preserve', hotel: 'Hotel Nordenma', highlights: ['Breakfast, then out into the capital', 'The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and the takin preserve'] },
    { title: 'Day 3: To Punakha: Punakha Dzong (B, L)', text: 'Breakfast, then east over the Dochula pass\nThe hundred and eight chortens at the top\nPunakha Dzong between the Pho and Mo rivers\nChimi Lhakhang across the paddy fields', hotel: 'Hotel Rivervalley, Punakha', highlights: ['Breakfast, then east over the Dochula pass', 'The hundred and eight chortens at the top', 'Punakha Dzong between the Pho and Mo rivers'] },
    { title: 'Day 4: Punakha dzong (B, L)', text: 'Breakfast in the warm Punakha valley\nPunakha Dzong between the Pho and Mo rivers\nThe long suspension bridge over the water', hotel: 'Hotel Rivervalley, Punakha', highlights: ['Breakfast in the warm Punakha valley', 'Punakha Dzong between the Pho and Mo rivers', 'The long suspension bridge over the water'] },
    { title: 'Day 5: To Paro: Ta Dzong and Rinpung Dzong (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nThe round watchtower holding the National Museum\nRinpung Dzong on the slope above the river', hotel: 'Tshang Tshang Villa, Paro', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'The round watchtower holding the National Museum'] },
    { title: 'Day 6: Paro sightseeing (B, L)', text: 'Breakfast, then out into the Paro valley\nThe National Museum in the old watchtower\nRinpung Dzong and the Drukgyel ruins', hotel: 'Tshang Tshang Villa, Paro', highlights: ['Breakfast, then out into the Paro valley', 'The National Museum in the old watchtower', 'Rinpung Dzong and the Drukgyel ruins'] },
    { title: 'Day 7: Departure from Paro (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Paro International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Paro International for your flight home'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bhutan', href: '/asia/bhutan' },
  { label: detail.title }
];

export const bhutanAdventureGroupTourBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bhutanAdventureGroupTourProduct = {
  slug: detail.slug,
  places: ['Thimphu', 'Punakha', 'Paro'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 6,
  transfers: 10,
  meals: 12,
  price: detail.price,
  images: cardImages
};
