// South and Central Vietnam. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
  img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
  img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
  img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
  img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
  img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
  img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
  img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg'),
  img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg'),
  img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
  img('w9dkaedmj3e8e5tqumgf7lpv587h_1467883935_1280px-Ben_Thanh_Market.jpg'),
  img('tonnwsasrtd050jxtlekyhfy34mv_1469613803_5967086564_fd29210949_o.jpg'),
  img('7c9y0w9lr632pl96udf5l9ek2h9h_shutterstock_690459592.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Ho Chi Minh City',
    subtitle: 'Saigon, Cu Chi and the Mekong',
    dayLabel: 'Day 1 to 3',
    images: [
      img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
      img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg'),
      img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
      img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg')
    ],
    dayImages: {
      1: [
        img('w9dkaedmj3e8e5tqumgf7lpv587h_1467883935_1280px-Ben_Thanh_Market.jpg'),
        img('tonnwsasrtd050jxtlekyhfy34mv_1469613803_5967086564_fd29210949_o.jpg'),
        img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
        img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg')
      ],
      2: [
        img('7c9y0w9lr632pl96udf5l9ek2h9h_shutterstock_690459592.jpg'),
        img('2fqc9nmqifyv07bhi7n7gqf3cxhl_shutterstock_690459592.jpg'),
        img('k0iwrtaiemzmywouhcz1remyihfd_shutterstock_175128359.jpg'),
        img('f1dbl8hvclmsfb1jc8fob8ztpxuk_1467880098_5397869098_f0ce8370ed_o.jpg')
      ],
      3: [
        img('4hlghe88itsu2x2yetdcq4mj42ni_1579700293_shutterstock_1529789570.jpg'),
        img('lvds5da20701ls58hbi447grx3s2_8193351650_d1ff3fd0b7_z.jpg'),
        img('ktw7z5gp3xhl3n59iymqv4ksukb2_Ben_Tre_Turtle_Island.jpg'),
        img('6cupjrsxzkngfv8zrrp9japoty1n_sgn15.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Saigon`,
      'Arrival at Tan Son Nhat and transfer to your hotel',
      'Check in in District 1',
      'Rest of the day free at your own pace',
      'Optional: the rooftop bars on Nguyen Hue',
      `${DAY_MARK}Day 2 · Saigon and the Cu Chi tunnels`,
      'Breakfast, then north west to Cu Chi',
      'The tunnels, the trapdoors and the kitchens',
      'Back in the city for the palace and the cathedral',
      'The war remnants museum and Ben Thanh market',
      `${DAY_MARK}Day 3 · Mekong Delta`,
      'Breakfast, then south into the delta',
      'A boat through the coconut creeks at My Tho',
      'A sampan ride under the palms',
      'The coconut candy workshops, then back to the city'
    ],
    accommodation: {
      name: 'Prague Hotel, Ho Chi Minh',
      description: '3 nights · Breakfast and dinner · Standard room · 3★ · Small hotel in District 1, walking distance from the market',
      images: [
        img('5pj8jdmrh4uxv8239rqswae3cp79_img7.jpg'),
        img('adfht3v0juz1t2np7sig00w42vng_img2.jpg'),
        img('ow2qe6okm6ssxiihpe40zjtlidvr_img1.jpg'),
        img('83jg8dv99vpnw3alxxb3s980yuy1_img10.jpg'),
        img('s5jzrndmwo2iz8tra22yog6s3mzq_img8.jpg'),
        img('0os7ucu4hk7oytuc2a3ct5pphzoq_img32.jpg'),
        img('bprotd69thn5uqeg1phgqj3hg6s6_img5.jpg'),
        img('wgbg5nwulqw3918tyejacojq696i_img37.jpg'),
        img('i9tr1jgsl3i1djo7born8a8o08l2_img38.jpg'),
        img('7prqmhc9x5tjrrfqpyvtqlbr9zg3_img40.jpg'),
        img('mj6rvqriwvs9p710i7ecblq0v602_img3.jpg'),
        img('oa8bsimb0nm321sy63jxgobrqxg7_img14.jpg')
      ]
    },
    activities: [
      {
        name: 'Cu Chi tunnels half day tour',
        day: 2,
        optional: false,
        image: img('7c9y0w9lr632pl96udf5l9ek2h9h_shutterstock_690459592.jpg'),
        description: 'The tunnel network north west of the city, with the trapdoors, the kitchens and a crawl through a widened section of the original shafts.'
      },
      {
        name: 'Saigon city tour',
        day: 2,
        optional: false,
        image: img('k0iwrtaiemzmywouhcz1remyihfd_shutterstock_175128359.jpg'),
        description: 'The Reunification Palace, the old post office and Notre Dame cathedral, then the war remnants museum and the Ben Thanh market.'
      },
      {
        name: 'Mekong Delta day tour',
        day: 3,
        optional: false,
        image: img('4hlghe88itsu2x2yetdcq4mj42ni_1579700293_shutterstock_1529789570.jpg'),
        description: 'South to My Tho for a boat into the coconut creeks, a sampan through the palms, and the workshops where they make coconut candy.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'Three nights in District 1 with the Cu Chi tunnels, a city tour and a full day in the Mekong Delta.',
      image: img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg')
    }
  },
  {
    letter: 'B',
    name: 'Da Nang',
    subtitle: 'Hoi An and Ba Na Hills',
    dayLabel: 'Day 4 to 6',
    images: [
      img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
      img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
      img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg'),
      img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg')
    ],
    dayImages: {
      4: [
        img('6mvmwgt3baaojghbm3802hxvxtwo_shutterstock_1101234365.jpg'),
        img('i1g9vcnnzos2f5srkha63o2w72eg_1467789759_6914926621_5239080e32_o.jpg'),
        img('mpkg124uacuo2s71x3f0zfzuhuyo_1467790941_26937034641_89d6ed7fa5_o.jpg'),
        img('y7qz31iy6wdasr4qc3dbaxbs6jd2_Thu_B%E1%BB%93n_River_at_night_-_H%E1%BB%99i_An_2022.jpg')
      ],
      5: [
        img('4arj222jby0yobyhxutcze6movjx_1580714303_shutterstock_1343264876.jpg'),
        img('bbeokkqegcwgy51eqlvyhfvmlgis_1467287106_BaNaHillsCableCar.jpg'),
        img('84tapj6qwgvbv9sgdfd6q1233uak_1467287160_Linh_Ung_Pagoda.jpg'),
        img('yhxwfmhdmt1hhx1z5nna2xphz1k3_golden-bridge-4912803_1280.jpg')
      ],
      6: [
        img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
        img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
        img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg'),
        img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · North to Da Nang and Hoi An`,
      'Breakfast and check out, then the flight north',
      'Check in near My Khe beach in Da Nang',
      'South to Hoi An for the afternoon',
      'A boat on the Thu Bon as the lanterns come on',
      `${DAY_MARK}Day 5 · Ba Na Hills`,
      'Breakfast, then the cable car up to Ba Na',
      'The Golden Bridge held up by two stone hands',
      'The French village and the gardens at the top',
      'Back down to Da Nang in the evening',
      `${DAY_MARK}Day 6 · Departure from Da Nang`,
      'Breakfast at the hotel and check out',
      'Private transfer to Da Nang airport for your flight home'
    ],
    accommodation: {
      name: 'Luxtery Da Nang, Da Nang',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Simple hotel a few streets back from My Khe beach',
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
        name: 'Hoi An with a Thu Bon river boat ride',
        day: 4,
        optional: false,
        image: img('6mvmwgt3baaojghbm3802hxvxtwo_shutterstock_1101234365.jpg'),
        description: 'A day in the old trading town with the Japanese bridge and the merchant houses, and a boat out onto the Thu Bon river as the lanterns come on.'
      },
      {
        name: 'Ba Na Hills and the Golden Bridge',
        day: 5,
        optional: false,
        image: img('4arj222jby0yobyhxutcze6movjx_1580714303_shutterstock_1343264876.jpg'),
        description: 'The long cable car up to Ba Na, the Golden Bridge held up by two stone hands, and the French village and gardens at the top.'
      }
    ],
    program: {
      name: 'Da Nang',
      description: 'The flight to the central coast for two nights, with Hoi An by lantern light and a full day up at Ba Na.',
      image: img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg')
    }
  }
];

const detail = {
  slug: 'south-and-central-vietnam',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'South and Central Vietnam',
  alt: 'Reunification Palace gates in Ho Chi Minh City',
  days: '6 days / 5 nights',
  stations: '2 stops',
  transport: 'A domestic flight, private transfers and guided tours',
  tag: 'Short break',
  tags: ['Culture', 'Short break'],
  price: 47452,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Ho Chi Minh City', 'Cu Chi', 'Mekong Delta', 'Da Nang', 'Hoi An', 'Ba Na Hills'],
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
    quote: 'Six days without the long run north. The south and the centre are enough for a first visit if your leave is short.',
    quoteMore: 'Fly out of Da Nang rather than doubling back to Saigon. It saves you most of a day.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days across the south and centre: three nights in Saigon with the Cu Chi tunnels, a city tour and a full day in the Mekong Delta, then two in Da Nang with Hoi An by lantern light and a day up at Ba Na Hills.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights with breakfast and dinner daily; the domestic flight north; private transfers throughout; the Cu Chi tunnels half day tour; a Saigon city tour; a Mekong Delta day tour; a Hoi An day tour with a Thu Bon river boat ride; a full day up at Ba Na with the Golden Bridge.',
  intro2: 'Not included: international flights; Vietnam visa fees; lunches; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Saigon (Arrival)', text: 'Arrival at Tan Son Nhat and transfer to your hotel\nCheck in in District 1\nRest of the day free at your own pace\nOptional: the rooftop bars on Nguyen Hue', hotel: 'Prague Hotel', highlights: ['Arrival at Tan Son Nhat and transfer to your hotel', 'Check in in District 1', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Saigon and the Cu Chi tunnels (B, D)', text: 'Breakfast, then north west to Cu Chi\nThe tunnels, the trapdoors and the kitchens\nBack in the city for the palace and the cathedral\nThe war remnants museum and Ben Thanh market', hotel: 'Prague Hotel', highlights: ['Breakfast, then north west to Cu Chi', 'The tunnels, the trapdoors and the kitchens', 'Back in the city for the palace and the cathedral'] },
    { title: 'Day 3: Mekong Delta (B, D)', text: 'Breakfast, then south into the delta\nA boat through the coconut creeks at My Tho\nA sampan ride under the palms\nThe coconut candy workshops, then back to the city', hotel: 'Prague Hotel', highlights: ['Breakfast, then south into the delta', 'A boat through the coconut creeks at My Tho', 'A sampan ride under the palms'] },
    { title: 'Day 4: North to Da Nang and Hoi An (B, D)', text: 'Breakfast and check out, then the flight north\nCheck in near My Khe beach in Da Nang\nSouth to Hoi An for the afternoon\nA boat on the Thu Bon as the lanterns come on', hotel: 'Luxtery Da Nang', highlights: ['Breakfast and check out, then the flight north', 'Check in near My Khe beach in Da Nang', 'South to Hoi An for the afternoon'] },
    { title: 'Day 5: Ba Na Hills (B, D)', text: 'Breakfast, then the cable car up to Ba Na\nThe Golden Bridge held up by two stone hands\nThe French village and the gardens at the top\nBack down to Da Nang in the evening', hotel: 'Luxtery Da Nang', highlights: ['Breakfast, then the cable car up to Ba Na', 'The Golden Bridge held up by two stone hands', 'The French village and the gardens at the top'] },
    { title: 'Day 6: Departure from Da Nang (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Da Nang airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Da Nang airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; lunches; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Vietnam', href: '/asien/vietnam' },
  { label: detail.title }
];

export const southAndCentralVietnamBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const southAndCentralVietnamProduct = {
  slug: detail.slug,
  places: ['Ho Chi Minh City', 'Cu Chi', 'Mekong Delta', 'Da Nang', 'Hoi An', 'Ba Na Hills'],
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
