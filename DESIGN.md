# DESIGN.md — Reaksa Arcade visual system

Extracted from the built world (`src/index.css`, `src/components/`). The source
of truth is the CSS; this file describes it so future work stays on-brand.

## Atmosphere

An arcade hall after midnight. Everything lives on deep navy-black surfaces;
color is emitted, not painted — coin gold, phosphor green, CRT cyan, ember
orange read as light sources against the dark. The interface is an arcade
floor: games are **cabinets**, game files are **cartridges**, the player is a
CRT screen in a bezel.

## Color tokens

| Token | Value | Role |
|---|---|---|
| `void` | `#0c0c13` | Page background |
| `hall` | `#101019` | Raised floor surfaces |
| `chassis` / `chassis-2` | `#15151f` / `#1d1d2a` | Card & panel bodies |
| `edge` / `edge-2` | `#262636` / `#34344c` | Hairline borders, hover edge |
| `coin` / `coin-deep` | `#ffc53d` / `#9a6d00` | The ONE action color — primary buttons, focus rings, live states |
| `ember` | `#ff9f43` | Warnings, Fighting category |
| `p1` | `#ff5a5f` | Action category |
| `p2` | `#4fc3f7` | Puzzle category, info accents |
| `phosphor` | `#7cfc9a` | Classics category, play-count badges |
| `ink` | `#f4f4fa` | Primary text |
| `mist` | `#a3a3b8` | Secondary text (7.6:1 on void — AA verified) |

Rules: `coin` is reserved for actions and live status — never decorative text.
Category colors are functional coding (tags, badges, floor accents), not
decoration. No gradients on text, no glow shadows, no light theme.

## Typography

- **Display**: `Press Start 2P` (pixel, `.pixel` class) — headings, buttons,
  badges, status readouts. Always `letter-spacing: 0.03em`, `line-height 1.6`,
  never below ~10px.
- **UI/body**: `Chakra Petch` — all readable copy, instructions, metadata.
- Keycaps (`.keycap`) render control bindings as physical keys; `ARROWS`,
  `NUMPAD`, `SPACE` are spelled out, not glyph-substituted.

## Signature components

- **Cabinet card** (`a.cabinet`): chassis body, pixel-art plate thumbnail,
  phosphor play badge, category-color tag chips. Dark cabinets
  (`a.cabinet-dark`) render dimmed with a "no cartridge" state.
- **CRT screen** (`bezel-screen`): 4:3 aspect stage, `crt-scanlines` overlay,
  `crt-on` power-on flash per game mount. Ruffle mounts inside imperatively.
- **Coin button** (`.btn-coin`): gold, dark text, the only filled button style.
- **Keycap cluster**: rendered per-game from `controls[]` data.
- **Error panels**: one absolute-inset panel over the screen, four variants —
  `cartridge` (dark cabinet), `wasm`, `cdn`, `swf` — each with retry and/or
  a random-game escape.

## Motion

Fast and discrete — 150–250ms ease, `transform`/`opacity` only. CRT power-on
and the loading-bar sweep are the authored set-pieces. Theater mode snaps
instantly (no layout animation). `prefers-reduced-motion` kills all of it.

## Browser chrome

Selection, scrollbar, focus rings are themed (coin focus outline, void-track
scrollbar). Touch targets ≥ 44px on interactive controls, ≥ 36px on chips.
