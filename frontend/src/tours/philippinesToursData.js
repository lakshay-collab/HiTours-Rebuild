import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../philippinesPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asia', ctaHref: '/l/philippines/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Marco", image: '/experts/riya.webp', role: 'Philippines expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/#destinations' }, { label: 'Asia', href: '/asia' }, { label: "Philippines", href: '/asia/philippines' }]
});

export const philippinesProducts = packages.map(toProduct);
export const philippinesTours = packages.map(build);
export const philippinesBySlug = Object.fromEntries(philippinesTours.map((t) => [t.detail.slug, t]));
