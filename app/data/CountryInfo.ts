// src/data/countries.ts

export interface CountryInfo {
    name: string;
    cca3: string;
    description: string;
}

export const ContryInfoObj: Record<string, CountryInfo> = {
    AFG: {
        name: 'Afghanistan',
        cca3: 'AFG',
        description:
            'A landlocked country in South and Central Asia with a rich history.',
    },
    ALB: {
        name: 'Albania',
        cca3: 'ALB',
        description:
            'A Balkan country with mountainous landscapes and a long coastline.',
    },
    DZA: {
        name: 'Algeria',
        cca3: 'DZA',
        description:
            'The largest country in Africa by land area, in North Africa.',
    },
    AND: {
        name: 'Andorra',
        cca3: 'AND',
        description:
            'A small principality in the Pyrenees between France and Spain.',
    },
    AGO: {
        name: 'Angola',
        cca3: 'AGO',
        description:
            'A country on the west coast of Southern Africa, with rich natural resources.',
    },
    ARG: {
        name: 'Argentina',
        cca3: 'ARG',
        description:
            'A large South American country known for tango, beef and the Pampas.',
    },
    ARM: {
        name: 'Armenia',
        cca3: 'ARM',
        description:
            'A mountainous country in the South Caucasus, at the crossroads of Europe and Asia.',
    },
    AUS: {
        name: 'Australia',
        cca3: 'AUS',
        description:
            'A continent nation surrounded by the Indian and Pacific oceans, known for diverse wildlife.',
    },
    AUT: {
        name: 'Austria',
        cca3: 'AUT',
        description:
            'A central European country known for classical music and Alpine scenery.',
    },
    AZE: {
        name: 'Azerbaijan',
        cca3: 'AZE',
        description:
            'A country at the boundary of Eastern Europe and Western Asia, known for its oil and fire mountain.',
    },
    BHS: {
        name: 'Bahamas',
        cca3: 'BHS',
        description:
            'An archipelago in the Atlantic Ocean, known for clear waters and tourism.',
    },
    BHR: {
        name: 'Bahrain',
        cca3: 'BHR',
        description:
            'A small island country in the Persian Gulf with a growing financial sector.',
    },
    BGD: {
        name: 'Bangladesh',
        cca3: 'BGD',
        description:
            'A densely populated country in South Asia, bordered by India and the Bay of Bengal.',
    },
    BRB: {
        name: 'Barbados',
        cca3: 'BRB',
        description:
            'A Caribbean island nation known for its beaches and colonial architecture.',
    },
    BLR: {
        name: 'Belarus',
        cca3: 'BLR',
        description:
            'A landlocked country in Eastern Europe with a Soviet-era architectural influence.',
    },
    BEL: {
        name: 'Belgium',
        cca3: 'BEL',
        description:
            'A Western European country famous for chocolate, waffles, and the EU institutions.',
    },
    BLZ: {
        name: 'Belize',
        cca3: 'BLZ',
        description:
            'A country on the eastern coast of Central America, known for the Belize Barrier Reef.',
    },
    BEN: {
        name: 'Benin',
        cca3: 'BEN',
        description:
            'A West African nation with rich history and diverse religions.',
    },
    BTN: {
        name: 'Bhutan',
        cca3: 'BTN',
        description:
            'A Himalayan kingdom known for its Gross National Happiness philosophy.',
    },
    BOL: {
        name: 'Bolivia',
        cca3: 'BOL',
        description:
            'A landlocked Andean country in South America with high-altitude landscapes.',
    },
    BIH: {
        name: 'Bosnia and Herzegovina',
        cca3: 'BIH',
        description:
            'A Balkan country with a history marked by war, now diverse and recovering.',
    },
    BWA: {
        name: 'Botswana',
        cca3: 'BWA',
        description:
            'A Southern African country known for stable democracy and wildlife reserves.',
    },
    BRA: {
        name: 'Brazil',
        cca3: 'BRA',
        description:
            'The largest country in South America, known for the Amazon rainforest and Carnival.',
    },
    BRN: {
        name: 'Brunei',
        cca3: 'BRN',
        description:
            'A small, wealthy country on the island of Borneo in Southeast Asia.',
    },
    BGR: {
        name: 'Bulgaria',
        cca3: 'BGR',
        description:
            'A Southeastern European country with mountains, Black Sea coast, and rich folklore.',
    },
    BFA: {
        name: 'Burkina Faso',
        cca3: 'BFA',
        description:
            'A landlocked country in West Africa with a vibrant musical tradition.',
    },
    BDI: {
        name: 'Burundi',
        cca3: 'BDI',
        description:
            'A small, landlocked country in East Africa with a history of civil unrest.',
    },
    CIV: {
        name: 'Côte d’Ivoire',
        cca3: 'CIV',
        description:
            'A West African country on the Gulf of Guinea with a diverse culture and economy.',
    },
    CPV: {
        name: 'Cape Verde',
        cca3: 'CPV',
        description:
            'An island country in the Atlantic Ocean off the west coast of Africa, known for its volcanic landscapes.',
    },
    CMR: {
        name: 'Cameroon',
        cca3: 'CMR',
        description:
            'A Central African country with diverse geography and cultures.',
    },
    CAN: {
        name: 'Canada',
        cca3: 'CAN',
        description:
            'A large country in North America, stretching from the U.S. in the south to the Arctic Circle.',
    },
    CAF: {
        name: 'Central African Republic',
        cca3: 'CAF',
        description:
            'A landlocked country in Central Africa with tropical forests and savannas.',
    },
    TCD: {
        name: 'Chad',
        cca3: 'TCD',
        description:
            'A landlocked country in north-central Africa, with deserts and Sahelian plains.',
    },
    CHL: {
        name: 'Chile',
        cca3: 'CHL',
        description:
            'A long, narrow country along South America’s western edge, with the Andes and Pacific coast.',
    },
    CHN: {
        name: 'China',
        cca3: 'CHN',
        description:
            'The world’s most populous country, with a long history and rapid economic growth.',
    },
    COL: {
        name: 'Colombia',
        cca3: 'COL',
        description:
            'A country in South America with coastlines on the Pacific and Caribbean, famous for coffee and biodiversity.',
    },
    COM: {
        name: 'Comoros',
        cca3: 'COM',
        description:
            'An island country in the Indian Ocean off the eastern coast of Africa, with volcanic origins.',
    },
    COG: {
        name: 'Congo (Brazzaville)',
        cca3: 'COG',
        description:
            'A country in Central Africa with tropical forests and river basins.',
    },
    COD: {
        name: 'Congo (Kinshasa)',
        cca3: 'COD',
        description:
            'The Democratic Republic of the Congo, a large Central African country rich in rivers and rainforests.',
    },
    CRI: {
        name: 'Costa Rica',
        cca3: 'CRI',
        description:
            'A Central American country known for its biodiversity and ecotourism.',
    },
    HRV: {
        name: 'Croatia',
        cca3: 'HRV',
        description:
            'A European country on the Adriatic Sea, known for historic cities and beautiful coastline.',
    },
    CUB: {
        name: 'Cuba',
        cca3: 'CUB',
        description:
            'A Caribbean island nation known for its music, culture, and colonial architecture.',
    },
    CYP: {
        name: 'Cyprus',
        cca3: 'CYP',
        description:
            'An island country in the Eastern Mediterranean with a rich history and divided governance.',
    },
    CZE: {
        name: 'Czech Republic',
        cca3: 'CZE',
        description:
            'A central European country with historic towns, castles, and beer culture.',
    },
    DNK: {
        name: 'Denmark',
        cca3: 'DNK',
        description:
            'A Nordic country in Europe, known for its welfare state, design, and cycling culture.',
    },
    DJI: {
        name: 'Djibouti',
        cca3: 'DJI',
        description:
            'A small country in the Horn of Africa, located on the Bab el-Mandeb Strait.',
    },
    DOM: {
        name: 'Dominican Republic',
        cca3: 'DOM',
        description:
            'A Caribbean nation occupying part of the island of Hispaniola, known for beaches and tourism.',
    },
    ECU: {
        name: 'Ecuador',
        cca3: 'ECU',
        description:
            'A South American country straddling the equator, famous for the Galápagos Islands.',
    },
    EGY: {
        name: 'Egypt',
        cca3: 'EGY',
        description:
            'A transcontinental country in northeast Africa, famous for ancient civilization and the Nile.',
    },
    SLV: {
        name: 'El Salvador',
        cca3: 'SLV',
        description:
            'A small Central American country with volcanoes, beaches, and coffee plantations.',
    },
    GNQ: {
        name: 'Equatorial Guinea',
        cca3: 'GNQ',
        description:
            'A small Central African country on the Atlantic coast, with islands and oil reserves.',
    },
    ERI: {
        name: 'Eritrea',
        cca3: 'ERI',
        description:
            'A country in the Horn of Africa, with a Red Sea coastline and mountainous terrain.',
    },
    EST: {
        name: 'Estonia',
        cca3: 'EST',
        description:
            'A Baltic country in Northern Europe, known for digital innovation and medieval towns.',
    },
    SWZ: {
        name: 'Eswatini',
        cca3: 'SWZ',
        description:
            'A small, landlocked country in Southern Africa, formerly Swaziland, with traditional monarchy.',
    },
    ETH: {
        name: 'Ethiopia',
        cca3: 'ETH',
        description:
            'A landlocked country in the Horn of Africa with ancient history and diverse cultures.',
    },
    FJI: {
        name: 'Fiji',
        cca3: 'FJI',
        description:
            'An island country in the South Pacific, famous for beaches, coral reefs, and tourism.',
    },
    FIN: {
        name: 'Finland',
        cca3: 'FIN',
        description:
            'A Nordic country in Northern Europe, known for lakes, forests, and welfare system.',
    },
    FRA: {
        name: 'France',
        cca3: 'FRA',
        description:
            'A European country famous for its cuisine, art, and landmark Eiffel Tower.',
    },
    GAB: {
        name: 'Gabon',
        cca3: 'GAB',
        description:
            'A Central African country with dense rainforests and Atlantic coastline.',
    },
    GMB: {
        name: 'Gambia',
        cca3: 'GMB',
        description:
            'A small West African country surrounding the Gambia River.',
    },
    GEO: {
        name: 'Georgia',
        cca3: 'GEO',
        description:
            'A country at the crossroads of Eastern Europe and Western Asia, with mountains and Black Sea coast.',
    },
    DEU: {
        name: 'Germany',
        cca3: 'DEU',
        description:
            'A central European country known for history, engineering, and Oktoberfest.',
    },
    GHA: {
        name: 'Ghana',
        cca3: 'GHA',
        description:
            'A West African country with diverse ecosystems and rich cultural heritage.',
    },
    GRC: {
        name: 'Greece',
        cca3: 'GRC',
        description:
            'A southern European country known for ancient history, islands, and Mediterranean cuisine.',
    },
    GRD: {
        name: 'Grenada',
        cca3: 'GRD',
        description:
            'A small Caribbean island nation known as the “Spice Island”.',
    },
    GTM: {
        name: 'Guatemala',
        cca3: 'GTM',
        description:
            'A Central American country with Mayan history, volcanoes, and lakes.',
    },
    GIN: {
        name: 'Guinea',
        cca3: 'GIN',
        description:
            'A West African country with forests, rivers, and mineral resources.',
    },
    GNB: {
        name: 'Guinea-Bissau',
        cca3: 'GNB',
        description:
            'A small West African country with islands and a tropical climate.',
    },
    GUY: {
        name: 'Guyana',
        cca3: 'GUY',
        description:
            'A country in South America with rainforests and a Caribbean coast.',
    },
    HTI: {
        name: 'Haiti',
        cca3: 'HTI',
        description:
            'A Caribbean country sharing the island of Hispaniola with the Dominican Republic.',
    },
    HND: {
        name: 'Honduras',
        cca3: 'HND',
        description:
            'A Central American country with mountains, Caribbean coast, and Mayan ruins.',
    },
    HUN: {
        name: 'Hungary',
        cca3: 'HUN',
        description:
            'A central European country known for thermal baths, historic cities, and the Danube River.',
    },
    ISL: {
        name: 'Iceland',
        cca3: 'ISL',
        description:
            'A Nordic island nation in the North Atlantic, known for volcanoes, geysers, and glaciers.',
    },
    IND: {
        name: 'India',
        cca3: 'IND',
        description:
            'A South Asian country with a huge population and rich cultural heritage.',
    },
    IDN: {
        name: 'Indonesia',
        cca3: 'IDN',
        description:
            'An archipelagic country in Southeast Asia, with thousands of islands and diverse cultures.',
    },
    IRN: {
        name: 'Iran',
        cca3: 'IRN',
        description:
            'A country in Western Asia with ancient history and Persian culture.',
    },
    IRQ: {
        name: 'Iraq',
        cca3: 'IRQ',
        description:
            'A country in Western Asia, historically part of Mesopotamia.',
    },
    IRL: {
        name: 'Ireland',
        cca3: 'IRL',
        description:
            'An island nation in the North Atlantic, known for green landscapes and culture.',
    },
    ISR: {
        name: 'Israel',
        cca3: 'ISR',
        description:
            'A Middle Eastern country on the Mediterranean, with ancient religious sites.',
    },
    ITA: {
        name: 'Italy',
        cca3: 'ITA',
        description:
            'A European country famed for its art, history, food, and architecture.',
    },
    JAM: {
        name: 'Jamaica',
        cca3: 'JAM',
        description:
            'A Caribbean island nation known for music, culture, and beaches.',
    },
    JPN: {
        name: 'Japan',
        cca3: 'JPN',
        description:
            'An island nation in East Asia known for technology, traditions, and cherry blossoms.',
    },
    JOR: {
        name: 'Jordan',
        cca3: 'JOR',
        description:
            'A Middle Eastern country known for desert landscapes and ancient sites like Petra.',
    },
    KAZ: {
        name: 'Kazakhstan',
        cca3: 'KAZ',
        description:
            'A Central Asian country with vast steppes and nomadic culture.',
    },
    KEN: {
        name: 'Kenya',
        cca3: 'KEN',
        description:
            'An East African country known for savannahs, wildlife safaris, and the Great Rift Valley.',
    },
    KIR: {
        name: 'Kiribati',
        cca3: 'KIR',
        description:
            'A small island nation in the central Pacific Ocean, straddling the equator.',
    },
    KWT: {
        name: 'Kuwait',
        cca3: 'KWT',
        description:
            'A small, wealthy country in the Middle East with oil reserves.',
    },
    KGZ: {
        name: 'Kyrgyzstan',
        cca3: 'KGZ',
        description:
            'A Central Asian country with mountains, nomadic culture, and lakes.',
    },
    LAO: {
        name: 'Laos',
        cca3: 'LAO',
        description:
            'A landlocked Southeast Asian country known for rivers and Buddhist temples.',
    },
    LVA: {
        name: 'Latvia',
        cca3: 'LVA',
        description:
            'A Baltic country in Northern Europe with forests and a coastline on the Baltic Sea.',
    },
    LBN: {
        name: 'Lebanon',
        cca3: 'LBN',
        description:
            'A Middle Eastern country with Mediterranean coastline and ancient history.',
    },
    LSO: {
        name: 'Lesotho',
        cca3: 'LSO',
        description:
            'A landlocked country in Southern Africa surrounded by South Africa, known for mountains.',
    },
    LBR: {
        name: 'Liberia',
        cca3: 'LBR',
        description:
            'A West African country with a history of freed American slaves and tropical forests.',
    },
    LBY: {
        name: 'Libya',
        cca3: 'LBY',
        description:
            'A North African country with desert landscapes and Mediterranean coastline.',
    },
    LIE: {
        name: 'Liechtenstein',
        cca3: 'LIE',
        description:
            'A tiny European principality in the Alps between Switzerland and Austria.',
    },
    LTU: {
        name: 'Lithuania',
        cca3: 'LTU',
        description:
            'A Baltic country in Northern Europe with medieval towns and forests.',
    },
    LUX: {
        name: 'Luxembourg',
        cca3: 'LUX',
        description:
            'A small, wealthy European country known for its finance sector and castles.',
    },
    MDG: {
        name: 'Madagascar',
        cca3: 'MDG',
        description:
            'An island nation off the southeast coast of Africa, famous for unique wildlife.',
    },
    MWI: {
        name: 'Malawi',
        cca3: 'MWI',
        description:
            'A landlocked country in southeastern Africa, known for Lake Malawi and national parks.',
    },
    MYS: {
        name: 'Malaysia',
        cca3: 'MYS',
        description:
            'A Southeast Asian country with coastlines on the South China Sea and Indian Ocean.',
    },
    MDV: {
        name: 'Maldives',
        cca3: 'MDV',
        description:
            'A tropical island nation in the Indian Ocean, known for beaches, coral reefs, and resorts.',
    },
    MLI: {
        name: 'Mali',
        cca3: 'MLI',
        description:
            'A landlocked country in West Africa, with deserts and the Niger River.',
    },
    MLT: {
        name: 'Malta',
        cca3: 'MLT',
        description:
            'A small Mediterranean island country known for historic sites and sunny climate.',
    },
    MHL: {
        name: 'Marshall Islands',
        cca3: 'MHL',
        description:
            'An island country in the central Pacific Ocean, known for atolls and marine biodiversity.',
    },
    MRT: {
        name: 'Mauritania',
        cca3: 'MRT',
        description:
            'A large, mostly desert country in West Africa, with Atlantic coastline.',
    },
    MUS: {
        name: 'Mauritius',
        cca3: 'MUS',
        description:
            'An island nation in the Indian Ocean known for beaches, reefs, and multicultural society.',
    },
    MEX: {
        name: 'Mexico',
        cca3: 'MEX',
        description:
            'A North American country known for food, culture, and ancient ruins.',
    },
    FSM: {
        name: 'Micronesia',
        cca3: 'FSM',
        description:
            'An island nation in the western Pacific Ocean, composed of many small islands.',
    },
    MDA: {
        name: 'Moldova',
        cca3: 'MDA',
        description:
            'A landlocked country in Eastern Europe, with vineyards and Orthodox traditions.',
    },
    MCO: {
        name: 'Monaco',
        cca3: 'MCO',
        description:
            'A tiny sovereign city-state on the French Riviera, famous for luxury and casinos.',
    },
    MNG: {
        name: 'Mongolia',
        cca3: 'MNG',
        description:
            'A landlocked country in East Asia with steppes, deserts, and nomadic culture.',
    },
    MNE: {
        name: 'Montenegro',
        cca3: 'MNE',
        description:
            'A Balkan country with Adriatic coastline, mountains, and medieval towns.',
    },
    MAR: {
        name: 'Morocco',
        cca3: 'MAR',
        description:
            'A North African country with Atlantic and Mediterranean coastlines and desert interior.',
    },
    MOZ: {
        name: 'Mozambique',
        cca3: 'MOZ',
        description:
            'A Southeast African country with Indian Ocean coast, rivers, and wildlife.',
    },
    MMR: {
        name: 'Myanmar',
        cca3: 'MMR',
        description:
            'A Southeast Asian country with diverse cultures, mountains, and Buddhist heritage.',
    },
    NAM: {
        name: 'Namibia',
        cca3: 'NAM',
        description:
            'A Southern African country with deserts, wildlife, and Atlantic coastline.',
    },
    NRU: {
        name: 'Nauru',
        cca3: 'NRU',
        description:
            'A tiny island country in Micronesia, Pacific Ocean, known for phosphate mining.',
    },
    NPL: {
        name: 'Nepal',
        cca3: 'NPL',
        description:
            'A landlocked Himalayan country, home to Mount Everest and rich Buddhist and Hindu culture.',
    },
    NLD: {
        name: 'Netherlands',
        cca3: 'NLD',
        description:
            'A Western European country famous for canals, tulips, and windmills.',
    },
    NZL: {
        name: 'New Zealand',
        cca3: 'NZL',
        description:
            'An island country in the southwestern Pacific Ocean, known for landscapes and Maori culture.',
    },
    NIC: {
        name: 'Nicaragua',
        cca3: 'NIC',
        description:
            'A Central American country with lakes, volcanoes, and Spanish colonial cities.',
    },
    NER: {
        name: 'Niger',
        cca3: 'NER',
        description:
            'A landlocked country in West Africa, mostly desert and Sahelian plains.',
    },
    NGA: {
        name: 'Nigeria',
        cca3: 'NGA',
        description:
            'The most populous country in Africa, with diverse cultures and natural resources.',
    },
    PRK: {
        name: 'North Korea',
        cca3: 'PRK',
        description:
            'A country in East Asia, known for its strict government and isolated policies.',
    },
    MKD: {
        name: 'North Macedonia',
        cca3: 'MKD',
        description:
            'A Balkan country with mountains, lakes, and rich historical sites.',
    },
    NOR: {
        name: 'Norway',
        cca3: 'NOR',
        description:
            'A Nordic country known for fjords, mountains, and welfare system.',
    },
    OMN: {
        name: 'Oman',
        cca3: 'OMN',
        description:
            'A country on the Arabian Peninsula, known for deserts, mountains, and coastline.',
    },
    PAK: {
        name: 'Pakistan',
        cca3: 'PAK',
        description:
            'A South Asian country with diverse landscapes from mountains to deserts, and rich cultural heritage.',
    },
    PLW: {
        name: 'Palau',
        cca3: 'PLW',
        description:
            'An island country in the western Pacific Ocean, known for marine biodiversity and coral reefs.',
    },
    PSE: {
        name: 'Palestine',
        cca3: 'PSE',
        description:
            'A Middle Eastern territory with historic cities and ongoing political conflict.',
    },
    PAN: {
        name: 'Panama',
        cca3: 'PAN',
        description:
            'A Central American country connecting North and South America, famous for the Panama Canal.',
    },
    PNG: {
        name: 'Papua New Guinea',
        cca3: 'PNG',
        description:
            'A country in Oceania with dense rainforests and high cultural diversity.',
    },
    PRY: {
        name: 'Paraguay',
        cca3: 'PRY',
        description:
            'A landlocked South American country with rivers and subtropical forests.',
    },
    PER: {
        name: 'Peru',
        cca3: 'PER',
        description:
            'A South American country with the Andes, Amazon rainforest, and ancient Incan civilization.',
    },
    PHL: {
        name: 'Philippines',
        cca3: 'PHL',
        description:
            'An archipelagic country in Southeast Asia known for beaches, islands, and tropical climate.',
    },
    POL: {
        name: 'Poland',
        cca3: 'POL',
        description:
            'A Central European country with historic cities, castles, and rich cultural heritage.',
    },
    PRT: {
        name: 'Portugal',
        cca3: 'PRT',
        description:
            'A European country on the Iberian Peninsula, known for maritime history, wine, and beaches.',
    },
    QAT: {
        name: 'Qatar',
        cca3: 'QAT',
        description:
            'A small, wealthy country in the Middle East, with desert landscape and modern skyscrapers.',
    },
    ROU: {
        name: 'Romania',
        cca3: 'ROU',
        description:
            'A Southeastern European country with mountains, castles, and medieval towns.',
    },
    RUS: {
        name: 'Russia',
        cca3: 'RUS',
        description:
            'The largest country in the world, spanning Eastern Europe and Northern Asia with diverse landscapes.',
    },
    RWA: {
        name: 'Rwanda',
        cca3: 'RWA',
        description:
            'A small landlocked country in East Africa, known for hills, lakes, and conservation efforts.',
    },
    KNA: {
        name: 'Saint Kitts and Nevis',
        cca3: 'KNA',
        description:
            'A small two-island country in the Caribbean, known for beaches and tropical climate.',
    },
    LCA: {
        name: 'Saint Lucia',
        cca3: 'LCA',
        description:
            'A Caribbean island nation with mountainous terrain, beaches, and tropical forests.',
    },
    VCT: {
        name: 'Saint Vincent and the Grenadines',
        cca3: 'VCT',
        description:
            'A Caribbean country made up of a main island and smaller islands, known for beaches and sailing.',
    },
    WSM: {
        name: 'Samoa',
        cca3: 'WSM',
        description:
            'An island country in the South Pacific, with tropical climate and traditional Polynesian culture.',
    },
    SMR: {
        name: 'San Marino',
        cca3: 'SMR',
        description:
            'A tiny landlocked microstate surrounded by Italy, known for medieval architecture and history.',
    },
    STP: {
        name: 'Sao Tome and Principe',
        cca3: 'STP',
        description:
            'An island country in the Gulf of Guinea, off Central Africa, with tropical forests and beaches.',
    },
    SAU: {
        name: 'Saudi Arabia',
        cca3: 'SAU',
        description:
            'A Middle Eastern country with desert landscapes, oil wealth, and Islamic heritage.',
    },
    SEN: {
        name: 'Senegal',
        cca3: 'SEN',
        description:
            'A West African country with Atlantic coastline, vibrant culture, and music.',
    },
    SRB: {
        name: 'Serbia',
        cca3: 'SRB',
        description:
            'A Balkan country with historic towns, rivers, and a mix of Ottoman and European architecture.',
    },
    SYC: {
        name: 'Seychelles',
        cca3: 'SYC',
        description:
            'An archipelago in the Indian Ocean, famous for beaches, coral reefs, and tourism.',
    },
    SLE: {
        name: 'Sierra Leone',
        cca3: 'SLE',
        description:
            'A West African country with tropical coastline and rich cultural diversity.',
    },
    SGP: {
        name: 'Singapore',
        cca3: 'SGP',
        description:
            'A city-state in Southeast Asia, known for modern architecture, finance, and clean environment.',
    },
    SVK: {
        name: 'Slovakia',
        cca3: 'SVK',
        description:
            'A Central European country with mountains, castles, and medieval towns.',
    },
    SVN: {
        name: 'Slovenia',
        cca3: 'SVN',
        description:
            'A Central European country with mountains, lakes, and a small Adriatic coastline.',
    },
    SLB: {
        name: 'Solomon Islands',
        cca3: 'SLB',
        description:
            'A country of islands in the South Pacific, known for coral reefs and tropical forests.',
    },
    SOM: {
        name: 'Somalia',
        cca3: 'SOM',
        description:
            'A Horn of Africa country with long coastline on the Indian Ocean and desert regions.',
    },
    ZAF: {
        name: 'South Africa',
        cca3: 'ZAF',
        description:
            'A Southern African country with diverse ecosystems, from deserts to coasts and wildlife.',
    },
    KOR: {
        name: 'South Korea',
        cca3: 'KOR',
        description:
            'An East Asian country known for technology, pop culture, and modern cities.',
    },
    SSD: {
        name: 'South Sudan',
        cca3: 'SSD',
        description:
            'A landlocked country in East-Central Africa, with rivers and swamplands.',
    },
    ESP: {
        name: 'Spain',
        cca3: 'ESP',
        description:
            'A European country with diverse regions, Mediterranean coastline, and historic cities.',
    },
    LKA: {
        name: 'Sri Lanka',
        cca3: 'LKA',
        description:
            'An island nation in South Asia, known for beaches, mountains, and ancient Buddhist heritage.',
    },
    SDN: {
        name: 'Sudan',
        cca3: 'SDN',
        description:
            'A large country in Northeast Africa, with deserts, Nile river, and diverse cultures.',
    },
    SUR: {
        name: 'Suriname',
        cca3: 'SUR',
        description:
            'A small country in South America, with tropical rainforests and Dutch heritage.',
    },
    SWE: {
        name: 'Sweden',
        cca3: 'SWE',
        description:
            'A Nordic country in Northern Europe, known for forests, lakes, welfare system, and design.',
    },
    CHE: {
        name: 'Switzerland',
        cca3: 'CHE',
        description:
            'A central European country famous for mountains, banking, and chocolates.',
    },
    SYR: {
        name: 'Syria',
        cca3: 'SYR',
        description:
            'A Middle Eastern country with ancient history, ongoing conflict, and cultural heritage.',
    },
    TJK: {
        name: 'Tajikistan',
        cca3: 'TJK',
        description:
            'A landlocked Central Asian country with mountains and rich history.',
    },
    TZA: {
        name: 'Tanzania',
        cca3: 'TZA',
        description:
            'An East African country famous for wildlife safaris, Kilimanjaro, and Serengeti National Park.',
    },
    THA: {
        name: 'Thailand',
        cca3: 'THA',
        description:
            'A Southeast Asian country known for tropical beaches, Buddhist temples, and cuisine.',
    },
    TLS: {
        name: 'Timor-Leste',
        cca3: 'TLS',
        description:
            'A small country in Southeast Asia on the eastern half of Timor island, with tropical climate.',
    },
    TGO: {
        name: 'Togo',
        cca3: 'TGO',
        description:
            'A West African country with narrow coastline and savanna regions.',
    },
    TON: {
        name: 'Tonga',
        cca3: 'TON',
        description:
            'A Polynesian kingdom of more than 170 South Pacific islands, known for beaches and coral reefs.',
    },
    TTO: {
        name: 'Trinidad and Tobago',
        cca3: 'TTO',
        description:
            'A twin-island Caribbean country known for Carnival, beaches, and cultural diversity.',
    },
    TUN: {
        name: 'Tunisia',
        cca3: 'TUN',
        description:
            'A North African country with Mediterranean coastline, desert interior, and ancient ruins.',
    },
    TUR: {
        name: 'Turkey',
        cca3: 'TUR',
        description:
            'A transcontinental country bridging Europe and Asia, with rich history and diverse landscapes.',
    },
    TKM: {
        name: 'Turkmenistan',
        cca3: 'TKM',
        description:
            'A Central Asian country with desert regions and Caspian Sea coastline.',
    },
    TUV: {
        name: 'Tuvalu',
        cca3: 'TUV',
        description:
            'A tiny island country in the Pacific Ocean, known for low-lying atolls and small population.',
    },
    UGA: {
        name: 'Uganda',
        cca3: 'UGA',
        description:
            'An East African country with lakes, mountains, and wildlife.',
    },
    UKR: {
        name: 'Ukraine',
        cca3: 'UKR',
        description:
            'A large Eastern European country with fertile plains and rich history.',
    },
    ARE: {
        name: 'United Arab Emirates',
        cca3: 'ARE',
        description:
            'A Middle Eastern federation of emirates known for modern cities and desert landscapes.',
    },
    GBR: {
        name: 'United Kingdom',
        cca3: 'GBR',
        description:
            'A European country consisting of England, Scotland, Wales, and Northern Ireland.',
    },
    USA: {
        name: 'United States of America',
        cca3: 'USA',
        description:
            'A North American country with diverse geography, economy, and culture.',
    },
    URY: {
        name: 'Uruguay',
        cca3: 'URY',
        description:
            'A South American country with Atlantic coastline, beaches, and stable democracy.',
    },
    UZB: {
        name: 'Uzbekistan',
        cca3: 'UZB',
        description:
            'A Central Asian country known for Silk Road cities and deserts.',
    },
    VUT: {
        name: 'Vanuatu',
        cca3: 'VUT',
        description:
            'An island nation in the South Pacific, known for volcanoes, reefs, and tropical forests.',
    },
    VAT: {
        name: 'Vatican City',
        cca3: 'VAT',
        description:
            'A tiny independent city-state enclaved within Rome, center of the Roman Catholic Church.',
    },
    VEN: {
        name: 'Venezuela',
        cca3: 'VEN',
        description:
            'A South American country with oil reserves, mountains, and Caribbean coastline.',
    },
    VNM: {
        name: 'Vietnam',
        cca3: 'VNM',
        description:
            'A Southeast Asian country with coastline, rice terraces, and rich history.',
    },
    YEM: {
        name: 'Yemen',
        cca3: 'YEM',
        description:
            'A Middle Eastern country with ancient history, deserts, and Red Sea coastline.',
    },
    ZMB: {
        name: 'Zambia',
        cca3: 'ZMB',
        description:
            'A landlocked Southern African country known for Victoria Falls and wildlife.',
    },
    ZWE: {
        name: 'Zimbabwe',
        cca3: 'ZWE',
        description:
            'A Southern African country with savannah, wildlife, and the Zambezi river.',
    },
};
