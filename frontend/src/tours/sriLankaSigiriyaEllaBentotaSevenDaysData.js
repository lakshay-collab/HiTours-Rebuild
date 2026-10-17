// Sri Lanka with Sigiriya and Ella: Kandy to Bentota in Seven Days. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
  img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg'),
  img('6w51ui6a9g0e0o0hrf84kt4s1a7x_shutterstock_2335215109.jpg'),
  img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg'),
  img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
  img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
  img('z7kb0dcgq1zn0kla57iv7ayde16p_shutterstock_326368451%20(1).jpg'),
  img('5a6ucnntgvnagzecv0b84fenugvj_shutterstock_1068884744.jpg'),
  img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
  img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('z7kb0dcgq1zn0kla57iv7ayde16p_shutterstock_326368451%20(1).jpg'),
  img('nzx87a4ujs33x8q3rqm7ghp3v0wq_shutterstock_2089661800.jpg'),
  img('jgu08hrluppvxe4t9rc7c73me79v_shutterstock_720095884.jpg'),
  img('smpxv0pxmctv0e8cy1e2qpydxgue_shutterstock_335434616.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kandy',
    dayLabel: 'Day 1 to 2',
    images: [
      img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
      img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
      img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
      img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg')
    ],
    dayImages: {
      1: [
        img('o25sbw3pew7ol1rdvvoic4vozxxx_shutterstock_162937874.jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('nzx87a4ujs33x8q3rqm7ghp3v0wq_shutterstock_2089661800.jpg'),
        img('bzipbrb2n2qtorqi86v6rqh6caom_shutterstock_776788195.jpg')
      ],
      2: [
        img('jgu08hrluppvxe4t9rc7c73me79v_shutterstock_720095884.jpg'),
        img('q5mg4s7atcnsscxcoxgfnysmzyiy_download.jpg'),
        img('smpxv0pxmctv0e8cy1e2qpydxgue_shutterstock_335434616.jpg'),
        img('b14m75op1m07swbrru2fqbc31lfh_7006860454_cec45734cb_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Kandy`,
      'Arrival at Bandaranaike International and private transfer inland',
      'A stop at the Pinnawala elephant sanctuary on the way',
      'Check in above Kandy and a circuit of the lake',
      'The Kandyan dance performance in the evening',
      `${DAY_MARK}Day 2 · The Tooth Relic and Sigiriya`,
      'Breakfast, then the Temple of the Sacred Tooth Relic',
      'A transfer north to the rock fortress',
      'The water gardens, the mirror wall and the summit ruins',
      'Back to Kandy for the night'
    ],
    accommodation: {
      name: 'Hotel Topaz, Kandy',
      description: '2 nights · Breakfast · Standard room · 3★ · Hilltop hotel with a pool looking down on Kandy',
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
        name: 'Pinnawala and Kandy sightseeing',
        day: 1,
        optional: false,
        image: img('o25sbw3pew7ol1rdvvoic4vozxxx_shutterstock_162937874.jpg'),
        description: 'The elephant sanctuary on the way up, then a circuit of the lake and the Kandyan dance performance.'
      },
      {
        name: 'Tooth Relic temple and excursion to Sigiriya',
        day: 2,
        optional: false,
        image: img('smpxv0pxmctv0e8cy1e2qpydxgue_shutterstock_335434616.jpg'),
        description: 'The Temple of the Sacred Tooth Relic in the morning, then the climb to the summit of the rock fortress.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'Two nights above Kandy with the elephants and a city tour on the first day, then the Tooth Relic temple and a day at Sigiriya.',
      image: img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Nuwara Eliya',
    dayLabel: 'Day 3',
    images: [
      img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg'),
      img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg'),
      img('oewqep60satxoqa8xc1sg0uolit2_shutterstock_159551120.jpg'),
      img('nblwv1u3cze5qug1glqs5ltuux5m_shutterstock_776788237%20(1).jpg')
    ],
    dayImages: {
      3: [
        img('psvmf56ffbbd733snkm0rrpy875m_shutterstock_776788267.jpg'),
        img('6pvkpwhgaavzl1u5wodhr0op4yvm_e9.jpg'),
        img('40nb5hucflisrfo2q4zxmszxx4we_shutterstock_717678922.jpg'),
        img('pbmekt55cowonhomw3quj8cyl7f7_download.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Into the tea country`,
      'Breakfast and a transfer up to Nuwara Eliya',
      'Gregory Lake, Victoria Park and the colonial town',
      'A tea estate and factory visit',
      'Check in and an evening by the lake'
    ],
    accommodation: {
      name: 'Ashford, Nuwara Eliya',
      description: '1 night · Breakfast · Standard room · 3★ · Standard class hill country hotel close to Gregory Lake',
      images: [
        img('6fctscyph0r112e1oz2mwre360nm_hotel-ashford%20(1).jpg'),
        img('78g4krvobuko3zoecce7knuzk0ju_our-apartments.jpg'),
        img('dehdt7v2g6uomxb6fa0rkvv15ouo_8253af33_z.webp'),
        img('a1aztvujx55986enuscv62u9il3o_hotel-ashford%20(2).jpg'),
        img('lldz9kthwivcyuy01uq1fxhj0nj9_hotel-ashford.jpg'),
        img('bztt1dv04nrn5bbt31vuh3l5ei4i_apartments.jpg'),
        img('obqfy5horbnt1d6p6d2qprkwrdje_pixelcut-export%20(1).jpeg'),
        img('od9eex4l35d3qgeu6nw50na60rt0_pixelcut-export%20(2).jpeg'),
        img('enh84hcepjyq94yaivpo2za3dybb_hotel-ashford%20(3).jpg'),
        img('hj17nog5l5btkqtwduzwfa497awv_pixelcut-export.jpeg')
      ]
    },
    activities: [
      {
        name: 'Sightseeing tour of Nuwara Eliya',
        day: 3,
        optional: false,
        image: img('psvmf56ffbbd733snkm0rrpy875m_shutterstock_776788267.jpg'),
        description: 'Gregory Lake, Victoria Park, a tea estate and the colonial post office of Little England.'
      }
    ],
    program: {
      name: 'Nuwara Eliya',
      description: 'Up into the tea country for a night by Gregory Lake with a tour of the town, the gardens and the estates.',
      image: img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Ella',
    dayLabel: 'Day 4',
    images: [
      img('s62wq89cqt0wq5tc8nqh6ek2vmwd_shutterstock_1084348016.jpg'),
      img('qt39padrr5ywwsekasuhvvyc16uk_shutterstock_573507811.jpg'),
      img('6w51ui6a9g0e0o0hrf84kt4s1a7x_shutterstock_2335215109.jpg'),
      img('rlnt7wwjqxlik4vgth13o4lznk2u_shutterstock_1019478988.jpg')
    ],
    dayImages: {
      4: [
        img('pct1kzc2i7v6vymsgjj1jsxy09xc_shutterstock_575601034.jpg'),
        img('gmm3njjf2khe52zxw7fr22har9vo_Cave%20Temple%20at%20Ravana%20Cave-1.jpg'),
        img('2savslqttnv97qfpf1tj844w79h8_1562140378_shutterstock_742121953.jpg'),
        img('igt0ab0o1cmy2faenxk3yh98o9sm_1562141217_shutterstock_618561041.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · On to Ella`,
      'Breakfast and a scenic transfer through the estates',
      'The Ravana caves and Ravana Falls',
      'The Nine Arches Bridge and Little Adams Peak',
      'The evening free in the cafes of Ella'
    ],
    accommodation: {
      name: 'Onestar Ella, Ella',
      description: '1 night · Breakfast · Standard room · 3★ · Small hotel on the slopes above Ella town',
      images: [
        img('eqa4ry307kak49fcdf30k30sqhsg_Ella%20Hotel-2.webp'),
        img('74uyqmrxdtlxt8wl46ycdiw8c5ds_Ella%20Hotel-5.jpg'),
        img('9x8z6hmz3yhhk9w5wavxj37zcdao_Ella%20Hotel-4.jpg'),
        img('kimpslz3pyy2nz5ndfft67iras6l_Ella%20Hotel-3.jpg'),
        img('eaufjkjct1r3go3dq10q8g7jw914_Ella%20Hotel-1.jpg')
      ]
    },
    activities: [
      {
        name: 'Sightseeing tour of Ella',
        day: 4,
        optional: false,
        image: img('pct1kzc2i7v6vymsgjj1jsxy09xc_shutterstock_575601034.jpg'),
        description: 'The Ravana caves and falls, Little Adams Peak and the Nine Arches Bridge.'
      }
    ],
    program: {
      name: 'Ella',
      description: 'A night in Ella with the Ravana caves, the falls and the Nine Arches Bridge.',
      image: img('s62wq89cqt0wq5tc8nqh6ek2vmwd_shutterstock_1084348016.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Bentota',
    dayLabel: 'Day 5',
    images: [
      img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
      img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
      img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg'),
      img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg')
    ],
    dayImages: {
      5: [
        img('wmfbav5m3rbxhgbkb7pyv30nxeng_shutterstock_606791012.jpg'),
        img('2kyg08hfs2xevolr6axgk0fpxg9d_download.jpg'),
        img('zc6sbv9y1gr3m8pfel64m74h8kfz_shutterstock_1503294815.jpg'),
        img('j9ihksikdmyuvk7gjzwywg9owo0t_shutterstock_1486172417.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Down to the coast`,
      'Breakfast and a long transfer down to Bentota',
      'The Kosgoda turtle hatchery and the fish pedicure centre',
      'Check in on the beachfront',
      'Sunset on the sand'
    ],
    accommodation: {
      name: 'Marina Bentota, Bentota',
      description: '1 night · Breakfast · Standard room · 3★ · Beachfront hotel on the Bentota strip',
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
        day: 5,
        optional: false,
        image: img('wmfbav5m3rbxhgbkb7pyv30nxeng_shutterstock_606791012.jpg'),
        description: 'The Kosgoda turtle hatchery, the fish pedicure centre and the Bentota river mouth.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'Down to the coast for a night on the beach with the turtle hatchery and fish spa.',
      image: img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Colombo',
    dayLabel: 'Day 6 to 7',
    images: [
      img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
      img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
      img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
      img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg')
    ],
    dayImages: {
      6: [
        img('f3r28fv7t388t0d9hv98g7mb7pb8_shutterstock_1707985711.jpg'),
        img('kmwpt2e6q1n3i7gsabo6lmkqfqbg_1581756612_shutterstock_1444012382.jpg'),
        img('edebch9ab0151aed4gkqgg10gzed_6594800755_0fced73026_o.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
      ],
      7: [
        img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
        img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
        img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
        img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Colombo city tour`,
      'Breakfast and a transfer up the coast to Colombo',
      'Galle Face Green and the Gangaramaya temple complex',
      'The Fort district, the Lotus Tower and Pettah market',
      'Your last night in the capital',
      `${DAY_MARK}Day 7 · Departure from Colombo`,
      'Breakfast at the hotel and check out',
      'Private transfer to Bandaranaike International for your flight home'
    ],
    accommodation: {
      name: 'Marine Bay, Colombo',
      description: '1 night · Breakfast · Standard room · 3★ · City hotel a short walk from Galle Face Green',
      images: [
        img('8txcjwxxdspxgpn7p0kuhhlrwvnk_Marine6.jpeg'),
        img('9xn6njie3t3geva5n7l01ik6m6m6_Marine7.jpeg'),
        img('u6iafq8ex6zijlg4b7bgru58q5w3_Marine4.jpeg'),
        img('s4efaq9cjmvpcc073gegj65bak82_Marine8.jpeg'),
        img('h7ji8xax40o5hilnnqodtbvv4k5x_Marine5.jpeg'),
        img('atomh8uas9n9mlk6nmmeh0ftc2hl_Marine3.jpeg'),
        img('dn1q2zxemr2v9idwoabeez5qfmy3_Marine1.jpeg'),
        img('a4ik4sq1rmbwmwwgeh5l9lxscd69_Marine2.jpeg')
      ]
    },
    activities: [
      {
        name: 'Colombo sightseeing tour',
        day: 6,
        optional: false,
        image: img('f3r28fv7t388t0d9hv98g7mb7pb8_shutterstock_1707985711.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and the floating market at Pettah.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A last night in the capital with a tour of its temples, colonial quarter and markets.',
      image: img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg')
    }
  }
];

const detail = {
  slug: 'sri-lanka-with-sigiriya-and-ella-kandy-to-bentota-in-seven-days',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Sri Lanka with Sigiriya and Ella: Kandy to Bentota in Seven Days',
  alt: 'Ravana Falls tumbling beside the road near Ella',
  days: '7 days / 6 nights',
  stations: '5 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Nature',
  tags: ['Nature', 'Culture', 'Budget'],
  price: 31350,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kandy', 'Nuwara Eliya', 'Ella', 'Bentota', 'Colombo'],
  stats: { days: 7, cities: 5, hotels: 5, activities: 6, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['6 meals', 'Meals'],
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
  short: 'Seven days from the hills to the sea on a sensible budget: two nights in Kandy with Sigiriya and the dance show, a night each in the tea country and in Ella, a night on the beach at Bentota with the turtles, and a last night in Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights in deluxe class hotels with breakfast daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; the Pinnawala elephant sanctuary and Kandy sightseeing; the upper lake drive and Kandyan dance performance; the Tooth Relic temple and an excursion to Sigiriya; sightseeing tours of Nuwara Eliya and Ella; Bentota sightseeing with the turtle hatchery and fish spa; the Colombo sightseeing tour.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches and dinners; entrance tickets; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Kandy (None)', text: 'Arrival at Bandaranaike International and private transfer inland\nA stop at the Pinnawala elephant sanctuary on the way\nCheck in above Kandy and a circuit of the lake\nThe Kandyan dance performance in the evening', hotel: 'Hotel Topaz, Kandy', highlights: ['Arrival at Bandaranaike International and private transfer inland', 'A stop at the Pinnawala elephant sanctuary on the way', 'Check in above Kandy and a circuit of the lake'] },
    { title: 'Day 2: The Tooth Relic and Sigiriya (B)', text: 'Breakfast, then the Temple of the Sacred Tooth Relic\nA transfer north to the rock fortress\nThe water gardens, the mirror wall and the summit ruins\nBack to Kandy for the night', hotel: 'Hotel Topaz, Kandy', highlights: ['Breakfast, then the Temple of the Sacred Tooth Relic', 'A transfer north to the rock fortress', 'The water gardens, the mirror wall and the summit ruins'] },
    { title: 'Day 3: Into the tea country (B)', text: 'Breakfast and a transfer up to Nuwara Eliya\nGregory Lake, Victoria Park and the colonial town\nA tea estate and factory visit\nCheck in and an evening by the lake', hotel: 'Ashford Nuwara Eliya', highlights: ['Breakfast and a transfer up to Nuwara Eliya', 'Gregory Lake, Victoria Park and the colonial town', 'A tea estate and factory visit'] },
    { title: 'Day 4: On to Ella (B)', text: 'Breakfast and a scenic transfer through the estates\nThe Ravana caves and Ravana Falls\nThe Nine Arches Bridge and Little Adams Peak\nThe evening free in the cafes of Ella', hotel: 'Onestar Ella', highlights: ['Breakfast and a scenic transfer through the estates', 'The Ravana caves and Ravana Falls', 'The Nine Arches Bridge and Little Adams Peak'] },
    { title: 'Day 5: Down to the coast (B)', text: 'Breakfast and a long transfer down to Bentota\nThe Kosgoda turtle hatchery and the fish pedicure centre\nCheck in on the beachfront\nSunset on the sand', hotel: 'Marina Bentota', highlights: ['Breakfast and a long transfer down to Bentota', 'The Kosgoda turtle hatchery and the fish pedicure centre', 'Check in on the beachfront'] },
    { title: 'Day 6: Colombo city tour (B)', text: 'Breakfast and a transfer up the coast to Colombo\nGalle Face Green and the Gangaramaya temple complex\nThe Fort district, the Lotus Tower and Pettah market\nYour last night in the capital', hotel: 'Marine Bay Colombo', highlights: ['Breakfast and a transfer up the coast to Colombo', 'Galle Face Green and the Gangaramaya temple complex', 'The Fort district, the Lotus Tower and Pettah market'] },
    { title: 'Day 7: Departure from Colombo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; lunches and dinners; entrance tickets; travel insurance; optional excursions; tips and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const sriLankaSigiriyaEllaBentotaSevenDaysBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const sriLankaSigiriyaEllaBentotaSevenDaysProduct = {
  slug: detail.slug,
  places: ['Kandy', 'Nuwara Eliya', 'Ella', 'Bentota', 'Colombo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 6,
  transfers: 9,
  meals: 6,
  price: detail.price,
  images: cardImages
};
