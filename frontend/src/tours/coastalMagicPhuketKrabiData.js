// Coastal Magic of Phuket and Krabi. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('q0rofzuv74wu1axaon9rmkcob0jh_shutterstock_448476727.jpg'),
  img('x82hyykufd6uh6gr0lr054hlwjio_shutterstock_1045107625-min.jpg'),
  img('wgw28loe37wumwa59avtvzp7gcn4_shutterstock_2253884321.jpg'),
  img('myp0svt552xqngaztwvvsb6ugnaj_shutterstock_740293555.jpg'),
  img('uhyclhw5d3ngfvigxaavcrl0getu_shutterstock_1111881161%20(1).jpg'),
  img('g00n2o6s2013n9ufu4d5m073o5fr_shutterstock_658385155-min%20(1).jpg'),
  img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg'),
  img('xf4ja2z7pa5m0rtqxup6gr50qyj9_shutterstock_2172676377-min.jpg'),
  img('nl697ledztoenvi45t7u86mnkm6v_shutterstock_2337247967%20(1)%20(1).jpg'),
  img('pru9lbfjag7aglyp59b91ovwja5j_shutterstock_1710737992.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Phuket',
    dayLabel: 'Day 1 to 3',
    images: [
      img('q0rofzuv74wu1axaon9rmkcob0jh_shutterstock_448476727.jpg'),
      img('nl697ledztoenvi45t7u86mnkm6v_shutterstock_2337247967%20(1)%20(1).jpg'),
      img('dt3g7wxiv0cq88va8n6qzye08rel_shutterstock_2130087425%20(1).jpg'),
      img('wgw28loe37wumwa59avtvzp7gcn4_shutterstock_2253884321.jpg')
    ],
    dayImages: {
      1: [
        img('rirxw5ek28b3cdhfeg1cd3h84t8f_shutterstock_1421008520.jpg'),
        img('0aehywgij1ieurhvsiwdwlfgx98k_36371281724_a12a505647_o.jpg'),
        img('u435b4jdyx17w5m20t1395p73pis_9613826184_ba3186465a_o.jpg'),
        img('495y5x6h2qo8ln8v8etzufhkt5h0_shutterstock_1283102005.jpg')
      ],
      2: [
        img('hpa4azp4say5a7xk7is7cvzn1v0m_dl.beatsnoop.com-R0BH6SMQ7h.jpg'),
        img('v6a17443ovp0a99j7nc95113gafl_1462975119_8082854403_dc5d2a88e5_o.jpg'),
        img('6kv2if7t8tqqp0ait2c0j5r8fm3h_shutterstock_176838932.jpg'),
        img('3mfwxmvwud1iv4bo1l0uihm5omzw_1627129752_shutterstock_1140016289_(2).jpg')
      ],
      3: [
        img('3n9nd0ajyriycc2m4us0fpizaor7_ezgif.com-gif-maker%20(8).png'),
        img('qsvbg8xqjyo5kwvemsenqgipdtic_riwmt3ygoh284tfu7z8usi8s0e8w_tk3.jpg'),
        img('pd5ajyy1qihvxyct4gyd87fhu9nt_1462873140_3709375362_b0f1303477_b.jpg'),
        img('sz0v2h8zow0es6se40n88gfzm819_1472028446_4345682460_5bd058ee28_b.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Phuket`,
      'Arrival at Phuket International Airport and private sedan transfer to your hotel',
      'Check in at The Marina Phuket and keep the first day free',
      'Optional: Wat Chalong, sunset at Promthep Cape or Old Phuket Town',
      `${DAY_MARK}Day 2 · Phi Phi islands by speedboat`,
      'Breakfast, then shared transfer down to the Phuket pier',
      'Speedboat transfer out to the Phi Phi group for the whole day',
      'Maya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, with lunch',
      'Return speedboat and shared transfer to your hotel',
      `${DAY_MARK}Day 3 · Tiger Kingdom and a free afternoon`,
      'Breakfast, then private transfer out to Tiger Kingdom',
      'Big tiger encounter with the keepers alongside you throughout',
      'Back by early afternoon with the rest of the day free',
      'Optional: the Phuket Aquarium at Cape Panwa or the Tha Rua shrine'
    ],
    accommodation: {
      name: 'The Marina Phuket Hotel, Phuket',
      description: '3 nights · Breakfast included · Super Deluxe room · 4★ · The Marina Phuket, a short walk from the beach',
      images: [
        img('iccpdqudq27ewfznsfpkx4rrv1dy_download.jpg'),
        img('t4vwrm8kd8hij4j2h6c12mdws54q_download%20(6).jpg'),
        img('t7mbico9mxjimyvdl1c14b921yi5_download%20(9).jpg'),
        img('d1oh0f8yqqnpmaz4st9rpov4rhb5_download%20(13).jpg'),
        img('9gx13w73qjm3w0hh26zbks90e7ps_download%20(11).jpg'),
        img('43kamy1s892qdt3skk55nfbf7m2j_download%20(7).jpg'),
        img('aay7qs6dv8o5owrxah4xwcygqgva_download%20(4).jpg'),
        img('zzsqm6bmux8y06mn62u5ltd7flvg_download%20(5).jpg'),
        img('5k264rban2ms7faumcm1ggj92p06_download%20(10).jpg'),
        img('ropoezlxhgwu3b0k08rkkygaxk5n_download%20(3).jpg'),
        img('ccmqpty7v9qlj3snbv7oh1163rri_download%20(12).jpg'),
        img('2ovruf9p0osc1duzwr4un2n5cwqn_download%20(8).jpg'),
        img('q5la4lc7heunejpys94jctoep3od_download%20(2).jpg'),
        img('5wpn76rrgv5mn6xfc6nfv0hz7l1d_download%20(1).jpg')
      ]
    },
    activities: [
      {
        name: 'Phi Phi Islands by Speedboat',
        day: 2,
        optional: false,
        image: img('hpa4azp4say5a7xk7is7cvzn1v0m_dl.beatsnoop.com-R0BH6SMQ7h.jpg'),
        description: 'A full day across the Phi Phi group with Maya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, and lunch on the tour.'
      },
      {
        name: 'Tiger Kingdom Phuket',
        day: 3,
        optional: false,
        image: img('3n9nd0ajyriycc2m4us0fpizaor7_ezgif.com-gif-maker%20(8).png'),
        description: 'Time inside the enclosure with the big tigers, keepers beside you throughout, with private transfers each way.'
      },
      {
        name: 'Sunset at Promthep Cape',
        day: 1,
        optional: true,
        image: img('u435b4jdyx17w5m20t1395p73pis_9613826184_ba3186465a_o.jpg'),
        description: 'The southern tip of Phuket, where the headland drops into the sea and the sunset draws a crowd every evening.'
      },
      {
        name: 'Old Phuket Town',
        day: 1,
        optional: true,
        image: img('495y5x6h2qo8ln8v8etzufhkt5h0_shutterstock_1283102005.jpg'),
        description: 'Painted Sino Portuguese shophouses, coffee roasters and small galleries along Thalang and Dibuk roads.'
      }
    ],
    program: {
      name: 'Islands, tigers and slow evenings',
      description: 'Three nights in Phuket with a full day at Phi Phi, a tiger encounter and an afternoon left open for the viewpoints.',
      image: img('q0rofzuv74wu1axaon9rmkcob0jh_shutterstock_448476727.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Krabi',
    dayLabel: 'Day 4 to 7',
    images: [
      img('fbe59bwca0qjbwkqug0bm4fagkp8_shutterstock_394854601-min.jpg'),
      img('x82hyykufd6uh6gr0lr054hlwjio_shutterstock_1045107625-min.jpg'),
      img('xf4ja2z7pa5m0rtqxup6gr50qyj9_shutterstock_2172676377-min.jpg'),
      img('85coxuo6jf2r4e35epvg592l0gn6_shutterstock_2172918973-min.jpg')
    ],
    dayImages: {
      4: [
        img('1ievlwvp4rf3dbd7k3be7hcbcqiy_1555915459_shutterstock_517504915.jpg'),
        img('wawe3inzrf060puew28nt9caglz5_1525437234_shutterstock_753117115.jpg'),
        img('xei5626zpmtpca4kmfo4cb2kayxw_1552285067_Elephant_Trekking_in_Thailand.jpg'),
        img('fbe59bwca0qjbwkqug0bm4fagkp8_shutterstock_394854601-min.jpg')
      ],
      5: [
        img('to8jo7wc7mxmbgiq0o1ew9wvo5va_shutterstock_2264861337.jpg'),
        img('rt5uovc0zbqf6uk001aib0eluclg_1551088163_maxresdefault_(2).jpg'),
        img('ftmjlf4ozjzfkbsr6lrrux9aa2yy_1551087923_island-26.jpg'),
        img('dyq7wlnu8wksdjgpv9zcxy47b9zh_1463033673_7448089582_2b0ec2c665_b.jpg')
      ],
      6: [
        img('xifb733bwsnocob5ow1ksfl2idi1_shutterstock_1374777437-min.jpg'),
        img('qdftgwbjn1hstbew4ukv8f3gpaa6_1552225709_shutterstock_1313447231.jpg'),
        img('tkehzzdj29n1hnklbsyq4l2wzscx_1552284709_Emerald-Pool-in-Krabi.jpg'),
        img('ozbjx414ocqs9g01xsbryegaq67x_29165073020_769fcbfae9_o.jpg')
      ],
      7: [
        img('fbe59bwca0qjbwkqug0bm4fagkp8_shutterstock_394854601-min.jpg'),
        img('x82hyykufd6uh6gr0lr054hlwjio_shutterstock_1045107625-min.jpg'),
        img('xf4ja2z7pa5m0rtqxup6gr50qyj9_shutterstock_2172676377-min.jpg'),
        img('85coxuo6jf2r4e35epvg592l0gn6_shutterstock_2172918973-min.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · On to Krabi`,
      'Breakfast, check out and private sedan transfer by road to Krabi',
      'Check in at Krabi Resort on the Ao Nang beachfront',
      'Afternoon free on the sand or along the beach road',
      'Optional: Wat Kaew Korawaram in town or an elephant sanctuary inland',
      `${DAY_MARK}Day 5 · Krabi 4 Islands by speedboat`,
      'Breakfast, then shared transfer to the Ao Nang pier',
      'Speedboat transfer out to Koh Poda, Tup island and Chicken island',
      'Snorkel the shallows and stop at Phra Nang beach, lunch box on board',
      'Return shared transfer to the resort in the afternoon',
      `${DAY_MARK}Day 6 · Emerald Pool and Tiger Cave temple`,
      'Breakfast, then shared transfer inland for the rainforest day',
      'Swim in the Emerald Pool inside Thung Teao forest park',
      'Climb to Tiger Cave temple for the long view across the Krabi plain',
      'Back at the resort by evening',
      `${DAY_MARK}Day 7 · Departure`,
      'Breakfast and an unhurried check out',
      'Private sedan transfer to Krabi airport for your trip home'
    ],
    accommodation: {
      name: 'Krabi Resort, Krabi',
      description: '3 nights · Breakfast included · Super Deluxe room · 4★ · Krabi Resort on the Ao Nang beachfront',
      images: [
        img('bwlwd3zbas27x4twj7w9w6r1w9l6_download%20-%202024-02-16T115321.655.png'),
        img('6fszq5ifd6hux3tuhbujwhqnbot0_download%20-%202024-02-16T115331.567.png'),
        img('yecy69oxhgopw4fyoe3k40pec4h5_download%20(10).jfif'),
        img('hzit6eyo9rgs5r8387fbnwdnvp9i_download%20(8).jfif'),
        img('p1t4g9zc43jz4e1c81ovreelpruw_download%20(7).jfif'),
        img('xhmd6tmgye8vxkrdreapsdtgoquu_download%20-%202024-02-16T115327.339.png'),
        img('4jg2wy2znhqfsmz38rjfg0xd2gbp_download%20(13).jfif'),
        img('4y4cx61w8hwts1oewc9c3skkvz8z_download%20(1).jfif'),
        img('i8unnvzgdpxym9u49sf1x7mijvvv_download%20(12).jfif'),
        img('b7j9p05t80nsjjmpuvw1glttqieo_home-slide-01-1500x1000.jpg'),
        img('bgfw7g7mxcrl08ug7kteyswynyqo_download%20(15).jfif'),
        img('dk3oigag4e3hngewgeht284a2a4c_download%20(11).jfif'),
        img('qxlxte288bedqb1s30vrdvrax414_99017992.jpg'),
        img('13hn2xhcju2mcl4jr2s93conh6en_download%20(17).jfif')
      ]
    },
    activities: [
      {
        name: 'Krabi 4 Islands by Speedboat',
        day: 5,
        optional: false,
        image: img('to8jo7wc7mxmbgiq0o1ew9wvo5va_shutterstock_2264861337.jpg'),
        description: 'A speedboat day across Koh Poda, Tup island and Chicken island, with snorkelling, Phra Nang beach and a lunch box on board.'
      },
      {
        name: 'Emerald Pool and Tiger Cave Temple',
        day: 6,
        optional: false,
        image: img('xifb733bwsnocob5ow1ksfl2idi1_shutterstock_1374777437-min.jpg'),
        description: 'A spring fed pool inside Thung Teao forest park, then the climb up Wat Tham Suea for the view across the Krabi plain.'
      },
      {
        name: 'Krabi Elephant Sanctuary',
        day: 4,
        optional: true,
        image: img('xei5626zpmtpca4kmfo4cb2kayxw_1552285067_Elephant_Trekking_in_Thailand.jpg'),
        description: 'A no riding sanctuary inland from Ao Nang where you feed and walk with rescued elephants alongside their keepers.'
      },
      {
        name: 'Wat Kaew Korawaram',
        day: 4,
        optional: true,
        image: img('1ievlwvp4rf3dbd7k3be7hcbcqiy_1555915459_shutterstock_517504915.jpg'),
        description: 'A white temple on a rise in Krabi town, reached by a long flight of steps and quiet in the late afternoon.'
      }
    ],
    program: {
      name: 'Ao Nang, the islands and the rainforest',
      description: 'Three nights in Ao Nang with a speedboat tour of the 4 Islands and a day inland at the Emerald Pool and Tiger Cave temple.',
      image: img('fbe59bwca0qjbwkqug0bm4fagkp8_shutterstock_394854601-min.jpg')
    }
  }
];

const detail = {
  slug: 'coastal-magic-of-phuket-and-krabi',
  ctaHref: '/l/thailand/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Coastal Magic of Phuket and Krabi',
  alt: 'Turquoise shallows and limestone islands off the Krabi coast in Thailand',
  days: '7 days / 6 nights',
  stations: '2 stops',
  transport: 'Private sedan transfers with speedboat island crossings',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Beach'],
  price: 43225,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuket', 'Phi Phi Islands', 'Krabi'],
  stats: { days: 7, cities: 2, hotels: 2, activities: 4, transfers: 13 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['13 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ananya Iyer',
    image: '/team/asia-2.webp',
    role: 'Thailand expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three nights in each place, so you unpack twice in a week. Two island days and one rainforest day in between.',
    quoteMore: 'Do the Emerald Pool early because the water is clearest before the crowds. The Tiger Cave climb is over twelve hundred steps, so carry water and go before the heat builds.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days on the Andaman coast with three nights in Phuket and three in Ao Nang. A speedboat day at Phi Phi, a tiger encounter, the Krabi 4 Islands by boat and a rainforest day at the Emerald Pool and Tiger Cave temple.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights in 2 four star hotels with daily breakfast; Phi Phi islands speedboat tour with lunch; Tiger Kingdom big tiger encounter with private transfers; Krabi 4 Islands speedboat tour with a lunch box; Emerald Pool and Tiger Cave temple tour; 13 airport, pier and sightseeing transfers.',
  intro2: 'Not included: international flights; visa charges; travel insurance; park and temple entry fees; meals other than those listed; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuket (Arrival)', text: 'Arrival at Phuket International Airport and private sedan transfer to your hotel\nCheck in at The Marina Phuket and keep the first day free\nOptional: Wat Chalong, sunset at Promthep Cape or Old Phuket Town', hotel: 'The Marina Phuket Hotel', highlights: ['Arrival at Phuket International Airport and private sedan transfer to your hotel', 'Check in at The Marina Phuket and keep the first day free', 'Optional: Wat Chalong, sunset at Promthep Cape or Old Phuket Town'] },
    { title: 'Day 2: Phi Phi islands by speedboat (B, L)', text: 'Breakfast, then shared transfer down to the Phuket pier\nSpeedboat transfer out to the Phi Phi group for the whole day\nMaya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, with lunch\nReturn speedboat and shared transfer to your hotel', hotel: 'The Marina Phuket Hotel', highlights: ['Breakfast, then shared transfer down to the Phuket pier', 'Speedboat transfer out to the Phi Phi group for the whole day', 'Maya Bay, Viking Cave, Loh Samah Bay and Monkey Beach, with lunch'] },
    { title: 'Day 3: Tiger Kingdom and a free afternoon (B)', text: 'Breakfast, then private transfer out to Tiger Kingdom\nBig tiger encounter with the keepers alongside you throughout\nBack by early afternoon with the rest of the day free\nOptional: the Phuket Aquarium at Cape Panwa or the Tha Rua shrine', hotel: 'The Marina Phuket Hotel', highlights: ['Breakfast, then private transfer out to Tiger Kingdom', 'Big tiger encounter with the keepers alongside you throughout', 'Back by early afternoon with the rest of the day free'] },
    { title: 'Day 4: On to Krabi (B)', text: 'Breakfast, check out and private sedan transfer by road to Krabi\nCheck in at Krabi Resort on the Ao Nang beachfront\nAfternoon free on the sand or along the beach road\nOptional: Wat Kaew Korawaram in town or an elephant sanctuary inland', hotel: 'Krabi Resort', highlights: ['Breakfast, check out and private sedan transfer by road to Krabi', 'Check in at Krabi Resort on the Ao Nang beachfront', 'Afternoon free on the sand or along the beach road'] },
    { title: 'Day 5: Krabi 4 Islands by speedboat (B, L)', text: 'Breakfast, then shared transfer to the Ao Nang pier\nSpeedboat transfer out to Koh Poda, Tup island and Chicken island\nSnorkel the shallows and stop at Phra Nang beach, lunch box on board\nReturn shared transfer to the resort in the afternoon', hotel: 'Krabi Resort', highlights: ['Breakfast, then shared transfer to the Ao Nang pier', 'Speedboat transfer out to Koh Poda, Tup island and Chicken island', 'Snorkel the shallows and stop at Phra Nang beach, lunch box on board'] },
    { title: 'Day 6: Emerald Pool and Tiger Cave temple (B)', text: 'Breakfast, then shared transfer inland for the rainforest day\nSwim in the Emerald Pool inside Thung Teao forest park\nClimb to Tiger Cave temple for the long view across the Krabi plain\nBack at the resort by evening', hotel: 'Krabi Resort', highlights: ['Breakfast, then shared transfer inland for the rainforest day', 'Swim in the Emerald Pool inside Thung Teao forest park', 'Climb to Tiger Cave temple for the long view across the Krabi plain'] },
    { title: 'Day 7: Departure (B)', text: 'Breakfast and an unhurried check out\nPrivate sedan transfer to Krabi airport for your trip home', hotel: 'Departure', highlights: ['Breakfast and an unhurried check out', 'Private sedan transfer to Krabi airport for your trip home'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; park and temple entry fees; meals other than those listed; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Thailand', href: '/asien/thailand' },
  { label: detail.title }
];

export const coastalMagicPhuketKrabiBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const coastalMagicPhuketKrabiProduct = {
  slug: detail.slug,
  places: stops.map((s) => s.name),
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 4,
  transfers: 13,
  meals: 8,
  price: detail.price,
  images: cardImages
};
