// Luxury Phuket, Koh Samui and Krabi. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg'),
  img('wzmar6v3olzlqldy34o8thmatj9a_shutterstock_589505762.jpg'),
  img('knpt0tp5t6sd970nzjivyl0p9zvq_shutterstock_1090315565.jpg'),
  img('nl697ledztoenvi45t7u86mnkm6v_shutterstock_2337247967%20(1)%20(1).jpg'),
  img('2zpq4fa4vvvgrj3tzt28iw9j0squ_shutterstock_2324766599%20(1).jpg'),
  img('fbe59bwca0qjbwkqug0bm4fagkp8_shutterstock_394854601-min.jpg'),
  img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg'),
  img('0h1vvi2l2j5ukteevblc9rifyj3n_shutterstock_406440082.jpg'),
  img('myp0svt552xqngaztwvvsb6ugnaj_shutterstock_740293555.jpg'),
  img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg'),
  img('gxoylnz315eksjm86jgiaix4lwkf_1579614981_Nang_Beach.jpg'),
  img('goahiuvxilncq43ac8db0v0rl8ac_shutterstock_394497928.jpg'),
  img('rff04hp28q6uu4xgzym5r9g3ngqx_sbg4f813z1zgkxrswpl6gcs3hkb8_1559034252_00.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Phuket',
    dayLabel: 'Day 1 to 4',
    images: [
      img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg'),
      img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg'),
      img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg'),
      img('q0rofzuv74wu1axaon9rmkcob0jh_shutterstock_448476727.jpg')
    ],
    dayImages: {
      1: [
        img('gxoylnz315eksjm86jgiaix4lwkf_1579614981_Nang_Beach.jpg'),
        img('goahiuvxilncq43ac8db0v0rl8ac_shutterstock_394497928.jpg'),
        img('rff04hp28q6uu4xgzym5r9g3ngqx_sbg4f813z1zgkxrswpl6gcs3hkb8_1559034252_00.jpg'),
        img('2rrjqomoqtud4m8nis9ysmyculem_Phuket%20Bird%20Park.webp')
      ],
      2: [
        img('wf2xg8muetoi19ohmqbzyotmohke_ANDAMANDA_Waterpark.jpg'),
        img('0br4jncqt7f7d1hswoh1z7ku5hn0_hmrjxx3vlkjophhg6zu89uevuqt4_acd3a98ff5728bf3934edb9ea6542a67-1.jpg'),
        img('l2yhpu8okz9uu8ltday9x8mlz7ua_1627114619_shutterstock_1935581788.jpg'),
        img('jtz3mdc26pteczpti4rw8t5qbaey_dl.beatsnoop.com-P7BYvdtJ6Q.jpg')
      ],
      3: [
        img('6ben6gpn66uqy98j64iikif8lsdx_shutterstock_1945732240.jpg'),
        img('n5dr2h4zfpvtdgbpucgzsmiudkl8_1yoymdh9fyvkailtrr44bjv9sxpc_shutterstock_721762402.webp'),
        img('kwcyec415sdx8h2ndf7573fmmql4_1463051150_4018009010_0272454a8f_o.jpg'),
        img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg')
      ],
      4: [
        img('2r3vyymdpgj40nu5xrk9snoh1xa7_shutterstock_422281786.jpg'),
        img('qsvbg8xqjyo5kwvemsenqgipdtic_riwmt3ygoh284tfu7z8usi8s0e8w_tk3.jpg'),
        img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg'),
        img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Phuket`,
      'Arrival at Phuket International Airport and private sedan transfer to your resort',
      'Check in at Fishermen\'s Harbour and keep the first day free',
      'Optional: the Phuket FantaSea show, Aquaria or the bird park',
      `${DAY_MARK}Day 2 · Siam Niramit evening show`,
      'Breakfast, then a slow morning at the resort',
      'Optional: Andamanda water park or the Phuket elephant sanctuary',
      'Evening shared transfer to the Siam Niramit show with gold seats',
      'A full stage production on Thai history, back by late evening',
      `${DAY_MARK}Day 3 · Phang Nga Bay and James Bond island`,
      'Breakfast, then shared transfer up to the Phang Nga pier',
      'Long tail boat transfer into the bay past the limestone stacks',
      'James Bond island, sea caves and sea canoeing through the lagoons',
      'Return shared transfer to your resort in the late afternoon',
      `${DAY_MARK}Day 4 · Tiger Kingdom`,
      'Breakfast, then private transfer out to Tiger Kingdom',
      'Big tiger encounter with the keepers alongside you throughout',
      'Afternoon and evening free at the resort'
    ],
    accommodation: {
      name: 'Fishermen\'s Harbour, Phuket',
      description: '4 nights · Breakfast included · Luxury room · 4★ · Fishermen\'s Harbour at the quiet end of Patong beach',
      images: [
        img('zwsk391zc87oxgyg03b8kpq29ann_194400284.jpg'),
        img('3wfxhyzj8ayynlrldwrj80xxbi3j_194400288.jpg'),
        img('vepkmcg9g6rkp5y4k8v4gucydu9z_70135851.jpg'),
        img('91utyge6iiqqgcng4rmzmhrdxa2f_48693816.jpg'),
        img('ip5yhq6p6peif7abn4wz2dlv0eo4_194400869.jpg'),
        img('f1qlarbvkjq3uw7frxnzsjo532x8_0c8adeec1acf11e9a6310242ac110002.jpg'),
        img('61mema645xb8wogykaw9ff6kz024_194400270.jpg'),
        img('p9nzt4jljhgvcux3a4yx0memhb5c_Fishermen\'s%20Harbour,%20Phuket%204.png'),
        img('wt90g5ygkhkfzh6zrgbuuxnxtfxd_70135768.jpg'),
        img('v7562vtxwvrwrv7yesu40fpoj4zm_1c220c181acf11e99abc0242ac110002.jpg'),
        img('cnoyvi9i25s2c2s6nxvzce8p3mc6_194401143.jpg'),
        img('ubdqc0mas5knpf7plhdlep80brvw_194400871.jpg'),
        img('8h3bp2xerxpre9bvpxr74s7cfi30_70135784.jpg'),
        img('lgmue3iblngqrei0mdvnm09f60r7_Fishermen\'s%20Harbour,%20Phuket%201.png'),
        img('otb14ubyyk5d3ui0hevke6txdhc0_95414016.jpg')
      ]
    },
    activities: [
      {
        name: 'Siam Niramit Show',
        day: 2,
        optional: false,
        image: img('jtz3mdc26pteczpti4rw8t5qbaey_dl.beatsnoop.com-P7BYvdtJ6Q.jpg'),
        description: 'A large stage production on Thai history and legend with gold seats included, and shared transfers each way.'
      },
      {
        name: 'Phang Nga Bay and James Bond Island',
        day: 3,
        optional: false,
        image: img('6ben6gpn66uqy98j64iikif8lsdx_shutterstock_1945732240.jpg'),
        description: 'A long tail boat day into Phang Nga Bay, with the famous leaning stack, hidden sea caves and sea canoeing through the lagoons.'
      },
      {
        name: 'Tiger Kingdom Phuket',
        day: 4,
        optional: false,
        image: img('2r3vyymdpgj40nu5xrk9snoh1xa7_shutterstock_422281786.jpg'),
        description: 'Time inside the enclosure with the big tigers, keepers beside you throughout, with private transfers each way.'
      },
      {
        name: 'Phuket Elephant Sanctuary',
        day: 2,
        optional: true,
        image: img('0br4jncqt7f7d1hswoh1z7ku5hn0_hmrjxx3vlkjophhg6zu89uevuqt4_acd3a98ff5728bf3934edb9ea6542a67-1.jpg'),
        description: 'A no riding sanctuary in the hills near Paklok where rescued elephants roam, bathe and feed at their own pace.'
      }
    ],
    program: {
      name: 'Phang Nga Bay, tigers and a stage show',
      description: 'Four nights in Patong with a long tail boat day in Phang Nga Bay, the Siam Niramit show and a close up tiger encounter.',
      image: img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Koh Samui',
    dayLabel: 'Day 5 to 7',
    images: [
      img('iw2v7abv38kapz6210mxe2whu5rp_shutterstock_1797497632.jpg'),
      img('wzmar6v3olzlqldy34o8thmatj9a_shutterstock_589505762.jpg'),
      img('zfufmlme2f3a44qw91thxjln52wn_shutterstock_1797497632.jpg'),
      img('ezxz70swo9zrybv8o8pus5c6klaf_shutterstock_2090520271.jpg')
    ],
    dayImages: {
      5: [
        img('b5wxwiqeii0sltdc699x0m8wo860_1554924475_2016-06-13.jpg'),
        img('d4dhfjms2qdxf0hyqglbge7aw2d1_1554904766_Fishermans-Village-Samui.png'),
        img('iw2v7abv38kapz6210mxe2whu5rp_shutterstock_1797497632.jpg'),
        img('wzmar6v3olzlqldy34o8thmatj9a_shutterstock_589505762.jpg')
      ],
      6: [
        img('u1cb5fiyjv7fzu4qkdlm9tzemz0a_1597838166_shutterstock_536755081.jpg'),
        img('se8q57fnbwtkktiufxjsgisvb8xk_1555488717_shutterstock_554125543.jpg'),
        img('iw2v7abv38kapz6210mxe2whu5rp_shutterstock_1797497632.jpg'),
        img('wzmar6v3olzlqldy34o8thmatj9a_shutterstock_589505762.jpg')
      ],
      7: [
        img('rhb73iq754sfw03q4ojcx1r5juts_1554900436_big-bhudda-koi-sumui.jpg'),
        img('qjekh59bnk9oblbcods20nvhhiez_1555488998_shutterstock_1246975717.jpg'),
        img('o3wl0enq3moymai2lkmcb20hlmno_1554904307_63efe6a290d3a269bbda4e030a7d37a3ZSRfB.jpeg'),
        img('lus739nelv07wwwco3vn6c5ly9kv_1554901570_rn0w9lz6porizzxikkqr.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Ferry to Koh Samui`,
      'Breakfast, check out and shared transfer to the ferry terminal',
      'Ferry transfer across to Koh Samui, then on to Chaweng',
      'Check in at Nora Buri, built into the headland above the bay',
      'Optional: Fisherman\'s Village at Bophut or the stalls at The Wharf Samui',
      `${DAY_MARK}Day 6 · Ang Thong marine park`,
      'Breakfast, then shared transfer to the Samui pier',
      'Speedboat transfer out to the Ang Thong marine park',
      'Snorkelling, a hidden lagoon and the viewpoint climb on Koh Wua Talap',
      'Return shared transfer to the resort in the afternoon',
      `${DAY_MARK}Day 7 · Koh Samui at leisure`,
      'Breakfast, then a full day with nothing booked',
      'Optional: the Big Buddha temple, Wat Plai Laem and the Secret Buddha Garden',
      'Optional: Na Muang waterfall or the Hin Ta and Hin Yai rocks'
    ],
    accommodation: {
      name: 'Nora Buri Resort & Spa, Koh Samui',
      description: '3 nights · Breakfast included · Luxury room · 5★ · Nora Buri, built into the headland above Chaweng bay',
      images: [
        img('qa003wtzyyiyqql5jou28y0fohh3_490420701.jpg'),
        img('cyibxawr464qbszov3rvt259tibl_173562405.jpg'),
        img('bp7gkylfqadr4e7l7p5mqv1r7hju_98902490.jpg'),
        img('aynawfhgevopxu5ct3uxvqvh9j9u_520ac1dea25e11e7aaf20a4cef95d023.jpg'),
        img('g6ad4511gacy6ez0r4n9ukzn5jvc_98902132.jpg'),
        img('y7mrsrry4j1vljk3gnow881i3nwg_99542671.jpg'),
        img('s7lb5mudyzxciw1g0shzva8f664e_98902493.jpg'),
        img('dr4vmoh1wgx498mjzpbur6kpmli2_98901559.jpg'),
        img('aupnkaqu7bjz4514iytr1dx6v92k_de7f7214497c11ea82970242ac110003.jpg'),
        img('hfexzska3kbzv2kpnxq02241lujn_99544693.jpg'),
        img('wundp9oxfzgq0jixf7ye2sntp9ef_53898324a25e11e7bd63025f77df004f.jpg'),
        img('eucw32t2e55adndaa8pia6ecln1d_5384bf10a25e11e7aaf20a4cef95d023.jpg'),
        img('1t7lu2rxmyofy53zg3dfnsdjy8mu_98900971.jpg')
      ]
    },
    activities: [
      {
        name: 'Ang Thong Marine Park by Speedboat',
        day: 6,
        optional: false,
        image: img('u1cb5fiyjv7fzu4qkdlm9tzemz0a_1597838166_shutterstock_536755081.jpg'),
        description: 'A speedboat day out to forty two islands with a hidden lagoon, snorkelling stops and a viewpoint climb on Koh Wua Talap.'
      },
      {
        name: 'Fisherman\'s Village',
        day: 5,
        optional: true,
        image: img('d4dhfjms2qdxf0hyqglbge7aw2d1_1554904766_Fishermans-Village-Samui.png'),
        description: 'Old wooden shophouses at Bophut turned into cafes and bars, with a walking street market on Friday evenings.'
      },
      {
        name: 'Big Buddha Temple',
        day: 7,
        optional: true,
        image: img('rhb73iq754sfw03q4ojcx1r5juts_1554900436_big-bhudda-koi-sumui.jpg'),
        description: 'Wat Phra Yai on its small island, reached by causeway, with a golden seated Buddha looking out over the sea.'
      },
      {
        name: 'Na Muang Waterfall',
        day: 7,
        optional: true,
        image: img('lus739nelv07wwwco3vn6c5ly9kv_1554901570_rn0w9lz6porizzxikkqr.jpg'),
        description: 'Two falls in the island\'s interior, the lower one an easy walk and the upper one a steeper climb through forest.'
      }
    ],
    program: {
      name: 'Chaweng and the Ang Thong islands',
      description: 'Three nights on Samui with a speedboat day in the Ang Thong marine park and a full day left open on the beach.',
      image: img('iw2v7abv38kapz6210mxe2whu5rp_shutterstock_1797497632.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Krabi',
    dayLabel: 'Day 8 to 11',
    images: [
      img('85coxuo6jf2r4e35epvg592l0gn6_shutterstock_2172918973-min.jpg'),
      img('myp0svt552xqngaztwvvsb6ugnaj_shutterstock_740293555.jpg'),
      img('knpt0tp5t6sd970nzjivyl0p9zvq_shutterstock_1090315565.jpg'),
      img('2kxr2vxpxsk31qlbqaxlxfwulxif_shutterstock_1114284335.jpg')
    ],
    dayImages: {
      8: [
        img('dp6g8cre788anal2l10ylpwej48u_1555911053_shutterstock_1134985199.jpg'),
        img('xei5626zpmtpca4kmfo4cb2kayxw_1552285067_Elephant_Trekking_in_Thailand.jpg'),
        img('998v7awelyjfno66qfm0gz9j8ig7_1556518574_shutterstock_1114284335.jpg'),
        img('85coxuo6jf2r4e35epvg592l0gn6_shutterstock_2172918973-min.jpg')
      ],
      9: [
        img('mvj32z6oenuoj48cmfrktuih98q8_1569242743_similan1.jpg'),
        img('rt5uovc0zbqf6uk001aib0eluclg_1551088163_maxresdefault_(2).jpg'),
        img('ftmjlf4ozjzfkbsr6lrrux9aa2yy_1551087923_island-26.jpg'),
        img('dyq7wlnu8wksdjgpv9zcxy47b9zh_1463033673_7448089582_2b0ec2c665_b.jpg')
      ],
      10: [
        img('qdftgwbjn1hstbew4ukv8f3gpaa6_1552225709_shutterstock_1313447231.jpg'),
        img('ozbjx414ocqs9g01xsbryegaq67x_29165073020_769fcbfae9_o.jpg'),
        img('hjzgromer6nz5ok3j4xq65ug8jz8_Longtail_Boat_At_Maya_Bay,_Krabi,_Thailand.jpg'),
        img('zrgoy650csioyvsmait1towl641r_1552282631_e7f67f54ad218b5e81fcb861171c1f2e.jpg')
      ],
      11: [
        img('85coxuo6jf2r4e35epvg592l0gn6_shutterstock_2172918973-min.jpg'),
        img('myp0svt552xqngaztwvvsb6ugnaj_shutterstock_740293555.jpg'),
        img('knpt0tp5t6sd970nzjivyl0p9zvq_shutterstock_1090315565.jpg'),
        img('2kxr2vxpxsk31qlbqaxlxfwulxif_shutterstock_1114284335.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · On to Krabi`,
      'Breakfast, check out and shared transfer to the Samui pier',
      'Speedboat transfer across to the mainland, then on to Ao Nang',
      'Check in at the Holiday Ao Nang Beach Resort and settle in',
      'Optional: Wat Tham Sua, an elephant sanctuary or the night market',
      `${DAY_MARK}Day 9 · Krabi 7 Islands with a barbecue dinner`,
      'Breakfast, then shared transfer to the Ao Nang pier',
      'Long tail boat transfer out across seven islands through the afternoon',
      'Snorkel the shallows, then Phra Nang beach as the light drops',
      'Barbecue dinner on the sand, then a swim with glowing plankton',
      'Return shared transfer to the resort after dark',
      `${DAY_MARK}Day 10 · A free day in Krabi`,
      'Breakfast, then a free day on the Ao Nang coast',
      'Optional: the Emerald Pool and Klong Thom hot springs inland',
      'Optional: the climb to Tiger Cave temple for the long view',
      `${DAY_MARK}Day 11 · Departure`,
      'Breakfast and an unhurried check out',
      'Private sedan transfer to Krabi airport for your trip home'
    ],
    accommodation: {
      name: 'Holiday Ao Nang Beach Resort, Krabi',
      description: '3 nights · Breakfast included · Luxury room · 4★ · Holiday Ao Nang Beach Resort, steps from the beach road',
      images: [
        img('j85g9npglj6fbr3sjs5uemttiaeq_247282801.jpg'),
        img('4op47x69u4t9h3yndhvja4ikw3c7_3170.jpg'),
        img('3e6ai50dxdze6pt8mk5u1r94jmkm_3807.jpg'),
        img('fhugyp6tlj03m6a9q4cdc8wxcrbe_3785.jpg'),
        img('y8jpxpljobj139cs4lkss43m4qq5_3169.jpg'),
        img('xvva4m1iqaw9ppz1auz86923k2l8_3815.jpg'),
        img('uc4tij30rpy0c81lg7xrvb64st0x_3164.jpg'),
        img('o36hk3alfnbootwdpnnhpzj0hio1_3339.jpg'),
        img('x1qe435n7p8hypz79cb6snxy4xg0_3174.jpg'),
        img('bv7cyw2jinnoggw7p7r8fadcg8jh_3812.jpg'),
        img('fyr84d5kb2lcq564o1hr6iq5anoq_3834.jpg'),
        img('anlou1mcj3vihinld6uqttfskj7v_3823.jpg')
      ]
    },
    activities: [
      {
        name: 'Krabi 7 Islands with Barbecue Dinner',
        day: 9,
        optional: false,
        image: img('mvj32z6oenuoj48cmfrktuih98q8_1569242743_similan1.jpg'),
        description: 'An afternoon and evening across seven islands by long tail boat, with snorkelling, a barbecue dinner on the beach and a swim with glowing plankton.'
      },
      {
        name: 'Wat Tham Sua',
        day: 8,
        optional: true,
        image: img('998v7awelyjfno66qfm0gz9j8ig7_1556518574_shutterstock_1114284335.jpg'),
        description: 'The Tiger Cave temple, with over twelve hundred steps up to a golden Buddha and a long view across the Krabi plain.'
      },
      {
        name: 'The Emerald Pool',
        day: 10,
        optional: true,
        image: img('qdftgwbjn1hstbew4ukv8f3gpaa6_1552225709_shutterstock_1313447231.jpg'),
        description: 'A spring fed pool in the Khao Phra Bang Khram forest inland from Krabi, clear green and warm all year.'
      },
      {
        name: 'Klong Thom Hot Springs',
        day: 10,
        optional: true,
        image: img('zrgoy650csioyvsmait1towl641r_1552282631_e7f67f54ad218b5e81fcb861171c1f2e.jpg'),
        description: 'Warm water running over smooth rock into forest pools, usually paired with the Emerald Pool on the same drive.'
      }
    ],
    program: {
      name: 'Seven islands and a plankton swim',
      description: 'Three nights in Ao Nang with a sunset tour of seven islands, a barbecue dinner on the sand and a free day for the rainforest.',
      image: img('85coxuo6jf2r4e35epvg592l0gn6_shutterstock_2172918973-min.jpg')
    }
  }
];

const detail = {
  slug: 'luxury-phuket-koh-samui-and-krabi',
  ctaHref: '/l/thailand/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Luxury Phuket, Koh Samui and Krabi',
  alt: 'Limestone stacks rising out of the water in Phang Nga Bay, Thailand',
  days: '11 days / 10 nights',
  stations: '3 stops',
  transport: 'Private and shared transfers with long tail boat, speedboat and ferry crossings',
  tag: 'Luxury',
  tags: ['Luxury', 'Beach'],
  price: 54149,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuket', 'Phang Nga Bay', 'Koh Samui', 'Ang Thong', 'Krabi'],
  stats: { days: 11, cities: 3, hotels: 3, activities: 5, transfers: 22 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['22 transfers', 'Transport'],
    ['11 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ananya Iyer',
    image: '/team/asia-2.webp',
    role: 'Thailand expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Ten nights, three coasts and a free day in each place. This is the version that actually feels like a holiday.',
    quoteMore: 'Do Phang Nga Bay early in your Phuket stay while the sea is calmest. On the Krabi 7 Islands tour, stay in the water after the barbecue because the plankton only glows once it is properly dark.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eleven days along the Thai coast in four and five star resorts. Phang Nga Bay by long tail boat, the Siam Niramit show, a tiger encounter, the Ang Thong marine park by speedboat and the Krabi 7 Islands with a barbecue dinner on the sand.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 10 nights in 3 luxury resorts with daily breakfast; Siam Niramit show gold seats with shared transfers; James Bond island and Phang Nga Bay tour with sea canoeing; Tiger Kingdom big tiger encounter with private transfers; Ang Thong marine park speedboat tour; Krabi 7 Islands tour with barbecue dinner; 22 airport, pier and sightseeing transfers; visa assistance.',
  intro2: 'Not included: international flights; visa charges; travel insurance; park and temple entry fees; meals other than those listed; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuket (Arrival)', text: 'Arrival at Phuket International Airport and private sedan transfer to your resort\nCheck in at Fishermen\'s Harbour and keep the first day free\nOptional: the Phuket FantaSea show, Aquaria or the bird park', hotel: 'Fishermen\'s Harbour, Phuket', highlights: ['Arrival at Phuket International Airport and private sedan transfer to your resort', 'Check in at Fishermen\'s Harbour and keep the first day free', 'Optional: the Phuket FantaSea show, Aquaria or the bird park'] },
    { title: 'Day 2: Siam Niramit evening show (B)', text: 'Breakfast, then a slow morning at the resort\nOptional: Andamanda water park or the Phuket elephant sanctuary\nEvening shared transfer to the Siam Niramit show with gold seats\nA full stage production on Thai history, back by late evening', hotel: 'Fishermen\'s Harbour, Phuket', highlights: ['Breakfast, then a slow morning at the resort', 'Optional: Andamanda water park or the Phuket elephant sanctuary', 'Evening shared transfer to the Siam Niramit show with gold seats'] },
    { title: 'Day 3: Phang Nga Bay and James Bond island (B)', text: 'Breakfast, then shared transfer up to the Phang Nga pier\nLong tail boat transfer into the bay past the limestone stacks\nJames Bond island, sea caves and sea canoeing through the lagoons\nReturn shared transfer to your resort in the late afternoon', hotel: 'Fishermen\'s Harbour, Phuket', highlights: ['Breakfast, then shared transfer up to the Phang Nga pier', 'Long tail boat transfer into the bay past the limestone stacks', 'James Bond island, sea caves and sea canoeing through the lagoons'] },
    { title: 'Day 4: Tiger Kingdom (B)', text: 'Breakfast, then private transfer out to Tiger Kingdom\nBig tiger encounter with the keepers alongside you throughout\nAfternoon and evening free at the resort', hotel: 'Fishermen\'s Harbour, Phuket', highlights: ['Breakfast, then private transfer out to Tiger Kingdom', 'Big tiger encounter with the keepers alongside you throughout', 'Afternoon and evening free at the resort'] },
    { title: 'Day 5: Ferry to Koh Samui (B)', text: 'Breakfast, check out and shared transfer to the ferry terminal\nFerry transfer across to Koh Samui, then on to Chaweng\nCheck in at Nora Buri, built into the headland above the bay\nOptional: Fisherman\'s Village at Bophut or the stalls at The Wharf Samui', hotel: 'Nora Buri Resort & Spa', highlights: ['Breakfast, check out and shared transfer to the ferry terminal', 'Ferry transfer across to Koh Samui, then on to Chaweng', 'Check in at Nora Buri, built into the headland above the bay'] },
    { title: 'Day 6: Ang Thong marine park (B)', text: 'Breakfast, then shared transfer to the Samui pier\nSpeedboat transfer out to the Ang Thong marine park\nSnorkelling, a hidden lagoon and the viewpoint climb on Koh Wua Talap\nReturn shared transfer to the resort in the afternoon', hotel: 'Nora Buri Resort & Spa', highlights: ['Breakfast, then shared transfer to the Samui pier', 'Speedboat transfer out to the Ang Thong marine park', 'Snorkelling, a hidden lagoon and the viewpoint climb on Koh Wua Talap'] },
    { title: 'Day 7: Koh Samui at leisure (B)', text: 'Breakfast, then a full day with nothing booked\nOptional: the Big Buddha temple, Wat Plai Laem and the Secret Buddha Garden\nOptional: Na Muang waterfall or the Hin Ta and Hin Yai rocks', hotel: 'Nora Buri Resort & Spa', highlights: ['Breakfast, then a full day with nothing booked', 'Optional: the Big Buddha temple, Wat Plai Laem and the Secret Buddha Garden', 'Optional: Na Muang waterfall or the Hin Ta and Hin Yai rocks'] },
    { title: 'Day 8: On to Krabi (B)', text: 'Breakfast, check out and shared transfer to the Samui pier\nSpeedboat transfer across to the mainland, then on to Ao Nang\nCheck in at the Holiday Ao Nang Beach Resort and settle in\nOptional: Wat Tham Sua, an elephant sanctuary or the night market', hotel: 'Holiday Ao Nang Beach Resort, Krabi', highlights: ['Breakfast, check out and shared transfer to the Samui pier', 'Speedboat transfer across to the mainland, then on to Ao Nang', 'Check in at the Holiday Ao Nang Beach Resort and settle in'] },
    { title: 'Day 9: Krabi 7 Islands with a barbecue dinner (B, D)', text: 'Breakfast, then shared transfer to the Ao Nang pier\nLong tail boat transfer out across seven islands through the afternoon\nSnorkel the shallows, then Phra Nang beach as the light drops\nBarbecue dinner on the sand, then a swim with glowing plankton\nReturn shared transfer to the resort after dark', hotel: 'Holiday Ao Nang Beach Resort, Krabi', highlights: ['Breakfast, then shared transfer to the Ao Nang pier', 'Long tail boat transfer out across seven islands through the afternoon', 'Snorkel the shallows, then Phra Nang beach as the light drops'] },
    { title: 'Day 10: A free day in Krabi (B)', text: 'Breakfast, then a free day on the Ao Nang coast\nOptional: the Emerald Pool and Klong Thom hot springs inland\nOptional: the climb to Tiger Cave temple for the long view', hotel: 'Holiday Ao Nang Beach Resort, Krabi', highlights: ['Breakfast, then a free day on the Ao Nang coast', 'Optional: the Emerald Pool and Klong Thom hot springs inland', 'Optional: the climb to Tiger Cave temple for the long view'] },
    { title: 'Day 11: Departure (B)', text: 'Breakfast and an unhurried check out\nPrivate sedan transfer to Krabi airport for your trip home', hotel: 'Departure', highlights: ['Breakfast and an unhurried check out', 'Private sedan transfer to Krabi airport for your trip home'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; park and temple entry fees; meals other than those listed; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Thailand', href: '/asia/thailand' },
  { label: detail.title }
];

export const luxuryPhuketSamuiKrabiBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const luxuryPhuketSamuiKrabiProduct = {
  slug: detail.slug,
  places: stops.map((s) => s.name),
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 11,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 5,
  transfers: 22,
  meals: 11,
  price: detail.price,
  images: cardImages
};
