// Singapore Short Break with Night Safari. Facts from the source itinerary, copy written fresh, INR pricing.
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
  img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
  img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg'),
  img('nwaa7uo4j6hcpv64q2eqa76nlf2e_Tram%20Experience%20-%20Chawang.jpg'),
  img('cgx6ab1cspd7wu0e04jze3dzbibk_singapore_night_safari.jpg')
];

const stops = [
  {
    letter: 'A',
    name: 'Singapore',
    dayLabel: 'Day 1 to 4',
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
      ],
      2: [
        img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        img('mmto1hk2nujlkltfsadj9s2ch3j9_1563452033_shutterstock_208160683_(1).jpg'),
        img('etwjtvxjtctcyj8zmdmmtz5rnff7_1563607619_shutterstock_1155676858.jpg'),
        img('xkc5gws4qd4uax4hvxwihi35fv35_1563619864_shutterstock_793620280.jpg')
      ],
      3: [
        img('esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.jpg'),
        img('5ny753dccex42fsfmdxfhlzlfvah_1626351333_shutterstock_302633321.jpg'),
        img('2snnye807m5tkqj35nzmqanms5lt_AIP_EDI_SevenOne-Films%20Madame%20Tussauds%20SG.jpg'),
        img('d2ireontm3lkjbttsal3c26gj1ud_mdmtussuadssg1.jpg')
      ],
      4: [
        img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg'),
        img('racpxlwl27wsdxri9w48pokm2qxx_shutterstock_1089358058.jpg'),
        img('9csawde8nrswwc2d4xj3r8b7pr37_shutterstock_744127837.jpg'),
        img('v60hqsq1le1ub9ibteulgapdl3s6_shutterstock_157315883.jpg')
      ]
    },
    bullets: [
      `${DAY_MARK}Day 1 · Arrival and the Night Safari`,
      'Arrival at Changi Airport and private sedan transfer to Hotel Boss',
      'Check in and take a couple of hours to settle',
      'Shared transfer out to Mandai for the Night Safari and its tram ride',
      'Back in town for late supper on Beach Road near the hotel',
      `${DAY_MARK}Day 2 · City tour and a free afternoon`,
      'Breakfast, then shared transfer for the half day city tour',
      'Merlion Park, Marina Bay, Chinatown and the civic district',
      'Afternoon at your own pace around Bugis and Orchard Road',
      'Optional: the observation wheel at Marina Bay or a river bumboat at dusk',
      `${DAY_MARK}Day 3 · Cable car and Madame Tussauds`,
      'Breakfast, then shared transfer to Mount Faber station',
      'Two way cable car sky pass across the harbour to Sentosa',
      'Madame Tussauds with the Spirit of Singapore boat ride and a digital photo',
      'Return shared transfer to the hotel in the evening',
      `${DAY_MARK}Day 4 · Departure`,
      'Breakfast and check out',
      'Private sedan transfer to Changi Airport for your flight home'
    ],
    accommodation: {
      name: 'Hotel Boss, Singapore, Singapore',
      description: '3 nights · Breakfast included · Standard room · 4★ · Hotel Boss on Victoria Street, a short walk from Lavender MRT',
      images: [
        img('pjmg6xf7rn55b3z9nxpky6fwvgc3_598f5628f2ee11ec99c20a58a9feac02.webp'),
        img('21x1tj2evqvzvrmb0n5nb2av5hum_hotel-boss_170715588819.jpg'),
        img('577998c27jndkvymhawisavqlsck_hotel-boss_170715588612.jpg'),
        img('0d2vte6eu0u34v25zwmwud1upd4w_hotel-boss_170715588613.jpg'),
        img('gdq4vgddhs1sqypdbjmzmy6didq2_hotel-boss_170715588923.jpg'),
        img('cvy8bi47u4jex9jhtcrmfpl3si2m_59253197.jpg'),
        img('w3iem4ga6oo4m4km5z4qn85r370k_hotel-boss_170715588611.jpg'),
        img('tmtydxquh0t7plr4x01b33ey4fl6_hotel-boss_170715588922.jpg'),
        img('jvzlciq77ci6b5zp77xnqtzfjeya_a11436f1.webp'),
        img('4u6if0on535hptr5ukym8tk58xk3_52ac27b9ee8a956a5ba4a999ee4c04e7-hotel-boss.webp'),
        img('oqoo40612caxvgcxj8xniwwd5ph2_hotel-boss_170715589542.jpg'),
        img('4jrvjfxqplgys4di202cqt5loavf_hotel-boss_17071558832.jpg'),
        img('q79mvztbyp82o0jtt488n5uqrncz_hotel-boss_170715588921.jpg')
      ]
    },
    activities: [
      {
        name: 'Night Safari with Tram Ride',
        day: 1,
        optional: false,
        image: img('nwaa7uo4j6hcpv64q2eqa76nlf2e_Tram%20Experience%20-%20Chawang.jpg'),
        description: 'A tram circuit through the Mandai reserve after dark, past elephants, hyenas, leopards and the nocturnal houses.'
      },
      {
        name: 'Half Day Singapore City Tour',
        day: 2,
        optional: false,
        image: img('sg4ddz5rvxqvcs9l5czm5ki98dja_shutterstock_202415776.jpg'),
        description: 'A shared coach tour of Merlion Park, Marina Bay, Chinatown and the old civic quarter with a local guide.'
      },
      {
        name: 'Singapore Cable Car Sky Pass',
        day: 3,
        optional: false,
        image: img('esjngkpne55nyj810xg5a84f14mt_dl.beatsnoop.com-3000-MEhkSg8mHK.jpg'),
        description: 'A round trip between Mount Faber, HarbourFront and Sentosa with the harbour and the islands below.'
      },
      {
        name: 'Madame Tussauds Singapore',
        day: 3,
        optional: false,
        image: img('2snnye807m5tkqj35nzmqanms5lt_AIP_EDI_SevenOne-Films%20Madame%20Tussauds%20SG.jpg'),
        description: 'Wax figures, the Spirit of Singapore boat ride through the city\'s history and a digital photo to take home.'
      },
      {
        name: 'Singapore Flyer',
        day: 2,
        optional: true,
        image: img('mmto1hk2nujlkltfsadj9s2ch3j9_1563452033_shutterstock_208160683_(1).jpg'),
        description: 'A half hour turn on the observation wheel at Marina Bay, with the Strait and the city laid out beneath you.'
      }
    ],
    program: {
      name: 'A first look at the city',
      description: 'Three nights on the edge of Kampong Glam with the Night Safari, a city tour and the Sentosa cable car in easy reach.',
      image: img('wl4yhpa9oqirlfuc1dym9j45yfka_shutterstock_1089570818.jpg')
    }
  }
];

