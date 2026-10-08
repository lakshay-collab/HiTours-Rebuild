// Europe multi-country packages – same structured data model as vietnamPackages.js. Photos: /public/europe (real photography).
const E = (n) => `/europe/${n}.webp`;

const CITY_IMG = {
  Paris: [E('hero-paris'), E('paris-gold')], Interlaken: [E('interlaken'), E('alps')], Zermatt: [E('zermatt'), E('alps'), E('zermatt-peaks')], Lucerne: [E('lucerne'), E('alps')],
  'Lake Como': [E('como'), E('cinque-terre')], Venice: [E('venice')], Rome: [E('rome')], Florence: [E('cinque-terre'), E('rome')], 'Amalfi Coast': [E('amalfi'), E('cinque-terre')],
  Innsbruck: [E('hallstatt'), E('alps')], Salzburg: [E('salzburg'), E('hallstatt')], Hallstatt: [E('hallstatt')], Munich: [E('munich'), E('neuschwanstein')], Vienna: [E('vienna')],
  Barcelona: [E('barcelona')], Madrid: [E('madrid')], Seville: [E('seville')], Lisbon: [E('lisbon'), E('lisbon-tram')], Porto: [E('porto')],
  Athens: [E('athens')], Mykonos: [E('mykonos')], Santorini: [E('santorini')], Amsterdam: [E('amsterdam')], Bruges: [E('bruges')], Brussels: [E('brussels')]
};
export const cityImages = (c) => CITY_IMG[c] || [E('alps')];

const PRICING = (pp, note) => ({ currency: 'INR', basis: 'Per person on double-sharing basis, 4-star hotels, rail and transfers as listed, excluding international flights', rows: [['All departures', pp]], note });
const D = (day, title, meals, bullets, overnight) => ({ day, title, meals, bullets, overnight });
const EXCL = ['International flights to and from India', 'Schengen visa fees and travel insurance', 'Lunches and dinners unless listed', 'City taxes payable at hotels', 'Expenses of a personal nature'];

