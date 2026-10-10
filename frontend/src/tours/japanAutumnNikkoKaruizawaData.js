// Japan Autumn Getaway: Nikko and Karuizawa. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg'),
  img('80vqvv8gqno11w4rvnlx4kvzfmpr_97d5118cc9d9cadfc68b3aedac0f369ad671a2ff70942f7ceaa83a4de735dcf1.jpg'),
  img('l0rqqmzvmngmle5ajnu83yooxfdx_images%20-%202026-09-23T194625.456.jpg'),
  img('8a1guib4pdk1t3rfaoo9h6fki7xm_shutterstock_637507525.jpg'),
  img('sngoqoaditiwpl9qxvwhv3wqb5j0_caption%20(58).jpg'),
  img('fx2ejt3tx1vn306ilb7heg6wd8j9_image.jpg'),
  img('61izsuekzybkh86q2bvapmbmyrlt_shutterstock_355725083.jpg'),
  img('puqpipjmxzmqknhyfj0agaomx1xo_86b7682b27bbb74357fcc74e5d1840758a3b118a840424a43144eabe5aba5738.jpg'),
  img('itrzeok1si5qa2ejxgs5ttnuq0hw_6033_01.jpg'),
  img('zcclccnpnk2b78cy9usi5x5zdoyk_shutterstock_666197236.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('80vqvv8gqno11w4rvnlx4kvzfmpr_97d5118cc9d9cadfc68b3aedac0f369ad671a2ff70942f7ceaa83a4de735dcf1.jpg'),
  img('l0rqqmzvmngmle5ajnu83yooxfdx_images%20-%202026-09-23T194625.456.jpg'),
  img('8a1guib4pdk1t3rfaoo9h6fki7xm_shutterstock_637507525.jpg'),
  img('sngoqoaditiwpl9qxvwhv3wqb5j0_caption%20(58).jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    dayLabel: 'Day 1',
    images: [
      img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg'),
      img('t70do4sx3jrtcq2v146hmuwx11x4_shutterstock_1201440004.jpg'),
      img('whkp4azssrlsyr0rofdwlnikzki2_shutterstock_517903198.jpg'),
      img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('0uo52pyilwqk8a85b8hmmj2q8nvv_shinjukugyoen.jpg'),
        img('kidds9tlnuutgj7c510tsjetzghh_images%20-%202026-09-23T224918.766.jpg'),
        img('th0xwi7zxf17hpgoquphvd61l12a_spot_8_3.jpg'),
        img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Tokyo`,
      'Arrival at Narita or Haneda and transfer to your hotel',
      'Check in at your Shinjuku hotel',
      'Free time to explore the neighbourhood',
      'Optional: Omoide Yokocho for dinner'
    ],
    accommodation: {
      name: 'APA Hotel Shinjuku Kabukicho Chuo, Tokyo',
      description: '2 nights · Breakfast · Standard room · 3★ · Well placed hotel in Shinjuku, minutes from the station',
      images: [
        img('rs3elzkc1rrut6fk4247sps0kdms_download%20(2).png'),
        img('jkr5eckxbjif1c0qfhagseuibn8w_download%20(3).png'),
        img('aw5patnjnmem3hvxcez7wmc1x435_download.png'),
        img('0xrao4l0u3f2fu9xa5u0ofh859nn_download%20(6).png'),
        img('jmursjxr921isz0151hmm4nghc9b_download%20(1).png'),
        img('e36bxps39n38vbpd6rbds9as9cl7_download%20(4).png'),
        img('cm99fyb00i7w1yjnqnv6i16equ2h_download%20(5).png'),
        img('w3vj61jork4cblz9cf0xfm536cb2_download%20(7).png'),
        img('ngkqe7fvs3ag0t5vonca8vigou4d_download%20(8).png')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Tokyo',
      description: 'A first night in Shinjuku with the evening free, before the trip heads north into the hills.',
      image: img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Nikko',
    dayLabel: 'Day 2',
    images: [
      img('sngoqoaditiwpl9qxvwhv3wqb5j0_caption%20(58).jpg'),
      img('80vqvv8gqno11w4rvnlx4kvzfmpr_97d5118cc9d9cadfc68b3aedac0f369ad671a2ff70942f7ceaa83a4de735dcf1.jpg'),
      img('puqpipjmxzmqknhyfj0agaomx1xo_86b7682b27bbb74357fcc74e5d1840758a3b118a840424a43144eabe5aba5738.jpg')
    ],
    dayImages: {
      2: [
        img('domnybj9b5afj9z8lhybzxahkzhu_caption%20(3).jpg'),
        img('14qcljnn22qwlkfq64y6xcft3xuz_well-worth-the-visit.jpg'),
        img('u75jcxnzn9fm8oobqsphndprqnme_shoyoen.jpg'),
        img('061t3m0s2igu8n8e0v27luvmt8jm_caption.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Nikko shrines and gardens`,
      'Breakfast and check out, then north to Nikko',
      'Rinno-ji temple and the Shoyoen garden',
      'The Toshogu shrine in its cedar forest',
      'The red Shinkyo bridge over the river'
    ],
    accommodation: {
      name: 'Fairfield by Marriott Tochigi Nikko, Nikko',
      description: '1 night · Breakfast · Standard room · 3★ · Quiet hotel in the hills outside Nikko',
      images: [
        img('knv3k1p03rtkdjjhkyu6uvinv8wg_461779391.jpg'),
        img('c8urndnj737mwncxc2oldnfemus1_461779376.jpg'),
        img('iy1493mjhqapiamgn0g31u14q0kx_461779387.jpg'),
        img('48v44b6h4nu6tpdmhdpl7a4bypt4_461779373.jpg'),
        img('q699e1comptpzqqmu3rtu3jyn62l_461657424.jpg'),
        img('y2gpbvtvxnsbzibv0ul84eepouon_461657415.jpg'),
        img('c1ooj0ubmkiucpp2b2g43r6iosbc_461779372.jpg'),
        img('6n78qpetefzmxopi36fqt0m7opby_461657416.jpg'),
        img('mvbk475dpb9zjmdtk6406emi1435_461657417.jpg'),
        img('utlf5gk1h0aw62p8xluvzilc9ph0_461657421.jpg'),
        img('v580ppctu0g9hc0klwc7tje48rjf_461657414.jpg'),
        img('58qmtf1dfbs51xxthyy6ud2osdv8_461657428.jpg'),
        img('xpcudr7t2g7xhqg4qczih8dm4xy4_461657410.jpg'),
        img('jz5dgenylwhfpl5vs6maxcv7fys9_461657413.jpg'),
        img('6rbaxznalwe4y33qfh3254egw7qg_461779369.jpg'),
        img('8ba3lsqfaoclbzn4544zc4sy8b8e_461779391.jpg'),
        img('8z61uvxeb2swzqna5h2a5b9ulqxg_461779376.jpg'),
        img('63tbwue7ut8pi7jjnhp70suah6fx_461657425.jpg'),
        img('w3xk0kgcopuz4l3ocat5pxzpwi8j_461779387.jpg'),
        img('hf5p62pgka8nil5gqkxug7e59nie_461779373.jpg'),
        img('uqq2gcl48ud1zg181rhiv4aheui7_461779372.jpg'),
        img('e7iu9iqgo1f9mvnmgr9nuxe3pijx_461657410.jpg'),
        img('vd6bns898acdmz8x5x8wy13k1f12_461657424.jpg'),
        img('euwi5t28bcerfpazyuj9dqlo7l6j_461657416.jpg'),
        img('a80ng9uam86oprejfr2ja2be1795_461779369.jpg'),
        img('xrm610brwehdqtqm11upgteps1cb_461657414.jpg'),
        img('2zgeopwqv0vuyud2l2z7vz41ggaj_461657415.jpg'),
        img('cstx9ulsgpbajv4cl0fcyqbqcgrs_461657417.jpg'),
        img('pgmc0rud0h41i64hsdmoyw1437gs_461657428.jpg'),
        img('mj9walcabf95wcsz22vxspw93q5r_461657425.jpg'),
        img('0uwonhbhi4q02z50o5f7alj885aw_461657413.jpg'),
        img('h6yu9imwyajegbd808929cfr91fl_461657421.jpg')
      ]
    },
    activities: [
      {
        name: 'Nikko heritage and scenic highlights',
        day: 2,
        optional: false,
        image: img('domnybj9b5afj9z8lhybzxahkzhu_caption%20(3).jpg'),
        description: 'Rinno-ji temple and the Shoyoen garden, then the lacquered Toshogu shrine in its cedar forest and the Shinkyo bridge.'
      }
    ],
    program: {
      name: 'Nikko',
      description: 'A night in the hills at Nikko, with its shrines, gardens and the red Shinkyo bridge over the river.',
      image: img('sngoqoaditiwpl9qxvwhv3wqb5j0_caption%20(58).jpg')
    }
  },
  {
    letter: 'C',
    name: 'Karuizawa',
    subtitle: 'Karuizawa to Yudanaka and Matsumoto',
    dayLabel: 'Day 3 to 5',
    images: [
      img('itrzeok1si5qa2ejxgs5ttnuq0hw_6033_01.jpg'),
      img('fx2ejt3tx1vn306ilb7heg6wd8j9_image.jpg'),
      img('l0rqqmzvmngmle5ajnu83yooxfdx_images%20-%202026-09-23T194625.456.jpg')
    ],
    dayImages: {
      3: [
        img('505ve0bux8s1kj29p9sttxr0q1ka_img_0173_2__en-US__img_0173_Shorinzan_Darumaji_Temple_2_PI.jpg'),
        img('8enzqoq138px7ckorthq86h8l0yo_231-shorinzan-daruma-ji-temple_1754628518_OewO14by%20(1).jpg'),
        img('3x99xr50b7m5e6u4nf2ud2ov2zgi_images%20-%202026-09-23T224443.737.jpg'),
        img('f2u7v4brj8jy5e9pjtvsdcsmgefm_3-3-1200x801.webp')
      ],
      4: [
        img('8cly1he66byanm94q36wbiqpeufa_DSCF8096-2.webp'),
        img('yygb1wvvs8vkalt4i206rz7ah6vo_Jigokudani%20Yaen-Koen-1.jpg'),
        img('jiq8pevel1l26zh08aqs3lbrnyfa_images%20-%202026-09-23T222619.205.jpg'),
        img('y7q8hzwuqzyic4maalof2teciu6q_matsumoto-02.jpg')
      ],
      5: [
        img('itrzeok1si5qa2ejxgs5ttnuq0hw_6033_01.jpg'),
        img('fx2ejt3tx1vn306ilb7heg6wd8j9_image.jpg'),
        img('l0rqqmzvmngmle5ajnu83yooxfdx_images%20-%202026-09-23T194625.456.jpg'),
        img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Daruma temple and Karuizawa`,
      'Breakfast and check out, then west via Takasaki',
      'The Shorinzan Daruma temple and its dolls',
      'The Stone Church at Karuizawa',
      'Check in beside Karuizawa station',
      `${DAY_MARK}Day 4 · Snow monkeys and Matsumoto`,
      'Breakfast and check out, then on to Yudanaka',
      'The macaques bathing at Jigokudani',
      'Matsumoto castle on its moat',
      'Back to Tokyo in the evening',
      `${DAY_MARK}Day 5 · Departure from Tokyo`,
      'Breakfast at the hotel and check out',
      'Private transfer to Narita or Haneda for your flight home'
    ],
    accommodation: {
      name: 'APA Hotel Karuizawa Ekimae, Karuizawa',
      description: '1 night · Breakfast · Standard room · 3★ · Simple hotel beside Karuizawa station in the highlands',
      images: [
        img('bokx6mu1f4bp0a6ccz0hejcqlrmm_894246966.jpg'),
        img('8rgmm3arg5unirtyetd45wbdu2gm_894244943.jpg'),
        img('ykuuqcvtsaisnncf4rzyvwluof3g_894246356.jpg'),
        img('pvrnva6bm0uapf61olru7sobce6w_894244591.jpg'),
        img('a61gvqwm1e6mqccbun4g5zzr4kna_894245403.jpg'),
        img('awtb2fwhvhftigujy2l7iz4wwhlj_894244293.jpg'),
        img('u1zvddjir52eml6dww8pjyfw6hkc_894246777.jpg'),
        img('y0j8csnyyokc6qyr6rhy7sf8b2x1_894244114.jpg'),
        img('qp4juhh0ichua4a02tn5qzgpaz7q_894245165.jpg')
      ]
    },
    activities: [
      {
        name: 'Shorinzan Daruma temple',
        day: 3,
        optional: false,
        image: img('8enzqoq138px7ckorthq86h8l0yo_231-shorinzan-daruma-ji-temple_1754628518_OewO14by%20(1).jpg'),
        description: 'The temple at Takasaki where the round daruma dolls come from, thousands of them left behind as wishes fulfilled.'
      },
      {
        name: 'The Stone Church at Karuizawa',
        day: 3,
        optional: false,
        image: img('3x99xr50b7m5e6u4nf2ud2ov2zgi_images%20-%202026-09-23T224443.737.jpg'),
        description: 'A chapel of stone arches and glass built into the hillside, one of the quietest pieces of architecture in the country.'
      },
      {
        name: 'Jigokudani monkey park',
        day: 4,
        optional: false,
        image: img('8cly1he66byanm94q36wbiqpeufa_DSCF8096-2.webp'),
        description: 'The hot spring at Yudanaka where wild macaques sit chest deep in the steaming water, often with snow on their heads.'
      },
      {
        name: 'Matsumoto castle',
        day: 4,
        optional: false,
        image: img('jiq8pevel1l26zh08aqs3lbrnyfa_images%20-%202026-09-23T222619.205.jpg'),
        description: 'The black keep they call the crow castle, standing on its moat with the Alps behind it, an original from the sixteenth century.'
      }
    ],
    program: {
      name: 'Karuizawa',
      description: 'A highland night at Karuizawa, with the Daruma temple and Stone Church on the way, then the monkeys and Matsumoto castle before Tokyo.',
      image: img('itrzeok1si5qa2ejxgs5ttnuq0hw_6033_01.jpg')
    }
  }
];

const detail = {
  slug: 'japan-autumn-getaway-nikko-and-karuizawa',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Japan Autumn Getaway: Nikko and Karuizawa',
  alt: 'Autumn maples around the Shinkyo bridge at Nikko, Japan',
  days: '5 days / 4 nights',
  stations: '3 stops',
  transport: 'Private transfers, trains and guided touring',
  tag: 'Short trips',
  tags: ['Nature', 'Culture'],
  price: 172188,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Nikko', 'Takasaki', 'Karuizawa', 'Yudanaka', 'Matsumoto'],
  stats: { days: 5, cities: 3, hotels: 3, activities: 5, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['4 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Five days in the hills north of Tokyo, timed for the maples. Nikko and Karuizawa in autumn are worth the short nights.',
    quoteMore: 'Go in the first half of November for the colour at Nikko. The monkeys are there all year, but the maples are not.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five days in the hills north of Tokyo: a first night in Shinjuku, then Nikko\'s shrines and gardens, the Daruma temple and Stone Church on the way to Karuizawa, and the Jigokudani monkeys with Matsumoto castle before you fly home.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights with daily breakfast; private transfers and trains throughout; Nikko heritage tour with Rinno-ji, the Shoyoen garden and Toshogu shrine; Shorinzan Daruma temple; the Stone Church at Karuizawa; Jigokudani monkey park; Matsumoto castle entry.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in at your Shinjuku hotel\nFree time to explore the neighbourhood\nOptional: Omoide Yokocho for dinner', hotel: 'APA Hotel Shinjuku Kabukicho Chuo', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in at your Shinjuku hotel', 'Free time to explore the neighbourhood'] },
    { title: 'Day 2: Nikko shrines and gardens (B)', text: 'Breakfast and check out, then north to Nikko\nRinno-ji temple and the Shoyoen garden\nThe Toshogu shrine in its cedar forest\nThe red Shinkyo bridge over the river', hotel: 'Fairfield by Marriott Tochigi Nikko', highlights: ['Breakfast and check out, then north to Nikko', 'Rinno-ji temple and the Shoyoen garden', 'The Toshogu shrine in its cedar forest'] },
    { title: 'Day 3: Daruma temple and Karuizawa (B)', text: 'Breakfast and check out, then west via Takasaki\nThe Shorinzan Daruma temple and its dolls\nThe Stone Church at Karuizawa\nCheck in beside Karuizawa station', hotel: 'APA Hotel Karuizawa Ekimae', highlights: ['Breakfast and check out, then west via Takasaki', 'The Shorinzan Daruma temple and its dolls', 'The Stone Church at Karuizawa'] },
    { title: 'Day 4: Snow monkeys and Matsumoto (B)', text: 'Breakfast and check out, then on to Yudanaka\nThe macaques bathing at Jigokudani\nMatsumoto castle on its moat\nBack to Tokyo in the evening', hotel: 'APA Hotel Shinjuku Kabukicho Chuo', highlights: ['Breakfast and check out, then on to Yudanaka', 'The macaques bathing at Jigokudani', 'Matsumoto castle on its moat'] },
    { title: 'Day 5: Departure from Tokyo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Narita or Haneda for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Narita or Haneda for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const japanAutumnNikkoKaruizawaBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const japanAutumnNikkoKaruizawaProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Nikko', 'Takasaki', 'Karuizawa', 'Yudanaka', 'Matsumoto'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 5,
  transfers: 8,
  meals: 4,
  price: detail.price,
  images: cardImages
};
