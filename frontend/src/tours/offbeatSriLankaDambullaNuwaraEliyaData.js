// Offbeat Sri Lanka: Dambulla, Sigiriya and Nuwara Eliya. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('n5rngnkvq515s623xth9tr9t0g6e_shutterstock_796990585.jpg'),
  img('ehxgq7xsvpq2xfzcpi1774ppfjgw_shutterstock_1019478988.jpg'),
  img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
  img('d4xpyxqebu0jmna6b117qwimh034_Pettah%20Floating%20Market%20Colombo%201.jpg'),
  img('oewqep60satxoqa8xc1sg0uolit2_shutterstock_159551120.jpg'),
  img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
  img('r0mo5wi8zr1oc40lyse1a4zzr8hz_Galle%20Face%20Green%20Colombo%201.jpg'),
  img('z7kb0dcgq1zn0kla57iv7ayde16p_shutterstock_326368451%20(1).jpg'),
  img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
  img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('n5rngnkvq515s623xth9tr9t0g6e_shutterstock_796990585.jpg'),
  img('ehxgq7xsvpq2xfzcpi1774ppfjgw_shutterstock_1019478988.jpg'),
  img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
  img('d4xpyxqebu0jmna6b117qwimh034_Pettah%20Floating%20Market%20Colombo%201.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Dambulla',
    dayLabel: 'Day 1 to 2',
    images: [
      img('n5rngnkvq515s623xth9tr9t0g6e_shutterstock_796990585.jpg'),
      img('m4a1kjjciwvqlgyu93448xp3e3vi_shutterstock_723099481.jpg'),
      img('0htpk9u4mvmvtsq5lfz3dvf5340y_shutterstock_1453908407%20(1).jpg'),
      img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg')
    ],
    dayImages: {
      1: [
        img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('n5rngnkvq515s623xth9tr9t0g6e_shutterstock_796990585.jpg'),
        img('m4a1kjjciwvqlgyu93448xp3e3vi_shutterstock_723099481.jpg')
      ],
      2: [
        img('zddej06lbz5sx2o1d0hx0bg0bfhd_1582551005_Colombo_1.png'),
        img('b14m75op1m07swbrru2fqbc31lfh_7006860454_cec45734cb_o.jpg'),
        img('n5rngnkvq515s623xth9tr9t0g6e_shutterstock_796990585.jpg'),
        img('m4a1kjjciwvqlgyu93448xp3e3vi_shutterstock_723099481.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Dambulla`,
      'Arrival at Bandaranaike International and private transfer inland',
      'A stop at the Pinnawala elephant sanctuary on the way',
      'Check in at your hotel outside Dambulla',
      'Optional: the Dambulla cave temples at golden hour',
      `${DAY_MARK}Day 2 · A day at Sigiriya`,
      'Breakfast, then the short road to the rock fortress',
      'The water gardens and the climb past the mirror wall',
      'Frescoes of the cloud maidens and the lion paw terrace',
      'Summit ruins and views across the dry zone jungle',
      'Optional: Pidurangala rock for sunset'
    ],
    accommodation: {
      name: 'Raintree, Dambulla',
      description: '2 nights · Breakfast and dinner · Deluxe room · 3★ · Deluxe class hotel among the paddy fields outside Dambulla',
      images: [
        img('7z02umvgtzlwqqptpex9xegq3hut_Raintree1.jpg'),
        img('5bm8n4eqmja8xjhlxrauamziykbz_Raintree9.jpg'),
        img('035v852uo70d42ojrvte4gseswfr_Raintree5.jpg'),
        img('b0ildfe7xhgklpvkspgij439n1u5_Raintree3.jpg'),
        img('srlpkm70co5dh251wpu8lb46ruuh_Raintree%20Dambulla2.jpg'),
        img('ocukcsfcjh8gygkirdvteqg2132c_Raintree4.jpg'),
        img('qd6hbuu3tz1icpm0d3jyaih2xqh6_Raintree7.jpg'),
        img('7mjasr1usu5sq071oakjgxmo5kb2_Raintree6.jpg')
      ]
    },
    activities: [
      {
        name: 'Pinnawala Elephant Orphanage',
        day: 1,
        optional: false,
        image: img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        description: 'A stop on the way up from the airport to watch the resident herd bathe in the Maha Oya river and feed at the sanctuary.'
      },
      {
        name: 'Excursion to Sigiriya rock fortress',
        day: 2,
        optional: false,
        image: img('zddej06lbz5sx2o1d0hx0bg0bfhd_1582551005_Colombo_1.png'),
        description: 'A full day out to the fifth century rock citadel: the water gardens, the mirror wall, the frescoes and the summit palace ruins.'
      }
    ],
    program: {
      name: 'Dambulla',
      description: 'Two nights in the Cultural Triangle with the elephants on the way in and a full day at the rock fortress of Sigiriya.',
      image: img('n5rngnkvq515s623xth9tr9t0g6e_shutterstock_796990585.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Nuwara Eliya',
    dayLabel: 'Day 3 to 4',
    images: [
      img('8pngc3kvspg8528bwbrbu6t8b5gz_shutterstock_1423148210.jpg'),
      img('ehxgq7xsvpq2xfzcpi1774ppfjgw_shutterstock_1019478988.jpg'),
      img('z7kb0dcgq1zn0kla57iv7ayde16p_shutterstock_326368451%20(1).jpg'),
      img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg')
    ],
    dayImages: {
      3: [
        img('83nbzteqgxputqqy959240s41mz1_shutterstock_771297769.jpg'),
        img('lwpeikpgx4vdu6dk38px2r3ugcv3_16592880909_c7e7d0a676_o.jpg'),
        img('273z0ew2ziyinmy62ccpeay5ggwo_nepal-royal-botanical-gardens.jpg'),
        img('q5mg4s7atcnsscxcoxgfnysmzyiy_download.jpg')
      ],
      4: [
        img('7ztsyywjmihi32gluk6v8argfrlo_shutterstock_1116598154.jpg'),
        img('6upo74208pk22ejwy6dpssckyjdn_Depositphotos_158390642_s-2019.png'),
        img('c5d5akjf4ek0zsuldrgeqqwpvx4h_5821411770_f564d81e3a_b.jpg'),
        img('6pvkpwhgaavzl1u5wodhr0op4yvm_e9.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Kandy on the way to the hills`,
      'Breakfast and a transfer south to Kandy',
      'The Temple of the Sacred Tooth Relic and Peradeniya gardens',
      'The hilltop Buddha at Bahiravokanda',
      'On up through the tea estates to Nuwara Eliya',
      `${DAY_MARK}Day 4 · Nuwara Eliya sightseeing`,
      'Breakfast, then Ramboda Falls and a tea factory visit',
      'Gregory Lake, Victoria Park and the Hakgala gardens',
      'The Seetha Amman temple of the Ramayana trail',
      'Dinner at the hotel among the tea gardens'
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
        name: 'Half day Kandy sightseeing',
        day: 3,
        optional: false,
        image: img('83nbzteqgxputqqy959240s41mz1_shutterstock_771297769.jpg'),
        description: 'The Temple of the Sacred Tooth Relic, the giant Bahiravokanda Buddha above the town and the Royal Botanical Gardens at Peradeniya.'
      },
      {
        name: 'Full day Nuwara Eliya sightseeing',
        day: 4,
        optional: false,
        image: img('7ztsyywjmihi32gluk6v8argfrlo_shutterstock_1116598154.jpg'),
        description: 'Ramboda Falls, a working tea estate and factory, Gregory Lake, Victoria Park, Hakgala gardens and the Seetha Amman temple.'
      }
    ],
    program: {
      name: 'Nuwara Eliya',
      description: 'Two nights in the tea country with Kandy on the way up and a full day of waterfalls, gardens and the lake.',
      image: img('8pngc3kvspg8528bwbrbu6t8b5gz_shutterstock_1423148210.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Colombo',
    dayLabel: 'Day 5 to 6',
    images: [
      img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
      img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
      img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
      img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg')
    ],
    dayImages: {
      5: [
        img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        img('docw1hphy3zg23x9fyr5x9b9j995_1580298371_Galle_face_green.jpg'),
        img('eroknzeg63hrum6xty5qww1sf154_1580210450_shutterstock_327595163.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
      ],
      6: [
        img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
        img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
        img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
        img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Colombo city tour`,
      'Breakfast and a transfer down the coast to Colombo',
      'Galle Face Green and the Gangaramaya temple complex',
      'The Fort district, the Lotus Tower and Pettah market',
      'Dinner and your last night at the hotel',
      `${DAY_MARK}Day 6 · Departure from Colombo`,
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
        day: 5,
        optional: false,
        image: img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and Pettah market, with entrance tickets payable locally.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A final night in the Fort district with a private full day of the capital.',
      image: img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg')
    }
  }
];

const detail = {
  slug: 'offbeat-sri-lanka-dambulla-sigiriya-and-nuwara-eliya',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Offbeat Sri Lanka: Dambulla, Sigiriya and Nuwara Eliya',
  alt: 'The golden Buddha and cave temples of Dambulla',
  days: '6 days / 5 nights',
  stations: '3 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Culture',
  tags: ['Culture', 'Nature', 'Short trips'],
  price: 33250,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Dambulla', 'Nuwara Eliya', 'Colombo'],
  stats: { days: 6, cities: 3, hotels: 3, activities: 5, transfers: 7 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['7 transfers', 'Transport'],
    ['10 meals', 'Meals'],
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
  short: 'Six days off the usual loop: two nights at Dambulla with a full day at Sigiriya, two in the tea country at Nuwara Eliya with Kandy on the way, and a last night in Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights in deluxe and standard class hotels with breakfast and dinner daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; the Pinnawala elephant sanctuary visit; a full day excursion to Sigiriya; half day Kandy sightseeing; full day Nuwara Eliya sightseeing; a private full day Colombo sightseeing tour (entrance tickets payable locally).',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Dambulla (D)', text: 'Arrival at Bandaranaike International and private transfer inland\nA stop at the Pinnawala elephant sanctuary on the way\nCheck in at your hotel outside Dambulla\nOptional: the Dambulla cave temples at golden hour', hotel: 'Raintree Dambulla', highlights: ['Arrival at Bandaranaike International and private transfer inland', 'A stop at the Pinnawala elephant sanctuary on the way', 'Check in at your hotel outside Dambulla'] },
    { title: 'Day 2: A day at Sigiriya (B, D)', text: 'Breakfast, then the short road to the rock fortress\nThe water gardens and the climb past the mirror wall\nFrescoes of the cloud maidens and the lion paw terrace\nSummit ruins and views across the dry zone jungle\nOptional: Pidurangala rock for sunset', hotel: 'Raintree Dambulla', highlights: ['Breakfast, then the short road to the rock fortress', 'The water gardens and the climb past the mirror wall', 'Frescoes of the cloud maidens and the lion paw terrace'] },
    { title: 'Day 3: Kandy on the way to the hills (B, D)', text: 'Breakfast and a transfer south to Kandy\nThe Temple of the Sacred Tooth Relic and Peradeniya gardens\nThe hilltop Buddha at Bahiravokanda\nOn up through the tea estates to Nuwara Eliya', hotel: 'Tea Mount Forest Hotel, Nuwara Eliya', highlights: ['Breakfast and a transfer south to Kandy', 'The Temple of the Sacred Tooth Relic and Peradeniya gardens', 'The hilltop Buddha at Bahiravokanda'] },
    { title: 'Day 4: Nuwara Eliya sightseeing (B, D)', text: 'Breakfast, then Ramboda Falls and a tea factory visit\nGregory Lake, Victoria Park and the Hakgala gardens\nThe Seetha Amman temple of the Ramayana trail\nDinner at the hotel among the tea gardens', hotel: 'Tea Mount Forest Hotel, Nuwara Eliya', highlights: ['Breakfast, then Ramboda Falls and a tea factory visit', 'Gregory Lake, Victoria Park and the Hakgala gardens', 'The Seetha Amman temple of the Ramayana trail'] },
    { title: 'Day 5: Colombo city tour (B, D)', text: 'Breakfast and a transfer down the coast to Colombo\nGalle Face Green and the Gangaramaya temple complex\nThe Fort district, the Lotus Tower and Pettah market\nDinner and your last night at the hotel', hotel: 'Grand Oriental Hotel Colombo', highlights: ['Breakfast and a transfer down the coast to Colombo', 'Galle Face Green and the Gangaramaya temple complex', 'The Fort district, the Lotus Tower and Pettah market'] },
    { title: 'Day 6: Departure from Colombo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const offbeatSriLankaDambullaNuwaraEliyaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const offbeatSriLankaDambullaNuwaraEliyaProduct = {
  slug: detail.slug,
  places: ['Dambulla', 'Nuwara Eliya', 'Colombo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 5,
  transfers: 7,
  meals: 10,
  price: detail.price,
  images: cardImages
};
