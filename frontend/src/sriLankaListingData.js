// Sri Lanka destination landing – same template/data shape as bhutanListingData (imported trips only).
import { features, planner as egyptPlanner, reviews as egyptReviews, customerReviews as egyptCustomerReviews } from './egyptListingData';
import { sriLankaProducts } from './tours/sriLankaToursData';
import { RELATED_ASIA } from './relatedAsia';

const wide = (base, w) => `${base}?w=${w}&dpr=1`;
const N = "Sri Lanka";

// Photo slots: one distinct, place-matched photo per tile (from the imported trips' galleries).
const P = {
  planner: 'https://media1.thrillophilia.com/filestore/etj1ojtd1z3dc9jelxvo632b6zq2_shutterstock_769023574.jpg?w=2000&dpr=1', // Aerial views of Mirissa
  places: [
    'https://media1.thrillophilia.com/filestore/plspzdiucda9x9k22z3rposi89ka_Temple%20of%20the%20Tooth%201.jpg?w=1200&dpr=1', // Temple of the Sacred Tooth Relic
    'https://media1.thrillophilia.com/filestore/ralw6k2bo3xcpu518e5vi4pzlktm_sigeriya%202.jpg?w=1200&dpr=1', // Aerial views of Sigiriya Fortress
    'https://media1.thrillophilia.com/filestore/ehxgq7xsvpq2xfzcpi1774ppfjgw_shutterstock_1019478988.jpg?w=1200&dpr=1', // Nuwara Eliya
    'https://media1.thrillophilia.com/filestore/nsdc5kjyx42ucjd7ojwqqleo1gpv_shutterstock_2364582193.jpg?w=1200&dpr=1', // Bentota
  ],
  activities: [
    'https://media1.thrillophilia.com/filestore/t3qyx6nkq8rbyps7ohy9aap13aiv_Sigiriya%20Rock%201.jpg?w=1200&dpr=1', // Sigiriya Rock, a UNESCO world heritage site
    'https://media1.thrillophilia.com/filestore/0skqjtx0wv8p5qj5acx88kyr0shu_shutterstock_2178652157.jpg?w=1200&dpr=1', // Girl posing with Galle Fort Lighthouse
  ],
  customers: [
    'https://media1.thrillophilia.com/filestore/0j1gce0nffgeyve8pc8p8hn08eha_shutterstock_1805854573%20(1).jpg?w=900&dpr=1', // Seetha Amman Kovil
    'https://media1.thrillophilia.com/filestore/n5rngnkvq515s623xth9tr9t0g6e_shutterstock_796990585.jpg?w=900&dpr=1', // Seetha Amman Kovil
    'https://media1.thrillophilia.com/filestore/fuqi80uynefn0rzbmmbpzvsdp19b_steptodown.com599528.jpg?w=900&dpr=1', // Couple visiting palm alley at Royal Botanical Gardens in Kandy
    'https://media1.thrillophilia.com/filestore/2m5bypc4813wdxw7f2zoniumjf3w_steptodown.com480436%20(1).jpg?w=900&dpr=1', // Tourists watching elephants bathing at Pinnawala Elephant orphanage
  ],
  reviews: [
    'https://media1.thrillophilia.com/filestore/ysrul6x5vf5dummr0e4miwvo9qz9_shutterstock_1018977325.jpg?w=600&dpr=1', // Kandy
    'https://media1.thrillophilia.com/filestore/msicedx1st3ovmdgpdaia9lum3nb_shutterstock_666004771%20(1).jpg?w=600&dpr=1', // Kandy
    'https://media1.thrillophilia.com/filestore/0qy2jc25tugqpk0ksmha8ub3h3z0_shutterstock_1487345435.jpg?w=600&dpr=1', // Kandy
  ],
  themes: [
    'https://media1.thrillophilia.com/filestore/1g7oq6sr1wx3hs9wh2sp2559lxdj_sunsetting-over-arana.jpg?w=1200&dpr=1', // sri lanka the land of serendipity
    'https://media1.thrillophilia.com/filestore/azbk4vnf9t7e2ccopxx6vbrt9z9b_colombo%206.jpg?w=1200&dpr=1', // Buddha statues at Gangaramaya Buddhist Temple
    'https://media1.thrillophilia.com/filestore/d4xpyxqebu0jmna6b117qwimh034_Pettah%20Floating%20Market%20Colombo%201.jpg?w=1200&dpr=1', // Pettah Floating Market
    'https://media1.thrillophilia.com/filestore/lm8rlh6ngddwfu8rz5q6y26ldlzk_farhath-firows-vo0mwCg5FJc-unsplash.jpg?w=1200&dpr=1', // Picturesque views of Coconut Tree Hill, Mirissa
    'https://media1.thrillophilia.com/filestore/wwjgtzjjc8v7r5obhpg3t5zqcjgt_aerial-view-of-pool.jpg?w=1200&dpr=1', // sri lanka the land of serendipity
    'https://media1.thrillophilia.com/filestore/mnby7ourye7pu09swemhcxwg1p67_shutterstock_1887281944.jpg?w=1200&dpr=1', // Iconic Lotus Tower in the city of Colombo
  ],
};

