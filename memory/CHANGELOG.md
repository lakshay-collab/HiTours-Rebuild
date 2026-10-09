
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
