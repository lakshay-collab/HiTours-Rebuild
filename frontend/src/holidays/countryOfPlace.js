// City to country, for the Country filter on the Europe all-tours listing. Asia derives its
// countries from the per-country product arrays instead, so only European cities live here.
const CITIES = {
  Italy: ['Rome', 'Venice', 'Florence', 'Pisa', 'Milan', 'Naples', 'Verona', 'Como', 'Tuscany'],
  Switzerland: ['Zurich', 'Lucerne', 'Interlaken', 'Geneva', 'Zermatt', 'Titlis', 'Rigi', 'Jungfrau', 'Bern'],
  France: ['Paris', 'Nice', 'Lyon', 'Versailles', 'Cannes'],
  Netherlands: ['Amsterdam', 'Rotterdam', 'Keukenhof'],
  Germany: ['Frankfurt', 'Munich', 'Berlin', 'Cologne', 'Heidelberg', 'Black Forest'],
  Austria: ['Vienna', 'Innsbruck', 'Salzburg'],
  Belgium: ['Brussels', 'Bruges', 'Ghent'],
  Greece: ['Athens', 'Mykonos', 'Santorini', 'Olympia', 'Delphi', 'Corfu', 'Crete'],
  Norway: ['Oslo', 'Bergen', 'Flam', 'Tromso', 'Trondheim', 'Alesund', 'Molde', 'Kristiansund',
           'Stavanger', 'Kirkenes', 'Geiranger', 'Gudvangen', 'Voss', 'Myrdal'],
  Sweden: ['Stockholm', 'Kiruna', 'Abisko', 'Lulea', 'Gothenburg', 'Jukkasjarvi'],
  Finland: ['Helsinki', 'Rovaniemi', 'Inari', 'Saariselka', 'Levi', 'Turku'],
  Denmark: ['Copenhagen', 'Odense', 'Aarhus'],
  Ireland: ['Dublin', 'Cork', 'Limerick', 'Galway', 'Killarney', 'Connemara', 'Cliffs of Moher', 'Blarney'],
};

const BY_CITY = {};
Object.entries(CITIES).forEach(([country, cities]) => cities.forEach((c) => { BY_CITY[c] = country; }));

export const countryOfPlace = (place) => BY_CITY[place];

export const countriesOfPlaces = (places = []) =>
  [...new Set(places.map(countryOfPlace).filter(Boolean))];
