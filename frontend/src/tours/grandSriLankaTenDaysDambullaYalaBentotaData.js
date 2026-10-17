// Grand Sri Lanka in Ten Days: Dambulla, Kandy, Yala and Bentota. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
  img('nblwv1u3cze5qug1glqs5ltuux5m_shutterstock_776788237%20(1).jpg'),
  img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
  img('1kb7guo5ceqcpw2m5ghs7db8hnrr_shutterstock_229257724.jpg'),
  img('y6ifenge0ejrzoq7k82198if3ky8_shutterstock_726294346.jpg'),
  img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg'),
  img('f1qkldipk78pi26yi4ym1lqnvkiy_shutterstock_2145363995.jpg'),
  img('kg26v8ssn2abkku4hros6y87biin_shutterstock_701553847.jpg'),
  img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
  img('8pngc3kvspg8528bwbrbu6t8b5gz_shutterstock_1423148210.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
  img('vckopqkosvqkcs3oigv93ubbeh80_1580470871_beira_lake.jpg'),
  img('lpnzf5phzbzbyesnch9uo6xlxwaz_download%20-%202024-12-05T170855.176.jpeg'),
  img('15z4ent0gfxo06r0s4z6p5pj411u_Downpic.cc-image329192107.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Colombo',
    dayLabel: 'Day 1',
    images: [
      img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg'),
      img('4xxzzwpzat8ny2whlu918tkx5xk5_shutterstock_508047703%20(1).jpg'),
      img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
      img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg')
    ],
    dayImages: {
      1: [
        img('kjuj4rda6im6uc8xprcs8r3c2sl4_St._Anthony\'s_Shrine_Colombo_%202wix.jpg'),
        img('vckopqkosvqkcs3oigv93ubbeh80_1580470871_beira_lake.jpg'),
        img('8vwojnvolgtdjyiaiwflt8vezeol_St._Anthony\'s_Shrine,_Kochchikade%20(1).jpg'),
        img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo`,
      'Arrival at Bandaranaike International and private transfer to your hotel',
      'A half day of Galle Face Green, the Gangaramaya temple and the Fort',
      'Check in on the Mount Lavinia beachfront',
      'The evening at leisure'
    ],
    accommodation: {
      name: 'Berjaya Hotel, Colombo',
      description: '1 night · Breakfast · Deluxe room · 4★ · Four star hotel on the Mount Lavinia beachfront south of the city',
      images: [
        img('gxczjwl8s0vw8oaqbi6e86zx6sv1_177389047.jpg'),
        img('sqbl6yo4j7i38u9wbxstfdxesuwl_1569732955750.png'),
        img('98lht7n1bj9lb5ktjzbqh4y1d8fn_255638518.jpg'),
        img('55h2udwmk3tw4gy6fg815hrbnf58_xU3rf7jz_cc07758214c4eeaef3db9ee07c58786e.png'),
        img('km68iemu4l5g1i3abmuuit3v3d02_213583907.jpg'),
        img('2i49d0id4ke4d28funvcgf6lsej9_d6bf723a_z.webp'),
        img('otjgew7y0rvlgs0uvtk39vzslnf1_213583922.jpg'),
        img('opkz5fpvdb7exjqnop66g7yvvl20_410265362.jpg'),
        img('cspg96xiu1knj136cjs8kotb9qw9_18963860.jpg'),
        img('9j7b961nrv0ej4f359xa7ldzka7c_46715cf6822211ea8a5e0242ac110002.png'),
        img('7x13egkh22l1vmfs3tsw10t4lvjj_caf66d78809711e99e5a0242ac110005.png')
      ]
    },
    activities: [
      {
        name: 'Half day Colombo sightseeing',
        day: 1,
        optional: false,
        image: img('kjuj4rda6im6uc8xprcs8r3c2sl4_St._Anthony\'s_Shrine_Colombo_%202wix.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the Fort district and Independence Square in an afternoon.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A first night on the Mount Lavinia beachfront with a half day of the capital to start.',
      image: img('zvhyrkuu7ah29qbn1ceki7htses8_shutterstock_768117313.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Dambulla',
    dayLabel: 'Day 2 to 3',
    images: [
      img('oewqep60satxoqa8xc1sg0uolit2_shutterstock_159551120.jpg'),
      img('nblwv1u3cze5qug1glqs5ltuux5m_shutterstock_776788237%20(1).jpg'),
      img('1kb7guo5ceqcpw2m5ghs7db8hnrr_shutterstock_229257724.jpg'),
      img('8pngc3kvspg8528bwbrbu6t8b5gz_shutterstock_1423148210.jpg')
    ],
    dayImages: {
      2: [
        img('b14m75op1m07swbrru2fqbc31lfh_7006860454_cec45734cb_o.jpg'),
        img('lpnzf5phzbzbyesnch9uo6xlxwaz_download%20-%202024-12-05T170855.176.jpeg'),
        img('oewqep60satxoqa8xc1sg0uolit2_shutterstock_159551120.jpg'),
        img('nblwv1u3cze5qug1glqs5ltuux5m_shutterstock_776788237%20(1).jpg')
      ],
      3: [
        img('15z4ent0gfxo06r0s4z6p5pj411u_Downpic.cc-image329192107.jpg'),
        img('6ssex864i1kyillcvf2erhewwx3e_7962218516_d46b651f5a_o.jpg'),
        img('okq4pssbttuzab017ulmj9jowzh6_Dambulla-buddhastupa.jpg'),
        img('oewqep60satxoqa8xc1sg0uolit2_shutterstock_159551120.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · To the Cultural Triangle`,
      'Breakfast and a transfer north to Dambulla',
      'Check in among the paddy fields',
      'The afternoon at leisure by the pool',
      'Optional: Pidurangala rock for sunset',
      `${DAY_MARK}Day 3 · Dambulla sightseeing`,
      'Breakfast, then the five cave shrines of the golden temple',
      'The Buddhist museum below the rock',
      'The old village and its tank by bullock cart',
      'Optional: a climb of Sigiriya rock fortress'
    ],
    accommodation: {
      name: 'Raintree, Dambulla',
      description: '2 nights · Breakfast and dinner · Deluxe room · 3★ · Deluxe class hotel among the paddy fields outside Dambulla',
      images: [
        img('7z02umvgtzlwqqptpex9xegq3hut_Raintree1.jpg'),
        img('5bm8n4eqmja8xjhlxrauamziykbz_Raintree9.jpg'),
        img('035v852uo70d42ojrvte4gseswfr_Raintree5.jpg'),
        img('b0ildfe7xhgklpvkspgij439n1u5_Raintree3.jpg'),
        img('srlpkm70co5dh251wpu8lb46ruuh_Raintree%20Dambulla2.jpg'),
        img('ocukcsfcjh8gygkirdvteqg2132c_Raintree4.jpg'),
        img('qd6hbuu3tz1icpm0d3jyaih2xqh6_Raintree7.jpg'),
        img('7mjasr1usu5sq071oakjgxmo5kb2_Raintree6.jpg')
      ]
    },
    activities: [
      {
        name: 'Dambulla sightseeing tour',
        day: 3,
        optional: false,
        image: img('15z4ent0gfxo06r0s4z6p5pj411u_Downpic.cc-image329192107.jpg'),
        description: 'The five cave shrines of the golden temple, the Buddhist museum and the old village tank.'
      }
    ],
    program: {
      name: 'Dambulla',
      description: 'Two nights in the Cultural Triangle with a free afternoon on arrival and a day of the cave temple, the museum and the village.',
      image: img('oewqep60satxoqa8xc1sg0uolit2_shutterstock_159551120.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Kandy',
    dayLabel: 'Day 4 to 5',
    images: [
      img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg'),
      img('06q1s65ey9zygohiz6j8cmghh0dd_shutterstock_1587139651.jpg'),
      img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
      img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg')
    ],
    dayImages: {
      4: [
        img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        img('5c7ahan3s5gbl276rfrr4kl99k68_13989190682_27483cd15d_o.jpg'),
        img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        img('2qdrxrko072bcco7ufzgu2npr0c7_1581078051_17185271045_4b7e32f3fc_b_(1).jpg')
      ],
      5: [
        img('1xmli9j38vniz1tghlcgs4bxa0gc_shutterstock_1840791727.jpg'),
        img('0scen0iugpry0mg4wqnxsr558nvw_Labookellie_tea_plantation__Sri_Lanka_2.jpg'),
        img('5ryv9me1696b1ry058e5jsm7lzya_Botanical_Garden_of_Peradeniya_03.jpg'),
        img('273z0ew2ziyinmy62ccpeay5ggwo_nepal-royal-botanical-gardens.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Elephants and the road to Kandy`,
      'Breakfast, then a transfer south via Pinnawala',
      'Bath time for the herd in the Maha Oya river',
      'Check in at your Kandy hotel',
      'The lake drive and the Kandyan dance show',
      `${DAY_MARK}Day 5 · A full day in Kandy`,
      'Breakfast, then the Temple of the Sacred Tooth Relic',
      'The Peradeniya Royal Botanical Gardens',
      'The hilltop Buddha at Bahiravokanda and the gem museum',
      'The evening free in the lakeside bazaars'
    ],
    accommodation: {
      name: 'Hotel Devon, Kandy',
      description: '2 nights · Breakfast · Deluxe room · 3★ · Deluxe class hotel in the hills above Kandy town',
      images: [
        img('berav8t51c7pwlial4nduc1pnvvg_41f90e0d_z.webp'),
        img('smkd8s8uniq3iaf6q3hytymzybql_o2sn5ZaB_aca407c859df4840886b04703b1e5e29.jpg'),
        img('366f0pf6eqxiswssz0axf2o6pq93_4Nqk69oN_2e7e2819542561b0aa814dbec048a4b2.jpg'),
        img('0ipswcafq0hpe3nprdtyawqcok8q_489225362.jpg'),
        img('cqidrd4ki7hs1avfdu0w2rzwfzzd_CDSd8Vzf_e9210a7990ebdd239670b5e91d71464f.jpg'),
        img('um8msjhpjps8jboul4g7zrit6mdo_65b08d6e_z.webp'),
        img('dwuvan7bjam36nudxz8eabgqgboh_35752d93_z.webp'),
        img('5ids7veibdit31ana3s5zljycp41_489225372.jpg'),
        img('38izydud4zxkcj3x0m1d3hrmor28_8c4a1e8f_z.webp'),
        img('1ts1qvmtl7aed3oczeju0zeao8y2_f0630004_z.webp'),
        img('npf93v6f3g0uqpa2ill4aizdgsgm_be4a8dc6_z.webp')
      ]
    },
    activities: [
      {
        name: 'Pinnawala Elephant Orphanage',
        day: 4,
        optional: false,
        image: img('ifz2xd4nkw5vwkjgrasriq891imr_shutterstock_726294346.jpg'),
        description: 'A stop on the way up from the airport to watch the resident herd bathe in the Maha Oya river and feed at the sanctuary.'
      },
      {
        name: 'Kandy lake drive and Kandyan dance show',
        day: 4,
        optional: false,
        image: img('sd4hjfh8a21n9a8afn49z5b3t0gt_Kandy%20Lake%201.jpg'),
        description: 'An evening circuit of the lake followed by a traditional performance of drummers, masked dancers and the closing fire walk.'
      },
      {
        name: 'Full day Kandy sightseeing',
        day: 5,
        optional: false,
        image: img('1xmli9j38vniz1tghlcgs4bxa0gc_shutterstock_1840791727.jpg'),
        description: 'The Temple of the Sacred Tooth Relic, Peradeniya gardens, the Bahiravokanda Buddha and the gem museum.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'Two nights in the hill capital with the elephants on the way, the dance show and a full day of the city.',
      image: img('0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Nuwara Eliya',
    dayLabel: 'Day 6',
    images: [
      img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg'),
      img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg'),
      img('ehxgq7xsvpq2xfzcpi1774ppfjgw_shutterstock_1019478988.jpg'),
      img('z7kb0dcgq1zn0kla57iv7ayde16p_shutterstock_326368451%20(1).jpg')
    ],
    dayImages: {
      6: [
        img('dkoj74m9f17nxheibujcoq9jl0m8_lovers-leap-waterfall-in-nuwara-eliya.jpg'),
        img('e6n0y1diliwsfsj9erkps8xiphjz_download%20-%202024-12-05T162433.390.png'),
        img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg'),
        img('viromgns57wccawyupsnvpurglpd_shutterstock_2290732549.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Into the tea country`,
      'Breakfast and a transfer up to Nuwara Eliya',
      'A walk through the Pedro estate to Lovers Leap waterfall',
      'Check in with views over the valley',
      'An evening by Gregory Lake'
    ],
    accommodation: {
      name: 'Oak Ray Summer Hill Breeze, Nuwara Eliya',
      description: '1 night · Breakfast · Standard room · 3★ · Hill hotel with views over the Nuwara Eliya valley',
      images: [
        img('hce3dq3gl7tuytd7c6ujmahp7gm0_d945c1d8_z.webp'),
        img('ijy1exudnuxounmvn38ycjvta5ng_download%20-%202024-02-15T124047.096.jfif'),
        img('wurugjy3fmps0kw3ha5b0e8mottt_download%20-%202024-02-15T123731.647.jfif'),
        img('9kipt89x5uuipxcp4x8nm38649v2_download%20-%202024-02-15T123644.523.jfif'),
        img('0iy4scnnxeqzg4oza98eijndaazu_download%20-%202024-02-15T123725.448.jfif'),
        img('zwxzhbbgzjb3vjtw9ud2oyzyti6z_220h0u000000jc68y14D0_R_960_660_R5_D.webp'),
        img('948uaiug3huhiu5fv41y8hbpfqtk_833b3a29_z.jpg'),
        img('efts5j5aht81v8196uv7ktb0049k_29a68379_z.jpg'),
        img('ggqzrscog2nulcm57m835fz4ny1n_download%20-%202024-02-15T123808.694.jfif'),
        img('je62hod4ruqg5litd4sr8xztg4e6_5768edc3_z.jpg'),
        img('9vpojskxq4dnt4mx68f1b5w6pl0k_021fbf6f_z.webp'),
        img('omgkd5g1eksxcysyeuwasg3yt7d5_972e8693_z.jpg')
      ]
    },
    activities: [
      {
        name: 'Lover\'s Leap waterfall',
        day: 6,
        optional: false,
        image: img('dkoj74m9f17nxheibujcoq9jl0m8_lovers-leap-waterfall-in-nuwara-eliya.jpg'),
        description: 'A short walk through the Pedro tea estate to the thirty metre fall above Nuwara Eliya.'
      }
    ],
    program: {
      name: 'Nuwara Eliya',
      description: 'Up into the tea country with a stop at the Lovers Leap waterfall above the town.',
      image: img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Yala',
    dayLabel: 'Day 7',
    images: [
      img('e7329r7y7rxaon6tvrx1xinabucz_shutterstock_1012268899.jpg'),
      img('v7gx2asuh5hqn57b2qghxihf5c87_shutterstock_1427710394.jpg'),
      img('a9j1cn3b7mmh4opuk4w0luyaukhj_shutterstock_562153555.jpg'),
      img('sr7y9yuej43mtw9he8szpq6j8f2f_shutterstock_464982536.jpg')
    ],
    dayImages: {
      7: [
        img('zpwg24qr5rtd6807rdrbqo02d81b_Tourism_Yala_National_Park.jpg'),
        img('3gaa6al2uyw6jx916wi70djsyfhb_download%20-%202024-12-06T172131.134.jpg'),
        img('e7329r7y7rxaon6tvrx1xinabucz_shutterstock_1012268899.jpg'),
        img('v7gx2asuh5hqn57b2qghxihf5c87_shutterstock_1427710394.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Across to Yala`,
      'Breakfast and a long transfer down to the dry south east',
      'Check in at your lodge on the park boundary',
      'Optional: an afternoon jeep safari in Yala block one',
      'An early night under the stars'
    ],
    accommodation: {
      name: 'Arana Yala, Yala',
      description: '1 night · Breakfast · Deluxe room · 3★ · Deluxe class lodge on the edge of Yala National Park',
      images: [
        img('1g7oq6sr1wx3hs9wh2sp2559lxdj_sunsetting-over-arana.jpg'),
        img('piu22mtwyvh6z0ifodn7c054ljkr_download%20(9).jpg'),
        img('wwjgtzjjc8v7r5obhpg3t5zqcjgt_aerial-view-of-pool.jpg'),
        img('744jiowk7e5y87ve06o0z55i7pvf_download%20(2).jpg'),
        img('3b37gqgycxp3zamyc6s52uau96td_download%20(3).jpg'),
        img('e9zgw60m8sdexyvhlna0l6x8a6xb_download%20(1).jpg'),
        img('2aihwjctpgr2evgj1tsar59e96ux_download%20(4).jpg'),
        img('s8og72uzlbyl20gukdj2mfqe2aj8_deluxe-twin-room.jpg'),
        img('ug2n1xaeug70ws5oqnrbzosf7u3r_download.jpg')
      ]
    },
    activities: [
      {
        name: 'Optional: Yala jeep safari',
        day: 7,
        optional: true,
        image: img('zpwg24qr5rtd6807rdrbqo02d81b_Tourism_Yala_National_Park.jpg'),
        description: 'A dawn or dusk 4x4 safari through block one, home to leopards, elephants, sloth bears and crocodiles.'
      }
    ],
    program: {
      name: 'Yala',
      description: 'Across the hills to the dry south east for a night on the edge of the park.',
      image: img('e7329r7y7rxaon6tvrx1xinabucz_shutterstock_1012268899.jpg')
    }
  },
  {
    letter: 'F',
    name: 'Bentota',
    dayLabel: 'Day 8 to 10',
    images: [
      img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
      img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
      img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg'),
      img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg')
    ],
    dayImages: {
      8: [
        img('lcogdoq76wasext2xs8n1943h2uh_1597147042_shutterstock_785564455.jpg'),
        img('z8pc6746uelxtxz5446rmvk51rki_flickr_cached_img_20b18d949dbd302f958b4aadfd6bf889_600x600.jpg'),
        img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
        img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg')
      ],
      9: [
        img('3drp3xw253kg7pt48iauc5vh1yjz_Bentota%202.jpg'),
        img('mgac8tj98vp4u6p3vv4acwiwsebh_22859730893_159b5dee46_b.jpg'),
        img('c0x2bsv51zmx3tz3qiitrit9r8w8_Bentota%20Islang.JPG'),
        img('2kyg08hfs2xevolr6axgk0fpxg9d_download.jpg')
      ],
      10: [
        img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg'),
        img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
        img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg'),
        img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · To the beach at Bentota`,
      'Breakfast and a transfer west along the southern coast',
      'The Kosgoda turtle hatchery on the way',
      'Check in at your beach hotel',
      'The evening at leisure on the sand',
      `${DAY_MARK}Day 9 · Bentota sightseeing`,
      'Breakfast, then a boat on the Madu River',
      'The cinnamon island and the Galapatha temple',
      'The afternoon on Bentota beach',
      'Optional: water sports at the river mouth',
      `${DAY_MARK}Day 10 · Departure from Colombo`,
      'Breakfast and check out',
      'Private transfer up the coast to Bandaranaike International for your flight home'
    ],
    accommodation: {
      name: 'Hibiscus Beach Hotel, Bentota',
      description: '2 nights · Breakfast · Deluxe room · 3★ · Deluxe class beach hotel with a pool facing the sea',
      images: [
        img('j3sypuajq9k588ome1i6d4whewld_209196152.jpg'),
        img('9ikz7kfbz5slwydpw5dmjjbvplkf_131573390.jpg'),
        img('s737wmsjimg0gb7loszmij4dkgk2_144265347.jpg'),
        img('ojs9ckicy6xzn0lkxsglf2h3zsb0_144265568.jpg'),
        img('zys1cenoydd1jcvhl92ibzzcpa5g_f35ccc4a_z.jpg'),
        img('z7xuzqcgkiqzzm8cfruzuwd2gx5k_208636431.jpg'),
        img('61i54a9d0m2kq4vzr51uyozsar3y_64bf7960_z.webp'),
        img('yihihvb02n3gd8hx0lmmru1r182l_208635052.jpg'),
        img('5nlv2fe1w5nhflcz8wr8mepkfomh_208635020.jpg'),
        img('mq881y372buv3692mto02aayw4wz_0PFSwicE_799bad5a3b514f096e69bbc4a7896cd9.jpg'),
        img('iypfgtrybk2bcvrx80g64j12r8ck_84TKIBOs_f3ccdd27d2000e3f9255a7e3e2c48800.jpg'),
        img('schm4jlcz749cru16utzynsh9353_mzQacvXE_799bad5a3b514f096e69bbc4a7896cd9.jpg')
      ]
    },
    activities: [
      {
        name: 'Kosgoda turtle hatchery',
        day: 8,
        optional: false,
        image: img('lcogdoq76wasext2xs8n1943h2uh_1597147042_shutterstock_785564455.jpg'),
        description: 'The hatchery south of Bentota where eggs are protected and hatchlings released into the sea at dusk.'
      },
      {
        name: 'Full day Bentota sightseeing',
        day: 9,
        optional: false,
        image: img('3drp3xw253kg7pt48iauc5vh1yjz_Bentota%202.jpg'),
        description: 'The Madu Ganga boat ride, the Kosgoda turtle hatchery, the Galapatha temple and an afternoon on Bentota beach.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'Two nights on the beach with the turtle hatchery on arrival and a full day of the Madu River, the cinnamon island and the sand.',
      image: img('mn78tz3y85bdsf599hw6r7yu8iah_shutterstock_610912466.jpg')
    }
  }
];

const detail = {
  slug: 'grand-sri-lanka-in-ten-days-dambulla-kandy-yala-and-bentota',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Grand Sri Lanka in Ten Days: Dambulla, Kandy, Yala and Bentota',
  alt: 'A leopard resting on a rock in Yala National Park',
  days: '10 days / 9 nights',
  stations: '6 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide; 4x4 jeep for the Yala safari',
  tag: 'Grand tour',
  tags: ['Grand tour', 'Wildlife', 'Culture'],
  price: 109901,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Colombo', 'Dambulla', 'Kandy', 'Nuwara Eliya', 'Yala', 'Bentota'],
  stats: { days: 10, cities: 6, hotels: 6, activities: 9, transfers: 12 },
  gallery: heroGallery,
  services: [
    ['6 hotels', 'Accommodation'],
    ['9 experiences', 'Activities'],
    ['12 transfers', 'Transport'],
    ['9 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aditya',
    image: '/experts/aditya.webp',
    role: 'Sri Lanka expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Yala at dawn is the single best morning you can have in Sri Lanka. Leopards are shy, but the elephants and peacocks never disappoint.',
    quoteMore: 'Wear neutral colours for the safari and keep the camera ready at the waterholes. The first hour after the gates open is when the cats move.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'The full island in ten days: Colombo, two nights in the Cultural Triangle at Dambulla, two in Kandy with the elephants and the dance show, the tea country and Lovers Leap, a night on the edge of Yala, and two nights on the beach at Bentota with the turtles and the Madu River.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 9 nights in deluxe class hotels with breakfast daily (lunch or dinner also in Dambulla and Nuwara Eliya); private airport transfers and all road travel in an air conditioned car with chauffeur guide; a half day Colombo sightseeing tour; the Dambulla sightseeing tour; the Pinnawala elephant sanctuary; Kandy lake drive and Kandyan dance show; a full day Kandy sightseeing tour; Lovers Leap waterfall; the Kosgoda turtle hatchery; a full day Bentota sightseeing tour.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; the Yala jeep safari and park ticket; lunches and dinners unless stated; entrance tickets where payable locally; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo (None)', text: 'Arrival at Bandaranaike International and private transfer to your hotel\nA half day of Galle Face Green, the Gangaramaya temple and the Fort\nCheck in on the Mount Lavinia beachfront\nThe evening at leisure', hotel: 'Berjaya Hotel Colombo', highlights: ['Arrival at Bandaranaike International and private transfer to your hotel', 'A half day of Galle Face Green, the Gangaramaya temple and the Fort', 'Check in on the Mount Lavinia beachfront'] },
    { title: 'Day 2: To the Cultural Triangle (B)', text: 'Breakfast and a transfer north to Dambulla\nCheck in among the paddy fields\nThe afternoon at leisure by the pool\nOptional: Pidurangala rock for sunset', hotel: 'Raintree Dambulla', highlights: ['Breakfast and a transfer north to Dambulla', 'Check in among the paddy fields', 'The afternoon at leisure by the pool'] },
    { title: 'Day 3: Dambulla sightseeing (B)', text: 'Breakfast, then the five cave shrines of the golden temple\nThe Buddhist museum below the rock\nThe old village and its tank by bullock cart\nOptional: a climb of Sigiriya rock fortress', hotel: 'Raintree Dambulla', highlights: ['Breakfast, then the five cave shrines of the golden temple', 'The Buddhist museum below the rock', 'The old village and its tank by bullock cart'] },
    { title: 'Day 4: Elephants and the road to Kandy (B)', text: 'Breakfast, then a transfer south via Pinnawala\nBath time for the herd in the Maha Oya river\nCheck in at your Kandy hotel\nThe lake drive and the Kandyan dance show', hotel: 'Hotel Devon Kandy', highlights: ['Breakfast, then a transfer south via Pinnawala', 'Bath time for the herd in the Maha Oya river', 'Check in at your Kandy hotel'] },
    { title: 'Day 5: A full day in Kandy (B)', text: 'Breakfast, then the Temple of the Sacred Tooth Relic\nThe Peradeniya Royal Botanical Gardens\nThe hilltop Buddha at Bahiravokanda and the gem museum\nThe evening free in the lakeside bazaars', hotel: 'Hotel Devon Kandy', highlights: ['Breakfast, then the Temple of the Sacred Tooth Relic', 'The Peradeniya Royal Botanical Gardens', 'The hilltop Buddha at Bahiravokanda and the gem museum'] },
    { title: 'Day 6: Into the tea country (B)', text: 'Breakfast and a transfer up to Nuwara Eliya\nA walk through the Pedro estate to Lovers Leap waterfall\nCheck in with views over the valley\nAn evening by Gregory Lake', hotel: 'Oak-Ray Summer Hill Breeze Hotel, Nuwara Eliya', highlights: ['Breakfast and a transfer up to Nuwara Eliya', 'A walk through the Pedro estate to Lovers Leap waterfall', 'Check in with views over the valley'] },
    { title: 'Day 7: Across to Yala (B)', text: 'Breakfast and a long transfer down to the dry south east\nCheck in at your lodge on the park boundary\nOptional: an afternoon jeep safari in Yala block one\nAn early night under the stars', hotel: 'Arana Yala', highlights: ['Breakfast and a long transfer down to the dry south east', 'Check in at your lodge on the park boundary', 'Optional: an afternoon jeep safari in Yala block one'] },
    { title: 'Day 8: To the beach at Bentota (B)', text: 'Breakfast and a transfer west along the southern coast\nThe Kosgoda turtle hatchery on the way\nCheck in at your beach hotel\nThe evening at leisure on the sand', hotel: 'Hibiscus Beach Hotel, Bentota', highlights: ['Breakfast and a transfer west along the southern coast', 'The Kosgoda turtle hatchery on the way', 'Check in at your beach hotel'] },
    { title: 'Day 9: Bentota sightseeing (B)', text: 'Breakfast, then a boat on the Madu River\nThe cinnamon island and the Galapatha temple\nThe afternoon on Bentota beach\nOptional: water sports at the river mouth', hotel: 'Hibiscus Beach Hotel, Bentota', highlights: ['Breakfast, then a boat on the Madu River', 'The cinnamon island and the Galapatha temple', 'The afternoon on Bentota beach'] },
    { title: 'Day 10: Departure from Colombo (B)', text: 'Breakfast and check out\nPrivate transfer up the coast to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast and check out', 'Private transfer up the coast to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; the Yala jeep safari and park ticket; lunches and dinners unless stated; entrance tickets where payable locally; travel insurance; optional excursions; tips and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const grandSriLankaTenDaysDambullaYalaBentotaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const grandSriLankaTenDaysDambullaYalaBentotaProduct = {
  slug: detail.slug,
  places: ['Colombo', 'Dambulla', 'Kandy', 'Nuwara Eliya', 'Yala', 'Bentota'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 10,
  stops: 6,
  hotels: 6,
  cities: 6,
  activities: 9,
  transfers: 12,
  meals: 9,
  price: detail.price,
  images: cardImages
};
