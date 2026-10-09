# Thrillophilia to Hi Tours Trip Import (fast version)

Instructions for the Emergent agent. When I send Thrillophilia links, turn each link into a new trip page using the existing trip page template. Do all the links in one run.

- Reference page: /afrika/aegypten/morocco-egypt-palaces-pyramids/
- Reference data file: frontend/src/moroccoEgyptData.js. It links images straight from Thrillophilia; do the same.


## SPEED RULES (follow strictly)

1. Do not download, resize, convert or copy any image. Link images directly from Thrillophilia, exactly like moroccoEgyptData.js does.
2. Read data in one pass. Read the page's `__NEXT_DATA__` JSON and any JSON network responses first. Click only for what is still missing.
3. For a gallery, open it once and read every image URL from the page in one go (the DOM image list or the network log). Click photo by photo only when fewer URLs were read than the gallery count shows. Hotel galleries are always checked against their count.
4. Take only the images the page needs (see the IMAGES section). Ignore everything else.
5. No screenshots, no image quality analysis, no hashing, no retries beyond one.
6. Reuse scripts/thrillophilia/extract.py if it exists. Build it once only if it does not.
7. Write all trips, then run one check script and one build at the end. Do not rebuild after every edit.
8. Wait about 10 seconds between links.


## NON NEGOTIABLES

1. **Hero and gallery images** come only from inside "View All Images" (fourth hero tile), never from the four hero tiles on the Thrillophilia page itself.
2. **Hotel photos are never skipped.** For every hotel, click the hotel or "View photos" and open its own gallery. Note the photo count the gallery shows (for example "1/11"). Capture that many photo URLs. If you captured fewer than the gallery shows, click through photo by photo until you have them all. All of them go into that hotel's accommodation images.
2b. **If a hotel genuinely has no photos on Thrillophilia** (empty gallery, no "View photos"), do not skip the trip. Take 3 to 6 photos of that same hotel from the hotel's own website, Booking.com, MakeMyTrip, Agoda or Google, download them into frontend/public/tours/<slug>/hotels/<hotel-slug>/, order them exterior or pool first, then room, then dining, and flag the source in the report.
3. **Price:** read it in INR (switch the currency selector to INR ₹ if needed). Then price = round(INR price per adult × 0.95).
4. **Copy:** every line rewritten fresh for tier one, English speaking travellers in Delhi NCR, Mumbai and Bangalore. Never copy or lightly reword Thrillophilia text, and never reuse their trip title.
5. **No dashes** in any text: no em dash, no en dash, no hyphen as punctuation.
6. **No design changes.** Do not edit any component, style, route or other trip.


## 1. EXTRACT (per link)

Use Playwright and headless Chromium. Use the default trip duration selected on the page. Capture:

1. title, duration, city split, route, country, stay category
2. hero_tiles: the four hero tile URLs, only so they can be excluded
3. gallery: every image URL inside View All Images, with its tab (Destinations, Stays, Activity & Sightseeing)
4. days: day number, title, city, every timeline item and its type, meals, labels (Recommended, Optional, Additional cost), arrival, and flights with from and to
5. hotels: name, stars, city, room type, meal plan, check in day, check out day, nights, the photo count its gallery shows, and all photo URLs from its own gallery
6. activities: name, day, shared or private, label, and image URLs
7. inclusions, exclusions and Know Before You Go lines
8. INR price per adult, and captured date

Clean image URLs: keep the file path after /filestore/ and drop everything after "?". Remove duplicates.

Ignore the "Additional Information" section, because it is an old itinerary.

**Stop that link** (and continue with the others) if no hotels are found, any hotel has fewer than 3 photos, or there are fewer days than the duration.


## 2. IMAGES (only these)

| Where on the page | Images to take |
|---|---|
| Hero gallery | 10 images from the Destinations tab, none of them a hero tile. First one is a sharp landscape of the destination. |
| Card images | 4 images that no other trip of that country already uses on its card. Start from the hero gallery, then fall back to this trip's destination/day photos. Never `heroGallery.slice(0, 4)` blindly — neighbouring trips share source photos and the listing page then shows the same picture on several cards. |
| Each stop | 4 destination images of that city |
| Each day carousel (dayImages) | 3 to 5 images: that day's activity images, then city images. No repeats within a day. |
| Each hotel | All photos from its own gallery |
| Each activity card | 1 image that shows that activity |

