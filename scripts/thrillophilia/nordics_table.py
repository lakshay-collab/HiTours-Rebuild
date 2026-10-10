#!/usr/bin/env python3
"""Editorial table for the Greece / Norway / Ireland / Finland / Sweden Thrillophilia batch.

Structure (stops, nights, counts, crumbs, price) is derived from raw.json by gen_nordics.py;
everything written here is fresh copy.
"""

EXPERTS = {
    'greece': {
        'name': 'Eleni', 'image': '/experts/riya.webp', 'role': 'Greece expert at Hi Tours',
        'quote': 'Athens first, islands second. Two days of ruins and then the ferry out feels like the holiday actually begins twice.',
        'tip': 'Take the morning ferry, not the afternoon one. The meltemi wind picks up after lunch and the crossing is a great deal less pleasant.',
    },
    'greece_islands': {
        'name': 'Eleni', 'image': '/experts/riya.webp', 'role': 'Greece expert at Hi Tours',
        'quote': 'Mykonos for the nights and Santorini for the light. Give each island three nights and you will never feel rushed.',
        'tip': 'Book your Santorini hotel on the caldera rim in Imerovigli rather than Oia. Same sunset, half the crowd, and you can walk to Oia along the cliff path.',
    },
    'greece_mainland': {
        'name': 'Eleni', 'image': '/experts/riya.webp', 'role': 'Greece expert at Hi Tours',
        'quote': 'The mainland is the half of Greece most people skip. Olympia and Delphi are quieter than the Acropolis and twice as atmospheric.',
        'tip': 'Carry a hat and water for Olympia and Delphi. Both sites are open ground with almost no shade, and the middle of the day is punishing in summer.',
    },
}

TRIPS = {}

GREECE_INCL = ('private airport and port transfers; ferry tickets between the islands; '
               'all sightseeing as listed with entrance fees where stated; daily breakfast')
GREECE_NOT = ('Not included: international flights; Schengen visa fees; lunches and dinners unless stated; '
              'travel insurance; optional excursions; personal expenses. Hotels are named on confirmation: '
              'the operator quotes a standard class rather than fixed properties.')

