// Best of China: Beijing, Xi'an and Shanghai. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
  img('6zfpcafuoid4yn37xk6go4idvuaq_Downpic.cc-image634323976.jpg'),
  img('k2vx80tq8tycf04g2zku0sfxl5pc_shutterstock_2037974363.jpg'),
  img('mugn7n061ldb6kas47nhgos2rs6k_UniversalStudiosBeijingTicket%20(5).jpg'),
  img('ok9opdlfrpj5koec0e42iu16b21d_dl.beatsnoop.com-final-zlrJO750No.jpg'),
  img('6kc1sxnr11zlr5te18n2l3oxtmro_Downpic.cc-image271892371.jpg'),
  img('7bcibxc00vx6uv7vw5cozmbu00qa_Downpic.cc-image340093738.jpg'),
  img('denrct0p3k27hlab3he9qh4e9bux_UniversalStudiosBeijingTicket%20(4).jpg'),
  img('n75mm3g228uoqgjm7ihbxc92l3k5_Downpic.cc-126094617.jpg'),
  img('p2wn40xv1ltgb9q0y5dm5d36xhdr_Downpic.cc-52729952.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
  img('6zfpcafuoid4yn37xk6go4idvuaq_Downpic.cc-image634323976.jpg'),
  img('mugn7n061ldb6kas47nhgos2rs6k_UniversalStudiosBeijingTicket%20(5).jpg'),
  img('7bcibxc00vx6uv7vw5cozmbu00qa_Downpic.cc-image340093738.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Beijing',
    dayLabel: 'Day 1 to 4',
    images: [
      img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
      img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg'),
      img('wt3hzz5toushzf6vnpc2boai2jta_UniversalStudiosBeijingTicket.webp'),
      img('wckwegqdeu0401r3uat0wxuqjk9p_shutterstock_2087531911.jpg')
    ],
    dayImages: {
      1: [
        img('cgvn0zymkzff9bznlpd8xrqwqv7j_1619597637_shutterstock_269743367.jpg'),
        img('etf645xhd90ozb781uxlmzp1p7c2_1619610568_shutterstock_732680590.jpg'),
        img('vmb0lvweark7kfhqxjjsgtxokqj0_1619610325_shutterstock_293184050.jpg'),
        img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg')
      ],
      2: [
        img('uzcrzvz5okpx6n4cpj66bbxe6ek4_Downpic.cc-71935295.jpg'),
        img('4q5tejgfrgal67d9s1rm66myvq3e_1619595246_shutterstock_721311280.jpg'),
        img('wmzivohel7wnazhjlo5exrpawr6o_1619597766_shutterstock_31943836.jpg'),
        img('xhapwj9v3aun8mqo8zxnwqvaqp74_1619597223_shutterstock_141819499.jpg')
      ],
      3: [
        img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
        img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg'),
        img('wt3hzz5toushzf6vnpc2boai2jta_UniversalStudiosBeijingTicket.webp'),
        img('wckwegqdeu0401r3uat0wxuqjk9p_shutterstock_2087531911.jpg')
      ],
      4: [
        img('wt3hzz5toushzf6vnpc2boai2jta_UniversalStudiosBeijingTicket.webp'),
        img('uyax1rp8ugre6esy532onpia0k8i_shutterstock_2441137773.jpg'),
        img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
        img('w2tj5xo3o5ryfxa7pvxijsivop0d_dl.beatsnoop.com-final-8XgmUp4Mzb.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Beijing`,
      'Arrival at Beijing Capital and transfer to your hotel',
      'Check in and the rest of the day free',
      'Optional: the Lama Temple or the 798 art district',
      'Optional: Peking duck at a neighbourhood restaurant',
      `${DAY_MARK}Day 2 · Forbidden City and Temple of Heaven`,
      'Breakfast, then a guided day in the old centre',
      'Tiananmen Square and the Forbidden City courtyards',
      'The Temple of Heaven and its round halls',
      'A stop at the jade workshop on the way back',
      `${DAY_MARK}Day 3 · Great Wall and the Summer Palace`,
      'Early breakfast, then north to Mutianyu',
      'The cable car and the walk along the wall',
      'On to the Summer Palace in the afternoon',
      'Kunming lake, the long corridor and the marble boat',
      `${DAY_MARK}Day 4 · Universal Studios Beijing`,
      'Early breakfast, then out to Universal Studios',
      'Tickets included for the full day',
      'The Harry Potter area and the water park rides',
      'Back at the hotel in the evening'
    ],
    accommodation: {
      name: 'Holiday Inn Express Beijing Huacai, Beijing',
      description: '4 nights · Breakfast · Standard room · 3★ · Simple hotel in Chaoyang, close to the metro',
      images: [
        img('3b4gz9aov40t96ogrda2jhvg1q1t_download%20(3).png'),
        img('ji2e1fiswpb2bh6a0f9tw74wciq7_download.png'),
        img('4klt1p2b0p6084tozhz8v1sqeoon_download%20(5).png'),
        img('f6ur39l3yfs9cfsrx76cgjmynx36_download%20(10).png'),
        img('stuz5zpxnigri6crm4sbcl0vipiz_download%20(7).png'),
        img('4m23luywihiiew6he29e7ne5y9pd_download%20(2).png'),
        img('4jm1r5udgur3oj27w7b11po95by8_download%20(8).png'),
        img('z4wfj6rsuku27ileod8ejxv1g31t_download%20(4).png'),
        img('fcd5rd430f52k5hihctlwqkn6fqa_download%20(6).png'),
        img('wkxjbpeobmslop2ifzhcg6o3dn4w_download%20(1).png'),
        img('mt62w350l0rnv10hpz2lm7bg2ucn_download%20(9).png')
      ]
    },
    activities: [
      {
        name: 'Beijing city sightseeing tour',
        day: 2,
        optional: false,
        image: img('uzcrzvz5okpx6n4cpj66bbxe6ek4_Downpic.cc-71935295.jpg'),
        description: 'A guided day through Tiananmen Square, the courtyards of the Forbidden City and the round halls of the Temple of Heaven.'
      },
      {
        name: 'Great Wall at Mutianyu and the Summer Palace',
        day: 3,
        optional: false,
        image: img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg'),
        description: 'The Mutianyu section of the wall, steep and far less crowded than Badaling, then the lake and long corridor of the Summer Palace.'
      },
      {
        name: 'Universal Studios Beijing',
        day: 4,
        optional: false,
        image: img('wt3hzz5toushzf6vnpc2boai2jta_UniversalStudiosBeijingTicket.webp'),
        description: 'A full day at Universal Studios Beijing with tickets included, home to the largest Harry Potter area built anywhere.'
      }
    ],
    program: {
      name: 'Beijing',
      description: 'Four nights in the capital with Tiananmen Square and the Forbidden City, the wall at Mutianyu, the Summer Palace and Universal Studios.',
      image: img('rshb8xxav76cc26e3dblrgc5h6f3_dl.beatsnoop.com-final-j1bIWzdvPJ.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Xi\'an',
    dayLabel: 'Day 5 to 6',
    images: [
      img('fwe3fftbpkecyjkvkyiot9agnokc_kp8w60bom4yopqv3c1bkwyyex59q_dl.beatsnoop.com-3000-xOvguw03yA.webp'),
      img('6zfpcafuoid4yn37xk6go4idvuaq_Downpic.cc-image634323976.jpg'),
      img('uzcrzvz5okpx6n4cpj66bbxe6ek4_Downpic.cc-71935295.jpg'),
      img('kmd9i0a6bexk7an18xz1rux9o0z8_Downpic.cc-image515561940.jpg')
    ],
    dayImages: {
      5: [
        img('fwe3fftbpkecyjkvkyiot9agnokc_kp8w60bom4yopqv3c1bkwyyex59q_dl.beatsnoop.com-3000-xOvguw03yA.webp'),
        img('6zfpcafuoid4yn37xk6go4idvuaq_Downpic.cc-image634323976.jpg'),
        img('uzcrzvz5okpx6n4cpj66bbxe6ek4_Downpic.cc-71935295.jpg'),
        img('kmd9i0a6bexk7an18xz1rux9o0z8_Downpic.cc-image515561940.jpg')
      ],
      6: [
        img('qsd4pnphggjmneqh8h55d0orngp8_Downpic.cc-53302494.jpg'),
        img('28jqw10gths76fk21d0ydlfw0c1r_3580316000_834731fe53_k.jpg'),
        img('yf0xij24jmlhljrktllgkpn43573_45d97b7b0af54590a43f47157858aa08.png'),
        img('5v2woqhwxncpenlzku9bwoa65yol_51714-Terracota-Army.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Beijing to Xi'an by bullet train`,
      'Breakfast and check out of your Beijing hotel',
      'Station transfer and the bullet train south to Xi\'an',
      'Arrival transfer and check in beside the pagoda',
      'Rest of the day free in the walled centre',
      `${DAY_MARK}Day 6 · Terracotta warriors and old Xi'an`,
      'Breakfast, then a guided day around Xi\'an',
      'The terracotta warriors in their excavation pits',
      'The Bell Tower in the walled old centre',
      'The Giant Wild Goose Pagoda in the afternoon'
    ],
    accommodation: {
      name: 'Jinjiang Inn Xi\'an Giant Wild Goose Pagoda, Xi An',
      description: '2 nights · Breakfast · Standard room · 3★ · Friendly hotel beside the Giant Wild Goose Pagoda',
      images: [
        img('mcpdai76id3i5xlmafowaz37k23d_77682400.jpg'),
        img('969fmzoz95ljtflim4egr7cq7cju_77682420.jpg'),
        img('89t0iwwakzhqfrg0zl3ap4xrrcfk_77682402.jpg'),
        img('oybhs5tmwq4dun4ypisb5zwfsyll_78780964.jpg'),
        img('5exbm4j2d9rrfv5kt6xs0km5bt61_\'.jpg'),
        img('fkr6x0zk9tayq13yawkbpygzq3ws_77682403.jpg'),
        img('y3htwsvtpn44d1d4z7b22tcv4gmn_78780966.jpg'),
        img('c5mamcekitg8whcf1aordcrf56ys_78780952.jpg'),
        img('prwwvcsm5v25zjexmgm1yzqp0qyv_78780946.jpg')
      ]
    },
    activities: [
      {
        name: 'Xi\'an sightseeing tour',
        day: 6,
        optional: false,
        image: img('qsd4pnphggjmneqh8h55d0orngp8_Downpic.cc-53302494.jpg'),
        description: 'A guided day with the terracotta warriors in their excavation pits, the Bell Tower and the Giant Wild Goose Pagoda.'
      }
    ],
    program: {
      name: 'Xi\'an',
      description: 'Two nights at the eastern end of the Silk Road, with the terracotta army, the Bell Tower and the city walls.',
      image: img('fwe3fftbpkecyjkvkyiot9agnokc_kp8w60bom4yopqv3c1bkwyyex59q_dl.beatsnoop.com-3000-xOvguw03yA.webp')
    }
  },
  {
    letter: 'C',
    name: 'Shanghai',
    dayLabel: 'Day 7 to 10',
    images: [
      img('65lttyqfgunfqo2co9g349dekzsb_dl.beatsnoop.com-final-rnfwMY0T7P.jpg'),
      img('eym5xev151ynqgk8hlkhaufeqvoa_dl.beatsnoop.com-final-FO30dKJxlR.jpg'),
      img('k2vx80tq8tycf04g2zku0sfxl5pc_shutterstock_2037974363.jpg'),
      img('6vxmfc1l9jfx78wggvelsrxw1ve1_UniversalStudiosBeijingTicket%20(6).jpg')
    ],
    dayImages: {
      7: [
        img('2k4c4p2jzw25zkin4pr08mrop92w_1619596902_shutterstock_1462710089.jpg'),
        img('s8t3rwhg2yl68b7506zqum0o0x4d_1619599915_shutterstock_1149341150.jpg'),
        img('ijv4hicv8xdbd7kbr6u8y4ir0wp2_1619599753_shutterstock_1048697678.jpg'),
        img('65lttyqfgunfqo2co9g349dekzsb_dl.beatsnoop.com-final-rnfwMY0T7P.jpg')
      ],
      8: [
        img('yuqu648rid8hf8g09ip9lswxh2av_Downpic.cc-image263983358.jpg'),
        img('3v46yytijdj44xwmcu10tpsd0agd_1619599983_shutterstock_199457384.jpg'),
        img('ac1pvfyncr6b3o6g64b7etpkzlyi_1619608001_shutterstock_1252745494.jpg'),
        img('imtxhf697qz3p06aemge77j1haun_1619600357_shutterstock_1148631992.jpg')
      ],
      9: [
        img('5nsftm4otoh627hj5ujec4kt1y27_disha.jpg'),
        img('t27m0ry317begwvn0sdy9kyugoen_18-03-12_ShanghaiDisney_013.jpg'),
        img('65lttyqfgunfqo2co9g349dekzsb_dl.beatsnoop.com-final-rnfwMY0T7P.jpg'),
        img('eym5xev151ynqgk8hlkhaufeqvoa_dl.beatsnoop.com-final-FO30dKJxlR.jpg')
      ],
      10: [
        img('65lttyqfgunfqo2co9g349dekzsb_dl.beatsnoop.com-final-rnfwMY0T7P.jpg'),
        img('eym5xev151ynqgk8hlkhaufeqvoa_dl.beatsnoop.com-final-FO30dKJxlR.jpg'),
        img('k2vx80tq8tycf04g2zku0sfxl5pc_shutterstock_2037974363.jpg'),
        img('6vxmfc1l9jfx78wggvelsrxw1ve1_UniversalStudiosBeijingTicket%20(6).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Xi'an to Shanghai`,
      'Breakfast at the hotel and check out',
      'Optional: flight Xi\'an to Shanghai, booked with us',
      'Arrival transfer and check in at Shanghai',
      'Rest of the day free for the Bund or Nanjing Road',
      `${DAY_MARK}Day 8 · City tour, tower and river cruise`,
      'Breakfast, then a guided half day of the city',
      'The Bund, the old town lanes and the Yu garden',
      'Up the Oriental Pearl Tower in the afternoon',
      'A cruise on the Huangpu as the towers light up',
      `${DAY_MARK}Day 9 · Shanghai Disneyland`,
      'Breakfast, then a day at Shanghai Disneyland',
      'Tickets included for the full day',
      'The Enchanted Storybook Castle and the Tron ride',
      'Back at the hotel in the evening',
      `${DAY_MARK}Day 10 · Departure from Shanghai`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Holiday Inn Express Shanghai Putuo, Shanghai',
      description: '3 nights · Breakfast · Standard room · 3★ · Comfortable base in Putuo close to the metro',
      images: [
        img('188urx9bxrn69hyen8dqimsfx72z_488327823.jpg'),
        img('zd8xrskcgxv1m891xi4hubp2zh2k_230102610.jpg'),
        img('b33lqmz9fptgbbbv9x6whorw1hnt_442573332.jpg'),
        img('8x53ctpvg2e8ip14l9l2o3rtph3c_230101393.jpg'),
        img('eodhcam38r7paz9kzxawyn987n0v_477503847.jpg'),
        img('iaxtmbul7js7efqmjhwxvyoddim4_442572974.jpg'),
        img('7eqwvpucafh1p7ykqyo3zzhzlydy_517810410.jpg'),
        img('gs8w4peye1g9l2dvvj0jjugiwr4b_517810411.jpg')
      ]
    },
    activities: [
      {
        name: 'Half day guided tour of Shanghai',
        day: 8,
        optional: false,
        image: img('yuqu648rid8hf8g09ip9lswxh2av_Downpic.cc-image263983358.jpg'),
        description: 'A guided morning through the Bund waterfront, the old town lanes and the rockeries and ponds of the Yu garden.'
      },
      {
        name: 'Oriental Pearl Tower',
        day: 8,
        optional: false,
        image: img('p9etuo253h5gw8ttnc3rdw5pds6i_dl.beatsnoop.com-3000-msl1j40qR3.jpg'),
        description: 'Tickets up the city\'s best known tower, with the glass floor over Pudong and a long view back to the colonial Bund.'
      },
      {
        name: 'Huangpu river cruise',
        day: 8,
        optional: false,
        image: img('kyqi22drkx8f1w8fyrfliyqlswnk_Downpic.cc-92560468.jpg'),
        description: 'An evening sailing between the lit towers of Pudong and the stone facades of the Bund, the classic Shanghai skyline shot.'
      },
      {
        name: 'Shanghai Disneyland',
        day: 9,
        optional: false,
        image: img('5nsftm4otoh627hj5ujec4kt1y27_disha.jpg'),
        description: 'A full day at Shanghai Disneyland with tickets included, home to the Enchanted Storybook Castle and the Tron ride.'
      }
    ],
    program: {
      name: 'Shanghai',
      description: 'Three nights to finish: the Bund and the Yu garden, the Oriental Pearl Tower, a Huangpu cruise and a full day at Disneyland.',
      image: img('65lttyqfgunfqo2co9g349dekzsb_dl.beatsnoop.com-final-rnfwMY0T7P.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-china-beijing-xian-and-shanghai',
  ctaHref: '/l/china/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of China: Beijing, Xi\'an and Shanghai',
  alt: 'Golden roofs of the Forbidden City in Beijing',
  days: '10 days / 9 nights',
  stations: '3 stops',
  transport: 'Private transfers, guided city tours, bullet train and an internal flight',
  tag: 'Culture',
  tags: ['Culture', 'Family'],
  price: 95000,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Beijing', 'Xi\'an', 'Shanghai'],
  stats: { days: 10, cities: 3, hotels: 3, activities: 8, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['8 experiences', 'Activities'],
    ['12 transfers', 'Transport'],
    ['9 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Mei',
    image: '/experts/riya.webp',
    role: 'China expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Beijing, Xi\'an and Shanghai in nine nights is the route I give first timers. One imperial city, one ancient one, one modern one.',
    quoteMore: 'Book the bullet train seats on the left going south. You get the farmland and the Yellow River bridges rather than the service sheds.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Ten days across the three cities most first time visitors want: imperial Beijing with the Great Wall and Universal Studios, the terracotta army at Xi\'an, then the Bund, the Pearl Tower and Disneyland in Shanghai.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 9 nights with daily breakfast across Beijing, Xi\'an and Shanghai; private transfers; guided Beijing city tour; full day Great Wall at Mutianyu with the Summer Palace; Universal Studios Beijing tickets; Beijing to Xi\'an bullet train; guided Xi\'an sightseeing tour; half day guided Shanghai city tour; Oriental Pearl Tower tickets; Huangpu river cruise tickets; Shanghai Disneyland tickets.',
  intro2: 'Not included: international flights; the Xi\'an to Shanghai internal flight; China visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Beijing (Arrival)', text: 'Arrival at Beijing Capital and transfer to your hotel\nCheck in and the rest of the day free\nOptional: the Lama Temple or the 798 art district\nOptional: Peking duck at a neighbourhood restaurant', hotel: 'Holiday Inn Express Beijing Huacai', highlights: ['Arrival at Beijing Capital and transfer to your hotel', 'Check in and the rest of the day free', 'Optional: the Lama Temple or the 798 art district'] },
    { title: 'Day 2: Forbidden City and Temple of Heaven (B)', text: 'Breakfast, then a guided day in the old centre\nTiananmen Square and the Forbidden City courtyards\nThe Temple of Heaven and its round halls\nA stop at the jade workshop on the way back', hotel: 'Holiday Inn Express Beijing Huacai', highlights: ['Breakfast, then a guided day in the old centre', 'Tiananmen Square and the Forbidden City courtyards', 'The Temple of Heaven and its round halls'] },
    { title: 'Day 3: Great Wall and the Summer Palace (B)', text: 'Early breakfast, then north to Mutianyu\nThe cable car and the walk along the wall\nOn to the Summer Palace in the afternoon\nKunming lake, the long corridor and the marble boat', hotel: 'Holiday Inn Express Beijing Huacai', highlights: ['Early breakfast, then north to Mutianyu', 'The cable car and the walk along the wall', 'On to the Summer Palace in the afternoon'] },
    { title: 'Day 4: Universal Studios Beijing (B)', text: 'Early breakfast, then out to Universal Studios\nTickets included for the full day\nThe Harry Potter area and the water park rides\nBack at the hotel in the evening', hotel: 'Holiday Inn Express Beijing Huacai', highlights: ['Early breakfast, then out to Universal Studios', 'Tickets included for the full day', 'The Harry Potter area and the water park rides'] },
    { title: 'Day 5: Beijing to Xi\'an by bullet train (B)', text: 'Breakfast and check out of your Beijing hotel\nStation transfer and the bullet train south to Xi\'an\nArrival transfer and check in beside the pagoda\nRest of the day free in the walled centre', hotel: 'Jinjiang Inn Xi\'an Giant Wild Goose Pagoda', highlights: ['Breakfast and check out of your Beijing hotel', 'Station transfer and the bullet train south to Xi\'an', 'Arrival transfer and check in beside the pagoda'] },
    { title: 'Day 6: Terracotta warriors and old Xi\'an (B)', text: 'Breakfast, then a guided day around Xi\'an\nThe terracotta warriors in their excavation pits\nThe Bell Tower in the walled old centre\nThe Giant Wild Goose Pagoda in the afternoon', hotel: 'Jinjiang Inn Xi\'an Giant Wild Goose Pagoda', highlights: ['Breakfast, then a guided day around Xi\'an', 'The terracotta warriors in their excavation pits', 'The Bell Tower in the walled old centre'] },
    { title: 'Day 7: Xi\'an to Shanghai (B)', text: 'Breakfast at the hotel and check out\nOptional: flight Xi\'an to Shanghai, booked with us\nArrival transfer and check in at Shanghai\nRest of the day free for the Bund or Nanjing Road', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Breakfast at the hotel and check out', 'Optional: flight Xi\'an to Shanghai, booked with us', 'Arrival transfer and check in at Shanghai'] },
    { title: 'Day 8: City tour, tower and river cruise (B)', text: 'Breakfast, then a guided half day of the city\nThe Bund, the old town lanes and the Yu garden\nUp the Oriental Pearl Tower in the afternoon\nA cruise on the Huangpu as the towers light up', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Breakfast, then a guided half day of the city', 'The Bund, the old town lanes and the Yu garden', 'Up the Oriental Pearl Tower in the afternoon'] },
    { title: 'Day 9: Shanghai Disneyland (B)', text: 'Breakfast, then a day at Shanghai Disneyland\nTickets included for the full day\nThe Enchanted Storybook Castle and the Tron ride\nBack at the hotel in the evening', hotel: 'Holiday Inn Express Shanghai Putuo', highlights: ['Breakfast, then a day at Shanghai Disneyland', 'Tickets included for the full day', 'The Enchanted Storybook Castle and the Tron ride'] },
    { title: 'Day 10: Departure from Shanghai (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; the Xi\'an to Shanghai internal flight; China visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'China', href: '/asia/china' },
  { label: detail.title }
];

export const bestOfChinaGoldenTriangleBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfChinaGoldenTriangleProduct = {
  slug: detail.slug,
  places: ['Beijing', 'Xi\'an', 'Shanghai'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 10,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 8,
  transfers: 12,
  meals: 9,
  price: detail.price,
  images: cardImages
};
