// Careers page content – layout mirrors careers.tourlane.com, copy adapted to Hi Tours.
import { CAREERS_URL } from './aboutData';

const un = (id, w = 1200) => `https://images.unsplash.com/${id}?crop=entropy&cs=srgb&fm=jpg&q=80&w=${w}`;

export const CAREERS_EMAIL = 'careers@hitours.in';
export const ROLES_URL = 'https://www.linkedin.com/company/hi-tours-group/jobs/';
export { CAREERS_URL };

export const hero = {
  image: un('photo-1577962917302-cd874c4e31d2', 2000),
  alt: 'The Hi Tours team planning holidays together in the Mumbai office',
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

export const departmentCta = 'View roles';

export const values = {
  eyebrow: 'What Hi Tours Stands For',
  h2: 'Our culture & values',
  text: 'Hi Tours is rooted in strong beliefs, passion and a set of non-negotiable core values. They help us set sail in the right direction and they serve as our North Star. Company culture is what everyone is doing when nobody is looking. Our values are the foundation for our culture and they ensure cohesion.',
  items: [
    { label: 'We love travel', text: 'Curiosity is the job description. We go, we look, we come back with better itineraries.', icon: 'globe' },
    { label: 'Take the call', text: 'Someone always picks up. Ownership beats process, every single time.', icon: 'phone' },
    { label: 'Set foot on Mars', text: 'We aim far beyond the obvious and build what has not been tried in travel yet.', icon: 'rocket' },
    { label: 'Be the customer', text: 'Every decision is judged from the traveller’s seat, not from a spreadsheet.', icon: 'compass' },
    { label: 'Act humble & respectful', text: 'Local partners, colleagues, travellers – we treat everyone as a guest.', icon: 'handshake' }
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
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPDSLzOsrBKfYCkkYxZ5Et-XNF2oZhgbP6MUDIyK_eg&s=10', alt: 'Ministry of Tourism, Government of India', title: 'Ministry of Tourism approved', text: 'Recognised tour operator approved by the Ministry of Tourism, Government of India.' }
  ],
  accolades: [
    { title: 'Best Tailor Made Tour Operator', text: 'Awarded at the India Travel Awards for itineraries built around the traveller.' },
    { title: 'One Million Happy Travellers', text: 'Holidays planned for over a million travellers since 1995.' },
    { title: 'ISO 45001 Certified', text: 'Health and safety management audited to an international standard.' },
    { title: 'IATA Accredited & Travelife Certified', text: 'Recognised for air-travel expertise and sustainable tourism practices.' },
    { title: 'Rated 4.9 on Tripadvisor', text: 'Alongside 4.7 on Google from travellers who planned their holiday with us.' },
    { title: 'Ministry of Tourism Approved', text: 'Approved tour operator recognised by the Ministry of Tourism, Government of India.' }
  ]
};

export const page = { title: 'Careers at Hi Tours | Work with us' };
