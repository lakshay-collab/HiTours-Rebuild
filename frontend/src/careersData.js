// Careers page content – layout mirrors careers.tourlane.com, copy adapted to Hi Tours.
const un = (id, w = 1200) => `https://images.unsplash.com/${id}?crop=entropy&cs=srgb&fm=jpg&q=80&w=${w}`;

export const CAREERS_EMAIL = 'careers@hitours.in';

export const hero = {
  image: un('photo-1758691737584-a8f17fb34475', 2000),
  alt: 'The Hi Tours team together at an all-hands gathering',
  h1: 'Working with Hi Tours',
  cta: 'Learn more'
};

export const intro = {
  eyebrow: 'Work at Hi Tours',
  h2: 'Join us in making a lasting impact on travel',
  text: 'At Hi Tours, we are all discoverers. The sum of all our professional steps together make a career path. On our journey we have built the amazing team that we have today – a team that will be remembered for having changed an entire industry by demanding more and by changing the norms. Pack your bags and get ready to begin your new professional adventure with us.'
};

export const departments = [
  { name: 'Marketing', text: 'Engaging with our travellers through various channels and platforms.', image: un('photo-1623652554515-91c833e3080e') },
  { name: 'Sales', text: 'Building adventures with our customers from planning to travelling, and beyond.', image: un('photo-1603714228681-b399854b8f80') },
  { name: 'Data & Analytics', text: 'Building data systems for travel centric customers at scale.', image: un('photo-1690378820474-b468b8ee64d3') },
  { name: 'Design', text: 'Building travel experiences through design thinking methodologies.', image: un('photo-1576595580361-90a855b84b20') },
  { name: 'Engineering', text: "Combining travel with innovation and technology to fulfil Hi Tours' vision.", image: un('photo-1614741118887-7a4ee193a5fa') },
  { name: 'Finance', text: 'Ensuring financial success of Hi Tours from our employees through to travellers.', image: un('photo-1590650589327-3f67c43ad8a2') },
  { name: 'Operations', text: "Effectively managing Hi Tours' organisational experience.", image: un('photo-1630487656049-6db93a53a7e9') },
  { name: 'People and Culture', text: "Developing Hi Tours' culture as well as hiring and supporting all colleagues.", image: un('photo-1576267423048-15c0040fec78') },
  { name: 'Product Management', text: 'Creating visionary products for the best Hi Tours experience.', image: un('photo-1542626991-cbc4e32524cc') },
  { name: 'Travel Product', text: 'Ensuring our customers have the best experience while travelling.', image: un('photo-1626863905121-3b0c0ed7b94c') }
];

export const values = {
  eyebrow: 'What Hi Tours Stands For',
  h2: 'Our culture & values',
  text: 'Hi Tours is rooted in strong beliefs, passion and a set of non-negotiable core values. They help us set sail in the right direction and they serve as our North Star. Company culture is what everyone is doing when nobody is looking. Our values are the foundation for our culture and they ensure cohesion. They sum up some of our core beliefs and form a reliable basis for all processes, decisions and behaviours at Hi Tours.',
  items: [
    { label: 'We love travel', icon: 'plane' },
    { label: 'Take the call', icon: 'phone' },
    { label: 'Set foot on Mars', icon: 'rocket' },
    { label: 'Be the customer', icon: 'smile' },
    { label: 'Act humble & respectful', icon: 'umbrella' }
  ]
};

export const life = {
  eyebrow: 'Life at Hi Tours',
  h2: 'You belong at Hi Tours',
  text: 'Hi Tours has a culture of inclusion, diversity, and growth, supported by various groups and resources to help make a difference in your life and ensure that everyone belongs at Hi Tours.',
  stats: [
    { value: '250+', label: 'Team members' },
    { value: '45%', label: 'Of women' },
    { value: '30+', label: 'Years of travel' }
  ],
  quotes: [
    { quote: 'I like working at Hi Tours because it gives me a lot of flexibility in terms of working hours. I can also work from anywhere in the world.', name: 'Riya Mehta', role: 'Booking Success Expert', avatar: '/experts/riya.webp', image: '/moments/safari.webp' },
    { quote: 'I appreciate that Hi Tours puts an unusual amount of effort into understanding and developing every colleague\u2019s passion and unique skill profile.', name: 'Aditya Rao', role: 'Director of Engineering', avatar: '/experts/aditya.webp', image: '/moments/alps.webp' },
    { quote: 'Thanks to Hi Tours I am able to use my own passion for travel on a daily basis to plan amazing trips for our customers.', name: 'Sharon D\u2019Souza', role: 'Travel Expert and Junior Destination Specialist', avatar: '/experts/sharon.webp', image: '/moments/santorini.webp' }
  ]
};

export const perks = {
  eyebrow: 'What We Offer',
  h2: 'Perks and Benefits',
  text: 'Hi Tours offers a wide range of benefits, whether you are part-time, full-time, working from the office or at home. We believe in giving our employees benefits that balances their career development and personal wellbeing.',
  items: [
    { label: 'Inclusive environment: bring your whole self!', icon: 'users' },
    { label: 'Individual Learning Budget for all Hi Tourians', icon: 'book' },
    { label: 'Flexibility to work remotely from almost any country', icon: 'globe' },
    { label: 'Engaging in-person events in Mumbai', icon: 'party' },
    { label: 'Hybrid working model and office in the heart of Mumbai', icon: 'building' },
    { label: 'Fresh fruits, chai & snacks in the office', icon: 'coffee' },
    { label: 'We love having dogs in the office', icon: 'dog' }
  ]
};

export const awards = {
  eyebrow: 'Recognition',
  h2: 'Awards and Accreditation',
  text: 'Our standards are not just promises – they are independently certified and recognised by the travellers and the industry we serve.',
  badges: [
    { src: '/badges/iso45001-t.png', alt: 'ISO 45001 certified', title: 'ISO 45001 certified', text: 'One of the few travel brands in India audited to the international health and safety standard.' },
    { src: '/badges/cert3-t.png', alt: 'IATA accredited', title: 'IATA accredited', text: 'Accredited agent for air travel, so your flights and holiday are coordinated by one team.' },
    { src: '/badges/travelife-t.png', alt: 'Travelife certified', title: 'Travelife certified', text: 'Committed to sustainable travel practices across our partners and itineraries.' },
    { src: '/badges/tripadvisor.svg', alt: 'TripAdvisor', title: 'Rated 4.9 on TripAdvisor', text: 'Alongside 4.7 on Google from travellers who planned their holiday with us.' }
  ],
  accolades: [
    '“Best Tailor-made Tour Operator” – India Travel Awards',
    'Over one million happy travellers since 1995',
    'ISO 45001 certified health and safety management',
    'IATA accredited and Travelife certified'
  ]
};

export const page = { title: 'Careers at Hi Tours | Work with us' };
