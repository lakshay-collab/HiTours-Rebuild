// Bhutan New Year Special Tour. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
  img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
  img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
  img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
  img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
  img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg'),
  img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
  img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg'),
  img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
  img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
  img('mp94k0dlvntia7le5yorai0v6zae_Karbandi%20Monastery-6.jpg'),
  img('orejxya1upaaevqi5vb8hz031vrt_Punakha%20Dzong-2.jpg'),
  img('056auoul5hww4jxhty1ioepx1oi7_5116835341_c68f3cb493_b.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Phuentsholing',
    dayLabel: 'Day 1',
    images: [
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
      img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg')
    ],
    dayImages: {
      1: [
        img('khf8y1lpqxenviw5vczf0uh2ytj0_Zangto_Pelri_Lhakhang,_Phuentsholing_during_LGFC_-_Bhutan_2019_(14).jpg'),
        img('l0fq7fjbnhs2rdw73cyv4fa8c62i_Phuentsholing-Market-1024x682.jpg'),
        img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
        img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Phuentsholing`,
      'Arrival at Bagdogra and transfer to Phuentsholing',
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
      image: img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Thimphu',
    dayLabel: 'Day 2 to 3',
    images: [
      img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg'),
      img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
      img('mvvyzzw5tvlu1po0nqknommizxg2_shutterstock_1255335592.jpg'),
      img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg')
    ],
    dayImages: {
      2: [
        img('mp94k0dlvntia7le5yorai0v6zae_Karbandi%20Monastery-6.jpg'),
        img('eljv9nfavq2ojeluvwgegg0j5t8o_shutterstock_1380814979.jpg'),
        img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg'),
        img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg')
      ],
      3: [
        img('orejxya1upaaevqi5vb8hz031vrt_Punakha%20Dzong-2.jpg'),
        img('056auoul5hww4jxhty1ioepx1oi7_5116835341_c68f3cb493_b.jpg'),
        img('f2milqtkqdm7vlqld2pb1j2g4djn_15632123990_6a353bda76_b.jpg'),
        img('0hlgpb14iwhgm0834fzkpbd5sgiv_8154575525_198c2ed1bb_b.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · To Thimphu: Kharbandi Gompa`,
      'Breakfast, then north into the hills towards Thimphu',
      'The Chukha dam and the Wang Chhu gorge on the way',
      'Kharbandi Gompa on the hillside',
      'The Bengal plains laid out flat below',
      `${DAY_MARK}Day 3 · Punakha dzong and the new year party`,
      'Breakfast, then out into the capital',
      'Punakha Dzong between the Pho and Mo rivers',
      'The long suspension bridge over the water',
      'A New Year dinner laid on for the group',
      'Bhutanese dances and archery in the courtyard'
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
        name: 'Kharbandi Gompa',
        day: 2,
        optional: false,
        image: img('mp94k0dlvntia7le5yorai0v6zae_Karbandi%20Monastery-6.jpg'),
        description: 'A small hillside monastery above Phuentsholing with the plains of Bengal laid out flat below it.'
      },
      {
        name: 'Punakha sightseeing tour',
        day: 3,
        optional: false,
        image: img('orejxya1upaaevqi5vb8hz031vrt_Punakha%20Dzong-2.jpg'),
        description: 'The fortress where Bhutan’s kings are crowned, built on the spit of land where two rivers meet below the town.'
      },
      {
        name: 'New Year celebration',
        day: 3,
        optional: false,
        image: img('2057gvokp3jusfel9i5aj1s62f1y_New%20year-4.jpg'),
        description: 'A New Year dinner and celebration arranged with the group, Bhutanese style, at the hotel.'
      }
    ],
    program: {
      name: 'Thimphu',
      description: 'Days in the capital, with the Memorial Chorten, the Buddha Dordenma and Tashichho Dzong.',
      image: img('srg7kcdi1rphxgyxz5297drbd8s2_shutterstock_769658776.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Paro',
    dayLabel: 'Day 4 to 5',
    images: [
      img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
      img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
      img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
      img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
    ],
    dayImages: {
      4: [
        img('5vevo4ut25ruwtd64dfivhqp7u73_changangkha%20lhakhang-1.jpg'),
        img('wt6f33c5vmnsp4nxwzgz9yzoxhmm_1621018987_shutterstock_1459271045.jpg'),
        img('2xgygw98g58o2olcep4vlh9r5k0u_1481602683_View_of_the_National_Memorial_Chorten__Thimphu.jpg'),
        img('oaru6ab1uwxkr63m1iszx1sq63ke_46576216255_3466563fb7_o.jpg')
      ],
      5: [
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg'),
        img('arryt9zia20eawdl6ai40dhg5aut_1481602641_kuil-terindah-di-asia.jpg'),
        img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
        img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · To Paro: Thimphu sightseeing`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'The Memorial Chorten and the Buddha Dordenma',
      'Tashichho Dzong and the takin preserve',
      `${DAY_MARK}Day 5 · Tiger's nest hike`,
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
        name: 'Thimphu sightseeing tour',
        day: 4,
        optional: false,
        image: img('5vevo4ut25ruwtd64dfivhqp7u73_changangkha%20lhakhang-1.jpg'),
        description: 'A guided day round the capital with the Memorial Chorten, the Buddha Dordenma, Tashichho Dzong and the takin preserve.'
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
      image: img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Phuentsholing',
    dayLabel: 'Day 6 to 7',
    images: [
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg')
    ],
    dayImages: {
      6: [
        img('ljpqw4npv8wncod5fq1r7hw2zt5y_shutterstock_1344366731.jpg'),
        img('m6hylw141sgaodgve88sa671hgln_Central%20Park-1.jpg'),
        img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
        img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg')
      ],
      7: [
        img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
        img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
        img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
        img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Onward to Phuentsholing`,
      'Breakfast, then the long run back south',
      'Down through the Chukha gorge to the plains',
      'Optional: Zangto Pelri Lhakhang in the town',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 7 · Departure from Bagdogra`,
      'Breakfast at the hotel and check out',
      'Border formalities and transfer to Siliguri'
    ],
    accommodation: {
      name: 'Gadhen Hotel, Bhutan, Phuntsholing',
      description: '1 night · Breakfast and dinner · Standard room · 3★ · Border town hotel on the Indian frontier',
      images: [
        img('dh4cs2vw5d4d3f2g9mi4phv2d0hb_Gadhen%20Hotel%201.png'),
        img('oyy3vykuh3ef6tuwgg0ajiu5n2v6_Gadhen%20Hotel%207.png'),
        img('xuf9nlf0jyhqqtwdtzghco82xsml_Gadhen%20Hotel%204.png'),
        img('0cohndy2fdvzstpz9c82fksx9m06_Gadhen%20Hotel%203.png'),
        img('46hnd4pk6goa3xay6l2zw1jdhs9s_Gadhen%20Hotel%209.png'),
        img('slokt561rbmr0cdfedrx39z846kb_Gadhen%20Hotel%206.png'),
        img('zh220f8etr19b5tkyldk0ddrm8gp_Gadhen%20Hotel%205.png'),
        img('isqfnsq57ofhsj2bfk92zksxlll8_4a35a387.png')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Phuentsholing',
      description: 'Time in the border town where Bhutan begins, with the Bhutan Gate and Kharbandi above the plains.',
      image: img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg')
    }
  }
];

const detail = {
  slug: 'bhutan-new-year-special-tour',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bhutan New Year Special Tour',
  alt: 'Masked dancers at a Bhutanese festival',
  days: '7 days / 6 nights',
  stations: '4 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Culture',
  tags: ['Culture'],
  price: 40840,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuentsholing', 'Thimphu', 'Paro', 'Phuentsholing'],
  stats: { days: 7, cities: 4, hotels: 4, activities: 5, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['12 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Built around the New Year, with the celebration laid on for the group and the Chele La pass on the way home.',
    quoteMore: 'Book this one by September. Bhutan has a hotel cap over New Year and the Thimphu rooms are gone first.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '7 days through Phuentsholing, Thimphu, Paro, with 6 nights, Breakfast and dinner each day and a licensed Bhutanese guide: the kharbandi gompa, the punakha sightseeing tour, the new year celebration, the thimphu sightseeing tour.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights across Phuentsholing, Thimphu, Paro with Breakfast and dinner each day; all land transfers by private vehicle; the Kharbandi Gompa; the Punakha sightseeing tour; the New Year celebration; the Thimphu sightseeing tour; the Hike to the Tiger\'s Nest; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuentsholing (L)', text: 'Arrival at Bagdogra and transfer to Phuentsholing\nBorder formalities at the Bhutan Gate\nCheck in and the rest of the day free', hotel: 'Alem Hotel & Resort, Bhutan', highlights: ['Arrival at Bagdogra and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate', 'Check in and the rest of the day free'] },
    { title: 'Day 2: To Thimphu: Kharbandi Gompa (B, L)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nKharbandi Gompa on the hillside\nThe Bengal plains laid out flat below', hotel: 'Forest Boutique', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'Kharbandi Gompa on the hillside'] },
    { title: 'Day 3: Punakha dzong and the new year party (B, L)', text: 'Breakfast, then out into the capital\nPunakha Dzong between the Pho and Mo rivers\nThe long suspension bridge over the water\nA New Year dinner laid on for the group\nBhutanese dances and archery in the courtyard', hotel: 'Forest Boutique', highlights: ['Breakfast, then out into the capital', 'Punakha Dzong between the Pho and Mo rivers', 'The long suspension bridge over the water'] },
    { title: 'Day 4: To Paro: Thimphu sightseeing (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and the takin preserve', hotel: 'Ananda Resort', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'The Memorial Chorten and the Buddha Dordenma'] },
    { title: 'Day 5: Tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Ananda Resort', highlights: ['Breakfast, then out into the Paro valley', 'The climb up the pine slope to Taktsang', 'The monastery wedged into the cliff face'] },
    { title: 'Day 6: Onward to Phuentsholing (B, L)', text: 'Breakfast, then the long run back south\nDown through the Chukha gorge to the plains\nOptional: Zangto Pelri Lhakhang in the town\nArrival transfer and check in for the night', hotel: 'Gadhen Hotel, Bhutan', highlights: ['Breakfast, then the long run back south', 'Down through the Chukha gorge to the plains', 'Optional: Zangto Pelri Lhakhang in the town'] },
    { title: 'Day 7: Departure from Bagdogra (B)', text: 'Breakfast at the hotel and check out\nBorder formalities and transfer to Siliguri', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Border formalities and transfer to Siliguri'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bhutan', href: '/asia/bhutan' },
  { label: detail.title }
];

export const bhutanNewYearSpecialBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bhutanNewYearSpecialProduct = {
  slug: detail.slug,
  places: ['Phuentsholing', 'Thimphu', 'Paro'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 5,
  transfers: 10,
  meals: 12,
  price: detail.price,
  images: cardImages
};
