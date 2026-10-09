
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
