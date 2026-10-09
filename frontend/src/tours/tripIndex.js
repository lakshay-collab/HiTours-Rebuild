// Every itinerary (detail/route/glance/crumbs) keyed by slug. Used by the detail page and the holidays filter model.
import { detail as detail0, route as route0, glance as glance0, crumbs as crumbs0 } from '../egyptDetailData';
import { detail as detail1, route as route1, glance as glance1, crumbs as crumbs1 } from '../moroccoEgyptData';
import { detail as detail2, route as route2, glance as glance2, crumbs as crumbs2 } from '../srilankaData';
import { detail as detail3, route as route3, glance as glance3, crumbs as crumbs3 } from '../thailandData';
import { detail as detailGF, route as routeGF, glance as glanceGF, crumbs as crumbsGF } from './egyptGrandFestivalData';
import { detail as detailMM, route as routeMM, glance as glanceMM, crumbs as crumbsMM } from './misrMayaData';
import { detail as detailMKJ, route as routeMKJ, glance as glanceMKJ, crumbs as crumbsMKJ } from './misrKaJaaduData';
import { detail as detailNP, route as routeNP, glance as glanceNP, crumbs as crumbsNP } from './nilePharaohsData';
import { detail as detailPF, route as routePF, glance as glancePF, crumbs as crumbsPF } from './pharaohsFeluccasData';
import { detail as detailND, route as routeND, glance as glanceND, crumbs as crumbsND } from './nileDarshanData';
import { detail as detailNN, route as routeNN, glance as glanceNN, crumbs as crumbsNN } from './nileNoorData';
import { vietnamBySlug } from './vietnamToursData';
import { srilankaBySlug } from './srilankaToursData';
import { malaysiaBySlug } from './malaysiaToursData';
import { singaporeBySlug } from './singaporeToursData';
import { kazakhstanBySlug } from './kazakhstanToursData';
import { bhutanBySlug } from './bhutanToursData';
import { laosBySlug } from './laosToursData';
import { japanBySlug } from './japanToursData';
import { indonesiaBySlug } from './indonesiaToursData';
import { chinaBySlug } from './chinaToursData';
import { cambodiaBySlug } from './cambodiaToursData';
import { philippinesBySlug } from './philippinesToursData';
import { icelandBySlug } from './icelandToursData';
import { europeBySlug } from './europeToursData';
import { italyBySlug } from './italyToursData';
import { greeceBySlug } from './greeceToursData';
import { norwayBySlug } from './norwayToursData';
import { irelandBySlug } from './irelandToursData';
import { spainBySlug } from './spainToursData';
import { portugalBySlug } from './portugalToursData';
import { croatiaBySlug } from './croatiaToursData';
import { englandBySlug } from './englandToursData';
import { scotlandBySlug } from './scotlandToursData';
import { finlandBySlug } from './finlandToursData';
import { swedenBySlug } from './swedenToursData';
import { thailandBySlug } from './thailandToursData';
import { maldivesBySlug } from './maldivesToursData';
import { veniceViennaBySlug } from './veniceViennaData';
import { icelandGlaciersBySlug } from './icelandGlaciersData';
import { bestOfThailandSingaporeMalaysiaHongKongBySlug } from './bestOfThailandSingaporeMalaysiaHongKongData';
import { bestOfPhuketKrabiBangkokBySlug } from './bestOfPhuketKrabiBangkokData';
import { grandVietnamCambodiaThailandBySlug } from './grandVietnamCambodiaThailandData';
import { bestOfSingaporeThailandBySlug } from './bestOfSingaporeThailandData';
import { luxuryPhuketSamuiKrabiBySlug } from './luxuryPhuketSamuiKrabiData';
import { bestOfPattayaBangkokPhuketBySlug } from './bestOfPattayaBangkokPhuketData';
import { classicKrabiPhuketHolidayBySlug } from './classicKrabiPhuketHolidayData';
import { baliPhuketIslandEscapeBySlug } from './baliPhuketIslandEscapeData';
import { honeymoonTrailPhuketKrabiSamuiBySlug } from './honeymoonTrailPhuketKrabiSamuiData';
import { coastalMagicPhuketKrabiBySlug } from './coastalMagicPhuketKrabiData';
import { bestOfThailandMalaysiaBySlug } from './bestOfThailandMalaysiaData';
import { romanticKrabiSamuiPhuketBySlug } from './romanticKrabiSamuiPhuketData';
import { grandBangkokPhuketKrabiBySlug } from './grandBangkokPhuketKrabiData';
import { islandTrailsPhuketSamuiKrabiBySlug } from './islandTrailsPhuketSamuiKrabiData';
import { phuketKohSamuiBeachEscapeBySlug } from './phuketKohSamuiBeachEscapeData';
import { phuketPhiPhiPartyEscapeBySlug } from './phuketPhiPhiPartyEscapeData';
import { luxuryBangkokPattayaEscapeBySlug } from './luxuryBangkokPattayaEscapeData';
import { romanticSingaporeNightSafariSentosaBySlug } from './romanticSingaporeNightSafariSentosaData';
import { singaporeShortBreakNightSafariBySlug } from './singaporeShortBreakNightSafariData';
import { singaporeFamilyUniversalStudiosBySlug } from './singaporeFamilyUniversalStudiosData';
import { singaporeHighlightsSentosaGardensBySlug } from './singaporeHighlightsSentosaGardensData';
import { singaporeWildlifeSkylineEscapeBySlug } from './singaporeWildlifeSkylineEscapeData';
import { singaporeCouplesAdventureCoveBySlug } from './singaporeCouplesAdventureCoveData';
import { singaporeCouplesSpecialJewelBySlug } from './singaporeCouplesSpecialJewelData';
import { singaporeFamilySafariCityLightsBySlug } from './singaporeFamilySafariCityLightsData';
import { singaporeWildTrailsIslandDaysBySlug } from './singaporeWildTrailsIslandDaysData';
import { singaporeGentingDreamCruiseBySlug } from './singaporeGentingDreamCruiseData';
import { singaporeHoneymoonGentingCruiseBySlug } from './singaporeHoneymoonGentingCruiseData';
import { singaporePenangRoyalCaribbeanBySlug } from './singaporePenangRoyalCaribbeanData';
import { disneyAdventureCruiseSingaporeBySlug } from './disneyAdventureCruiseSingaporeData';
import { singaporeMalaysiaHoneymoonBySlug } from './singaporeMalaysiaHoneymoonData';
import { singaporeMalaysiaSentosaGentingBySlug } from './singaporeMalaysiaSentosaGentingData';
import { bestOfBaliUbudAndKutaBySlug } from './bestOfBaliUbudAndKutaData';
import { magicalBaliHolidayWithFlightsBySlug } from './magicalBaliHolidayWithFlightsData';
import { luxuryBaliEscapeMountBaturBySlug } from './luxuryBaliEscapeMountBaturData';
import { baliHoneymoonCandlelightDinnerBySlug } from './baliHoneymoonCandlelightDinnerData';
import { romanticBaliNusaPenidaBySlug } from './romanticBaliNusaPenidaData';
import { baliAdventureRaftingNusaPenidaBySlug } from './baliAdventureRaftingNusaPenidaData';
import { baliCouplesEscapeNightSafariBySlug } from './baliCouplesEscapeNightSafariData';
import { baliHoneymoonSeminyakBySlug } from './baliHoneymoonSeminyakData';
import { singaporeBaliHoneymoonBySlug } from './singaporeBaliHoneymoonData';
import { baliHoneymoonPirateCruiseBySlug } from './baliHoneymoonPirateCruiseData';
import { romanticBaliSunsetCruiseBySlug } from './romanticBaliSunsetCruiseData';
import { bestOfBaliFlightsNusaPenidaBySlug } from './bestOfBaliFlightsNusaPenidaData';
import { grandBaliSafariKecakBySlug } from './grandBaliSafariKecakData';
import { shortBaliEscapeFlightsBySlug } from './shortBaliEscapeFlightsData';
import { classicBaliHoneymoonSwingBySlug } from './classicBaliHoneymoonSwingData';
import { highlightsOfBaliNusaPenidaUluwatuBySlug } from './highlightsOfBaliNusaPenidaUluwatuData';
import { bestOfBaliSunsetCruiseBySlug } from './bestOfBaliSunsetCruiseData';
import { romanticBaliVintageCarBySlug } from './romanticBaliVintageCarData';
import { baliEscapeBeachClubAtvBySlug } from './baliEscapeBeachClubAtvData';
import { singaporeMalaysiaBaliHoneymoonBySlug } from './singaporeMalaysiaBaliHoneymoonData';
import { baliSingaporeFamilyHolidayBySlug } from './baliSingaporeFamilyHolidayData';
import { classicBaliGroupHolidayBySlug } from './classicBaliGroupHolidayData';
import { baliFamilyHolidayNusaPenidaBySlug } from './baliFamilyHolidayNusaPenidaData';
import { hongKongBaliHolidayBySlug } from './hongKongBaliHolidayData';
import { baliFamilyEscapeBaturJeepBySlug } from './baliFamilyEscapeBaturJeepData';
import { grandSingaporeMalaysiaBaliBySlug } from './grandSingaporeMalaysiaBaliData';
import { bestOfThailandSingaporeMalaysiaBaliBySlug } from './bestOfThailandSingaporeMalaysiaBaliData';
import { romanticBaliSidemenSeminyakBySlug } from './romanticBaliSidemenSeminyakData';
import { baliFamilyFlightsSafariBySlug } from './baliFamilyFlightsSafariData';
import { classicBaliBreakRaftingBySlug } from './classicBaliBreakRaftingData';
import { baliHoneymoonRooftopDinnerBySlug } from './baliHoneymoonRooftopDinnerData';
import { baliCouplesEscapeRaftingBySlug } from './baliCouplesEscapeRaftingData';
import { grandBaliCouplesNusaPenidaBySlug } from './grandBaliCouplesNusaPenidaData';
import { grandBaliFamilyWaterbomBySlug } from './grandBaliFamilyWaterbomData';
import { baliBucketListFlightsBySlug } from './baliBucketListFlightsData';
import { baliCouplesHolidayFlightsBySlug } from './baliCouplesHolidayFlightsData';
import { baliAndPhuketHolidayBySlug } from './baliAndPhuketHolidayData';

