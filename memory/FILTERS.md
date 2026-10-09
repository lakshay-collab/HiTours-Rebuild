# Holidays filters: dynamic Themes + dynamic Experiences (per destination)

Applies to every `/<region>/<country>/holidays` page (shared `pages/EgyptHolidays.jsx`) and the hidden honeymoon variants.
Model: `frontend/src/holidays/filterModel.js`. Experience library: `frontend/src/holidays/experiences.js`.
Itinerary registry: `frontend/src/tours/tripIndex.js` (every trip's detail/route/glance by slug, also used by the detail page).
Tuned and verified on Singapore and Thailand (user: the two complete catalogues). Other countries get the same logic but were not tuned.

## Two filter groups, both derived from the data (nothing configured per country)
1. **Theme** (`?theme=`) = travel styles. `THEME_RULES` rows: `[label, regex, icon, { tags, maxDays, minStops, text }]`.
   Regex runs on the title, or on the whole itinerary corpus when `text: true`; `tags` match the product's `tag`/`styles`;
   `maxDays` (Short trips ≤5), `minStops` (Multi-city tours ≥3 base cities). A theme shows only where ≥1 trip matches.
   Current set: Honeymoon, Family, Short trips, Luxury (always first), then by trip count: Beach, Island hopping,
   Cruise holidays, Theme parks, Culture & temples, Adventure, Nature & wildlife, City break, Nightlife & party,
   Food & markets, Wellness & spa, Shopping, Multi-city tours. ("Grand tour" removed per user.)
2. **Experiences** (`?experience=`) = landmarks / activities. `EXPERIENCES` rows: `[label, regex, icon, alsoRequired?]` run over the
   corpus = title + tags + places + detail title/tags/route cities + every day title/text/highlight bullet + every route stop's
   bullets and activity names. `alsoRequired` scopes ambiguous words (sauna, castle, Red Sea, Venice gondolas) to a region.
   Shows as soon as ONE trip mentions it (user decision), sorted by trip count.
3. OR inside a group, AND across groups (Theme ∧ Experiences ∧ Destination ∧ Duration ∧ Price).

## UI
- Desktop: strip above the cards = **Experiences** only (`ThemeChips.jsx`: label "Experiences", All chip, top 10 + any selected).
  Sidebar (`HolidayFilterPanel.jsx`): Theme section (all themes), Experiences section (first 8 + "Show all N experiences",
  testid `hf-experience-more`), Destination, Duration, Price range.
- Mobile: group pills Filters · Theme · Experiences · Destination · Duration · Price range → `MobileFilterSheet` tabs (same options,
  `mhf-experience-more`).
- Legacy `/holidays/<style-slug>` and SearchBar links: if the style key is an experience label (Egypt `nile-cruise` → "Nile cruise")
  it preselects the Experiences group, otherwise Theme (`isExperience()` in filterModel).
- Honeymoon variant (`mode: 'honeymoon'`) uses `HONEYMOON_RULES` for Theme and the same Experiences.

## Adding products later ("more products added for <country>")
1. `python3 scripts/thrillophilia/suggest_highlights.py <new or all country data files> --min 1 --top 60`
   prints capitalised phrases from the itinerary text with file counts and whether an EXPERIENCES row already covers them.
   Ignore cities (Destination facet), hotel names, logistics words.
2. Landmark/activity → add a row to `experiences.js`. New travel style → add a row to `THEME_RULES`. Keep regexes specific
   (`\b`, full names) and add `alsoRequired` when a word is ambiguous across countries.
3. Reload `/<region>/<country>/holidays`; the new entries show with counts. Spot-check 2 or 3 other countries for leaks
   (first version leaked "Ha Long"→"Chalong", "Flåm"→"flamenco", "Li River"→"Mahaweli River", "etna"→"Vietnam"; all fixed with `\b`).
4. Nothing else to configure: counts, order, visibility and the mobile sheet all derive from the data.

## Known limits
- A landmark mentioned only as an optional add-on in a day's text still counts (the trip does offer it).
- Multi-country trips carry experiences of all their countries (Petronas Towers on the Thailand page for Thailand + Malaysia). Intended.
- A theme that matches almost every trip of a destination (Thailand: Multi-city tours 16/20, Beach 14/20) is simply what the catalogue is.
- `(?<!indoor )waterfall` uses a lookbehind (all evergreen browsers, Safari ≥16.4).
