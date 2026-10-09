// Singapore with the Genting Dream Cruise. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg'),
  img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg'),
  img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
  img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
  img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
  img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg'),
  img('3xb9b772fk8tq784ls9xw46bonlu_meric-dagli-RG7jGL8wkCs-unsplash.jpg'),
  img('3kicse3qojgtvpf5e4aqzvskrzu4_shutterstock_203804005.jpg'),
  img('uj4mfpnza7hzznm3ek5wzhawzdyl_shutterstock_1093285319.jpg'),
  img('35k7yjt1zzbgojfz9f69y4n9v43r_shutterstock_1068875402%20(1).jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('35k7yjt1zzbgojfz9f69y4n9v43r_shutterstock_1068875402%20(1).jpg'),
  img('we8ipbdppywm90csgjosarhe6gkf_87a2936a-5dec-41e1-8f16-8017a326a83c.jpg'),
  img('durtbjf99crlygjse28sv48r10xs_shutterstock_1319645060.jpg'),
  img('m6lvc34tprfl510pq3sbax1xnzyb_shutterstock_210555943.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Singapore',
    dayLabel: 'Day 1 to 3',
    images: [
      img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg'),
      img('itpl36920m8zfwwwt0es64uzpwzq_shutterstock_646707235.jpg'),
      img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg'),
      img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg')
    ],
    dayImages: {
      1: [
        img('we8ipbdppywm90csgjosarhe6gkf_87a2936a-5dec-41e1-8f16-8017a326a83c.jpg'),
        img('cgx6ab1cspd7wu0e04jze3dzbibk_singapore_night_safari.jpg'),
        img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg'),
        img('itpl36920m8zfwwwt0es64uzpwzq_shutterstock_646707235.jpg')
      ],
      2: [
        img('durtbjf99crlygjse28sv48r10xs_shutterstock_1319645060.jpg'),
        img('mmto1hk2nujlkltfsadj9s2ch3j9_1563452033_shutterstock_208160683_(1).jpg'),
        img('etwjtvxjtctcyj8zmdmmtz5rnff7_1563607619_shutterstock_1155676858.jpg'),
        img('xkc5gws4qd4uax4hvxwihi35fv35_1563619864_shutterstock_793620280.jpg')
      ],
      3: [
        img('m6lvc34tprfl510pq3sbax1xnzyb_shutterstock_210555943.jpg'),
        img('s2r4nfl80qk64lm24j05vwdt984y_VIAL1673.JPG'),
        img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg'),
        img('itpl36920m8zfwwwt0es64uzpwzq_shutterstock_646707235.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and the Night Safari`,
      'Arrival at Changi Airport and private sedan transfer to the ibis Novena',
      'Check in and take a few hours to settle',
      'Shared transfer to Mandai for the Night Safari with a tram ride',
      'Back in town for a late supper near Novena MRT',
      `${DAY_MARK}Day 2 · City tour and the Sentosa cable car`,
      'Breakfast, then shared transfer for the half day city tour',
      'Merlion Park, Marina Bay, Chinatown and the civic district',
      'Two way cable car sky pass from Mount Faber across to Sentosa',
      'Evening free on the island or back at VivoCity',
      `${DAY_MARK}Day 3 · Universal Studios`,
      'Breakfast, then shared transfer to Resorts World Sentosa',
      'One day pass for Universal Studios across all seven zones',
      'Afternoon shows and the themed streets at your own pace',
      'Early night before the sailing'
    ],
    accommodation: {
      name: 'ibis Singapore Novena, Singapore',
      description: '3 nights · Breakfast included · Standard room · 3★ · ibis Novena, two minutes from Novena MRT station',
      images: [
        img('d6klr7rae9mjjgqcyxptmvn8tba6_af67747a663f11e98b080242ac110008.png'),
        img('csfhgzj0hntodxb28qvgv965a24s_image_15.jpg'),
        img('8wl2g0cn2jx6h6ep0d4ru0betg4q_image_33.jpg'),
        img('kbp95nbgqxqinqjf05c2quuks1rz_image_3.jpg'),
        img('78572o6iiligczcwpf53m4rato6x_image_11.jpg'),
        img('arrzsh0apjh20wt83nd79jg94ago_image_25.jpg'),
        img('v5x55fh59onfprpxfidpel6m2u5z_image_30.jpg'),
        img('s6d2ibuhqldpzqygmojundstvj55_image_14.jpg'),
        img('oe2wlghbavuqtc5906tj65b7ajbt_image_42.jpg'),
        img('ob6cy8m0thir3bf3ys1oex0ehuks_image_20.jpg'),
        img('8i4sw4hxrsdydys98tihj4v2dmec_image_34.jpg'),
        img('3i7y1l1kck4i8qdwg3wetpdoefoo_image_24.jpg'),
        img('l2gou2c96m46k1eilwvcc5oakkpo_image_8.jpg'),
        img('hcqm47q3u6l1nhhf7e6bm7x36xn4_image_29.jpg')
      ]
    },
    activities: [
      {
        name: 'Night Safari with Tram Ride',
        day: 1,
        optional: false,
        image: img('we8ipbdppywm90csgjosarhe6gkf_87a2936a-5dec-41e1-8f16-8017a326a83c.jpg'),
        description: 'A tram circuit through the Mandai park after dark, past the elephants, hyenas and the big cats.'
      },
      {
        name: 'Half Day Singapore City Tour',
        day: 2,
        optional: false,
        image: img('durtbjf99crlygjse28sv48r10xs_shutterstock_1319645060.jpg'),
        description: 'A shared coach tour of Merlion Park, Marina Bay, the Helix bridge, Chinatown and the civic district.'
      },
      {
        name: 'Singapore Cable Car Sky Pass',
        day: 2,
        optional: false,
        image: img('esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.jpg'),
        description: 'A two way ride from Mount Faber over HarbourFront to Sentosa, with the container port below.'
      },
      {
        name: 'Universal Studios Singapore',
        day: 3,
        optional: false,
        image: img('m6lvc34tprfl510pq3sbax1xnzyb_shutterstock_210555943.jpg'),
        description: 'A one day pass covering Sci Fi City, Ancient Egypt, Far Far Away and the Hollywood boulevard shows.'
      }
    ],
    program: {
      name: 'Three city nights',
      description: 'Novena as a base for the Night Safari, a city tour with the Sentosa cable car and a full theme park day.',
      image: img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Genting Dream',
    dayLabel: 'Day 4 to 6',
    images: [
      img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
      img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg'),
      img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
      img('v60hqsq1le1ub9ibteulgapdl3s6_shutterstock_157315883.jpg')
    ],
    dayImages: {
      4: [
        img('1mqib769trsd38wsihwe1y6fgxa3_3.jpg'),
        img('r78poj3o5eiur5swonep54e0rlkm_10.jpg'),
        img('kmwktek5fvsn88g7dyzz34j6yu52_lido.jpg'),
        img('vjwvtw9drnajjbfn3recx85qutj6_shutterstock_1683120640.jpg')
      ],
      5: [
        img('82sg1df32p5hbk9e7stx30zgfbl4_5.jpg'),
        img('h1plzx3kf1d1xnw0c2tt5areqsyq_2.jpg'),
        img('qr3hon02005rw0kvktv17rpbtlqo_9.jpg'),
        img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg')
      ],
      6: [
        img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg'),
        img('itpl36920m8zfwwwt0es64uzpwzq_shutterstock_646707235.jpg'),
        img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg'),
        img('729bjlbi9t99g3rzgy8dsy0slyrc_shutterstock_325740014.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Aboard the Genting Dream`,
      'Breakfast, check out and private sedan transfer to the Marina Bay Cruise Centre',
      'Board the Genting Dream and find your cabin',
      'Lunch on board, then the pool deck and the waterslides',
      'Optional: the zipline, the rope course and the Zouk beach club on deck',
      `${DAY_MARK}Day 5 · A day at sea`,
      'A full day at sea with all meals on board',
      'Optional: the spa, the waterslide park and the Zodiac theatre shows',
      'Rock climbing wall and the sports deck through the afternoon',
      'Dinner and a show before the last night on board',
      `${DAY_MARK}Day 6 · Back in port and departure`,
      'Breakfast on board and disembark at the Marina Bay Cruise Centre',
      'Private sedan transfer to Changi Airport for your flight home'
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
        name: 'Waterslide Park on Deck',
        day: 5,
        optional: true,
        image: img('h1plzx3kf1d1xnw0c2tt5areqsyq_2.jpg'),
        description: 'Six slides and a splash pool on the upper decks of the Genting Dream, open through the day at sea.'
      },
      {
        name: 'Zipline and Rope Course',
        day: 4,
        optional: true,
        image: img('1mqib769trsd38wsihwe1y6fgxa3_3.jpg'),
        description: 'A zipline and a ropes circuit strung above the deck, with the sea on both sides of you.'
      },
      {
        name: 'Zouk Beach Club',
        day: 4,
        optional: true,
        image: img('r78poj3o5eiur5swonep54e0rlkm_10.jpg'),
        description: 'The ship\'s pool and club deck, quiet in the afternoon and busy once the sun goes down.'
      },
      {
        name: 'Crystal Life Spa',
        day: 5,
        optional: true,
        image: img('82sg1df32p5hbk9e7stx30zgfbl4_5.jpg'),
        description: 'The spa deck with saunas, a thalassotherapy pool and treatment rooms, booked on board.'
      }
    ],
    program: {
      name: 'Two nights at sea',
      description: 'A short sailing on the Genting Dream with all meals on board, a waterslide park, a zipline over the deck and evening shows.',
      image: img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg')
    }
  }
];

const detail = {
  slug: 'singapore-with-the-genting-dream-cruise',
  ctaHref: '/l/singapore/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Singapore with the Genting Dream Cruise',
  alt: 'Cruise ship berthed at the Marina Bay Cruise Centre in Singapore',
  days: '6 days / 5 nights',
  stations: '2 stops',
  transport: 'Private airport and port transfers with shared coaches for tours',
  tag: 'Cruise',
  tags: ['Cruise', 'Family'],
  price: 56050,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Singapore', 'Sentosa', 'Genting Dream'],
  stats: { days: 6, cities: 2, hotels: 2, activities: 4, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['2 hotels', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['9 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Nisha Rao',
    image: '/experts/riya.webp',
    role: 'Singapore expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three nights on land then two at sea works beautifully. You see the whole city, then stop deciding anything for two days.',
    quoteMore: 'Book a balcony cabin if the budget stretches. The sail out past the anchored tankers at dusk is worth sitting outside for.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Six days split between the city and the sea. The Night Safari, a city tour with the Sentosa cable car and a full day at Universal Studios, then two nights aboard the Genting Dream with all meals included.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights at the ibis Novena with breakfast; 2 nights aboard the Genting Dream with breakfast, lunch and dinner; Night Safari with tram ride; half day city tour; two way cable car sky pass; Universal Studios one day pass; 8 private and shared transfers including the cruise terminal.',
  intro2: 'Not included: international flights; visa charges; travel insurance; port charges and gratuities; speciality restaurants and paid decks on board; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and the Night Safari (Arrival)', text: 'Arrival at Changi Airport and private sedan transfer to the ibis Novena\nCheck in and take a few hours to settle\nShared transfer to Mandai for the Night Safari with a tram ride\nBack in town for a late supper near Novena MRT', hotel: 'ibis Singapore Novena', highlights: ['Arrival at Changi Airport and private sedan transfer to the ibis Novena', 'Check in and take a few hours to settle', 'Shared transfer to Mandai for the Night Safari with a tram ride'] },
    { title: 'Day 2: City tour and the Sentosa cable car (B)', text: 'Breakfast, then shared transfer for the half day city tour\nMerlion Park, Marina Bay, Chinatown and the civic district\nTwo way cable car sky pass from Mount Faber across to Sentosa\nEvening free on the island or back at VivoCity', hotel: 'ibis Singapore Novena', highlights: ['Breakfast, then shared transfer for the half day city tour', 'Merlion Park, Marina Bay, Chinatown and the civic district', 'Two way cable car sky pass from Mount Faber across to Sentosa'] },
    { title: 'Day 3: Universal Studios (B)', text: 'Breakfast, then shared transfer to Resorts World Sentosa\nOne day pass for Universal Studios across all seven zones\nAfternoon shows and the themed streets at your own pace\nEarly night before the sailing', hotel: 'ibis Singapore Novena', highlights: ['Breakfast, then shared transfer to Resorts World Sentosa', 'One day pass for Universal Studios across all seven zones', 'Afternoon shows and the themed streets at your own pace'] },
    { title: 'Day 4: Aboard the Genting Dream (B, L, D)', text: 'Breakfast, check out and private sedan transfer to the Marina Bay Cruise Centre\nBoard the Genting Dream and find your cabin\nLunch on board, then the pool deck and the waterslides\nOptional: the zipline, the rope course and the Zouk beach club on deck', hotel: 'Genting Dream Cruise', highlights: ['Breakfast, check out and private sedan transfer to the Marina Bay Cruise Centre', 'Board the Genting Dream and find your cabin', 'Lunch on board, then the pool deck and the waterslides'] },
    { title: 'Day 5: A day at sea (B, L, D)', text: 'A full day at sea with all meals on board\nOptional: the spa, the waterslide park and the Zodiac theatre shows\nRock climbing wall and the sports deck through the afternoon\nDinner and a show before the last night on board', hotel: 'Genting Dream Cruise', highlights: ['A full day at sea with all meals on board', 'Optional: the spa, the waterslide park and the Zodiac theatre shows', 'Rock climbing wall and the sports deck through the afternoon'] },
    { title: 'Day 6: Back in port and departure (B)', text: 'Breakfast on board and disembark at the Marina Bay Cruise Centre\nPrivate sedan transfer to Changi Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast on board and disembark at the Marina Bay Cruise Centre', 'Private sedan transfer to Changi Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; port charges and gratuities; speciality restaurants and paid decks on board; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '#' },
  { label: 'Singapore', href: '/asien/singapore' },
  { label: detail.title }
];

export const singaporeGentingDreamCruiseBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const singaporeGentingDreamCruiseProduct = {
  slug: detail.slug,
  places: ['Singapore', 'Sentosa', 'Genting Dream'],
  href: `/asien/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 6,
  stops: 2,
  hotels: 2,
  cities: 2,
  activities: 4,
  transfers: 8,
  meals: 9,
  price: detail.price,
  images: cardImages
};