export const packages = [
  {
    slug: 'france-switzerland-italy', name: 'France, Switzerland & Italy', code: 'EU-FSI-11', days: 11, nights: 10, tag: 'Multi-country', styles: ['Honeymoon', 'Family', 'Culture'],
    included: { hotels: 4, activities: 12, transfers: 9, meals: 10 },
    summary: 'Three countries in eleven days without a single wasted hour: Paris and Versailles, the Jungfrau from Interlaken, the Matterhorn from Zermatt, then down to Lake Como and a gondola in Venice. Trains do the travelling, you do the enjoying.',
    highlights: ['Eiffel Tower summit, Seine cruise and a day at Versailles', 'Jungfraujoch, the Top of Europe, by cogwheel train', 'Gornergrat railway for the classic Matterhorn view', 'Lake Como by boat and a gondola ride in Venice'],
    stays: [['Paris', 'Nights 1–3', '4-star hotel near Opera, Paris'], ['Interlaken', 'Nights 4–5', '4-star hotel on the Hoheweg, Interlaken'], ['Zermatt', 'Night 6', 'Alpine 4-star hotel, Zermatt'], ['Lake Como', 'Nights 7–8', 'Lakeside 4-star hotel, Bellagio or Como'], ['Venice', 'Nights 9–10', '4-star hotel near St Mark\u2019s, Venice']],
    itinerary: [
      D(1, 'Bonjour Paris', '', ['Private transfer from Charles de Gaulle Airport to your hotel', 'Evening Seine river cruise: the Eiffel Tower lit up from the water', 'Optional: Montmartre walk | Dinner at a Left Bank bistro'], 'Paris'),
      D(2, 'Icons of Paris', 'B', ['Eiffel Tower: summit access with skip the line tickets', 'Louvre Museum: guided highlights tour including the Mona Lisa', 'Champs-Élysées and the Arc de Triomphe', 'Optional: Moulin Rouge show | Musée d\u2019Orsay'], 'Paris'),
      D(3, 'Versailles', 'B', ['Train to Versailles with your guide', 'Palace of Versailles: Hall of Mirrors, Royal Apartments and the gardens', 'Return to Paris with the evening free', 'Optional: Disneyland Paris instead of Versailles'], 'Paris'),
      D(4, 'TGV to the Swiss Alps', 'B', ['Private transfer to Gare de Lyon', 'High speed TGV Lyria from Paris to Basel, then onward train to Interlaken', 'Private transfer from Interlaken Ost to your hotel', 'Lake Thun promenade walk at sunset'], 'Interlaken'),
      D(5, 'Jungfraujoch, Top of Europe', 'B', ['Cogwheel train via Kleine Scheidegg to Jungfraujoch at 3,454 m', 'Sphinx observation deck, Ice Palace and the Aletsch Glacier view', 'Lauterbrunnen valley and Staubbach Falls on the way down', 'Optional: Harder Kulm funicular at sunset'], 'Interlaken'),
      D(6, 'Zermatt and the Matterhorn', 'B', ['Scenic train Interlaken to Zermatt via Spiez and Visp', 'Gornergrat railway: the classic Matterhorn panorama at 3,089 m', 'Car free Zermatt village and the Bahnhofstrasse'], 'Zermatt'),
      D(7, 'Over the Alps to Italy', 'B', ['Train from Zermatt through the Simplon to Milan, then onward to Como', 'Private transfer to your lakeside hotel', 'Evening at leisure on the Como waterfront'], 'Lake Como'),
      D(8, 'Lake Como by boat', 'B', ['Boat to Bellagio, the pearl of the lake', 'Villa del Balbianello or Villa Carlotta gardens', 'Varenna lakeside walk and lunch stop (own cost)', 'Optional: Brunate funicular above Como'], 'Lake Como'),
      D(9, 'Fast train to Venice', 'B', ['Train from Como to Milan, then Frecciarossa high speed train to Venice Santa Lucia', 'Private water taxi to your hotel', 'Evening walk through St Mark\u2019s Square'], 'Venice'),
      D(10, 'Venice, the floating city', 'B', ['Doge\u2019s Palace and St Mark\u2019s Basilica: skip the line guided tour', 'Gondola ride through the back canals', 'Optional: Murano and Burano islands by boat | Rialto market walk'], 'Venice'),
      D(11, 'Arrivederci', 'B', ['Breakfast and check out', 'Private water taxi and transfer to Venice Marco Polo Airport'], null)
    ],
    pricing: PRICING(189999, 'Second class rail included, first class upgrade on request'), price: 189999,
    inclusions: ['10 nights in 4-star hotels with daily breakfast', 'All inter-city rail: TGV Lyria, Swiss scenic trains and Frecciarossa', 'Private airport, station and water taxi transfers', 'Eiffel Tower summit, Louvre guided tour and Seine cruise', 'Palace of Versailles with guide', 'Jungfraujoch and Gornergrat excursions', 'Lake Como boat day', 'Doge\u2019s Palace, St Mark\u2019s Basilica and gondola ride', 'Schengen visa assistance'],
    exclusions: EXCL,
    gallery: [E('alps'), E('hero-paris'), E('interlaken'), E('zermatt'), E('como'), E('venice'), E('paris-gold')], alt: 'The Matterhorn reflected in an alpine lake in autumn, Zermatt'
  },
  {
    slug: 'switzerland-austria-germany', name: 'Switzerland, Austria & Germany', code: 'EU-SAG-10', days: 10, nights: 9, tag: 'Multi-country', styles: ['Family', 'Honeymoon', 'Culture'],
    included: { hotels: 5, activities: 11, transfers: 8, meals: 9 },
    summary: 'An Alpine loop through three German speaking countries: Lucerne and Mount Titlis, Innsbruck and the Sound of Music country around Salzburg, fairy tale Hallstatt, then Neuschwanstein Castle and Munich\u2019s beer halls to finish.',
    highlights: ['Mount Titlis rotating cable car and the Cliff Walk', 'Salzburg old town and the Sound of Music tour', 'Hallstatt, the lakeside village on every postcard', 'Neuschwanstein Castle and a Munich beer hall evening'],
    stays: [['Lucerne', 'Nights 1–2', '4-star hotel on Lake Lucerne'], ['Innsbruck', 'Night 3', '4-star hotel in the old town, Innsbruck'], ['Salzburg', 'Nights 4–5', '4-star hotel near Mirabell, Salzburg'], ['Hallstatt', 'Night 6', 'Lakeside guesthouse, Hallstatt'], ['Munich', 'Nights 7–9', '4-star hotel near Marienplatz, Munich']],
    itinerary: [
      D(1, 'Grüezi Lucerne', '', ['Private transfer from Zurich Airport to Lucerne', 'Chapel Bridge, the Lion Monument and the old town', 'Optional: Lake Lucerne sunset cruise'], 'Lucerne'),
      D(2, 'Mount Titlis', 'B', ['Train to Engelberg and the Titlis Rotair rotating cable car', 'Glacier cave, Cliff Walk suspension bridge and the Ice Flyer', 'Return to Lucerne for a free evening'], 'Lucerne'),
      D(3, 'Into Austria', 'B', ['Scenic train Lucerne to Innsbruck via the Arlberg', 'Private transfer to your hotel', 'Golden Roof, Maria-Theresien-Strasse and the Nordkette cable car', 'Optional: Swarovski Crystal Worlds'], 'Innsbruck'),
      D(4, 'Salzburg, city of Mozart', 'B', ['Train from Innsbruck to Salzburg', 'Private transfer to your hotel', 'Mirabell Gardens, Getreidegasse and Mozart\u2019s birthplace', 'Optional: Mozart dinner concert at St Peter\u2019s'], 'Salzburg'),
      D(5, 'Sound of Music country', 'B', ['Sound of Music tour: the lakes district, Mondsee church and the gazebo', 'Hohensalzburg Fortress by funicular', 'Optional: Salt mine tour at Hallein'], 'Salzburg'),
      D(6, 'Hallstatt', 'B, D', ['Private transfer from Salzburg to Hallstatt through the Salzkammergut', 'Skywalk viewing platform and the Hallstatt salt mine', 'Lakeside walk and dinner at your guesthouse'], 'Hallstatt'),
      D(7, 'Bavaria bound', 'B', ['Private transfer from Hallstatt to Munich via Berchtesgaden', 'Königssee boat ride to St Bartholomew\u2019s church', 'Check in to your Munich hotel'], 'Munich'),
      D(8, 'Neuschwanstein Castle', 'B', ['Full day excursion to Neuschwanstein and Hohenschwangau castles', 'Marienbrücke viewpoint for the classic castle photo', 'Oberammergau village stop on the return'], 'Munich'),
      D(9, 'Munich', 'B', ['Marienplatz and the Glockenspiel, Viktualienmarkt and the Residenz', 'BMW Welt or Nymphenburg Palace, your pick', 'Beer hall evening at the Hofbräuhaus with Bavarian dinner (own cost)'], 'Munich'),
      D(10, 'Auf Wiedersehen', 'B', ['Breakfast and check out', 'Private transfer to Munich Airport'], null)
    ],
    pricing: PRICING(174999, 'Private transfers on the Hallstatt and Bavaria legs, rail elsewhere'), price: 174999,
    inclusions: ['9 nights in 4-star hotels and a lakeside guesthouse with daily breakfast', 'Dinner in Hallstatt', 'Inter-city rail Lucerne to Innsbruck to Salzburg', 'Private transfers Salzburg to Hallstatt to Munich', 'Mount Titlis Rotair and Cliff Walk', 'Sound of Music tour and Hohensalzburg Fortress', 'Hallstatt Skywalk and salt mine', 'Königssee boat and Neuschwanstein Castle excursion', 'Schengen visa assistance'],
    exclusions: EXCL,
    gallery: [E('neuschwanstein'), E('lucerne'), E('hallstatt'), E('salzburg'), E('munich'), E('alps')], alt: 'Neuschwanstein Castle above the Bavarian countryside'
  },
  {
    slug: 'italy-france-switzerland', name: 'Italy, France & Switzerland', code: 'EU-IFS-12', days: 12, nights: 11, tag: 'Multi-country', styles: ['Culture', 'Honeymoon', 'Luxury'],
    included: { hotels: 5, activities: 13, transfers: 9, meals: 11 },
    summary: 'The grand tour in reverse: Rome, Florence and Venice first, a night flight to Paris for the Louvre and Versailles, then a Swiss finale under the Matterhorn in Zermatt. Twelve days, three countries and every connection booked.',
    highlights: ['Colosseum, Roman Forum and the Vatican Museums', 'Florence\u2019s Duomo and the Uffizi, then a gondola in Venice', 'Paris with the Eiffel Tower, the Louvre and Versailles', 'Glacier Express style finale to Zermatt and the Gornergrat'],
    stays: [['Rome', 'Nights 1–3', '4-star hotel near the Spanish Steps, Rome'], ['Florence', 'Nights 4–5', '4-star hotel in the historic centre, Florence'], ['Venice', 'Night 6', '4-star hotel near the Rialto, Venice'], ['Paris', 'Nights 7–9', '4-star hotel in Saint-Germain, Paris'], ['Zermatt', 'Nights 10–11', 'Alpine 4-star hotel, Zermatt']],
    itinerary: [
      D(1, 'Ciao Roma', '', ['Private transfer from Fiumicino Airport to your hotel', 'Evening walk: Trevi Fountain, Pantheon and Piazza Navona'], 'Rome'),
      D(2, 'Ancient Rome', 'B', ['Colosseum, Roman Forum and Palatine Hill: skip the line guided tour', 'Optional: Trastevere food walk in the evening'], 'Rome'),
      D(3, 'The Vatican', 'B', ['Vatican Museums, Sistine Chapel and St Peter\u2019s Basilica with early access', 'Afternoon free for the Spanish Steps and Via Condotti'], 'Rome'),
      D(4, 'Florence by fast train', 'B', ['Frecciarossa high speed train Rome to Florence in 90 minutes', 'Private transfer to your hotel', 'Piazzale Michelangelo at sunset'], 'Florence'),
      D(5, 'Renaissance Florence', 'B', ['Duomo complex and Giotto\u2019s bell tower', 'Uffizi Gallery guided tour', 'Ponte Vecchio and the Oltrarno artisan quarter', 'Optional: Tuscan wine tasting in Chianti'], 'Florence'),
      D(6, 'Venice', 'B', ['Frecciarossa train Florence to Venice', 'Private water taxi to your hotel', 'St Mark\u2019s Square, the Basilica and a gondola ride'], 'Venice'),
      D(7, 'Fly to Paris', 'B', ['Water taxi to Marco Polo Airport', 'Flight from Venice to Paris', 'Private transfer to your hotel in Saint-Germain', 'Evening Seine cruise'], 'Paris'),
      D(8, 'Paris essentials', 'B', ['Eiffel Tower summit with skip the line tickets', 'Louvre Museum guided highlights tour', 'Optional: Montmartre and Sacré-Cœur | Moulin Rouge'], 'Paris'),
      D(9, 'Versailles', 'B', ['Palace of Versailles and gardens with your guide', 'Free evening in Paris', 'Optional: Musée d\u2019Orsay | Galeries Lafayette rooftop'], 'Paris'),
      D(10, 'TGV to Switzerland', 'B', ['Private transfer to Gare de Lyon', 'TGV Lyria Paris to Geneva, then the lakeside line to Visp and Zermatt', 'Car free Zermatt village in the evening'], 'Zermatt'),
      D(11, 'Matterhorn day', 'B', ['Gornergrat railway: the Matterhorn panorama at 3,089 m', 'Optional: Matterhorn Glacier Paradise cable car | Five Lakes walk'], 'Zermatt'),
      D(12, 'Homeward', 'B', ['Breakfast and check out', 'Train to Zurich Airport for your flight home'], null)
    ],
    pricing: PRICING(214999, 'Venice to Paris flight included'), price: 214999,
    inclusions: ['11 nights in 4-star hotels with daily breakfast', 'Venice to Paris flight', 'Frecciarossa and TGV Lyria rail legs', 'Private airport, station and water taxi transfers', 'Colosseum, Forum, Vatican Museums and Sistine Chapel guided tours', 'Uffizi Gallery guided tour', 'Gondola ride in Venice', 'Eiffel Tower summit, Louvre tour, Seine cruise and Versailles', 'Gornergrat railway', 'Schengen visa assistance'],
    exclusions: EXCL,
    gallery: [E('rome'), E('cinque-terre'), E('venice'), E('hero-paris'), E('zermatt'), E('paris-gold')], alt: 'The Colosseum in Rome lit up at night'
  },
  {
    slug: 'spain-portugal', name: 'Spain & Portugal', code: 'EU-SP-9', days: 9, nights: 8, tag: 'Multi-country', styles: ['Culture', 'Honeymoon', 'Family'],
    included: { hotels: 5, activities: 10, transfers: 8, meals: 9 },
    summary: 'Gaudí\u2019s Barcelona, royal Madrid and flamenco in Seville, then across the border to Lisbon\u2019s tiled hills and a Douro river evening in Porto. Iberia in nine days with high speed trains doing the hard work.',
    highlights: ['Sagrada Família and Park Güell with skip the line entry', 'Prado Museum and the Royal Palace in Madrid', 'Seville Alcázar, the cathedral and a flamenco night', 'Lisbon trams, Belém pastries and Porto\u2019s Douro cruise'],
    stays: [['Barcelona', 'Nights 1–2', '4-star hotel in the Eixample, Barcelona'], ['Madrid', 'Nights 3–4', '4-star hotel near Puerta del Sol, Madrid'], ['Seville', 'Night 5', '4-star hotel in Santa Cruz, Seville'], ['Lisbon', 'Nights 6–7', '4-star hotel in Chiado, Lisbon'], ['Porto', 'Night 8', '4-star hotel in Ribeira, Porto']],
    itinerary: [
      D(1, 'Hola Barcelona', '', ['Private transfer from El Prat Airport to your hotel', 'Evening stroll along La Rambla and the Gothic Quarter'], 'Barcelona'),
      D(2, 'Gaudí\u2019s city', 'B', ['Sagrada Família with skip the line guided tour', 'Park Güell and the Passeig de Gràcia facades', 'Optional: Camp Nou tour | Flamenco at Tablao Cordobés'], 'Barcelona'),
      D(3, 'AVE to Madrid', 'B', ['AVE high speed train Barcelona to Madrid in under three hours', 'Private transfer to your hotel', 'Puerta del Sol, Plaza Mayor and the San Miguel market'], 'Madrid'),
      D(4, 'Royal Madrid', 'B', ['Royal Palace guided visit', 'Prado Museum highlights tour', 'Retiro Park and the Crystal Palace', 'Optional: Toledo half day'], 'Madrid'),
      D(5, 'Seville and flamenco', 'B', ['AVE train Madrid to Seville', 'Real Alcázar and Seville Cathedral with the Giralda', 'Plaza de España at golden hour', 'Flamenco show in Triana'], 'Seville'),
      D(6, 'Across to Lisbon', 'B', ['Flight from Seville to Lisbon', 'Private transfer to your hotel in Chiado', 'Tram 28 ride and sunset at a miradouro'], 'Lisbon'),
      D(7, 'Lisbon and Sintra', 'B', ['Belém Tower, Jerónimos Monastery and the original pastéis de nata', 'Sintra: Pena Palace and the old town', 'Optional: Fado dinner in Alfama'], 'Lisbon'),
      D(8, 'Porto', 'B', ['Alfa Pendular train Lisbon to Porto', 'Ribeira riverside walk and Livraria Lello', 'Six Bridges cruise on the Douro', 'Port wine cellar tasting in Vila Nova de Gaia'], 'Porto'),
      D(9, 'Adeus', 'B', ['Breakfast and check out', 'Private transfer to Porto Airport'], null)
    ],
    pricing: PRICING(149999, 'Seville to Lisbon flight included'), price: 149999,
    inclusions: ['8 nights in 4-star hotels with daily breakfast', 'AVE and Alfa Pendular rail legs', 'Seville to Lisbon flight', 'Private airport and station transfers', 'Sagrada Família and Park Güell guided tour', 'Royal Palace and Prado Museum tours', 'Alcázar and cathedral in Seville, flamenco show', 'Sintra day with Pena Palace', 'Douro Six Bridges cruise and port tasting', 'Schengen visa assistance'],
    exclusions: EXCL,
    gallery: [E('lisbon'), E('barcelona'), E('madrid'), E('seville'), E('lisbon-tram'), E('porto')], alt: 'Terracotta rooftops of Alfama above the Tagus river, Lisbon'
  },
  {
    slug: 'greece-italy', name: 'Greece & Italy', code: 'EU-GI-10', days: 10, nights: 9, tag: 'Multi-country', styles: ['Honeymoon', 'Beach', 'Culture'],
    included: { hotels: 5, activities: 10, transfers: 9, meals: 9 },
    summary: 'The Acropolis and two Cycladic islands, then a short flight to Italy for the Amalfi Coast and Rome. Whitewashed Oia, Positano\u2019s pastel cliffs and the Colosseum in one honeymoon sized trip.',
    highlights: ['Acropolis and the Parthenon with a licensed guide', 'Mykonos windmills and a Santorini caldera sunset cruise', 'Positano, Amalfi and Ravello by private boat and car', 'Colosseum and Vatican in Rome to finish'],
    stays: [['Athens', 'Night 1', '4-star hotel in Plaka, Athens'], ['Mykonos', 'Nights 2–3', 'Boutique hotel near Mykonos Town'], ['Santorini', 'Nights 4–5', 'Caldera view hotel, Oia or Imerovigli'], ['Amalfi Coast', 'Nights 6–7', '4-star hotel in Positano or Sorrento'], ['Rome', 'Nights 8–9', '4-star hotel in the historic centre, Rome']],
    itinerary: [
      D(1, 'Athens', '', ['Private transfer from Athens Airport to your hotel', 'Acropolis and the Parthenon with a licensed guide', 'Plaka dinner under the Acropolis (own cost)'], 'Athens'),
      D(2, 'Ferry to Mykonos', 'B', ['High speed ferry from Piraeus to Mykonos', 'Private transfer to your hotel', 'Little Venice sunset and the windmills'], 'Mykonos'),
      D(3, 'Mykonos', 'B', ['Boat trip to Delos, the sacred island', 'Beach afternoon at Ornos or Psarou', 'Optional: Mykonos sunset catamaran'], 'Mykonos'),
      D(4, 'Santorini', 'B', ['Ferry from Mykonos to Santorini', 'Private transfer to your caldera hotel', 'Oia sunset from the castle ruins'], 'Santorini'),
      D(5, 'Caldera cruise', 'B, D', ['Volcano and hot springs catamaran cruise with dinner on board', 'Fira to Oia caldera walk or a winery visit', 'Optional: Red Beach and Akrotiri excavations'], 'Santorini'),
      D(6, 'Fly to Italy', 'B', ['Flight from Santorini to Naples via Athens', 'Private transfer along the Amalfi Drive to your hotel', 'Positano evening'], 'Amalfi Coast'),
      D(7, 'Amalfi Coast by boat', 'B', ['Private boat day: Positano, Amalfi and the Furore fjord', 'Ravello and the Villa Rufolo gardens by car', 'Optional: Capri day trip | Limoncello tasting'], 'Amalfi Coast'),
      D(8, 'Rome', 'B', ['Private transfer to Naples and Frecciarossa train to Rome', 'Trevi Fountain, Pantheon and Piazza Navona evening walk'], 'Rome'),
      D(9, 'Ancient and sacred Rome', 'B', ['Colosseum and Roman Forum skip the line tour', 'Vatican Museums and Sistine Chapel in the afternoon', 'Optional: Trastevere food walk'], 'Rome'),
      D(10, 'Arrivederci', 'B', ['Breakfast and check out', 'Private transfer to Fiumicino Airport'], null)
    ],
    pricing: PRICING(199999, 'Santorini to Naples flight and Greek ferries included'), price: 199999,
    inclusions: ['9 nights in 4-star and boutique hotels with daily breakfast', 'Dinner on the Santorini catamaran cruise', 'High speed ferries Piraeus to Mykonos to Santorini', 'Santorini to Naples flight', 'Frecciarossa Naples to Rome', 'Private transfers throughout', 'Acropolis guided tour and Delos boat trip', 'Santorini volcano cruise', 'Amalfi Coast private boat day and Ravello', 'Colosseum, Forum, Vatican and Sistine Chapel tours', 'Schengen visa assistance'],
    exclusions: EXCL,
    gallery: [E('santorini'), E('athens'), E('mykonos'), E('amalfi'), E('rome')], alt: 'Blue domes of Oia overlooking the caldera, Santorini'
  },
  {
    slug: 'netherlands-belgium-france', name: 'Netherlands, Belgium & France', code: 'EU-NBF-8', days: 8, nights: 7, tag: 'Multi-country', styles: ['Short trips', 'Culture', 'Family'],
    included: { hotels: 3, activities: 10, transfers: 6, meals: 7 },
    summary: 'Three capitals linked by trains under two hours: Amsterdam\u2019s canals and the Keukenhof season, chocolate and medieval Bruges in Belgium, then the Thalys to Paris for the Eiffel Tower and the Louvre. A perfect first Europe trip.',
    highlights: ['Canal cruise, Rijksmuseum and the Anne Frank House in Amsterdam', 'Bruges by canal boat and Brussels\u2019 Grand Place', 'Eurostar high speed train to Paris', 'Eiffel Tower, Louvre and a Seine dinner cruise'],
    stays: [['Amsterdam', 'Nights 1–3', '4-star hotel on the canal ring, Amsterdam'], ['Brussels', 'Nights 4–5', '4-star hotel near the Grand Place, Brussels'], ['Paris', 'Nights 6–7', '4-star hotel near the Louvre, Paris']],
    itinerary: [
      D(1, 'Amsterdam', '', ['Private transfer from Schiphol Airport to your hotel', 'Evening canal cruise through the Golden Age ring'], 'Amsterdam'),
      D(2, 'Museums and markets', 'B', ['Rijksmuseum guided highlights with Rembrandt\u2019s Night Watch', 'Anne Frank House with timed entry', 'Jordaan district and the Albert Cuyp market', 'Optional: Van Gogh Museum | Heineken Experience'], 'Amsterdam'),
      D(3, 'Dutch countryside', 'B', ['Zaanse Schans windmills and a clog workshop', 'Volendam and Marken fishing villages', 'Keukenhof tulip gardens in season (mid March to mid May)'], 'Amsterdam'),
      D(4, 'Train to Belgium', 'B', ['Intercity train Amsterdam to Brussels', 'Private transfer to your hotel', 'Grand Place, Manneken Pis and a chocolate tasting walk'], 'Brussels'),
      D(5, 'Bruges', 'B', ['Train to Bruges for the day', 'Canal boat ride, the Belfry and the Markt', 'Belgian waffles and a brewery visit', 'Optional: Ghent stop on the way back'], 'Brussels'),
      D(6, 'Eurostar to Paris', 'B', ['Eurostar high speed train Brussels to Paris in 1 hour 22 minutes', 'Private transfer to your hotel', 'Eiffel Tower summit at sunset'], 'Paris'),
      D(7, 'Paris', 'B, D', ['Louvre Museum guided highlights tour', 'Montmartre and Sacré-Cœur', 'Seine dinner cruise to finish', 'Optional: Versailles half day'], 'Paris'),
      D(8, 'Au revoir', 'B', ['Breakfast and check out', 'Private transfer to Charles de Gaulle Airport'], null)
    ],
    pricing: PRICING(134999, 'Keukenhof entry included in season'), price: 134999,
    inclusions: ['7 nights in 4-star hotels with daily breakfast', 'Seine dinner cruise', 'Intercity and Eurostar rail legs', 'Private airport and station transfers', 'Amsterdam canal cruise, Rijksmuseum and Anne Frank House', 'Zaanse Schans and Volendam day tour', 'Bruges day with canal boat and brewery', 'Eiffel Tower summit and Louvre guided tour', 'Schengen visa assistance'],
    exclusions: EXCL,
    gallery: [E('amsterdam'), E('bruges'), E('brussels'), E('hero-paris'), E('paris-gold')], alt: 'Canal houses glowing at dusk, Amsterdam'
  }
];
