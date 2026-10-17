// Highlights of Sri Lanka: Kandy, Nuwara Eliya, Yala and Bentota. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
  img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg'),
  img('e7329r7y7rxaon6tvrx1xinabucz_shutterstock_1012268899.jpg'),
  img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg'),
  img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
  img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
  img('z7kb0dcgq1zn0kla57iv7ayde16p_shutterstock_326368451%20(1).jpg'),
  img('yu048ids2rk6rycafask9o4qn4c7_shutterstock_513139585.jpg'),
  img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
  img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
  img('e7329r7y7rxaon6tvrx1xinabucz_shutterstock_1012268899.jpg'),
  img('yu048ids2rk6rycafask9o4qn4c7_shutterstock_513139585.jpg'),
  img('2ey4p2rt908ipw6om71pujkmseym_shutterstock_589428650.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kandy',
    dayLabel: 'Day 1',
    images: [
      img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
      img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
      img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
      img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg')
    ],
    dayImages: {
      1: [
        img('jwahopgv9fsvh8gjlol5do9rokor_shutterstock_462253891%20(2).jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('ucwaqjt3j5pciuqx3xon5tev5f9c_shutterstock_1242900094.jpg'),
        img('3giw647mur4p358tubasckhamsff_kandy-lake-kandy-city-aerial-panoramic-view-from-arthur-s-seat-kandy-city-viewpoint-sri-lanka_78361-9905.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Kandy`,
      'Arrival at Bandaranaike International and private transfer inland',
      'A stop at the Pinnawala elephant sanctuary on the way',
      'Check in above Kandy',
      'The upper lake drive and the Kandyan dance performance'
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
        name: 'Pinnawala Elephant Orphanage',
        day: 1,
        optional: false,
        image: img('jwahopgv9fsvh8gjlol5do9rokor_shutterstock_462253891%20(2).jpg'),
        description: 'A stop on the way up from the airport to watch the resident herd bathe in the Maha Oya river and feed at the sanctuary.'
      },
      {
        name: 'Upper lake drive and Kandyan dance performance',
        day: 1,
        optional: false,
        image: img('ucwaqjt3j5pciuqx3xon5tev5f9c_shutterstock_1242900094.jpg'),
        description: 'An evening circuit of the upper lake road, then the drummers, masked dancers and fire walkers.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'One night above Kandy with the elephants on the way and the upper lake drive and dance show.',
      image: img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Nuwara Eliya',
    dayLabel: 'Day 2',
    images: [
      img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg'),
      img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg'),
      img('oewqep60satxoqa8xc1sg0uolit2_shutterstock_159551120.jpg'),
      img('nblwv1u3cze5qug1glqs5ltuux5m_shutterstock_776788237%20(1).jpg')
    ],
    dayImages: {
      2: [
        img('0tvz088gdr99d287299b9ter983t_shutterstock_1097611139.jpg'),
        img('6pvkpwhgaavzl1u5wodhr0op4yvm_e9.jpg'),
        img('pbmekt55cowonhomw3quj8cyl7f7_download.jpg'),
        img('6upo74208pk22ejwy6dpssckyjdn_Depositphotos_158390642_s-2019.png')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Into the tea country`,
      'Breakfast and a transfer up to Nuwara Eliya',
      'Gregory Lake, Victoria Park and the colonial town',
      'A tea estate and factory visit',
      'Check in among the tea bushes'
    ],
    accommodation: {
      name: 'The Tea Garden, Nuwara Eliya',
      description: '1 night · Breakfast · Standard room · 3★ · Hill country hotel among the tea bushes above Nuwara Eliya',
      images: [
        img('wnrqjj1kgpsms3x3mo1i1f82q2jv_658823789.jpg'),
        img('madiz8p8q764vx4r6cjmlfley0y6_86496619.jpg'),
        img('k2x0tgqsws9eal2g9ukv23ia5kb7_86496613.jpg'),
        img('5k40h2hx9uc5rfccapv0zjerxu2z_86496610.jpg'),
        img('o6xeiimdpeaspmksnnmgv0ke40da_658823823.jpg'),
        img('wlzsbbru62qa5z1qa9zng3r4pjte_86496618.jpg'),
        img('r6xn7phppyiqphggmmgq3x2lt5ha_86496611.jpg'),
        img('h4yfgbo48moql2dtuuzrnepcpiha_86496606.jpg')
      ]
    },
    activities: [
      {
        name: 'Nuwara Eliya sightseeing tour',
        day: 2,
        optional: false,
        image: img('0tvz088gdr99d287299b9ter983t_shutterstock_1097611139.jpg'),
        description: 'Gregory Lake, Victoria Park, a tea estate and the colonial town.'
      }
    ],
    program: {
      name: 'Nuwara Eliya',
      description: 'Up into the tea country for a night among the bushes with a tour of the town, its lake and gardens.',
      image: img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Yala',
    dayLabel: 'Day 3',
    images: [
      img('2ey4p2rt908ipw6om71pujkmseym_shutterstock_589428650.jpg'),
      img('kg26v8ssn2abkku4hros6y87biin_shutterstock_701553847.jpg'),
      img('e7329r7y7rxaon6tvrx1xinabucz_shutterstock_1012268899.jpg'),
      img('v7gx2asuh5hqn57b2qghxihf5c87_shutterstock_1427710394.jpg')
    ],
    dayImages: {
      3: [
        img('ooo1pmwfldpraa2433xr48ppl5qd_shutterstock_1427710394.jpg'),
        img('4f1qsg5xbjo9prq4wzido0ex14hv_z0i7f9uqdcp3s3mv2wk6wd2q1b9v_shutterstock_726294346.webp'),
        img('zpwg24qr5rtd6807rdrbqo02d81b_Tourism_Yala_National_Park.jpg'),
        img('2ey4p2rt908ipw6om71pujkmseym_shutterstock_589428650.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Across to Yala and a jeep safari`,
      'Breakfast and a transfer down to the dry south east',
      'An afternoon 4x4 safari in Yala block one',
      'Leopards, elephants, crocodiles and peacocks at the waterholes',
      'Dinner and a night at the lodge on the park boundary'
    ],
    accommodation: {
      name: 'Arana Yala, Yala',
      description: '1 night · Breakfast and dinner · Deluxe room · 3★ · Deluxe class lodge on the edge of Yala National Park',
      images: [
        img('1g7oq6sr1wx3hs9wh2sp2559lxdj_sunsetting-over-arana.jpg'),
        img('piu22mtwyvh6z0ifodn7c054ljkr_download%20(9).jpg'),
        img('wwjgtzjjc8v7r5obhpg3t5zqcjgt_aerial-view-of-pool.jpg'),
        img('744jiowk7e5y87ve06o0z55i7pvf_download%20(2).jpg'),
        img('3b37gqgycxp3zamyc6s52uau96td_download%20(3).jpg'),
        img('e9zgw60m8sdexyvhlna0l6x8a6xb_download%20(1).jpg'),
        img('2aihwjctpgr2evgj1tsar59e96ux_download%20(4).jpg'),
        img('s8og72uzlbyl20gukdj2mfqe2aj8_deluxe-twin-room.jpg'),
        img('ug2n1xaeug70ws5oqnrbzosf7u3r_download.jpg')
      ]
    },
    activities: [
      {
        name: 'Jeep safari in Yala National Park',
        day: 3,
        optional: false,
        image: img('ooo1pmwfldpraa2433xr48ppl5qd_shutterstock_1427710394.jpg'),
        description: 'A 4x4 safari through the scrub jungle and lagoons of block one, home to leopards, sloth bears, elephants and crocodiles.'
      }
    ],
    program: {
      name: 'Yala',
      description: 'Across the hills to the dry south east for a jeep safari in Yala and a night on the edge of the park.',
      image: img('2ey4p2rt908ipw6om71pujkmseym_shutterstock_589428650.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Bentota',
    dayLabel: 'Day 4',
    images: [
      img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
      img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
      img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg'),
      img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg')
    ],
    dayImages: {
      4: [
        img('bpowz24za7kost45ya2qc31otjka_shutterstock_1189825330.jpg'),
        img('z8pc6746uelxtxz5446rmvk51rki_flickr_cached_img_20b18d949dbd302f958b4aadfd6bf889_600x600.jpg'),
        img('o8gcohdxn6l35zd64hiuxq8fvc6w_shutterstock_1503294815.jpg'),
        img('2kyg08hfs2xevolr6axgk0fpxg9d_download.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · To the beach`,
      'Breakfast and a transfer west along the southern coast',
      'The Kosgoda turtle hatchery',
      'Check in by the sea',
      'A late afternoon boat on the Madu River'
    ],
    accommodation: {
      name: 'Laya Beach, Bentota',
      description: '1 night · Breakfast · Standard room · 3★ · Beachfront hotel at Wadduwa on the way to Bentota',
      images: [
        img('cjonkt9ga9m8ejicgzs3jwkz9fz2_d01368b4_z.png'),
        img('uoub0u4dkxuxkhrkoxihleb1zs2e_cd46f354_z.png'),
        img('jdht879wjbtdd43yxvtm5gl5gll4_508118998.png'),
        img('ii54wo0kqef7gsbya9a0jcg3i5or_de4f9285_z.png'),
        img('w7u1zj9rk9jkn6a4vm5mmup4x0ov_e007a285_z.png'),
        img('gxp2x1bmvu8kne1i7xp9vb2gg5zh_c309adf0_z.png'),
        img('ma9r2lj70i4swt7fw5k8rra5la98_9e2c1e41_z.png'),
        img('pt8pmhk0lpcf72xg6lqfx4t67jwm_9bcac2e7_z.png'),
        img('tedb4ph64gvxhovb86j8wb60rmll_586408e8_z.png'),
        img('zg96i0qe51ltmkcq88robilk8ehb_6aee2531_z.png'),
        img('hhm0h1x1x4ib6c5adgxuv963gmcz_497116361.png'),
        img('9eeddkt0w075dhw3ovczi95e8h1o_6eaf2f23_z.png')
      ]
    },
    activities: [
      {
        name: 'Kosgoda turtle hatchery',
        day: 4,
        optional: false,
        image: img('bpowz24za7kost45ya2qc31otjka_shutterstock_1189825330.jpg'),
        description: 'The hatchery where eggs are protected and hatchlings released into the sea at dusk.'
      },
      {
        name: 'Evening on the Madu River',
        day: 4,
        optional: false,
        image: img('o8gcohdxn6l35zd64hiuxq8fvc6w_shutterstock_1503294815.jpg'),
        description: 'A late afternoon boat through the mangroves as the birds come home to roost.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'West along the coast for the turtle hatchery, an evening on the Madu River and a night by the sea.',
      image: img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Colombo',
    dayLabel: 'Day 5 to 6',
    images: [
      img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
      img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
      img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
      img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg')
    ],
    dayImages: {
      5: [
        img('dwxgjkih2pvxuqvo5mjjj5ve2yq0_shutterstock_1745929967.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg'),
        img('ultnijmbdeeqiwpsmjhn1ibw8ejr_shavin-peiries-ma8uiXknPnY-unsplash.jpg'),
        img('kmwpt2e6q1n3i7gsabo6lmkqfqbg_1581756612_shutterstock_1444012382.jpg')
      ],
      6: [
        img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
        img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
        img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
        img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Colombo and Pettah`,
      'Breakfast and a transfer up the coast to Colombo',
      'Galle Face Green and the Gangaramaya temple',
      'The Fort district and the market lanes of Pettah',
      'Your last night in the capital',
      `${DAY_MARK}Day 6 · Departure from Colombo`,
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
        name: 'Colombo sightseeing and Pettah',
        day: 5,
        optional: false,
        image: img('dwxgjkih2pvxuqvo5mjjj5ve2yq0_shutterstock_1745929967.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the Fort district and the market lanes of Pettah.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A last night in the capital with the sights of the city and the Pettah bazaars.',
      image: img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg')
    }
  }
];

const detail = {
  slug: 'highlights-of-sri-lanka-kandy-nuwara-eliya-yala-and-bentota',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Highlights of Sri Lanka: Kandy, Nuwara Eliya, Yala and Bentota',
  alt: 'Peacock displaying on the track in Yala National Park',
  days: '6 days / 5 nights',
  stations: '5 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide; 4x4 jeep for the Yala safari',
  tag: 'Wildlife',
  tags: ['Wildlife', 'Nature', 'Beach'],
  price: 35941,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kandy', 'Nuwara Eliya', 'Yala', 'Bentota', 'Colombo'],
  stats: { days: 6, cities: 5, hotels: 5, activities: 7, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aditya',
    image: '/experts/aditya.webp',
    role: 'Sri Lanka expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Yala at dawn is the single best morning you can have in Sri Lanka. Leopards are shy, but the elephants and peacocks never disappoint.',
    quoteMore: 'Wear neutral colours for the safari and keep the camera ready at the waterholes. The first hour after the gates open is when the cats move.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days that touch every side of the island: a night in Kandy with the elephants and the dance show, a night in the tea country, a jeep safari and a night at Yala, the turtles and the Madu River at Bentota, and a last night in Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights in deluxe class hotels with breakfast daily (dinner also at Yala); private airport transfers and all road travel in an air conditioned car with chauffeur guide; the Pinnawala elephant sanctuary; the upper lake drive and Kandyan dance performance; the Nuwara Eliya sightseeing tour; a jeep safari in Yala National Park; the Kosgoda turtle hatchery; an evening on the Madu River; Colombo sightseeing and Pettah.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; Yala park entrance ticket; lunches and dinners unless stated; entrance tickets elsewhere; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Kandy (None)', text: 'Arrival at Bandaranaike International and private transfer inland\nA stop at the Pinnawala elephant sanctuary on the way\nCheck in above Kandy\nThe upper lake drive and the Kandyan dance performance', hotel: 'Hotel Topaz, Kandy', highlights: ['Arrival at Bandaranaike International and private transfer inland', 'A stop at the Pinnawala elephant sanctuary on the way', 'Check in above Kandy'] },
    { title: 'Day 2: Into the tea country (B)', text: 'Breakfast and a transfer up to Nuwara Eliya\nGregory Lake, Victoria Park and the colonial town\nA tea estate and factory visit\nCheck in among the tea bushes', hotel: 'The Tea Garden', highlights: ['Breakfast and a transfer up to Nuwara Eliya', 'Gregory Lake, Victoria Park and the colonial town', 'A tea estate and factory visit'] },
    { title: 'Day 3: Across to Yala and a jeep safari (B, D)', text: 'Breakfast and a transfer down to the dry south east\nAn afternoon 4x4 safari in Yala block one\nLeopards, elephants, crocodiles and peacocks at the waterholes\nDinner and a night at the lodge on the park boundary', hotel: 'Arana Yala', highlights: ['Breakfast and a transfer down to the dry south east', 'An afternoon 4x4 safari in Yala block one', 'Leopards, elephants, crocodiles and peacocks at the waterholes'] },
    { title: 'Day 4: To the beach (B)', text: 'Breakfast and a transfer west along the southern coast\nThe Kosgoda turtle hatchery\nCheck in by the sea\nA late afternoon boat on the Madu River', hotel: 'Laya beach', highlights: ['Breakfast and a transfer west along the southern coast', 'The Kosgoda turtle hatchery', 'Check in by the sea'] },
    { title: 'Day 5: Colombo and Pettah (B)', text: 'Breakfast and a transfer up the coast to Colombo\nGalle Face Green and the Gangaramaya temple\nThe Fort district and the market lanes of Pettah\nYour last night in the capital', hotel: 'Marine Bay Colombo', highlights: ['Breakfast and a transfer up the coast to Colombo', 'Galle Face Green and the Gangaramaya temple', 'The Fort district and the market lanes of Pettah'] },
    { title: 'Day 6: Departure from Colombo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; Yala park entrance ticket; lunches and dinners unless stated; entrance tickets elsewhere; travel insurance; optional excursions; tips and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const highlightsOfSriLankaKandyYalaBentotaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const highlightsOfSriLankaKandyYalaBentotaProduct = {
  slug: detail.slug,
  places: ['Kandy', 'Nuwara Eliya', 'Yala', 'Bentota', 'Colombo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 7,
  transfers: 8,
  meals: 5,
  price: detail.price,
  images: cardImages
};