export const BY_SLUG = {
  [detail0.slug]: { detail: detail0, route: route0, glance: glance0, crumbs: crumbs0 },
  [detail1.slug]: { detail: detail1, route: route1, glance: glance1, crumbs: crumbs1 },
  [detail2.slug]: { detail: detail2, route: route2, glance: glance2, crumbs: crumbs2 },
  [detail3.slug]: { detail: detail3, route: route3, glance: glance3, crumbs: crumbs3 },
  [detailGF.slug]: { detail: detailGF, route: routeGF, glance: glanceGF, crumbs: crumbsGF },
  [detailMM.slug]: { detail: detailMM, route: routeMM, glance: glanceMM, crumbs: crumbsMM },
  [detailMKJ.slug]: { detail: detailMKJ, route: routeMKJ, glance: glanceMKJ, crumbs: crumbsMKJ },
  [detailNP.slug]: { detail: detailNP, route: routeNP, glance: glanceNP, crumbs: crumbsNP },
  [detailPF.slug]: { detail: detailPF, route: routePF, glance: glancePF, crumbs: crumbsPF },
  [detailND.slug]: { detail: detailND, route: routeND, glance: glanceND, crumbs: crumbsND },
  [detailNN.slug]: { detail: detailNN, route: routeNN, glance: glanceNN, crumbs: crumbsNN },
  ...vietnamBySlug,
  ...srilankaBySlug,
  ...malaysiaBySlug,
  ...singaporeBySlug,
  ...kazakhstanBySlug,
  ...bhutanBySlug,
  ...laosBySlug,
  ...japanBySlug,
  ...indonesiaBySlug,
  ...chinaBySlug,
  ...cambodiaBySlug,
  ...philippinesBySlug,
  ...icelandBySlug,
  ...europeBySlug,
  ...italyBySlug,
  ...greeceBySlug,
  ...norwayBySlug,
  ...irelandBySlug,
  ...spainBySlug,
  ...portugalBySlug,
  ...croatiaBySlug,
  ...englandBySlug,
  ...scotlandBySlug,
  ...finlandBySlug,
  ...swedenBySlug,
  ...thailandBySlug,
  ...maldivesBySlug,
  ...veniceViennaBySlug,
  ...icelandGlaciersBySlug,
  ...bestOfThailandSingaporeMalaysiaHongKongBySlug,
  ...bestOfPhuketKrabiBangkokBySlug,
  ...grandVietnamCambodiaThailandBySlug,
  ...bestOfSingaporeThailandBySlug,
  ...luxuryPhuketSamuiKrabiBySlug,
  ...bestOfPattayaBangkokPhuketBySlug,
  ...classicKrabiPhuketHolidayBySlug,
  ...baliPhuketIslandEscapeBySlug,
  ...honeymoonTrailPhuketKrabiSamuiBySlug,
  ...coastalMagicPhuketKrabiBySlug,
  ...bestOfThailandMalaysiaBySlug,
  ...romanticKrabiSamuiPhuketBySlug,
  ...grandBangkokPhuketKrabiBySlug,
  ...islandTrailsPhuketSamuiKrabiBySlug,
  ...phuketKohSamuiBeachEscapeBySlug,
  ...phuketPhiPhiPartyEscapeBySlug,
  ...luxuryBangkokPattayaEscapeBySlug,
  ...romanticSingaporeNightSafariSentosaBySlug,
  ...singaporeShortBreakNightSafariBySlug,
  ...singaporeFamilyUniversalStudiosBySlug,
  ...singaporeHighlightsSentosaGardensBySlug,
  ...singaporeWildlifeSkylineEscapeBySlug,
  ...singaporeCouplesAdventureCoveBySlug,
  ...singaporeCouplesSpecialJewelBySlug,
  ...singaporeFamilySafariCityLightsBySlug,
  ...singaporeWildTrailsIslandDaysBySlug,
  ...singaporeGentingDreamCruiseBySlug,
  ...singaporeHoneymoonGentingCruiseBySlug,
  ...singaporePenangRoyalCaribbeanBySlug,
  ...disneyAdventureCruiseSingaporeBySlug,
  ...singaporeMalaysiaHoneymoonBySlug,
  ...singaporeMalaysiaSentosaGentingBySlug,
  ...bestOfBaliUbudAndKutaBySlug,
  ...magicalBaliHolidayWithFlightsBySlug,
  ...luxuryBaliEscapeMountBaturBySlug,
  ...baliHoneymoonCandlelightDinnerBySlug,
  ...romanticBaliNusaPenidaBySlug,
  ...baliAdventureRaftingNusaPenidaBySlug,
  ...baliCouplesEscapeNightSafariBySlug,
  ...baliHoneymoonSeminyakBySlug,
  ...singaporeBaliHoneymoonBySlug,
  ...baliHoneymoonPirateCruiseBySlug,
  ...romanticBaliSunsetCruiseBySlug,
  ...bestOfBaliFlightsNusaPenidaBySlug,
  ...grandBaliSafariKecakBySlug,
  ...shortBaliEscapeFlightsBySlug,
  ...classicBaliHoneymoonSwingBySlug,
  ...highlightsOfBaliNusaPenidaUluwatuBySlug,
  ...bestOfBaliSunsetCruiseBySlug,
  ...romanticBaliVintageCarBySlug,
  ...baliEscapeBeachClubAtvBySlug,
  ...singaporeMalaysiaBaliHoneymoonBySlug,
  ...baliSingaporeFamilyHolidayBySlug,
  ...classicBaliGroupHolidayBySlug,
  ...baliFamilyHolidayNusaPenidaBySlug,
  ...hongKongBaliHolidayBySlug,
  ...baliFamilyEscapeBaturJeepBySlug,
  ...grandSingaporeMalaysiaBaliBySlug,
  ...bestOfThailandSingaporeMalaysiaBaliBySlug,
  ...romanticBaliSidemenSeminyakBySlug,
  ...baliFamilyFlightsSafariBySlug,
  ...classicBaliBreakRaftingBySlug,
  ...baliHoneymoonRooftopDinnerBySlug,
  ...baliCouplesEscapeRaftingBySlug,
  ...grandBaliCouplesNusaPenidaBySlug,
  ...grandBaliFamilyWaterbomBySlug,
  ...baliBucketListFlightsBySlug,
  ...baliCouplesHolidayFlightsBySlug,
  ...baliAndPhuketHolidayBySlug
};