TRIPS['gr_enchanting'] = {
    'source': 'enchanting-greece', 'country': 'greece',
    'camel': 'enchantingGreeceAthensMykonos',
    'slug': 'enchanting-greece-athens-and-mykonos',
    'title': 'Enchanting Greece: Athens and Mykonos',
    'alt': 'The Parthenon on the Acropolis above Athens in the late afternoon',
    'transport': 'Private airport and port transfers, with ferries to and from Mykonos',
    'tag': 'Culture', 'tags': ['Culture', 'Honeymoon', 'Beach'],
    'route': ['Athens', 'Mykonos', 'Athens'],
    'transfers': 8, 'meals': 6, 'expert': 'greece',
    'stops': [
        {'city': 'Athens', 'name': 'Athens', 'days': [1, 2], 'nights': 2,
         'hotel': 'Athens city hotel', 'blurb': 'Central hotel within reach of the Acropolis and Plaka',
         'program': 'Two nights to start, with a half day round the Acropolis, Syntagma and the old quarter below the rock.',
         'acts': [
             ('Acropolis and Athens city tour', 2, 'Acropolis', 'A guided half day taking in the Acropolis, the Propylaea and the Parthenon, then Syntagma Square and the changing of the guard.'),
         ]},
        {'city': 'Mykonos', 'name': 'Mykonos', 'days': [3, 4, 5], 'nights': 3,
         'hotel': 'Mykonos island hotel', 'blurb': 'Island hotel within reach of Mykonos town and the beaches',
         'program': 'Three nights on Mykonos, with a walk through the old town, an island bus tour and a free day for the beaches.',
         'acts': [
             ('Mykonos town walk', 4, '', 'A morning on foot through the whitewashed lanes, the windmills on the ridge and the waterfront at Little Venice.'),
             ('Island bus tour of Mykonos', 4, '', 'A circuit of the island by coach, out to the southern bays, the inland villages and the long sandy beaches.'),
             ('Optional: boat trip to Delos', 5, '', 'The short crossing to the sacred island of Delos, birthplace of Apollo and one of the largest archaeological sites in the Aegean.'),
         ]},
        {'city': 'Athens', 'name': 'Athens', 'days': [6, 7], 'nights': 1,
         'hotel': 'Athens city hotel', 'blurb': 'Central hotel within reach of the Acropolis and Plaka',
         'program': 'Back to the mainland for a last evening in Plaka under the floodlit rock.',
         'acts': []},
    ],
    'days': {
        1: ('Arrival in Athens', [
            'Arrival at Athens International and transfer to your hotel',
            'Check in and the rest of the day at leisure',
            'Optional: an evening walk up Lykavittos hill',
            'Optional: dinner in the lanes of Monastiraki'], 'Arrival'),
        2: ('The Acropolis and the city', [
            'Breakfast, then up to the rock with your guide',
            'The Propylaea, the Parthenon and the Erechtheion',
            'Syntagma Square and the changing of the guard',
            'The afternoon free for the Acropolis Museum'], 'B'),
        3: ('Ferry to Mykonos', [
            'Breakfast and check out of your Athens hotel',
            'Port transfer at Piraeus for the Aegean crossing',
            'Met at Mykonos harbour and taken to your hotel',
            'The evening free for sunset at Little Venice'], 'B'),
        4: ('Mykonos town and the island', [
            'Breakfast, then into the old town on foot',
            'Whitewashed lanes, bougainvillea and the windmills',
            'An island circuit by coach in the afternoon',
            'Southern bays, inland villages and long beaches'], 'B'),
        5: ('A free day on Mykonos', [
            'Breakfast, then the whole day yours',
            'Optional: the boat across to ancient Delos',
            'Optional: a swim at Platis Gialos or Paradise beach',
            'Optional: a late lunch at a harbour taverna'], 'B'),
        6: ('Back to Athens', [
            'Breakfast and check out for the return crossing',
            'The ferry back to Piraeus and a transfer to your hotel',
            'The afternoon free in the Plaka quarter',
            'Pastel houses, bougainvillea and the rock above you'], 'B'),
        7: ('Departure from Athens', [
            'Breakfast at the hotel and check out',
            'Private transfer to Athens International for your flight home'], 'B'),
    },
    'summary': 'Seven days between the mainland and the Cyclades: two nights in Athens with a guided morning on the Acropolis, three on Mykonos for the old town, an island circuit and the beaches, then a last night back in Plaka.',
    'included': 'Included: 3 nights in Athens and 3 nights on Mykonos with breakfast; ' + GREECE_INCL + '; a guided Acropolis and Athens city tour; a Mykonos town walk and island bus tour.',
    'not_included': GREECE_NOT,
}

