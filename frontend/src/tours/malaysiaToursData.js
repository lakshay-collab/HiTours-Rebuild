// Adapters: Malaysia packages → listing cards + detail-template data (reuses the shared createAdapters from vietnamToursData).
import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../malaysiaPackages';
import { bestOfThailandMalaysiaProduct } from './bestOfThailandMalaysiaData';
import { singaporeMalaysiaHoneymoonProduct } from './singaporeMalaysiaHoneymoonData';
import { singaporeMalaysiaSentosaGentingProduct } from './singaporeMalaysiaSentosaGentingData';
import { singaporeMalaysiaBaliHoneymoonProduct } from './singaporeMalaysiaBaliHoneymoonData';
import { grandSingaporeMalaysiaBaliProduct } from './grandSingaporeMalaysiaBaliData';
import { bestOfThailandSingaporeMalaysiaBaliProduct } from './bestOfThailandSingaporeMalaysiaBaliData';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asia', ctaHref: '/l/malaysia/enquiry/passengers/', cruiseCity: '—',
  expert: { name: 'Arjun Mehta', image: '/experts/riya.webp', role: 'Malaysia expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asia' }, { label: 'Malaysia', href: '/asia/malaysia' }]
});

export const malaysiaProducts = [...packages.map(toProduct), bestOfThailandMalaysiaProduct, singaporeMalaysiaHoneymoonProduct, singaporeMalaysiaSentosaGentingProduct, singaporeMalaysiaBaliHoneymoonProduct, grandSingaporeMalaysiaBaliProduct, bestOfThailandSingaporeMalaysiaBaliProduct];
export const malaysiaTours = packages.map(build);
export const malaysiaBySlug = Object.fromEntries(malaysiaTours.map((t) => [t.detail.slug, t]));
