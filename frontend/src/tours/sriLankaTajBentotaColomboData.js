// Sri Lanka in the Lap of Luxury: Taj Bentota and Taj Samudra. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
  img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
  img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg'),
  img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
  img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg'),
  img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
  img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg'),
  img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
  img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
  img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
  img('lcogdoq76wasext2xs8n1943h2uh_1597147042_shutterstock_785564455.jpg'),
  img('z8pc6746uelxtxz5446rmvk51rki_flickr_cached_img_20b18d949dbd302f958b4aadfd6bf889_600x600.jpg'),
  img('2kyg08hfs2xevolr6axgk0fpxg9d_download.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Bentota',
    dayLabel: 'Day 1 to 2',
    images: [
      img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
      img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
      img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg'),
      img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg')
    ],
    dayImages: {
      1: [
        img('lcogdoq76wasext2xs8n1943h2uh_1597147042_shutterstock_785564455.jpg'),
        img('z8pc6746uelxtxz5446rmvk51rki_flickr_cached_img_20b18d949dbd302f958b4aadfd6bf889_600x600.jpg'),
        img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
        img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg')
      ],
      2: [
        img('3drp3xw253kg7pt48iauc5vh1yjz_Bentota%202.jpg'),
        img('mgac8tj98vp4u6p3vv4acwiwsebh_22859730893_159b5dee46_b.jpg'),
        img('c0x2bsv51zmx3tz3qiitrit9r8w8_Bentota%20Islang.JPG'),
        img('2kyg08hfs2xevolr6axgk0fpxg9d_download.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Bentota`,
      'Arrival at Bandaranaike International and private transfer down the coast',
      'The Kosgoda turtle hatchery on the way',
      'Check in at the Taj Bentota Resort and Spa',
      'Dinner with the sound of the sea',
      `${DAY_MARK}Day 2 · Bentota sightseeing`,
      'Breakfast, then a boat safari on the Madu Ganga',
      'The Galapatha temple and the cinnamon island',
      'The afternoon on Bentota beach or at the Jiva spa',
      'Optional: a private candlelit dinner on the lawn'
    ],
    accommodation: {
      name: 'Taj Bentota Resort and Spa, Bentota',
      description: '2 nights · Breakfast and dinner · Superior room · 5★ · Five star Taj resort on a headland above Bentota beach',
      images: [
        img('jps8p4vmtpttzsk79buikjfx1z84_1669385336250.jpg'),
        img('p2zqe615mg3gbu6qwlwwkkiba0vy_208944656_987356088667106_960511.jpg'),
        img('y9ey1zva8ehg0iw31kl0zc3x9gvz_IMG_E6534-1600x1200.jpg'),
        img('v5058bac0q3mge95qstj3mpc0hei_download%20-%202024-02-15T130110.458.jpeg'),
        img('0ghw87zgsm88bek67w6vreiocxhl_download%20-%202024-02-15T130036.392.jpeg'),
        img('a19zrlznz0k5hzsnzyienan0igoc_download%20-%202024-02-15T130045.725.jpeg'),
        img('84z18ldo9unpbv1odobhsb2hdbf5_download%20-%202024-02-15T130240.162.jpeg'),
        img('digxg9gj5iztkim9pejz69z49a9f_download%20-%202024-02-15T130253.172.jpeg'),
        img('nu6mzcodtzbbsfb1p2btiayy27tl_download%20-%202024-02-15T130152.966.jpeg'),
        img('dd3batdgbyc1sga02djaiijiknhu_download%20-%202024-02-15T130145.918.jpeg'),
        img('4pcfp98y7upd4qe7yw62hhmr3ns8_download%20-%202024-02-15T130229.725.jpeg'),
        img('n7ggk4a7llvmzc4xjtuwo6v53c53_download%20-%202024-02-15T130028.724.jpeg'),
        img('e8efocniz2yq0u2gm2h92xr4j31j_download%20-%202024-02-15T130118.109.jpeg'),
        img('7ejp0663twnj0lk6gpm58fgeks5s_download%20-%202024-02-15T130136.993.jpeg'),
        img('c44w8k5839sz7ww53xmestgeceq8_IMG_E6371-scaled.jpg'),
        img('u9zy0002oe35ed2wo8tg4geo8kre_download%20-%202024-02-15T130102.864.jpeg')
      ]
    },
    activities: [
      {
        name: 'Kosgoda turtle hatchery',
        day: 1,
        optional: false,
        image: img('lcogdoq76wasext2xs8n1943h2uh_1597147042_shutterstock_785564455.jpg'),
        description: 'The hatchery south of Bentota where eggs are protected and hatchlings released into the sea at dusk.'
      },
      {
        name: 'Full day Bentota sightseeing',
        day: 2,
        optional: false,
        image: img('3drp3xw253kg7pt48iauc5vh1yjz_Bentota%202.jpg'),
        description: 'The Madu Ganga boat ride, the Kosgoda turtle hatchery, the Galapatha temple and an afternoon on Bentota beach.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'Two nights at the Taj on the headland with the turtle hatchery on arrival and a full day of the Madu Ganga, the temple and the beach.',
      image: img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Colombo',
    dayLabel: 'Day 3 to 5',
    images: [
      img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
      img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
      img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
      img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg')
    ],
    dayImages: {
      3: [
        img('vckopqkosvqkcs3oigv93ubbeh80_1580470871_beira_lake.jpg'),
        img('bg1qpvgg66ngwbmrl3w8503wck29_full_54fa4c0bc2ff8dutch-period-museum.jpg'),
        img('eqi1xzgz6ynpq2qn8uwwiev0dr1w_7705248484_0740309cbb_o.jpg'),
        img('3me5273fnwwgz3pcjbxxunfyj5di_miss.jpg')
      ],
      4: [
        img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        img('docw1hphy3zg23x9fyr5x9b9j995_1580298371_Galle_face_green.jpg'),
        img('eroknzeg63hrum6xty5qww1sf154_1580210450_shutterstock_327595163.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
      ],
      5: [
        img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
        img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
        img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
        img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · To Colombo and a day at leisure`,
      'Breakfast and a private transfer up the coast',
      'Check in at the Taj Samudra on Galle Face Green',
      'The afternoon free for the pool, the spa or the shops of Colombo 7',
      'Dinner at the hotel',
      `${DAY_MARK}Day 4 · Colombo city tour`,
      'Breakfast, then Galle Face Green and the Gangaramaya temple',
      'The Fort district, the Lotus Tower and Pettah market',
      'The National Museum and Independence Square',
      'Dinner and your last night at the hotel',
      `${DAY_MARK}Day 5 · Departure from Colombo`,
      'Breakfast at the hotel and check out',
      'Private transfer to Bandaranaike International for your flight home'
    ],
    accommodation: {
      name: 'Taj Samudra, Colombo',
      description: '2 nights · Breakfast and dinner · Superior room · 5★ · Five star Taj hotel facing Galle Face Green and the ocean',
      images: [
        img('5myqi52ck8uhomo0ci6aqoqy0l9x_323692601_3313886348826724_6139559986602313291_n.jpg'),
        img('aaub6ka5j2j31i2ucua0xffbw9b8_173558299.jpg'),
        img('0suqlanndzk9jz9x4xshqb2bpgmv_25314911.png'),
        img('1xf78zroqdbeh8ywggpvcm7b003w_24858943.png'),
        img('ry8jsxxrcfdtydbu64s0nvhbzt4h_173820633.png'),
        img('dor4zff68apkc2dguv8kgimv3v6u_download%20(1).jpg'),
        img('lr1jhgittn7uzp8fjr5hga40pgur_173820628.png'),
        img('an6pnv8vw44lncn1xjncdzaz2zyn_466762_307116729349990_891475416_o.jpg'),
        img('0g95n74wbir3grp05w52pejgup6a_25314924.png'),
        img('41rc7eidphyofoqdv7a6n5u1lq0e_10345757_880835555311435_7988164157620932282_n.jpg'),
        img('uvfu2807b03t8dmhjugm3gz2xmvg_166719760.jpg'),
        img('jt93ejtgvgokixklb7wnafynxpvv_32896931.jpg'),
        img('u4bc7ci0xvpxeaj7qdu5wsz6h4ch_25314905.jpg'),
        img('2rinz9d3uj5k6im77g6cviwftpdi_25314924.jpg'),
        img('o1l9l5p2qu7iyshcxnm0a7d0c4xm_166706708.jpg'),
        img('9ue4cx7z5vt9jczar6wc9l02m9ac_164451665.jpg')
      ]
    },
    activities: [
      {
        name: 'Full day Colombo sightseeing',
        day: 4,
        optional: false,
        image: img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and the floating market at Pettah.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'Two nights facing Galle Face Green with a free day for the pool and the spa and a full day of the capital.',
      image: img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg')
    }
  }
];

const detail = {
  slug: 'sri-lanka-in-the-lap-of-luxury-taj-bentota-and-taj-samudra',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Sri Lanka in the Lap of Luxury: Taj Bentota and Taj Samudra',
  alt: 'The pool terrace of the Taj Bentota Resort above the Indian Ocean',
  days: '5 days / 4 nights',
  stations: '2 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Luxury',
  tags: ['Luxury', 'Honeymoon', 'Beach'],
  price: 32300,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Bentota', 'Colombo'],
  stats: { days: 5, cities: 2, hotels: 2, activities: 3, transfers: 5 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['5 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aditya',
    image: '/experts/aditya.webp',
    role: 'Sri Lanka expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Bentota is where the trip exhales. After the temples and tea estates, three nights by the water is exactly the right medicine.',
    quoteMore: 'Ask for an early start on the Galle day. The fort ramparts are empty before ten and the light on the lighthouse is at its best.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five days in two Taj hotels: two nights above the beach at Bentota with the turtle hatchery and the Madu Ganga, then two nights facing Galle Face Green in Colombo with a free day and a full day of the city.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights in five star Taj hotels with breakfast and lunch or dinner daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; the Kosgoda turtle hatchery; a full day Bentota sightseeing tour with the Madu Ganga boat; a full day Colombo sightseeing tour.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches where dinner is taken; entrance tickets where payable locally; travel insurance; spa treatments and optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Bentota (D)', text: 'Arrival at Bandaranaike International and private transfer down the coast\nThe Kosgoda turtle hatchery on the way\nCheck in at the Taj Bentota Resort and Spa\nDinner with the sound of the sea', hotel: 'Taj Bentota Resort & Spa, Sri Lanka', highlights: ['Arrival at Bandaranaike International and private transfer down the coast', 'The Kosgoda turtle hatchery on the way', 'Check in at the Taj Bentota Resort and Spa'] },
    { title: 'Day 2: Bentota sightseeing (B, D)', text: 'Breakfast, then a boat safari on the Madu Ganga\nThe Galapatha temple and the cinnamon island\nThe afternoon on Bentota beach or at the Jiva spa\nOptional: a private candlelit dinner on the lawn', hotel: 'Taj Bentota Resort & Spa, Sri Lanka', highlights: ['Breakfast, then a boat safari on the Madu Ganga', 'The Galapatha temple and the cinnamon island', 'The afternoon on Bentota beach or at the Jiva spa'] },
    { title: 'Day 3: To Colombo and a day at leisure (B, D)', text: 'Breakfast and a private transfer up the coast\nCheck in at the Taj Samudra on Galle Face Green\nThe afternoon free for the pool, the spa or the shops of Colombo 7\nDinner at the hotel', hotel: 'Taj Samudra, Colombo', highlights: ['Breakfast and a private transfer up the coast', 'Check in at the Taj Samudra on Galle Face Green', 'The afternoon free for the pool, the spa or the shops of Colombo 7'] },
    { title: 'Day 4: Colombo city tour (B, D)', text: 'Breakfast, then Galle Face Green and the Gangaramaya temple\nThe Fort district, the Lotus Tower and Pettah market\nThe National Museum and Independence Square\nDinner and your last night at the hotel', hotel: 'Taj Samudra, Colombo', highlights: ['Breakfast, then Galle Face Green and the Gangaramaya temple', 'The Fort district, the Lotus Tower and Pettah market', 'The National Museum and Independence Square'] },
    { title: 'Day 5: Departure from Colombo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; lunches where dinner is taken; entrance tickets where payable locally; travel insurance; spa treatments and optional excursions; tips and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const sriLankaTajBentotaColomboBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const sriLankaTajBentotaColomboProduct = {
  slug: detail.slug,
  places: ['Bentota', 'Colombo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 3,
  transfers: 5,
  meals: 8,
  price: detail.price,
  images: cardImages
};
