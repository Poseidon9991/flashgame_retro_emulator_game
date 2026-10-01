import { GAMES, formatPlays } from "../data/games.js";
import { CoinIcon, DiceIcon } from "./Icons.jsx";
import { useI18n } from "../i18n/index.js";

/** Deterministic pixel starfield for the attract screen. */
function Starfield() {
  const stars = [];
  let seed = 42;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };
  for (let i = 0; i < 26; i++) {
    stars.push({ x: Math.floor(rand() * 96), y: Math.floor(rand() * 10), o: 0.25 + rand() * 0.55 });
  }
  return (
    <svg
      viewBox="0 0 96 10"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      {stars.map((s, i) => (
        <rect
          key={i}
          x={s.x}
          y={s.y}
          width="1"
          height="1"
          fill="#8f86c9"
          opacity={s.o}
          shapeRendering="crispEdges"
        />
      ))}
    </svg>
  );
}

export default function AttractStrip({ onRandom }) {
  const { t } = useI18n();
  const ready = GAMES.filter((g) => g.available).length;
  const totalPlays = GAMES.reduce((sum, g) => sum + g.plays, 0);

  return (
    <section
      aria-label={t("attract.aria")}
      className="relative overflow-hidden border-y-2 border-coin-deep/70 bg-[#0a0a12]"
    >
      <Starfield />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="flex items-center gap-3">
          <CoinIcon size={22} className="blink shrink-0 text-coin" />
          <p className="pixel text-xs text-coin sm:text-sm">
            INSERT COIN
            <span className="mt-1 block text-[9px] tracking-normal text-mist">
              {t("attract.loaded", { n: ready })}
            </span>
          </p>
        </div>

        <div className="flex items-center justify-between gap-6 md:justify-end">
          <p className="hidden text-right text-xs leading-relaxed text-mist lg:block">
            <span className="block font-semibold tabular-nums text-ink">
              {t("attract.plays", { n: formatPlays(totalPlays) })}
            </span>
            {t("attract.cabinets", { n: GAMES.length })}
          </p>
          <button type="button" onClick={onRandom} className="btn-coin shrink-0">
            <DiceIcon size={17} />
            {t("attract.pressStart")}
          </button>
        </div>
      </div>
    </section>
  );
}
