#!/usr/bin/env python3
"""Generates destination landing pages (listing data, packages, adapters, page wrappers) from the compact SPEC below."""
import json, os, re
SRC = os.path.join(os.path.dirname(__file__), '..', 'src')
CT = 'https://images.ctfassets.net/bth3mlrehms2'

# name, slug, continent, basePath, hero image path, [cities: (name, airport?, highlights[3], hotel5, hotel4)], food, best time, visa, expert
SPEC = [
 ('Laos','laos','Asia','/asien','730GUSsXgobNqsyerVaagA/c31524b81de30c8805073d4e2cabda93/Laos_Mekong_Boot.jpg',
  [('Luang Prabang',['Alms-giving ceremony at dawn and the Royal Palace Museum','Kuang Si waterfalls and bear sanctuary','Sunset from Mount Phousi and the night market'],'Avani+ Luang Prabang','Maison Dalabua'),
   ('Vang Vieng',['Blue Lagoon swim and Tham Chang cave','Hot-air balloon or kayaking on the Nam Song river','Rice-paddy cycling between karst peaks'],'Riverside Boutique Resort','Amari Vang Vieng'),
   ('Vientiane',['Pha That Luang golden stupa and Patuxai arch','Buddha Park and the Mekong riverside promenade','COPE visitor centre and Wat Si Saket'],'Crowne Plaza Vientiane','Lao Poet Hotel'),
   ('Pakse & 4000 Islands',['Boat trip through the Si Phan Don islands','Khone Phapheng, the largest waterfall in Southeast Asia','Bolaven Plateau coffee plantations'],'The River Resort Champasak','Pakse Hotel')],
  'Lao cuisine centres on sticky rice, larb (minced-meat salad), tam mak hoong (papaya salad) and or lam stew; try Luang Prabang sausage and Beerlao.','October to April (dry, cool season); the Mekong is highest and the countryside greenest right after the rains in October–November.','Indian citizens receive a visa on arrival at Laos\' international airports and major land borders (30 days); Hi Tours prepares all paperwork.','Noy'),
 ('Japan','japan','Asia','/asien','5E91LAbIo29xmfzemwDnnu/082cd826dbf9b2744cbcf00015005330/Japan_MtFuji.jpg',
  [('Tokyo',['Senso-ji temple, Shibuya crossing and the Meiji Shrine','Tsukiji outer market food walk and teamLab Planets','Day trip to Mount Fuji and Lake Kawaguchi'],'The Peninsula Tokyo','Hotel Gracery Shinjuku'),
   ('Hakone',['Lake Ashi cruise with Fuji views and the Hakone ropeway','Open-air museum and onsen hot-spring bathing','Traditional kaiseki dinner at a ryokan'],'Gora Kadan','Hakone Kowakien Ten-yu'),
   ('Kyoto',['Fushimi Inari torii gates and Kinkaku-ji golden pavilion','Arashiyama bamboo grove and tea ceremony in Gion','Nara day trip: Todai-ji and the deer park'],'The Ritz-Carlton Kyoto','Cross Hotel Kyoto'),
   ('Osaka',['Osaka Castle and the Dotonbori neon district','Street-food tour: takoyaki and okonomiyaki','Universal Studios Japan or Himeji Castle day trip'],'Conrad Osaka','Hotel Monterey Grasmere')],
  'Japanese cuisine ranges from sushi and ramen to kaiseki multi-course dinners, wagyu beef, tempura and street food like takoyaki; vegetarian shojin ryori is available in temple towns.','March–April for cherry blossoms and October–November for autumn colours; winter brings snow festivals and clear Fuji views.','Indian citizens need a Japan tourist visa, which Hi Tours processes through the Japan Visa Application Centre with your documents.','Aiko'),
 ('Indonesia','indonesia','Asia','/asien','61b5ymnc76Gat5QEm4R7Uv/236a66af31569408e5fba01e2dcb53b1/Kelingking_Beach__Nusa_Penida__Indonesien_NTCG__1_.png',
  [('Ubud',['Tegallalang rice terraces and the Sacred Monkey Forest','Tirta Empul water temple and a Balinese cooking class','Mount Batur sunrise trek'],'Four Seasons Sayan','Alaya Resort Ubud'),
   ('Seminyak',['Tanah Lot sea temple at sunset','Beach clubs and surf lesson at Seminyak beach','Uluwatu temple and Kecak fire dance'],'The Legian Seminyak','Alila Seminyak'),
   ('Nusa Penida',['Kelingking Beach and Broken Beach viewpoints','Snorkelling with manta rays at Manta Point','Crystal Bay sunset'],'Adiwana Warnakali','Semabu Hills'),
   ('Yogyakarta',['Borobudur sunrise and Prambanan temples','Sultan\'s Palace and batik workshop','Jeep adventure on Mount Merapi'],'Amanjiwo','Phoenix Hotel Yogyakarta')],
  'Indonesian food is rich and aromatic: nasi goreng, satay, rendang, gado-gado and Balinese babi guling; plenty of vegetarian and vegan options in Ubud.','April to October (dry season) is ideal for Bali and Java; July–August is peak, while May–June and September offer great weather with fewer crowds.','Indian citizens get a visa on arrival (30 days, extendable) at Bali and Jakarta airports; Hi Tours assists with the e-VoA in advance.','Putu'),
 ('China','china','Asia','/asien','3FwBvWPMIiVGThJdqClYD1/bb67524f6b951541a23d6950859c4e6f/China_Jinshanling_ChinesischeMauer_TCG.png',
  [('Beijing',['Forbidden City, Tiananmen Square and the Temple of Heaven','Great Wall hike at Mutianyu','Hutong rickshaw tour and Peking duck dinner'],'Waldorf Astoria Beijing','Novotel Beijing Peace'),
   ('Xi\'an',['Terracotta Army and the ancient city wall by bicycle','Muslim Quarter street-food walk','Big Wild Goose Pagoda and a Tang Dynasty show'],'Sofitel Legend People\'s Grand','Grand Mercure Xi\'an'),
   ('Guilin & Yangshuo',['Li River cruise through karst peaks','Bamboo rafting on the Yulong river','Longji rice terraces'],'Banyan Tree Yangshuo','Yangshuo Mountain Retreat'),
   ('Shanghai',['The Bund skyline and Yu Garden','Zhujiajiao water town day trip','Shanghai Tower observation deck and acrobatics show'],'The Peninsula Shanghai','Les Suites Orient')],
  'Chinese cuisine varies by region – Peking duck in Beijing, hand-pulled noodles in Xi\'an, dim sum and Sichuan hotpot; vegetarian dishes are widely available.','April–May and September–October offer mild weather across the country; avoid the Golden Week holidays in early October.','Indian citizens require a Chinese tourist (L) visa; Hi Tours prepares the invitation, itinerary and hotel confirmations for your application.','Mei'),
 ('Cambodia','cambodia','Asia','/asien','3zbplvZU8SZYLZqdmaPsZv/c16250ef83321324f10fbf00c9b058a1/Kambodscha_AngkorWat.jpg',
  [('Siem Reap',['Sunrise at Angkor Wat and the faces of Bayon','Ta Prohm jungle temple and Banteay Srei','Floating villages of Tonlé Sap lake and Phare circus'],'Raffles Grand Hotel d\'Angkor','Shinta Mani Angkor'),
   ('Phnom Penh',['Royal Palace and the Silver Pagoda','National Museum and Mekong sunset cruise','Tuol Sleng and Choeung Ek remembrance visit'],'Rosewood Phnom Penh','Palace Gate Hotel'),
   ('Battambang',['Bamboo train ride and colonial architecture','Phnom Sampeau bat caves at dusk','Countryside cycling and rice-paper villages'],'Maisons Wat Kor','Bambu Hotel'),
   ('Koh Rong',['White-sand beaches and bioluminescent plankton','Snorkelling and island boat trip','Sunset at Long Set beach'],'Song Saa Private Island','The Royal Sands Koh Rong')],
  'Khmer cuisine is fragrant rather than fiery: fish amok, lok lak beef, nom banh chok noodles and fresh spring rolls, with tropical fruit at every market.','November to March is dry and pleasant; April is hottest, while the green season (June–October) brings lush landscapes and fewer visitors.','Indian citizens can obtain an e-visa online or a visa on arrival (30 days); Hi Tours handles the e-visa application for you.','Sopheak'),
 ('Philippines','philippines','Asia','/asien','1o2rtINxvG8y4nqhK5Bvgp/d09a493b9ea9c4db223ad37ba237b646/Philippinen_Palawan_Coron_Lagoone_TCG.png',
  [('Manila',['Intramuros walled city and Fort Santiago','Binondo, the world\'s oldest Chinatown food walk','Tagaytay and Taal volcano viewpoint'],'The Peninsula Manila','Henry Hotel Manila'),
   ('El Nido',['Island-hopping Tour A: Big and Small Lagoon','Nacpan beach and Las Cabañas sunset','Kayaking through limestone karsts'],'Miniloc Island Resort','Cauayan Island Resort'),
   ('Coron',['Kayangan Lake and Twin Lagoon','Wreck snorkelling and Barracuda Lake','Maquinit hot springs'],'Two Seasons Coron','Club Paradise Palawan'),
   ('Boracay',['White Beach and Puka Shell beach','Sunset paraw sailing','Helmet diving and D\'Mall food crawl'],'Shangri-La Boracay','Henann Crystal Sands')],
  'Filipino cuisine mixes Malay, Spanish and Chinese influences – adobo, sinigang, lechon, kinilaw (ceviche) and halo-halo for dessert; seafood is superb on the islands.','December to May is the dry season with calm seas – perfect for island-hopping; February–April is ideal for Palawan.','Indian citizens holding a valid US, UK, Schengen, Japan, Australia, Canada or Singapore visa can enter visa-free for 14 days; otherwise Hi Tours arranges the tourist visa.','Marco'),
 ('Iceland','iceland','Europe','/europa','19jS6gkSXrat4camgvmXdJ/6d0914a835cfb184af0111735d4332cc/Island__Reynisfjara.jpg',
  [('Reykjavik',['Hallgrímskirkja, Harpa and the old harbour','Blue Lagoon geothermal spa','Northern Lights hunt (Sep–Apr) or midnight sun'],'The Reykjavik EDITION','Fosshotel Reykjavik'),
   ('Golden Circle',['Thingvellir National Park rift valley','Geysir hot springs and Gullfoss waterfall','Secret Lagoon and Friðheimar tomato farm'],'ION Adventure Hotel','Hotel Geysir'),
   ('South Coast',['Seljalandsfoss and Skógafoss waterfalls','Reynisfjara black-sand beach and Dyrhólaey','Glacier hike on Sólheimajökull'],'Hotel Rangá','Hotel Kría'),
   ('Jökulsárlón',['Glacier lagoon boat tour and Diamond Beach','Ice cave visit (winter) and Vatnajökull','Höfn langoustine dinner'],'Fosshotel Glacier Lagoon','Hali Country Hotel')],
  'Icelandic food is fresh and simple – lamb soup, Arctic char, langoustine, skyr yoghurt and rye bread baked in geothermal heat; Reykjavik has excellent Indian and vegetarian restaurants.','June to August for the midnight sun and open highland roads; September to March for the Northern Lights and ice caves.','Indian citizens require a Schengen visa; Hi Tours provides the full itinerary, hotel confirmations and travel insurance documents for your application.','Sigrún'),
 ('Italy','italy','Europe','/europa','6MDAdkdCjF16LaohT1os4R/a05331428849331be0c2fd266c8570db/Italien_Amalfi.jpg',
  [('Rome',['Colosseum, Roman Forum and the Pantheon','Vatican Museums, Sistine Chapel and St Peter\'s','Trastevere food walk and Trevi Fountain at night'],'Hotel de Russie','Hotel Artemide'),
   ('Florence',['Uffizi Gallery and Michelangelo\'s David','Duomo climb and Ponte Vecchio','Chianti wine tasting and Tuscan cooking class'],'Four Seasons Firenze','Hotel Spadai'),
   ('Venice',['St Mark\'s Square, Doge\'s Palace and gondola ride','Murano and Burano island hop','Rialto market and cicchetti tour'],'The Gritti Palace','Hotel Ai Reali'),
   ('Amalfi Coast',['Positano, Amalfi and Ravello by private boat','Capri and the Blue Grotto','Pompeii and Mount Vesuvius day trip'],'Le Sirenuse','Hotel Villa Franca')],
  'Italy is a food lover\'s dream – fresh pasta, Neapolitan pizza, risotto, gelato and regional wines; vegetarian dishes are everywhere.','April–June and September–October for warm weather without peak crowds; the Amalfi Coast is best May–September.','Indian citizens require a Schengen visa; Hi Tours prepares complete itinerary and hotel documents for a smooth application.','Giulia'),
 ('Greece','greece','Europe','/europa','4tPmbNB9QIZbfIWAsHnz3w/fd3191963fb012a8f8e1aeb42a2a6401/Griechenland_Santorini.jpg',
  [('Athens',['Acropolis, Parthenon and the Acropolis Museum','Plaka and Monastiraki food walk','Cape Sounion sunset at the Temple of Poseidon'],'Hotel Grande Bretagne','Electra Metropolis'),
   ('Mykonos',['Little Venice and the windmills','Delos archaeological island','Beach day at Ornos or Psarou'],'Cavo Tagoo','Mykonos Theoxenia'),
   ('Santorini',['Oia sunset and caldera views','Catamaran cruise to the hot springs','Wine tasting and Akrotiri excavations'],'Canaves Oia','Volcano View Hotel'),
   ('Crete',['Knossos Palace and Heraklion market','Elafonissi pink-sand beach','Samaria Gorge or Chania old town'],'Blue Palace Elounda','Domes Noruz Chania')],
  'Greek cuisine is Mediterranean at its best – moussaka, souvlaki, grilled seafood, Greek salad and spanakopita, with plenty of vegetarian mezze.','May–June and September–October combine warm seas with fewer crowds; July–August is hottest and busiest on the islands.','Indian citizens require a Schengen visa; Hi Tours provides itinerary and hotel confirmations for your application.','Eleni'),
 ('Norway','norway','Europe','/europa','UHqJkdKkOhjiJeqqdlBtb/7f7ab850458b9aad4024ef52c5834ade/MAIN_Norwegen_Hardangerfjord_TCG.jpg',
  [('Oslo',['Vigeland Park and the Opera House roof walk','Fram and Viking Ship museums on Bygdøy','Oslofjord cruise'],'The Thief','Hotel Bristol'),
   ('Bergen',['Bryggen wharf and the Fløibanen funicular','Fish market and KODE art museums','Fjord cruise to Mostraumen'],'Hotel Norge by Scandic','Zander K Hotel'),
   ('Flåm & Sognefjord',['Flåm Railway, one of the world\'s steepest','Nærøyfjord UNESCO fjord cruise','Stegastein viewpoint'],'Fretheim Hotel','Flåmsbrygga Hotel'),
   ('Tromsø',['Northern Lights chase (Sep–Mar)','Fjellheisen cable car and Arctic Cathedral','Husky sledding or whale safari'],'Clarion Hotel The Edge','Thon Hotel Polar')],
  'Norwegian food celebrates the sea – salmon, cod, king crab and shrimp – alongside reindeer, brown cheese and cinnamon buns.','May–September for fjords and the midnight sun; November–March for the Northern Lights in Tromsø.','Indian citizens require a Schengen visa; Hi Tours prepares all supporting documents.','Ingrid'),
 ('Ireland','ireland','Europe','/europa','W4uVx0uUt86jnByPHjutE/306e7fb7b3d77e101f5fbde7cb9cab1d/Irland_CliffsofMoher-2.jpg',
  [('Dublin',['Trinity College and the Book of Kells','Guinness Storehouse and Temple Bar','Howth cliff walk'],'The Merrion','The Alex'),
   ('Galway',['Cliffs of Moher and the Burren','Connemara and Kylemore Abbey','Latin Quarter live music pubs'],'The Hardiman','The House Hotel'),
   ('Killarney',['Ring of Kerry scenic drive','Killarney National Park and Muckross House','Dingle Peninsula and Slea Head'],'The Europe Hotel','Killarney Plaza'),
   ('Belfast & Antrim',['Giant\'s Causeway and Carrick-a-Rede bridge','Titanic Belfast','Dark Hedges and Dunluce Castle'],'The Merchant Hotel','Bullitt Hotel')],
  'Irish food is hearty – Irish stew, seafood chowder, soda bread, boxty potato pancakes and farmhouse cheeses, best enjoyed in a cosy pub.','May to September brings the longest, driest days; spring and autumn are quieter and lush green.','Indian citizens require an Irish visa (separate from Schengen); UK visa holders may use the British-Irish Visa Scheme. Hi Tours assists with documents.','Siobhán'),
 ('Spain','spain','Europe','/europa','5957FrRqxs8F2fO8xJJ5n9/fb2d6cd0a2537891652feb13e96430c0/Spanien_Mallorca__Cala_de_Sa_Calobra_TCG.jpg',
  [('Barcelona',['Sagrada Família and Park Güell','Gothic Quarter and La Boqueria market','Montserrat monastery day trip'],'Mandarin Oriental Barcelona','Hotel Jazz'),
   ('Madrid',['Prado Museum and Retiro Park','Royal Palace and tapas in La Latina','Toledo day trip'],'Rosewood Villa Magna','Hotel Vincci Soho'),
   ('Seville',['Alcázar and the Cathedral with the Giralda','Flamenco show in Triana','Córdoba Mezquita day trip'],'Hotel Alfonso XIII','Hotel Casa 1800'),
   ('Mallorca',['Sa Calobra and the Tramuntana mountains','Palma Cathedral and old town','Boat day to Cala Figuera'],'Cap Rocat','Hotel Cort')],
  'Spanish cuisine is about sharing – tapas, paella, jamón ibérico, gazpacho and churros con chocolate, with great regional wines.','April–June and September–October for pleasant temperatures; the Balearic Islands are best May–September.','Indian citizens require a Schengen visa; Hi Tours provides complete itinerary and hotel documents.','Carmen'),
 ('Portugal','portugal','Europe','/europa','uPI9aniC3uvsUAS1zRHwP/284df47eb1a7e89a770256a62b97b3fa/S_o_Vicente__Madeira__Portugal.jpg',
  [('Lisbon',['Belém Tower, Jerónimos Monastery and pastéis de nata','Alfama tram 28 and fado evening','Sintra palaces and Cabo da Roca'],'Four Seasons Ritz Lisbon','Memmo Alfama'),
   ('Porto',['Ribeira riverside and the Dom Luís I bridge','Port wine cellars in Gaia','Douro Valley cruise'],'The Yeatman','Pestana Vintage Porto'),
   ('Algarve',['Benagil cave boat trip','Ponta da Piedade cliffs in Lagos','Faro old town and Ria Formosa lagoon'],'Vila Vita Parc','Tivoli Lagos'),
   ('Madeira',['Levada walks and the laurel forest','Pico do Arieiro sunrise','Funchal cable car and Monte toboggan'],'Reid\'s Palace','The Vine Hotel')],
  'Portuguese food is fresh and comforting – grilled sardines, bacalhau, caldo verde, francesinha and pastéis de nata, paired with vinho verde or port.','March–May and September–October are ideal; the Algarve and Madeira are pleasant almost year-round.','Indian citizens require a Schengen visa; Hi Tours prepares all supporting documents.','Inês'),
 ('Croatia','croatia','Europe','/europa','6Q2Kxa138pSiiIXTkuf3g5/7780a2df7b70cf6d10de66adc2795f87/Kroatien_InselVis.jpg',
  [('Dubrovnik',['City walls walk and the old town','Cable car to Mount Srđ at sunset','Lokrum island and sea kayaking'],'Hotel Excelsior','Hotel Kompas'),
   ('Split',['Diocletian\'s Palace and Riva promenade','Krka waterfalls day trip','Trogir old town'],'Hotel Park Split','Cornaro Hotel'),
   ('Hvar & Vis',['Blue Cave and Pakleni islands boat trip','Hvar fortress and lavender fields','Stiniva cove on Vis'],'Palace Elisabeth Hvar','Adriana Hvar Spa'),
   ('Plitvice',['Plitvice Lakes boardwalks and waterfalls','Rastoke watermill village','Zagreb upper town'],'Hotel Jezero','Fenomen Plitvice')],
  'Croatian cuisine blends Mediterranean and Central European flavours – grilled fish, black risotto, peka slow-cooked lamb, Pag cheese and truffles from Istria.','May–June and September are perfect for warm seas and lighter crowds; July–August is peak season.','Indian citizens require a Schengen visa (Croatia joined Schengen in 2023); Hi Tours assists with documents.','Ana'),
 ('England','england','Europe','/europa','4L4GHNc8RMTi7ric6I9giQ/a1a1d4ed6ce559ffa06712cf355ea24d/England-Roadtrip-1-2.jpg',
  [('London',['Tower of London, Westminster and the London Eye','British Museum and West End show','Windsor Castle day trip'],'The Savoy','The Resident Covent Garden'),
   ('Cotswolds',['Bibury, Bourton-on-the-Water and Stow','Blenheim Palace','Cream tea in a honey-stone village'],'Lygon Arms','The Slaughters Country Inn'),
   ('Bath & Stonehenge',['Roman Baths and the Royal Crescent','Stonehenge and Salisbury Cathedral','Thermae Bath Spa rooftop pool'],'The Gainsborough Bath Spa','Hotel Indigo Bath'),
   ('Lake District',['Lake Windermere cruise','Beatrix Potter\'s Hill Top and Grasmere','Scenic drive over Kirkstone Pass'],'The Samling','Lindeth Howe')],
  'English food has had a renaissance – Sunday roasts, fish and chips, afternoon tea, Cornish pasties and world-class Indian restaurants in London.','May to September offers the warmest, longest days; London is a year-round destination.','Indian citizens require a UK Standard Visitor visa; Hi Tours prepares itinerary and accommodation documents for your application.','Oliver'),
 ('Scotland','scotland','Europe','/europa','6Ypj2Qd3m3jQk6ygmpsNAM/076740049ff3bf1df0f025d0547d4d90/Schottland_Burg.png',
  [('Edinburgh',['Edinburgh Castle and the Royal Mile','Arthur\'s Seat and Holyrood Palace','Whisky tasting on the Scotch Whisky Experience'],'The Balmoral','Kimpton Charlotte Square'),
   ('Loch Ness & Inverness',['Loch Ness cruise and Urquhart Castle','Culloden battlefield and Clava Cairns','Cairngorms National Park'],'Ness Walk Hotel','Kingsmills Hotel'),
   ('Isle of Skye',['Old Man of Storr and the Quiraing','Fairy Pools and Neist Point lighthouse','Portree harbour and Talisker distillery'],'Kinloch Lodge','Cuillin Hills Hotel'),
   ('Glencoe & Highlands',['Glencoe valley and Glenfinnan Viaduct','Fort William and Ben Nevis gondola','Stirling Castle'],'Glencoe House','Ballachulish Hotel')],
  'Scottish fare includes haggis, neeps and tatties, Cullen skink soup, fresh salmon and shortbread – plus single-malt whisky from over 130 distilleries.','May to September for long days and open attractions; late May–June and September avoid midges and peak crowds.','Indian citizens require a UK Standard Visitor visa; Hi Tours prepares all supporting documents.','Fiona'),
 ('Finland','finland','Europe','/europa','5bPB8dEQGT5Hl1icMTfEiM/2393b18a187a961b249dfd4ed7a22d7d/iStock-1256670045.jpg',
  [('Helsinki',['Design District and the Oodi library','Suomenlinna sea fortress','Löyly public sauna and Market Square'],'Hotel Kämp','Hotel Lilla Roberts'),
   ('Rovaniemi',['Santa Claus Village and the Arctic Circle','Husky and reindeer sleigh rides','Northern Lights snowmobile safari'],'Arctic TreeHouse Hotel','Santa\'s Hotel Santa Claus'),
   ('Saariselkä',['Glass-igloo night under the auroras','Snowshoeing in Urho Kekkonen National Park','Sámi culture and ice fishing'],'Kakslauttanen Arctic Resort','Northern Lights Village'),
   ('Lakeland',['Lakeside cottage and smoke sauna','Savonlinna Olavinlinna Castle','Canoeing on Lake Saimaa'],'Hotel Punkaharju','Järvisydän Resort')],
  'Finnish food is seasonal and pure – salmon soup, reindeer with lingonberries, Karelian pies, rye bread and cloudberries; vegetarian options are excellent.','December to March for snow, Northern Lights and glass igloos; June to August for the midnight sun and lakes.','Indian citizens require a Schengen visa; Hi Tours prepares complete itinerary and accommodation documents.','Aino'),
 ('Sweden','sweden','Europe','/europa','4pwuirTK8DaLqHIejBCzWU/63b0406c67aa2f3b1a18260f86b7e6a1/iStock-1364945953.jpg',
  [('Stockholm',['Gamla Stan old town and the Royal Palace','Vasa Museum and ABBA The Museum','Archipelago boat cruise'],'Grand Hôtel Stockholm','Hotel Rival'),
   ('Gothenburg',['Haga district and Feskekôrka fish market','West coast archipelago and Marstrand','Liseberg amusement park'],'Upper House','Clarion Hotel Post'),
   ('Swedish Lapland',['Icehotel in Jukkasjärvi','Northern Lights at Abisko Aurora Sky Station','Dog sledding and Sámi reindeer experience'],'Icehotel 365','Camp Ripan'),
   ('Visby, Gotland',['Medieval walled town of Visby','Rauk sea stacks at Fårö','Cycling the island coast'],'Visby Strand','Clarion Hotel Wisby')],
  'Swedish cuisine is about fika and fresh produce – meatballs with lingonberries, gravlax, toast skagen, cinnamon buns and crayfish parties in August.','June to August for the midnight sun and archipelagos; December to March for Northern Lights and the Icehotel in Lapland.','Indian citizens require a Schengen visa; Hi Tours prepares all supporting documents.','Elsa'),
]

