# Vacanze Ema e Stefy — Contesto del progetto

## Chi siamo
- Ema e Stefy, vicini ai 60 anni
- Cane: **Bibi**, cucciolo di Bulldog francese (viene sempre in vacanza)
- Stile di vacanza: relax totale, niente stress, niente folla — soprattutto Stefy ha bisogno di staccare completamente

## Vacanza 2026 — Costa Azzurra
- **Dove**: Les Issambres (tra Sainte-Maxime e Saint-Raphaël, vicino a Saint-Tropez)
- **Casa**: Villa Goonie — 80 Av. de la Vigie, 83380 Les Issambres. Proprietario: François. Piscina e vista mare, affittata interamente.
- **Quando**: 27 giugno — 8 luglio 2026
- **Partenza da**: Castronno (VA) — tutto in una volta in auto
- **Auto**: Land Rover Discovery Sport

## Come passiamo il tempo
- Gran parte del tempo in villa, in piscina
- Spiaggia pochissimo (cane + preferenza per la piscina)
- Ci si muove poco, zona già conosciuta
- Non si fanno attività impegnative

---

## Struttura dell'app

### Navigazione
- **Home** — dashboard con 12 widget + sezione Note in fondo
- **Meteo** — previsioni dettagliate + vento + alba/tramonto (back → Home)
- **Checklist** — lista pre-partenza (back → Home)
- **Zona** — 4 sub-tab: Mercati | Negozi | Aperitivi | Ristoranti (back → Home)
- **Info** — carburante + contatti utili + link Google Maps distributori (back → Home)
- **Maltempo** — lista attività al coperto (back → Home)
- **Spiagge** — 6 spiagge vicine con info e Maps (back → Home)
- **Spese** — tracker spese con totale (back → Home)
- **Lista spesa** — lista della spesa con checkbox (back → Home)
- Header con titolo cliccabile → Home (sempre visibile)
- Nessuna barra di navigazione inferiore

### Home — 12 widget + Note
| Widget | Contenuto | Destinazione |
|--------|-----------|--------------|
| ✈️ Countdown | giorni/ore alla partenza | — |
| ✅ Checklist | % completamento | → Checklist |
| 🌤 Meteo | temperatura + descrizione + vento inline | → Meteo |
| 🛒 Mercato oggi | mercato del giorno | → Zona/Mercati |
| ⛽ Gasolio | prezzo IT vs FR | → Info |
| 🍽 Ristoranti | conteggio + dog-friendly | → Zona/Ristoranti |
| 🛍 Negozi | pesce · carne · frutta · pasticcerie · panetterie | → Zona/Negozi |
| 🥂 Aperitivi | conteggio locali | → Zona/Aperitivi |
| 🌧 Se piove | conteggio idee al coperto | → Maltempo |
| 🏖 Spiagge | conteggio spiagge | → Spiagge |
| 💶 Spese | totale € + n. voci | → Spese |
| 🛒 Lista spesa | voci da prendere | → Lista spesa |
| 📝 Note | campo testo + lista note con data/ora | (in home) |

---

## Dati Les Issambres

### Mercati (8)
- Les Issambres: lun mattina + notturno gio/dom (solo estate)
- Saint-Tropez: mar/sab
- Sainte-Maxime: ven mattina + notturno tutti i giorni (solo estate)
- Saint-Raphaël: mer-dom mattina + antiquariato mer + artigianato dom

### Supermercati (4)
- Intermarché Les Issambres · Carrefour Sainte-Maxime · Super U Saint-Raphaël · Leclerc Fréjus

### Aperitivi (5)
- L'Arpillon — Les Issambres · `04 98 21 92 50`
- La Joya Bay — Les Issambres · `04 94 17 53 84`
- Café de Paris — Saint-Tropez · `04 94 97 00 56`
- Le Sporting — Saint-Tropez · `04 94 97 00 65`
- Bar du Port — Sainte-Maxime (tel non trovato)

### Ristoranti (10) + Pizzerie (4)
**Ristoranti:**
- La Réserve Gayrard · Le Maïva Plage · Le Bistrot du Provençal (Les Issambres)
- Palma Plage · Martinus · Le Ponton (Saint-Aygulf, 8 km)
- Les Tourelles · Chez Vous (Sainte-Maxime, 15 km)
- Le Bistrot Du Coin · Le Bistrot du Port (Grimaud/Port Grimaud, 20 km)

