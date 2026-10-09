// Delights of Vietnam with a Bay Cruise. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
  img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg'),
  img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg'),
  img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
  img('g2t7tyua6nh3y7nqbspuhclty44n_shutterstock_1013044084.jpg'),
  img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
  img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
  img('2kuteileb36cgbgpxwj5kw24c0gb_shutterstock_78665809.jpg'),
  img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg'),
  img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg'),
  img('0qowan0irgb82kahu23i0w2h1yh6_awdm4j1u5pqgn2c8ldvo1n2iskrk_shutterstock_1013044084.webp'),
  img('3yvzew883i398qg1nytjaz1ju0q8_48479739932_e3fe5de4a5_o.jpg'),
  img('h6enaharn97hs10434l315ajz1wr_ydunnatkc96pnjco6dlcwix3pcy6_shutterstock_1094428127.webp')
];

const stops = [
  {
    letter: 'A',
    name: 'Hanoi',
    dayLabel: 'Day 1',
    images: [
      img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
      img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
      img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
      img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
    ],
    dayImages: {
      1: [
        img('6j3k1usoxtt97s1w8ukhzz7dex9d_1613636788_shutterstock_590106620.jpg'),
        img('hw2qh1ogo8ea79v94qork3oe93e2_1467715654_311336200_3680af30d5_o.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
        img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Hanoi`,
      'Arrival at Noi Bai airport and transfer to your hotel',
      'Check in on the edge of the old quarter',
      'Rest of the day free at your own pace',
      'Optional: an evening walk around Hoan Kiem lake'
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
      description: 'A first night in Hanoi with the evening free around Hoan Kiem lake.',
      image: img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Halong Bay',
    dayLabel: 'Day 2 to 3',
    images: [
      img('anokjwn2ztodzjiuh41v7xtsi4nb_shutterstock_257155450.jpg'),
      img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg'),
      img('ess8tbxn8tc68q49uptyn8nsx4he_shutterstock_1218764578.jpg'),
      img('4htmt1ezsgvun0n6isr7x482cgy6_shutterstock_211441507.jpg')
    ],
    dayImages: {
      2: [
        img('0qowan0irgb82kahu23i0w2h1yh6_awdm4j1u5pqgn2c8ldvo1n2iskrk_shutterstock_1013044084.webp'),
        img('3yvzew883i398qg1nytjaz1ju0q8_48479739932_e3fe5de4a5_o.jpg'),
        img('anokjwn2ztodzjiuh41v7xtsi4nb_shutterstock_257155450.jpg'),
        img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg')
      ],
      3: [
        img('h6enaharn97hs10434l315ajz1wr_ydunnatkc96pnjco6dlcwix3pcy6_shutterstock_1094428127.webp'),
        img('e7747wfxl9x32ioao96vp1zudykf_44844044645_6347bf750e_o.jpg'),
        img('anokjwn2ztodzjiuh41v7xtsi4nb_shutterstock_257155450.jpg'),
        img('mc79kfg70ywv23v1ywvuiiaxcqm3_shutterstock_1872545233.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · On to Halong Bay`,
      'Breakfast and check out, then east to the coast',
      'Board your cruise boat in the early afternoon',
      'Lunch and dinner on board',
      'A night moored among the limestone islands',
      `${DAY_MARK}Day 3 · Surprise Cave and back to Hanoi`,
      'Breakfast on board as the boat moves',
      'The climb into the Surprise Cave',
      'Back to the pier, then on to Hanoi',
      'Check in and the evening free'
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
        day: 2,
        optional: false,
        image: img('0qowan0irgb82kahu23i0w2h1yh6_awdm4j1u5pqgn2c8ldvo1n2iskrk_shutterstock_1013044084.webp'),
        description: 'A shared cruise out among the limestone islands, with lunch and dinner on board and a night moored in a quiet bay.'
      },
      {
        name: 'Surprise Cave on Bo Hon island',
        day: 3,
        optional: false,
        image: img('h6enaharn97hs10434l315ajz1wr_ydunnatkc96pnjco6dlcwix3pcy6_shutterstock_1094428127.webp'),
        description: 'A morning climb into the Surprise Cave, three great chambers of stalactites above the water, before the boat turns back.'
      }
    ],
    program: {
      name: 'Halong Bay',
      description: 'A night on the water among the karsts, with all meals on board and the Surprise Cave in the morning.',
      image: img('anokjwn2ztodzjiuh41v7xtsi4nb_shutterstock_257155450.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Hanoi',
    subtitle: 'Back in Hanoi for Ninh Binh',
    dayLabel: 'Day 4 to 5',
    images: [
      img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg'),
      img('5loayft3c69tq55myxhb9cxewc7t_shutterstock_2315759269.jpg'),
      img('9zvul3pj34v2fucxjlqkznjzr6x6_shutterstock_168342398.jpg'),
      img('hnh0u8zocmuj0ali35hxmsz82w1l_shutterstock_2199842613.jpg')
    ],
    dayImages: {
      4: [
        img('arkridntl7mjjss8972eavq2sdqg_shutterstock_1274293249.jpg'),
        img('yx7xjkegdm9ruyh3rv7d2qtwgjyg_8224556638_2c76bfbba5_o.jpg'),
        img('m9yizaucm34mdy6jeo07klf59c3r_51986787203_3b201c83cb_b.jpg'),
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg')
      ],
      5: [
        img('5f1ixe9xtnwg6tsjvc7iiiqttahh_shutterstock_243530122.jpg'),
        img('xnkn8erel6d8xy12o9r0pn9ori2r_shutterstock_749778241%20(2).jpg'),
        img('ptfd93liaw1w2zj82gtss15jpf29_shutterstock_1045315189.jpg'),
        img('87lil95xw2xuaf2ynk4ehrw0688a_shutterstock_2309072245.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Ninh Binh day tour`,
      'Breakfast, then south to Ninh Binh',
      'A rowing boat through the caves at Tam Coc',
      'The Bai Dinh pagoda complex',
      'Lunch included, then back to Hanoi',
      `${DAY_MARK}Day 5 · Departure from Hanoi`,
      'Breakfast at the hotel and check out',
      'Private transfer to the airport for your flight home'
    ],
    accommodation: {
      name: 'The Light Hotel Hanoi, Hanoi',
      description: '2 nights · Breakfast · Standard room · 4★ · Four star hotel on the edge of the old quarter',
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
        name: 'Ninh Binh day tour with lunch',
        day: 4,
        optional: false,
        image: img('arkridntl7mjjss8972eavq2sdqg_shutterstock_1274293249.jpg'),
        description: 'South to Ninh Binh for a rowing boat through the caves at Tam Coc or Trang An, the Bai Dinh pagoda and lunch on the way.'
      }
    ],
    program: {
      name: 'Hanoi',
      description: 'Two more nights in the city with a full day out to the rivers and caves of Ninh Binh.',
      image: img('3eeu4j87umortmf4dzwk1ple54k9_shutterstock_2378316791.jpg')
    }
  }
];

const detail = {
  slug: 'delights-of-vietnam-with-a-bay-cruise',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Delights of Vietnam with a Bay Cruise',
  alt: 'Limestone karsts rising from the water in Halong Bay',
  days: '5 days / 4 nights',
  stations: '3 stops',
  transport: 'Private transfers, an overnight cruise and guided tours',
  tag: 'Short break',
  tags: ['Short break', 'Nature'],
  price: 37040,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Hanoi', 'Halong Bay', 'Ninh Binh'],
  stats: { days: 5, cities: 2, hotels: 2, activities: 3, transfers: 6 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['6 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Riya',
    image: '/experts/riya.webp',
    role: 'Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Five days, and a night on the water in the middle of it. That is the shortest trip I would call a proper taste of the north.',
    quoteMore: 'Ask for an upper deck cabin on the cruise. The bay is at its quietest just after sunrise and you will want to be outside for it.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five days in the north: a night in Hanoi, an overnight cruise among the limestone islands of Halong Bay with all meals on board and the Surprise Cave, then two nights back in the city with a full day out to the rivers and pagodas of Ninh Binh.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights with daily breakfast, one of them on a cruise boat with lunch and dinner; private transfers throughout; a shared overnight cruise in Halong Bay; the Surprise Cave; a Ninh Binh day tour with lunch.',
  intro2: 'Not included: international flights; Vietnam visa fees; other lunches and dinners; travel insurance; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Hanoi (Arrival)', text: 'Arrival at Noi Bai airport and transfer to your hotel\nCheck in on the edge of the old quarter\nRest of the day free at your own pace\nOptional: an evening walk around Hoan Kiem lake', hotel: 'The Light Hotel Hanoi', highlights: ['Arrival at Noi Bai airport and transfer to your hotel', 'Check in on the edge of the old quarter', 'Rest of the day free at your own pace'] },
    { title: 'Day 2: On to Halong Bay (B, L, D)', text: 'Breakfast and check out, then east to the coast\nBoard your cruise boat in the early afternoon\nLunch and dinner on board\nA night moored among the limestone islands', hotel: 'Halong Royal Palace Cruise', highlights: ['Breakfast and check out, then east to the coast', 'Board your cruise boat in the early afternoon', 'Lunch and dinner on board'] },
    { title: 'Day 3: Surprise Cave and back to Hanoi (B)', text: 'Breakfast on board as the boat moves\nThe climb into the Surprise Cave\nBack to the pier, then on to Hanoi\nCheck in and the evening free', hotel: 'The Light Hotel Hanoi', highlights: ['Breakfast on board as the boat moves', 'The climb into the Surprise Cave', 'Back to the pier, then on to Hanoi'] },
    { title: 'Day 4: Ninh Binh day tour (B, L)', text: 'Breakfast, then south to Ninh Binh\nA rowing boat through the caves at Tam Coc\nThe Bai Dinh pagoda complex\nLunch included, then back to Hanoi', hotel: 'The Light Hotel Hanoi', highlights: ['Breakfast, then south to Ninh Binh', 'A rowing boat through the caves at Tam Coc', 'The Bai Dinh pagoda complex'] },
    { title: 'Day 5: Departure from Hanoi (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to the airport for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to the airport for your flight home'] }
  ],
  outro: 'Not included: international flights; Vietnam visa fees; other lunches and dinners; travel insurance; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Vietnam', href: '/asien/vietnam' },
  { label: detail.title }
];

export const delightsOfVietnamCruiseBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const delightsOfVietnamCruiseProduct = {
  slug: detail.slug,
  places: ['Hanoi', 'Halong Bay', 'Ninh Binh'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 3,
  hotels: 2,
  cities: 2,
  activities: 3,
  transfers: 6,
  meals: 8,
  price: detail.price,
  images: cardImages
};
