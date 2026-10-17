// Sri Lankan Splendour: Kandy, Nuwara Eliya and Bentota in Five Days. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
  img('nblwv1u3cze5qug1glqs5ltuux5m_shutterstock_776788237%20(1).jpg'),
  img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg'),
  img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg'),
  img('msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg'),
  img('67d977k0i9xozfxqy6fgrtjwkh7c_shutterstock_599417123.jpg'),
  img('mu8ff5vhgtwgeq37hyjyxygaxvin_shutterstock_1481861966.jpg'),
  img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
  img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg'),
  img('ehxgq7xsvpq2xfzcpi1774ppfjgw_shutterstock_1019478988.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
  img('69icgkwx04cbxoc7c7omilub9dyp_shutterstock_776788267.jpg'),
  img('trgusphlvg32gi2ffqzw739p9j5m_shutterstock_313315721.jpg'),
  img('pbmekt55cowonhomw3quj8cyl7f7_download.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Kandy',
    dayLabel: 'Day 1',
    images: [
      img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
      img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
      img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg'),
      img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg')
    ],
    dayImages: {
      1: [
        img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
        img('m48kogtsywab2e7qszmsvhxwmz7o_shutterstock_332215046.jpg'),
        img('astz9jiv9qvj1d23uzrvw7rq6f77_shutterstock_728611555%20(1).jpg'),
        img('xxsv4osseuf7cuz4pdsz0a53o0xb_shutterstock_59949592.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival in Colombo and on to Kandy`,
      'Arrival at Bandaranaike International and private transfer into the city',
      'Galle Face Green, the Gangaramaya temple and the Fort',
      'The Pinnawala elephant sanctuary on the way inland',
      'Check in above Kandy for the night'
    ],
    accommodation: {
      name: 'Hotel Topaz, Kandy',
      description: '1 night · Breakfast · Standard room · 3★ · Hilltop hotel with a pool looking down on Kandy',
      images: [
        img('mbpjmsh3aq3heonxxlx8ydov7xgw_156821491.jpg'),
        img('o2q9y59eydcj6gk7a9jvrj6kw8n8_156821508.jpg'),
        img('ij26ewlj4v6jtrp9ghls47w8i4gv_tourmaline-presidential-suite-ga.jpg'),
        img('m3ryz4pkodldmyrfklab9pktn168_green-floor-rooms-gallery-large.jpg'),
        img('tc7iiyfhn6zou9lvnzlsjkmifze0_151327149.jpg'),
        img('aht7qju8gmwqyjmyjlw13u2bndq6_hotel-topaz.jpg'),
        img('rm69iq6vgzn90nrzks9f0i4i60rm_94657914.jpg'),
        img('9jiou2bgvb3rhb8fu1owzt0e850z_211310950.jpg'),
        img('nrwtzsqopk64zb0xbtci43si35a2_156832471.jpg'),
        img('xhmzh967bizskdkbw9m992q1xqw8_suite-room%20(1).jpg'),
        img('q0z2dadq1xehz61wmgp8skjmwykg_94643845.jpg')
      ]
    },
    activities: [
      {
        name: 'Sightseeing tour of Colombo',
        day: 1,
        optional: false,
        image: img('zr4plsxc2ocli0nh7fm74r5c2pct_shutterstock_1084356770.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple and the Fort district on the way out of the capital.'
      },
      {
        name: 'Pinnawala Elephant Orphanage',
        day: 1,
        optional: false,
        image: img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg'),
        description: 'A stop on the way up from the airport to watch the resident herd bathe in the Maha Oya river and feed at the sanctuary.'
      }
    ],
    program: {
      name: 'Kandy',
      description: 'One night above Kandy with a tour of Colombo on the way from the airport and the elephants of Pinnawala.',
      image: img('i9hx07ewmkeyfiem0ium84uig9h3_shutterstock_2259743519.jpg')
    }
  },
  {
    letter: 'B',
    name: 'Nuwara Eliya',
    dayLabel: 'Day 2',
    images: [
      img('oewqep60satxoqa8xc1sg0uolit2_shutterstock_159551120.jpg'),
      img('nblwv1u3cze5qug1glqs5ltuux5m_shutterstock_776788237%20(1).jpg'),
      img('1kb7guo5ceqcpw2m5ghs7db8hnrr_shutterstock_229257724.jpg'),
      img('8pngc3kvspg8528bwbrbu6t8b5gz_shutterstock_1423148210.jpg')
    ],
    dayImages: {
      2: [
        img('69icgkwx04cbxoc7c7omilub9dyp_shutterstock_776788267.jpg'),
        img('trgusphlvg32gi2ffqzw739p9j5m_shutterstock_313315721.jpg'),
        img('pbmekt55cowonhomw3quj8cyl7f7_download.jpg'),
        img('wzqw02ope6gs0imna002q9au7guc_db.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 2 · Into the tea country`,
      'Breakfast and a transfer up to Nuwara Eliya',
      'A tea plantation and factory visit on the climb',
      'Gregory Lake, Victoria Park and the colonial town',
      'Check in among the tea bushes'
    ],
    accommodation: {
      name: 'The Tea Garden, Nuwara Eliya',
      description: '1 night · Breakfast · Standard room · 3★ · Hill country hotel among the tea bushes above Nuwara Eliya',
      images: [
        img('wnrqjj1kgpsms3x3mo1i1f82q2jv_658823789.jpg'),
        img('madiz8p8q764vx4r6cjmlfley0y6_86496619.jpg'),
        img('k2x0tgqsws9eal2g9ukv23ia5kb7_86496613.jpg'),
        img('5k40h2hx9uc5rfccapv0zjerxu2z_86496610.jpg'),
        img('o6xeiimdpeaspmksnnmgv0ke40da_658823823.jpg'),
        img('wlzsbbru62qa5z1qa9zng3r4pjte_86496618.jpg'),
        img('r6xn7phppyiqphggmmgq3x2lt5ha_86496611.jpg'),
        img('h4yfgbo48moql2dtuuzrnepcpiha_86496606.jpg')
      ]
    },
    activities: [
      {
        name: 'Nuwara Eliya sightseeing and tea plantation',
        day: 2,
        optional: false,
        image: img('69icgkwx04cbxoc7c7omilub9dyp_shutterstock_776788267.jpg'),
        description: 'Gregory Lake, Victoria Park, the colonial town and a tea plantation and factory.'
      }
    ],
    program: {
      name: 'Nuwara Eliya',
      description: 'Up into the tea country for a night among the bushes with a tour of the town and a plantation.',
      image: img('oewqep60satxoqa8xc1sg0uolit2_shutterstock_159551120.jpg')
    }
  },
  {
    letter: 'C',
    name: 'Bentota',
    dayLabel: 'Day 3',
    images: [
      img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg'),
      img('pcjemu2ghnc8aboree6yetpmopu4_shutterstock_310739126.jpg'),
      img('icpc46stnrdl7rvfr6s6frrqg8by_shutterstock_761779111.jpg'),
      img('zw5r6r0mw71w1qm1zcqagauaykil_shutterstock_1296340636.jpg')
    ],
    dayImages: {
      3: [
        img('a3ig918zw08fceslnfbk15p9xyz5_shutterstock_1503294827%20(1).jpg'),
        img('2kyg08hfs2xevolr6axgk0fpxg9d_download.jpg'),
        img('c7u7sw5itk8w44836ru99borfsb0_shutterstock_1503294815%20(1).jpg'),
        img('1je58tgjvl77ti1pwfwdbby10w15_Mirissa%20Beach.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 3 · Down to the coast via Mirissa`,
      'Breakfast and a long transfer down from the hills',
      'A stop at Mirissa beach and Coconut Tree Hill',
      'The Kosgoda turtle hatchery on the way to Bentota',
      'Check in by the sea'
    ],
    accommodation: {
      name: 'Laya Beach, Bentota',
      description: '1 night · Breakfast · Standard room · 3★ · Beachfront hotel at Wadduwa on the way to Bentota',
      images: [
        img('cjonkt9ga9m8ejicgzs3jwkz9fz2_d01368b4_z.png'),
        img('uoub0u4dkxuxkhrkoxihleb1zs2e_cd46f354_z.png'),
        img('jdht879wjbtdd43yxvtm5gl5gll4_508118998.png'),
        img('ii54wo0kqef7gsbya9a0jcg3i5or_de4f9285_z.png'),
        img('w7u1zj9rk9jkn6a4vm5mmup4x0ov_e007a285_z.png'),
        img('gxp2x1bmvu8kne1i7xp9vb2gg5zh_c309adf0_z.png'),
        img('ma9r2lj70i4swt7fw5k8rra5la98_9e2c1e41_z.png'),
        img('pt8pmhk0lpcf72xg6lqfx4t67jwm_9bcac2e7_z.png'),
        img('tedb4ph64gvxhovb86j8wb60rmll_586408e8_z.png'),
        img('zg96i0qe51ltmkcq88robilk8ehb_6aee2531_z.png'),
        img('hhm0h1x1x4ib6c5adgxuv963gmcz_497116361.png'),
        img('9eeddkt0w075dhw3ovczi95e8h1o_6eaf2f23_z.png')
      ]
    },
    activities: [
      {
        name: 'Bentota sightseeing tour',
        day: 3,
        optional: false,
        image: img('a3ig918zw08fceslnfbk15p9xyz5_shutterstock_1503294827%20(1).jpg'),
        description: 'The Kosgoda turtle hatchery, the river mouth and the beach.'
      }
    ],
    program: {
      name: 'Bentota',
      description: 'Down to the coast with a stop at Mirissa beach and a night by the sea.',
      image: img('4s06umhcj9makfew99mqm4trg4jw_shutterstock_1084600982%20(1).jpg')
    }
  },
  {
    letter: 'D',
    name: 'Colombo',
    dayLabel: 'Day 4 to 5',
    images: [
      img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
      img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
      img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
      img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg')
    ],
    dayImages: {
      4: [
        img('zr4plsxc2ocli0nh7fm74r5c2pct_shutterstock_1084356770.jpg'),
        img('0nkxc8a21w2jesumfci2mqhzd6i9_1580893315_54cbdf66640b94d82466fb02dc6d6a09.jpg'),
        img('kmwpt2e6q1n3i7gsabo6lmkqfqbg_1581756612_shutterstock_1444012382.jpg'),
        img('iqtw45cyy9omran9gplkzv4ynzae_31447619406_5dae3e4f4c_k.jpg')
      ],
      5: [
        img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg'),
        img('5y6t22y99pq5wpo6hqd5ufoo9dm1_shutterstock_327594539.jpg'),
        img('h7z6elelyest4lpjg2bt8ku14s74_shutterstock_717675922.jpg'),
        img('fsc2xfr4oc3o2zq3ryjwkamomks5_shutterstock_582006922.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 4 · Colombo city tour`,
      'Breakfast and a transfer up the coast to Colombo',
      'Galle Face Green and the Gangaramaya temple complex',
      'The Fort district, the Lotus Tower and Pettah market',
      'Your last night in the capital',
      `${DAY_MARK}Day 5 · Departure from Colombo`,
      'Breakfast at the hotel and check out',
      'Private transfer to Bandaranaike International for your flight home'
    ],
    accommodation: {
      name: 'Marine Bay, Colombo',
      description: '1 night · Breakfast · Standard room · 3★ · City hotel a short walk from Galle Face Green',
      images: [
        img('8txcjwxxdspxgpn7p0kuhhlrwvnk_Marine6.jpeg'),
        img('9xn6njie3t3geva5n7l01ik6m6m6_Marine7.jpeg'),
        img('u6iafq8ex6zijlg4b7bgru58q5w3_Marine4.jpeg'),
        img('s4efaq9cjmvpcc073gegj65bak82_Marine8.jpeg'),
        img('h7ji8xax40o5hilnnqodtbvv4k5x_Marine5.jpeg'),
        img('atomh8uas9n9mlk6nmmeh0ftc2hl_Marine3.jpeg'),
        img('dn1q2zxemr2v9idwoabeez5qfmy3_Marine1.jpeg'),
        img('a4ik4sq1rmbwmwwgeh5l9lxscd69_Marine2.jpeg')
      ]
    },
    activities: [
      {
        name: 'Colombo sightseeing tour',
        day: 4,
        optional: false,
        image: img('zr4plsxc2ocli0nh7fm74r5c2pct_shutterstock_1084356770.jpg'),
        description: 'Galle Face Green, the Gangaramaya temple, the colonial Fort district, the Lotus Tower and the floating market at Pettah.'
      }
    ],
    program: {
      name: 'Colombo',
      description: 'A last night in the capital with a tour of its temples, colonial quarter and markets.',
      image: img('m2j7ycxc778t0fn1qzm2a5xoh5jg_shutterstock_387184576.jpg')
    }
  }
];

const detail = {
  slug: 'sri-lankan-splendour-kandy-nuwara-eliya-and-bentota-in-five-days',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Sri Lankan Splendour: Kandy, Nuwara Eliya and Bentota in Five Days',
  alt: 'Tea bushes in neat rows on the hills of Nuwara Eliya',
  days: '5 days / 4 nights',
  stations: '4 stops',
  transport: 'Private air conditioned car with an English speaking chauffeur guide throughout',
  tag: 'Budget',
  tags: ['Budget', 'Nature', 'Short trips'],
  price: 31582,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Kandy', 'Nuwara Eliya', 'Bentota', 'Colombo'],
  stats: { days: 5, cities: 4, hotels: 4, activities: 5, transfers: 7 },
  gallery: heroGallery,
  services: [
    ['4 hotels', 'Accommodation'],
    ['5 experiences', 'Activities'],
    ['7 transfers', 'Transport'],
    ['4 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Aditya',
    image: '/experts/aditya.webp',
    role: 'Sri Lanka expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Kandy, the hills and then the coast. Sri Lanka works best when you let the island cool you down before it warms you up again.',
    quoteMore: 'Carry a light sweater for Nuwara Eliya. It sits at nearly 1,900 metres and evenings are surprisingly chilly even in April.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five quick days across the island on a budget: Colombo and the elephants on the way to Kandy, a night in the tea country, a night by the sea after Mirissa beach, and a last night in Colombo.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights in deluxe class hotels with breakfast daily; private airport transfers and all road travel in an air conditioned car with chauffeur guide; a sightseeing tour of Colombo; the Pinnawala elephant sanctuary; Nuwara Eliya sightseeing and a tea plantation; the Bentota sightseeing tour; the Colombo sightseeing tour.',
  intro2: 'Not included: international flights; Sri Lanka ETA visa fees; lunches and dinners; entrance tickets; travel insurance; optional excursions; tips and personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Colombo and on to Kandy (None)', text: 'Arrival at Bandaranaike International and private transfer into the city\nGalle Face Green, the Gangaramaya temple and the Fort\nThe Pinnawala elephant sanctuary on the way inland\nCheck in above Kandy for the night', hotel: 'Hotel Topaz, Kandy', highlights: ['Arrival at Bandaranaike International and private transfer into the city', 'Galle Face Green, the Gangaramaya temple and the Fort', 'The Pinnawala elephant sanctuary on the way inland'] },
    { title: 'Day 2: Into the tea country (B)', text: 'Breakfast and a transfer up to Nuwara Eliya\nA tea plantation and factory visit on the climb\nGregory Lake, Victoria Park and the colonial town\nCheck in among the tea bushes', hotel: 'The Tea Garden', highlights: ['Breakfast and a transfer up to Nuwara Eliya', 'A tea plantation and factory visit on the climb', 'Gregory Lake, Victoria Park and the colonial town'] },
    { title: 'Day 3: Down to the coast via Mirissa (B)', text: 'Breakfast and a long transfer down from the hills\nA stop at Mirissa beach and Coconut Tree Hill\nThe Kosgoda turtle hatchery on the way to Bentota\nCheck in by the sea', hotel: 'Laya beach', highlights: ['Breakfast and a long transfer down from the hills', 'A stop at Mirissa beach and Coconut Tree Hill', 'The Kosgoda turtle hatchery on the way to Bentota'] },
    { title: 'Day 4: Colombo city tour (B)', text: 'Breakfast and a transfer up the coast to Colombo\nGalle Face Green and the Gangaramaya temple complex\nThe Fort district, the Lotus Tower and Pettah market\nYour last night in the capital', hotel: 'Marine Bay Colombo', highlights: ['Breakfast and a transfer up the coast to Colombo', 'Galle Face Green and the Gangaramaya temple complex', 'The Fort district, the Lotus Tower and Pettah market'] },
    { title: 'Day 5: Departure from Colombo (B)', text: 'Breakfast at the hotel and check out\nPrivate transfer to Bandaranaike International for your flight home', hotel: 'Departure', highlights: ['Breakfast at the hotel and check out', 'Private transfer to Bandaranaike International for your flight home'] }
  ],
  outro: 'Not included: international flights; Sri Lanka ETA visa fees; lunches and dinners; entrance tickets; travel insurance; optional excursions; tips and personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '/asia' },
  { label: 'Sri Lanka', href: '/asia/sri-lanka' },
  { label: detail.title }
];

export const sriLankanSplendourKandyNuwaraEliyaBentotaFiveDaysBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const sriLankanSplendourKandyNuwaraEliyaBentotaFiveDaysProduct = {
  slug: detail.slug,
  places: ['Kandy', 'Nuwara Eliya', 'Bentota', 'Colombo'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 4,
  hotels: 4,
  cities: 4,
  activities: 5,
  transfers: 7,
  meals: 4,
  price: detail.price,
  images: cardImages
};
