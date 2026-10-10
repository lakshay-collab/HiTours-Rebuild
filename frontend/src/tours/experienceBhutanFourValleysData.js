// Experience Bhutan Across Four Valleys. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
  img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg'),
  img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
  img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
  img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
  img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
  img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
  img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
  img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
  img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
  img('5jqpfw02tnwy2j5r7zzcxjhy9grx_PHOTO-2024-09-16-17-35-35.jpg'),
  img('fk9rfodqaqcnh9gy9tsxw2opj4gf_1571658047_Drc_gk7VYAAMVE4.jpg'),
  img('j6mdu0tk28hq758kizrzzcm2hb9z_Bhutan-Dana_Scheffler-1.png')
];

const stops = [
  {
    letter: 'A',
    name: 'Phuentsholing',
    dayLabel: 'Day 1',
    images: [
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg')
    ],
    dayImages: {
      1: [
        img('yiup7qro2cobgjuqbppy9xaxknbw_pic3.jpg'),
        img('wzk43phe3f2n5pie7psn6bf6ehe8_torsa%201.jpg'),
        img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
        img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Phuentsholing`,
      'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing',
      'Border formalities at the Bhutan Gate',
      'Check in and the rest of the day free'
    ],
    accommodation: {
      name: 'Alem Hotel & Resort, Bhutan, Phuntsholing',
      description: '1 night · Breakfast · Standard room · 3★ · Border town hotel on the Indian frontier',
      images: [
        img('xb0ui8y5x5wxjz4fdp2eelkzwop3_ALEM%20HOTEL%201.png'),
        img('vhwmxsf05k1b5zll1hdfgctkhzlw_ALEM%20HOTEL%20&%20RESORT%205.png'),
        img('hrne0ac1xq5ci854uv8hj866zmz2_ALEM%20HOTEL%20&%20RESORT%203.png'),
        img('n72sfstn5kuvb8qtp411ipj2m8cr_ALEM%20HOTEL%20&%20RESORT%206.png'),
        img('ckqlf4pmifsn79lh4yj5x9ayt60f_ALEM%20HOTEL%20&%20RESORt%202.png'),
        img('ty3kubkk6p85fr7v5el1m7agtfib_ALEM%20HOTEL%20&%20RESORT%204.png'),
        img('5qlfw5ho6mmsz0qwg0gwetm7pwqx_9720visit%20bhutan%20Alem%20Hotel%20and%20Resort%20Phuentsholing%2012.jpg'),
        img('wm6ngq43270xmmxvtgggew2eqp5k_ALEM%20HOTEL%20&%20RESORT%209.png'),
        img('pz67hsrfrwibbteak98y8nlv6pso_ALEM%20HOTEL%20&%20RESORT%208.png')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Phuentsholing',
      description: 'Time in the border town where Bhutan begins, with the Bhutan Gate and Kharbandi above the plains.',
      image: img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg')
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
        img('cdl5xosospzimjwzry1vumk497kb_The-Romantic-Nature-Park-of-Thimphu-Ludrong-Memorial-Garden.jpg'),
        img('o4xiotph7os69ac0uxsmaew06pbw_1621019442_shutterstock_1187906419.jpg'),
        img('5jqpfw02tnwy2j5r7zzcxjhy9grx_PHOTO-2024-09-16-17-35-35.jpg'),
        img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg')
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
      `${DAY_MARK}Day 3 · Thimphu sightseeing`,
      'Breakfast, then out into the capital',
      'The Memorial Chorten and the Buddha Dordenma',
      'Tashichho Dzong and the takin preserve'
    ],
    accommodation: {
      name: 'Hotel Taktsang, Thimphu City',
      description: '2 nights · Breakfast · Standard room · 3★ · Comfortable hotel in the capital, walkable to the clock tower',
      images: [
        img('n47t0s2vifsgno0b07huw4m68cp9_201711151332086038-096e0e64_z.jpg'),
        img('xss9f8n5p1np3xysl4fk9bjxv1kv_201711151332086038-f3e5c7bd_z.jpg'),
        img('e1kv44sddn2gj5agjbbvxkuqje79_201711151332086038-f0269b24_z.jpg'),
        img('5xbr1as4nkh14z90yn9fal3l3ak8_201711151332086038-340440-3148d8144d4811ee9e090a58a9feac02.webp'),
        img('qal92owd39bvhch43gbjziovenjg_download.png'),
        img('1mu7w8jsvqsuzuhg23i1w46ebb5w_201711151332086038-c5317585_z.jpg'),
        img('0xht2zr78te6w2cp55lllzbl41qu_201711151332086038-6cc922b44d4711eebcbd0a58a9feac02.jpg'),
        img('knhdk55kg1qp3y9lyp2i7burpcex_201711151332086038-346-3423122edf6211ed91460a58a9feac02.webp'),
        img('lm4ewwk5m05wz642c7lw8sm671xn_download%20(6).png'),
        img('bbnlfk2lopkszspmuvint5xc8p7u_bar.jpg'),
        img('73h5m6xos2isj8gniv3zkhwitgwn_restaurant-hotel-taktsang.jpg')
      ]
    },
    activities: [
      {
        name: 'Thimphu sightseeing tour',
        day: 3,
        optional: false,
        image: img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
        description: 'A guided day round the capital with the Memorial Chorten, the Buddha Dordenma, Tashichho Dzong and the takin preserve.'
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
    name: 'Punakha',
    dayLabel: 'Day 4 to 5',
    images: [
      img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg'),
      img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
      img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
      img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg')
    ],
    dayImages: {
      4: [
        img('38kz4h1x67igl2szup6j3v7owa7v_steptodown.com744302.jpg'),
        img('056auoul5hww4jxhty1ioepx1oi7_5116835341_c68f3cb493_b.jpg'),
        img('0hlgpb14iwhgm0834fzkpbd5sgiv_8154575525_198c2ed1bb_b.jpg'),
        img('fk9rfodqaqcnh9gy9tsxw2opj4gf_1571658047_Drc_gk7VYAAMVE4.jpg')
      ],
      5: [
        img('hwdpzwlcu41cs2x6cq1rpgsee8zq_Gangtey%20Goemba%20Buddhist%20monastery%201.jpg'),
        img('j6mdu0tk28hq758kizrzzcm2hb9z_Bhutan-Dana_Scheffler-1.png'),
        img('tu7006jnl2qdcjom4vk9czur2rz7_1621019190_shutterstock_197981387.jpg'),
        img('lmylwwkh8qs7zmhzxppfsordx82s_shutterstock_684974815.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · To Punakha: Punakha Dzong`,
      'Breakfast, then east over the Dochula pass',
      'The hundred and eight chortens at the top',
      'Punakha Dzong between the Pho and Mo rivers',
      'The long suspension bridge over the water',
      `${DAY_MARK}Day 5 · Gangtey`,
      'Breakfast in the warm Punakha valley',
      'Gangtey Goemba on its low ridge',
      'The crane valley spread out below'
    ],
    accommodation: {
      name: 'White Dragon Hotel Punakha, Punakha',
      description: '2 nights · Breakfast · Standard room · 3★ · Riverside hotel in the warm old winter capital',
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
        name: 'Punakha sightseeing tour',
        day: 4,
        optional: false,
        image: img('38kz4h1x67igl2szup6j3v7owa7v_steptodown.com744302.jpg'),
        description: 'The fortress where Bhutan’s kings are crowned, built on the spit of land where two rivers meet below the town.'
      },
      {
        name: 'Gangtey and the Phobjikha valley',
        day: 5,
        optional: false,
        image: img('hwdpzwlcu41cs2x6cq1rpgsee8zq_Gangtey%20Goemba%20Buddhist%20monastery%201.jpg'),
        description: 'Gangtey Goemba on its low ridge above the Phobjikha valley, the winter ground of the black necked cranes.'
      }
    ],
    program: {
      name: 'Punakha',
      description: 'Days in the warm old winter capital, with the Dzong between two rivers and the suspension bridge.',
      image: img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Paro',
    dayLabel: 'Day 6 to 8',
    images: [
      img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
      img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
      img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
      img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg')
    ],
    dayImages: {
      6: [
        img('94bhu1r9yb0mjh5ypvuhjgg2dlgo_Drukgyel%20Dzong%203.jpg'),
        img('q8phludak72pr8ojnm2cmpi4w33n_1481602623_Paro-Kyichu-Lhakhang299.jpg'),
        img('rart59u3umfaty65dt0fpejnn4ex_Drukgyel%20Dzong.jpg'),
        img('msz1iztswlp21hlu64vxiq9516bj_mount-jomolhari.jpgxDV.jpg')
      ],
      7: [
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg'),
        img('arryt9zia20eawdl6ai40dhg5aut_1481602641_kuil-terindah-di-asia.jpg'),
        img('utktxp60vkel43zy3dgkvkp5qxtp_a04284e4399dd2bcf97743a78860dea6%20(1).jpg'),
        img('a37gkwri86q9og0km196wnf1ktlf_20180708-192648-largejpg.jpg')
      ],
      8: [
        img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
        img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
        img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
        img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · To Paro: Paro and Kyichu Lhakhang`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'A guided round of the Paro valley',
      'Kyichu Lhakhang, among the oldest temples in Bhutan',
      `${DAY_MARK}Day 7 · Tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face',
      `${DAY_MARK}Day 8 · Departure from Paro`,
      'Breakfast at the hotel and check out',
      'Private transfer to Paro International for your flight home'
    ],
    accommodation: {
      name: 'Ananda Resort, Paro',
      description: '2 nights · Breakfast · Standard room · 3★ · Quiet hotel in the valley below Taktsang',
      images: [
        img('xczvkzl3kb2tflj2n13ije7nmwhg_4m1xyzfmkl9ixdpvzn88w3yl2qhn_2023-04-06.webp'),
        img('2nt68zha1z0ut3oz4rfkgr8c2wq1_2023-11-16%20(1).jpg'),
        img('yoxexo7ejgzucekpnrkihekguz51_R3.jpg'),
        img('by1fpibrrg4h4d43k93sca8ocpzc_2023-04-06%20(1).jpg'),
        img('o82nllianoylwpzqgnxsc9dwkcgx_IMG_2572.jpeg'),
        img('nfdndvwrq2ldkbmo76v2plo3nxh9_R5.jpg'),
        img('dcuzjfnkw5teones65wtpxlhiz7c_R1.jpg'),
        img('8vodhkirxld6e8ls6gq9pi7ww1ov_2023-11-16.jpg')
      ]
    },
    activities: [
      {
        name: 'Paro sightseeing with Kyichu Lhakhang',
        day: 6,
        optional: false,
        image: img('94bhu1r9yb0mjh5ypvuhjgg2dlgo_Drukgyel%20Dzong%203.jpg'),
        description: 'A guided day around Paro finishing at Kyichu Lhakhang, one of the oldest temples standing in Bhutan.'
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
      image: img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
    }
  }
];

const detail = {
  slug: 'experience-bhutan-across-four-valleys',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Experience Bhutan Across Four Valleys',
  alt: 'Gangtey Goemba above the Phobjikha valley',
  days: '8 days / 7 nights',
  stations: '4 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Culture',
  tags: ['Culture', 'Nature'],
  price: 45884,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuentsholing', 'Thimphu', 'Punakha', 'Paro'],
  stats: { days: 8, cities: 4, hotels: 4, activities: 5, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['12 transfers', 'Transport'],
    ['14 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Phuentsholing, Thimphu, Punakha and Paro with a day out at Gangtey. This is the full western circuit at a sensible pace.',
    quoteMore: 'The Gangtey day is the one to protect. Between November and February the black necked cranes are actually in the valley.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '8 days through Phuentsholing, Thimphu, Punakha, Paro, with 7 nights, daily breakfast and a licensed Bhutanese guide: the thimphu sightseeing tour, the punakha sightseeing tour, the gangtey and the phobjikha valley, the paro sightseeing with kyichu lhakhang.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights across Phuentsholing, Thimphu, Punakha, Paro with daily breakfast; all land transfers by private vehicle; the Thimphu sightseeing tour; the Punakha sightseeing tour; the Gangtey and the Phobjikha valley; the Paro sightseeing with Kyichu Lhakhang; the Hike to the Tiger\'s Nest; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuentsholing (L)', text: 'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing\nBorder formalities at the Bhutan Gate\nCheck in and the rest of the day free', hotel: 'Alem Hotel & Resort, Bhutan', highlights: ['Arrival at Bagdogra or Siliguri and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Onward to Thimphu (B, L)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nOptional: the Zorig Chusum school of arts\nArrival transfer and check in for the night', hotel: 'Hotel Taktsang', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'Optional: the Zorig Chusum school of arts'] },
    { title: 'Day 3: Thimphu sightseeing (B, L)', text: 'Breakfast, then out into the capital\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and the takin preserve', hotel: 'Hotel Taktsang', highlights: ['Breakfast, then out into the capital', 'The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and the takin preserve'] },
    { title: 'Day 4: To Punakha: Punakha Dzong (B, L)', text: 'Breakfast, then east over the Dochula pass\nThe hundred and eight chortens at the top\nPunakha Dzong between the Pho and Mo rivers\nThe long suspension bridge over the water', hotel: 'White Dragon Hotel Punakha', highlights: ['Breakfast, then east over the Dochula pass', 'The hundred and eight chortens at the top', 'Punakha Dzong between the Pho and Mo rivers'] },
    { title: 'Day 5: Gangtey (B, L)', text: 'Breakfast in the warm Punakha valley\nGangtey Goemba on its low ridge\nThe crane valley spread out below', hotel: 'White Dragon Hotel Punakha', highlights: ['Breakfast in the warm Punakha valley', 'Gangtey Goemba on its low ridge', 'The crane valley spread out below'] },
    { title: 'Day 6: To Paro: Paro and Kyichu Lhakhang (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nA guided round of the Paro valley\nKyichu Lhakhang, among the oldest temples in Bhutan', hotel: 'Ananda Resort', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'A guided round of the Paro valley'] },
    { title: 'Day 7: Tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Ananda Resort', highlights: ['Breakfast, then out into the Paro valley', 'The climb up the pine slope to Taktsang', 'The monastery wedged into the cliff face'] },
    { title: 'Day 8: Departure from Paro (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Paro International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Paro International for your flight home'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Bhutan', href: '/asien/bhutan' },
  { label: detail.title }
];

export const experienceBhutanFourValleysBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const experienceBhutanFourValleysProduct = {
  slug: detail.slug,
  places: ['Phuentsholing', 'Thimphu', 'Punakha', 'Paro'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 5,
  transfers: 12,
  meals: 14,
  price: detail.price,
  images: cardImages
};
