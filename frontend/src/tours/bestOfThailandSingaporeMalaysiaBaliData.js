// Best of Thailand, Singapore, Malaysia and Bali. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('v19tslpbpelnwcjlb8vdysyvm403_shutterstock_1008532504-min.jpg'),
  img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
  img('9b1aalk35m57qheq1e60bq1fzlec_shutterstock_614123699.jpg'),
  img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  img('772kirdev9kt0fj3txxq31gnnayr_shutterstock_236815570.jpg'),
  img('sfw0sw4nhgzk0yegkil8jla98ydq_shutterstock_743903413.jpg'),
  img('5e9ijcb6sko5bebnwtpc3ffal17a_shutterstock_348184013%20(1).jpg'),
  img('jfgxmy9291779dt23uiy471h7zz1_shutterstock_1724300611.jpg'),
  img('0k0xalzod2x1quwxoll1lt3t4ou9_shutterstock_289362893%20(1)-min.jpg'),
  img('uj4mfpnza7hzznm3ek5wzhawzdyl_shutterstock_1093285319.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('v19tslpbpelnwcjlb8vdysyvm403_shutterstock_1008532504-min.jpg'),
  img('9b1aalk35m57qheq1e60bq1fzlec_shutterstock_614123699.jpg'),
  img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg'),
  img('772kirdev9kt0fj3txxq31gnnayr_shutterstock_236815570.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Pattaya',
    dayLabel: 'Day 1 to 2',
    images: [
      img('v19tslpbpelnwcjlb8vdysyvm403_shutterstock_1008532504-min.jpg'),
      img('amvbk3tr55yxg3v3wt9blp27xt6w_shutterstock_1111917086-min.jpg'),
      img('9co979gu2vt35411lqkpvuivbo1s_shutterstock_317628221.jpg'),
      img('3mpn9y9sae9q7ospnpp2x6oclczz_shutterstock_1061228558.jpg')
    ],
    dayImages: {
      1: [
        img('zrxata0eyg8ov4agkbcyc4oehwvj_1578641727_5457359187_ce9abc1e5c_o.jpg'),
        img('x6v1lfbxae08ps310ebyqcp2tqmm_Art%20in%20Paradise.jpg'),
        img('l6mvyy7uuspahqb7kssc2j0sz46h_1579529269_shutterstock_620692271.jpg'),
        img('v19tslpbpelnwcjlb8vdysyvm403_shutterstock_1008532504-min.jpg')
      ],
      2: [
        img('we68xopgvhxvi7wt9eyhehbvwv1w_dl.beatsnoop.com-VHomu5ki9h.jpg'),
        img('kz1jbr0anl74tbg4qaspajd1oxm4_1472036650_8237106102_1f7541157d_b.jpg'),
        img('26irbobpyxgu82qr3ngdovihfmw9_shutterstock_1801193749.jpg'),
        img('v19tslpbpelnwcjlb8vdysyvm403_shutterstock_1008532504-min.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Bangkok and Pattaya`,
      'Arrival at Suvarnabhumi Airport and private transfer to Pattaya',
      'Check in at your hotel near the beach',
      'Rest of the day free on the Gulf coast',
      'Optional: the Alcazar cabaret or Walking Street in the evening',
      `${DAY_MARK}Day 2 · Coral Island by speedboat`,
      'Breakfast, then down to Bali Hai pier',
      'Speedboat across to Coral Island',
      'Free time on the white sand at Tawaen beach',
      'Water sports on the beach at your own cost'
    ],
    accommodation: {
      name: 'Centara Pattaya Hotel, Pattaya',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel near Pattaya beach with a rooftop pool',
      images: [
        img('fd4jn7pese14yt8lbkrh4hgiwx2i_415688449.jpg'),
        img('5s95z7fg7n5i81b9j0ae6kwiy8eq_415691259.jpg'),
        img('593e2w2g094ajao5rynhjchxiemr_414740655.jpg'),
        img('rzxqnc1nna4mx0i59go8lmprv5b0_download%20(15).jpg'),
        img('2k95sn0w1fkpz37n06ttikyv8fif_415691249.jpg'),
        img('mtvzkhyimhm10npr9aau2qpjfx1p_415688459.jpg'),
        img('ijevrfal489sdx2yacxeacbfwa6c_415688255.jpg'),
        img('zdsw0l39bqvbtv3kb6fbb46aa3ri_415688456.jpg'),
        img('tx7ke60gdk9ife93baw96t1zokpd_415691244.jpg'),
        img('37uv62mw2he1okr2fdfq5ttzfuyy_415691275.jpg'),
        img('sy1q1db9rv9amubnhgr3t9t95wfn_415688471.jpg')
      ]
    },
    activities: [
      {
        name: 'Coral Island day trip',
        day: 2,
        optional: false,
        image: img('we68xopgvhxvi7wt9eyhehbvwv1w_dl.beatsnoop.com-VHomu5ki9h.jpg'),
        description: 'Speedboat out to Koh Larn for a day on the white sand at Tawaen beach, with water sports available on the beach at your own cost.'
      }
    ],
    program: {
      name: 'Pattaya',
      description: 'Two nights on the Gulf of Thailand to open the trip, with a speedboat day out to the white sand of Coral Island.',
      image: img('v19tslpbpelnwcjlb8vdysyvm403_shutterstock_1008532504-min.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Singapore',
    subtitle: 'Singapore to Sentosa',
    dayLabel: 'Day 3 to 6',
    images: [
      img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg'),
      img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
      img('v60hqsq1le1ub9ibteulgapdl3s6_shutterstock_157315883.jpg'),
      img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg')
    ],
    dayImages: {
      3: [
        img('nwaa7uo4j6hcpv64q2eqa76nlf2e_Tram%20Experience%20-%20Chawang.jpg'),
        img('cgx6ab1cspd7wu0e04jze3dzbibk_singapore_night_safari.jpg'),
        img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg'),
        img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg')
      ],
      4: [
        img('ot1uvy0etl8nyv7edixsziiu6e2j_experience-marina-bay-sands-skypark-tickets-skip-the-line-5.webp'),
        img('h9txhlgrjmsjumkqyjl8jm64fc8d_shutterstock_2275983891.jpg'),
        img('c84x21kvsrfaulecrejvdijklc5k_ftegb1rf55gpv0r0dayo5asaectx_page-image-gardens-by-the-bay_1512x1120.jpg'),
        img('jwlzbjgtssjrmqxl43gm24x9p30t_Singapore-Gardens-By-The-Bay-evening-2048x1365.jpg')
      ],
      5: [
        img('d33lwqdb9mk4ml0qwdat0daij9n8_shutterstock_210555943.jpg'),
        img('s2r4nfl80qk64lm24j05vwdt984y_VIAL1673.JPG'),
        img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg'),
        img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg')
      ],
      6: [
        img('durtbjf99crlygjse28sv48r10xs_shutterstock_1319645060.jpg'),
        img('mmto1hk2nujlkltfsadj9s2ch3j9_1563452033_shutterstock_208160683_(1).jpg'),
        img('etwjtvxjtctcyj8zmdmmtz5rnff7_1563607619_shutterstock_1155676858.jpg'),
        img('xkc5gws4qd4uax4hvxwihi35fv35_1563619864_shutterstock_793620280.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · On to Singapore and night safari`,
      'Breakfast and check out, then on to the airport',
      'Optional: flight from Bangkok to Singapore, which we can add',
      'Arrival at Changi and private transfer to your hotel',
      'Evening tram ride at the Singapore Night Safari',
      `${DAY_MARK}Day 4 · Marina Bay and the Gardens`,
      'Breakfast, then across to Marina Bay',
      'The SkyPark deck above Marina Bay Sands',
      'Cloud Forest and its indoor waterfall at Gardens by the Bay',
      'The Supertree light show after dark',
      `${DAY_MARK}Day 5 · A day at Universal Studios`,
      'Breakfast, then across to Sentosa island',
      'Full day ticket for Universal Studios Singapore',
      'Coasters, themed zones and the street shows',
      'Evening free around Bugis and Albert Street',
      `${DAY_MARK}Day 6 · Singapore city tour`,
      'Breakfast, then a half day city tour with a guide',
      'Merlion Park, Marina Bay and the colonial quarter',
      'Chinatown lanes and the Sri Mariamman temple',
      'Optional: Orchard Road or a hawker centre dinner'
    ],
    accommodation: {
      name: 'ibis Styles Singapore Albert, Singapore',
      description: '4 nights · Breakfast · Standard room · 3★ · Albert Street hotel beside Bugis, close to two metro lines',
      images: [
        img('u49qrqdxk7a9v2kgougyhmxznq1n_95ca5e137069474c511a7770968f7f38.webp'),
        img('zrzh1361w94h596w54a48phmf6wz_390741762.jpg'),
        img('yd0uimdaej09u1futaud8hekhw8t_2f590fc274cacc2d9498d5d656f5c243.webp'),
        img('15i8u03ylbuxfcca23rkin1nrfl4_2dc12af33bcca2740997514f22383d3f.webp'),
        img('ez3sbegiaryrju0ci2n4qc1p8m4r_385066341.jpg'),
        img('xiszpak15i50c7pquqwudd21494l_aebc8f0178557b5eb7c8a74932b23cc7.webp'),
        img('hveqiybr65n5v35tih917ukg8va4_c41c1ff7a32d2832234a819497b317ea.webp'),
        img('2ub45ude8dkonlm5eqosf8i34un1_4ac7f50b14f4056c546003f2b71fe181.jpg'),
        img('33d8yvbulapg3khd1vrchl2ss3w1_2552b7f31b7d7ad609c2842de1b6de53.webp'),
        img('mkeutksl5di04xiazp12so3linc6_0e351f0b149121cb88eadee8fe1c219d.webp'),
        img('4ngz8i7lf66uwsucc5u7cf7rybeu_feccefe4e02f236871dcd98abf8a2f97.webp'),
        img('1bnfubgsc35lmzb3e7kd72ik9bv5_390741789.jpg'),
        img('eh1f81xsh7knnk8ze20omhk60pyp_385066342.jpg'),
        img('r3fpdf3gnu48pqisirqkm6jzv4ek_364707611.jpg'),
        img('xwo9dkbpfs94hxy0ql29smz0rw67_97435077.jpg')
      ]
    },
    activities: [
      {
        name: 'Night Safari with tram ride',
        day: 3,
        optional: false,
        image: img('nwaa7uo4j6hcpv64q2eqa76nlf2e_Tram%20Experience%20-%20Chawang.jpg'),
        description: 'The world\'s first nocturnal zoo, with a tram ride through seven habitats and walking trails where the animals are at their most active.'
      },
      {
        name: 'Marina Bay Sands SkyPark',
        day: 4,
        optional: false,
        image: img('ot1uvy0etl8nyv7edixsziiu6e2j_experience-marina-bay-sands-skypark-tickets-skip-the-line-5.webp'),
        description: 'The observation deck fifty seven floors above Marina Bay, with the city, the port and the Gardens by the Bay domes below you.'
      },
      {
        name: 'Gardens by the Bay',
        day: 4,
        optional: false,
        image: img('c84x21kvsrfaulecrejvdijklc5k_ftegb1rf55gpv0r0dayo5asaectx_page-image-gardens-by-the-bay_1512x1120.jpg'),
        description: 'Entry to the Cloud Forest with its indoor waterfall, and the Supertree light show in the evening a short walk away.'
      },
      {
        name: 'Universal Studios Singapore',
        day: 5,
        optional: false,
        image: img('d33lwqdb9mk4ml0qwdat0daij9n8_shutterstock_210555943.jpg'),
        description: 'A full day ticket for the Sentosa theme park, with seven themed zones, the duelling roller coasters and the street shows.'
      },
      {
        name: 'Singapore city tour',
        day: 6,
        optional: false,
        image: img('durtbjf99crlygjse28sv48r10xs_shutterstock_1319645060.jpg'),
        description: 'A half day tour past Merlion Park, the Marina Bay waterfront, Chinatown and the colonial quarter, with a guide on a shared coach.'
      }
    ],
    program: {
      name: 'Singapore',
      description: 'Four nights in the city with a night safari, the Marina Bay SkyPark, Gardens by the Bay, a full day at Universal Studios and a guided city tour.',
      image: img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Kuala Lumpur',
    subtitle: 'Kuala Lumpur to Genting Highlands',
    dayLabel: 'Day 7 to 8',
    images: [
      img('8npmp4jkvqvuucll4nlpxbbvvyhs_shutterstock_121740241.jpg'),
      img('rkhc8adk10671jjr6lg6n122cifp_shutterstock_2220401575.jpg'),
      img('9b1aalk35m57qheq1e60bq1fzlec_shutterstock_614123699.jpg'),
      img('kos2k1eovszqjm1js7l5seyy94j7_shutterstock_2186432%20(1).jpg')
    ],
    dayImages: {
      7: [
        img('0k9c6aklbjokufd0ms9cfid5wx2e_shutterstock_236465974.jpg'),
        img('dbgfo963skrn6gtvp0ou7e6qrmrt_petronas%20twin%20towers1.jpg'),
        img('00vcs4gtc188b1vvb2i7ktl3dq03_1578901360_shutterstock_1327893905.jpg'),
        img('csbdtzwtd7ezkhdshcf68qlmsv81_meredeka.jpg1.jpg')
      ],
      8: [
        img('o6f65e81jw3m2kptpwi80samzk93_1557946215_shutterstock_323599259.jpg'),
        img('8u8ev09ru5v92iljnnk58ju7waa3_25.webp'),
        img('u9ntenzgiyxud8luheh0edpzndca_jpg.jpeg'),
        img('jwzx5ixlse9sd03dd4v7qadm3p40_banner@2x.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · On to Kuala Lumpur`,
      'Breakfast and check out, then on to the airport',
      'Optional: flight from Singapore to Kuala Lumpur, which we can add',
      'City tour: the palace gates, Merdeka Square, the old station',
      'Check in at your Bukit Bintang hotel',
      `${DAY_MARK}Day 8 · Batu Caves and Genting`,
      'Breakfast, then north to Batu Caves',
      'The golden statue and the painted temple steps',
      'Awana SkyWay cable car up to Genting Highlands',
      'The hill resort and its indoor theme park'
    ],
    accommodation: {
      name: 'Arenaa Star Hotel, Kuala Lumpur',
      description: '2 nights · Breakfast · Standard room · 3★ · Bukit Bintang hotel close to the food streets and the monorail',
      images: [
        img('d7udwey0y0gh65awnlbbbc9jx3k2_download%20(15).jpg'),
        img('q1e0wcwej6xmglqlce3y4ukjn7cg_download%20(21).jpg'),
        img('c9vofn1m46uawl19t8hlipsposkl_download%20(25).jpg'),
        img('uf8qulqunb59gipf5tfhs0hqg9uz_download%20(19).jpg'),
        img('n9um5edn3hflhu7e0l5eozx8sqr3_download%20(24).jpg'),
        img('qyxhvsy3p58yh1m1vswwvphoehdy_download%20(27).jpg'),
        img('a3mjqlon9dphtrevtywce0ie5qv7_download%20(30).jpg'),
        img('i3nb9t1odp6u5fe820fnnbu7f4cs_download%20(17).jpg'),
        img('tz9i8my7ruw00737erwjxz8l85y4_download%20(16).jpg')
      ]
    },
    activities: [
      {
        name: 'Kuala Lumpur half day city tour',
        day: 7,
        optional: false,
        image: img('0k9c6aklbjokufd0ms9cfid5wx2e_shutterstock_236465974.jpg'),
        description: 'The King\'s palace gates, the National Monument, Merdeka Square and the old railway station, with a photo stop at the towers.'
      },
      {
        name: 'Batu Caves',
        day: 8,
        optional: false,
        image: img('o6f65e81jw3m2kptpwi80samzk93_1557946215_shutterstock_323599259.jpg'),
        description: 'The golden Murugan statue and the two hundred and seventy two painted steps up to the limestone cave temples above the city.'
      },
      {
        name: 'Awana SkyWay cable car',
        day: 8,
        optional: false,
        image: img('u9ntenzgiyxud8luheh0edpzndca_jpg.jpeg'),
        description: 'The glass fronted cable car up the hillside to Genting, with the rainforest canopy and the Chin Swee temple below you.'
      },
      {
        name: 'Genting Highlands day trip',
        day: 8,
        optional: false,
        image: img('z2jt6va9nehldkztq8r4ht647vj0_1564647542_shutterstock_440759242.jpg'),
        description: 'The hill resort at eighteen hundred metres, with its indoor theme park, shopping floors and cool mountain air all afternoon.'
      }
    ],
    program: {
      name: 'Kuala Lumpur',
      description: 'Two nights in Bukit Bintang, with a city tour on arrival and a full hill day taking in Batu Caves and Genting by cable car.',
      image: img('8npmp4jkvqvuucll4nlpxbbvvyhs_shutterstock_121740241.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Ubud',
    subtitle: 'Ubud to Kintamani',
    dayLabel: 'Day 9 to 11',
    images: [
      img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
      img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
      img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
      img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg')
    ],
    dayImages: {
      9: [
        img('2kpx79s3vxrjrh07k2kaajmjalmw_shutterstock_2313711741.jpg'),
        img('p5qmu24btsi6rw9ye14yp9y3v9js_1464162732_things-to-do-in-bali-ubud-art-market.jpg'),
        img('kmleb6ur2b7j83f6gt2jg3z1kaw0_1470727921_Goa_Gajah_Front.JPG'),
        img('xhm7apn2p4xf3utfjc38fhrs94cs_1470740091_maxresdefault.jpg')
      ],
      10: [
        img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        img('2culn1ep9ggkxlwlndfxpxf5hddd_1470728585_9699341652_4f918fdd16_b.jpg'),
        img('tn1ow4lnbf9v90ldgk4uzkvgvle6_1498632417_big_tegenungan.jpg'),
        img('p1tzfipjpmq6677grx16krlrwx9v_shutterstock_243349891.jpg')
      ],
      11: [
        img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg'),
        img('8nznsvvkw8k3re558a9phmzu8azc_Ubud-5.jpg'),
        img('9gr4ao6781z2k027hdqu4fssznlx_shutterstock_1059984695.jpg'),
        img('57aawesqzlg4nmxhg88d3bdmsze9_Ubud-3.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 9 · On to Bali and Ubud`,
      'Breakfast and check out, then on to the airport',
      'Optional: flight from Kuala Lumpur to Denpasar, which we can add',
      'Arrival in Bali and private transfer to your Ubud resort',
      'Rest of the day free among the rice fields',
      `${DAY_MARK}Day 10 · Kintamani and rice terraces`,
      'Breakfast, then a full day out with your own car and guide',
      'Coffee plantation tasting on the climb to Kintamani',
      'Tegenungan waterfall and the Tegalalang rice terraces',
      'A turn on the jungle swing above the valley',
      `${DAY_MARK}Day 11 · Departure from Bali`,
      'Breakfast at the resort and check out',
      'Private transfer to Ngurah Rai Airport for your flight home'
    ],
    accommodation: {
      name: 'Bakung Ubud Resort & Villa, Ubud',
      description: '2 nights · Breakfast · Standard room · 3★ · Garden resort a short walk from the Ubud market',
      images: [
        img('q6zgelz98v5kbftom1frp3ue32g1_173822791.jpg'),
        img('iz5cujufuwfqtntxg636u4gy8tuv_173822761.jpg'),
        img('hcvkzwnjgr94hwetf4dl0oket9t9_173822678.jpg'),
        img('upfjfdwka8me9tpttnoucqns6bhl_173822709.jpg'),
        img('5w92c9d49j3xgci27zz4ci5v9hju_173822673.jpg'),
        img('x2gjvzwlcxzxepv8oj66z4kya8rw_173822721.jpg'),
        img('6dmfjxqmk42rm2yuboamz9edv1rt_173822779.jpg'),
        img('j9qn1ykahshgxluwm6zed5j4fgo4_173825040.jpg'),
        img('980vtfp7zvo1jb1y0sf4g6sro4k1_59584268.jpg'),
        img('6gdmnd7cj4egkuk7hgepou1we1bo_173866707.jpg'),
        img('nbus5yxsh83tm8tz0qt283avv8ua_173822675.jpg'),
        img('uhhu92jn9usu53pjc2llrkm2vqqp_173822684.jpg'),
        img('z32dunr9mw486f91h5balma9mvei_173867651.jpg'),
        img('tch6q3pwlyue02esd15qrl2hew08_173867130.jpg'),
        img('hii71e6wq2ldnjskkz8cw4luo0z2_173822763.jpg'),
        img('sqyres45da5veqed7cte9x086102_173822785.jpg')
      ]
    },
    activities: [
      {
        name: 'Kintamani and rice terrace day tour',
        day: 10,
        optional: false,
        image: img('zdfflm7tyi674x5kq67fmlott6x5_mtdner6njdwywrrajft196wfemll_shutterstock_1360413095.jpg'),
        description: 'Coffee plantation tasting on the climb to Kintamani, the crater lake view, Tegenungan waterfall, the Tegalalang terraces and the jungle swing.'
      }
    ],
    program: {
      name: 'Ubud',
      description: 'Two nights in Bali to finish, with a coffee plantation day up to the Kintamani crater and the rice terraces at Tegalalang.',
      image: img('yoldjsp1frobz5bhu7698525831a_Ubud-1.jpg')
    }
  }
];

const detail = {
  slug: 'best-of-thailand-singapore-malaysia-and-bali',
  ctaHref: '/l/indonesia/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Best of Thailand, Singapore, Malaysia and Bali',
  alt: 'Coral Island beach off Pattaya, Thailand',
  days: '11 days / 10 nights',
  stations: '4 stops',
  transport: 'Private transfers, city tours and guided day tours',
  tag: 'Culture',
  tags: ['Family', 'Culture'],
  price: 118798,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Pattaya', 'Singapore', 'Sentosa', 'Kuala Lumpur', 'Ubud'],
  stats: { days: 11, cities: 4, hotels: 4, activities: 11, transfers: 21 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['11 experiences', 'Activities'],
    ['21 transfers', 'Transport'],
    ['10 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Putu',
    image: '/experts/riya.webp',
    role: 'Indonesia expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Four countries in eleven days sounds like a lot, but the hops are all under three hours. Nothing feels rushed.',
    quoteMore: 'Take the morning service on each hop and you keep every afternoon. Pack one small bag you can live out of, because you change hotels four times and the full cases stay packed.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eleven days and four countries: Coral Island from Pattaya, four nights in Singapore for the night safari, Marina Bay and Universal Studios, Kuala Lumpur for Batu Caves and Genting, then Bali for Kintamani and the rice terraces.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 10 nights with daily breakfast; private airport and city transfers; Coral Island day trip; Night Safari; Marina Bay Sands SkyPark; Gardens by the Bay; Universal Studios; Singapore city tour; Kuala Lumpur city tour; Batu Caves; Awana SkyWay and Genting day trip; Kintamani and rice terrace tour.',
  intro2: 'Not included: international flights; the Bangkok to Singapore, Singapore to Kuala Lumpur and Kuala Lumpur to Denpasar flights, which we can add; visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Bangkok and Pattaya (Arrival)', text: 'Arrival at Suvarnabhumi Airport and private transfer to Pattaya\nCheck in at your hotel near the beach\nRest of the day free on the Gulf coast\nOptional: the Alcazar cabaret or Walking Street in the evening', hotel: 'Centara Pattaya Hotel', highlights: ['Arrival at Suvarnabhumi Airport and private transfer to Pattaya', 'Check in at your hotel near the beach', 'Rest of the day free on the Gulf coast'] },
    { title: 'Day 2: Coral Island by speedboat (B)', text: 'Breakfast, then down to Bali Hai pier\nSpeedboat across to Coral Island\nFree time on the white sand at Tawaen beach\nWater sports on the beach at your own cost', hotel: 'Centara Pattaya Hotel', highlights: ['Breakfast, then down to Bali Hai pier', 'Speedboat across to Coral Island', 'Free time on the white sand at Tawaen beach'] },
    { title: 'Day 3: On to Singapore and night safari (B)', text: 'Breakfast and check out, then on to the airport\nOptional: flight from Bangkok to Singapore, which we can add\nArrival at Changi and private transfer to your hotel\nEvening tram ride at the Singapore Night Safari', hotel: 'ibis Styles Singapore Albert', highlights: ['Breakfast and check out, then on to the airport', 'Optional: flight from Bangkok to Singapore, which we can add', 'Arrival at Changi and private transfer to your hotel'] },
    { title: 'Day 4: Marina Bay and the Gardens (B)', text: 'Breakfast, then across to Marina Bay\nThe SkyPark deck above Marina Bay Sands\nCloud Forest and its indoor waterfall at Gardens by the Bay\nThe Supertree light show after dark', hotel: 'ibis Styles Singapore Albert', highlights: ['Breakfast, then across to Marina Bay', 'The SkyPark deck above Marina Bay Sands', 'Cloud Forest and its indoor waterfall at Gardens by the Bay'] },
    { title: 'Day 5: A day at Universal Studios (B)', text: 'Breakfast, then across to Sentosa island\nFull day ticket for Universal Studios Singapore\nCoasters, themed zones and the street shows\nEvening free around Bugis and Albert Street', hotel: 'ibis Styles Singapore Albert', highlights: ['Breakfast, then across to Sentosa island', 'Full day ticket for Universal Studios Singapore', 'Coasters, themed zones and the street shows'] },
    { title: 'Day 6: Singapore city tour (B)', text: 'Breakfast, then a half day city tour with a guide\nMerlion Park, Marina Bay and the colonial quarter\nChinatown lanes and the Sri Mariamman temple\nOptional: Orchard Road or a hawker centre dinner', hotel: 'ibis Styles Singapore Albert', highlights: ['Breakfast, then a half day city tour with a guide', 'Merlion Park, Marina Bay and the colonial quarter', 'Chinatown lanes and the Sri Mariamman temple'] },
    { title: 'Day 7: On to Kuala Lumpur (B)', text: 'Breakfast and check out, then on to the airport\nOptional: flight from Singapore to Kuala Lumpur, which we can add\nCity tour: the palace gates, Merdeka Square, the old station\nCheck in at your Bukit Bintang hotel', hotel: 'Arenaa Star Hotel, Kuala Lumpur', highlights: ['Breakfast and check out, then on to the airport', 'Optional: flight from Singapore to Kuala Lumpur, which we can add', 'City tour: the palace gates, Merdeka Square, the old station'] },
    { title: 'Day 8: Batu Caves and Genting (B)', text: 'Breakfast, then north to Batu Caves\nThe golden statue and the painted temple steps\nAwana SkyWay cable car up to Genting Highlands\nThe hill resort and its indoor theme park', hotel: 'Arenaa Star Hotel, Kuala Lumpur', highlights: ['Breakfast, then north to Batu Caves', 'The golden statue and the painted temple steps', 'Awana SkyWay cable car up to Genting Highlands'] },
    { title: 'Day 9: On to Bali and Ubud (B)', text: 'Breakfast and check out, then on to the airport\nOptional: flight from Kuala Lumpur to Denpasar, which we can add\nArrival in Bali and private transfer to your Ubud resort\nRest of the day free among the rice fields', hotel: 'Bakung Ubud Resort & Villa', highlights: ['Breakfast and check out, then on to the airport', 'Optional: flight from Kuala Lumpur to Denpasar, which we can add', 'Arrival in Bali and private transfer to your Ubud resort'] },
    { title: 'Day 10: Kintamani and rice terraces (B)', text: 'Breakfast, then a full day out with your own car and guide\nCoffee plantation tasting on the climb to Kintamani\nTegenungan waterfall and the Tegalalang rice terraces\nA turn on the jungle swing above the valley', hotel: 'Bakung Ubud Resort & Villa', highlights: ['Breakfast, then a full day out with your own car and guide', 'Coffee plantation tasting on the climb to Kintamani', 'Tegenungan waterfall and the Tegalalang rice terraces'] },
    { title: 'Day 11: Departure from Bali (B)', text: 'Breakfast at the resort and check out\nPrivate transfer to Ngurah Rai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the resort and check out', 'Private transfer to Ngurah Rai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; the Bangkok to Singapore, Singapore to Kuala Lumpur and Kuala Lumpur to Denpasar flights, which we can add; visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Indonesia', href: '/asia/indonesia' },
  { label: detail.title }
];

export const bestOfThailandSingaporeMalaysiaBaliBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const bestOfThailandSingaporeMalaysiaBaliProduct = {
  slug: detail.slug,
  places: ['Pattaya', 'Singapore', 'Sentosa', 'Kuala Lumpur', 'Ubud'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 11,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 11,
  transfers: 21,
  meals: 10,
  price: detail.price,
  images: cardImages
};