const detail = {
  slug: 'singapore-short-break-with-night-safari',
  ctaHref: '/l/singapore/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Singapore Short Break with Night Safari',
  alt: 'The Merlion fountain with the Marina Bay Sands towers behind it in Singapore',
  days: '4 days / 3 nights',
  stations: '1 stops',
  transport: 'Private airport transfers with shared coaches for tours and tickets',
  tag: 'Short trips',
  tags: ['Short trips', 'City break'],
  price: 57950,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Singapore', 'Sentosa'],
  stats: { days: 4, cities: 1, hotels: 1, activities: 4, transfers: 8 },
  gallery: heroGallery,
  services: [
    ['1 hotel', 'Accommodation'],
    ['4 experiences', 'Activities'],
    ['8 transfers', 'Transport'],
    ['3 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Nisha Rao',
    image: '/experts/riya.webp',
    role: 'Singapore expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Four days is enough for a first look at Singapore if you keep it to the city, the cable car and one wildlife evening.',
    quoteMore: 'Hotel Boss sits a short walk from Lavender MRT, so skip taxis and use the trains. Three days of travel cost less than one airport cab.',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: 'A four day first look at Singapore. Wildlife by tram on arrival night, a half day city tour with a free afternoon, then the Sentosa cable car and Madame Tussauds before the flight home.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'Included: 3 nights at Hotel Boss with daily breakfast; Night Safari with tram ride; half day city tour; two way cable car sky pass; Madame Tussauds with a digital photo; 8 private and shared transfers.',
  intro2: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; entry to sights not named above; personal expenses.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival and the Night Safari (Arrival)', text: 'Arrival at Changi Airport and private sedan transfer to Hotel Boss\nCheck in and take a couple of hours to settle\nShared transfer out to Mandai for the Night Safari and its tram ride\nBack in town for late supper on Beach Road near the hotel', hotel: 'Hotel Boss, Singapore', highlights: ['Arrival at Changi Airport and private sedan transfer to Hotel Boss', 'Check in and take a couple of hours to settle', 'Shared transfer out to Mandai for the Night Safari and its tram ride'] },
    { title: 'Day 2: City tour and a free afternoon (B)', text: 'Breakfast, then shared transfer for the half day city tour\nMerlion Park, Marina Bay, Chinatown and the civic district\nAfternoon at your own pace around Bugis and Orchard Road\nOptional: the observation wheel at Marina Bay or a river bumboat at dusk', hotel: 'Hotel Boss, Singapore', highlights: ['Breakfast, then shared transfer for the half day city tour', 'Merlion Park, Marina Bay, Chinatown and the civic district', 'Afternoon at your own pace around Bugis and Orchard Road'] },
    { title: 'Day 3: Cable car and Madame Tussauds (B)', text: 'Breakfast, then shared transfer to Mount Faber station\nTwo way cable car sky pass across the harbour to Sentosa\nMadame Tussauds with the Spirit of Singapore boat ride and a digital photo\nReturn shared transfer to the hotel in the evening', hotel: 'Hotel Boss, Singapore', highlights: ['Breakfast, then shared transfer to Mount Faber station', 'Two way cable car sky pass across the harbour to Sentosa', 'Madame Tussauds with the Spirit of Singapore boat ride and a digital photo'] },
    { title: 'Day 4: Departure (B)', text: 'Breakfast and check out\nPrivate sedan transfer to Changi Airport for your flight home', hotel: 'Departure', highlights: ['Breakfast and check out', 'Private sedan transfer to Changi Airport for your flight home'] }
  ],
  outro: 'Not included: international flights; visa charges; travel insurance; lunches and dinners; entry to sights not named above; personal expenses.'
};

const crumbs = [
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Asia', href: '#' },
  { label: 'Singapore', href: '/asia/singapore' },
  { label: detail.title }
];

export const singaporeShortBreakNightSafariBySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const singaporeShortBreakNightSafariProduct = {
  slug: detail.slug,
  places: ['Singapore', 'Sentosa'],
  href: `/asia/${detail.slug}`,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: 4,
  stops: 1,
  hotels: 1,
  cities: 1,
  activities: 4,
  transfers: 8,
  meals: 3,
  price: detail.price,
  images: cardImages
};
