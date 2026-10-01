# Reaksa Arcade

A retro Flash-game portal in the spirit of GamesLOL and Newgrounds — a neon
arcade floor where every game is a cabinet, and cabinets play real `.swf`
cartridges through the [Ruffle](https://ruffle.rs) emulator. Built by
**Reaksa Hoeng** — [portfolio](https://hoengreaksa.vercel.app) ·
[GitHub](https://github.com/Poseidon9991) ·
[LinkedIn](https://www.linkedin.com/in/hoeng-reaksa-48b5842b3).

**Bilingual: English / ភាសាខ្មែរ** — toggle in the navbar, persisted across
visits, Khmer rendered in Kantumruy Pro.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle → dist/
npm run preview  # serve the built bundle
```

Routes are hash-based: `#/` is the floor, `#/game/<id>` is a cabinet.

## How it works

- **Catalog** (`src/data/games.js`) — every game is a record: id, title,
  year, author, category, tags, play count, tagline, instructions, and a
  keycap-mapped control layout. Filtering and "related games" are pure
  functions over that list.
- **Routing** (`src/lib/router.js`) — `useHashRoute()` watches
  `location.hash`; `#/game/<id>` opens the player view. No router dependency.
- **Emulator** (`src/lib/ruffle.js` + `components/player/RufflePlayer.jsx`) —
  `loadRuffle()` injects `@ruffle-rs/ruffle` from unpkg once. The player
  component is a state machine — `boot → loading → ready | error` — that
  preflights the `.swf` URL itself (Ruffle doesn't reject on HTTP misses), so
  every failure lands on a friendly panel: WASM blocked, CDN unreachable,
  cartridge missing, or cartridge won't load. Each panel offers retry or a
  random-game escape.
- **Controls bar** — Restart (re-loads the SWF), Fullscreen, Theater mode.
- **Thumbnails** (`src/components/sprites.js` + `PixelThumb.jsx`) —
  hand-authored 24×18 pixel-art plates per game, drawn as crisp SVG rects.
- **i18n** (`src/i18n/`) — tiny reactive string table (EN + KM). `t()` does
  dotted-key lookup with `{var}` interpolation and English fallback;
  `useI18n()` re-renders on language change and sets `<html lang>`.

## The cartridges

Ten playable `.swf` files live in `public/games/`. Nine are pulled from
[EvidentlyCube/LegacyGames](https://github.com/EvidentlyCube/LegacyGames) —
Aleksander "Cage" Kowalczyk's own public archive of the freeware games he
released through Retrocade.net. Each game's folder in that repo carries its
readme, source code, and the author's notes. The tenth, *The King of Fighters
Wing* (v1.8, AS2), is FlashWing's freeware build — supply your own copy as
`kof-wing.swf`.

| Cabinet | Source folder in LegacyGames |
|---|---|
| Galagian | `Games/2008-11-01-Galagian` |
| Asteroidase | `Games/2010-02-14-Asteroidase` |
| Slimower | `Games/2011-07-03-Slimower` |
| Kulkis | `Games/2011-04-19-Kulkis2` |
| Weirdtris | `Games/2012-06-02-Weirdtris` |
| Rock Rush | `Games/2011-08-16-RockRush` |
| Squario 2 | `Games/2011-07-06-Squario2` |
| Galaxus | `Games/2011-09-28-Galaxus` |
| Trapdoorer | `Games/2009-11-01-Trapdoorer` |

Two era classics — *Super Smash Flash* and *Stick War* — still ship **dark**:
their SWFs aren't bundled, so their cabinets display a "no cartridge" panel
instead of pretending to play. To light one up, drop its `.swf` into
`public/games/<id>.swf` and flip `available: false → true` in
`src/data/games.js`.

## Adding a game

1. Drop the `.swf` into `public/games/` named `<id>.swf`.
2. Add an entry to `GAMES` in `src/data/games.js` (id, title, year, author,
   category, tags, plays, tagline, instructions, controls).
3. Optionally author a 24×18 sprite plate in `src/components/sprites.js`
   (a generic cabinet plate is the fallback).

## Tech

React 18 · Vite 5 · Tailwind CSS v4 · Ruffle (unpkg CDN) · hash routing ·
Google Fonts (Press Start 2P, Chakra Petch, Kantumruy Pro). No UI kit — every
component and icon is authored in this repo.

## QA scripts

Headless Playwright checks live in `.impeccable/review/` (not part of the app
build). With the dev server running:

```bash
cd .impeccable/review
npm install        # playwright — one time
node qa.mjs        # functional/layout checks
node fallback.mjs  # CDN-down, WASM-off, and SWF-404 panels
node contrast.mjs  # WCAG AA spot audit of the token pairs
```

Notes: the play counts are demo data. Flash audio may need one click to
unmute — browser autoplay policy, not a bug.
