// Best of Singapore and Thailand. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg'),
  img('gy6ydvck32nkrqc0a957hn6qa1gn_shutterstock_1273928071.jpg'),
  img('mgac4dsd6bath7whtafidxvthqzc_shutterstock_368832815.jpg'),
  img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
  img('v19tslpbpelnwcjlb8vdysyvm403_shutterstock_1008532504-min.jpg'),
  img('nn3ddc2jsww3ka4dt8ovqbpyhh49_shutterstock_1753947629-min%20(1).jpg'),
  img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
  img('o5bkskf1hm5ywiqtcl6lf5lps6zu_shutterstock_427872661.jpg'),
  img('qw46v2de4a78q03dsvrujuwjzdvn_shutterstock_1463281034.jpg'),
  img('3kicse3qojgtvpf5e4aqzvskrzu4_shutterstock_203804005.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg'),
  img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
  img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
  img('qw46v2de4a78q03dsvrujuwjzdvn_shutterstock_1463281034.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Singapore',
    dayLabel: 'Day 1 to 3',
    images: [
      img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg'),
      img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg'),
      img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
      img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg')
    ],
    dayImages: {
      1: [
        img('azbhlzifrdx7zz6f811y0rtgvfuk_1626325173_shutterstock_360853979.jpg'),
        img('cgx6ab1cspd7wu0e04jze3dzbibk_singapore_night_safari.jpg'),
        img('y037tjrai7itj8ly5os89s8jzwmg_download%20(24).png'),
        img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg')
      ],
      2: [
        img('durtbjf99crlygjse28sv48r10xs_shutterstock_1319645060.jpg'),
        img('mmto1hk2nujlkltfsadj9s2ch3j9_1563452033_shutterstock_208160683_(1).jpg'),
        img('etwjtvxjtctcyj8zmdmmtz5rnff7_1563607619_shutterstock_1155676858.jpg'),
        img('xkc5gws4qd4uax4hvxwihi35fv35_1563619864_shutterstock_793620280.jpg')
      ],
      3: [
        img('t66b7ifmvhkbmh31tc0p66uufdkx_5gu7yvn61mqd6ywow5ja4y392lf0_shutterstock_2148400015.jpg'),
        img('5ny753dccex42fsfmdxfhlzlfvah_1626351333_shutterstock_302633321.jpg'),
        img('s2r4nfl80qk64lm24j05vwdt984y_VIAL1673.JPG'),
        img('xn9lk9obgfdswzotjh90r8e0ckq5_1563611407_WATERPARK.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Singapore`,
      'Arrival at Changi Airport and private sedan transfer to your Singapore hotel',
      'Check in at the ibis Novena and keep the first day free',
      'Optional: the Singapore Zoo and the Night Safari out at Mandai',
      `${DAY_MARK}Day 2 · Singapore city tour`,
      'Breakfast, then shared transfer for the Singapore city tour',
      'Merlion Park, Marina Bay, the Helix bridge and Chinatown',
      'Past Raffles Hotel, the Esplanade and the civic district',
      'Afternoon free around Orchard Road and the malls',
      `${DAY_MARK}Day 3 · Sentosa and the cable car`,
      'Breakfast, then shared transfer across to Sentosa island',
      'Round trip cable car sky pass with views over the harbour',
      'Optional: Universal Studios, the SEA Aquarium or Adventure Cove',
      'Return shared transfer to your hotel in the evening'
    ],
    accommodation: {
      name: 'ibis Singapore Novena, Singapore',
      description: '3 nights · Breakfast included · Deluxe room · 3★ · ibis Novena, two minutes from Novena MRT station',
      images: [
        img('d6klr7rae9mjjgqcyxptmvn8tba6_af67747a663f11e98b080242ac110008.png'),
        img('csfhgzj0hntodxb28qvgv965a24s_image_15.jpg'),
        img('8wl2g0cn2jx6h6ep0d4ru0betg4q_image_33.jpg'),
        img('kbp95nbgqxqinqjf05c2quuks1rz_image_3.jpg'),
        img('78572o6iiligczcwpf53m4rato6x_image_11.jpg'),
        img('arrzsh0apjh20wt83nd79jg94ago_image_25.jpg'),
        img('v5x55fh59onfprpxfidpel6m2u5z_image_30.jpg'),
        img('s6d2ibuhqldpzqygmojundstvj55_image_14.jpg'),
        img('oe2wlghbavuqtc5906tj65b7ajbt_image_42.jpg'),
        img('ob6cy8m0thir3bf3ys1oex0ehuks_image_20.jpg'),
        img('8i4sw4hxrsdydys98tihj4v2dmec_image_34.jpg'),
        img('3i7y1l1kck4i8qdwg3wetpdoefoo_image_24.jpg'),
        img('l2gou2c96m46k1eilwvcc5oakkpo_image_8.jpg'),
        img('hcqm47q3u6l1nhhf7e6bm7x36xn4_image_29.jpg')
      ]
    },
    activities: [
      {
        name: 'Singapore City Tour',
        day: 2,
        optional: false,
        image: img('durtbjf99crlygjse28sv48r10xs_shutterstock_1319645060.jpg'),
        description: 'A shared coach tour past Merlion Park, Marina Bay, the Helix bridge, Chinatown, Raffles Hotel and the civic district.'
      },
      {
        name: 'Sentosa Cable Car Sky Pass',
        day: 3,
        optional: false,
        image: img('t66b7ifmvhkbmh31tc0p66uufdkx_5gu7yvn61mqd6ywow5ja4y392lf0_shutterstock_2148400015.jpg'),
        description: 'A round trip on the cable car between Mount Faber, HarbourFront and Sentosa, with the whole harbour below you.'
      },
      {
        name: 'Singapore Zoo',
        day: 1,
        optional: true,
        image: img('azbhlzifrdx7zz6f811y0rtgvfuk_1626325173_shutterstock_360853979.jpg'),
        description: 'An open enclosure zoo at Mandai with orangutans overhead and white tigers, best in the cooler morning hours.'
      },
      {
        name: 'Night Safari',
        day: 1,
        optional: true,
        image: img('cgx6ab1cspd7wu0e04jze3dzbibk_singapore_night_safari.jpg'),
        description: 'A tram ride through the park after dark, when the lions, hyenas and leopards are actually awake.'
      }
    ],
    program: {
      name: 'Marina Bay and Sentosa',
      description: 'Three nights in the city with a tour of Marina Bay and Chinatown, and a Sentosa day built around the cable car.',
      image: img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Pattaya',
    dayLabel: 'Day 4 to 5',
    images: [
      img('g1iuz840ibwkomzsc03urzjpo60i_shutterstock_187879433.jpg'),
      img('gy6ydvck32nkrqc0a957hn6qa1gn_shutterstock_1273928071.jpg'),
      img('xqqgyuisthrhpr1pt4k869ukngar_shutterstock_1424645588-min.jpg'),
      img('hx1mex42a0hqgfl09mzf4titrit9_shutterstock_1272430873-min.jpg')
    ],
    dayImages: {
      4: [
        img('zrxata0eyg8ov4agkbcyc4oehwvj_1578641727_5457359187_ce9abc1e5c_o.jpg'),
        img('evpqo5dpu51e57fvs4n5kmq88ecf_1577443336_shutterstock_404113681.jpg'),
        img('3fj3lsetjczqgdekwzomhkpd6ffd_1462792555_Nong_Nooch.jpg'),
        img('g1iuz840ibwkomzsc03urzjpo60i_shutterstock_187879433.jpg')
      ],
      5: [
        img('we68xopgvhxvi7wt9eyhehbvwv1w_dl.beatsnoop.com-VHomu5ki9h.jpg'),
        img('kz1jbr0anl74tbg4qaspajd1oxm4_1472036650_8237106102_1f7541157d_b.jpg'),
        img('26irbobpyxgu82qr3ngdovihfmw9_shutterstock_1801193749.jpg'),
        img('g1iuz840ibwkomzsc03urzjpo60i_shutterstock_187879433.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · On to Pattaya`,
      'Breakfast, check out and private transfer to Changi Airport',
      'Optional: flight from Singapore to Bangkok, booked separately and not included',
      'Private sedan transfer from Suvarnabhumi Airport down to Pattaya',
      'Optional: the Sanctuary of Truth, Nong Nooch gardens or the floating market',
      `${DAY_MARK}Day 5 · Coral Island day trip`,
      'Breakfast, then shared transfer to the Bali Hai pier',
      'Speedboat transfer across to Coral Island for the day',
      'Swim and sunbathe at Tawaen beach, water sports payable on the sand',
      'Return speedboat and shared transfer to your Pattaya hotel'
    ],
    accommodation: {
      name: 'Bella Villa Prima, Pattaya, Pattaya',
      description: '2 nights · Breakfast included · Deluxe room · 3★ · Bella Villa Prima, a short ride from the Pattaya beach road',
      images: [
        img('jokdjkynn501a86cxqoci6x7kefy_425050114.jpg'),
        img('5xpny6puu50henbiubryarn8ur7y_201710041712247495-a0450ec0bc2211edb4c40a58a9feac02.png'),
        img('tjqolkhix8m9vl1zxhozioe0gbfx_415398325.jpg'),
        img('th0f1l94nksp773avzjz9ra65ndv_425049998.jpg'),
        img('7kua1g32duupvbhea2u3e2whsh0r_163066888.jpg'),
        img('vrdpgy1f8hjntjd9a6nk01vczox2_425050126.jpg'),
        img('8asjmjhcfrbpxlve7tuo7lvqa5nj_425328906.jpg'),
        img('a8rmi89k2g5mz93p8i64lp8n81is_201710041712247495-89ad96b5_z.png'),
        img('w2nauggf6ik7mxhf7idnk0f73fem_425049358.jpg'),
        img('v87yga29m06drovxplar757tij97_425327524.jpg'),
        img('m3fd6btdoxszt14putzpfu68e829_425328892.jpg'),
        img('thbxy3ydv83plbjaa80moanbshgp_425327520.jpg'),
        img('rgbe7w1uepkrjevjpxpjrcrbanf9_425327440.jpg'),
        img('6r46w4b9h7dq5x335zu33mtrbo4e_download.jpg'),
        img('chmrapuvw2h11mcae9d3hv3zod7d_c9456c80dbe011e69bc70a209fbd0127.png'),
        img('8favugaz0hiubrevoooy452waegf_425353952.jpg'),
        img('awkm3hljk20gysfzt7lunmnnaezu_28a2944e740611ea8dbc0242ac110002.png')
      ]
    },
    activities: [
      {
        name: 'Coral Island by Speedboat',
        day: 5,
        optional: false,
        image: img('we68xopgvhxvi7wt9eyhehbvwv1w_dl.beatsnoop.com-VHomu5ki9h.jpg'),
        description: 'A speedboat day out to Koh Larn with clear water at Tawaen beach, loungers on the sand and water sports if you want them.'
      },
      {
        name: 'Sanctuary of Truth',
        day: 4,
        optional: true,
        image: img('zrxata0eyg8ov4agkbcyc4oehwvj_1578641727_5457359187_ce9abc1e5c_o.jpg'),
        description: 'An enormous carved teak temple on the shore at Naklua, still being built by hand after forty years.'
      },
      {
        name: 'Nong Nooch Tropical Garden',
        day: 4,
        optional: true,
        image: img('3fj3lsetjczqgdekwzomhkpd6ffd_1462792555_Nong_Nooch.jpg'),
        description: 'Formal gardens, a cycad collection and cultural shows on a huge estate south of the city.'
      }
    ],
    program: {
      name: 'Coral Island and easy evenings',
      description: 'Two nights on the Gulf coast with a speedboat day at Koh Larn and the Pattaya markets close by.',
      image: img('g1iuz840ibwkomzsc03urzjpo60i_shutterstock_187879433.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Bangkok',
    dayLabel: 'Day 6 to 8',
    images: [
      img('zi12xgzjqrbv9gxjwy7w02yuczmb_shutterstock_1828092353-min.jpg'),
      img('cvd94dr8mjmqly8caqfs6ehd710n_co2.jpg'),
      img('mgac4dsd6bath7whtafidxvthqzc_shutterstock_368832815.jpg'),
      img('8esmek6ajh3sgyttq6cxyr5up2u6_shutterstock_482021800-min.jpg')
    ],
    dayImages: {
      6: [
        img('vxdefhygeg7j24lrb2zsr50g9wy1_1627295309_shutterstock_169001408.jpg'),
        img('agl5ooj3w4zdwm9h7sf0heg1d8jn_1627298362_shutterstock_1245649888.jpg'),
        img('rt32vgebnsjjxryvi5bh3rtbg377_download%20-%202023-12-04T183210.216.jpeg'),
        img('zi12xgzjqrbv9gxjwy7w02yuczmb_shutterstock_1828092353-min.jpg')
      ],
      7: [
        img('t6oeeneexy5ok1bvsoqz8xc1sbnx_shutterstock_2317763115.jpg'),
        img('q3gxvgo3fib86rqmes7b33i4k830_52637615382_533cdff4ec_o.jpg'),
        img('qnp0s6axsuql4voi9rz7pz3079gq_stock-photo-wat-maha-phruettharam-worawihan-in-bangkok-thailand-2198439611-transformed.jpeg'),
        img('s0dvtb7g96zt2o6fkpk5cgu6zf8f_download%20-%202024-04-26T160628.352.jpg')
      ],
      8: [
        img('zi12xgzjqrbv9gxjwy7w02yuczmb_shutterstock_1828092353-min.jpg'),
        img('cvd94dr8mjmqly8caqfs6ehd710n_co2.jpg'),
        img('mgac4dsd6bath7whtafidxvthqzc_shutterstock_368832815.jpg'),
        img('8esmek6ajh3sgyttq6cxyr5up2u6_shutterstock_482021800-min.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · On to Bangkok`,
      'Breakfast, check out and private sedan transfer up to Bangkok',
      'Check in and take the afternoon at your own pace',
      'Optional: the Erawan Museum, Sea Life Bangkok or Art in Paradise',
      `${DAY_MARK}Day 7 · Bangkok sightseeing`,
      'Breakfast, then shared transfer for the full day city tour',
      'The Golden Buddha at Wat Traimit and Wat Maha Phruettharam',
      'A stop at the gem gallery before the ride back to the hotel',
      'Evening free for the markets near your hotel',
      `${DAY_MARK}Day 8 · Departure`,
      'Breakfast and an easy check out',
      'Private sedan transfer to Suvarnabhumi Airport for your trip home'
    ],
    accommodation: {
      name: 'Convenient Park Hotel, Bangkok, Bangkok',
      description: '2 nights · Breakfast included · Deluxe room · 3★ · Convenient Park, close to the airport road and local markets',
      images: [
        img('yrzephwewqerv3lrfnp5hoaiu2tx_img44.jpg'),
        img('47ctn6ztterbx5a11fx58v67idej_img13.jpg'),
        img('rtz8watjoct0ps2wo0ulguenm8or_img2.jpg'),
        img('od401ezaffa4v61makk0datudi8e_img5.jpg'),
        img('10zrfb3hi0tgftfvy9ymylj7fcle_img1.jpg'),
        img('gkqp8kmspjc4hea560awdshddous_img34.jpg'),
        img('f5e88ebtevdcmkeb6t6d6wnpxo35_img11.jpg'),
        img('ppdnesp004ftokvde8rwbloz18y2_img7.jpg'),
        img('cr0rjrw6en45c9qka0fi55ylmfpl_img3.jpg'),
        img('5lcvn4hq1zjvsre9monftzfh3dex_img9.jpg'),
        img('yh58lzxe0hy6sxy9euwnuggfor8q_img21.jpg'),
        img('g1rz269gkkgxgrj50yk01e2zhekq_img37.jpg'),
        img('acw7lx0l6f8xzvy3oejy02kc8y3g_img36.jpg'),
        img('dlecj5g7l1rsr362y3ko7yit5lw2_img39.jpg')
      ]
    },
    activities: [
      {
        name: 'Full Day Bangkok City Tour',
        day: 7,
        optional: false,
        image: img('t6oeeneexy5ok1bvsoqz8xc1sbnx_shutterstock_2317763115.jpg'),
        description: 'A shared coach tour taking in the Golden Buddha at Wat Traimit, Wat Maha Phruettharam and a gem gallery.'
      },
      {
        name: 'Erawan Museum',
        day: 6,
        optional: true,
        image: img('vxdefhygeg7j24lrb2zsr50g9wy1_1627295309_shutterstock_169001408.jpg'),
        description: 'A three headed elephant in bronze above a hall of stained glass and gardens, out towards Samut Prakan.'
      },
      {
        name: 'Sea Life Bangkok Ocean World',
        day: 6,
        optional: true,
        image: img('agl5ooj3w4zdwm9h7sf0heg1d8jn_1627298362_shutterstock_1245649888.jpg'),
        description: 'A large aquarium under Siam Paragon with a walkthrough tunnel, easy to combine with the shopping on Rama I.'
      }
    ],
    program: {
      name: 'Temples, gems and city streets',
      description: 'Two nights in the capital with a full day tour of the Golden Buddha and the old temple quarter, and a free afternoon for markets.',
      image: img('zi12xgzjqrbv9gxjwy7w02yuczmb_shutterstock_1828092353-min.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-singapore-and-thailand',
  ctaHref: '/l/thailand/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Singapore and Thailand',
  alt: 'Marina Bay in Singapore lit up after dark with the city skyline behind',
  days: '8 days / 7 nights',
  stations: '3 stops',
  transport: 'Private sedan transfers with shared city tours and a speedboat crossing',
  tag: 'Family',
  tags: ['Family', 'Culture'],
  price: 76190,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Singapore', 'Sentosa', 'Pattaya', 'Coral Island', 'Bangkok'],
  stats: { days: 8, cities: 3, hotels: 3, activities: 4, transfers: 13 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['13 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ananya Iyer',
    image: '/team/asia-2.webp',
    role: 'Thailand expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Singapore first while everyone is fresh, then Thailand for the beach and the street food. Families love this order.',
    quoteMore: 'Keep the Sentosa day flexible and buy the Universal Studios ticket only if the children want the rides. The cable car pass alone is enough for the views.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days across Singapore and Thailand. Three nights in Singapore with a city tour and the Sentosa cable car, two on the Pattaya coast with a speedboat day at Coral Island, then two in Bangkok with a full day temple tour.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights in 3 hotels with daily breakfast; Singapore city tour; Sentosa cable car sky pass round trip; Coral Island speedboat tour from Pattaya; full day Bangkok city tour; 13 airport, intercity and sightseeing transfers; visa assistance.',
  intro2: 'Not included: international flights; the Singapore to Bangkok flight; visa charges; travel insurance; Sentosa attraction tickets; lunches and dinners; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Singapore (Arrival)', text: 'Arrival at Changi Airport and private sedan transfer to your Singapore hotel\nCheck in at the ibis Novena and keep the first day free\nOptional: the Singapore Zoo and the Night Safari out at Mandai', hotel: 'ibis Singapore Novena', highlights: ['Arrival at Changi Airport and private sedan transfer to your Singapore hotel', 'Check in at the ibis Novena and keep the first day free', 'Optional: the Singapore Zoo and the Night Safari out at Mandai'] },
    { title: 'Day 2: Singapore city tour (B)', text: 'Breakfast, then shared transfer for the Singapore city tour\nMerlion Park, Marina Bay, the Helix bridge and Chinatown\nPast Raffles Hotel, the Esplanade and the civic district\nAfternoon free around Orchard Road and the malls', hotel: 'ibis Singapore Novena', highlights: ['Breakfast, then shared transfer for the Singapore city tour', 'Merlion Park, Marina Bay, the Helix bridge and Chinatown', 'Past Raffles Hotel, the Esplanade and the civic district'] },
    { title: 'Day 3: Sentosa and the cable car (B)', text: 'Breakfast, then shared transfer across to Sentosa island\nRound trip cable car sky pass with views over the harbour\nOptional: Universal Studios, the SEA Aquarium or Adventure Cove\nReturn shared transfer to your hotel in the evening', hotel: 'ibis Singapore Novena', highlights: ['Breakfast, then shared transfer across to Sentosa island', 'Round trip cable car sky pass with views over the harbour', 'Optional: Universal Studios, the SEA Aquarium or Adventure Cove'] },
    { title: 'Day 4: On to Pattaya (B)', text: 'Breakfast, check out and private transfer to Changi Airport\nOptional: flight from Singapore to Bangkok, booked separately and not included\nPrivate sedan transfer from Suvarnabhumi Airport down to Pattaya\nOptional: the Sanctuary of Truth, Nong Nooch gardens or the floating market', hotel: 'Bella Villa Prima, Pattaya', highlights: ['Breakfast, check out and private transfer to Changi Airport', 'Optional: flight from Singapore to Bangkok, booked separately and not included', 'Private sedan transfer from Suvarnabhumi Airport down to Pattaya'] },
    { title: 'Day 5: Coral Island day trip (B)', text: 'Breakfast, then shared transfer to the Bali Hai pier\nSpeedboat transfer across to Coral Island for the day\nSwim and sunbathe at Tawaen beach, water sports payable on the sand\nReturn speedboat and shared transfer to your Pattaya hotel', hotel: 'Bella Villa Prima, Pattaya', highlights: ['Breakfast, then shared transfer to the Bali Hai pier', 'Speedboat transfer across to Coral Island for the day', 'Swim and sunbathe at Tawaen beach, water sports payable on the sand'] },
    { title: 'Day 6: On to Bangkok (B)', text: 'Breakfast, check out and private sedan transfer up to Bangkok\nCheck in and take the afternoon at your own pace\nOptional: the Erawan Museum, Sea Life Bangkok or Art in Paradise', hotel: 'Convenient Park Hotel, Bangkok', highlights: ['Breakfast, check out and private sedan transfer up to Bangkok', 'Check in and take the afternoon at your own pace', 'Optional: the Erawan Museum, Sea Life Bangkok or Art in Paradise'] },
    { title: 'Day 7: Bangkok sightseeing (B)', text: 'Breakfast, then shared transfer for the full day city tour\nThe Golden Buddha at Wat Traimit and Wat Maha Phruettharam\nA stop at the gem gallery before the ride back to the hotel\nEvening free for the markets near your hotel', hotel: 'Convenient Park Hotel, Bangkok', highlights: ['Breakfast, then shared transfer for the full day city tour', 'The Golden Buddha at Wat Traimit and Wat Maha Phruettharam', 'A stop at the gem gallery before the ride back to the hotel'] },
    { title: 'Day 8: Departure (B)', text: 'Breakfast and an easy check out\nPrivate sedan transfer to Suvarnabhumi Airport for your trip home', hotel: 'Departure', highlights: ['Breakfast and an easy check out', 'Private sedan transfer to Suvarnabhumi Airport for your trip home'] }
  ],
  outro: 'Not included: international flights; the Singapore to Bangkok flight; visa charges; travel insurance; Sentosa attraction tickets; lunches and dinners; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '#' },
  { label: 'Thailand', href: '/asia/thailand' },
  { label: detail.title }
];

export const bestOfSingaporeThailandBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfSingaporeThailandProduct = {
  slug: detail.slug,
  places: stops.map((s) => s.name),
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 4,
  transfers: 13,
  meals: 7,
  price: detail.price,
  images: cardImages
};
