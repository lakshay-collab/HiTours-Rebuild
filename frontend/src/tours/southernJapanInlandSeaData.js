// Southern Japan and the Inland Sea. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('6mx3dets08l8fqucy8q5ptmmbaih_shutterstock_426748243.jpg'),
  img('iydw2l2uic40wgzusg1ovudevqjk_shutterstock_1514003927.jpg'),
  img('f4xtclyb43occot7k4kf89zt870u_shutterstock_2458718483.jpg'),
  img('h3macot4xadpbfjprm5mxxfegn9z_shutterstock_2445535391.jpg'),
  img('00skmif8mwx8yjwnjsksqqvv0qpc_shutterstock_1575106243.jpg'),
  img('xetrn73mv4uqd247nxnoobi5fxsz_shutterstock_1906828666%20(1).jpg'),
  img('8uuox865tub290elo74ceud875pg_shutterstock_2394438103.jpg'),
  img('i7pvmoa5sgm8ekkupu1tyd6owiiv_shutterstock_2025119165.jpg'),
  img('jrtz4vq56xhqb8xes2py7d0u61a2_shutterstock_519395710.jpg'),
  img('n6o4af4ttsz5fvnf4luy4m8mkuit_shutterstock_1873243030.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('6mx3dets08l8fqucy8q5ptmmbaih_shutterstock_426748243.jpg'),
  img('iydw2l2uic40wgzusg1ovudevqjk_shutterstock_1514003927.jpg'),
  img('f4xtclyb43occot7k4kf89zt870u_shutterstock_2458718483.jpg'),
  img('h3macot4xadpbfjprm5mxxfegn9z_shutterstock_2445535391.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Osaka',
    dayLabel: 'Day 1',
    images: [
      img('6mx3dets08l8fqucy8q5ptmmbaih_shutterstock_426748243.jpg'),
      img('j4a2pg3qcw8w7pwsr1eyau64kdjj_shutterstock_691237765.jpg'),
      img('gha64mnpiaj0sbznnq4r23wd1fid_shutterstock_1024765225.jpg'),
      img('fwucq6pta6ufuwkv79qf7vlkpar0_shutterstock_1764063716.jpg')
    ],
    dayImages: {
      1: [
        img('dwt6ckxokuqpaeo9sopjgm2kjgnq_1617177290_castle-5476737_1920.jpg'),
        img('2wlx7w6wiyazb20ydbkvnjzmyhri_1617184267_1pNqAoqzxTJKSXnV27DrpxA.jpg'),
        img('6mx3dets08l8fqucy8q5ptmmbaih_shutterstock_426748243.jpg'),
        img('j4a2pg3qcw8w7pwsr1eyau64kdjj_shutterstock_691237765.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Osaka`,
      'Arrival at Kansai Airport and transfer to your hotel',
      'Check in at Namba in Osaka',
      'Rest of the day free at your own pace',
      'Optional: the Dotonbori canal and Kuromon market'
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

    ],
    program: {
      name: 'Osaka',
      description: 'A first night in Namba, with the Dotonbori food streets a few minutes from the lobby.',
      image: img('6mx3dets08l8fqucy8q5ptmmbaih_shutterstock_426748243.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Okayama',
    subtitle: 'Okayama to Himeji',
    dayLabel: 'Day 2',
    images: [
      img('wj9jxfmpxk6juy7qb1ok3i9d1ae2_shutterstock_1650091249.jpg'),
      img('00skmif8mwx8yjwnjsksqqvv0qpc_shutterstock_1575106243.jpg'),
      img('wriotvvbfc3o6tb222ad7qf9vnlp_shutterstock_2401915617.jpg'),
      img('5d4ac52c1c7pu5k4ycnr79ifpor5_shutterstock_2324290629.jpg')
    ],
    dayImages: {
      2: [
        img('d2276pjkxy6aauupgcw6ctzlzump_Downpic.cc-79115914.jpg'),
        img('5ps893jtjebytutoq9v7lnrxf3y3_39146732395_f9873cc92a_o.jpg'),
        img('1sjnyjeawtqsl1ov038e96syd7qh_Downpic.cc-image569184214.jpg'),
        img('lhmump9ykz9vx56zqfeb99s18p4y_49667304008_75532b9f86_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Himeji castle and Okayama`,
      'Breakfast and check out, then west along the inland sea',
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
        day: 2,
        optional: false,
        image: img('d2276pjkxy6aauupgcw6ctzlzump_Downpic.cc-79115914.jpg'),
        description: 'The white heron castle, the finest surviving fortress in Japan and the first site here to be listed by UNESCO.'
      },
      {
        name: 'Okayama sightseeing tour',
        day: 2,
        optional: false,
        image: img('1sjnyjeawtqsl1ov038e96syd7qh_Downpic.cc-image569184214.jpg'),
        description: 'The Korakuen garden, counted among the three great gardens of Japan, and the black keep of Okayama castle beside it.'
      }
    ],
    program: {
      name: 'Okayama',
      description: 'A night in Okayama, with Himeji castle on the way west and the Korakuen garden in the afternoon.',
      image: img('wj9jxfmpxk6juy7qb1ok3i9d1ae2_shutterstock_1650091249.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Hiroshima',
    subtitle: 'Hiroshima to Kurashiki and Miyajima',
    dayLabel: 'Day 3',
    images: [
      img('73svf06vwzmwzz5c9z7jwb9v8vjw_shutterstock_1751063663.jpg'),
      img('iydw2l2uic40wgzusg1ovudevqjk_shutterstock_1514003927.jpg'),
      img('62uzveq9j4kgn1dqm9wgyg6n0zg3_shutterstock_1443072128.jpg'),
      img('xrahfic90qj47tsgysqanrchcxhl_shutterstock_1269393457.jpg')
    ],
    dayImages: {
      3: [
        img('a94lcvc88zl2rjbowh4qd0fibh55_Downpic.cc-image551504803.jpg'),
        img('5ynvo4s2weyv9vw48a65xd5nvuzo_download%20-%202024-07-26T114742.039.jpeg'),
        img('abo79vxmj6d6rw9dpvayggkd54bb_5751_01.jpg'),
        img('e8towhc9u5dsin0ywjclplo20gcg_Downpic.cc-image225877652.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Kurashiki, Hiroshima and Miyajima`,
      'Breakfast, then the canal quarter at Kurashiki',
      'On to Hiroshima for a walking tour of the park',
      'The cenotaph and the A-Bomb Dome',
      'Ferry across to Miyajima for Itsukushima shrine'
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
        day: 3,
        optional: false,
        image: img('a94lcvc88zl2rjbowh4qd0fibh55_Downpic.cc-image551504803.jpg'),
        description: 'Free time in the old merchant quarter, where white walled storehouses line a willow canal that still has punts on it.'
      },
      {
        name: 'Hiroshima walking tour',
        day: 3,
        optional: false,
        image: img('e8towhc9u5dsin0ywjclplo20gcg_Downpic.cc-image225877652.jpg'),
        description: 'On foot through the Peace Memorial Park, the cenotaph and the A-Bomb Dome with a guide who tells the city\'s story properly.'
      },
      {
        name: 'Itsukushima shrine',
        day: 3,
        optional: false,
        image: img('nnwmf617uxlax8jdy13lv964vert_Downpic.cc-51656929.jpg'),
        description: 'The ferry to Miyajima for the shrine built out over the water, with its torii gate standing in the sea at high tide.'
      }
    ],
    program: {
      name: 'Hiroshima',
      description: 'A night in Hiroshima, with Kurashiki\'s canals on the way and the island shrine at Miyajima the same day.',
      image: img('73svf06vwzmwzz5c9z7jwb9v8vjw_shutterstock_1751063663.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Matsuyama',
    dayLabel: 'Day 4',
    images: [
      img('f4xtclyb43occot7k4kf89zt870u_shutterstock_2458718483.jpg')
    ],
    dayImages: {
      4: [
        img('80gjmdgezvdmhd519twqgdplejus_8.jpg'),
        img('howq6lgftr4zl60ptlz9y3ndxdv4_Matsuyama_castle(Iyo)11.jpg'),
        img('5djmvxczfke3t1gkum76fbi37jdj_Downpic.cc-image345398090.jpg'),
        img('89h1x7ufzkua7336t9c9z6vnoam4_5503_11.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · By boat to Matsuyama`,
      'Breakfast and check out, then the boat to Shikoku',
      'A cable car up to Matsuyama castle',
      'Ishiteji temple and its cave shrine',
      'Dogo Onsen, the oldest bath house in Japan'
    ],
    accommodation: {
      name: 'ANA Crowne Plaza Matsuyama, Matsuyama',
      description: '1 night · Breakfast · Standard room · 3★ · Central hotel on Shikoku island, close to the castle hill',
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
        name: 'Matsuyama castle by cable car',
        day: 4,
        optional: false,
        image: img('80gjmdgezvdmhd519twqgdplejus_8.jpg'),
        description: 'A cable car up the hill to one of only twelve original castle keeps left in Japan, with the inland sea spread out below.'
      },
      {
        name: 'Ishiteji temple',
        day: 4,
        optional: false,
        image: img('5djmvxczfke3t1gkum76fbi37jdj_Downpic.cc-image345398090.jpg'),
        description: 'A pilgrimage temple on the Shikoku circuit, with its gate, three storey pagoda and cave shrine behind the main hall.'
      },
      {
        name: 'Dogo Onsen',
        day: 4,
        optional: false,
        image: img('r2kvcy0w4os1p0prz9g2gqf9etvu_Downpic.cc-73177646.jpg'),
        description: 'The oldest hot spring bath house in the country, a wooden warren of pools said to be three thousand years old.'
      }
    ],
    program: {
      name: 'Matsuyama',
      description: 'A night on Shikoku island, reached by boat, with the original castle keep, a pilgrimage temple and Dogo Onsen.',
      image: img('f4xtclyb43occot7k4kf89zt870u_shutterstock_2458718483.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Kobe',
    subtitle: 'Kobe to Kotohira and Naruto',
    dayLabel: 'Day 5 to 6',
    images: [
      img('8uuox865tub290elo74ceud875pg_shutterstock_2394438103.jpg'),
      img('h3macot4xadpbfjprm5mxxfegn9z_shutterstock_2445535391.jpg')
    ],
    dayImages: {
      5: [
        img('l8qhrjvak868hqzvvatv2mmta7je_Downpic.cc-image554519627.jpg'),
        img('pj27lkbds0vag55377f9t0kapbdo_xgNHQvFDuD6wHTYxvznjHqa4jC1H2OnJqnDJAScY__1597_1065.png'),
        img('niw86i1a8r1u1szdy86zzg506wbs_7802055432_10eee8a1e2_o.jpg'),
        img('duxfuprgejj3yh3v9ht8biirrbhl_27331245833_6ff269312b_o.jpg')
      ],
      6: [
        img('iqh26linzs09lrbxfxw8mp3ms42r_Downpic.cc-image260430661.jpg'),
        img('0d9yh3vrgei529q2mrevv4k3kcvl_bosai_center_6.jpg'),
        img('8uuox865tub290elo74ceud875pg_shutterstock_2394438103.jpg'),
        img('h3macot4xadpbfjprm5mxxfegn9z_shutterstock_2445535391.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Shikoku gardens and Kobe`,
      'Breakfast, then a touring day towards Kobe',
      'Kotohira shrine on its long stone stairway',
      'Ritsurin garden, one of the finest in the country',
      'The bridge above the Naruto whirlpools, then Kobe',
      `${DAY_MARK}Day 6 · Kobe and departure`,
      'Breakfast at the hotel and check out',
      'The Kobe earthquake memorial museum',
      'Transfer to Osaka or Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'Kobe Meriken Park Oriental Hotel, Kobe',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel out on the harbour pier at Meriken Park',
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
        name: 'Kotohira shrine, Ritsurin garden and the Naruto bridge',
        day: 5,
        optional: false,
        image: img('l8qhrjvak868hqzvvatv2mmta7je_Downpic.cc-image554519627.jpg'),
        description: 'A touring day across Shikoku: the hillside Kotohira shrine, the landscaped Ritsurin garden and the bridge above the Naruto whirlpools.'
      },
      {
        name: 'Kobe earthquake memorial museum',
        day: 6,
        optional: false,
        image: img('iqh26linzs09lrbxfxw8mp3ms42r_Downpic.cc-image260430661.jpg'),
        description: 'The museum built after the 1995 quake, which explains in plain terms what happened to the city and how it rebuilt.'
      }
    ],
    program: {
      name: 'Kobe',
      description: 'A last night on the Kobe waterfront, reached on a touring day through Shikoku\'s shrines, gardens and whirlpools.',
      image: img('8uuox865tub290elo74ceud875pg_shutterstock_2394438103.jpg')
    }
  }
];

const detail = {
  slug: 'southern-japan-and-the-inland-sea',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Southern Japan and the Inland Sea',
  alt: 'Kotohira shrine stairway through the cedars, Shikoku',
  days: '6 days / 5 nights',
  stations: '5 stops',
  transport: 'Trains, coaches and a ferry, with guided touring throughout',
  tag: 'Offbeat',
  tags: ['Culture', 'Value'],
  price: 126222,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Osaka', 'Himeji', 'Okayama', 'Kurashiki', 'Hiroshima', 'Matsuyama', 'Kobe'],
  stats: { days: 6, cities: 5, hotels: 5, activities: 10, transfers: 14 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['10 experiences', 'Activities'],
    ['14 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Six days along the inland sea with ten included visits and not one of them crowded. This is the Japan regulars come back for.',
    quoteMore: 'The boat to Matsuyama is part of the pleasure, not just transport. Sit outside and watch the islands go past.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days along the Seto inland sea: Osaka, then Himeji castle with Okayama\'s Korakuen garden, Hiroshima with Kurashiki and Miyajima, a boat across to Matsuyama for its castle and Dogo Onsen, and a last night on the Kobe waterfront.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights across five towns with daily breakfast; trains, coaches and the ferry to Shikoku; Himeji castle entry; Okayama sightseeing tour; free time at Kurashiki; Hiroshima walking tour and the visit to Itsukushima shrine; Matsuyama castle with the cable car, Ishiteji temple and Dogo Onsen; Kotohira shrine, Ritsurin garden and the Naruto bridge; Kobe earthquake memorial museum.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Osaka (Arrival)', text: 'Arrival at Kansai Airport and transfer to your hotel\nCheck in at Namba in Osaka\nRest of the day free at your own pace\nOptional: the Dotonbori canal and Kuromon market', hotel: 'Candeo Hotels Osaka Namba', highlights: ['Arrival at Kansai Airport and transfer to your hotel', 'Check in at Namba in Osaka', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Himeji castle and Okayama (B)', text: 'Breakfast and check out, then west along the inland sea\nHimeji castle, the white heron keep\nThe Korakuen garden and Okayama castle\nCheck in at your Okayama hotel', hotel: 'ANA Crowne Plaza Okayama', highlights: ['Breakfast and check out, then west along the inland sea', 'Himeji castle, the white heron keep', 'The Korakuen garden and Okayama castle'] },
    { title: 'Day 3: Kurashiki, Hiroshima and Miyajima (B)', text: 'Breakfast, then the canal quarter at Kurashiki\nOn to Hiroshima for a walking tour of the park\nThe cenotaph and the A-Bomb Dome\nFerry across to Miyajima for Itsukushima shrine', hotel: 'Hilton Hiroshima', highlights: ['Breakfast, then the canal quarter at Kurashiki', 'On to Hiroshima for a walking tour of the park', 'The cenotaph and the A-Bomb Dome'] },
    { title: 'Day 4: By boat to Matsuyama (B)', text: 'Breakfast and check out, then the boat to Shikoku\nA cable car up to Matsuyama castle\nIshiteji temple and its cave shrine\nDogo Onsen, the oldest bath house in Japan', hotel: 'ANA Crowne Plaza Matsuyama, an IHG Hotel', highlights: ['Breakfast and check out, then the boat to Shikoku', 'A cable car up to Matsuyama castle', 'Ishiteji temple and its cave shrine'] },
    { title: 'Day 5: Shikoku gardens and Kobe (B)', text: 'Breakfast, then a touring day towards Kobe\nKotohira shrine on its long stone stairway\nRitsurin garden, one of the finest in the country\nThe bridge above the Naruto whirlpools, then Kobe', hotel: 'Kobe Meriken Park Oriental Hotel', highlights: ['Breakfast, then a touring day towards Kobe', 'Kotohira shrine on its long stone stairway', 'Ritsurin garden, one of the finest in the country'] },
    { title: 'Day 6: Kobe and departure (B)', text: 'Breakfast at the hotel and check out\nThe Kobe earthquake memorial museum\nTransfer to Osaka or Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'The Kobe earthquake memorial museum', 'Transfer to Osaka or Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const southernJapanInlandSeaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const southernJapanInlandSeaProduct = {
  slug: detail.slug,
  places: ['Osaka', 'Himeji', 'Okayama', 'Kurashiki', 'Hiroshima', 'Matsuyama', 'Kobe'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 10,
  transfers: 14,
  meals: 5,
  price: detail.price,
  images: cardImages
};
