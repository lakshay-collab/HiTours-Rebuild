# Thrillophilia to Hi Tours Trip Import

Instructions for the Emergent agent. Read this whole file before starting.

When I send one or more Thrillophilia tour links, turn EACH link into a new trip page on this site, using the trip page template that already exists. Do every link in the same run. Do the extraction, the writing and the page setup yourself, following this file exactly.

Reference page (every new trip must look and behave exactly like it):
/afrika/aegypten/morocco-egypt-palaces-pyramids/

Reference data file (every new trip must follow the same format):
frontend/src/tours/icelandGlaciersData.js, with images in frontend/public/tours/iceland-glaciers/


---

## NON NEGOTIABLES (check every trip against these)

1. **Gallery images:** always click "View All Images" (on the fourth hero tile) and take images from inside that gallery, from every tab (Destinations, Stays, Activity & Sightseeing). Never use the four hero tile images that show on the Thrillophilia page itself. Copying their hero makes our page look copied. Our hero and gallery must come from the internal gallery only.
2. **Hotel photos:** for every hotel, click the hotel name, card or "View photos" button, open its photo gallery, and click through until it loops back to the first photo. Take ALL of that hotel's photos, with no limit, and put every one of them in that hotel's accommodation images. A hotel with only one or two photos means the gallery was not opened properly; go back and open it.
3. **Price in INR with 5 percent off:** whatever currency the page shows, our price must be in INR. First switch the Thrillophilia currency selector to INR ₹ (top bar) and reload. If the price still does not show in INR, convert it using today's reference rate and record the rate and its source. Then apply our discount: price = round(INR price per adult × 0.95).
4. **Fresh copy for a tier one audience:** every line of text is rewritten in our own words. Never copy or lightly reword Thrillophilia text. Write for well travelled, English speaking urban Indians in Delhi NCR, Mumbai and Bangalore: confident, polished, specific and easy to scan. No cheap sales language, no exclamation marks, no clichés.
5. **No dashes anywhere in the text:** no em dash, no en dash, and no hyphen used as punctuation.


---

## PART 0. Golden rules

1. Do not change any component, page, style, layout, icon, font, colour or spacing.
2. Do not create new routes. /europa/:slug, /asien/:slug and /afrika/aegypten/:slug already render src/pages/EgyptDetail.jsx.
3. Do not edit, move or rename any other trip, data file or image.
4. For each trip, only: add one data file, add its images, and make the two small registration edits in PART 6.
5. If something does not fit the template, leave it out and report it. Never change the design to make it fit.
6. Copy facts exactly. Never invent a fact. Write all customer facing text fresh (PART 3). Never copy or lightly reword Thrillophilia sentences.
7. Work efficiently: no screenshots unless a step fails, no rereading large files, and one build and check at the end of the run, not after every small edit.


---

## PART 1. The extractor script (build once, reuse every time)

Keep a reusable script at scripts/thrillophilia/extract.py.

**If the script already exists:** just run it on the new links. Only fix it if a step fails.

**If it does not exist:** build it once, with these rules:

1. Use Python with Playwright and headless Chromium:
   pip install playwright
   playwright install chromium
2. Before clicking anything, open the page with network capture on and look for JSON responses (for example _next/data, api, graphql, itinerary, stays, hotel, activities). If the itinerary, hotels, activities and image lists come from a JSON response, read them from that response. It is faster and more reliable than clicking. Use clicks only for anything still missing.
3. Also read any `<script id="__NEXT_DATA__">` and `<script type="application/ld+json">` blocks.
4. Click flow (gallery and hotel photos are ALWAYS clicked, even if JSON was found, to confirm nothing is missing):
   a. Open the link, wait for full load, and switch the currency selector in the top bar to INR ₹. Reload if needed.
   b. Scroll top to bottom twice. Close popups and sale banners. Never fill in or submit any form.
   c. Record the URLs of the four hero tiles shown on the page as hero_tiles. They must NOT be used later.
   d. Click "View All Images" on the fourth hero tile. Open every tab (Destinations, Stays, Activity & Sightseeing). In each tab, press next or scroll until the gallery loops back to the first image, and capture every image URL with its tab and caption.
   e. Open every itinerary day (click Expand all if it exists, otherwise click each day).
   f. For every hotel: click the hotel name, card or "View photos" button. Capture its details, then open its photo gallery and click next until it loops back to the first photo, capturing EVERY image URL. Close it and move to the next hotel. Never click "Change hotel" or "View similar".
   g. Click every activity. Capture its details and label, then click through its carousel until it loops and capture every image URL (usually 6 to 7).
   h. Log, for each gallery, how many photos the page says it has and how many were captured. If they differ, retry that gallery once.