### Card images must be unique per country (hard rule)

The listing page shows `product.images[0]`. If two trips share it, the grid looks duplicated.

1. Write `cardImages` as an explicit 4-image array in the trip's data file (not a slice).
2. Prefer hero-gallery photos; if they are already taken by another trip, use this trip's stop/`dayImages` photos. Skip hotel close-ups and anything with `Screen_Shot` in the filename.
3. Verify before finishing:

```bash
python3 /app/scripts/thrillophilia/check_card_images.py <file1>Data.js <file2>Data.js ...
# exit 0 = no card photo is shared by two trips
# /app/scripts/thrillophilia/plan_card_images.py <files...> suggests a conflict-free set
```
4. Runtime check: open `/<region>/<country>/holidays`, scroll to load every card, and confirm each card's first `img` src is unique.

Image helper (same as moroccoEgyptData.js):

```js
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
```


## 3. CLASSIFY AND COUNT

1. Categories:
   1. hotel
   2. activity: activities, experiences, sightseeing and tickets are all the same thing
   3. transfer: never an activity
   4. meal
   5. flight
   6. service
2. Recommended, Optional and Additional cost items are OPTIONAL: set optional: true and do not count them.
3. Visa fees and insurance are excluded.
4. Count only included items: hotels, activities, transfers, meals, flights.
5. Group consecutive days in the same base city into stops A, B, C. A day trip goes in the stop subtitle, for example "Casablanca → Chefchaouen".
6. Region_Path: europa for Europe, asien for Asia including the Maldives, afrika/aegypten for Egypt.
7. Country listing file: frontend/src/tours/<country>ToursData.js.


## 3B. WHAT'S INCLUDED COUNTS (always fill all of these)

Count only INCLUDED items, from the Inclusions list and the itinerary together.

| Count | Rule |
|---|---|
| Hotels | Number of different hotels. Also note the total nights. |
| Experiences | Activities and experiences are the SAME thing. So are sightseeing tours, day trips and entry tickets. Count each included one once. Never count transfers, meals or free time as experiences. The tile always says "experiences". |
| Transfers | Count each included transfer leg separately. For example, airport to hotel and hotel to airport is 2 transfers. Transfers are never experiences. |
| Meals | Count breakfasts, lunches and dinners separately. "Daily breakfast" over 7 nights is 7 breakfasts. If only breakfasts are included, the tile says "<n> breakfasts". If lunch or dinner is also included, the tile says "<total> meals". |
| Flights | Count included flight legs. If a flight is mentioned anywhere in the itinerary, always give it a flight line on that day. If it is included, the sixth tile is ['Internal flight', 'Customise', '<From> → <To> included'] and it counts as a flight. If it is not included, add it to Not included and mark the line "Optional: ". |

These counts must be identical in detail.stats, detail.services, the Product card and the report.


## 4. WRITING AND ICON RULES

1. Crisp, polished, specific sentences. Indian English spelling.
2. Never use: breathtaking, nestled, embark, delve, tapestry, unforgettable, hidden gem, seamless, curated, immerse, vibrant, mesmerising, once in a lifetime, paradise. No exclamation marks, no emojis.
3. Trip name: follow section 4B.
4. Lengths:
   1. Itinerary lines: 3 to 6 per day, up to 14 words each.
   2. Day title: up to 8 words.
   3. Activity description: 15 to 30 words.
   4. Expert quote: up to 25 words. Expert tip: up to 45 words.
   5. Tour summary: 35 to 45 words.
5. Icons depend on the words in each line:
   1. Every transfer line contains "transfer" (orange car).
   2. Day 1 starts with "Arrival at <airport> and private transfer to your hotel".
   3. Every flight line contains "flight" (blue plane), including optional flights.
   4. No other line contains transfer, drive to, pick up, drop off, flight or fly.
   5. Optional lines start with "Optional: ".
6. Each day starts with the bullet `${DAY_MARK}Day <n> · <Day title>`.


## 4B. TRIP NAME (very important)

