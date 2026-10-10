// Bhutan in Eight Days with Paro Taktsang. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
  img('csfou3kxztfubm39810ryp5ifexy_shutterstock_1652381137.jpg'),
  img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
  img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
  img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
  img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
  img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg'),
  img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
  img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
  img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
  img('m9wcjzznw40avixjnwiin39jmke3_1571657383_Simtokha_Dzong__Bhutan_01.jpg'),
  img('u3ppmn0h53stn9syn6xus8zu0i4h_shopping-in-thimphu.jpg'),
  img('9mjgmwz4uzguzddlci3crbdj5x60_Nation%20Memorial%20Chorten.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Phuentsholing',
    dayLabel: 'Day 1',
    images: [
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
    ],
    dayImages: {
      1: [
        img('l0fq7fjbnhs2rdw73cyv4fa8c62i_Phuentsholing-Market-1024x682.jpg'),
        img('eljv9nfavq2ojeluvwgegg0j5t8o_shutterstock_1380814979.jpg'),
        img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
        img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Phuentsholing`,
      'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing',
      'Border formalities at the Bhutan Gate',
      'Check in and the rest of the day free'
    ],
    accommodation: {
      name: 'Meto Pema Hotel, Phuentsholing, Phuntsholing',
      description: '1 night · Breakfast · Standard room · 3★ · Border town hotel on the Indian frontier',
      images: [
        img('jvsj1mo3z7syibtze5hp33urjgvm_banner_2.jpg'),
        img('yizwu8lwffe3ypfwui8fsbr1owzr_lobby_pic.jpg'),
        img('17akakniwi6zon4vlordyq59qf55_Room_3.jpg'),
        img('sa3beas1crxmfb0q4ky7xt3hgcco_banner_4.jpg'),
        img('9iq0rwl7nto3yvhxsbwp8xq6xm0h_482732061.webp'),
        img('lt1t9hqbes7924p1x2ejgnvvffge_king_suite.jpg'),
        img('a6gq2kawj6mcbrx2o2aw34dfsmc4_bar-pic.jpg'),
        img('2byuwy023to85xadaiwtat0akqq6_king.jpg'),
        img('nwulrwfzevs293qnfxmtuvhupwic_482730465.webp'),
        img('mlpzqzcxatnrb9xyewyn8mhnkdzw_banner_3.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Phuentsholing',
      description: 'Time in the border town where Bhutan begins, with the Bhutan Gate and Kharbandi above the plains.',
      image: img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Thimphu',
    dayLabel: 'Day 2 to 3',
    images: [
      img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg'),
      img('csfou3kxztfubm39810ryp5ifexy_shutterstock_1652381137.jpg'),
      img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg'),
      img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg')
    ],
    dayImages: {
      2: [
        img('o4xiotph7os69ac0uxsmaew06pbw_1621019442_shutterstock_1187906419.jpg'),
        img('cdl5xosospzimjwzry1vumk497kb_The-Romantic-Nature-Park-of-Thimphu-Ludrong-Memorial-Garden.jpg'),
        img('m9wcjzznw40avixjnwiin39jmke3_1571657383_Simtokha_Dzong__Bhutan_01.jpg'),
        img('u3ppmn0h53stn9syn6xus8zu0i4h_shopping-in-thimphu.jpg')
      ],
      3: [
        img('9mjgmwz4uzguzddlci3crbdj5x60_Nation%20Memorial%20Chorten.jpg'),
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
      name: 'Forest Boutique, Thimphu City',
      description: '2 nights · Breakfast · Standard room · 3★ · Comfortable hotel in the capital, walkable to the clock tower',
      images: [
        img('0jmhncfthbwg7veihsbti5jnqdwc_xugz5vg4mpmzb13moklxsm6jav27_03-1-scaled%20copy.jpg'),
        img('7qxq3pn5fbgm3q31j26sujtdwkit_044-scaled.jpg'),
        img('hbbyvwgqhtqbp60s9yb0s98e1e8a_06-2-scaled.jpg'),
        img('uui2a7icqan259yrzsb213xb79my_hp74y9qzh0b8hhnbm09yrz6abm46_016-scaled%20copy.jpg'),
        img('jutb45auzwrsofd0jnjbn76ipqi2_1y1g9te3x10lod7y4uzt35469ij0_015-scaled%20copy.jpg'),
        img('cxqrkos0xdba3hxdgcit78w2fdpw_ieds25oc6cibkbwi8e9o10p5a4km_013-scaled%20copy.jpg'),
        img('a67snidctr2pvndbaun6icvh2smt_gh09wij4qgjn9ll4dvl8cfqjj2nt_019-scaled%20copy.jpg'),
        img('8ivabl7tsoao6408x76xp47pun0w_63c279tr22qa2ltinjj0xb0wh3wt_047-scaled%20copy.jpg')
      ]
    },
    activities: [
      {
        name: 'Thimphu sightseeing tour',
        day: 3,
        optional: false,
        image: img('9mjgmwz4uzguzddlci3crbdj5x60_Nation%20Memorial%20Chorten.jpg'),
        description: 'A guided day round the capital with the Memorial Chorten, the Buddha Dordenma, Tashichho Dzong and the takin preserve.'
      }
    ],
    program: {
      name: 'Thimphu',
      description: 'Days in the capital, with the Memorial Chorten, the Buddha Dordenma and Tashichho Dzong.',
      image: img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg')
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
        img('38kz4h1x67igl2szup6j3v7owa7v_steptodown.com744302.jpg'),
        img('056auoul5hww4jxhty1ioepx1oi7_5116835341_c68f3cb493_b.jpg'),
        img('0hlgpb14iwhgm0834fzkpbd5sgiv_8154575525_198c2ed1bb_b.jpg'),
        img('fk9rfodqaqcnh9gy9tsxw2opj4gf_1571658047_Drc_gk7VYAAMVE4.jpg')
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
      name: 'White Dragon Hotel Punakha, Punakha',
      description: '1 night · Breakfast · Standard room · 3★ · Riverside hotel in the warm old winter capital',
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
    dayLabel: 'Day 5 to 6',
    images: [
      img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
      img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
      img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
      img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg')
    ],
    dayImages: {
      5: [
        img('unet3dsecufc4v8cka1tv9k6gerv_steptodown.com812355.jpg'),
        img('r4dreq5jqx0v2sjjwm6r9g9xvhxm_1578738831_Rinpung_Dzong_Monastery1.jpg'),
        img('xv3hvedhkq1g04vmez6l6l8h5g44_1578733577_Rinpung_Dzong_Monastery.jpg'),
        img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg')
      ],
      6: [
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg'),
        img('arryt9zia20eawdl6ai40dhg5aut_1481602641_kuil-terindah-di-asia.jpg'),
        img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
        img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · To Paro: Paro sightseeing`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'Rinpung Dzong and the National Museum',
      'The shopfronts of Paro town',
      `${DAY_MARK}Day 6 · Tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face'
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
        name: 'Paro half day sightseeing tour',
        day: 5,
        optional: false,
        image: img('unet3dsecufc4v8cka1tv9k6gerv_steptodown.com812355.jpg'),
        description: 'A half day round the valley taking in Rinpung Dzong, the National Museum and the main street of Paro town.'
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
      image: img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Phuentsholing',
    dayLabel: 'Day 7 to 8',
    images: [
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
    ],
    dayImages: {
      7: [
        img('ljpqw4npv8wncod5fq1r7hw2zt5y_shutterstock_1344366731.jpg'),
        img('wzk43phe3f2n5pie7psn6bf6ehe8_torsa%201.jpg'),
        img('khf8y1lpqxenviw5vczf0uh2ytj0_Zangto_Pelri_Lhakhang,_Phuentsholing_during_LGFC_-_Bhutan_2019_(14).jpg'),
        img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg')
      ],
      8: [
        img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
        img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
        img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
        img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Onward to Phuentsholing`,
      'Breakfast, then the long run back south',
      'Down through the Chukha gorge to the plains',
      'Optional: Zangto Pelri Lhakhang in the town',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 8 · Departure from Siliguri`,
      'Breakfast at the hotel and check out',
      'Border formalities and transfer to Siliguri'
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
      image: img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg')
    }
  }
];

const detail = {
  slug: 'bhutan-in-eight-days-with-paro-taktsang',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bhutan in Eight Days with Paro Taktsang',
  alt: 'Punakha Dzong standing between two rivers',
  days: '8 days / 7 nights',
  stations: '5 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Culture',
  tags: ['Culture'],
  price: 50340,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuentsholing', 'Thimphu', 'Punakha', 'Paro', 'Phuentsholing'],
  stats: { days: 8, cities: 5, hotels: 5, activities: 4, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
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
    quote: 'Eight days overland and back, with Punakha slotted in. It is the version most families from Bengal and Assam take.',
    quoteMore: 'Carry cash in Indian rupees. Notes up to five hundred are taken everywhere in Bhutan and cards often are not.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '8 days through Phuentsholing, Thimphu, Punakha, Paro, with 7 nights, Breakfast and dinner each day and a licensed Bhutanese guide: the thimphu sightseeing tour, the punakha sightseeing tour, the paro half day sightseeing tour, the hike to the tiger\'s nest.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights across Phuentsholing, Thimphu, Punakha, Paro with Breakfast and dinner each day; all land transfers by private vehicle; the Thimphu sightseeing tour; the Punakha sightseeing tour; the Paro half day sightseeing tour; the Hike to the Tiger\'s Nest; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuentsholing (L)', text: 'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing\nBorder formalities at the Bhutan Gate\nCheck in and the rest of the day free', hotel: 'Meto Pema Hotel, Phuentsholing', highlights: ['Arrival at Bagdogra or Siliguri and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Onward to Thimphu (B, L)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nOptional: the Zorig Chusum school of arts\nArrival transfer and check in for the night', hotel: 'Forest Boutique', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'Optional: the Zorig Chusum school of arts'] },
    { title: 'Day 3: Thimphu sightseeing (B, L)', text: 'Breakfast, then out into the capital\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and the takin preserve', hotel: 'Forest Boutique', highlights: ['Breakfast, then out into the capital', 'The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and the takin preserve'] },
    { title: 'Day 4: To Punakha: Punakha Dzong (B, L)', text: 'Breakfast, then east over the Dochula pass\nThe hundred and eight chortens at the top\nPunakha Dzong between the Pho and Mo rivers\nThe long suspension bridge over the water', hotel: 'White Dragon Hotel Punakha', highlights: ['Breakfast, then east over the Dochula pass', 'The hundred and eight chortens at the top', 'Punakha Dzong between the Pho and Mo rivers'] },
    { title: 'Day 5: To Paro: Paro sightseeing (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nRinpung Dzong and the National Museum\nThe shopfronts of Paro town', hotel: 'Ananda Resort', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'Rinpung Dzong and the National Museum'] },
    { title: 'Day 6: Tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Ananda Resort', highlights: ['Breakfast, then out into the Paro valley', 'The climb up the pine slope to Taktsang', 'The monastery wedged into the cliff face'] },
    { title: 'Day 7: Onward to Phuentsholing (B, L)', text: 'Breakfast, then the long run back south\nDown through the Chukha gorge to the plains\nOptional: Zangto Pelri Lhakhang in the town\nArrival transfer and check in for the night', hotel: 'Alem Hotel & Resort, Bhutan', highlights: ['Breakfast, then the long run back south', 'Down through the Chukha gorge to the plains', 'Optional: Zangto Pelri Lhakhang in the town'] },
    { title: 'Day 8: Departure from Siliguri (B)', text: 'Breakfast at the hotel and check out\nBorder formalities and transfer to Siliguri', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Border formalities and transfer to Siliguri'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Bhutan', href: '/asien/bhutan' },
  { label: detail.title }
];

export const bhutanTaktsangEightDaysBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bhutanTaktsangEightDaysProduct = {
  slug: detail.slug,
  places: ['Phuentsholing', 'Thimphu', 'Punakha', 'Paro'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 4,
  transfers: 12,
  meals: 14,
  price: detail.price,
  images: cardImages
};
