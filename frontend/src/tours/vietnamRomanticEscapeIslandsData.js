// Vietnam Romantic Escape with Phu Quoc. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
  img('zqtf2kdiewu8fh1xh3n5rp3o5tep_shutterstock_1017814951.jpg'),
  img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
  img('x8lbfvysk0qjliq58f20yvd3o5zl_shutterstock_1873823557.jpg'),
  img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
  img('j3quov5c3anxmy0oldbd7lckpsex_shutterstock_1113880625.jpg'),
  img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
  img('54kch29rr94yk4lxp6bgpo2rs46b_shutterstock_1077419603.jpg'),
  img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg'),
  img('jh5bfu9i2bcczklx0uqx6n1dinjw_shutterstock_521611651.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('zqtf2kdiewu8fh1xh3n5rp3o5tep_shutterstock_1017814951.jpg'),
  img('x8lbfvysk0qjliq58f20yvd3o5zl_shutterstock_1873823557.jpg'),
  img('j3quov5c3anxmy0oldbd7lckpsex_shutterstock_1113880625.jpg'),
  img('54kch29rr94yk4lxp6bgpo2rs46b_shutterstock_1077419603.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Da Nang',
    subtitle: 'Da Nang, Cam Thanh and Ba Na',
    dayLabel: 'Day 1 to 3',
    images: [
      img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
      img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
      img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
      img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg')
    ],
    dayImages: {
      1: [
        img('hac0atag7svpfutjqaoc2dvnlay5_shutterstock_1345141253.jpg'),
        img('4ajvifpqrthujg1eszffqu8aibtm_download%20(100).jpg'),
        img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
        img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg')
      ],
      2: [
        img('4arj222jby0yobyhxutcze6movjx_1580714303_shutterstock_1343264876.jpg'),
        img('bbeokkqegcwgy51eqlvyhfvmlgis_1467287106_BaNaHillsCableCar.jpg'),
        img('84tapj6qwgvbv9sgdfd6q1233uak_1467287160_Linh_Ung_Pagoda.jpg'),
        img('yhxwfmhdmt1hhx1z5nna2xphz1k3_golden-bridge-4912803_1280.jpg')
      ],
      3: [
        img('ujk4qbm4n62ojzh1oi2cead2qneb_shutterstock_469510655.jpg'),
        img('okfkwi6un4p5vz0fx0tu8f0m1ek9_1467286953_C_E1_BA_A7u_R_E1_BB_93ng.jpg'),
        img('amjm6viflwijy3mqp16oowzwml9h_1467286408_15020501734_96bb077e0f_b.jpg'),
        img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and Cam Thanh`,
      'Arrival at Da Nang and transfer to your hotel',
      'Check in near My Khe beach',
      'South to Cam Thanh in the afternoon',
      'A basket boat spun through the water palms',
      `${DAY_MARK}Day 2 · Ba Na Hills`,
      'Breakfast, then the cable car up to Ba Na',
      'The Golden Bridge held up by two stone hands',
      'The French village and the gardens at the top',
      'Back down to Da Nang in the evening',
      `${DAY_MARK}Day 3 · A free day in Da Nang`,
      'Breakfast, then a free day on the coast',
      'Optional: the Marble Mountains above the coast road',
      'Optional: an afternoon on My Khe beach',
      'Optional: the Dragon Bridge after dark'
    ],
    accommodation: {
      name: 'Luxtery Da Nang, Da Nang',
      description: '3 nights · Breakfast and dinner · Standard room · 3★ · Simple hotel a few streets back from My Khe beach',
      images: [
        img('bt3i1gnd648i005c7ukinian0v7f_716d455e0818ea7e050e40523d4f7bac.jpg'),
        img('eop28g1inzoo9ya667pqrhdh1rlv_478766351.jpg'),
        img('nfxjf6q4ulh0dha6nt3mcirl56e6_img2.jpg'),
        img('afquyrovth2uupbnm3o6hgqcvfs8_img1.jpg'),
        img('oo3d2hm5caolatb91etff7qidvl1_img5.jpg'),
        img('exk9fpif6rldrbebi50o9wgys791_img8.jpg'),
        img('pjxfju4hrjayo3d7sxfw33cqz101_img9.jpg'),
        img('3zfln2aq0p751007t05ru119g4r8_img3.jpg'),
        img('4y93qy538z0maxe2gadfuq6pqmz7_img12.jpg'),
        img('so8h2z6ygq48oz3ben8vzcanhz3w_img16.jpg'),
        img('v6ma5zv5sgpf540rw43flca6rlmk_img10.jpg'),
        img('6x510mai9r9lvsua0r5nugpn226o_478766736.jpg')
      ]
    },
    activities: [
      {
        name: 'Cam Thanh basket boat trip',
        day: 1,
        optional: false,
        image: img('hac0atag7svpfutjqaoc2dvnlay5_shutterstock_1345141253.jpg'),
        description: 'A round bamboo basket boat spun through the water coconut palms at Cam Thanh, with the rowers showing off in the creeks.'
      },
      {
        name: 'Ba Na Hills and the Golden Bridge',
        day: 2,
        optional: false,
        image: img('4arj222jby0yobyhxutcze6movjx_1580714303_shutterstock_1343264876.jpg'),
        description: 'The long cable car up to Ba Na, the Golden Bridge held up by two stone hands, and the French village and gardens at the top.'
      }
    ],
    program: {
      name: 'Da Nang',
      description: 'Three nights near the beach, with a basket boat ride at Cam Thanh on arrival, Ba Na Hills and a free day.',
      image: img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Phu Quoc',
    dayLabel: 'Day 4 to 6',
    images: [
      img('6r7es5b1onpmozcvqas04rqr42bd_shutterstock_300005888.jpg'),
      img('zqtf2kdiewu8fh1xh3n5rp3o5tep_shutterstock_1017814951.jpg'),
      img('jh5bfu9i2bcczklx0uqx6n1dinjw_shutterstock_521611651.jpg'),
      img('54kch29rr94yk4lxp6bgpo2rs46b_shutterstock_1077419603.jpg')
    ],
    dayImages: {
      4: [
        img('u59jsu6nbtr7f43g61uo8qi3quvd_Grand%20World%20Phu%20Quoc.jpg'),
        img('0opkt776kmj26xssoray5sz145mw_52681262911_096921b45d_b.jpg'),
        img('6r7es5b1onpmozcvqas04rqr42bd_shutterstock_300005888.jpg'),
        img('zqtf2kdiewu8fh1xh3n5rp3o5tep_shutterstock_1017814951.jpg')
      ],
      5: [
        img('baqjxhoipdwcr0g4tni4zoq6zwkw_woh25mnzmyrr29dn9605sd6an815_884394290%20(1).jpg'),
        img('suh6oqk2g9ssol6zz644h0jamqv0_Waterpark-1.jpg'),
        img('6r7es5b1onpmozcvqas04rqr42bd_shutterstock_300005888.jpg'),
        img('zqtf2kdiewu8fh1xh3n5rp3o5tep_shutterstock_1017814951.jpg')
      ],
      6: [
        img('6r7es5b1onpmozcvqas04rqr42bd_shutterstock_300005888.jpg'),
        img('zqtf2kdiewu8fh1xh3n5rp3o5tep_shutterstock_1017814951.jpg'),
        img('jh5bfu9i2bcczklx0uqx6n1dinjw_shutterstock_521611651.jpg'),
        img('54kch29rr94yk4lxp6bgpo2rs46b_shutterstock_1077419603.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Flight to Phu Quoc`,
      'Breakfast and check out, then the flight to the island',
      'Check in near Long Beach',
      'The canals and bamboo museum at Grand World',
      'A boat ride through the Venice style quarter',
      `${DAY_MARK}Day 5 · Cable car and Aquatopia`,
      'Breakfast, then the cable car across to An Thoi',
      'The island viewpoints over the water',
      'A day at the Aquatopia water park',
      'Back to the hotel in the late afternoon',
      `${DAY_MARK}Day 6 · Departure from Phu Quoc`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Praha Phu Quoc Hotel, Phu Quoc',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Island hotel a short ride from Long Beach',
      images: [
        img('gyxnwre1wz7zeps8yx6y5w8bgg67_image_2.jpg'),
        img('is2xdujx6ro3v3w71egqsebao58m_image_0.jpg'),
        img('63pwzdl5e1ejly8xsnac4q8yoptp_image_40.jpg'),
        img('d1ei7u20pt6z4sqr79yfkzowqse7_446457859.jpg'),
        img('i9cucld1s8x872fkpc10zv2ctpur_image_13.jpg'),
        img('9iomsw3mwbqkxtszq6qx8270j95q_image_21.jpg'),
        img('p99rcrey19rb5p7cl2z67h08pjde_image_25.jpg'),
        img('10wdi4dep230g9dqrhgjkhfm6wnl_image_24.jpg'),
        img('vayl231onleyux6xbgkai7szu9gd_image_41.jpg'),
        img('zo6rvpipr85u5deiaiombtffvhy6_470703605.jpg'),
        img('ho7csbr3vwsaepr9fk13oky0kutr_image_35.jpg'),
        img('g4gqulxksgbgyf9wa4zjwi1mablc_446459330.jpg'),
        img('kw7ufadsshzcj781obpfmfw4wfbd_160841685.jpg')
      ]
    },
    activities: [
      {
        name: 'Grand World tour',
        day: 4,
        optional: false,
        image: img('u59jsu6nbtr7f43g61uo8qi3quvd_Grand%20World%20Phu%20Quoc.jpg'),
        description: 'The canals, the bamboo museum and the Venice style boat ride at Grand World, the built up quarter in the north of the island.'
      },
      {
        name: 'Island tour with the cable car and Aquatopia',
        day: 5,
        optional: false,
        image: img('baqjxhoipdwcr0g4tni4zoq6zwkw_woh25mnzmyrr29dn9605sd6an815_884394290%20(1).jpg'),
        description: 'The long cable car across the water to An Thoi, the island viewpoints, and a day at the Aquatopia water park.'
      }
    ],
    program: {
      name: 'Phu Quoc',
      description: 'The flight to the island for two nights, with Grand World, the cable car over the sea and the water park.',
      image: img('6r7es5b1onpmozcvqas04rqr42bd_shutterstock_300005888.jpg')
    }
  }
];

const detail = {
  slug: 'vietnam-romantic-escape-with-phu-quoc',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Vietnam Romantic Escape with Phu Quoc',
  alt: 'Basket boats among the water coconut palms at Cam Thanh',
  days: '6 days / 5 nights',
  stations: '2 stops',
  transport: 'A domestic flight, private transfers and guided tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Beach'],
  price: 56696,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Da Nang', 'Cam Thanh', 'Ba Na Hills', 'Phu Quoc'],
  stats: { days: 6, cities: 2, hotels: 2, activities: 5, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['10 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Coast and island rather than cities. For a honeymoon with five nights, this is the version with the least packing and unpacking.',
    quoteMore: 'The Phu Quoc cable car is the longest over water anywhere. Take the first car of the day and you will have it almost to yourselves.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days for two on the coast and an island: three nights in Da Nang with a basket boat ride at Cam Thanh, Ba Na Hills and the Golden Bridge and a free day, then two on Phu Quoc with Grand World, the cable car over the sea and the Aquatopia water park.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights with breakfast and dinner daily; the domestic flight to Phu Quoc; private transfers throughout; a half day Cam Thanh basket boat trip; a full day up at Ba Na with the Golden Bridge; the Grand World tour; a full day island tour with the cable car and the Aquatopia water park.',
  intro2: 'Not included: international flights; Vietnam visa fees; lunches; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and Cam Thanh (Arrival)', text: 'Arrival at Da Nang and transfer to your hotel\nCheck in near My Khe beach\nSouth to Cam Thanh in the afternoon\nA basket boat spun through the water palms', hotel: 'Luxtery Da Nang', highlights: ['Arrival at Da Nang and transfer to your hotel', 'Check in near My Khe beach', 'South to Cam Thanh in the afternoon'] },
    { title: 'Day 2: Ba Na Hills (B, D)', text: 'Breakfast, then the cable car up to Ba Na\nThe Golden Bridge held up by two stone hands\nThe French village and the gardens at the top\nBack down to Da Nang in the evening', hotel: 'Luxtery Da Nang', highlights: ['Breakfast, then the cable car up to Ba Na', 'The Golden Bridge held up by two stone hands', 'The French village and the gardens at the top'] },
    { title: 'Day 3: A free day in Da Nang (B, D)', text: 'Breakfast, then a free day on the coast\nOptional: the Marble Mountains above the coast road\nOptional: an afternoon on My Khe beach\nOptional: the Dragon Bridge after dark', hotel: 'Luxtery Da Nang', highlights: ['Breakfast, then a free day on the coast', 'Optional: the Marble Mountains above the coast road', 'Optional: an afternoon on My Khe beach'] },
    { title: 'Day 4: Flight to Phu Quoc (B, D)', text: 'Breakfast and check out, then the flight to the island\nCheck in near Long Beach\nThe canals and bamboo museum at Grand World\nA boat ride through the Venice style quarter', hotel: 'Praha Phu Quoc Hotel', highlights: ['Breakfast and check out, then the flight to the island', 'Check in near Long Beach', 'The canals and bamboo museum at Grand World'] },
    { title: 'Day 5: Cable car and Aquatopia (B, D)', text: 'Breakfast, then the cable car across to An Thoi\nThe island viewpoints over the water\nA day at the Aquatopia water park\nBack to the hotel in the late afternoon', hotel: 'Praha Phu Quoc Hotel', highlights: ['Breakfast, then the cable car across to An Thoi', 'The island viewpoints over the water', 'A day at the Aquatopia water park'] },
    { title: 'Day 6: Departure from Phu Quoc (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; lunches; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Vietnam', href: '/asien/vietnam' },
  { label: detail.title }
];

export const vietnamRomanticEscapeIslandsBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const vietnamRomanticEscapeIslandsProduct = {
  slug: detail.slug,
  places: ['Da Nang', 'Cam Thanh', 'Ba Na Hills', 'Phu Quoc'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 5,
  transfers: 8,
  meals: 10,
  price: detail.price,
  images: cardImages
};
