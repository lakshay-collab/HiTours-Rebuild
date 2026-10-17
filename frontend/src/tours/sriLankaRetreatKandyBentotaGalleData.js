// Sri Lanka Retreat: Kandy, Bentota and Galle Fort. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg'),
  img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
  img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
  img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
  img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
  img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
  img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg'),
  img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg'),
  img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
  img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
  img('z4oulkqkarnnx90hs19lil2onobp_shutterstock_162937874.jpg'),
  img('kg4fsny02qmbgktq0h6hu3qrbksa_shutterstock_1521168272.jpg'),
  img('q5mg4s7atcnsscxcoxgfnysmzyiy_download.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kandy',
    dayLabel: 'Day 1',
    images: [
      img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg'),
      img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg'),
      img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
      img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('z4oulkqkarnnx90hs19lil2onobp_shutterstock_162937874.jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('kg4fsny02qmbgktq0h6hu3qrbksa_shutterstock_1521168272.jpg'),
        img('q5mg4s7atcnsscxcoxgfnysmzyiy_download.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Kandy`,
      'Arrival at Bandaranaike International and private transfer inland',
      'A stop at the Pinnawala elephant sanctuary on the way',
      'The Temple of the Sacred Tooth Relic and a circuit of the lake',
      'The Kandyan dance performance in the evening'
    ],
    accommodation: {
      name: 'Hotel Topaz, Kandy',
      description: '1 night · Breakfast · Standard room · 3★ · Hilltop hotel with a pool looking down on Kandy',
      images: [
        img('mbpjmsh3aq3heonxxlx8ydov7xgw_156821491.jpg'),
        img('o2q9y59eydcj6gk7a9jvrj6kw8n8_156821508.jpg'),
        img('ij26ewlj4v6jtrp9ghls47w8i4gv_tourmaline-presidential-suite-ga.jpg'),
        img('m3ryz4pkodldmyrfklab9pktn168_green-floor-rooms-gallery-large.jpg'),
        img('tc7iiyfhn6zou9lvnzlsjkmifze0_151327149.jpg'),
        img('aht7qju8gmwqyjmyjlw13u2bndq6_hotel-topaz.jpg'),
        img('rm69iq6vgzn90nrzks9f0i4i60rm_94657914.jpg'),
        img('9jiou2bgvb3rhb8fu1owzt0e850z_211310950.jpg'),
        img('nrwtzsqopk64zb0xbtci43si35a2_156832471.jpg'),
        img('xhmzh967bizskdkbw9m992q1xqw8_suite-room%20(1).jpg'),
        img('q0z2dadq1xehz61wmgp8skjmwykg_94643845.jpg')
      ]
    },
    activities: [
      {
        name: 'Pinnawala Elephant Orphanage',
        day: 1,
        optional: false,
        image: img('z4oulkqkarnnx90hs19lil2onobp_shutterstock_162937874.jpg'),
        description: 'A stop on the way up from the airport to watch the resident herd bathe in the Maha Oya river and feed at the sanctuary.'
      },
      {
        name: 'Tooth Relic temple, lake and Kandyan dance',
        day: 1,
        optional: false,
        image: img('kg4fsny02qmbgktq0h6hu3qrbksa_shutterstock_1521168272.jpg'),
        description: 'The Temple of the Sacred Tooth Relic at evening puja, a circuit of the lake and the drummers and dancers of the show.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'One night above Kandy with the elephants on the way, the Tooth Relic temple and the dance show.',
      image: img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg')
    }
  },
  {
    letter: 'B',
    name: 'Bentota',
    dayLabel: 'Day 2 to 3',
    images: [
      img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg'),
      img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
      img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg'),
      img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg')
    ],
    dayImages: {
      2: [
        img('zpo985opiwvwzcckuzd3wg3jiq7r_shutterstock_1503294827.jpg'),
        img('2kyg08hfs2xevolr6axgk0fpxg9d_download.jpg'),
        img('g0dwn9ifae4it1sbd4hv4usbxfjx_shutterstock_1503294815%20(1).jpg'),
        img('ppk6jliwjqdv0uqw80tdg7pueoha_shutterstock_1486172417.jpg')
      ],
      3: [
        img('8qmuaf1rxp0cbdfr57g5d5ibbene_shutterstock_2353371409.jpg'),
        img('laoam61lksfc6jdkjbmxr1olphia_1094345048_1db7fb40b5_o.jpg'),
        img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg'),
        img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Down to Bentota`,
      'Breakfast and a transfer from the hills to the coast',
      'The Kosgoda turtle hatchery and the fish pedicure centre',
      'Check in on the Bentota beachfront',
      'The evening at leisure on the sand',
      `${DAY_MARK}Day 3 · A day at Galle fort`,
      'Breakfast and an excursion down the southern coast',
      'The ramparts, the lighthouse and the Dutch Reformed church',
      'Lunch in the lanes of the fort (own expense)',
      'Sunset from the walls and back to Bentota'
    ],
    accommodation: {
      name: 'Marina Bentota, Bentota',
      description: '2 nights · Breakfast · Standard room · 3★ · Beachfront hotel on the Bentota strip',
      images: [
        img('7l13rim3kb0zvafc67udilluapm7_02.jpg'),
        img('vpgdf5cauxw3yexrnstbf3ebld9z_download%20(10).jpg'),
        img('hjjm1hbsw8ue8114y2ca0ht0lqy5_download%20(8).jpg'),
        img('jxmrdpcuh69no0jpfgh9jbglmad9_download%20(6).jpg'),
        img('mvnaqtncl23mqd0hyahnqx7u5deo_download%20(7).jpg'),
        img('thswc14y2719dr66i1si1y1j46i5_download%20(2).jpg'),
        img('84oue08rx463imhpbv3fbzt2r84x_download%20(3).jpg'),
        img('mh5mksp1g7vdy0pr16a6ljb208gh_download%20(5).jpg'),
        img('4wf2v30pdjy0z0iysu0qbh30g137_download%20(4).jpg'),
        img('xtonkggrz5lfjxo77iokp7iiqf4f_download.jpg'),
        img('b37ec7a051ek3tcs3jwdzh80v3j8_download%20(11).jpg')
      ]
    },
    activities: [
      {
        name: 'Bentota sightseeing, turtle hatchery and fish spa',
        day: 2,
        optional: false,
        image: img('zpo985opiwvwzcckuzd3wg3jiq7r_shutterstock_1503294827.jpg'),
        description: 'The Kosgoda turtle hatchery, the fish pedicure centre and the Bentota river mouth.'
      },
      {
        name: 'Excursion to Galle',
        day: 3,
        optional: false,
        image: img('8qmuaf1rxp0cbdfr57g5d5ibbene_shutterstock_2353371409.jpg'),
        description: 'A day inside the Dutch fort: the ramparts, the lighthouse, the old church and the lanes of cafes and galleries.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'Two nights on the beach with the turtle hatchery and fish spa on arrival and a day inside the Galle fort.',
      image: img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Colombo',
    dayLabel: 'Day 4 to 5',
    images: [
      img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
      img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
      img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
      img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg')
    ],
    dayImages: {
      4: [
        img('dm76wbn9rle1s1q903pqqe4l65je_shutterstock_1707985711.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg'),
        img('kmwpt2e6q1n3i7gsabo6lmkqfqbg_1581756612_shutterstock_1444012382.jpg'),
        img('iqtw45cyy9omran9gplkzv4ynzae_31447619406_5dae3e4f4c_k.jpg')
      ],
      5: [
        img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
        img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
        img('crlrukladzxpiw20e0wgy9q1zntl_shutterstock_1141635956.jpg'),
        img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Colombo city tour`,
      'Breakfast and a transfer up the coast to Colombo',
      'Galle Face Green and the Gangaramaya temple complex',
      'The Fort district, the Lotus Tower and Pettah market',
      'Your last night in the capital',
      `${DAY_MARK}Day 5 · Departure from Colombo`,
      'Breakfast at the hotel and check out',
      'Private transfer to Bandaranaike International for your flight home'
    ],
    accommodation: {
      name: 'Fairway Colombo, Colombo',
      description: '1 night · Breakfast · Standard room · 3★ · Modern city hotel in the Colombo Fort district',
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
        name: 'Colombo sightseeing tour',
        day: 4,
        optional: false,
        image: img('dm76wbn9rle1s1q903pqqe4l65je_shutterstock_1707985711.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and the floating market at Pettah.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A last night in the Fort district with the sights of the commercial capital.',
      image: img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg')
    }
  }
];

const detail = {
  slug: 'sri-lanka-retreat-kandy-bentota-and-galle-fort',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Sri Lanka Retreat: Kandy, Bentota and Galle Fort',
  alt: 'The lighthouse on the ramparts of the Galle Dutch fort',
  days: '5 days / 4 nights',
  stations: '3 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Best seller',
  tags: ['Best seller', 'Beach', 'Culture'],
  price: 32869,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kandy', 'Bentota', 'Colombo'],
  stats: { days: 5, cities: 3, hotels: 3, activities: 5, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['6 transfers', 'Transport'],
    ['4 meals', 'Meals'],
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
  short: 'Five days with the fort as the centrepiece: a night in Kandy with the elephants and the Tooth Relic temple, two nights at Bentota with the turtles and a day inside Galle fort, and a last night in Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights in deluxe class hotels with breakfast daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; the Pinnawala elephant sanctuary; the Tooth Relic temple, lake drive and Kandyan dance performance; Bentota sightseeing with the turtle hatchery and fish spa; a day excursion to Galle; the Colombo sightseeing tour.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches and dinners; entrance tickets; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Kandy (None)', text: 'Arrival at Bandaranaike International and private transfer inland\nA stop at the Pinnawala elephant sanctuary on the way\nThe Temple of the Sacred Tooth Relic and a circuit of the lake\nThe Kandyan dance performance in the evening', hotel: 'Hotel Topaz, Kandy', highlights: ['Arrival at Bandaranaike International and private transfer inland', 'A stop at the Pinnawala elephant sanctuary on the way', 'The Temple of the Sacred Tooth Relic and a circuit of the lake'] },
    { title: 'Day 2: Down to Bentota (B)', text: 'Breakfast and a transfer from the hills to the coast\nThe Kosgoda turtle hatchery and the fish pedicure centre\nCheck in on the Bentota beachfront\nThe evening at leisure on the sand', hotel: 'Marina Bentota', highlights: ['Breakfast and a transfer from the hills to the coast', 'The Kosgoda turtle hatchery and the fish pedicure centre', 'Check in on the Bentota beachfront'] },
    { title: 'Day 3: A day at Galle fort (B)', text: 'Breakfast and an excursion down the southern coast\nThe ramparts, the lighthouse and the Dutch Reformed church\nLunch in the lanes of the fort (own expense)\nSunset from the walls and back to Bentota', hotel: 'Marina Bentota', highlights: ['Breakfast and an excursion down the southern coast', 'The ramparts, the lighthouse and the Dutch Reformed church', 'Lunch in the lanes of the fort (own expense)'] },
    { title: 'Day 4: Colombo city tour (B)', text: 'Breakfast and a transfer up the coast to Colombo\nGalle Face Green and the Gangaramaya temple complex\nThe Fort district, the Lotus Tower and Pettah market\nYour last night in the capital', hotel: 'Fairway Colombo', highlights: ['Breakfast and a transfer up the coast to Colombo', 'Galle Face Green and the Gangaramaya temple complex', 'The Fort district, the Lotus Tower and Pettah market'] },
    { title: 'Day 5: Departure from Colombo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; lunches and dinners; entrance tickets; travel insurance; optional excursions; tips and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const sriLankaRetreatKandyBentotaGalleBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const sriLankaRetreatKandyBentotaGalleProduct = {
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
  meals: 4,
  price: detail.price,
  images: cardImages
};
