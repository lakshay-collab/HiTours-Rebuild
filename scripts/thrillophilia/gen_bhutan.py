#!/usr/bin/env python3
"""Generate spec JSON for the Bhutan batch from raw.json + a per-trip editorial table."""
import json, os, re, subprocess, sys

ROOT = '/app/import'
EXIT_CITIES = {'Siliguri', 'Bagdogra'}
GALLERY = {'Thimphu': 'Thimphu City', 'Gangtey': 'Nubding', 'Bagdogra': 'Siliguri', 'Kalimpong': 'Darjeeling'}
DISPLAY = {'Thimphu City': 'Thimphu', 'Nubding': 'Phobjikha', 'Phuntsholing': 'Phuentsholing'}
MEALPLAN = {'Modified American Plan': 'Breakfast and dinner', 'American Plan': 'All meals', 'Continental Plan': 'Breakfast'}
BLURB = {
    'Phuntsholing': 'Border town hotel on the Indian frontier',
    'Thimphu City': 'Comfortable hotel in the capital, walkable to the clock tower',
    'Thimphu': 'Comfortable hotel in the capital, walkable to the clock tower',
    'Punakha': 'Riverside hotel in the warm old winter capital',
    'Paro': 'Quiet hotel in the valley below Taktsang',
    'Nubding': 'Simple lodge on the edge of the Phobjikha valley',
    'Gangtey': 'Simple lodge on the edge of the Phobjikha valley',
    'Kathmandu': 'Central hotel within reach of Thamel',
    'Gangtok': 'Hillside hotel above MG Marg',
    'Darjeeling': 'Colonial era hotel near the Mall',
    'Kalimpong': 'Quiet hotel on the ridge above the Teesta',
}

