// Silk Road Crossing: Tashkent, Samarkand and Almaty. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('s5lchgzrud8155eyr2zxpl2y50j5_shutterstock_585990431.jpg'),
  img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
  img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg'),
  img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
  img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg'),
  img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('s5lchgzrud8155eyr2zxpl2y50j5_shutterstock_585990431.jpg'),
  img('w091v8rswgx141iwtnv913h4k2zp_caption%20(73).jpg'),
  img('etk664ktd4eab7v3zo8zp3bxfsiy_dc77d033f2187581aee9f331dba66bdd.jpg'),
  img('wzo62gp7xhup4wfc0e1apjy8x2wc_amir_temur_square_5.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tashkent',
    subtitle: 'Tashkent → Khujand',
    dayLabel: 'Day 1 to 2',
    images: [
      img('s5lchgzrud8155eyr2zxpl2y50j5_shutterstock_585990431.jpg'),
      img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
      img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
      img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg')
    ],
    dayImages: {
      1: [
        img('w091v8rswgx141iwtnv913h4k2zp_caption%20(73).jpg'),
        img('etk664ktd4eab7v3zo8zp3bxfsiy_dc77d033f2187581aee9f331dba66bdd.jpg'),
        img('wzo62gp7xhup4wfc0e1apjy8x2wc_amir_temur_square_5.jpg'),
        img('ke07varu208obzdi0r9c77gosid4_kosmonavtlar-metro-station-interior-tashkent_78361-19496.jpg')
      ],
      2: [
        img('b3lv18zabxnurnm5fi0yv2nr89to_shutterstockeditorial1542863342.jpg'),
        img('5myujvht2fj78bwka3lvyyh9zoy9_new-panjakent-bazar13%20(1).jpg'),
        img('mrxqhp5k5ygof1ntxbx9kifj2d3k_q89b82zx1dtz164ba5kpggm817qkkr1f%20(1).jpg'),
        img('heqav0g9oxn1ybyfyaz7e3jt6oae_panchshanbe-bazaar3%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Tashkent`,
      'Arrival at Tashkent International and transfer to your hotel',
      'Check in, then out on foot with your guide',
      'The domed halls of the Chorsu bazaar',
      'Amir Temur Square and the Navoi theatre',
      `${DAY_MARK}Day 2 · Across to Khujand in Tajikistan`,
      'Breakfast, then east to the Oybek border post',
      'Into Tajikistan and on to Khujand',
      'The Arbob Palace and the Panjshanbe market',
      'The Sughd regional museum before the run back'
    ],
    accommodation: {
      name: 'Star Hotel Tashkent, Tashkent',
      description: '2 nights · Breakfast · Standard room · 3★ · Simple hotel within reach of the metro and Chorsu',
      images: [
        img('b2cf80ungcj0jzkcfwq5drmt08tu_Star%201.jpg'),
        img('ge0dupo3idnif3dgmph1a6583sum_Star%202.jpg'),
        img('dx1bif8hl17k5wi0dcqn9dfo420d_Star%204.jpg'),
        img('82yhx7hjj2cw5r0iz77wgs6w8pl1_Star%206.jpg'),
        img('6anh7r3q9zc53p62h778yp9oy3nf_Star%203.jpg'),
        img('vj4ahjhav33ckgz2lj596sxpl6uq_Star%205.jpg')
      ]
    },
    activities: [
      {
        name: 'Tashkent walking tour',
        day: 1,
        optional: false,
        image: img('w091v8rswgx141iwtnv913h4k2zp_caption%20(73).jpg'),
        description: 'The domed Chorsu bazaar, Amir Temur Square, the Navoi theatre and the mosaic covered Kosmonavtlar metro station.'
      },
      {
        name: 'Day trip to Khujand in Tajikistan',
        day: 2,
        optional: false,
        image: img('b3lv18zabxnurnm5fi0yv2nr89to_shutterstockeditorial1542863342.jpg'),
        description: 'Across the Oybek border into Tajikistan for the Arbob Palace, the Panjshanbe market and the Sughd regional museum.'
      }
    ],
    program: {
      name: 'Tashkent',
      description: 'Two nights in the Uzbek capital, with a walking tour of the bazaar and a border crossing day into Tajikistan.',
      image: img('s5lchgzrud8155eyr2zxpl2y50j5_shutterstock_585990431.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Samarkand',
    subtitle: 'Samarkand → the Seven Lakes',
    dayLabel: 'Day 3 to 4',
    images: [
      img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg'),
      img('cfogwtvugrv9k4vldbzq99sahtjn_shutterstock_2257003809.jpg'),
      img('s5lchgzrud8155eyr2zxpl2y50j5_shutterstock_585990431.jpg'),
      img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg')
    ],
    dayImages: {
      3: [
        img('hmg8h631xdd3ym3t7ml19sgvq4n3_74472ea26534254c192e98c9afe465d169a9617beafec38fa76263a9137a76ff.jpg'),
        img('d4vs1pqpovszbha561cyk3ck8v3g_3308px-Shah-i-Zinda_01.jpg'),
        img('9ym0dkt828cuh7m1ua5m9ogaofkx_Samarkand_Gur_Emir_Mausoleum.jpeg'),
        img('thghzrrw12295u1fu0b4drw2u1si_siab-bazaar1.jpg')
      ],
      4: [
        img('7d2ljduqj57ccchwhjpwfekekt0a_f7b3dd38-9566-4661-abb3-10d57bab9674.jpg'),
        img('h1ofzxrp63c49los9enncwqfa5nn_n.webp'),
        img('imhr5mhzl32alv160f2rxxra3jz1_s.jpg'),
        img('yn9dl3k1ljpywbpgtu5yp8lj8m0z_g.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · On to Samarkand`,
      'Breakfast and check out of your Tashkent hotel',
      'Station transfer and the fast train to Samarkand',
      'The tiled madrasahs of the Registan on foot',
      'Bibi Khanym, Shah i Zinda and the Gur e Amir',
      `${DAY_MARK}Day 4 · The Seven Lakes of Tajikistan`,
      'Early breakfast, then south into the Fann mountains',
      'The chain of seven coloured lakes',
      'From Nezhigon up to Hazorchashma',
      'Evening transfer back to Samarkand'
    ],
    accommodation: {
      name: 'Gur Emir Palace, Samarkand',
      description: '2 nights · Breakfast · Standard room · 3★ · Small hotel beside the Gur e Amir mausoleum',
      images: [
        img('wuodxzel998s85h5c73srl0ma9qt_Emir%208.jpg'),
        img('75112kgdims1hqyqn4uxpci033go_Emir%207.jpg'),
        img('jgjeynseikf85xxf54gha3dmwjty_Emir%203.jpg'),
        img('m884oir7pnfu3etwgkfdby1j6wo1_Emir%204.jpg'),
        img('6essw9b1fbkic30uuoe4imaq85kb_Emir%206.jpg'),
        img('mj8lm65bs1prcknhtaq8zchoudzn_Emir%203.png'),
        img('mo2u7saz9ectrwiq6ak29a2wjp7y_Emir%202.jpg'),
        img('znb7e301cvh8mfax0sgcvawblvb8_Emir%205.jpg'),
        img('d7e6s7pzk677q0qfpj5upqx4mz6y_1.jpg')
      ]
    },
    activities: [
      {
        name: 'Samarkand historic walking tour',
        day: 3,
        optional: false,
        image: img('hmg8h631xdd3ym3t7ml19sgvq4n3_74472ea26534254c192e98c9afe465d169a9617beafec38fa76263a9137a76ff.jpg'),
        description: 'The tiled madrasahs of the Registan, the Bibi Khanym mosque, the Shah i Zinda tombs and the Gur e Amir mausoleum.'
      },
      {
        name: 'Seven Lakes of Tajikistan',
        day: 4,
        optional: false,
        image: img('7d2ljduqj57ccchwhjpwfekekt0a_f7b3dd38-9566-4661-abb3-10d57bab9674.jpg'),
        description: 'A day into the Fann mountains along the chain of seven coloured lakes, from Nezhigon up to Hazorchashma.'
      }
    ],
    program: {
      name: 'Samarkand',
      description: 'Two nights at the heart of the old Silk Road, with the Registan and a mountain day along the Seven Lakes.',
      image: img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Tashkent',
    dayLabel: 'Day 5',
    images: [
      img('s5lchgzrud8155eyr2zxpl2y50j5_shutterstock_585990431.jpg'),
      img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
      img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
      img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg')
    ],
    dayImages: {
      5: [
        img('bjo0qo2jqu8xhue59sxdjt8r0sjq_2-0-0-0-0-1583391101.jpg'),
        img('h41vtvhne3ee3tp7n59r8c7scafy_tashkent-television-tower-uzbekistan-sundown-cloudy-sky-background_431724-14240.jpg'),
        img('bcddn6tt6cms845gupni5jlh37hg_dl.beatsnoop.com-QmK5GAiPnX.jpg'),
        img('s5lchgzrud8155eyr2zxpl2y50j5_shutterstock_585990431.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Back to Tashkent`,
      'Breakfast and check out for the run north',
      'Back to Tashkent and check in for the night',
      'The day free in the capital',
      'Optional: the Temurid museum and the pilaf centre'
    ],
    accommodation: {
      name: 'Hotel New York Tashkent, Tashkent',
      description: '1 night · Breakfast · Standard room · 3★ · Quiet hotel handy for the airport run',
      images: [
        img('9j6qe4jhj0ntgy02ouomfpo1ct9z_NEW%201.jpg'),
        img('x90xkt16cem2taa9e4ec856ifsaw_NEW%203.jpg'),
        img('qosmnom0tcsx3m6zglb3z7pni4mj_NEW%205.jpg'),
        img('ru1b3vi4j3mg94vyyjd43o1ss6wd_NEW%206.jpg'),
        img('0rx01udec19uyii4b0xg9bt3ioq7_NEW%207.jpg'),
        img('7aiha36se0i0vp44qqg7ezodwplo_NEW%208.jpg'),
        img('g5i7g7yr2f7o6cw8yd14b9rqcekf_NEW%204.jpg'),
        img('crefx56p7s6uzvj3lujcpo1722xd_NEW%202.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Tashkent',
      description: 'A night back in the capital with the day free before the flight north onto the Kazakh steppe.',
      image: img('s5lchgzrud8155eyr2zxpl2y50j5_shutterstock_585990431.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Astana',
    subtitle: 'Astana → Burabay',
    dayLabel: 'Day 6 to 7',
    images: [
      img('s5lchgzrud8155eyr2zxpl2y50j5_shutterstock_585990431.jpg')
    ],
    dayImages: {
      6: [
        img('32js7opecfp8ukofrr31979oeirl_shutterstock_2447598499.jpg'),
        img('b60z31n71w97eqol2yrnkr8yyd2j_Khan_Shatyr,_Astana.jpg'),
        img('6lm2mnalyrofvcklk989v7ier5r1_48884588892_43ed0da01f_o.jpg'),
        img('338a5nkmr8w7pggnw1wo0910mal3_hhhhhh.jpg')
      ],
      7: [
        img('uyzozmif95wuqfvaawjhg0qutspj_dl.beatsnoop.com-final-gbB4R5DyGq.jpg'),
        img('m6fg35mh6l53qquhw5xvd1h111mm_1618297274_1200px-Burnaby_Lake_on_a_cloudy_day.jpeg'),
        img('s5lchgzrud8155eyr2zxpl2y50j5_shutterstock_585990431.jpg'),
        img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Tashkent to Astana`,
      'Breakfast, then transfer to Tashkent airport',
      'Optional: flight Tashkent to Astana, booked with us',
      'Arrival transfer and check in on the left bank',
      'The Baiterek tower and the Khan Shatyr tent',
      `${DAY_MARK}Day 7 · Burabay National Park`,
      'Breakfast, then north to Burabay',
      'Pine forest, granite outcrops and clear lakes',
      'The country Kazakhs call their Switzerland',
      'Evening transfer back to the capital'
    ],
    accommodation: {
      name: 'Royal Park Hotel & Spa, Astana',
      description: '2 nights · Breakfast · Standard room · 3★ · Comfortable hotel on the left bank near the Baiterek',
      images: [
        img('wkef0wi5n4fpylm4fhvlqagmjat3_Park5.jpg'),
        img('ng7eg4vdk7xi5fes5nz03ud9ecev_Park1.jpg'),
        img('p98lx3wa4kqrre1u3ouqzpwtsldd_Park2.jpg'),
        img('s2z4e38bu779n0dq1z3k6k8fv1w0_Park7.jpg'),
        img('j70994nr7bts7ilq7bfw1zfbwygs_Park6.jpg'),
        img('odk4fy7jyn83yma7lpeohduva8du_Park8.jpg'),
        img('b6cov7yawhhuzc3f8vzg8ceusrgs_Park3.jpg'),
        img('gpfrz1bzyuu7dd4e6ggqoywhs95e_Park4.jpg')
      ]
    },
    activities: [
      {
        name: 'Astana sightseeing tour',
        day: 6,
        optional: false,
        image: img('32js7opecfp8ukofrr31979oeirl_shutterstock_2447598499.jpg'),
        description: 'The Baiterek tower, the Khan Shatyr tent and the Nur Alem sphere, a capital built from nothing on the open steppe.'
      },
      {
        name: 'Burabay National Park',
        day: 7,
        optional: false,
        image: img('uyzozmif95wuqfvaawjhg0qutspj_dl.beatsnoop.com-final-gbB4R5DyGq.jpg'),
        description: 'Pine forest, granite outcrops and clear lakes a few hours north, the stretch of country Kazakhs call their Switzerland.'
      }
    ],
    program: {
      name: 'Astana',
      description: 'Two nights in the new Kazakh capital with its landmark towers and a day out in the lakes and pines of Burabay.',
      image: img('s5lchgzrud8155eyr2zxpl2y50j5_shutterstock_585990431.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Almaty',
    subtitle: 'Almaty → Charyn Canyon',
    dayLabel: 'Day 8 to 11',
    images: [
      img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
      img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
      img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg'),
      img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg')
    ],
    dayImages: {
      8: [
        img('elvqtnsme6ctj6hi54h99ufvu092_dl.beatsnoop.com-1714737499.jpg'),
        img('sen8qo3cxac4ddexlpcw7m93m9pq_monument-of-independence-almaty.jpg'),
        img('x5107z3hn22853u89owu0rrfahox_28panfilov-guardsmen1.png'),
        img('3zw7eayhe7zqmhe4u76jo3iio0ux_ascension-cathedral-almaty-kazakhstan-2.jpg')
      ],
      9: [
        img('unuv5nfboec54f5n9ampr6zjyu4b_dl.beatsnoop.com-1714742344.jpg'),
        img('koghfpteo1o0tvkakl3yhx0ekrl9_compressed-Cable-Car-from-Shymbulak-Ski-Resort-Almaty-Kazakhsthan-min-min.jpeg'),
        img('vrjnt8wwvr78tk7y6bjhxab6pm7x_Medeu-_4.jpg'),
        img('jxnmhh6hckt5134tfufe4svyclqb_19134248232_df028bebc8_o.jpg')
      ],
      10: [
        img('46q2uqsxkc2ew0xijdcove67axyr_dl.beatsnoop.com-final-mKejacPGXh.jpg'),
        img('l33rnccy9xk7iglvrgmh0tb6gew0_1618298288_1554123490_charynskij-kanon-1.jpg'),
        img('r1d98eg10nugezjii0mcf4bgeibk_download.jpg'),
        img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg')
      ],
      11: [
        img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg'),
        img('tjizdqv64vzels6a2fmlh3tczjfu_shutterstock_2386909437.jpg'),
        img('mz46chozqy26s19syusgbpyie0b7_shutterstock_2337469673.jpg'),
        img('8mbxn3w7z2ee7rs1956qwe9u6mid_shutterstock_2341832281.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · Astana to Almaty`,
      'Breakfast and check out of your Astana hotel',
      'Optional: flight Astana to Almaty, booked with us',
      'Arrival transfer and check in for three nights',
      'A guided tour of the old capital',
      `${DAY_MARK}Day 9 · Medeu rink and Shymbulak`,
      'Breakfast, then up the Malaya Almatinka valley',
      'The Medeu dam and its Olympic skating rink',
      'On by gondola to the Shymbulak ski resort',
      'Snow peaks of the Zailiysky Alatau above you',
      `${DAY_MARK}Day 10 · Charyn Canyon and Kolsai Lake`,
      'Early breakfast and a long day out east',
      'The red walls of the Valley of Castles',
      'The canyon floor path beside the Charyn river',
      'On to the forested shore of Kolsai lake',
      `${DAY_MARK}Day 11 · Departure from Almaty`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Astra Hotel, Almaty',
      description: '3 nights · Breakfast · Standard room · 3★ · Friendly hotel in the centre of the old capital',
      images: [
        img('yxplb8kdertfr9lap7rx02pcxgay_Astra%201.jpg'),
        img('szzijwfl7ilrmtme51hkv16yoxgl_Astra%206.jpg'),
        img('f3fdkof0roedf7ojhsbhna2gp35a_Astra%207.jpg'),
        img('5x1v94wm757orta6rt01dm65l7wa_Astra%203.jpg'),
        img('otyy5dz63i3kpnxbvuqclahvdsba_Astra%202.jpg'),
        img('cu180dv174zstiawzy5hr3cd8j64_Astra%204.jpg'),
        img('nivxc7n4u3r0d2alr9lkt78ns4ai_Astra%205.jpg')
      ]
    },
    activities: [
      {
        name: 'Almaty city sightseeing tour',
        day: 8,
        optional: false,
        image: img('elvqtnsme6ctj6hi54h99ufvu092_dl.beatsnoop.com-1714737499.jpg'),
        description: 'A guided tour of the old capital, taking in the Monument of Independence, Panfilov Park and the wooden Ascension Cathedral.'
      },
      {
        name: 'Medeu rink and Shymbulak ski resort',
        day: 9,
        optional: false,
        image: img('unuv5nfboec54f5n9ampr6zjyu4b_dl.beatsnoop.com-1714742344.jpg'),
        description: 'A day up the Malaya Almatinka valley to the Olympic skating rink at Medeu, then by gondola to the Shymbulak slopes.'
      },
      {
        name: 'Charyn Canyon and Kolsai Lake',
        day: 10,
        optional: false,
        image: img('46q2uqsxkc2ew0xijdcove67axyr_dl.beatsnoop.com-final-mKejacPGXh.jpg'),
        description: 'A long day out to the red sandstone Valley of Castles in Charyn Canyon, then up to the forested shore of Kolsai lake.'
      }
    ],
    program: {
      name: 'Almaty',
      description: 'Three nights to finish in the old capital, with the city tour, the Shymbulak gondola and a day at Charyn Canyon.',
      image: img('8jtx9ygij0btsiwv9p58b5oqnxvd_shutterstock_2074559314.jpg')
    }
  }
];

const detail = {
  slug: 'silk-road-crossing-tashkent-samarkand-and-almaty',
  ctaHref: '/l/kazakhstan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Silk Road Crossing: Tashkent, Samarkand and Almaty',
  alt: 'Tiled madrasah facades on the Registan in Samarkand',
  days: '11 days / 10 nights',
  stations: '5 stops',
  transport: 'Private transfers, guided walking tours and two internal flights',
  tag: 'Culture',
  tags: ['Culture', 'Multi-country'],
  price: 118750,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tashkent', 'Samarkand', 'Astana', 'Almaty'],
  stats: { days: 11, cities: 5, hotels: 4, activities: 9, transfers: 17 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['9 experiences', 'Activities'],
    ['17 transfers', 'Transport'],
    ['10 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aisha',
    image: '/experts/riya.webp',
    role: 'Kazakhstan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three countries in ten nights and still only two internal flights. The Registan and the Charyn Canyon in the same trip is a rare combination.',
    quoteMore: 'Carry your passport everywhere on days two and four. Both of those run across the Tajik border and back in a single day.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eleven days along the old Silk Road and out onto the steppe: Tashkent and a border day in Khujand, the tiled Registan at Samarkand and the Seven Lakes, then Astana with Burabay and Almaty with Shymbulak and Charyn Canyon.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 10 nights with daily breakfast across Tashkent, Samarkand, Astana and Almaty; private airport transfers; Tashkent walking tour; day trip to Khujand in Tajikistan; a guided historic walking tour of Samarkand; the Seven Lakes tour in Tajikistan; Astana sightseeing tour; Burabay National Park trip; Almaty city sightseeing tour; Medeu and Shymbulak day trip; Charyn Canyon and Kolsai Lake day trip.',
  intro2: 'Not included: international flights; the two internal flights; Uzbekistan, Tajikistan and Kazakhstan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tashkent (Arrival)', text: 'Arrival at Tashkent International and transfer to your hotel\nCheck in, then out on foot with your guide\nThe domed halls of the Chorsu bazaar\nAmir Temur Square and the Navoi theatre', hotel: 'Star Hotel Tashkent', highlights: ['Arrival at Tashkent International and transfer to your hotel', 'Check in, then out on foot with your guide', 'The domed halls of the Chorsu bazaar'] },
    { title: 'Day 2: Across to Khujand in Tajikistan (B)', text: 'Breakfast, then east to the Oybek border post\nInto Tajikistan and on to Khujand\nThe Arbob Palace and the Panjshanbe market\nThe Sughd regional museum before the run back', hotel: 'Star Hotel Tashkent', highlights: ['Breakfast, then east to the Oybek border post', 'Into Tajikistan and on to Khujand', 'The Arbob Palace and the Panjshanbe market'] },
    { title: 'Day 3: On to Samarkand (B)', text: 'Breakfast and check out of your Tashkent hotel\nStation transfer and the fast train to Samarkand\nThe tiled madrasahs of the Registan on foot\nBibi Khanym, Shah i Zinda and the Gur e Amir', hotel: 'Gur Emir Palace', highlights: ['Breakfast and check out of your Tashkent hotel', 'Station transfer and the fast train to Samarkand', 'The tiled madrasahs of the Registan on foot'] },
    { title: 'Day 4: The Seven Lakes of Tajikistan (B)', text: 'Early breakfast, then south into the Fann mountains\nThe chain of seven coloured lakes\nFrom Nezhigon up to Hazorchashma\nEvening transfer back to Samarkand', hotel: 'Gur Emir Palace', highlights: ['Early breakfast, then south into the Fann mountains', 'The chain of seven coloured lakes', 'From Nezhigon up to Hazorchashma'] },
    { title: 'Day 5: Back to Tashkent (B)', text: 'Breakfast and check out for the run north\nBack to Tashkent and check in for the night\nThe day free in the capital\nOptional: the Temurid museum and the pilaf centre', hotel: 'Hotel New York Tashkent', highlights: ['Breakfast and check out for the run north', 'Back to Tashkent and check in for the night', 'The day free in the capital'] },
    { title: 'Day 6: Tashkent to Astana (B)', text: 'Breakfast, then transfer to Tashkent airport\nOptional: flight Tashkent to Astana, booked with us\nArrival transfer and check in on the left bank\nThe Baiterek tower and the Khan Shatyr tent', hotel: 'Royal Park Hotel & Spa', highlights: ['Breakfast, then transfer to Tashkent airport', 'Optional: flight Tashkent to Astana, booked with us', 'Arrival transfer and check in on the left bank'] },
    { title: 'Day 7: Burabay National Park (B)', text: 'Breakfast, then north to Burabay\nPine forest, granite outcrops and clear lakes\nThe country Kazakhs call their Switzerland\nEvening transfer back to the capital', hotel: 'Royal Park Hotel & Spa', highlights: ['Breakfast, then north to Burabay', 'Pine forest, granite outcrops and clear lakes', 'The country Kazakhs call their Switzerland'] },
    { title: 'Day 8: Astana to Almaty (B)', text: 'Breakfast and check out of your Astana hotel\nOptional: flight Astana to Almaty, booked with us\nArrival transfer and check in for three nights\nA guided tour of the old capital', hotel: 'Astra Hotel', highlights: ['Breakfast and check out of your Astana hotel', 'Optional: flight Astana to Almaty, booked with us', 'Arrival transfer and check in for three nights'] },
    { title: 'Day 9: Medeu rink and Shymbulak (B)', text: 'Breakfast, then up the Malaya Almatinka valley\nThe Medeu dam and its Olympic skating rink\nOn by gondola to the Shymbulak ski resort\nSnow peaks of the Zailiysky Alatau above you', hotel: 'Astra Hotel', highlights: ['Breakfast, then up the Malaya Almatinka valley', 'The Medeu dam and its Olympic skating rink', 'On by gondola to the Shymbulak ski resort'] },
    { title: 'Day 10: Charyn Canyon and Kolsai Lake (B)', text: 'Early breakfast and a long day out east\nThe red walls of the Valley of Castles\nThe canyon floor path beside the Charyn river\nOn to the forested shore of Kolsai lake', hotel: 'Astra Hotel', highlights: ['Early breakfast and a long day out east', 'The red walls of the Valley of Castles', 'The canyon floor path beside the Charyn river'] },
    { title: 'Day 11: Departure from Almaty (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; the two internal flights; Uzbekistan, Tajikistan and Kazakhstan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Kazakhstan', href: '/asia/kazakhstan' },
  { label: detail.title }
];

export const silkRoadTashkentSamarkandAlmatyBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const silkRoadTashkentSamarkandAlmatyProduct = {
  slug: detail.slug,
  places: ['Tashkent', 'Samarkand', 'Astana', 'Almaty'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 11,
  stops: 5,
  hotels: 4,
  cities: 5,
  activities: 9,
  transfers: 17,
  meals: 10,
  price: detail.price,
  images: cardImages
};
