/**
 * Ce code source a été écrit par Jess Gabriel
 * Son utilisation est gratuite
 * Mer 22/08/2018
 */
var items = '{\n' +
    '   "Afrique du Sud": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Afrique du Sud"\n' +
    '   },\n' +
    '   "Afghanistan": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "en Afghanistan"\n' +
    '   },\n' +
    '   "Albanie": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Albanie"\n' +
    '   },\n' +
    '   "Algérie": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Algérie"\n' +
    '   },\n' +
    '   "Allemagne": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Allemagne"\n' +
    '   },\n' +
    '   "Andorre": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Andorre"\n' +
    '   },\n' +
    '   "Angola": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "en Angola"\n' +
    '   },\n' +
    '   "Arabie saoudite": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Arabie saoudite"\n' +
    '   },\n' +
    '   "Argentine": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Argentine"\n' +
    '   },\n' +
    '   "Arménie": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Arménie"\n' +
    '   },\n' +
    '   "Australie": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Australie"\n' +
    '   },\n' +
    '   "Autriche": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Autriche"\n' +
    '   },\n' +
    '   "Azerbaïdjan": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "en Azerbaïdjan"\n' +
    '   },\n' +
    '   "Bahamas": {\n' +
    '      "Article": "les",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "aux Bahamas"\n' +
    '   },\n' +
    '   "Bahreïn": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "à Bahreïn"\n' +
    '   },\n' +
    '   "Bangladesh": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Bangladesh"\n' +
    '   },\n' +
    '   "Barbade": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "à la Barbade"\n' +
    '   },\n' +
    '   "Bélarus": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Bélarus"\n' +
    '   },\n' +
    '   "Belgique": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Belgique"\n' +
    '   },\n' +
    '   "Bélize": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Bélize"\n' +
    '   },\n' +
    '   "Bénin": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Bénin"\n' +
    '   },\n' +
    '   "Bhoutan": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Bhoutan"\n' +
    '   },\n' +
    '   "Birmanie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Birmanie"\n' +
    '   },\n' +
    '   "Bolivie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Bolivie"\n' +
    '   },\n' +
    '   "Bosnie-Herzégovine": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Bosnie-Herzégovine"\n' +
    '   },\n' +
    '   "Botswana": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Botswana"\n' +
    '   },\n' +
    '   "Brésil": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Brésil"\n' +
    '   },\n' +
    '   "Brunéi Darussalam": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "à Brunéi Darussalam"\n' +
    '   },\n' +
    '   "Bulgarie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Bulgarie"\n' +
    '   },\n' +
    '   "Burkina Faso": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Burkina Faso"\n' +
    '   },\n' +
    '   "Burundi": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Burundi"\n' +
    '   },\n' +
    '   "Cameroun": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Cameroun"\n' +
    '   },\n' +
    '   "Canada": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Canada"\n' +
    '   },\n' +
    '   "Chili": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Chili"\n' +
    '   },\n' +
    '   "Chine": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Chine"\n' +
    '   },\n' +
    '   "Chypre": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "à Chypre"\n' +
    '   },\n' +
    '   "Colombie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Colombie"\n' +
    '   },\n' +
    '   "Comores": {\n' +
    '      "Article": "les",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "aux Comores"\n' +
    '   },\n' +
    '   "Congo": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Congo"\n' +
    '   },\n' +
    '   "Corée du Nord": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Corée du Nord"\n' +
    '   },\n' +
    '   "Corée du Sud": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Corée du Sud"\n' +
    '   },\n' +
    '   "Costa Rica": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Costa Rica"\n' +
    '   },\n' +
    '   "Côte d’Ivoire": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Côte d’Ivoire"\n' +
    '   },\n' +
    '   "Croatie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Croatie"\n' +
    '   },\n' +
    '   "Cuba": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "à Cuba"\n' +
    '   },\n' +
    '   "Danemark": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Danemark"\n' +
    '   },\n' +
    '   "Djibouti": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "à Djibouti"\n' +
    '   },\n' +
    '   "Dominique": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "à la Dominique"\n' +
    '   },\n' +
    '   "Égypte": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Égypte"\n' +
    '   },\n' +
    '   "Émirats arabes unis": {\n' +
    '      "Article": "les",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "aux Émirats arabes unis"\n' +
    '   },\n' +
    '   "Équateur": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "en Équateur"\n' +
    '   },\n' +
    '   "Érythrée": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Érythrée"\n' +
    '   },\n' +
    '   "Espagne": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Espagne"\n' +
    '   },\n' +
    '   "Estonie": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Estonie"\n' +
    '   },\n' +
    '   "États-Unis d’Amérique": {\n' +
    '      "Article": "les",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "aux États-Unis"\n' +
    '   },\n' +
    '   "Éthiopie": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Éthiopie"\n' +
    '   },\n' +
    '   "Fidji": {\n' +
    '      "Article": "les",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "aux Fidji"\n' +
    '   },\n' +
    '   "Finlande": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Finlande"\n' +
    '   },\n' +
    '   "France": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en France"\n' +
    '   },\n' +
    '   "Gabon": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Gabon"\n' +
    '   },\n' +
    '   "Gambie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Gambie"\n' +
    '   },\n' +
    '   "Géorgie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Géorgie"\n' +
    '   },\n' +
    '   "Ghana": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Ghana"\n' +
    '   },\n' +
    '   "Grèce": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Grèce"\n' +
    '   },\n' +
    '   "Grenade": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "à la Grenade"\n' +
    '   },\n' +
    '   "Guatemala": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Guatemala"\n' +
    '   },\n' +
    '   "Guinée": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Guinée"\n' +
    '   },\n' +
    '   "Guinée-Bissau": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Guinée-Bissau"\n' +
    '   },\n' +
    '   "Guinée équatoriale": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Guinée équatoriale"\n' +
    '   },\n' +
    '   "Guyana": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Guyana"\n' +
    '   },\n' +
    '   "Haïti": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "à Haïti/en Haïti"\n' +
    '   },\n' +
    '   "Honduras": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Honduras"\n' +
    '   },\n' +
    '   "Hongrie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Hongrie"\n' +
    '   },\n' +
    '   "Île Maurice": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "à l’Île Maurice"\n' +
    '   },\n' +
    '   "Îles Marshall": {\n' +
    '      "Article": "les",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "aux Îles Marshall"\n' +
    '   },\n' +
    '   "Îles Salomon": {\n' +
    '      "Article": "les",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "aux Îles Salomon"\n' +
    '   },\n' +
    '   "Inde": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Inde"\n' +
    '   },\n' +
    '   "Indonésie": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Indonésie"\n' +
    '   },\n' +
    '   "Iran": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "en Iran"\n' +
    '   },\n' +
    '   "Iraq": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "en Iraq"\n' +
    '   },\n' +
    '   "Irlande": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Irlande"\n' +
    '   },\n' +
    '   "Islande": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Islande"\n' +
    '   },\n' +
    '   "Israël": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "en Israël"\n' +
    '   },\n' +
    '   "Italie": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Italie"\n' +
    '   },\n' +
    '   "Jamaïque": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "à la Jamaïque"\n' +
    '   },\n' +
    '   "Japon": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Japon"\n' +
    '   },\n' +
    '   "Jordanie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Jordanie"\n' +
    '   },\n' +
    '   "Kazakhstan": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Kazakhstan"\n' +
    '   },\n' +
    '   "Kenya": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Kenya"\n' +
    '   },\n' +
    '   "Kiribati": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "à Kiribati"\n' +
    '   },\n' +
    '   "Kirghizistan": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Kirghizistan"\n' +
    '   },\n' +
    '   "Kosovo": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Kosovo"\n' +
    '   },\n' +
    '   "Koweït": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Koweït"\n' +
    '   },\n' +
    '   "Laos": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Laos"\n' +
    '   },\n' +
    '   "Lesotho": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Lesotho"\n' +
    '   },\n' +
    '   "Lettonie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Lettonie"\n' +
    '   },\n' +
    '   "Liban": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Liban"\n' +
    '   },\n' +
    '   "Libéria": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Libéria"\n' +
    '   },\n' +
    '   "Libye": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Libye"\n' +
    '   },\n' +
    '   "Liechtenstein": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Liechtenstein"\n' +
    '   },\n' +
    '   "Lituanie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Lituanie"\n' +
    '   },\n' +
    '   "Luxembourg": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Luxembourg"\n' +
    '   },\n' +
    '   "Macédoine": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Macédoine"\n' +
    '   },\n' +
    '   "Madagascar": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "à Madagascar"\n' +
    '   },\n' +
    '   "Malaisie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Malaisie"\n' +
    '   },\n' +
    '   "Malawi": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Malawi"\n' +
    '   },\n' +
    '   "Maldives": {\n' +
    '      "Article": "les",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "aux Maldives"\n' +
    '   },\n' +
    '   "Mali": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Mali"\n' +
    '   },\n' +
    '   "Malte": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "à Malte"\n' +
    '   },\n' +
    '   "Maroc": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Maroc"\n' +
    '   },\n' +
    '   "Mauritanie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Mauritanie"\n' +
    '   },\n' +
    '   "Mexique": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Mexique"\n' +
    '   },\n' +
    '   "Micronésie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Micronésie"\n' +
    '   },\n' +
    '   "Moldavie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Moldavie"\n' +
    '   },\n' +
    '   "Monaco": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "à Monaco"\n' +
    '   },\n' +
    '   "Monténégro": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Monténégro"\n' +
    '   },\n' +
    '   "Mozambique": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Mozambique"\n' +
    '   },\n' +
    '   "Namibie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Namibie"\n' +
    '   },\n' +
    '   "Nauru": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "à Nauru"\n' +
    '   },\n' +
    '   "Népal": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Népal"\n' +
    '   },\n' +
    '   "Nicaragua": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Nicaragua"\n' +
    '   },\n' +
    '   "Niger": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Niger"\n' +
    '   },\n' +
    '   "Nigéria": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Nigéria"\n' +
    '   },\n' +
    '   "Norvège": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Norvège"\n' +
    '   },\n' +
    '   "Nouvelle-Zélande": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Nouvelle-Zélande"\n' +
    '   },\n' +
    '   "Oman": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "à Oman"\n' +
    '   },\n' +
    '   "Ouganda": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "en Ouganda"\n' +
    '   },\n' +
    '   "Ouzbékistan": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "en Ouzbékistan"\n' +
    '   },\n' +
    '   "Pakistan": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Pakistan"\n' +
    '   },\n' +
    '   "Palaos": {\n' +
    '      "Article": "les",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "aux Palaos"\n' +
    '   },\n' +
    '   "Panamá": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Panamá"\n' +
    '   },\n' +
    '   "Papouasie-Nouvelle-Guinée": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Papouasie-Nouvelle-Guinée"\n' +
    '   },\n' +
    '   "Paraguay": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Paraguay"\n' +
    '   },\n' +
    '   "Pays-Bas": {\n' +
    '      "Article": "les",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "aux Pays-Bas"\n' +
    '   },\n' +
    '   "Pérou": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Pérou"\n' +
    '   },\n' +
    '   "Philippines": {\n' +
    '      "Article": "les",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "aux Philippines"\n' +
    '   },\n' +
    '   "Pologne": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Pologne"\n' +
    '   },\n' +
    '   "Portugal": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Portugal"\n' +
    '   },\n' +
    '   "Qatar": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Qatar"\n' +
    '   },\n' +
    '   "République centrafricaine": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en République centrafricaine"\n' +
    '   },\n' +
    '   "République démocratique du Congo": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en République démocratique du Congo"\n' +
    '   },\n' +
    '   "République dominicaine": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en République dominicaine"\n' +
    '   },\n' +
    '   "République tchèque": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en République tchèque"\n' +
    '   },\n' +
    '   "Roumanie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Roumanie"\n' +
    '   },\n' +
    '   "Royaume-Uni": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Royaume-Uni"\n' +
    '   },\n' +
    '   "Russie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Russie"\n' +
    '   },\n' +
    '   "Rwanda": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Rwanda"\n' +
    '   },\n' +
    '   "Saint-Kitts-et-Nevis": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "à Saint-Kitts-et-Nevis"\n' +
    '   },\n' +
    '   "Sainte-Lucie": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "à Sainte-Lucie"\n' +
    '   },\n' +
    '   "Saint-Marin": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "à Saint-Marin"\n' +
    '   },\n' +
    '   "Saint-Vincent-et-les Grenadines": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "à Saint-Vincent-et-les Grenadines"\n' +
    '   },\n' +
    '   "Saint-Siège": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Saint-Siège"\n' +
    '   },\n' +
    '   "Salvador": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Salvador"\n' +
    '   },\n' +
    '   "Samoa": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Samoa"\n' +
    '   },\n' +
    '   "Sao Tomé-et-Principe": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "à Sao Tomé-et-Principe"\n' +
    '   },\n' +
    '   "Sénégal": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Sénégal"\n' +
    '   },\n' +
    '   "Serbie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Serbie"\n' +
    '   },\n' +
    '   "Seychelles": {\n' +
    '      "Article": "les",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "aux Seychelles"\n' +
    '   },\n' +
    '   "Sierra Leone": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Sierra Leone"\n' +
    '   },\n' +
    '   "Singapour": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "à Singapour"\n' +
    '   },\n' +
    '   "Slovaquie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Slovaquie"\n' +
    '   },\n' +
    '   "Slovénie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Slovénie"\n' +
    '   },\n' +
    '   "Somalie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Somalie"\n' +
    '   },\n' +
    '   "Soudan": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Soudan"\n' +
    '   },\n' +
    '   "Soudan du Sud": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Soudan du Sud"\n' +
    '   },\n' +
    '   "Sri Lanka": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Sri Lanka"\n' +
    '   },\n' +
    '   "Suède": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Suède"\n' +
    '   },\n' +
    '   "Suisse": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Suisse"\n' +
    '   },\n' +
    '   "Suriname": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Suriname"\n' +
    '   },\n' +
    '   "Swaziland": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Swaziland"\n' +
    '   },\n' +
    '   "Syrie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Syrie"\n' +
    '   },\n' +
    '   "Tadjikistan": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Tadjikistan"\n' +
    '   },\n' +
    '   "Taïwan": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "à Taïwan"\n' +
    '   },\n' +
    '   "Tanzanie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Tanzanie"\n' +
    '   },\n' +
    '   "Tchad": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Tchad"\n' +
    '   },\n' +
    '   "Thaïlande": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Thaïlande"\n' +
    '   },\n' +
    '   "Timor-Oriental": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Timor-Oriental"\n' +
    '   },\n' +
    '   "Togo": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Togo"\n' +
    '   },\n' +
    '   "Tonga": {\n' +
    '      "Article": "les",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "aux Tonga"\n' +
    '   },\n' +
    '   "Trinité-et-Tobago": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "à Trinité-et-Tobago"\n' +
    '   },\n' +
    '   "Tunisie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Tunisie"\n' +
    '   },\n' +
    '   "Turquie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Turquie"\n' +
    '   },\n' +
    '   "Turkménistan": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Turkménistan"\n' +
    '   },\n' +
    '   "Tuvalu": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "à Tuvalu"\n' +
    '   },\n' +
    '   "Ukraine": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Ukraine"\n' +
    '   },\n' +
    '   "Uruguay": {\n' +
    '      "Article": "l’",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "en Uruguay"\n' +
    '   },\n' +
    '   "Vanuatu": {\n' +
    '      "Article": "sans article",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "à Vanuatu"\n' +
    '   },\n' +
    '   "Venezuela": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Venezuela"\n' +
    '   },\n' +
    '   "Vietnam": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Vietnam"\n' +
    '   },\n' +
    '   "Yémen": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Yémen"\n' +
    '   },\n' +
    '   "Zambie": {\n' +
    '      "Article": "la",\n' +
    '      "Genre": "féminin",\n' +
    '      "Preposition": "en Zambie"\n' +
    '   },\n' +
    '   "Zimbabwe": {\n' +
    '      "Article": "le",\n' +
    '      "Genre": "masculin",\n' +
    '      "Preposition": "au Zimbabwe"\n' +
    '   }\n' +
    '}'
var myJson = JSON.parse(items);
function parseCountry(selection) {
    if (selection.html() != undefined) {
        var value = selection.html().trim();
        if (myJson[value] != undefined) {
            var row = myJson[value];
            selection.html(row.Preposition)
        } else {
            selection.html(value)
        }
    }
}