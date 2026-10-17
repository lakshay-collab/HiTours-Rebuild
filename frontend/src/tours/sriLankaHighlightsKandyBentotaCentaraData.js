// Sri Lanka Highlights: Kandy, Bentota and Colombo with a Four Star Beach Resort. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
  img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg'),
  img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
  img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg'),
  img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg'),
  img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
  img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
  img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg'),
  img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
  img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
  img('4nhzua0qjhxq269scn2196f6trxx_1557754429_jumbo.jpg'),
  img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
  img('docw1hphy3zg23x9fyr5x9b9j995_1580298371_Galle_face_green.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kandy',
    dayLabel: 'Day 1',
    images: [
      img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
      img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
      img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
      img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        img('2qdrxrko072bcco7ufzgu2npr0c7_1581078051_17185271045_4b7e32f3fc_b_(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Kandy`,
      'Arrival at Bandaranaike International and private transfer inland',
      'A stop at the Pinnawala elephant sanctuary on the way',
      'Check in at your Kandy hotel in the afternoon',
      'An evening lake drive and the Kandyan dance performance'
    ],
    accommodation: {
      name: 'Hotel Topaz, Kandy',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Hilltop hotel with a pool looking down on Kandy',
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
      }
    ],
    program: {
      name: 'Kandy',
      description: 'One night above Kandy with a private elephant visit on the way and a private lake drive and dance show.',
      image: img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Bentota',
    dayLabel: 'Day 2 to 3',
    images: [
      img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
      img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg'),
      img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg'),
      img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg')
    ],
    dayImages: {
      2: [
        img('lcogdoq76wasext2xs8n1943h2uh_1597147042_shutterstock_785564455.jpg'),
        img('z8pc6746uelxtxz5446rmvk51rki_flickr_cached_img_20b18d949dbd302f958b4aadfd6bf889_600x600.jpg'),
        img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
        img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg')
      ],
      3: [
        img('4nhzua0qjhxq269scn2196f6trxx_1557754429_jumbo.jpg'),
        img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
        img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg'),
        img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Down to Bentota and the turtles`,
      'Breakfast and a transfer from the hills to the coast',
      'The Kosgoda turtle hatchery on the way',
      'Check in at the resort on the sand spit',
      'The evening at leisure by the pool',
      `${DAY_MARK}Day 3 · Water sports and the Madu River`,
      'Breakfast, then water sports at the river mouth',
      'Optional: jet ski, banana boat or windsurfing',
      'A private boat ride through the Madu Ganga mangroves',
      'Dinner at the resort'
    ],
    accommodation: {
      name: 'Centara Ceysands Resort and Spa, Bentota',
      description: '2 nights · Breakfast and dinner · Deluxe room · 4★ · Four star resort on the sand spit between the Bentota river and the sea',
      images: [
        img('8dbhba1frxxx8qwa9cgaav02s70l_download%20-%202024-02-15T125132.901.jfif'),
        img('fjy4vpwr4a3m9scqcpqp89mddhq3_download%20-%202024-02-15T125147.693.jfif'),
        img('qrxw4hrv3v90zux3lmv6py0r1ttt_download%20-%202024-02-15T125212.110.jfif'),
        img('gkdophnkqiqdhkdtdwe4avsthffv_download%20-%202024-02-15T125205.370.jfif'),
        img('xrxjy4b92dejaid6fqupjckpawwh_download%20-%202024-02-15T125242.846.jfif'),
        img('6p1754gejnq53cmgoq62jt1p9gps_download%20-%202024-02-15T125249.002.jfif'),
        img('ipl9g1ocp5gkz4qboftc41zhxda7_download%20-%202024-02-15T125229.273.jfif'),
        img('p173jgr9g1d8t2ih0g6zpmsaofcr_download%20-%202024-02-15T125142.391.jfif'),
        img('otvxiionf7sjsy0eu4w3faw8yf53_download%20-%202024-02-15T125525.621.jfif'),
        img('k5kmgwm2xmxhp8c93xjefntleff4_download%20-%202024-02-15T125237.321.jfif')
      ]
    },
    activities: [
      {
        name: 'Private visit to the Kosgoda turtle hatchery',
        day: 2,
        optional: false,
        image: img('lcogdoq76wasext2xs8n1943h2uh_1597147042_shutterstock_785564455.jpg'),
        description: 'The hatchery south of Bentota where eggs are protected and hatchlings released into the sea at dusk.'
      },
      {
        name: 'Private boat ride on the Madu River',
        day: 3,
        optional: false,
        image: img('4nhzua0qjhxq269scn2196f6trxx_1557754429_jumbo.jpg'),
        description: 'A boat through the mangrove islands of the Madu Ganga, with water sports at the river mouth before or after.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'Two nights in a four star resort on the sand spit with the turtle hatchery on arrival, water sports and a private boat on the Madu River.',
      image: img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg')
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
      name: 'Mirage Hotel, Colombo',
      description: '1 night · Breakfast and dinner · Deluxe room · 3★ · Beachside hotel at Wellawatte in south Colombo',
      images: [
        img('oa3tad9w5rp8c5ts7ahto4mbyknn_mirage-hotel-colombo.jpg'),
        img('n9r0assgwet0g6zz1hwmmugynbf7_242832337.jpg'),
        img('owuoy8azo4t559t1vnwi5ss8kgop_242832332.jpg'),
        img('axuakqf7x97qfhnfynxuvzftyigw_154582823.jpg'),
        img('ma7b4ku0i8rq64oloog2hiujkrns_111418093.jpg'),
        img('1fj9r51ifga79eoqho9h55vd8zpo_242832342.jpg'),
        img('472y5ujog0pg58ysdvzfhq0kagnd_107999552.jpg'),
        img('wz007f139q83me3g7e0w4bh35jml_107947744.jpg'),
        img('o41igjq1yybowgkdumcafnjx0trp_154582873.jpg'),
        img('ufcad7f4zxa93fdcizhfohtcz7ji_167665744.jpg'),
        img('v2qvt5659bq4ndiggtffzs9kqg3p_167668992.jpg'),
        img('w8opoq0e1jv6pb66q81yju9cw1ao_166436779.jpg')
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
      description: 'A last night by the sea in south Colombo with a private full day of the capital.',
      image: img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg')
    }
  }
];

const detail = {
  slug: 'sri-lanka-highlights-kandy-bentota-and-colombo-with-a-four-star-beach-resort',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Sri Lanka Highlights: Kandy, Bentota and Colombo with a Four Star Beach Resort',
  alt: 'A jet ski cutting across the Bentota river mouth',
  days: '5 days / 4 nights',
  stations: '3 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Beach',
  tags: ['Beach', 'Honeymoon', 'Short trips'],
  price: 38000,
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
  short: 'Five days with a proper beach resort in the middle: a night in Kandy with the elephants and the dance show, two nights at the Centara Ceysands at Bentota with the turtles, water sports and the Madu River, and a last night in Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights in deluxe and four star hotels with breakfast and lunch or dinner daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; private Pinnawala visit; private Kandy lake drive and dance show; private Kosgoda turtle hatchery visit; a private boat ride on the Madu River; private full day Colombo sightseeing. Water sports are payable locally.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Kandy (D)', text: 'Arrival at Bandaranaike International and private transfer inland\nA stop at the Pinnawala elephant sanctuary on the way\nCheck in at your Kandy hotel in the afternoon\nAn evening lake drive and the Kandyan dance performance', hotel: 'Hotel Topaz, Kandy', highlights: ['Arrival at Bandaranaike International and private transfer inland', 'A stop at the Pinnawala elephant sanctuary on the way', 'Check in at your Kandy hotel in the afternoon'] },
    { title: 'Day 2: Down to Bentota and the turtles (B, D)', text: 'Breakfast and a transfer from the hills to the coast\nThe Kosgoda turtle hatchery on the way\nCheck in at the resort on the sand spit\nThe evening at leisure by the pool', hotel: 'Centara Ceysands Resorts & Spa, Bentota', highlights: ['Breakfast and a transfer from the hills to the coast', 'The Kosgoda turtle hatchery on the way', 'Check in at the resort on the sand spit'] },
    { title: 'Day 3: Water sports and the Madu River (B, D)', text: 'Breakfast, then water sports at the river mouth\nOptional: jet ski, banana boat or windsurfing\nA private boat ride through the Madu Ganga mangroves\nDinner at the resort', hotel: 'Centara Ceysands Resorts & Spa, Bentota', highlights: ['Breakfast, then water sports at the river mouth', 'Optional: jet ski, banana boat or windsurfing', 'A private boat ride through the Madu Ganga mangroves'] },
    { title: 'Day 4: Colombo city tour (B, D)', text: 'Breakfast and a transfer down the coast to Colombo\nGalle Face Green and the Gangaramaya temple complex\nThe Fort district, the Lotus Tower and Pettah market\nDinner and your last night at the hotel', hotel: 'Mirage Hotel Colombo', highlights: ['Breakfast and a transfer down the coast to Colombo', 'Galle Face Green and the Gangaramaya temple complex', 'The Fort district, the Lotus Tower and Pettah market'] },
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

export const sriLankaHighlightsKandyBentotaCentaraBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const sriLankaHighlightsKandyBentotaCentaraProduct = {
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
