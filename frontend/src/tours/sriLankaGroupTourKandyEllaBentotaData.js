// Sri Lanka Group Tour: Kandy, the Ella Train and Bentota. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg'),
  img('ehxgq7xsvpq2xfzcpi1774ppfjgw_shutterstock_1019478988.jpg'),
  img('s62wq89cqt0wq5tc8nqh6ek2vmwd_shutterstock_1084348016.jpg'),
  img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
  img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
  img('nblwv1u3cze5qug1glqs5ltuux5m_shutterstock_776788237%20(1).jpg'),
  img('qt39padrr5ywwsekasuhvvyc16uk_shutterstock_573507811.jpg'),
  img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
  img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
  img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg'),
  img('s62wq89cqt0wq5tc8nqh6ek2vmwd_shutterstock_1084348016.jpg'),
  img('qt39padrr5ywwsekasuhvvyc16uk_shutterstock_573507811.jpg'),
  img('rlnt7wwjqxlik4vgth13o4lznk2u_shutterstock_1019478988.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kandy',
    dayLabel: 'Day 1',
    images: [
      img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg'),
      img('ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg'),
      img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg'),
      img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg')
    ],
    dayImages: {
      1: [
        img('b5zs6ml9qtlhkpkwczq6qjf6a70e_Downpic.cc-image737531433.jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('q5mg4s7atcnsscxcoxgfnysmzyiy_download.jpg'),
        img('1wyunidruf3wxvvymgaw9c1upydj_peradeniya-botanical-gardens-sri-lanka.webp')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Kandy`,
      'Arrival at Bandaranaike International and a shared transfer inland',
      'Meet your group and the Pinnawala elephants on the way',
      'The Temple of the Sacred Tooth Relic and a circuit of the lake',
      'Check in above the lake and dinner with the group'
    ],
    accommodation: {
      name: 'Swiss Residence, Kandy',
      description: '1 night · Breakfast and dinner · Standard room · 4★ · Four star hotel on the hill above Kandy lake',
      images: [
        img('nian8txqvp3qz8j3fkybyl4wgzzc_swiss-residence%20(7).jpg'),
        img('33i01f78zclebuhiawtntnhflfpx_117520615.jpg'),
        img('2537aoty0j1qkao5ia3ttayw0lb3_11252021_644883898944620_4901805954631071487_o.jpg'),
        img('9nz3rx75o8lev7sucs4pdd31x0th_swiss-residence%20(3).jpg'),
        img('lcdgl0wk3m9ftw9pjmd2c4k0uwcq_343046616.jpg'),
        img('ksabwlms08yxvco9qbupfuz4fekh_371117035_783743797087655_2563606144139843606_n.jpg'),
        img('8ztm2aafabwxg0ca91gh83ziihrs_swiss-residence%20(1).jpg'),
        img('xffymvamz90vnwny603o8vzfrjnu_swiss-residence%20(4).jpg'),
        img('ekcl9mydawfmm2szo6bq0x3ndks8_swiss-residence.jpg'),
        img('cpyg41q9ccr1eoagtfkeg3hmoiyv_79822288.jpg'),
        img('eeyffxgz6nyi6rrmgtpjp1pivsvb_swiss-residence%20(5).jpg'),
        img('gdqzap7arhdwhs1w2hewyw0k7770_swiss-residence%20(6).jpg')
      ]
    },
    activities: [
      {
        name: 'Pinnawala and Kandy sightseeing with the group',
        day: 1,
        optional: false,
        image: img('b5zs6ml9qtlhkpkwczq6qjf6a70e_Downpic.cc-image737531433.jpg'),
        description: 'The elephant sanctuary on the way up, then the Temple of the Sacred Tooth Relic and a circuit of the lake.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'Meet the group at the airport and head for the hills with the elephants on the way and Kandy in the afternoon.',
      image: img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Nuwara Eliya',
    dayLabel: 'Day 2',
    images: [
      img('8pngc3kvspg8528bwbrbu6t8b5gz_shutterstock_1423148210.jpg'),
      img('ehxgq7xsvpq2xfzcpi1774ppfjgw_shutterstock_1019478988.jpg'),
      img('z7kb0dcgq1zn0kla57iv7ayde16p_shutterstock_326368451%20(1).jpg'),
      img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg')
    ],
    dayImages: {
      2: [
        img('gk31n6yz1vzacddji3zhfxqlg953_images.jpg'),
        img('6upo74208pk22ejwy6dpssckyjdn_Depositphotos_158390642_s-2019.png'),
        img('c5d5akjf4ek0zsuldrgeqqwpvx4h_5821411770_f564d81e3a_b.jpg'),
        img('6zz6vsdj3pj13sq4bfhvux1rletf_51909332583_f389770cb9_b.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Into the hill country`,
      'Breakfast and a shared transfer up to Nuwara Eliya',
      'Ramboda Falls and a tea estate and factory',
      'Gregory Lake and the colonial town',
      'Dinner in Little England'
    ],
    accommodation: {
      name: 'Ashford, Nuwara Eliya',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Standard class hill country hotel close to Gregory Lake',
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
        name: 'Hill country highlights on the way to Nuwara Eliya',
        day: 2,
        optional: false,
        image: img('gk31n6yz1vzacddji3zhfxqlg953_images.jpg'),
        description: 'Ramboda Falls, a tea estate and factory, Gregory Lake and the colonial town.'
      }
    ],
    program: {
      name: 'Nuwara Eliya',
      description: 'A shared transfer into the tea country with the waterfalls and estates of the hill road.',
      image: img('8pngc3kvspg8528bwbrbu6t8b5gz_shutterstock_1423148210.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Ella',
    dayLabel: 'Day 3',
    images: [
      img('rlnt7wwjqxlik4vgth13o4lznk2u_shutterstock_1019478988.jpg'),
      img('5a6ucnntgvnagzecv0b84fenugvj_shutterstock_1068884744.jpg'),
      img('s62wq89cqt0wq5tc8nqh6ek2vmwd_shutterstock_1084348016.jpg'),
      img('qt39padrr5ywwsekasuhvvyc16uk_shutterstock_573507811.jpg')
    ],
    dayImages: {
      3: [
        img('b7aakwmxs8vsio6e1hxflw08xt9o_Nuwara%20Eliya%20to%20Ella-4.jpg'),
        img('2savslqttnv97qfpf1tj844w79h8_1562140378_shutterstock_742121953.jpg'),
        img('0ozx3cdbitnd4t9lbduzgmgtkibd_Ravana%20Falls-1.jpg'),
        img('igt0ab0o1cmy2faenxk3yh98o9sm_1562141217_shutterstock_618561041.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · The train to Ella`,
      'Breakfast and a transfer to Nanu Oya station',
      'The hill train through the tea terraces to Ella',
      'The Ravana cave and Ravana Falls',
      'Dinner with views down the Ella gap'
    ],
    accommodation: {
      name: '88th Ella Hotel, Ella',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Hotel with views down the Ella gap',
      images: [
        img('i7w3lajhiz3b1ukbir4l25peet1r_490885782.jpg'),
        img('pa0p6uuy0lwckelgeu5a2vtikqu7_490888295.jpg'),
        img('d825dyixv1uasbjdytuz5c4ogzje_245387152.jpg'),
        img('7zoskjv96s213qd9olzb6bq1krit_245386299.jpg'),
        img('7uvmia4kapz458506h39t2h41z6k_245386292.jpg'),
        img('ysn0v4m71tkcb5yeqvwyfiasphpe_245386393.jpg'),
        img('awyjwc08qgrx2zr0hgc02j2tchby_490885822.jpg'),
        img('bo4ohmisjyxnbzcgx0tz87ssqcr8_246888650.jpg'),
        img('2aikzpy9dfm1nkzp0x0qscodoq9v_490885784.jpg')
      ]
    },
    activities: [
      {
        name: 'Train journey from Nuwara Eliya to Ella',
        day: 3,
        optional: false,
        image: img('b7aakwmxs8vsio6e1hxflw08xt9o_Nuwara%20Eliya%20to%20Ella-4.jpg'),
        description: 'Second class reserved seats on the slow train through the tea terraces to Ella.'
      },
      {
        name: 'Ella sightseeing: Ravana cave and falls',
        day: 3,
        optional: false,
        image: img('0ozx3cdbitnd4t9lbduzgmgtkibd_Ravana%20Falls-1.jpg'),
        description: 'The Ravana cave above the town and the wide roadside waterfall of the legend.'
      }
    ],
    program: {
      name: 'Ella',
      description: 'The famous hill train to Ella, then the Ravana caves and falls.',
      image: img('rlnt7wwjqxlik4vgth13o4lznk2u_shutterstock_1019478988.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Bentota',
    dayLabel: 'Day 4 to 6',
    images: [
      img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
      img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg'),
      img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg'),
      img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg')
    ],
    dayImages: {
      4: [
        img('mgac8tj98vp4u6p3vv4acwiwsebh_22859730893_159b5dee46_b.jpg'),
        img('e62oezf8kqr0u5yo78hge033bocn_Galapata%20Vihara.jpg'),
        img('2g53t00i6jttr6n7je1fq6jzqc9a_Frontyard_.jpg'),
        img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg')
      ],
      5: [
        img('2rc5rwalxe5r94jhd04536n46gia_Downpic.cc-image223366904.jpg'),
        img('2kyg08hfs2xevolr6axgk0fpxg9d_download.jpg'),
        img('zyq48bsrr7i30js9euxtlv32tois_Downpic.cc-image711582176.jpg'),
        img('47posvxkcp05nmgl93qebrmkxo77_Downpic.cc-image480276613.jpg')
      ],
      6: [
        img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
        img('nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg'),
        img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg'),
        img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Down to the beach`,
      'Breakfast and a long transfer from the hills to the coast',
      'Check in at your beachfront hotel',
      'The afternoon free on the sand',
      'Dinner with the group',
      `${DAY_MARK}Day 5 · Madu River, water sports and turtles`,
      'Breakfast, then a boat ride on the Madu River',
      'Jet ski, banana boat and tube ride at the river mouth',
      'The Kosgoda sea turtle conservation centre',
      'A farewell dinner on the beach',
      `${DAY_MARK}Day 6 · Departure from Colombo`,
      'Breakfast and check out',
      'Shared transfer to Bandaranaike International for your flight home'
    ],
    accommodation: {
      name: 'Tangerine Beach Hotel, Bentota',
      description: '2 nights · Breakfast and dinner · Standard room · 4★ · Four star beachfront hotel at Kalutara on the way to Bentota',
      images: [
        img('nk5hgut3v6m87cqgzy1bxg8oslun_DSC_1800-min-scaled.jpg'),
        img('e1zytu3f09zxoahagxubtfasl2ai_DSC_2183-min-scaled.jpg'),
        img('huppysz23x1plwju2798r5p1vvhd_2f22df52.jpg'),
        img('wife2ddogjgal4wivmb55fs1azul_0984-min-scaled.jpg'),
        img('dcdtxyehcqaq9bqmobhl77uasitg_DSC_2370-min-scaled.jpg'),
        img('7zwa8ed26jx07dserj5dg5tyzylc_DSC_1794-min-scaled.jpg'),
        img('vnu8z9j76tt536r10kmsja3r3wrg_0513-min-scaled.jpg'),
        img('g3s6h32nuc81z87newsvxis1amo3_fabd7d6d.jpg'),
        img('3zw469iw44y5ilj6h5xjrwnja1nm_0330-min-scaled.jpg'),
        img('6zfgsgkhw7ts5bjohy0nfepkvpcu_0321-min-scaled.jpg')
      ]
    },
    activities: [
      {
        name: 'Madu River boat ride',
        day: 5,
        optional: false,
        image: img('2rc5rwalxe5r94jhd04536n46gia_Downpic.cc-image223366904.jpg'),
        description: 'A boat through the mangrove islands of the Madu Ganga.'
      },
      {
        name: 'Water sports combo at Bentota',
        day: 5,
        optional: false,
        image: img('zyq48bsrr7i30js9euxtlv32tois_Downpic.cc-image711582176.jpg'),
        description: 'Jet ski, banana boat and a tube ride at the river mouth with the group.'
      },
      {
        name: 'Kosgoda sea turtle conservation centre',
        day: 5,
        optional: false,
        image: img('47posvxkcp05nmgl93qebrmkxo77_Downpic.cc-image480276613.jpg'),
        description: 'The hatchery where eggs are protected and hatchlings released into the sea.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'Two nights on the beach with a free afternoon on arrival and a full day of the Madu River, water sports and the turtles.',
      image: img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg')
    }
  }
];

const detail = {
  slug: 'sri-lanka-group-tour-kandy-ella-train-and-bentota',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Sri Lanka Group Tour: Kandy, the Ella Train and Bentota',
  alt: 'Travellers leaning out of the blue train in the Sri Lankan hill country',
  days: '6 days / 5 nights',
  stations: '4 stops',
  transport: 'Shared air conditioned coach with an English speaking guide; the hill train from Nuwara Eliya to Ella',
  tag: 'Group tour',
  tags: ['Group tour', 'Adventure', 'Beach'],
  price: 38475,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kandy', 'Nuwara Eliya', 'Ella', 'Bentota'],
  stats: { days: 6, cities: 4, hotels: 4, activities: 7, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['6 transfers', 'Transport'],
    ['10 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aditya',
    image: '/experts/aditya.webp',
    role: 'Sri Lanka expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Sigiriya, Ella and Mirissa in one week is the route I recommend to every first timer under forty. Heritage, hills and the sea in that order.',
    quoteMore: 'Climb Sigiriya before breakfast. The gates open at seven, the steps are in shade and you are back down before the heat and the crowds arrive.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days with a small group: Kandy and the elephants, the tea country, the hill train to Ella, and two nights on the beach with the Madu River, water sports and the turtle centre. All transfers, breakfasts and dinners included.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights in deluxe and super deluxe hotels with breakfast and dinner daily; shared arrival and departure airport transfers and all road travel by air conditioned coach; Pinnawala and Kandy sightseeing; the hill country transfer with highlights; the Nuwara Eliya to Ella train journey; Ella sightseeing; the Madu River boat ride; the water sports combo at Bentota; the Kosgoda turtle conservation centre.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches; entrance tickets where payable locally; travel insurance; optional excursions; tips and personal expenses. Single travellers are matched in twin rooms or can pay a single supplement.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Kandy (D)', text: 'Arrival at Bandaranaike International and a shared transfer inland\nMeet your group and the Pinnawala elephants on the way\nThe Temple of the Sacred Tooth Relic and a circuit of the lake\nCheck in above the lake and dinner with the group', hotel: 'Swiss Residence, Kandy', highlights: ['Arrival at Bandaranaike International and a shared transfer inland', 'Meet your group and the Pinnawala elephants on the way', 'The Temple of the Sacred Tooth Relic and a circuit of the lake'] },
    { title: 'Day 2: Into the hill country (B, D)', text: 'Breakfast and a shared transfer up to Nuwara Eliya\nRamboda Falls and a tea estate and factory\nGregory Lake and the colonial town\nDinner in Little England', hotel: 'Ashford Nuwara Eliya', highlights: ['Breakfast and a shared transfer up to Nuwara Eliya', 'Ramboda Falls and a tea estate and factory', 'Gregory Lake and the colonial town'] },
    { title: 'Day 3: The train to Ella (B, D)', text: 'Breakfast and a transfer to Nanu Oya station\nThe hill train through the tea terraces to Ella\nThe Ravana cave and Ravana Falls\nDinner with views down the Ella gap', hotel: '88th Ella Hotel', highlights: ['Breakfast and a transfer to Nanu Oya station', 'The hill train through the tea terraces to Ella', 'The Ravana cave and Ravana Falls'] },
    { title: 'Day 4: Down to the beach (B, D)', text: 'Breakfast and a long transfer from the hills to the coast\nCheck in at your beachfront hotel\nThe afternoon free on the sand\nDinner with the group', hotel: 'Tangerine Beach Hotel', highlights: ['Breakfast and a long transfer from the hills to the coast', 'Check in at your beachfront hotel', 'The afternoon free on the sand'] },
    { title: 'Day 5: Madu River, water sports and turtles (B, D)', text: 'Breakfast, then a boat ride on the Madu River\nJet ski, banana boat and tube ride at the river mouth\nThe Kosgoda sea turtle conservation centre\nA farewell dinner on the beach', hotel: 'Tangerine Beach Hotel', highlights: ['Breakfast, then a boat ride on the Madu River', 'Jet ski, banana boat and tube ride at the river mouth', 'The Kosgoda sea turtle conservation centre'] },
    { title: 'Day 6: Departure from Colombo (B)', text: 'Breakfast and check out\nShared transfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast and check out', 'Shared transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; lunches; entrance tickets where payable locally; travel insurance; optional excursions; tips and personal expenses. Single travellers are matched in twin rooms or can pay a single supplement.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const sriLankaGroupTourKandyEllaBentotaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const sriLankaGroupTourKandyEllaBentotaProduct = {
  slug: detail.slug,
  places: ['Kandy', 'Nuwara Eliya', 'Ella', 'Bentota'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 7,
  transfers: 6,
  meals: 10,
  price: detail.price,
  images: cardImages
};
