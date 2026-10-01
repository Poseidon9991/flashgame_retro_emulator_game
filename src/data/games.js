/**
 * Reaksa Arcade catalog.
 *
 * `available: true` games ship an openly-licensed .swf in public/games/.
 * `available: false` games are the era classics the brief asks the catalog to
 * show — their cartridges are copyrighted, so the cabinet stays dark and the
 * player view explains how to light it up (drop games/<id>.swf).
 * Play counts are demo data, disclosed in the footer.
 */

export const CATEGORIES = [
  { id: "All", color: "#ffc53d" },
  { id: "Action", color: "#ff5a5f" },
  { id: "Fighting", color: "#ff9f43" },
  { id: "Puzzle", color: "#4fc3f7" },
  { id: "Classics", color: "#7cfc9a" },
];

export const GAMES = [
  {
    id: "kof-wing",
    title: "The King of Fighters Wing",
    year: 2007,
    author: "FlashWing",
    category: "Fighting",
    tags: ["Fighting", "Classics"],
    plays: 8421703,
    available: true,
    tagline:
      "The fan-made KOF fighter that ruled school computer labs — a huge roster, cancels, and 2-player duels on one keyboard.",
    instructions:
      "Pick a fighter, then fight solo, duel a friend on the same keyboard, or train. Chain light attacks into specials; UIO and JKL map to two attack tiers, and combining keys (U+J, I+K) triggers EX moves.",
    controls: [
      { action: "Move / jump / crouch", keys: ["W", "A", "S", "D"] },
      { action: "Attacks (tier 1)", keys: ["J", "K", "L"] },
      { action: "Attacks (tier 2)", keys: ["U", "I", "O"] },
      { action: "2P move + attack", keys: ["ARROWS", "1", "2", "3"] },
    ],
    toggles: [],
    credit: "FlashWing (kof.flashwing.net) — freeware cartridge, v1.8 build",
  },
  {
    id: "super-smash-flash",
    title: "Super Smash Flash",
    year: 2006,
    author: "McLeodGaming",
    category: "Fighting",
    tags: ["Fighting", "Action"],
    plays: 6188422,
    available: false,
    tagline:
      "Cleod9's legendary browser Smash clone — knock opponents off the stage before they knock you off.",
    instructions:
      "Damage raises your blast percentage; the higher it climbs, the farther you fly when hit. Ring-outs score the KO. Play solo or hand a second set of keys to a friend.",
    controls: [
      { action: "Player 1 move", keys: ["W", "A", "S", "D"] },
      { action: "Player 1 attacks", keys: ["F", "G", "H"] },
      { action: "Player 2 move", keys: ["ARROWS"] },
      { action: "Player 2 attacks", keys: ["NUM 1", "NUM 2", "NUM 3"] },
    ],
    toggles: [],
    credit: "McLeodGaming — cartridge not bundled",
  },
  {
    id: "stick-war",
    title: "Stick War",
    year: 2009,
    author: "Crazy Jay",
    category: "Classics",
    tags: ["Classics", "Action"],
    plays: 5941701,
    available: false,
    tagline:
      "Command a stick-figure nation: mine gold, raise an army of swordsmen, spearmen and mages, and topple the enemy statue.",
    instructions:
      "Balance mining gold with training units, then push the lane and destroy the opposing statue. You can possess any single unit and fight with it directly.",
    controls: [
      { action: "Move / jump", keys: ["W", "A", "S", "D"] },
      { action: "Attack with unit", keys: ["J", "K", "L"] },
      { action: "Mine gold / camera", keys: ["SPACE", "ARROWS"] },
    ],
    toggles: [],
    credit: "Crazy Jay (StickPage) — cartridge not bundled",
  },
  {
    id: "galagian",
    title: "Galagian",
    year: 2008,
    author: "Retrocade.net (Cage)",
    category: "Action",
    tags: ["Action", "Classics"],
    plays: 4120338,
    available: true,
    tagline:
      "A wave-based space shooter with automatic upgrades and pretty high difficulty.",
    instructions:
      "Fly with the mouse and hold fire — your gun upgrades itself as waves clear. Space raises a shield when things get too crowded. Asteroids join in later waves; weave between them.",
    controls: [
      { action: "Steer the ship", mouse: true },
      { action: "Fire", mouse: "left" },
      { action: "Shield", keys: ["SPACE"] },
    ],
    toggles: ["F4 scale", "F9 quality", "F11 fullscreen"],
    credit: "Retrocade.net (Aleksander Kowalczyk) — open archive build",
  },
  {
    id: "asteroidase",
    title: "Asteroidase",
    year: 2010,
    author: "Retrocade.net (Cage)",
    category: "Action",
    tags: ["Action", "Puzzle"],
    plays: 2651180,
    available: true,
    tagline:
      "A miniature survival game of avoiding asteroids while staying close to them.",
    instructions:
      "Dodge the rocks, but don't drift too far — staying near the field is how you score. One hit ends the run, so trade risk for points carefully.",
    controls: [
      { action: "Move", keys: ["ARROWS"] },
      { action: "Music + sound", keys: ["M"] },
    ],
    toggles: ["F4 scale", "F9 quality", "F11 fullscreen"],
    credit: "Retrocade.net (Aleksander Kowalczyk) — open archive build",
  },
  {
    id: "slimower",
    title: "Slimower",
    year: 2011,
    author: "Retrocade.net (Cage)",
    category: "Action",
    tags: ["Action", "Classics"],
    plays: 1988455,
    available: true,
    tagline:
      "A minimal twin-stick platformer shooter — the only enemy is a slime, but it comes in many variants.",
    instructions:
      "Move with the arrows, aim with the mouse and mow down every slime variant. Multiple difficulty levels keep the replays non-zero.",
    controls: [
      { action: "Move", keys: ["ARROWS"] },
      { action: "Aim", mouse: true },
      { action: "Fire", mouse: "left" },
      { action: "Options", keys: ["O"] },
    ],
    toggles: ["S sound", "M music", "F4 scale", "F11 fullscreen"],
    credit: "Retrocade.net (Aleksander Kowalczyk) — open archive build",
  },
  {
    id: "kulkis",
    title: "Kulkis",
    year: 2011,
    author: "Retrocade.net (Cage)",
    category: "Puzzle",
    tags: ["Puzzle", "Action"],
    plays: 2374612,
    available: true,
    tagline:
      "Bounce a ball up and down and destroy every colored block — a fun coffee-breaker you can finish in one sitting.",
    instructions:
      "The ball speeds up and down on its own; steer it left and right to line up breaks. Clear the blocks (or the required amount) to finish each level. Type CLEAR or EXIT if a level stumps you.",
    controls: [
      { action: "Move", keys: ["LEFT", "RIGHT"] },
      { action: "Speed up / down", keys: ["UP", "DOWN"] },
      { action: "Pause", keys: ["P"] },
    ],
    toggles: ["S sound", "M music", "F4 scale", "F11 fullscreen"],
    credit: "Retrocade.net (Aleksander Kowalczyk) — open archive build",
  },
  {
    id: "weirdtris",
    title: "Weirdtris",
    year: 2012,
    author: "Retrocade.net (Cage)",
    category: "Puzzle",
    tags: ["Puzzle", "Classics"],
    plays: 1835904,
    available: true,
    tagline:
      "A peculiar mash-up of Tetris and match-3 with gravity added to the mix.",
    instructions:
      "Place falling blocks to line up three or more of a color and pop them. Think before you place — a bad drop can wedge the well shut. Destroy all blocks (or the required amount) to clear the stage.",
    controls: [
      { action: "Move blocks", keys: ["LEFT", "RIGHT"] },
      { action: "Speed up", keys: ["DOWN"] },
    ],
    toggles: ["F4 scale", "F9 quality", "F11 fullscreen"],
    credit: "Retrocade.net (Aleksander Kowalczyk) — open archive build",
  },
  {
    id: "rockrush",
    title: "Rock Rush",
    year: 2011,
    author: "Retrocade.net (Cage)",
    category: "Puzzle",
    tags: ["Puzzle", "Classics"],
    plays: 1533201,
    available: true,
    tagline:
      "A Boulder Dash clone with mechanics borrowed from Emerald Mine — five levelsets, including exact copies of the first three Boulder Dash games.",
    instructions:
      "Dig through dirt, collect the diamonds, and reach the exit before the timer dies — without getting crushed by the boulders you dislodge. Z snaps grabbable items toward you.",
    controls: [
      { action: "Move / dig", keys: ["ARROWS"] },
      { action: "Snap items", keys: ["Z"] },
      { action: "Restart level", keys: ["R"] },
      { action: "Game speed", keys: ["1", "2", "3"] },
    ],
    toggles: ["S sound", "M music", "F4 scale", "F11 fullscreen"],
    credit: "Retrocade.net (Aleksander Kowalczyk) — open archive build",
  },
  {
    id: "squario2",
    title: "Squario 2",
    year: 2011,
    author: "Retrocade.net (Cage)",
    category: "Classics",
    tags: ["Classics", "Action"],
    plays: 3105577,
    available: true,
    tagline:
      "A platformer directly based on Super Mario — jump around, fire shots, collect coins, reach the end of the stage.",
    instructions:
      "Stomp or shoot the enemies, pocket the coins, and make it to the stage exit without running out of lives. Z jumps, X fires.",
    controls: [
      { action: "Move", keys: ["ARROWS"] },
      { action: "Jump", keys: ["Z"] },
      { action: "Fire", keys: ["X"] },
    ],
    toggles: ["S sound", "M music", "F4 scale", "F11 fullscreen"],
    credit: "Retrocade.net (Aleksander Kowalczyk) — open archive build",
  },
  {
    id: "galaxus",
    title: "Galaxus",
    year: 2011,
    author: "Retrocade.net (Cage)",
    category: "Classics",
    tags: ["Classics", "Action"],
    plays: 2214630,
    available: true,
    tagline:
      "A tiny wave-based space shooter with a shop — slow paced, focused on precision. You only have a single life.",
    instructions:
      "Fly with arrows or mouse, fire with Z or the left button. Every wave pays out — hit Space in the clear to open the shop and spend it on hulls, guns and gadgets. One life only, so precision beats aggression.",
    controls: [
      { action: "Fly", keys: ["ARROWS"], mouse: true },
      { action: "Fire", keys: ["Z"], mouse: "left" },
      { action: "Shop", keys: ["SPACE"] },
      { action: "Options", keys: ["O"] },
    ],
    toggles: ["S sound", "M music", "F4 scale", "F11 fullscreen"],
    credit: "Retrocade.net (Aleksander Kowalczyk) — open archive build",
  },
  {
    id: "trapdoorer",
    title: "Trapdoorer",
    year: 2009,
    author: "Retrocade.net (Cage)",
    category: "Puzzle",
    tags: ["Puzzle", "Classics"],
    plays: 1284462,
    available: true,
    tagline:
      "Drop all trapdoors and reach the exit — with a twist of buttons, special floors, bombs and fragile walls.",
    instructions:
      "Walk the grid with the numpad; every tile you leave collapses behind you. Hit every trapdoor, press the buttons, then exit. Backspace (or U) undoes a move when a floor falls the wrong way.",
    controls: [
      { action: "Move", keys: ["NUMPAD"] },
      { action: "Undo", keys: ["BACKSPACE", "U"] },
      { action: "Exit level", keys: ["P"] },
    ],
    toggles: ["S sound", "M music", "F4 scale", "F11 fullscreen"],
    credit: "Retrocade.net (Aleksander Kowalczyk) — open archive build",
  },
];

