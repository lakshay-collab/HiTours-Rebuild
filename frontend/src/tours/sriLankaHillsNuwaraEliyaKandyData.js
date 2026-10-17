// Sri Lanka Hill Country Break: Nuwara Eliya and Kandy. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg'),
  img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
  img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
  img('8pngc3kvspg8528bwbrbu6t8b5gz_shutterstock_1423148210.jpg'),
  img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
  img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
  img('oewqep60satxoqa8xc1sg0uolit2_shutterstock_159551120.jpg'),
  img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
  img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
  img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg'),
  img('oewqep60satxoqa8xc1sg0uolit2_shutterstock_159551120.jpg'),
  img('jkotcyj517gizl9hgltja6dopamd_51909293813_b23c8272e2_o.jpg'),
  img('o008kpk2h2m0zxggk21oabm3mb1f_1482737990_St-Clair_E2_80_99s-Falls-sri-lanka-3.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Nuwara Eliya',
    dayLabel: 'Day 1 to 2',
    images: [
      img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg'),
      img('oewqep60satxoqa8xc1sg0uolit2_shutterstock_159551120.jpg'),
      img('nblwv1u3cze5qug1glqs5ltuux5m_shutterstock_776788237%20(1).jpg'),
      img('1kb7guo5ceqcpw2m5ghs7db8hnrr_shutterstock_229257724.jpg')
    ],
    dayImages: {
      1: [
        img('jkotcyj517gizl9hgltja6dopamd_51909293813_b23c8272e2_o.jpg'),
        img('o008kpk2h2m0zxggk21oabm3mb1f_1482737990_St-Clair_E2_80_99s-Falls-sri-lanka-3.jpg'),
        img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg'),
        img('oewqep60satxoqa8xc1sg0uolit2_shutterstock_159551120.jpg')
      ],
      2: [
        img('7ztsyywjmihi32gluk6v8argfrlo_shutterstock_1116598154.jpg'),
        img('6upo74208pk22ejwy6dpssckyjdn_Depositphotos_158390642_s-2019.png'),
        img('c5d5akjf4ek0zsuldrgeqqwpvx4h_5821411770_f564d81e3a_b.jpg'),
        img('6pvkpwhgaavzl1u5wodhr0op4yvm_e9.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and up to Nuwara Eliya`,
      'Arrival at Bandaranaike International and private transfer into the hills',
      'Tea estates and waterfalls from the car window on the climb',
      'Check in among the tea gardens',
      'An evening walk by Gregory Lake',
      `${DAY_MARK}Day 2 · Nuwara Eliya sightseeing`,
      'Breakfast, then Ramboda Falls and a tea factory visit',
      'Gregory Lake, Victoria Park and the Hakgala gardens',
      'The Seetha Amman temple of the Ramayana trail',
      'Dinner at the hotel'
    ],
    accommodation: {
      name: 'Tea Mount Forest Hotel, Nuwara Eliya',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Standard class hotel set among the tea gardens',
      images: [
        img('r8umm2ohbzp0g2depyrftqz3zv9n_345249425.jpg'),
        img('5h2oh5uihyx0h95mq9g3xrzyjx2e_296916636.jpg'),
        img('i2efznbouhocm1guxesq1lprw5jo_351156861.jpg'),
        img('0l2stmrr7w23r50fg2kekzxv03bp_351156062.jpg'),
        img('hlv2hilera95ecwo7o65e61we64b_296908061.jpg'),
        img('fwggkm9641r5bta0ms0b3311zisl_327152626.jpg'),
        img('1h2j1g2axyhzqkmyfih3yhxgvvku_296915358.jpg'),
        img('8j55mh12iokkkgdasez1a23gqw9s_385650296.jpg'),
        img('b8k8lma58v8p2m9uw2gh618yia5y_296915600.jpg')
      ]
    },
    activities: [
      {
        name: 'Private full day Nuwara Eliya sightseeing',
        day: 2,
        optional: false,
        image: img('7ztsyywjmihi32gluk6v8argfrlo_shutterstock_1116598154.jpg'),
        description: 'Ramboda Falls, a working tea estate and factory, Gregory Lake, Victoria Park, Hakgala gardens and the Seetha Amman temple.'
      }
    ],
    program: {
      name: 'Nuwara Eliya',
      description: 'Straight up into the tea country for two nights, with a free first evening and a private full day of the waterfalls, gardens and lake.',
      image: img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kandy',
    dayLabel: 'Day 3',
    images: [
      img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
      img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
      img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
      img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg')
    ],
    dayImages: {
      3: [
        img('83nbzteqgxputqqy959240s41mz1_shutterstock_771297769.jpg'),
        img('lwpeikpgx4vdu6dk38px2r3ugcv3_16592880909_c7e7d0a676_o.jpg'),
        img('273z0ew2ziyinmy62ccpeay5ggwo_nepal-royal-botanical-gardens.jpg'),
        img('q5mg4s7atcnsscxcoxgfnysmzyiy_download.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Down to Kandy`,
      'Breakfast and a transfer through the estates to Kandy',
      'The Temple of the Sacred Tooth Relic',
      'The Peradeniya gardens and the hilltop Buddha',
      'Optional: the Kandyan dance show in the evening'
    ],
    accommodation: {
      name: 'Hotel Devon, Kandy',
      description: '1 night · Breakfast and dinner · Deluxe room · 3★ · Deluxe class hotel in the hills above Kandy town',
      images: [
        img('berav8t51c7pwlial4nduc1pnvvg_41f90e0d_z.webp'),
        img('smkd8s8uniq3iaf6q3hytymzybql_o2sn5ZaB_aca407c859df4840886b04703b1e5e29.jpg'),
        img('366f0pf6eqxiswssz0axf2o6pq93_4Nqk69oN_2e7e2819542561b0aa814dbec048a4b2.jpg'),
        img('0ipswcafq0hpe3nprdtyawqcok8q_489225362.jpg'),
        img('cqidrd4ki7hs1avfdu0w2rzwfzzd_CDSd8Vzf_e9210a7990ebdd239670b5e91d71464f.jpg'),
        img('um8msjhpjps8jboul4g7zrit6mdo_65b08d6e_z.webp'),
        img('dwuvan7bjam36nudxz8eabgqgboh_35752d93_z.webp'),
        img('5ids7veibdit31ana3s5zljycp41_489225372.jpg'),
        img('38izydud4zxkcj3x0m1d3hrmor28_8c4a1e8f_z.webp'),
        img('1ts1qvmtl7aed3oczeju0zeao8y2_f0630004_z.webp'),
        img('npf93v6f3g0uqpa2ill4aizdgsgm_be4a8dc6_z.webp')
      ]
    },
    activities: [
      {
        name: 'Private half day Kandy sightseeing',
        day: 3,
        optional: false,
        image: img('83nbzteqgxputqqy959240s41mz1_shutterstock_771297769.jpg'),
        description: 'The Temple of the Sacred Tooth Relic, the giant Bahiravokanda Buddha above the town and the Royal Botanical Gardens at Peradeniya.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'Down through the estates to Kandy for a private half day of the Tooth Relic temple and the gardens.',
      image: img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Colombo',
    dayLabel: 'Day 4 to 5',
    images: [
      img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
      img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
      img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
      img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg')
    ],
    dayImages: {
      4: [
        img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        img('docw1hphy3zg23x9fyr5x9b9j995_1580298371_Galle_face_green.jpg'),
        img('eroknzeg63hrum6xty5qww1sf154_1580210450_shutterstock_327595163.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
      ],
      5: [
        img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
        img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
        img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
        img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg')
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
      name: 'Grand Oriental Hotel, Colombo',
      description: '1 night · Breakfast and dinner · Deluxe room · 3★ · Historic harbourside hotel in the Colombo Fort district',
      images: [
        img('qhra52o8pm5j2dxg0dddz2dgdn4k_SL_Colombo_asv2020-01_img24_Grand_Oriental.jpg'),
        img('v6043jvnmyxuouy1fjg5ss9qasui_download%20(24).jpg'),
        img('vkijbwmkkl74yp4i592osn9iy9cd_download%20(23).jpg'),
        img('920brbyql2kov77zc3dh3dcnihkv_download%20(27).jpg'),
        img('jizcry7blhm7jaecngc8675dg9kt_download%20(30).jpg'),
        img('uk9aaqce0205qb9zf6vbgshdp9qz_download%20(25).jpg'),
        img('r1lidvioqzw9vr60h8up6u72plr1_download%20(26).jpg'),
        img('7fn3nl2nbok5mffp87j1x5mnovdh_download%20(22).jpg'),
        img('530idd3wvjshtmdanakjvsbkfy5t_download%20(29).jpg'),
        img('5lk1gc0pz766kylnxp5vrn9sfnty_download%20(21).jpg'),
        img('er9zm0bsmegfx3zyozaxczi9wjqy_download%20(20).jpg'),
        img('lch09uqesczkrac8r5ahlmy8ugjc_download%20(28).jpg'),
        img('1xk2nkkbvrkhmhh8ocsgdyl96fed_download%20(19).jpg')
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
      description: 'A last night in the Fort district with a private full day of the capital.',
      image: img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg')
    }
  }
];

const detail = {
  slug: 'sri-lanka-hill-country-break-nuwara-eliya-and-kandy',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Sri Lanka Hill Country Break: Nuwara Eliya and Kandy',
  alt: 'Gregory Lake and the hills of Nuwara Eliya',
  days: '5 days / 4 nights',
  stations: '3 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Budget',
  tags: ['Budget', 'Nature', 'Short trips'],
  price: 33250,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Nuwara Eliya', 'Kandy', 'Colombo'],
  stats: { days: 5, cities: 3, hotels: 3, activities: 3, transfers: 5 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
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
    quote: 'Kandy, the hills and then the coast. Sri Lanka works best when you let the island cool you down before it warms you up again.',
    quoteMore: 'Carry a light sweater for Nuwara Eliya. It sits at nearly 1,900 metres and evenings are surprisingly chilly even in April.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five value packed days built around the hills: two nights in the tea country at Nuwara Eliya, a night in Kandy with the Tooth Relic temple, and a last night in Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights in standard and deluxe class hotels with breakfast and lunch or dinner daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; a private full day Nuwara Eliya sightseeing tour; a private half day Kandy sightseeing tour; a private full day Colombo sightseeing tour. Entrance tickets are payable locally.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and up to Nuwara Eliya (D)', text: 'Arrival at Bandaranaike International and private transfer into the hills\nTea estates and waterfalls from the car window on the climb\nCheck in among the tea gardens\nAn evening walk by Gregory Lake', hotel: 'Tea Mount Forest Hotel, Nuwara Eliya', highlights: ['Arrival at Bandaranaike International and private transfer into the hills', 'Tea estates and waterfalls from the car window on the climb', 'Check in among the tea gardens'] },
    { title: 'Day 2: Nuwara Eliya sightseeing (B, D)', text: 'Breakfast, then Ramboda Falls and a tea factory visit\nGregory Lake, Victoria Park and the Hakgala gardens\nThe Seetha Amman temple of the Ramayana trail\nDinner at the hotel', hotel: 'Tea Mount Forest Hotel, Nuwara Eliya', highlights: ['Breakfast, then Ramboda Falls and a tea factory visit', 'Gregory Lake, Victoria Park and the Hakgala gardens', 'The Seetha Amman temple of the Ramayana trail'] },
    { title: 'Day 3: Down to Kandy (B, D)', text: 'Breakfast and a transfer through the estates to Kandy\nThe Temple of the Sacred Tooth Relic\nThe Peradeniya gardens and the hilltop Buddha\nOptional: the Kandyan dance show in the evening', hotel: 'Hotel Devon Kandy', highlights: ['Breakfast and a transfer through the estates to Kandy', 'The Temple of the Sacred Tooth Relic', 'The Peradeniya gardens and the hilltop Buddha'] },
    { title: 'Day 4: Colombo city tour (B, D)', text: 'Breakfast and a transfer down the coast to Colombo\nGalle Face Green and the Gangaramaya temple complex\nThe Fort district, the Lotus Tower and Pettah market\nDinner and your last night at the hotel', hotel: 'Grand Oriental Hotel Colombo', highlights: ['Breakfast and a transfer down the coast to Colombo', 'Galle Face Green and the Gangaramaya temple complex', 'The Fort district, the Lotus Tower and Pettah market'] },
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

export const sriLankaHillsNuwaraEliyaKandyBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const sriLankaHillsNuwaraEliyaKandyProduct = {
  slug: detail.slug,
  places: ['Nuwara Eliya', 'Kandy', 'Colombo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 3,
  transfers: 5,
  meals: 8,
  price: detail.price,
  images: cardImages
};
