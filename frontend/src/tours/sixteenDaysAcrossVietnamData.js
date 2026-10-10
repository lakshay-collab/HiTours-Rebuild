// Sixteen Days Across Vietnam. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('g2t7tyua6nh3y7nqbspuhclty44n_shutterstock_1013044084.jpg'),
  img('1hi29k8dwa9932u7u2xgm8ba4lby_shutterstock_508367704%20(1).jpg'),
  img('pz53jx4w3s8sfe1hx0qpf8455w50_shutterstock_218485627.jpg'),
  img('nem9kghvpvg4auavuy5nhqx2im7r_shutterstock_98382038.jpg'),
  img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
  img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
  img('ess8tbxn8tc68q49uptyn8nsx4he_shutterstock_1218764578.jpg'),
  img('i126vbg9sdfw3tm9ihzmq0x3ga5e_shutterstock_1303493764.jpg'),
  img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('1hi29k8dwa9932u7u2xgm8ba4lby_shutterstock_508367704%20(1).jpg'),
  img('pz53jx4w3s8sfe1hx0qpf8455w50_shutterstock_218485627.jpg'),
  img('er5iye24yxsgzupxmdqltizrkroy_shutterstock_1477602650.jpg'),
  img('qwq0abainp6hdmi3e8kjf4wnblt1_shutterstock_759100546.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    dayLabel: 'Day 1 to 2',
    images: [
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
    ],
    dayImages: {
      1: [
        img('zv1gcf0zxn8h92yt1vcjn8cn04c0_1613631767_shutterstock_449720002.jpg'),
        img('l5niq4dr961ec6w2r5tzriikz2in_1613632679_shutterstock_1164526912.jpg'),
        img('ntezjfzc64thy47m38y0tbsj2d6s_1467720990_6909983514_1b40cdc48c_o.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
      ],
      2: [
        img('kqd5m6rp6dmyc273ucrauw1z79kk_shutterstock_360194189.jpg'),
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Hanoi`,
      'Arrival at Noi Bai airport and transfer to your hotel',
      'Check in at your hotel in the old quarter',
      'Rest of the day free at your own pace',
      'Optional: an evening walk around Hoan Kiem lake',
      `${DAY_MARK}Day 2 · Hanoi city tour`,
      'Breakfast, then a full guided day of the city',
      'The mausoleum and the one pillar pagoda',
      'The Temple of Literature, the old university',
      'Lunch included, then the old quarter lanes'
    ],
    accommodation: {
      name: 'Hm Boutique Hotel Hanoi, Hanoi',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Small boutique hotel in the old quarter',
      images: [
        img('7sy9oqqi7pnpuwxq2fv81z2bt2hf_DSC01260-1280.jpg'),
        img('7twnl25zq5eu5l1fatdv4aobarjv_img45.jpg'),
        img('mn4kwii0rj637p1fy1n5gk9ic3xw_img23.jpg'),
        img('k73z8uhny5i8235x93i1rn0ndji0_244884180.jpg'),
        img('kdrzv1d2gpyuv349jwo9j1p8e55i_244885999.jpg'),
        img('mzluxd5hc3n50hwl1r6m1cvga072_img41.jpg')
      ]
    },
    activities: [
      {
        name: 'Hanoi full day city tour with lunch',
        day: 2,
        optional: false,
        image: img('kqd5m6rp6dmyc273ucrauw1z79kk_shutterstock_360194189.jpg'),
        description: 'A full day with a guide through the Ho Chi Minh mausoleum, the one pillar pagoda, the Temple of Literature and the old quarter, with lunch included.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Two nights in the old quarter with a full guided day of the capital and lunch included.',
      image: img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Halong Bay',
    dayLabel: 'Day 3',
    images: [
      img('dsxekypeedr6l4ri8eijlkm31h7f_shutterstock_196927403.jpg'),
      img('g2t7tyua6nh3y7nqbspuhclty44n_shutterstock_1013044084.jpg'),
      img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg'),
      img('chc0brh1ox3ps4j2gkd3o7sltiku_shutterstock_298757792.jpg')
    ],
    dayImages: {
      3: [
        img('qwq0abainp6hdmi3e8kjf4wnblt1_shutterstock_759100546.jpg'),
        img('dsxekypeedr6l4ri8eijlkm31h7f_shutterstock_196927403.jpg'),
        img('g2t7tyua6nh3y7nqbspuhclty44n_shutterstock_1013044084.jpg'),
        img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Overnight on the bay`,
      'Breakfast and check out, then east towards the coast',
      'Board your cruise boat in the early afternoon',
      'Lunch and dinner on board',
      'A night moored among the limestone islands'
    ],
    accommodation: {
      name: 'Halong Royal Palace Cruise, Halong Bay',
      description: '1 night · All meals · Cabin with a window · 3★ · Timber cruise boat moored among the karsts overnight',
      images: [
        img('vfha4wn8g1939nz7blmv2zbezua8_img1.jpg'),
        img('l9966l7rud71rfw69v343f16mb19_img2.jpg'),
        img('n09ydj3cz91sv3y68w2zu33sibfu_img3.jpg'),
        img('kl90iojno6uwzhw9erd37sqd7hbr_img4.jpg'),
        img('lupm0drdxku9cdtsh908akadhb35_img6.jpg'),
        img('tx60hzkjj3yo3fawkwznd731yih5_img7.jpg'),
        img('6ulhot12pjkc35xwuq60fnlfq2j0_img9.jpg'),
        img('8qz5zlx21fua6f2s1ebf2pvimnvy_img8.jpg'),
        img('52fwashbztvumpmx5844pnfh9mjq_img5.jpg'),
        img('rksqnpehn5tm959cizcsgeoiudmd_img10.jpg'),
        img('z38906nmh7cvadosch9b3kj7itt5_img11.jpg'),
        img('qroxwpamvbmoyafswa3emewok9jr_img12.jpg'),
        img('726kp5lsbjey6is2udeg92t2q1f8_img13.jpg'),
        img('6akzil1d4hgz8m7a32o5xq59yn2p_img17.jpg'),
        img('zb77t02g3p3x30qi94l1s0oak9w4_img18.jpg'),
        img('w9jqo7e6b0lcd7pl8hagzkr2zocv_img19.jpg'),
        img('pi1shb8bokq4xs2vr0l6oopy0w8b_img20.jpg'),
        img('1ziwnoejr20kwl4mzy3fzdip0eyb_img21.jpg'),
        img('3trkv4fc1th5nohf83cgy45rdaz5_img22.jpg'),
        img('c8e81a9sfjvnbe7qiz7q8r9lp3wy_img23.jpg'),
        img('a02raiho83o298tsfzkur3e915ln_img24.jpg'),
        img('ornzzg481de8hogyln2fylxhfzel_img25.jpg'),
        img('p838rn62evnxen1k96g3zsg3gqk6_img32.jpg'),
        img('urg3fvttnue6s1c5gg2r7ngl0l6d_img35.jpg'),
        img('f0gv0k6ogfeh4er1s8letao9jd1l_img36.jpg'),
        img('ui9v9i2ooasrurv1zhzujhr37qbz_img37.jpg'),
        img('31uuev2q7tf9gkoft7iglxo77mdz_img38.jpg'),
        img('x731wrazuxssz9dhy7r82id72hu4_img42.jpg'),
        img('8vc8jh9jx29zvgzsmgfp7j5mo2ii_img43.jpg'),
        img('5zayqr1flqsdtd1tivi8o9cby29l_img44.jpg'),
        img('fi567e80wodqvyxlwafqwedyu577_img45.jpg'),
        img('20fev1zroqgxy8b06rnfibw4l43j_img46.jpg')
      ]
    },
    activities: [
      {
        name: 'Halong Bay overnight cruise',
        day: 3,
        optional: false,
        image: img('qwq0abainp6hdmi3e8kjf4wnblt1_shutterstock_759100546.jpg'),
        description: 'A shared cruise out among the limestone islands, with lunch and dinner on board and a night moored in a quiet bay.'
      }
    ],
    program: {
      name: 'Halong Bay',
      description: 'A night on the water among the limestone islands, with all meals served on board.',
      image: img('dsxekypeedr6l4ri8eijlkm31h7f_shutterstock_196927403.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Sa Pa',
    subtitle: 'Sa Pa by overnight train',
    dayLabel: 'Day 4 to 6',
    images: [
      img('1hi29k8dwa9932u7u2xgm8ba4lby_shutterstock_508367704%20(1).jpg')
    ],
    dayImages: {
      4: [
        img('1hi29k8dwa9932u7u2xgm8ba4lby_shutterstock_508367704%20(1).jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
        img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
        img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg')
      ],
      5: [
        img('x9bsh1klq1l9tlcntsvb7dais381_Cat%20Cat%20Waterfall-min.jpeg'),
        img('z56fv8n6n0die2ms20u45syj1cmp_1579684995_5.jpg'),
        img('1hi29k8dwa9932u7u2xgm8ba4lby_shutterstock_508367704%20(1).jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
      ],
      6: [
        img('mn7hxaxwi8gghdiq3q8030vagvbv_Aerial%20View%20of%20Rice%20Terraces,%20Lao%20Chai%20village,%20Ta%20Van%20valley.jpeg'),
        img('1hi29k8dwa9932u7u2xgm8ba4lby_shutterstock_508367704%20(1).jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
        img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Night train to Sa Pa`,
      'Breakfast on board as the boat moves',
      'Back to the pier and on to Hanoi',
      'Evening transfer to the station',
      'A sleeper berth on the night train north',
      `${DAY_MARK}Day 5 · Cat Cat and Sin Chai`,
      'Arrival at Lao Cai and up to Sa Pa',
      'Check in and a short rest',
      'A walk down to the Cat Cat waterfall',
      'On to Sin Chai at the end of the valley',
      `${DAY_MARK}Day 6 · Lao Chai and the night train`,
      'Breakfast, then into the Muong Hoa valley',
      'The terraced fields at Lao Chai',
      'Ta Van, worked by Hmong and Giay families',
      'Back to Lao Cai for the night train to Hanoi'
    ],
    accommodation: {
      name: 'Delta Sapa Hotel, Sapa',
      description: '3 nights · Breakfast · Standard room · 3★ · One night at a Sa Pa hotel, with a sleeper berth on the overnight train each way',
      images: [
        img('limstmvnik08pip9jub690x51i84_recpetopo.jpg'),
        img('l3jqwsnembt6h7ioh5qidntd4qur_img1.jpg'),
        img('k80dpa4lv8wbswaiy9h7k21wsm26_img35.jpg'),
        img('ezbw70gbh3alih4n492xscwl7qyr_img3.jpg'),
        img('mefgng6du6hkttv60wjd98wdwvva_img33.jpg'),
        img('rhfkkotbpkfx0979l4t8b2r2wtz6_image%203.jpg'),
        img('rj01wl432uqn1u14ulc27ohaqbo5_image%201.jpg'),
        img('qfogcty56u0ulgku74nfxucdiffj_img2.jpg'),
        img('p37pox6pao7fvojofimayhaiplsx_img36.jpg'),
        img('rxvs5yu1pi7wbuw1kd27sy4phd5w_img17.jpg'),
        img('li1n7ag17t6xuywocim8rck8rmoz_f9fa89d2.jpg')
      ]
    },
    activities: [
      {
        name: 'Cat Cat waterfall and Sin Chai village trek',
        day: 5,
        optional: false,
        image: img('x9bsh1klq1l9tlcntsvb7dais381_Cat%20Cat%20Waterfall-min.jpeg'),
        description: 'A walk down to the waterfall below Cat Cat and on to Sin Chai, a Black Hmong village at the end of the valley road.'
      },
      {
        name: 'Lao Chai and Ta Van village trek',
        day: 6,
        optional: false,
        image: img('mn7hxaxwi8gghdiq3q8030vagvbv_Aerial%20View%20of%20Rice%20Terraces,%20Lao%20Chai%20village,%20Ta%20Van%20valley.jpeg'),
        description: 'A longer walk through the Muong Hoa valley to Lao Chai and Ta Van, terraced fields worked by Hmong and Giay families.'
      }
    ],
    program: {
      name: 'Sa Pa',
      description: 'Up to the hill country by sleeper train for two days of valley walks, then the night train back.',
      image: img('1hi29k8dwa9932u7u2xgm8ba4lby_shutterstock_508367704%20(1).jpg')
    }
  },
  {
    letter: 'D',
    name: 'Hoi An',
    subtitle: 'Hoi An and My Son',
    dayLabel: 'Day 7 to 8',
    images: [
      img('er5iye24yxsgzupxmdqltizrkroy_shutterstock_1477602650.jpg'),
      img('i126vbg9sdfw3tm9ihzmq0x3ga5e_shutterstock_1303493764.jpg'),
      img('j32rj0le1str6hqovb5absvrey0a_shutterstock_1477602647.jpg'),
      img('pz53jx4w3s8sfe1hx0qpf8455w50_shutterstock_218485627.jpg')
    ],
    dayImages: {
      7: [
        img('g3xcctfo2n8bdfwx1jp4xfhcmec5_download%20-%202023-08-09T125421.802.png'),
        img('4ajvifpqrthujg1eszffqu8aibtm_download%20(100).jpg'),
        img('er5iye24yxsgzupxmdqltizrkroy_shutterstock_1477602650.jpg'),
        img('i126vbg9sdfw3tm9ihzmq0x3ga5e_shutterstock_1303493764.jpg')
      ],
      8: [
        img('k0hjj84sg2yzv8cxxdo4bhoo61mt_shutterstock_662406919.jpg'),
        img('rjzmqj9x44n1ibarkyd42huq38st_My_Son,_Vietnam.jpg'),
        img('y7qz31iy6wdasr4qc3dbaxbs6jd2_Thu_B%E1%BB%93n_River_at_night_-_H%E1%BB%99i_An_2022.jpg'),
        img('er5iye24yxsgzupxmdqltizrkroy_shutterstock_1477602650.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · South to Hoi An`,
      'Arrival in Hanoi and the flight to Da Nang',
      'On to Hoi An and check in',
      'Rest of the day free in the old town',
      'Optional: the lantern lit lanes after dark',
      `${DAY_MARK}Day 8 · My Son sanctuary`,
      'Breakfast, then out to the My Son valley',
      'The brick towers built by the Cham kings',
      'The small museum and the ruins among the trees',
      'Afternoon free in Hoi An'
    ],
    accommodation: {
      name: 'Hoi An Rose Garden Hotel, Hoi An',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Garden hotel a short ride from the old town lanterns',
      images: [
        img('odbxubdlzdehhn0wl6vbtjalu0rf_img6.jpg'),
        img('hbdtm5oypteil21kcqdexeqb728z_img7.jpg'),
        img('3qnamlyoq3i7m10yk6liveh4apkd_img1.jpg'),
        img('gzqaie5nntwiwtbjhzii3cnw6ivs_img28.jpg'),
        img('pz4rralmn5pjoa6ocf2noxlxevx7_img2.jpg'),
        img('m8s4kvqffnkrbpocqzwmakqak4hb_img19.jpg'),
        img('lsatlb2tv17lb2pgprm6sskr9ncd_img14.jpg'),
        img('zuo3wjlbah5hh5yloouuvl7ivkjf_download%20(81).jpg'),
        img('v6e8kx7zlnnpml0o97x6wtzpi0lh_img9.jpg'),
        img('8gu4sqfghd6a9ylvt79v1alibnyz_img11.jpg'),
        img('0ztg5v6zrgqg99bf8fgp6ltzpske_download%20(82).jpg'),
        img('xy035554asrpocjmdx968cc9p5ml_img42.jpg')
      ]
    },
    activities: [
      {
        name: 'My Son sanctuary tour',
        day: 8,
        optional: false,
        image: img('k0hjj84sg2yzv8cxxdo4bhoo61mt_shutterstock_662406919.jpg'),
        description: 'The brick towers of My Son in their valley, built by the Cham kings over six centuries and still standing among the trees.'
      }
    ],
    program: {
      name: 'Hoi An',
      description: 'The flight to the central coast for two nights by the old town, with the Cham towers of My Son.',
      image: img('er5iye24yxsgzupxmdqltizrkroy_shutterstock_1477602650.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Nha Trang',
    dayLabel: 'Day 9 to 11',
    images: [
      img('nem9kghvpvg4auavuy5nhqx2im7r_shutterstock_98382038.jpg')
    ],
    dayImages: {
      9: [
        img('u07gom70vmscy6rrjzfto0z9a0fx_1467830255_14597773199_e49fdb8686_o.jpg'),
        img('rh2li7rg51frn6ljp3j8yfyuz38i_bai-tru.jpg'),
        img('nem9kghvpvg4auavuy5nhqx2im7r_shutterstock_98382038.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
      ],
      10: [
        img('2bkttqlbznr5eat18mib7xlgipx3_shutterstock_1444165544.jpg'),
        img('yp4p5nwz1ljgxxio6qjmle16codm_30437955947_e72817ab68_b.jpg'),
        img('pqya8iutzv6tnyozlwd1hm5qqw6a_pexels-pixabay-221471.jpg'),
        img('ijgrn8pudxj8jduz9v1difp1smkz_uv9qr693eo5cwl2v4vgraxtsws5h_shutterstock_1712757319.webp')
      ],
      11: [
        img('1f7tg58ugy8vfvsiukb0gxqqqw1k_Champa_Po_Nagar_Nha_Trang.jpg'),
        img('x7v954jevk3pvff2g53hqolz5wf3_1484035783_3-long-son-pagoda-and-white-buddha-nha-trang.jpg'),
        img('nem9kghvpvg4auavuy5nhqx2im7r_shutterstock_98382038.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 9 · On to Nha Trang`,
      'Breakfast and check out, then south to Nha Trang',
      'Check in on the seafront',
      'Rest of the day free at your own pace',
      'Optional: the mud baths at Thap Ba',
      `${DAY_MARK}Day 10 · Nha Trang islands`,
      'Breakfast, then out to the islands by boat',
      'Snorkelling over the reef',
      'The floating bar and lunch on deck',
      'Back to the hotel in the late afternoon',
      `${DAY_MARK}Day 11 · A free day by the sea`,
      'Breakfast, then a free day by the sea',
      'Optional: the Po Nagar Cham towers above the river',
      'Optional: the cable car across to Vinpearl'
    ],
    accommodation: {
      name: 'Emerald Bay Hotel and Spa Nha Trang, Nha Trang',
      description: '3 nights · Breakfast and dinner · Standard room · 5★ · Five star hotel on the seafront at Nha Trang',
      images: [
        img('sckwz19o75pg5z6ivofw0j8tbs1h_EBNT-Exterior-1.png'),
        img('bb04xbhe69adlc6a13ma4rm82qok_img11.jpg'),
        img('gh38t70r02iszj3uka7kms18nhzt_img6.jpg'),
        img('rg2iao94ekyqx1w9mbhr05l8jvwp_img46.jpg'),
        img('fz6rmv1r6zl2vpa2bh25oxgtwkk6_img23.jpg'),
        img('91pa1ih5swe4rm73h9qa98roy2s9_img25.jpg'),
        img('hr7bulrhs7vfd1q3cj12fiy6o12n_img38.jpg'),
        img('i1dtzzollmiclu724ng7k4tmcta1_img8.jpg'),
        img('9qtf40a6zyzqgrq1g5qt2ujenm69_img13.jpg'),
        img('hb1sdyikdz9khetzvldrju0wqnt1_img45.jpg'),
        img('cw07jatlf5cspfxgaa9dye27zbr1_img19.jpg'),
        img('uknl0bs817hvqa2cyo544mofavo1_img44.jpg'),
        img('d69j4uotwvbfsp2d3o4q62g96mbs_img28.jpg')
      ]
    },
    activities: [
      {
        name: 'Nha Trang island tour',
        day: 10,
        optional: false,
        image: img('2bkttqlbznr5eat18mib7xlgipx3_shutterstock_1444165544.jpg'),
        description: 'A boat out to the islands in the bay for snorkelling over the reef, a floating bar and lunch on deck.'
      }
    ],
    program: {
      name: 'Nha Trang',
      description: 'Three nights on the seafront, with a boat out to the islands and two days of your own.',
      image: img('nem9kghvpvg4auavuy5nhqx2im7r_shutterstock_98382038.jpg')
    }
  },
  {
    letter: 'F',
    name: 'Ho Chi Minh City',
    subtitle: 'Saigon and the Mekong',
    dayLabel: 'Day 12 to 16',
    images: [
      img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
      img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
      img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
      img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg')
    ],
    dayImages: {
      12: [
        img('l091smvq7b63cids4ghsgi4phytf_1598961402_shutterstock_457520230.jpg'),
        img('fx3oyqr68fwk8eob6dgnw6qeb5ol_1598961538_shutterstock_390573640.jpg'),
        img('x1ikdkrzcb1uh896bfnwulzurpj9_1598962036_shutterstock_1096062560.jpg'),
        img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg')
      ],
      13: [
        img('o3s5ddj3fn5qait83kv3nh7svc0p_shutterstock_2312652627.jpg'),
        img('4v6uzks4tncmsj994n52g9qwwzii_notr.webp'),
        img('f1dbl8hvclmsfb1jc8fob8ztpxuk_1467880098_5397869098_f0ce8370ed_o.jpg'),
        img('edv5z4jl7qnqqv3sn3jzh2droay4_1484035778_1-saigon-central-post-office-saigon-central-post-office.jpg')
      ],
      14: [
        img('vwsw0i1iub615jrlp8wyibkg4mmh_shutterstock_1035848284.jpg'),
        img('lvds5da20701ls58hbi447grx3s2_8193351650_d1ff3fd0b7_z.jpg'),
        img('ktw7z5gp3xhl3n59iymqv4ksukb2_Ben_Tre_Turtle_Island.jpg'),
        img('6cupjrsxzkngfv8zrrp9japoty1n_sgn15.jpg')
      ],
      15: [
        img('8f4cbq1kb1smfhrn66t25iefzmgo_1484035791_vinh-nghiem-pagoda-423.jpeg'),
        img('yopub1tyxa299n9cmdtc9hhqr4vn_1467884938_15756265548_301c16d1e2_o.jpg'),
        img('wefyte71ipd6xp8scxmv0hsna1qs_1484035784_maxresdefault.jpg'),
        img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg')
      ],
      16: [
        img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
        img('irjawr78oh3p6b13rxqsol85iew3_shutterstock_626352947.jpg'),
        img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
        img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 12 · On to Saigon`,
      'Breakfast and check out, then on to Saigon',
      'Check in in District 1',
      'Rest of the day free in the city',
      'Optional: the rooftop bars on Nguyen Hue',
      `${DAY_MARK}Day 13 · Saigon city tour`,
      'Breakfast, then a half day of the city',
      'The Reunification Palace and the old post office',
      'The war remnants museum',
      'Ben Thanh market and the afternoon free',
      `${DAY_MARK}Day 14 · Mekong Delta`,
      'Breakfast, then south into the delta',
      'A boat through the coconut creeks at My Tho',
      'A sampan ride under the palms',
      'The coconut candy workshops, then back to the city',
      `${DAY_MARK}Day 15 · A free day in Saigon`,
      'Breakfast, then a free day in Saigon',
      'Optional: the Cao Dai temple or a cooking class',
      'Optional: the antiques and silk shops of District 1',
      `${DAY_MARK}Day 16 · Departure from Saigon`,
      'Breakfast at the hotel and check out',
      'Private transfer to Tan Son Nhat for your flight home'
    ],
    accommodation: {
      name: 'Avanti Saigon Hotel, Ho Chi Minh',
      description: '4 nights · Breakfast · Standard room · 3★ · Small hotel in District 1, a short walk from the opera house',
      images: [
        img('p1mdvoje0q9g9is81pbqakdxm7hw_img7.jpg'),
        img('c5g4ltwu93dyz27pbxvhf2j1ndyp_img1.jpg'),
        img('09wq44lgvnb8x2hkpabgxlyqf1ze_img2.jpg'),
        img('rxvam62ayf64w4u30l2ii68rbxbx_img5.jpg'),
        img('s82v4kv3y4ua81vfm79ix8aw8jn2_img9.jpg'),
        img('zlj0ektblbau1j7xc6clu344fvka_img10.jpg'),
        img('rr3xltqahf2cjqfi7avnx46x34r5_img18.jpg'),
        img('49fu4v8rtjok4rtmgps0zaept8cz_img3.jpg'),
        img('vbkpubbgpiyt4thbtyi8aavn9szw_img4.jpg'),
        img('sh4c9fqcmtnkx76l0dv3eegzgej2_img15.jpg')
      ]
    },
    activities: [
      {
        name: 'Saigon half day city tour',
        day: 13,
        optional: false,
        image: img('o3s5ddj3fn5qait83kv3nh7svc0p_shutterstock_2312652627.jpg'),
        description: 'The Reunification Palace, the old post office and Notre Dame cathedral, then the war remnants museum and the Ben Thanh market.'
      },
      {
        name: 'Mekong Delta full day tour',
        day: 14,
        optional: false,
        image: img('vwsw0i1iub615jrlp8wyibkg4mmh_shutterstock_1035848284.jpg'),
        description: 'South to My Tho for a boat into the coconut creeks, a sampan through the palms, and the workshops where they make coconut candy.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'Four nights in District 1 to finish, with a city tour, the Mekong Delta and free days.',
      image: img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg')
    }
  }
];

const detail = {
  slug: 'sixteen-days-across-vietnam',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Sixteen Days Across Vietnam',
  alt: 'My Son sanctuary brick towers in the hills near Hoi An',
  days: '16 days / 15 nights',
  stations: '6 stops',
  transport: 'Overnight trains, flights, private transfers and guided tours',
  tag: 'Grand tour',
  tags: ['Grand tour', 'Culture'],
  price: 115881,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Halong Bay', 'Sa Pa', 'Hoi An', 'My Son', 'Nha Trang', 'Ho Chi Minh City', 'Mekong Delta'],
  stats: { days: 16, cities: 6, hotels: 6, activities: 8, transfers: 20 },
  gallery: heroGallery,
  services: [
    ['6 hotels', 'Accommodation'],
    ['8 experiences', 'Activities'],
    ['20 transfers', 'Transport'],
    ['20 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Sixteen days is the version where you walk in the Sa Pa valleys and still get three nights by the sea.',
    quoteMore: 'The night train to Lao Cai is part of the trip, not a chore. Book a four berth soft sleeper and bring something to eat.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Sixteen days from the hill country to the delta: Hanoi and an overnight cruise in Halong Bay, the sleeper train to Sa Pa for two days of valley walks, Hoi An with the Cham towers of My Son, three nights on the seafront at Nha Trang with an island boat day, then four in Saigon with a city tour and the Mekong Delta.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 15 nights of accommodation including a cruise boat and two sleeper berths on the overnight train; breakfast daily with dinner at most hotels; the domestic flight to Da Nang; private transfers throughout; a full day Hanoi city tour with lunch; a shared overnight cruise in Halong Bay; the Cat Cat waterfall and Sin Chai trek; the Lao Chai and Ta Van trek; the My Son sanctuary tour; a Nha Trang island tour; a half day Saigon city tour; a full day Mekong Delta tour.',
  intro2: 'Not included: international flights; Vietnam visa fees; lunches other than where stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Hanoi city tour (B, L, D)', text: 'Breakfast, then a full guided day of the city\nThe mausoleum and the one pillar pagoda\nThe Temple of Literature, the old university\nLunch included, then the old quarter lanes', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then a full guided day of the city', 'The mausoleum and the one pillar pagoda', 'The Temple of Literature, the old university'] },
    { title: 'Day 3: Overnight on the bay (B, L, D)', text: 'Breakfast and check out, then east towards the coast\nBoard your cruise boat in the early afternoon\nLunch and dinner on board\nA night moored among the limestone islands', hotel: 'Halong Royal Palace Cruise', highlights: ['Breakfast and check out, then east towards the coast', 'Board your cruise boat in the early afternoon', 'Lunch and dinner on board'] },
    { title: 'Day 4: Night train to Sa Pa (B)', text: 'Breakfast on board as the boat moves\nBack to the pier and on to Hanoi\nEvening transfer to the station\nA sleeper berth on the night train north', hotel: 'Overnight train', highlights: ['Breakfast on board as the boat moves', 'Back to the pier and on to Hanoi', 'Evening transfer to the station'] },
    { title: 'Day 5: Cat Cat and Sin Chai (Train)', text: 'Arrival at Lao Cai and up to Sa Pa\nCheck in and a short rest\nA walk down to the Cat Cat waterfall\nOn to Sin Chai at the end of the valley', hotel: 'Delta Sapa Hotel', highlights: ['Arrival at Lao Cai and up to Sa Pa', 'Check in and a short rest', 'A walk down to the Cat Cat waterfall'] },
    { title: 'Day 6: Lao Chai and the night train (B)', text: 'Breakfast, then into the Muong Hoa valley\nThe terraced fields at Lao Chai\nTa Van, worked by Hmong and Giay families\nBack to Lao Cai for the night train to Hanoi', hotel: 'Overnight train', highlights: ['Breakfast, then into the Muong Hoa valley', 'The terraced fields at Lao Chai', 'Ta Van, worked by Hmong and Giay families'] },
    { title: 'Day 7: South to Hoi An (Travel)', text: 'Arrival in Hanoi and the flight to Da Nang\nOn to Hoi An and check in\nRest of the day free in the old town\nOptional: the lantern lit lanes after dark', hotel: 'Hoi An Rose Garden Hotel', highlights: ['Arrival in Hanoi and the flight to Da Nang', 'On to Hoi An and check in', 'Rest of the day free in the old town'] },
    { title: 'Day 8: My Son sanctuary (B, D)', text: 'Breakfast, then out to the My Son valley\nThe brick towers built by the Cham kings\nThe small museum and the ruins among the trees\nAfternoon free in Hoi An', hotel: 'Hoi An Rose Garden Hotel', highlights: ['Breakfast, then out to the My Son valley', 'The brick towers built by the Cham kings', 'The small museum and the ruins among the trees'] },
    { title: 'Day 9: On to Nha Trang (B, D)', text: 'Breakfast and check out, then south to Nha Trang\nCheck in on the seafront\nRest of the day free at your own pace\nOptional: the mud baths at Thap Ba', hotel: 'Emerald Bay Hotel and Spa Nha Trang', highlights: ['Breakfast and check out, then south to Nha Trang', 'Check in on the seafront', 'Rest of the day free at your own pace'] },
    { title: 'Day 10: Nha Trang islands (B, D)', text: 'Breakfast, then out to the islands by boat\nSnorkelling over the reef\nThe floating bar and lunch on deck\nBack to the hotel in the late afternoon', hotel: 'Emerald Bay Hotel and Spa Nha Trang', highlights: ['Breakfast, then out to the islands by boat', 'Snorkelling over the reef', 'The floating bar and lunch on deck'] },
    { title: 'Day 11: A free day by the sea (B, D)', text: 'Breakfast, then a free day by the sea\nOptional: the Po Nagar Cham towers above the river\nOptional: the cable car across to Vinpearl', hotel: 'Emerald Bay Hotel and Spa Nha Trang', highlights: ['Breakfast, then a free day by the sea', 'Optional: the Po Nagar Cham towers above the river', 'Optional: the cable car across to Vinpearl'] },
    { title: 'Day 12: On to Saigon (B)', text: 'Breakfast and check out, then on to Saigon\nCheck in in District 1\nRest of the day free in the city\nOptional: the rooftop bars on Nguyen Hue', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast and check out, then on to Saigon', 'Check in in District 1', 'Rest of the day free in the city'] },
    { title: 'Day 13: Saigon city tour (B)', text: 'Breakfast, then a half day of the city\nThe Reunification Palace and the old post office\nThe war remnants museum\nBen Thanh market and the afternoon free', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast, then a half day of the city', 'The Reunification Palace and the old post office', 'The war remnants museum'] },
    { title: 'Day 14: Mekong Delta (B)', text: 'Breakfast, then south into the delta\nA boat through the coconut creeks at My Tho\nA sampan ride under the palms\nThe coconut candy workshops, then back to the city', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast, then south into the delta', 'A boat through the coconut creeks at My Tho', 'A sampan ride under the palms'] },
    { title: 'Day 15: A free day in Saigon (B)', text: 'Breakfast, then a free day in Saigon\nOptional: the Cao Dai temple or a cooking class\nOptional: the antiques and silk shops of District 1', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast, then a free day in Saigon', 'Optional: the Cao Dai temple or a cooking class', 'Optional: the antiques and silk shops of District 1'] },
    { title: 'Day 16: Departure from Saigon (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Tan Son Nhat for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Tan Son Nhat for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; lunches other than where stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const sixteenDaysAcrossVietnamBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const sixteenDaysAcrossVietnamProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Halong Bay', 'Sa Pa', 'Hoi An', 'My Son', 'Nha Trang', 'Ho Chi Minh City', 'Mekong Delta'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 16,
  stops: 6,
  hotels: 6,
  cities: 6,
  activities: 8,
  transfers: 20,
  meals: 20,
  price: detail.price,
  images: cardImages
};
