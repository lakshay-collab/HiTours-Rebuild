import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../swedenPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/europe', ctaHref: '/l/sweden/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Elsa", image: '/experts/riya.webp', role: 'Sweden expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Europe', href: '#' }, { label: "Sweden", href: '/europe/sweden' }]
});

export const swedenProducts = packages.map(toProduct);
export const swedenTours = packages.map(build);
export const swedenBySlug = Object.fromEntries(swedenTours.map((t) => [t.detail.slug, t]));
