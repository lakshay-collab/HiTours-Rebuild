import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../chinaPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asien', ctaHref: '/l/china/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Mei", image: '/experts/riya.webp', role: 'China expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asien' }, { label: "China", href: '/asien/china' }]
});

export const chinaProducts = packages.map(toProduct);
export const chinaTours = packages.map(build);
export const chinaBySlug = Object.fromEntries(chinaTours.map((t) => [t.detail.slug, t]));
