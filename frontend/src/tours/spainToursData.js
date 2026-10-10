import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../spainPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/europe', ctaHref: '/l/spain/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Carmen", image: '/experts/riya.webp', role: 'Spain expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Europe', href: '#' }, { label: "Spain", href: '/europe/spain' }]
});

export const spainProducts = packages.map(toProduct);
export const spainTours = packages.map(build);
export const spainBySlug = Object.fromEntries(spainTours.map((t) => [t.detail.slug, t]));