TRIPS['gr_athens_mainland'] = {
    'source': '5-days-spectacular-athens-tour', 'country': 'greece',
    'camel': 'spectacularAthensOlympiaDelphi',
    'slug': 'spectacular-greece-athens-olympia-and-delphi',
    'title': 'Spectacular Greece: Athens, Olympia and Delphi',
    'alt': 'The Temple of Apollo at Delphi on the slopes of Mount Parnassus',
    'transport': 'Private airport transfers and a shared coach tour of the mainland',
    'tag': 'Culture', 'tags': ['Culture', 'Short trips'],
    'route': ['Athens', 'Olympia', 'Delphi', 'Athens'],
    'transfers': 6, 'meals': 7, 'expert': 'greece_mainland',
    'stops': [
        {'city': 'Athens', 'name': 'Athens', 'days': [1, 2], 'nights': 2,
         'hotel': 'Athens city hotel', 'blurb': 'Central hotel within reach of the Acropolis and Plaka',
         'program': 'Two nights in the capital, with a guided morning on the Acropolis and the museum below it.',
         'acts': [
             ('Athens city tour with the Acropolis Museum', 2, 'Acropolis', 'A guided half day over the rock itself, then down into the glass and concrete museum that holds the sculptures taken off it.'),
         ]},
        {'city': 'Olympia', 'name': 'Olympia', 'subtitle': 'Corinth \u2192 Epidaurus and Mycenae',
         'days': [3], 'nights': 1, 'meal': 'Breakfast and dinner',
         'hotel': 'Olympia country hotel', 'blurb': 'Quiet hotel among the olive groves near the ancient site',
         'program': 'West across the Peloponnese with stops at the Corinth Canal, the theatre at Epidaurus and the citadel of Mycenae.',
         'acts': [
             ('Corinth Canal, Epidaurus and Mycenae', 3, '', 'The narrow cut of the Corinth Canal, the theatre at Epidaurus where a coin dropped on stage is heard in the back row, and the Lion Gate at Mycenae.'),
         ]},
        {'city': 'Delphi', 'name': 'Delphi', 'days': [4], 'nights': 1, 'meal': 'Breakfast and dinner',
         'hotel': 'Delphi mountain hotel', 'blurb': 'Hillside hotel with the olive valley falling away below',
         'program': 'The sanctuary of Zeus and the original stadium at Olympia, then north over the gulf to Delphi.',
         'acts': [
             ('Ancient Olympia with a guide', 4, '', 'The sanctuary of Zeus, the workshop of Pheidias and the stadium where the games were run for a thousand years.'),
         ]},
        {'city': 'Athens', 'name': 'Athens', 'days': [5, 6], 'nights': 1,
         'hotel': 'Athens city hotel', 'blurb': 'Central hotel within reach of the Acropolis and Plaka',
         'program': 'The oracle at Delphi in the morning, then the mountain road back to Athens through Arachova.',
         'acts': [
             ('The sanctuary of Delphi', 5, '', 'The Sacred Way up past the treasuries to the Temple of Apollo, the stadium above it and the bronze charioteer in the museum.'),
         ]},
    ],
    'days': {
        1: ('Arrival in Athens', [
            'Arrival at Athens International and transfer to your hotel',
            'Check in and the rest of the day at leisure',
            'Optional: a first walk through Monastiraki',
            'Optional: dinner with the rock floodlit above you'], 'Arrival'),
        2: ('The Acropolis and its museum', [
            'Breakfast, then up to the rock with your guide',
            'The Parthenon, the Erechtheion and the Propylaea',
            'Down to the Acropolis Museum and its marbles',
            'The afternoon free for Plaka and the flea market'], 'B'),
        3: ('Across the Peloponnese to Olympia', [
            'Breakfast and check out for the road west',
            'The narrow cut of the Corinth Canal',
            'The theatre at Epidaurus and its famous acoustics',
            'The Lion Gate at Mycenae before Olympia for the night'], 'B, D'),
        4: ('Ancient Olympia, then north to Delphi', [
            'Breakfast, then into the sanctuary of Zeus',
            'The workshop of Pheidias and the old stadium',
            'North over the gulf through Nafpaktos',
            'Into the mountains at Delphi for the night'], 'B, D'),
        5: ('The oracle at Delphi and back to Athens', [
            'Breakfast below the slopes of Parnassus',
            'The Sacred Way, the treasuries and the Temple of Apollo',
            'The bronze charioteer in the site museum',
            'The mountain road back through Arachova to Athens'], 'B'),
        6: ('Departure from Athens', [
            'Breakfast at the hotel and check out',
            'Private transfer to Athens International for your flight home'], 'B'),
    },
    'summary': 'Six days across classical Greece: the Acropolis and its museum in Athens, the Corinth Canal, Epidaurus and Mycenae on the road west, the sanctuary at Olympia, and the oracle at Delphi before the mountain road back.',
    'included': 'Included: 3 nights in Athens, 1 night at Olympia and 1 night at Delphi with breakfast; two dinners on the mainland tour; ' + GREECE_INCL + '; a guided Athens city tour with the Acropolis Museum; the three day coach tour of the Peloponnese and Delphi.',
    'not_included': GREECE_NOT,
}

