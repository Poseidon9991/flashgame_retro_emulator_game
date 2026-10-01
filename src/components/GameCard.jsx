import { CATEGORIES, formatPlays } from "../data/games.js";
import PixelThumb from "./PixelThumb.jsx";
import { PlayIcon } from "./Icons.jsx";
import { useI18n } from "../i18n/index.js";

function categoryColor(id) {
  return CATEGORIES.find((c) => c.id === id)?.color ?? "#a3a3b8";
}

export default function GameCard({ game }) {
  const { t } = useI18n();

  return (
    <a
      href={`#/game/${game.id}`}
      className={`cabinet ${game.available ? "cabinet-lit" : "cabinet-dark"} group`}
      aria-label={
        game.available
          ? t("card.ariaLit", {
              title: game.title,
              year: game.year,
              author: game.author,
              plays: formatPlays(game.plays),
            })
          : t("card.ariaDark", { title: game.title, year: game.year, author: game.author })
      }
    >
      {/* Marquee plate — a 4:3 CRT-shaped screen */}
      <div className="plate aspect-[4/3] border-b border-edge bg-void">
        <PixelThumb id={game.id} />

        {game.available ? (
          <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
            <span className="pixel flex items-center gap-2 rounded-md border border-coin-deep bg-coin px-3 py-2 text-[10px] text-[#221500]">
              <PlayIcon size={13} />
              {t("card.play")}
            </span>
          </span>
        ) : (
          <span
            className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
            aria-hidden="true"
          >
            <span className="pixel rounded-md border border-ember/70 bg-void/85 px-3 py-2 text-[9px] text-ember">
              {t("card.noCart")}
            </span>
          </span>
        )}
      </div>

      {/* Marquee title bar */}
      <div className="flex items-baseline justify-between gap-2 px-3 pt-2.5">
        <h3 className="truncate text-[15px] font-semibold leading-tight text-ink">{game.title}</h3>
        <span className="shrink-0 text-xs tabular-nums text-mist">{game.year}</span>
      </div>

      {/* Plays + category tags */}
      <div className="flex flex-wrap items-center gap-1.5 px-3 pb-3 pt-2">
        {game.available ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tabular-nums text-phosphor">
            <PlayIcon size={11} />
            {t("card.plays", { n: formatPlays(game.plays) })}
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ember">
            {t("card.cartMissing")}
          </span>
        )}
        <span className="ml-auto flex gap-1.5">
          {game.tags.map((tag) => (
            <span key={tag} className="tag" style={{ "--tag-color": categoryColor(tag) }}>
              {t(`cat.${tag}`)}
            </span>
          ))}
        </span>
      </div>
    </a>
  );
}
