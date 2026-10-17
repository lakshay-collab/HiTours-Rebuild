// Sri Lanka Short Break: Kandy and Colombo in Four Days. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
  img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
  img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
  img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
  img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg'),
  img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
  img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
  img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
  img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg'),
  img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
  img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
  img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
  img('83nbzteqgxputqqy959240s41mz1_shutterstock_771297769.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kandy',
    dayLabel: 'Day 1',
    images: [
      img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
      img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg'),
      img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
      img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg')
    ],
    dayImages: {
      1: [
        img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('83nbzteqgxputqqy959240s41mz1_shutterstock_771297769.jpg'),
        img('lwpeikpgx4vdu6dk38px2r3ugcv3_16592880909_c7e7d0a676_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Kandy`,
      'Arrival at Bandaranaike International and private transfer inland',
      'A private stop at the Pinnawala elephant sanctuary',
      'The Temple of the Sacred Tooth Relic and the Peradeniya gardens',
      'Check in by the river for the night'
    ],
    accommodation: {
      name: 'Ganga Addara Hotel, Kandy',
      description: '1 night · Breakfast · Standard room · 3★ · Standard class hotel on the Mahaweli river outside Kandy',
      images: [
        img('byk88iskiaw399658vr4m5tpd0iw_hotel-gangaaddara.jpg'),
        img('wygfccylue2tmmar15tfnzo0mx2i_459189868.jpg'),
        img('sptv66d4qf4he7hxecp13m3fq854_459189870.jpg'),
        img('p06mbkn1p9efprmrayqhdrmfukb5_hotel-gangaaddara%20(2).jpg'),
        img('rizbgl6yd2wpgnbuxl3cicjuyuzx_hotel-gangaaddara%20(4).jpg'),
        img('3c1r6jlgkhwyf1yicqqusg7m0gca_459189675.jpg'),
        img('28kklic995fzx1cvp9jjgwu0u8k5_524776188.jpg'),
        img('tm23j1bgv3j5r6tu2jzplcap8xqa_hotel-gangaaddara%20(3).jpg'),
        img('7eixa8pa818sb8fw2tya80c16ryh_459189857.jpg'),
        img('gx8vnkyw9zd21uibhbcf0huqksgf_503035439.jpg'),
        img('a1c8f2f7jx1z1uii1lx8owa47af3_hotel-gangaaddara%20(1).jpg')
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
        name: 'Private half day Kandy sightseeing',
        day: 1,
        optional: false,
        image: img('83nbzteqgxputqqy959240s41mz1_shutterstock_771297769.jpg'),
        description: 'The Temple of the Sacred Tooth Relic, the giant Bahiravokanda Buddha above the town and the Royal Botanical Gardens at Peradeniya.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'One night by the river at Kandy with a private elephant visit on the way and a private half day of the city.',
      image: img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Colombo',
    dayLabel: 'Day 2 to 4',
    images: [
      img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
      img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
      img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
      img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg')
    ],
    dayImages: {
      2: [
        img('vckopqkosvqkcs3oigv93ubbeh80_1580470871_beira_lake.jpg'),
        img('3me5273fnwwgz3pcjbxxunfyj5di_miss.jpg'),
        img('um8mzu64d4hrt5lgx9es0e2wop7w_44552046890_f2e90371bd_o.jpg'),
        img('q16lt8r92ltfty0q5jna332cg2e7_1377069_561333343921567_1041159370_n.jpg')
      ],
      3: [
        img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        img('docw1hphy3zg23x9fyr5x9b9j995_1580298371_Galle_face_green.jpg'),
        img('eroknzeg63hrum6xty5qww1sf154_1580210450_shutterstock_327595163.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
      ],
      4: [
        img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
        img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
        img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
        img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Down to Colombo`,
      'Breakfast and a transfer back down to the capital',
      'Check in on the Mount Lavinia beachfront',
      'The afternoon at leisure by the pool or the sea',
      'Optional: sunset drinks on Galle Face Green',
      `${DAY_MARK}Day 3 · Colombo city tour`,
      'Breakfast, then Galle Face Green and the Gangaramaya temple',
      'The Fort district, the Lotus Tower and Pettah market',
      'The National Museum and Independence Square',
      'Your last night in the capital',
      `${DAY_MARK}Day 4 · Departure from Colombo`,
      'Breakfast at the hotel and check out',
      'Private transfer to Bandaranaike International for your flight home'
    ],
    accommodation: {
      name: 'Berjaya Hotel, Colombo',
      description: '2 nights · Breakfast · Deluxe room · 4★ · Four star hotel on the Mount Lavinia beachfront south of the city',
      images: [
        img('gxczjwl8s0vw8oaqbi6e86zx6sv1_177389047.jpg'),
        img('sqbl6yo4j7i38u9wbxstfdxesuwl_1569732955750.png'),
        img('98lht7n1bj9lb5ktjzbqh4y1d8fn_255638518.jpg'),
        img('55h2udwmk3tw4gy6fg815hrbnf58_xU3rf7jz_cc07758214c4eeaef3db9ee07c58786e.png'),
        img('km68iemu4l5g1i3abmuuit3v3d02_213583907.jpg'),
        img('2i49d0id4ke4d28funvcgf6lsej9_d6bf723a_z.webp'),
        img('otjgew7y0rvlgs0uvtk39vzslnf1_213583922.jpg'),
        img('opkz5fpvdb7exjqnop66g7yvvl20_410265362.jpg'),
        img('cspg96xiu1knj136cjs8kotb9qw9_18963860.jpg'),
        img('9j7b961nrv0ej4f359xa7ldzka7c_46715cf6822211ea8a5e0242ac110002.png'),
        img('7x13egkh22l1vmfs3tsw10t4lvjj_caf66d78809711e99e5a0242ac110005.png')
      ]
    },
    activities: [
      {
        name: 'Private full day Colombo sightseeing',
        day: 3,
        optional: false,
        image: img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and the floating market at Pettah.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'Two nights on the Mount Lavinia beachfront with a free afternoon on arrival and a private full day of the capital.',
      image: img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg')
    }
  }
];

const detail = {
  slug: 'sri-lanka-short-break-kandy-and-colombo-in-four-days',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Sri Lanka Short Break: Kandy and Colombo in Four Days',
  alt: 'The Gangaramaya temple on Beira Lake in Colombo',
  days: '4 days / 3 nights',
  stations: '2 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Short trips',
  tags: ['Short trips', 'Culture', 'Budget'],
  price: 26600,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kandy', 'Colombo'],
  stats: { days: 4, cities: 2, hotels: 2, activities: 3, transfers: 4 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['4 transfers', 'Transport'],
    ['3 meals', 'Meals'],
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
  short: 'Four days for a first taste of the island: a night in Kandy with the elephants and the Tooth Relic temple, then two nights by the sea in Colombo with a free afternoon and a full day of the capital. Easy to pair with direct flights from Hyderabad, Chennai or Bengaluru.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights in standard and deluxe class hotels with breakfast daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; a private Pinnawala elephant sanctuary visit; a private half day Kandy sightseeing tour; a private full day Colombo sightseeing tour. Entrance tickets are payable locally.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches and dinners; entrance tickets; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Kandy (None)', text: 'Arrival at Bandaranaike International and private transfer inland\nA private stop at the Pinnawala elephant sanctuary\nThe Temple of the Sacred Tooth Relic and the Peradeniya gardens\nCheck in by the river for the night', hotel: 'Ganga Addara Hotel, Kandy', highlights: ['Arrival at Bandaranaike International and private transfer inland', 'A private stop at the Pinnawala elephant sanctuary', 'The Temple of the Sacred Tooth Relic and the Peradeniya gardens'] },
    { title: 'Day 2: Down to Colombo (B)', text: 'Breakfast and a transfer back down to the capital\nCheck in on the Mount Lavinia beachfront\nThe afternoon at leisure by the pool or the sea\nOptional: sunset drinks on Galle Face Green', hotel: 'Berjaya Hotel Colombo', highlights: ['Breakfast and a transfer back down to the capital', 'Check in on the Mount Lavinia beachfront', 'The afternoon at leisure by the pool or the sea'] },
    { title: 'Day 3: Colombo city tour (B)', text: 'Breakfast, then Galle Face Green and the Gangaramaya temple\nThe Fort district, the Lotus Tower and Pettah market\nThe National Museum and Independence Square\nYour last night in the capital', hotel: 'Berjaya Hotel Colombo', highlights: ['Breakfast, then Galle Face Green and the Gangaramaya temple', 'The Fort district, the Lotus Tower and Pettah market', 'The National Museum and Independence Square'] },
    { title: 'Day 4: Departure from Colombo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; lunches and dinners; entrance tickets; travel insurance; optional excursions; tips and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const sriLankaShortBreakKandyColomboBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const sriLankaShortBreakKandyColomboProduct = {
  slug: detail.slug,
  places: ['Kandy', 'Colombo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 4,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 3,
  transfers: 4,
  meals: 3,
  price: detail.price,
  images: cardImages
};
