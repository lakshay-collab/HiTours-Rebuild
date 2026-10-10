// Bhutan Over the Dochula Pass to Phobjikha. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
  img('vh7ozp18k40nl2265ofjyqxsyy2r_shutterstock_404549494.jpg'),
  img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
  img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
  img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg'),
  img('62ay59x8u2qfi8ezdhofxgy7kceg_shutterstock_422773819.jpg'),
  img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
  img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
  img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg'),
  img('0vpwuvxmraalrdwkw7zhpar6pcnf_shutterstock_398906899.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
  img('62ay59x8u2qfi8ezdhofxgy7kceg_shutterstock_422773819.jpg'),
  img('beeng6mjeqzf6ugz90sexdijnpsf_shutterstock_1043403151.jpg'),
  img('hwdpzwlcu41cs2x6cq1rpgsee8zq_Gangtey%20Goemba%20Buddhist%20monastery%201.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Thimphu',
    dayLabel: 'Day 1 to 2',
    images: [
      img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
      img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg'),
      img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
      img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg')
    ],
    dayImages: {
      1: [
        img('wpd0woa96sv8ztpl35qc0pohtx5e_shutterstock_1698546493.jpg'),
        img('xguiebm2y88fnap7eww10g8cwpvc_1578661243_simply.jpg'),
        img('o4xiotph7os69ac0uxsmaew06pbw_1621019442_shutterstock_1187906419.jpg'),
        img('z1nao5xw3j8otdqp9mapxinwhbc8_43467023271_24c0307027_b.jpg')
      ],
      2: [
        img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
        img('2xgygw98g58o2olcep4vlh9r5k0u_1481602683_View_of_the_National_Memorial_Chorten__Thimphu.jpg'),
        img('4r58yve0h6te2i0muhp7hprr7rtu_24024165679_103d7a2e7c_b.jpg'),
        img('fecad1jg1gwzqki7ltqfxszyzl24_1200px-Changangkha_Lhakhang_2021.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Thimphu`,
      'Arrival at Paro International and transfer to Thimphu',
      'The road east along the Pa Chhu and the Wang Chhu',
      'Check in and the rest of the day free',
      `${DAY_MARK}Day 2 · Thimphu and simtokha`,
      'Breakfast, then out into the capital',
      'The Memorial Chorten and the Buddha Dordenma',
      'Tashichho Dzong and Simtokha Dzong'
    ],
    accommodation: {
      name: 'Hotel Druk Noryang, Thimpu, Thimphu City',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Comfortable hotel in the capital, walkable to the clock tower',
      images: [
        img('sldrva8dxlpzswq38mrtqdsyitvo_2022-12-02.jpg'),
        img('rz5v9klzs0lya04lot5jg5udcwlx_2023-05-12.jpg'),
        img('if4utsxvmxhq9oql1332st7zsiw8_caption%20(3).jpg'),
        img('q9gc68i2l9ihsjed236f1w8ki147_caption.jpg'),
        img('xgj3h317qhxp4on6s23ijh4x21pk_caption%20(6).jpg'),
        img('wdem1qgn6159u0ga01pw0r1xtnn0_caption%20(5).jpg'),
        img('2536h3ow9b7a7t354rwxk1ma1xol_WhatsApp-Image-2023-05-20-at-12.49.25-PM-2.jpeg'),
        img('ad2luhd23nt856p9fgm8rbpa0ysp_WhatsApp-Image-2023-05-20-at-12.49.30-PM.jpeg')
      ]
    },
    activities: [
      {
        name: 'Thimphu sightseeing with Simtokha Dzong',
        day: 2,
        optional: false,
        image: img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
        description: 'The capital on foot and by road, finishing at Simtokha Dzong, the oldest fortress still standing in the country.'
      }
    ],
    program: {
      name: 'Thimphu',
      description: 'Days in the capital, with the Memorial Chorten, the Buddha Dordenma and Tashichho Dzong.',
      image: img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Phobjikha',
    dayLabel: 'Day 3',
    images: [
      img('0vpwuvxmraalrdwkw7zhpar6pcnf_shutterstock_398906899.jpg'),
      img('vh7ozp18k40nl2265ofjyqxsyy2r_shutterstock_404549494.jpg'),
      img('62ay59x8u2qfi8ezdhofxgy7kceg_shutterstock_422773819.jpg'),
      img('beeng6mjeqzf6ugz90sexdijnpsf_shutterstock_1043403151.jpg')
    ],
    dayImages: {
      3: [
        img('hwdpzwlcu41cs2x6cq1rpgsee8zq_Gangtey%20Goemba%20Buddhist%20monastery%201.jpg'),
        img('j6mdu0tk28hq758kizrzzcm2hb9z_Bhutan-Dana_Scheffler-1.png'),
        img('tu7006jnl2qdcjom4vk9czur2rz7_1621019190_shutterstock_197981387.jpg'),
        img('lmylwwkh8qs7zmhzxppfsordx82s_shutterstock_684974815.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · To Phobjikha: Gangtey`,
      'Breakfast, then east over the Dochula pass',
      'On through Wangdue towards the Phobjikha valley',
      'Gangtey Goemba on its low ridge',
      'The crane valley spread out below'
    ],
    accommodation: {
      name: 'ABC Lodge, Gangtey, Nubding',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Simple lodge on the edge of the Phobjikha valley',
      images: [
        img('lye9ecn4355hko7o837e6ni8qd4w_DrukAsia_062719_1-transformed.jpeg'),
        img('ctdk9k781ijg52d5fmxu7gnfqluy_abc-eco-lodge.jpg'),
        img('vx29xhkp5d337wlyhn7hlty63ozt_abc-eco-lodge%20(1).jpg'),
        img('1r5yxoj8a7srmf7wx7vubgzkmila_20190611-172629-largejpg.jpg'),
        img('ofokiwj7jurqjwg4v1qny6dv7hep_abc-eco-lodge%20(6).jpg'),
        img('25z0rejwkjsvmol6sad4w9t08cts_abc-eco-lodge%20(7).jpg'),
        img('ebzltpv3lkl4fdl0iw527d1h6rtk_abc-eco-lodge%20(2).jpg'),
        img('vwym4asyn3jups8gwvo8qw1spem4_abc-eco-lodge%20(4).jpg'),
        img('kztyy9awvq2tp1hzumqz05w2xyeq_abc-eco-lodge%20(5).jpg'),
        img('5fshmt9obup4lwi8rtrs17axcqsi_abc-eco-lodge%20(3).jpg')
      ]
    },
    activities: [
      {
        name: 'Gangtey and the Phobjikha valley',
        day: 3,
        optional: false,
        image: img('hwdpzwlcu41cs2x6cq1rpgsee8zq_Gangtey%20Goemba%20Buddhist%20monastery%201.jpg'),
        description: 'Gangtey Goemba on its low ridge above the Phobjikha valley, the winter ground of the black necked cranes.'
      }
    ],
    program: {
      name: 'Phobjikha',
      description: 'Time on the edge of the Phobjikha valley, the winter ground of the black necked cranes.',
      image: img('0vpwuvxmraalrdwkw7zhpar6pcnf_shutterstock_398906899.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Punakha',
    dayLabel: 'Day 4',
    images: [
      img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg'),
      img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg'),
      img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
      img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg')
    ],
    dayImages: {
      4: [
        img('bhp0lyp0ntb70w7pv4icfuv00hz5_Punakha%20Dzong%20Monastery%201.jpg'),
        img('056auoul5hww4jxhty1ioepx1oi7_5116835341_c68f3cb493_b.jpg'),
        img('0hlgpb14iwhgm0834fzkpbd5sgiv_8154575525_198c2ed1bb_b.jpg'),
        img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · To Punakha: Punakha Dzong`,
      'Breakfast, then east over the Dochula pass',
      'The hundred and eight chortens at the top',
      'Punakha Dzong between the Pho and Mo rivers',
      'The long suspension bridge over the water'
    ],
    accommodation: {
      name: 'Punakha Residency, Bhutan, Punakha',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Riverside hotel in the warm old winter capital',
      images: [
        img('wgs9qfjsa1kq9xnb51sl4aek0hq3_WhatsApp-Image-2023-10-04-at-20.29.48_1cf2fbb5.jpg'),
        img('uzh2uqugxsh2ziey28gji5iwgobt_WhatsApp-Image-2023-10-04-at-20.29.57_7cf2dd98.jpg'),
        img('ede66bd6rnka4s5w7ygk3jdlkbxd_WhatsApp-Image-2023-10-04-at-20.29.54_742c871c.jpg'),
        img('14vk6ajb6zseim67psfg1mzge9zg_3.jpg'),
        img('xb2p4dcyhyy8uif1w5ih3vk5ljj6_a370465a.png'),
        img('fw59tbsfm6u56wpo2flqvf2tkips_WhatsApp-Image-2023-10-04-at-20.30.10_134cca55.jpg'),
        img('gqwraduycf7fjyuk33clmn3ikkcy_WhatsApp-Image-2023-10-04-at-20.29.59_87ca0008.jpg'),
        img('sy51n6x0bfdcge6ul7p84zb1vssg_1305f32b.png')
      ]
    },
    activities: [
      {
        name: 'Punakha sightseeing tour',
        day: 4,
        optional: false,
        image: img('bhp0lyp0ntb70w7pv4icfuv00hz5_Punakha%20Dzong%20Monastery%201.jpg'),
        description: 'The fortress where Bhutan’s kings are crowned, built on the spit of land where two rivers meet below the town.'
      }
    ],
    program: {
      name: 'Punakha',
      description: 'Time in the warm old winter capital, with the Dzong between two rivers and the suspension bridge.',
      image: img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Paro',
    dayLabel: 'Day 5 to 7',
    images: [
      img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
      img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
      img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
      img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg')
    ],
    dayImages: {
      5: [
        img('94bhu1r9yb0mjh5ypvuhjgg2dlgo_Drukgyel%20Dzong%203.jpg'),
        img('q8phludak72pr8ojnm2cmpi4w33n_1481602623_Paro-Kyichu-Lhakhang299.jpg'),
        img('rart59u3umfaty65dt0fpejnn4ex_Drukgyel%20Dzong.jpg'),
        img('msz1iztswlp21hlu64vxiq9516bj_mount-jomolhari.jpgxDV.jpg')
      ],
      6: [
        img('gooh6qmdymk3a1sxb9077xxgevgd_Rinpung%20Dzong%201.jpg'),
        img('lvrrucang7e4i29fjjrr5dv1hfbg_1481602680_Ta_Dzong_museum.jpg'),
        img('40nfujj31s5rphnc2usp8a680fzp_1571657529_1280px-Rinpung_Dzong__Bhutan_01.jpg'),
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg')
      ],
      7: [
        img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
        img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
        img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
        img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · To Paro: Paro and Kyichu Lhakhang`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'A guided round of the Paro valley',
      'Kyichu Lhakhang, among the oldest temples in Bhutan',
      `${DAY_MARK}Day 6 · Ta dzong and rinpung dzong and tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The round watchtower holding the National Museum',
      'Rinpung Dzong on the slope above the river',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face',
      `${DAY_MARK}Day 7 · Departure from Paro`,
      'Breakfast at the hotel and check out',
      'Private transfer to Paro International for your flight home'
    ],
    accommodation: {
      name: 'Khamsum Inn, Paro, Paro',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Quiet hotel in the valley below Taktsang',
      images: [
        img('q5kqlcdrcmx955cc8we8msmlb0ub_Hotel-Khamsum%20(1).jpg'),
        img('9amu3ocnd5q4uk4bfg3h2dlc9nbk_R7.jpg'),
        img('8ii21o05v3okfgj2hqrwmzh90hiq_R3.jpg'),
        img('fp0b3mg1pp6992hhxni14mpb2o2h_R1.jpg'),
        img('sc3e9ucvki5bf7l6fwji9zml7j1n_R5.jpg'),
        img('twb2grgfcju9ab9qpm5rdvpplb15_R4.jpg'),
        img('uk37iv2svf2huuxsk61v9zvnn2nx_909cd040946711e78b59025f77df004f.jpg'),
        img('7j1oenttayx1rz1on8dibkc87r4q_R9.jpg'),
        img('ombqx8kiylz1njw9m526bt48sf08_10aaf0cab07a11eea25c0a58a9feac02.png'),
        img('udtsfvnst8mquxujct19rfjmca32_R11.jpg')
      ]
    },
    activities: [
      {
        name: 'Paro sightseeing with Kyichu Lhakhang',
        day: 5,
        optional: false,
        image: img('94bhu1r9yb0mjh5ypvuhjgg2dlgo_Drukgyel%20Dzong%203.jpg'),
        description: 'A guided day around Paro finishing at Kyichu Lhakhang, one of the oldest temples standing in Bhutan.'
      },
      {
        name: 'Ta Dzong and Rinpung Dzong',
        day: 6,
        optional: false,
        image: img('gooh6qmdymk3a1sxb9077xxgevgd_Rinpung%20Dzong%201.jpg'),
        description: 'The round watchtower that now holds the National Museum, and the whitewashed Rinpung fortress above the river.'
      },
      {
        name: 'Hike to the Tiger\'s Nest',
        day: 6,
        optional: false,
        image: img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg'),
        description: 'The climb to Taktsang, the monastery wedged into a cliff nine hundred metres above the Paro valley floor.'
      }
    ],
    program: {
      name: 'Paro',
      description: 'Days in the valley below Taktsang, with Rinpung Dzong, the National Museum and the Tiger’s Nest hike.',
      image: img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg')
    }
  }
];

const detail = {
  slug: 'bhutan-over-the-dochula-pass-to-phobjikha',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bhutan Over the Dochula Pass to Phobjikha',
  alt: 'The hundred and eight chortens at the Dochula pass',
  days: '7 days / 6 nights',
  stations: '4 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Nature',
  tags: ['Nature', 'Culture'],
  price: 46882,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Thimphu', 'Phobjikha', 'Punakha', 'Paro'],
  stats: { days: 7, cities: 4, hotels: 4, activities: 6, transfers: 11 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['11 transfers', 'Transport'],
    ['12 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Flying into Paro and heading straight for Thimphu saves you two long days on the road from Siliguri.',
    quoteMore: 'Stop at the Dochula cafeteria for a bowl of ema datshi. On a clear day the whole eastern Himalaya lines up behind the chortens.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '7 days through Thimphu, Phobjikha, Punakha, Paro, with 6 nights, daily breakfast and a licensed Bhutanese guide: the thimphu sightseeing with simtokha dzong, the gangtey and the phobjikha valley, the punakha sightseeing tour, the paro sightseeing with kyichu lhakhang.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights across Thimphu, Phobjikha, Punakha, Paro with daily breakfast; all land transfers by private vehicle; the Thimphu sightseeing with Simtokha Dzong; the Gangtey and the Phobjikha valley; the Punakha sightseeing tour; the Paro sightseeing with Kyichu Lhakhang; the Ta Dzong and Rinpung Dzong; the Hike to the Tiger\'s Nest; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Thimphu (L)', text: 'Arrival at Paro International and transfer to Thimphu\nThe road east along the Pa Chhu and the Wang Chhu\nCheck in and the rest of the day free', hotel: 'Hotel Druk Noryang, Thimpu', highlights: ['Arrival at Paro International and transfer to Thimphu', 'The road east along the Pa Chhu and the Wang Chhu', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Thimphu and simtokha (B, L)', text: 'Breakfast, then out into the capital\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and Simtokha Dzong', hotel: 'Hotel Druk Noryang, Thimpu', highlights: ['Breakfast, then out into the capital', 'The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and Simtokha Dzong'] },
    { title: 'Day 3: To Phobjikha: Gangtey (B, L)', text: 'Breakfast, then east over the Dochula pass\nOn through Wangdue towards the Phobjikha valley\nGangtey Goemba on its low ridge\nThe crane valley spread out below', hotel: 'ABC Lodge, Gangtey', highlights: ['Breakfast, then east over the Dochula pass', 'On through Wangdue towards the Phobjikha valley', 'Gangtey Goemba on its low ridge'] },
    { title: 'Day 4: To Punakha: Punakha Dzong (B, L)', text: 'Breakfast, then east over the Dochula pass\nThe hundred and eight chortens at the top\nPunakha Dzong between the Pho and Mo rivers\nThe long suspension bridge over the water', hotel: 'Punakha Residency, Bhutan', highlights: ['Breakfast, then east over the Dochula pass', 'The hundred and eight chortens at the top', 'Punakha Dzong between the Pho and Mo rivers'] },
    { title: 'Day 5: To Paro: Paro and Kyichu Lhakhang (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nA guided round of the Paro valley\nKyichu Lhakhang, among the oldest temples in Bhutan', hotel: 'Khamsum Inn, Paro', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'A guided round of the Paro valley'] },
    { title: 'Day 6: Ta dzong and rinpung dzong and tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe round watchtower holding the National Museum\nRinpung Dzong on the slope above the river\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Khamsum Inn, Paro', highlights: ['Breakfast, then out into the Paro valley', 'The round watchtower holding the National Museum', 'Rinpung Dzong on the slope above the river'] },
    { title: 'Day 7: Departure from Paro (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Paro International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Paro International for your flight home'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bhutan', href: '/asia/bhutan' },
  { label: detail.title }
];

export const bhutanDochulaAndPhobjikhaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bhutanDochulaAndPhobjikhaProduct = {
  slug: detail.slug,
  places: ['Thimphu', 'Phobjikha', 'Punakha', 'Paro'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 6,
  transfers: 11,
  meals: 12,
  price: detail.price,
  images: cardImages
};
