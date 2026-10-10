// Regional destinations grid data (images reused from original site CDN).
const img = (id, path) => `https://images.ctfassets.net/bth3mlrehms2/${id}/${path}?w=900&q=70&fm=webp`;
const th = (file) => `https://media1.thrillophilia.com/filestore/${file}?w=900&dpr=1`;

export const destinationTabs = ['Top 10', 'Asia', 'Europe', 'Middle East'];

// Live destination pages. Anything listed below without an entry here is shown as "Coming soon" (not clickable).
export const COUNTRY_HREF = { 'Europe': '/europe', 'Europe multi-country': '/europe', 'Egypt': '/africa/egypt', 'Thailand': '/asia/thailand', 'Vietnam': '/asia/vietnam', 'Malaysia': '/asia/malaysia', 'Singapore': '/asia/singapore', 'Kazakhstan': '/asia/kazakhstan', 'Bhutan': '/asia/bhutan', 'Laos': '/asia/laos', 'Japan': '/asia/japan', 'Bali': '/asia/bali', 'China': '/asia/china', 'Cambodia': '/asia/cambodia', 'South Korea': '/asia/south-korea', 'Italy': '/europe/italy', 'Switzerland': '/europe/holidays?country=Switzerland', 'France': '/europe/holidays?country=France', 'Germany': '/europe/holidays?country=Germany', 'Netherlands': '/europe/holidays?country=Netherlands', 'Greece': '/europe/greece', 'Norway': '/europe/norway', 'Ireland': '/europe/ireland', 'Finland': '/europe/finland', 'Sweden': '/europe/sweden' };
export const COMING_SOON = 'Coming soon';
export const isComingSoon = (name) => !COUNTRY_HREF[name];
// Previously also: 'Africa', 'Central America', 'North America', 'Oceania', 'South America', 'South Seas' – hidden, data kept below.
export const continentMeta = {
  'Top 10': { src: img('3hsuR5UvfamJlqKCTM81Ii', 'b43e484beb8b92c43047174a4a3e7be8/Maldiven__Holzsteg.jpg'), tagline: 'Our most loved destinations right now', href: null },
  Asia: { src: '/srilanka-packages/glimpses-of-sri-lanka-8-days-tour/g1.webp', tagline: 'Beaches, temples and city breaks', href: '/asia' },
  Europe: { src: '/europe/hero-paris.webp', tagline: 'Two or three countries in one holiday', href: '/europe' },
  'Middle East': { src: '/destinations/jordan.webp', tagline: 'Pyramids, Petra and the Dubai skyline', href: null }
};

