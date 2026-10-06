import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../icelandPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/europa', ctaHref: '/l/iceland/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Sigrún", image: '/experts/riya.webp', role: 'Iceland expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Europe', href: '#' }, { label: "Iceland", href: '/europa/iceland' }]
});

export const icelandProducts = packages.map(toProduct);
export const icelandTours = packages.map(build);
export const icelandBySlug = Object.fromEntries(icelandTours.map((t) => [t.detail.slug, t]));
