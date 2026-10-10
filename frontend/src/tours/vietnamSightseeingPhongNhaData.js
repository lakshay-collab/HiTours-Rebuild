// Vietnam Sightseeing with Phong Nha. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
  img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg'),
  img('sfaf8cjrjq967uczma95nofojgrh_shutterstock_679741753.jpg'),
  img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg'),
  img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('chc0brh1ox3ps4j2gkd3o7sltiku_shutterstock_298757792.jpg'),
  img('sang2l8tr5ugh0qhhwq70iu2rpjn_shutterstock_389487718.jpg'),
  img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
  img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
  img('sfaf8cjrjq967uczma95nofojgrh_shutterstock_679741753.jpg'),
  img('sang2l8tr5ugh0qhhwq70iu2rpjn_shutterstock_389487718.jpg'),
  img('9vrezna8h8pfdre61fk4dxq7ob5u_shutterstock_778187254.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    subtitle: 'Hanoi and Ninh Binh',
    dayLabel: 'Day 1 to 2',
    images: [
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg')
    ],
    dayImages: {
      1: [
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg'),
        img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg')
      ],
      2: [
        img('1b7t5qk08ptmrwnhze4z7t77pflc_shutterstock_2309649499.jpg'),
        img('yx7xjkegdm9ruyh3rv7d2qtwgjyg_8224556638_2c76bfbba5_o.jpg'),
        img('m9yizaucm34mdy6jeo07klf59c3r_51986787203_3b201c83cb_b.jpg'),
        img('8zsyn00w33flh1y50mn0irdngahv_shutterstock_591172484.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Hanoi`,
      'Arrival at Noi Bai airport and transfer to your hotel',
      'Check in at your hotel in the old quarter',
      'Rest of the day free at your own pace',
      'Optional: an evening walk around Hoan Kiem lake',
      `${DAY_MARK}Day 2 · Ninh Binh and Bich Dong`,
      'Breakfast, then south towards Ninh Binh',
      'A rowing boat through the flooded caves at Tam Coc',
      'A cycle ride through the rice fields',
      'Bich Dong, a pagoda built into the rock'
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
        name: 'Ninh Binh day tour',
        day: 2,
        optional: false,
        image: img('1b7t5qk08ptmrwnhze4z7t77pflc_shutterstock_2309649499.jpg'),
        description: 'South to Ninh Binh for a rowing boat through the flooded caves at Tam Coc and the limestone country around it.'
      },
      {
        name: 'Cycle ride to Bich Dong pagoda',
        day: 2,
        optional: false,
        image: img('8zsyn00w33flh1y50mn0irdngahv_shutterstock_591172484.jpg'),
        description: 'A cycle ride through the rice fields to Bich Dong, a three tier pagoda built into the rock face.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Two nights in the old quarter, with a full day south to Ninh Binh and a cycle ride to Bich Dong.',
      image: img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Halong Bay',
    dayLabel: 'Day 3',
    images: [
      img('anokjwn2ztodzjiuh41v7xtsi4nb_shutterstock_257155450.jpg'),
      img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg'),
      img('ess8tbxn8tc68q49uptyn8nsx4he_shutterstock_1218764578.jpg'),
      img('4htmt1ezsgvun0n6isr7x482cgy6_shutterstock_211441507.jpg')
    ],
    dayImages: {
      3: [
        img('7mguhuxso9mo6u8stlw8ik1pb23f_shutterstock_1425907181.jpg'),
        img('3yvzew883i398qg1nytjaz1ju0q8_48479739932_e3fe5de4a5_o.jpg'),
        img('hgd0lkqqpjyb5kf9jxhj3agvo0q1_5536617078_0956a7edd1_o.jpg'),
        img('co10oqk1r9n0kllwfq7q3aaubtc7_40307648665_8584ddecc8_o.jpg')
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
        image: img('7mguhuxso9mo6u8stlw8ik1pb23f_shutterstock_1425907181.jpg'),
        description: 'A shared cruise out among the limestone islands, with lunch and dinner on board and a night moored in a quiet bay.'
      }
    ],
    program: {
      name: 'Halong Bay',
      description: 'A night on the water among the limestone islands, with all meals served on board.',
      image: img('anokjwn2ztodzjiuh41v7xtsi4nb_shutterstock_257155450.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Dong Hoi',
    subtitle: 'Dong Hoi and the Phong Nha caves',
    dayLabel: 'Day 4 to 5',
    images: [
      img('9vrezna8h8pfdre61fk4dxq7ob5u_shutterstock_778187254.jpg'),
      img('rrk2tp05dsap8vyiq47o5l7tw7ib_shutterstock_1413538256.jpg'),
      img('sfaf8cjrjq967uczma95nofojgrh_shutterstock_679741753.jpg'),
      img('4fud75bgzmut5gq64dkyo1y9npat_shutterstock_420035653.jpg')
    ],
    dayImages: {
      4: [
        img('ti4iuqikcu6frbqcoa0nmmx9vsvw_shutterstock_1872545233.jpg'),
        img('e7747wfxl9x32ioao96vp1zudykf_44844044645_6347bf750e_o.jpg'),
        img('9vrezna8h8pfdre61fk4dxq7ob5u_shutterstock_778187254.jpg'),
        img('rrk2tp05dsap8vyiq47o5l7tw7ib_shutterstock_1413538256.jpg')
      ],
      5: [
        img('rt3x756b3ouu9jlkhsvxser35ekl_shutterstock_1561873999.jpg'),
        img('kxlco24mk7s9aii5yu9mu3lhft2a_michael-behrens-CZABLi1Lbk4-unsplash.jpg'),
        img('vd035pyd8zk0t7k4rmdrrctk22i2_unnamed.jpg'),
        img('9vrezna8h8pfdre61fk4dxq7ob5u_shutterstock_778187254.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · South to Dong Hoi`,
      'Breakfast on board, then the climb into the Surprise Cave',
      'Back to the pier and on to Hanoi',
      'The journey south to Dong Hoi',
      'Check in at the lakeside resort in the valley',
      `${DAY_MARK}Day 5 · Phong Nha and the Dark Cave`,
      'Breakfast, then into the national park',
      'A boat into the mouth of Phong Nha cave',
      'A zip line across the river to the Dark Cave',
      'The mud pools inside, then back to the resort'
    ],
    accommodation: {
      name: 'Phong Nha Lake House Resort, Dong Hoi',
      description: '2 nights · Breakfast · Standard room · 3★ · Lakeside resort in the Phong Nha valley, among the karst hills',
      images: [
        img('i24p2cg2kw374wqxyhtuvyavfc6n_bg_section_main.webp'),
        img('lh5r1q9rs0caqkc5z2n5gbjujznw_136586140.jpg'),
        img('cbx4mi9iqn83n2uovlhr7fh19owx_136585595.jpg'),
        img('iy2zqsxywiycb3odrptlmwfufld3_233734403.jpg'),
        img('ouw77dr7ksi9r4uq19tyvald6or0_136584696.jpg'),
        img('8qsoozc1f5mtvtltk2ttvzuy86y5_136585389.jpg'),
        img('o2iqx8o35p20u3d7gmdomld3ntds_136585456.jpg'),
        img('tjdopc5pzcjijydkvjxvixergdgt_508743053.jpg'),
        img('txbp1izx8f9vih434ldyomfc2cc4_221304281.jpg'),
        img('ojkn47owtarqn2aamrx841p6kf6m_221304217.jpg'),
        img('w562w2ycowpp6d2t0xrphzvjwjme_136586145.jpg'),
        img('kc5ymmzyn4subucnd7njcjnz2aew_325088134.jpg'),
        img('9sbzthgs48nwlvvpavsi3tmjxuu3_136585621.jpg'),
        img('mbq9pu2dthzi1rnasxj1iyomq8b0_194840838.jpg')
      ]
    },
    activities: [
      {
        name: 'Surprise Cave on Bo Hon island',
        day: 4,
        optional: false,
        image: img('ti4iuqikcu6frbqcoa0nmmx9vsvw_shutterstock_1872545233.jpg'),
        description: 'A morning climb into the Surprise Cave, three great chambers of stalactites above the water, before the boat turns back.'
      },
      {
        name: 'Phong Nha cave day tour',
        day: 5,
        optional: false,
        image: img('rt3x756b3ouu9jlkhsvxser35ekl_shutterstock_1561873999.jpg'),
        description: 'A boat into the mouth of Phong Nha, one of the great river caves of the world, through chambers the river has cut for millions of years.'
      },
      {
        name: 'Dark Cave with the mud bath',
        day: 5,
        optional: false,
        image: img('vd035pyd8zk0t7k4rmdrrctk22i2_unnamed.jpg'),
        description: 'A zip line across the river into the Dark Cave, then a wade and a swim through the mud pools inside it.'
      }
    ],
    program: {
      name: 'Dong Hoi',
      description: 'Two nights in the Phong Nha valley for the great river cave and the mud pools of the Dark Cave.',
      image: img('9vrezna8h8pfdre61fk4dxq7ob5u_shutterstock_778187254.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Da Nang',
    subtitle: 'Da Nang and Ba Na Hills',
    dayLabel: 'Day 6 to 7',
    images: [
      img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
      img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
      img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
      img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg')
    ],
    dayImages: {
      6: [
        img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
        img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
        img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
        img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg')
      ],
      7: [
        img('4arj222jby0yobyhxutcze6movjx_1580714303_shutterstock_1343264876.jpg'),
        img('bbeokkqegcwgy51eqlvyhfvmlgis_1467287106_BaNaHillsCableCar.jpg'),
        img('84tapj6qwgvbv9sgdfd6q1233uak_1467287160_Linh_Ung_Pagoda.jpg'),
        img('yhxwfmhdmt1hhx1z5nna2xphz1k3_golden-bridge-4912803_1280.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · On to Da Nang`,
      'Breakfast and check out, then south to Da Nang',
      'Check in near My Khe beach',
      'Rest of the day free at your own pace',
      'Optional: the Marble Mountains above the coast road',
      `${DAY_MARK}Day 7 · Ba Na Hills`,
      'Breakfast, then the cable car up to Ba Na',
      'The Golden Bridge held up by two stone hands',
      'The French village and the gardens at the top',
      'Back down to Da Nang in the evening'
    ],
    accommodation: {
      name: 'Luxtery Da Nang, Da Nang',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Simple hotel a few streets back from My Khe beach',
      images: [
        img('bt3i1gnd648i005c7ukinian0v7f_716d455e0818ea7e050e40523d4f7bac.jpg'),
        img('eop28g1inzoo9ya667pqrhdh1rlv_478766351.jpg'),
        img('nfxjf6q4ulh0dha6nt3mcirl56e6_img2.jpg'),
        img('afquyrovth2uupbnm3o6hgqcvfs8_img1.jpg'),
        img('oo3d2hm5caolatb91etff7qidvl1_img5.jpg'),
        img('exk9fpif6rldrbebi50o9wgys791_img8.jpg'),
        img('pjxfju4hrjayo3d7sxfw33cqz101_img9.jpg'),
        img('3zfln2aq0p751007t05ru119g4r8_img3.jpg'),
        img('4y93qy538z0maxe2gadfuq6pqmz7_img12.jpg'),
        img('so8h2z6ygq48oz3ben8vzcanhz3w_img16.jpg'),
        img('v6ma5zv5sgpf540rw43flca6rlmk_img10.jpg'),
        img('6x510mai9r9lvsua0r5nugpn226o_478766736.jpg')
      ]
    },
    activities: [
      {
        name: 'Ba Na Hills and the Golden Bridge',
        day: 7,
        optional: false,
        image: img('4arj222jby0yobyhxutcze6movjx_1580714303_shutterstock_1343264876.jpg'),
        description: 'The long cable car up to Ba Na, the Golden Bridge held up by two stone hands, and the French village and gardens at the top.'
      }
    ],
    program: {
      name: 'Da Nang',
      description: 'South to the coast for two nights near the beach, with a full day up at Ba Na Hills.',
      image: img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Ho Chi Minh City',
    dayLabel: 'Day 8 to 9',
    images: [
      img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
      img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
      img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg'),
      img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg')
    ],
    dayImages: {
      8: [
        img('7c9y0w9lr632pl96udf5l9ek2h9h_shutterstock_690459592.jpg'),
        img('2fqc9nmqifyv07bhi7n7gqf3cxhl_shutterstock_690459592.jpg'),
        img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
        img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg')
      ],
      9: [
        img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg'),
        img('2q44ht7gd7fe67gnewimg4q46sxb_shutterstock_175128359%20(2).jpg'),
        img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg'),
        img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · Saigon and Cu Chi`,
      'Breakfast and check out, then the flight south',
      'North west to Cu Chi for the tunnels',
      'The trapdoors, the kitchens and the shafts',
      'Check in in District 1, evening free',
      `${DAY_MARK}Day 9 · Departure from Saigon`,
      'Breakfast at the hotel and check out',
      'Private transfer to Tan Son Nhat for your flight home'
    ],
    accommodation: {
      name: 'Avanti Saigon Hotel, Ho Chi Minh',
      description: '1 night · Breakfast · Standard room · 3★ · Small hotel in District 1, a short walk from the opera house',
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
        name: 'Cu Chi tunnels half day tour',
        day: 8,
        optional: false,
        image: img('7c9y0w9lr632pl96udf5l9ek2h9h_shutterstock_690459592.jpg'),
        description: 'The tunnel network north west of the city, with the trapdoors, the kitchens and a crawl through a widened section of the original shafts.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'The flight south for a last night, with the Cu Chi tunnels on the way in.',
      image: img('skz3wplycbcli4r949td8brmh5ct_shutterstock_517774156%20(1).jpg')
    }
  }
];

const detail = {
  slug: 'vietnam-sightseeing-with-phong-nha',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Vietnam Sightseeing with Phong Nha',
  alt: 'Boat entering the mouth of Phong Nha cave in Quang Binh',
  days: '9 days / 8 nights',
  stations: '5 stops',
  transport: 'Flights, private transfers and guided day tours',
  tag: 'Grand tour',
  tags: ['Nature', 'Grand tour'],
  price: 75478,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Dong Hoi', 'Phong Nha', 'Da Nang', 'Ho Chi Minh City'],
  stats: { days: 9, cities: 5, hotels: 5, activities: 7, transfers: 13 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['7 experiences', 'Activities'],
    ['13 transfers', 'Transport'],
    ['14 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Phong Nha is the reason to take this one. Almost no itinerary stops in Quang Binh and the caves there are the biggest in the world.',
    quoteMore: 'Wear clothes you do not mind ruining on the Dark Cave day. The mud does not come out of anything pale.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days with a stop almost nobody makes: Hanoi with Ninh Binh and a Bich Dong cycle ride, an overnight cruise in Halong Bay, two nights in the Phong Nha valley for the great river cave and the Dark Cave mud pools, two in Da Nang for Ba Na Hills, then Saigon and the Cu Chi tunnels.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 8 nights with breakfast daily, dinner at the Hanoi and Da Nang hotels and all meals on the cruise boat; flights and transfers throughout; a Ninh Binh day tour; a cycle ride to Bich Dong; a shared overnight cruise in Halong Bay with the Surprise Cave; a full day Phong Nha cave tour; the Dark Cave with the mud bath; a full day up at Ba Na with the Golden Bridge; the Cu Chi tunnels half day tour.',
  intro2: 'Not included: international flights; Vietnam visa fees; lunches other than on the cruise; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Ninh Binh and Bich Dong (B, D)', text: 'Breakfast, then south towards Ninh Binh\nA rowing boat through the flooded caves at Tam Coc\nA cycle ride through the rice fields\nBich Dong, a pagoda built into the rock', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then south towards Ninh Binh', 'A rowing boat through the flooded caves at Tam Coc', 'A cycle ride through the rice fields'] },
    { title: 'Day 3: Overnight on the bay (B, L, D)', text: 'Breakfast and check out, then east towards the coast\nBoard your cruise boat in the early afternoon\nLunch and dinner on board\nA night moored among the limestone islands', hotel: 'Halong Royal Palace Cruise', highlights: ['Breakfast and check out, then east towards the coast', 'Board your cruise boat in the early afternoon', 'Lunch and dinner on board'] },
    { title: 'Day 4: South to Dong Hoi (B)', text: 'Breakfast on board, then the climb into the Surprise Cave\nBack to the pier and on to Hanoi\nThe journey south to Dong Hoi\nCheck in at the lakeside resort in the valley', hotel: 'Phong Nha Lake House Resort', highlights: ['Breakfast on board, then the climb into the Surprise Cave', 'Back to the pier and on to Hanoi', 'The journey south to Dong Hoi'] },
    { title: 'Day 5: Phong Nha and the Dark Cave (B)', text: 'Breakfast, then into the national park\nA boat into the mouth of Phong Nha cave\nA zip line across the river to the Dark Cave\nThe mud pools inside, then back to the resort', hotel: 'Phong Nha Lake House Resort', highlights: ['Breakfast, then into the national park', 'A boat into the mouth of Phong Nha cave', 'A zip line across the river to the Dark Cave'] },
    { title: 'Day 6: On to Da Nang (B, D)', text: 'Breakfast and check out, then south to Da Nang\nCheck in near My Khe beach\nRest of the day free at your own pace\nOptional: the Marble Mountains above the coast road', hotel: 'Luxtery Da Nang', highlights: ['Breakfast and check out, then south to Da Nang', 'Check in near My Khe beach', 'Rest of the day free at your own pace'] },
    { title: 'Day 7: Ba Na Hills (B, D)', text: 'Breakfast, then the cable car up to Ba Na\nThe Golden Bridge held up by two stone hands\nThe French village and the gardens at the top\nBack down to Da Nang in the evening', hotel: 'Luxtery Da Nang', highlights: ['Breakfast, then the cable car up to Ba Na', 'The Golden Bridge held up by two stone hands', 'The French village and the gardens at the top'] },
    { title: 'Day 8: Saigon and Cu Chi (B)', text: 'Breakfast and check out, then the flight south\nNorth west to Cu Chi for the tunnels\nThe trapdoors, the kitchens and the shafts\nCheck in in District 1, evening free', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast and check out, then the flight south', 'North west to Cu Chi for the tunnels', 'The trapdoors, the kitchens and the shafts'] },
    { title: 'Day 9: Departure from Saigon (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Tan Son Nhat for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Tan Son Nhat for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; lunches other than on the cruise; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const vietnamSightseeingPhongNhaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const vietnamSightseeingPhongNhaProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Dong Hoi', 'Phong Nha', 'Da Nang', 'Ho Chi Minh City'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 7,
  transfers: 13,
  meals: 14,
  price: detail.price,
  images: cardImages
};
