// Singapore Couples Special with Jewel Changi. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [
  img('4gp8m32efnb38q8qauueycr9ylza_shutterstock_561308047.jpg'),
  img('ese14t6vvz3v8df8lg6p1hcz4wf0_shutterstock_1112004536.jpg'),
  img('5f3dno722k7csmmvpmfhq6v4ufbo_shutterstock_1402131020.jpg'),
  img('o08lx9kwhzu3m84k56oqeffm92pg_shutterstock_695806240.jpg'),
  img('3wpeq6heqf71alf5cb5nbfqdso2p_shutterstock_177520130.jpg'),
  img('g34ej8vssnsu2mbbzlgmm8rs5wqr_shutterstock_785300983.jpg'),
  img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
  img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
  img('o2rx8siq18hn1qktpdgrl3mm889i_shutterstock_702157654.jpg'),
  img('h0r525o9avdbe7nm839mrkczy16p_shutterstock_1153538392.jpg')
];
// Listing-card photos: kept unique across every trip of this country so no two cards repeat a shot.
const cardImages = [
  img('4gp8m32efnb38q8qauueycr9ylza_shutterstock_561308047.jpg'),
  img('53l8vi1odixnhugeswou8a3koxc8_Chinatown-6.webp'),
  img('fwjl5u4s5wjrk1pa09pcaaoc4xhi_Chinatown%20Heritage%20Centre,%20Singapore-1.jpg'),
  img('1wfaiw5qbbgxv8qfwthfsr7zrasf_2p1hfg3rpdci9zbqm9hkfljq3014_Downpic.cc-15918414.webp')
];