**Pizzerie:**
- Pizza FanFan · Pizza Gusto (Les Issambres)
- Pizzas du Golfe · Chez Longu (Sainte-Maxime, 15 km)

### Negozi (12)
- 🐟 Pescherie (2): Poissonnerie Delmar (Les Issambres) · Poissonnerie du Golfe (Sainte-Maxime)
- 🥦 Frutta/verdura (1): La Grande Bastide (Roquebrune-sur-Argens)
- 🥩 Macellerie (3): Boucherie des Issambres · Boucherie Chez Thierry (Saint-Aygulf) · Boucherie du Marché (Sainte-Maxime)
- 🍰 Pasticcerie (2): La Tarte Tropézienne · Pâtisserie de la Tour (Les Issambres)
- 🥖 Panetterie (4): Jérôme & Emilie (Les Issambres) · Les Boulangeries du Soleil (Saint-Aygulf) · Maître Julien (Sainte-Maxime) · Boulangerie Boulaire (Saint-Raphaël)

### Spiagge (6)
- Gaillarde (0.3 km) — libera, bar, no cani
- Gaillarde Ovest (0.5 km) — libera, **cani ok**, no bar
- San Peire (0.8 km) — libera, bar, no cani
- Gireliers (1.5 km) — libera, no bar, no cani
- Saint-Aygulf (8 km) — libera, bar, no cani
- Sainte-Maxime (9 km) — libera, bar, no cani

### Contatti utili (Info)
- Villa Goonie François — campo editabile (salvato in localStorage)
- Emergenze: SAMU 15 · Police 17 · Pompiers 18 · EU 112
- Vet: Clinique de l'Argens, Roquebrune `04 98 11 82 31`
- Farmacia: Pharmacie Mola `04 94 96 91 25` · lun-sab 8:30–19:00
- Taxi du Port 24h `06 42 86 73 36`
- Taxi Raphael `04 94 44 08 76`
- Traghetto Les Bateaux Verts `04 94 49 29 39` · Port des Issambres → Saint-Tropez ~35 min · A/R €18,30 · prenotazione: resa.bateauxverts.com

### Regole per Bibi
- Guinzaglio obbligatorio ovunque
- Spiagge vietate ai cani giugno–settembre
- Supermercati: cani non ammessi
- Microchip + vaccinazione antirabbica obbligatori per entrare in Francia

### Maltempo (5 attività al coperto)
- Museo dell'Annunciata (Saint-Tropez) · Cittadella · Mercato coperto Saint-Raphaël · Fréjus romana · Shopping Sainte-Maxime

---

## Checklist pre-partenza

13 categorie, ~42 item. Stato salvato in localStorage.
Sezione **Aggiunte** in fondo: voci custom aggiungibili/modificabili/eliminabili dall'app.

Categorie: Casa · Auto · Documenti · Cibo · Bibi · Spiaggia e Piscina · Vestiti · Libri e Svago · Tecnologia · DJ · Fotografia · Medicine · Beauty

---

## Note tecniche

### File principali
- `index.html` — struttura PWA, 9 sezioni, 12 widget home + Note
- `js/app.js` — stato, navigazione, countdown, contatti editabili
- `js/weather.js` — meteo Open-Meteo + calcolo astronomico alba/tramonto
- `js/fuel.js` — carburante IT (6 waypoint tragitto) + FR (6 waypoint tragitto)
- `js/checklist.js` — checklist con localStorage + sezione Aggiunte custom
- `js/zona.js` — mercati, negozi (con panetterie), aperitivi, ristoranti, regole cane, maltempo
- `js/notes.js` — note con data/ora, persistenza localStorage, conferma eliminazione
- `js/spese.js` — tracker spese con totale, conferma eliminazione
- `js/listaspesa.js` — lista spesa con checkbox, svuota con conferma
- `js/spiagge.js` — 6 spiagge con info e link Maps
- `css/style.css` — design responsive mobile-first
- `sw.js` — service worker cache-first (v28)
- `manifest.json` — PWA manifest

