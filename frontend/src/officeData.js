// Our retail office page content, styled for Hi Tours.
const un = (id, w = 2000) => `https://images.unsplash.com/${id}?crop=entropy&cs=srgb&fm=jpg&q=80&w=${w}`;

export const office = {
  hero: un('photo-1497366216548-37526070297c'),
  heroAlt: 'Hi Tours retail office in Gurgaon',
  h1: 'Our retail office',
  intro: 'Hi Tours is a pan-India company, part of the Hi Tours Group. Our retail office is currently in Gurgaon, so if you would like to come in and talk to a specialist about your holiday, you can do that here.',
  address: ['Vatika City Point', 'MG Road, Sector 25', 'Gurugram, Haryana 122002', 'India'],
  phone: '+91 89206 06060',
  phoneHref: 'tel:+918920606060',
  email: 'hello@hitours.in',
  mapQuery: 'Vatika City Point, MG Road, Gurugram, Haryana',
  landmarks: ['2 minutes from MG Road metro station', 'Across from Sahara Mall', 'Visitor parking in the Vatika City Point basement'],
  links: { visit: 'Visit our office', touch: 'Get in touch', directions: 'Get directions' },
  hours: [
    {
      key: 'sales',
      title: 'Sales',
      note: 'Planning appointments are available Monday to Friday. We are closed on Saturdays and Sundays.',
      rows: [['Monday', '9am to 8pm'], ['Tuesday', '9am to 8pm'], ['Wednesday', '9am to 8pm'], ['Thursday', '9am to 8pm'], ['Friday', '9am to 8pm'], ['Saturday', 'Closed'], ['Sunday', 'Closed']]
    },
    {
      key: 'operations',
      title: 'Operations',
      note: 'Travellers already on holiday can reach our operations desk 24 hours a day on the emergency number in their travel documents.',
      rows: [['Monday', '9am to 8pm'], ['Tuesday', '9am to 8pm'], ['Wednesday', '9am to 8pm'], ['Thursday', '9am to 8pm'], ['Friday', '9am to 8pm'], ['Saturday', 'Closed'], ['Sunday', 'Closed'], ['On-trip emergencies', '24 hours']]
    }
  ],
  gallery: null,
  page: { title: 'Our retail office in Gurgaon | Hi Tours' }
};

export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&z=16&output=embed`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}`;
