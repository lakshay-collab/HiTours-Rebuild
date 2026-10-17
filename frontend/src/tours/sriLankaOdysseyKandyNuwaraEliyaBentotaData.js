// Sri Lanka Odyssey: Kandy, Nuwara Eliya and Bentota in Eight Days. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg'),
  img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg'),
  img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
  img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
  img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg'),
  img('8pngc3kvspg8528bwbrbu6t8b5gz_shutterstock_1423148210.jpg'),
  img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg'),
  img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
  img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
  img('nblwv1u3cze5qug1glqs5ltuux5m_shutterstock_776788237%20(1).jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
  img('jwahopgv9fsvh8gjlol5do9rokor_shutterstock_462253891%20(2).jpg'),
  img('ucwaqjt3j5pciuqx3xon5tev5f9c_shutterstock_1242900094.jpg'),
  img('3giw647mur4p358tubasckhamsff_kandy-lake-kandy-city-aerial-panoramic-view-from-arthur-s-seat-kandy-city-viewpoint-sri-lanka_78361-9905.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kandy',
    dayLabel: 'Day 1 to 2',
    images: [
      img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg'),
      img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
      img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
      img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg')
    ],
    dayImages: {
      1: [
        img('jwahopgv9fsvh8gjlol5do9rokor_shutterstock_462253891%20(2).jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('ucwaqjt3j5pciuqx3xon5tev5f9c_shutterstock_1242900094.jpg'),
        img('3giw647mur4p358tubasckhamsff_kandy-lake-kandy-city-aerial-panoramic-view-from-arthur-s-seat-kandy-city-viewpoint-sri-lanka_78361-9905.jpg')
      ],
      2: [
        img('ry03mbjm84fb8lzno92g0zx48m72_shutterstock_177520130.jpg'),
        img('lwpeikpgx4vdu6dk38px2r3ugcv3_16592880909_c7e7d0a676_o.jpg'),
        img('8a24q1ikapfi8iwos41hza4dr513_caption%20(3).jpg'),
        img('q5mg4s7atcnsscxcoxgfnysmzyiy_download.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Kandy`,
      'Arrival at Bandaranaike International and private transfer inland',
      'A stop at the Pinnawala elephant sanctuary on the way',
      'Check in above the Kandy valley',
      'The upper lake drive and the Kandyan dance performance',
      `${DAY_MARK}Day 2 · Kandy and a tea estate`,
      'Breakfast, then the Temple of the Sacred Tooth Relic',
      'The Peradeniya Royal Botanical Gardens',
      'A tea plantation and factory above the town',
      'The evening free in the lakeside bazaars'
    ],
    accommodation: {
      name: 'Skyloft, Kandy',
      description: '2 nights · Breakfast · Deluxe room · 3★ · Deluxe class hotel with views over the Kandy valley',
      images: [
        img('g4qy62voxvnmp2baolq1johj9gjy_185291945.jpg'),
        img('ewl1y3v6h30d8ii4mp92dd0d89ww_518480894.jpg'),
        img('1cl83mmfaazz19eohw9cgmu1xmb8_349059406.jpg'),
        img('vwd731a3b5ex42dsuebwcz5215ur_349060691.jpg'),
        img('y9hau9c34sn3ryikfg02d52hi95w_349059422.jpg'),
        img('5rnvd2biflwofo4sk1ngi91qbz61_348607554.jpg'),
        img('v0gxe4ai8ws20zy29e3vzwp3jjhm_348609806.jpg'),
        img('iavkzlkuoql8mh4uu3kxy86nnfd5_skyloft-kandy-by-yathra%20(2).jpg'),
        img('mxjdm683xc4309oon3lub52o5dhl_349059413.jpg'),
        img('m9iffr5u4emz9iciwlr7cedocp0y_89639081.jpg'),
        img('9v3v9v19nbe2jwn2gqcie7xisy52_270511848.jpg'),
        img('74nqssy8b77ap1thrtvgbnr5090o_348609803.jpg'),
        img('275l3fzov9a0d7x99yantrpryaya_skyloft-kandy-by-yathra%20(1).jpg'),
        img('p8aqeh0fg6j8srzvmbqzn8nfwj1z_skyloft-kandy-by-yathra.jpg')
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
      },
      {
        name: 'Kandy sightseeing and a tea plantation',
        day: 2,
        optional: false,
        image: img('ry03mbjm84fb8lzno92g0zx48m72_shutterstock_177520130.jpg'),
        description: 'The Temple of the Sacred Tooth Relic, the Peradeniya gardens and a tea plantation and factory above the town.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'Two nights above the Kandy valley with the elephants on the way in, the upper lake drive and dance show, and a day of the city and a tea estate.',
      image: img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg')
    }
  },
  {
    letter: 'B',
    name: 'Nuwara Eliya',
    dayLabel: 'Day 3 to 4',
    images: [
      img('z7kb0dcgq1zn0kla57iv7ayde16p_shutterstock_326368451%20(1).jpg'),
      img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg'),
      img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg'),
      img('oewqep60satxoqa8xc1sg0uolit2_shutterstock_159551120.jpg')
    ],
    dayImages: {
      3: [
        img('ii90an3cam19hnykg7iw85qxesa1_shutterstock_776788237.jpg'),
        img('jsambpnfrs1lp76ursho1dz64wnj_5e.jpg'),
        img('pbmekt55cowonhomw3quj8cyl7f7_download.jpg'),
        img('wzqw02ope6gs0imna002q9au7guc_db.jpg')
      ],
      4: [
        img('nrgae3mixs7vfbb5g6h1t0kqxxwf_shutterstock_796990585%20(1).jpg'),
        img('c5d5akjf4ek0zsuldrgeqqwpvx4h_5821411770_f564d81e3a_b.jpg'),
        img('6upo74208pk22ejwy6dpssckyjdn_Depositphotos_158390642_s-2019.png'),
        img('6zz6vsdj3pj13sq4bfhvux1rletf_51909332583_f389770cb9_b.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Up to Nuwara Eliya`,
      'Breakfast and a transfer into the tea country',
      'A plantation stop and tasting among the terraces',
      'Check in close to Gregory Lake',
      'An evening walk through Little England',
      `${DAY_MARK}Day 4 · Nuwara Eliya sightseeing`,
      'Breakfast, then Ramboda Falls and a tea factory',
      'Gregory Lake, Victoria Park and the Hakgala gardens',
      'The Seetha Amman temple of the Ramayana trail',
      'Optional: a round of golf on the colonial course'
    ],
    accommodation: {
      name: 'Ashford, Nuwara Eliya',
      description: '2 nights · Breakfast · Standard room · 3★ · Standard class hill country hotel close to Gregory Lake',
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
        name: 'Tea plantation on the way to Nuwara Eliya',
        day: 3,
        optional: false,
        image: img('8a24q1ikapfi8iwos41hza4dr513_caption%20(3).jpg'),
        description: 'A stop among the terraces for a factory tour and a tasting on the climb into the hills.'
      },
      {
        name: 'Nuwara Eliya sightseeing tour',
        day: 4,
        optional: false,
        image: img('ii90an3cam19hnykg7iw85qxesa1_shutterstock_776788237.jpg'),
        description: 'Ramboda Falls, a working tea estate and factory, Gregory Lake, Victoria Park, Hakgala gardens and the Seetha Amman temple.'
      }
    ],
    program: {
      name: 'Nuwara Eliya',
      description: 'Two unhurried nights in the tea country with the estates on the way up and a full day of the town, its lake, gardens and waterfalls.',
      image: img('z7kb0dcgq1zn0kla57iv7ayde16p_shutterstock_326368451%20(1).jpg')
    }
  },
  {
    letter: 'C',
    name: 'Bentota',
    dayLabel: 'Day 5 to 6',
    images: [
      img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg'),
      img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
      img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
      img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg')
    ],
    dayImages: {
      5: [
        img('e07o8jhea12si2mf74xe84u2wmoj_shutterstock_1503294833.jpg'),
        img('2kyg08hfs2xevolr6axgk0fpxg9d_download.jpg'),
        img('o56z18satpsv8p5xzsuh3n0sgnl6_shutterstock_1503294815.jpg'),
        img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg')
      ],
      6: [
        img('8p29norbmqjargd8w2pc9rptx4tx_shutterstock_1189825330.jpg'),
        img('z8pc6746uelxtxz5446rmvk51rki_flickr_cached_img_20b18d949dbd302f958b4aadfd6bf889_600x600.jpg'),
        img('0jupeicodadu5c4tbdd5s9lu0xv5_cinnamon-cultivation4.jpg'),
        img('burm4q2ooz7dp7yv5g8rnhscc6q9_dr-fish-spa-santhapeta-ongole-fish-spas-kd1gjee4jl.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Down to the coast`,
      'Breakfast and a long transfer down to Bentota',
      'Check in on the beachfront',
      'A late afternoon boat on the Madu River',
      'Dinner by the sea',
      `${DAY_MARK}Day 6 · Bentota sightseeing`,
      'Breakfast, then the Kosgoda turtle hatchery',
      'A cinnamon plantation and the fish pedicure centre',
      'The afternoon on Bentota beach',
      'Optional: water sports at the river mouth'
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
        name: 'Evening on the Madu River',
        day: 5,
        optional: false,
        image: img('e07o8jhea12si2mf74xe84u2wmoj_shutterstock_1503294833.jpg'),
        description: 'A late afternoon boat through the mangroves as the birds come home to roost.'
      },
      {
        name: 'Bentota sightseeing, cinnamon plantation and fish spa',
        day: 6,
        optional: false,
        image: img('8p29norbmqjargd8w2pc9rptx4tx_shutterstock_1189825330.jpg'),
        description: 'The turtle hatchery, a cinnamon plantation, the fish pedicure centre and the beach.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'Two nights on the beach with an evening on the Madu river and a day of Bentota, the cinnamon plantation and the fish spa.',
      image: img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Colombo',
    dayLabel: 'Day 7 to 8',
    images: [
      img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
      img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
      img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
      img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg')
    ],
    dayImages: {
      7: [
        img('dwxgjkih2pvxuqvo5mjjj5ve2yq0_shutterstock_1745929967.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg'),
        img('ultnijmbdeeqiwpsmjhn1ibw8ejr_shavin-peiries-ma8uiXknPnY-unsplash.jpg'),
        img('kmwpt2e6q1n3i7gsabo6lmkqfqbg_1581756612_shutterstock_1444012382.jpg')
      ],
      8: [
        img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
        img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
        img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
        img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Colombo and Pettah`,
      'Breakfast and a transfer up the coast to Colombo',
      'Galle Face Green and the Gangaramaya temple',
      'The Fort district and the market lanes of Pettah',
      'Your last night in the capital',
      `${DAY_MARK}Day 8 · Departure from Colombo`,
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
        name: 'Colombo sightseeing and Pettah',
        day: 7,
        optional: false,
        image: img('dwxgjkih2pvxuqvo5mjjj5ve2yq0_shutterstock_1745929967.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the Fort district and the market lanes of Pettah.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A final night in the Fort district with the sights of the capital and the Pettah bazaars.',
      image: img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg')
    }
  }
];

const detail = {
  slug: 'sri-lanka-odyssey-kandy-nuwara-eliya-and-bentota-in-eight-days',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Sri Lanka Odyssey: Kandy, Nuwara Eliya and Bentota in Eight Days',
  alt: 'Tea pickers at work on the slopes above Nuwara Eliya',
  days: '8 days / 7 nights',
  stations: '4 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Nature',
  tags: ['Nature', 'Culture', 'Beach'],
  price: 42275,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kandy', 'Nuwara Eliya', 'Bentota', 'Colombo'],
  stats: { days: 8, cities: 4, hotels: 4, activities: 8, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['8 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['7 meals', 'Meals'],
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
  short: 'Eight days at an easy pace: two nights each in Kandy, the tea country and on the beach at Bentota, with the elephants, the dance show, a tea estate, the Madu River and the cinnamon plantation along the way, then a last night in Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights in deluxe class hotels with breakfast daily (lunch or dinner also included in Nuwara Eliya); private airport transfers and all road travel in an air conditioned car with chauffeur guide; the Pinnawala elephant sanctuary; the upper lake drive and Kandyan dance performance; Kandy sightseeing and a tea plantation; Nuwara Eliya sightseeing; an evening on the Madu River; Bentota sightseeing with the cinnamon plantation and fish spa; Colombo sightseeing and Pettah.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Kandy (None)', text: 'Arrival at Bandaranaike International and private transfer inland\nA stop at the Pinnawala elephant sanctuary on the way\nCheck in above the Kandy valley\nThe upper lake drive and the Kandyan dance performance', hotel: 'Skyloft Kandy', highlights: ['Arrival at Bandaranaike International and private transfer inland', 'A stop at the Pinnawala elephant sanctuary on the way', 'Check in above the Kandy valley'] },
    { title: 'Day 2: Kandy and a tea estate (B)', text: 'Breakfast, then the Temple of the Sacred Tooth Relic\nThe Peradeniya Royal Botanical Gardens\nA tea plantation and factory above the town\nThe evening free in the lakeside bazaars', hotel: 'Skyloft Kandy', highlights: ['Breakfast, then the Temple of the Sacred Tooth Relic', 'The Peradeniya Royal Botanical Gardens', 'A tea plantation and factory above the town'] },
    { title: 'Day 3: Up to Nuwara Eliya (B)', text: 'Breakfast and a transfer into the tea country\nA plantation stop and tasting among the terraces\nCheck in close to Gregory Lake\nAn evening walk through Little England', hotel: 'Ashford Nuwara Eliya', highlights: ['Breakfast and a transfer into the tea country', 'A plantation stop and tasting among the terraces', 'Check in close to Gregory Lake'] },
    { title: 'Day 4: Nuwara Eliya sightseeing (B)', text: 'Breakfast, then Ramboda Falls and a tea factory\nGregory Lake, Victoria Park and the Hakgala gardens\nThe Seetha Amman temple of the Ramayana trail\nOptional: a round of golf on the colonial course', hotel: 'Ashford Nuwara Eliya', highlights: ['Breakfast, then Ramboda Falls and a tea factory', 'Gregory Lake, Victoria Park and the Hakgala gardens', 'The Seetha Amman temple of the Ramayana trail'] },
    { title: 'Day 5: Down to the coast (B)', text: 'Breakfast and a long transfer down to Bentota\nCheck in on the beachfront\nA late afternoon boat on the Madu River\nDinner by the sea', hotel: 'Marina Bentota', highlights: ['Breakfast and a long transfer down to Bentota', 'Check in on the beachfront', 'A late afternoon boat on the Madu River'] },
    { title: 'Day 6: Bentota sightseeing (B)', text: 'Breakfast, then the Kosgoda turtle hatchery\nA cinnamon plantation and the fish pedicure centre\nThe afternoon on Bentota beach\nOptional: water sports at the river mouth', hotel: 'Marina Bentota', highlights: ['Breakfast, then the Kosgoda turtle hatchery', 'A cinnamon plantation and the fish pedicure centre', 'The afternoon on Bentota beach'] },
    { title: 'Day 7: Colombo and Pettah (B)', text: 'Breakfast and a transfer up the coast to Colombo\nGalle Face Green and the Gangaramaya temple\nThe Fort district and the market lanes of Pettah\nYour last night in the capital', hotel: 'Fairway Colombo', highlights: ['Breakfast and a transfer up the coast to Colombo', 'Galle Face Green and the Gangaramaya temple', 'The Fort district and the market lanes of Pettah'] },
    { title: 'Day 8: Departure from Colombo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const sriLankaOdysseyKandyNuwaraEliyaBentotaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const sriLankaOdysseyKandyNuwaraEliyaBentotaProduct = {
  slug: detail.slug,
  places: ['Kandy', 'Nuwara Eliya', 'Bentota', 'Colombo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 8,
  transfers: 9,
  meals: 7,
  price: detail.price,
  images: cardImages
};
