// Japan Cultural Tales: Tokyo to Hiroshima. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('whkp4azssrlsyr0rofdwlnikzki2_shutterstock_517903198.jpg'),
  img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
  img('kttil6ut49ym2i5xxgnx6cu72osn_shutterstock_630286787.jpg'),
  img('73svf06vwzmwzz5c9z7jwb9v8vjw_shutterstock_1751063663.jpg'),
  img('yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg'),
  img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
  img('yfbvuqj5t7yyjle11bzesj245xnj_shutterstock_1024764949%20(1).jpg'),
  img('c9ok8ge217o8e2npis737wjs3zbi_shutterstock_1220336509%20(2).jpg'),
  img('zcclccnpnk2b78cy9usi5x5zdoyk_shutterstock_666197236.jpg'),
  img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('whkp4azssrlsyr0rofdwlnikzki2_shutterstock_517903198.jpg'),
  img('kttil6ut49ym2i5xxgnx6cu72osn_shutterstock_630286787.jpg'),
  img('73svf06vwzmwzz5c9z7jwb9v8vjw_shutterstock_1751063663.jpg'),
  img('c9ok8ge217o8e2npis737wjs3zbi_shutterstock_1220336509%20(2).jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    dayLabel: 'Day 1 to 2',
    images: [
      img('whkp4azssrlsyr0rofdwlnikzki2_shutterstock_517903198.jpg'),
      img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg'),
      img('8a1guib4pdk1t3rfaoo9h6fki7xm_shutterstock_637507525.jpg'),
      img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('7v0pb5achz6hdl8vmiejhfx5ocg9_1617352304_Shinjuku_Gyoen_National_Garden.jpg'),
        img('s0s1j9k7ol91rdwi77ystaof4uzo_48126669936_084ba4982e_o.jpg'),
        img('whkp4azssrlsyr0rofdwlnikzki2_shutterstock_517903198.jpg'),
        img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg')
      ],
      2: [
        img('px8ztl5hu8ndc79zbizj3gdg61ac_h1kmolbb09a2ko214nbg7e878t1c_asakusa.jpg'),
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
      'Evening at your own pace',
      `${DAY_MARK}Day 2 · Tokyo sightseeing`,
      'Breakfast, then a guided day through Tokyo',
      'Meiji shrine and the Imperial Palace gardens',
      'Asakusa and the Senso-ji temple lanes',
      'Evening free in the city'
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
        image: img('px8ztl5hu8ndc79zbizj3gdg61ac_h1kmolbb09a2ko214nbg7e878t1c_asakusa.jpg'),
        description: 'A guided day through the city, from the Meiji shrine and the Imperial Palace gardens to the old temple lanes of Asakusa.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Two nights beside Shinagawa station, with free time in Shinjuku and a full guided city day.',
      image: img('whkp4azssrlsyr0rofdwlnikzki2_shutterstock_517903198.jpg')
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
        img('6mzr0i6h4hejvkxjkavuc11c7nol_blxtngeysogyt96s00x7e7p3mgwa_Downpic.cc-92896660%20(1).jpg'),
        img('175jjcq0s03pjbxnrgbvss1n0fyf_Fushimi%20Inari%20Taisha-1.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('j8xcq76t3o64yxmui5m4kt22wejq_52980159201_640a74d15d_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Bullet train to Kyoto`,
      'Breakfast and check out, then the bullet train west',
      'Check in opposite Kyoto station',
      'A guided afternoon through the old capital',
      'Free time in the Gion lanes in the evening'
    ],
    accommodation: {
      name: 'Miyako Hotel Kyoto Hachijo, Kyoto',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel opposite Kyoto station, handy for the trains',
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
        image: img('6mzr0i6h4hejvkxjkavuc11c7nol_blxtngeysogyt96s00x7e7p3mgwa_Downpic.cc-92896660%20(1).jpg'),
        description: 'A guided day through the old capital, taking in the golden pavilion, a Zen garden and the torii gate paths above Fushimi.'
      }
    ],
    program: {
      name: 'Kyoto',
      description: 'A night in the old capital with a guided afternoon and free time in the Gion lanes.',
      image: img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Osaka',
    subtitle: 'Osaka to Nara',
    dayLabel: 'Day 4',
    images: [
      img('ex1tslqukb3q5nhoyy35nitmlfbw_shutterstock_1322129618%20(1).jpg'),
      img('i9klbfl00zb48dsdbko8ioz88wzx_shutterstock_513091054.jpg'),
      img('kttil6ut49ym2i5xxgnx6cu72osn_shutterstock_630286787.jpg'),
      img('ptkkqebz4mj100bzruqlj5xbdczr_shutterstock_2268784351.jpg')
    ],
    dayImages: {
      4: [
        img('b0ibv83gne8wc69mtvqi1mkfhe21_dl.beatsnoop.com-hFOCi8Km3Y.jpg'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('567g2huih098gbwk5sfi99kn57rj_1280px-Horyu-ji_National_Treasure_World_heritage_%E5%9B%BD%E5%AE%9D%E3%83%BB%E4%B8%96%E7%95%8C%E9%81%BA%E7%94%A3%E6%B3%95%E9%9A%86%E5%AF%BA85.jpg'),
        img('nozs79tjbgfixymgrh3voo9bhf1z_Osaka_Dotonbori_Ebisu_Bridge.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Nara and on to Osaka`,
      'Breakfast and check out, then on to Nara',
      'Todai-ji and its great bronze Buddha',
      'The lantern lined Kasuga shrine and the deer park',
      'Check in at Namba in Osaka'
    ],
    accommodation: {
      name: 'Candeo Hotels Osaka Namba, Osaka',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel in Namba with a rooftop bath house',
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
        image: img('b0ibv83gne8wc69mtvqi1mkfhe21_dl.beatsnoop.com-hFOCi8Km3Y.jpg'),
        description: 'Todai-ji with its great bronze Buddha, the lantern lined Kasuga shrine and the deer park on the walk between them.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'A night in Namba, reached through Nara\'s temples and deer park, with the food streets on your doorstep.',
      image: img('ex1tslqukb3q5nhoyy35nitmlfbw_shutterstock_1322129618%20(1).jpg')
    }
  },
  {
    letter: 'D',
    name: 'Okayama',
    subtitle: 'Okayama to Himeji',
    dayLabel: 'Day 5',
    images: [
      img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg'),
      img('yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg'),
      img('61izsuekzybkh86q2bvapmbmyrlt_shutterstock_355725083.jpg'),
      img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg')
    ],
    dayImages: {
      5: [
        img('5ncg8z9z8720z62sxf3e6mz6kx5z_dl.beatsnoop.com-tAEjrnDRWF.jpg'),
        img('jhxck1eq6p1pciluyl0a55mcbbkz_dl.beatsnoop.com-grhDtJC4c9.jpg'),
        img('t1l6994alcgc5dsalvrbemyrwja2_e89bcc7802d5a5f63eb6d0684b1ee014-895x600.png'),
        img('lhmump9ykz9vx56zqfeb99s18p4y_49667304008_75532b9f86_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Himeji castle and Okayama`,
      'Breakfast, then west along the inland sea',
      'Himeji castle, the white heron keep',
      'The Korakuen garden and Okayama castle',
      'Check in at your Okayama hotel'
    ],
    accommodation: {
      name: 'ANA Crowne Plaza Okayama, Okayama',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel in central Okayama, near the Korakuen garden',
      images: [
        img('3225qxmfpce7i1cq48gbzvqhy4z0_3k%20barcelona04%20(24).jpg'),
        img('kmpwjdfbjo1o9qq2wdwdccrobpt9_3k%20barcelona08%20(23).jpg'),
        img('p2lsh2jt4ildukijyfywkn2u5mj2_3k%20barcelona11%20(23).jpg'),
        img('r8vopvilxlbilmrl2elmis6nr68k_japanese-suite-room.jpg'),
        img('s61z986wce39mxofaqw2e7s8fsts_252435419.jpg'),
        img('zb7zs877b8pl9au9bl2k5mxwr8yu_273382784.jpg'),
        img('7h44mi1fc72jt3hhwgu8nin4cxpf_3k%20barcelona05%20(24).jpg'),
        img('dv4pfbgv2q6j0cjup1shp0mlpkb6_guest-room.jpg'),
        img('jmi3yaukta85ar3ah5fdfrlnl3ov_252435427.jpg'),
        img('hf7zr8qmaoc1wxnp6twtm6wgg4sa_3k%20barcelona06%20(23).jpg'),
        img('iex1l4gg2dk9ydcn63suoxpm8uln_guest-bathroom.jpg'),
        img('k263gff6mbif6jqns8lxvlp7el05_guest-room%20(1).jpg'),
        img('oaxx898olbxz8rm50dku06wkaclw_247102160.jpg')
      ]
    },
    activities: [
      {
        name: 'Himeji castle',
        day: 5,
        optional: false,
        image: img('5ncg8z9z8720z62sxf3e6mz6kx5z_dl.beatsnoop.com-tAEjrnDRWF.jpg'),
        description: 'The white heron castle, the finest surviving fortress in Japan and the first site here to be listed by UNESCO.'
      },
      {
        name: 'Okayama sightseeing tour',
        day: 5,
        optional: false,
        image: img('jhxck1eq6p1pciluyl0a55mcbbkz_dl.beatsnoop.com-grhDtJC4c9.jpg'),
        description: 'The Korakuen garden, counted among the three great gardens of Japan, and the black keep of Okayama castle beside it.'
      }
    ],
    program: {
      name: 'Okayama',
      description: 'A night in Okayama, with Himeji castle on the way west and the Korakuen garden in the afternoon.',
      image: img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Hiroshima',
    subtitle: 'Hiroshima to Kurashiki and Miyajima',
    dayLabel: 'Day 6 to 7',
    images: [
      img('c4gf43u778lus6u4vyt90r6jtn6e_shutterstock_1158621913.jpg'),
      img('fhk5y0ixfiuabs0dtpeqow4love0_shutterstock_1514039861.jpg'),
      img('s5n4t57ymv7th4yg1bqkxh3xe7gn_shutterstock_1514003930.jpg'),
      img('73svf06vwzmwzz5c9z7jwb9v8vjw_shutterstock_1751063663.jpg')
    ],
    dayImages: {
      6: [
        img('i32qu2mlgq197643r9o9mnzy9d47_dl.beatsnoop.com-icFWIzfA70.jpg'),
        img('5ynvo4s2weyv9vw48a65xd5nvuzo_download%20-%202024-07-26T114742.039.jpeg'),
        img('abo79vxmj6d6rw9dpvayggkd54bb_5751_01.jpg'),
        img('q2je68r79pxmcf11zlxdbv04rhkc_afeoj39b4q2g7pmpe5vw006w7v1a_Downpic.cc-image215205049.jpg')
      ],
      7: [
        img('c4gf43u778lus6u4vyt90r6jtn6e_shutterstock_1158621913.jpg'),
        img('fhk5y0ixfiuabs0dtpeqow4love0_shutterstock_1514039861.jpg'),
        img('s5n4t57ymv7th4yg1bqkxh3xe7gn_shutterstock_1514003930.jpg'),
        img('73svf06vwzmwzz5c9z7jwb9v8vjw_shutterstock_1751063663.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Kurashiki, Hiroshima and Miyajima`,
      'Breakfast, then the canal quarter at Kurashiki',
      'On to Hiroshima for a walking tour of the park',
      'The cenotaph and the A-Bomb Dome',
      'Ferry across to Miyajima for Itsukushima shrine',
      `${DAY_MARK}Day 7 · Departure from Hiroshima`,
      'Breakfast at the hotel and check out',
      'Transfer to the station or airport for your journey home'
    ],
    accommodation: {
      name: 'Hilton Hiroshima, Hiroshima',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel in the centre, walking distance from the park',
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
        image: img('i32qu2mlgq197643r9o9mnzy9d47_dl.beatsnoop.com-icFWIzfA70.jpg'),
        description: 'Free time in the old merchant quarter, where white walled storehouses line a willow canal that still has punts on it.'
      },
      {
        name: 'Hiroshima walking tour',
        day: 6,
        optional: false,
        image: img('q2je68r79pxmcf11zlxdbv04rhkc_afeoj39b4q2g7pmpe5vw006w7v1a_Downpic.cc-image215205049.jpg'),
        description: 'On foot through the Peace Memorial Park, the cenotaph and the A-Bomb Dome with a guide who tells the city\'s story properly.'
      },
      {
        name: 'Itsukushima shrine',
        day: 6,
        optional: false,
        image: img('gj3xydsy569gejfvcjmu475opo65_eqg1y4h6svqf73haql1p688sejbw_Itsukushima%20Shrine-1.jpg'),
        description: 'The ferry to Miyajima for the shrine built out over the water, with its torii gate standing in the sea at high tide.'
      }
    ],
    program: {
      name: 'Hiroshima',
      description: 'A last night in Hiroshima, with Kurashiki\'s canal quarter on the way and the island shrine at Miyajima the same day.',
      image: img('c4gf43u778lus6u4vyt90r6jtn6e_shutterstock_1158621913.jpg')
    }
  }
];

const detail = {
  slug: 'japan-cultural-tales-tokyo-to-hiroshima',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Japan Cultural Tales: Tokyo to Hiroshima',
  alt: 'Himeji castle, the white heron keep, Japan',
  days: '7 days / 6 nights',
  stations: '5 stops',
  transport: 'Bullet trains, coaches and guided touring throughout',
  tag: 'Group tour',
  tags: ['Culture', 'Value'],
  price: 175968,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Kyoto', 'Nara', 'Osaka', 'Himeji', 'Okayama', 'Kurashiki', 'Hiroshima'],
  stats: { days: 7, cities: 5, hotels: 5, activities: 8, transfers: 16 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['8 experiences', 'Activities'],
    ['16 transfers', 'Transport'],
    ['6 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'One direction, five towns and four star hotels all the way. Travelling west by train is the easiest way to see old Japan.',
    quoteMore: 'The Candeo in Namba has a rooftop bath house. After a day with the Nara deer it is the best twenty minutes of the trip.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Seven days west from Tokyo: two nights in Shinagawa with a guided city day, a night in Kyoto, Nara\'s temples on the way to Osaka, Himeji castle with Okayama\'s Korakuen garden, then Hiroshima with Kurashiki and the island shrine at Miyajima.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 6 nights across five towns with daily breakfast in four star hotels; bullet trains and coaches throughout; guided sightseeing in Tokyo, Kyoto, Nara, Okayama and Hiroshima; Himeji castle entry; free time at Kurashiki; the ferry and visit to Itsukushima shrine.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in beside Shinagawa station\nFree time in the Shinjuku district\nEvening at your own pace', hotel: 'Shinagawa Prince Hotel', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in beside Shinagawa station', 'Free time in the Shinjuku district'] },
    { title: 'Day 2: Tokyo sightseeing (B)', text: 'Breakfast, then a guided day through Tokyo\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in the city', hotel: 'Shinagawa Prince Hotel', highlights: ['Breakfast, then a guided day through Tokyo', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Bullet train to Kyoto (B)', text: 'Breakfast and check out, then the bullet train west\nCheck in opposite Kyoto station\nA guided afternoon through the old capital\nFree time in the Gion lanes in the evening', hotel: 'Miyako Hotel Kyoto Hachijo', highlights: ['Breakfast and check out, then the bullet train west', 'Check in opposite Kyoto station', 'A guided afternoon through the old capital'] },
    { title: 'Day 4: Nara and on to Osaka (B)', text: 'Breakfast and check out, then on to Nara\nTodai-ji and its great bronze Buddha\nThe lantern lined Kasuga shrine and the deer park\nCheck in at Namba in Osaka', hotel: 'Candeo Hotels Osaka Namba', highlights: ['Breakfast and check out, then on to Nara', 'Todai-ji and its great bronze Buddha', 'The lantern lined Kasuga shrine and the deer park'] },
    { title: 'Day 5: Himeji castle and Okayama (B)', text: 'Breakfast, then west along the inland sea\nHimeji castle, the white heron keep\nThe Korakuen garden and Okayama castle\nCheck in at your Okayama hotel', hotel: 'ANA Crowne Plaza Okayama', highlights: ['Breakfast, then west along the inland sea', 'Himeji castle, the white heron keep', 'The Korakuen garden and Okayama castle'] },
    { title: 'Day 6: Kurashiki, Hiroshima and Miyajima (B)', text: 'Breakfast, then the canal quarter at Kurashiki\nOn to Hiroshima for a walking tour of the park\nThe cenotaph and the A-Bomb Dome\nFerry across to Miyajima for Itsukushima shrine', hotel: 'Hilton Hiroshima', highlights: ['Breakfast, then the canal quarter at Kurashiki', 'On to Hiroshima for a walking tour of the park', 'The cenotaph and the A-Bomb Dome'] },
    { title: 'Day 7: Departure from Hiroshima (B)', text: 'Breakfast at the hotel and check out\nTransfer to the station or airport for your journey home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to the station or airport for your journey home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const japanCulturalTalesWestBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const japanCulturalTalesWestProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Kyoto', 'Nara', 'Osaka', 'Himeji', 'Okayama', 'Kurashiki', 'Hiroshima'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 7,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 8,
  transfers: 16,
  meals: 6,
  price: detail.price,
  images: cardImages
};
