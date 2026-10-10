import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../irelandPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/europe', ctaHref: '/l/ireland/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Siobhán", image: '/experts/riya.webp', role: 'Ireland expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Europe', href: '#' }, { label: "Ireland", href: '/europe/ireland' }]
});

export const irelandProducts = packages.map(toProduct);
export const irelandTours = packages.map(build);
export const irelandBySlug = Object.fromEntries(irelandTours.map((t) => [t.detail.slug, t]));