# concept -> (display name, short title label, description, [two itinerary bullets])
ACTS = [
    ('tiger', ("Hike to the Tiger's Nest", "Tiger's Nest hike",
               "The climb to Taktsang, the monastery wedged into a cliff nine hundred metres above the Paro valley floor.",
               ["The climb up the pine slope to Taktsang", "The monastery wedged into the cliff face"])),
    ('taktsang', ("Hike to the Tiger's Nest", "Tiger's Nest hike",
                  "The climb to Taktsang, the monastery wedged into a cliff nine hundred metres above the Paro valley floor.",
                  ["The climb up the pine slope to Taktsang", "The monastery wedged into the cliff face"])),
    ('ta dzong', ('Ta Dzong and Rinpung Dzong', 'Ta Dzong and Rinpung Dzong',
                  'The round watchtower that now holds the National Museum, and the whitewashed Rinpung fortress above the river.',
                  ['The round watchtower holding the National Museum', 'Rinpung Dzong on the slope above the river'])),
    ('rinpung', ('Ta Dzong and Rinpung Dzong', 'Ta Dzong and Rinpung Dzong',
                 'The round watchtower that now holds the National Museum, and the whitewashed Rinpung fortress above the river.',
                 ['The round watchtower holding the National Museum', 'Rinpung Dzong on the slope above the river'])),
    ('tshechu', ('Thimphu Tshechu festival', 'Tshechu festival',
                 'The capital’s biggest festival, with masked cham dancers in brocade turning in the dzong courtyard over three days.',
                 ['Masked cham dancers in the dzong courtyard', 'Brocade robes, long horns and the crowd in kira'])),
    ('crane festival', ('Black necked crane festival', 'crane festival',
                        'The November festival at Gangtey Goemba that marks the return of the black necked cranes to the Phobjikha valley.',
                        ['The festival ground below Gangtey Goemba', 'Schoolchildren dancing as the cranes come in'])),
    ('phobjika', ('Phobjikha valley excursion', 'Phobjikha valley',
                  'The wide glacial bowl where black necked cranes winter, with the crane centre, the nature trail and Gangtey Goemba.',
                  ['The glacial bowl of the Phobjikha valley', 'The crane centre and the nature trail'])),
    ('gangtey sightseeing', ('Gangtey and the Phobjikha valley', 'Gangtey',
                             'Gangtey Goemba on its low ridge above the Phobjikha valley, the winter ground of the black necked cranes.',
                             ['Gangtey Goemba on its low ridge', 'The crane valley spread out below'])),
    ('wangdue', ('Wangdue Phodrang Dzong', 'Wangdue Phodrang',
                 'The fortress on a spur above the confluence of the Puna Tsang and Dang Chhu, rebuilt after the fire of 2012.',
                 ['Wangdue Phodrang Dzong on its rocky spur', 'The rivers meeting below the fortress walls'])),
    ('punakha suspension', ('Punakha suspension bridge', 'the suspension bridge',
                            'One of the longest suspension bridges in Bhutan, strung with prayer flags high over the Po Chhu.',
                            ['The long suspension bridge over the Po Chhu', 'Prayer flags strung the length of the span'])),
    ('punakha dzong and chimi', ('Punakha Dzong and Chimi Lhakhang', 'Punakha Dzong',
                                 'The fortress where the kings are crowned, set between two rivers, and the fertility temple of Chimi Lhakhang.',
                                 ['Punakha Dzong between the Pho and Mo rivers', 'Chimi Lhakhang across the paddy fields'])),
    ('punakha sightseeing', ('Punakha sightseeing tour', 'Punakha Dzong',
                             'The fortress where Bhutan’s kings are crowned, built on the spit of land where two rivers meet below the town.',
                             ['Punakha Dzong between the Pho and Mo rivers', 'The long suspension bridge over the water'])),
    ('haa valley', ('Haa valley day trip', 'Haa valley',
                    'Over the Chele La pass into Haa, a quiet border valley only opened to visitors in 2002.',
                    ['Over the Chele La pass at 3,988 metres', 'Down into the quiet Haa valley'])),
    ('chele la', ('Chele La pass', 'Chele La pass',
                  'The highest motorable pass in Bhutan at 3,988 metres, with Jomolhari standing clear on a good morning.',
                  ['Up to the Chele La pass at 3,988 metres', 'Jomolhari on the skyline on a clear morning'])),
    ('kharbandi', ('Kharbandi Gompa', 'Kharbandi Gompa',
                   'A small hillside monastery above Phuentsholing with the plains of Bengal laid out flat below it.',
                   ['Kharbandi Gompa on the hillside', 'The Bengal plains laid out flat below'])),
    ('kyichu', ('Paro sightseeing with Kyichu Lhakhang', 'Paro and Kyichu Lhakhang',
                'A guided day around Paro finishing at Kyichu Lhakhang, one of the oldest temples standing in Bhutan.',
                ['A guided round of the Paro valley', 'Kyichu Lhakhang, among the oldest temples in Bhutan'])),
    ('kichu', ('Paro sightseeing with Kyichu Lhakhang', 'Paro and Kyichu Lhakhang',
               'A guided day around Paro finishing at Kyichu Lhakhang, one of the oldest temples standing in Bhutan.',
               ['A guided round of the Paro valley', 'Kyichu Lhakhang, among the oldest temples in Bhutan'])),
    ('simtokha', ('Thimphu sightseeing with Simtokha Dzong', 'Thimphu and Simtokha',
                  'The capital on foot and by road, finishing at Simtokha Dzong, the oldest fortress still standing in the country.',
                  ['The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and Simtokha Dzong'])),
    ('thimphu local market', ('Thimphu weekend market', 'the weekend market',
                              'The riverside market halls where farmers bring chillies, ferns, yak cheese and strings of dried beef.',
                              ['The riverside market halls by the Wang Chhu', 'Chillies, ferns and strings of dried beef'])),
    ('thimphu sightseeing', ('Thimphu sightseeing tour', 'Thimphu sightseeing',
                             'A guided day round the capital with the Memorial Chorten, the Buddha Dordenma, Tashichho Dzong and the takin preserve.',
                             ['The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and the takin preserve'])),
    ('thimphu city sightseeing', ('Thimphu sightseeing tour', 'Thimphu sightseeing',
                                  'A guided day round the capital with the Memorial Chorten, the Buddha Dordenma, Tashichho Dzong and the takin preserve.',
                                  ['The Memorial Chorten and the Buddha Dordenma', 'Tashichho Dzong and the takin preserve'])),
    ('phuentsholing sightseeing', ('Phuentsholing sightseeing tour', 'Phuentsholing',
                                   'The border town with Zangto Pelri Lhakhang, the crocodile breeding centre and the Bhutan Gate itself.',
                                   ['Zangto Pelri Lhakhang in the town centre', 'The Bhutan Gate and the Torsa riverside'])),
    ('kathmandu sightseeing', ('Kathmandu sightseeing tour', 'Kathmandu sightseeing',
                               'A guided day with Durbar Square, the stupa at Boudhanath, Swayambhunath and Pashupatinath on the Bagmati.',
                               ['Durbar Square and the old palace courtyards', 'Boudhanath stupa and Pashupatinath'])),
    ('gangtok sightseeing', ('Gangtok sightseeing tour', 'Gangtok sightseeing',
                             'The Sikkimese capital with the Rumtek monastery, the Namgyal institute of Tibetology and the Ganesh Tok viewpoint.',
                             ['Rumtek monastery above the valley', 'The Namgyal institute and Ganesh Tok'])),
    ('darjeeling sightseeing', ('Darjeeling sightseeing tour', 'Darjeeling sightseeing',
                                'Tiger Hill at sunrise for Kanchenjunga, the Himalayan Mountaineering Institute and the toy train at Ghum.',
                                ['Tiger Hill at sunrise for Kanchenjunga', 'The toy train and the tea gardens at Ghum'])),
    ('new year celebration', ('New Year celebration', 'the New Year party',
                              'A New Year dinner and celebration arranged with the group, Bhutanese style, at the hotel.',
                              ['A New Year dinner laid on for the group', 'Bhutanese dances and archery in the courtyard'])),
    ('paro sightseeing', ('Paro sightseeing tour', 'Paro sightseeing',
                          'A guided round of the valley with the National Museum, Rinpung Dzong and the ruins of Drukgyel Dzong.',
                          ['The National Museum in the old watchtower', 'Rinpung Dzong and the Drukgyel ruins'])),
    ('paro half day', ('Paro half day sightseeing tour', 'Paro sightseeing',
                       'A half day round the valley taking in Rinpung Dzong, the National Museum and the main street of Paro town.',
                       ['Rinpung Dzong and the National Museum', 'The shopfronts of Paro town'])),
    ('local sightseeing', ('Local sightseeing tour', 'local sightseeing',
                           'A guided half day of the town with your driver and guide, covering the main dzong, temple and market.',
                           ['A guided half day round the town', 'The dzong, the temple and the market'])),
]