The name is the first thing a buyer reads. It must sell the trip, not just list places. Write for a mass audience: English speaking travellers in India's tier one and tier two cities, and anywhere else. Simple words anyone understands, but still aspirational.

### Rules
1. Keep it as short as the trip allows, but the name must be complete: every country in the trip is named.
2. Always name the destination in full: all countries on the trip, or the main city or region for a single country trip. Never a vague umbrella such as "Asia" or "Europe" when the countries are known.
3. Always add one appealing hook, such as: Best of, Highlights of, Grand, Classic, Amazing, Magical, Wonders of, Holiday, Escape, Adventure, Explorer, or the signature experience (Northern Lights, Safari, Nile Cruise, Island Hopping, Swiss Alps).
4. Never a bare list of places with no hook. "Thailand, Singapore, Malaysia and Hong Kong" is wrong because it has no hook, not because it names the countries.
5. For 3 or more countries, name all of them after the hook, commas with "and" before the last one. For example: "Best of Thailand, Singapore, Malaysia and Hong Kong", "Highlights of France, Switzerland and Italy". Add the trip size only if it still reads cleanly.
6. For 2 countries, name both with a hook. For example: "Thailand and Singapore Highlights", "Best of Morocco and Egypt".
7. No jargon or fancy words: odyssey, sojourn, splendour, voyage, escapade, soirée, tapestry, rhapsody, mosaic, symphony, saga, or any foreign words the buyer may not know.
8. No dashes. A colon is allowed. Title Case. Never reuse Thrillophilia's title.
9. Test: would it work as an Instagram ad headline that a Delhi or Indore family and a Bangalore couple both instantly understand and want?

### Good and bad examples

| Trip | Bad | Good |
|---|---|---|
| Thailand, Singapore, Malaysia, Hong Kong, 13 days | Best of Asia in 13 Days (too vague, hides the countries) | Best of Thailand, Singapore, Malaysia and Hong Kong |
| Iceland, Reykjavík and Akureyri | Highlights of Iceland: Tracing City Sights | Iceland with Northern Lights |
| Thailand, 9 days | Siam Splendour Odyssey | Amazing Thailand Holiday |
| Switzerland and Paris | Alpine Rhapsody | Best of Switzerland and Paris |
| Kenya safari | Mara Sojourn | Classic Kenya Safari |

### Process
1. Write 5 options.
2. Pick the best one using the rules and the test.
3. Put the other 2 strongest options in the report.


## 5. BUILD

1. Make the slug from the trip name, lowercase with hyphens, for example best-of-iceland-8-days. Make camelName from it, for example bestOfIceland8Days.
2. Write frontend/src/tours/<camelName>Data.js using the template below.
3. In frontend/src/pages/EgyptDetail.jsx, import <camelName>BySlug and add it to the slug lookup the same way icelandGlaciersBySlug is added.
4. In frontend/src/tours/<country>ToursData.js, add <camelName>Product to the products list the same way the other trips are listed.
5. Expert: copy the name and image from another trip of the same country.

```js
// <Trip name>. Facts from the source itinerary, copy written fresh, INR pricing.
const img = p => `https://media1.thrillophilia.com/filestore/${p}?w=1400&dpr=1`;
const DAY_MARK = '__day__';

const heroGallery = [img('<path>'), img('<path>')];
const cardImages = heroGallery.slice(0, 4);

const stops = [{
  letter: 'A',
  name: '<Base city>',
  subtitle: '<Base city> → <Day trip place>',   // remove if no day trip
  dayLabel: 'Day <first> to <last>',
  images: [img('<path>')],
  dayImages: { <day>: [img('<path>')] },
  bullets: [
    `${DAY_MARK}Day <n> · <Day title>`,
    '<line>',
    '<line>'
  ],
  accommodation: {
    name: '<Hotel name>, <City>',
    description: '<nights> nights · <Meal plan> · <Room type> · <stars>★ · <one short line>',
    images: [img('<path>')]
  },
  activities: [{ name: '<name>', day: <day>, optional: <true|false>, image: img('<path>'), description: '<15 to 30 words>' }],
  program: { name: '<name>', description: '<20 to 30 words>', image: img('<path>') }
}];