### API usate
- **Meteo**: Open-Meteo (gratuita, no chiave) — `api.open-meteo.com`
- **Carburante IT**: API community MIMIT — 6 waypoint Castronno→Ventimiglia, raggio 15km, self-service
- **Carburante FR**: API governo francese — 6 waypoint Menton→Les Issambres, raggio 15km
- **Alba/Tramonto**: calcolo astronomico offline (formula NOAA), nessuna API
- Le API carburante richiedono HTTPS o localhost (non funzionano su `file://`)

### URL produzione (GitHub Pages)
```
https://emanu926.github.io/vacanze-es/
```
Repository: `https://github.com/emanu926/vacanze-es`

### Server locale per sviluppo
```
cd "Les Issambres"
python -m http.server 8765
```
Aprire su `http://127.0.0.1:8765` — dopo ogni modifica fare **Ctrl+Shift+R** per bypassare il service worker.

### localStorage
| Chiave | Contenuto |
|--------|-----------|
| `checklist` | stato checked degli item `{id: boolean}` |
| `checklist_custom` | voci aggiunte dall'utente `[{id, text}]` |
| `contatto-villa` | numero telefono François (editabile in-app) |
| `vacation-notes` | note `[{text, ts}]` |
| `vacation-spese` | spese `[{motivo, importo, ts}]` |
| `vacation-listaspesa` | lista spesa `[{testo, fatto}]` |

---

## Stato costruzione

### ✅ Completato
- PWA con service worker, manifest, icona SVG
- Navigazione: header cliccabile + back button in ogni sezione (no nav bar)
- Home con 12 widget + sezione Note in fondo
- Meteo con vento inline nel widget (Open-Meteo API)
- Pagina meteo con card oggi (+ alba/tramonto calcolati offline), card vento, previsioni 7 giorni
- Prezzi carburante IT vs FR con badge consiglio — media sul tragitto reale (6 waypoint per parte)
- Link "Trova distributore vicino" → Google Maps
- Checklist 13 categorie + sezione Aggiunte con add/edit/delete
- Sezione Zona con 4 sub-tab: Mercati, Negozi (pesce/carne/frutta/pasticcerie/panetterie), Aperitivi, Ristoranti
- Ristoranti separati da Pizzerie
- Negozi raggruppati per categoria con telefoni e Maps
- Contatti editabili in-app salvati in localStorage
- Regole per Bibi in sezione Info
- Sezione Maltempo con widget dedicato in home
- Sezione Spiagge (6 spiagge) con badge cani/bar/libera e link Maps
- Tracker spese con totale automatico e conferma eliminazione
- Lista della spesa con checkbox, conferma rimozione singola, svuota tutto e bottone **📤 Condividi** (WhatsApp/iMessage)
- Note libere con data/ora e conferma eliminazione
- App installata su iPhone come PWA — `https://emanu926.github.io/vacanze-es/`
- Campi di testo a 16px per evitare zoom automatico di Safari su iPhone
- Traghetto Les Bateaux Verts in sezione Info: link prenotazione + orari + telefono + prezzi (Port des Issambres → Saint-Tropez)
- Bottone **📤 Condividi spese** in sezione Spese (navigator.share con fallback clipboard — funziona su HTTPS/PWA)

### 🔲 Da fare (futuro)
- Sincronizzazione checklist/note/spese tra i due iPhone (richiede backend, es. Supabase)
- Widget meduse (Meduseo API) — presenza meduse in tempo reale
- Mappa offline (Leaflet.js + tile OSM cachate per la zona)
- Sezione eventi in zona durante il periodo di vacanza

### 📋 Modello di lavoro per nuove vacanze
Questa cartella è un'istanza specifica (Les Issambres 2026). Per ogni nuova vacanza si duplica la cartella e si aggiornano:
- Coordinate (`LAT`/`LON` in `weather.js`, waypoint in `fuel.js`)
- Data partenza in `app.js`
- Dati locali in `zona.js` e `spiagge.js` (mercati, ristoranti, negozi, spiagge)
- Nome villa e contatti in `index.html`
- Versione cache in `sw.js`

Le località già visitate si conservano nella loro cartella — si riparte da lì aggiornando solo date e dati cambiati.

---
*Ultimo aggiornamento: 19 giugno 2026*
