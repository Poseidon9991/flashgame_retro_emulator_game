# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite (user-selected), Tailwind CSS permitted by brief, Ruffle emulator loaded from unpkg CDN (`@ruffle-rs/ruffle`) for SWF playback. SWF assets served from `games/` at the repo root.

## Users

Retro Flash-game fans (late-20s to 40s nostalgia audience plus curious younger players) opening the portal on desktop or mobile browsers to instantly replay the kind of games they played on GamesLOL / Newgrounds-era sites. Job: find a game fast (search / category / random) and play it in-browser with no plugins.

## Product Purpose

A game portal whose catalog of preserved Flash titles plays in the browser via Ruffle (WebAssembly Flash emulation), replacing the dead Flash plugin. Success: a visitor goes from landing to playing a chosen game in under three interactions, on both desktop and mobile.

## Positioning

Plugin-free Flash playback with a curated, categorize­d catalog and a purpose-built player view (fullscreen, restart, theater mode) — not a bare file list.

## Operating Context

Static SPA served over http:// (Ruffle cannot fetch SWFs from file://). SWF path convention: `games/${gameId}.swf`. Ruffle is loaded from CDN; if the CDN, WebAssembly, or the SWF file fails, the player must degrade gracefully with a friendly notice.

## Capabilities and Constraints

- Confirmed: nav bar (logo "RetroArcade", search, category filters Action/Fighting/Puzzle/Classics, Random Game button); catalog grid (thumbnail, title, play-count badge, category tags); sample catalog incl. "The King of Fighters Wing", "Super Smash Flash", "Stick War"; player view with controls bar (Fullscreen, Restart, Theater Mode); under-player game instructions, controls layout (WASD etc.), related games grid; graceful Ruffle/WebAssembly failure fallback; responsive desktop + mobile.
- Constraint: classic titles named in the catalog are copyrighted; demo SWFs must be openly-licensed fetches (user-selected). When a catalog entry's SWF is absent or unloadable, the player shows a graceful notice.
- Undecided: real play counts (demo uses labeled synthetic counts).

## Brand Commitments

Name "Reaksa Arcade" (rebranded from "RetroArcade"; owned by Reaksa Hoeng — portfolio hoengreaksa.vercel.app, GitHub Poseidon9991). UI is bilingual English/Khmer via src/i18n. Visual world pinned by brief and user: retro Flash-portal identity (GamesLOL / Newgrounds heritage) executed as a retro-modern hybrid — arcade/pixel character with modern spacing, accessibility, responsive polish.

## Evidence on Hand

No assets in repo at start. Demo SWFs to be fetched from openly-licensed sources (Ruffle project assets etc.); provenance recorded per file. Play counts and thumbnails for demo titles are synthetic/label-free demo data; no commercial claims.

## Product Principles

1. Landing to play in under three interactions — speed of the original portals, kept.
2. The player is the product: fullscreen, restart, theater mode, keyboard controls documented where the fingers are.
3. Graceful failure everywhere — no plugin-era dead gray boxes.
4. Catalog state and Ruffle lifecycle stay modular and framework-clean.

## Accessibility & Inclusion

Keyboard-navigable UI, visible focus states, 4.5:1 contrast on text, touch targets ≥44px on mobile.
