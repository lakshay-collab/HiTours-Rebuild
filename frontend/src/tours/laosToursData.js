import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../laosPackages';
import { vietnamLaosCambodiaTrioProduct } from './vietnamLaosCambodiaTrioData';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asia', ctaHref: '/l/laos/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Noy", image: '/experts/riya.webp', role: 'Laos expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asia' }, { label: "Laos", href: '/asia/laos' }]
});

export const laosProducts = [...packages.map(toProduct), vietnamLaosCambodiaTrioProduct];
export const laosTours = packages.map(build);
export const laosBySlug = Object.fromEntries(laosTours.map((t) => [t.detail.slug, t]));
