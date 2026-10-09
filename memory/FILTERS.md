# Holidays filters: Theme = fixed travel styles + dynamic destination highlights

Applies to every `/<region>/<country>/holidays` page (shared `pages/EgyptHolidays.jsx`) and the hidden honeymoon variants.
Model: `frontend/src/holidays/filterModel.js`. Highlight library: `frontend/src/holidays/highlights.js`.
Itinerary registry: `frontend/src/tours/tripIndex.js` (every trip's detail/route/glance by slug, also used by the detail page).

## How the Theme list is built (per country, automatically)
1. **Travel styles (fixed, same everywhere):** Honeymoon, Family, Short trips (≤5 days), Luxury, Beach, Culture, Adventure,
   Nature & wildlife, City break, Nightlife & party, Grand tour. Matched on the trip title + its `tag`/`styles` tags only.
   A style only shows when at least one trip in that country matches (counts are live).
2. **Highlights (dynamic):** every row of `HIGHLIGHTS` is a `[label, regex, icon, alsoRequired?]`. The regex runs over the
   trip's full text corpus = title + tags + places + detail title/tags/route cities + every day title/text/highlight bullet +
   every route stop's bullets and activity names. If it matches (and the optional `alsoRequired` regex also matches, used to
   scope ambiguous words like "sauna" or "castle" to a region), the trip gets that highlight.
   Highlights appear for a country as soon as ONE trip there mentions them (user decision), sorted by number of trips.
3. UI: one Theme group. Sidebar / mobile sheet list styles first, then a "HIGHLIGHTS" sub-heading with the first 8
   and a "Show all N highlights" toggle (`hf-theme-highlights-more` / `mhf-theme-highlights-more`). The desktop quick-chip
   strip shows all styles + the 8 most common highlights (divider `theme-chips-highlights-divider`).
   URL stays `?theme=<label>` for both kinds, so legacy `/holidays/<style-slug>` links and the SearchBar links keep working
   (e.g. Egypt `nile-cruise` → highlight "Nile cruise").
4. Honeymoon variant (`mode: 'honeymoon'`) uses its own romantic style labels + the same highlights.

## Adding products later ("more products added for <country>")
1. `python3 scripts/thrillophilia/suggest_highlights.py <new or all country data files> --min 1 --top 60`
   prints capitalised phrases from the itinerary text with how many files mention them and whether a HIGHLIGHTS row already
   covers them. Ignore cities (they are the Destination facet), hotel names, logistics words.
2. For each real landmark/experience not covered, add a row to `highlights.js`. Keep regexes specific
   (`\b`, full names) and add `alsoRequired` when a word is ambiguous across countries.
3. Reload `/<region>/<country>/holidays`; the new highlight shows with its count. Check 2 or 3 other countries for leaks
   (the first version leaked "Ha Long" into "Chalong", "Flåm" into "flamenco", "Li River" into "Mahaweli River",
   "etna" into "Vietnam", "fuji" into other words; all fixed with word boundaries).
4. Nothing else to configure: counts, order, visibility and the mobile sheet all derive from the data.

## Words we considered for "Themes"
User kept "Theme" as the group label. The dynamic sub-group is labelled "Highlights" in the UI.

## Known limits
- A highlight mentioned only as an optional add-on in a day's text still counts (the trip does offer it).
- Multi-country trips carry highlights of all their countries (e.g. Petronas Towers on the Thailand page for the
  Thailand + Malaysia trip). This is intended: the trip really includes it.
- `(?<!indoor )waterfall` uses a lookbehind (supported in all evergreen browsers and Safari ≥16.4).
