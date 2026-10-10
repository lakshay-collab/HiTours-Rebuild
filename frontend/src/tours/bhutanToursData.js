// Adapters: Bhutan packages → listing cards + detail-template data (reuses the shared createAdapters from vietnamToursData).
import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../bhutanPackages';
import { wondersOfBhutanParoExcursionProduct } from './wondersOfBhutanParoExcursionData';
import { glimpseOfBhutanSacredSitesProduct } from './glimpseOfBhutanSacredSitesData';
import { experienceBhutanFourValleysProduct } from './experienceBhutanFourValleysData';
import { nepalAndBhutanHimalayanJourneyProduct } from './nepalAndBhutanHimalayanJourneyData';
import { bhutanDochulaAndPhobjikhaProduct } from './bhutanDochulaAndPhobjikhaData';
import { bhutanTaktsangEightDaysProduct } from './bhutanTaktsangEightDaysData';
import { gemsOfBhutanThimphuPunakhaParoProduct } from './gemsOfBhutanThimphuPunakhaParoData';
import { escapeToBhutanThreeValleysProduct } from './escapeToBhutanThreeValleysData';
import { bhutanJourneyToThePeaksProduct } from './bhutanJourneyToThePeaksData';
import { bhutanSikkimAndDarjeelingProduct } from './bhutanSikkimAndDarjeelingData';
import { mesmerizingBhutanShortBreakProduct } from './mesmerizingBhutanShortBreakData';
import { discoveringBhutanPunakhaDayTripProduct } from './discoveringBhutanPunakhaDayTripData';
import { exclusiveTripToBhutanProduct } from './exclusiveTripToBhutanData';
import { bhutanTenDaysWithPhobjikhaProduct } from './bhutanTenDaysWithPhobjikhaData';
import { nepalBhutanAndSikkimGrandProduct } from './nepalBhutanAndSikkimGrandData';
import { bhutanAdventureGroupTourProduct } from './bhutanAdventureGroupTourData';
import { bhutanFromSiliguriProduct } from './bhutanFromSiliguriData';
import { bhutanNewYearSpecialProduct } from './bhutanNewYearSpecialData';
import { premiumBhutanGroupTourProduct } from './premiumBhutanGroupTourData';
import { bhutanFromJaigaonProduct } from './bhutanFromJaigaonData';
import { bhutanExclusiveFourNightsProduct } from './bhutanExclusiveFourNightsData';
import { bestOfBhutanTaktsangProduct } from './bestOfBhutanTaktsangData';
import { bestOfBhutanTshechuProduct } from './bestOfBhutanTshechuData';
import { paradisicBhutanSuperDeluxeProduct } from './paradisicBhutanSuperDeluxeData';
import { bhutanTaktsangLuxuryProduct } from './bhutanTaktsangLuxuryData';
import { bhutanGetawayGangteyCranesProduct } from './bhutanGetawayGangteyCranesData';
import { bhutanTaktsangSuperDeluxeProduct } from './bhutanTaktsangSuperDeluxeData';
import { bhutanThimphuTshechuFestivalProduct } from './bhutanThimphuTshechuFestivalData';
import { bhutanPhobjikhaLuxuryProduct } from './bhutanPhobjikhaLuxuryData';
import { bhutanFromSiliguriLuxuryProduct } from './bhutanFromSiliguriLuxuryData';
import { bestOfBhutanTaktsangSuperDeluxeProduct } from './bestOfBhutanTaktsangSuperDeluxeData';
import { bhutanPhobjikhaSuperDeluxeProduct } from './bhutanPhobjikhaSuperDeluxeData';
import { paradisicBhutanLuxuryProduct } from './paradisicBhutanLuxuryData';
import { paroShortBreakTaktsangProduct } from './paroShortBreakTaktsangData';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asia', ctaHref: '/l/bhutan/enquiry/passengers/', cruiseCity: '—',
  expert: { name: 'Tenzin Dorji', image: '/experts/riya.webp', role: 'Bhutan expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/#destinations' }, { label: 'Asia', href: '/asia' }, { label: 'Bhutan', href: '/asia/bhutan' }]
});

export const bhutanProducts = [, wondersOfBhutanParoExcursionProduct, glimpseOfBhutanSacredSitesProduct, experienceBhutanFourValleysProduct, nepalAndBhutanHimalayanJourneyProduct, bhutanDochulaAndPhobjikhaProduct, bhutanTaktsangEightDaysProduct, gemsOfBhutanThimphuPunakhaParoProduct, escapeToBhutanThreeValleysProduct, bhutanJourneyToThePeaksProduct, bhutanSikkimAndDarjeelingProduct, mesmerizingBhutanShortBreakProduct, discoveringBhutanPunakhaDayTripProduct, exclusiveTripToBhutanProduct, bhutanTenDaysWithPhobjikhaProduct, nepalBhutanAndSikkimGrandProduct, bhutanAdventureGroupTourProduct, bhutanFromSiliguriProduct, bhutanNewYearSpecialProduct, premiumBhutanGroupTourProduct, bhutanFromJaigaonProduct, bhutanExclusiveFourNightsProduct, bestOfBhutanTaktsangProduct, bestOfBhutanTshechuProduct, paradisicBhutanSuperDeluxeProduct, bhutanTaktsangLuxuryProduct, bhutanGetawayGangteyCranesProduct, bhutanTaktsangSuperDeluxeProduct, bhutanThimphuTshechuFestivalProduct, bhutanPhobjikhaLuxuryProduct, bhutanFromSiliguriLuxuryProduct, bestOfBhutanTaktsangSuperDeluxeProduct, bhutanPhobjikhaSuperDeluxeProduct, paradisicBhutanLuxuryProduct, paroShortBreakTaktsangProduct];
export const bhutanTours = packages.map(build);
export const bhutanBySlug = Object.fromEntries(bhutanTours.map((t) => [t.detail.slug, t]));
