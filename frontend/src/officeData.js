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
      note: 'Planning appointments are usually available on weekdays between 10am and 6pm.',
      rows: [['Monday', '9:30am to 7pm'], ['Tuesday', '9:30am to 7pm'], ['Wednesday', '9:30am to 7pm'], ['Thursday', '9:30am to 7pm'], ['Friday', '9:30am to 7pm'], ['Saturday', '10am to 6pm'], ['Sunday', '11am to 5pm']]
    },
    {
      key: 'operations',
      title: 'Operations',
      note: 'Travellers already on holiday can reach our operations desk 24 hours a day on the emergency number in their travel documents.',
      rows: [['Monday', '9am to 8pm'], ['Tuesday', '9am to 8pm'], ['Wednesday', '9am to 8pm'], ['Thursday', '9am to 8pm'], ['Friday', '9am to 8pm'], ['Saturday', '9am to 8pm'], ['Sunday', '10am to 6pm'], ['On-trip emergencies', '24 hours']]
    }
  ],
  gallery: {
    h2: 'Inside our office',
    text: 'A look around the Hi Tours office in Vatika City Point.',
    photos: [
      { src: un('photo-1497366811353-6870744d04b2', 1200), alt: 'Hi Tours office reception' },
      { src: un('photo-1522071820081-009f0129c71c', 1200), alt: 'Holiday experts planning a trip' },
      { src: un('photo-1556761175-b413da4baf72', 1200), alt: 'Team meeting at Hi Tours' },
      { src: un('photo-1517502884422-41eaead166d4', 1200), alt: 'Operations desk at Hi Tours' }
    ]
  },
  page: { title: 'Our retail office in Gurgaon | Hi Tours' }
};

export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&z=16&output=embed`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}`;