const stops = [
  {
    letter: 'A',
    name: 'Singapore',
    dayLabel: 'Day 1 to 5',
    images: [
      img('4gp8m32efnb38q8qauueycr9ylza_shutterstock_561308047.jpg'),
      img('3kicse3qojgtvpf5e4aqzvskrzu4_shutterstock_203804005.jpg'),
      img('ese14t6vvz3v8df8lg6p1hcz4wf0_shutterstock_1112004536.jpg'),
      img('uj4mfpnza7hzznm3ek5wzhawzdyl_shutterstock_1093285319.jpg')
    ],
    dayImages: {
      1: [
        img('53l8vi1odixnhugeswou8a3koxc8_Chinatown-6.webp'),
        img('fwjl5u4s5wjrk1pa09pcaaoc4xhi_Chinatown%20Heritage%20Centre,%20Singapore-1.jpg'),
        img('1wfaiw5qbbgxv8qfwthfsr7zrasf_2p1hfg3rpdci9zbqm9hkfljq3014_Downpic.cc-15918414.webp'),
        img('cgx6ab1cspd7wu0e04jze3dzbibk_singapore_night_safari.jpg')
      ],
      2: [
        img('qeze4csghbtda4u7a06o23o1bk03_esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.webp'),
        img('xfp5lyaq42tsz72i4hwz5x1q8bhe_SkyHelixSentosaSingaporeTickets-KlookIndia.jpg'),
        img('4wa0ej6qetvrdw5he5icu3r2j8ex_8akrp7bqdxkazh2wsovbwxoba6si_Kiosk-View.webp'),
        img('o7l8d14slyku6b0l66mcaq4rfe0v_SDC_NDP_Hydrodash_Image.jpg')
      ],
      3: [
        img('0gi66296edtp4tzqfz22kn872wlo_kvAcbFL6wD3dKb8Mm8bjw6.webp'),
        img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        img('mmto1hk2nujlkltfsadj9s2ch3j9_1563452033_shutterstock_208160683_(1).jpg'),
        img('etwjtvxjtctcyj8zmdmmtz5rnff7_1563607619_shutterstock_1155676858.jpg')
      ],
      4: [
        img('bgfamfvg2zse2dbm7amtl5vhare3_Marina%20Bay%20Skypark-5.webp'),
        img('h9txhlgrjmsjumkqyjl8jm64fc8d_shutterstock_2275983891.jpg'),
        img('2jism7nc3hyazp66hu7b8dwx3psk_Coastal%20Walk-2.webp'),
        img('o6c2ajq6f3lzv32p5ss3gmyl7hfe_Labrador%20Park-1.jpg')
      ],
      5: [
        img('gohc2bjkge7gzygvt204chp22mve_Canopy%20Park-1.jpg'),
        img('1k19tn1dlyheh0cggct0y7ebeviw_LADIES_CHANGI%20EXPERIENCE%20STUDIO_1585479269000.jpg'),
        img('3tibk1f0xsumwunsg7vqyqx1aqxn_shutterstock_1429314002%20-%20Copy%20(2).jpg'),
        img('c1k8lw41jrq7tgkm8k31sbskxwxz_4fb300443568b28c81dd5679e92ea311-jewel%20chang8%20(1).jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival, Chinatown and the Night Safari`,
      'Arrival at Changi Airport and private sedan transfer to the V Hotel Lavender',
      'Shared transfer to the Chinatown Heritage Centre and its restored shophouse rooms',
      'Evening shared transfer to Mandai for the Night Safari with a tram ride',
      'Supper near Lavender MRT when you get back',
      `${DAY_MARK}Day 2 · Sentosa with SkyHelix and HydroDash`,
      'Breakfast, then shared transfer to Mount Faber for the cable car',
      'Two way sky pass across to Sentosa with the harbour below',
      'SkyHelix for an open air seat 79 metres up, then HydroDash on the water',
      'Wings of Time on Siloso beach to close the day',
      `${DAY_MARK}Day 3 · ArtScience Museum and the river`,
      'Breakfast, then shared transfer to the ArtScience Museum',
      'Future World with its light rooms and the digital waterfall',
      'Half day city tour through Merlion Park, Chinatown and the civic district',
      'Singapore River Cruise from Clarke Quay as the lights come on',
      `${DAY_MARK}Day 4 · SkyPark, Labrador Park and Harry Potter`,
      'Breakfast, then shared transfer to Marina Bay Sands',
      'SkyPark on level 57 for the view over the bay and the Gardens',
      'Guided coastal walk at Labrador Nature Park along the old sea wall',
      'Harry Potter Visions of Magic in the afternoon, an indoor walkthrough',
      `${DAY_MARK}Day 5 · Jewel Changi and departure`,
      'Breakfast and check out',
      'Private sedan transfer to Changi Airport with time to spare',
      'Changi Experience Studio and the Canopy Park bridges at Jewel',
      'Last look at the Rain Vortex before your flight home'
    ],
    accommodation: {
      name: 'V Hotel Lavender, Singapore',
      description: '4 nights · Breakfast included · Standard room · 4★ · V Hotel Lavender, directly above Lavender MRT with a 24 hour food court below',
      images: [
        img('j8o7tfdhom6yhcaor8fir2w9gl6s_209603602.jpg'),
        img('pesqek03klzhgqt5kdcjt073yary_209610058.jpg'),
        img('1psqttgyuk0q66rgfqh234p2zxyp_209609454.jpg'),
        img('rolpgn7hbfms44asi97zxle3i59l_209601755.jpg'),
        img('w5r93bqqwpjag5r73g8ukubabvt6_209612073.jpg'),
        img('o7v5g51np90lbkssbv6z3zicd42g_209611585.jpg'),
        img('nyms6y3qrkhf2dldzoozum0jywts_213617030.jpg'),
        img('ok7tlwgazajxun1bh8s3qqltkhte_213617039.jpg'),
        img('p7xtn6kkkxjg8v4qr4qlcagfpeci_19164345.jpg'),
        img('id9ynzb49t54n6zgoab7ng1st1qd_58982106.jpg'),
        img('w0q0iv9f2i13re90oskw3cekuprk_209612086.jpg')
      ]
    },
    activities: [
      {
        name: 'Chinatown Heritage Centre',
        day: 1,
        optional: false,
        image: img('53l8vi1odixnhugeswou8a3koxc8_Chinatown-6.webp'),
        description: 'Three restored shophouses on Pagoda Street, furnished as the cubicle homes of early Chinese migrants to Singapore.'
      },
      {
        name: 'Night Safari with Tram Ride',
        day: 1,
        optional: false,
        image: img('1wfaiw5qbbgxv8qfwthfsr7zrasf_2p1hfg3rpdci9zbqm9hkfljq3014_Downpic.cc-15918414.webp'),
        description: 'A tram circuit through the Mandai park after dark, past the elephants, hyenas and leopards.'
      },
      {
        name: 'Singapore Cable Car Sky Pass',
        day: 2,
        optional: false,
        image: img('qeze4csghbtda4u7a06o23o1bk03_esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.webp'),
        description: 'A two way ride between Mount Faber, HarbourFront and Sentosa, high above the working harbour.'
      },
      {
        name: 'SkyHelix Sentosa',
        day: 2,
        optional: false,
        image: img('xfp5lyaq42tsz72i4hwz5x1q8bhe_SkyHelixSentosaSingaporeTickets-KlookIndia.jpg'),
        description: 'An open air gondola that rises 79 metres above Sentosa and turns slowly for a full view of the southern islands.'
      },
      {
        name: 'HydroDash',
        day: 2,
        optional: false,
        image: img('o7l8d14slyku6b0l66mcaq4rfe0v_SDC_NDP_Hydrodash_Image.jpg'),
        description: 'A floating obstacle course off Palawan beach with climbing walls, slides and trampolines on the water.'
      },
      {
        name: 'Wings of Time',
        day: 2,
        optional: false,
        image: img('9qh205t74nx95bmnuycnqgtu525x_Wings%20of%20Time-4.webp'),
        description: 'A night show on Siloso beach built from water screens, lasers, flame jets and a short film.'
      },
      {
        name: 'ArtScience Museum Future World',
        day: 3,
        optional: false,
        image: img('0gi66296edtp4tzqfz22kn872wlo_kvAcbFL6wD3dKb8Mm8bjw6.webp'),
        description: 'The permanent teamLab exhibition at Marina Bay Sands, with light installations and a digital waterfall room.'
      },
      {
        name: 'Half Day Singapore City Tour',
        day: 3,
        optional: false,
        image: img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        description: 'A shared coach tour of Merlion Park, Marina Bay, Chinatown and the colonial civic district.'
      },
      {
        name: 'Singapore River Cruise',
        day: 3,
        optional: false,
        image: img('wcyy2iu4rnyc9ohp7ws8ge7nvyn6_1n0jodb9dma51ahhl0lp2qndx4bc_shutterstock_608357039.webp'),
        description: 'A bumboat from Clarke Quay past the godowns and bridges of the old trading river, about forty minutes.'
      },
      {
        name: 'Marina Bay Sands SkyPark',
        day: 4,
        optional: false,
        image: img('bgfamfvg2zse2dbm7amtl5vhare3_Marina%20Bay%20Skypark-5.webp'),
        description: 'The level 57 observation deck looking down on the bay, the Gardens and the financial district.'
      },
      {
        name: 'Guided Coastal Walk at Labrador Park',
        day: 4,
        optional: false,
        image: img('2jism7nc3hyazp66hu7b8dwx3psk_Coastal%20Walk-2.webp'),
        description: 'A guided walk at Labrador Nature Park along the old sea wall and gun batteries, with the Strait on one side.'
      },
      {
        name: 'Harry Potter Visions of Magic',
        day: 4,
        optional: false,
        image: img('gxhmmvjx6ofzj4wvzimcov5wo9r4_Harry%20Potter%20Vision%20of%20Magic-10.jpg'),
        description: 'An indoor walkthrough of nine art installations drawn from the films, at Resorts World Sentosa.'
      },
      {
        name: 'Jewel Changi Attractions',
        day: 5,
        optional: false,
        image: img('gohc2bjkge7gzygvt204chp22mve_Canopy%20Park-1.jpg'),
        description: 'The Changi Experience Studio and Canopy Park bridges beside the Rain Vortex, inside the airport itself.'
      }
    ],
    program: {
      name: 'Heritage, heights and the airport garden',
      description: 'Four nights above an MRT station, with a heritage museum, two island viewpoints, a river cruise and the Jewel canopy on the last morning.',
      image: img('4gp8m32efnb38q8qauueycr9ylza_shutterstock_561308047.jpg')
    }
  }
];

const detail = {
  slug: 'singapore-couples-special-with-jewel-changi',
  ctaHref: '/l/singapore/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Singapore Couples Special with Jewel Changi',
  alt: 'The Rain Vortex waterfall inside Jewel Changi Airport in Singapore',
  days: '5 days / 4 nights',
  stations: '1 stops',
  transport: 'Private airport transfers with shared coaches for tours and tickets',
  tag: 'Honeymoon',
  tags: ['Honeymoon', 'Culture'],
  price: 71345,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Singapore', 'Chinatown', 'Sentosa', 'Marina Bay', 'Changi'],
  stats: { days: 5, cities: 1, hotels: 1, activities: 13, transfers: 15 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['13 experiences', 'Activities'],
    ['15 transfers', 'Transport'],
    ['4 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Nisha Rao',
    image: '/experts/riya.webp',
    role: 'Singapore expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'This is the fullest Singapore we sell. Thirteen experiences in four nights, and still a river cruise and a coastal walk in there.',
    quoteMore: 'Do the Chinatown Heritage Centre before the Night Safari on day one. It is indoors, it is air conditioned and it fills the slow afternoon after a morning flight.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'Five busy days for two. Chinatown heritage and the Night Safari on arrival, a Sentosa day with SkyHelix and HydroDash, the ArtScience Museum with a river cruise, the SkyPark with a coastal walk and Harry Potter, then Jewel Changi on the way out.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 4 nights at the V Hotel Lavender with daily breakfast; Chinatown Heritage Centre; Night Safari with tram ride; two way cable car sky pass; SkyHelix Sentosa; HydroDash; Wings of Time; ArtScience Museum Future World; half day city tour; Singapore River Cruise; Marina Bay Sands SkyPark; guided coastal walk at Labrador Park; Harry Potter Visions of Magic; Jewel Changi attractions; 15 private and shared transfers.',
  intro2: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; attractions not named above; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival, Chinatown and the Night Safari (Arrival)', text: 'Arrival at Changi Airport and private sedan transfer to the V Hotel Lavender\nShared transfer to the Chinatown Heritage Centre and its restored shophouse rooms\nEvening shared transfer to Mandai for the Night Safari with a tram ride\nSupper near Lavender MRT when you get back', hotel: 'V Hotel Lavender', highlights: ['Arrival at Changi Airport and private sedan transfer to the V Hotel Lavender', 'Shared transfer to the Chinatown Heritage Centre and its restored shophouse rooms', 'Evening shared transfer to Mandai for the Night Safari with a tram ride'] },
    { title: 'Day 2: Sentosa with SkyHelix and HydroDash (B)', text: 'Breakfast, then shared transfer to Mount Faber for the cable car\nTwo way sky pass across to Sentosa with the harbour below\nSkyHelix for an open air seat 79 metres up, then HydroDash on the water\nWings of Time on Siloso beach to close the day', hotel: 'V Hotel Lavender', highlights: ['Breakfast, then shared transfer to Mount Faber for the cable car', 'Two way sky pass across to Sentosa with the harbour below', 'SkyHelix for an open air seat 79 metres up, then HydroDash on the water'] },
    { title: 'Day 3: ArtScience Museum and the river (B)', text: 'Breakfast, then shared transfer to the ArtScience Museum\nFuture World with its light rooms and the digital waterfall\nHalf day city tour through Merlion Park, Chinatown and the civic district\nSingapore River Cruise from Clarke Quay as the lights come on', hotel: 'V Hotel Lavender', highlights: ['Breakfast, then shared transfer to the ArtScience Museum', 'Future World with its light rooms and the digital waterfall', 'Half day city tour through Merlion Park, Chinatown and the civic district'] },
    { title: 'Day 4: SkyPark, Labrador Park and Harry Potter (B)', text: 'Breakfast, then shared transfer to Marina Bay Sands\nSkyPark on level 57 for the view over the bay and the Gardens\nGuided coastal walk at Labrador Nature Park along the old sea wall\nHarry Potter Visions of Magic in the afternoon, an indoor walkthrough', hotel: 'V Hotel Lavender', highlights: ['Breakfast, then shared transfer to Marina Bay Sands', 'SkyPark on level 57 for the view over the bay and the Gardens', 'Guided coastal walk at Labrador Nature Park along the old sea wall'] },
    { title: 'Day 5: Jewel Changi and departure (B)', text: 'Breakfast and check out\nPrivate sedan transfer to Changi Airport with time to spare\nChangi Experience Studio and the Canopy Park bridges at Jewel\nLast look at the Rain Vortex before your flight home', hotel: 'Departure', highlights: ['Breakfast and check out', 'Private sedan transfer to Changi Airport with time to spare', 'Changi Experience Studio and the Canopy Park bridges at Jewel'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; attractions not named above; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '#' },
  { label: 'Singapore', href: '/asia/singapore' },
  { label: detail.title }
];

export const singaporeCouplesSpecialJewelBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const singaporeCouplesSpecialJewelProduct = {
  slug: detail.slug,
  places: ['Singapore', 'Chinatown', 'Sentosa', 'Marina Bay', 'Changi'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 5,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 13,
  transfers: 15,
  meals: 4,
  price: detail.price,
  images: cardImages
};