export function findGame(id) {
  return GAMES.find((g) => g.id === id) ?? null;
}

export function categoryCount(categoryId) {
  if (categoryId === "All") return GAMES.length;
  return GAMES.filter((g) => g.tags.includes(categoryId) || g.category === categoryId).length;
}

export function filterGames(games, { query, category }) {
  const q = query.trim().toLowerCase();
  return games.filter((g) => {
    const inCategory =
      category === "All" || g.category === category || g.tags.includes(category);
    if (!inCategory) return false;
    if (!q) return true;
    return (
      g.title.toLowerCase().includes(q) ||
      g.author.toLowerCase().includes(q) ||
      g.tagline.toLowerCase().includes(q) ||
      g.tags.some((t) => t.toLowerCase().includes(q))
    );
  });
}

export function relatedGames(game, count = 4) {
  const same = GAMES.filter((g) => g.id !== game.id && g.category === game.category);
  const rest = GAMES.filter((g) => g.id !== game.id && g.category !== game.category).sort(
    (a, b) => b.plays - a.plays
  );
  return [...same, ...rest].slice(0, count);
}

export function formatPlays(plays) {
  if (plays >= 1_000_000) return `${(plays / 1_000_000).toFixed(1)}M`;
  if (plays >= 1_000) return `${Math.round(plays / 1_000)}K`;
  return `${plays}`;
}

export function swfUrl(game) {
  return `${import.meta.env.BASE_URL}games/${game.id}.swf`;
}