OPEN = {
    'arr_phuntsholing_siliguri': ['Arrival at Bagdogra or Siliguri and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate'],
    'arr_phuntsholing_bagdogra': ['Arrival at Bagdogra and transfer to Phuentsholing', 'Border formalities at the Bhutan Gate'],
    'arr_thimphu': ['Arrival at Paro International and transfer to Thimphu', 'The road east along the Pa Chhu and the Wang Chhu'],
    'arr_paro': ['Arrival at Paro International and transfer to your hotel', 'Check in below the terraced fields of the valley'],
    'arr_kathmandu': ['Arrival at Kathmandu Tribhuvan and transfer to your hotel', 'Check in and the rest of the day free'],
    'to_Thimphu City': ['Breakfast, then north into the hills towards Thimphu', 'The Chukha dam and the Wang Chhu gorge on the way'],
    'to_Thimphu': ['Breakfast, then on to Thimphu', 'The road climbing beside the Wang Chhu'],
    'to_Punakha': ['Breakfast, then east over the Dochula pass', 'The hundred and eight chortens at the top'],
    'to_Paro': ['Breakfast, then west down the valley to Paro', 'Terraced fields and farmhouses the whole way'],
    'to_Phuntsholing': ['Breakfast, then the long run back south', 'Down through the Chukha gorge to the plains'],
    'to_Nubding': ['Breakfast, then east over the Dochula pass', 'On through Wangdue towards the Phobjikha valley'],
    'to_Gangtey': ['Breakfast, then up to the Gangtey ridge', 'The Phobjikha valley opening out below the road'],
    'to_Kathmandu': ['Breakfast, then transfer on to Kathmandu', 'Check in and the rest of the day free'],
    'to_Gangtok': ['Breakfast, then west into Sikkim', 'Permit formalities at Rangpo on the Teesta'],
    'to_Darjeeling': ['Breakfast, then south along the ridge to Darjeeling', 'Tea gardens dropping away on both sides'],
    'to_Kalimpong': ['Breakfast, then up to the Kalimpong ridge', 'The Teesta running far below the road'],
    'to_Siliguri': ['Breakfast, then down to the plains', 'Border formalities and transfer to Siliguri'],
    'to_Bagdogra': ['Breakfast, then down to the plains', 'Border formalities and transfer to Bagdogra'],
    'to_Paro_fly': ['Breakfast and check out of your Kathmandu hotel', 'Optional: flight Kathmandu to Paro, booked with us', 'Arrival transfer from Paro International to your hotel'],
}
STAY = {
    'Thimphu City': 'Breakfast, then out into the capital',
    'Thimphu': 'Breakfast, then out into the capital',
    'Punakha': 'Breakfast in the warm Punakha valley',
    'Paro': 'Breakfast, then out into the Paro valley',
    'Nubding': 'Breakfast on the edge of the crane valley',
    'Gangtey': 'Breakfast on the edge of the crane valley',
    'Kathmandu': 'Breakfast, then out into Kathmandu',
    'Gangtok': 'Breakfast, then out into Gangtok',
    'Darjeeling': 'Breakfast with Kanchenjunga on the skyline',
    'Phuntsholing': 'Breakfast, then out into Phuentsholing',
}
LEISURE = {
    'Thimphu City': ['Optional: the Zorig Chusum school of arts', 'Optional: the weekend market by the river', 'Optional: an archery match at Changlimithang'],
    'Thimphu': ['Optional: the Zorig Chusum school of arts', 'Optional: the weekend market by the river', 'Optional: an archery match at Changlimithang'],
    'Paro': ['Optional: Zuri Dzong and the Five Chortens', 'Optional: Tamchoe monastery and its iron bridge', 'Optional: coffee on the main street of Paro'],
    'Punakha': ['Optional: a short raft on the Mo Chhu', 'Optional: the Khamsum Yulley Namgyal chorten', 'Optional: tea at a farmhouse in the paddy'],
    'Phuntsholing': ['Optional: Zangto Pelri Lhakhang in the town', 'Optional: Karbandi monastery above the road', 'Optional: the Phuentsholing market in the evening'],
    'Kathmandu': ['Optional: the stupa at Boudhanath', 'Optional: Patan Durbar Square', 'Optional: dinner in the Thamel lanes'],
    'Gangtok': ['Optional: the ropeway over the ridge', 'Optional: the Enchey monastery', 'Optional: momos on MG Marg'],
    'Darjeeling': ['Optional: the Happy Valley tea estate', 'Optional: the Padmaja Naidu zoological park', 'Optional: the Mall and Chowrasta square'],
    'Kalimpong': ['Optional: the Durpin monastery on the ridge', 'Optional: the orchid nurseries', 'Optional: Deolo hill at sunset'],
    'Nubding': ['Optional: the Gangtey nature trail', 'Optional: the black necked crane centre', 'Optional: a farmhouse lunch in the valley'],
    'Gangtey': ['Optional: the Gangtey nature trail', 'Optional: the black necked crane centre', 'Optional: a farmhouse lunch in the valley'],
}


