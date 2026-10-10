// Bhutan Overland from Jaigaon. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
  img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg'),
  img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg'),
  img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
  img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
  img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
  img('csfou3kxztfubm39810ryp5ifexy_shutterstock_1652381137.jpg'),
  img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
  img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
  img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg'),
  img('c5zdi543udorguyfdp6ju513rzxv_15656544270_421c572020_b.jpg'),
  img('imqbu0xbgl8bykm6i06y53tjkf4w_22423229676_75bc3a183f_b.jpg'),
  img('94bhu1r9yb0mjh5ypvuhjgg2dlgo_Drukgyel%20Dzong%203.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Phuentsholing',
    dayLabel: 'Day 1',
    images: [
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg')
    ],
    dayImages: {
      1: [
        img('yiup7qro2cobgjuqbppy9xaxknbw_pic3.jpg'),
        img('wzk43phe3f2n5pie7psn6bf6ehe8_torsa%201.jpg'),
        img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
        img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg')
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
      image: img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
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
        img('o4xiotph7os69ac0uxsmaew06pbw_1621019442_shutterstock_1187906419.jpg'),
        img('cdl5xosospzimjwzry1vumk497kb_The-Romantic-Nature-Park-of-Thimphu-Ludrong-Memorial-Garden.jpg'),
        img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
        img('sdtra76g5lkpakyo8ln338q0s3pf_shutterstock_284541707.jpg')
      ],
      3: [
        img('9mjgmwz4uzguzddlci3crbdj5x60_Nation%20Memorial%20Chorten.jpg'),
        img('2xgygw98g58o2olcep4vlh9r5k0u_1481602683_View_of_the_National_Memorial_Chorten__Thimphu.jpg'),
        img('c5zdi543udorguyfdp6ju513rzxv_15656544270_421c572020_b.jpg'),
        img('imqbu0xbgl8bykm6i06y53tjkf4w_22423229676_75bc3a183f_b.jpg')
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
      image: img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Punakha',
    dayLabel: 'Day 4',
    images: [
      img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
      img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
      img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg'),
      img('qpn8bdffgz9s8irih7uzy0av78ar_shutterstock_713138947.jpg')
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
      name: 'Kingaling Hotel, Punakha',
      description: '1 night · Breakfast · Standard room · 3★ · Riverside hotel in the warm old winter capital',
      images: [
        img('7o38oz9rl33h54efarmyse7bvpfp_gal-2.jpg'),
        img('sqs5idfinkmzc6308tp7mrdlnzmm_e.jpg'),
        img('4vn52fmvgul11qta7ykglyam87qo_gal-10.jpg'),
        img('jbixna8gg6f6kv9o1zziv27yp16t_gal-1.jpg'),
        img('xqqnnjnzs38jvj1qw7gm2y9yiey5_gal-15.jpg'),
        img('k1qv6ljumda579vjz8pyrmlvb4ph_300010143_596121081926430_3956108891483221991_n.jpg'),
        img('sxk1mvlt3f2hyrs12q0u64pnor58_gal-16.jpg'),
        img('us2fta8osevusb8sfzkduss0im2d_gal-17.jpg')
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
      image: img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Paro',
    dayLabel: 'Day 5 to 7',
    images: [
      img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
      img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
      img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
      img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg')
    ],
    dayImages: {
      5: [
        img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg'),
        img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
        img('w5x24opcjm8mehhyz6uimxnov70i_shutterstock_641042962.jpg'),
        img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg')
      ],
      6: [
        img('gooh6qmdymk3a1sxb9077xxgevgd_Rinpung%20Dzong%201.jpg'),
        img('lvrrucang7e4i29fjjrr5dv1hfbg_1481602680_Ta_Dzong_museum.jpg'),
        img('40nfujj31s5rphnc2usp8a680fzp_1571657529_1280px-Rinpung_Dzong__Bhutan_01.jpg'),
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg')
      ],
      7: [
        img('94bhu1r9yb0mjh5ypvuhjgg2dlgo_Drukgyel%20Dzong%203.jpg'),
        img('q8phludak72pr8ojnm2cmpi4w33n_1481602623_Paro-Kyichu-Lhakhang299.jpg'),
        img('rart59u3umfaty65dt0fpejnn4ex_Drukgyel%20Dzong.jpg'),
        img('msz1iztswlp21hlu64vxiq9516bj_mount-jomolhari.jpgxDV.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Onward to Paro`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'Optional: Zuri Dzong and the Five Chortens',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 6 · Ta dzong and rinpung dzong and tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The round watchtower holding the National Museum',
      'Rinpung Dzong on the slope above the river',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face',
      `${DAY_MARK}Day 7 · Paro and kyichu lhakhang`,
      'Breakfast, then out into the Paro valley',
      'A guided round of the Paro valley',
      'Kyichu Lhakhang, among the oldest temples in Bhutan'
    ],
    accommodation: {
      name: 'HOTEL KHAMSUM INN, Paro',
      description: '3 nights · Breakfast · Standard room · 3★ · Quiet hotel in the valley below Taktsang',
      images: [
        img('9c95fa87u8m9j6379xor19tiwvu5_aa2911a67f7411e8be5a0ad03efb9e28.jpg'),
        img('5b97bx5t0a9vm3i1yxlsyxescu70_3d017b90be2211e79760025f77df004f.jpg'),
        img('gy2h1kcdm3nor02u7zshfccui5r6_e04927267f7411e8a6c702755708f0b3.jpg'),
        img('4wo8je41hvih1nrqffykmtojovuf_f1b4ed34ab2511e784100a209fbd0127.jpg'),
        img('gc11ylc54ho8g4yl7h5yrp66f9e7_3bcdf9b0be2211e7964f025f77df004f.jpg'),
        img('nhklteo0plhf6j9sdwcp1mz3ihmx_68985a2c991c11ee89240a58a9feac02.jpg'),
        img('sjh4clhto51ny7fpdfhdoytinacy_3b5be1eabe2211e782430a4cef95d023.jpg'),
        img('6jpt52wor9v36pdo00ekaldlc6eh_3f6133a0b8f111ee86ed0a58a9feac02.jpg'),
        img('t5r6tkpm123674y151h2lljalicf_441b0f18b8ee11ee9e4e0a58a9feac02.jpg'),
        img('waa7smffuuhz1caph1m27qzw0awg_3ae62cdebe2211e7adb6025f77df004f.jpg'),
        img('wuk22b44t7xe3do61t3ufwtysliq_3a6ef006be2211e7964f025f77df004f.jpg'),
        img('gl9brjtu1kbk4bwix1ppsm1g1lim_cc038d6e8ab311ea8d160242ac110002.jpg'),
        img('p7ye1284vo8csynxtimkyzl1y5f5_cc07e8c88ab311ea82fc0242ac110002.jpg')
      ]
    },
    activities: [
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
      },
      {
        name: 'Paro sightseeing with Kyichu Lhakhang',
        day: 7,
        optional: false,
        image: img('94bhu1r9yb0mjh5ypvuhjgg2dlgo_Drukgyel%20Dzong%203.jpg'),
        description: 'A guided day around Paro finishing at Kyichu Lhakhang, one of the oldest temples standing in Bhutan.'
      }
    ],
    program: {
      name: 'Paro',
      description: 'Days in the valley below Taktsang, with Rinpung Dzong, the National Museum and the Tiger’s Nest hike.',
      image: img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Phuentsholing',
    dayLabel: 'Day 8 to 9',
    images: [
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg')
    ],
    dayImages: {
      8: [
        img('pimaffguwc8nga3w0gcv8g43kv6b_2020-02-23.jpg'),
        img('eljv9nfavq2ojeluvwgegg0j5t8o_shutterstock_1380814979.jpg'),
        img('khf8y1lpqxenviw5vczf0uh2ytj0_Zangto_Pelri_Lhakhang,_Phuentsholing_during_LGFC_-_Bhutan_2019_(14).jpg'),
        img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
      ],
      9: [
        img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
        img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
        img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
        img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · Onward to Phuentsholing`,
      'Breakfast, then the long run back south',
      'Down through the Chukha gorge to the plains',
      'Optional: Zangto Pelri Lhakhang in the town',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 9 · Departure from Phuentsholing`,
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
      image: img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
    }
  }
];

const detail = {
  slug: 'bhutan-overland-from-jaigaon',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bhutan Overland from Jaigaon',
  alt: 'Terraced fields on the road to Punakha',
  days: '9 days / 8 nights',
  stations: '5 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Culture',
  tags: ['Culture'],
  price: 52470,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuentsholing', 'Thimphu', 'Punakha', 'Paro', 'Phuentsholing'],
  stats: { days: 9, cities: 5, hotels: 5, activities: 5, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['12 transfers', 'Transport'],
    ['16 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Eight nights with three in Paro, so the Tiger’s Nest and the valley sightseeing get separate days.',
    quoteMore: 'Three nights in Paro means you can climb Taktsang on whichever morning the weather is best. Ask your guide the evening before.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '9 days through Phuentsholing, Thimphu, Punakha, Paro, with 8 nights, Breakfast and dinner each day and a licensed Bhutanese guide: the thimphu sightseeing tour, the punakha sightseeing tour, the ta dzong and rinpung dzong, the hike to the tiger\'s nest.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 8 nights across Phuentsholing, Thimphu, Punakha, Paro with Breakfast and dinner each day; all land transfers by private vehicle; the Thimphu sightseeing tour; the Punakha sightseeing tour; the Ta Dzong and Rinpung Dzong; the Hike to the Tiger\'s Nest; the Paro sightseeing with Kyichu Lhakhang; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuentsholing (L)', text: 'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing\nBorder formalities at the Bhutan Gate\nCheck in and the rest of the day free', hotel: 'Meto Pema Hotel, Phuentsholing', highlights: ['Arrival at Bagdogra or Siliguri and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Onward to Thimphu (B, L)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nOptional: the Zorig Chusum school of arts\nArrival transfer and check in for the night', hotel: 'Forest Boutique', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'Optional: the Zorig Chusum school of arts'] },
    { title: 'Day 3: Thimphu sightseeing (B, L)', text: 'Breakfast, then out into the capital\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and the takin preserve', hotel: 'Forest Boutique', highlights: ['Breakfast, then out into the capital', 'The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and the takin preserve'] },
    { title: 'Day 4: To Punakha: Punakha Dzong (B, L)', text: 'Breakfast, then east over the Dochula pass\nThe hundred and eight chortens at the top\nPunakha Dzong between the Pho and Mo rivers\nThe long suspension bridge over the water', hotel: 'Kingaling Hotel', highlights: ['Breakfast, then east over the Dochula pass', 'The hundred and eight chortens at the top', 'Punakha Dzong between the Pho and Mo rivers'] },
    { title: 'Day 5: Onward to Paro (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nOptional: Zuri Dzong and the Five Chortens\nArrival transfer and check in for the night', hotel: 'HOTEL KHAMSUM INN', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'Optional: Zuri Dzong and the Five Chortens'] },
    { title: 'Day 6: Ta dzong and rinpung dzong and tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe round watchtower holding the National Museum\nRinpung Dzong on the slope above the river\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'HOTEL KHAMSUM INN', highlights: ['Breakfast, then out into the Paro valley', 'The round watchtower holding the National Museum', 'Rinpung Dzong on the slope above the river'] },
    { title: 'Day 7: Paro and kyichu lhakhang (B, L)', text: 'Breakfast, then out into the Paro valley\nA guided round of the Paro valley\nKyichu Lhakhang, among the oldest temples in Bhutan', hotel: 'HOTEL KHAMSUM INN', highlights: ['Breakfast, then out into the Paro valley', 'A guided round of the Paro valley', 'Kyichu Lhakhang, among the oldest temples in Bhutan'] },
    { title: 'Day 8: Onward to Phuentsholing (B, L)', text: 'Breakfast, then the long run back south\nDown through the Chukha gorge to the plains\nOptional: Zangto Pelri Lhakhang in the town\nArrival transfer and check in for the night', hotel: 'Alem Hotel & Resort, Bhutan', highlights: ['Breakfast, then the long run back south', 'Down through the Chukha gorge to the plains', 'Optional: Zangto Pelri Lhakhang in the town'] },
    { title: 'Day 9: Departure from Phuentsholing (B)', text: 'Breakfast at the hotel and check out\nBorder formalities and transfer to Siliguri', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Border formalities and transfer to Siliguri'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bhutan', href: '/asia/bhutan' },
  { label: detail.title }
];

export const bhutanFromJaigaonBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bhutanFromJaigaonProduct = {
  slug: detail.slug,
  places: ['Phuentsholing', 'Thimphu', 'Punakha', 'Paro'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 5,
  transfers: 12,
  meals: 16,
  price: detail.price,
  images: cardImages
};
