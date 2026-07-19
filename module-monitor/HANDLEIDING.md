# Module Monitor als app op Android en iPhone

De Module Monitor is nu een PWA (Progressive Web App). Dat betekent: je zet de map
op een website, studenten openen de link één keer en zetten de app op hun
beginscherm. Daarna werkt de Module Monitor als een echte app, met eigen icoon,
fullscreen en ook offline.

## Wat zit er in deze map?

| Bestand | Wat is het? |
|---|---|
| `index.html` | De Module Monitor zelf |
| `manifest.webmanifest` | App-gegevens: naam, kleuren, icoon |
| `sw.js` | Service worker: zorgt dat de app offline werkt |
| `icons/` | App-iconen in Albeda-huisstijl |

Belangrijk: de bestanden moeten samen in deze mapstructuur blijven staan.

## Stap 1: online zetten

De app moet via **https** bereikbaar zijn (dat is verplicht voor PWA's).
Twee opties:

### Optie A: GitHub Pages (gratis, 10 minuten)

1. Maak een gratis account op github.com (als je dat nog niet hebt).
2. Klik op **New repository**, noem hem bijvoorbeeld `module-monitor` en zet hem op **Public**.
3. Klik op **uploading an existing file** en sleep de complete inhoud van deze map erin (inclusief de map `icons`). Klik op **Commit changes**.
4. Ga naar **Settings > Pages**. Kies bij Source: **Deploy from a branch**, branch **main**, map **/ (root)**. Klik op **Save**.
5. Na een minuut staat de app op: `https://JOUWNAAM.github.io/module-monitor/`

### Optie B: via Albeda ICT

Vraag ICT om deze map op een schoolserver met https te plaatsen. Elke plek werkt,
zolang de mapstructuur intact blijft en de link met `https://` begint.

## Stap 2: studenten installeren de app

Deel de link met studenten (bijvoorbeeld via It's Learning, of als QR-code in de les).

**Android (Chrome):** open de link, tik op de melding **App installeren**, of via
menu (drie puntjes) > **Toevoegen aan startscherm**.

**iPhone (Safari):** open de link in Safari, tik op het deelicoon (vierkant met
pijl omhoog) en kies **Zet op beginscherm**.

Daarna staat de Module Monitor als app-icoon op de telefoon en opent hij
fullscreen, ook zonder internet.

## Goed om te weten

- **Gegevens blijven op het toestel.** Alles wat een student invult wordt lokaal
  op het eigen toestel bewaard, niet op een server. Wisselt een student van
  toestel? Dan kan hij via **Inleveren > Gegevens opslaan als bestand** zijn
  gegevens meenemen en op het nieuwe toestel weer laden.
- **PDF maken werkt gewoon:** de PDF-knoppen openen het print/deelvenster van de
  telefoon, waar de student **Opslaan als PDF** kiest.
- **Niet de cache/browsergegevens wissen:** dan verdwijnen ook de ingevulde
  gegevens. Vertel studenten dat ze voor de zekerheid af en toe een backup-bestand
  opslaan (zeker vóór een checkpoint).

## Een update uitbrengen

1. Pas `index.html` aan (of laat een nieuwe versie maken).
2. Open `sw.js` en verhoog het versienummer bovenin: `module-monitor-v1` wordt
   `module-monitor-v2`, enzovoort.
3. Upload beide bestanden opnieuw naar dezelfde plek.

Studenten krijgen de nieuwe versie automatisch de eerstvolgende keer dat ze de
app openen met internet. Hun ingevulde gegevens blijven gewoon staan.

## Later toch naar de app stores?

Wil je op termijn in de Google Play Store of Apple App Store staan, dan is deze
PWA het juiste vertrekpunt. Met **pwabuilder.com** (van Microsoft, gratis) vul je
de link van je PWA in en krijg je kant-en-klare pakketten voor beide stores.
Houd dan rekening met een Google Play-account (eenmalig ca. 25 dollar), een Apple
Developer-account (ca. 99 dollar per jaar) en het reviewproces van Apple.