CITY_PROG = {
    'Phuntsholing': 'in the border town where Bhutan begins, with the Bhutan Gate and Kharbandi above the plains',
    'Thimphu City': 'in the capital, with the Memorial Chorten, the Buddha Dordenma and Tashichho Dzong',
    'Thimphu': 'in the capital, with the Memorial Chorten, the Buddha Dordenma and Tashichho Dzong',
    'Punakha': 'in the warm old winter capital, with the Dzong between two rivers and the suspension bridge',
    'Paro': 'in the valley below Taktsang, with Rinpung Dzong, the National Museum and the Tiger\u2019s Nest hike',
    'Nubding': 'on the edge of the Phobjikha valley, the winter ground of the black necked cranes',
    'Gangtey': 'on the Gangtey ridge above the crane valley at Phobjikha',
    'Kathmandu': 'in the Nepali capital, with Durbar Square, Boudhanath and Pashupatinath',
    'Gangtok': 'in the Sikkimese capital, with Rumtek monastery and the ridge viewpoints',
    'Darjeeling': 'in the old hill station, with Tiger Hill at sunrise and the tea gardens below',
    'Kalimpong': 'on the Kalimpong ridge above the Teesta, with the Durpin monastery and the orchid nurseries',
}


def concept(title):
    t = title.lower()
    for key, val in ACTS:
        if key in t:
            return val
    return None


