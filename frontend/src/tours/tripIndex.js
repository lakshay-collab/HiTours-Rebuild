// Every itinerary (detail/route/glance/crumbs) keyed by slug. Used by the detail page and the holidays filter model.
import { detail as detail0, route as route0, glance as glance0, crumbs as crumbs0 } from '../egyptDetailData';
import { detail as detail1, route as route1, glance as glance1, crumbs as crumbs1 } from '../moroccoEgyptData';
import { detail as detail3, route as route3, glance as glance3, crumbs as crumbs3 } from '../thailandData';
import { detail as detailGF, route as routeGF, glance as glanceGF, crumbs as crumbsGF } from './egyptGrandFestivalData';
import { detail as detailMM, route as routeMM, glance as glanceMM, crumbs as crumbsMM } from './misrMayaData';
import { detail as detailMKJ, route as routeMKJ, glance as glanceMKJ, crumbs as crumbsMKJ } from './misrKaJaaduData';
import { detail as detailNP, route as routeNP, glance as glanceNP, crumbs as crumbsNP } from './nilePharaohsData';
import { detail as detailPF, route as routePF, glance as glancePF, crumbs as crumbsPF } from './pharaohsFeluccasData';
import { detail as detailND, route as routeND, glance as glanceND, crumbs as crumbsND } from './nileDarshanData';
import { detail as detailNN, route as routeNN, glance as glanceNN, crumbs as crumbsNN } from './nileNoorData';
import { vietnamBySlug } from './vietnamToursData';
import { malaysiaBySlug } from './malaysiaToursData';
import { singaporeBySlug } from './singaporeToursData';
import { kazakhstanBySlug } from './kazakhstanToursData';
import { bhutanBySlug } from './bhutanToursData';
import { laosBySlug } from './laosToursData';
import { japanBySlug } from './japanToursData';
import { indonesiaBySlug } from './indonesiaToursData';
import { chinaBySlug } from './chinaToursData';
import { cambodiaBySlug } from './cambodiaToursData';
import { europeBySlug } from './europeToursData';
import { italyBySlug } from './italyToursData';
import { greeceBySlug } from './greeceToursData';
import { norwayBySlug } from './norwayToursData';
import { irelandBySlug } from './irelandToursData';
import { finlandBySlug } from './finlandToursData';
import { swedenBySlug } from './swedenToursData';
import { thailandBySlug } from './thailandToursData';
import { veniceViennaBySlug } from './veniceViennaData';
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
import { discoverJapanFujiKyotoBySlug } from './discoverJapanFujiKyotoData';
import { jewelsOfJapanMountFujiBySlug } from './jewelsOfJapanMountFujiData';
import { legendsOfJapanHiroshimaBySlug } from './legendsOfJapanHiroshimaData';
import { japanUnveiledShortBreakBySlug } from './japanUnveiledShortBreakData';
import { bestOfJapanThemeParksBySlug } from './bestOfJapanThemeParksData';
import { bestOfJapanShrinesSkylinesBySlug } from './bestOfJapanShrinesSkylinesData';
import { urbanWondersTokyoOsakaBySlug } from './urbanWondersTokyoOsakaData';
import { treasuresOfJapanKyotoBySlug } from './treasuresOfJapanKyotoData';
import { taleOfTwoCitiesJapanBySlug } from './taleOfTwoCitiesJapanData';
import { japanThroughTimeHistoricTrailsBySlug } from './japanThroughTimeHistoricTrailsData';
import { japanRomanticEscapeImperialBySlug } from './japanRomanticEscapeImperialData';
import { classicWondersJapanGroupTourBySlug } from './classicWondersJapanGroupTourData';
import { japanCulturalTrailsGroupTourBySlug } from './japanCulturalTrailsGroupTourData';
import { scenicJapanThreeCitiesBySlug } from './scenicJapanThreeCitiesData';
import { centralJapanFujiGroupTourBySlug } from './centralJapanFujiGroupTourData';
import { exploreJapanTokyoOsakaBySlug } from './exploreJapanTokyoOsakaData';
import { japanFamilyOdysseyParksBySlug } from './japanFamilyOdysseyParksData';
import { bestOfHokkaidoNorthernJapanBySlug } from './bestOfHokkaidoNorthernJapanData';
import { japanFamilyTempleThemeBySlug } from './japanFamilyTempleThemeData';
import { talesOfJapanRyokanFamilyBySlug } from './talesOfJapanRyokanFamilyData';
import { japanGrandTourBlossomBySlug } from './japanGrandTourBlossomData';
import { romanticJapanTowersTemplesBySlug } from './romanticJapanTowersTemplesData';
import { japanDelightsRyokanTrailBySlug } from './japanDelightsRyokanTrailData';
import { classicJapanTrailsShortBySlug } from './classicJapanTrailsShortData';
import { japanInBloomGroupTourBySlug } from './japanInBloomGroupTourData';
import { japanCulturalTalesWestBySlug } from './japanCulturalTalesWestData';
import { southernJapanInlandSeaBySlug } from './southernJapanInlandSeaData';
import { glimpseOfJapanShortGroupBySlug } from './glimpseOfJapanShortGroupData';
import { japanCoupleSnowMonkeysBySlug } from './japanCoupleSnowMonkeysData';
import { coupleGetawayRisingSunBySlug } from './coupleGetawayRisingSunData';
import { japanNutshellGrandCircuitBySlug } from './japanNutshellGrandCircuitData';
import { romanticJapanCulturalOdysseyBySlug } from './romanticJapanCulturalOdysseyData';
import { japanCulturalScenicKansaiFirstBySlug } from './japanCulturalScenicKansaiFirstData';
import { japanSignatureJourneyBySlug } from './japanSignatureJourneyData';
import { japanAutumnNikkoKaruizawaBySlug } from './japanAutumnNikkoKaruizawaData';
import { japanRaceWeekendTourBySlug } from './japanRaceWeekendTourData';
import { journeyNorthTohokuHokkaidoBySlug } from './journeyNorthTohokuHokkaidoData';
import { cherryBlossomTrailsJapanBySlug } from './cherryBlossomTrailsJapanData';
import { japanRomanceTrailHokkaidoBySlug } from './japanRomanceTrailHokkaidoData';
import { bestOfTokyoAndHokkaidoBySlug } from './bestOfTokyoAndHokkaidoData';
import { scenicTrailsJapanNaganoBySlug } from './scenicTrailsJapanNaganoData';
import { chroniclesOfJapanIslandRouteBySlug } from './chroniclesOfJapanIslandRouteData';
import { panoramicJapanParksAndTemplesBySlug } from './panoramicJapanParksAndTemplesData';
import { offbeatJapanHiroshimaRouteBySlug } from './offbeatJapanHiroshimaRouteData';
import { japanLegendsTempleStayBySlug } from './japanLegendsTempleStayData';
import { japanAndSouthKoreaDiscoveryBySlug } from './japanAndSouthKoreaDiscoveryData';
import { koreaAndJapanShortGroupTourBySlug } from './koreaAndJapanShortGroupTourData';
import { koreaJapanHiroshimaGetawayBySlug } from './koreaJapanHiroshimaGetawayData';
import { glimpseOfVietnamHanoiBySlug } from './glimpseOfVietnamHanoiData';
import { delightsOfVietnamCruiseBySlug } from './delightsOfVietnamCruiseData';
import { bestOfHanoiNinhBinhBayBySlug } from './bestOfHanoiNinhBinhBayData';
import { hanoiAndHalongOnAJunkBySlug } from './hanoiAndHalongOnAJunkData';
import { wondersOfVietnamSapaBayBySlug } from './wondersOfVietnamSapaBayData';
import { northernVietnamSapaNinhBinhBySlug } from './northernVietnamSapaNinhBinhData';
import { hanoiSapaAndTheBayBySlug } from './hanoiSapaAndTheBayData';
import { northVietnamHamRongTrekBySlug } from './northVietnamHamRongTrekData';
import { northVietnamSixDayCircuitBySlug } from './northVietnamSixDayCircuitData';
import { vietnamBanGiocWaterfallsBySlug } from './vietnamBanGiocWaterfallsData';
import { tasteNorthAndSouthVietnamBySlug } from './tasteNorthAndSouthVietnamData';
import { bestSellingVietnamSixDaysBySlug } from './bestSellingVietnamSixDaysData';
import { exoticVietnamBaNaHoiAnBySlug } from './exoticVietnamBaNaHoiAnData';
import { vietnamExplorerThreeRegionsBySlug } from './vietnamExplorerThreeRegionsData';
import { rediscoverVietnamCompleteBySlug } from './rediscoverVietnamCompleteData';
import { rediscoverVietnamHoneymoonBySlug } from './rediscoverVietnamHoneymoonData';
import { vietnamSightseeingPhongNhaBySlug } from './vietnamSightseeingPhongNhaData';
import { getawayVietnamPhuQuocBySlug } from './getawayVietnamPhuQuocData';
import { sixteenDaysAcrossVietnamBySlug } from './sixteenDaysAcrossVietnamData';
import { luxuriousVietnamNhaTrangBySlug } from './luxuriousVietnamNhaTrangData';
import { highlightsVietnamGroupTourBySlug } from './highlightsVietnamGroupTourData';
import { vietnamGroupTourSouthNorthBySlug } from './vietnamGroupTourSouthNorthData';
import { vietnameseDelightsGroupTourBySlug } from './vietnameseDelightsGroupTourData';
import { vietnameseOdysseyGroupTourBySlug } from './vietnameseOdysseyGroupTourData';
import { southAndCentralVietnamBySlug } from './southAndCentralVietnamData';
import { vietnamRomanticEscapeIslandsBySlug } from './vietnamRomanticEscapeIslandsData';
import { getawayVietnamGrandWorldBySlug } from './getawayVietnamGrandWorldData';
import { daNangHoiAnCoastalBreakBySlug } from './daNangHoiAnCoastalBreakData';
import { vietnamFullCountryFortnightBySlug } from './vietnamFullCountryFortnightData';
import { saigonAndTheDeltaBreakBySlug } from './saigonAndTheDeltaBreakData';
import { hanoiAndNhaTrangEscapeBySlug } from './hanoiAndNhaTrangEscapeData';
import { vietnamNorthSouthSevenDaysBySlug } from './vietnamNorthSouthSevenDaysData';
import { vietnamShortNorthSouthBySlug } from './vietnamShortNorthSouthData';
import { saigonAndAngkorEightBySlug } from './saigonAndAngkorEightData';
import { vietnamCambodiaFourCitiesBySlug } from './vietnamCambodiaFourCitiesData';
import { saigonPhnomPenhAngkorBySlug } from './saigonPhnomPenhAngkorData';
import { glimpseVietnamSouthToNorthBySlug } from './glimpseVietnamSouthToNorthData';
import { vietnamLaosCambodiaTrioBySlug } from './vietnamLaosCambodiaTrioData';
import { thailandCambodiaVietnamTenBySlug } from './thailandCambodiaVietnamTenData';
import { bestOfVietnamCambodiaFifteenBySlug } from './bestOfVietnamCambodiaFifteenData';
import { vietnamCambodiaHoneymoonTenBySlug } from './vietnamCambodiaHoneymoonTenData';
import { cambodiaAndVietnamTenDaysBySlug } from './cambodiaAndVietnamTenDaysData';
import { indochinaAndThailandGrandBySlug } from './indochinaAndThailandGrandData';
import { glimpseOfShanghaiBreakBySlug } from './glimpseOfShanghaiBreakData';
import { ancientWondersBeijingBySlug } from './ancientWondersBeijingData';
import { highlightsOfBeijingShortBySlug } from './highlightsOfBeijingShortData';
import { glimpseOfBeijingUniversalBySlug } from './glimpseOfBeijingUniversalData';
import { grandShanghaiDisneylandHolidayBySlug } from './grandShanghaiDisneylandHolidayData';
import { classicShanghaiGreatWallBreakBySlug } from './classicShanghaiGreatWallBreakData';
import { highlightsOfShanghaiDisneylandBySlug } from './highlightsOfShanghaiDisneylandData';
import { bestOfShanghaiDisneyAndWallBySlug } from './bestOfShanghaiDisneyAndWallData';
import { bestOfBeijingWallAndUniversalBySlug } from './bestOfBeijingWallAndUniversalData';
import { discoverBeijingShortBreakBySlug } from './discoverBeijingShortBreakData';
import { gemsOfChinaShanghaiXianBySlug } from './gemsOfChinaShanghaiXianData';
import { bestOfChinaGoldenTriangleBySlug } from './bestOfChinaGoldenTriangleData';
import { discoverChinaBeijingShanghaiBySlug } from './discoverChinaBeijingShanghaiData';
import { highlightsOfChinaThreeCitiesBySlug } from './highlightsOfChinaThreeCitiesData';
import { grandChinaYangtzeCruiseBySlug } from './grandChinaYangtzeCruiseData';
import { bestOfChinaAndJapanGrandTourBySlug } from './bestOfChinaAndJapanGrandTourData';
import { almatyShortBreakShymbulakBySlug } from './almatyShortBreakShymbulakData';
import { grandAlmatyCharynKolsaiBySlug } from './grandAlmatyCharynKolsaiData';
import { almatyExplorerKokTobeIssykBySlug } from './almatyExplorerKokTobeIssykData';
import { almatyWeekWithDelhiFlightsBySlug } from './almatyWeekWithDelhiFlightsData';
import { classicAlmatyWithDelhiFlightsBySlug } from './classicAlmatyWithDelhiFlightsData';
import { almatyHighlightsWithDelhiFlightsBySlug } from './almatyHighlightsWithDelhiFlightsData';
import { sevenDaysAlmatyAltynEmelBySlug } from './sevenDaysAlmatyAltynEmelData';
import { almatyAndBakuMountainsCaspianBySlug } from './almatyAndBakuMountainsCaspianData';
import { almatyAndBakuTufandagCableCarBySlug } from './almatyAndBakuTufandagCableCarData';
import { almatyBakuShahdagMountainsBySlug } from './almatyBakuShahdagMountainsData';
import { grandAlmatyBakuShekiBySlug } from './grandAlmatyBakuShekiData';
import { almatyWinterGroupTourFlightsBySlug } from './almatyWinterGroupTourFlightsData';
import { almatyNatureWondersYoungBySlug } from './almatyNatureWondersYoungData';
import { silkRoadTashkentSamarkandAlmatyBySlug } from './silkRoadTashkentSamarkandAlmatyData';
import { wondersOfBhutanParoExcursionBySlug } from './wondersOfBhutanParoExcursionData';
import { glimpseOfBhutanSacredSitesBySlug } from './glimpseOfBhutanSacredSitesData';
import { experienceBhutanFourValleysBySlug } from './experienceBhutanFourValleysData';
import { nepalAndBhutanHimalayanJourneyBySlug } from './nepalAndBhutanHimalayanJourneyData';
import { bhutanDochulaAndPhobjikhaBySlug } from './bhutanDochulaAndPhobjikhaData';
import { bhutanTaktsangEightDaysBySlug } from './bhutanTaktsangEightDaysData';
import { gemsOfBhutanThimphuPunakhaParoBySlug } from './gemsOfBhutanThimphuPunakhaParoData';
import { escapeToBhutanThreeValleysBySlug } from './escapeToBhutanThreeValleysData';
import { bhutanJourneyToThePeaksBySlug } from './bhutanJourneyToThePeaksData';
import { bhutanSikkimAndDarjeelingBySlug } from './bhutanSikkimAndDarjeelingData';
import { mesmerizingBhutanShortBreakBySlug } from './mesmerizingBhutanShortBreakData';
import { discoveringBhutanPunakhaDayTripBySlug } from './discoveringBhutanPunakhaDayTripData';
import { exclusiveTripToBhutanBySlug } from './exclusiveTripToBhutanData';
import { bhutanTenDaysWithPhobjikhaBySlug } from './bhutanTenDaysWithPhobjikhaData';
import { nepalBhutanAndSikkimGrandBySlug } from './nepalBhutanAndSikkimGrandData';
import { bhutanAdventureGroupTourBySlug } from './bhutanAdventureGroupTourData';
import { bhutanFromSiliguriBySlug } from './bhutanFromSiliguriData';
import { bhutanNewYearSpecialBySlug } from './bhutanNewYearSpecialData';
import { premiumBhutanGroupTourBySlug } from './premiumBhutanGroupTourData';
import { bhutanFromJaigaonBySlug } from './bhutanFromJaigaonData';
import { bhutanExclusiveFourNightsBySlug } from './bhutanExclusiveFourNightsData';
import { bestOfBhutanTaktsangBySlug } from './bestOfBhutanTaktsangData';
import { bestOfBhutanTshechuBySlug } from './bestOfBhutanTshechuData';
import { paradisicBhutanSuperDeluxeBySlug } from './paradisicBhutanSuperDeluxeData';
import { bhutanTaktsangLuxuryBySlug } from './bhutanTaktsangLuxuryData';
import { bhutanGetawayGangteyCranesBySlug } from './bhutanGetawayGangteyCranesData';
import { bhutanTaktsangSuperDeluxeBySlug } from './bhutanTaktsangSuperDeluxeData';
import { bhutanThimphuTshechuFestivalBySlug } from './bhutanThimphuTshechuFestivalData';
import { bhutanPhobjikhaLuxuryBySlug } from './bhutanPhobjikhaLuxuryData';
import { bhutanFromSiliguriLuxuryBySlug } from './bhutanFromSiliguriLuxuryData';
import { bestOfBhutanTaktsangSuperDeluxeBySlug } from './bestOfBhutanTaktsangSuperDeluxeData';
import { bhutanPhobjikhaSuperDeluxeBySlug } from './bhutanPhobjikhaSuperDeluxeData';
import { paradisicBhutanLuxuryBySlug } from './paradisicBhutanLuxuryData';
import { paroShortBreakTaktsangBySlug } from './paroShortBreakTaktsangData';
import { italyAndSwitzerlandRomeVeniceTitlisBySlug } from './italyAndSwitzerlandRomeVeniceTitlisData';
import { parisAndSwitzerlandEiffelRigiBySlug } from './parisAndSwitzerlandEiffelRigiData';
import { westernEuropeGroupTourAlpsAmsterdamBySlug } from './westernEuropeGroupTourAlpsAmsterdamData';
import { switzerlandItalyHoneymoonGondolaBySlug } from './switzerlandItalyHoneymoonGondolaData';
import { romeFlorenceParisHoneymoonBySlug } from './romeFlorenceParisHoneymoonData';
import { enchantingGreeceAthensMykonosBySlug } from './enchantingGreeceAthensMykonosData';
import { spectacularAthensOlympiaDelphiBySlug } from './spectacularAthensOlympiaDelphiData';
import { romanticGreeceAthensSantoriniBySlug } from './romanticGreeceAthensSantoriniData';
import { majesticGreeceAthensMykonosSantoriniBySlug } from './majesticGreeceAthensMykonosSantoriniData';
import { exoticGreeceIslandHoppingBySlug } from './exoticGreeceIslandHoppingData';

