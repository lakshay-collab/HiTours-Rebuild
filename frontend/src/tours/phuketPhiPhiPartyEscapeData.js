// Phuket and Phi Phi Party Escape. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg'),
  img('m3w0axf3yzixsn6c46jo1cx68z5t_32854922210_c96e26b61e_o.jpg'),
  img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg'),
  img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg'),
  img('xqktwf8gkgzgcts4b0er66bcsn11_15731559592_0d480a130b_o.jpg'),
  img('nl697ledztoenvi45t7u86mnkm6v_shutterstock_2337247967%20(1)%20(1).jpg'),
  img('wgw28loe37wumwa59avtvzp7gcn4_shutterstock_2253884321.jpg'),
  img('f0ia1hlmln72ux4ayo06koxu4hns_28612531311_f528aeb182_o.jpg'),
  img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg'),
  img('q0rofzuv74wu1axaon9rmkcob0jh_shutterstock_448476727.jpg')
];
const cardImages = heroGallery.slice(0, 4);

const stops = [
  {
    letter: 'A',
    name: 'Phuket',
    dayLabel: 'Day 1 to 2',
    images: [
      img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg'),
      img('uhyclhw5d3ngfvigxaavcrl0getu_shutterstock_1111881161%20(1).jpg'),
      img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg'),
      img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg')
    ],
    dayImages: {
      1: [
        img('ftwgy6uk2iqzd1ba24bvoy3m7pbt_odpzj296tga0foh1wgbhml27jbob_shutterstock_2331758089.webp'),
        img('qsvbg8xqjyo5kwvemsenqgipdtic_riwmt3ygoh284tfu7z8usi8s0e8w_tk3.jpg'),
        img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg'),
        img('uhyclhw5d3ngfvigxaavcrl0getu_shutterstock_1111881161%20(1).jpg')
      ],
      2: [
        img('0lfetx6kytrpzncd3j0nf4p02u3q_yona-club-phuket-3.jpg'),
        img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg'),
        img('uhyclhw5d3ngfvigxaavcrl0getu_shutterstock_1111881161%20(1).jpg'),
        img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Phuket and Tiger Kingdom`,
      'Arrival at Phuket International Airport and private sedan transfer to Chalong',
      'Check in, then a private transfer out to Tiger Kingdom',
      'Big tiger ticket with keepers alongside you in the enclosure',
      'Evening free, with Rawai and Nai Harn beaches a short ride away',
      `${DAY_MARK}Day 2 · Yona floating beach club`,
      'Breakfast at the resort, then private transfer to the Chalong pier',
      'Boat out to Yona, a floating club moored in open water off Phuket',
      'Pool deck, sun beds and music all afternoon, drinks payable on board',
      'Back to shore by evening with the rest of the night free'
    ],
    accommodation: {
      name: 'Chalong Chalet Resort & Longstay, Phuket',
      description: '2 nights · Breakfast included · Super Deluxe room · 4★ · Quiet Chalong base close to Rawai and Nai Harn beaches',
      images: [
        img('qx4k1rw9bo16g6dgn6xbj19y3nwx_29335164.jpg'),
        img('gvayadxqtm1jb4x94ha7xlm3hsoj_29353982.jpg'),
        img('37s5kys67tauethx0s14b6lvsefd_29335160.jpg'),
        img('999jha3iik6vcpsre0pfn2iwes7t_29335863.jpg'),
        img('h4j0gc8gqqkukdlgi9spqp3t55ns_83560908.jpg'),
        img('ch4fhw13zi2s4wn5jy6xtwdq2z5e_29353955.jpg'),
        img('mw2p5pw4gm5w6rqz2ka09v6inuc3_29335176.jpg'),
        img('cwqjtrufvj84bpt9k733j0agowlr_83560709.jpg'),
        img('me2do4ezmq2w7sx1xjos96kb6kdv_29335447.jpg')
      ]
    },
    activities: [
      {
        name: 'Tiger Kingdom Phuket',
        day: 1,
        optional: false,
        image: img('ftwgy6uk2iqzd1ba24bvoy3m7pbt_odpzj296tga0foh1wgbhml27jbob_shutterstock_2331758089.webp'),
        description: 'Time inside the enclosure with the big tigers, keepers beside you throughout, with a private transfer each way.'
      },
      {
        name: 'Yona Floating Beach Club',
        day: 2,
        optional: false,
        image: img('0lfetx6kytrpzncd3j0nf4p02u3q_yona-club-phuket-3.jpg'),
        description: 'A club moored in open water off Phuket with a pool deck, sun beds and music through the afternoon.'
      }
    ],
    program: {
      name: 'Tigers and a floating club',
      description: 'Two nights on the quiet south of Phuket with a close up tiger visit and an afternoon at the Yona club moored offshore.',
      image: img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Phi Phi Islands',
    dayLabel: 'Day 3 to 4',
    images: [
      img('xqktwf8gkgzgcts4b0er66bcsn11_15731559592_0d480a130b_o.jpg'),
      img('m3w0axf3yzixsn6c46jo1cx68z5t_32854922210_c96e26b61e_o.jpg'),
      img('ko7arxi4f9qk3zldxxrru5zk5g9u_46308286321_bd96060c29_o.jpg'),
      img('f0ia1hlmln72ux4ayo06koxu4hns_28612531311_f528aeb182_o.jpg')
    ],
    dayImages: {
      3: [
        img('utjf0r0yzh068bcj4im2423l62kv_87-61e10dc60121410.jpg'),
        img('lil7z4yhvlayudgcs6yrhd8d0szz_1-The-best-Phi-Phi-beaches-and-trails-thailand-while-you-stay-home.jpg'),
        img('mkt6db3hiztjir5oj7sx9i7hfy6l_ibiza-pool-party.jpg'),
        img('xqktwf8gkgzgcts4b0er66bcsn11_15731559592_0d480a130b_o.jpg')
      ],
      4: [
        img('op7s2csw5gvc5rzn3gg06yb0uuwa_Downpic.cc-image181277303.jpg'),
        img('1b4sao1hyn7r4ze8qhxenux6x2p1_download.jpg'),
        img('xqktwf8gkgzgcts4b0er66bcsn11_15731559592_0d480a130b_o.jpg'),
        img('m3w0axf3yzixsn6c46jo1cx68z5t_32854922210_c96e26b61e_o.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · On to car free Phi Phi`,
      'Breakfast, check out and private transfer to the Phuket pier',
      'Speedboat transfer across to Phi Phi, where there are no cars at all',
      'Check in and spend the afternoon on the sand near Tonsai bay',
      'Optional: snorkelling off the beach or the island pool party after dark',
      `${DAY_MARK}Day 4 · Pirate boat party`,
      'Breakfast, then board the Phi Phi pirate boat for the day',
      'Swim stops, music on deck and limestone walls rising out of the sea',
      'This party sailing is kept for guests staying on the island',
      'Evening free along the Tonsai strip'
    ],
    accommodation: {
      name: 'Paradise Resort Phi Phi, Phi Phi',
      description: '2 nights · Breakfast included · Deluxe room · 3★ · Walking distance from Tonsai bay on car free Phi Phi',
      images: [
        img('5j037boe2n8ta5dgwq8lbfd131s9_189541095.jpg'),
        img('dvkfp8ofkyl4bpsy7bu3j5g7gttj_189539362.jpg'),
        img('gnt4sp95othdgg8pfuq1s9vh6mnd_49747568.jpg'),
        img('bf60vldbsrwd4pe6bthrhghtrtfj_115793524.jpg'),
        img('6y8wwcjhnuzjto8az5vaoysbv5ue_48491726.jpg'),
        img('zjtbdybs21pmbspjbzkh5ciaoq6q_189540731.jpg'),
        img('f4g3azyhdqiyy9etl5dlqps0bn7e_74508840.jpg'),
        img('dh0tjh4qvnws8u3fjik9kwv96vwv_573122940.jpg'),
        img('hh0mnh66qb3zaw56sfzxwgse46dr_85817735.jpg'),
        img('ds6u27g2jq1l7cfv5wln54ii1iai_85812042.jpg'),
        img('4cdw3apfr16n9o9q0i9i4elnsokr_481637324.jpg'),
        img('ervfo368nbww09kjdih12ssk303r_437006388.jpg')
      ]
    },
    activities: [
      {
        name: 'Phi Phi Pirate Boat Party',
        day: 4,
        optional: false,
        image: img('op7s2csw5gvc5rzn3gg06yb0uuwa_Downpic.cc-image181277303.jpg'),
        description: 'A full day sailing around the Phi Phi group with swim stops, music on deck and the limestone cliffs close enough to touch.'
      },
      {
        name: 'Snorkelling off the Beach',
        day: 3,
        optional: true,
        image: img('utjf0r0yzh068bcj4im2423l62kv_87-61e10dc60121410.jpg'),
        description: 'Clear shallows right off the sand near Tonsai, with gear for hire a few steps from the resort.'
      },
      {
        name: 'Island Pool Party',
        day: 3,
        optional: true,
        image: img('mkt6db3hiztjir5oj7sx9i7hfy6l_ibiza-pool-party.jpg'),
        description: 'Phi Phi runs an Ibiza style pool party most nights in season. Easy to add on your free island afternoon.'
      }
    ],
    program: {
      name: 'Two nights on car free Phi Phi',
      description: 'Island time with no traffic, swimming straight off the beach and a pirate boat party that is kept for people staying on Phi Phi.',
      image: img('xqktwf8gkgzgcts4b0er66bcsn11_15731559592_0d480a130b_o.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Phuket',
    dayLabel: 'Day 5 to 6',
    images: [
      img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg'),
      img('5cmfpiy0kqs836pgf4xyqmoufngh_shutterstock_2337247939-min%20(1).jpg'),
      img('v8o5dqy6l3qxq18t3vgstfw9213n_shutterstock_771996532.jpg'),
      img('q0rofzuv74wu1axaon9rmkcob0jh_shutterstock_448476727.jpg')
    ],
    dayImages: {
      5: [
        img('lknez6qnnfbvw2yujulecml5egsj_1579855096_shutterstock_1265137084.jpg'),
        img('a8luqsni73mqhn0o6ekfzbwvrhc1_1469607104-simon-cabaret-show-1.jpg'),
        img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg'),
        img('uhyclhw5d3ngfvigxaavcrl0getu_shutterstock_1111881161%20(1).jpg')
      ],
      6: [
        img('ewhkein4m1u2kleiy4ol5qgipmg3_shutterstock_2299911433.jpg'),
        img('uhyclhw5d3ngfvigxaavcrl0getu_shutterstock_1111881161%20(1).jpg'),
        img('cfnmel47ecocahv8356wg2mlmff7_shutterstock_2103161357.jpg'),
        img('3doz8fuaz50k9iwyhnl7a7h6ud6y_shutterstock_1827923945-min.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 5 · Back to Phuket`,
      'Breakfast, check out and speedboat transfer back across to Phuket',
      'Private transfer on to the Ramada Plaza for your last night',
      'Afternoon free beside the pool or over at Patong beach',
      'Optional: Bangla Road after dark or the Simon Cabaret show',
      `${DAY_MARK}Day 6 · Departure`,
      'Breakfast and an easy morning before check out',
      'Private sedan transfer to Phuket International Airport'
    ],
    accommodation: {
      name: 'Ramada Plaza by Wyndham Chao Fah, Phuket',
      description: '1 night · Breakfast included · Luxury room · 5★ · Off Chao Fah road, handy for the airport run and Phuket town',
      images: [
        img('lrii3wxtyryu8m4a3bzzq6pw6854_517636550.jpg'),
        img('tir13az2ywkqgli2z5wk1reacgqk_517636556.jpg'),
        img('rkvaz4yzvz39qcmzl2ewblszf9fb_386246025.jpg'),
        img('hal3xd31ryibugkt57kfqy25ivia_354920480.jpg'),
        img('i4j38llm62g6mno7ho55zkfnmjlq_229000212.jpg'),
        img('ndb254vt3wqdohyghtfxbk5c4gco_386246213.jpg'),
        img('0pbmohcqzueunugfl63opde9xf4t_205308880.jpg'),
        img('8zvwv5vwabijafk76xg8pn4bw34g_517636589.jpg'),
        img('8b3dd4ez5latcjqrk9yomjhhw1y0_517636547.jpg'),
        img('ki26rn8eyo6g7rp47q0kbk7kv2sl_517636614.jpg'),
        img('1s4mlusuonzssnjq2j64rbw0od4m_331198497.jpg')
      ]
    },
    activities: [
      {
        name: 'Bangla Road After Dark',
        day: 5,
        optional: true,
        image: img('lknez6qnnfbvw2yujulecml5egsj_1579855096_shutterstock_1265137084.jpg'),
        description: 'Patong\'s famous night strip, closed to traffic after dark and lined with bars, street food and live music.'
      },
      {
        name: 'Simon Cabaret Show',
        day: 5,
        optional: true,
        image: img('a8luqsni73mqhn0o6ekfzbwvrhc1_1469607104-simon-cabaret-show-1.jpg'),
        description: 'Phuket\'s best known cabaret, an hour of costumes, live singing and big stage sets close to Patong beach.'
      }
    ],
    program: {
      name: 'One last Phuket night',
      description: 'Back across from the islands for a comfortable final night, with Patong close by if you want one more evening out.',
      image: img('kipm6jnkwk1bxv9v2z08qubu57jy_shutterstock_2297244885-min.jpg')
    }
  }
];

const detail = {
  slug: 'phuket-and-phi-phi-party-escape',
  ctaHref: '/l/thailand/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Phuket and Phi Phi Party Escape',
  alt: 'Longtail boats below the limestone cliffs of Phi Phi island in Thailand',
  days: '6 days / 5 nights',
  stations: '3 stops',
  transport: 'Private sedan transfers with speedboat island crossings',
  tag: 'Beach',
  tags: ['Beach', 'Adventure'],
  price: 38000,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Phuket', 'Phi Phi Islands'],
  stats: { days: 6, cities: 2, hotels: 3, activities: 3, transfers: 9 },
  gallery: heroGallery,
  services: [
    ['3 hotels', 'Accommodation'],
    ['3 experiences', 'Activities'],
    ['9 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ananya Iyer',
    image: '/team/asia-2.webp',
    role: 'Thailand expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two island nights on Phi Phi change this trip. You wake up with no traffic and swim before breakfast.',
    quoteMore: 'Pack a dry bag for the boat days and reef safe sunscreen. The pirate boat party is loud and brilliant, so keep the Phi Phi mornings free to recover on the sand.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days around Phuket and Phi Phi for travellers who want beach days with music. Tiger Kingdom, the Yona floating club off Phuket, two nights on car free Phi Phi and a pirate boat party, with a last night back in Phuket.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 5 nights in 3 hotels with daily breakfast; Tiger Kingdom big tiger ticket with private transfer; Yona floating beach club experience; Phi Phi pirate boat party sailing; 9 airport, pier and island transfers including speedboat crossings.',
  intro2: 'Not included: international flights; visa charges; travel insurance; drinks on board; lunches and dinners; water sports and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Phuket and Tiger Kingdom (Arrival)', text: 'Arrival at Phuket International Airport and private sedan transfer to Chalong\nCheck in, then a private transfer out to Tiger Kingdom\nBig tiger ticket with keepers alongside you in the enclosure\nEvening free, with Rawai and Nai Harn beaches a short ride away', hotel: 'Chalong Chalet Resort & Longstay', highlights: ['Arrival at Phuket International Airport and private sedan transfer to Chalong', 'Check in, then a private transfer out to Tiger Kingdom', 'Big tiger ticket with keepers alongside you in the enclosure'] },
    { title: 'Day 2: Yona floating beach club (B)', text: 'Breakfast at the resort, then private transfer to the Chalong pier\nBoat out to Yona, a floating club moored in open water off Phuket\nPool deck, sun beds and music all afternoon, drinks payable on board\nBack to shore by evening with the rest of the night free', hotel: 'Chalong Chalet Resort & Longstay', highlights: ['Breakfast at the resort, then private transfer to the Chalong pier', 'Boat out to Yona, a floating club moored in open water off Phuket', 'Pool deck, sun beds and music all afternoon, drinks payable on board'] },
    { title: 'Day 3: On to car free Phi Phi (B)', text: 'Breakfast, check out and private transfer to the Phuket pier\nSpeedboat transfer across to Phi Phi, where there are no cars at all\nCheck in and spend the afternoon on the sand near Tonsai bay\nOptional: snorkelling off the beach or the island pool party after dark', hotel: 'Paradise Resort Phi Phi', highlights: ['Breakfast, check out and private transfer to the Phuket pier', 'Speedboat transfer across to Phi Phi, where there are no cars at all', 'Check in and spend the afternoon on the sand near Tonsai bay'] },
    { title: 'Day 4: Pirate boat party (B)', text: 'Breakfast, then board the Phi Phi pirate boat for the day\nSwim stops, music on deck and limestone walls rising out of the sea\nThis party sailing is kept for guests staying on the island\nEvening free along the Tonsai strip', hotel: 'Paradise Resort Phi Phi', highlights: ['Breakfast, then board the Phi Phi pirate boat for the day', 'Swim stops, music on deck and limestone walls rising out of the sea', 'This party sailing is kept for guests staying on the island'] },
    { title: 'Day 5: Back to Phuket (B)', text: 'Breakfast, check out and speedboat transfer back across to Phuket\nPrivate transfer on to the Ramada Plaza for your last night\nAfternoon free beside the pool or over at Patong beach\nOptional: Bangla Road after dark or the Simon Cabaret show', hotel: 'Ramada Plaza by Wyndham Chao Fah', highlights: ['Breakfast, check out and speedboat transfer back across to Phuket', 'Private transfer on to the Ramada Plaza for your last night', 'Afternoon free beside the pool or over at Patong beach'] },
    { title: 'Day 6: Departure (B)', text: 'Breakfast and an easy morning before check out\nPrivate sedan transfer to Phuket International Airport', hotel: 'Departure', highlights: ['Breakfast and an easy morning before check out', 'Private sedan transfer to Phuket International Airport'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; drinks on board; lunches and dinners; water sports and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Thailand', href: '/asien/thailand' },
  { label: detail.title }
];

export const phuketPhiPhiPartyEscapeBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const phuketPhiPhiPartyEscapeProduct = {
  slug: detail.slug,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 3,
  hotels: 3,
  cities: 2,
  activities: 3,
  transfers: 9,
  meals: 5,
  price: detail.price,
  images: cardImages
};
