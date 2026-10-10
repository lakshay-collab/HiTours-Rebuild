import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../norwayPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/europe', ctaHref: '/l/norway/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Ingrid", image: '/experts/riya.webp', role: 'Norway expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Europe', href: '#' }, { label: "Norway", href: '/europe/norway' }]
});

export const norwayProducts = packages.map(toProduct);
export const norwayTours = packages.map(build);
export const norwayBySlug = Object.fromEntries(norwayTours.map((t) => [t.detail.slug, t]));