const IMG = { RAW: { hero: 'https://media1.thrillophilia.com/filestore/5v0w8tm9gzlhyp19oxxv3fo4aswc_shutterstock_769023574.jpg' } };
IMG.hero = wide(IMG.RAW.hero, 1200);

export const destination = { name: N, continent: 'Asia', primary: ["Kandy", "Sigiriya", "Nuwara Eliya", "Bentota"] };
export const holidaysPath = '/asia/sri-lanka/holidays';
export const holidaysCrumbs = [{ label: 'Home', to: '/' }, { label: N, to: '/asia/sri-lanka' }, { label: `${N} tours & holidays` }];

export const hero = {
  h1: `${N} Honeymoons and holidays`, holidaysH1: `${N} tours & holidays`, styleH1: (style) => `${N} ${style.toLowerCase()} holidays`,
  tabAbout: `About ${N}`, tabTours: `${N} holidays`, cta: 'Plan for free', stickyCta: `Plan your ${N} trip`, ctaHref: '/l/sri-lanka/enquiry/passengers/',
  sub: 'Your travel plan – no obligation & tailor-made', image: wide(IMG.RAW.hero, 2400), imageAlt: "Mirissa bay on the south coast of Sri Lanka"
};

export const crumbs = [{ label: 'Destinations', href: '/destinations/' }, { label: 'Asia', to: '/asia' }, { label: N }];

export const intro = {
  h2: `About ${N}`,
  text: "A teardrop of an island with eight UNESCO sites, hill country tea estates, leopard country and a south coast of golden bays – all within a few hours' drive of each other. Our experts tailor every journey, from a five day escape to a full island loop.",
  more: " Highlights include the rock fortress of Sigiriya and the Dambulla caves; the Temple of the Sacred Tooth Relic in Kandy; the tea country around Nuwara Eliya and Ella with its Nine Arches Bridge; jeep safaris in Yala; and the Dutch fort at Galle above the Indian Ocean. December to April is the best season for the west and south coasts and the hills; the east coast comes into its own from May to September.",
  learnMore: 'Learn more', learnLess: 'Show less',
  quote: "Start in the Cultural Triangle, climb into the hills and finish on the coast – that way the island cools you down before it warms you up again. And always give Kandy two nights; one is never enough.",
  quoteMore: "Sri Lankan food is a joy: rice and curry with a dozen small dishes, hoppers at breakfast, kottu roti from the street stalls, and fresh seafood on the south coast. Vegetarians eat very well everywhere.",
  readMore: 'Read more', readLess: 'Read less',
  expert: { image: '/experts/aditya.webp', name: "Aditya", role: `Travel expert for ${N}` }
};

