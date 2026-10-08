// Marketing-only landing variant (not linked in site navigation): same trips as holidays, romantic theme filters.
export const honeymoonVariant = (d, name, path) => ({
  ...d,
  mode: 'honeymoon',
  holidaysPath: path,
  holidaysCrumbs: [...d.holidaysCrumbs.slice(0, 2), { label: `${name} honeymoons` }],
  hero: { ...d.hero, holidaysH1: `${name} honeymoons`, styleH1: (t) => `${name} honeymoons: ${t.toLowerCase()}` },
  tours: { ...d.tours, allH2: `${name} honeymoon packages`, styleH2: (t) => `${name} honeymoons: ${t.toLowerCase()}`, browse: (n) => `Browse ${n} honeymoon ${n === 1 ? 'idea' : 'ideas'}` },
  plannerSource: `${name.toLowerCase().replace(/\s+/g, '-')}-honeymoons`,
  testId: `${name.toLowerCase().replace(/\s+/g, '-')}-honeymoons-page`
});