export const destinations = {
  'Top 10': [
    { name: 'Europe', region: 'Multi-country journeys', src: '/europe/hero-paris.webp' },
    { name: 'Japan', region: 'Asia', src: img('5E91LAbIo29xmfzemwDnnu', '082cd826dbf9b2744cbcf00015005330/Japan_MtFuji.jpg') },
    { name: 'Vietnam', region: 'Asia', src: img('6KpaBlYiRchxRrYsS84QgO', 'dfb8fec25316c0c719d2aa7a5794dc31/NinhBinhProvinz_Tempel.jpg') },
    { name: 'Bali', region: 'Asia', src: img('61b5ymnc76Gat5QEm4R7Uv', '236a66af31569408e5fba01e2dcb53b1/Kelingking_Beach__Nusa_Penida__Indonesien_NTCG__1_.png') },
    { name: 'Bhutan', region: 'Asia', src: 'https://images.unsplash.com/photo-1638246439638-b37095b34879?crop=entropy&cs=srgb&fm=jpg&q=70&w=900' },
    { name: 'Thailand', region: 'Asia', src: img('27MnAH4RS1zTSFygAmnq5i', '97ec55278a94f2ab56c26847396201ba/Thailand_Natur.jpg') },
    { name: 'Singapore', region: 'Asia', src: img('4B5tE96BHxRVFYUVJQibEE', 'efeae2ee825eda4d08a95e0717d916fd/Skyline__Singapur.jpg') },
    { name: 'China', region: 'Asia', src: img('3FwBvWPMIiVGThJdqClYD1', 'bb67524f6b951541a23d6950859c4e6f/China_Jinshanling_ChinesischeMauer_TCG.png') },
    { name: 'Kazakhstan', region: 'Asia', src: 'https://images.unsplash.com/photo-1530480667809-b655d4dc3aaa?crop=entropy&cs=srgb&fm=jpg&q=70&w=900' },
    { name: 'Egypt', region: 'Middle East', src: img('qsp90U72Z4CxCVhVhtdGE', '3b9cf2cac3e162fb25231d046cafd25e/Giza_Pyramid_Complex_-_Cairo__EgyptTCG.jpg') }
  ],
  'Africa': [
    { name: 'South Africa', src: img('11BIZmUhVTObt1mVYFtofn', 'f05f87c118cdb66b143bbb69eba50c62/Su__dafrika_Kapstadt_Zwo__lf_Apostel_Berge.jpg') },
    { name: 'Seychelles', src: img('21cn2hwFylFIiH7eSI9Exw', '47ff3e8a504afb62603332243e0c2186/iStock-1221784138.jpg') },
    { name: 'Tanzania', src: img('7edotTbL51cLSRL6y6ie5j', '13d2b882c4cdad47c4629adcf09d5b53/Tansania_Reise_Giraffen_und_der_Kilimandscharo_im_Amboseli_Nationalpark.jpg') },
    { name: 'Namibia', src: img('6sKYDcfFOoFsBkOwJtoVoF', '35594053fdc4d0b90d18a18f1058f8b1/Namibia_Sandd%C3%83_ne.jpg') },
    { name: 'Botswana', src: img('1oeRTGrt4yYdpJ8K8Vr19t', 'dbc9ee85f9cf764ce9bde1a838b69bec/Botswana__Okavango-Delta__Elefant.jpg') },
    { name: 'Egypt', src: img('qsp90U72Z4CxCVhVhtdGE', '3b9cf2cac3e162fb25231d046cafd25e/Giza_Pyramid_Complex_-_Cairo__EgyptTCG.jpg') },
    { name: 'Kenya', src: img('3qDWPPw1OnQaSd82yXV4hi', '4864b1fafd51466ebd397cc9d9f168e6/Kenia__Nakuru.jpg') },
    { name: 'Morocco', src: img('3pOpw5Vdn399VHngUjdSF1', '807d6a8f26a2b0d7b4743cbf5bf5c252/Marrakesch_Morocco.jpg') },
    { name: 'Mauritius', src: img('5dxRiI8SebjdaHIXal8D44', 'a62281d75e52bfcf85e2df700b9c9588/Mauritius_Starnd_TCG.jpg') },
    { name: 'Uganda', src: img('6yDtphuIFbfH8optRxdIRm', '4cc7b2b8e611202ae2959cd93fca0045/Uganda_Bwindi_Nationalpark_Dschungel_TCG.png') }
  ],
  'Asia': [
    { name: 'Laos', src: img('730GUSsXgobNqsyerVaagA', 'c31524b81de30c8805073d4e2cabda93/Laos_Mekong_Boot.jpg') },
    { name: 'Thailand', src: img('27MnAH4RS1zTSFygAmnq5i', '97ec55278a94f2ab56c26847396201ba/Thailand_Natur.jpg') },
    { name: 'Vietnam', src: img('6KpaBlYiRchxRrYsS84QgO', 'dfb8fec25316c0c719d2aa7a5794dc31/NinhBinhProvinz_Tempel.jpg') },
    { name: 'Japan', src: img('5E91LAbIo29xmfzemwDnnu', '082cd826dbf9b2744cbcf00015005330/Japan_MtFuji.jpg') },
    { name: 'Bali', src: img('61b5ymnc76Gat5QEm4R7Uv', '236a66af31569408e5fba01e2dcb53b1/Kelingking_Beach__Nusa_Penida__Indonesien_NTCG__1_.png') },
    { name: 'China', src: img('3FwBvWPMIiVGThJdqClYD1', 'bb67524f6b951541a23d6950859c4e6f/China_Jinshanling_ChinesischeMauer_TCG.png') },
    { name: 'Cambodia', src: img('3zbplvZU8SZYLZqdmaPsZv', 'c16250ef83321324f10fbf00c9b058a1/Kambodscha_AngkorWat.jpg') },
    { name: 'Malaysia', src: img('X7b0PdKpWDMzl19jytcJ6', 'd0aad3d91b3ffaaf161f205c7660fe5f/Malaysia_Ipoh_Tempel.jpg') },
    { name: 'Singapore', src: img('4B5tE96BHxRVFYUVJQibEE', 'efeae2ee825eda4d08a95e0717d916fd/Skyline__Singapur.jpg') },
    { name: 'Kazakhstan', src: 'https://images.unsplash.com/photo-1530480667809-b655d4dc3aaa?crop=entropy&cs=srgb&fm=jpg&q=70&w=900' },
    { name: 'Bhutan', src: 'https://images.unsplash.com/photo-1638246439638-b37095b34879?crop=entropy&cs=srgb&fm=jpg&q=70&w=900' },
    { name: 'South Korea', src: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?crop=entropy&cs=srgb&fm=jpg&q=70&w=900' },
    { name: 'Sri Lanka', src: img('6etzBcZlvbOLHqzCOq0NES', '764d862634b04fbcd521a3ad01740f1d/iStock-1779897953.jpg') }
  ],
  'Europe': [
    { name: 'Europe', highlight: true, badge: 'Bestseller', src: '/europe/hero-paris.webp' },
    { name: 'Italy', src: img('6MDAdkdCjF16LaohT1os4R', 'a05331428849331be0c2fd266c8570db/Italien_Amalfi.jpg') },
    { name: 'Switzerland', src: th('ehq0rpky73oyanmiklwr59ha4fje_shutterstock_1265181466.jpg') },
    { name: 'France', src: th('oz8oa456lnrmxysb40s01a6muuzt_shutterstock_667652551.jpg') },
    { name: 'Greece', src: img('4tPmbNB9QIZbfIWAsHnz3w', 'fd3191963fb012a8f8e1aeb42a2a6401/Griechenland_Santorini.jpg') },
    { name: 'Norway', src: img('UHqJkdKkOhjiJeqqdlBtb', '7f7ab850458b9aad4024ef52c5834ade/MAIN_Norwegen_Hardangerfjord_TCG.jpg') },
    { name: 'Germany', src: th('dh32j5dplbklfcgss2cnb1ar6djf_Downpic.cc-image328420529.jpg') },
    { name: 'Netherlands', src: th('smtjwzuglcyvrflfo5sbjl1g7cw6_shutterstock_555885793.jpg') },
    { name: 'Ireland', src: img('W4uVx0uUt86jnByPHjutE', '306e7fb7b3d77e101f5fbde7cb9cab1d/Irland_CliffsofMoher-2.jpg') },
    { name: 'Finland', src: img('5bPB8dEQGT5Hl1icMTfEiM', '2393b18a187a961b249dfd4ed7a22d7d/iStock-1256670045.jpg') },
    { name: 'Sweden', src: img('4pwuirTK8DaLqHIejBCzWU', '63b0406c67aa2f3b1a18260f86b7e6a1/iStock-1364945953.jpg') }
  ],
  'Central America': [
    { name: 'Costa Rica', src: img('NicshTzcwRst2izOwKSAV', 'd375b934e43bd3c484b162ec1d67725b/CostaRica_Vulkankrater.jpg') },
    { name: 'Bahamas', src: img('comxpruZoh9rqekDg7sD5', 'd90805d82e7cd800b1a7f99558abd90b/Bahamas_Nassau_TCG.jpg') },
    { name: 'Belize', src: img('52DlCA5bcsZwzf2OgyUj4v', '6c0a084613aa09ed578a8c9b7a17252e/iStock-2156354573.jpg') },
    { name: 'Panama', src: img('20VLISk45tKInGos3fD1u7', '9a3fd1da5bd9103d4103a28f71747f16/El_Valle_de_Anton__Panama.jpg') }
  ],
  'North America': [
    { name: 'Canada', src: img('4o10LZngx2dF2lPBMomEIS', '79d54c77ff575453297addd96d42c9fd/Kanada_MoraineLake.jpg') },
    { name: 'USA', src: img('4qKkGsewSMqgIzrhbg8jUc', '5941e6892942fa67ac32f013d2315c10/Golden_Gate_Bridge_USA.jpg') },
    { name: 'Mexico', src: img('4WGqTAkH8NoLM3L8qAWD8', '8ffd0446462f889ea89edfa8c9c01b0c/Mexiko_Yucatan_Pyramide_des_Magiers_TCG.png') }
  ],
  'Oceania': [
    { name: 'Australia', src: img('62tyUpL6fH7VsSsH7KjOXt', '8965abe9818007096bca5bc3f48a1a2a/Australien_Zw%C3%83__lfApostel.jpg') },
    { name: 'New Zealand', src: img('4TvvBboaqN9Lij6WfPWd9R', 'b7226370048754c2404ccafb2efa4b4d/Neuseeland_LakePukaki.jpg') },
    { name: 'Fiji', src: img('6vDMh9qVdWDd9AE3sDFGGK', '69047d2be508794ca4ae0cdadb460710/Fidschi_StrandmitPalmen.jpg') },
    { name: 'French Polynesia', src: img('5nKdrLe1bxjlSQr6IzE9Fv', '7d50380c19fcb155d8ab9335cfbe22ab/Fatu_Hiva__Marquesas__Franz_sisch-Polynesien.png') }
  ],
  'South America': [
    { name: 'Argentina', src: img('3SX8d47FE4M5o6L4BikkPF', '60ab4e5ad9384f0d659b0ede57beb644/Argentinien_Wasserf%C3%83_lle.jpg') },
    { name: 'Brazil', src: img('7n2wn1HmXBldiLG7fN09g7', 'cb58b1375f01f61e0a217421029b38a2/Brasilien_Copacabana.jpg') },
    { name: 'Chile', src: img('3xe18V8IX5Os5izCuYzm4o', '4632f958fb506a12c11f0cf7372891f1/Chile_TorresdelPaine.jpg') },
    { name: 'Peru', src: img('6OBzVCAvpPqTVmqiwlpurU', 'e6370f33850b14c126aaf874b1cddc33/Peru_MachuPicchu.jpg') },
    { name: 'Bolivia', src: img('1Jy8X6JQCEE14GLwSfohqn', '186e262949910c49c8f83ba3ba98c97f/IsladelSol_Bolivien.jpg') },
    { name: 'Ecuador', src: img('7iNmOTL9MV48327mpSJdfj', '93f29e2c524478ab93facca4ab7af73d/Ecuador-Amazon-3.jpg') },
    { name: 'Colombia', src: img('1ufxjS1BbMCNv6K2cBtMhG', '1e40336f5b7dce7a347179acde6a1768/Kolumbien_Guatape.jpg') },
    { name: 'Uruguay', src: img('1OlGhZPQocslgmOS1roK8t', 'e2da4b37fac621cbe0265cfa32df2623/Uruguay_Motevideo.jpg') }
  ],
  'South Seas': [
    { name: 'Cook Islands', src: img('3VPMGvou1zpVa6VDLkjRvm', 'ccbb502d028a6859e972d6665e9747db/Rarotonga__Cookinseln.jpg') }
  ],
  'Middle East': [
    { name: 'Egypt', src: img('qsp90U72Z4CxCVhVhtdGE', '3b9cf2cac3e162fb25231d046cafd25e/Giza_Pyramid_Complex_-_Cairo__EgyptTCG.jpg') },
    { name: 'Jordan', src: '/destinations/jordan.webp' },
    { name: 'UAE', src: '/destinations/uae.webp' }
  ]
};


// Home "Destinations" section – dedicated list (content-only, design unchanged).
export const homeDestinationTabs = ['Asia'];

export const homeDestinations = {
  'Asia': [
    { name: 'Vietnam', src: img('6KpaBlYiRchxRrYsS84QgO', 'dfb8fec25316c0c719d2aa7a5794dc31/NinhBinhProvinz_Tempel.jpg') },
    { name: 'Thailand', src: img('27MnAH4RS1zTSFygAmnq5i', '97ec55278a94f2ab56c26847396201ba/Thailand_Natur.jpg') },
    { name: 'Singapore', src: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHxTaW5nYXBvcmUlMjBNYXJpbmElMjBCYXl8ZW58MHx8fHwxNzkwODUyMzQzfDA&ixlib=rb-4.1.0&q=85&w=520' },
    { name: 'Malaysia', src: img('X7b0PdKpWDMzl19jytcJ6', 'd0aad3d91b3ffaaf161f205c7660fe5f/Malaysia_Ipoh_Tempel.jpg') }
  ]
};
