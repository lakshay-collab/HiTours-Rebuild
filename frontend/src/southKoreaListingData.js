// South Korea destination landing – same template/data shape as malaysiaListingData (destination = South Korea, continent = Asia).
import { features, planner as egyptPlanner, reviews as egyptReviews, customerReviews as egyptCustomerReviews } from './egyptListingData';
import { southKoreaProducts } from './tours/southKoreaToursData';

const un = (id, w = 1080) => `https://images.unsplash.com/${id}?crop=entropy&cs=srgb&fm=jpg&q=70&w=${w}`;

const IMG = {
  gyeongbokgung: un('photo-1538485399081-7191377e8241'),
  seoulSkyline: un('photo-1517154421773-0529f29ea451'),
  bukchon: un('photo-1548115184-bc6544d06a58'),
  jeju: un('photo-1601622642107-44b6c7f36ba5'),
  busan: un('photo-1538669715315-155098f0fb1d'),
  blossom: un('photo-1522383225653-ed111181a951'),
  lanterns: un('photo-1526481280693-3bfa7568e0f3'),
  hanok: un('photo-1546874177-9e664107314e')
};

export const destination = { name: 'South Korea', continent: 'Asia', primary: ['Seoul', 'Busan', 'Jeju', 'Gyeongju'] };

export const holidaysPath = '/asia/south-korea/holidays';
export const holidaysCrumbs = [{ label: 'Home', to: '/' }, { label: 'South Korea', to: '/asia/south-korea' }, { label: 'South Korea tours & holidays' }];

export const hero = {
  h1: 'South Korea Honeymoons and holidays',
  holidaysH1: 'South Korea tours & holidays',
  styleH1: (style) => `South Korea ${style.toLowerCase()} holidays`,
  tabAbout: 'About South Korea',
  tabTours: 'South Korea holidays',
  cta: 'Plan for free',
  stickyCta: 'Plan your South Korea trip',
  ctaHref: '/l/south-korea/enquiry/passengers/',
  sub: 'Your travel plan – no obligation & tailor-made',
  image: un('photo-1538485399081-7191377e8241', 2400),
  imageAlt: 'Gyeongbokgung palace below the mountains in Seoul, South Korea'
};

export const crumbs = [{ label: 'Destinations', href: '/destinations/' }, { label: 'Asia', to: '/asia' }, { label: 'South Korea' }];

export const intro = {
  h2: 'About South Korea',
  text: 'South Korea moves between centuries in a single afternoon. Palace gates and hanok lanes sit under the glass towers of Seoul, temple bells ring out of pine forests an hour from the city, and the whole country is linked by trains that leave to the minute. Add some of the best food in Asia and it is an easy, rewarding first trip to north east Asia.',
  more: ' Seoul deserves three or four nights: Gyeongbokgung and the changing of the guard, the Bukchon hanok village, the night market at Gwangjang and the DMZ on the northern horizon. From there the KTX runs south to Gyeongju and its royal tombs, and on to Busan for seafood, beaches and a cliffside temple. Jeju island adds volcanic craters, waterfalls and coastal walks. Spring brings cherry blossom and autumn turns the mountains gold, which are the two seasons worth planning around.',
  learnMore: 'Learn more',
  learnLess: 'Show less',
  quote: 'Eat where the queue is longest, and do it standing up. A plate of hotteok at a Seoul street stall beats most restaurant meals, and you will have change left for the next one.',
  quoteMore: 'My advice: keep two nights for Busan. Everyone rushes Seoul to Jeju and skips the south, but Haeundae in the morning and Gamcheon village in the afternoon is one of the best days in the country. And buy a transport card at the airport, you will use it everywhere.',
  readMore: 'Read more',
  readLess: 'Read less',
  expert: { image: '/experts/riya.webp', name: 'Aiko', role: 'Travel expert for South Korea' }
};

export const tours = {
  h2: 'Top-selling South Korea holiday ideas',
  allH2: 'South Korea tours & holidays',
  styleH2: (style) => `South Korea ${style.toLowerCase()} holidays`,
  browse: (n) => `Browse ${n} package ${n === 1 ? 'idea' : 'ideas'}`,
  filterLabel: 'Travel style:',
  sortLabel: 'Sorted by:',
  filterBy: 'Filter by',
  sortBy: 'Sort by',
  empty: 'No holidays match this travel style yet – clear the filter to see all South Korea holidays.',
  viewAll: 'View all South Korea holidays',
  short: ['Travel from ', ['palace courtyards to island coastlines'], ' – every South Korea holiday is tailor-made by our experts, and most pair easily with Japan.'],
  intro: [
    ' Walk the hanok lanes of Seoul, ride the bullet train south and eat your way through Busan. Whether you want a ', ['city and culture week, a cherry blossom trip or a Korea and Japan combination'], ' – our travel experts will be happy to advise you personally.'
  ],
  readMore: 'Read more',
  readLess: 'Read less'
};

export const products = southKoreaProducts;

