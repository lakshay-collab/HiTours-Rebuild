// Exotic Sri Lanka Super Deluxe for Couples: Kandy, Nuwara Eliya and Bentota. Facts from the source itinerary, copy written fresh, INR pricing.
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
  img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg'),
  img('e4zzxdgonlq9scdq8hnyn7uhxdef_Ambalangoda.jpg'),
  img('2g53t00i6jttr6n7je1fq6jzqc9a_Frontyard_.jpg')
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
        img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        img('2qdrxrko072bcco7ufzgu2npr0c7_1581078051_17185271045_4b7e32f3fc_b_(1).jpg')
      ],
      2: [
        img('1xmli9j38vniz1tghlcgs4bxa0gc_shutterstock_1840791727.jpg'),
        img('0scen0iugpry0mg4wqnxsr558nvw_Labookellie_tea_plantation__Sri_Lanka_2.jpg'),
        img('5ryv9me1696b1ry058e5jsm7lzya_Botanical_Garden_of_Peradeniya_03.jpg'),
        img('273z0ew2ziyinmy62ccpeay5ggwo_nepal-royal-botanical-gardens.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Kandy`,
      'Arrival at Bandaranaike International and private transfer inland',
      'A stop at the Pinnawala elephant sanctuary on the way',
      'Check in at your Kandy hotel in the afternoon',
      'An evening lake drive and the Kandyan dance performance',
      `${DAY_MARK}Day 2 · A full day in Kandy`,
      'Breakfast, then the Temple of the Sacred Tooth Relic',
      'The Peradeniya Royal Botanical Gardens and the orchid house',
      'The hilltop Buddha at Bahiravokanda and the gem museum',
      'Dinner at the hotel overlooking the lake'
    ],
    accommodation: {
      name: 'Hotel Thilanka, Kandy',
      description: '2 nights · Breakfast and dinner · Deluxe room · 3★ · Hillside hotel with a pool above Kandy lake',
      images: [
        img('1yi9qopfkbt72ka1nceoqw3uakbg_infinity-pool.jpg'),
        img('272g7hgj2tdhtyb1tl24ai0kxsxs_367362938.jpg'),
        img('t0isnnnvteu6uswtmeh4sa23scvu_hotel-thilanka%20(2).jpg'),
        img('jnayoice4km7beulfi1ingfsc10m_hotel-thilanka%20(3).jpg'),
        img('yen84v7b49kdebrzcyspc00sdq0g_suite-room.jpg'),
        img('k1tquaij3lk7reunl2d65kfyle1p_royal-pavilion.jpg'),
        img('eptiqzwozl5b81p2y2945qzhb2nu_5ec57ad6_z.webp'),
        img('b6l0q6m2gu8vh74ihkk3x98a04c0_hotel-thilanka%20(6).jpg'),
        img('5420xzhm87uf471ixp0k4nhhzk32_hotel-thilanka%20(5).jpg'),
        img('xm9kwvvkrncvqt7glkpf10qynp3q_hotel-thilanka%20(1).jpg'),
        img('848qfvqchgx361u0n3mpjusqvwir_367362939.jpg'),
        img('p7pdclljp93g8suq7blbxvifnsu1_200736166.jpg')
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
      },
      {
        name: 'Private full day Kandy sightseeing',
        day: 2,
        optional: false,
        image: img('1xmli9j38vniz1tghlcgs4bxa0gc_shutterstock_1840791727.jpg'),
        description: 'The Temple of the Sacred Tooth Relic, the Peradeniya botanical gardens, the Bahiravokanda Buddha and the gem museum.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'Two nights above Kandy lake with a private elephant visit on the way in, a private dance show and a private full day of the city and its gardens.',
      image: img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg')
    }
  },
  {
    letter: 'B',
    name: 'Nuwara Eliya',
    dayLabel: 'Day 3',
    images: [
      img('z7kb0dcgq1zn0kla57iv7ayde16p_shutterstock_326368451%20(1).jpg'),
      img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg'),
      img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg'),
      img('oewqep60satxoqa8xc1sg0uolit2_shutterstock_159551120.jpg')
    ],
    dayImages: {
      3: [
        img('7ztsyywjmihi32gluk6v8argfrlo_shutterstock_1116598154.jpg'),
        img('6upo74208pk22ejwy6dpssckyjdn_Depositphotos_158390642_s-2019.png'),
        img('c5d5akjf4ek0zsuldrgeqqwpvx4h_5821411770_f564d81e3a_b.jpg'),
        img('6pvkpwhgaavzl1u5wodhr0op4yvm_e9.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Into the tea country`,
      'Breakfast and a private transfer up to Nuwara Eliya',
      'Ramboda Falls and a tea factory tasting on the way',
      'Gregory Lake, Victoria Park and the Hakgala gardens',
      'Check in at your colonial cottage and dinner'
    ],
    accommodation: {
      name: 'Mirage Kings Cottage, Nuwara Eliya',
      description: '1 night · Breakfast and dinner · Deluxe room · 4★ · Four star colonial cottage hotel above Nuwara Eliya',
      images: [
        img('tvylg7qjurdc0j2533bfst6sjjtc_264588715.jpg'),
        img('8gr9ihfxtx196syibmfkem41rp4v_199318084.jpg'),
        img('lbsbmm5uc5jlyhemkyyoqh66sx9z_264566886.jpg'),
        img('3fm2pkc2kwqxeti3htyu7k0n2jon_264577133.jpg'),
        img('0lvpmy0fieay8r6ey0xtw1eor538_197314949.jpg'),
        img('9k8b608c1j8rzroiprhzorbam95y_264668551.jpg'),
        img('bswz882hp67h2buovq8uaml6m3a3_199298262.jpg'),
        img('b41iyy7mlzg28eufwy4rzizp7b09_264557041.jpg'),
        img('9w71jmm3drah2a19wmx9o45sowyl_197178815.jpg'),
        img('ukylvzis0fjk619eroej908chrxh_ll.jpg'),
        img('vwlqd77bzlv7p1qptm4hxl32n5b0_199298288.jpg'),
        img('yk69tottsvj6lqef4b771qqb173w_197315655.jpg'),
        img('931s0bqlfhleoa9kmf1jh5ubcy6r_264577114.jpg')
      ]
    },
    activities: [
      {
        name: 'Private full day Nuwara Eliya sightseeing',
        day: 3,
        optional: false,
        image: img('7ztsyywjmihi32gluk6v8argfrlo_shutterstock_1116598154.jpg'),
        description: 'Ramboda Falls, a working tea estate and factory, Gregory Lake, Victoria Park, Hakgala gardens and the Seetha Amman temple.'
      }
    ],
    program: {
      name: 'Nuwara Eliya',
      description: 'Up into the tea country for a night in a four star colonial cottage with a private full day of waterfalls, gardens and lake.',
      image: img('z7kb0dcgq1zn0kla57iv7ayde16p_shutterstock_326368451%20(1).jpg')
    }
  },
  {
    letter: 'C',
    name: 'Bentota',
    dayLabel: 'Day 4 to 6',
    images: [
      img('gawo33jl8psoov573lox51cex0py_shutterstock_2370944553.jpg'),
      img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
      img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
      img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg')
    ],
    dayImages: {
      4: [
        img('c0x2bsv51zmx3tz3qiitrit9r8w8_Bentota%20Islang.JPG'),
        img('e4zzxdgonlq9scdq8hnyn7uhxdef_Ambalangoda.jpg'),
        img('2g53t00i6jttr6n7je1fq6jzqc9a_Frontyard_.jpg'),
        img('e62oezf8kqr0u5yo78hge033bocn_Galapata%20Vihara.jpg')
      ],
      5: [
        img('3drp3xw253kg7pt48iauc5vh1yjz_Bentota%202.jpg'),
        img('mgac8tj98vp4u6p3vv4acwiwsebh_22859730893_159b5dee46_b.jpg'),
        img('c0x2bsv51zmx3tz3qiitrit9r8w8_Bentota%20Islang.JPG'),
        img('2kyg08hfs2xevolr6axgk0fpxg9d_download.jpg')
      ],
      6: [
        img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
        img('erzts14ece8u6pbe6qhecfuhqp1a_18436933176_1d582f87a4_o.jpg'),
        img('x9q4lqbckwpj24yjofrltyk65sxu_1581143669_46718192554_c5f406dce3_k.jpg'),
        img('aobaf1yw2mrowt8a50rvhq5jhavm_1582217692_galle_lighthouse.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Down to the coast`,
      'Breakfast and a long transfer down to Bentota',
      'Check in at your four star beachfront resort',
      'The rest of the day at leisure on the sand',
      'Optional: a sunset catamaran ride on the Bentota river',
      `${DAY_MARK}Day 5 · Madu River and the turtles`,
      'Breakfast, then a boat safari through the Madu Ganga mangroves',
      'The cinnamon island and the fish spa at the river mouth',
      'The Kosgoda turtle hatchery in the afternoon',
      'Optional: a candlelit dinner on the beach',
      `${DAY_MARK}Day 6 · Mirissa and Galle`,
      'Breakfast and a private excursion along the southern coast',
      'Mirissa beach and the palms of Coconut Tree Hill',
      'The Galle Dutch fort on the way back',
      'Dinner at the resort'
    ],
    accommodation: {
      name: 'Earl\'s Reef, Bentota',
      description: '3 nights · Breakfast and dinner · Deluxe room · 4★ · Four star beachfront resort on the Bentota strand',
      images: [
        img('yhln84gtehigen6j45kts3lb29vx_247133579.jpg'),
        img('utmb42sfe4y0bulaouqiebyqrt6q_247157410.jpg'),
        img('sa0nobl8g6nehgdwf01u26206t9l_247165582.jpg'),
        img('uhtqb8yl3cwbsl1jpqja5lyfpfau_247165573.jpg'),
        img('76vhx7yr484n7nbqgfpcw52gs0nj_340492086.jpg'),
        img('s5d6v6k6qjs82h8p6qayg1wvt636_247165595.jpg'),
        img('77eveaq6vbpzo36heynuok4cum3m_247298373.jpg'),
        img('40zyq7sbywtdk8rtdawsa7a7twvo_247160520.jpg'),
        img('tzvgoo5evadldwggfzf1nx4tmlna_340497011.jpg'),
        img('q2ozbemm7185r14a92pulxrf1o2x_247160678.jpg')
      ]
    },
    activities: [
      {
        name: 'Private full day Bentota sightseeing',
        day: 5,
        optional: false,
        image: img('3drp3xw253kg7pt48iauc5vh1yjz_Bentota%202.jpg'),
        description: 'The Madu Ganga boat ride, the Kosgoda turtle hatchery, the Galapatha temple and an afternoon on Bentota beach.'
      },
      {
        name: 'Private excursion to Mirissa',
        day: 6,
        optional: false,
        image: img('a805bf6730v8xngjnhbu7kdm4jk3_Mirissa%202.jpg'),
        description: 'Along the southern coast to Mirissa beach and Coconut Tree Hill, with the Galle fort on the way back.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'Three nights at a four star beachfront resort: a free day on arrival, a private day of the Madu River and the turtles, and a private excursion to Mirissa.',
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
        img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        img('docw1hphy3zg23x9fyr5x9b9j995_1580298371_Galle_face_green.jpg'),
        img('eroknzeg63hrum6xty5qww1sf154_1580210450_shutterstock_327595163.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg')
      ],
      8: [
        img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
        img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
        img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
        img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Colombo city tour`,
      'Breakfast and a transfer up the coast to Colombo',
      'Galle Face Green and the Gangaramaya temple complex',
      'The Fort district, the Lotus Tower and Pettah market',
      'Dinner and your last night at the hotel',
      `${DAY_MARK}Day 8 · Departure from Colombo`,
      'Breakfast at the hotel and check out',
      'Private transfer to Bandaranaike International for your flight home'
    ],
    accommodation: {
      name: 'Fairway Colombo, Colombo',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Modern city hotel in the Colombo Fort district',
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
        name: 'Private full day Colombo sightseeing',
        day: 7,
        optional: false,
        image: img('83efgemiujmxwgtjh0tbhc2wx00d_Gangaramaya%20Temple,%20Colombo%201.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and the floating market at Pettah.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A last night in the Fort district with a private full day of the capital.',
      image: img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg')
    }
  }
];

const detail = {
  slug: 'exotic-sri-lanka-super-deluxe-for-couples-kandy-nuwara-eliya-and-bentota',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Exotic Sri Lanka Super Deluxe for Couples: Kandy, Nuwara Eliya and Bentota',
  alt: 'A couple watching the sunset from a beach resort at Bentota',
  days: '8 days / 7 nights',
  stations: '4 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Luxury', 'Beach'],
  price: 62558,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kandy', 'Nuwara Eliya', 'Bentota', 'Colombo'],
  stats: { days: 8, cities: 4, hotels: 4, activities: 7, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['14 meals', 'Meals'],
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
  short: 'The Exotic Sri Lanka couples route in upgraded hotels: two nights above Kandy lake, a four star colonial cottage in the tea country, three nights at a four star beach resort in Bentota with the Madu River, the turtles and Mirissa, and a final night in Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights in deluxe and four star hotels with breakfast and lunch or dinner daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; private Pinnawala visit; private Kandy lake drive and dance show; private full day Kandy sightseeing; private full day Nuwara Eliya sightseeing; private full day Bentota sightseeing; a private excursion to Mirissa; private full day Colombo sightseeing.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches unless stated; entrance tickets where marked as payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Kandy (D)', text: 'Arrival at Bandaranaike International and private transfer inland\nA stop at the Pinnawala elephant sanctuary on the way\nCheck in at your Kandy hotel in the afternoon\nAn evening lake drive and the Kandyan dance performance', hotel: 'Hotel Thilanka, Kandy', highlights: ['Arrival at Bandaranaike International and private transfer inland', 'A stop at the Pinnawala elephant sanctuary on the way', 'Check in at your Kandy hotel in the afternoon'] },
    { title: 'Day 2: A full day in Kandy (B, D)', text: 'Breakfast, then the Temple of the Sacred Tooth Relic\nThe Peradeniya Royal Botanical Gardens and the orchid house\nThe hilltop Buddha at Bahiravokanda and the gem museum\nDinner at the hotel overlooking the lake', hotel: 'Hotel Thilanka, Kandy', highlights: ['Breakfast, then the Temple of the Sacred Tooth Relic', 'The Peradeniya Royal Botanical Gardens and the orchid house', 'The hilltop Buddha at Bahiravokanda and the gem museum'] },
    { title: 'Day 3: Into the tea country (B, D)', text: 'Breakfast and a private transfer up to Nuwara Eliya\nRamboda Falls and a tea factory tasting on the way\nGregory Lake, Victoria Park and the Hakgala gardens\nCheck in at your colonial cottage and dinner', hotel: 'Mirage Kings Cottage, Nuwara Eliya', highlights: ['Breakfast and a private transfer up to Nuwara Eliya', 'Ramboda Falls and a tea factory tasting on the way', 'Gregory Lake, Victoria Park and the Hakgala gardens'] },
    { title: 'Day 4: Down to the coast (B, D)', text: 'Breakfast and a long transfer down to Bentota\nCheck in at your four star beachfront resort\nThe rest of the day at leisure on the sand\nOptional: a sunset catamaran ride on the Bentota river', hotel: 'Earl\'s Reef, Bentota', highlights: ['Breakfast and a long transfer down to Bentota', 'Check in at your four star beachfront resort', 'The rest of the day at leisure on the sand'] },
    { title: 'Day 5: Madu River and the turtles (B, D)', text: 'Breakfast, then a boat safari through the Madu Ganga mangroves\nThe cinnamon island and the fish spa at the river mouth\nThe Kosgoda turtle hatchery in the afternoon\nOptional: a candlelit dinner on the beach', hotel: 'Earl\'s Reef, Bentota', highlights: ['Breakfast, then a boat safari through the Madu Ganga mangroves', 'The cinnamon island and the fish spa at the river mouth', 'The Kosgoda turtle hatchery in the afternoon'] },
    { title: 'Day 6: Mirissa and Galle (B, D)', text: 'Breakfast and a private excursion along the southern coast\nMirissa beach and the palms of Coconut Tree Hill\nThe Galle Dutch fort on the way back\nDinner at the resort', hotel: 'Earl\'s Reef, Bentota', highlights: ['Breakfast and a private excursion along the southern coast', 'Mirissa beach and the palms of Coconut Tree Hill', 'The Galle Dutch fort on the way back'] },
    { title: 'Day 7: Colombo city tour (B, D)', text: 'Breakfast and a transfer up the coast to Colombo\nGalle Face Green and the Gangaramaya temple complex\nThe Fort district, the Lotus Tower and Pettah market\nDinner and your last night at the hotel', hotel: 'Fairway Colombo', highlights: ['Breakfast and a transfer up the coast to Colombo', 'Galle Face Green and the Gangaramaya temple complex', 'The Fort district, the Lotus Tower and Pettah market'] },
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

export const exoticSriLankaSuperDeluxeCouplesBentotaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const exoticSriLankaSuperDeluxeCouplesBentotaProduct = {
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
  activities: 7,
  transfers: 10,
  meals: 14,
  price: detail.price,
  images: cardImages
};
