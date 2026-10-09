// Careers page content – layout mirrors careers.tourlane.com, copy adapted to Hi Tours.
import { CAREERS_URL } from './aboutData';

const un = (id, w = 1200) => `https://images.unsplash.com/${id}?crop=entropy&cs=srgb&fm=jpg&q=80&w=${w}`;

export const CAREERS_EMAIL = 'careers@hitours.in';
export const ROLES_URL = 'https://www.linkedin.com/company/hi-tours-group/jobs/';
export { CAREERS_URL };

export const hero = {
  image: un('photo-1577962917302-cd874c4e31d2', 2000),
  alt: 'The Hi Tours team planning holidays together in the Mumbai office',
  h1: 'Join Hi Tours',
  video: { id: 'GKPwXS3CKBw', start: 660, end: 690 },
  cta: 'Learn more',
  positions: 'Open Positions'
};

export const intro = {
  eyebrow: 'Work at Hi Tours',
  h2: 'Join us in making a lasting impact on travel',
  text: 'At Hi Tours, we are all discoverers. The sum of all our professional steps together make a career path. On our journey we have built the amazing team that we have today – a team that will be remembered for having changed an entire industry by demanding more and by changing the norms. Pack your bags and get ready to begin your new professional adventure with us.'
};

export const departments = [
  { name: 'Marketing', text: 'Engaging with our travellers through various channels and platforms.', image: un('photo-1460925895917-afdab827c52f') },
  { name: 'Sales', text: 'Building adventures with our customers from planning to travelling, and beyond.', image: un('photo-1573164713988-8665fc963095') },
  { name: 'Travel Product', text: 'Ensuring our customers have the best experience while travelling.', image: un('photo-1530789253388-582c481c54b0') },
  { name: 'Operations', text: "Effectively managing Hi Tours' organisational experience.", image: un('photo-1521737604893-d14cc237f11d') },
  { name: 'Technology', text: "Combining travel with innovation and technology to fulfil Hi Tours' vision.", image: un('photo-1522071820081-009f0129c71c') },
  { name: 'Finance', text: 'Ensuring financial success of Hi Tours from our employees through to travellers.', image: un('photo-1454165804606-c3d57bc86b40') }
];

export const departmentCta = 'View roles';

export const values = {
  eyebrow: 'What Hi Tours Stands For',
  h2: 'Our culture & values',
  text: 'Hi Tours is rooted in strong beliefs, passion and a set of non-negotiable core values. They help us set sail in the right direction and they serve as our North Star. Company culture is what everyone is doing when nobody is looking. Our values are the foundation for our culture and they ensure cohesion.',
  items: [
    { label: 'We love travel', text: 'Curiosity is the job description. We go, we look and we come back with better itineraries.', art: 'travel' },
    { label: 'Take the call', text: 'Someone always picks up. We own the traveller’s problem until it is solved.', art: 'call' },
    { label: 'Dream bigger', text: 'We aim beyond the obvious and design journeys nobody has offered before.', art: 'dream' },
    { label: 'Be the customer', text: 'Every decision is judged from the traveller’s seat, never from a spreadsheet.', art: 'customer' },
    { label: 'Act humble & respectful', text: 'Local partners, colleagues, travellers – we treat everyone as our guest.', art: 'humble' }
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
    { quote: 'I appreciate that Hi Tours puts an unusual amount of effort into understanding and developing every colleague\u2019s passion and unique skill profile.', name: 'Aditya Rao', role: 'Director of Technology', avatar: '/experts/aditya.webp', image: '/moments/alps.webp' },
    { quote: 'Thanks to Hi Tours I am able to use my own passion for travel on a daily basis to plan amazing trips for our customers.', name: 'Sharon D\u2019Souza', role: 'Travel Expert and Junior Destination Specialist', avatar: '/experts/sharon.webp', image: '/moments/santorini.webp' }
  ]
};

export const perks = {
  eyebrow: 'What We Offer',
  h2: 'Perks and Benefits',
  text: 'Hi Tours offers a wide range of benefits, whether you are part-time, full-time, working from the office or at home. We believe in giving our employees benefits that balances their career development and personal wellbeing.',
  items: [
    { label: 'Inclusive environment: bring your whole self!', image: un('photo-1522202176988-66273c2fd55f', 600) },
    { label: 'Individual Learning Budget for all Hi Tourians', image: un('photo-1434030216411-0b793f4b4173', 600) },
    { label: 'Flexibility to work remotely from almost any country', image: un('photo-1522199755839-a2bacb67c546', 600) },
    { label: 'Engaging in-person events in Mumbai', image: un('photo-1511795409834-ef04bbd61622', 600) },
    { label: 'Hybrid working model and office in the heart of Mumbai', image: un('photo-1497366216548-37526070297c', 600) },
    { label: 'Fresh fruits, chai & snacks in the office', image: un('photo-1610832958506-aa56368176cf', 600) },
    { label: 'Familiarisation trips to our destinations every year', image: un('photo-1500530855697-b586d89ba3ee', 600) },
    { label: 'We love having dogs in the office', image: un('photo-1548199973-03cce0bbc87b', 600) }
  ]
};

export const awards = {
  eyebrow: 'Recognition',
  h2: 'Awards and Accreditation',
  text: 'Our standards are not just promises – they are independently certified and recognised by the travellers and the industry we serve.',
  badges: [
    { src: '/badges/iso45001-t.png', alt: 'ISO 45001 certified', title: 'ISO 45001 certified' },
    { src: '/badges/cert3-t.png', alt: 'IATA accredited', title: 'IATA accredited' },
    { src: '/badges/travelife-t.png', alt: 'Travelife certified', title: 'Travelife certified' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPDSLzOsrBKfYCkkYxZ5Et-XNF2oZhgbP6MUDIyK_eg&s=10', alt: 'Ministry of Tourism, Government of India', title: 'Ministry of Tourism approved' }
  ]
};

export const page = { title: 'Careers at Hi Tours | Work with us' };
