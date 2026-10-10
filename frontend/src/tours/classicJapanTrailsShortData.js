// Classic Japan Trails Short Group Tour. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg'),
  img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
  img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg'),
  img('tp732v0s7r25f0n1bu4nhvpuag28_shutterstock_2439172231.jpg'),
  img('7kxl7sgilrs8qq9u4vti16qxyujm_shutterstock_2278159137.jpg'),
  img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
  img('raxb9kxswnyu9cfxwl7hriz6e6dq_shutterstock_2464578063.jpg'),
  img('m8rah7p8k54cihntnxmqoan6c24a_shutterstock_2447788247.jpg'),
  img('udkn4h8at26lrvvwwmlaxguh16hf_shutterstock_1836078037.jpg'),
  img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
  img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg'),
  img('tp732v0s7r25f0n1bu4nhvpuag28_shutterstock_2439172231.jpg'),
  img('raxb9kxswnyu9cfxwl7hriz6e6dq_shutterstock_2464578063.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    dayLabel: 'Day 1 to 2',
    images: [
      img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg'),
      img('gj78fz8c0ymqhf34svyaxlbyx6e2_shutterstock_1017018754%20(1).jpg'),
      img('xhgc9a10q89566kee3xewg2tdxbu_shutterstock_245037472.jpg'),
      img('7z6zke7b8kmw08mkqkclicf3rawn_shutterstock_310072442.jpg')
    ],
    dayImages: {
      1: [
        img('s0s1j9k7ol91rdwi77ystaof4uzo_48126669936_084ba4982e_o.jpg'),
        img('7v0pb5achz6hdl8vmiejhfx5ocg9_1617352304_Shinjuku_Gyoen_National_Garden.jpg'),
        img('ejlal61lfumsj0l0z7i6juuw632n_download%20-%202024-07-24T125745.440.jpeg'),
        img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg')
      ],
      2: [
        img('hp0kny0xrkm2btr6upvie1fg78eg_dl.beatsnoop.com-MN471ZkJDy.jpg'),
        img('ea2mjqt2vr1hf62yek9bq6q7or9i_28330748537_9b6c02ea22_o.jpg'),
        img('iele7cut7wosbp83440c5yyy4663_shutterstock_666196894.jpg'),
        img('l2ve6s75yoif0uquecbp9gh6poh6_Screenshot%202022-09-21%20164951.png')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Tokyo`,
      'Arrival at Narita or Haneda and transfer to your hotel',
      'Check in beside Shinagawa station',
      'Free time in the Shinjuku district',
      'Evening at your own pace',
      `${DAY_MARK}Day 2 · Tokyo sightseeing`,
      'Breakfast, then a guided day through Tokyo',
      'Meiji shrine and the Imperial Palace gardens',
      'Asakusa and the Senso-ji temple lanes',
      'Evening free in the city'
    ],
    accommodation: {
      name: 'Shinagawa Prince Hotel, Tokyo',
      description: '2 nights · Breakfast · Standard room · 4★ · Large four star hotel beside Shinagawa station',
      images: [
        img('juksdm4d4uxalpfogphbtkbnuamj_452647028.jpg'),
        img('pxxdo21vgwoccwr5cpcergr1cm7o_4146765bac0064142ddcb8bd67346816.webp'),
        img('50g0xjbalxykcev2kjbnio2lqk6j_452670347.jpg'),
        img('egbkrl0emlj4efnbl5rzajaxznqk_63bf688102bd4c9e354f39182a281cd9.webp'),
        img('f1fq2dtpubdly8tvhy2fxu4bkepw_472727392.jpg'),
        img('b2ygodd73sj4whnl978s00avvi0h_317258376.jpg'),
        img('hedy5783g9ry9olfdx19bbfs78c1_78534135.jpg'),
        img('qktd4se6b7iurir9cbb5hga9vzkd_317254428.jpg'),
        img('ukx5syyfa4lk8kpvupn56d4pckxk_353194714.jpg'),
        img('oxlvinlrj0e4y8c1ar7cixv6mbl1_238878743.jpg'),
        img('mxlmo04fzmzfibovfm2yhsmaj4v8_452648109.jpg'),
        img('1c2tuz0q0u0xl36vwdx4483uzp9c_9358_20020713220087906397.webp'),
        img('mwg41snxd36r40j02ghm0gs55dpg_Shinagawa-Prince-Hotel-N-Tower-Tokyo-Room.jpeg'),
        img('kx07vby2ddun6cj5s4qjb9qj5swv_aabed107ce4770f2c0b25cd53bbb5ceb.webp'),
        img('214t3iii17cz7az9fdxv77nje2ol_238877948.jpg'),
        img('qc3vo4ndk0id57bamtz52t08er0v_238877803.jpg'),
        img('r7tpqgp60zcjri52un9ydqpap5cw_472728603.jpg'),
        img('l57fdi8htglduqytrzxqpwwpytpx_452648109.jpg'),
        img('pb955b3jyfp24yh06whxy8lzp2b5_465186998.jpg')
      ]
    },
    activities: [
      {
        name: 'Tokyo sightseeing tour',
        day: 2,
        optional: false,
        image: img('hp0kny0xrkm2btr6upvie1fg78eg_dl.beatsnoop.com-MN471ZkJDy.jpg'),
        description: 'A guided day through the city, from the Meiji shrine and the Imperial Palace gardens to the old temple lanes of Asakusa.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Two nights beside Shinagawa station, with free time in Shinjuku and a full guided city day.',
      image: img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kyoto',
    dayLabel: 'Day 3',
    images: [
      img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
      img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
      img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg')
    ],
    dayImages: {
      3: [
        img('8dk1b8qlltthhe85sng9bn2y2bka_Downpic.cc-90371408.jpg'),
        img('175jjcq0s03pjbxnrgbvss1n0fyf_Fushimi%20Inari%20Taisha-1.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('j8xcq76t3o64yxmui5m4kt22wejq_52980159201_640a74d15d_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Bullet train to Kyoto`,
      'Breakfast and check out, then the bullet train west',
      'Check in opposite Kyoto station',
      'A guided afternoon through the old capital',
      'Free time in the Gion lanes in the evening'
    ],
    accommodation: {
      name: 'Miyako Hotel Kyoto Hachijo, Kyoto',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel opposite Kyoto station, handy for the trains',
      images: [
        img('jtqkx0sns04zp2auwnkk8zwqw0l9_329e13f626b2fc9986356d95f851a15e54fe41f7.47.9.26.3.jpg'),
        img('5qq4yva5u1oe5zt85i07cx4evcoh_8677571.jpg'),
        img('pmn8lz9opr2a2ot6ki392agsyf62_8675121.jpg'),
        img('o2jdbr9s9fmq3k000bosoykgsa3n_68244904.jpg'),
        img('elxjcnkgr3tmh841juzjwzkvpzd2_8675155.jpg'),
        img('6o0km7sckl9nqjwabllflhv3d2sh_8675135.jpg'),
        img('1vrog6b3z6oxoiqk6lalgj88vbr5_8675152.jpg'),
        img('g9vw6jwwr76x1pkrjju7hh4m6t8z_180120408.jpg'),
        img('ckno1j0ha5mz9n37zfrb4nmg9hdx_180121146.jpg'),
        img('ooil4y5nm14rmn226qeleo62o8il_8675179.jpg'),
        img('6fp0vljf1x4rxgf35fxlfzyypjuh_180120798.jpg'),
        img('iso6n8w0recypga6s1eg2s6cuhov_68345205.jpg')
      ]
    },
    activities: [
      {
        name: 'Kyoto sightseeing tour',
        day: 3,
        optional: false,
        image: img('8dk1b8qlltthhe85sng9bn2y2bka_Downpic.cc-90371408.jpg'),
        description: 'A guided day through the old capital, taking in the golden pavilion, a Zen garden and the torii gate paths above Fushimi.'
      }
    ],
    program: {
      name: 'Kyoto',
      description: 'A night in the old capital with a guided afternoon through the temples and free time in the Gion lanes.',
      image: img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Nagano',
    subtitle: 'Nagano to Tsumago and Matsumoto',
    dayLabel: 'Day 4',
    images: [
      img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg'),
      img('raxb9kxswnyu9cfxwl7hriz6e6dq_shutterstock_2464578063.jpg')
    ],
    dayImages: {
      4: [
        img('m656ker4xm562sf6fyn4b0sk0ht9_Downpic.cc-79927161.jpg'),
        img('f94kpl6xljwd3wf0g0drishwpdvx_download%20-%202024-07-24T131016.067.jpeg'),
        img('1ltj1unwoqgfdqb3kteqka37irre_narai-juku-1536x1024.jpeg.jpg'),
        img('6iv5pq20b7linbnwmsjyew29uils_Downpic.cc-121550940.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Tsumago and Matsumoto`,
      'Breakfast and check out, then north into the mountains',
      'Free time in the old post town of Tsumago',
      'The crow castle at Matsumoto on its moat',
      'Check in at your Nagano hotel'
    ],
    accommodation: {
      name: 'Hotel Metropolitan Nagano, Nagano',
      description: '1 night · Breakfast · Standard room · 3★ · Comfortable hotel attached to Nagano station',
      images: [
        img('dk9pql13d8rwr2fj4ysn0c8x1skf_Hotel_Metropolitan_Nagano,_2011.jpg'),
        img('gt53fbsq9nv5rz22ky7e2yxy5nvf_251212054.jpg'),
        img('60vrpq6ukbrjyh43twc66aiefro7_43542999.jpg'),
        img('rrlqtx4vhqgynrsw5eup4xkeiesm_251212773.jpg'),
        img('685lko92nyprhq04akcedtkooc04_70037352.jpg'),
        img('l923s0ntgay9oxestgltndi22v6e_a4cc200dcccb65e2e3196dcf995461d2.webp'),
        img('u39ca68a68pnt0nsrvtmkz3e1aqa_251212272.jpg'),
        img('wbda7vx10tbtlto842ikm2zkpzc7_70037903.jpg'),
        img('9lwu8ktd70871dag2wbt6tpmp3g3_251213757.jpg'),
        img('qf8e0672q6ci28epy6kcwyet176n_e215a10dc6bd7e9128070af23a922090.webp'),
        img('k24ixztak3oa224x6zm2o2ddshdv_70037326.jpg'),
        img('3x8leo57o493xlmx4rp2zpxnbz8x_japanese-restaurant-shinano-yamas.jpg')
      ]
    },
    activities: [
      {
        name: 'Tsumago post town',
        day: 4,
        optional: false,
        image: img('m656ker4xm562sf6fyn4b0sk0ht9_Downpic.cc-79927161.jpg'),
        description: 'A preserved post town on the old Nakasendo road, where the wooden inns and shopfronts look much as travellers found them.'
      },
      {
        name: 'Matsumoto crow castle',
        day: 4,
        optional: false,
        image: img('6iv5pq20b7linbnwmsjyew29uils_Downpic.cc-121550940.jpg'),
        description: 'The black keep they call the crow castle, standing on its moat with the Alps behind it, an original from the sixteenth century.'
      }
    ],
    program: {
      name: 'Nagano',
      description: 'A night in Nagano, reached through Tsumago on the old post road and the black keep at Matsumoto.',
      image: img('c0vid7mgtco5vteimqoc8gpoulu9_shutterstock_2456480689.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Ikaho',
    subtitle: 'Ikaho to the monkey park, Kusatsu and Nikko',
    dayLabel: 'Day 5 to 6',
    images: [
      img('m8rah7p8k54cihntnxmqoan6c24a_shutterstock_2447788247.jpg'),
      img('tp732v0s7r25f0n1bu4nhvpuag28_shutterstock_2439172231.jpg')
    ],
    dayImages: {
      5: [
        img('npssk7vwf4g034iu2f3onxwuq28y_Zenkoji%20Temple-6.jpg'),
        img('glvvy2079nzaqhmmd7wfo2enbc02_8668551948_a995d63ec2_b.jpg'),
        img('u4s0qq55rgnze19pb577ygcas1e0_Snow%20Monkey%20Park-1.jpg'),
        img('08hnvght5d7pksbjbn419xlk3ux8_jigokudani_snow_monkey_park_nagano_japan.png')
      ],
      6: [
        img('c58m1091gvwai0wxvpv6c6s330xj_Downpic.cc-84190874.jpg'),
        img('um1np28fhp4do9b4tj4eev1ffacs_40906793823_f26fe230df_o.jpg'),
        img('sahoqz9y8rtptljvxyqxc65vbw0v_download%20-%202024-07-24T163530.831.jpg'),
        img('o64g636ktfdqokhru1ozcvv0bcb0_download%20-%202024-07-24T164446.336.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Snow monkeys and Ikaho`,
      'Breakfast, then Zenkoji temple in Nagano',
      'The snow monkey park at Jigokudani',
      'Free time in the hot spring town of Kusatsu',
      'Ryokan night at Ikaho, tatami rooms and shared baths',
      `${DAY_MARK}Day 6 · Nikko and departure`,
      'Breakfast at the ryokan and check out',
      'A guided morning at Nikko',
      'The Toshogu shrine and the Shinkyo bridge',
      'Transfer to Tokyo or the airport for your flight home'
    ],
    accommodation: {
      name: 'Moriaki Ryokan, Shibukawa',
      description: '1 night · Breakfast · Ryokan room · 3★ · Traditional inn at Ikaho hot spring, with tatami rooms and shared baths',
      images: [
        img('eyhht15dxgtk008f8gfheuo7tfzt_caption.jpg'),
        img('u25ex03kworajp03poh3zjixnbxo_mwrh_bw1200h600.jpg'),
        img('6l9koh53mgnc7f1o9nt39sg0f0i1_i13s_bw1200h600.jpg'),
        img('zwgzh674bhctryk09au6c4plhbv1_0581d12000cuh8kpi1D8A_R_600_400_R5.webp'),
        img('vvnr92wzslc98eobyju884ljapo0_caption%20(2).jpg'),
        img('cfmnewc9plj0d6571gt1t3hsxaya_g2m0_bw1200h600.jpg'),
        img('wa55sz5rxh7yfrsdlrojsgq29suw_15-00-9-00.jpg'),
        img('58pssttfbzmikiqsian6aslr0xxh_vy88_bw1200h600.jpg'),
        img('r2zw2kn2g16ikdiebpd4b6ejclpw_yd9d_bw1200h600.jpg'),
        img('7hj095nejqvf7hgn1j4jeu39kfoa_0221s12000albhuo5F1CA_R_600_400_R5.webp'),
        img('8zzp55mdiaeniq2wwp413xb6ojzt_38xg_bw1200h600.jpg'),
        img('djj2ed4gmhsfcaownt4z6pstn7s8_0221w12000albhqyx1027_R_600_400_R5.webp'),
        img('7tgwk6y6ea86t5brlvvkzdz18211_nmnd_bw1200h600.jpg')
      ]
    },
    activities: [
      {
        name: 'Zenkoji temple',
        day: 5,
        optional: false,
        image: img('npssk7vwf4g034iu2f3onxwuq28y_Zenkoji%20Temple-6.jpg'),
        description: 'Nagano\'s great temple, home to what is said to be the first Buddhist statue brought to Japan, kept hidden behind the altar.'
      },
      {
        name: 'Snow monkey park',
        day: 5,
        optional: false,
        image: img('u4s0qq55rgnze19pb577ygcas1e0_Snow%20Monkey%20Park-1.jpg'),
        description: 'The hot spring at Jigokudani where wild macaques sit chest deep in the steaming water, often with snow on their heads.'
      },
      {
        name: 'Kusatsu hot spring town',
        day: 5,
        optional: false,
        image: img('nw0ny2iy5lyu669tcg644ky08efm_K%C5%8Dsenji%20Temple-1.jpg'),
        description: 'Free time in Kusatsu, where the hot water runs down wooden channels through the middle of the town square.'
      },
      {
        name: 'Nikko sightseeing tour',
        day: 6,
        optional: false,
        image: img('c58m1091gvwai0wxvpv6c6s330xj_Downpic.cc-84190874.jpg'),
        description: 'The lacquered Toshogu shrine in its cedar forest, the Shinkyo bridge and the Kegon falls before the drive back to Tokyo.'
      }
    ],
    program: {
      name: 'Ikaho',
      description: 'A ryokan night at a hot spring, with Zenkoji, the snow monkeys and Kusatsu on the way, and Nikko on the final morning.',
      image: img('m8rah7p8k54cihntnxmqoan6c24a_shutterstock_2447788247.jpg')
    }
  }
];

const detail = {
  slug: 'classic-japan-trails-short-group-tour',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Classic Japan Trails Short Group Tour',
  alt: 'Matsumoto castle reflected in its moat, Japan',
  days: '6 days / 5 nights',
  stations: '4 stops',
  transport: 'Coaches, trains and guided touring throughout',
  tag: 'Group tour',
  tags: ['Culture', 'Short trips'],
  price: 175968,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Kyoto', 'Nagano', 'Ikaho', 'Nikko'],
  stats: { days: 6, cities: 4, hotels: 4, activities: 8, transfers: 18 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['8 experiences', 'Activities'],
    ['18 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Six days, four towns and a ryokan night. The shortest way to see the mountains as well as the cities.',
    quoteMore: 'Day five is the long one, with Zenkoji, the monkeys and Kusatsu before the inn. Keep your camera charged and your bag small.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days on a short group tour: Tokyo with a guided city day, a night in Kyoto with its temples, the post town of Tsumago and Matsumoto castle, then the snow monkeys and a ryokan night at Ikaho before Nikko on the final morning.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights across four towns with daily breakfast, including a ryokan at Ikaho; coaches and trains throughout; guided sightseeing in Tokyo, Kyoto and Nikko; free time at Tsumago and Kusatsu; Matsumoto crow castle tickets; Zenkoji temple and snow monkey park tickets.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in beside Shinagawa station\nFree time in the Shinjuku district\nEvening at your own pace', hotel: 'Shinagawa Prince Hotel', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in beside Shinagawa station', 'Free time in the Shinjuku district'] },
    { title: 'Day 2: Tokyo sightseeing (B)', text: 'Breakfast, then a guided day through Tokyo\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in the city', hotel: 'Shinagawa Prince Hotel', highlights: ['Breakfast, then a guided day through Tokyo', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Bullet train to Kyoto (B)', text: 'Breakfast and check out, then the bullet train west\nCheck in opposite Kyoto station\nA guided afternoon through the old capital\nFree time in the Gion lanes in the evening', hotel: 'Miyako Hotel Kyoto Hachijo', highlights: ['Breakfast and check out, then the bullet train west', 'Check in opposite Kyoto station', 'A guided afternoon through the old capital'] },
    { title: 'Day 4: Tsumago and Matsumoto (B)', text: 'Breakfast and check out, then north into the mountains\nFree time in the old post town of Tsumago\nThe crow castle at Matsumoto on its moat\nCheck in at your Nagano hotel', hotel: 'Hotel Metropolitan Nagano', highlights: ['Breakfast and check out, then north into the mountains', 'Free time in the old post town of Tsumago', 'The crow castle at Matsumoto on its moat'] },
    { title: 'Day 5: Snow monkeys and Ikaho (B)', text: 'Breakfast, then Zenkoji temple in Nagano\nThe snow monkey park at Jigokudani\nFree time in the hot spring town of Kusatsu\nRyokan night at Ikaho, tatami rooms and shared baths', hotel: 'Moriaki Ryokan', highlights: ['Breakfast, then Zenkoji temple in Nagano', 'The snow monkey park at Jigokudani', 'Free time in the hot spring town of Kusatsu'] },
    { title: 'Day 6: Nikko and departure (B)', text: 'Breakfast at the ryokan and check out\nA guided morning at Nikko\nThe Toshogu shrine and the Shinkyo bridge\nTransfer to Tokyo or the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the ryokan and check out', 'A guided morning at Nikko', 'The Toshogu shrine and the Shinkyo bridge'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const classicJapanTrailsShortBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const classicJapanTrailsShortProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Kyoto', 'Nagano', 'Ikaho', 'Nikko'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 8,
  transfers: 18,
  meals: 5,
  price: detail.price,
  images: cardImages
};
