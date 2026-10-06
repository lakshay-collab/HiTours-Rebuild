import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../greecePackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/europa', ctaHref: '/l/greece/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Eleni", image: '/experts/riya.webp', role: 'Greece expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Europe', href: '#' }, { label: "Greece", href: '/europa/greece' }]
});

export const greeceProducts = packages.map(toProduct);
export const greeceTours = packages.map(build);
export const greeceBySlug = Object.fromEntries(greeceTours.map((t) => [t.detail.slug, t]));
