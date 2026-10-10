// Adapters: Kazakhstan packages → listing cards + detail-template data (reuses the shared createAdapters from vietnamToursData).
import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../kazakhstanPackages';
import { almatyShortBreakShymbulakProduct } from './almatyShortBreakShymbulakData';
import { grandAlmatyCharynKolsaiProduct } from './grandAlmatyCharynKolsaiData';
import { almatyExplorerKokTobeIssykProduct } from './almatyExplorerKokTobeIssykData';
import { almatyWeekWithDelhiFlightsProduct } from './almatyWeekWithDelhiFlightsData';
import { classicAlmatyWithDelhiFlightsProduct } from './classicAlmatyWithDelhiFlightsData';
import { almatyHighlightsWithDelhiFlightsProduct } from './almatyHighlightsWithDelhiFlightsData';
import { sevenDaysAlmatyAltynEmelProduct } from './sevenDaysAlmatyAltynEmelData';
import { almatyAndBakuMountainsCaspianProduct } from './almatyAndBakuMountainsCaspianData';
import { almatyAndBakuTufandagCableCarProduct } from './almatyAndBakuTufandagCableCarData';
import { almatyBakuShahdagMountainsProduct } from './almatyBakuShahdagMountainsData';
import { grandAlmatyBakuShekiProduct } from './grandAlmatyBakuShekiData';
import { almatyWinterGroupTourFlightsProduct } from './almatyWinterGroupTourFlightsData';
import { almatyNatureWondersYoungProduct } from './almatyNatureWondersYoungData';
import { silkRoadTashkentSamarkandAlmatyProduct } from './silkRoadTashkentSamarkandAlmatyData';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asia', ctaHref: '/l/kazakhstan/enquiry/passengers/', cruiseCity: '—',
  expert: { name: 'Aisha Khan', image: '/experts/riya.webp', role: 'Kazakhstan expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/#destinations' }, { label: 'Asia', href: '/asia' }, { label: 'Kazakhstan', href: '/asia/kazakhstan' }]
});

export const kazakhstanProducts = [, almatyShortBreakShymbulakProduct, grandAlmatyCharynKolsaiProduct, almatyExplorerKokTobeIssykProduct, almatyWeekWithDelhiFlightsProduct, classicAlmatyWithDelhiFlightsProduct, almatyHighlightsWithDelhiFlightsProduct, sevenDaysAlmatyAltynEmelProduct, almatyAndBakuMountainsCaspianProduct, almatyAndBakuTufandagCableCarProduct, almatyBakuShahdagMountainsProduct, grandAlmatyBakuShekiProduct, almatyWinterGroupTourFlightsProduct, almatyNatureWondersYoungProduct, silkRoadTashkentSamarkandAlmatyProduct];
export const kazakhstanTours = packages.map(build);
export const kazakhstanBySlug = Object.fromEntries(kazakhstanTours.map((t) => [t.detail.slug, t]));