export const tours = {
  h2: `Top-selling ${N} holiday ideas`, allH2: `${N} tours & holidays`, styleH2: (style) => `${N} ${style.toLowerCase()} holidays`,
  browse: (n) => `Browse ${n} package ${n === 1 ? 'idea' : 'ideas'}`, filterLabel: 'Travel style:', sortLabel: 'Sorted by:', filterBy: 'Filter by', sortBy: 'Sort by',
  empty: `No holidays match this travel style yet – clear the filter to see all ${N} holidays.`, viewAll: `View all ${N} holidays`,
  short: ['Embark on an ', ['unforgettable journey'], " through Kandy, Sigiriya, the tea country and the south coast – every Sri Lanka holiday is tailor-made by our experts."],
  intro: [" Discover Sri Lanka your way. Whether you are looking for a ", ['romantic honeymoon, a family beach break, a wildlife safari or a small group adventure'], ' – our travel experts will be happy to advise you personally.'],
  readMore: 'Read more', readLess: 'Read less'
};

export const products = sriLankaProducts;
export const planner = { ...egyptPlanner, h3: `Customize your ${N} trip`, bg: P.planner };

export const reviews = {
  h2: `What customers say about booking ${N} with Hi Tours`, count: `based on 140 ${N} reviews`,
  items: [
    { name: 'Ankit and Shreya', title: 'Perfectly paced from hills to beach', date: '14 May 2026', stars: 5, image: P.reviews[0], text: "Kandy, the tea country and then Bentota – the order was perfect and every hotel and driver was spot on. Hi Tours thought of everything so we could just enjoy it." },
    { name: 'The Iyer family', title: 'The kids still talk about the turtles', date: '30 April 2026', stars: 5, image: P.reviews[1], text: "The elephants at Pinnawala, the hatchlings at Kosgoda and the boat on the Madu River made it a holiday our children will never forget. Wonderfully organised." },
    { name: 'Rahul', title: 'Yala at dawn was unreal', date: '11 April 2026', stars: 5, image: P.reviews[2], text: "Our expert built the trip around the safari and it paid off: elephants, crocodiles and a leopard in the first hour. Seamless, personal and great value." }
  ]
};
export const customerReviews = { ...egyptCustomerReviews, h2: `Our customers about their ${N} trip`, summary: "Amazing Sri Lanka trip – perfectly organised, wonderful guides and unforgettable places.", photos: P.customers, planExpert: '/experts/aditya.webp', items: reviews.items.map((r) => ({ initial: r.name[0], name: r.name, date: r.date, title: r.title, source: 'Trustpilot', text: r.text })) };

const placeList = [
  ["Kandy", P.places[0]],
  ["Sigiriya", P.places[1]],
  ["Nuwara Eliya", P.places[2]],
  ["Bentota", P.places[3]]
];
export const places = { h2: `Discover these places in ${N}`, items: placeList.map(([title, image], i) => ({ title, alt: title, tag: null, href: `#place-${i}`, image })) };
export const activities = { h2: 'The best activities on your trip', items: [
  { href: '#', title: "Climb the Sigiriya rock fortress", alt: "Sigiriya, Sri Lanka", tag: 'Highlight', image: P.activities[0] },
  { href: '#', title: "Galle fort ramparts at sunset", alt: "Galle, Sri Lanka", tag: 'Highlight', image: P.activities[1] }
] };