TRIPS['gr_honeymoon_santorini'] = {
    'source': 'romantic-greece-honeymoon-special', 'country': 'greece',
    'camel': 'romanticGreeceAthensSantorini',
    'slug': 'romantic-greece-athens-and-santorini',
    'title': 'Romantic Greece: Athens and Santorini',
    'alt': 'Whitewashed houses and blue domes above the Santorini caldera',
    'transport': 'Private airport and port transfers, with the ferry to and from Santorini',
    'tag': 'Honeymoon', 'tags': ['Honeymoon', 'Culture', 'Beach'],
    'route': ['Athens', 'Santorini', 'Athens'],
    'transfers': 8, 'meals': 5, 'expert': 'greece',
    'stops': [
        {'city': 'Athens', 'name': 'Athens', 'days': [1, 2], 'nights': 2,
         'hotel': 'Athens city hotel', 'blurb': 'Central hotel within reach of the Acropolis and Plaka',
         'program': 'Two nights in the capital with a guided morning on the Acropolis and its museum.',
         'acts': [
             ('Athens city tour with the Acropolis Museum', 2, 'Acropolis', 'A guided half day over the rock and through the museum below it, with the Parthenon marbles laid out as they once stood.'),
         ]},
        {'city': 'Santorini', 'name': 'Santorini', 'days': [3, 4], 'nights': 2,
         'hotel': 'Santorini caldera hotel', 'blurb': 'Hotel on the caldera side with the volcano across the water',
         'program': 'Two nights on the rim of a drowned volcano, with a boat out to the crater and the hot springs.',
         'acts': [
             ('Santorini volcano and hot springs cruise', 4, '', 'A boat across the caldera to the black lava island of Nea Kameni, the walk up to the crater, then a swim in the warm sulphur water off Palea Kameni.'),
         ]},
        {'city': 'Athens', 'name': 'Athens', 'days': [5, 6], 'nights': 1,
         'hotel': 'Athens city hotel', 'blurb': 'Central hotel within reach of the Acropolis and Plaka',
         'program': 'The crossing back for a last evening on the mainland.',
         'acts': []},
    ],
    'days': {
        1: ('Arrival in Athens', [
            'Arrival at Athens International and transfer to your hotel',
            'Check in and the rest of the day at leisure',
            'Optional: an evening in the lanes below the rock',
            'Optional: a rooftop dinner facing the Acropolis'], 'Arrival'),
        2: ('The Acropolis and its museum', [
            'Breakfast, then up the rock with your guide',
            'The Parthenon and the porch of the Caryatids',
            'The Acropolis Museum and its marbles',
            'The afternoon free in Plaka'], 'B'),
        3: ('The crossing to Santorini', [
            'Breakfast and check out of your Athens hotel',
            'Port transfer at Piraeus for the Aegean crossing',
            'Met at Athinios and taken up to the caldera rim',
            'The evening free for the sunset over the water'], 'B'),
        4: ('The volcano and the hot springs', [
            'Breakfast with the caldera below you',
            'A boat across to the lava island of Nea Kameni',
            'The climb to the crater rim and the steam vents',
            'A swim in the warm sulphur water off Palea Kameni'], 'B'),
        5: ('Back to Athens', [
            'Breakfast and check out for the return crossing',
            'The ferry to Piraeus and a transfer to your hotel',
            'The afternoon free for the Plaka quarter',
            'Optional: a last dinner in the old town'], 'B'),
        6: ('Departure from Athens', [
            'Breakfast at the hotel and check out',
            'Private transfer to Athens International for your flight home'], 'B'),
    },
    'summary': 'Six days for two: the Acropolis and its museum in Athens, then two nights on the Santorini caldera with a boat out to the volcano and a swim in the hot springs, before a last evening back in Plaka.',
    'included': 'Included: 3 nights in Athens and 2 nights on Santorini with breakfast; ' + GREECE_INCL + '; a guided Athens city tour with the Acropolis Museum; the Santorini volcano and hot springs cruise.',
    'not_included': GREECE_NOT,
}

