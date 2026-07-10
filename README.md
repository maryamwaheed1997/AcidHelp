# Acidhelp.com

Non-profit emergency response prototype for acid attack survivors in Pakistan.
Vanilla HTML + CSS + JS — no framework, no build step.

## Project structure

```
acidhelp-project/
├── index.html       # Shell — links styles.css + app.js, mounts <div id="root">
├── styles.css       # Global styles + animations
├── app.js           # All UI, state, translations, map, form logic
├── images/          # Photos and logo
│   ├── logo.png
│   ├── hero.jpg
│   ├── psychological.jpg
│   ├── medical.jpg
│   ├── legal.jpg
│   └── employment.jpg
├── package.json     # Optional — for `npm start` with live-server
└── README.md
```

## Running it

You need a local web server (opening `index.html` directly from Finder/Explorer
won't work because browsers block CDN scripts on `file://`).

### Option A — VS Code Live Server extension (easiest)

1. Open this folder in VS Code: `File → Open Folder…`
2. Install the "Live Server" extension by Ritwick Dey (Extensions panel).
3. Right-click `index.html` → **Open with Live Server**.
4. Site opens at `http://127.0.0.1:5500/`.

### Option B — Node / npx

```bash
cd acidhelp-project
npx live-server
```

### Option C — Python

```bash
cd acidhelp-project
python3 -m http.server 8080
# then open http://localhost:8080
```

## Editing

- **Design tokens** (colours, fonts): top of `app.js`, in `C`, `HEAD_FF`, `BODY_FF`.
- **Copy for each language** (English, Urdu, Roman Urdu, Pashto): the `T` object in `app.js`.
- **Hospitals**: `HOSPITALS` array in `app.js`.
- **Photos**: drop replacements into `images/` with the same filenames.
- **Animations & hover states**: `styles.css`.

## Notes

- Leaflet and Google Fonts load from CDNs; internet needed on first load.
- The "near me" button uses `navigator.geolocation`, which requires HTTPS or
  localhost — Live Server on `127.0.0.1` works.
- Supports English, Urdu, Roman Urdu, and Pashto with RTL handling.
