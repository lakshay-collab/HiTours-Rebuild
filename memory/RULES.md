# Standing rules from the owner (read before any work)
1. Do NOT use the testing agent (it spends credits). Self-test everything in one go with curl and screenshots.
2. Keep the website's existing design. Never introduce a new visual style for something the site already has.
   - Reviews: always reuse the site's own review components: green stars (`BoxStars` / `StarRow`, #00B67A), the photo review card (`ReviewCard` in components/egypt/EgyptSections.jsx) and the text review card (`ReviewCard` in components/egypt/EgyptCustomerReviews.jsx). Never yellow stars, never a new card design.
   - Before building any new block, look for an existing component/pattern on the site and reuse it; match fonts (eg-* classes), colours and card styles.
3. No dull grey small text on booking pages; use #002131 and #174358.
4. Never send test leads to the CRM (intercept /api/leads in browser tests).
