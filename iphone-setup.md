# Come usare l'app su iPhone — GitHub Pages

## 1. Crea un account GitHub (se non ce l'hai)
Vai su https://github.com e registrati.

## 2. Crea un nuovo repository
- Clicca **New** (o il `+` in alto a destra → New repository)
- Nome: `vacanze-es` (o come vuoi)
- Visibilità: **Public** (necessario per GitHub Pages gratis)
- Clicca **Create repository**

## 3. Carica i file
Nella pagina del repository appena creato:
- Clicca **uploading an existing file**
- Trascina tutti i file e cartelle del progetto:
  - `index.html`
  - `css/` (cartella)
  - `js/` (cartella con tutti i file: app, weather, fuel, checklist, zona, notes, spese, listaspesa, spiagge)
  - `icons/` (cartella)
  - `manifest.json`
  - `sw.js`
- In basso scrivi un messaggio tipo "prima versione" e clicca **Commit changes**

## 4. Attiva GitHub Pages
- Vai su **Settings** (tab in alto nel repository)
- Nel menu a sinistra: **Pages**
- Source: **Deploy from a branch**
- Branch: **main** — cartella: **/ (root)**
- Clicca **Save**

Dopo 1-2 minuti il sito è live all'indirizzo:
```
https://TUONOME.github.io/vacanze-es
```

## 5. Installa come app su iPhone
1. Apri **Safari** su iPhone (deve essere Safari, non Chrome)
2. Vai all'indirizzo GitHub Pages
3. Tocca l'icona **Condividi** (quadrato con freccia in su)
4. Scorri e tocca **"Aggiungi a schermata Home"**
5. Conferma con **Aggiungi**

L'app appare sulla schermata home come un'icona vera, si apre a schermo intero senza barra del browser.

## 6. Aggiornare l'app dopo modifiche
Quando carichi nuovi file su GitHub:
1. Apri Safari e vai sull'URL GitHub Pages
2. Tira giù per ricaricare (**force refresh**)
3. Chiudi e riapri dall'icona sulla schermata home

Il service worker si aggiorna automaticamente quando la versione `CACHE` in `sw.js` cambia.
Se la pagina non si aggiorna, prova: Impostazioni → Safari → Cancella cronologia e dati.

## 7. Sviluppo locale (PC)
```
cd "Vacanze Ema e Stefy"
python -m http.server 8765
```
Aprire `http://127.0.0.1:8765` nel browser.
Dopo ogni modifica fare **Ctrl+Shift+R** (hard refresh) per bypassare la cache del service worker.

## Note
- Le API meteo e carburante funzionano perché GitHub Pages usa HTTPS
- I dati personali (note, spese, lista spesa, contatti, checklist) sono salvati localmente sul dispositivo (localStorage) — non escono mai dal telefono
- Se usi due iPhone, i dati sono indipendenti (non sincronizzati tra dispositivi)
- Alba e tramonto vengono calcolati offline — funzionano anche senza internet
