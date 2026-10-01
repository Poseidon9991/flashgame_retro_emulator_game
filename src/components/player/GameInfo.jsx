import { CATEGORIES } from "../../data/games.js";
import { ArrowIcon, MouseIcon } from "../Icons.jsx";
import { useI18n } from "../../i18n/index.js";

function categoryColor(id) {
  return CATEGORIES.find((c) => c.id === id)?.color ?? "#a3a3b8";
}

function Keycap({ children, wide }) {
  return (
    <span className={`keycap ${wide ? "min-w-[4.5rem]" : ""}`}>{children}</span>
  );
}

/** WASD and arrow sets get the classic plus-shape cluster. */
function MoveCluster({ keys }) {
  const isWasd = keys.length === 4 && keys.join("") === "WASD";
  const isArrows = keys.length === 1 && keys[0] === "ARROWS";
  if (!isWasd && !isArrows) {
    return (
      <span className="flex flex-wrap gap-1.5">
        {keys.map((k) => (
          <Keycap key={k}>{k}</Keycap>
        ))}
      </span>
    );
  }
  return (
    <span className="flex flex-col items-center gap-1">
      {isWasd ? <Keycap>W</Keycap> : <Keycap><ArrowIcon dir="up" /></Keycap>}
      <span className="flex gap-1.5">
        {isWasd ? (
          <>
            <Keycap>A</Keycap>
            <Keycap>S</Keycap>
            <Keycap>D</Keycap>
          </>
        ) : (
          <>
            <Keycap><ArrowIcon dir="left" /></Keycap>
            <Keycap><ArrowIcon dir="down" /></Keycap>
            <Keycap><ArrowIcon dir="right" /></Keycap>
          </>
        )}
      </span>
    </span>
  );
}

function ControlRow({ control }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 py-3">
      <span className="min-w-[9.5rem] text-sm font-semibold text-mist">{control.action}</span>
      <span className="flex items-center gap-4">
        {control.keys && control.keys.length > 0 && <MoveCluster keys={control.keys} />}
        {control.mouse && (
          <Keycap wide={false}>
            <MouseIcon button={control.mouse === "left" ? "left" : undefined} size={13} />
          </Keycap>
        )}
      </span>
    </div>
  );
}

export default function GameInfo({ game }) {
  const { t } = useI18n();
  return (
    <section aria-label={t("player.howtoAria", { title: game.title })} className="panel mt-10 overflow-hidden">
      {/* Card header strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-edge bg-chassis-2/60 px-5 py-3.5">
        <h2 className="pixel text-[10px] text-ink">{t("player.howto")}</h2>
        <div className="flex items-center gap-1.5">
          {game.tags.map((tag) => (
            <span key={tag} className="tag" style={{ "--tag-color": categoryColor(tag) }}>
              {t(`cat.${tag}`)}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-0 md:grid-cols-[1.1fr_1fr]">
        {/* Instructions */}
        <div className="border-b border-edge px-5 py-4 md:border-b-0 md:border-r">
          <p className="max-w-prose text-[15px] leading-relaxed text-ink/90">{game.tagline}</p>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-mist">
            {game.instructions}
          </p>
          <p className="mt-5 border-t border-edge/70 pt-3 text-xs leading-relaxed text-mist/80">
            {game.credit}, {game.year}
          </p>
        </div>

        {/* Controls layout */}
        <div className="px-5 py-2">
          <h3 className="pixel py-2 text-[9px] text-coin">{t("player.controls")}</h3>
          <div className="divide-y divide-edge/60">
            {game.controls.map((c) => (
              <ControlRow key={c.action} control={c} />
            ))}
          </div>
          {game.toggles.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-edge/60 py-3.5">
              <span className="text-xs font-semibold text-mist">{t("player.ingameToggles")}</span>
              {game.toggles.map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-mist">
                  <span className="keycap keycap-sm">{t.split(" ")[0]}</span>
                  {t.split(" ").slice(1).join(" ")}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
