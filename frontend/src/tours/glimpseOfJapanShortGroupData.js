// Glimpse of Japan Short Group Tour. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('whkp4azssrlsyr0rofdwlnikzki2_shutterstock_517903198.jpg'),
  img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
  img('ptkkqebz4mj100bzruqlj5xbdczr_shutterstock_2268784351.jpg'),
  img('oybpo23mg3zjvym0z2bnpoixfho0_shutterstock_1568410945.jpg'),
  img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
  img('yfbvuqj5t7yyjle11bzesj245xnj_shutterstock_1024764949%20(1).jpg'),
  img('soeej5dh7ua5fb98796aec6qre8x_shutterstock_129611225%20(2).jpg'),
  img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg'),
  img('gha64mnpiaj0sbznnq4r23wd1fid_shutterstock_1024765225.jpg'),
  img('pbglyllc58xvt8glj2u374y10ybf_shutterstock_598301423.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('ptkkqebz4mj100bzruqlj5xbdczr_shutterstock_2268784351.jpg'),
  img('yfbvuqj5t7yyjle11bzesj245xnj_shutterstock_1024764949%20(1).jpg'),
  img('soeej5dh7ua5fb98796aec6qre8x_shutterstock_129611225%20(2).jpg'),
  img('gha64mnpiaj0sbznnq4r23wd1fid_shutterstock_1024765225.jpg')
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
        img('qgsbsuq6h4c9gr3celkqv002vvqy_shutterstock_1012724596.jpg'),
        img('s0s1j9k7ol91rdwi77ystaof4uzo_48126669936_084ba4982e_o.jpg'),
        img('7v0pb5achz6hdl8vmiejhfx5ocg9_1617352304_Shinjuku_Gyoen_National_Garden.jpg'),
        img('whkp4azssrlsyr0rofdwlnikzki2_shutterstock_517903198.jpg')
      ],
      2: [
        img('h4bbeipc3h04psxta19pw75ysyx6_shutterstock_1891839328.jpg'),
        img('ea2mjqt2vr1hf62yek9bq6q7or9i_28330748537_9b6c02ea22_o.jpg'),
        img('iele7cut7wosbp83440c5yyy4663_shutterstock_666196894.jpg'),
        img('l2ve6s75yoif0uquecbp9gh6poh6_Screenshot%202022-09-21%20164951.png')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and Shinjuku`,
      'Arrival at Narita or Haneda and transfer to your hotel',
      'Check in beside Shinagawa station',
      'A guided walk through the Shinjuku lanes',
      'Kabukicho, Omoide Yokocho and the neon streets',
      `${DAY_MARK}Day 2 · Tokyo sightseeing`,
      'A guided day through the city',
      'Meiji shrine and the Imperial Palace gardens',
      'Asakusa and the Senso-ji temple lanes',
      'Evening free in Tokyo'
    ],
    accommodation: {
      name: 'Shinagawa Prince Hotel, Tokyo',
      description: '2 nights · Standard room · 4★ · Large four star hotel beside Shinagawa station',
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
        name: 'Shinjuku district tour',
        day: 1,
        optional: false,
        image: img('qgsbsuq6h4c9gr3celkqv002vvqy_shutterstock_1012724596.jpg'),
        description: 'An easy first evening through Shinjuku\'s lanes, from the neon of Kabukicho to the tiny bars of Omoide Yokocho.'
      },
      {
        name: 'Tokyo sightseeing tour',
        day: 2,
        optional: false,
        image: img('h4bbeipc3h04psxta19pw75ysyx6_shutterstock_1891839328.jpg'),
        description: 'A guided day through the city, from the Meiji shrine and the Imperial Palace gardens to the old temple lanes of Asakusa.'
      }
    ],
    program: {
      name: 'Tokyo',
      description: 'Two nights beside Shinagawa station, with a guided first evening in Shinjuku and a full city day.',
      image: img('whkp4azssrlsyr0rofdwlnikzki2_shutterstock_517903198.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Kyoto',
    dayLabel: 'Day 3',
    images: [
      img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg'),
      img('88i00l239ohvp5tburkmcgdhild7_erik-eastman-wJj5Bs1jHxg-unsplash.jpg'),
      img('aky5f2cl9fyjhcz3ljesfxd9kgfm_kristin-wilson-wJvUBkLU0pA-unsplash.jpg')
    ],
    dayImages: {
      3: [
        img('fco3tdr3mmfauat43qugwv3ib507_shutterstock_2219573809.jpg'),
        img('175jjcq0s03pjbxnrgbvss1n0fyf_Fushimi%20Inari%20Taisha-1.jpg'),
        img('es3n5socbmg3ntbd9xoql6zm3f6p_Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.png'),
        img('j8xcq76t3o64yxmui5m4kt22wejq_52980159201_640a74d15d_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Bullet train to Kyoto`,
      'Check out, then the bullet train west to Kyoto',
      'Check in at your garden hotel north of the centre',
      'A guided afternoon through the old capital',
      'Free time in the Gion lanes in the evening'
    ],
    accommodation: {
      name: 'The Prince Kyoto Takaragaike, Kyoto',
      description: '1 night · Standard room · 4★ · Four star hotel in gardens north of the city centre',
      images: [
        img('ldwgj9zfcwpeyad2v3bvp6smeu1p_caption.jpg'),
        img('e51ytodopas201mgn0vf73riujel_caption%20(5).jpg'),
        img('27mtc7k7swhbd7pn6upy4y0b79y8_caption%20(4).jpg'),
        img('i465ga0biihseyelu88ikb6ypl6a_caption%20(11).jpg'),
        img('tnukan6bi2inst613isjsp3iw65f_caption%20(1).jpg'),
        img('8i4xsnanrdjjnqolnhicv4xq8p2n_caption%20(3).jpg'),
        img('citj04mvqt96zlzm01zyww6319jn_caption%20(6).jpg'),
        img('dusvtl5g5fr8gklnk6gsv4wylvzq_d4a7443a_z.jpg'),
        img('le8on7a1lbj1uesct968kxx4dj9y_fitness-center.jpg'),
        img('h4y8pdqen7yyr2hvzgg10amcfi4w_banquet-hall-lobby.jpg'),
        img('5wji9dsdg4bolft3d51ct395b714_caption%20(10).jpg'),
        img('hyiv9z1ua8pjyijrtyuv3rf3aj97_caption%20(7).jpg'),
        img('m1o3s7p3fctx1gcoet3k08e9zrfp_caption%20(8).jpg'),
        img('movsnvjlawztqvgu6uc7e62w7ioj_507107f9_z.jpg'),
        img('ngsz1u7kt8znrolzf48mqniccvf9_caption%20(9).jpg')
      ]
    },
    activities: [
      {
        name: 'Kyoto sightseeing tour',
        day: 3,
        optional: false,
        image: img('fco3tdr3mmfauat43qugwv3ib507_shutterstock_2219573809.jpg'),
        description: 'A guided day through the old capital, taking in the golden pavilion, a Zen garden and the torii gate paths above Fushimi.'
      }
    ],
    program: {
      name: 'Kyoto',
      description: 'A night in a garden hotel north of the centre, with a guided day and free time in the Gion lanes.',
      image: img('z9nwo9vxlqyfe67uluci6kh42bf1_sorasak-_UIN-pFfJ7c-unsplash.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Osaka',
    subtitle: 'Osaka to Nara',
    dayLabel: 'Day 4 to 5',
    images: [
      img('i9klbfl00zb48dsdbko8ioz88wzx_shutterstock_513091054.jpg'),
      img('kttil6ut49ym2i5xxgnx6cu72osn_shutterstock_630286787.jpg'),
      img('ptkkqebz4mj100bzruqlj5xbdczr_shutterstock_2268784351.jpg'),
      img('gtk8i9anl0fl06gh6jr9ac6b4g33_shutterstock_1789061315.jpg')
    ],
    dayImages: {
      4: [
        img('krqz1hxclgjsioevb8g5d4rtdxfv_shutterstock_2373538643.jpg'),
        img('ev6kgub8bro7k0sc04vjroyjtbat_35991202666_40d2cf9669_h.jpg'),
        img('567g2huih098gbwk5sfi99kn57rj_1280px-Horyu-ji_National_Treasure_World_heritage_%E5%9B%BD%E5%AE%9D%E3%83%BB%E4%B8%96%E7%95%8C%E9%81%BA%E7%94%A3%E6%B3%95%E9%9A%86%E5%AF%BA85.jpg'),
        img('nozs79tjbgfixymgrh3voo9bhf1z_Osaka_Dotonbori_Ebisu_Bridge.jpg')
      ],
      5: [
        img('i9klbfl00zb48dsdbko8ioz88wzx_shutterstock_513091054.jpg'),
        img('kttil6ut49ym2i5xxgnx6cu72osn_shutterstock_630286787.jpg'),
        img('ptkkqebz4mj100bzruqlj5xbdczr_shutterstock_2268784351.jpg'),
        img('gtk8i9anl0fl06gh6jr9ac6b4g33_shutterstock_1789061315.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Nara and on to Osaka`,
      'Check out, then on to Nara',
      'Todai-ji and its great bronze Buddha',
      'The Kasuga shrine and the deer park',
      'Check in on Midosuji in Osaka',
      `${DAY_MARK}Day 5 · Departure from Osaka`,
      'Breakfast at the hotel and check out',
      'Private transfer to Kansai Airport for your flight home'
    ],
    accommodation: {
      name: 'Holiday Inn Express Osaka Midosuji, Osaka',
      description: '1 night · Breakfast · Standard room · 4★ · Straightforward hotel on Midosuji, walking distance to Dotonbori',
      images: [
        img('yrdcfnu29wtss42c71pkhnmwnruj_951832f1_z.webp'),
        img('w15rbexntl15sfaozwcbczpzyqt9_405065615.jpg'),
        img('a5vgc8biiogxw4ph64ehl8lcqmxu_405061174.jpg'),
        img('144e6q0nk4voyeyjo3py6nu2mw2a_holiday-inn-express-osaka.jpg'),
        img('0jkzzrn6zpp3p3xqxkn4ao96cuqo_405061978.jpg'),
        img('4itcdnobdp93r3c6owp0oipux9b1_480374907.jpg'),
        img('o7fa654unngujagw4zaclglkrtkb_405062916.jpg'),
        img('lleooq46o8kv530yzv6ojw5oxs6o_405061389.jpg'),
        img('tpvd3l8ebx0zf38x5eohohjg0m3j_405061937.jpg'),
        img('drrz4hppcgizycv5wokgyefmmh1y_405062106.jpg'),
        img('wvwbkvz1gongpaswc7jd3m0yzgjn_405061202.jpg'),
        img('6l90mx9uq932z1x25qzlyy5367qy_405061227.jpg'),
        img('4luc1o1dvqwfnjo88d4hszbxecd3_405063374.jpg'),
        img('kg8zpd5vau3ou8wnorh3cdkr8g1z_405062916.jpg')
      ]
    },
    activities: [
      {
        name: 'Nara sightseeing tour',
        day: 4,
        optional: false,
        image: img('krqz1hxclgjsioevb8g5d4rtdxfv_shutterstock_2373538643.jpg'),
        description: 'Todai-ji with its great bronze Buddha, the lantern lined Kasuga shrine and the deer park on the walk between them.'
      }
    ],
    program: {
      name: 'Osaka',
      description: 'A last night on Midosuji, reached through Nara\'s temples and deer park, with Dotonbori on your doorstep.',
      image: img('i9klbfl00zb48dsdbko8ioz88wzx_shutterstock_513091054.jpg')
    }
  }
];

const detail = {
  slug: 'glimpse-of-japan-short-group-tour',
  ctaHref: '/l/japan/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Glimpse of Japan Short Group Tour',
  alt: 'Neon lanes of Shinjuku after dark, Tokyo',
  days: '5 days / 4 nights',
  stations: '3 stops',
  transport: 'Bullet train, coaches and guided touring throughout',
  tag: 'Short trips',
  tags: ['Culture', 'Short trips'],
  price: 144709,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Tokyo', 'Kyoto', 'Nara', 'Osaka'],
  stats: { days: 5, cities: 3, hotels: 3, activities: 5, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['2 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aiko',
    image: '/experts/riya.webp',
    role: 'Japan expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Five days, three cities and four star hotels. If you only have a week of leave, this is the Japan trip that fits.',
    quoteMore: 'The guided Shinjuku walk on the first evening is the trick that beats the jet lag. Eat late, sleep well, start fresh.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five days through three cities on a small group tour: two nights beside Shinagawa with a guided Shinjuku evening and a full Tokyo day, a night in a Kyoto garden hotel with its temples, then Nara and a last night in central Osaka.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights in four star hotels; bullet train from Tokyo to Kyoto and coaches throughout; private airport transfers; guided Shinjuku district tour; Tokyo sightseeing tour; Kyoto sightseeing tour; Nara sightseeing tour; breakfast on the last two mornings.',
  intro2: 'Not included: international flights; Japan visa fees; most meals; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and Shinjuku (Arrival)', text: 'Arrival at Narita or Haneda and transfer to your hotel\nCheck in beside Shinagawa station\nA guided walk through the Shinjuku lanes\nKabukicho, Omoide Yokocho and the neon streets', hotel: 'Shinagawa Prince Hotel', highlights: ['Arrival at Narita or Haneda and transfer to your hotel', 'Check in beside Shinagawa station', 'A guided walk through the Shinjuku lanes'] },
    { title: 'Day 2: Tokyo sightseeing (-)', text: 'A guided day through the city\nMeiji shrine and the Imperial Palace gardens\nAsakusa and the Senso-ji temple lanes\nEvening free in Tokyo', hotel: 'Shinagawa Prince Hotel', highlights: ['A guided day through the city', 'Meiji shrine and the Imperial Palace gardens', 'Asakusa and the Senso-ji temple lanes'] },
    { title: 'Day 3: Bullet train to Kyoto (-)', text: 'Check out, then the bullet train west to Kyoto\nCheck in at your garden hotel north of the centre\nA guided afternoon through the old capital\nFree time in the Gion lanes in the evening', hotel: 'The Prince Kyoto Takaragaike', highlights: ['Check out, then the bullet train west to Kyoto', 'Check in at your garden hotel north of the centre', 'A guided afternoon through the old capital'] },
    { title: 'Day 4: Nara and on to Osaka (B)', text: 'Check out, then on to Nara\nTodai-ji and its great bronze Buddha\nThe Kasuga shrine and the deer park\nCheck in on Midosuji in Osaka', hotel: 'Holiday Inn Express Osaka Midosuji', highlights: ['Check out, then on to Nara', 'Todai-ji and its great bronze Buddha', 'The Kasuga shrine and the deer park'] },
    { title: 'Day 5: Departure from Osaka (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Kansai Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Kansai Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Japan visa fees; most meals; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Japan', href: '/asia/japan' },
  { label: detail.title }
];

export const glimpseOfJapanShortGroupBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const glimpseOfJapanShortGroupProduct = {
  slug: detail.slug,
  places: ['Tokyo', 'Kyoto', 'Nara', 'Osaka'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 3,
  hotels: 3,
  cities: 3,
  activities: 5,
  transfers: 10,
  meals: 2,
  price: detail.price,
  images: cardImages
};
