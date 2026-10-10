// Scandinavia Group Tour: Helsinki to Copenhagen. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('s1n7bt2ok77sdiuloumkrnij8rbl_shutterstock_787280338.jpg'),
  img('8dxp5784ir4d9c8z1rrrierbzebz_shutterstock_2130119159.jpg'),
  img('dfsrhlwsic87rba2ec9crsr21fqv_shutterstock_1028413972.jpg'),
  img('zdgxo8parbqr22fj3modc3oq1eq8_shutterstock_1780389539.jpg'),
  img('dp61y4mfdrkmzf3sgey7grlfqlef_shutterstock_1239376453.jpg'),
  img('9nk45rzbor4h6uv0vnfbww3hmaeg_ye7aeyhxib0pec4m7u0chzq3q62v_shutterstock_1038100864.jpg'),
  img('2vs256itkhxaj4m2v0eq74nxvy2v_shutterstock_1492035677.jpg'),
  img('aa1isye2rbzq3391or61cbzzw64s_shutterstock_485404870.jpg'),
  img('4fbi1wm5uytipil11d9uswi7k8am_shutterstock_233931622.jpg'),
  img('0xxe69hvcqs4bipz1drimld1e9w3_shutterstock_2298172203-min.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('s1n7bt2ok77sdiuloumkrnij8rbl_shutterstock_787280338.jpg'),
  img('8dxp5784ir4d9c8z1rrrierbzebz_shutterstock_2130119159.jpg'),
  img('zdgxo8parbqr22fj3modc3oq1eq8_shutterstock_1780389539.jpg'),
  img('dp61y4mfdrkmzf3sgey7grlfqlef_shutterstock_1239376453.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Helsinki',
    dayLabel: 'Day 1 to 2',
    images: [
      img('s1n7bt2ok77sdiuloumkrnij8rbl_shutterstock_787280338.jpg'),
      img('jcox76rh9q7glfppf480l35kjrze_shutterstock_1917056663.jpg'),
      img('k57rz1b9audjuelse4ftyame9mvo_shutterstock_322256108.jpg'),
      img('lxv5apgpvtsl1zr9gczzmqsvezk1_shutterstock_160053437.jpg')
    ],
    dayImages: {
      1: [
        img('8rk8umamaf2ent97bxvtzmp4r7ww_1619092360_shutterstock_727907602.jpg'),
        img('j77miefnwkwd4tlsuqbznbw983bv_1619092041_shutterstock_1771463000.jpg'),
        img('v9fn8izkei3wrb8t0kunmfcbmm1g_1619093516_shutterstock_727894435.jpg'),
        img('756yt7eu5rbnkwy6pztml2cgtt74_1619093721_shutterstock_1917361250.jpg')
      ],
      2: [
        img('70hkxe5fntopug1xe8v3a46cqwbl_Finlandia%20Hall.jpg'),
        img('azs9qzphgv2k8liayezobz9cwkbt_1619092189_shutterstock_1040524624.jpg'),
        img('gpjrgc80otq7f0rww4xzqqlq9dgb_Finlandia_Hall-7141.jpg'),
        img('q7p4of1sm4lnweo99vlh92zh91wp_Helsingin_kaupungintalo_satamasta.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Helsinki`,
      'Arrival at the airport and private transfer to your hotel',
      'Check in and the rest of the day at leisure',
      `${DAY_MARK}Day 2 · Helsinki and the overnight cruise`,
      'Breakfast, then a guided city tour',
      'Boarding the Silja Line ferry in the afternoon',
      'Dinner and a night at sea'
    ],
    accommodation: {
      name: 'Scandic Meilahti, Helsinki, Helsinki',
      description: '2 nights · Breakfast · Standard room · 3★ · Hotel on the tram line to the centre, then a cabin on the Stockholm ferry',
      images: [
        img('7rwzj3dkrmoit610h9afvla1h9yu_292229272.jpg'),
        img('859213mmoyz0ck5b70pqfonfejow_292229300.jpg'),
        img('z2xecl3tpiowtbc8wq13z8tq93l4_292229293.jpg'),
        img('qpi4kbyx700eabaxf5zcsesfbre4_292229289.jpg'),
        img('rfl4u2nmy891mcl0ivc47e5tl3f9_292229278.jpg'),
        img('6862r7hdpmd90omiqk07thsu992l_292229288.jpg'),
        img('pv65ofw0sq1kb5ot5mgb2l6yu3nw_292229292.jpg'),
        img('9ktq58ymdd6nqtu8v2kgjmu9vw9i_292229280.jpg'),
        img('yq2i7vioxmxc0hezdi1oip4uydmh_292229301.jpg'),
        img('vryytjwqgc4tz6bgx4imiyjbaibz_292229290.jpg')
      ]
    },
    activities: [
      {
        name: 'Helsinki sightseeing tour',
        day: 2,
        optional: false,
        image: img('70hkxe5fntopug1xe8v3a46cqwbl_Finlandia%20Hall.jpg'),
        description: 'The cathedral, Senate Square, the rock church and Sibelius monument before boarding the ship.'
      }
    ],
    program: {
      name: 'Helsinki',
      description: 'A night in Helsinki, a city tour and the overnight cruise to Stockholm.',
      image: img('s1n7bt2ok77sdiuloumkrnij8rbl_shutterstock_787280338.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Stockholm',
    dayLabel: 'Day 3',
    images: [
      img('aa1isye2rbzq3391or61cbzzw64s_shutterstock_485404870.jpg'),
      img('8dxp5784ir4d9c8z1rrrierbzebz_shutterstock_2130119159.jpg'),
      img('aiuzh0pm43jg4qnnhj513zanomey_shutterstock_1518000098.jpg'),
      img('bbt7wjk12om1delgz4yj7ugbq1u0_shutterstock_314554589.jpg')
    ],
    dayImages: {
      3: [
        img('3h31e7zkvvcbilsn9u6vigs3zipf_icebar.webp'),
        img('67pvdiebblmblgc4dvoe9d8mha8h_1619099515_shutterstock_87317230.jpg'),
        img('j3m9f0t76nmibdlhqcx1wq748g91_52808435505_9c7b5ea477_o.jpg'),
        img('al9jmnfxpqg472fdvgkwit0944qy_1619098705_shutterstock_1065674162.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Stockholm`,
      'Breakfast on board and arrival in Stockholm',
      'City tour, Skyview gondola and the Vasa Museum',
      'Check in and a free evening'
    ],
    accommodation: {
      name: 'Good Morning+ Hägersten, Stockholm',
      description: '1 night · Breakfast · Standard room · 3★ · Hotel on the metro south of the centre',
      images: [
        img('zrbum3o8f3ya2tiedcy6j5ykx87r_Skyview.webp'),
        img('h8on2bmovbbh3mdrg78nvw5gk4zf_Helsinki%20skyline.jpg'),
        img('abz3izueh33j0qdcd4e0xjyqcimv_yskvlv0dm6g30ulzopanwajqxzas_shu.jpg'),
        img('z647pj52n4g0dlaexypshfqmrhqi_3fwrm43l3n3v5trkji62bxgdvbpf_1619081223_shutterstock_1170906319.webp'),
        img('ctsf6xhembh0cqd66wrkawc6wvk0_Stockholm%20cityscape.jpg'),
        img('ulri44rknvwh0wlnrdamx5szhveh_shutterstock_1174168732%20(1).jpg')
      ]
    },
    activities: [
      {
        name: 'Stockholm tour, Skyview and Vasa',
        day: 3,
        optional: false,
        image: img('3izir4tn4ivmv2sjdrz1h6b98f50_shutterstock_565993813.jpg'),
        description: 'Gamla Stan and the Royal Palace, the glass Skyview gondola over the Avicii Arena and the 17th-century warship Vasa.'
      }
    ],
    program: {
      name: 'Stockholm',
      description: 'A day in Stockholm with the Skyview gondola and the Vasa Museum.',
      image: img('aa1isye2rbzq3391or61cbzzw64s_shutterstock_485404870.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Bergen',
    dayLabel: 'Day 4',
    images: [
      img('cvvrdqfr9bgsc2pmeoqavabc2xfk_shutterstock_1008789172.jpg'),
      img('mqt5yd7kyvxahsmkazbmehhq4ufl_shutterstock_1174168732.jpg'),
      img('dfsrhlwsic87rba2ec9crsr21fqv_shutterstock_1028413972.jpg'),
      img('4sx773ngfyftevlay4ji7sh07opl_shutterstock_524072728.jpg')
    ],
    dayImages: {
      4: [
        img('ny8r3rzgxcoopbcv7s8y0qceies8_Bryggen-framside.jpg'),
        img('trrissd61jx2lhl7mvq2173zse6d_1615627638_shutterstock_1435027013.jpg'),
        img('kws1t1fl5om2ed8pxy8gwntdkmi1_mount%20floyen.webp'),
        img('d1t1qacp2ski210oo25bisoyqoyn_1615627768_shutterstock_1870766551.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Fly to Bergen`,
      'Breakfast and transfer to the airport',
      'Flight to Bergen',
      'Bryggen wharf tour and Mount Fløyen'
    ],
    accommodation: {
      name: 'Comfort Hotel Bergen Airport, Bergen',
      description: '1 night · Breakfast · Standard room · 3★ · Hotel near the airport',
      images: [
        img('6hmjzf8i3qp5g8ee0d3wepekxe92_Comfort-Hotel-Bergen-Airport-fasade.jpg'),
        img('tjmwga7ldx8opm664akhqxvc0zn8_92700648.jpg'),
        img('xjb8guc4flg77tx57ube5nrayq46_92700535.jpg'),
        img('ffqd9shhi4qoykk1kq2gjwzvu6l7_92700458.jpg'),
        img('6l4leo4wo48xuefjmnwk9yxzvpi3_92700423.jpg'),
        img('xyaqqi4c87s8xszfwmae9xsgazxv_92700468.jpg'),
        img('xnonssfek75tj9sxn9vybfd1nuyc_92700705.jpg'),
        img('dx6fvw6ezijeee2cet6jme0p6kqa_524229798.jpg'),
        img('e9mkoat53kz64w63gfx4kpud3t7j_92700693.jpg'),
        img('9a1fq8natcwk4u93vqj6dtk6oljl_117300740.jpg'),
        img('0gskmzizkg6dtni4lzukbn6b8kth_92700464.jpg'),
        img('w5sf46z5pbtdwtxdfv51hsjo3vr6_92700612.jpg')
      ]
    },
    activities: [
      {
        name: 'Bryggen and Mount Fløyen',
        day: 4,
        optional: false,
        image: img('ny8r3rzgxcoopbcv7s8y0qceies8_Bryggen-framside.jpg'),
        description: 'The Hanseatic wharf and the funicular up Fløyen for the harbour view.'
      }
    ],
    program: {
      name: 'Bergen',
      description: 'Fly to Bergen for Bryggen and Mount Fløyen.',
      image: img('cvvrdqfr9bgsc2pmeoqavabc2xfk_shutterstock_1008789172.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Geilo',
    dayLabel: 'Day 5',
    images: [
      img('axmdr5qx2h3yv4l940soee43wanp_shutterstock_200699711.jpg'),
      img('0xxe69hvcqs4bipz1drimld1e9w3_shutterstock_2298172203-min.jpg'),
      img('gosr9dvsry69uuvhewa358k3ndhu_shutterstock_588405515.jpg'),
      img('zdgxo8parbqr22fj3modc3oq1eq8_shutterstock_1780389539.jpg')
    ],
    dayImages: {
      5: [
        img('bg9p3ajwtt97yjnjz8qpboxay6c2_shutterstock_503137030.jpg'),
        img('vkniweln6eyt4wqlxiaa0qqnobik_pexels-thor-olason-15979078.jpg'),
        img('hip4f7wrypie8nsy4kr3u0q8oysb_52159292873_4587776a12_o.jpg'),
        img('wawcwv7kld16rntfmh54tenj0abn_14919849523_979d29842a_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Norway in a Nutshell to Geilo`,
      'Breakfast and check out',
      'Fjord ferry, Stalheim coach and the Flåm Railway',
      'Coach to Geilo for the night'
    ],
    accommodation: {
      name: 'Thon Hotel Hallingdal, Geilo, Geilo',
      description: '1 night · Breakfast · Standard room · 3★ · Mountain hotel in Geilo',
      images: [
        img('1j6hxookq6ktv88dq523fr9x831j_thon-hotel-hallingdal-fasade.jpg'),
        img('7r8hzcg9pwr053zmg1do9yd8ksea_45401860.jpg'),
        img('ttgrnxksvybl9q36k45jgbapcyy6_45401724.jpg'),
        img('s71q700wwryaqbz3qho6u5spru05_45400984.jpg'),
        img('ji5mwj8v5nqf3pnz8h6v98kgxilw_45400844.jpg'),
        img('jb8nrrsujnu3tioswejrjsxbjmrf_45502241.jpg'),
        img('6ruialfx1gcviyzo6uzlsyztocog_45400695.jpg'),
        img('ffuckfx29gwlmao3o711q576miun_45401317.jpg'),
        img('blpnyj4z6q3ic5kion4kvfljuyg4_45401651.jpg'),
        img('3csad6ea7i1l07h5slvw9ei1m36m_45400562.jpg'),
        img('68yt6f14mkacbkv6v91vf0a4p0ob_45401180.jpg')
      ]
    },
    activities: [
      {
        name: 'Norway in a Nutshell',
        day: 5,
        optional: false,
        image: img('axmdr5qx2h3yv4l940soee43wanp_shutterstock_200699711.jpg'),
        description: 'Nærøyfjord ferry, Stalheim coach and the Flåm Railway before the coach to Geilo.'
      }
    ],
    program: {
      name: 'Geilo',
      description: 'The Norway in a Nutshell route and a night in the mountains.',
      image: img('axmdr5qx2h3yv4l940soee43wanp_shutterstock_200699711.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Oslo',
    dayLabel: 'Day 6 to 7',
    images: [
      img('o3foa9gjr1pw0091p9hxdnzp9bdk_shutterstock_737227516.jpg'),
      img('lhrxnajg0bnweyzs1ec3ml0r5wrd_shutterstock_205089337.jpg'),
      img('yw3zpcri0kcqrog688ilmp09em92_shutterstock_205982242.jpg'),
      img('ja2q6wd8j469isi5hvjl8y84eksp_shutterstock_1741016771.jpg')
    ],
    dayImages: {
      6: [
        img('m7rhyeh2sdion2iss4g8qvdjh7ve_shutterstock_495297691.jpg'),
        img('61wk3nhmrcf1o09fvsrpxy4z1pqu_1615620954_shutterstock_327735812.jpg'),
        img('yyrzcejup9dsb5e5ewp3et678quh_1615626124_shutterstock_1533481532.jpg'),
        img('xyh1gfzwb8wxb3sancnizz2k30n1_shutterstock_684917530.jpg')
      ],
      7: [
        img('mnh4q1nc2fowv8fgs6dcj6iunntl_shutterstock_468696983.jpg'),
        img('5ukcvwbns07lm1tf3cthx5pqrdxl_1615625259_shutterstock_468696983.jpg'),
        img('qsvf10g7vwvbyi3spnkrfuj9dct6_1615624606_shutterstock_235672564.jpg'),
        img('hmksx9rxcwfdwcri14yxrmy73hsf_Stortinget,_Norway.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 6 · Oslo`,
      'Breakfast and check out',
      'Coach to Oslo and a sightseeing tour',
      'Check in and a free evening',
      `${DAY_MARK}Day 7 · Oslo to Copenhagen by sea`,
      'Breakfast, then a free morning in Oslo',
      'Boarding the DFDS ferry in the afternoon',
      'A night at sea down the Oslofjord'
    ],
    accommodation: {
      name: 'Thon Hotel Oslofjord, Oslo',
      description: '2 nights · Breakfast · Standard room · 3★ · Hotel on the fjord outside the centre, then a cabin on the Copenhagen ferry',
      images: [
        img('m9tvou5clu29f0q45fd7pcwb8tlb_Untitled%20(5).jpg'),
        img('4qe25fax4vron122v82kpwlzid72_download%20(9).jpg'),
        img('910cxgmcdyjtzqi53lpjnx8o9465_download%20(4).jpg'),
        img('xv4uvj9sskd5mophca8dtppo154z_download%20(6).jpg'),
        img('avo01fznldjppeasw4oz52wuzwzd_download%20(7).jpg'),
        img('rflznv2awsibgic8n1gv8sgvhdl7_download%20(2).jpg'),
        img('nan188tbramre5z8ie064p5g5uva_download%20(10).jpg'),
        img('0yt7dy496l0dya9x4tyoce33rkoa_download%20(14).jpg'),
        img('0lvy1o3r67cxf9rq6jplgfbdct14_download.jpg'),
        img('46u68trvcw7tt1v4n2977dh832if_download%20(11).jpg'),
        img('ojlsid5xxvchhaeuhrjw8nxwlbkz_download%20(8).jpg'),
        img('av5yqocyc7kdgwzaspgjp5zpdwks_download%20(15).jpg')
      ]
    },
    activities: [
      {
        name: 'Oslo sightseeing tour',
        day: 6,
        optional: false,
        image: img('m7rhyeh2sdion2iss4g8qvdjh7ve_shutterstock_495297691.jpg'),
        description: 'Vigeland Park, Holmenkollen and the Opera House.'
      }
    ],
    program: {
      name: 'Oslo',
      description: 'Oslo sightseeing and the overnight cruise to Denmark.',
      image: img('o3foa9gjr1pw0091p9hxdnzp9bdk_shutterstock_737227516.jpg')
    }
  },
  {
    letter: 'F',
    name: 'Copenhagen',
    dayLabel: 'Day 8 to 9',
    images: [
      img('k76r1tqyaxnbg9tu3hp490xwbefx_shutterstock_2330486623.jpg'),
      img('0bj4o3lef0ya3hkkalcxacss6j4s_shutterstock_425892901.jpg'),
      img('fzhq9ffimfcpkr7i8n9y4gwf13p1_shutterstock_235536577.jpg'),
      img('93xtprv97v5fbjllsa1fmtho9o2n_shutterstock_378831622.jpg')
    ],
    dayImages: {
      8: [
        img('d6u1q8bab59h9xj3w5p3l56xyilt_danish%20parliament%201.jpg'),
        img('vvks8lf3da329kjfbouzytwwebua_29422687306_021b52080f_b.jpg'),
        img('pm2aeq2abm8kp2fnbgwn5taar8tj_17652191216_72fd1284a0_o.jpg'),
        img('9tdosqn5lis76ycx6m8df9xp005z_1619077691_shutterstock_1915246690.jpg')
      ],
      9: [
        img('k76r1tqyaxnbg9tu3hp490xwbefx_shutterstock_2330486623.jpg'),
        img('0bj4o3lef0ya3hkkalcxacss6j4s_shutterstock_425892901.jpg'),
        img('fzhq9ffimfcpkr7i8n9y4gwf13p1_shutterstock_235536577.jpg'),
        img('93xtprv97v5fbjllsa1fmtho9o2n_shutterstock_378831622.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 8 · Copenhagen`,
      'Breakfast on board and arrival in Copenhagen',
      'Guided tour of the city',
      'The evening free at Nyhavn',
      `${DAY_MARK}Day 9 · Departure from Copenhagen`,
      'Breakfast at the hotel and check out',
      'Transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'Copenhagen city hotel, Copenhagen',
      description: '1 night · Breakfast · Standard room · 3★ · Hotel in the centre',
      images: [
        img('llnrrsc2pa85qwd3hffax5ef3qri_shutterstock_1800560932.jpg'),
        img('7rwzj3dkrmoit610h9afvla1h9yu_292229272.jpg'),
        img('859213mmoyz0ck5b70pqfonfejow_292229300.jpg'),
        img('z2xecl3tpiowtbc8wq13z8tq93l4_292229293.jpg'),
        img('qpi4kbyx700eabaxf5zcsesfbre4_292229289.jpg'),
        img('rfl4u2nmy891mcl0ivc47e5tl3f9_292229278.jpg')
      ]
    },
    activities: [
      {
        name: 'Copenhagen sightseeing tour',
        day: 8,
        optional: false,
        image: img('d6u1q8bab59h9xj3w5p3l56xyilt_danish%20parliament%201.jpg'),
        description: 'Nyhavn, the Little Mermaid, Amalienborg and Tivoli.'
      }
    ],
    program: {
      name: 'Copenhagen',
      description: 'A guided day in Copenhagen before flying home.',
      image: img('k76r1tqyaxnbg9tu3hp490xwbefx_shutterstock_2330486623.jpg')
    }
  }
];

const detail = {
  slug: 'scandinavia-group-tour-helsinki-to-copenhagen',
  ctaHref: '/l/finland/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Scandinavia Group Tour: Helsinki to Copenhagen',
  alt: 'The Stockholm waterfront and Gamla Stan seen from the Skyview gondola',
  days: '9 days / 8 nights',
  stations: '6 stops',
  transport: 'Overnight cruises Helsinki to Stockholm and Oslo to Copenhagen, a flight to Bergen, the Norway in a Nutshell route and coach to Geilo and Oslo',
  tag: 'Multi-country',
  tags: ['Multi-country', 'Culture', 'Group'],
  price: 376780,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Helsinki', 'Stockholm', 'Bergen', 'Geilo', 'Oslo', 'Copenhagen'],
  stats: { days: 9, cities: 6, hotels: 6, activities: 6, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['6 hotels', 'Accommodation'],
    ['6 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['10 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aino',
    image: '/experts/riya.webp',
    role: 'Finland expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Lapland in winter is quieter than anywhere I know. The snow swallows every sound and the sky does the rest.',
    quoteMore: 'Rent the thermal overalls your lodge offers for the aurora nights. Your own jacket will not be enough at minus twenty, however good it looks.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Nine days through four Nordic capitals as a small group: Helsinki, an overnight cruise to Stockholm with the Skyview gondola, Bergen and the Norway in a Nutshell route to Geilo, Oslo, and a cruise to Copenhagen.',
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
    { title: 'Day 1: Arrival in Helsinki (Arrival)', text: 'Arrival at the airport and private transfer to your hotel\nCheck in and the rest of the day at leisure', hotel: 'Scandic Meilahti, Helsinki', highlights: ['Arrival at the airport and private transfer to your hotel', 'Check in and the rest of the day at leisure'] },
    { title: 'Day 2: Helsinki and the overnight cruise (B)', text: 'Breakfast, then a guided city tour\nBoarding the Silja Line ferry in the afternoon\nDinner and a night at sea', hotel: 'Scandic Meilahti, Helsinki', highlights: ['Breakfast, then a guided city tour', 'Boarding the Silja Line ferry in the afternoon', 'Dinner and a night at sea'] },
    { title: 'Day 3: Stockholm (B)', text: 'Breakfast on board and arrival in Stockholm\nCity tour, Skyview gondola and the Vasa Museum\nCheck in and a free evening', hotel: 'Good Morning+ Hägersten', highlights: ['Breakfast on board and arrival in Stockholm', 'City tour, Skyview gondola and the Vasa Museum', 'Check in and a free evening'] },
    { title: 'Day 4: Fly to Bergen (B)', text: 'Breakfast and transfer to the airport\nFlight to Bergen\nBryggen wharf tour and Mount Fløyen', hotel: 'Comfort Hotel Bergen Airport', highlights: ['Breakfast and transfer to the airport', 'Flight to Bergen', 'Bryggen wharf tour and Mount Fløyen'] },
    { title: 'Day 5: Norway in a Nutshell to Geilo (B)', text: 'Breakfast and check out\nFjord ferry, Stalheim coach and the Flåm Railway\nCoach to Geilo for the night', hotel: 'Thon Hotel Hallingdal, Geilo', highlights: ['Breakfast and check out', 'Fjord ferry, Stalheim coach and the Flåm Railway', 'Coach to Geilo for the night'] },
    { title: 'Day 6: Oslo (B)', text: 'Breakfast and check out\nCoach to Oslo and a sightseeing tour\nCheck in and a free evening', hotel: 'Thon Hotel Oslofjord', highlights: ['Breakfast and check out', 'Coach to Oslo and a sightseeing tour', 'Check in and a free evening'] },
    { title: 'Day 7: Oslo to Copenhagen by sea (B)', text: 'Breakfast, then a free morning in Oslo\nBoarding the DFDS ferry in the afternoon\nA night at sea down the Oslofjord', hotel: 'Thon Hotel Oslofjord', highlights: ['Breakfast, then a free morning in Oslo', 'Boarding the DFDS ferry in the afternoon', 'A night at sea down the Oslofjord'] },
    { title: 'Day 8: Copenhagen (B)', text: 'Breakfast on board and arrival in Copenhagen\nGuided tour of the city\nThe evening free at Nyhavn', hotel: 'Copenhagen city hotel', highlights: ['Breakfast on board and arrival in Copenhagen', 'Guided tour of the city', 'The evening free at Nyhavn'] },
    { title: 'Day 9: Departure from Copenhagen (B)', text: 'Breakfast at the hotel and check out\nTransfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Schengen visa fees; lunches and dinners unless stated; travel insurance; optional excursions; personal expenses. Hotels are quoted as a class and named on confirmation.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Europe', href: '/europe' },
  { label: 'Finland', href: '/europe/finland' },
  { label: detail.title }
];

export const scandinaviaGroupTourHelsinkiCopenhagenBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const scandinaviaGroupTourHelsinkiCopenhagenProduct = {
  slug: detail.slug,
  places: ['Helsinki', 'Stockholm', 'Bergen', 'Geilo', 'Oslo', 'Copenhagen'],
  href: `/europe/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 9,
  stops: 6,
  hotels: 6,
  cities: 6,
  activities: 6,
  transfers: 10,
  meals: 10,
  price: detail.price,
  images: cardImages
};