TEMPLATES = [  # (title tpl, tag, styles, city idxs, nights per city)
 ('Classic {N}: {C0} & {C1}', 'Culture', ['Honeymoon','Family'], [0,1], [3,3]),
 ('Grand Tour of {N}', 'Culture', ['Family','Adventure'], [0,1,2,3], [3,2,3,3]),
 ('{N} Honeymoon Escape', 'Honeymoon', ['Honeymoon'], [0,2], [3,4]),
 ('{N} Family Adventure', 'Family', ['Family'], [0,1,2], [3,2,3]),
 ('Short Escape to {C0}', 'City break', ['Short trips'], [0], [4]),
 ('Luxury {N}: {C0}, {C2} & {C3}', 'Luxury', ['Honeymoon','Luxury'], [0,2,3], [3,3,3]),
 ('{N} Explorer: {C1} & {C2}', 'Adventure', ['Adventure'], [1,2], [3,3]),
 ('Culture & Cuisine of {N}', 'Culture', ['Culture','Family'], [0,1,3], [3,3,2]),
 ('Highlights of {N} in 10 Days', 'Culture', ['Family','Honeymoon'], [0,1,2,3], [2,2,3,2]),
 ('{N} Festive Getaway', 'Honeymoon', ['Honeymoon','Short trips'], [0,3], [3,3]),
]
BASE_PRICE = {'Asia': 64999, 'Europe': 124999}
INTRO = {
 'Asia': 'Ancient temples, emerald landscapes and legendary hospitality – {N} rewards travellers who look beyond the postcard. Our experts tailor every journey, from first-time highlights to hidden corners.',
 'Europe': 'Storied cities, dramatic landscapes and timeless culture – {N} is made for slow, tailor-made travel. Our experts craft journeys that balance the must-sees with the moments only locals know.',
}

