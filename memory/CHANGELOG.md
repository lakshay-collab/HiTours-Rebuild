
## Footer update (2026-06)
- Added thin black divider (border-onsurface/Ink) separating Hi Tours logo+socials top row from footer link columns, matching tourlane.de.
- Restructured footer: logo+socials now a full-width top row above the divider.
- Mobile optimization: footer link columns (Hi Tours, Destinations, Hi Tours Care) are now collapsible accordions (collapsed by default, chevron toggle) so fewer links show on mobile. Desktop (sm+) keeps full expanded grid.
- File: frontend/src/components/Footer.jsx. Verified via true mobile emulation (390px) collapsed/expanded + desktop 1440px screenshots.

## 2026-06 — Homepage TripShowcase mobile photo strip
- Mobile (<md): replaced 5-tile mosaic (420px) with horizontal snap-scroll strip of same-size landscape photos (16:10, 82% width, #tag overlay). Card height reduced ~240px. Desktop mosaic unchanged. Self-tested via 390px screenshot; user acceptance pending.

## 2026-06 — Remove "Tourlane" wording, replace with "Hi Tours"
- Renamed TourlaneLogo -> HiToursLogo (EgyptIcons.jsx), now renders /hitours-logo.webp with alt="Hi Tours"; updated imports/usages in EgyptNav.jsx & EgyptFooter.jsx (aria-label "Tourlane" -> "Hi Tours").
- Service menu key 'Tourlane App' -> 'Hi Tours App'.
- Asia listing ctaHref changed from tourlane.de enquiry URL to '#'.
- Updated source-comment mentions of Tourlane in egyptListingData/egyptDetailData/egyptImages/egyptData/asiaListingData/index.css.
- Left CDN image URLs (imgix/ctfassets/tourlane-experts) and local avatar filenames (/egypt/tourlaner*.webp) untouched to avoid breaking images (non-visible).
- Note: EgyptListing/EgyptDetail/AsiaListing already rendered Hi Tours Header/Footer/Logo.

## 2026-06 — Listing-card photos de-duplicated (Thailand + Vietnam)
- Thailand: Romantic Krabi/Samui/Phuket, Phuket & Phi Phi Party Escape and Honeymoon Trail all led with the same Phuket beach shot (their hero galleries overlapped and every file used `heroGallery.slice(0,4)`). All 16 imported Thailand trips now declare an explicit 4-image `cardImages` array with zero overlap across trips; fallbacks come from each trip's own destination/day photos.
- Siam Splendour card now uses `cardImages` from thailandData.js (PHI, PALACE, DANCE, hotel9) instead of its detail gallery, and the two legacy Thailand packages' galleries were re-pointed so no lead/`images[0]` repeats.
- Vietnam: 5 of 7 packages led with /vietnam-packages/halong-aerial.webp; galleries reassigned so each package has a unique lead (sapa, trangan, halongCover, danang, hoianBoats, phuquocCover, hcmc) and alt text updated for the two that changed subject.
- Tooling: `scripts/thrillophilia/check_card_images.py` (fails on any shared card photo) and `plan_card_images.py` (suggests a conflict-free set). THRILLOPHILIA_IMPORT.md section 2 + checklist now require the uniqueness check.
- Verified at runtime on /asien/thailand/holidays (18 cards, 18 unique), /asien/thailand/honeymoons, /asien/thailand, /asien/vietnam/holidays, /afrika/aegypten/holidays, /asien/singapore/holidays, /asien/sri-lanka/holidays — zero repeats.
- KNOWN, NOT FIXED: the script-generated destinations (Japan, China, Indonesia, Cambodia, Laos, Philippines, Italy, Iceland, Greece, Norway, Ireland, Spain, Portugal, Croatia, England, Scotland, Finland, Sweden) ship a single country hero image, so all 6-10 cards on those listing pages share one photo. Needs per-country image sourcing.

## 2026-06 — Singapore batch import (15 trips)
- 17 Thrillophilia Singapore URLs extracted; two pairs were the same itinerary with a different wrapper (cruise-from-delhi duplicated the Genting trip; economical-super-deluxe duplicated the economical 4D at a higher hotel tier), so per user instruction only the better version of each was shipped. 15 unique trips live.
- New pages (all /asien/<slug>): romantic-singapore-night-safari-and-sentosa, singapore-short-break-with-night-safari, singapore-family-holiday-with-universal-studios, singapore-highlights-sentosa-and-gardens, singapore-wildlife-and-skyline-escape, singapore-for-couples-with-adventure-cove, singapore-couples-special-with-jewel-changi, singapore-family-safari-and-city-lights, singapore-wild-trails-and-island-days, singapore-with-the-genting-dream-cruise, singapore-honeymoon-with-the-genting-dream-cruise, singapore-and-penang-on-royal-caribbean, disney-adventure-cruise-from-singapore, singapore-and-malaysia-honeymoon, singapore-and-malaysia-with-sentosa-and-genting.
- Prices are round(source INR x 0.95); first hotel option per city; cruise ships modelled as the stay for their nights; all copy written fresh (check_trip.py enforces no 8-word overlap, no dashes, matching counts).
- The two Singapore + Kuala Lumpur trips name both countries and are registered on both the Singapore and Malaysia holiday pages. Singapore listing now shows 22 holidays with a Cruise theme chip (5).
- build_trip.py now emits `places` and `href` on every Product (the gap that previously sent Thailand cards to the Egypt route), plus new scripts apply_card_images.py / plan_card_images.py --freeze to assign globally unique listing-card photos.
- Verified by testing agent iteration_46.json: 15/15 detail pages render with correct day tabs, zero broken images and country-correct recommendations; zero duplicate card photos on the Singapore, Malaysia and Thailand grids; Cruise filter returns 5.
- 2026-06: Dynamic Theme + Experiences filters on all country holidays pages (tuned for Singapore/Thailand); Experiences strip above cards; tripIndex.js registry; suggest_highlights.py; FILTERS.md. Tests: iteration_47, iteration_48.

## 2026-06 — Country landing pages bypassed
- All country root routes (e.g. /asien/singapore, /asien/thailand, /europa/italy, /afrika/aegypten) now redirect straight to their `/holidays` listing (App.js `COUNTRY_ROOTS`).
- Intermediate country listing pages are hidden (components kept in /pages, no longer routed).
- Region pages (/asien, /europa) unchanged.
- Breadcrumbs drop the now-redundant country crumb on country holidays pages (EgyptHolidays.jsx).

## 2026-06 Our retail office page + Thrillophilia batch mode
- /our-office: banner now "Our retail office" with new pan-India copy; removed head office / Hi Tours India Gurgaon / planning studio copy; Sales and Operations opening times always visible as two cards; map is a shorter rounded card.
- THRILLOPHILIA_IMPORT.md: added section 0 BATCH MODE (urls file, batches of 10, resume rule, per-link fail fast, single end-of-run gate), section 5B country route table, section 5C new country procedure. Trip page output and report format unchanged.

## 2026-06 Thrillophilia Bali import, batches 1 and 2 (17 trips live)
Built from 48 user supplied links. Pipeline: extract_batch -> spec json -> build_trip -> register_trip -> check_trip -> apply_card_images -> check_card_images.
register_trip.py was fixed: the slug registry is tours/tripIndex.js (BY_SLUG), not EgyptDetail.jsx, and country product arrays are multi line.
Live (all /asien/<slug>/, registered on /asien/indonesia/holidays):
best-of-bali-with-ubud-and-kuta, magical-bali-holiday-with-flights, luxury-bali-escape-with-mount-batur, bali-honeymoon-with-candlelight-dinner, romantic-bali-honeymoon-with-nusa-penida, bali-adventure-with-rafting-and-nusa-penida, bali-couples-escape-with-night-safari, best-of-bali-honeymoon-with-seminyak, best-of-singapore-and-bali-honeymoon (also on singapore listing), bali-honeymoon-with-pirate-dinner-cruise, romantic-bali-getaway-with-sunset-cruise, best-of-bali-with-flights-and-nusa-penida, grand-bali-holiday-with-safari-and-kecak, short-bali-escape-with-flights, classic-bali-honeymoon-with-bali-swing, highlights-of-bali-with-nusa-penida-and-uluwatu, best-of-bali-with-sunset-cruise
Skipped, source itinerary has more days than the duration label (needs a decision): uncover-bali (8 days vs 7D), highlights-of-bali (10 days vs 7D, one hotel with 0 photos), bali-honeymoon-special (8 days vs 6D).
Remaining links: /app/import/urls_b3.txt, urls_b4.txt, urls_b5.txt (28 links, all extracted to /app/import/<slug>/raw.json).

### Bali import resume notes (batch 4 and 5)
Built so far (27 trips, source slugs): see CHANGELOG entry above plus bali-couple-tour, the-unbelievable-bali-deal, singapore-malaysia-bali-honeymoon-package, tour-of-bali-and-singapore-for-7-days-and-6-nights, bali-at-a-glance-group-tour-package, family-getaway-to-bali, singapore-malaysia-bali-tour-package-from-delhi, hong-kong-and-bali-holiday-package, bali-family-getaway, singapore-malaysia-indonesia-and-thailand-tour-package-from-india.
Skip as exact duplicates of an already built itinerary (only the departure city and price differ): bali-tour-package-with-water-sports-from-mumbai, bali-tour-package-with-water-sports-from-ahmedabad, rediscover-bali-in-6-days-from-mumbai, bali-exotic-honeymoon-tour-with-cruise-from-mumbai.
Still to build: bali-couple-special, honeymoon-getaway-to-bali, bali-package-from-delhi-for-family, bali-honeymoon-retreat, bali-couple-escape, bali-trip-for-couples, bali-honeymoon-getaway, bali-tour-packages-for-couple-including-flights, romantic-retreat-in-bali, bali-phuket-tour-package, bali-family-vacation, bali-bucket-list-getaway, romantic-bali-hideaway, bali-sightseeing-tour.
Rule used when the duration label disagrees with the itinerary: trust the itinerary when hotel nights plus one equals the itinerary day count.
Workflow per trip: digest2.py <slug> -> write /app/import/spec_*.json -> build_trip.py -> check_trip.py -> register_trip.py <camel> indonesia [other countries] -> at the end apply_card_images.py + check_card_images.py over every Bali data file.

## 9 October 2026

### Destination hero videos (Bhutan, Japan, Malaysia, Maldives, Singapore)
- User supplied five mp4s; transcoded to 720p H.264 (~3.5-4.7 MB) plus VP9 WebM in `/app/frontend/public/hero/<country>.mp4|.webm`, poster frame as `<country>.webp`.
- Wired via `hero.video` / `hero.webm` / `hero.poster` in each `<country>ListingData.js`; rendered by the existing Egypt/Thailand treatment (`EgyptHero.jsx`, `EgyptHolidays.jsx` `HeroMedia`).
- `EgyptHero` and `HeroMedia` now render the WebM `<source>` only when `hero.webm` exists (previously derived blindly from the mp4 path, which 404'd). Thailand/Sri Lanka/Vietnam data updated with explicit `webm` keys.
- Verified: all five autoplay, muted, loop, playsInline, object-cover, dark gradient overlay unchanged.

### Search (`components/SearchBar.jsx`)
- Only destinations with a live country route appear (irrelevant entries such as Australia removed).
- Added a REGIONS entry for `Bali` -> `/asien/indonesia`, and an alias string on Indonesia so "bali" matches both Bali and Indonesia.

### Star ratings
- Single rating colour site-wide: `#00B67A` (the green already used in the Egypt reviews block). `Rating.jsx` `BoxStars`/`BrandStars` default to it, so footer, testimonials and all review blocks match.

### Promotion calendar (`sale.js`, `components/sale/*`)
- Five dated promotions from the merchandising sheet: Diwali (11 Oct - 5 Nov 26, started early on request), Year-End (6 Nov - 22 Dec 26), Republic Day (5 - 26 Jan 27), Good Friday (1 Feb - 20 Mar 27), Independence Day (15 Jul - 15 Aug 27). Active one picked by IST date; no `forceActive` flags.
- Pricing: `markup` (5%) lifts the struck list price, `percent` (5%) is the real saving, `saleBadgePercent()` = 10. Badges and SAVE chip read 10%, net saving stays 5%.
- Per-occasion art in `saleThemes.js` + new SVGs in `SaleIcons.jsx`: Diwali = diya + firework + rangoli; Year-End = glass bauble + champagne (no Santa hats); Republic/Independence = tricolour + kite; Good Friday = dove + blossom. `SaleConfetti.jsx` swaps the drifting particles (diya sparks, snow, kites, petals) and `promo-bar-*` gradients in `index.css` recolour the top bar.

### Careers page
- Hero heading changed to "Join Hi Tours".
- `components/CareersHeroVideo.jsx` embeds YouTube `GKPwXS3CKBw` via the IFrame API, muted, controls hidden, 11:00-11:30 window looped by seeking back on ENDED. Iframe is oversized (scale 1.45) so the player's logo/title overlays fall outside the frame, and only fades in on PLAYING so the team photo stays visible if playback is blocked.
- NOT VISUALLY VERIFIABLE from this environment: YouTube returns "Video unavailable" to the datacenter IP (yt-dlp is likewise blocked by the bot check). Self-hosting a 30 s clip would remove all YouTube branding for certain.

### Thrillophilia imports
- Bali/SE Asia batch finished: 36 trips live on Indonesia (old generic `indonesiaPackages` removed from the listing on request). Four source links were skipped as city-variant duplicates of trips already built; `rediscover-bali-in-6-days` 404s; `uncover-bali`, `highlights-of-bali`, `bali-honeymoon-special`, `bali-honeymoon-getaway` have itinerary days that contradict their duration labels.
- Japan batch started: all 49 links extracted, 13 trips built, checked and registered; old generic `japanPackages` removed from the Japan listing on request. 36 Japan links still to build, including three that need a South Korea country page.

### Japan import progress (9 Oct 2026, in flight)
36 of 49 Japan links built, checked and registered (tripIndex + japanToursData). Still to build:
chronicles-of-japan, offbeat-wonders-of-japan, panoramic-japan, scenic-trails-of-japan, japan-romance-trail,
japan-autumn-highlights-in-tokyo-mt-fuji-hiroshima-and-osaka, best-of-japan-tokyo-and-hokkaido,
japan-landscapes-and-legends, japan-south-korea-tour-package, getaway-to-south-korea-japan,
south-korea-and-japan-group-tour. (38 of 49 built as of this note.)
Process per trip: digest2.py <slug> -> write /app/import/spec_*.json -> build_trip.py -> check_trip.py -> register_trip.py <camel> japan.
South Korea page is live at /asien/south-korea (southKoreaListingData.js, pages/SouthKoreaListing.jsx, tours/southKoreaToursData.js
with an empty southKoreaProducts array - the first Korea trip must be added there by hand since register_trip.py needs an existing import line).

Japan duplicates skipped (identical itinerary to an already built trip, only the marketing title differs):
- japan-autumn-highlights-in-tokyo-mt-fuji-hiroshima-and-osaka = best-of-japan-tokyo-and-hokkaido (same hotels, same 9 days, INR 206000 vs 206044)
Remaining to build after 40 of 49: chronicles-of-japan, offbeat-wonders-of-japan, panoramic-japan, scenic-trails-of-japan, japan-landscapes-and-legends, japan-south-korea-tour-package, getaway-to-south-korea-japan, south-korea-and-japan-group-tour.

### Japan import complete (2026-06)
- All 49 Thrillophilia Japan links processed: 48 live Japan trips, 1 skipped as a duplicate
  (japan-autumn-highlights-in-tokyo-mt-fuji-hiroshima-and-osaka is the same itinerary, hotels and
  price as best-of-japan-tokyo-and-hokkaido, only the marketing title differs).
- Final batch built, validated with scripts/thrillophilia/check_trip.py and registered:
  journeyNorthTohokuHokkaido, cherryBlossomTrailsJapan, japanRomanceTrailHokkaido, bestOfTokyoAndHokkaido,
  scenicTrailsJapanNagano, chroniclesOfJapanIslandRoute, panoramicJapanParksAndTemples,
  offbeatJapanHiroshimaRoute, japanLegendsTempleStay, japanAndSouthKoreaDiscovery,
  koreaAndJapanShortGroupTour, koreaJapanHiroshimaGetaway.
- New South Korea destination (/asien/south-korea/holidays) carries the 3 Japan + South Korea combos,
  which are registered in both japanToursData.js and southKoreaToursData.js.
- Listing-card photos regenerated across all 48 Japan trips with apply_card_images.py so no two cards repeat a shot.
- Source inconsistencies fixed rather than bypassed: hotel night totals that did not add up to the stated
  nights (panoramic-japan, japan-romance-trail, the two Korea combos), source-copy overlap in the
  inclusions text, and the dash in the Holiday Inn Express Osaka hotel name (handled with hotel_label).
- Verified by testing agent, iteration_54.json: Japan listing 48 cards, South Korea 3 cards,
  all new detail routes render, 0 broken images, 100% frontend pass.

### Vietnam import in progress (June 2026)
User gave 45 Thrillophilia Vietnam links; all 45 extracted to import/<slug>/raw.json (list in import/vietnam_urls.txt).
User approved: (1) remove the 6 legacy generic Vietnam packages from the listing - DONE, vietnamProducts now only
imported trips; (2) register multi-country trips on Vietnam plus every country they visit (Cambodia, Laos, Thailand).
Workflow per trip: python3 scripts/thrillophilia/digest2.py <source-slug> -> write import/spec_<name>.json ->
build_trip.py -> check_trip.py -> register_trip.py <camel> vietnam [cambodia|laos|thailand].
At the end: apply_card_images.py on all vietnam trip files, then testing agent.

### China import in progress (June 2026)
User gave 18 Thrillophilia China links (16 unique after duplicates); all 16 extracted to import/<slug>/raw.json
(list in import/china_urls.txt). Legacy generic China packages removed from the listing, same as Japan/Vietnam/Indonesia.
Note: 'hidden-trails-of-japan' is a 15 day China + Japan trip (Beijing, Nanjing, Shanghai, Tokyo, Kawaguchiko, Kyoto)
so it must be registered in both china and japan.
Workflow per trip: digest2.py <slug> -> write import/spec_cn_<name>.json -> build_trip.py -> check_trip.py ->
register_trip.py <camel> china [japan]. At the end: apply_card_images.py on all china trip files, then testing agent.
Vietnam import is COMPLETE: 44 live products on /asien/vietnam/holidays, multi-country ones also on cambodia (19),
laos (11) and thailand (24) listings. Skipped as duplicate itineraries of already published trips:
vietnam-cambodia-tour-packages-from-mumbai and vietnam-and-cambodia-tour-packages-from-chennai (both identical to
vietnam-and-cambodia-packages-from-kolkata = saigon-phnom-penh-and-angkor, only the price differs).
China raw.json fix: Thrillophilia China pages ship almost no dest_gallery photos (1 per city), which made
build_trip.py fail with IndexError on stop_images. Fixed by seeding dest_gallery per city from the trip's own
`gallery` list (entries are dicts with a 'url' key), excluding hero tiles and hotel photos. Already applied to all
16 China raws. If a new China link is extracted later, re-run that seeding before build_trip.py.
