// Nepal and Bhutan: A Himalayan Journey. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('70sdbeehi7s72ngrejiehxw4u9ho_shutterstock_643770787.jpg'),
  img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg'),
  img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
  img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
  img('rakk0ug4v0ylcbiwhydlfqs0fu72_shutterstock_551112193.jpg'),
  img('csfou3kxztfubm39810ryp5ifexy_shutterstock_1652381137.jpg'),
  img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg'),
  img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
  img('ksg5iycxfq01s5r36uwp5osmbacr_shutterstock_2246951467.jpg'),
  img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('70sdbeehi7s72ngrejiehxw4u9ho_shutterstock_643770787.jpg'),
  img('rakk0ug4v0ylcbiwhydlfqs0fu72_shutterstock_551112193.jpg'),
  img('5un1e0syy91seduvwab1zgifftn3_shutterstock_366785876.jpg'),
  img('vfeorrkfnc60v7ojvhmogwdj4v6p_shutterstock_223257994.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kathmandu',
    dayLabel: 'Day 1 to 3',
    images: [
      img('70sdbeehi7s72ngrejiehxw4u9ho_shutterstock_643770787.jpg'),
      img('ksg5iycxfq01s5r36uwp5osmbacr_shutterstock_2246951467.jpg'),
      img('5un1e0syy91seduvwab1zgifftn3_shutterstock_366785876.jpg'),
      img('vfeorrkfnc60v7ojvhmogwdj4v6p_shutterstock_223257994.jpg')
    ],
    dayImages: {
      1: [
        img('xrjb0ud38h2quc49vhyj2isbyr6d_14609107476_04a10bd4c1_b.jpg'),
        img('jayprpz2wzryh4n2zewcn3xyopn1_24774944299_92a05caabb_b.jpg'),
        img('vc97rz8tlfx66z8lmt89gexijyw4_8581782765_ff3f72e5a6_b.jpg'),
        img('l5rzhqp236xa696lldg8jtzjvlcu_11683394483_dd13d61645_b.jpg')
      ],
      2: [
        img('q1fym1x7s9h3u7kwq5r3xq1xxk5e_Golden%20Temple-Kathmandu.jpg'),
        img('tjcqyhfk5t74wsr8n6df3ojs6mvu_49055384377_8b29638365_o.jpg'),
        img('6ry99bazfbsfhabv3ewvjhd0t77r_Kathmandu_Darbar0607_KumariGhar.JPG'),
        img('i4cdmlpcxrmy8vb3imijnygqigu9_shutterstock_2332139791.jpg')
      ],
      3: [
        img('qrd10k645gcxtyg6p7mnq28ntwdw_Boudhanath%20Stupa%201.jpg'),
        img('6sw3gdp5i7al6ry8bh55ayy4ea3t_shutterstock_643770787.jpg'),
        img('1k8w34sazdkyyq2ejg26zapm19kr_8432255546_2c75667288_b.jpg'),
        img('2km32ni39bii3bc00rfz7z75ecdn_2473101589_9aced17f19_b.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Kathmandu`,
      'Arrival at Kathmandu Tribhuvan and transfer to your hotel',
      'Check in and the rest of the day free',
      'Check in and the rest of the day free',
      `${DAY_MARK}Day 2 · Kathmandu sightseeing`,
      'Breakfast, then out into Kathmandu',
      'Durbar Square and the old palace courtyards',
      'Boudhanath stupa and Pashupatinath',
      `${DAY_MARK}Day 3 · Kathmandu sightseeing`,
      'Breakfast, then out into Kathmandu',
      'Durbar Square and the old palace courtyards',
      'Boudhanath stupa and Pashupatinath'
    ],
    accommodation: {
      name: 'Hotel Prince plaza, Kathmandu, Kathmandu',
      description: '3 nights · Breakfast and dinner · Standard room · 3★ · Central hotel within reach of Thamel',
      images: [
        img('ui9lu83h4j28bmolsbfcxeij264y_350831502.jpg'),
        img('75ggdscy5moid57r2erxdv2atkw6_350831503.jpg'),
        img('j1z0z05278dn3i035ejguh7lazd1_350831589.jpg'),
        img('6cxx87ayikpf4xc9rwn5lx60h3ix_350831560.jpg'),
        img('2q67o7u4zl21o4yd5hodupn9xbv9_hotel-prince-plaza.jpg'),
        img('pk9ewln1h1go8ookjm4fi7nbu8ip_350831568%20(1).jpg'),
        img('uukmvfur8kctcnxccethortw49yc_hotel-prince-plaza%20(2).jpg'),
        img('6q8cxtoopper07opji21k3owphgz_350831537.jpg'),
        img('7b9sv7726dhkp54qdu5ji5lty8n5_350831585.jpg'),
        img('s6eyzoj431tm5zuwoeszehy91zeb_350831523.jpg')
      ]
    },
    activities: [
      {
        name: 'Kathmandu sightseeing tour',
        day: 2,
        optional: false,
        image: img('q1fym1x7s9h3u7kwq5r3xq1xxk5e_Golden%20Temple-Kathmandu.jpg'),
        description: 'A guided day with Durbar Square, the stupa at Boudhanath, Swayambhunath and Pashupatinath on the Bagmati.'
      },
      {
        name: 'Kathmandu sightseeing tour',
        day: 3,
        optional: false,
        image: img('qrd10k645gcxtyg6p7mnq28ntwdw_Boudhanath%20Stupa%201.jpg'),
        description: 'A guided day with Durbar Square, the stupa at Boudhanath, Swayambhunath and Pashupatinath on the Bagmati.'
      }
    ],
    program: {
      name: 'Kathmandu',
      description: 'Days in the Nepali capital, with Durbar Square, Boudhanath and Pashupatinath.',
      image: img('70sdbeehi7s72ngrejiehxw4u9ho_shutterstock_643770787.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Thimphu',
    dayLabel: 'Day 4',
    images: [
      img('csfou3kxztfubm39810ryp5ifexy_shutterstock_1652381137.jpg'),
      img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg'),
      img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
      img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg')
    ],
    dayImages: {
      4: [
        img('fecad1jg1gwzqki7ltqfxszyzl24_1200px-Changangkha_Lhakhang_2021.jpg'),
        img('xguiebm2y88fnap7eww10g8cwpvc_1578661243_simply.jpg'),
        img('z1nao5xw3j8otdqp9mapxinwhbc8_43467023271_24c0307027_b.jpg'),
        img('81za99vumt6f6la3nrht98bojvh9_DSC_0194.JPG')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Onward to Thimphu`,
      'Breakfast, then north into the hills towards Thimphu',
      'The Chukha dam and the Wang Chhu gorge on the way',
      'Optional: the Zorig Chusum school of arts',
      'Arrival transfer and check in for the night'
    ],
    accommodation: {
      name: 'Hotel Ugyen, Thimpu, Thimphu City',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Comfortable hotel in the capital, walkable to the clock tower',
      images: [
        img('ap98uzgbkloja1lh1uh6u3wenury_Hotel%20Ugyen%20Photos%2015.png'),
        img('jbwc300zdf722bzueommrqcfpo1s__DSC4492.jpeg'),
        img('hag2d57k7qj6x4qcpq8kqwr1wdzk__DSC4560.jpg'),
        img('ja44mrv4lvkn0wm02mdzz7w9q740_download%20(19).jpg'),
        img('868augj8rw9uyi9tx6wddbjnzc52_download%20(17).jpg'),
        img('u0xom3a536yv3febbj12hvjlb2qp__DSC4533.jpeg'),
        img('zjolyheg3ypfv1mpdgbibc40dkxs__DSC4514.jpeg'),
        img('aiiaj5m2uu2g3srsquowsfrs9avk_download%20(16).jpg'),
        img('230ot6ilog4vwc0miiuo7fmy8kpw_download%20(18).jpg'),
        img('ibz4akiebgx4pvsczby1xsuc8w7r_download%20(15).jpg'),
        img('nefjbnmshmars575rgpdgoclrmyq_Hotel-Ugyen-Thimphu-Exterior.jpeg'),
        img('4aohhlftz59gvw0cbewakeinj4r3_2023-01-27.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Thimphu',
      description: 'Time in the capital, with the Memorial Chorten, the Buddha Dordenma and Tashichho Dzong.',
      image: img('csfou3kxztfubm39810ryp5ifexy_shutterstock_1652381137.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Punakha',
    dayLabel: 'Day 5',
    images: [
      img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
      img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
      img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
      img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg')
    ],
    dayImages: {
      5: [
        img('9mjgmwz4uzguzddlci3crbdj5x60_Nation%20Memorial%20Chorten.jpg'),
        img('2xgygw98g58o2olcep4vlh9r5k0u_1481602683_View_of_the_National_Memorial_Chorten__Thimphu.jpg'),
        img('c5zdi543udorguyfdp6ju513rzxv_15656544270_421c572020_b.jpg'),
        img('imqbu0xbgl8bykm6i06y53tjkf4w_22423229676_75bc3a183f_b.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · To Punakha: Thimphu sightseeing`,
      'Breakfast, then east over the Dochula pass',
      'The hundred and eight chortens at the top',
      'The Memorial Chorten and the Buddha Dordenma',
      'Tashichho Dzong and the takin preserve'
    ],
    accommodation: {
      name: 'White Dragon Hotel Punakha, Punakha',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Riverside hotel in the warm old winter capital',
      images: [
        img('m4qh31s0a5t88wfstnrhg85oo1up_9b453d48.png'),
        img('cj3ks7qqhhbcpohyoptc7r2zrj2t_df1d9395.png'),
        img('5xs8syyrzlkt9p5j37zeezwk29qk_49c01b0b.png'),
        img('uzlid91b8l9bhgmpcldrlbo53bw3_502236597.png'),
        img('1gk6rh591eipmnhq61645qoalj1q_download%20-%202024-05-06T184006.861.jpg'),
        img('5zyj9ko3wndrnjhbbqli0ucg2m3w_45a5b0cf.png'),
        img('4vzmqez4lt01uotobdfjv2b5700t_502236622.png')
      ]
    },
    activities: [
      {
        name: 'Thimphu sightseeing tour',
        day: 5,
        optional: false,
        image: img('9mjgmwz4uzguzddlci3crbdj5x60_Nation%20Memorial%20Chorten.jpg'),
        description: 'A guided day round the capital with the Memorial Chorten, the Buddha Dordenma, Tashichho Dzong and the takin preserve.'
      }
    ],
    program: {
      name: 'Punakha',
      description: 'Time in the warm old winter capital, with the Dzong between two rivers and the suspension bridge.',
      image: img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Paro',
    dayLabel: 'Day 6 to 8',
    images: [
      img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
      img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
      img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
      img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg')
    ],
    dayImages: {
      6: [
        img('bhp0lyp0ntb70w7pv4icfuv00hz5_Punakha%20Dzong%20Monastery%201.jpg'),
        img('056auoul5hww4jxhty1ioepx1oi7_5116835341_c68f3cb493_b.jpg'),
        img('0hlgpb14iwhgm0834fzkpbd5sgiv_8154575525_198c2ed1bb_b.jpg'),
        img('bygb5od4ky5td3nbroqcrcpqdjmt_Ta%20Dzong%20National%20Museum%201.jpg')
      ],
      7: [
        img('gooh6qmdymk3a1sxb9077xxgevgd_Rinpung%20Dzong%201.jpg'),
        img('lvrrucang7e4i29fjjrr5dv1hfbg_1481602680_Ta_Dzong_museum.jpg'),
        img('40nfujj31s5rphnc2usp8a680fzp_1571657529_1280px-Rinpung_Dzong__Bhutan_01.jpg'),
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg')
      ],
      8: [
        img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
        img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
        img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
        img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · To Paro: Punakha Dzong`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'Punakha Dzong between the Pho and Mo rivers',
      'The long suspension bridge over the water',
      'The National Museum in the old watchtower',
      'Rinpung Dzong and the Drukgyel ruins',
      `${DAY_MARK}Day 7 · Ta dzong and rinpung dzong and tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The round watchtower holding the National Museum',
      'Rinpung Dzong on the slope above the river',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face',
      `${DAY_MARK}Day 8 · Departure from Paro`,
      'Breakfast at the hotel and check out',
      'Private transfer to Paro International for your flight home'
    ],
    accommodation: {
      name: 'Tshang Tshang Villa, Paro, Paro',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Quiet hotel in the valley below Taktsang',
      images: [
        img('x4kd3s40lzf1h9ja0k82plnkyx3r_ttv1.jpeg'),
        img('1yjglspv9kpsnhgh91jb5gezat1u_ttv3.jpeg'),
        img('o3od2mmrm0cap1yogwr3tlk7plkw_ttv7.jpeg'),
        img('yfwkh68xckltndxltjkfi61bb7vk_ttv2.jpeg'),
        img('njl5oyxyv8le7928tzduhqjn8843_ttv6-1110x739x0x147x1110x592x1659801074.jpeg'),
        img('6emv20ve786oxhldi2bzu9bucpxi_Tshang%20Tshang%20Villa%203.png')
      ]
    },
    activities: [
      {
        name: 'Punakha sightseeing tour',
        day: 6,
        optional: false,
        image: img('bhp0lyp0ntb70w7pv4icfuv00hz5_Punakha%20Dzong%20Monastery%201.jpg'),
        description: 'The fortress where Bhutan’s kings are crowned, built on the spit of land where two rivers meet below the town.'
      },
      {
        name: 'Paro sightseeing tour',
        day: 6,
        optional: false,
        image: img('bygb5od4ky5td3nbroqcrcpqdjmt_Ta%20Dzong%20National%20Museum%201.jpg'),
        description: 'A guided round of the valley with the National Museum, Rinpung Dzong and the ruins of Drukgyel Dzong.'
      },
      {
        name: 'Ta Dzong and Rinpung Dzong',
        day: 7,
        optional: false,
        image: img('gooh6qmdymk3a1sxb9077xxgevgd_Rinpung%20Dzong%201.jpg'),
        description: 'The round watchtower that now holds the National Museum, and the whitewashed Rinpung fortress above the river.'
      },
      {
        name: 'Hike to the Tiger\'s Nest',
        day: 7,
        optional: false,
        image: img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg'),
        description: 'The climb to Taktsang, the monastery wedged into a cliff nine hundred metres above the Paro valley floor.'
      }
    ],
    program: {
      name: 'Paro',
      description: 'Days in the valley below Taktsang, with Rinpung Dzong, the National Museum and the Tiger’s Nest hike.',
      image: img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg')
    }
  }
];

const detail = {
  slug: 'nepal-and-bhutan-himalayan-journey',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Nepal and Bhutan: A Himalayan Journey',
  alt: 'Boudhanath stupa in Kathmandu with prayer flags',
  days: '8 days / 7 nights',
  stations: '4 stops',
  transport: 'Private vehicles, a licensed guide and the Kathmandu to Paro flight',
  tag: 'Culture',
  tags: ['Culture', 'Multi-country'],
  price: 156750,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kathmandu', 'Thimphu', 'Punakha', 'Paro'],
  stats: { days: 8, cities: 4, hotels: 4, activities: 7, transfers: 14 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['14 transfers', 'Transport'],
    ['14 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Kathmandu first, then the flight into Paro. Landing between the ridges at Paro is a story people tell for years.',
    quoteMore: 'Ask for a left hand window on the Kathmandu to Paro leg. On a clear morning you get Everest, Makalu and Kanchenjunga in one run.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '8 days through Kathmandu, Thimphu, Punakha, Paro, with 7 nights, daily breakfast and a licensed Bhutanese guide: the kathmandu sightseeing tour, the thimphu sightseeing tour, the punakha sightseeing tour, the paro sightseeing tour.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights across Kathmandu, Thimphu, Punakha, Paro with daily breakfast; all land transfers by private vehicle; the Kathmandu sightseeing tour; the Thimphu sightseeing tour; the Punakha sightseeing tour; the Paro sightseeing tour; the Ta Dzong and Rinpung Dzong; the Hike to the Tiger\'s Nest; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international flights; the Kathmandu to Paro flight; Nepal and Bhutan visa and permit fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Kathmandu (L)', text: 'Arrival at Kathmandu Tribhuvan and transfer to your hotel\nCheck in and the rest of the day free\nCheck in and the rest of the day free', hotel: 'Hotel Prince plaza, Kathmandu', highlights: ['Arrival at Kathmandu Tribhuvan and transfer to your hotel', 'Check in and the rest of the day free', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Kathmandu sightseeing (B, L)', text: 'Breakfast, then out into Kathmandu\nDurbar Square and the old palace courtyards\nBoudhanath stupa and Pashupatinath', hotel: 'Hotel Prince plaza, Kathmandu', highlights: ['Breakfast, then out into Kathmandu', 'Durbar Square and the old palace courtyards', 'Boudhanath stupa and Pashupatinath'] },
    { title: 'Day 3: Kathmandu sightseeing (B, L)', text: 'Breakfast, then out into Kathmandu\nDurbar Square and the old palace courtyards\nBoudhanath stupa and Pashupatinath', hotel: 'Hotel Prince plaza, Kathmandu', highlights: ['Breakfast, then out into Kathmandu', 'Durbar Square and the old palace courtyards', 'Boudhanath stupa and Pashupatinath'] },
    { title: 'Day 4: Onward to Thimphu (B, L)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nOptional: the Zorig Chusum school of arts\nArrival transfer and check in for the night', hotel: 'Hotel Ugyen, Thimpu', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'Optional: the Zorig Chusum school of arts'] },
    { title: 'Day 5: To Punakha: Thimphu sightseeing (B, L)', text: 'Breakfast, then east over the Dochula pass\nThe hundred and eight chortens at the top\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and the takin preserve', hotel: 'White Dragon Hotel Punakha', highlights: ['Breakfast, then east over the Dochula pass', 'The hundred and eight chortens at the top', 'The Memorial Chorten and the Buddha Dordenma'] },
    { title: 'Day 6: To Paro: Punakha Dzong (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nPunakha Dzong between the Pho and Mo rivers\nThe long suspension bridge over the water\nThe National Museum in the old watchtower\nRinpung Dzong and the Drukgyel ruins', hotel: 'Tshang Tshang Villa, Paro', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'Punakha Dzong between the Pho and Mo rivers'] },
    { title: 'Day 7: Ta dzong and rinpung dzong and tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe round watchtower holding the National Museum\nRinpung Dzong on the slope above the river\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Tshang Tshang Villa, Paro', highlights: ['Breakfast, then out into the Paro valley', 'The round watchtower holding the National Museum', 'Rinpung Dzong on the slope above the river'] },
    { title: 'Day 8: Departure from Paro (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Paro International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Paro International for your flight home'] }
  ],
  outro: 'Not included: international flights; the Kathmandu to Paro flight; Nepal and Bhutan visa and permit fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bhutan', href: '/asia/bhutan' },
  { label: detail.title }
];

export const nepalAndBhutanHimalayanJourneyBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const nepalAndBhutanHimalayanJourneyProduct = {
  slug: detail.slug,
  places: ['Kathmandu', 'Thimphu', 'Punakha', 'Paro'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 7,
  transfers: 14,
  meals: 14,
  price: detail.price,
  images: cardImages
};