export const planner = { ...egyptPlanner, h3: 'Customize your South Korea trip', bg: un('photo-1517154421773-0529f29ea451', 2000) };

export const reviews = {
  h2: 'What customers say about booking South Korea with Hi Tours',
  count: 'based on 120 South Korea reviews',
  items: [
    { name: 'Nikhil and Shruti', title: 'Seoul and Busan were both brilliant', date: '12 May 2026', stars: 5, image: IMG.seoulSkyline, text: 'The train tickets, hotels and guides were all arranged before we landed. We never once had to work out how to get somewhere, which left us free to eat and wander.' },
    { name: 'Deepa', title: 'Cherry blossom timing was perfect', date: '2 April 2026', stars: 5, image: IMG.blossom, text: 'They moved our dates forward by four days to catch the blossom in Seoul and it was the right call. Gyeongbokgung in the petals is something I will not forget.' },
    { name: 'Rohan and family', title: 'Easy with children', date: '18 March 2026', stars: 5, image: IMG.jeju, text: 'Jeju with two kids could have been chaos. Private car, sensible driving times and a guide who knew which crater was walkable with short legs.' }
  ]
};

export const customerReviews = {
  ...egyptCustomerReviews,
  h2: 'Our customers about their South Korea trip',
  summary: 'Palaces, bullet trains and street food – a week in Korea that was organised to the minute and still felt relaxed.',
  photos: [IMG.gyeongbokgung, IMG.bukchon, IMG.busan, IMG.lanterns],
  planExpert: '/experts/riya.webp',
  items: reviews.items.map((r) => ({ initial: r.name[0], name: r.name, date: r.date, title: r.title, source: 'Trustpilot', text: r.text }))
};

const placeList = [
  ['Seoul', IMG.gyeongbokgung],
  ['Busan', IMG.busan],
  ['Jeju island', IMG.jeju],
  ['Gyeongju', IMG.hanok],
  ['Bukchon hanok village', IMG.bukchon],
  ['Seoul by night', IMG.seoulSkyline]
];
export const places = { h2: `Discover these places in ${destination.name}`, items: placeList.map(([title, image], i) => ({ title, alt: title, tag: null, href: `#place-${i}`, image })) };

export const activities = { h2: 'The best activities on your trip', items: [
  { href: '#', title: 'Hanbok and hanok lanes in old Seoul', alt: 'Traditional hanok roofs in Bukchon village, Seoul', tag: 'Culture', image: IMG.bukchon },
  { href: '#', title: 'Coastal temples and beaches around Busan', alt: 'Haedong Yonggungsa temple on the rocks near Busan', tag: 'Beach', image: IMG.busan }
] };

export const plan = {
  h2: 'How to plan your South Korea trip',
  intro: 'South Korea is compact, punctual and very easy to travel. Seoul anchors most trips, the KTX puts Busan two and a half hours away, and Jeju is a short flight south. Experience Korea your way with Hi Tours: safe, tailor-made and unforgettable.',
  more: 'Show more details',
  less: 'Show fewer details',
  sections: [
    { h4: 'Best time to travel & climate', text: 'April brings cherry blossom and mild days; October and early November give clear skies and autumn colour in the mountains, and both are the best times to go. Summer is hot and humid with a rainy spell in July, while winter is cold and dry, which suits ski trips and quiet palaces.', links: [['Best time to visit South Korea', '#']] },
    { h4: 'Trip duration & route suggestions', text: '5 days cover Seoul with a DMZ or Nami island day. 7 days add Gyeongju and Busan by bullet train. 10 days bring in Jeju island, and 12 to 14 days combine Korea with Tokyo or Osaka on one flight home.', links: [['Ideal trip duration', '#'], ['South Korea in 7 days', '#']] },
    { h4: 'Sights & culture', text: 'Gyeongbokgung and Changdeokgung palaces, the Bukchon hanok village, the DMZ and the Joint Security Area, Gyeongju royal tombs and Bulguksa temple, Haedong Yonggungsa on the Busan cliffs, Gamcheon culture village and the craters and waterfalls of Jeju.', links: [['Top sights in South Korea', '#']] },
    { h4: 'Activities & adventure', text: 'Hike Bukhansan on Seoul\'s doorstep, walk a Jeju coastal trail, cycle the Han river, try a temple stay with monks, take a Korean cooking class or spend an evening eating through Gwangjang market.', links: [['Activities in South Korea', '#']] },
    { h4: 'Costs & budget', text: 'Comfortable travel averages around ₹9,000 per person per day with 4-star hotels, trains and guided days. Five-star hotels, private cars and domestic flights come closer to ₹18,000 daily. Street food, subways and museum entry are inexpensive.', links: [['South Korea holiday costs', '#']] },
    { h4: 'Safety & entry', text: 'Indian passport holders need a visa for South Korea, applied for in advance through the Korean mission or an authorised centre; a K-ETA may apply to some travellers. Korea is very safe, and English signage on transport is good.', links: [['Travel advice', '#']] }
  ]
};