def js(s):
    return json.dumps(s, ensure_ascii=False)

def build(country):
    name, slug, cont, base, heropath, cities, food, best, visa, expert = country
    camel = re.sub(r'[^A-Za-z]', '', name)
    hero = f"{CT}/{heropath}"
    cnames = [c[0] for c in cities]
    pkgs = []
    for i, (tpl, tag, styles, idxs, nts) in enumerate(TEMPLATES):
        title = tpl.format(N=name, **{f'C{k}': cnames[k] for k in range(4)})
        nights = sum(nts); days = nights + 1
        stays, itin, day = [], [], 1
        for ci, n in zip(idxs, nts):
            cname, hl, h5, h4 = cities[ci]
            stays.append([cname, f'Days {day}–{day+n-1}' if n > 1 else f'Day {day}', h5 if 'Luxury' in title or 'Honeymoon' in title else h4])
            first = day == 1
            itin.append({'day': day, 'title': f'Arrival in {cname}' if first else f'Travel to {cname}', 'meals': 'D' if first else 'B, D', 'bullets': [('Private airport welcome and transfer to your hotel' if first else f'Scenic transfer to {cname}'), hl[0]], 'overnight': cname})
            for d in range(1, n):
                itin.append({'day': day + d, 'title': f'{cname} highlights', 'meals': 'B, L', 'bullets': [hl[(d) % 3], hl[(d + 1) % 3]], 'overnight': cname})
            day += n
        itin.append({'day': day, 'title': f'{cnames[idxs[-1]]} – departure', 'meals': 'B', 'bullets': ['Breakfast at the hotel', 'Private transfer to the airport for your onward flight'], 'overnight': None})
        price = BASE_PRICE[cont] + nights * (9500 if cont == 'Asia' else 14500) + (25000 if 'Luxury' in title else 0) - (i * 1000)
        pkgs.append({'slug': f"{slug}-{re.sub(r'[^a-z0-9]+', '-', title.lower()).strip('-')}-{days}d{nights}n", 'name': title, 'code': f'{camel[:2].upper()}-{i+1}', 'days': days, 'nights': nights, 'tag': tag, 'styles': styles,
                     'summary': f'{title} – a tailor-made {days}-day journey through {", ".join(cnames[k] for k in idxs)} with hand-picked hotels, private transfers and expert local guides.',
                     'stays': stays, 'itinerary': itin, 'pricing': {'currency': 'INR', 'basis': 'Per person on double-sharing basis', 'rows': [['All months', price]]}, 'price': price,
                     'inclusions': ['...INCL_BASE', 'Accommodation based on 2 people per room'], 'exclusions': ['International flights', '...EXCL_BASE'],
                     'gallery': ['IMG.hero', 'IMG.hero'], 'alt': f'{cnames[idxs[0]]}, {name}'})
    pk = js(pkgs).replace('"...INCL_BASE"', '...INCL_BASE').replace('"...EXCL_BASE"', '...EXCL_BASE').replace('"IMG.hero"', 'IMG.hero')
    open(f'{SRC}/{slug}Packages.js', 'w').write(f"""// {name} packages – generated by scripts/gen_destinations.py (same data model as bhutanPackages.js).
const U = (base, w = 1080) => `${{base}}?w=${{w}}&q=60&fm=webp`;
const B = {{ hero: '{hero}' }};
export const IMG = {{ hero: U(B.hero), RAW: B }};
export const cityImages = () => [IMG.hero];
const INCL_BASE = ['Meals as indicated in the itinerary (B = Breakfast, L = Lunch, D = Dinner)', 'Entrance fees to the attractions mentioned in the programme', 'Sightseeing and excursions mentioned in the itinerary', 'English-speaking local guide', 'Transportation used in the programme'];
const EXCL_BASE = ['Tips for guides and drivers', 'Personal expenses such as telephone, laundry, drinks, etc.', 'Meals not mentioned in the programme', 'Bank fees related to payment', 'Other services not clearly indicated under "Included"'];
export const destination = {{ name: {js(name)}, slug: '{slug}', continent: '{cont}', image: IMG.hero }};
export const packages = {pk};
""")
    open(f'{SRC}/tours/{slug}ToursData.js', 'w').write(f"""import {{ createAdapters }} from './vietnamToursData';
import {{ packages, cityImages }} from '../{slug}Packages';

const {{ toProduct, build }} = createAdapters({{
  cityImages, base: '{base}', ctaHref: '/l/{slug}/enquiry/passengers/', cruiseCity: '—',
  expert: {{ name: {js(expert)}, image: '/experts/riya.webp', role: '{name} expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' }},
  crumbs: [{{ label: 'Destinations', href: '/reiseziele/' }}, {{ label: '{cont}', href: '{"/asien" if cont == "Asia" else "#"}' }}, {{ label: {js(name)}, href: '{base}/{slug}' }}]
}});

export const {slug}Products = packages.map(toProduct);
export const {slug}Tours = packages.map(build);
export const {slug}BySlug = Object.fromEntries({slug}Tours.map((t) => [t.detail.slug, t]));
""")
    places = ',\n'.join(f"  [{js(c[0])}, IMG.hero]" for c in cities)
    acts = ',\n'.join(f"  {{ href: '#', title: {js(c[1][0])}, alt: {js(c[0] + ', ' + name)}, tag: 'Highlight', image: IMG.hero }}" for c in cities[:2])
    faqs = [(f'When is the best time to visit {name}?', best), (f'What is typical food in {name}?', food), (f'Do Indian citizens need a visa for {name}?', visa),
            ('How is my trip protected if travel conditions change?', 'With Hi Tours Care Flex you can cancel or rebook your land programme up to 30 days before departure without giving a reason. Hi Tours Care was developed to give travellers more flexibility and cover when travel conditions or personal circumstances change unexpectedly.')]
    faqjs = ',\n'.join(f"    {{ q: {js(q)}, a: [{js(a)}] }}" for q, a in faqs)
    hl = '; '.join(c[1][0].lower() for c in cities)
    open(f'{SRC}/{slug}ListingData.js', 'w').write(f"""// {name} destination landing – generated by scripts/gen_destinations.py (same template/data shape as bhutanListingData).
import {{ features, planner as egyptPlanner, reviews as egyptReviews, customerReviews as egyptCustomerReviews }} from './egyptListingData';
import {{ {slug}Products }} from './tours/{slug}ToursData';
import {{ IMG }} from './{slug}Packages';

const wide = (base, w) => `${{base}}?w=${{w}}&q=60&fm=webp`;
const N = {js(name)};

export const destination = {{ name: N, continent: '{cont}', primary: {js(cnames)} }};
export const holidaysPath = '{base}/{slug}/holidays';
export const holidaysCrumbs = [{{ label: 'Home', to: '/' }}, {{ label: N, to: '{base}/{slug}' }}, {{ label: `${{N}} tours & holidays` }}];

export const hero = {{
  h1: `${{N}} Honeymoons and holidays`, holidaysH1: `${{N}} tours & holidays`, styleH1: (style) => `${{N}} ${{style.toLowerCase()}} holidays`,
  tabAbout: `About ${{N}}`, tabTours: `${{N}} holidays`, cta: 'Plan for free', stickyCta: `Plan your ${{N}} trip`, ctaHref: '/l/{slug}/enquiry/passengers/',
  sub: 'Your travel plan – no obligation & tailor-made', image: wide(IMG.RAW.hero, 2400), imageAlt: {js(cnames[0] + ', ' + name)}
}};

export const crumbs = [{{ label: 'Destinations', href: '/destinations/' }}, {{ label: '{cont}', to: '{"/asien" if cont == "Asia" else "#"}' }}, {{ label: N }}];

export const intro = {{
  h2: `About ${{N}}`,
  text: {js(INTRO[cont].format(N=name))},
  more: {js(' Highlights include ' + hl + '. ' + best)},
  learnMore: 'Learn more', learnLess: 'Show less',
  quote: {js(f'Give yourself time in {cnames[0]} before moving on – it sets the tone for the whole trip. And ask us about the smaller places between the big names; that is where {name} really comes alive.')},
  quoteMore: {js(food)},
  readMore: 'Read more', readLess: 'Read less',
  expert: {{ image: '/experts/riya.webp', name: {js(expert)}, role: `Travel expert for ${{N}}` }}
}};

export const tours = {{
  h2: `Top-selling ${{N}} holiday ideas`, allH2: `${{N}} tours & holidays`, styleH2: (style) => `${{N}} ${{style.toLowerCase()}} holidays`,
  browse: (n) => `Browse ${{n}} package ${{n === 1 ? 'idea' : 'ideas'}}`, filterLabel: 'Travel style:', sortLabel: 'Sorted by:', filterBy: 'Filter by', sortBy: 'Sort by',
  empty: `No holidays match this travel style yet – clear the filter to see all ${{N}} holidays.`, viewAll: `View all ${{N}} holidays`,
  short: ['Embark on an ', ['unforgettable journey'], {js(f' through {", ".join(cnames[:-1])} and {cnames[-1]} – every {name} holiday is tailor-made by our experts.')}],
  intro: [{js(f' Discover {name} your way. Whether you are looking for a ')}, ['romantic honeymoon, a family adventure or a cultural grand tour'], ' – our travel experts will be happy to advise you personally.'],
  readMore: 'Read more', readLess: 'Read less'
}};

export const products = {slug}Products;
export const planner = {{ ...egyptPlanner, h3: `Plan your ${{N}} trip`, bg: wide(IMG.RAW.hero, 2000) }};

export const reviews = {{
  h2: `What customers say about booking ${{N}} with Hi Tours`, count: `based on 120 ${{N}} reviews`,
  items: [
    {{ name: 'Rohan and Meera', title: 'Perfectly organised from start to finish', date: '12 May 2026', stars: 5, image: wide(IMG.RAW.hero, 600), text: {js(f'Every hotel, transfer and guide in {name} was spot on. {cnames[0]} was the highlight – Hi Tours thought of everything so we could just enjoy it.')} }},
    {{ name: 'The Kapoor family', title: 'A trip the whole family loved', date: '28 April 2026', stars: 5, image: wide(IMG.RAW.hero, 600), text: {js(f'From {cnames[1]} to {cnames[2]}, the pace was perfect for the kids and the guides were wonderful. We would book {name} with Hi Tours again in a heartbeat.')} }},
    {{ name: 'Nikhil', title: 'Expert advice that made the difference', date: '9 April 2026', stars: 5, image: wide(IMG.RAW.hero, 600), text: {js(f'Our expert knew {name} inside out and tailored the route to what we love. Seamless, personal and great value.')} }}
  ]
}};
export const customerReviews = {{ ...egyptCustomerReviews, h2: `Our customers about their ${{N}} trip`, summary: {js(f'Amazing {name} trip – perfectly organised, wonderful guides and unforgettable places.')}, photos: [wide(IMG.RAW.hero, 600), wide(IMG.RAW.hero, 300), wide(IMG.RAW.hero, 300), wide(IMG.RAW.hero, 450)], planExpert: '/experts/riya.webp', items: reviews.items.map((r) => ({{ initial: r.name[0], name: r.name, date: r.date, title: r.title, source: 'Trustpilot', text: r.text }})) }};

const placeList = [
{places}
];
export const places = {{ h2: `Discover these places in ${{N}}`, items: placeList.map(([title, image], i) => ({{ title, alt: title, tag: null, href: `#place-${{i}}`, image }})) }};
export const activities = {{ h2: 'The best activities on your trip', items: [
{acts}
] }};

export const plan = {{
  h2: `How to plan your ${{N}} trip`, intro: {js(INTRO[cont].format(N=name))}, more: 'Show more details', less: 'Show fewer details',
  sections: [
    {{ h4: 'Best time to travel & climate', text: {js(best)}, links: [[`Best time to visit ${{N}}`, '#']] }},
    {{ h4: 'Trip duration & route suggestions', text: {js(f'7 days cover {cnames[0]} and {cnames[1]}; 10 days add {cnames[2]}; two weeks let you reach {cnames[3]} at a relaxed pace.')}, links: [['Ideal trip duration', '#']] }},
    {{ h4: 'Sights & culture', text: {js('Highlights include ' + hl + '.')}, links: [[`Top sights in ${{N}}`, '#']] }},
    {{ h4: 'Food & drink', text: {js(food)}, links: [[`Food in ${{N}}`, '#']] }},
    {{ h4: 'Safety & entry', text: {js(visa)}, links: [['Travel advice', '#']] }}
  ]
}};

export const themes = {{ h2: 'Travel guide & inspiration', more: 'Show more', less: 'Show less', items: [
  {{ href: '#', title: `The best time to visit ${{N}}`, tag: 'Travel guide', icon: 'sun', image: IMG.hero }},
  {{ href: '#', title: `The ideal trip duration for ${{N}}`, tag: 'Travel guide', icon: 'calendar', image: IMG.hero }},
  {{ href: '#', title: `Food & drink in ${{N}}`, tag: 'Inspiration', icon: 'food', image: IMG.hero }},
  {{ href: '#', title: `The best sights in ${{N}} in 2026`, tag: 'Inspiration', icon: 'landscape', image: IMG.hero }},
  {{ href: '#', title: `${{N}} for honeymooners`, tag: 'Inspiration', icon: 'beach', image: IMG.hero }},
  {{ href: '#', title: `${{N}} holiday: costs at a glance`, tag: 'Travel guide', icon: 'wallet', image: IMG.hero }}
].map((t) => ({{ ...t, alt: t.title }})) }};

export const faq = {{ h2: 'Practical information for your trip', items: [
{faqjs}
] }};

export const related = {{ h2: `More destinations in ${{destination.continent}}`, items: RELATED_{cont.upper()}.filter(([t]) => t !== N).map(([title, image, href]) => ({{ title, alt: title, tag: null, href, image }})) }};

export const {slug} = {{
  pageTitle: `${{N}} Honeymoons and holidays | Hi Tours`,
  hero, crumbs, intro, tours, products, features, places, activities, themes, related, holidaysPath, holidaysCrumbs, plan, faq, planner,
  reviews: {{ ...egyptReviews, ...reviews }}, customerReviews, plannerSource: '{slug}-planner'
}};
""")
    open(f'{SRC}/pages/{camel}Listing.jsx', 'w').write(f"""import React from 'react';
import DestinationListing from './DestinationListing';
import EgyptHolidays from './EgyptHolidays';
import {{ {slug} }} from '../{slug}ListingData';

export default function {camel}Listing() {{
  return <DestinationListing d={{{slug}}} testId="{slug}-listing-page" />;
}}

export function {camel}Holidays() {{
  return <EgyptHolidays d={{{{ ...{slug}, plannerSource: '{slug}-holidays', testId: '{slug}-holidays-page' }}}} />;
}}
""")
    return camel

def main():
    related = {'ASIA': [], 'EUROPE': []}
    for c in SPEC:
        related[c[2].upper()].append((c[0], f'{CT}/{c[4]}?w=1080&q=60&fm=webp', f'{c[3]}/{c[1]}'))
    for cont, items in related.items():
        arr = ',\n'.join(f"  [{js(t)}, {js(i)}, {js(h)}]" for t, i, h in items)
        open(f'{SRC}/related{cont.title()}.js', 'w').write(f"export const RELATED_{cont} = [\n{arr}\n];\n")
    camels = [build(c) for c in SPEC]
    for c, camel in zip(SPEC, camels):
        p = f'{SRC}/{c[1]}ListingData.js'; s = open(p).read()
        s = s.replace("import { IMG } from", f"import {{ RELATED_{c[2].upper()} }} from './related{c[2].title()}';\nimport {{ IMG }} from", 1)
        open(p, 'w').write(s)
    print(json.dumps([(c[0], c[1], c[2], c[3], camel) for c, camel in zip(SPEC, camels)]))

if __name__ == '__main__':
    main()
