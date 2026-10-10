// Bhutan in Ten Days with Phobjikha. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
  img('w8ifok0lq9ontdbmohcdh42byxk8_shutterstock_667317535.jpg'),
  img('zgcaaqitv1y1o61fn2id84tqu7bx_shutterstock_2270002569.jpg'),
  img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg'),
  img('cxca9v5t1msku6mvfdxgpojksya0_shutterstock_791057164.jpg'),
  img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
  img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
  img('p1i15xdhqgh5smhayb2nut1io516_Thimphu,_Bhutan,.jpg'),
  img('62ay59x8u2qfi8ezdhofxgy7kceg_shutterstock_422773819.jpg'),
  img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('zgcaaqitv1y1o61fn2id84tqu7bx_shutterstock_2270002569.jpg'),
  img('yu1h20ntlvu7vzurh3ahrr62uwqc_Haa%20Valley%203.jpg'),
  img('byjqlczjh3p5qzvwbjhnm8utazy3_1481602664_HaaValley.jpg'),
  img('vks3jk2dtk15pwnvwjc72mlbgokm_Lhakhang%20Karpo.jpg')
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
        img('r216cx5wtx6y2mlcx31wzb1avzpz_Palden_Tashi_Chholing_Shedra_01.jpg'),
        img('ljpqw4npv8wncod5fq1r7hw2zt5y_shutterstock_1344366731.jpg'),
        img('t524u3xv63svk6fkf5xqyvn08j3g_mandir.jpg'),
        img('yiup7qro2cobgjuqbppy9xaxknbw_pic3.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Phuentsholing`,
      'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing',
      'Border formalities at the Bhutan Gate',
      'Check in and the rest of the day free'
    ],
    accommodation: {
      name: 'Alem Hotel & Resort, Phuntsholing',
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
        img('wpd0woa96sv8ztpl35qc0pohtx5e_shutterstock_1698546493.jpg'),
        img('bug5yze180o5xjfqveckpjqiqtoe_0378-JGF-Dechen-Phodrang-Bhutan.jpg'),
        img('fecad1jg1gwzqki7ltqfxszyzl24_1200px-Changangkha_Lhakhang_2021.jpg'),
        img('o4xiotph7os69ac0uxsmaew06pbw_1621019442_shutterstock_1187906419.jpg')
      ],
      3: [
        img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
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
      `${DAY_MARK}Day 3 · Thimphu and simtokha`,
      'Breakfast, then out into the capital',
      'The Memorial Chorten and the Buddha Dordenma',
      'Tashichho Dzong and Simtokha Dzong'
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
        name: 'Thimphu sightseeing with Simtokha Dzong',
        day: 3,
        optional: false,
        image: img('kqyxlm3zn5gwgjd5lylsoe09t68g_shutterstock_1255335592.jpg'),
        description: 'The capital on foot and by road, finishing at Simtokha Dzong, the oldest fortress still standing in the country.'
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
    name: 'Phobjikha',
    dayLabel: 'Day 4',
    images: [
      img('62ay59x8u2qfi8ezdhofxgy7kceg_shutterstock_422773819.jpg'),
      img('beeng6mjeqzf6ugz90sexdijnpsf_shutterstock_1043403151.jpg'),
      img('zgcaaqitv1y1o61fn2id84tqu7bx_shutterstock_2270002569.jpg'),
      img('0vpwuvxmraalrdwkw7zhpar6pcnf_shutterstock_398906899.jpg')
    ],
    dayImages: {
      4: [
        img('drvgw0cecqj73ca524ijipw1n1j6_Wangdue%20Phodrang%20Monastery%201.jpg'),
        img('156qgkjrva6kbo6cjgsqqvq3licz_Wangdue_Phodrang_Dzong.jpg'),
        img('62ay59x8u2qfi8ezdhofxgy7kceg_shutterstock_422773819.jpg'),
        img('beeng6mjeqzf6ugz90sexdijnpsf_shutterstock_1043403151.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · To Phobjikha: Wangdue Phodrang`,
      'Breakfast, then east over the Dochula pass',
      'On through Wangdue towards the Phobjikha valley',
      'Wangdue Phodrang Dzong on its rocky spur',
      'The rivers meeting below the fortress walls'
    ],
    accommodation: {
      name: 'Hotel Phobjikha, Nubding',
      description: '1 night · Breakfast · Standard room · 3★ · Simple lodge on the edge of the Phobjikha valley',
      images: [
        img('g99xpi6fx0sv6w0q1z0z95ihcbk6_6-scaled.jpg'),
        img('3kdxab2xsbzlnnpa6c99uojnvpl2_2-1-scaled.jpg'),
        img('y2uhyi193zdd0glxvx9hoijg13tf_10-scaled.jpeg'),
        img('bfakl7o6eko45husdobi4qkhnrwc_43.jpeg'),
        img('l09ahbb1zkq0vxpuszfhbm6wf6zu_12-scaled.jpeg'),
        img('wko0zj7uy4n6zycqfo1y27astd9c_21-scaled.jpg'),
        img('he4t2s7hizd20ut4gi3wfx6jf3d9_13-scaled.jpg'),
        img('43v9agpajbqzfw2mr25jzieztn75_16-scaled.jpeg')
      ]
    },
    activities: [
      {
        name: 'Wangdue Phodrang Dzong',
        day: 4,
        optional: false,
        image: img('drvgw0cecqj73ca524ijipw1n1j6_Wangdue%20Phodrang%20Monastery%201.jpg'),
        description: 'The fortress on a spur above the confluence of the Puna Tsang and Dang Chhu, rebuilt after the fire of 2012.'
      }
    ],
    program: {
      name: 'Phobjikha',
      description: 'Time on the edge of the Phobjikha valley, the winter ground of the black necked cranes.',
      image: img('62ay59x8u2qfi8ezdhofxgy7kceg_shutterstock_422773819.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Punakha',
    dayLabel: 'Day 5',
    images: [
      img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg'),
      img('0cus70wr77ddobt3sqy9ncmcr32f_shutterstock_1654243042.jpg'),
      img('s6pr84j5yrh3ovy196bm9knzd776_shutterstock_789560344.jpg'),
      img('jo5ycx643snee3eu96h7tr73inp1_shutterstock_1086851528.jpg')
    ],
    dayImages: {
      5: [
        img('hwdpzwlcu41cs2x6cq1rpgsee8zq_Gangtey%20Goemba%20Buddhist%20monastery%201.jpg'),
        img('j6mdu0tk28hq758kizrzzcm2hb9z_Bhutan-Dana_Scheffler-1.png'),
        img('tu7006jnl2qdcjom4vk9czur2rz7_1621019190_shutterstock_197981387.jpg'),
        img('lmylwwkh8qs7zmhzxppfsordx82s_shutterstock_684974815.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · To Punakha: Gangtey`,
      'Breakfast, then east over the Dochula pass',
      'The hundred and eight chortens at the top',
      'Gangtey Goemba on its low ridge',
      'The crane valley spread out below'
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
        name: 'Gangtey and the Phobjikha valley',
        day: 5,
        optional: false,
        image: img('hwdpzwlcu41cs2x6cq1rpgsee8zq_Gangtey%20Goemba%20Buddhist%20monastery%201.jpg'),
        description: 'Gangtey Goemba on its low ridge above the Phobjikha valley, the winter ground of the black necked cranes.'
      }
    ],
    program: {
      name: 'Punakha',
      description: 'Time in the warm old winter capital, with the Dzong between two rivers and the suspension bridge.',
      image: img('xoo5l4crpvz1sakhh0f4bpwcj135_shutterstock_1144214114.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Paro',
    dayLabel: 'Day 6 to 8',
    images: [
      img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
      img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg'),
      img('7msml9xgr38y8l6ykpf50i25qv66_shutterstock_562907131.jpg'),
      img('a1cv5ynkkb11dkjbgaqcjx0fr7r2_shutterstock_416582146.jpg')
    ],
    dayImages: {
      6: [
        img('bhp0lyp0ntb70w7pv4icfuv00hz5_Punakha%20Dzong%20Monastery%201.jpg'),
        img('056auoul5hww4jxhty1ioepx1oi7_5116835341_c68f3cb493_b.jpg'),
        img('0hlgpb14iwhgm0834fzkpbd5sgiv_8154575525_198c2ed1bb_b.jpg'),
        img('ko96ro0x78yapeugwv52j92bnhl1_dl.beatsnoop.com-3000-9rFQJzuTDk.jpg')
      ],
      7: [
        img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg'),
        img('arryt9zia20eawdl6ai40dhg5aut_1481602641_kuil-terindah-di-asia.jpg'),
        img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg'),
        img('vuhk4pi6h6o3pyjz2cbah6z860sc_shutterstock_345764054.jpg')
      ],
      8: [
        img('yu1h20ntlvu7vzurh3ahrr62uwqc_Haa%20Valley%203.jpg'),
        img('byjqlczjh3p5qzvwbjhnm8utazy3_1481602664_HaaValley.jpg'),
        img('vks3jk2dtk15pwnvwjc72mlbgokm_Lhakhang%20Karpo.jpg'),
        img('luzoq7sxa7srm7dvmm8v3z2mdi61_53723990545_edacfc45d2_k.png')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · To Paro: Punakha Dzong`,
      'Breakfast, then west down the valley to Paro',
      'Terraced fields and farmhouses the whole way',
      'Punakha Dzong between the Pho and Mo rivers',
      'The long suspension bridge over the water',
      'The long suspension bridge over the Po Chhu',
      'Prayer flags strung the length of the span',
      `${DAY_MARK}Day 7 · Tiger's nest hike`,
      'Breakfast, then out into the Paro valley',
      'The climb up the pine slope to Taktsang',
      'The monastery wedged into the cliff face',
      `${DAY_MARK}Day 8 · Haa valley`,
      'Breakfast, then out into the Paro valley',
      'Over the Chele La pass at 3,988 metres',
      'Down into the quiet Haa valley'
    ],
    accommodation: {
      name: 'Ananda Resort, Paro',
      description: '3 nights · Breakfast · Standard room · 3★ · Quiet hotel in the valley below Taktsang',
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
        name: 'Punakha sightseeing tour',
        day: 6,
        optional: false,
        image: img('bhp0lyp0ntb70w7pv4icfuv00hz5_Punakha%20Dzong%20Monastery%201.jpg'),
        description: 'The fortress where Bhutan’s kings are crowned, built on the spit of land where two rivers meet below the town.'
      },
      {
        name: 'Punakha suspension bridge',
        day: 6,
        optional: false,
        image: img('ko96ro0x78yapeugwv52j92bnhl1_dl.beatsnoop.com-3000-9rFQJzuTDk.jpg'),
        description: 'One of the longest suspension bridges in Bhutan, strung with prayer flags high over the Po Chhu.'
      },
      {
        name: 'Hike to the Tiger\'s Nest',
        day: 7,
        optional: false,
        image: img('urnyvtso8wwm7tdb7gy7mm9pnq5f_Tigers%20Nest.jpg'),
        description: 'The climb to Taktsang, the monastery wedged into a cliff nine hundred metres above the Paro valley floor.'
      },
      {
        name: 'Haa valley day trip',
        day: 8,
        optional: false,
        image: img('yu1h20ntlvu7vzurh3ahrr62uwqc_Haa%20Valley%203.jpg'),
        description: 'Over the Chele La pass into Haa, a quiet border valley only opened to visitors in 2002.'
      }
    ],
    program: {
      name: 'Paro',
      description: 'Days in the valley below Taktsang, with Rinpung Dzong, the National Museum and the Tiger’s Nest hike.',
      image: img('yru7i10oz6g7m6ctvhnuw0t4hwil_shutterstock_338939330.jpg')
    }
  },
  {
    letter: 'F',
    name: 'Phuentsholing',
    dayLabel: 'Day 9 to 10',
    images: [
      img('z3wdtdnl1ln22u67czwj83nvcax3_shutterstock_1263843943.jpg'),
      img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
      img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
      img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg')
    ],
    dayImages: {
      9: [
        img('khf8y1lpqxenviw5vczf0uh2ytj0_Zangto_Pelri_Lhakhang,_Phuentsholing_during_LGFC_-_Bhutan_2019_(14).jpg'),
        img('eljv9nfavq2ojeluvwgegg0j5t8o_shutterstock_1380814979.jpg'),
        img('wzk43phe3f2n5pie7psn6bf6ehe8_torsa%201.jpg'),
        img('l0fq7fjbnhs2rdw73cyv4fa8c62i_Phuentsholing-Market-1024x682.jpg')
      ],
      10: [
        img('68oyia023fq1mqta9e3zk449gycy_shutterstock_1344366734.jpg'),
        img('gn5pzuoiz27rcleaayf3hc85fuvx_shutterstock_1337724764.jpg'),
        img('hwty98vv0eu5jvsp7lnsejr9z8dz_shutterstock_1500743954.jpg'),
        img('oq67jn4e1rmxsqdu4qru969frsiy_shutterstock_1344377822.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 9 · Onward to Phuentsholing`,
      'Breakfast, then the long run back south',
      'Down through the Chukha gorge to the plains',
      'Optional: Zangto Pelri Lhakhang in the town',
      'Arrival transfer and check in for the night',
      `${DAY_MARK}Day 10 · Departure from Siliguri`,
      'Breakfast at the hotel and check out',
      'Border formalities and transfer to Siliguri'
    ],
    accommodation: {
      name: 'Legphel Hotel, Phuntsholing',
      description: '1 night · Breakfast · Standard room · 3★ · Border town hotel on the Indian frontier',
      images: [
        img('sdvuq9s3gl6rhxg7ty1k7kdbgl9v_Legphel%20Hotel7.jpg'),
        img('edloiky3s19jw7q7nxzb53fnb6ih_Legphel%20Hotel2.jpg'),
        img('znrb4chxmws2mvfr9kqxuiqlamv4_Legphel%20Hotel4.jpg'),
        img('sx8zrwmeg7wzkr17uee8nhekhbu3_Legphel%20Hotel8.jpg'),
        img('iurx4q85zuky4pxdheostm3lnuze_Legphel%20Hotel1.jpg'),
        img('rcjt9ev5kfn7k3h784uxmvlskbaf_Legphel%20Hotel6.jpg'),
        img('y8aokkm5px7pepyct1fhx57pzgeh_Legphel%20Hotel5.jpg'),
        img('kubc7ognnjkrwqyve8pp5olxxeun_Legphel%20Hotel9.jpg'),
        img('4qh4x0yg2u7m1l701d22vf2hlml7_Legphel%20Hotel3.jpg')
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
  slug: 'bhutan-in-ten-days-with-phobjikha',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Bhutan in Ten Days with Phobjikha',
  alt: 'Black necked cranes in the Phobjikha valley',
  days: '10 days / 9 nights',
  stations: '6 stops',
  transport: 'Private vehicle, driver and licensed guide throughout',
  tag: 'Nature',
  tags: ['Nature', 'Culture'],
  price: 65540,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuentsholing', 'Thimphu', 'Phobjikha', 'Punakha', 'Paro', 'Phuentsholing'],
  stats: { days: 10, cities: 6, hotels: 6, activities: 7, transfers: 15 },
  gallery: heroGallery,
  services: [
    ['6 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['15 transfers', 'Transport'],
    ['18 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Tenzin',
    image: '/experts/riya.webp',
    role: 'Bhutan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Ten days is where Bhutan stops being a highlights reel. Phobjikha and the Haa valley are the two places nobody rushes.',
    quoteMore: 'The Haa valley on day eight is the quietest day of the trip. Take a packed lunch and ask the guide to stop at the twin temples.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '10 days through Phuentsholing, Thimphu, Phobjikha, Punakha, Paro, with 9 nights, Breakfast and dinner each day and a licensed Bhutanese guide: the thimphu sightseeing with simtokha dzong, the wangdue phodrang dzong, the gangtey and the phobjikha valley, the punakha sightseeing tour.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 9 nights across Phuentsholing, Thimphu, Phobjikha, Punakha, Paro with Breakfast and dinner each day; all land transfers by private vehicle; the Thimphu sightseeing with Simtokha Dzong; the Wangdue Phodrang Dzong; the Gangtey and the Phobjikha valley; the Punakha sightseeing tour; the Punakha suspension bridge; the Hike to the Tiger\'s Nest; the Haa valley day trip; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
  intro2: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuentsholing (L)', text: 'Arrival at Bagdogra or Siliguri and transfer to Phuentsholing\nBorder formalities at the Bhutan Gate\nCheck in and the rest of the day free', hotel: 'Alem Hotel & Resort', highlights: ['Arrival at Bagdogra or Siliguri and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate', 'Check in and the rest of the day free'] },
    { title: 'Day 2: Onward to Thimphu (B, L)', text: 'Breakfast, then north into the hills towards Thimphu\nThe Chukha dam and the Wang Chhu gorge on the way\nOptional: the Zorig Chusum school of arts\nArrival transfer and check in for the night', hotel: 'Forest Boutique', highlights: ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way', 'Optional: the Zorig Chusum school of arts'] },
    { title: 'Day 3: Thimphu and simtokha (B, L)', text: 'Breakfast, then out into the capital\nThe Memorial Chorten and the Buddha Dordenma\nTashichho Dzong and Simtokha Dzong', hotel: 'Forest Boutique', highlights: ['Breakfast, then out into the capital', 'The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and Simtokha Dzong'] },
    { title: 'Day 4: To Phobjikha: Wangdue Phodrang (B, L)', text: 'Breakfast, then east over the Dochula pass\nOn through Wangdue towards the Phobjikha valley\nWangdue Phodrang Dzong on its rocky spur\nThe rivers meeting below the fortress walls', hotel: 'Hotel Phobjikha', highlights: ['Breakfast, then east over the Dochula pass', 'On through Wangdue towards the Phobjikha valley', 'Wangdue Phodrang Dzong on its rocky spur'] },
    { title: 'Day 5: To Punakha: Gangtey (B, L)', text: 'Breakfast, then east over the Dochula pass\nThe hundred and eight chortens at the top\nGangtey Goemba on its low ridge\nThe crane valley spread out below', hotel: 'White Dragon Hotel Punakha', highlights: ['Breakfast, then east over the Dochula pass', 'The hundred and eight chortens at the top', 'Gangtey Goemba on its low ridge'] },
    { title: 'Day 6: To Paro: Punakha Dzong (B, L)', text: 'Breakfast, then west down the valley to Paro\nTerraced fields and farmhouses the whole way\nPunakha Dzong between the Pho and Mo rivers\nThe long suspension bridge over the water\nThe long suspension bridge over the Po Chhu\nPrayer flags strung the length of the span', hotel: 'Ananda Resort', highlights: ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way', 'Punakha Dzong between the Pho and Mo rivers'] },
    { title: 'Day 7: Tiger\'s nest hike (B, L)', text: 'Breakfast, then out into the Paro valley\nThe climb up the pine slope to Taktsang\nThe monastery wedged into the cliff face', hotel: 'Ananda Resort', highlights: ['Breakfast, then out into the Paro valley', 'The climb up the pine slope to Taktsang', 'The monastery wedged into the cliff face'] },
    { title: 'Day 8: Haa valley (B, L)', text: 'Breakfast, then out into the Paro valley\nOver the Chele La pass at 3,988 metres\nDown into the quiet Haa valley', hotel: 'Ananda Resort', highlights: ['Breakfast, then out into the Paro valley', 'Over the Chele La pass at 3,988 metres', 'Down into the quiet Haa valley'] },
    { title: 'Day 9: Onward to Phuentsholing (B, L)', text: 'Breakfast, then the long run back south\nDown through the Chukha gorge to the plains\nOptional: Zangto Pelri Lhakhang in the town\nArrival transfer and check in for the night', hotel: 'Legphel Hotel', highlights: ['Breakfast, then the long run back south', 'Down through the Chukha gorge to the plains', 'Optional: Zangto Pelri Lhakhang in the town'] },
    { title: 'Day 10: Departure from Siliguri (B)', text: 'Breakfast at the hotel and check out\nBorder formalities and transfer to Siliguri', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Border formalities and transfer to Siliguri'] }
  ],
  outro: 'Not included: international and domestic flights; lunches and any meals not listed; monument entrance fees where not stated; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Bhutan', href: '/asia/bhutan' },
  { label: detail.title }
];

export const bhutanTenDaysWithPhobjikhaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bhutanTenDaysWithPhobjikhaProduct = {
  slug: detail.slug,
  places: ['Phuentsholing', 'Thimphu', 'Phobjikha', 'Punakha', 'Paro'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 10,
  stops: 6,
  hotels: 6,
  cities: 6,
  activities: 7,
  transfers: 15,
  meals: 18,
  price: detail.price,
  images: cardImages
};
