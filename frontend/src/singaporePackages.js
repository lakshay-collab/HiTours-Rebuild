// Singapore packages – same structured data model as vietnamPackages.js (destination → packages[] → itinerary days[]).
// Adapters for the listing/detail templates live in tours/singaporeToursData.js.
const CT = 'https://images.ctfassets.net/bth3mlrehms2';
const ct = (p, w = 1080) => `${CT}/${p}?w=${w}&q=60&fm=webp`;
const un = (id, w = 1080) => `https://images.unsplash.com/${id}?crop=entropy&cs=srgb&fm=jpg&q=80&w=${w}`;

export const IMG = {
  skyline: ct('4B5tE96BHxRVFYUVJQibEE/efeae2ee825eda4d08a95e0717d916fd/Skyline__Singapur.jpg'),
  jalanBesar: ct('1S1CFngY8la37r0DqH3xb1/8052b7405ea5431391f2be4fba023227/Jalan_Besar_Singapore_2.jpg'),
  gardens: un('photo-1605425183435-25b7e99104a4'),
  supertreeNight: un('photo-1499359875449-10bbeb21501e'),
  supertreeBlue: un('photo-1508597370841-836e72ef6f54'),
  marinaAerial: un('photo-1525625293386-3f8f99389edd'),
  twilight: un('photo-1496939376851-89342e90adcd')
};
const SP = (slug, n) => `/singapore-packages/${slug}/g${n}.webp`;
const BALI = 'bali-meets-singapore', SAIL = 'sail-away-singapore', LAND = 'singapore-unlocked';
const ACT = (n) => `/singapore-packages/act/${n}.webp`;
const SG_ACTS = [
  [/cloud forest/i, ACT('cloud-forest')], [/tegenungan|waterfall/i, ACT('waterfall')], [/tegallalang|rice terrace/i, ACT('rice-terraces')], [/kintamani|batur/i, ACT('kintamani')], [/jungle swing|coffee/i, ACT('rice-terraces')],
  [/banana boat|parasail|jet ski/i, ACT('parasailing')], [/dinner cruise|phinisi/i, ACT('dinner-cruise')], [/merlion/i, ACT('merlion')], [/helix/i, ACT('helix-bridge')], [/flyer|suntec|esplanade/i, ACT('flyer')],
  [/cable car/i, ACT('cable-car')], [/adventure cove|rainbow reef/i, ACT('adventure-cove')], [/wings of time/i, ACT('wings-of-time')], [/supertree|skyway/i, ACT('skyway')], [/cloud forest/i, ACT('cloud-forest')],
  [/flower dome|floral fantasy|monet/i, ACT('flower-dome')], [/waterslide/i, ACT('waterslide')], [/ropes course|zipline/i, ACT('cruise-deck')], [/zouk|pool/i, '/singapore-packages/hotels/genting-dream/5.webp'], [/lido|buffet/i, ACT('lido-1')], [/little india|chinatown|bugis/i, ACT('little-india')],
  [/night safari/i, ACT('safari-4')], [/tram ride/i, ACT('safari-5')], [/zoo|river wonders/i, ACT('zoo')], [/universal studios/i, ACT('uss-1')], [/sci-fi|madagascar|far far away|themed zones/i, ACT('uss-5')], [/minion|sesame|meet the characters|shows/i, ACT('uss-3')], [/city hall|thian hock|marina bay|civic|raffles|war memorial/i, ACT('marina-bay')], [/siloso|beach time/i, ACT('cable-car')],
  [/rock climbing/i, ACT('climb-1')], [/spa|zodiac/i, '/singapore-packages/hotels/genting-dream/5.webp']
];
const hg = (h, n) => Array.from({ length: n }, (_, i) => `/singapore-packages/hotels/${h}/${i + 1}.webp`);
const HOTEL = { bliss: hg('bliss-surfer-kuta', 10), diamond: hg('diamond-kuta', 10), ibis: hg('ibis-novena', 10), ibisBudget: hg('ibis-budget-clarke-quay', 9), cruise: hg('genting-dream', 7) };
const CITY_IMG = {
  Kuta: [SP(BALI, 1), SP(BALI, 2), SP(BALI, 7)],
  Singapore: [SP(LAND, 1), SP(LAND, 7), SP(SAIL, 2)],
  'Genting Dream Cruise': [SP(SAIL, 1), SP(SAIL, 7), SP(SAIL, 3)],
  'Marina Bay': [IMG.skyline, IMG.marinaAerial, IMG.twilight],
  'Gardens by the Bay': [IMG.gardens, IMG.supertreeNight, IMG.supertreeBlue],
  Sentosa: [IMG.supertreeBlue, IMG.gardens, IMG.marinaAerial],
  Chinatown: [IMG.jalanBesar, IMG.twilight]
};
export const cityImages = (c) => CITY_IMG[c] || [IMG.skyline];