def disp(c):
    return DISPLAY.get(c, c)


def build_spec(slug, ed):
    raw = json.load(open(f'{ROOT}/{slug}/raw.json'))
    days = raw['days']
    n = len(days)
    nights = int(re.search(r'/(\d+)N', raw['duration']).group(1))

    # ---- stops: consecutive days in the same city, trailing exit city merged back
    groups = []
    for d in days:
        if groups and groups[-1][0] == d['city']:
            groups[-1][1].append(d['day'])
        else:
            groups.append([d['city'], [d['day']]])
    if len(groups) > 1 and groups[-1][0] in EXIT_CITIES:
        groups[-2][1] += groups[-1][1]
        groups.pop()

    used = set()
    stops = []
    for i, (city, dl) in enumerate(groups):
        nts = len(dl) - (1 if i == len(groups) - 1 else 0)
        pool = [h for h in raw['hotels'] if h['city'] == city]
        pick = next((h for h in pool if h['name'] not in used), None) or (pool[0] if pool else None)
        if pick:
            used.add(pick['name'])
            star = pick['stars'] or 3
            plan = MEALPLAN.get(pick.get('meal_plan') or '', 'Breakfast')
            label, hotel = pick['name'], pick['name']
        else:
            star, plan = 3, 'Breakfast and dinner'
            label = hotel = f'{disp(city)} deluxe hotel'
        stops.append({
            'letter': 'ABCDEFGHIJ'[i], 'name': disp(city), 'city': GALLERY.get(city, city),
            'days': dl, 'dayLabel': f'Day {dl[0]} to {dl[-1]}' if len(dl) > 1 else f'Day {dl[0]}',
            'hotel': hotel, 'hotel_label': label,
            'accom': f'{nts} night{"s" if nts != 1 else ""} \u00b7 {plan} \u00b7 Standard room \u00b7 {star}\u2605 \u00b7 {BLURB.get(city, "Comfortable tourist class hotel")}',
            'activities': [],
            'program': {'name': disp(city), 'description': ('Time ' if nts == 1 else 'Days ') + CITY_PROG.get(city, 'with the sights of the town and hours of your own') + '.'},
        })
    assert sum(int(s['accom'].split()[0]) for s in stops) == nights, (slug, nights, [s['accom'][:3] for s in stops])
    by_day = {d: s for s in stops for d in s['days']}

    # ---- days
    titles, bullets, meals, hotel_by_day = {}, {}, {}, {}
    exps = transfers = meal_n = 0
    prev = None
    for i, d in enumerate(days):
        day, city = d['day'], d['city']
        acts = [it['title'].strip() for it in d['items'] if it['type'] == 'Activity' and not it.get('label')]
        transfers += sum(1 for it in d['items'] if it['type'] == 'Transfer')
        exps += len(acts)
        meal_n += len(d['meals'])
        cons, seen = [], set()
        for a in acts:
            c = concept(a)
            if c and c[0] not in seen:
                seen.add(c[0])
                cons.append((a, c))
        for a, c in cons:
            by_day[day]['activities'].append({'name': c[0], 'day': day, 'optional': False, 'match': a, 'description': c[2]})

        if i == 0:
            kind = ed['first']
            titles[str(day)] = f'Arrival in {disp(city)}'
        elif i == n - 1:
            kind = 'dep'
            titles[str(day)] = f'Departure from {disp(city)}'
        elif city != prev:
            kind = ('to_Paro_fly' if (city == 'Paro' and prev == 'Kathmandu') else 'to_' + city)
            titles[str(day)] = (f'To {disp(city)}: {cons[0][1][1]}' if cons else f'Onward to {disp(city)}')
        else:
            kind = 'stay'
            titles[str(day)] = (' and '.join(c[1][1] for c in cons[:2]).capitalize() if cons
                                else f'A free day in {disp(city)}')
        if kind == 'dep':
            lines = ['Breakfast at the hotel and check out',
                     f'Private transfer to {"Paro International" if city == "Paro" else disp(city)} for your flight home'
                     if city in ('Paro', 'Kathmandu') else
                     ('Border formalities and transfer to Siliguri' if city in EXIT_CITIES or city == 'Phuntsholing'
                      else f'Transfer to {disp(city)} for your onward journey')]
        elif kind == 'stay':
            lines = [STAY.get(city, 'Breakfast at the hotel')]
            for _, c in cons[:2]:
                lines += c[3]
            if not cons:
                lines += LEISURE.get(city, ['The day free to explore at your own pace'])
        else:
            lines = list(OPEN[kind])
            for _, c in cons[:2]:
                lines += c[3]
            if not cons:
                lines += [LEISURE.get(city, ['The evening free'])[0], 'Arrival transfer and check in for the night'] \
                    if kind.startswith('to_') else ['Check in and the rest of the day free']
        bullets[str(day)] = lines[:6]
        meals[str(day)] = 'Arrival' if i == 0 and not d['meals'] else (
            ', '.join(dict.fromkeys(m[0] if m[0] in 'BLD' else 'D' for m in d['meals'])) if d['meals'] else 'Travel day')
        hotel_by_day[str(day)] = 'Departure' if i == n - 1 else by_day[day]['hotel_label']
        prev = city

    act_names = list(dict.fromkeys(a['name'] for s in stops for a in s['activities']))
    cities_txt = ', '.join(dict.fromkeys(s['name'] for s in stops))
    spec = {
        'cta_country': 'bhutan', 'base': '/asien',
        'crumbs': [['Destinations', '/reiseziele/'], ['Asia', '/asien'], ['Bhutan', '/asien/bhutan']],
        'source_slug': slug, 'camel': ed['camel'], 'slug': ed['slug'], 'title': ed['title'],
        'alt': ed['alt'], 'transport': ed.get('transport', 'Private vehicle, driver and licensed guide throughout'),
        'tag': ed['tag'], 'tags': ed['tags'], 'price': round(raw['price_per_adult'] * 0.95),
        'route_cities': [s['name'] for s in stops],
        'counts': {'days': n, 'nights': nights, 'cities': len(stops), 'hotels': len(set(s['hotel_label'] for s in stops)),
                   'experiences': exps, 'transfers': transfers, 'meals': meal_n},
        'stops': stops, 'day_titles': titles, 'bullets': bullets, 'meals': meals, 'hotel_by_day': hotel_by_day,
        'expert': {'name': 'Tenzin', 'image': '/experts/riya.webp', 'role': 'Bhutan expert at Hi Tours',
                   'quote': ed['quote'], 'tip': ed['tip']},
        'summary': f'{n} days through {cities_txt}, with {nights} nights, {ed["meal_txt"]} and a licensed Bhutanese guide: '
                   + ', '.join('the ' + a for a in act_names[:4]).lower() + '.',
        'included': f'Included: {nights} nights across {cities_txt} with {ed["meal_txt"]}; all land transfers by private vehicle; '
                    + '; '.join('the ' + a for a in act_names) + '; a licensed Bhutanese guide; permits and the sustainable development fee as quoted.',
        'not_included': ed.get('excl', 'Not included: international and domestic flights; lunches and any meals not listed; '
                                       'monument entrance fees where not stated; travel insurance; personal expenses.'),
    }
    out = f'{ROOT}/spec_bt_{ed["camel"]}.json'
    json.dump(spec, open(out, 'w'), indent=1, ensure_ascii=False)
    return out


if __name__ == '__main__':
    from bhutan_table import TRIPS
    only = sys.argv[1:]
    for slug, ed in TRIPS.items():
        if only and slug not in only:
            continue
        p = build_spec(slug, ed)
        r = subprocess.run(['python3', '/app/scripts/thrillophilia/build_trip.py', p], capture_output=True, text=True)
        print(ed['camel'], '|', (r.stdout or r.stderr).strip().splitlines()[-1][:110])