TRIPS['gr_majestic'] = {
    'source': '10-days-majestic-greece-tour', 'country': 'greece',
    'camel': 'majesticGreeceAthensMykonosSantorini',
    'slug': 'majestic-greece-athens-mykonos-and-santorini',
    'title': 'Majestic Greece: Athens, Mykonos and Santorini',
    'alt': 'The caldera cliffs of Santorini dropping to the Aegean',
    'transport': 'Private airport and port transfers, with ferries between the islands',
    'tag': 'Culture', 'tags': ['Culture', 'Honeymoon', 'Beach', 'Luxury'],
    'route': ['Athens', 'Mykonos', 'Santorini'],
    'transfers': 10, 'meals': 9, 'expert': 'greece_islands',
    'stops': [
        {'city': 'Athens', 'name': 'Athens', 'days': [1, 2, 3], 'nights': 3,
         'hotel': 'Athens city hotel', 'blurb': 'Central hotel within reach of the Acropolis and Plaka',
         'program': 'Three nights in the capital, with a guided morning on the Acropolis and two days to wander.',
         'acts': [
             ('Athens city tour with the Acropolis Museum', 2, 'Acropolis', 'A guided half day over the rock and through the museum below, with Syntagma Square and the changing of the guard on the way.'),
         ]},
        {'city': 'Mykonos', 'name': 'Mykonos', 'days': [4, 5, 6], 'nights': 3,
         'hotel': 'Mykonos island hotel', 'blurb': 'Island hotel within reach of Mykonos town and the beaches',
         'program': 'Three nights in the Cyclades, with the old town on foot and two days for the bays.',
         'acts': [
             ('Mykonos town walk', 5, '', 'The windmills on the ridge, the chapels of the old quarter and the balconies of Little Venice hanging over the water.'),
             ('Optional: boat trip to Delos', 6, '', 'The short crossing to Delos, birthplace of Apollo, with the terrace of lions and the mosaic houses of the old merchant town.'),
         ]},
        {'city': 'Santorini', 'name': 'Santorini', 'days': [7, 8, 9, 10], 'nights': 3,
         'hotel': 'Santorini caldera hotel', 'blurb': 'Hotel on the caldera side with the volcano across the water',
         'program': 'Three nights on the caldera rim to finish, with the volcano, the hot springs and the sunset at Oia.',
         'acts': [
             ('Santorini volcano and hot springs cruise', 8, '', 'A boat across the caldera to Nea Kameni, the climb to the crater, then the warm sulphur water off Palea Kameni.'),
             ('Oia sunset and the caldera villages', 9, '', 'The cliff path from Imerovigli to Oia, the blue domes above the water and the best sunset in the Aegean.'),
         ]},
    ],
    'days': {
        1: ('Arrival in Athens', [
            'Arrival at Athens International and transfer to your hotel',
            'Check in and the rest of the day at leisure',
            'Optional: an evening walk around Monastiraki',
            'Optional: dinner under the floodlit rock'], 'Arrival'),
        2: ('The Acropolis and its museum', [
            'Breakfast, then up the rock with your guide',
            'The Parthenon, the Erechtheion and the Propylaea',
            'The Acropolis Museum and its marbles',
            'Syntagma Square and the changing of the guard'], 'B'),
        3: ('A free day in Athens', [
            'Breakfast, then the day as you please',
            'Optional: the National Archaeological Museum',
            'Optional: the old stadium and the temple of Zeus',
            'Optional: an evening in the lanes of Plaka'], 'B'),
        4: ('Ferry to Mykonos', [
            'Breakfast and check out of your Athens hotel',
            'Port transfer at Piraeus for the Aegean crossing',
            'Met at Mykonos harbour and taken to your hotel',
            'The evening free at Little Venice'], 'B'),
        5: ('Mykonos town on foot', [
            'Breakfast, then into the whitewashed lanes',
            'The windmills on the ridge above the harbour',
            'Chapels, bougainvillea and the balconies over the water',
            'The afternoon free for a beach of your choosing'], 'B'),
        6: ('A free day on Mykonos', [
            'Breakfast, then the whole day yours',
            'Optional: the boat across to ancient Delos',
            'Optional: a swim at Ornos or Platis Gialos',
            'Optional: a long lunch at a harbour taverna'], 'B'),
        7: ('On to Santorini', [
            'Breakfast and check out for the island crossing',
            'Port transfer and the ferry south through the Cyclades',
            'Met at Athinios and taken up to the caldera rim',
            'The evening free with the volcano across the water'], 'B'),
        8: ('The volcano and the hot springs', [
            'Breakfast with the caldera below you',
            'A boat across to the lava island of Nea Kameni',
            'The climb to the crater rim and the steam vents',
            'A swim in the warm sulphur water off Palea Kameni'], 'B'),
        9: ('Oia and the caldera villages', [
            'Breakfast, then the cliff path towards Oia',
            'Blue domes, white walls and the drop to the sea',
            'The famous sunset from the castle ruins',
            'Optional: a wine tasting on the way back'], 'B'),
        10: ('Departure from Santorini', [
            'Breakfast at the hotel and check out',
            'Private transfer to Santorini airport for your flight home'], 'B'),
    },
    'summary': 'Ten days through the classics and the Cyclades: three nights in Athens with the Acropolis and its museum, three on Mykonos for the old town and the beaches, and three on the Santorini caldera with the volcano, the hot springs and the sunset at Oia.',
    'included': 'Included: 3 nights in Athens, 3 nights on Mykonos and 3 nights on Santorini with breakfast; ' + GREECE_INCL + '; a guided Athens city tour with the Acropolis Museum; a Mykonos town walk; the Santorini volcano and hot springs cruise.',
    'not_included': GREECE_NOT,
}