const detail = {
  slug: '<slug>',
  ctaHref: '/l/<country>/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: '<Trip name>',
  alt: '<main image alt text>',
  days: '<D> days / <N> nights',
  stations: '<stops> stops',
  transport: '<for example: Private transfers and guided tours>',
  tag: '<Culture | Nature | Adventure | Honeymoon | Family | Luxury | Beach>',
  tags: ['<style>', '<style>'],
  price: <round(INR price × 0.95)>,
  routeLabel: 'This holiday takes you to',
  routeCities: ['<place>', '<place>'],
  stats: { days: <D>, cities: <stops>, hotels: <n>, activities: <n>, transfers: <n> },
  gallery: heroGallery,
  services: [
    ['<n> hotels', 'Accommodation'],
    ['<n> experiences', 'Activities'],
    ['<n> transfers', 'Transport'],
    ['<n> breakfasts', 'Meals'],          // use '<n> meals' if lunch or dinner is included
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']   // or ['Internal flight', 'Customise', '<From> → <To> included']
  ],
  expert: { name: '<name>', image: '<image>', role: '<Country> expert at Hi Tours', createdBy: 'Trip created by', quote: '<quote>', quoteMore: '<tip>', more: 'Read more', less: 'Read less' }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '<35 to 45 words>',
  readMore: 'Read more', readLess: 'Read less', hide: 'Hide tour summary',
  intro: 'Included: <item>; <item>; <item>.',
  intro2: 'Not included: <item>; <item>.',
  accommodationHeading: 'Accommodation', highlightsHeading: 'Key highlights', dayHeading: 'Day', routeHeading: 'Route',
  days: [{ title: 'Day <n>: <Day title> (<Arrival | B | B, D>)', text: '<lines joined with \n>', hotel: '<hotel or Departure>', highlights: ['<line>', '<line>', '<line>'] }],
  outro: 'Not included: <item>; <item>.'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: '<Continent>', href: '#' },
  { label: '<Country>', href: '/<Region_Path>/<country>' },
  { label: detail.title }
];

export const <camelName>BySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const <camelName>Product = {
  slug: detail.slug, tag: detail.tag, styles: detail.tags, title: detail.title,
  days: <D>, stops: <stops>, hotels: <n>, cities: <stops>, activities: <n>, transfers: <n>, meals: <n>,
  price: detail.price, images: cardImages
};
```


## 6. ONE CHECK SCRIPT (all trips together)

Print PASS or FAIL per trip for:

1. Days match the duration, and Day 1 is an arrival transfer line.
2. Icon words are used correctly.
3. Hotel nights add up to the total nights.
4. Every hotel's photo count equals the count its gallery shows (at least 3).
4a. Experiences, transfers, meals and flights are counted per section 3B, and no transfer is counted as an experience.
5. No hero_tiles are in the gallery.
6. Counts match across stats, services and the Product.
7. Price = round(INR × 0.95).
8. Zero dashes in text.
9. No 8 word match with Thrillophilia text.
10. The page renders at /<Region_Path>/<slug>/.
11. `python3 /app/scripts/thrillophilia/check_card_images.py <country data files>` exits 0 — no card photo repeats across the country's trips.
12. **Experiences filter:** run `python3 /app/scripts/thrillophilia/suggest_highlights.py <new trip data files> --min 1 --top 40`. Any real landmark, park, show, cruise or activity in the list that is marked `-` (not covered) gets a new `[label, regex, icon]` row in `frontend/src/holidays/experiences.js`; a new travel style gets a row in THEME_RULES in `frontend/src/holidays/filterModel.js` (see memory/FILTERS.md). Then open `/<region>/<country>/holidays` and confirm the Theme and Experiences panels show the new entries with the right counts.


## 7. REPORT (short, one block per link)

```
<Trip name> · /<Region_Path>/<slug>/ · ₹<price> (Thrillophilia ₹<INR> less 5%)
Other name options: <option>, <option>
Hotels: <n> (<total nights> nights) · <name> <n of n> photos, <name> <n of n> photos
Experiences (activities): <n> included, <n> optional
Transfers: <n>
Meals: <n> breakfasts, <n> lunches, <n> dinners
Flights: <included legs with from → to, or none>; not included <list or none>
Checks: PASS, or the failed checks
```