export const themes = { h2: 'Travel guide & inspiration', more: 'Show more', less: 'Show less', items: [
  { href: '#', title: 'The best time to visit South Korea', tag: 'Travel guide', icon: 'sun', image: IMG.blossom },
  { href: '#', title: 'The ideal trip duration for South Korea', tag: 'Travel guide', icon: 'calendar', image: IMG.seoulSkyline },
  { href: '#', title: 'Korean food: 10 dishes to order first', tag: 'Inspiration', icon: 'food', image: IMG.lanterns },
  { href: '#', title: 'The best sights in South Korea in 2026', tag: 'Inspiration', icon: 'landscape', image: IMG.gyeongbokgung },
  { href: '#', title: 'Cherry blossom in Korea: where and when', tag: 'Inspiration', icon: 'island', image: IMG.blossom },
  { href: '#', title: 'Jeju island: craters, coast and waterfalls', tag: 'Inspiration', icon: 'beach', image: IMG.jeju },
  { href: '#', title: 'Combining Korea and Japan in one trip', tag: 'Travel guide', icon: 'kayak', image: IMG.busan },
  { href: '#', title: 'South Korea holiday: costs at a glance', tag: 'Travel guide', icon: 'wallet', image: IMG.hanok }
].map((t) => ({ ...t, alt: t.title })) };

export const faq = {
  h2: 'Practical information for your trip',
  items: [
    { q: 'When is the best time to visit South Korea?', a: [
      'April for cherry blossom and October for autumn colour are the two standout months, with mild temperatures and clear skies. Summer is hot and humid with heavy rain in July, and winter is cold but dry and quiet.',
      ['More information about the ', ['best time to visit South Korea', '#'], ' by season, region and type of trip.']
    ] },
    { q: 'What is typical food in South Korea?', a: [
      'Expect grilled meat at the table, cold noodles in summer, stews bubbling in stone pots and a row of free side dishes with everything. Try Korean barbecue, bibimbap, haemul pajeon, tteokbokki and the street food at Gwangjang market in Seoul.'
    ] },
    { q: 'Do Indian citizens need a visa for South Korea?', a: [
      'Yes. Indian passport holders must apply for a Korean visa before travelling, through the embassy or an authorised visa centre, and some travellers also need a K-ETA. Your passport should be valid for at least six months.',
      'Our travel experts will guide you through the paperwork as part of your travel plan, so there are no surprises at the airport.'
    ] },
    { q: 'How is my trip protected if travel conditions change?', a: [
      'With Hi Tours Care Flex you can cancel or rebook your land programme up to 30 days before departure without giving a reason. Depending on the destination, further protection and flexibility options may apply.',
      ['Find out more at: ', ['Hi Tours Care Flex', '#']]
    ] }
  ]
};

const CT = 'https://images.ctfassets.net/bth3mlrehms2';
const ct = (p) => `${CT}/${p}?w=1080&q=60&fm=webp`;
const asiaList = [
  ['Japan', ct('5E91LAbIo29xmfzemwDnnu/082cd826dbf9b2744cbcf00015005330/Japan_MtFuji.jpg')],
  ['Thailand', ct('27MnAH4RS1zTSFygAmnq5i/97ec55278a94f2ab56c26847396201ba/Thailand_Natur.jpg')],
  ['Vietnam', ct('3Z7A5HXNMctqsB6GE2jphI/4cef5ccca7d896a0b4f88281499fec30/Halong_Bucht_Vietnam.jpg')],
  ['Singapore', ct('4B5tE96BHxRVFYUVJQibEE/efeae2ee825eda4d08a95e0717d916fd/Skyline__Singapur.jpg')],
  ['Indonesia', ct('61b5ymnc76Gat5QEm4R7Uv/236a66af31569408e5fba01e2dcb53b1/Kelingking_Beach__Nusa_Penida__Indonesien_NTCG__1_.png')],
  ['Malaysia', ct('X7b0PdKpWDMzl19jytcJ6/d0aad3d91b3ffaaf161f205c7660fe5f/Malaysia_Ipoh_Tempel.jpg')],
  ['Bhutan', un('photo-1638246439638-b37095b34879')]
];
const ASIA_HREF = { Japan: '/asia/japan', Thailand: '/asia/thailand', Vietnam: '/asia/vietnam', Singapore: '/asia/singapore', Indonesia: '/asia/indonesia', Malaysia: '/asia/malaysia', Bhutan: '/asia/bhutan' };
export const related = { h2: `More destinations in ${destination.continent}`, items: asiaList.map(([title, image]) => ({ title, alt: title, tag: null, href: ASIA_HREF[title] || '#', image })) };

export const southKorea = {
  pageTitle: 'South Korea Honeymoons and holidays | Hi Tours',
  hero, crumbs, intro, tours, products, features, places, activities, themes, related, holidaysPath, holidaysCrumbs, plan, faq, planner,
  reviews: { ...egyptReviews, ...reviews }, customerReviews,
  plannerSource: 'south-korea-planner'
};
