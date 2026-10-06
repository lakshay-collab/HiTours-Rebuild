import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../japanPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asien', ctaHref: '/l/japan/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Aiko", image: '/experts/riya.webp', role: 'Japan expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asien' }, { label: "Japan", href: '/asien/japan' }]
});

export const japanProducts = packages.map(toProduct);
export const japanTours = packages.map(build);
export const japanBySlug = Object.fromEntries(japanTours.map((t) => [t.detail.slug, t]));
