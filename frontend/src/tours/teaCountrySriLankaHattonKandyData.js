// Tea Country Sri Lanka: Hatton and Kandy Bungalow Stay. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
  img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
  img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
  img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg'),
  img('pky5fozezz5t0kbid7tdsdx1xj1z_1596709535_shutterstock_795763423.jpg'),
  img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
  img('qfdjgoio4cy0oywk5arz2i8at2u4_1596709538_shutterstock_604862372.jpg'),
  img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg'),
  img('k00k6wj6t1ucjll2vn1ej1ezfkw6_1596709540_shutterstock_1018977325.jpg'),
  img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
  img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
  img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg'),
  img('pky5fozezz5t0kbid7tdsdx1xj1z_1596709535_shutterstock_795763423.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hatton',
    dayLabel: 'Day 1 to 2',
    images: [
      img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
      img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
      img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
      img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg')
    ],
    dayImages: {
      1: [
        img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
        img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
        img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
        img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg')
      ],
      2: [
        img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
        img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
        img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
        img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and the waterfalls of Hatton`,
      'Arrival at Bandaranaike International and private transfer into the hills',
      'Devon Falls and St Clair Falls from the estate road',
      'A trek down to the pools at the base of the falls',
      'A tea factory tour and tasting before check in',
      `${DAY_MARK}Day 2 · Tea hills and the spice garden`,
      'Breakfast on the bungalow verandah',
      'A morning among the tea terraces around Hatton',
      'The spice garden and its cinnamon and pepper vines',
      'An evening at the bungalow with the mist coming in'
    ],
    accommodation: {
      name: 'Tea Hills Bungalow, Hatton',
      description: '2 nights · Breakfast · Bungalow room · 3★ · Planters bungalow among the tea estates above Hatton',
      images: [
        img('pky5fozezz5t0kbid7tdsdx1xj1z_1596709535_shutterstock_795763423.jpg'),
        img('ksx55qncbc8olfcj92qv8yqjux8e_1596709536_shutterstock_593956430.jpg'),
        img('mbpp3u4rz85g1j488i07nxm7j2zg_1596709537_shutterstock_604862486.jpg'),
        img('qfdjgoio4cy0oywk5arz2i8at2u4_1596709538_shutterstock_604862372.jpg'),
        img('ohhs31mwk1j1zcv2vg5d98ebk3av_1596709539_shutterstock_604862354.jpg'),
        img('hf6hyqipbestg81dme6mwlwibq0n_1596709539_shutterstock_521082604.jpg')
      ]
    },
    activities: [
      {
        name: 'Devon and St Clair waterfalls',
        day: 1,
        optional: false,
        image: img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
        description: 'The twin falls of the Hatton valley seen from the road, with a short trek down to the pools at the base.'
      },
      {
        name: 'Tea factory visit and tasting',
        day: 1,
        optional: false,
        image: img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
        description: 'A tour of a working factory from withering to rolling and firing, finishing with a tasting of the grades.'
      },
      {
        name: 'Spice garden visit',
        day: 2,
        optional: false,
        image: img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
        description: 'A walk through a hillside spice garden to see cinnamon, pepper, cardamom and vanilla growing.'
      }
    ],
    program: {
      name: 'Hatton',
      description: 'Two nights in a planters bungalow with waterfalls, a trek and a working tea factory on the first day and the spice garden on the second.',
      image: img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kandy',
    dayLabel: 'Day 3 to 5',
    images: [
      img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
      img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
      img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
      img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg')
    ],
    dayImages: {
      3: [
        img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
        img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
        img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
        img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg')
      ],
      4: [
        img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
        img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
        img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
        img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg')
      ],
      5: [
        img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
        img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
        img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
        img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Through the plantations to Kandy`,
      'Breakfast and check out of the bungalow',
      'A scenic transfer through the estates to Kandy',
      'Check in at your hillside bungalow above the town',
      'Optional: the Temple of the Sacred Tooth Relic at evening puja',
      `${DAY_MARK}Day 4 · A free day in Kandy`,
      'Breakfast, then the whole day yours in the city',
      'The lake, the bazaars and the craft shops',
      'Optional: the Peradeniya Royal Botanical Gardens',
      'Optional: a Kandyan dance show in the evening',
      `${DAY_MARK}Day 5 · Departure via the hills`,
      'Breakfast and check out',
      'Optional: an early start for the Adams Peak pilgrim path',
      'Private transfer to Bandaranaike International for your flight home'
    ],
    accommodation: {
      name: 'Kandy Hills Bungalow, Kandy',
      description: '2 nights · Breakfast · Bungalow room · 3★ · Hillside bungalow with views over the Kandy valley',
      images: [
        img('k00k6wj6t1ucjll2vn1ej1ezfkw6_1596709540_shutterstock_1018977325.jpg'),
        img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
        img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg'),
        img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
        img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
        img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg')
      ]
    },
    activities: [
      {
        name: 'Kandy city walk and markets',
        day: 4,
        optional: false,
        image: img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
        description: 'A day on foot around the lake, the bazaars and the craft shops of the old royal capital.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'Two nights above the hill capital with a scenic transfer through the plantations, a free day in the city and the markets.',
      image: img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg')
    }
  }
];

const detail = {
  slug: 'tea-country-sri-lanka-hatton-and-kandy-bungalow-stay',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Tea Country Sri Lanka: Hatton and Kandy Bungalow Stay',
  alt: 'Tea pickers on the terraced hills above Hatton',
  days: '5 days / 4 nights',
  stations: '2 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Nature',
  tags: ['Nature', 'Short trips', 'Culture'],
  price: 29088,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hatton', 'Kandy'],
  stats: { days: 5, cities: 2, hotels: 2, activities: 4, transfers: 5 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['5 transfers', 'Transport'],
    ['4 meals', 'Meals'],
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
  short: 'Five slow days in the hills: two nights in a planters bungalow at Hatton with waterfalls, a tea factory and a spice garden, then two in a bungalow above Kandy with a free day in the old royal capital.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights in hill country bungalows with breakfast; private airport transfers and all road travel in an air conditioned car with chauffeur guide; the Devon and St Clair waterfalls with a short trek; a tea factory tour and tasting; a spice garden visit; a scenic transfer through the plantations to Kandy.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches and dinners; entrance tickets; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and the waterfalls of Hatton (None)', text: 'Arrival at Bandaranaike International and private transfer into the hills\nDevon Falls and St Clair Falls from the estate road\nA trek down to the pools at the base of the falls\nA tea factory tour and tasting before check in', hotel: 'Tea Hills Bungalow, Hatton', highlights: ['Arrival at Bandaranaike International and private transfer into the hills', 'Devon Falls and St Clair Falls from the estate road', 'A trek down to the pools at the base of the falls'] },
    { title: 'Day 2: Tea hills and the spice garden (B)', text: 'Breakfast on the bungalow verandah\nA morning among the tea terraces around Hatton\nThe spice garden and its cinnamon and pepper vines\nAn evening at the bungalow with the mist coming in', hotel: 'Tea Hills Bungalow, Hatton', highlights: ['Breakfast on the bungalow verandah', 'A morning among the tea terraces around Hatton', 'The spice garden and its cinnamon and pepper vines'] },
    { title: 'Day 3: Through the plantations to Kandy (B)', text: 'Breakfast and check out of the bungalow\nA scenic transfer through the estates to Kandy\nCheck in at your hillside bungalow above the town\nOptional: the Temple of the Sacred Tooth Relic at evening puja', hotel: 'Kandy Hills Bungalow', highlights: ['Breakfast and check out of the bungalow', 'A scenic transfer through the estates to Kandy', 'Check in at your hillside bungalow above the town'] },
    { title: 'Day 4: A free day in Kandy (B)', text: 'Breakfast, then the whole day yours in the city\nThe lake, the bazaars and the craft shops\nOptional: the Peradeniya Royal Botanical Gardens\nOptional: a Kandyan dance show in the evening', hotel: 'Kandy Hills Bungalow', highlights: ['Breakfast, then the whole day yours in the city', 'The lake, the bazaars and the craft shops', 'Optional: the Peradeniya Royal Botanical Gardens'] },
    { title: 'Day 5: Departure via the hills (B)', text: 'Breakfast and check out\nOptional: an early start for the Adams Peak pilgrim path\nPrivate transfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast and check out', 'Optional: an early start for the Adams Peak pilgrim path', 'Private transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; lunches and dinners; entrance tickets; travel insurance; optional excursions; tips and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const teaCountrySriLankaHattonKandyBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const teaCountrySriLankaHattonKandyProduct = {
  slug: detail.slug,
  places: ['Hatton', 'Kandy'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 4,
  transfers: 5,
  meals: 4,
  price: detail.price,
  images: cardImages
};