5. Clean every image URL by removing everything after "?" (this gives the largest version). Remove duplicates by comparing the file path without the query string. Capture the large image shown in each gallery, not the small thumbnail strip. If images lazy load, wait for each one or read its real URL from the network log.
6. Wait 30 to 60 seconds between links, so the site is not hammered.
7. Save the output per link to import/<source-slug>/raw.json, and download all images to import/<source-slug>/images/. The import/ folder is a work area and is never served by the website.

### What raw.json must contain
1. title, duration (for example 8D/7N), city split, destination route, badges, stay category, trip highlights, country.
2. The default duration only. The page offers several durations; use the one selected by default for this URL.
3. days: day number, title, city, every timeline item in order with its type (Transfer, Stay, Activity, Sightseeing, Meal, Flight), meals for that day, labels (Recommended, Optional, Additional cost, Not included), arrival yes or no, and flights with from and to.
4. hotels: name, stars, city, room type, meal plan, check in day, check out day, nights, key amenities, and all image URLs.
5. activities: name, day, duration, shared or private, what is included, label exactly as shown, and all image URLs.
6. gallery: every image with its tab and caption.
7. inclusions, exclusions and Know Before You Go lines, exactly as written.
8. price_per_adult, struck_price, the currency shown, the INR value (converted if needed, with the rate and its source), and captured_at.
9. hero_tiles: the four hero tile image URLs, kept only so they can be excluded.
10. Ignore the "Additional Information" section. It describes an older itinerary and contradicts the real one.

### Hard stop per link
If no hotels are found, any hotel has fewer than 3 photos after a retry, the View All Images gallery was not opened, or there are fewer days than the duration, do not build that trip. Report what failed, and continue with the other links.


---

## PART 1B. Image quality and preparation (per link)

Do this after downloading and before building the trip.

1. **Check every download.** Confirm each file really is an image that opens, not an error page. Retry a failed download once. If it still fails, drop it and log it.
2. **Drop weak images:**
   a. Anything under 1000 pixels wide, except hotel photos, which may go down to 700.
   b. Images with a visible logo, watermark, text overlay, price tag or Thrillophilia branding.
   c. Maps, icons, screenshots, collages and banners.
   d. Blurry or very dark images (aurora and night shots excepted).
   e. Any of the hero_tiles.
3. **Remove near duplicates.** Use a perceptual hash (for example the imagehash library) so the same photo saved under two names, or cropped slightly differently, is kept only once. Keep the larger copy.
4. **Convert and resize** so the site stays fast:
   a. Save everything as .jpg at quality 80. Convert png and webp files.
   b. Hero and gallery: max 2000 pixels wide. Everything else: max 1400 pixels wide.
   c. Never upscale a small image.
   d. File extensions in the data file must match the saved files exactly.
5. **Hero choice:**
   a. The first hero image must be landscape (wider than tall), sharp and instantly recognisable for the destination, with no people as the main subject.
   b. The 8 to 12 hero and gallery images must vary: signature landscape, city or architecture, the headline experience (for example the aurora), and one image per main stop where possible.
   c. cardImages are the first 4 hero images, and all 4 must be different.
6. **Hotel photo order:** exterior or signature view first, then a bedroom, then the bathroom, lobby, dining and facilities. Keep every photo that passed the checks.
7. **Activity images:** the activity card image must actually show that activity. Its remaining carousel images go into that day's dayImages. If an activity has no usable image, use the best matching Activity & Sightseeing tab image, and log it.
8. **Day carousels:** every day needs 3 to 7 images. Fill any shortfall with that city's destination images. Do not repeat the same image twice in one day.
9. **Destinations folder:** name images by city in visiting order, for example reykjavik-01.jpg, akureyri-01.jpg.
10. **Log** every image's original URL, saved path, section, size in pixels and shutterstock_id in import/<source-slug>/image_sources.csv.


---

## PART 2. Classify and count (per link)