export const BY_SLUG = {
  [detail0.slug]: { detail: detail0, route: route0, glance: glance0, crumbs: crumbs0 },
  [detail1.slug]: { detail: detail1, route: route1, glance: glance1, crumbs: crumbs1 },
  [detail3.slug]: { detail: detail3, route: route3, glance: glance3, crumbs: crumbs3 },
  [detailGF.slug]: { detail: detailGF, route: routeGF, glance: glanceGF, crumbs: crumbsGF },
  [detailMM.slug]: { detail: detailMM, route: routeMM, glance: glanceMM, crumbs: crumbsMM },
  [detailMKJ.slug]: { detail: detailMKJ, route: routeMKJ, glance: glanceMKJ, crumbs: crumbsMKJ },
  [detailNP.slug]: { detail: detailNP, route: routeNP, glance: glanceNP, crumbs: crumbsNP },
  [detailPF.slug]: { detail: detailPF, route: routePF, glance: glancePF, crumbs: crumbsPF },
  [detailND.slug]: { detail: detailND, route: routeND, glance: glanceND, crumbs: crumbsND },
  [detailNN.slug]: { detail: detailNN, route: routeNN, glance: glanceNN, crumbs: crumbsNN },
  ...vietnamBySlug,
  ...malaysiaBySlug,
  ...singaporeBySlug,
  ...kazakhstanBySlug,
  ...bhutanBySlug,
  ...laosBySlug,
  ...japanBySlug,
  ...indonesiaBySlug,
  ...chinaBySlug,
  ...cambodiaBySlug,
  ...europeBySlug,
  ...italyBySlug,
  ...greeceBySlug,
  ...norwayBySlug,
  ...irelandBySlug,
  ...finlandBySlug,
  ...swedenBySlug,
  ...thailandBySlug,
  ...veniceViennaBySlug,
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
  ...baliAndPhuketHolidayBySlug,
  ...discoverJapanFujiKyotoBySlug,
  ...jewelsOfJapanMountFujiBySlug,
  ...legendsOfJapanHiroshimaBySlug,
  ...japanUnveiledShortBreakBySlug,
  ...bestOfJapanThemeParksBySlug,
  ...bestOfJapanShrinesSkylinesBySlug,
  ...urbanWondersTokyoOsakaBySlug,
  ...treasuresOfJapanKyotoBySlug,
  ...taleOfTwoCitiesJapanBySlug,
  ...japanThroughTimeHistoricTrailsBySlug,
  ...japanRomanticEscapeImperialBySlug,
  ...classicWondersJapanGroupTourBySlug,
  ...japanCulturalTrailsGroupTourBySlug,
  ...scenicJapanThreeCitiesBySlug,
  ...centralJapanFujiGroupTourBySlug,
  ...exploreJapanTokyoOsakaBySlug,
  ...japanFamilyOdysseyParksBySlug,
  ...bestOfHokkaidoNorthernJapanBySlug,
  ...japanFamilyTempleThemeBySlug,
  ...talesOfJapanRyokanFamilyBySlug,
  ...japanGrandTourBlossomBySlug,
  ...romanticJapanTowersTemplesBySlug,
  ...japanDelightsRyokanTrailBySlug,
  ...classicJapanTrailsShortBySlug,
  ...japanInBloomGroupTourBySlug,
  ...japanCulturalTalesWestBySlug,
  ...southernJapanInlandSeaBySlug,
  ...glimpseOfJapanShortGroupBySlug,
  ...japanCoupleSnowMonkeysBySlug,
  ...coupleGetawayRisingSunBySlug,
  ...japanNutshellGrandCircuitBySlug,
  ...romanticJapanCulturalOdysseyBySlug,
  ...japanCulturalScenicKansaiFirstBySlug,
  ...japanSignatureJourneyBySlug,
  ...japanAutumnNikkoKaruizawaBySlug,
  ...japanRaceWeekendTourBySlug,
  ...journeyNorthTohokuHokkaidoBySlug,
  ...cherryBlossomTrailsJapanBySlug,
  ...japanRomanceTrailHokkaidoBySlug,
  ...bestOfTokyoAndHokkaidoBySlug,
  ...scenicTrailsJapanNaganoBySlug,
  ...chroniclesOfJapanIslandRouteBySlug,
  ...panoramicJapanParksAndTemplesBySlug,
  ...offbeatJapanHiroshimaRouteBySlug,
  ...japanLegendsTempleStayBySlug,
  ...japanAndSouthKoreaDiscoveryBySlug,
  ...koreaAndJapanShortGroupTourBySlug,
  ...koreaJapanHiroshimaGetawayBySlug,
  ...glimpseOfVietnamHanoiBySlug,
  ...delightsOfVietnamCruiseBySlug,
  ...bestOfHanoiNinhBinhBayBySlug,
  ...hanoiAndHalongOnAJunkBySlug,
  ...wondersOfVietnamSapaBayBySlug,
  ...northernVietnamSapaNinhBinhBySlug,
  ...hanoiSapaAndTheBayBySlug,
  ...northVietnamHamRongTrekBySlug,
  ...northVietnamSixDayCircuitBySlug,
  ...vietnamBanGiocWaterfallsBySlug,
  ...tasteNorthAndSouthVietnamBySlug,
  ...bestSellingVietnamSixDaysBySlug,
  ...exoticVietnamBaNaHoiAnBySlug,
  ...vietnamExplorerThreeRegionsBySlug,
  ...rediscoverVietnamCompleteBySlug,
  ...rediscoverVietnamHoneymoonBySlug,
  ...vietnamSightseeingPhongNhaBySlug,
  ...getawayVietnamPhuQuocBySlug,
  ...sixteenDaysAcrossVietnamBySlug,
  ...luxuriousVietnamNhaTrangBySlug,
  ...highlightsVietnamGroupTourBySlug,
  ...vietnamGroupTourSouthNorthBySlug,
  ...vietnameseDelightsGroupTourBySlug,
  ...vietnameseOdysseyGroupTourBySlug,
  ...southAndCentralVietnamBySlug,
  ...vietnamRomanticEscapeIslandsBySlug,
  ...getawayVietnamGrandWorldBySlug,
  ...daNangHoiAnCoastalBreakBySlug,
  ...vietnamFullCountryFortnightBySlug,
  ...saigonAndTheDeltaBreakBySlug,
  ...hanoiAndNhaTrangEscapeBySlug,
  ...vietnamNorthSouthSevenDaysBySlug,
  ...vietnamShortNorthSouthBySlug,
  ...saigonAndAngkorEightBySlug,
  ...vietnamCambodiaFourCitiesBySlug,
  ...saigonPhnomPenhAngkorBySlug,
  ...glimpseVietnamSouthToNorthBySlug,
  ...vietnamLaosCambodiaTrioBySlug,
  ...thailandCambodiaVietnamTenBySlug,
  ...bestOfVietnamCambodiaFifteenBySlug,
  ...vietnamCambodiaHoneymoonTenBySlug,
  ...cambodiaAndVietnamTenDaysBySlug,
  ...indochinaAndThailandGrandBySlug,
  ...glimpseOfShanghaiBreakBySlug,
  ...ancientWondersBeijingBySlug,
  ...highlightsOfBeijingShortBySlug,
  ...glimpseOfBeijingUniversalBySlug,
  ...grandShanghaiDisneylandHolidayBySlug,
  ...classicShanghaiGreatWallBreakBySlug,
  ...highlightsOfShanghaiDisneylandBySlug,
  ...bestOfShanghaiDisneyAndWallBySlug,
  ...bestOfBeijingWallAndUniversalBySlug,
  ...discoverBeijingShortBreakBySlug,
  ...gemsOfChinaShanghaiXianBySlug,
  ...bestOfChinaGoldenTriangleBySlug,
  ...discoverChinaBeijingShanghaiBySlug,
  ...highlightsOfChinaThreeCitiesBySlug,
  ...grandChinaYangtzeCruiseBySlug,
  ...bestOfChinaAndJapanGrandTourBySlug,
  ...almatyShortBreakShymbulakBySlug,
  ...grandAlmatyCharynKolsaiBySlug,
  ...almatyExplorerKokTobeIssykBySlug,
  ...almatyWeekWithDelhiFlightsBySlug,
  ...classicAlmatyWithDelhiFlightsBySlug,
  ...almatyHighlightsWithDelhiFlightsBySlug,
  ...sevenDaysAlmatyAltynEmelBySlug,
  ...almatyAndBakuMountainsCaspianBySlug,
  ...almatyAndBakuTufandagCableCarBySlug,
  ...almatyBakuShahdagMountainsBySlug,
  ...grandAlmatyBakuShekiBySlug,
  ...almatyWinterGroupTourFlightsBySlug,
  ...almatyNatureWondersYoungBySlug,
  ...silkRoadTashkentSamarkandAlmatyBySlug,
  ...wondersOfBhutanParoExcursionBySlug,
  ...glimpseOfBhutanSacredSitesBySlug,
  ...experienceBhutanFourValleysBySlug,
  ...nepalAndBhutanHimalayanJourneyBySlug,
  ...bhutanDochulaAndPhobjikhaBySlug,
  ...bhutanTaktsangEightDaysBySlug,
  ...gemsOfBhutanThimphuPunakhaParoBySlug,
  ...escapeToBhutanThreeValleysBySlug,
  ...bhutanJourneyToThePeaksBySlug,
  ...bhutanSikkimAndDarjeelingBySlug,
  ...mesmerizingBhutanShortBreakBySlug,
  ...discoveringBhutanPunakhaDayTripBySlug,
  ...exclusiveTripToBhutanBySlug,
  ...bhutanTenDaysWithPhobjikhaBySlug,
  ...nepalBhutanAndSikkimGrandBySlug,
  ...bhutanAdventureGroupTourBySlug,
  ...bhutanFromSiliguriBySlug,
  ...bhutanNewYearSpecialBySlug,
  ...premiumBhutanGroupTourBySlug,
  ...bhutanFromJaigaonBySlug,
  ...bhutanExclusiveFourNightsBySlug,
  ...bestOfBhutanTaktsangBySlug,
  ...bestOfBhutanTshechuBySlug,
  ...paradisicBhutanSuperDeluxeBySlug,
  ...bhutanTaktsangLuxuryBySlug,
  ...bhutanGetawayGangteyCranesBySlug,
  ...bhutanTaktsangSuperDeluxeBySlug,
  ...bhutanThimphuTshechuFestivalBySlug,
  ...bhutanPhobjikhaLuxuryBySlug,
  ...bhutanFromSiliguriLuxuryBySlug,
  ...bestOfBhutanTaktsangSuperDeluxeBySlug,
  ...bhutanPhobjikhaSuperDeluxeBySlug,
  ...paradisicBhutanLuxuryBySlug,
  ...paroShortBreakTaktsangBySlug,
  ...italyAndSwitzerlandRomeVeniceTitlisBySlug,
  ...parisAndSwitzerlandEiffelRigiBySlug,
  ...westernEuropeGroupTourAlpsAmsterdamBySlug,
  ...switzerlandItalyHoneymoonGondolaBySlug,
  ...romeFlorenceParisHoneymoonBySlug,
  ...enchantingGreeceAthensMykonosBySlug,
  ...spectacularAthensOlympiaDelphiBySlug,
  ...romanticGreeceAthensSantoriniBySlug,
  ...majesticGreeceAthensMykonosSantoriniBySlug,
  ...exoticGreeceIslandHoppingBySlug
};
