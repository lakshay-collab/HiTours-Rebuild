// Paradisic Bhutan: Super Deluxe. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
  img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg'),
  img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
  img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
  img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
  img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
  img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
  img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
  img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
  img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('ljpqw4npv8wncod5fq1r7hw2zt5y_shutterstock_1344366731.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Phuentsholing',
    dayLabel: 'Day 1',
    images: [
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
    ],
    dayImages: {
      1: [
        img('ljpqw4npv8wncod5fq1r7hw2zt5y_shutterstock_1344366731.jpg'),
        img('khf8y1lpqxenviw5vczf0uh2ytj0_Zangto_Pelri_Lhakhang,_Phuentsholing_during_LGFC_-_Bhutan_2019_(14).jpg'),
        img('eljv9nfavq2ojeluvwgegg0j5t8o_shutterstock_1380814979.jpg'),
        img('wzk43phe3f2n5pie7psn6bf6ehe8_torsa%201.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Phuentsholing`,
      'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing',
      'Border formalities at the Bhutan Gate',
      'Check in and the rest of the day free'
    ],
    accommodation: {
      name: 'Hotel Ga Me Ga, Phuntsholing',
      description: '1 night · Breakfast · Standard room · 4★ · Border town hotel on the Indian frontier',
      images: [
        img('dftsgelbd2cwn4ilxokcbe0749b2_fb2d9940921311e7b5a30a4cef95d023.png'),
        img('4vtpa5rd7zj8gclglw1udeqmmzx2_fb0b5524a6d411e990f90242ac110003.png'),
        img('06dorbq8l4md94uu6xsnvohsumb9_fa84d4b8921311e78b59025f77df004f.png'),
        img('1ypfmrqjta2z28nklx2uhaxdz55g_fbe276f8921311e7b5a30a4cef95d023.png'),
        img('u06ihwtxszpib331ve8iuu8sgrd3_39f0863e83ba11eab07f0242ac110004.png'),
        img('9wnawpp4jsv0qzwca49jgfk4mzzp_fd2b1d76921311e78b59025f77df004f.png'),
        img('hk72m63lg3f0tlzi1ho5u48vvsoe_3095cbcea6d611e9b8800242ac110005.png'),
        img('yfezo4hjc97pvrarh0wiuqvic7jg_0b3791f6a6d511e9b7870242ac110003.png'),
        img('hs3bea3j2a26g5mesdbf3g4sy2cg_0790212aa6d611e992b70242ac110003.png'),
        img('95xsyjb91zgr8ftjzp1nk141mfju_fd7561ec921311e7bfa70a4cef95d023.png'),
        img('eu5ci72auhukb50vme14gvstv03h_fb54dffa921311e7a0a3025f77df004f.png'),
        img('oa0pezmzq4jz34mop9n7f60bms0y_3a1f5b8a83ba11eaa62a0242ac110005.png')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Phuentsholing',
      description: 'Time in the border town where Bhutan begins, with the Bhutan Gate and Kharbandi above the plains.',
      image: img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Thimphu',
    dayLabel: 'Day 2 to 3',
    images: [
      img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
      img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg'),
      img('csfou3kxztfubm39810ryp5ifexy_shutterstock_1652381137.jpg'),
      img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg')
    ],
    dayImages: {
      2: [
        img('wpd0woa96sv8ztpl35qc0pohtx5e_shutterstock_1698546493.jpg'),
        img('z1nao5xw3j8otdqp9mapxinwhbc8_43467023271_24c0307027_b.jpg'),
        img('cdl5xosospzimjwzry1vumk497kb_The-Romantic-Nature-Park-of-Thimphu-Ludrong-Memorial-Garden.jpg'),
        img('81za99vumt6f6la3nrht98bojvh9_DSC_0194.JPG')
      ],
      3: [
        img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
        img('2xgygw98g58o2olcep4vlh9r5k0u_1481602683_View_of_the_National_Memorial_Chorten__Thimphu.jpg'),
        img('4r58yve0h6te2i0muhp7hprr7rtu_24024165679_103d7a2e7c_b.jpg'),
        img('fecad1jg1gwzqki7ltqfxszyzl24_1200px-Changangkha_Lhakhang_2021.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Onward to Thimphu`,
      'Breakfast, then north into the hills towards Thimphu',
      'The Chukha dam and the Wang Chhu gorge on the way',
      'Optional: the Zorig Chusum school of arts',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 3 · Thimphu and simtokha`,
      'Breakfast, then out into the capital',
      'The Memorial Chorten and the Buddha Dordenma',
      'Tashichho Dzong and Simtokha Dzong'
    ],
    accommodation: {
      name: 'Hotel Osel, Thimphu City',
      description: '2 nights · Breakfast · Standard room · 4★ · Comfortable hotel in the capital, walkable to the clock tower',
      images: [
        img('w2i7xwwob3s3iwlvmrw3kcrehfae_download%20(2).jpg'),
        img('tdmxrvmaeyus6xshzymbx3pz70e3_download%20(11).jpg'),
        img('fk1ljjiszz4u6726qux71wu4wr7g_download%20(12).jpg'),
        img('eslyjmnizpu6vwqraunzg9r93g6b_download%20(6).jpg'),
        img('r9dp1wfuoxemrz684wl33efj24wn_download%20(5).jpg'),
        img('qwz5z8h0jniphgxj9dtpe2obpaw2_download%20(7).jpg'),
        img('6z7v3yv25nvlmtmbaribcx5eunei_download%20(9).jpg'),
        img('k47aoaf8kfxcf0jaynmtaror7qgr_download%20(4).jpg'),
        img('bjwtkmwghbw29feu71u6zs9tkq3n_download%20(10).jpg'),
        img('h0ns75h7h5rl8i33bf8inga39c81_download%20(3).jpg'),
        img('hy38xu2sutqffyb37nwr972ojhgg_download%20(8).jpg'),
        img('3luvgcgfv5eus1frz8jm1tkvelsw_download%20(1).jpg')
      ]
    },
    activities: [
      {
        name: 'Thimphu sightseeing with Simtokha Dzong',
        day: 3,
        optional: false,
        image: img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
        description: 'The capital on foot and by road, finishing at Simtokha Dzong, the oldest fortress still standing in the country.'
      }
    ],
    program: {
      name: 'Thimphu',
      description: 'Days in the capital, with the Memorial Chorten, the Buddha Dordenma and Tashichho Dzong.',
      image: img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Paro',
    dayLabel: 'Day 4 to 5',
    images: [
      img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
      img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
      img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
      img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg')
    ],
    dayImages: {
      4: [
        img('7wtjcew9pt0l5gb114psj5iejfuv_zuri%201.jpg'),
        img('05rlzdc2y8brcld8c7828vj4ep7l_1818px-Mapcarta.jpg'),
        img('cqkmm6osyea6dv7f1zj0xxgqutx3_shutterstock_345764054.jpg'),
        img('ea52i8c2oat4hrv07sotkmtwj5d3_download.jpg')
      ],
      5: [
        img('gooh6qmdymk3a1sxb9077xxgevgd_Rinpung%20Dzong%201.jpg'),
        img('lvrrucang7e4i29fjjrr5dv1hfbg_1481602680_Ta_Dzong_museum.jpg'),
        img('40nfujj31s5rphnc2usp8a680fzp_1571657529_1280px-Rinpung_Dzong__Bhutan_01.jpg'),
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Onward to Paro`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'Optional: Zuri Dzong and the Five Chortens',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 5 · Ta dzong and rinpung dzong and tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The round watchtower holding the National Museum',
      'Rinpung Dzong on the slope above the river',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face'
    ],
    accommodation: {
      name: 'Tashi Namgay Resort, Paro',
      description: '2 nights · Breakfast · Standard room · 4★ · Quiet hotel in the valley below Taktsang',
      images: [
        img('7z8xpog1kmbjzpquz6lijih8xglg_5e3e264ceb1a11e9b4680242ac110004.png'),
        img('ns00ztpmf2kcnql7a5wbwz31dl05_346966058_180659094935008_2703367575132981477_n.png'),
        img('kc6awukghnqh8mbeyd33fxh4dghm_358129487_717083693761790_4386183972988994801_n.png'),
        img('2vfdjylkddij69m2jq1d06d4ue9t_350839587_3543811875757574_5537190552242602283_n.png'),
        img('kkdtq95880acemu5rop1mk2et2nw_c43880e08f2d11e8b2740a9df65c8753.png'),
        img('gyc31ly8h33udqpql4y6dq3rpq5q_359339454_720035376799955_724369798635276304_n.png'),
        img('f6dk8f98vq33zuvfym6nmjmwlcqp_359791179_720968866706606_8404366071197683343_n.png'),
        img('qzdg5bcygbmd1kos3hxd3u083xul_357529243_713072897496203_3531817052386242889_n.png'),
        img('4db9dren371zcsh62x78yxv8frwm_350637052_6353363548112985_1117311302403949784_n.png'),
        img('q96knkgpnyw6lj9bcdvg0svz4fam_343448531_894600871623605_1333730073829139333_n.png'),
        img('l5z26ginst3vcj5bwbid2qxcjnay_332629131_2214542088727749_7141962434421709352_n.png')
      ]
    },
    activities: [
      {
        name: 'Ta Dzong and Rinpung Dzong',
        day: 5,
        optional: false,
        image: img('gooh6qmdymk3a1sxb9077xxgevgd_Rinpung%20Dzong%201.jpg'),
        description: 'The round watchtower that now holds the National Museum, and the whitewashed Rinpung fortress above the river.'
      },
      {
        name: 'Hike to the Tiger\'s Nest',
        day: 5,
        optional: false,
        image: img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg'),
        description: 'The climb to Taktsang, the monastery wedged into a cliff nine hundred metres above the Paro valley floor.'
      }
    ],
    program: {
      name: 'Paro',
      description: 'Days in the valley below Taktsang, with Rinpung Dzong, the National Museum and the Tiger’s Nest hike.',
      image: img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Phuentsholing',
    dayLabel: 'Day 6 to 7',
    images: [
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg')
    ],
    dayImages: {
      6: [
        img('v9tvcl55e0nj7mgskiebh2i0taiy_dam.jpg'),
        img('t524u3xv63svk6fkf5xqyvn08j3g_mandir.jpg'),
        img('r216cx5wtx6y2mlcx31wzb1avzpz_Palden_Tashi_Chholing_Shedra_01.jpg'),
        img('l0fq7fjbnhs2rdw73cyv4fa8c62i_Phuentsholing-Market-1024x682.jpg')
      ],
      7: [
        img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
        img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
        img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
        img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Onward to Phuentsholing`,
      'Breakfast, then the long run back south',
      'Down through the Chukha gorge to the plains',
      'Optional: Zangto Pelri Lhakhang in the town',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 7 · Departure from Siliguri`,
      'Breakfast at the hotel and check out',
      'Border formalities and transfer to Siliguri'
    ],
    accommodation: {
      name: 'Hotel Druk, Phuntsholing',
      description: '1 night · Breakfast · Standard room · 4★ · Border town hotel on the Indian frontier',
      images: [
        img('xde10oc598xlltohkck8hkmnzeq6_b2a9baba_z.webp'),
        img('g4syfjt3kigxpn0c8ioohcgb8w7z_acc5c117_z.webp'),
        img('ydnbrgjqkmbdtv8t829trp0svhel_a3cc48f5_z%20copy.jpg'),
        img('9v9xsymup65ubgpi02xstv3f9l3i_5a06abc26cff04d0c22b9da5c44226e861865e3f747df64ded03a318bbfe.jpeg'),
        img('er89r32vdwblc6nmy7eg5ctwwiag_f2056d817d88465f376a4f75f3449dab935182db01632f41ce46ae102371.jpeg'),
        img('dchdfn3r01zgf0tch4tx9y6gd58k_13f82522dc0839dde721e724748263305376a8b9da587714d7fdb06fd867.jpeg'),
        img('vszek2yvedo2js4sfnt0t9gmm86g_283c4de7_z.webp'),
        img('0dwxiigaduskfr10tsuxy9h6n1s3_0d661332_z.webp'),
        img('r46kxzo0avn3nglcr1hx1jq3sk4p_02bcfbb1_z.webp')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Phuentsholing',
      description: 'Time in the border town where Bhutan begins, with the Bhutan Gate and Kharbandi above the plains.',
      image: img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
    }
  }
];

const detail = {
  slug: 'paradisic-bhutan-super-deluxe',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Paradisic Bhutan: Super Deluxe',
  alt: 'Four star hotel terrace looking over the Paro valley',
  days: '7 days / 6 nights',
  stations: '4 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Luxury',
  tags: ['Luxury', 'Culture'],
  price: 63745,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuentsholing', 'Thimphu', 'Paro', 'Phuentsholing'],
  stats: { days: 7, cities: 4, hotels: 4, activities: 3, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['12 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Same six nights as our standard Paradisic Bhutan, moved up to four star hotels in every valley.',
    quoteMore: 'The super deluxe hotels in Thimphu sit above the town rather than in it. Budget ten minutes each way for the evening walk.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '7 days through Phuentsholing, Thimphu, Paro, with 6 nights, Breakfast and dinner each day and a licensed Bhutanese guide: the thimphu sightseeing with simtokha dzong, the ta dzong and rinpung dzong, the hike to the tiger\'s nest.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights across Phuentsholing, Thimphu, Paro with Breakfast and dinner each day; all land transfers by private vehicle; the Thimphu sightseeing with Simtokha Dzong; the Ta Dzong and Rinpung Dzong; the Hike to the Tiger\'s Nest; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuentsholing (L)', text: 'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing\nBorder formalities at the Bhutan Gate\nCheck in and the rest of the day free', hotel: 'Hotel Ga Me Ga', highlights: ['Arrival at Bagdogra or Siliguri and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Onward to Thimphu (B, L)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nOptional: the Zorig Chusum school of arts\nArrival transfer and check in for the night', hotel: 'Hotel Osel', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'Optional: the Zorig Chusum school of arts'] },
    { title: 'Day 3: Thimphu and simtokha (B, L)', text: 'Breakfast, then out into the capital\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and Simtokha Dzong', hotel: 'Hotel Osel', highlights: ['Breakfast, then out into the capital', 'The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and Simtokha Dzong'] },
    { title: 'Day 4: Onward to Paro (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nOptional: Zuri Dzong and the Five Chortens\nArrival transfer and check in for the night', hotel: 'Tashi Namgay Resort', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'Optional: Zuri Dzong and the Five Chortens'] },
    { title: 'Day 5: Ta dzong and rinpung dzong and tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe round watchtower holding the National Museum\nRinpung Dzong on the slope above the river\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Tashi Namgay Resort', highlights: ['Breakfast, then out into the Paro valley', 'The round watchtower holding the National Museum', 'Rinpung Dzong on the slope above the river'] },
    { title: 'Day 6: Onward to Phuentsholing (B, L)', text: 'Breakfast, then the long run back south\nDown through the Chukha gorge to the plains\nOptional: Zangto Pelri Lhakhang in the town\nArrival transfer and check in for the night', hotel: 'Hotel Druk', highlights: ['Breakfast, then the long run back south', 'Down through the Chukha gorge to the plains', 'Optional: Zangto Pelri Lhakhang in the town'] },
    { title: 'Day 7: Departure from Siliguri (B)', text: 'Breakfast at the hotel and check out\nBorder formalities and transfer to Siliguri', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Border formalities and transfer to Siliguri'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Bhutan', href: '/asien/bhutan' },
  { label: detail.title }
];

export const paradisicBhutanSuperDeluxeBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const paradisicBhutanSuperDeluxeProduct = {
  slug: detail.slug,
  places: ['Phuentsholing', 'Thimphu', 'Paro'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 3,
  transfers: 9,
  meals: 12,
  price: detail.price,
  images: cardImages
};