TRIPS['gr_exotic'] = {
    'source': '10-days-exotic-greece-tour', 'country': 'greece',
    'camel': 'exoticGreeceIslandHopping',
    'slug': 'exotic-greece-island-hopping-with-santorini',
    'title': 'Exotic Greece: Island Hopping with Santorini',
    'alt': 'A blue domed church above the rooftops of Oia on Santorini',
    'transport': 'Private airport and port transfers, with ferries between the islands',
    'tag': 'Honeymoon', 'tags': ['Honeymoon', 'Beach', 'Culture'],
    'route': ['Athens', 'Mykonos', 'Santorini', 'Athens'],
    'transfers': 10, 'meals': 8, 'expert': 'greece_islands',
    'stops': [
        {'city': 'Athens', 'name': 'Athens', 'days': [1, 2], 'nights': 2,
         'hotel': 'Athens city hotel', 'blurb': 'Central hotel within reach of the Acropolis and Plaka',
         'program': 'Two nights to begin, with a guided morning on the Acropolis and an afternoon in the old quarter.',
         'acts': [
             ('Athens city tour with the Acropolis Museum', 2, 'Acropolis', 'A guided half day over the rock and through the museum below it, finishing at Syntagma for the changing of the guard.'),
         ]},
        {'city': 'Mykonos', 'name': 'Mykonos', 'days': [3, 4], 'nights': 2,
         'hotel': 'Mykonos island hotel', 'blurb': 'Island hotel within reach of Mykonos town and the beaches',
         'program': 'Two nights on Mykonos, with the old town on foot and an island circuit by coach.',
         'acts': [
             ('Mykonos sightseeing tour', 4, '', 'The windmills, the chapels of the old quarter and a coach circuit out to the southern bays and the inland villages.'),
         ]},
        {'city': 'Santorini', 'name': 'Santorini', 'days': [5, 6, 7], 'nights': 3,
         'hotel': 'Santorini caldera hotel', 'blurb': 'Hotel on the caldera side with the volcano across the water',
         'program': 'Three nights on the caldera, with the volcano cruise and a day among the cliff villages.',
         'acts': [
             ('Santorini volcano and hot springs cruise', 6, '', 'A boat across to Nea Kameni, the climb to the crater rim, then a swim in the warm sulphur water off Palea Kameni.'),
             ('Fira, Imerovigli and Oia', 7, '', 'The three cliff towns on the rim, linked by a path along the edge, with the caldera dropping away on one side the whole way.'),
         ]},
        {'city': 'Athens', 'name': 'Athens', 'days': [8, 9], 'nights': 1,
         'hotel': 'Athens city hotel', 'blurb': 'Central hotel within reach of the Acropolis and Plaka',
         'program': 'The crossing back to the mainland for a last night in the capital.',
         'acts': []},
    ],
    'days': {
        1: ('Arrival in Athens', [
            'Arrival at Athens International and transfer to your hotel',
            'Check in and the rest of the day at leisure',
            'Optional: a first wander through Monastiraki',
            'Optional: dinner with the rock lit above you'], 'Arrival'),
        2: ('The Acropolis and its museum', [
            'Breakfast, then up the rock with your guide',
            'The Parthenon and the porch of the Caryatids',
            'The Acropolis Museum below the hill',
            'Syntagma Square and the changing of the guard'], 'B'),
        3: ('Ferry to Mykonos', [
            'Breakfast and check out of your Athens hotel',
            'Port transfer at Piraeus for the Aegean crossing',
            'Met at Mykonos harbour and taken to your hotel',
            'The evening free for sunset at Little Venice'], 'B'),
        4: ('Mykonos town and the island', [
            'Breakfast, then into the old town on foot',
            'The windmills on the ridge and the chapels below',
            'A coach circuit of the southern bays in the afternoon',
            'Inland villages and the long sandy beaches'], 'B'),
        5: ('On to Santorini', [
            'Breakfast and check out for the island crossing',
            'Port transfer and the ferry south through the Cyclades',
            'Met at Athinios and taken up to the caldera rim',
            'The evening free with the volcano across the water'], 'B'),
        6: ('The volcano and the hot springs', [
            'Breakfast with the caldera below you',
            'A boat across to the lava island of Nea Kameni',
            'The climb to the crater rim and the steam vents',
            'A swim in the warm sulphur water off Palea Kameni'], 'B'),
        7: ('The cliff villages of the rim', [
            'Breakfast, then out along the caldera path',
            'Fira, Imerovigli and the walk on to Oia',
            'Blue domes, white walls and the drop to the sea',
            'The sunset from the old castle ruins'], 'B'),
        8: ('Back to Athens', [
            'Breakfast and check out for the return crossing',
            'The ferry to Piraeus and a transfer to your hotel',
            'The afternoon free in the Plaka quarter',
            'Optional: a last dinner in the old town'], 'B'),
        9: ('Departure from Athens', [
            'Breakfast at the hotel and check out',
            'Private transfer to Athens International for your flight home'], 'B'),
    },
    'summary': 'Nine days island hopping from Athens: the Acropolis and its museum, two nights on Mykonos for the old town and the bays, three on the Santorini caldera with the volcano and the cliff villages, then a last night on the mainland.',
    'included': 'Included: 3 nights in Athens, 2 nights on Mykonos and 3 nights on Santorini with breakfast; ' + GREECE_INCL + '; a guided Athens city tour with the Acropolis Museum; a Mykonos sightseeing tour; the Santorini volcano and hot springs cruise.',
    'not_included': GREECE_NOT,
}
