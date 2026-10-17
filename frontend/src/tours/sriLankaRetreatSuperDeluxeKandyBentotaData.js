// Sri Lanka Retreat Super Deluxe: Kandy and Bentota in Five Days. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
  img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg'),
  img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
  img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg'),
  img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
  img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
  img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg'),
  img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
  img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
  img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
  img('273z0ew2ziyinmy62ccpeay5ggwo_nepal-royal-botanical-gardens.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kandy',
    dayLabel: 'Day 1 to 2',
    images: [
      img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
      img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg'),
      img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg'),
      img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg')
    ],
    dayImages: {
      1: [
        img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        img('2qdrxrko072bcco7ufzgu2npr0c7_1581078051_17185271045_4b7e32f3fc_b_(1).jpg')
      ],
      2: [
        img('1xmli9j38vniz1tghlcgs4bxa0gc_shutterstock_1840791727.jpg'),
        img('0scen0iugpry0mg4wqnxsr558nvw_Labookellie_tea_plantation__Sri_Lanka_2.jpg'),
        img('5ryv9me1696b1ry058e5jsm7lzya_Botanical_Garden_of_Peradeniya_03.jpg'),
        img('273z0ew2ziyinmy62ccpeay5ggwo_nepal-royal-botanical-gardens.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Kandy`,
      'Arrival at Bandaranaike International and private transfer inland',
      'A stop at the Pinnawala elephant sanctuary on the way',
      'Check in at your Kandy hotel in the afternoon',
      'An evening lake drive and the Kandyan dance performance',
      `${DAY_MARK}Day 2 · A full day in Kandy`,
      'Breakfast, then the Temple of the Sacred Tooth Relic',
      'The Peradeniya Royal Botanical Gardens',
      'The hilltop Buddha at Bahiravokanda and the gem museum',
      'Dinner at the hotel'
    ],
    accommodation: {
      name: 'Deluxe hotel, Kandy',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Deluxe class hotel in the hills above Kandy',
      images: [
        img('6d8gdkmt2d0v8l2hh4thqt0yrarl_119284699.jpg'),
        img('dkb5u7131wos84tkyotkx01jfad4_89778712.jpg'),
        img('11euyuog00hnu6gy7e86c6m0dsn8_78004727.jpg'),
        img('1wgn250xda954y7gacy42iqg5dpl_119278479.jpg'),
        img('tp8qvcg224iw67v1lmmh8mm90g23_89776696.jpg'),
        img('6dk2frqdaoabs0br93qeiw3004k8_78002733.jpg'),
        img('h89xvpa8a62lptwao8gaipvg618c_89782367.jpg'),
        img('ugcc1f5v4weyt14h1ynpd5d4pstr_207308605.jpg'),
        img('sxwxo49aty53ndkvqs76c3yy6rb5_207300381.jpg'),
        img('9nm14d0wsjmv65qzptl3lblxtq84_80964190.jpg'),
        img('atehk6th4jlwmlsngomksq7qc6z9_207312084.jpg'),
        img('19sdncqwtds03oxpxfx1stb5e5s9_89779246.jpg'),
        img('ljn6fj4sf9nb47chfsz6hvibjuaf_118516262.jpg'),
        img('lm0y34j8uqu554mpne2f7ut759yn_119519211.jpg')
      ]
    },
    activities: [
      {
        name: 'Private visit to Pinnawala',
        day: 1,
        optional: false,
        image: img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        description: 'A stop on the way up from the airport to watch the resident herd bathe in the Maha Oya river and feed at the sanctuary.'
      },
      {
        name: 'Private lake drive and Kandyan dance show',
        day: 1,
        optional: false,
        image: img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        description: 'An evening circuit of the lake followed by a traditional performance of drummers, masked dancers and the closing fire walk.'
      },
      {
        name: 'Private full day Kandy sightseeing',
        day: 2,
        optional: false,
        image: img('1xmli9j38vniz1tghlcgs4bxa0gc_shutterstock_1840791727.jpg'),
        description: 'The Temple of the Sacred Tooth Relic, Peradeniya gardens, the Bahiravokanda Buddha and the gem museum.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'Two nights in the hill capital with a private elephant visit on the way, a private dance show and a private full day of the city.',
      image: img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Bentota',
    dayLabel: 'Day 3',
    images: [
      img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg'),
      img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg'),
      img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
      img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg')
    ],
    dayImages: {
      3: [
        img('3drp3xw253kg7pt48iauc5vh1yjz_Bentota%202.jpg'),
        img('mgac8tj98vp4u6p3vv4acwiwsebh_22859730893_159b5dee46_b.jpg'),
        img('c0x2bsv51zmx3tz3qiitrit9r8w8_Bentota%20Islang.JPG'),
        img('2kyg08hfs2xevolr6axgk0fpxg9d_download.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Down to Bentota`,
      'Breakfast and a transfer from the hills to the coast',
      'A boat safari on the Madu Ganga and the Kosgoda turtle hatchery',
      'Check in at your four star beach resort',
      'Sunset on the sand'
    ],
    accommodation: {
      name: 'Earl\'s Reef, Bentota',
      description: '1 night · Breakfast and dinner · Deluxe room · 4★ · Four star beachfront resort on the Bentota strand',
      images: [
        img('yhln84gtehigen6j45kts3lb29vx_247133579.jpg'),
        img('utmb42sfe4y0bulaouqiebyqrt6q_247157410.jpg'),
        img('sa0nobl8g6nehgdwf01u26206t9l_247165582.jpg'),
        img('uhtqb8yl3cwbsl1jpqja5lyfpfau_247165573.jpg'),
        img('76vhx7yr484n7nbqgfpcw52gs0nj_340492086.jpg'),
        img('s5d6v6k6qjs82h8p6qayg1wvt636_247165595.jpg'),
        img('77eveaq6vbpzo36heynuok4cum3m_247298373.jpg'),
        img('40zyq7sbywtdk8rtdawsa7a7twvo_247160520.jpg'),
        img('tzvgoo5evadldwggfzf1nx4tmlna_340497011.jpg'),
        img('q2ozbemm7185r14a92pulxrf1o2x_247160678.jpg')
      ]
    },
    activities: [
      {
        name: 'Private full day Bentota sightseeing',
        day: 3,
        optional: false,
        image: img('3drp3xw253kg7pt48iauc5vh1yjz_Bentota%202.jpg'),
        description: 'The Madu Ganga boat ride, the Kosgoda turtle hatchery, the Galapatha temple and an afternoon on Bentota beach.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'Down to a four star beachfront resort with a private full day of the Madu Ganga, the turtles and the beach.',
      image: img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Colombo',
    dayLabel: 'Day 4 to 5',
    images: [
      img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
      img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
      img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
      img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg')
    ],
    dayImages: {
      4: [
        img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        img('docw1hphy3zg23x9fyr5x9b9j995_1580298371_Galle_face_green.jpg'),
        img('eroknzeg63hrum6xty5qww1sf154_1580210450_shutterstock_327595163.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
      ],
      5: [
        img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
        img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
        img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
        img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Colombo city tour`,
      'Breakfast and a transfer down the coast to Colombo',
      'Galle Face Green and the Gangaramaya temple complex',
      'The Fort district, the Lotus Tower and Pettah market',
      'Dinner and your last night at the hotel',
      `${DAY_MARK}Day 5 · Departure from Colombo`,
      'Breakfast at the hotel and check out',
      'Private transfer to Bandaranaike International for your flight home'
    ],
    accommodation: {
      name: 'Berjaya Hotel, Colombo',
      description: '1 night · Breakfast and dinner · Deluxe room · 4★ · Four star hotel on the Mount Lavinia beachfront south of the city',
      images: [
        img('smepxmkb2wtp32csgcfgzypsp57q_shutterstock_569962048.jpg'),
        img('ob28aqyvv6y1jpfp1ub0pcwm6ucx_shutterstock_1037797372.jpg'),
        img('8vdz9exe6hfp4nmjaqx99rvacgvv_shutterstock_1116598163.jpg'),
        img('buq1wfalisz69txw7jpt46x37dmw_shutterstock_1169999389.jpg'),
        img('5wehn3j65dzcgpfvmo9uk6u6wdci_shutterstock_508047703.jpg'),
        img('2thjv9qvlmeghubj7hqku2d3l980_shutterstock_1043128876.jpg')
      ]
    },
    activities: [
      {
        name: 'Private full day Colombo sightseeing',
        day: 4,
        optional: false,
        image: img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and the floating market at Pettah.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A last night in the capital with a private full day of its temples, colonial quarter and markets.',
      image: img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg')
    }
  }
];

const detail = {
  slug: 'sri-lanka-retreat-super-deluxe-kandy-and-bentota-in-five-days',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Sri Lanka Retreat Super Deluxe: Kandy and Bentota in Five Days',
  alt: 'A beach cabana at a four star resort in Bentota',
  days: '5 days / 4 nights',
  stations: '3 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Luxury',
  tags: ['Luxury', 'Short trips', 'Beach'],
  price: 25555,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kandy', 'Bentota', 'Colombo'],
  stats: { days: 5, cities: 3, hotels: 3, activities: 5, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['6 transfers', 'Transport'],
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
  short: 'Five days in upgraded hotels: two nights in Kandy with the elephants, the dance show and a full day of the city, a night at a four star beach resort in Bentota with the Madu Ganga and the turtles, and a last night in Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights in deluxe and four star hotels with breakfast and lunch or dinner daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; private Pinnawala visit; private Kandy lake drive and dance show; private full day Kandy sightseeing; private full day Bentota sightseeing; private full day Colombo sightseeing.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Kandy (D)', text: 'Arrival at Bandaranaike International and private transfer inland\nA stop at the Pinnawala elephant sanctuary on the way\nCheck in at your Kandy hotel in the afternoon\nAn evening lake drive and the Kandyan dance performance', hotel: 'Fairway Colombo', highlights: ['Arrival at Bandaranaike International and private transfer inland', 'A stop at the Pinnawala elephant sanctuary on the way', 'Check in at your Kandy hotel in the afternoon'] },
    { title: 'Day 2: A full day in Kandy (B, D)', text: 'Breakfast, then the Temple of the Sacred Tooth Relic\nThe Peradeniya Royal Botanical Gardens\nThe hilltop Buddha at Bahiravokanda and the gem museum\nDinner at the hotel', hotel: 'Fairway Colombo', highlights: ['Breakfast, then the Temple of the Sacred Tooth Relic', 'The Peradeniya Royal Botanical Gardens', 'The hilltop Buddha at Bahiravokanda and the gem museum'] },
    { title: 'Day 3: Down to Bentota (B, D)', text: 'Breakfast and a transfer from the hills to the coast\nA boat safari on the Madu Ganga and the Kosgoda turtle hatchery\nCheck in at your four star beach resort\nSunset on the sand', hotel: 'Earl\'s Reef, Bentota', highlights: ['Breakfast and a transfer from the hills to the coast', 'A boat safari on the Madu Ganga and the Kosgoda turtle hatchery', 'Check in at your four star beach resort'] },
    { title: 'Day 4: Colombo city tour (B, D)', text: 'Breakfast and a transfer down the coast to Colombo\nGalle Face Green and the Gangaramaya temple complex\nThe Fort district, the Lotus Tower and Pettah market\nDinner and your last night at the hotel', hotel: 'Berjaya Hotel Colombo', highlights: ['Breakfast and a transfer down the coast to Colombo', 'Galle Face Green and the Gangaramaya temple complex', 'The Fort district, the Lotus Tower and Pettah market'] },
    { title: 'Day 5: Departure from Colombo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const sriLankaRetreatSuperDeluxeKandyBentotaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const sriLankaRetreatSuperDeluxeKandyBentotaProduct = {
  slug: detail.slug,
  places: ['Kandy', 'Bentota', 'Colombo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 5,
  transfers: 6,
  meals: 8,
  price: detail.price,
  images: cardImages
};
