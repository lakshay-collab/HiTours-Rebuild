// Singapore Honeymoon with the Genting Dream Cruise. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
  img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
  img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
  img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
  img('3xb9b772fk8tq784ls9xw46bonlu_meric-dagli-RG7jGL8wkCs-unsplash.jpg'),
  img('3kicse3qojgtvpf5e4aqzvskrzu4_shutterstock_203804005.jpg'),
  img('uj4mfpnza7hzznm3ek5wzhawzdyl_shutterstock_1093285319.jpg'),
  img('35k7yjt1zzbgojfz9f69y4n9v43r_shutterstock_1068875402%20(1).jpg'),
  img('05dl6v4zzzs9r4hzjg41ugc2c3hc_shutterstock_135576233%20(1).jpg'),
  img('itpl36920m8zfwwwt0es64uzpwzq_shutterstock_646707235.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('05dl6v4zzzs9r4hzjg41ugc2c3hc_shutterstock_135576233%20(1).jpg'),
  img('xu8ioyxw55l124nsa0g6r664za21_9.jpg'),
  img('iegqu41gpfqr5m5a26g45ewttzsk_10.jpg'),
  img('22dtga810pv0kvwyda4900jeu00v_4%20(1).jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Singapore',
    dayLabel: 'Day 1',
    images: [
      img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
      img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg'),
      img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
      img('v60hqsq1le1ub9ibteulgapdl3s6_shutterstock_157315883.jpg')
    ],
    dayImages: {
      1: [
        img('nwaa7uo4j6hcpv64q2eqa76nlf2e_Tram%20Experience%20-%20Chawang.jpg'),
        img('cgx6ab1cspd7wu0e04jze3dzbibk_singapore_night_safari.jpg'),
        img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
        img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and the Night Safari`,
      'Arrival at Changi Airport and private sedan transfer to the Hotel Mi Bencoolen',
      'Check in and rest for a few hours',
      'Shared transfer to Mandai for the Night Safari with a tram ride',
      'Late supper around Bencoolen Street when you are back'
    ],
    accommodation: {
      name: 'Hotel Mi Bencoolen, Singapore',
      description: '1 night · Breakfast included · Standard room · 4★ · Hotel Mi Bencoolen, a short walk from Bencoolen MRT and Bras Basah',
      images: [
        img('e1oiec9umkg8jm0hesnlifcx8cnh_118274517.jpg'),
        img('ef3xf78vdwqwb3esbiduxeuc1som_118274511.jpg'),
        img('k7k32fggj4lghl4k2wudolx5e2uy_111801778.jpg'),
        img('p1ek5hg7tmovu63ujvhk9tio0jud_118274521.jpg'),
        img('ob64ozdrkxxvf32hkoxd0neduw1u_111801828.jpg'),
        img('urrnyts0gpsofalc1qme8yvp2m3v_52ac27b9ee8a956a5ba4a999ee4c04e7-hotel-boss.webp'),
        img('1xw1yjn4kgmx51fnoxi0uwjxqcmr_1453377847.webp'),
        img('1bp6ixzssupkpgxzkop3hcrwm4l1_Hotel-Mi-Bencoolen-Singapore-Exterior.jpg'),
        img('lppqizzzggl0ogdillcd388nvmfj_118274508.jpg'),
        img('skrzuthrx8k9qvthpxgbhvtpy4x9_118274519.jpg')
      ]
    },
    activities: [
      {
        name: 'Night Safari with Tram Ride',
        day: 1,
        optional: false,
        image: img('nwaa7uo4j6hcpv64q2eqa76nlf2e_Tram%20Experience%20-%20Chawang.jpg'),
        description: 'A tram circuit through the Mandai park after dark, past the elephants, hyenas and the big cats.'
      }
    ],
    program: {
      name: 'One night and a wildlife evening',
      description: 'A single night in the city centre to land, settle and get out to Mandai for the Night Safari before the sailing.',
      image: img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Genting Dream',
    dayLabel: 'Day 2 to 3',
    images: [
      img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
      img('xgeh524mw5dgb5a3eplwfr9pvt3d_nathaniel-yeo-cm9ryWeqjfk-unsplash.jpg'),
      img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
      img('sfw0sw4nhgzk0yegkil8jla98ydq_shutterstock_743903413.jpg')
    ],
    dayImages: {
      2: [
        img('xu8ioyxw55l124nsa0g6r664za21_9.jpg'),
        img('iegqu41gpfqr5m5a26g45ewttzsk_10.jpg'),
        img('22dtga810pv0kvwyda4900jeu00v_4%20(1).jpg'),
        img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg')
      ],
      3: [
        img('0kjcgtve7lpr34a86o0k93h2d516_8.jpg'),
        img('bxr8opxisv5ch5qzjbdczan26l4j_4.jpg'),
        img('2mw7pbtsagmc897ie1mqsrw455ba_9%20(1).jpg'),
        img('nqrenateoxliuhovukfnxofs2353_2.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Aboard the Genting Dream`,
      'Breakfast, check out and private sedan transfer to the Marina Bay Cruise Centre',
      'Board the Genting Dream and settle into your cabin',
      'Lunch on board, then the pool deck as the ship sails out',
      'Optional: the zipline, the Zouk beach club and the SportsPlex on deck',
      `${DAY_MARK}Day 3 · A day at sea`,
      'A full day at sea with all meals on board',
      'Optional: the mini golf deck, the waterslide park and the rock climbing wall',
      'Afternoon at the spa or on a quiet sun deck',
      'Dinner and a show at the Zodiac theatre'
    ],
    accommodation: {
      name: 'Genting Dream, Singapore',
      description: '2 nights · Breakfast, lunch and dinner included · Standard cabin · Genting Dream, sailing from the Marina Bay Cruise Centre',
      images: [
        img('zuxol1y4yik3w7bqzi071lsc9hpu_shutterstock_2189017999.jpg'),
        img('i7llzvh27c0hw6d0wrj18u1du9p7_1%20(3).jpg'),
        img('zsm8nlu2pgiacexqwr5mq9nisbbd_shutterstock_2189933083.jpg'),
        img('ebq9a4xzdagvw0widtxh9m5raq41_2%20(5).jpg'),
        img('ecsza8j7gperajurmy4k6xa8uj3t_shutterstock_765544045%20(1).jpg'),
        img('mboad98a1bl7cm88s81v1i2nqcb5_5.jpg'),
        img('sjpxxqbtaygjcjgsmwzuz2e4orrj_4.jpg')
      ]
    },
    activities: [
      {
        name: 'Zipline on Deck',
        day: 2,
        optional: true,
        image: img('xu8ioyxw55l124nsa0g6r664za21_9.jpg'),
        description: 'A zipline strung above the upper decks of the Genting Dream, with open sea on both sides of you.'
      },
      {
        name: 'Waterslide Park on Deck',
        day: 3,
        optional: true,
        image: img('bxr8opxisv5ch5qzjbdczan26l4j_4.jpg'),
        description: 'Six slides and a splash pool on the top decks, open through the full day at sea.'
      },
      {
        name: 'Zodiac Theatre Show',
        day: 3,
        optional: true,
        image: img('2mw7pbtsagmc897ie1mqsrw455ba_9%20(1).jpg'),
        description: 'The ship\'s main theatre with acrobatics and music sets, two performances most evenings.'
      }
    ],
    program: {
      name: 'Two nights at sea',
      description: 'A short sailing with all meals on board, a waterslide park, a zipline above the deck and evening shows at the theatre.',
      image: img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Sentosa',
    dayLabel: 'Day 4 to 5',
    images: [
      img('3xb9b772fk8tq784ls9xw46bonlu_meric-dagli-RG7jGL8wkCs-unsplash.jpg'),
      img('4gp8m32efnb38q8qauueycr9ylza_shutterstock_561308047.jpg'),
      img('3kicse3qojgtvpf5e4aqzvskrzu4_shutterstock_203804005.jpg'),
      img('ese14t6vvz3v8df8lg6p1hcz4wf0_shutterstock_1112004536.jpg')
    ],
    dayImages: {
      4: [
        img('esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.jpg'),
        img('5ny753dccex42fsfmdxfhlzlfvah_1626351333_shutterstock_302633321.jpg'),
        img('2julf8qwlh6bds74kvyfmdfcqwmh_virat-kohli-7-to-5.jpg'),
        img('oupzh98wmtqh6wxe78yiqb4zxl5m_0ca197e1dfdbb75f593c55c41834fbe7-4.jpg')
      ],
      5: [
        img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
        img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg'),
        img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
        img('v60hqsq1le1ub9ibteulgapdl3s6_shutterstock_157315883.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Back in port and Sentosa`,
      'Breakfast on board and disembark at the Marina Bay Cruise Centre',
      'Shared transfer to Mount Faber and a two way cable car sky pass',
      'Madame Tussauds on Sentosa with the Spirit of Singapore boat ride',
      'Wings of Time on Siloso beach, then private transfer to your hotel',
      `${DAY_MARK}Day 5 · Departure`,
      'Breakfast and a relaxed check out',
      'Private sedan transfer to Changi Airport for your flight home'
    ],
    accommodation: {
      name: 'Hotel Mi Bencoolen, Singapore',
      description: '1 night · Breakfast included · Standard room · 4★ · Hotel Mi Bencoolen, back in the city centre for the last night',
      images: [
        img('e1oiec9umkg8jm0hesnlifcx8cnh_118274517.jpg'),
        img('ef3xf78vdwqwb3esbiduxeuc1som_118274511.jpg'),
        img('k7k32fggj4lghl4k2wudolx5e2uy_111801778.jpg'),
        img('p1ek5hg7tmovu63ujvhk9tio0jud_118274521.jpg'),
        img('ob64ozdrkxxvf32hkoxd0neduw1u_111801828.jpg'),
        img('urrnyts0gpsofalc1qme8yvp2m3v_52ac27b9ee8a956a5ba4a999ee4c04e7-hotel-boss.webp'),
        img('1xw1yjn4kgmx51fnoxi0uwjxqcmr_1453377847.webp'),
        img('1bp6ixzssupkpgxzkop3hcrwm4l1_Hotel-Mi-Bencoolen-Singapore-Exterior.jpg'),
        img('lppqizzzggl0ogdillcd388nvmfj_118274508.jpg'),
        img('skrzuthrx8k9qvthpxgbhvtpy4x9_118274519.jpg')
      ]
    },
    activities: [
      {
        name: 'Singapore Cable Car Sky Pass',
        day: 4,
        optional: false,
        image: img('esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.jpg'),
        description: 'A two way ride between Mount Faber, HarbourFront and Sentosa, high above the working harbour.'
      },
      {
        name: 'Madame Tussauds Singapore',
        day: 4,
        optional: false,
        image: img('2julf8qwlh6bds74kvyfmdfcqwmh_virat-kohli-7-to-5.jpg'),
        description: 'Wax figures, the Spirit of Singapore boat ride through the city\'s history and a digital photo to keep.'
      },
      {
        name: 'Wings of Time',
        day: 4,
        optional: false,
        image: img('oupzh98wmtqh6wxe78yiqb4zxl5m_0ca197e1dfdbb75f593c55c41834fbe7-4.jpg'),
        description: 'A twenty minute night show on Siloso beach built from water screens, lasers and flame jets.'
      }
    ],
    program: {
      name: 'An island day to finish',
      description: 'Straight off the ship and onto the cable car, with Madame Tussauds and the beachfront night show before a final city night.',
      image: img('3xb9b772fk8tq784ls9xw46bonlu_meric-dagli-RG7jGL8wkCs-unsplash.jpg')
    }
  }
];

const detail = {
  slug: 'singapore-honeymoon-with-the-genting-dream-cruise',
  ctaHref: '/l/singapore/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Singapore Honeymoon with the Genting Dream Cruise',
  alt: 'Sun deck and pool on a cruise ship sailing out of Singapore',
  days: '5 days / 4 nights',
  stations: '3 stops',
  transport: 'Private airport and port transfers with shared coaches for tours',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Cruise'],
  price: 56460,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Singapore', 'Genting Dream', 'Sentosa'],
  stats: { days: 5, cities: 2, hotels: 2, activities: 4, transfers: 10 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['10 transfers', 'Transport'],
    ['8 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Nisha Rao',
    image: '/experts/riya.webp',
    role: 'Singapore expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two nights at sea in the middle of a short honeymoon is the easiest way to slow a city trip down.',
    quoteMore: 'Ask for a late check out on the final day. You come off the ship in the morning and a room to shower in before the flight makes the whole day easier.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five honeymoon days. A wildlife evening on arrival, two nights aboard the Genting Dream with all meals, then back in port for Sentosa with the cable car, Madame Tussauds and the Wings of Time show.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 2 nights at the Hotel Mi Bencoolen with breakfast; 2 nights aboard the Genting Dream with breakfast, lunch and dinner; Night Safari with tram ride; two way cable car sky pass; Madame Tussauds with a digital photo; Wings of Time; 10 private and shared transfers including the cruise terminal.',
  intro2: 'Not included: international flights; visa charges; travel insurance; port charges and gratuities; speciality restaurants and paid decks on board; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and the Night Safari (Arrival)', text: 'Arrival at Changi Airport and private sedan transfer to the Hotel Mi Bencoolen\nCheck in and rest for a few hours\nShared transfer to Mandai for the Night Safari with a tram ride\nLate supper around Bencoolen Street when you are back', hotel: 'Hotel Mi Bencoolen', highlights: ['Arrival at Changi Airport and private sedan transfer to the Hotel Mi Bencoolen', 'Check in and rest for a few hours', 'Shared transfer to Mandai for the Night Safari with a tram ride'] },
    { title: 'Day 2: Aboard the Genting Dream (B, L, D)', text: 'Breakfast, check out and private sedan transfer to the Marina Bay Cruise Centre\nBoard the Genting Dream and settle into your cabin\nLunch on board, then the pool deck as the ship sails out\nOptional: the zipline, the Zouk beach club and the SportsPlex on deck', hotel: 'Genting Dream Cruise', highlights: ['Breakfast, check out and private sedan transfer to the Marina Bay Cruise Centre', 'Board the Genting Dream and settle into your cabin', 'Lunch on board, then the pool deck as the ship sails out'] },
    { title: 'Day 3: A day at sea (B, L, D)', text: 'A full day at sea with all meals on board\nOptional: the mini golf deck, the waterslide park and the rock climbing wall\nAfternoon at the spa or on a quiet sun deck\nDinner and a show at the Zodiac theatre', hotel: 'Genting Dream Cruise', highlights: ['A full day at sea with all meals on board', 'Optional: the mini golf deck, the waterslide park and the rock climbing wall', 'Afternoon at the spa or on a quiet sun deck'] },
    { title: 'Day 4: Back in port and Sentosa (B)', text: 'Breakfast on board and disembark at the Marina Bay Cruise Centre\nShared transfer to Mount Faber and a two way cable car sky pass\nMadame Tussauds on Sentosa with the Spirit of Singapore boat ride\nWings of Time on Siloso beach, then private transfer to your hotel', hotel: 'Hotel Mi Bencoolen', highlights: ['Breakfast on board and disembark at the Marina Bay Cruise Centre', 'Shared transfer to Mount Faber and a two way cable car sky pass', 'Madame Tussauds on Sentosa with the Spirit of Singapore boat ride'] },
    { title: 'Day 5: Departure (B)', text: 'Breakfast and a relaxed check out\nPrivate sedan transfer to Changi Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast and a relaxed check out', 'Private sedan transfer to Changi Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; port charges and gratuities; speciality restaurants and paid decks on board; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Singapore', href: '/asien/singapore' },
  { label: detail.title }
];

export const singaporeHoneymoonGentingCruiseBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const singaporeHoneymoonGentingCruiseProduct = {
  slug: detail.slug,
  places: ['Singapore', 'Genting Dream', 'Sentosa'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 3,
  hotels: 2,
  cities: 2,
  activities: 4,
  transfers: 10,
  meals: 8,
  price: detail.price,
  images: cardImages
};
