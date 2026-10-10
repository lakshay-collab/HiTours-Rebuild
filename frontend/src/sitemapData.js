// Internal sitemap: every public route on the site, grouped. Also feeds public/sitemap.xml.
import { catalog, THEMES } from './catalog';

const COUNTRIES = [...new Map(catalog.map((p) => [p.destination, p.destinationHref])).entries()]
  .sort((a, b) => a[0].localeCompare(b[0]));

export const GROUPS = [
  {
    title: 'Main pages',
    links: [
      ['Home', '/'],
      ['About us', '/about'],
      ['Careers', '/careers'],
      ['Our Office', '/our-office'],
      ['Press & media', '/press'],
      ['Hi Tours Care (booking policy)', '/care'],
      ['Terms & conditions', '/terms'],
      ['Privacy policy', '/privacy']
    ]
  },
  {
    title: 'Regions',
    links: [
      ['Asia', '/asia'],
      ['Europe', '/europe'],
      ['Europe multi-country holidays', '/europe/holidays']
    ]
  },
  {
    title: 'Destination listings',
    links: COUNTRIES.map(([name, href]) => [`${name} tours & holidays`, `${href}/holidays`])
  },
  {
    title: 'SEO landing pages (not linked in navigation)',
    links: [['Thailand honeymoon holidays', '/asia/thailand/honeymoons']]
  },
  {
    title: 'Trip styles',
    links: [['Northern Lights', '/trip-styles/northern-lights']]
  },
  {
    title: 'Themes',
    links: THEMES.map((t) => [t.label, `/themes/${t.slug}`])
  },
  ...COUNTRIES.map(([name, href]) => ({
    title: `${name} itineraries`,
    links: catalog.filter((p) => p.destinationHref === href).map((p) => [p.title || p.name, p.href])
  }))
];

export const ALL_URLS = [...new Set(GROUPS.flatMap((g) => g.links.map(([, href]) => href)))];

export const page = {
  title: 'Sitemap | Hi Tours (internal)',
  h1: 'Sitemap',
  text: 'Every page on the site, grouped. This page is not linked anywhere in the navigation – keep the URL for internal and SEO use.'
};
