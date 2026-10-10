// Vietnam with the Ban Gioc Waterfalls. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
  img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg'),
  img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
  img('sqn1p4wbl78pmhhmlova4cskwe12_shutterstock_2028476312.jpg'),
  img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
  img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
  img('dsxekypeedr6l4ri8eijlkm31h7f_shutterstock_196927403.jpg'),
  img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
  img('17rmf3cfspju1ij305vx2ssvi57d_shutterstock_2009609453.jpg'),
  img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg'),
  img('sqn1p4wbl78pmhhmlova4cskwe12_shutterstock_2028476312.jpg'),
  img('17rmf3cfspju1ij305vx2ssvi57d_shutterstock_2009609453.jpg'),
  img('av0ke70wn5ixdx9vgsb5w6xtmwoq_shutterstock_757422919.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    subtitle: 'Hanoi and Ninh Binh',
    dayLabel: 'Day 1 to 2',
    images: [
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg')
    ],
    dayImages: {
      1: [
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('zv1gcf0zxn8h92yt1vcjn8cn04c0_1613631767_shutterstock_449720002.jpg'),
        img('l5niq4dr961ec6w2r5tzriikz2in_1613632679_shutterstock_1164526912.jpg'),
        img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
      ],
      2: [
        img('1b7t5qk08ptmrwnhze4z7t77pflc_shutterstock_2309649499.jpg'),
        img('yx7xjkegdm9ruyh3rv7d2qtwgjyg_8224556638_2c76bfbba5_o.jpg'),
        img('m9yizaucm34mdy6jeo07klf59c3r_51986787203_3b201c83cb_b.jpg'),
        img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Hanoi`,
      'Arrival at Noi Bai airport and transfer to your hotel',
      'Check in at your hotel in the old quarter',
      'Rest of the day free at your own pace',
      'Optional: an evening walk around Hoan Kiem lake',
      `${DAY_MARK}Day 2 · Ninh Binh day trip`,
      'Breakfast, then south towards Ninh Binh',
      'A rowing boat through the flooded caves at Tam Coc',
      'The limestone country and the rice fields',
      'Back in Hanoi in the evening'
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
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Two nights in the old quarter, with a full day south to the rowing boats and rice fields of Ninh Binh.',
      image: img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Halong Bay',
    dayLabel: 'Day 3',
    images: [
      img('chc0brh1ox3ps4j2gkd3o7sltiku_shutterstock_298757792.jpg'),
      img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg'),
      img('2kuteileb36cgbgpxwj5kw24c0gb_shutterstock_78665809.jpg'),
      img('anokjwn2ztodzjiuh41v7xtsi4nb_shutterstock_257155450.jpg')
    ],
    dayImages: {
      3: [
        img('e5y181gizy8jvyzc59gyilg4jawa_shutterstock_1425907181.jpg'),
        img('3yvzew883i398qg1nytjaz1ju0q8_48479739932_e3fe5de4a5_o.jpg'),
        img('chc0brh1ox3ps4j2gkd3o7sltiku_shutterstock_298757792.jpg'),
        img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg')
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
      name: 'Halong Bay overnight cruise, Halong Bay',
      description: '1 night · All meals · Cabin · 3★ · Cruise boat moored among the limestone islands overnight',
      images: [
        img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg'),
        img('ess8tbxn8tc68q49uptyn8nsx4he_shutterstock_1218764578.jpg'),
        img('4htmt1ezsgvun0n6isr7x482cgy6_shutterstock_211441507.jpg'),
        img('dsxekypeedr6l4ri8eijlkm31h7f_shutterstock_196927403.jpg'),
        img('g2t7tyua6nh3y7nqbspuhclty44n_shutterstock_1013044084.jpg'),
        img('qch82amlaa4dl5fnaps90oymonh1_shutterstock_89665372.jpg'),
        img('chc0brh1ox3ps4j2gkd3o7sltiku_shutterstock_298757792.jpg'),
        img('2uqsz1txy9wv42uizuiyo1tr2y2l_shutterstock_1094428127.jpg'),
        img('2kuteileb36cgbgpxwj5kw24c0gb_shutterstock_78665809.jpg'),
        img('anokjwn2ztodzjiuh41v7xtsi4nb_shutterstock_257155450.jpg')
      ]
    },
    activities: [
      {
        name: 'Halong Bay overnight cruise',
        day: 3,
        optional: false,
        image: img('e5y181gizy8jvyzc59gyilg4jawa_shutterstock_1425907181.jpg'),
        description: 'A shared cruise out among the limestone islands, with lunch and dinner on board and a night moored in a quiet bay.'
      }
    ],
    program: {
      name: 'Halong Bay',
      description: 'A night on the water among the limestone islands, with all meals served on board.',
      image: img('chc0brh1ox3ps4j2gkd3o7sltiku_shutterstock_298757792.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Hanoi',
    subtitle: 'Back in Hanoi',
    dayLabel: 'Day 4',
    images: [
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg')
    ],
    dayImages: {
      4: [
        img('w12e64veaq0wv5ih134ampklbccr_shutterstock_1604743951.jpg'),
        img('e7747wfxl9x32ioao96vp1zudykf_44844044645_6347bf750e_o.jpg'),
        img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
        img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Back to Hanoi`,
      'Breakfast on board as the boat moves',
      'Back to the pier in the late morning',
      'On to Hanoi and check in',
      'Rest of the day free in the lanes'
    ],
    accommodation: {
      name: 'The Light Hotel Hanoi, Hanoi',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel on the edge of the old quarter',
      images: [
        img('4i23e8l3fbfe6bplhd3dbe8gruv0_img9.jpg'),
        img('vw400lu91kn7uf0ffcgnd83n30nc_img19.jpg'),
        img('bxmk6k1gpigqt4szctisjoq7ybms_img3.jpg'),
        img('atusamfpsj7hcmhuf9vi6927y66n_img6.jpg'),
        img('9jp8pwr6mzz4thwbp43ojkeouglh_img33.jpg'),
        img('wvbtfq70gq0vwcya6r5g28wbni4v_img13.jpg'),
        img('fa4drfe3vb7fvjjivcvgcnrxdubb_img36.jpg'),
        img('bd9rcphrasn5os3szxonx4pokwc9_img15.jpg'),
        img('diskcqva20dn01zs9tidzfxopat0_img39.jpg')
      ]
    },
    activities: [

    ],
    program: {
      name: 'Hanoi',
      description: 'Off the water and back to the city for a quiet night before the mountains.',
      image: img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg')
    }
  },
  {
    letter: 'D',
    name: 'Cao Bang',
    subtitle: 'Cao Bang and Ban Gioc',
    dayLabel: 'Day 5 to 6',
    images: [
      img('av0ke70wn5ixdx9vgsb5w6xtmwoq_shutterstock_757422919.jpg'),
      img('17rmf3cfspju1ij305vx2ssvi57d_shutterstock_2009609453.jpg'),
      img('135puhg3lhzx8dssewjwcpc9m5aa_shutterstock_771233404.jpg'),
      img('sqn1p4wbl78pmhhmlova4cskwe12_shutterstock_2028476312.jpg')
    ],
    dayImages: {
      5: [
        img('f8m9snvm6rul6ct4kg5pfsfsos5c_Angels_Eye_Mountain_and_Suroundings.jpg'),
        img('av0ke70wn5ixdx9vgsb5w6xtmwoq_shutterstock_757422919.jpg'),
        img('17rmf3cfspju1ij305vx2ssvi57d_shutterstock_2009609453.jpg'),
        img('135puhg3lhzx8dssewjwcpc9m5aa_shutterstock_771233404.jpg')
      ],
      6: [
        img('qayk3pwxauc7u8ifp1pvz28o3mql_shutterstock_733724497.jpg'),
        img('1rx70gstbvv5thyd5ld2nwoirdkj_Nguom-Ngao-Cave.png'),
        img('65pmump9ubekabhxasouh2lr50sg_37943736565_5846e673e2_k.png'),
        img('av0ke70wn5ixdx9vgsb5w6xtmwoq_shutterstock_757422919.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · North to Cao Bang`,
      'Breakfast and check out, then north east into the hills',
      'The long climb up to Cao Bang',
      'Check in and the rest of the day free',
      'Optional: an evening walk by the river',
      `${DAY_MARK}Day 6 · Ban Gioc waterfall`,
      'Breakfast, then out to the border river',
      'Ban Gioc, the widest waterfall in the country',
      'A bamboo raft out towards the curtain',
      'Back in Cao Bang in the evening'
    ],
    accommodation: {
      name: 'Khach san So Oanh, Cao Bang',
      description: '2 nights · Breakfast · Standard room · 3★ · Simple hotel in Cao Bang town, near the river',
      images: [
        img('naoltzrcdd2x8mnp2vr9puwy7d5d_377915842.jpg'),
        img('trm5ziikahk0wfzndgff8jy5cy6p_377915811.jpg'),
        img('4w6ldr1jlq0wrxhsij6ezi0sjtvv_465170491.jpg'),
        img('u0m8wyufp85gmh50p6adam70k30z_531401969.jpg'),
        img('293z4riyis4eem93b5b8iib6cy7n_377915798.jpg'),
        img('4mf8xu1zchmjfoopseoce3q4ifnr_377915793.jpg'),
        img('isu6fh6bdlkn0u68o6tc1ad9q4z3_471299699.jpg'),
        img('wh5kdf142snqumg7lj9dmwfn6j9g_2830351c.jpeg'),
        img('pevmhtxj6cz234scteba7692jf2r_377915856.jpg'),
        img('ptk6lyx1adbqsyvcje6gftthabvc_377915841.jpg')
      ]
    },
    activities: [
      {
        name: 'Ban Gioc waterfall day trip',
        day: 6,
        optional: false,
        image: img('qayk3pwxauc7u8ifp1pvz28o3mql_shutterstock_733724497.jpg'),
        description: 'The widest waterfall in the country, dropping in tiers across the river that marks the Chinese border, with a bamboo raft out to the curtain.'
      }
    ],
    program: {
      name: 'Cao Bang',
      description: 'Two nights in the far north east, with a full day out to the tiered curtain of Ban Gioc on the border river.',
      image: img('av0ke70wn5ixdx9vgsb5w6xtmwoq_shutterstock_757422919.jpg')
    }
  },
  {
    letter: 'E',
    name: 'Hanoi',
    subtitle: 'Last night in Hanoi',
    dayLabel: 'Day 7 to 8',
    images: [
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg')
    ],
    dayImages: {
      7: [
        img('kqd5m6rp6dmyc273ucrauw1z79kk_shutterstock_360194189.jpg'),
        img('mu5mnkzsv5lovcsz048kruzyqwg8_shutterstock_415739884.jpg'),
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('k38ka7hlnexq4ecrcowao15mp677_1467707399_7180069220_83b8ed56b1_o.jpg')
      ],
      8: [
        img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
        img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
        img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
        img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 7 · Hanoi city tour`,
      'Breakfast and check out, then the run back to Hanoi',
      'A guided half day of the city',
      'The mausoleum, the one pillar pagoda and the Temple of Literature',
      'Check in and the evening free',
      `${DAY_MARK}Day 8 · Departure from Hanoi`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'The Light Hotel Hanoi, Hanoi',
      description: '1 night · Breakfast · Standard room · 4★ · Four star hotel on the edge of the old quarter',
      images: [
        img('4i23e8l3fbfe6bplhd3dbe8gruv0_img9.jpg'),
        img('vw400lu91kn7uf0ffcgnd83n30nc_img19.jpg'),
        img('bxmk6k1gpigqt4szctisjoq7ybms_img3.jpg'),
        img('atusamfpsj7hcmhuf9vi6927y66n_img6.jpg'),
        img('9jp8pwr6mzz4thwbp43ojkeouglh_img33.jpg'),
        img('wvbtfq70gq0vwcya6r5g28wbni4v_img13.jpg'),
        img('fa4drfe3vb7fvjjivcvgcnrxdubb_img36.jpg'),
        img('bd9rcphrasn5os3szxonx4pokwc9_img15.jpg'),
        img('diskcqva20dn01zs9tidzfxopat0_img39.jpg')
      ]
    },
    activities: [
      {
        name: 'Hanoi half day city tour',
        day: 7,
        optional: false,
        image: img('kqd5m6rp6dmyc273ucrauw1z79kk_shutterstock_360194189.jpg'),
        description: 'The Ho Chi Minh mausoleum and the one pillar pagoda, the Temple of Literature and the lanes of the old quarter with a guide.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Back from the mountains for a guided half day of the capital and a last night in the lanes.',
      image: img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
    }
  }
];

const detail = {
  slug: 'vietnam-with-the-ban-gioc-waterfalls',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Vietnam with the Ban Gioc Waterfalls',
  alt: 'Ban Gioc waterfall on the border river in Cao Bang',
  days: '8 days / 7 nights',
  stations: '5 stops',
  transport: 'Private transfers, an overnight cruise and guided day tours',
  tag: 'Offbeat',
  tags: ['Nature', 'Offbeat'],
  price: 46236,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Cao Bang', 'Ban Gioc'],
  stats: { days: 8, cities: 4, hotels: 4, activities: 4, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['12 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Almost nobody goes to Cao Bang, and Ban Gioc is the best waterfall in the country. That is the whole point of this one.',
    quoteMore: 'The road to Cao Bang is slow and winding. Sit in the front if you are prone to car sickness, and go between September and November when the river is full.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Eight days with a run into the far north east: two nights in Hanoi with a Ninh Binh day, an overnight cruise in Halong Bay, then two nights at Cao Bang for the tiered curtain of Ban Gioc on the Chinese border river, and a guided half day of the capital before the flight home.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 7 nights with daily breakfast, dinner at the first hotel and all meals on the cruise boat; private transfers throughout; a Ninh Binh day tour; a shared overnight cruise in Halong Bay; the Ban Gioc waterfall day trip; a guided half day tour of Hanoi.',
  intro2: 'Not included: international flights; Vietnam visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in at your hotel in the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in at your hotel in the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: Ninh Binh day trip (B, D)', text: 'Breakfast, then south towards Ninh Binh\nA rowing boat through the flooded caves at Tam Coc\nThe limestone country and the rice fields\nBack in Hanoi in the evening', hotel: 'Hm Boutique Hotel Hanoi', highlights: ['Breakfast, then south towards Ninh Binh', 'A rowing boat through the flooded caves at Tam Coc', 'The limestone country and the rice fields'] },
    { title: 'Day 3: Overnight on the bay (B, L, D)', text: 'Breakfast and check out, then east towards the coast\nBoard your cruise boat in the early afternoon\nLunch and dinner on board\nA night moored among the limestone islands', hotel: 'Halong Bay overnight cruise', highlights: ['Breakfast and check out, then east towards the coast', 'Board your cruise boat in the early afternoon', 'Lunch and dinner on board'] },
    { title: 'Day 4: Back to Hanoi (B)', text: 'Breakfast on board as the boat moves\nBack to the pier in the late morning\nOn to Hanoi and check in\nRest of the day free in the lanes', hotel: 'The Light Hotel Hanoi', highlights: ['Breakfast on board as the boat moves', 'Back to the pier in the late morning', 'On to Hanoi and check in'] },
    { title: 'Day 5: North to Cao Bang (B)', text: 'Breakfast and check out, then north east into the hills\nThe long climb up to Cao Bang\nCheck in and the rest of the day free\nOptional: an evening walk by the river', hotel: 'Khach san So Oanh', highlights: ['Breakfast and check out, then north east into the hills', 'The long climb up to Cao Bang', 'Check in and the rest of the day free'] },
    { title: 'Day 6: Ban Gioc waterfall (B)', text: 'Breakfast, then out to the border river\nBan Gioc, the widest waterfall in the country\nA bamboo raft out towards the curtain\nBack in Cao Bang in the evening', hotel: 'Khach san So Oanh', highlights: ['Breakfast, then out to the border river', 'Ban Gioc, the widest waterfall in the country', 'A bamboo raft out towards the curtain'] },
    { title: 'Day 7: Hanoi city tour (B)', text: 'Breakfast and check out, then the run back to Hanoi\nA guided half day of the city\nThe mausoleum, the one pillar pagoda and the Temple of Literature\nCheck in and the evening free', hotel: 'The Light Hotel Hanoi', highlights: ['Breakfast and check out, then the run back to Hanoi', 'A guided half day of the city', 'The mausoleum, the one pillar pagoda and the Temple of Literature'] },
    { title: 'Day 8: Departure from Hanoi (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asia' },
  { label: 'Vietnam', href: '/asia/vietnam' },
  { label: detail.title }
];

export const vietnamBanGiocWaterfallsBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const vietnamBanGiocWaterfallsProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Ninh Binh', 'Halong Bay', 'Cao Bang', 'Ban Gioc'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 8,
  stops: 5,
  hotels: 4,
  cities: 4,
  activities: 4,
  transfers: 10,
  meals: 12,
  price: detail.price,
  images: cardImages
};
