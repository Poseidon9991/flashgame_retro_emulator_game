import { useEffect, useRef, useState } from "react";
import { relatedGames } from "../../data/games.js";
import { CATEGORIES } from "../../data/games.js";
import { BRAND, useI18n } from "../../i18n/index.js";
import RufflePlayer from "./RufflePlayer.jsx";
import ControlsBar from "./ControlsBar.jsx";
import GameInfo from "./GameInfo.jsx";
import GameCard from "../GameCard.jsx";
import { BackIcon } from "../Icons.jsx";

function categoryColor(id) {
  return CATEGORIES.find((c) => c.id === id)?.color ?? "#a3a3b8";
}

export default function PlayerView({ game, onRandom }) {
  const { t } = useI18n();
  const [theater, setTheater] = useState(false);
  const [playerStatus, setPlayerStatus] = useState(null);
  const apiRef = useRef(null);

  useEffect(() => {
    document.title = `${game.title} — ${BRAND}`;
    window.scrollTo(0, 0);
    return () => {
      document.title = `${BRAND} — Flash Games, Reborn`;
    };
  }, [game.id]);

  const related = relatedGames(game);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      {/* Breadcrumb / title row */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <a
          href="#/"
          className="btn-ghost h-10 px-3.5 text-sm"
          aria-label={t("player.backAria")}
        >
          <BackIcon size={16} />
          {t("player.back")}
        </a>
        <div className="min-w-0">
          <h1 className="truncate text-xl font-bold leading-tight text-ink">{game.title}</h1>
          <p className="mt-1 text-xs text-mist">
            {game.author}, {game.year} —{" "}
            {game.available ? t("player.cartLoaded") : t("player.cartMissing")}
          </p>
        </div>
      </div>

      {/* The cabinet */}
      <div className={`stage ${theater ? "stage-theater" : ""}`}>
        <div className="bezel">
          <div key={game.id} className="bezel-screen crt-scanlines crt-on">
            <RufflePlayer
              game={game}
              apiRef={apiRef}
              onRandom={onRandom}
              onStatusChange={setPlayerStatus}
            />
          </div>
          <ControlsBar
            apiRef={apiRef}
            theater={theater}
            onTheater={() => setTheater((t) => !t)}
            disabled={playerStatus === null || playerStatus === "error"}
          />
        </div>
      </div>

      {!theater && (
        <>
          <GameInfo game={game} />

          {/* Adjacent cabinets */}
          <section aria-label={t("player.relatedAria")} className="mt-12">
            <div className="mb-4 flex items-baseline justify-between gap-4">
              <h2 className="pixel text-[11px] text-ink">
                {t("player.moreFloor")}
                <span className="ml-3 text-mist" style={{ color: categoryColor(game.category) }}>
                  {t("player.catFirst", { cat: t(`cat.${game.category}`) })}
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {related.map((g) => (
                <GameCard key={g.id} game={g} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
