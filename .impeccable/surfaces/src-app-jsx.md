---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: ["index.html","src/components","src/data","src/ruffle"]
---

# Surface brief — Reaksa Arcade portal (SPA)

Scope: single-page React app — home catalog view + game player view. Visitor mode: Experience leading to Operate (the artifact leads; the play task stays frictionless).

Audience: Flash-era nostalgia players on desktop and mobile. Job: find a game (search / category / random) and play it in-browser via Ruffle in under three interactions. Proof: real openly-licensed SWFs that actually load and play; named classics present with honest "cartridge not included" states. Constraints: Ruffle from unpkg CDN; SWF path `games/${gameId}.swf`; graceful failure whenever Ruffle, WebAssembly, or the SWF is unavailable.

## Direction contract

THESIS: An arcade hall at night — every game card is a backlit cabinet marquee, and opening a game inserts a coin into a CRT that powers on. Refuses the generic dark-streaming grid of identical rounded cards with one accent.

OWN-WORLD: void-dark blue-violet ground (#0D0D14-ish) as the dark hall, chassis panels, coin-gold (#FFC53D) as the single big action color, and the full arcade category palette (red / orange / cyan / green) coded functionally into tags and marquee plates; Press Start 2P bitmap voice for display moments over Chakra Petch for UI text; the player sits in a drawn CRT bezel with scanlines (the screen is the actual object, so the texture is earned); every thumbnail is an authored pixel-sprite plate; controls rendered as keycaps. Recognizable with all content removed: dark hall + gold coin moments + 4:3 CRT marquees.

STORY: visitor lands in the lit hall, reads the attract ticker, pulls a cabinet (filter / search / random), the CRT powers on, they play; below the screen the instruction card shows the keycaps; adjacent cabinets invite the next coin.

FIRST VIEWPORT: sticky chassis nav — pixel logo, search, category chips, gold Random Game button; beneath it a compact attract strip (blinking INSERT-coin ticker, hall stats, primary CTA); then the cabinet grid immediately — 4:3 marquee thumbnails with play-count badges and category tags. No marketing hero.

FORM: Retro-modern hybrid — brief-pinned (GamesLOL/Newgrounds heritage; user confirmed hybrid register), position 1 on the ordered list (alternates were: faithful 2000s chrome recreation, modern minimal arcade). Seed key: none — brief-pinned direction, no roll.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Signature interaction

CRT power-on: on player mount, the screen flickers from phosphor-off to scanline-on (one orchestrated moment, `prefers-reduced-motion` respected). Card hover = marquee light-up.

## Unresolved decisions

None blocking; play counts are synthetic demo data (disclosed in footer).
