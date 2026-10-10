// Japan Legends with a Temple Stay. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg'),
  img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
  img('va7tu5iex0enjnq9uaqnfyufkowl_shutterstock_507147964%20(1).jpg'),
  img('u8rryut2rpcx72ify5pfq7slfshl_shutterstock_2243167707.jpg'),
  img('f4xtclyb43occot7k4kf89zt870u_shutterstock_2458718483.jpg'),
  img('h3macot4xadpbfjprm5mxxfegn9z_shutterstock_2445535391.jpg'),
  img('snn4hj8wbtbpfk6y6ldinpgqqxp0_shutterstock_2361467667.jpg'),
  img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
  img('1yv1a968ghyiwiwbsbwvzfu388l0_shutterstock_2300479567.jpg'),
  img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('va7tu5iex0enjnq9uaqnfyufkowl_shutterstock_507147964%20(1).jpg'),
  img('snn4hj8wbtbpfk6y6ldinpgqqxp0_shutterstock_2361467667.jpg'),
  img('urexlkfkvz3whbtfb3k0rk3iu9rn_shutterstock_1618153279.jpg'),
  img('ejlal61lfumsj0l0z7i6juuw632n_download%20-%202024-07-24T125745.440.jpeg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    dayLabel: 'Day 1 to 2',
    images: [
      img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg'),
      img('5acsd3g9qzodq3f4yv2vt9qo0o0i_shutterstock_1654167061.jpg'),
      img('gj78fz8c0ymqhf34svyaxlbyx6e2_shutterstock_1017018754%20(1).jpg'),
      img('xhgc9a10q89566kee3xewg2tdxbu_shutterstock_245037472.jpg')
    ],
    dayImages: {
      1: [
        img('s0s1j9k7ol91rdwi77ystaof4uzo_48126669936_084ba4982e_o.jpg'),
        img('7v0pb5achz6hdl8vmiejhfx5ocg9_1617352304_Shinjuku_Gyoen_National_Garden.jpg'),
        img('ejlal61lfumsj0l0z7i6juuw632n_download%20-%202024-07-24T125745.440.jpeg'),
        img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg')
      ],
      2: [
        img('hp0kny0xrkm2btr6upvie1fg78eg_dl.beatsnoop.com-MN471ZkJDy.jpg'),
        img('ea2mjqt2vr1hf62yek9bq6q7or9i_28330748537_9b6c02ea22_o.jpg'),
        img('iele7cut7wosbp83440c5yyy4663_shutterstock_666196894.jpg'),
        img('l2ve6s75yoif0uquecbp9gh6poh6_Screenshot%202022-09-21%20164951.png')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Tokyo`,
      'Arrival at Narita or Haneda and transfer to your hotel',
      'Check in beside Shinagawa station',
      'Free time in the Shinjuku district',
      'Optional: the Tokyo Metropolitan Building viewing decks, free of charge',
      `${DAY_MARK}Day 2 · Tokyo sightseeing`,
      'Breakfast, then a guided day through the city',
      'Meiji shrine and the Imperial Palace gardens',
      'Asakusa and the Senso-ji temple lanes',
      'Evening free in Tokyo'
    ],
    accommodation: {
      name: 'Shinagawa Prince Hotel, Tokyo',
      description: '2 nights · Breakfast · Standard room · 4★ · Large four star hotel beside Shinagawa station',
      images: [
        img('juksdm4d4uxalpfogphbtkbnuamj_452647028.jpg'),
        img('pxxdo21vgwoccwr5cpcergr1cm7o_4146765bac0064142ddcb8bd67346816.webp'),
        img('50g0xjbalxykcev2kjbnio2lqk6j_452670347.jpg'),
        img('egbkrl0emlj4efnbl5rzajaxznqk_63bf688102bd4c9e354f39182a281cd9.webp'),
        img('f1fq2dtpubdly8tvhy2fxu4bkepw_472727392.jpg'),
        img('b2ygodd73sj4whnl978s00avvi0h_317258376.jpg'),
        img('hedy5783g9ry9olfdx19bbfs78c1_78534135.jpg'),
        img('qktd4se6b7iurir9cbb5hga9vzkd_317254428.jpg'),
        img('ukx5syyfa4lk8kpvupn56d4pckxk_353194714.jpg'),
        img('oxlvinlrj0e4y8c1ar7cixv6mbl1_238878743.jpg'),
        img('mxlmo04fzmzfibovfm2yhsmaj4v8_452648109.jpg'),
        img('1c2tuz0q0u0xl36vwdx4483uzp9c_9358_20020713220087906397.webp'),
        img('mwg41snxd36r40j02ghm0gs55dpg_Shinagawa-Prince-Hotel-N-Tower-Tokyo-Room.jpeg'),
        img('kx07vby2ddun6cj5s4qjb9qj5swv_aabed107ce4770f2c0b25cd53bbb5ceb.webp'),
        img('214t3iii17cz7az9fdxv77nje2ol_238877948.jpg'),
        img('qc3vo4ndk0id57bamtz52t08er0v_238877803.jpg'),
        img('r7tpqgp60zcjri52un9ydqpap5cw_472728603.jpg'),
        img('l57fdi8htglduqytrzxqpwwpytpx_452648109.jpg'),
        img('pb955b3jyfp24yh06whxy8lzp2b5_465186998.jpg')
      ]
    },
    activities: [
      {
        name: 'Tokyo sightseeing tour',
        day: 2,
        optional: false,
        image: img('hp0kny0xrkm2btr6upvie1fg78eg_dl.beatsnoop.com-MN471ZkJDy.jpg'),
        description: 'A guided day through Meiji shrine, the Imperial Palace gardens and the temple lanes of Asakusa.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Two nights by Shinagawa station, with a free first evening in Shinjuku and a guided city day after.',
      image: img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kyoto',
    dayLabel: 'Day 3',
    images: [
      img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
      img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
      img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg')
    ],
    dayImages: {
      3: [
        img('8dk1b8qlltthhe85sng9bn2y2bka_Downpic.cc-90371408.jpg'),
        img('175jjcq0s03pjbxnrgbvss1n0fyf_Fushimi%20Inari%20Taisha-1.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('j8xcq76t3o64yxmui5m4kt22wejq_52980159201_640a74d15d_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Bullet train to Kyoto`,
      'Breakfast and check out, then the bullet train west',
      'Check in on the south side of Kyoto station',
      'Kinkaku-ji, Nijo castle and Fushimi Inari with your guide',
      'Free time in the Gion lanes'
    ],
    accommodation: {
      name: 'Miyako Hotel Kyoto Hachijo, Kyoto',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel on the south side of Kyoto station',
      images: [
        img('jtqkx0sns04zp2auwnkk8zwqw0l9_329e13f626b2fc9986356d95f851a15e54fe41f7.47.9.26.3.jpg'),
        img('5qq4yva5u1oe5zt85i07cx4evcoh_8677571.jpg'),
        img('pmn8lz9opr2a2ot6ki392agsyf62_8675121.jpg'),
        img('o2jdbr9s9fmq3k000bosoykgsa3n_68244904.jpg'),
        img('elxjcnkgr3tmh841juzjwzkvpzd2_8675155.jpg'),
        img('6o0km7sckl9nqjwabllflhv3d2sh_8675135.jpg'),
        img('1vrog6b3z6oxoiqk6lalgj88vbr5_8675152.jpg'),
        img('g9vw6jwwr76x1pkrjju7hh4m6t8z_180120408.jpg'),
        img('ckno1j0ha5mz9n37zfrb4nmg9hdx_180121146.jpg'),
        img('ooil4y5nm14rmn226qeleo62o8il_8675179.jpg'),
        img('6fp0vljf1x4rxgf35fxlfzyypjuh_180120798.jpg'),
        img('iso6n8w0recypga6s1eg2s6cuhov_68345205.jpg')
      ]
    },
    activities: [
      {
        name: 'Kyoto sightseeing tour',
        day: 3,
        optional: false,
        image: img('8dk1b8qlltthhe85sng9bn2y2bka_Downpic.cc-90371408.jpg'),
        description: 'A guided afternoon through Kinkaku-ji, Nijo castle and the shrine gates of Fushimi Inari.'
      }
    ],
    program: {
      name: 'Kyoto',
      description: 'The bullet train west, a guided afternoon in the old capital and free time in the Gion lanes.',
      image: img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Osaka',
    subtitle: 'Osaka by way of Nara',
    dayLabel: 'Day 4',
    images: [
      img('wriotvvbfc3o6tb222ad7qf9vnlp_shutterstock_2401915617.jpg'),
      img('5d4ac52c1c7pu5k4ycnr79ifpor5_shutterstock_2324290629.jpg'),
      img('va7tu5iex0enjnq9uaqnfyufkowl_shutterstock_507147964%20(1).jpg'),
      img('i7pvmoa5sgm8ekkupu1tyd6owiiv_shutterstock_2025119165.jpg')
    ],
    dayImages: {
      4: [
        img('0i73a4odbnao38703srnghgh64w0_Todai%20Ji-1.jpg'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('567g2huih098gbwk5sfi99kn57rj_1280px-Horyu-ji_National_Treasure_World_heritage_%E5%9B%BD%E5%AE%9D%E3%83%BB%E4%B8%96%E7%95%8C%E9%81%BA%E7%94%A3%E6%B3%95%E9%9A%86%E5%AF%BA85.jpg'),
        img('xx7bbnjnmk8wnb51mbflv65nus0r_download%20-%202024-07-26T115106.515.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Nara and into Osaka`,
      'Breakfast and check out, then south by way of Nara',
      'Todai-ji and its great bronze Buddha',
      'The old timber halls of Horyu-ji',
      'Check in at Namba, evening free in Dotonbori'
    ],
    accommodation: {
      name: 'Candeo Hotels Osaka Namba, Osaka',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel at Namba with a rooftop bath',
      images: [
        img('3b6ubn4mh7mvpu4wdyxpt7dgn3mo_110712772.jpg'),
        img('jgfaty7gqezkv97ozrjnq0oxbcwm_110712617.jpg'),
        img('o5nk1igtvlsbfiyxyrg84fjjjrbd_1899389_17082409500055663951.jpg'),
        img('ighaptzb92f6plj684jqiw7srw7i_110705939.jpg'),
        img('rhv2368i2igf8pvu8fpr7o2q7zss_110700099.jpg'),
        img('apt1ggp2tbqh11lzdtgbe2gy9uyj_110712708.jpg'),
        img('3fk2uk14lryxq05g4kke7y7ufta5_151741636.jpg'),
        img('shl2i9tdmt3y3g2uy8ixi35o0uuh_110698118.jpg'),
        img('csp215ns5u65w5dtzy1wuq6y1wfp_0d8b38a731864d8a640c01e5d1b3172f.jpeg'),
        img('kgugh723eczc41ihmjtjz03s14c3_110705887.jpg'),
        img('rbe46fck3mr05hkoqo1pa4tjdy39_e3aa150c212a9d032c81d5f69871a78d.jpg'),
        img('m4raekfi1uyj1dh6jl6onjpagbkh_110712708.jpg'),
        img('gt6gpo5ak337flgzopjta765eom6_110712520.jpg'),
        img('3d6htetyeeto0165yihqpwcnbzp1_110700230.jpg'),
        img('cg35fsulrosfo4c040tft40v7ud6_110712568.jpg')
      ]
    },
    activities: [
      {
        name: 'Nara sightseeing tour',
        day: 4,
        optional: false,
        image: img('0i73a4odbnao38703srnghgh64w0_Todai%20Ji-1.jpg'),
        description: 'Todai-ji with its great bronze Buddha, the old timber halls of Horyu-ji and the deer that wander the park.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'A night at Namba, reached through Nara, with the evening free along the Dotonbori canal.',
      image: img('wriotvvbfc3o6tb222ad7qf9vnlp_shutterstock_2401915617.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Okayama',
    subtitle: 'Okayama by way of Himeji castle',
    dayLabel: 'Day 5',
    images: [
      img('7z6zke7b8kmw08mkqkclicf3rawn_shutterstock_310072442.jpg'),
      img('se7fozuzxltz0frileh5he3jkl4u_shutterstock_2359266537.jpg'),
      img('7kxl7sgilrs8qq9u4vti16qxyujm_shutterstock_2278159137.jpg'),
      img('xwlhpz82r0k90be9vsoef19qcx6k_shutterstock_1901310499.jpg')
    ],
    dayImages: {
      5: [
        img('pywrovjz6ubednfww2jsqi67etdn_himeji%20castle-2.jpg'),
        img('5ps893jtjebytutoq9v7lnrxf3y3_39146732395_f9873cc92a_o.jpg'),
        img('07akoxfpvwbgkw3gainvpqwy4gsb_kibitsu%20shrine-2.jpg'),
        img('t1l6994alcgc5dsalvrbemyrwja2_e89bcc7802d5a5f63eb6d0684b1ee014-895x600.png')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Himeji castle and Okayama`,
      'Breakfast and check out, then west to Himeji',
      'The white keep of Himeji castle',
      'Korakuen garden and Okayama castle',
      'Night by the station in Okayama'
    ],
    accommodation: {
      name: 'Mitsui Garden Hotel Okayama, Okayama',
      description: '1 night · Breakfast · Standard room · 3★ · Comfortable hotel by Okayama station',
      images: [
        img('29flphb13s49m1qgwc96ca9d1ovc_download%20-%202024-07-19T123702.193.jpg'),
        img('lt8oggxob1aw343ia462rbm2boat_download%20-%202024-07-19T123800.690.jpg'),
        img('h4xg6jdsatvbw05u4zn50thoo4b7_download%20-%202024-07-19T123732.501.jpg'),
        img('x52t91rflu97k2s71uoc8cuigdkw_download%20-%202024-07-19T123720.451.jpg'),
        img('jj014fjan7zg0zfy4c8femzs5sa8_download%20-%202024-07-19T123749.546.jpg'),
        img('8wc5w0ay2xt3ebcm99rgyzee1vl9_download%20-%202024-07-19T123807.914.jpg'),
        img('p9r6aqyype5xpt1jlll0q4gmamm7_download%20-%202024-07-19T123714.766.jpg'),
        img('8tr7a9kmpiknw3hcd8igofyyo49c_download%20-%202024-07-19T123814.840.jpg'),
        img('ntniyuajd3gz31yf46bgqwtl0f9d_download%20-%202024-07-19T123821.062.jpg'),
        img('x7tsrsz5u9gyqgt8jp8n2lpr2z50_download%20-%202024-07-19T123741.098.jpg')
      ]
    },
    activities: [
      {
        name: 'Himeji castle',
        day: 5,
        optional: false,
        image: img('pywrovjz6ubednfww2jsqi67etdn_himeji%20castle-2.jpg'),
        description: 'The white heron castle, the finest surviving fortress in the country, with its maze of gates and its timber keep.'
      },
      {
        name: 'Okayama sightseeing tour',
        day: 5,
        optional: false,
        image: img('07akoxfpvwbgkw3gainvpqwy4gsb_kibitsu%20shrine-2.jpg'),
        description: 'Korakuen, one of the three great gardens of Japan, and the black keep of Okayama castle beside it.'
      }
    ],
    program: {
      name: 'Okayama',
      description: 'A night by the station, with Himeji castle on the way and Korakuen garden in the afternoon.',
      image: img('7z6zke7b8kmw08mkqkclicf3rawn_shutterstock_310072442.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Hiroshima',
    subtitle: 'Hiroshima and Miyajima',
    dayLabel: 'Day 6',
    images: [
      img('nd48tylxzfdkb788tdezsrfcdr24_shutterstock_1673742691.jpg'),
      img('urexlkfkvz3whbtfb3k0rk3iu9rn_shutterstock_1618153279.jpg'),
      img('x9owl2scq3hb16f3uozoizxytn8b_shutterstock_2243167709.jpg'),
      img('u8rryut2rpcx72ify5pfq7slfshl_shutterstock_2243167707.jpg')
    ],
    dayImages: {
      6: [
        img('5ee8e3f4kfezq1689owuty5s0irs_Bikan%20Historical%20Quarter-3.jpg'),
        img('5ynvo4s2weyv9vw48a65xd5nvuzo_download%20-%202024-07-26T114742.039.jpeg'),
        img('abo79vxmj6d6rw9dpvayggkd54bb_5751_01.jpg'),
        img('fz9kzxqj1jctgtw9hlqcgg6iabk8_Hiroshima%20City%20Tour-5.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Kurashiki, Hiroshima and Miyajima`,
      'Breakfast, then the canal quarter of Kurashiki',
      'A walking tour of the Hiroshima peace park and museum',
      'The ferry to Miyajima and Itsukushima shrine',
      'Night in Hiroshima'
    ],
    accommodation: {
      name: 'Hilton Hiroshima, Hiroshima',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel in the city centre',
      images: [
        img('hp61ibd5hgobhzes6z3imqzmn4m5_3k%20barcelona01%20(14).jpg'),
        img('320cbq9z1idbcdla3gipvuhaj5uy_3k%20barcelona19%20(8).jpg'),
        img('9i9j9nitlpor0eu2dnanm6hlerrp_3k%20barcelona11%20(13).jpg'),
        img('k1gvow4nu5ejn9yubxqfzw6orpho_3k%20barcelona18%20(10).jpg'),
        img('7h656rt7sfzydcr6gw8way5dzegk_3k%20barcelona12%20(13).jpg'),
        img('glt7pskarwt326r8xvn9qkv84m0z_3k%20barcelona15%20(11).jpg'),
        img('wch21va5kf1i5w017xumvf8dlrjx_3k%20barcelona13%20(11).jpg'),
        img('2kvdpr20wu8h5z6ymxjhmcudbte7_498853844.jpg'),
        img('pfi0ih7yjtoqu8t0t62mnm3qyuuu_3k%20barcelona10%20(14).jpg'),
        img('w5kgnuglbbo1q9e7wp1tbv90pj40_498853860.jpg'),
        img('cknhz7pty6rahevibriv4zehpfe2_3k%20barcelona16%20(10).jpg'),
        img('7ig3ce4q0c6fh2ms6wf9q6xo9tio_498853868.jpg'),
        img('zmtrl268yu5i7vedxxs2pp7oldy8_498853896.jpg'),
        img('3wjz9s964nfmdugqnanrbiri920m_.jpeg'),
        img('3d93tg915oigq0rhw6woc4787e4v_498853894.jpg'),
        img('23yx3zb7yzl1e2qfvgtcc1wyz6g3_498853852.jpg')
      ]
    },
    activities: [
      {
        name: 'Kurashiki canal quarter',
        day: 6,
        optional: false,
        image: img('5ee8e3f4kfezq1689owuty5s0irs_Bikan%20Historical%20Quarter-3.jpg'),
        description: 'Free time in the white walled merchant quarter of Kurashiki, where willow trees lean over a stone lined canal.'
      },
      {
        name: 'Hiroshima walking tour',
        day: 6,
        optional: false,
        image: img('fz9kzxqj1jctgtw9hlqcgg6iabk8_Hiroshima%20City%20Tour-5.jpg'),
        description: 'The peace park, the dome left standing after 1945 and the memorial museum, on foot with a guide.'
      },
      {
        name: 'Itsukushima shrine at Miyajima',
        day: 6,
        optional: false,
        image: img('68derrdx1q14c2fnm3lyyizdl6jc_Itsukushima%20Shrine-7.jpg'),
        description: 'The ferry across to Miyajima and the vermilion gate that stands in the water in front of the shrine.'
      }
    ],
    program: {
      name: 'Hiroshima',
      description: 'A full day through Kurashiki, the peace park and the island shrine at Miyajima, with a night in the city.',
      image: img('nd48tylxzfdkb788tdezsrfcdr24_shutterstock_1673742691.jpg')
    }
  },
  {
    letter: 'F',
    name: 'Matsuyama',
    dayLabel: 'Day 7',
    images: [
      img('f4xtclyb43occot7k4kf89zt870u_shutterstock_2458718483.jpg')
    ],
    dayImages: {
      7: [
        img('q4o9dml4ooits342yjzmp4o854wd_Matsuyama%20Castle-2.jpg'),
        img('howq6lgftr4zl60ptlz9y3ndxdv4_Matsuyama_castle(Iyo)11.jpg'),
        img('djh8qnccmqo2exgcidm53057bdp4_Downpic.cc-image350958380.jpg'),
        img('89h1x7ufzkua7336t9c9z6vnoam4_5503_11.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Across to Matsuyama`,
      'Breakfast and check out, then across to Shikoku',
      'A cable car up to Matsuyama castle',
      'Ishite-ji, a temple on the Shikoku pilgrimage',
      'The old timber bath house at Dogo Onsen'
    ],
    accommodation: {
      name: 'ANA Crowne Plaza Matsuyama, Matsuyama',
      description: '1 night · Breakfast · Standard room · 3★ · Comfortable hotel in the middle of Matsuyama',
      images: [
        img('rz1jf5p3urjjuh361hsd4jf652hy_335179831.jpg'),
        img('fmr9o1k7b2wh4bswx3s1te0ubxoj_340140402.jpg'),
        img('cvp7fijunvx5mjto36s5z6zwsw7u_caption%20(18).jpg'),
        img('by736dcfcjq0yuu9vxynfucgdwom_guest-bathroom%20(1).jpg'),
        img('347i8ucsi3720eefzgg0szzl6d1j_340140395.jpg'),
        img('y0tuhwg8vh1o41oi9eo1fgevfzq8_340139054.jpg'),
        img('vnll8iqyfa6szeujbxtw3jirne26_caption%20(20).jpg'),
        img('cxiu1dvmitcc571y8n2ouri9zbhy_tea-lounge.jpg'),
        img('x1i8x6gwf9hc1v9xga0wz2og9fq4_489159564.jpg'),
        img('6c6q6y71lm6q78fxstite823rmew_guest-bathroom.jpg'),
        img('am70trux4wb5x534y5x9kgyuehg6_340139015.jpg'),
        img('lzkqfec5egq8shas4makpntjy7rp_guest-room%20(2).jpg'),
        img('s9ig8uqm8xajngtm4k3zvlcsbfvw_provence-bar.jpg'),
        img('fmt9qc1axuipohrfln3s4q0334ce_caption%20(19).jpg'),
        img('u1991fnweah04iizfmq4pbnhq17a_96850838.jpg')
      ]
    },
    activities: [
      {
        name: 'Matsuyama castle with the cable car',
        day: 7,
        optional: false,
        image: img('q4o9dml4ooits342yjzmp4o854wd_Matsuyama%20Castle-2.jpg'),
        description: 'A cable car up the hill to one of the twelve original castle keeps left in the country, with the Inland Sea below.'
      },
      {
        name: 'Ishite-ji temple',
        day: 7,
        optional: false,
        image: img('djh8qnccmqo2exgcidm53057bdp4_Downpic.cc-image350958380.jpg'),
        description: 'One of the eighty eight temples on the Shikoku pilgrimage, with its old gate and pilgrims in white.'
      },
      {
        name: 'Dogo Onsen bath house',
        day: 7,
        optional: false,
        image: img('vjd4kwb37uymol6levs32w8c40qk_Downpic.cc-image552128735.jpg'),
        description: 'The oldest hot spring in the country, a timber bath house with a wooden tower that inspired the bath in Spirited Away.'
      }
    ],
    program: {
      name: 'Matsuyama',
      description: 'Across the Inland Sea to Shikoku for the castle by cable car, a pilgrimage temple and the old Dogo bath house.',
      image: img('f4xtclyb43occot7k4kf89zt870u_shutterstock_2458718483.jpg')
    }
  },
  {
    letter: 'G',
    name: 'Kobe',
    subtitle: 'Kobe by way of Kotohira and Naruto',
    dayLabel: 'Day 8',
    images: [
      img('8uuox865tub290elo74ceud875pg_shutterstock_2394438103.jpg'),
      img('h3macot4xadpbfjprm5mxxfegn9z_shutterstock_2445535391.jpg')
    ],
    dayImages: {
      8: [
        img('ylf93q9dtn8kyvirwslpw4nknjfr_Downpic.cc-image221351205.jpg'),
        img('pj27lkbds0vag55377f9t0kapbdo_xgNHQvFDuD6wHTYxvznjHqa4jC1H2OnJqnDJAScY__1597_1065.png'),
        img('niw86i1a8r1u1szdy86zzg506wbs_7802055432_10eee8a1e2_o.jpg'),
        img('duxfuprgejj3yh3v9ht8biirrbhl_27331245833_6ff269312b_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · Kotohira, Naruto and Kobe`,
      'Breakfast, then north towards Kobe',
      'Kotohira shrine and the pines of Ritsurin garden',
      'The glass walkway over the Naruto whirlpools',
      'Check in on the harbour pier at Kobe'
    ],
    accommodation: {
      name: 'Kobe Meriken Park Oriental Hotel, Kobe',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel on the harbour pier at Meriken park',
      images: [
        img('cl9qrs58a0khqaianqjp7h5772f8_Kobe%201903%20Part04-12.jpg'),
        img('bcwwua046a9ubiski1c0zchgyif7_f1b1bbe193006797ced41975375909c3bd750dc9.47.9.26.3.jpg'),
        img('317j4brlbdng3dmoydkja6ec88f9_387388798.jpg'),
        img('l3sr9vux4fspkxxw34lt2t1107i2_447296066.jpg'),
        img('1hzivb8ctoge0818bp3i9yy5qvyq_216509639.jpg'),
        img('u2vxh08w7rmde0tnve2sg26gvyry_72716551.jpg'),
        img('3a4b0ams9j4u1t4df3j45ci6jhrj_168962906.jpg'),
        img('a1svdb5n7cv6uwenw6i2zckl82pr_kobe-meriken-park-oriental-hotel-general-b99ceca.jpg'),
        img('astj2v1xwqierk3i8ttpzn3av0bg_489141983.jpg'),
        img('56r78ol2q9dl7zegu5cktxl9373i_438253151.jpg'),
        img('y9zcqtvtz07ti04xr74lnkyhtja9_331478833.jpg'),
        img('l13z0n2nurppvchr2krrxec216y0_347056824.jpg'),
        img('lzq3175qbzvqdwjqk3z833k655kh_190b1fdc03d62d7eb197fbcdc99a1811.webp'),
        img('rqegd5fob0x91s3jiuhb5cua2hpx_Kobe-Meriken-Park-Oriental-Hotel-1200x801.jpeg'),
        img('yngqt5p0d4qzt1idwhjg395ifcy4_438253168.jpg'),
        img('dqqlbumq9ihuwioqf4s78ap9iklx_387389337.jpg'),
        img('oewt04asvbaccesvbm40dcfdifwn_493183639.jpg'),
        img('n24ttzf42ewsvmzdmeqvqxzns3g4_438253167.jpg')
      ]
    },
    activities: [
      {
        name: 'Kotohira shrine, Ritsurin garden and Uzu no Michi',
        day: 8,
        optional: false,
        image: img('ylf93q9dtn8kyvirwslpw4nknjfr_Downpic.cc-image221351205.jpg'),
        description: 'The hillside shrine at Kotohira, the pine garden of Ritsurin and the glass floored walkway over the Naruto whirlpools.'
      }
    ],
    program: {
      name: 'Kobe',
      description: 'A night on the harbour pier, reached through Kotohira, Ritsurin garden and the Naruto whirlpools.',
      image: img('8uuox865tub290elo74ceud875pg_shutterstock_2394438103.jpg')
    }
  },
  {
    letter: 'H',
    name: 'Mount Koya',
    dayLabel: 'Day 9',
    images: [
      img('snn4hj8wbtbpfk6y6ldinpgqqxp0_shutterstock_2361467667.jpg'),
      img('zrac2ukzr86amgoq81iseyrhwcjw_shutterstock_2433421145.jpg')
    ],
    dayImages: {
      9: [
        img('iqh26linzs09lrbxfxw8mp3ms42r_Downpic.cc-image260430661.jpg'),
        img('0d9yh3vrgei529q2mrevv4k3kcvl_bosai_center_6.jpg'),
        img('bkf66hpvpsn0aekuyt1a4bj622li_Downpic.cc-21591076.jpg'),
        img('y7dv96ubyq5kg9vzzb0qyel5i8ot_Kongobuji_Koyasan01n4272.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 9 · Up to Mount Koya`,
      'Breakfast, then the Kobe earthquake memorial museum',
      'On to Mount Koya in the afternoon',
      'The Okunoin cemetery under its cedars',
      'Night in a working temple, with its hot spring bath'
    ],
    accommodation: {
      name: 'Fukuchi-in Temple, Koyasan',
      description: '1 night · Breakfast · Temple room · 3★ · Working temple lodging on Mount Koya, with its own hot spring bath',
      images: [
        img('oge03v1em5noxmord74o4mzxsl0f_10183216.jpg'),
        img('fl2c5h220bbdvhdh84pmcy5h25an_about_img006.jpg'),
        img('bwqsbesptpev3ykkli7nzjdelw5r_14282387.jpg'),
        img('u1gvt78xnd81oyt0wc2yrmv1lz07_142881610.jpg'),
        img('wptsl40ekxgjsq8c35eem8nlcq3p_10211992.jpg'),
        img('fy5eozly1ll1ipjupam8nx9o65th_10183242.jpg'),
        img('3046ja5prh70l9tsrd58tlhmbxo7_10183229.jpg'),
        img('jo69evtu4mw0aeih2tgxkyzqwdiy_237220005.jpg'),
        img('21p9pfu9vyklvodn5v39q2xwgrn2_10183225.jpg'),
        img('g3gjp8x7zr3hxk1cds05m6jam39p_shukubo_img008.jpg'),
        img('r7q78jwm72hhghvh2n5pkn1fvaz9_142876916.jpg'),
        img('2qttzms642gn39p7egrmy6y5oeey_shukubo_img007.jpg'),
        img('fopbavrr58bo0087xpz63jksqeh6_10183218.jpg')
      ]
    },
    activities: [
      {
        name: 'Kobe earthquake memorial museum',
        day: 9,
        optional: false,
        image: img('iqh26linzs09lrbxfxw8mp3ms42r_Downpic.cc-image260430661.jpg'),
        description: 'The museum built after the 1995 earthquake, which recreates the morning it struck and how the city was rebuilt.'
      },
      {
        name: 'Mount Koya sightseeing tour',
        day: 9,
        optional: false,
        image: img('bkf66hpvpsn0aekuyt1a4bj622li_Downpic.cc-21591076.jpg'),
        description: 'The Okunoin cemetery under its cedars, the Danjo Garan halls and the gate at Daimon, on the mountain where Shingon Buddhism began.'
      }
    ],
    program: {
      name: 'Mount Koya',
      description: 'Up the mountain for a night in a working temple, with the Okunoin cemetery and the Danjo Garan halls.',
      image: img('snn4hj8wbtbpfk6y6ldinpgqqxp0_shutterstock_2361467667.jpg')
    }
  },
  {
    letter: 'I',
    name: 'Kyoto',
    subtitle: 'Back to Kyoto',
    dayLabel: 'Day 10 to 11',
    images: [
      img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
      img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
      img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg')
    ],
    dayImages: {
      10: [
        img('nw809kt3nky9u7tvyxvc76ue98gy_JF4_063392.jpg'),
        img('dhue0icv67z5ii0lvwqb2w29i16b_gettyimages-509472000_tx4UVEk.jpg'),
        img('b5y5t6gjtt7xrf6kxqmvvzh8bpgz_Maru.jpg'),
        img('182vibmg4qqlf60do26572d7lrlg_Kyoto-Arashiyama-Bamboo-Grove1-SH.jpg')
      ],
      11: [
        img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
        img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
        img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
        img('xiv001fjlk7gejyjrhc8yr257py7_shutterstock_302426174.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 10 · A free day in Kyoto`,
      'Breakfast at the temple, then down to Kyoto',
      'Check in and the rest of the day free',
      'Optional: the bamboo grove at Arashiyama',
      'Optional: Kiyomizu-dera and the Higashiyama lanes',
      `${DAY_MARK}Day 11 · Departure from Kyoto`,
      'Breakfast at the hotel and check out',
      'Private transfer to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'Miyako Hotel Kyoto Hachijo, Kyoto',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel on the south side of Kyoto station',
      images: [
        img('jtqkx0sns04zp2auwnkk8zwqw0l9_329e13f626b2fc9986356d95f851a15e54fe41f7.47.9.26.3.jpg'),
        img('5qq4yva5u1oe5zt85i07cx4evcoh_8677571.jpg'),
        img('pmn8lz9opr2a2ot6ki392agsyf62_8675121.jpg'),
        img('o2jdbr9s9fmq3k000bosoykgsa3n_68244904.jpg'),
        img('elxjcnkgr3tmh841juzjwzkvpzd2_8675155.jpg'),
        img('6o0km7sckl9nqjwabllflhv3d2sh_8675135.jpg'),
        img('1vrog6b3z6oxoiqk6lalgj88vbr5_8675152.jpg'),
        img('g9vw6jwwr76x1pkrjju7hh4m6t8z_180120408.jpg'),
        img('ckno1j0ha5mz9n37zfrb4nmg9hdx_180121146.jpg'),
        img('ooil4y5nm14rmn226qeleo62o8il_8675179.jpg'),
        img('6fp0vljf1x4rxgf35fxlfzyypjuh_180120798.jpg'),
        img('iso6n8w0recypga6s1eg2s6cuhov_68345205.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Kyoto',
      description: 'Down from the mountain for a last free day in Kyoto before the flight home.',
      image: img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg')
    }
  }
];

const detail = {
  slug: 'japan-legends-with-a-temple-stay',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Japan Legends with a Temple Stay',
  alt: 'Lantern lined path at a temple on Mount Koya, Japan',
  days: '11 days / 10 nights',
  stations: '9 stops',
  transport: 'Bullet trains, a ferry crossing and guided sightseeing',
  tag: 'Grand tour',
  tags: ['Culture', 'Grand tour'],
  price: 221009,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Kyoto', 'Nara', 'Osaka', 'Okayama', 'Hiroshima', 'Matsuyama', 'Kobe', 'Mount Koya'],
  stats: { days: 11, cities: 8, hotels: 8, activities: 14, transfers: 20 },
  gallery: heroGallery,
  services: [
    ['8 hotels', 'Accommodation'],
    ['14 experiences', 'Activities'],
    ['20 transfers', 'Transport'],
    ['10 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'The night on Mount Koya in a working temple is the part people talk about afterwards, not the castles.',
    quoteMore: 'Set an alarm on the mountain. The monks hold the morning fire ritual just after six and guests are welcome to sit in.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eleven days down the Inland Sea and across to Shikoku, finishing on a sacred mountain: Tokyo and Kyoto, Nara and Osaka, Himeji castle, Korakuen garden, the Hiroshima peace park and Miyajima, Matsuyama castle with Dogo Onsen, the Naruto whirlpools, and a night in a temple on Mount Koya.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 10 nights with daily breakfast, including a night in a temple lodging on Mount Koya; bullet trains and the crossing to Shikoku; private airport transfers; guided sightseeing in Tokyo and in Kyoto; a guided day through Nara; Himeji castle; guided sightseeing in Okayama; Kurashiki, a walking tour of the Hiroshima peace park and the island shrine at Miyajima; Matsuyama castle with the cable car, Ishite-ji and Dogo Onsen; Kotohira, Ritsurin garden and the Naruto walkway; the Kobe earthquake memorial museum; a guided tour of Mount Koya.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in beside Shinagawa station\nFree time in the Shinjuku district\nOptional: the Tokyo Metropolitan Building viewing decks, free of charge', hotel: 'Shinagawa Prince Hotel', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in beside Shinagawa station', 'Free time in the Shinjuku district'] },
    { title: 'Day 2: Tokyo sightseeing (B)', text: 'Breakfast, then a guided day through the city\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in Tokyo', hotel: 'Shinagawa Prince Hotel', highlights: ['Breakfast, then a guided day through the city', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Bullet train to Kyoto (B)', text: 'Breakfast and check out, then the bullet train west\nCheck in on the south side of Kyoto station\nKinkaku-ji, Nijo castle and Fushimi Inari with your guide\nFree time in the Gion lanes', hotel: 'Miyako Hotel Kyoto Hachijo', highlights: ['Breakfast and check out, then the bullet train west', 'Check in on the south side of Kyoto station', 'Kinkaku-ji, Nijo castle and Fushimi Inari with your guide'] },
    { title: 'Day 4: Nara and into Osaka (B)', text: 'Breakfast and check out, then south by way of Nara\nTodai-ji and its great bronze Buddha\nThe old timber halls of Horyu-ji\nCheck in at Namba, evening free in Dotonbori', hotel: 'Candeo Hotels Osaka Namba', highlights: ['Breakfast and check out, then south by way of Nara', 'Todai-ji and its great bronze Buddha', 'The old timber halls of Horyu-ji'] },
    { title: 'Day 5: Himeji castle and Okayama (B)', text: 'Breakfast and check out, then west to Himeji\nThe white keep of Himeji castle\nKorakuen garden and Okayama castle\nNight by the station in Okayama', hotel: 'Mitsui Garden Hotel Okayama', highlights: ['Breakfast and check out, then west to Himeji', 'The white keep of Himeji castle', 'Korakuen garden and Okayama castle'] },
    { title: 'Day 6: Kurashiki, Hiroshima and Miyajima (B)', text: 'Breakfast, then the canal quarter of Kurashiki\nA walking tour of the Hiroshima peace park and museum\nThe ferry to Miyajima and Itsukushima shrine\nNight in Hiroshima', hotel: 'Hilton Hiroshima', highlights: ['Breakfast, then the canal quarter of Kurashiki', 'A walking tour of the Hiroshima peace park and museum', 'The ferry to Miyajima and Itsukushima shrine'] },
    { title: 'Day 7: Across to Matsuyama (B)', text: 'Breakfast and check out, then across to Shikoku\nA cable car up to Matsuyama castle\nIshite-ji, a temple on the Shikoku pilgrimage\nThe old timber bath house at Dogo Onsen', hotel: 'ANA Crowne Plaza Matsuyama', highlights: ['Breakfast and check out, then across to Shikoku', 'A cable car up to Matsuyama castle', 'Ishite-ji, a temple on the Shikoku pilgrimage'] },
    { title: 'Day 8: Kotohira, Naruto and Kobe (B)', text: 'Breakfast, then north towards Kobe\nKotohira shrine and the pines of Ritsurin garden\nThe glass walkway over the Naruto whirlpools\nCheck in on the harbour pier at Kobe', hotel: 'Kobe Meriken Park Oriental Hotel', highlights: ['Breakfast, then north towards Kobe', 'Kotohira shrine and the pines of Ritsurin garden', 'The glass walkway over the Naruto whirlpools'] },
    { title: 'Day 9: Up to Mount Koya (B)', text: 'Breakfast, then the Kobe earthquake memorial museum\nOn to Mount Koya in the afternoon\nThe Okunoin cemetery under its cedars\nNight in a working temple, with its hot spring bath', hotel: 'Fukuchi-in Temple', highlights: ['Breakfast, then the Kobe earthquake memorial museum', 'On to Mount Koya in the afternoon', 'The Okunoin cemetery under its cedars'] },
    { title: 'Day 10: A free day in Kyoto (B)', text: 'Breakfast at the temple, then down to Kyoto\nCheck in and the rest of the day free\nOptional: the bamboo grove at Arashiyama\nOptional: Kiyomizu-dera and the Higashiyama lanes', hotel: 'Miyako Hotel Kyoto Hachijo', highlights: ['Breakfast at the temple, then down to Kyoto', 'Check in and the rest of the day free', 'Optional: the bamboo grove at Arashiyama'] },
    { title: 'Day 11: Departure from Kyoto (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const japanLegendsTempleStayBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const japanLegendsTempleStayProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Kyoto', 'Nara', 'Osaka', 'Okayama', 'Hiroshima', 'Matsuyama', 'Kobe', 'Mount Koya'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 11,
  stops: 9,
  hotels: 8,
  cities: 8,
  activities: 14,
  transfers: 20,
  meals: 10,
  price: detail.price,
  images: cardImages
};
