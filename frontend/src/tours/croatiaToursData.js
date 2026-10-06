import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../croatiaPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/europa', ctaHref: '/l/croatia/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Ana", image: '/experts/riya.webp', role: 'Croatia expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Europe', href: '#' }, { label: "Croatia", href: '/europa/croatia' }]
});

export const croatiaProducts = packages.map(toProduct);
export const croatiaTours = packages.map(build);
export const croatiaBySlug = Object.fromEntries(croatiaTours.map((t) => [t.detail.slug, t]));
