export const company = {
  name: "Emanuel Media",
  owner: "Annette Emanuel-Decker",
  street: "Schulstraße 54",
  zip: "66740",
  city: "Saarlouis-Roden",
  phone: "0 68 31 - 6 45 68 45",
  phoneHref: "+4968316456845",
  fax: "0 68 31 - 6 45 68 46",
  email: "info@emanuel-media.de",
  website: "www.emanuel-media.de",
  ustId: "DE 265029532",
  hours: [
    { day: "Mo – Fr", value: "09.00 – 13.00 & 14.00 – 17.00 Uhr" },
    { day: "Samstag", value: "geschlossen" },
    { day: "Sonstige", value: "Termine nach Vereinbarung" },
  ],
};

export const nav = [
  { label: "Start", href: "#start" },
  { label: "Emanuel Media", href: "#about" },
  { label: "Produkte", href: "#produkte" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Kontakt", href: "#kontakt" },
];

export const services = [
  {
    kicker: "01",
    title: "Textildruck",
    lines: [
      "Bedruckung für Vereinsbedarf, Teller & Tassen.",
      "Flex-, Flock- und Transferdruck für hohe Farbechtheit.",
    ],
  },
  {
    kicker: "02",
    title: "Geschäftsdrucksachen",
    lines: [
      "Visitenkarten, Flyer, Bücher, Kalender, Festschriften, Diplomarbeiten, Aufkleber.",
      "Entwurf, Gestaltung und Logoentwicklung inklusive.",
    ],
  },
  {
    kicker: "03",
    title: "Werbetechnik",
    lines: [
      "Autobeschriftung, Schaufensterbeschriftung, Banner, Poster, Leinwand.",
      "Stempelherstellung nach Wunsch.",
    ],
  },
  {
    kicker: "04",
    title: "Datenservice",
    lines: [
      "Aufbereitung, Beratung, Scans bis DIN A3, Bildbearbeitung.",
      "Datenanlieferung als PDF, Corel Draw, MS-Office — Schriften bitte mitliefern.",
    ],
  },
  {
    kicker: "05",
    title: "Start-Up-Pakete",
    lines: [
      "Von Existenzgründern für Existenzgründer.",
      "Alles was gebraucht wird für den persönlichen Geschäftserfolg.",
    ],
  },
  {
    kicker: "06",
    title: "Vor Ort",
    lines: [
      "Parken direkt vor dem Gebäude.",
      "Heute gebracht, heute gemacht — vorausgesetzt die Daten sind sauber.",
    ],
  },
];

export const products = [
  {
    n: "01",
    title: "Textildruck",
    tag: "Vereinsbedarf · Fotodruck",
    body: "T-Shirts, Sweat-Shirts, Polos, Trikots. Ein- oder mehrfarbig, auch als Fotodruck. Flex- und Flockverfahren sorgen für hohe Farbechtheit; Transferdruck ist besonders für kostenbewusste Auflagen interessant.",
    specs: [
      ["Verfahren", "Flex · Flock · Transfer · Digital"],
      ["Farben", "1– bis vollfarbig / Fotodruck"],
      ["Grundtextil", "aus dem Emanuel Media Textilkatalog"],
    ],
  },
  {
    n: "02",
    title: "Visitenkarten",
    tag: "Erster Eindruck, gedruckt.",
    body: "Klassisch elegant oder als genutete Klappkarte — die Visitenkarte, die man behalten möchte.",
    specs: [
      ["Format", "85 × 55 mm · 90 × 50 mm"],
      ["Druck", "einseitig / beidseitig"],
      ["Farben", "4-farbig CMYK"],
      ["Papier", "300 g Bilderdruck, weiß"],
      ["Verarbeitung", "Klappkarten genutet"],
    ],
  },
  {
    n: "03",
    title: "Postkarten & Klappkarten",
    tag: "Persönliche Grüße, hochwertig produziert.",
    body: "Ob Einladung, Danksagung oder saisonale Karte — mit dem passenden Papier und feiner Nutung.",
    specs: [
      ["Format", "DIN A6 · DIN lang"],
      ["Druck", "einseitig / beidseitig"],
      ["Farben", "4-farbig CMYK"],
      ["Papier", "200 g · 300 g Bilderdruck, weiß"],
      ["Verarbeitung", "Klappkarten genutet"],
    ],
  },
  {
    n: "04",
    title: "Flyer & Handzettel",
    tag: "Botschaft, die ankommt.",
    body: "Von der Aktion bis zur Veranstaltung — Flyer in verschiedenen Formaten, sauber gefalzt.",
    specs: [
      ["Format", "DIN A6 · A5 · A4"],
      ["Druck", "einseitig / beidseitig"],
      ["Farben", "4-farbig CMYK"],
      ["Papier", "150 g · 160 g Spezialpapier, weiß"],
      ["Verarbeitung", "gefalzt"],
    ],
  },
  {
    n: "05",
    title: "Folder & Broschüren",
    tag: "Mehr Raum für Inhalte.",
    body: "6 oder 4 Seiten, durchgehend 4-farbig, gefalzt oder geheftet — für Ihr Angebot in kompakter Form.",
    specs: [
      ["Format", "DIN lang (6 S.) · A5 · A4 (4 S.)"],
      ["Druck", "durchgehend"],
      ["Farben", "beidseitig 4-farbig CMYK"],
      ["Papier", "100 g · 150 g Spezialpapier, weiß"],
      ["Verarbeitung", "gefalzt oder geheftet"],
    ],
  },
  {
    n: "06",
    title: "Bücher & Diplomarbeiten",
    tag: "Maßanfertigung in Kleinauflage.",
    body: "Ihr Buch ganz nach Bedarf — mit spezifischer Ausstattung. Wir realisieren das Projekt auf Basis eines konkreten Angebots und persönlicher Beratung.",
    specs: [
      ["Umfang", "individuell"],
      ["Ausstattung", "nach Wahl"],
      ["Beratung", "persönlich vor Ort"],
    ],
  },
  {
    n: "07",
    title: "Kalender",
    tag: "Zwölf Monate Ihres Motivs.",
    body: "Klassisch als Wandkalender in unterschiedlichen Formaten — auf gutem Papier gedruckt und mit Aufhänger versehen.",
    specs: [
      ["Format", "DIN A4 · A3 · A3+"],
      ["Druck", "einseitig"],
      ["Farben", "4/0-farbig CMYK"],
      ["Papier", "150 g Spezialpapier, weiß"],
    ],
  },
  {
    n: "08",
    title: "Plakate",
    tag: "Auffällig, sauber verarbeitet.",
    body: "Vom Aushang bis zum Präsentationsposter — mit Office-Metall-Wire-O, Aufhänger und Rückkarton geliefert.",
    specs: [
      ["Format", "DIN A6 · A5 · A4 · A3"],
      ["Druck", "einseitig"],
      ["Farben", "4/0-farbig CMYK"],
      ["Papier", "200 g · 300 g Spezialpapier, weiß"],
      ["Verarbeitung", "Office-Metall-Wire-O · Aufhänger · Rückkarton"],
    ],
  },
  {
    n: "09",
    title: "Banner, Poster & Großformat",
    tag: "Wenn groß, dann richtig groß.",
    body: "Großformatdruck, Banner, Plakate und Bilder auf echter Leinwand. Für Innen- und Außenbereich.",
    specs: [
      ["Medien", "Mesh · Banner · Leinwand · Plakat"],
      ["Anwendung", "Innen & Außen"],
      ["Formate", "auf Anfrage"],
    ],
  },
];

export const referenzen = [
  {
    kicker: "Print",
    title: "Flyer, Visitenkarten & Briefbögen",
    body: "Aus dem Alltag der Druckerei: Faasend-Flyer, Vereinsbroschüren, Restaurantkarten für Il Lago, Aufklärungsmaterial für die Epilepsie-Hilfe.",
    tags: ["Vereine", "Gastronomie", "Non-Profit"],
    art: "flyers" as const,
  },
  {
    kicker: "Textil",
    title: "Shirts, Hoodies & Trikots",
    body: "SA-Events, Bergmannsverein Roden, Trekking Muto, The Voice of 9F1 — von der Vereinskollektion bis zum Charakter-Shirt.",
    tags: ["Vereinsbedarf", "Merch", "Workwear"],
    art: "shirts" as const,
  },
  {
    kicker: "Werbetechnik",
    title: "Plakate, Banner & Schilder",
    body: "Rodener Tage, Nikolaus-Party, Tennisplakate, Bauschilder in großen Formaten — sichtbar von weit her.",
    tags: ["Großformat", "Outdoor", "Event"],
    art: "banner" as const,
  },
  {
    kicker: "Werbemittel",
    title: "Taschen & Give-aways",
    body: "Nachhaltige Baumwolltaschen mit individuellem Motiv — Tischlein-Taschendruck und mehr.",
    tags: ["Give-away", "Nachhaltig"],
    art: "bag" as const,
  },
];