1. Classify every item as one of: hotel, activity (activities, experiences, sightseeing and tickets are all the same thing), transfer (never an activity), meal, flight, or service.
2. Recommended, Optional and Additional cost items are OPTIONAL: set optional: true and do not count them.
3. Visa fees, insurance and personal expenses are EXCLUDED.
4. Everything in Inclusions is INCLUDED.
5. Count only INCLUDED items: hotels, activities, transfers, breakfasts, lunches, dinners and flights.
6. Group consecutive days in the same base city into stops A, B, C and so on, each with city, first day, last day, hotel and nights. A day trip from the base stays inside that stop and goes in its subtitle, for example "Casablanca → Chefchaouen".
7. Price: take the price per adult in INR (switched to INR on the page, or converted at today's reference rate if the page will not show INR). Then price = round(INR price per adult × 0.95). This is our price after the 5 percent discount. It is always a whole number of rupees.
8. Region_Path: europa for Europe, asien for Asia (including the Maldives), afrika/aegypten for Egypt.
9. Country_Slug: the lowercase country name as it appears in this site's URLs, for example iceland, italy, sri-lanka.
10. Country data file: the existing frontend/src/tours/<country>ToursData.js, for example icelandToursData.js or srilankaToursData.js.


---

## PART 3. Writing rules (all customer facing text)

1. No dashes of any kind: no em dash, no en dash, no hyphen used as punctuation. Use commas, full stops, the word "to" (Day 1 to 3) or the middle dot "·". The arrow "→" is allowed for routes. Hyphens are allowed only in file names, folder names and slugs.
2. Audience: tier one, well travelled, English speaking urban Indians in Delhi NCR, Mumbai and Bangalore. Write crisp, polished, confident sentences that are specific and easy to scan: what they will see, how the day flows, and one useful detail. Use Indian English spelling (colour, centre, programme).
3. Rewrite everything in our own words. Build each sentence from the facts, never from Thrillophilia's sentences. Do not swap synonyms into their lines.
4. Never use these words or styles: breathtaking, nestled, embark, delve, tapestry, unforgettable, hidden gem, seamless, curated, immerse, vibrant, mesmerising, journey of a lifetime, once in a lifetime, paradise, exclamation marks, ALL CAPS, emojis.
5. Trip name: simple, starts with the destination, up to 45 characters, for example "Best of Iceland" or "Iceland Experience with Northern Lights". Never reuse Thrillophilia's trip title.
6. Lengths:

| Text | Length |
|---|---|
| Itinerary lines | 3 to 6 per day, each up to 14 words |
| Day title | up to 8 words |
| Activity description | 15 to 30 words |
| Hotel line | "<nights> nights · <Meal plan> · <Room type> · <stars>★ · <one short line>" |
| Expert quote | up to 25 words |
| Expert tip | up to 45 words |
| Tour summary | one line of 35 to 45 words |
| Included and Not included | one sentence each, starting "Included:" and "Not included:", with items separated by semicolons |
| Program description | 20 to 30 words per stop |


---

## PART 4. Icon rules

The template picks each itinerary icon from the words in the line:
- an orange car when the line contains transfer, drive to, driven, pick up or drop off;
- a blue plane when the line contains flight, fly or flying;
- a plain dot for every other line.

1. Every transfer line must contain "transfer".
2. Day 1 starts with an arrival line that contains "transfer", for example "Arrival at Keflavík Airport and private transfer to your hotel".
3. Every flight line must contain "flight" or "fly", for example "Domestic flight from Reykjavík to Akureyri". This applies to optional flights too.
4. No other line may contain transfer, drive to, driven, pick up, pickup, drop off, dropoff, flight, fly or flying.
5. Optional lines start with "Optional: ".
6. Each day starts with a heading bullet written as `${DAY_MARK}Day <n> · <Day title>`.


---

## PART 5. How the page uses the data

| Page section (top to bottom) | Data |
|---|---|
| Hero gallery | detail.gallery, 8 to 12 images, the first is the main one. Take them only from inside the View All Images gallery, mainly the Destinations tab. Pick the sharpest and most varied (landscape, city, signature experience). Never include any of the hero_tiles. |
| Title, "X days", "X cities" | detail.title and detail.stats |
| "This holiday takes you to" | detail.routeCities |
| Price box "From ₹X per person" | detail.price |
| What's included, 6 tiles | detail.services: hotels, experiences, transfers, meals, 24/7 support, Customisation (or Internal flight if a flight is included) |
| Expert card | detail.expert |
| Itinerary tabs, one per stop | route.stops, with the tab label from dayLabel "Day 1 to 3" |
| Day photo carousel | stop.dayImages[day]: that day's activity carousel images after the first, then destination images |
| Itinerary lines and icons | stop.bullets |
| Your accommodation, "View photos (n)" | stop.accommodation: ALL photos from that hotel's own photo gallery, opened by clicking the hotel and clicked through to the end, plus any matching photos from the Stays tab |
| Your activities (n), Optional badge | stop.activities: one image each (the first carousel image), optional true or false |
| Tour summary | glance: short, intro (Included), intro2 (Not included), and days with meal codes |
| Card on the country listing page | <camelName>Product |


---

## PART 6. Build each trip

1. Make the slug from the trip name in lowercase with hyphens, for example best-of-iceland-8-days. Make camelName from it, for example bestOfIceland8Days.
2. Copy the images into frontend/public/tours/<slug>/:
   hero/01.jpg and onwards
   destinations/<city>-01.jpg and onwards
   hotels/<hotel-slug>/01.jpg and onwards
   activities/<activity-slug>/01.jpg and onwards
3. Write frontend/src/tours/<camelName>Data.js exactly in the PART 7 template.
4. Registration edit 1: in frontend/src/pages/EgyptDetail.jsx, import <camelName>BySlug and add it to the slug lookup exactly the way icelandGlaciersBySlug is added.
5. Registration edit 2: in frontend/src/tours/<country>ToursData.js, import <camelName>Product and add it to the products list the same way the other trips are listed. If that file does not exist, add it to the nearest existing listing for that country or region, and report where it went.
6. Expert: use the same expert name and image as the other trips of that country. If there are none, use the nearest region's expert and report which one you used.
7. Write import/<source-slug>/image_sources.csv with these columns: file, original_url, section, name, shutterstock_id. Shutterstock IDs are the numbers after "shutterstock_" in file names.


---

## PART 7. Data file template (frontend/src/tours/<camelName>Data.js)

Keep every key name and order. Replace only the angle bracket placeholders.

```js
// <Trip name> for the Hi Tours trip page template. Facts from the source itinerary, all copy written fresh, INR pricing.
const BASE = '/tours/<slug>';
const HERO = f => `${BASE}/hero/${f}`;
const DEST = f => `${BASE}/destinations/${f}`;
const HOT = f => `${BASE}/hotels/${f}`;
const A = f => `${BASE}/activities/${f}`;
const DAY_MARK = '__day__';

const heroGallery = [HERO('01.jpg'), HERO('02.jpg')];
const cardImages = [heroGallery[0], heroGallery[1], heroGallery[2], heroGallery[3]];

const stops = [{
  letter: 'A',
  name: '<Base city>',
  subtitle: '<Base city> → <Day trip place>',
  dayLabel: 'Day <first> to <last>',
  images: [DEST('<city>-01.jpg')],
  dayImages: {
    <day number>: [A('<activity-slug>/02.jpg'), DEST('<city>-02.jpg')]
  },
  bullets: [
    `${DAY_MARK}Day <n> · <Day title>`,
    '<itinerary line>',
    '<itinerary line>'
  ],
  accommodation: {
    name: '<Hotel name>, <City>',
    description: '<nights> nights · <Meal plan> · <Room type> · <stars>★ · <one short line>',
    images: [HOT('<hotel-slug>/01.jpg')]
  },
  activities: [{
    name: '<Activity name>',
    day: <day number>,
    optional: <true or false>,
    image: A('<activity-slug>/01.jpg'),
    description: '<15 to 30 words>'
  }],
  program: {
    name: '<Program name>',
    description: '<20 to 30 words>',
    image: DEST('<city>-01.jpg')
  }
}];

const detail = {
  slug: '<slug>',
  ctaHref: '/l/<Country_Slug>/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan, no obligation and tailor made',
  banner: 'Worry free planning: flexible rebooking and cancellation options on your land programme.',
  title: '<Trip name>',
  alt: '<alt text of the main image>',
  days: '<D> days / <N> nights',
  stations: '<number of stops> stops',
  transport: '<for example: Private transfers, internal flight and guided tours>',
  tag: '<Culture, Nature, Adventure, Honeymoon, Family, Luxury or Beach>',
  tags: ['<style>', '<style>'],
  price: <price as a number>,
  routeLabel: 'This holiday takes you to',
  routeCities: ['<place>', '<place>'],
  stats: { days: <D>, cities: <number of stops>, hotels: <hotels>, activities: <included activities>, transfers: <included transfers> },
  gallery: heroGallery,
  services: [
    ['<n> hotels', 'Accommodation'],
    ['<n> experiences', 'Activities'],
    ['<n> transfers', 'Transport'],
    ['<n> breakfasts', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: '<expert name>',
    image: '<expert image>',
    role: '<Country> expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: '<expert quote>',
    quoteMore: '<expert tip>',
    more: 'Read more',
    less: 'Read less'
  }
};

const route = { stops };

const glance = {
  h2: 'Tour summary',
  short: '<tour summary line>',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: '<Included: sentence>',
  intro2: '<Not included: sentence>',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day <n>: <Day title> (<Arrival on day 1, otherwise meal codes such as B, or B, L, D>)', text: '<day lines joined with \n>', hotel: '<hotel name, or Departure on the last day>', highlights: ['<line 1>', '<line 2>', '<line 3>'] }
  ],
  outro: '<Not included: sentence>'
};

const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: '<Continent>', href: '#' },
  { label: '<Country>', href: '/<Region_Path>/<Country_Slug>' },
  { label: detail.title }
];

export const <camelName>BySlug = { [detail.slug]: { detail, route, glance, crumbs } };

export const <camelName>Product = {
  slug: detail.slug,
  tag: detail.tag,
  styles: detail.tags,
  title: detail.title,
  days: <D>,
  stops: <number of stops>,
  hotels: <hotels>,
  cities: <number of stops>,
  activities: <included activities>,
  transfers: <included transfers>,
  meals: <total meals>,
  price: detail.price,
  images: cardImages
};
```

Template notes:
1. Remove the subtitle line when a stop has no day trip.
2. Repeat the stop object for every stop, and the day heading plus its lines for every day.
3. Add one dayImages entry per day.
4. Add one glance.days object per day.
5. Meals tile: if lunches or dinners are included, write '<total> meals' instead of breakfasts.
6. Sixth tile: if a flight is included, use ['Internal flight', 'Customise', '<From> → <To> included'].


---

## PART 8. Checks before reporting

Run these checks with a script for every trip, then open each new page once.

1. Days equal the duration, and every day has a heading.
2. Day 1 starts with an arrival line containing "transfer".
3. Every transfer line has "transfer", every flight line has "flight" or "fly", and no other line uses the icon words.
4. Hotel nights add up to the total nights.
5. Every hotel's accommodation images equal the number of photos in its own gallery (at least 3), and every activity has an image.
6. Every activity day exists in its stop.
7. stats, services and the Product card show the same counts.
8. No Recommended or Additional cost item is counted, and all of them have optional: true.
9. The price is in INR and equals round(INR price per adult × 0.95).
9a. None of the hero_tiles appear anywhere in heroGallery or cardImages.
9b. Every image file is a .jpg that opens, within the size limits in PART 1B, with no near duplicates, and the first hero image is landscape.
9c. Every day has 3 to 7 carousel images with no repeats within the day.
10. There are zero dash characters (—, – or a spaced hyphen) in any text, slugs and paths excluded.
11. No 8 word run of our text matches the Thrillophilia text.
12. Every image path in the data file exists in frontend/public.
13. The page at /<Region_Path>/<slug>/ renders with the same layout as the reference page, with no broken images.
14. The card shows on /<Region_Path>/<Country_Slug>.
15. No other trip changed.


---

## PART 9. Report (one block per link)

```
Trip: <Trip name>   (other name options: <2 options>)
Source: <Thrillophilia link>
Page: /<Region_Path>/<slug>/     Listing: /<Region_Path>/<Country_Slug>
Price: ₹<price> per person (Thrillophilia <currency and amount shown>, INR ₹<INR price>, minus 5 percent, captured <date>; FX rate <rate and source, or "page showed INR">)
Images: hero and gallery <n> (from View All Images, hero tiles excluded); hotel photos <hotel: n, hotel: n>; activity images <n>
What's included: <n> hotels | <n> experiences | <n> transfers | <meals tile> | 24/7 support | <sixth tile>
Meals: Breakfast <n> (Day <list>), Lunch <n or none>, Dinner <n or none>
Flights: included <list or None>; not included <list>
Arrival: Day 1 "<arrival line>"
Stops: A <City> Day x to y, <Hotel> (<nights> nights, <n> photos) | B ...
Optional extras: <list>
Files added: <paths>
Edits: EgyptDetail.jsx (1 line), <country>ToursData.js (1 line)
Checks: <PASS, or the failed check numbers with reasons>
Missing or flagged: <list or None>
```
