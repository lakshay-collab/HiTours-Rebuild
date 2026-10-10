// Getaway to Vietnam with Phu Quoc. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
  img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg'),
  img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
  img('jh5bfu9i2bcczklx0uqx6n1dinjw_shutterstock_521611651.jpg'),
  img('8g6owtle69qle1crb9clypp0qw8p_shutterstock_1155518383.jpg'),
  img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
  img('chc0brh1ox3ps4j2gkd3o7sltiku_shutterstock_298757792.jpg'),
  img('pv4f1g79ho8vregr3zznwf4s99pm_shutterstock_1922997941.jpg'),
  img('6r7es5b1onpmozcvqas04rqr42bd_shutterstock_300005888.jpg'),
  img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('jh5bfu9i2bcczklx0uqx6n1dinjw_shutterstock_521611651.jpg'),
  img('6r7es5b1onpmozcvqas04rqr42bd_shutterstock_300005888.jpg'),
  img('0jieq5sp8ith54kj7uh4y5t9161j_1467829069_3860272468_fd202613b2_o.jpg'),
  img('cfkv8udjuq1p4vrcjy7pv8h6xs5i_ham-ninh-fishing-village-1_1695108944.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    subtitle: 'Hanoi and Ninh Binh',
    dayLabel: 'Day 1 to 2',
    images: [
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg')
    ],
    dayImages: {
      1: [
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('xf5ltzlprl4wk40yrzti9k9n836e_St._Joseph\'s_Cathedral_Hanoi_2.jpg'),
        img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg')
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
      image: img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg')
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
        img('prkmd94999bmb9jjmwskh0jpkkv8_shutterstock_1424935796.jpg'),
        img('co10oqk1r9n0kllwfq7q3aaubtc7_40307648665_8584ddecc8_o.jpg'),
        img('fj36l2h0k6obbqfmwhov2of349v5_ha-long-bay-sea-water-ship.jpg'),
        img('hgd0lkqqpjyb5kf9jxhj3agvo0q1_5536617078_0956a7edd1_o.jpg')
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
        image: img('prkmd94999bmb9jjmwskh0jpkkv8_shutterstock_1424935796.jpg'),
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
    name: 'Da Nang',
    subtitle: 'Da Nang and Ba Na Hills',
    dayLabel: 'Day 4 to 5',
    images: [
      img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
      img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg'),
      img('2fy2knh9a57bzzyx82r7j85oo59x_shutterstock_1849532812.jpg'),
      img('tpm5qh61npeuq51ofwse3besdtlh_shutterstock_2103894986.jpg')
    ],
    dayImages: {
      4: [
        img('ve6w5hll44si2fa8qxx6b9sepbs3_shutterstock_1218765286.jpg'),
        img('e7747wfxl9x32ioao96vp1zudykf_44844044645_6347bf750e_o.jpg'),
        img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg'),
        img('karc2e6jmbjn0diha522gu4gegle_shutterstock_1346056832%20(1).jpg')
      ],
      5: [
        img('4arj222jby0yobyhxutcze6movjx_1580714303_shutterstock_1343264876.jpg'),
        img('bbeokkqegcwgy51eqlvyhfvmlgis_1467287106_BaNaHillsCableCar.jpg'),
        img('84tapj6qwgvbv9sgdfd6q1233uak_1467287160_Linh_Ung_Pagoda.jpg'),
        img('yhxwfmhdmt1hhx1z5nna2xphz1k3_golden-bridge-4912803_1280.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · South to Da Nang`,
      'Breakfast on board, then the climb into the Surprise Cave',
      'Back to the pier and on to Hanoi airport',
      'The flight to Da Nang',
      'Check in near the beach, evening free',
      `${DAY_MARK}Day 5 · Ba Na Hills`,
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
        name: 'Surprise Cave on Bo Hon island',
        day: 4,
        optional: false,
        image: img('ve6w5hll44si2fa8qxx6b9sepbs3_shutterstock_1218765286.jpg'),
        description: 'A morning climb into the Surprise Cave, three great chambers of stalactites above the water, before the boat turns back.'
      },
      {
        name: 'Ba Na Hills and the Golden Bridge',
        day: 5,
        optional: false,
        image: img('4arj222jby0yobyhxutcze6movjx_1580714303_shutterstock_1343264876.jpg'),
        description: 'The long cable car up to Ba Na, the Golden Bridge held up by two stone hands, and the French village and gardens at the top.'
      }
    ],
    program: {
      name: 'Da Nang',
      description: 'The flight to the central coast for two nights near the beach, with a full day up at Ba Na Hills.',
      image: img('fs1zdjblnu3497epppnt34v2t00q_shutterstock_2202972169.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Phu Quoc',
    dayLabel: 'Day 6 to 7',
    images: [
      img('j3quov5c3anxmy0oldbd7lckpsex_shutterstock_1113880625.jpg'),
      img('6r7es5b1onpmozcvqas04rqr42bd_shutterstock_300005888.jpg'),
      img('zqtf2kdiewu8fh1xh3n5rp3o5tep_shutterstock_1017814951.jpg'),
      img('jh5bfu9i2bcczklx0uqx6n1dinjw_shutterstock_521611651.jpg')
    ],
    dayImages: {
      6: [
        img('0jieq5sp8ith54kj7uh4y5t9161j_1467829069_3860272468_fd202613b2_o.jpg'),
        img('cfkv8udjuq1p4vrcjy7pv8h6xs5i_ham-ninh-fishing-village-1_1695108944.jpg'),
        img('uii8mz2xsh95at9emh2epxxxume0_phu-quoc-island.jpg'),
        img('j3quov5c3anxmy0oldbd7lckpsex_shutterstock_1113880625.jpg')
      ],
      7: [
        img('v80c9m6rzqotshapmz1gdi9n4l3c_6005268411_60ac0881e7_o.jpg'),
        img('ifvv7a8qgbcjl5pfcou0rbdwuo0n_phu-quoc-night-market-1_1645711900.jpg'),
        img('ygyd2egvwghybvx1ysxb9lpojmlt_Sao%20beach.jpg'),
        img('sujevuvtyhejfovcy4i8dwkoa8ln_banner-vinpearl-safari-phu-quoc.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Flight to Phu Quoc`,
      'Breakfast and check out, then the flight to the island',
      'Transfer to your hotel near Long Beach',
      'Rest of the day free at your own pace',
      'Optional: the night market in Duong Dong',
      `${DAY_MARK}Day 7 · A free day on the island`,
      'Breakfast, then a free day on the island',
      'Optional: the cable car out to An Thoi and the islets',
      'Optional: a pepper farm and a fish sauce distillery',
      'Optional: sunset from the west coast beaches'
    ],
    accommodation: {
      name: 'Praha Phu Quoc Hotel, Phu Quoc',
      description: '2 nights · Breakfast and dinner · Standard room · 3★ · Island hotel a short ride from Long Beach',
      images: [
        img('gyxnwre1wz7zeps8yx6y5w8bgg67_image_2.jpg'),
        img('is2xdujx6ro3v3w71egqsebao58m_image_0.jpg'),
        img('63pwzdl5e1ejly8xsnac4q8yoptp_image_40.jpg'),
        img('d1ei7u20pt6z4sqr79yfkzowqse7_446457859.jpg'),
        img('i9cucld1s8x872fkpc10zv2ctpur_image_13.jpg'),
        img('9iomsw3mwbqkxtszq6qx8270j95q_image_21.jpg'),
        img('p99rcrey19rb5p7cl2z67h08pjde_image_25.jpg'),
        img('10wdi4dep230g9dqrhgjkhfm6wnl_image_24.jpg'),
        img('vayl231onleyux6xbgkai7szu9gd_image_41.jpg'),
        img('zo6rvpipr85u5deiaiombtffvhy6_470703605.jpg'),
        img('ho7csbr3vwsaepr9fk13oky0kutr_image_35.jpg'),
        img('g4gqulxksgbgyf9wa4zjwi1mablc_446459330.jpg'),
        img('kw7ufadsshzcj781obpfmfw4wfbd_160841685.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Phu Quoc',
      description: 'Two nights on the island with nothing scheduled, for the beaches, the pepper farms and the night market.',
      image: img('j3quov5c3anxmy0oldbd7lckpsex_shutterstock_1113880625.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Ho Chi Minh City',
    subtitle: 'Saigon and the Mekong',
    dayLabel: 'Day 8 to 10',
    images: [
      img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg'),
      img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
      img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
      img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg')
    ],
    dayImages: {
      8: [
        img('p285hp3f87tv66r500ldys22p4ii_1484035777_tour_img-450342-70.jpg'),
        img('f1dbl8hvclmsfb1jc8fob8ztpxuk_1467880098_5397869098_f0ce8370ed_o.jpg'),
        img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg'),
        img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg')
      ],
      9: [
        img('4hlghe88itsu2x2yetdcq4mj42ni_1579700293_shutterstock_1529789570.jpg'),
        img('lvds5da20701ls58hbi447grx3s2_8193351650_d1ff3fd0b7_z.jpg'),
        img('ktw7z5gp3xhl3n59iymqv4ksukb2_Ben_Tre_Turtle_Island.jpg'),
        img('6cupjrsxzkngfv8zrrp9japoty1n_sgn15.jpg')
      ],
      10: [
        img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg'),
        img('09pftxbjdeez104iioodzenrh0cs_shutterstock_542412127.jpg'),
        img('84n00z2hvyyddjbgqebemtjy3zfj_shutterstock_569235004.jpg'),
        img('qn4cqcp2degk0w2mwz5nu37ndltv_shutterstock_354113420.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · On to Saigon`,
      'Breakfast and check out, then the flight to Saigon',
      'Check in in District 1',
      'Rest of the day free in the city',
      'Optional: the rooftop bars on Nguyen Hue',
      `${DAY_MARK}Day 9 · Mekong Delta`,
      'Breakfast, then south into the delta',
      'A boat through the coconut creeks at My Tho',
      'A sampan ride under the palms',
      'The coconut candy workshops, then back to the city',
      `${DAY_MARK}Day 10 · Departure from Saigon`,
      'Breakfast at the hotel and check out',
      'Private transfer to Tan Son Nhat for your flight home'
    ],
    accommodation: {
      name: 'Avanti Saigon Hotel, Ho Chi Minh',
      description: '2 nights · Breakfast · Standard room · 3★ · Small hotel in District 1, a short walk from the opera house',
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
        name: 'Mekong Delta day tour',
        day: 9,
        optional: false,
        image: img('4hlghe88itsu2x2yetdcq4mj42ni_1579700293_shutterstock_1529789570.jpg'),
        description: 'South to My Tho for a boat into the coconut creeks, a sampan through the palms, and the workshops where they make coconut candy.'
      }
    ],
    program: {
      name: 'Ho Chi Minh City',
      description: 'Two nights in District 1 to finish, with a full day south into the Mekong Delta.',
      image: img('5lviax9r1n728s3ill8tl7l25au3_shutterstock_404797840.jpg')
    }
  }
];

const detail = {
  slug: 'getaway-to-vietnam-with-phu-quoc',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Getaway to Vietnam with Phu Quoc',
  alt: 'Palms over a white sand beach on Phu Quoc island',
  days: '10 days / 9 nights',
  stations: '5 stops',
  transport: 'Three domestic flights, private transfers and guided tours',
  tag: 'Beach',
  tags: ['Beach', 'Grand tour'],
  price: 90041,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Da Nang', 'Ba Na Hills', 'Phu Quoc', 'Ho Chi Minh City', 'Mekong Delta'],
  stats: { days: 10, cities: 5, hotels: 5, activities: 6, transfers: 14 },
  gallery: heroGallery,
  services: [
    ['5 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['14 transfers', 'Transport'],
    ['15 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Ten days with two nights of beach in the middle. Phu Quoc is where you stop sightseeing and start swimming.',
    quoteMore: 'Keep the free island day for the west coast. The sunsets there are the reason people extend their stay.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Ten days from the north to the islands: Hanoi with Ninh Binh and a Bich Dong cycle ride, an overnight cruise in Halong Bay, two nights in Da Nang for Ba Na Hills and the Golden Bridge, two on the beaches of Phu Quoc with nothing scheduled, then two in Saigon with a Mekong Delta day.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 9 nights with breakfast daily, dinner at the northern, central and island hotels and all meals on the cruise boat; three domestic flights; private transfers throughout; a Ninh Binh day tour; a cycle ride to Bich Dong; a shared overnight cruise in Halong Bay with the Surprise Cave; a full day up at Ba Na with the Golden Bridge; a Mekong Delta day tour.',
  intro2: 'Not included: international flights; Vietnam visa fees; lunches other than on the cruise; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Ninh Binh and Bich Dong (B, D)', text: 'Breakfast, then south towards Ninh Binh\nA rowing boat through the flooded caves at Tam Coc\nA cycle ride through the rice fields\nBich Dong, a pagoda built into the rock', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then south towards Ninh Binh', 'A rowing boat through the flooded caves at Tam Coc', 'A cycle ride through the rice fields'] },
    { title: 'Day 3: Overnight on the bay (B, L, D)', text: 'Breakfast and check out, then east towards the coast\nBoard your cruise boat in the early afternoon\nLunch and dinner on board\nA night moored among the limestone islands', hotel: 'Halong Royal Palace Cruise', highlights: ['Breakfast and check out, then east towards the coast', 'Board your cruise boat in the early afternoon', 'Lunch and dinner on board'] },
    { title: 'Day 4: South to Da Nang (B, D)', text: 'Breakfast on board, then the climb into the Surprise Cave\nBack to the pier and on to Hanoi airport\nThe flight to Da Nang\nCheck in near the beach, evening free', hotel: 'Luxtery Da Nang', highlights: ['Breakfast on board, then the climb into the Surprise Cave', 'Back to the pier and on to Hanoi airport', 'The flight to Da Nang'] },
    { title: 'Day 5: Ba Na Hills (B, D)', text: 'Breakfast, then the cable car up to Ba Na\nThe Golden Bridge held up by two stone hands\nThe French village and the gardens at the top\nBack down to Da Nang in the evening', hotel: 'Luxtery Da Nang', highlights: ['Breakfast, then the cable car up to Ba Na', 'The Golden Bridge held up by two stone hands', 'The French village and the gardens at the top'] },
    { title: 'Day 6: Flight to Phu Quoc (B, D)', text: 'Breakfast and check out, then the flight to the island\nTransfer to your hotel near Long Beach\nRest of the day free at your own pace\nOptional: the night market in Duong Dong', hotel: 'Praha Phu Quoc Hotel', highlights: ['Breakfast and check out, then the flight to the island', 'Transfer to your hotel near Long Beach', 'Rest of the day free at your own pace'] },
    { title: 'Day 7: A free day on the island (B, D)', text: 'Breakfast, then a free day on the island\nOptional: the cable car out to An Thoi and the islets\nOptional: a pepper farm and a fish sauce distillery\nOptional: sunset from the west coast beaches', hotel: 'Praha Phu Quoc Hotel', highlights: ['Breakfast, then a free day on the island', 'Optional: the cable car out to An Thoi and the islets', 'Optional: a pepper farm and a fish sauce distillery'] },
    { title: 'Day 8: On to Saigon (B)', text: 'Breakfast and check out, then the flight to Saigon\nCheck in in District 1\nRest of the day free in the city\nOptional: the rooftop bars on Nguyen Hue', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast and check out, then the flight to Saigon', 'Check in in District 1', 'Rest of the day free in the city'] },
    { title: 'Day 9: Mekong Delta (B)', text: 'Breakfast, then south into the delta\nA boat through the coconut creeks at My Tho\nA sampan ride under the palms\nThe coconut candy workshops, then back to the city', hotel: 'Avanti Saigon Hotel', highlights: ['Breakfast, then south into the delta', 'A boat through the coconut creeks at My Tho', 'A sampan ride under the palms'] },
    { title: 'Day 10: Departure from Saigon (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Tan Son Nhat for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Tan Son Nhat for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; lunches other than on the cruise; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const getawayVietnamPhuQuocBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const getawayVietnamPhuQuocProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Da Nang', 'Ba Na Hills', 'Phu Quoc', 'Ho Chi Minh City', 'Mekong Delta'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 10,
  stops: 5,
  hotels: 5,
  cities: 5,
  activities: 6,
  transfers: 14,
  meals: 15,
  price: detail.price,
  images: cardImages
};
