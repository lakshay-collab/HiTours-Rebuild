// About us page content for Hi Tours.
import { destinations } from './destinationsData';

const CT = 'https://images.ctfassets.net/rc3dlxapnu6k';
const TL = 'https://www.tourlane.com/cfa-assets/media';

export const CAREERS_URL = '/careers';

export const pageTabs = [
  { label: 'About Us', to: '/about' },
  { label: 'Booking Policy', to: '/care' },
  { label: 'Careers', to: CAREERS_URL }
];

export const hero = {
  images: [
    { src: `${CT}/OaJw6YzwUUtV26kLyUBO6/79912739be76f4e90d9e199372441b36/Landscape_Sicily_Italy.jpg?w=1400&q=60&fm=webp`, alt: 'Coastal landscape at sunset with rocky cliffs, turquoise water and a historic stone tower, Sicily' },
    { src: `${CT}/1vyau2tbwjkDRCv588lHTC/0ca8e1daf46dd6ace6865506ce7ce3d8/Big-Ben_London_UK.png?w=800&q=60&fm=webp`, alt: 'Low-angle view of Big Ben in London against a partly cloudy sky' }
  ],
  h1: 'When travel means the world to you',
  sub: 'Personalised holidays, honest prices and a specialist who stays with you from the first call to the flight home.',
  intro: 'Hi Tours is an Indian travel company planning tailor-made holidays across Asia, Africa and Europe since 2016. Every trip is built around your dates, your pace and your budget by a holiday specialist who knows the destination first-hand, and backed by local partners we have worked with for years.',
  stats: [
    { value: '1,00,000+', label: 'travellers planned for' },
    { value: '4.8 / 5', label: 'average review rating' },
    { value: '40+', label: 'destinations across 3 continents' },
    { value: 'ISO 45001', label: 'certified safety standards' }
  ]
};

export const ceo = {
  eyebrow: 'A note from our CEO',
  teaserTitle: 'A letter to every traveller who plans with us',
  teaser: 'Why Indian travellers today are smarter than ever, and why that makes us even more committed to specialists who are enabled by AI and grounded in real local partnerships.',
  button: 'Read full letter',
  name: 'Hunar Syal',
  role: 'Chief Executive Officer, Hi Tours',
  image: '/about/ceo.webp',
  imageCaption: 'Hunar at Tiger\u2019s Nest, Bhutan',
  quote: 'Our specialists are enabled by AI. But it is our people, and the local partnerships we have built over years, that make your holiday safe and happy.',
  salutation: 'Dear traveller,',
  paragraphs: [
    'Travel in India is changing, and it is changing fast. The Indian traveller today is smarter, better informed and far more aware than ever before. You compare, you research, and you ask AI for ideas long before you ever speak to a travel company. We think that is a wonderful thing.',
    'What has not changed is what you want from a holiday. Whether it is a honeymoon you have dreamt of for years or a family getaway that has to work for grandparents and toddlers alike, the goal is the same: a genuinely happy holiday, and memories you will keep for a lifetime.',
    'That is why we have built Hi Tours around specialists who are enabled by AI, not replaced by it. Technology helps our team move faster, see more options and personalise every itinerary down to the smallest detail. But it is our people, and the local connections and partnerships we have nurtured over years on the ground, who make sure the hotel is right, the guide is wonderful and someone picks up the phone when it matters.',
    'A safe, happy holiday is the only outcome we care about. Thank you for trusting us with yours.'
  ],
  closing: 'Warm regards,'
};

export const recognized = {
  label: 'Recognised by',
  press: [
    { src: `${TL}/cnbc.svg`, alt: 'CNBC' },
    { src: `${TL}/forbes.svg`, alt: 'Forbes' },
    { src: `${TL}/lonely-planet.svg`, alt: 'Lonely Planet' }
  ],
  badges: [
    { src: '/badges/iso45001-t.png', alt: 'ISO 45001 certified' },
    { src: '/badges/travelife-t.png', alt: 'Travelife certified' },
    { src: '/badges/cert3-t.png', alt: 'IATA accredited' }
  ]
};

export const why = {
  h2: 'Why choose Hi Tours?',
  items: [
    { image: '/about/expertise.webp', alt: 'Travellers exploring a temple with their local Hi Tours guide', title: 'Best prices and quality', text: 'Thirty years of buying directly from hotels, airlines and local operators means you get the sharper price without trading down on quality. Every hotel, guide and transfer on your itinerary is one we have used and would use again, at one clear all-in price with nothing hidden.' },
    { image: '/about/support.webp', alt: 'Hi Tours support advisor wearing a headset at her desk', title: '24/7 on-holiday customer support', text: 'Support that travels with you, not just before you fly. Our team is on call around the clock across every time zone, so a delayed flight, a hotel change or a last-minute booking is handled by a real person on WhatsApp or the phone while you are still on holiday.' },
    { image: '/about/planning.webp', alt: 'Hi Tours holiday specialists planning a trip together', title: 'AI-enabled holiday specialists', text: 'Our specialists plan with AI working alongside them. It reads thousands of itineraries, hotels and flight combinations in seconds, so your first plan arrives in minutes instead of days. The judgement stays human: a specialist who knows the destination checks and shapes every day before it reaches you.' }
  ]
};

