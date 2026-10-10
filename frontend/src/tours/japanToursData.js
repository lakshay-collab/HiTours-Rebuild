import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../japanPackages';
import { discoverJapanFujiKyotoProduct } from './discoverJapanFujiKyotoData';
import { jewelsOfJapanMountFujiProduct } from './jewelsOfJapanMountFujiData';
import { legendsOfJapanHiroshimaProduct } from './legendsOfJapanHiroshimaData';
import { japanUnveiledShortBreakProduct } from './japanUnveiledShortBreakData';
import { bestOfJapanThemeParksProduct } from './bestOfJapanThemeParksData';
import { bestOfJapanShrinesSkylinesProduct } from './bestOfJapanShrinesSkylinesData';
import { urbanWondersTokyoOsakaProduct } from './urbanWondersTokyoOsakaData';
import { treasuresOfJapanKyotoProduct } from './treasuresOfJapanKyotoData';
import { taleOfTwoCitiesJapanProduct } from './taleOfTwoCitiesJapanData';
import { japanThroughTimeHistoricTrailsProduct } from './japanThroughTimeHistoricTrailsData';
import { japanRomanticEscapeImperialProduct } from './japanRomanticEscapeImperialData';
import { classicWondersJapanGroupTourProduct } from './classicWondersJapanGroupTourData';
import { japanCulturalTrailsGroupTourProduct } from './japanCulturalTrailsGroupTourData';
import { scenicJapanThreeCitiesProduct } from './scenicJapanThreeCitiesData';
import { centralJapanFujiGroupTourProduct } from './centralJapanFujiGroupTourData';
import { exploreJapanTokyoOsakaProduct } from './exploreJapanTokyoOsakaData';
import { japanFamilyOdysseyParksProduct } from './japanFamilyOdysseyParksData';
import { bestOfHokkaidoNorthernJapanProduct } from './bestOfHokkaidoNorthernJapanData';
import { japanFamilyTempleThemeProduct } from './japanFamilyTempleThemeData';
import { talesOfJapanRyokanFamilyProduct } from './talesOfJapanRyokanFamilyData';
import { japanGrandTourBlossomProduct } from './japanGrandTourBlossomData';
import { romanticJapanTowersTemplesProduct } from './romanticJapanTowersTemplesData';
import { japanDelightsRyokanTrailProduct } from './japanDelightsRyokanTrailData';
import { classicJapanTrailsShortProduct } from './classicJapanTrailsShortData';
import { japanInBloomGroupTourProduct } from './japanInBloomGroupTourData';
import { japanCulturalTalesWestProduct } from './japanCulturalTalesWestData';
import { southernJapanInlandSeaProduct } from './southernJapanInlandSeaData';
import { glimpseOfJapanShortGroupProduct } from './glimpseOfJapanShortGroupData';
import { japanCoupleSnowMonkeysProduct } from './japanCoupleSnowMonkeysData';
import { coupleGetawayRisingSunProduct } from './coupleGetawayRisingSunData';
import { japanNutshellGrandCircuitProduct } from './japanNutshellGrandCircuitData';
import { romanticJapanCulturalOdysseyProduct } from './romanticJapanCulturalOdysseyData';
import { japanCulturalScenicKansaiFirstProduct } from './japanCulturalScenicKansaiFirstData';
import { japanSignatureJourneyProduct } from './japanSignatureJourneyData';
import { japanAutumnNikkoKaruizawaProduct } from './japanAutumnNikkoKaruizawaData';
import { japanRaceWeekendTourProduct } from './japanRaceWeekendTourData';
import { journeyNorthTohokuHokkaidoProduct } from './journeyNorthTohokuHokkaidoData';
import { cherryBlossomTrailsJapanProduct } from './cherryBlossomTrailsJapanData';
import { japanRomanceTrailHokkaidoProduct } from './japanRomanceTrailHokkaidoData';
import { bestOfTokyoAndHokkaidoProduct } from './bestOfTokyoAndHokkaidoData';
import { scenicTrailsJapanNaganoProduct } from './scenicTrailsJapanNaganoData';
import { chroniclesOfJapanIslandRouteProduct } from './chroniclesOfJapanIslandRouteData';
import { panoramicJapanParksAndTemplesProduct } from './panoramicJapanParksAndTemplesData';
import { offbeatJapanHiroshimaRouteProduct } from './offbeatJapanHiroshimaRouteData';
import { japanLegendsTempleStayProduct } from './japanLegendsTempleStayData';
import { japanAndSouthKoreaDiscoveryProduct } from './japanAndSouthKoreaDiscoveryData';
import { koreaAndJapanShortGroupTourProduct } from './koreaAndJapanShortGroupTourData';
import { koreaJapanHiroshimaGetawayProduct } from './koreaJapanHiroshimaGetawayData';
import { bestOfChinaAndJapanGrandTourProduct } from './bestOfChinaAndJapanGrandTourData';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asien', ctaHref: '/l/japan/enquiry/passengers/', cruiseCity: '—',
  expert: { name: "Aiko", image: '/experts/riya.webp', role: 'Japan expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asien' }, { label: "Japan", href: '/asien/japan' }]
});

export const japanProducts = [ discoverJapanFujiKyotoProduct, jewelsOfJapanMountFujiProduct, legendsOfJapanHiroshimaProduct, japanUnveiledShortBreakProduct, bestOfJapanThemeParksProduct, bestOfJapanShrinesSkylinesProduct, urbanWondersTokyoOsakaProduct, treasuresOfJapanKyotoProduct, taleOfTwoCitiesJapanProduct, japanThroughTimeHistoricTrailsProduct, japanRomanticEscapeImperialProduct, classicWondersJapanGroupTourProduct, japanCulturalTrailsGroupTourProduct, scenicJapanThreeCitiesProduct, centralJapanFujiGroupTourProduct, exploreJapanTokyoOsakaProduct, japanFamilyOdysseyParksProduct, bestOfHokkaidoNorthernJapanProduct, japanFamilyTempleThemeProduct, talesOfJapanRyokanFamilyProduct, japanGrandTourBlossomProduct, romanticJapanTowersTemplesProduct, japanDelightsRyokanTrailProduct, classicJapanTrailsShortProduct, japanInBloomGroupTourProduct, japanCulturalTalesWestProduct, southernJapanInlandSeaProduct, glimpseOfJapanShortGroupProduct, japanCoupleSnowMonkeysProduct, coupleGetawayRisingSunProduct, japanNutshellGrandCircuitProduct, romanticJapanCulturalOdysseyProduct, japanCulturalScenicKansaiFirstProduct, japanSignatureJourneyProduct, japanAutumnNikkoKaruizawaProduct, japanRaceWeekendTourProduct, journeyNorthTohokuHokkaidoProduct, cherryBlossomTrailsJapanProduct, japanRomanceTrailHokkaidoProduct, bestOfTokyoAndHokkaidoProduct, scenicTrailsJapanNaganoProduct, chroniclesOfJapanIslandRouteProduct, panoramicJapanParksAndTemplesProduct, offbeatJapanHiroshimaRouteProduct, japanLegendsTempleStayProduct, japanAndSouthKoreaDiscoveryProduct, koreaAndJapanShortGroupTourProduct, koreaJapanHiroshimaGetawayProduct, bestOfChinaAndJapanGrandTourProduct];
export const japanTours = packages.map(build);
export const japanBySlug = Object.fromEntries(japanTours.map((t) => [t.detail.slug, t]));
