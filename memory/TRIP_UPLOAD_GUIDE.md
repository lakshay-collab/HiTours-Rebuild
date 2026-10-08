# Hi Tours Trip Upload Guide (for Emergent)

Read this whole file before adding any trip. It applies to every trip zip made by our Writer playbook.

Each zip is ONE trip. Add it to the site using the trip page template that already exists. The new page must look and behave exactly like:
/afrika/aegypten/morocco-egypt-palaces-pyramids/

Each zip also contains its own EMERGENT_UPLOAD_GUIDE.md with that trip's values (price, counts, meals, flights, stops). If this master guide and the trip guide disagree on a value, use the trip guide. If they disagree on a rule, use this master guide.


## 1. Golden rules

1. Do not change any component, page, style, layout, icon, font, colour or spacing.
2. Do not create new routes. The routes already exist: /europa/:slug, /asien/:slug and /afrika/aegypten/:slug all render src/pages/EgyptDetail.jsx.
3. Do not edit, move or rename any other trip, data file or image.
4. Do not rewrite, shorten or "improve" any text inside the trip data file. The wording controls the icons (see section 5).
5. Only do three things: copy the images, copy the data file, and make the two code edits in section 3.
6. If something does not fit, do not change the design to make it fit. Leave it out and report it.


## 2. What is inside each zip and where it goes

```
<slug>/
  EMERGENT_UPLOAD_GUIDE.md        trip values, read it, do not copy it into the app
  <camelName>Data.js              copy to frontend/src/tours/<camelName>Data.js
  image_list.csv                  reference only, do not copy into the app
  qa_report.md                    reference only, do not copy into the app
  public/tours/<slug>/            copy to frontend/public/tours/<slug>/
    hero/01.jpg ...
    destinations/<city>-01.jpg ...
    hotels/<hotel-slug>/01.jpg ...
    activities/<activity-slug>/01.jpg ...
```

Copy every image folder and file exactly as it is. Keep the same folder names, file names and extensions. The data file points to these exact paths, for example /tours/<slug>/hotels/<hotel-slug>/01.jpg.

This is the same pattern as our existing Iceland Glaciers trip: data in src/tours/icelandGlaciersData.js and images in public/tours/iceland-glaciers/.


## 3. The only two code edits

### Edit 1: register the trip page
File: frontend/src/pages/EgyptDetail.jsx

1. Import the trip map:
   import { <camelName>BySlug } from '../tours/<camelName>Data';
2. Add <camelName>BySlug to the slug lookup in exactly the same way icelandGlaciersBySlug is added. Copy that pattern. Do not restructure the lookup.

### Edit 2: show the trip card on the country listing page
File: frontend/src/tours/<Country_Slug>ToursData.js (for example icelandToursData.js, italyToursData.js, srilankaToursData.js)

1. Import the card:
   import { <camelName>Product } from './<camelName>Data';
2. Add <camelName>Product to that file's products list in the same way the other trips are added.
3. If that country file does not exist, add the card to the listing data used by the nearest existing page for that country or region, and tell me exactly where you put it. Do not build a new listing page.

### Expert placeholder
If detail.expert.name is EXPERT_NAME or detail.expert.image is EXPERT_IMAGE, replace both with the name and image used by the other trips of the same country. If there are none, use the expert from the nearest region trip and tell me which one you used.


## 4. How the data file fills the page

Use this to check the page after upload. Every item below must show up.

| Page section (top to bottom) | Comes from |
|---|---|
| Hero gallery | detail.gallery (first image is the main one) |
| Title, "X days", "X cities" | detail.title and detail.stats |
| "This holiday takes you to" | detail.routeCities |
| Price box "From ₹X per person" | detail.price |
| What's included tiles (6) | detail.services, in order: hotels, experiences, transfers, meals, 24/7 support, Customisation or Internal flight |
| Expert card and Read more | detail.expert |
| Itinerary tabs, one per city stop | route.stops, tab label from stop.dayLabel |
| Day photo carousel | stop.dayImages[day number] |
| Day headings | bullets that start with __day__, for example "__day__Day 2 · The Golden Circle" |
| Itinerary lines with icons | stop.bullets (see section 5) |
| Your accommodation, "View photos (n)" | stop.accommodation (name, description, images) |
| Your activities (n), Optional badge | stop.activities (optional: true shows the Optional badge) |
| Tour summary and Read more | glance.short, glance.intro (Included), glance.intro2 (Not included), glance.days |
| Breadcrumbs | crumbs |
| Card on the country listing page | <camelName>Product |

Everything else on the page (reviews, why book with us, planner form, steps, sale banner) is shared and must not be touched.


## 5. Icons, labels and day headings

The template picks each itinerary icon from the words in the line. Do not edit any line.

1. A line containing "transfer", "drive to", "driven", "pick up" or "drop off" shows the orange car icon. Arrival lines use this too, for example "Arrival at Keflavík Airport and private transfer to your hotel".
2. A line containing "flight", "fly" or "flying" shows the blue plane icon.
3. Every other line shows the plain dot.
4. A bullet starting with __day__ is a day heading, written as "__day__Day 3 · Title". The template splits the stop into days with it.
5. Activities with optional: true show the Optional badge and are not counted in What's included.
6. Glance day titles carry meal codes in brackets: (Arrival) on Day 1, then (B), (B, D) and so on. B is breakfast, L is lunch, D is dinner.

After upload, confirm that every flight line in the trip guide shows the plane icon and the Day 1 arrival line shows the car icon.


## 6. Meals, flights, transfers and optional items

Take these values from the trip's own EMERGENT_UPLOAD_GUIDE.md. They are already inside the data file. Only check that the page shows them:

1. Meals: the Meals tile in What's included, and the meal codes in the Tour summary day titles.
2. Flights: plane icon lines in the itinerary. If a flight is included, the sixth What's included tile reads "Internal flight". If no flight is included, it reads "Customisation", and the flight appears in the Not included sentence.
3. Transfers: the Transfers tile count and the car icon lines.
4. Optional items: Optional badge on activity cards, and lines starting with "Optional: " in the itinerary.
5. Not included: glance.intro2 in the Tour summary.


## 7. After upload: checks

Open /<Region_Path>/<slug>/ and confirm each point:

1. The page renders with the same layout as /afrika/aegypten/morocco-egypt-palaces-pyramids/.
2. The title, days, cities, route places and price match the trip guide.
3. All 6 What's included tiles show the counts from the trip guide.
4. The number of itinerary tabs equals the number of stops, and every day heading shows.
5. Day 1 arrival shows the car icon, and every flight line shows the plane icon.
6. Every hotel shows its name, its description line and "View photos" with the right number of photos.
7. Every activity card has an image, and optional ones show the Optional badge.
8. The Tour summary opens and shows Included, Not included and every day.
9. No image is broken. If one is missing, list its path.
10. The trip card shows on /<Region_Path>/<Country_Slug> with the right price and counts.
11. No other trip page changed.


## 8. How to reply when done

Reply in this format:

1. Preview link of the new trip page.
2. Listing page where the card appears.
3. Files added (paths).
4. Code edits made (file and one line each).
5. Checks 1 to 11 from section 7, each marked PASS or FAIL.
6. Anything that did not fit, and what you did instead. Never change the design to fix it.