export const steps = {
  h2: 'Custom travel packages don’t have to be complicated',
  items: [
    { n: 1, title: 'Dream it', text: 'Tell us your destination, dates, travel style and budget. You receive a free personalised itinerary in minutes.' },
    { n: 2, title: 'Customise it', text: 'In a one-on-one call, your holiday specialist fine-tunes every detail, from hotels to pace to experiences, until it feels like yours.' },
    { n: 3, title: 'Book it', text: 'We book everything and stay with you throughout. Dedicated guides and 24/7 support mean you only have to enjoy the ride.' }
  ]
};

export const cta = { h2: 'Start planning your own Hi Tours' };

const find = (name) => Object.values(destinations).flat().find((d) => d.name === name);
const TOP10 = [
  ['Vietnam', '/asia/vietnam'], ['Thailand', '/asia/thailand'], ['Sri Lanka', '/asia/sri-lanka'], ['Egypt', '/africa/egypt'], ['Japan', '/asia/japan'],
  ['Maldives', '/asia/maldives'], ['Bhutan', '/asia/bhutan'], ['Kazakhstan', '/asia/kazakhstan'], ['Italy', '/europe/italy'], ['Greece', '/europe/greece']
];
export const top10 = {
  h2: 'Our top 10 countries',
  text: 'The destinations our travellers book again and again, each one planned by a specialist who knows it first-hand.',
  items: TOP10.map(([name, href], i) => ({ ...find(name), href, rank: i + 1 }))
};

export const guarantee = {
  eyebrow: 'Our booking guarantee',
  h2: 'Book worry-free, travel with certified peace of mind',
  text: 'Hi Tours is one of the few travel brands in India with ISO 45001 certification, an internationally audited standard for health and safety. Every ground partner, transport provider and hotel we work with is held to it. Pair that with flexible rebooking and cancellation under Hi Tours Care, and you can book with confidence.',
  points: [
    'ISO 45001 certified safety and health standards',
    'Flexible rebooking and cancellation with Hi Tours Care',
    '24/7 crisis management and emergency assistance while you travel'
  ],
  badge: '/badges/iso45001.png',
  button: 'Read our booking policy',
  href: '/care'
};

export const careers = {
  eyebrow: 'Careers',
  h2: 'Help us plan the happiest holidays in India',
  text: 'We are a team of travel specialists, planners and storytellers who love what we do. If you know a destination inside out, or simply love making someone’s trip unforgettable, we would like to meet you.',
  button: 'View open roles',
  href: CAREERS_URL,
  image: '/about/planning.webp'
};

export const faq = {
  h2: 'Frequently asked questions',
  items: [
    { q: 'What is Hi Tours?', a: ['Hi Tours is an Indian travel company specialising in personalised, tailor-made holidays across Asia, Africa and Europe. Since 2016 we have worked with local partners to design custom trips covering everything from flights and hotels to unique experiences.', 'With over 1,00,000 travellers planned for and a 4.8-star average rating, we have built a reputation for holidays that simply work.'] },
    { q: 'How does Hi Tours work?', a: ['Share your destination, dates, travel style and budget and receive a free personalised itinerary in minutes. Then your dedicated holiday specialist refines it with you one-on-one.', 'Once the trip is exactly how you want it, we handle every booking and stay with you before, during and after your journey.'] },
    { q: 'Is Hi Tours only for luxury travel?', a: ['No. We plan for all travel styles and budgets. Whether that means 5-star resorts or boutique hideaways off the beaten path, your specialist designs around what matters to you.'] },
    { q: 'How much does a personalised itinerary cost?', a: ['Nothing. Consulting with a Hi Tours specialist is free and without obligation, including your first personalised itinerary.'] },
    { q: 'Do I need to book my flights separately?', a: ['Not unless you want to. We can book flights as part of your itinerary so flights, hotels, transfers and experiences are all coordinated by one team.'] },
    { q: 'Can I modify or cancel my trip after booking?', a: ['Yes. Our Booking Policy explains flexible rebooking and cancellation under Hi Tours Care. Some changes may incur supplier fees depending on timing, and your specialist will always tell you upfront.'] },
    { q: 'Are the trips private or group-based?', a: ['We specialise in private trips for you and your family or friends, so you travel on your own terms. Small-group departures can be arranged on request.'] },
    { q: 'How do I reach Hi Tours during my trip?', a: ['Your dedicated specialist is available by phone, WhatsApp or email throughout your journey, backed by 24/7 emergency assistance.'] },
    { q: 'What does ISO 45001 certification mean for me?', a: ['It means our safety and health processes, from vetted ground handlers to transport partners and crisis management, are audited against an international standard, not just promised.'] }
  ]
};
