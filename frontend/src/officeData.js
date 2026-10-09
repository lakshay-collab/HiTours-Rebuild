// Our office page content (layout after audleytravel.com/contact-us/offices, styled for Hi Tours).
const un = (id, w = 2000) => `https://images.unsplash.com/${id}?crop=entropy&cs=srgb&fm=jpg&q=80&w=${w}`;

export const office = {
  hero: un('photo-1497366216548-37526070297c'),
  heroAlt: 'Hi Tours office in Gurgaon',
  h1: 'Our office',
  intro: 'Every Hi Tours holiday is planned from one place. Drop in for a coffee and a conversation about your next trip, or reach the team by phone, WhatsApp or email.',
  name: 'Hi Tours India, Gurgaon',
  tagline: 'Head office, sales and operations',
  address: ['Vatika City Point', 'MG Road, Sector 25', 'Gurugram, Haryana 122002', 'India'],
  phone: '+91 89206 06060',
  phoneHref: 'tel:+918920606060',
  email: 'hello@hitours.in',
  mapQuery: 'Vatika City Point, MG Road, Gurugram, Haryana',
  landmarks: ['2 minutes from MG Road metro station', 'Across from Sahara Mall', 'Visitor parking in the Vatika City Point basement'],
  links: {
    enquire: 'Enquire online',
    visit: 'Visit our office',
    touch: 'Get in touch',
    directions: 'Get directions'
  },
  hours: [
    {
      key: 'sales',
      title: 'Opening times, Sales',
      note: 'Our holiday experts are on the phone and in the office at the times above. Appointments for a planning session are usually available on weekdays between 10am and 6pm.',
      rows: [['Monday', '9:30am to 7pm'], ['Tuesday', '9:30am to 7pm'], ['Wednesday', '9:30am to 7pm'], ['Thursday', '9:30am to 7pm'], ['Friday', '9:30am to 7pm'], ['Saturday', '10am to 6pm'], ['Sunday', '11am to 5pm']]
    },
    {
      key: 'operations',
      title: 'Opening times, Operations',
      note: 'Travellers already on holiday can reach our operations desk 24 hours a day on the emergency number shared in your travel documents.',
      rows: [['Monday', '9am to 8pm'], ['Tuesday', '9am to 8pm'], ['Wednesday', '9am to 8pm'], ['Thursday', '9am to 8pm'], ['Friday', '9am to 8pm'], ['Saturday', '9am to 8pm'], ['Sunday', '10am to 6pm'], ['On-trip emergencies', '24 hours']]
    }
  ],
  page: { title: 'Our office in Gurgaon | Hi Tours' }
};

export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&z=16&output=embed`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}`;
