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

  "kof-vs-dnf": {
    w: 24,
    h: 18,
    bg: "#0e1a12",
    palette: {
      t: "#1c3a24", // jungle canopy
      T: "#2a5233", // canopy light
      k: "#1a1a26", // hero hair + trousers
      s: "#f4c9a0", // skin
      W: "#e8e8f2", // Kyo's white gi
      g: "#3fa96b", // gremlin shade
      G: "#6ee7a0", // gremlin body
      y: "#ffc53d", // ki spark
      F: "#4a3524", // floor edge
      f: "#2e2016", // floor
    },
    rows: [
      "........................",
      "........................",
      "........................",
      "tttttttttttttttttttttttt",
      "TtTtTtTtTtTtTtTtTtTtTtTt",
      "tttttttttttttttttttttttt",
      "....kk.........gg...gg..",
      "....ss........gGGg..gGGg",
      "...kWWk.......gGGg..gGGg",
      "...WWWk..y...ggggg..gggg",
      "...W.WW......g..g..g..g.",
      "........................",
      "FFFFFFFFFFFFFFFFFFFFFFFF",
      "ffffffffffffffffffffffff",
      "ffffffffffffffffffffffff",
      "ffffffffffffffffffffffff",
      "ffffffffffffffffffffffff",
      "ffffffffffffffffffffffff",
    ],
  },

  "fancy-pants-2": {
    w: 24,
    h: 18,
    bg: "#1b2a44",
    palette: {
      w: "#e9f2fd", // clouds
      y: "#ffc53d", // sun
      s: "#f4c9a0", // skin + hair spikes
      r: "#ff9f43", // the orange pants
      g: "#3fa96b", // grass
      G: "#2b7a4c", // hill shade
    },
    rows: [
      "..............yyyy......",
      ".............yyyyyy.....",
      "..ww..........yyyy..www.",
      ".wwww...............wwww",
      "........................",
      "......ss................",
      ".....ssss...............", // spiky hair
      ".....ssss...............", // head
      "......rr................", // pants
      ".....rrrr...............", // running torso
      "....rr..r...............", // legs mid-stride
      "...r.....r..............",
      "........................",
      "gggggggggggggggggggggggg",
      "gggggggggggggggggggggggg",
      "GGGGGGGGGGGGGGGGGGGGGGGG",
      "GGGGGGGGGGGGGGGGGGGGGGGG",
      "GGGGGGGGGGGGGGGGGGGGGGGG",
    ],
  },

  "age-of-war": {
    w: 24,
    h: 18,
    bg: "#171224",
    palette: {
      y: "#ffc53d", // sun
      c: "#6b5b45", // cave silhouette
      C: "#4a3d2c", // cave shade
      w: "#e8e8f2", // marching units
      t: "#3a3a4e", // future tower
      T: "#4a4a63", // tower light
      F: "#37304a", // ground edge
      f: "#241f33", // ground
    },
    rows: [
      "........................",
      ".............y..........",
      "........................",
      "..cc..................tt",
      ".cccc.................tt",
      ".ccCCC..............ttTT",
      "ccCCCCC......w......ttTT",
      "ccCCCCC..w...w..w...ttTT",
      "ccCCCCC..w...w..w.w.ttTT",
      "cCCCCCCC.w...w..w.w.ttTT",
      "cCCCCCCC........w...ttTT",
      "........................",
      "FFFFFFFFFFFFFFFFFFFFFFFF",
      "ffffffffffffffffffffffff",
      "ffffffffffffffffffffffff",
      "ffffffffffffffffffffffff",
      "ffffffffffffffffffffffff",
      "ffffffffffffffffffffffff",
    ],
  },

  "happy-wheels": {
    w: 24,
    h: 18,
    bg: "#101726",
    palette: {
      s: "#f4c9a0", // rider skin
      w: "#e8e8f2", // rider body + chair
      R: "#4a4a63", // ramp surface
      r: "#3a3a4e", // ramp body
      a: "#9aa0b5", // spikes
      F: "#2a2e44", // floor edge
      f: "#1c1f2e", // floor
    },
    rows: [
      "........................",
      "........................",
      "........................",
      ".....ss.................",
      "....swws................",
      "....www.................",
      "...ww.ww................",
      "..RRR...................",
      "...RRRR.................",
      "....RRRRR...............",
      ".....RRRRRR.............",
      "......RRRRRRR.a.a.a.a...",
      ".......RRRRRRRa.a.a.a...",
      "FFFFFFFFFFFFaFaFaFaFaFFF",
      "ffffffffffffffffffffffff",
      "ffffffffffffffffffffffff",
      "ffffffffffffffffffffffff",
      "ffffffffffffffffffffffff",
    ],
  },

  "raze-2": {
    w: 24,
    h: 18,
    bg: "#0d1420",
    palette: {
      s: "#8f86c9", // stars
      w: "#e8e8f2", // soldier armor
      g: "#9aa0b5", // rifle
      y: "#ffc53d", // muzzle flash
      v: "#b36bff", // alien
      V: "#7a4fc0", // alien shade
      m: "#3a3a4e", // platforms
      M: "#26262f", // platform underside
    },
    rows: [
      "..s.....s......s.....s..",
      "........................",
      "........................",
      "........................",
      "..................vv....",
      "....ww............vVv...",
      "...w ww..g.......vvvv...",
      "...wwww..gy.......v.....",
      "....ww............v.....",
      "...w..w...........vv....",
      "..w....w........mmvmmm..",
      "................MMMMMMM.",
      "mmmmmmmm...........M....",
      "MMMMMMMMM...............",
      "........................",
      "........................",
      "........................",
      "........................",
    ],
  },

  "electric-man-2": {
    w: 24,
    h: 18,
    bg: "#14141f",
    palette: {
      w: "#e8e8f2", // stickman
      e: "#4fc3f7", // electric arcs
      E: "#8fdcff", // arc highlights
      F: "#34344c", // floor edge
      f: "#23232f", // floor
    },
    rows: [
      "........................",
      "........................",
      "........................",
      ".....e..................",
      "....e.e..........e......",
      "......www.......e.e.....",
      "....e.w.w.e....e.e......",
      ".....www.e......e.......",
      "....e.www.............e.",
      "......w.w............e..",
      "......w...w..........e..",
      ".....w.....w............",
      "........................",
      "FFFFFFFFFFFFFFFFFFFFFFFF",
      "ffffffffffffffffffffffff",
      "ffffffffffffffffffffffff",
      "ffffffffffffffffffffffff",
      "ffffffffffffffffffffffff",
    ],
  },

  "bloxorz": {
    w: 24,
    h: 18,
    bg: "#0e1420",
    palette: {
      s: "#8f86c9", // stars
      b: "#ffc53d", // block
      B: "#d99a06", // block shade
      t: "#2a2a3a", // tile light
      T: "#1e1e2c", // tile dark
    },
    rows: [
      "..s.....s......s.....s..",
      "........................",
      "..........bb............",
      "..........bB............",
      "..........bB............",
      "..........bB............",
      "..........bb............",
      "..........bb............",
      "........................",
      "...tTtTtTtTtTtTtTtTtT...",
      "...TtTtTtTtTtTtTtTtTt...",
      "...tTtTtTtTtTtTtTtTtT...",
      "...TtTtTtTtTtTtTtTtTt...",
      "...tTtTtTtTtTtTtTtTtT...",
      "........................",
      "........................",
      "........................",
      "........................",
    ],
  },

  "impossible-quiz": {
    w: 24,
    h: 18,
    bg: "#181020",
    palette: {
      b: "#2a1e3d", // panel
      B: "#4a3570", // panel border
      w: "#f4f4fa", // question mark
      y: "#ffc53d", // wrong-answer ticks
      r: "#ff5a5f", // wrong cross
    },
    rows: [
      "..BBBBBBBBBBBBBBBBBBBB..",
      "..B..................B..",
      "..B....wwww...........B.",
      "..B...w....w..........B.",
      "..B........w..........B.",
      "..B.......w...........B.",
      "..B.......w...........B.",
      "..B...................B.",
      "..B.......w...........B.",
      "..B...................B.",
      "..B...................B.",
      "..B..y....y....y...y..B.",
      "..BBBBBBBBBBBBBBBBBBBBB.",
      "....r...............r...",
      "...r.r.............r.r..",
      "....r...............r...",
      "...r.r.............r.r..",
      "........................",
    ],
  },

  "learn-to-fly-2": {
    w: 24,
    h: 18,
    bg: "#1b2a44",
    palette: {
      w: "#e9f2fd", // clouds
      p: "#23232f", // penguin
      P: "#f4f4fa", // belly
      y: "#ffc53d", // beak
      i: "#bcd9f5", // ice ramp
      I: "#8fb8e0", // ramp shade
      s: "#f4f4fa", // snow floor
    },
    rows: [
      "....www.................",
      "...wwwww.........www....",
      "........................",
      "...pp...................",
      "...pPp..................",
      "..pPyPp.................",
      "..pPPp.....i............",
      "...pp.....iii...........",
      "..........iiiii.........",
      ".........iiiiiii........",
      "........iiiiiiiii.......",
      ".......IIIIIIIIIII......",
      "ssssssssssssssssssssssss",
      "ssssssssssssssssssssssss",
      "ssssssssssssssssssssssss",
      "ssssssssssssssssssssssss",
      "ssssssssssssssssssssssss",
      "ssssssssssssssssssssssss",
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