const INCL_BASE = ['Meals as indicated in the itinerary (B = Breakfast, L = Lunch, D = Dinner)', 'Entrance fees to the attractions mentioned in the programme', 'Sightseeing and excursions mentioned in the itinerary', 'English-speaking local guide', 'Transportation used in the programme'];
const EXCL_BASE = ['Tips for guides and drivers', 'Personal expenses such as telephone, laundry, drinks, etc.', 'Meals not mentioned in the programme', 'Bank fees related to payment', 'Other services not clearly indicated under "Included"'];

// day: [dayNo, title, meals, bullets[], overnight]
const D = (day, title, meals, bullets, overnight) => ({ day, title, meals, bullets, overnight });

export const destination = { name: 'Singapore', slug: 'singapore', continent: 'Asia', image: IMG.skyline };

export const packages = [
  {
    slug: BALI, name: 'Bali Meets Singapore', code: 'SG-BALI-7', actImg: SG_ACTS, days: 7, nights: 6, tag: 'Multi-country', styles: ['Honeymoon', 'Family', 'Beach'],
    included: { hotels: 2, activities: 9, transfers: 11, meals: 6 },
    summary: 'Three lazy, lush days in Kuta with rice terraces, a jungle swing and a sunset dinner cruise, then three polished days in Singapore with the Merlion, a cable car to Sentosa, a waterpark and the Wings of Time show. Two very different islands, one easy holiday.',
    highlights: ['Tegallalang rice terraces, Tegenungan waterfall and the Bali jungle swing in a single day', 'Banana boat, parasailing and jet ski at Tanjung Benoa, then a pirate themed sunset dinner cruise', 'Singapore city tour with the Merlion, Helix Bridge and the Civic District', 'Round trip cable car to Sentosa, a full day at Adventure Cove Waterpark and the Wings of Time show'],
    stays: [['Kuta', 'Nights 1–3', 'Bliss Surfer Hotel, Kuta (or Diamond Hotel Kuta)', [...HOTEL.bliss, ...HOTEL.diamond.slice(0, 4)]], ['Singapore', 'Nights 4–6', 'ibis Singapore Novena (or ibis budget Clarke Quay)', [...HOTEL.ibis, ...HOTEL.ibisBudget.slice(0, 4)]]],
    itinerary: [
      D(1, 'Welcome to Bali', '', ['Private sedan transfer from Bali airport to your hotel in Kuta', 'Check in, drop the bags and let the island set the pace', 'Suggested: the Upside Down World, sunset on Kuta Beach or a Kecak dance at Kuta Theatre'], 'Kuta'),
      D(2, 'Kintamani, waterfalls and the jungle swing', 'B, L', ['Shared transfer from your hotel for a full day in central Bali', 'Tegenungan Waterfall, the first stop of the morning', 'Tegallalang Rice Terraces, the postcard view of Ubud', 'Kintamani Highlands: Mount Batur and its crater lake right in front of you', 'Coffee plantation stop with a taste of Luwak coffee (own cost)', 'Bali Jungle Swing: fly out high over the valley', 'Local lunch on the way, then a shared transfer back to Kuta'], 'Kuta'),
      D(3, 'Watersports and a sunset dinner cruise', 'B, D', ['Shared transfer from your hotel to Tanjung Benoa Beach', 'Tanjung Benoa watersports: banana boat, couple parasailing and a jet ski session', 'Pirate dinner cruise: sunset on a traditional Phinisi boat with Sea Safari, live music and dance', 'Shared transfer back to your hotel in Kuta'], 'Kuta'),
      D(4, 'Fly to Singapore', 'B', ['Check out and private sedan transfer to Bali airport', 'Flight from Bali to Singapore (not included, we can add it for you)', 'Private sedan transfer from Changi Airport to your hotel in Singapore', 'Suggested: ArtScience Museum, the Asian Civilisations Museum or the National Orchid Garden'], 'Singapore'),
      D(5, 'Singapore city tour', 'B', ['Shared transfer from your hotel for the city tour', 'Helix Bridge and the Marina Bay skyline', 'Merlion Park and photo stop', 'Singapore Flyer: then Suntec City and the Esplanade', 'Civic District: Civilian War Memorial and Raffles Hotel', 'Chinatown stroll before the shared transfer back to your hotel'], 'Singapore'),
      D(6, 'Sentosa by cable car, Adventure Cove and Wings of Time', 'B', ['Shared transfer from your hotel to Mount Faber Station', 'Singapore Cable Car: Sky Pass round trip over the harbour to Sentosa', 'Adventure Cove Waterpark: Rainbow Reef snorkelling, Riptide Rocket and the lazy Adventure River', 'Wings of Time: night show over the sea at Siloso Beach', 'Cable car back to Mount Faber and shared transfer to your hotel'], 'Singapore'),
      D(7, 'Goodbye, Singapore', 'B', ['Breakfast and check out', 'Private sedan transfer from your hotel to Changi Airport'], null)
    ],
    pricing: { currency: 'INR', basis: 'Per person on double-sharing basis, deluxe hotels, excluding international flights', rows: [['All departures', 26949]], note: 'Bali to Singapore flight can be added on request' },
    price: 26949,
    inclusions: ['3 nights in Kuta with daily breakfast', '3 nights in Singapore with daily breakfast', 'Private airport transfers in Bali and Singapore', 'Kintamani day tour with Tegenungan Waterfall, Tegallalang, coffee plantation, Bali Jungle Swing and local lunch', 'Tanjung Benoa watersports (banana boat, couple parasailing, jet ski) and pirate themed dinner cruise', 'Singapore city tour on shared basis', 'Singapore Cable Car Sky Pass, round trip', 'Adventure Cove Waterpark one day admission', 'Wings of Time standard admission', 'Visa assistance'],
    exclusions: ['International flights and the Bali to Singapore flight', 'Visa charges and travel insurance (mandatory for Singapore)', 'Meals not mentioned in the itinerary', 'Expenses of a personal nature'],
    gallery: [SP(BALI, 1), SP(BALI, 2), SP(BALI, 3), SP(BALI, 4), SP(BALI, 5), SP(BALI, 6), SP(BALI, 7), SP(BALI, 8)], alt: 'Golden sunset over Tanah Lot temple on the Bali coast'
  },
  {
    slug: SAIL, name: 'Sail Away, Singapore', code: 'SG-CRUISE-7', actImg: SG_ACTS, days: 7, nights: 6, tag: 'Cruise', styles: ['Family', 'Honeymoon', 'Luxury'],
    included: { hotels: 2, activities: 6, transfers: 8, meals: 11 },
    summary: 'Flights from Delhi, two nights at sea on the Genting Dream with every meal taken care of, and four nights in Singapore for Gardens by the Bay, a cable car ride to Sentosa and the Wings of Time show. The one trip that keeps everyone in the family happy.',
    highlights: ['Return flights from Delhi to Singapore included', 'Two nights on the Genting Dream cruise with breakfast, lunch and dinner on board', 'Flower Dome and Cloud Forest at Gardens by the Bay with the Impressions of Monet experience', 'Cable car to Sentosa and the Wings of Time show over the sea'],
    stays: [['Singapore', 'Night 1', 'ibis Singapore Novena (or ibis budget Clarke Quay)', [...HOTEL.ibis, ...HOTEL.ibisBudget.slice(0, 4)]], ['Genting Dream Cruise', 'Nights 2–3', 'Genting Dream, deluxe stateroom', HOTEL.cruise], ['Singapore', 'Nights 4–6', 'ibis Singapore Novena (or ibis budget Clarke Quay)', [...HOTEL.ibis, ...HOTEL.ibisBudget.slice(0, 4)]]],
    itinerary: [
      D(1, 'Delhi to Singapore', '', ['Flight from Delhi (DEL) to Singapore Changi (SIN), IndiGo, departs 09:15 and lands 17:45', 'Private sedan transfer from Changi Airport to your hotel', 'Suggested: Singapore Zoo, a walk up Bukit Batok or dinner in Chinatown'], 'Singapore'),
      D(2, 'All aboard the Genting Dream', 'B, L, D', ['Check out and private sedan transfer to Marina Bay Cruise Centre', 'Board the Genting Dream and set sail past the Singapore Flyer and Marina Bay Sands', 'Top deck fun: ropes course, zipline or pool time at Zouk Beach Club', 'Lunch and dinner at the Lido buffet restaurant on board'], 'Genting Dream Cruise'),
      D(3, 'A full day at sea', 'B, L, D', ['Waterslide Park for the thrill seekers', 'Rock climbing wall: or a slow morning at Crystal Life Spa', 'Zodiac Theatre: evening production show', 'All meals on board'], 'Genting Dream Cruise'),
      D(4, 'Back on land', 'B', ['Disembark at Marina Bay Cruise Centre after breakfast', 'Private sedan transfer to your hotel in Singapore', 'Suggested: Bugis Street for shopping, Little India Arcade and the National Museum of Singapore'], 'Singapore'),
      D(5, 'Gardens by the Bay', 'B', ['Shared transfer from your hotel to Gardens by the Bay', 'Flower Dome: Mediterranean blooms and bottle trees', 'Cloud Forest: the tallest indoor waterfall in the world', 'Impressions of Monet: The Experience', 'OCBC Skyway: a walk between the Supertrees', 'Shared transfer back to your hotel'], 'Singapore'),
      D(6, 'Sentosa and Wings of Time', 'B', ['Shared transfer from your hotel to Mount Faber Station', 'Singapore Cable Car: Sky Pass round trip to Sentosa with harbour views', 'Beach time on Siloso', 'Wings of Time: night show over the sea at Siloso Beach', 'Cable car back to Mount Faber and shared transfer to your hotel'], 'Singapore'),
      D(7, 'Singapore to Delhi', 'B', ['Breakfast and check out', 'Private sedan transfer from your hotel to Changi Airport', 'Flight from Singapore (SIN) to Delhi (DEL), Vistara, departs 09:30 and lands 13:00'], null)
    ],
    pricing: { currency: 'INR', basis: 'Per person on double-sharing basis, deluxe hotels, return flights from Delhi included', rows: [['All departures', 73399]], note: 'Fares move with flight availability, your specialist will confirm the final price for your dates' },
    price: 73399,
    inclusions: ['Return flights Delhi to Singapore', '4 nights in Singapore with daily breakfast', '2 nights on the Genting Dream cruise with breakfast, lunch and dinner', 'Private airport and cruise terminal transfers', 'Gardens by the Bay: Flower Dome, Cloud Forest and Impressions of Monet', 'Singapore Cable Car Sky Pass, round trip', 'Wings of Time standard admission', 'Visa assistance'],
    exclusions: ['Visa charges and travel insurance (mandatory for Singapore)', 'Meals not mentioned in the itinerary', 'Expenses of a personal nature', 'Activities and tickets are non refundable once booked'],
    gallery: [SP(SAIL, 1), SP(SAIL, 2), SP(SAIL, 3), SP(SAIL, 4), SP(SAIL, 5), SP(SAIL, 6), SP(SAIL, 7), SP(SAIL, 8)], alt: 'The Genting Dream cruise ship at Marina Bay Cruise Centre, Singapore'
  },
  {
    slug: LAND, name: 'Singapore Unlocked', code: 'SG-LAND-6', actImg: SG_ACTS, days: 6, nights: 5, tag: 'City', styles: ['Family', 'Honeymoon', 'Short trips'],
    included: { hotels: 1, activities: 9, transfers: 10, meals: 5 },
    summary: 'Five nights in one hotel and the five things everyone comes to Singapore for: the city tour, the Night Safari, a cable car to Sentosa, a full day at Universal Studios and the domes of Gardens by the Bay. No packing and repacking, just Singapore done properly.',
    highlights: ['Half day city tour with the Merlion, Chinatown, Little India and the Singapore Flyer', 'Night Safari with the tram ride through the nocturnal zoo', 'Round trip cable car to Sentosa Island', 'Universal Studios Singapore one day ticket', 'Flower Dome, Cloud Forest and Floral Fantasy at Gardens by the Bay'],
    stays: [['Singapore', 'Nights 1–5', 'ibis Singapore Novena (or similar deluxe hotel)', HOTEL.ibis]],
    itinerary: [
      D(1, 'Welcome to the Lion City', '', ['Private transfer from Changi Airport to your hotel', 'Check in and settle into your base for the week', 'Suggested: River Wonders at Mandai, Bukit Batok Nature Park or Changi Beach'], 'Singapore'),
      D(2, 'City tour and the Night Safari', 'B', ['Shared transfer from your hotel for the half day city tour', 'Chinatown, Little India and Marina Bay', 'Merlion Park: then City Hall and Thian Hock Keng Temple', 'Singapore Flyer: the giant observation wheel over the bay', 'Night Safari: admission to the nocturnal zoo', 'Tram ride through the park after dark', 'Shared transfer back to your hotel'], 'Singapore'),
      D(3, 'Sentosa by cable car', 'B', ['Shared transfer from your hotel to Mount Faber Station', 'Singapore Cable Car: Sky Pass round trip across the harbour', 'Free time on Sentosa: beaches, S.E.A. Aquarium or Adventure Cove (own cost)', 'Shared transfer back to your hotel'], 'Singapore'),
      D(4, 'Universal Studios Singapore', 'B', ['Shared transfer from your hotel to Resorts World Sentosa', 'Universal Studios Singapore: one day admission with all rides and shows', 'Seven themed zones: Sci-Fi City, Ancient Egypt, Madagascar, Hollywood, New York, Far Far Away and The Lost World', 'Meet the characters: Minions, Sesame Street and the Transformers', 'Shared transfer back to your hotel'], 'Singapore'),
      D(5, 'Gardens by the Bay', 'B', ['Shared transfer from your hotel to Gardens by the Bay', 'Flower Dome: blooms from five continents', 'Cloud Forest: the famous indoor waterfall', 'Floral Fantasy: the smallest and most whimsical of the domes', 'OCBC Skyway: a walk between the Supertrees', 'Shared transfer back to your hotel'], 'Singapore'),
      D(6, 'Fly home', 'B', ['Breakfast and check out', 'Private transfer from your hotel to Changi Airport'], null)
    ],
    pricing: { currency: 'INR', basis: 'Per person on double-sharing basis, deluxe hotel, excluding international flights', rows: [['All departures', 60540]], note: 'Lunch and dinner are not included' },
    price: 60540,
    inclusions: ['5 nights in Singapore with daily breakfast', 'Private airport transfers', 'Singapore city tour on shared basis', 'Night Safari admission with tram ride', 'Singapore Cable Car Sky Pass, round trip', 'Universal Studios Singapore one day admission', 'Gardens by the Bay: Flower Dome, Cloud Forest and Floral Fantasy', 'Visa assistance'],
    exclusions: ['International flights', 'Lunch and dinner', 'Visa charges and travel insurance', 'Expenses of a personal nature'],
    gallery: [SP(LAND, 1), SP(LAND, 2), SP(LAND, 3), SP(LAND, 4), SP(LAND, 5), SP(LAND, 6), SP(LAND, 7), SP(LAND, 8)], alt: 'Marina Bay Sands and the ArtScience Museum at sunset, Singapore'
  },
  {
    slug: 'singapore-city-break-4d3n', name: 'Singapore City Break', code: 'SG-1', days: 4, nights: 3, tag: 'City', styles: ['Honeymoon', 'Family'],
    summary: 'The essential Singapore in a few unforgettable days: Marina Bay Sands, Gardens by the Bay after dark, the heritage streets of Chinatown and hawker feasts at every turn.',
    stays: [['Marina Bay', 'Days 1–2', 'Marina Bay Sands (Deluxe room)'], ['Chinatown', 'Day 3', 'The Clan Hotel (Premier room)']],
    itinerary: [
      D(1, 'Arrival in Singapore', 'D', ['Arrival at Changi Airport and private transfer to Marina Bay', 'Evening stroll along the waterfront promenade', 'Dinner with a view of the Spectra light-and-water show'], 'Marina Bay'),
      D(2, 'Gardens by the Bay & Marina Bay (private tour)', 'B', ['Flower Dome and Cloud Forest conservatories at Gardens by the Bay', 'Supertree Grove and the OCBC Skyway walk', 'Merlion Park, the Esplanade and a Singapore River bumboat ride', 'Evening Garden Rhapsody light show among the Supertrees'], 'Marina Bay'),
      D(3, 'Cultural quarters – Chinatown, Little India & Kampong Glam', 'B, L', ['Sri Mariamman Temple and the Buddha Tooth Relic Temple in Chinatown', 'Little India and the colourful shophouses of Kampong Glam', 'Lunch at a famous hawker centre; afternoon at Orchard Road'], 'Chinatown'),
      D(4, 'Singapore – departure', 'B', ['Breakfast at the hotel', 'Optional visit to the Jewel Changi Rain Vortex before your flight', 'Private transfer to Changi Airport'], null)
    ],
    pricing: { currency: 'INR', basis: '5-star hotels, per person on double-sharing basis', rows: [['All months', 52999]] },
    price: 52999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room', 'Gardens by the Bay conservatory tickets'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.skyline, IMG.gardens, IMG.marinaAerial, IMG.jalanBesar], alt: 'Marina Bay Sands and the Singapore skyline at dusk'
  },
  {
    slug: 'singapore-with-kids-5d4n', name: 'Singapore with Kids', code: 'SG-2', days: 5, nights: 4, tag: 'Family', styles: ['Family'],
    summary: 'A family adventure built around Sentosa island, Universal Studios, the S.E.A. Aquarium and the magical night zoo – with Marina Bay’s gardens to round it off.',
    stays: [['Marina Bay', 'Days 1–2', 'PARKROYAL COLLECTION Marina Bay'], ['Sentosa', 'Days 3–4', 'Shangri-La Rasa Sentosa Resort']],
    itinerary: [
      D(1, 'Arrival in Singapore', 'D', ['Arrival at Changi and private transfer to Marina Bay', 'Evening at the Jewel Changi Rain Vortex and gardens', 'Family welcome dinner'], 'Marina Bay'),
      D(2, 'Gardens by the Bay & Singapore Flyer', 'B', ['Cloud Forest waterfall and the Supertree Grove', 'Ride the Singapore Flyer observation wheel', 'Evening ArtScience Museum or a riverside dinner'], 'Marina Bay'),
      D(3, 'Marina Bay – Sentosa island', 'B', ['Transfer to Sentosa by cable car', 'Universal Studios Singapore for the day', 'Beach time and the Wings of Time night show'], 'Sentosa'),
      D(4, 'Sentosa – S.E.A. Aquarium & Night Safari', 'B, D', ['Morning at the S.E.A. Aquarium and Adventure Cove', 'Afternoon at leisure on the island beaches', 'Evening tram ride through the world-famous Night Safari'], 'Sentosa'),
      D(5, 'Singapore – departure', 'B', ['Breakfast at the resort', 'Private transfer to Changi Airport'], null)
    ],
    pricing: { currency: 'INR', basis: 'Per person on double-sharing basis', rows: [['January–June', 58999, 69999], ['July–December', 61999, 73999]], columns: ['4-star', '5-star'] },
    price: 58999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room', 'Universal Studios and S.E.A. Aquarium tickets', 'Night Safari entry'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.supertreeBlue, IMG.gardens, IMG.marinaAerial, IMG.skyline], alt: 'Illuminated Supertrees at Gardens by the Bay, Singapore'
  },
  {
    slug: 'singapore-stopover-3d2n', name: 'Singapore Stopover', code: 'SG-3', days: 3, nights: 2, tag: 'Short trips', styles: ['Honeymoon'],
    summary: 'A perfect short stopover: the highlights of Marina Bay, a Gardens by the Bay evening and a taste of Singapore’s legendary food scene in just two nights.',
    stays: [['Marina Bay', 'Days 1–2', 'The Fullerton Bay Hotel (Bayview room)']],
    itinerary: [
      D(1, 'Arrival in Singapore', 'D', ['Arrival at Changi Airport and private transfer to Marina Bay', 'Evening Spectra light show and waterfront dinner'], 'Marina Bay'),
      D(2, 'Singapore highlights (private half-day tour)', 'B', ['Merlion Park, the Esplanade and a Singapore River cruise', 'Gardens by the Bay conservatories and Supertree Grove', 'Afternoon free for shopping or a Singapore Sling at Raffles'], 'Marina Bay'),
      D(3, 'Singapore – departure', 'B', ['Breakfast at the hotel', 'Private transfer to Changi Airport for your onward flight'], null)
    ],
    pricing: { currency: 'INR', basis: '5-star hotels, per person on double-sharing basis', rows: [['All months', 34999]] },
    price: 34999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room', 'Gardens by the Bay conservatory tickets'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.twilight, IMG.skyline, IMG.marinaAerial, IMG.gardens], alt: 'Singapore skyline reflected in Marina Bay at twilight'
  }
];
