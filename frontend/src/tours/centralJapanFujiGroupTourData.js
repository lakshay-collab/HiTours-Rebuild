// Central Japan with Mount Fuji Group Tour. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg'),
  img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
  img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg'),
  img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
  img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg'),
  img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
  img('9gsm680s3keh92fm9esn9a238vxf_shutterstock_1524921077.jpg'),
  img('xdyj7i31bk427zhdgk2thbw2rv2d_shutterstock_572057020.jpg'),
  img('rudp6bxggw53vaykvui9490l2twt_shutterstock_721643926.jpg'),
  img('hjvdd18dwrrkfqh5hyjbyf1qy0md_shutterstock_2299917035.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg'),
  img('hjvdd18dwrrkfqh5hyjbyf1qy0md_shutterstock_2299917035.jpg'),
  img('t70do4sx3jrtcq2v146hmuwx11x4_shutterstock_1201440004.jpg'),
  img('s0s1j9k7ol91rdwi77ystaof4uzo_48126669936_084ba4982e_o.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Tokyo',
    dayLabel: 'Day 1 to 2',
    images: [
      img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg'),
      img('t70do4sx3jrtcq2v146hmuwx11x4_shutterstock_1201440004.jpg'),
      img('whkp4azssrlsyr0rofdwlnikzki2_shutterstock_517903198.jpg'),
      img('kvcwh2dg2ur4uefm8h4p112u7peh_shutterstock_2215811375%20(1).jpg')
    ],
    dayImages: {
      1: [
        img('s0s1j9k7ol91rdwi77ystaof4uzo_48126669936_084ba4982e_o.jpg'),
        img('7v0pb5achz6hdl8vmiejhfx5ocg9_1617352304_Shinjuku_Gyoen_National_Garden.jpg'),
        img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg'),
        img('t70do4sx3jrtcq2v146hmuwx11x4_shutterstock_1201440004.jpg')
      ],
      2: [
        img('tw3i366n566lv6810po085e7r0d7_qyx7qg4yqav2a6i0339j6rvfjlhx_dl.beatsnoop.com-3mLY6yBqzO.jpg'),
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
        image: img('tw3i366n566lv6810po085e7r0d7_qyx7qg4yqav2a6i0339j6rvfjlhx_dl.beatsnoop.com-3mLY6yBqzO.jpg'),
        description: 'A guided day through the city, from the Meiji shrine and the Imperial Palace gardens to the old temple lanes of Asakusa.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Two nights beside Shinagawa station, with free time in Shinjuku and a full guided city day.',
      image: img('t0pbv4jlzvutucesqktqgwlsjab2_shutterstock_228516994.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kawaguchiko',
    subtitle: 'Kawaguchiko to Mount Fuji',
    dayLabel: 'Day 3',
    images: [
      img('8a1guib4pdk1t3rfaoo9h6fki7xm_shutterstock_637507525.jpg'),
      img('hygl11zw4xrevkrknmbmxncajoxl_shutterstock_1299589315%20(1).jpg'),
      img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg'),
      img('yxn041uwbb0gfw9m9a978t9zo6b9_shutterstock_2310917627.jpg')
    ],
    dayImages: {
      3: [
        img('u74y0dh2ev4n1eex509n1c5eols4_sp6unkwjhqm12gdd7i75tneygb75_dl.beatsnoop.com-VxlWg15Jwm.jpg'),
        img('5fkvulgtcxm4n9tf8pkdfhiwsxy0_33774521860_72822b9eb5_b.jpg'),
        img('ttflfg1cdsovpctxsck8k1ac35xr_49075001941_d6e64c8a9c_o.jpg'),
        img('r9kyqgja389bv3lycmnoni0zmzo6_gd8f2lm75topdnq9lhjayayk4997_dl.beatsnoop.com-ctsxFNIh9w.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Mount Fuji and Kawaguchiko`,
      'Breakfast and check out, then west towards Mount Fuji',
      'The Chureito pagoda at Arakurayama Sengen park',
      'A boat ride out onto Lake Kawaguchi',
      'Up the mountain road to the fifth station'
    ],
    accommodation: {
      name: 'Fuji Kawaguchiko Resort, Kawaguchiko',
      description: '1 night · Breakfast · Standard room · 4★ · Lakeside resort with Mount Fuji across the water on a clear day',
      images: [
        img('rwd10mqmk1yozpf6kb2km1pcjbm6_02.jpg'),
        img('02bn5nia9yc0qaumpm5umc4tmnkk_290483986.jpg'),
        img('2q6wm9n2nmdvqebwqlbgm43mk6ay_215397307.jpg'),
        img('0ofot1wtpbvum6gxn9xen292byjw_288970655.jpg'),
        img('e616utvbogboa3aigim84w2uj8wc_243889991.jpg'),
        img('5ncsdwc9r8077kux5i8p96iegooa_214709095.jpg'),
        img('u4wllmt88lv6qtflwqnjnrh34w9b_caption%20(13).jpg'),
        img('pgaueyh3yxqjk2120m55qur7ap55_caption%20(11).jpg'),
        img('b5sanodwuu3q9s7x06akmlh7uq79_289330211.jpg'),
        img('vb2jahes5de0phzk36mrjjmslh0q_caption%20(12).jpg')
      ]
    },
    activities: [
      {
        name: 'Arakurayama Sengen park and shrine',
        day: 3,
        optional: false,
        image: img('u74y0dh2ev4n1eex509n1c5eols4_sp6unkwjhqm12gdd7i75tneygb75_dl.beatsnoop.com-VxlWg15Jwm.jpg'),
        description: 'The four hundred steps up to the Chureito pagoda, where the pagoda, the cherry trees and Mount Fuji line up in one frame.'
      },
      {
        name: 'Lake Kawaguchi boat ride',
        day: 3,
        optional: false,
        image: img('r9kyqgja389bv3lycmnoni0zmzo6_gd8f2lm75topdnq9lhjayayk4997_dl.beatsnoop.com-ctsxFNIh9w.jpg'),
        description: 'A cruise out onto the lake, with the mountain reflected in the water when the cloud lifts.'
      },
      {
        name: 'Mount Fuji fifth station',
        day: 3,
        optional: false,
        image: img('2z93hx6l5z2bqalzs3sgy5n6nzia_vwpwi1f9ppvi4e4h8wuj02eel89u_dl.beatsnoop.com-KqbakQR7rV.jpg'),
        description: 'Up the mountain road to the fifth station at 2,300 metres, where the treeline ends and the climbing trail begins.'
      }
    ],
    program: {
      name: 'Kawaguchiko',
      description: 'A lakeside night below Mount Fuji, with the Chureito pagoda, a boat ride and the drive up to the fifth station.',
      image: img('8a1guib4pdk1t3rfaoo9h6fki7xm_shutterstock_637507525.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Kyoto',
    subtitle: 'Kyoto to Nagoya and Osaka',
    dayLabel: 'Day 4 to 6',
    images: [
      img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
      img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
      img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg')
    ],
    dayImages: {
      4: [
        img('6d42kralq5bwf2uh30ztjkuxln9p_qqym5fnl74izerq08coyis1sqt3c_I%20Village%206.png'),
        img('bmkakc99tn5wyztlkn7tezgwqxau_DSC2995.jpg'),
        img('24gt351rjo0dsed5mwbyhvlsycjw_od6r307vyrl8d9f6aoutz6a1smk1_Shiraito%20Falls%201.png'),
        img('gog7u27a8dqiori63qdh7sl30kqu_caption.png')
      ],
      5: [
        img('h762up22jjpmn4oippzxc4a0p77k_Downpic.cc-image270285575.jpg'),
        img('j8xcq76t3o64yxmui5m4kt22wejq_52980159201_640a74d15d_o.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('175jjcq0s03pjbxnrgbvss1n0fyf_Fushimi%20Inari%20Taisha-1.jpg')
      ],
      6: [
        img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
        img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
        img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Shiraito falls and on to Kyoto`,
      'Breakfast, then the thatched village of Iyashi no Sato',
      'Shiraito falls, fed by the snowmelt off Fuji',
      'The Toyota automobile museum in Nagoya',
      'On to Kyoto and check in by the station',
      `${DAY_MARK}Day 5 · Kyoto sightseeing`,
      'Breakfast, then a guided day through the old capital',
      'The golden pavilion and a Zen garden',
      'The torii gate paths above Fushimi',
      'Free time in the Gion lanes in the evening',
      `${DAY_MARK}Day 6 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'Transfer to Osaka and Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'Miyako Hotel Kyoto Hachijo, Kyoto',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel opposite Kyoto station, handy for the trains',
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
        name: 'Iyashi no Sato Nenba village',
        day: 4,
        optional: false,
        image: img('6d42kralq5bwf2uh30ztjkuxln9p_qqym5fnl74izerq08coyis1sqt3c_I%20Village%206.png'),
        description: 'A rebuilt village of thatched farmhouses below Mount Fuji, now craft workshops where you can try dyeing or pottery.'
      },
      {
        name: 'Shiraito falls',
        day: 4,
        optional: false,
        image: img('gog7u27a8dqiori63qdh7sl30kqu_caption.png'),
        description: 'A two hundred metre curtain of spring water falling in white threads, fed by the snowmelt off Mount Fuji.'
      },
      {
        name: 'Toyota automobile museum',
        day: 4,
        optional: false,
        image: img('ki8z1mqmdu2m0cbn9dn150fw9f6q_Toyota_Automobile_Museum_interior-4_2013_September.jpg'),
        description: 'The museum in Nagoya that runs from the first looms through to the cars, with machines you can watch working.'
      },
      {
        name: 'Kyoto sightseeing tour',
        day: 5,
        optional: false,
        image: img('h762up22jjpmn4oippzxc4a0p77k_Downpic.cc-image270285575.jpg'),
        description: 'A guided day through the old capital, taking in the golden pavilion, a Zen garden and the torii gate paths above Fushimi.'
      }
    ],
    program: {
      name: 'Kyoto',
      description: 'Two nights by Kyoto station, reached through the Fuji foothills and Nagoya, with a guided day and a free evening in Gion.',
      image: img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg')
    }
  }
];

const detail = {
  slug: 'central-japan-with-mount-fuji-group-tour',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Central Japan with Mount Fuji Group Tour',
  alt: 'Lake Kawaguchi with Mount Fuji behind it, Japan',
  days: '6 days / 5 nights',
  stations: '3 stops',
  transport: 'Coaches and guided touring throughout',
  tag: 'Group tour',
  tags: ['Culture', 'Short trips'],
  price: 397122,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Kawaguchiko', 'Mount Fuji', 'Nagoya', 'Kyoto', 'Osaka'],
  stats: { days: 6, cities: 3, hotels: 3, activities: 8, transfers: 16 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['8 experiences', 'Activities'],
    ['16 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Six days with eight guided experiences in them. For a first look at central Japan, nothing is wasted.',
    quoteMore: 'Sleeping at Kawaguchiko gives you two chances at a clear mountain, evening and morning. Day trippers only get one.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days on a small group tour: Tokyo with a guided city day, a lakeside night below Mount Fuji with the Chureito pagoda, a boat ride and the fifth station, then two nights in Kyoto reached through Shiraito falls and Nagoya.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights with daily breakfast; coach travel and guided touring throughout; Tokyo sightseeing tour; Arakurayama Sengen park and shrine; Lake Kawaguchi boat ride; Mount Fuji fifth station; Iyashi no Sato Nenba; Shiraito falls; Toyota automobile museum tickets; Kyoto sightseeing tour.',
  intro2: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Tokyo (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in beside Shinagawa station\nFree time in the Shinjuku district\nEvening at your own pace', hotel: 'Shinagawa Prince Hotel', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in beside Shinagawa station', 'Free time in the Shinjuku district'] },
    { title: 'Day 2: Tokyo sightseeing (B)', text: 'Breakfast, then a guided day through Tokyo\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in the city', hotel: 'Shinagawa Prince Hotel', highlights: ['Breakfast, then a guided day through Tokyo', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Mount Fuji and Kawaguchiko (B)', text: 'Breakfast and check out, then west towards Mount Fuji\nThe Chureito pagoda at Arakurayama Sengen park\nA boat ride out onto Lake Kawaguchi\nUp the mountain road to the fifth station', hotel: 'Fuji Kawaguchiko Resort', highlights: ['Breakfast and check out, then west towards Mount Fuji', 'The Chureito pagoda at Arakurayama Sengen park', 'A boat ride out onto Lake Kawaguchi'] },
    { title: 'Day 4: Shiraito falls and on to Kyoto (B)', text: 'Breakfast, then the thatched village of Iyashi no Sato\nShiraito falls, fed by the snowmelt off Fuji\nThe Toyota automobile museum in Nagoya\nOn to Kyoto and check in by the station', hotel: 'Miyako Hotel Kyoto Hachijo', highlights: ['Breakfast, then the thatched village of Iyashi no Sato', 'Shiraito falls, fed by the snowmelt off Fuji', 'The Toyota automobile museum in Nagoya'] },
    { title: 'Day 5: Kyoto sightseeing (B)', text: 'Breakfast, then a guided day through the old capital\nThe golden pavilion and a Zen garden\nThe torii gate paths above Fushimi\nFree time in the Gion lanes in the evening', hotel: 'Miyako Hotel Kyoto Hachijo', highlights: ['Breakfast, then a guided day through the old capital', 'The golden pavilion and a Zen garden', 'The torii gate paths above Fushimi'] },
    { title: 'Day 6: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nTransfer to Osaka and Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Transfer to Osaka and Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const centralJapanFujiGroupTourBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const centralJapanFujiGroupTourProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Kawaguchiko', 'Mount Fuji', 'Nagoya', 'Kyoto', 'Osaka'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 8,
  transfers: 16,
  meals: 5,
  price: detail.price,
  images: cardImages
};
