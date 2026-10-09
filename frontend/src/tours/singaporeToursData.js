// Adapters: Singapore packages → listing cards + detail-template data (reuses the shared createAdapters from vietnamToursData).
import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../singaporePackages';
import { bestOfSingaporeThailandProduct } from './bestOfSingaporeThailandData';
import { romanticSingaporeNightSafariSentosaProduct } from './romanticSingaporeNightSafariSentosaData';
import { singaporeShortBreakNightSafariProduct } from './singaporeShortBreakNightSafariData';
import { singaporeFamilyUniversalStudiosProduct } from './singaporeFamilyUniversalStudiosData';
import { singaporeHighlightsSentosaGardensProduct } from './singaporeHighlightsSentosaGardensData';
import { singaporeWildlifeSkylineEscapeProduct } from './singaporeWildlifeSkylineEscapeData';
import { singaporeCouplesAdventureCoveProduct } from './singaporeCouplesAdventureCoveData';
import { singaporeCouplesSpecialJewelProduct } from './singaporeCouplesSpecialJewelData';
import { singaporeFamilySafariCityLightsProduct } from './singaporeFamilySafariCityLightsData';
import { singaporeWildTrailsIslandDaysProduct } from './singaporeWildTrailsIslandDaysData';
import { singaporeGentingDreamCruiseProduct } from './singaporeGentingDreamCruiseData';
import { singaporeHoneymoonGentingCruiseProduct } from './singaporeHoneymoonGentingCruiseData';
import { singaporePenangRoyalCaribbeanProduct } from './singaporePenangRoyalCaribbeanData';
import { disneyAdventureCruiseSingaporeProduct } from './disneyAdventureCruiseSingaporeData';
import { singaporeMalaysiaHoneymoonProduct } from './singaporeMalaysiaHoneymoonData';
import { singaporeMalaysiaSentosaGentingProduct } from './singaporeMalaysiaSentosaGentingData';

import { singaporeBaliHoneymoonProduct } from './singaporeBaliHoneymoonData';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asien', ctaHref: '/l/singapore/enquiry/passengers/', cruiseCity: '—',
  expert: { name: 'Nisha Rao', image: '/experts/riya.webp', role: 'Singapore expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asien' }, { label: 'Singapore', href: '/asien/singapore' }]
});

export const singaporeProducts = [
  ...packages.map(toProduct),
  bestOfSingaporeThailandProduct,
  romanticSingaporeNightSafariSentosaProduct,
  singaporeShortBreakNightSafariProduct,
  singaporeFamilyUniversalStudiosProduct,
  singaporeHighlightsSentosaGardensProduct,
  singaporeWildlifeSkylineEscapeProduct,
  singaporeCouplesAdventureCoveProduct,
  singaporeCouplesSpecialJewelProduct,
  singaporeFamilySafariCityLightsProduct,
  singaporeWildTrailsIslandDaysProduct,
  singaporeGentingDreamCruiseProduct,
  singaporeHoneymoonGentingCruiseProduct,
  singaporePenangRoyalCaribbeanProduct,
  disneyAdventureCruiseSingaporeProduct,
  singaporeMalaysiaHoneymoonProduct,
  singaporeMalaysiaSentosaGentingProduct,
  singaporeBaliHoneymoonProduct
];
export const singaporeTours = packages.map(build);
export const singaporeBySlug = Object.fromEntries(singaporeTours.map((t) => [t.detail.slug, t]));
