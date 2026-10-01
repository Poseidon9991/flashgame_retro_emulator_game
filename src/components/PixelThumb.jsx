import { SPRITES } from "./sprites.js";

/**
 * Renders an authored pixel-sprite plate as crisp SVG.
 * Horizontal runs of the same color merge into single rects, so a full
 * 24×18 grid costs only a few dozen nodes.
 */
export default function PixelThumb({ id }) {
  const sprite = SPRITES[id];
  if (!sprite) return null;

  const rects = [];
  sprite.rows.forEach((rawRow, y) => {
    const row = rawRow.padEnd(sprite.w, ".").slice(0, sprite.w);
    let x = 0;
    while (x < sprite.w) {
      const ch = row[x];
      let run = 1;
      while (x + run < sprite.w && row[x + run] === ch) run += 1;
      if (ch !== ".") {
        rects.push({ x, y, w: run, fill: sprite.palette[ch] });
      }
      x += run;
    }
  });

  return (
    <svg
      viewBox={`0 0 ${sprite.w} ${sprite.h}`}
      shapeRendering="crispEdges"
      className="block h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0" y="0" width={sprite.w} height={sprite.h} fill={sprite.bg} />
      {rects.map((r) => (
        <rect key={`${r.x}:${r.y}`} x={r.x} y={r.y} width={r.w} height={1} fill={r.fill} />
      ))}
    </svg>
  );
}
