// Best of Norway: Fjords to Northern Lights in 14 Days. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
  img('lgxhl53my4ly5h5xz1z1sie6fm7z_shutterstock_433239040.jpg'),
  img('mnb8s7zwq67gcscp9tu62mmfg49c_shutterstock_109937720.jpg'),
  img('lyawqwa0c837li317bm3xltzh6ls_shutterstock_435887431.jpg'),
  img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg'),
  img('mdiutmiyboa7dgccf3rh5gxbuv2m_shutterstock_1028381539.jpg'),
  img('4sx773ngfyftevlay4ji7sh07opl_shutterstock_524072728.jpg'),
  img('ca16xfailzz5p5q3mdakuu7etqs2_shutterstock_1370732486.jpg'),
  img('dp61y4mfdrkmzf3sgey7grlfqlef_shutterstock_1239376453.jpg'),
  img('99ssdmh9iwql13gpji3d468i93wr_shutterstock_761859112.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('lgxhl53my4ly5h5xz1z1sie6fm7z_shutterstock_433239040.jpg'),
  img('mdiutmiyboa7dgccf3rh5gxbuv2m_shutterstock_1028381539.jpg'),
  img('4sx773ngfyftevlay4ji7sh07opl_shutterstock_524072728.jpg'),
  img('ca16xfailzz5p5q3mdakuu7etqs2_shutterstock_1370732486.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Oslo',
    dayLabel: 'Day 1 to 2',
    images: [
      img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
      img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
      img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg'),
      img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg')
    ],
    dayImages: {
      1: [
        img('s23z05ki8tfd52pn7yfk81btjg4f_1615622683_shutterstock_553892116.jpg'),
        img('5ukcvwbns07lm1tf3cthx5pqrdxl_1615625259_shutterstock_468696983.jpg'),
        img('rc0nrq0sksn2frg5v908pxuind6i_1615622948_shutterstock_684917530.jpg'),
        img('eubrs8hurzt4en4spsbost1oljbp_1615626205_shutterstock_1657711279.jpg')
      ],
      2: [
        img('1ki2snlcdhej8216f6h20v7lzq81_145%20(13).jpg'),
        img('s23z05ki8tfd52pn7yfk81btjg4f_1615622683_shutterstock_553892116.jpg'),
        img('5ukcvwbns07lm1tf3cthx5pqrdxl_1615625259_shutterstock_468696983.jpg'),
        img('puvtd81b3numvar055ya45fh2jhp_1615625916_shutterstock_1920550193.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Oslo`,
      'Arrival at the airport and private transfer to your hotel',
      'Check in and the rest of the day at leisure',
      `${DAY_MARK}Day 2 · Oslofjord day trip`,
      'Breakfast, then a day on the inner fjord',
      'The evening free in the capital'
    ],
    accommodation: {
      name: 'Park Inn by Radisson Oslo, Oslo',
      description: '2 nights · Breakfast · Standard room · 3★ · Central hotel by the station',
      images: [
        img('qkydoz71qk5twfj24kd839pgsuh2_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-1.jpg'),
        img('enpynofihdyhgdk7hysnn0r7wugk_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-8.jpg'),
        img('8ukcjxoqceyy35259ubcsns55j6t_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-4.jpg'),
        img('uos5o1cn355fcso55inyaqkd0ehb_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-3.jpg'),
        img('zhs5z0lx5g9oil1gvqnhuxpigptv_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-9.jpg'),
        img('b7w9jiiinoqbwrlvs8a6gjpprzbn_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-6.jpg'),
        img('885mf8krvecvnhsiy89bffewvavp_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-5.jpg'),
        img('vuimelwsztkr9zj3v85biy3ew5pm_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-7.jpg'),
        img('wyvhi5zonrlrr79muan0wn1e7o6g_Park%20Inn%20by%20Radisson%20Oslo%20Airport%20Hotel%20West-2.jpg')
      ]
    },
    activities: [
      {
        name: 'Oslofjord day trip',
        day: 2,
        optional: false,
        image: img('1ki2snlcdhej8216f6h20v7lzq81_145%20(13).jpg'),
        description: 'A day on the inner fjord past the islands, lighthouses and summer houses.'
      }
    ],
    program: {
      name: 'Oslo',
      description: 'Two nights and a day trip on the Oslofjord.',
      image: img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Stavanger',
    dayLabel: 'Day 3 to 4',
    images: [
      img('686jzbaep084g4l5qy5ket7pft04_shutterstock_246599635.jpg'),
      img('lgxhl53my4ly5h5xz1z1sie6fm7z_shutterstock_433239040.jpg'),
      img('rn23qqw941gg1vw3d1idvms9drrv_shutterstock_503950324.jpg'),
      img('moem5z8zhze1ptrk73q1ogput843_shutterstock_302169140.jpg')
    ],
    dayImages: {
      3: [
        img('s1yt85vupyuoim1xub729ylnvel7_1616666006_shutterstock_604526579.jpg'),
        img('7np5jkqp8bxwf535rj10m7rqoaa0_1616666191_shutterstock_1740222737.jpg'),
        img('9k2ftfh048gb48x636b397dayb4s_1616668753_shutterstock_429125953.jpg'),
        img('8vpxmfrpf9kx49qvcgiu083o3vu4_1616669130_shutterstock_1822759742.jpg')
      ],
      4: [
        img('g1do3tc8gbyrlfpvu1z5fdkaujfj_dl.beatsnoop.com-1716454380.jpg'),
        img('ol2pu203dutbsnqnf6mse0khd356_1616665465_shutterstock_224268163.jpg'),
        img('9xl276ux31ugw5qujwlxsmftcj6n_1616667975_shutterstock_1376868593.jpg'),
        img('686jzbaep084g4l5qy5ket7pft04_shutterstock_246599635.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · To Stavanger`,
      'Breakfast and check out',
      'Travel along the south coast to Stavanger',
      'The old timber quarter at leisure',
      `${DAY_MARK}Day 4 · Pulpit Rock cruise`,
      'Breakfast, then three hours on the Lysefjord',
      'The afternoon free in Stavanger'
    ],
    accommodation: {
      name: 'Thon Partner Hotel Sandnes, Stavanger',
      description: '2 nights · Breakfast · Standard room · 3★ · Hotel in the Stavanger region',
      images: [
        img('9cs3akfn2q5fp4gzakzgrzxhf0ul_dwww.jpg'),
        img('67hns4ni09vpme3qx9j3gbuybww9_42037931.jpg'),
        img('1yyy3cd0z8lggib1649e7o412w5w_42040338.jpg'),
        img('nkoujicc8fyap59s9pyltr2bdhgc_209048474.jpg'),
        img('shifjuj8g3mh8dlakjtum8xnrtla_209047520.jpg'),
        img('lov7k51nx3b4rk6j8y2fbng8q5ee_209048515.jpg'),
        img('89seayqy7etf0ua6ewubaslby3s8_209065518.jpg'),
        img('dqob2lorgnmvs6bkzglut15aialn_209047323.jpg'),
        img('120uan1kpo0zva90cb9q6oc0jfpp_209046744.jpg'),
        img('jehcrhqce40r0bp2byyaxr6i6so8_209047367.jpg')
      ]
    },
    activities: [
      {
        name: 'Lysefjord cruise to Pulpit Rock',
        day: 4,
        optional: false,
        image: img('ol2pu203dutbsnqnf6mse0khd356_1616665465_shutterstock_224268163.jpg'),
        description: 'Three hours beneath the 604-metre Preikestolen cliff with waterfalls and the Vagabond\'s Cave.'
      }
    ],
    program: {
      name: 'Stavanger',
      description: 'Two nights in the oil capital with a Lysefjord cruise beneath Pulpit Rock.',
      image: img('686jzbaep084g4l5qy5ket7pft04_shutterstock_246599635.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Bergen',
    dayLabel: 'Day 5 to 6',
    images: [
      img('b2s092g38ovdvcgv9wxa8u2cpp35_shutterstock_234045358.jpg'),
      img('4fbi1wm5uytipil11d9uswi7k8am_shutterstock_233931622.jpg'),
      img('mnb8s7zwq67gcscp9tu62mmfg49c_shutterstock_109937720.jpg'),
      img('wvmhfp7buu3v6f67733fws7bhdev_shutterstock_521834434.jpg')
    ],
    dayImages: {
      5: [
        img('trrissd61jx2lhl7mvq2173zse6d_1615627638_shutterstock_1435027013.jpg'),
        img('fyi4xpf0u3l72tcotevp6dx6qpej_1615639611_shutterstock_1080318227_(1).jpg'),
        img('qn0q4a83wk1nunj8hwtkpqhoksge_1615629676_shutterstock_755393548.jpg'),
        img('c26o23dxhgtok71rj2xl91q5k5oy_2022-09-02.jpg')
      ],
      6: [
        img('sp84n6gfmyok9ym1lp8097ij94cd_shutterstock_713063371.jpg'),
        img('ll4qgprkwmp1t91yfnqni8o5m9nu_Indre_Osterfjorden.jfif'),
        img('og7nlkcjvon1agpr0lqw4vgktf7l_Mostraumen.png'),
        img('b2s092g38ovdvcgv9wxa8u2cpp35_shutterstock_234045358.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · To Bergen`,
      'Breakfast and check out',
      'Coach and ferry up the coast to Bergen',
      'Bryggen and the fish market in the evening',
      `${DAY_MARK}Day 6 · Mostraumen cruise`,
      'Breakfast, then the Osterfjord cruise',
      'Optional: Fløibanen for the city view'
    ],
    accommodation: {
      name: 'Thon Hotel Bristol, Bergen',
      description: '2 nights · Breakfast · Standard room · 3★ · Hotel on the main square',
      images: [
        img('b7vtz1bq7f27qybfn9eybgqh8fgt_27044396.jpg'),
        img('d6j6wx4vl1v4ax69vfwk3mc1oc9b_268178031.jpg'),
        img('db7hrholfsco3kznpth9z21zh13r_268178051.jpg'),
        img('o5q6damzhtx70scjhi80bgn5ktim_252576622.jpg'),
        img('e1tey4msl7bnkpuwsvymd48ivous_252565537.jpg'),
        img('4kxu0fitpxxnze92ar9crzbfaeex_252565550.jpg'),
        img('1inbcq1d3n62gnr3km900jsw60l2_e121cf4c_z.jpg'),
        img('bf95e61hqm3xju3c8dbcmjpe6tbm_231761208.jpg'),
        img('rt6l8r3kzqm87uh420zmibegml5c_252576613.jpg'),
        img('1vh1jzdvunz80osji4462tgpl3q4_231774912.jpg'),
        img('d2hxmb7948skj0rex60uxc2xl4wd_231393596.jpg')
      ]
    },
    activities: [
      {
        name: 'Mostraumen fjord cruise',
        day: 6,
        optional: false,
        image: img('1ki2snlcdhej8216f6h20v7lzq81_145%20(13).jpg'),
        description: 'Three hours up the Osterfjord to the tidal rapids, close enough to fill a glass at the waterfall.'
      }
    ],
    program: {
      name: 'Bergen',
      description: 'Two nights in the fjord capital and a cruise to the Mostraumen rapids.',
      image: img('b2s092g38ovdvcgv9wxa8u2cpp35_shutterstock_234045358.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Ålesund',
    dayLabel: 'Day 7 to 8',
    images: [
      img('5a74z8igkplq54pijog9od4hitlo_shutterstock_471957197.jpg'),
      img('cbfvezmt6o5221eabqkt5vz1vt10_shutterstock_194058518.jpg'),
      img('o3foa9gjr1pw0091p9hxdnzp9bdk_shutterstock_737227516.jpg'),
      img('lhrxnajg0bnweyzs1ec3ml0r5wrd_shutterstock_205089337.jpg')
    ],
    dayImages: {
      7: [
        img('xluq7vulcpjf9hqjmzqoj7zbk2ms_2444eae1cbd46257bbac9a974c419a99c15d9420-2048x1536.jpg'),
        img('qy058dihzn0paljhu0dglfnutqtv_29076884461_d50530f6cd_b.jpg'),
        img('nza6rsc73blz70btazjvfkx8hk21_download%20(90).jpg'),
        img('n0veyjimcysgp18gue6chw43aull_AF1QipO4jkJnWAcSRqRMyeE4FrPG9ifY.jpg')
      ],
      8: [
        img('a9d68ghb59w879r2fft716xv676a_dl.beatsnoop.com-KqI9HnJWY8.jpg'),
        img('xpe22n0cv54pcwxsa3m3bi495rv2_1618467928_2-1_a0f3397e-7f00-4103-843a-6af504f3d445.jpg'),
        img('46g1dhyqe5naiudtp91004loxq5z_1618468351_EYs7xCDUcAAb5eN.jpg'),
        img('thvc5gja9583qe4jn1cq15soso6u_1599212950_Geiranger_Fjord.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · To Ålesund`,
      'Breakfast and check out',
      'The coast road north to Ålesund',
      'The Art Nouveau streets at leisure',
      `${DAY_MARK}Day 8 · Geirangerfjord cruise`,
      'Breakfast, then a day to the Geirangerfjord',
      'The Seven Sisters and Bridal Veil waterfalls',
      'Back to Ålesund for the night'
    ],
    accommodation: {
      name: 'Ålesund city hotel, Ålesund',
      description: '2 nights · Breakfast · Standard room · 3★ · Hotel in the Art Nouveau town',
      images: [
        img('aqgy7h7k5bmn40xi19dnlhx7txie_7xm.xyz836190.jpg'),
        img('biqxmtljlmatwikscz3r03f1w3ev_1596095104_nowar.jpg'),
        img('684udj628fn8vrbovp7u64ax9yxg_7xm.xyz397164.jpg'),
        img('4km57maoof1jhr3fteu36s6lkta7_1596095105_nowar1.jpg'),
        img('kwfghy6mi1j45o2tmrzkbziovx6x_Norway%20(3).jpg'),
        img('yu4i2pjz9cimhkm3x024h9j4kzk5_7xm.xyz913070.jpg')
      ]
    },
    activities: [
      {
        name: 'Geirangerfjord cruise',
        day: 8,
        optional: false,
        image: img('a9d68ghb59w879r2fft716xv676a_dl.beatsnoop.com-KqI9HnJWY8.jpg'),
        description: 'The UNESCO fjord with the Seven Sisters and Bridal Veil waterfalls and abandoned farms on the ledges.'
      }
    ],
    program: {
      name: 'Ålesund',
      description: 'Two nights in Ålesund with a day cruise on the Geirangerfjord.',
      image: img('5a74z8igkplq54pijog9od4hitlo_shutterstock_471957197.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Trondheim',
    dayLabel: 'Day 9 to 10',
    images: [
      img('ca16xfailzz5p5q3mdakuu7etqs2_shutterstock_1370732486.jpg'),
      img('4r8jme2umo377lmtrfft54zv1013_shutterstock_1186327096.jpg'),
      img('50jcrod9eks3vrqxudjfhnip8amx_shutterstock_1275688903.jpg'),
      img('lyawqwa0c837li317bm3xltzh6ls_shutterstock_435887431.jpg')
    ],
    dayImages: {
      9: [
        img('s4d7y8fqmis2cqvnudonu7j7aplg_1616672395_shutterstock_1821072071.jpg'),
        img('654edlcy0wvjp61yp7bf60birmxs_1616672511_shutterstock_1466538416.jpg'),
        img('v0j3zo1l1p7qijwoa4t0k234abhb_1616672732_shutterstock_1387408088.jpg'),
        img('8akhkf2mphzjd0lyb1fr60xc97ad_1616672918_shutterstock_1845119476.jpg')
      ],
      10: [
        img('sfgiw7lvu235a51v6r79k2sywepo_shutterstock_435887431.jpg'),
        img('vruup00op1opl6pe2upwq4sn8l0i_1616671836_shutterstock_1195780798.jpg'),
        img('jbgdh3eo1ruc2new8t4irlg2qnz1_1616671967_shutterstock_1845119476.jpg'),
        img('p3naj131zq7j9axltb5ydn13kzlu_1616672611_shutterstock_1329316040.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 9 · To Trondheim`,
      'Breakfast and check out',
      'Travel north to Trondheim',
      'A free evening by the river',
      `${DAY_MARK}Day 10 · Trondheim walking tour`,
      'Breakfast, then a guided walk of the old town',
      'Nidaros Cathedral and the wharves'
    ],
    accommodation: {
      name: 'Clarion Hotel Trondheim, Trondheim',
      description: '2 nights · Breakfast · Standard room · 3★ · Harbourside hotel near the old town',
      images: [
        img('1ossnqy0em13w6elyab44d4l531a_494035595.jpg'),
        img('nf5cm17fxtgr21em31zpo42f08bn_494035580.jpg'),
        img('g3cyhadzzrk65gcp2acp37894nfn_494035504.jpg'),
        img('gu1ueyct1nmzj02lci8y1gy1p30o_214878385.jpg'),
        img('c6f9ihzfvu892ywxoxkvcor7byb6_sdf.jpg'),
        img('f6711iy7m4herlhfjh1ymmit87ht_494035566.jpg'),
        img('2b3f33udw6u0g2b3t3nvkn5gefi1_494035611.jpg'),
        img('6td260hpt8xmdu7tcbedoosdu01e_2f35c221_z.jpg'),
        img('o9vajqqzq60m2r4nez4rwvyau3lo_7533453d_z.jpg'),
        img('xbxh6n4glw4a11ooabbbci3l2r3p_214890511.jpg'),
        img('bppyxpg7e0138i0w1lu4tink3vv9_494035558.jpg')
      ]
    },
    activities: [
      {
        name: 'Trondheim walking tour',
        day: 10,
        optional: false,
        image: img('8akhkf2mphzjd0lyb1fr60xc97ad_1616672918_shutterstock_1845119476.jpg'),
        description: 'Nidaros Cathedral, the old town bridge and the colourful wharves on the Nidelva with a guide.'
      }
    ],
    program: {
      name: 'Trondheim',
      description: 'Two nights in the medieval capital with a guided walk.',
      image: img('ca16xfailzz5p5q3mdakuu7etqs2_shutterstock_1370732486.jpg')
    }
  },
  {
    letter: 'F',
    name: 'Tromsø',
    dayLabel: 'Day 11 to 14',
    images: [
      img('yw3zpcri0kcqrog688ilmp09em92_shutterstock_205982242.jpg'),
      img('ja2q6wd8j469isi5hvjl8y84eksp_shutterstock_1741016771.jpg'),
      img('dp61y4mfdrkmzf3sgey7grlfqlef_shutterstock_1239376453.jpg'),
      img('yegd14kes1i2oonnxhtvk4m2tsac_shutterstock_366817250.jpg')
    ],
    dayImages: {
      11: [
        img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
        img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg'),
        img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg')
      ],
      12: [
        img('ghczbr28s5gz57nqy7tou7kd47ox_7xm.xyz323674.jpg'),
        img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
        img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg')
      ],
      13: [
        img('yhhhluz7h3qck37lapyfgp0yn5h4_DSC02470-3%20(2500x1407).jpg'),
        img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
        img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg')
      ],
      14: [
        img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        img('uviildfi3xc3tby5ri7snynifsjh_shutterstock_127049378.jpg'),
        img('63w5t98pvmp9sjn5h2p3hpcsmfar_shutterstock_239548480.jpg'),
        img('ky2ju73gbrem3a18iq3geqgvpvc1_shutterstock_123945151.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 11 · Fly to Tromsø`,
      'Breakfast and transfer to the airport',
      'Flight to Tromsø and check in',
      'A first look for the lights',
      `${DAY_MARK}Day 12 · Northern lights tour`,
      'Breakfast and a free day in the city',
      'Evening aurora chase by minibus',
      `${DAY_MARK}Day 13 · Arctic day trip`,
      'Breakfast, then a full day in the Arctic landscape',
      'Fjords, mountains and Sami culture',
      `${DAY_MARK}Day 14 · Departure from Tromsø`,
      'Breakfast at the hotel and check out',
      'Transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Tromsø city hotel, Tromsø',
      description: '3 nights · Breakfast · Standard room · 3★ · Central hotel in the Arctic capital',
      images: [
        img('bsv4am2vtj4exvy9d20mnjrmtql2_7xm.xyz606614.jpg'),
        img('603qn4k95gers830dh5au76u9bkw_7xm.xyz219713.jpg'),
        img('pgoek6fm7sqd735ymq7j0nd4mabc_7xm.xyz178531.jpg'),
        img('9i084jxaefgos33dr9pnv93ginxy_7xm.xyz668852.jpg'),
        img('9cs3akfn2q5fp4gzakzgrzxhf0ul_dwww.jpg'),
        img('67hns4ni09vpme3qx9j3gbuybww9_42037931.jpg')
      ]
    },
    activities: [
      {
        name: 'Northern lights tour',
        day: 12,
        optional: false,
        image: img('qdke02si8e7d1o8vu9yqc5ehcp3z_shutterstock_210083746.jpg'),
        description: 'An evening chase for clear skies with warm suits, a campfire and a photographer guide.'
      },
      {
        name: 'Arctic day trip',
        day: 13,
        optional: false,
        image: img('yhhhluz7h3qck37lapyfgp0yn5h4_DSC02470-3%20(2500x1407).jpg'),
        description: 'A day across the Lyngen Alps and fjords of the Arctic coast, with Sami culture and reindeer along the way.'
      }
    ],
    program: {
      name: 'Tromsø',
      description: 'Three nights in the north for a northern lights tour and a day trip into the Arctic landscape.',
      image: img('yw3zpcri0kcqrog688ilmp09em92_shutterstock_205982242.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-norway-fjords-to-northern-lights-14-days',
  ctaHref: '/l/norway/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Norway: Fjords to Northern Lights in 14 Days',
  alt: 'The Geirangerfjord with the Seven Sisters waterfall in evening light',
  days: '14 days / 13 nights',
  stations: '6 stops',
  transport: 'Airport transfers, coach and ferry along the west coast, fjord cruises in Stavanger, Bergen and Geiranger, and a flight to Tromsø',
  tag: 'Northern Lights',
  tags: ['Northern Lights', 'Nature', 'Multi-city'],
  price: 366565,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Oslo', 'Stavanger', 'Bergen', 'Ålesund', 'Trondheim', 'Tromsø'],
  stats: { days: 14, cities: 6, hotels: 6, activities: 7, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['6 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['12 transfers', 'Transport'],
    ['13 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ingrid',
    image: '/experts/riya.webp',
    role: 'Norway expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'For the northern lights you need three things: darkness, a clear sky and patience. Tromsø gives you the first two; we build in the third.',
    quoteMore: 'Book the aurora chase for your first night in the north, not the last. If the sky stays cloudy, most operators let you join again free of charge.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Two weeks the length of Norway: Oslo, Stavanger and Pulpit Rock, Bergen, Ålesund and the Geirangerfjord, Trondheim, and three nights in Tromsø for the northern lights.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: all transfers and rail or ferry journeys as listed; sightseeing and cruises as listed with tickets where stated; daily breakfast.',
  intro2: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are quoted as a class and named on confirmation.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Oslo (Arrival)', text: 'Arrival at the airport and private transfer to your hotel\nCheck in and the rest of the day at leisure', hotel: 'Park Inn by Radisson Oslo', highlights: ['Arrival at the airport and private transfer to your hotel', 'Check in and the rest of the day at leisure'] },
    { title: 'Day 2: Oslofjord day trip (B)', text: 'Breakfast, then a day on the inner fjord\nThe evening free in the capital', hotel: 'Park Inn by Radisson Oslo', highlights: ['Breakfast, then a day on the inner fjord', 'The evening free in the capital'] },
    { title: 'Day 3: To Stavanger (B)', text: 'Breakfast and check out\nTravel along the south coast to Stavanger\nThe old timber quarter at leisure', hotel: 'Thon Partner Hotel Sandnes', highlights: ['Breakfast and check out', 'Travel along the south coast to Stavanger', 'The old timber quarter at leisure'] },
    { title: 'Day 4: Pulpit Rock cruise (B)', text: 'Breakfast, then three hours on the Lysefjord\nThe afternoon free in Stavanger', hotel: 'Thon Partner Hotel Sandnes', highlights: ['Breakfast, then three hours on the Lysefjord', 'The afternoon free in Stavanger'] },
    { title: 'Day 5: To Bergen (B)', text: 'Breakfast and check out\nCoach and ferry up the coast to Bergen\nBryggen and the fish market in the evening', hotel: 'Thon Hotel Bristol', highlights: ['Breakfast and check out', 'Coach and ferry up the coast to Bergen', 'Bryggen and the fish market in the evening'] },
    { title: 'Day 6: Mostraumen cruise (B)', text: 'Breakfast, then the Osterfjord cruise\nOptional: Fløibanen for the city view', hotel: 'Thon Hotel Bristol', highlights: ['Breakfast, then the Osterfjord cruise', 'Optional: Fløibanen for the city view'] },
    { title: 'Day 7: To Ålesund (B)', text: 'Breakfast and check out\nThe coast road north to Ålesund\nThe Art Nouveau streets at leisure', hotel: 'Ålesund city hotel', highlights: ['Breakfast and check out', 'The coast road north to Ålesund', 'The Art Nouveau streets at leisure'] },
    { title: 'Day 8: Geirangerfjord cruise (B)', text: 'Breakfast, then a day to the Geirangerfjord\nThe Seven Sisters and Bridal Veil waterfalls\nBack to Ålesund for the night', hotel: 'Ålesund city hotel', highlights: ['Breakfast, then a day to the Geirangerfjord', 'The Seven Sisters and Bridal Veil waterfalls', 'Back to Ålesund for the night'] },
    { title: 'Day 9: To Trondheim (B)', text: 'Breakfast and check out\nTravel north to Trondheim\nA free evening by the river', hotel: 'Clarion Hotel Trondheim', highlights: ['Breakfast and check out', 'Travel north to Trondheim', 'A free evening by the river'] },
    { title: 'Day 10: Trondheim walking tour (B)', text: 'Breakfast, then a guided walk of the old town\nNidaros Cathedral and the wharves', hotel: 'Clarion Hotel Trondheim', highlights: ['Breakfast, then a guided walk of the old town', 'Nidaros Cathedral and the wharves'] },
    { title: 'Day 11: Fly to Tromsø (B)', text: 'Breakfast and transfer to the airport\nFlight to Tromsø and check in\nA first look for the lights', hotel: 'Tromsø city hotel', highlights: ['Breakfast and transfer to the airport', 'Flight to Tromsø and check in', 'A first look for the lights'] },
    { title: 'Day 12: Northern lights tour (B)', text: 'Breakfast and a free day in the city\nEvening aurora chase by minibus', hotel: 'Tromsø city hotel', highlights: ['Breakfast and a free day in the city', 'Evening aurora chase by minibus'] },
    { title: 'Day 13: Arctic day trip (B)', text: 'Breakfast, then a full day in the Arctic landscape\nFjords, mountains and Sami culture', hotel: 'Tromsø city hotel', highlights: ['Breakfast, then a full day in the Arctic landscape', 'Fjords, mountains and Sami culture'] },
    { title: 'Day 14: Departure from Tromsø (B)', text: 'Breakfast at the hotel and check out\nTransfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are quoted as a class and named on confirmation.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Europe', href: '/europe' },
  { label: 'Norway', href: '/europe/norway' },
  { label: detail.title }
];

export const bestOfNorthernLightsNorway14DaysBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfNorthernLightsNorway14DaysProduct = {
  slug: detail.slug,
  places: ['Oslo', 'Stavanger', 'Bergen', 'Ålesund', 'Trondheim', 'Tromsø'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 14,
  stops: 6,
  hotels: 6,
  cities: 6,
  activities: 7,
  transfers: 12,
  meals: 13,
  price: detail.price,
  images: cardImages
};