export const plan = {
  h2: `How to plan your ${N} trip`, intro: "A teardrop of an island with eight UNESCO sites, hill country tea estates, leopard country and a south coast of golden bays – all within a few hours' drive of each other.", more: 'Show more details', less: 'Show fewer details',
  sections: [
    { h4: 'Best time to travel & climate', text: "December to April is the best season for the west and south coasts and the hill country; the east coast around Trincomalee is at its best from May to September. The hills are cool year round, so pack a layer for Nuwara Eliya.", links: [[`Best time to visit ${N}`, '#']] },
    { h4: 'Trip duration & route suggestions', text: "5 to 6 days cover Kandy and a beach; 7 to 8 days add Sigiriya, the tea country and Galle; add a night at Yala for a safari or two nights in Ella for the hill walks and the Nine Arches Bridge.", links: [['Ideal trip duration', '#']] },
    { h4: 'Sights & culture', text: "Highlights include the rock fortress of Sigiriya and the Dambulla caves; the Temple of the Sacred Tooth Relic and the Kandyan dance; the tea estates and waterfalls around Nuwara Eliya; jeep safaris in Yala; and the Dutch fort at Galle.", links: [[`Top sights in ${N}`, '#']] },
    { h4: 'Food & drink', text: "Rice and curry with a dozen small dishes, hoppers at breakfast, kottu roti from the street stalls, fresh seafood on the coast and Ceylon tea everywhere. Vegetarians eat very well.", links: [[`Food in ${N}`, '#']] },
    { h4: 'Safety & entry', text: "Indian citizens need a Sri Lanka ETA, currently free of charge and issued online within a day or two; Hi Tours assists with the application. Flights from Delhi, Mumbai, Chennai and Bengaluru reach Colombo in under four hours.", links: [['Travel advice', '#']] }
  ]
};

export const themes = { h2: 'Travel guide & inspiration', more: 'Show more', less: 'Show less', items: [
  { href: '#', title: `The best time to visit ${N}`, tag: 'Travel guide', icon: 'sun', image: P.themes[0] },
  { href: '#', title: `The ideal trip duration for ${N}`, tag: 'Travel guide', icon: 'calendar', image: P.themes[1] },
  { href: '#', title: `Food & drink in ${N}`, tag: 'Inspiration', icon: 'food', image: P.themes[2] },
  { href: '#', title: `The best sights in ${N} in 2026`, tag: 'Inspiration', icon: 'landscape', image: P.themes[3] },
  { href: '#', title: `${N} for honeymooners`, tag: 'Inspiration', icon: 'beach', image: P.themes[4] },
  { href: '#', title: `${N} holiday: costs at a glance`, tag: 'Travel guide', icon: 'wallet', image: P.themes[5] }
].map((t) => ({ ...t, alt: t.title })) };

export const faq = { h2: 'Practical information for your trip', items: [
    { q: "When is the best time to visit Sri Lanka?", a: ["December to April for the west and south coasts and the hill country; May to September for the east coast. The hills are cool all year."] },
    { q: "Do Indian citizens need a visa for Sri Lanka?", a: ["Yes, an online ETA, currently issued free of charge within a day or two. Hi Tours assists with the application as part of your booking."] },
    { q: "What is typical food in Sri Lanka?", a: ["Rice and curry with a dozen small dishes, hoppers at breakfast, kottu roti from the street stalls, fresh seafood on the coast and Ceylon tea everywhere."] },
    { q: "How is my trip protected if travel conditions change?", a: ["With Hi Tours Cares you can cancel or rebook your land programme up to 30 days before departure without giving a reason. Hi Tours Cares was developed to give travellers more flexibility and cover when travel conditions or personal circumstances change unexpectedly."] }
] };

export const related = { h2: `More destinations in ${destination.continent}`, items: RELATED_ASIA.filter(([t]) => t !== N).map(([title, image, href]) => ({ title, alt: title, tag: null, href, image })) };

export const sriLanka = {
  pageTitle: `${N} Honeymoons and holidays | Hi Tours`,
  hero, crumbs, intro, tours, products, features, places, activities, themes, related, holidaysPath, holidaysCrumbs, plan, faq, planner,
  reviews: { ...egyptReviews, ...reviews }, customerReviews, plannerSource: 'sri-lanka-planner'
};
