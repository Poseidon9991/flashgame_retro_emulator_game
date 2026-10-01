/**
 * Authored pixel-sprite plates — one per cabinet, 24×18 cells (4:3, like the
 * 640×480 games themselves). '.' is the plate background; every other char
 * maps to a palette color. Rendered as run-length-merged SVG rects by
 * <PixelThumb>, so they stay crisp at any card size.
 */

export const SPRITES = {
  "kof-wing": {
    w: 24,
    h: 18,
    bg: "#2b0d12",
    palette: {
      b: "#241016", // arena backdrop band
      r: "#ff5a5f", // left fighter gi
      s: "#f4c9a0", // skin
      k: "#1a1a26", // belt
      W: "#e8e8f2", // right fighter gi
      c: "#4fc3f7", // right fighter sash
      y: "#ffc53d", // impact spark
      F: "#3d1620", // arena floor edge
      f: "#1a0a0d", // arena floor
    },
    rows: [
      "........................",
      "........................",
      "........................",
      "bbbbbbbbbbbbbbbbbbbbbbbb",
      "bbbbbbbbbbbbbbbbbbbbbbbb",
      "bbbbbbbbbbbbbbbbbbbbbbbb",
      "bbbbbbbbbbbbbbbbbbWWbbbb",
      "....rr..............ss..",
      "....ss..........WWWWW...",
      "...rrrr.....y.y..WWWW...",
      "...rrkrrr....y...WWcW...",
      "...rrrr..........WWWW...",
      "...rr.rrr........WW..WW.",
      "...rr.rr.........WW..WW.",
      "........................",
      "FFFFFFFFFFFFFFFFFFFFFFFF",
      "ffffffffffffffffffffffff",
      "ffffffffffffffffffffffff",
    ],
  },

  "super-smash-flash": {
    w: 24,
    h: 18,
    bg: "#101726",
    palette: {
      s: "#6b74a8", // stars
      w: "#ffffff", // smash ball
      r: "#ff5a5f", // brawler 1 / smash cross
      c: "#4fc3f7", // brawler 2
      y: "#ffc53d", // platform top
      Y: "#d99a06", // platform underside
    },
    rows: [
      "..s.....s......s.....s..",
      "........................",
      "........................",
      "...........www..........",
      "...........wrw..........",
      "...........www..........",
      ".......rrr..............",
      ".......rsr..............",
      ".......rrr.....ccc......",
      ".......r.r.....csc......",
      "...............ccc......",
      "...............c.c......",
      "....yyyyyyyyyyyyyyyy....",
      "....YYYYYYYYYYYYYYYY....",
      "........................",
      "....s.........s......s..",
      "........................",
      "........................",
    ],
  },

  "stick-war": {
    w: 24,
    h: 18,
    bg: "#2b1b3d",
    palette: {
      u: "#2b1b3d", // dusk upper band
      v: "#1f1330", // dusk lower band
      w: "#ffffff", // stickmen
      y: "#ffc53d", // spear tips + statue
      Y: "#d99a06", // statue shade
      W: "#3a3a4e", // castle silhouette
      t: "#101018", // castle openings
      G: "#241a38", // ground edge
      g: "#171126", // ground
    },
    rows: [
      "uuuuuuuuuuuuuuuuuuuuuuuu",
      "uuuuuuuuuuuuuuuuuuuuuuuu",
      "uuuuuuuuuuuuuuuuuuuuuuuu",
      "uuuuuuuuuuuuuuuuuuuuuuuu",
      "uuuuuuuuuuuuuuuuuuuuuuuu",
      "uuuuyuuyuuyyyyyuuuuuuuuu",
      "vvvvwvvwvwyyyyvvvvvvvvvv",
      "vvvvwvvwvwyYYyvvvvvvvvvv",
      "vvwvvwvvwvyYYyvvvWvWvWvv",
      "vvwvvwvvwvyYYyvvvWWWWWWv",
      "vvwvvwvvwvyYYyvvvWWttWWv",
      "vvwvvwvvwvyYYyvvvWWttWWv",
      "vwvwwvwwvwyYYyvvvWWttWWv",
      "vvvvvvvvvvYYYYvvvWWttWWv",
      "GGGGGGGGGGGGGGGGGGGGGGGG",
      "gggggggggggggggggggggggg",
      "gggggggggggggggggggggggg",
      "gggggggggggggggggggggggg",
    ],
  },

  galagian: {
    w: 24,
    h: 18,
    bg: "#0d0716",
    palette: {
      s: "#8f86c9", // stars
      e: "#ff5a5f", // bug raider
      E: "#7e2227", // bug core
      v: "#b36bff", // violet raider
      V: "#57307a", // violet core
      c: "#4fc3f7", // ship hull
      w: "#ffffff", // cockpit
      g: "#ffc53d", // shots
    },
    rows: [
      "..s.....s......s.....s..",
      "........................",
      "..eee..eee..eee..eee....",
      "..eEe..eEe..eEe..eEe....",
      "..eee..eee..eee..eee....",
      "........................",
      "....vvv....vvv....vvv...",
      "....vVv....vVv....vVv...",
      "....vvv....vvv....vvv...",
      ".s........s.........s...",
      ".....g............g.....",
      "......s.......s.........",
      "........................",
      "........................",
      "..........cc............",
      "..........cwc...........",
      ".........ccwcc..........",
      "..........ccc...........",
    ],
  },

  asteroidase: {
    w: 24,
    h: 18,
    bg: "#0d0716",
    palette: {
      s: "#8f86c9",
      a: "#9aa0b5", // rock light
      A: "#5c6274", // rock shade
      c: "#4fc3f7", // hull
      w: "#ffffff", // cockpit
    },
    rows: [
      "..s.....s......s.....s..",
      ".....s..........s......s",
      "..aaaa..................",
      ".aAAaaa.................",
      ".aAAaaa..........aaaaa..",
      "..aaaa..........aAAaa...",
      "................aAAaaa..",
      ".................aaaa...",
      "...........c............",
      "..........cwc...........",
      "..........cwc...........",
      ".........ccwcc..........",
      "...aaaaa..ccccc.........",
      "..aAAaaa..ccc...........",
      "..aAAaaa................",
      "...aaaaa..........aaa...",
      "...................Aa...",
      "...s..........s........s",
    ],
  },

  slimower: {
    w: 24,
    h: 18,
    bg: "#101018",
    palette: {
      p: "#3a3a4e", // platform tops
      P: "#26262f", // platform bodies
      r: "#ff5a5f", // hero cap / jacket
      w: "#ffffff", // hero body
      y: "#ffc53d", // muzzle flash + shot
      g: "#6ee7a0", // slime
      G: "#3fa96b", // slime shade
      a: "#9aa0b5", // turret
    },
    rows: [
      "........................",
      "........................",
      "........................",
      "........................",
      "........................",
      "........................",
      "........................",
      "........................",
      "............gwg.........",
      ".........aa..ggg........",
      "........ppppppppp.......",
      "........PPPPPPPPP.......",
      "...rrr..................",
      "...www....y.......gwg...",
      "...wrwyy..........ggg...",
      "...w.w............gGg...",
      "pppppppppppppppppppppppp",
      "PPPPPPPPPPPPPPPPPPPPPPPP",
    ],
  },

  kulkis: {
    w: 24,
    h: 18,
    bg: "#120a1e",
    palette: {
      W: "#2a2a3a", // shaft walls
      r: "#ff5a5f", // red blocks
      c: "#4fc3f7", // cyan blocks
      g: "#7cfc9a", // green blocks
      o: "#ff9f43", // orange blocks
      w: "#ffffff", // ball highlight
      b: "#c9c9d9", // ball shade
    },
    rows: [
      "WW....................WW",
      "WW....................WW",
      "WW....................WW",
      "WW....................WW",
      "WW..rrrrrr............WW",
      "WW..rrrrrr............WW",
      "WW..cccccc............WW",
      "WW..cccccc............WW",
      "WW..gggggg............WW",
      "WW............oooooo..WW",
      "WW..........wboooooo..WW",
      "WW..........bwoooooo..WW",
      "WW............rrrrrr..WW",
      "WW............cccccc..WW",
      "WW....................WW",
      "WW....................WW",
      "WW....................WW",
      "WW....................WW",
    ],
  },

  weirdtris: {
    w: 24,
    h: 18,
    bg: "#0e1420",
    palette: {
      W: "#2a2a3a", // well frame
      y: "#ffc53d", // gold blocks
      c: "#4fc3f7", // cyan blocks
      v: "#b36bff", // purple blocks
      r: "#ff5a5f", // red blocks
      w: "#ffffff", // match flash
    },
    rows: [
      ".W....................W.",
      ".W....................W.",
      ".W....................W.",
      ".W........vvv.........W.",
      ".W.........v..........W.",
      ".W.........v..........W.",
      ".W....................W.",
      ".W....................W.",
      ".W....................W.",
      ".W....................W.",
      ".W....................W.",
      ".W....................W.",
      ".W..............rrr...W.",
      ".W..yy..........rrr...W.",
      ".W..yy...ccc....vvv...W.",
      ".W..yy...www....vvv...W.",
      ".W.......ccc....rrr...W.",
      ".WWWWWWWWWWWWWWWWWWWWWW.",
    ],
  },

  rockrush: {
    w: 24,
    h: 18,
    bg: "#6b4a2b",
    palette: {
      d: "#6b4a2b", // dirt
      D: "#57391f", // dirt shade
      t: "#1a120b", // tunnel
      a: "#9aa0b5", // boulder light
      A: "#5c6274", // boulder shade
      c: "#4fc3f7", // diamonds
      w: "#ffffff", // hero
      x: "#ffc53d", // exit frame
    },
    rows: [
      "dDdddddddddddDdddddddddD",
      "dddddddddDddddddddddDddd",
      "dDdddddddddddddddddddddd",
      "ddddddddddtttddddddxtxdd",
      "ddddddddddaAaddddddxtxdd",
      "ddddddddddAaAddddddxtxdd",
      "ddddddddddaaaddddddddddD",
      "ddddddddddtttddddddddddd",
      "ddttttttttttttttttttttdd",
      "ddttwwttttttttttctctttdd",
      "ddttttttttttttttttttttdd",
      "dddddddddDdddddddddddddd",
      "dDdddddddddddddddddddddd",
      "ddttttttttdddddddddddddd",
      "ddttttctttDddddddddddddd",
      "ddttttttttdddddddddddddd",
      "dddddddddddddddDdddddddd",
      "dDdddddddddddddddddddddd",
    ],
  },

  squario2: {
    w: 24,
    h: 18,
    bg: "#3a6ea8",
    palette: {
      k: "#3a6ea8", // sky
      w: "#e9f2fd", // clouds
      B: "#c97b3d", // brick
      b: "#8a4e22", // brick seams
      P: "#3fa96b", // pipe
      p: "#2b7a4c", // pipe shade
      r: "#ff5a5f", // hero cap + body
      s: "#ffd9b0", // hero face
      y: "#ffc53d", // coin
      n: "#a05a28", // enemy
    },
    rows: [
      "kkkkkkkkkkkkkkkkkkkkkkkk",
      "kkkkkkkkkkkkkkkkkkkkkkkk",
      "kkkkwwwwwwkkkkkkkkkkkkkk",
      "kkkwwwwwwwwkkkkkkkkkkkkk",
      "kkkkkkkkkkkkkkkwwwwwwkkk",
      "kkkkkkkkkkkkkkwwwwwwwwkk",
      "kkkkkkkkkkkkkkkkkkkkkkkk",
      "kkkkkkkkkkkkykkkkkkkkkkk",
      "kkkkrrrkkkkkkkkkkPPPPPPk",
      "kkkksbskkkkkkkkkkkPpppkk",
      "kkkkrrrkkkkknnnkkkPpppkk",
      "kkkkr.rkkkkkn.nkkkPpppkk",
      "BBBBBBBBBBBBBBBBBBBBBBBB",
      "bBBBBBbBBBBBbBBBBBbBBBBB",
      "BBbBBBBBBbBBBBBBbBBBBBBb",
      "bBBBBBbBBBBBbBBBBBbBBBBB",
      "BBbBBBBBBbBBBBBBbBBBBBBb",
      "BBBBBBBBBBBBBBBBBBBBBBBB",
    ],
  },

  galaxus: {
    w: 24,
    h: 18,
    bg: "#0a0f1e",
    palette: {
      s: "#8f86c9",
      e: "#ffc53d", // raider hulls
      E: "#ff5a5f", // raider wings
      w: "#ffffff", // ship hull
      c: "#4fc3f7", // cockpit + shots
    },
    rows: [
      "..s.....s......s.....s..",
      "........................",
      "...........ee...........",
      "..........eEEe..........",
      ".........eEeeEe.........",
      "........eEe..eEe........",
      ".......eEe....eEe.......",
      "......eEe......eEe......",
      "........................",
      ".s........s.........s...",
      "...........cc...........",
      "........................",
      "......s.......s.........",
      "........................",
      "..........ww............",
      "..........wcw...........",
      ".........wwcww..........",
      "....s..........s......s.",
    ],
  },

  trapdoorer: {
    w: 24,
    h: 18,
    bg: "#14141c",
    palette: {
      W: "#3a3a4e", // room walls
      t: "#23232f", // light tile
      T: "#1a1a26", // dark tile
      w: "#ffffff", // agent
      r: "#ff5a5f", // button
      h: "#0a0a10", // open trapdoor
      y: "#ffc53d", // hinge + exit
      x: "#0e1420", // exit doorway
    },
    rows: [
      "WWWWWWWWWWWWWWWWWWWWWWWW",
      "WtTtTtTtTtTtTtTtTtTtTtTW",
      "WTtTtTtTtTtTtTtTtTtTtTtW",
      "WtTtTtTtTtTtTtTtTtTxxxTW",
      "WTtTtTtTtTtTtTtTtTtxtxtW",
      "WtTtTtTtTtTtTtTtTtTxxxTW",
      "WTtTtTtTtTtTtTtTtTtTtTtW",
      "WtTtTtTtTtTtTtTtTtTtTtTW",
      "WTtTtTwwtTtTtTtTtTtTtTtW",
      "WtTtTtwwTtTtTtTtTtTtTtTW",
      "WTtTtTwwtTtTtTtTtTtTtTtW",
      "WtTtTtTtTtTtTtTtTtTtTtTW",
      "WTtTtTtTyhhhtTtrrTtTtTtW",
      "WtTtTtTthhhhTtTrrtTtTtTW",
      "WTtTtTtTtTtTtTtTtTtTtTtW",
      "WtTtTtTtTtTtTtTtTtTtTtTW",
      "WTtTtTtTtTtTtTtTtTtTtTtW",
      "WWWWWWWWWWWWWWWWWWWWWWWW",
    ],
  },
};
