import { useCallback, useMemo, useState } from "react";
import { useHashRoute } from "./lib/router.js";
import { GAMES, filterGames, findGame } from "./data/games.js";
import { useI18n } from "./i18n/index.js";
import NavBar from "./components/NavBar.jsx";
import AttractStrip from "./components/AttractStrip.jsx";
import GameCard from "./components/GameCard.jsx";
import Footer from "./components/Footer.jsx";
import PlayerView from "./components/player/PlayerView.jsx";
import { SearchIcon } from "./components/Icons.jsx";

function HomeView({ query, category, catalog, onClearFilters, onRandom }) {
  const { t } = useI18n();
  const catLabel = t(`cat.${category}`);
  const catSuffix = category !== "All" ? t("home.inCat", { cat: catLabel }) : "";

  return (
    <>
      <AttractStrip onRandom={onRandom} />

      <main id="floor" className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h1 className="pixel text-sm text-ink">
            {t("home.floor")}
            {category !== "All" && <span className="text-mist"> — {catLabel}</span>}
          </h1>
          <p aria-live="polite" className="text-sm text-mist">
            {t("home.showing", { shown: catalog.length, total: GAMES.length })}
          </p>
        </div>

        {catalog.length === 0 ? (
          <div className="panel flex flex-col items-center gap-4 px-6 py-14 text-center">
            <SearchIcon size={30} className="text-mist" />
            <p className="pixel text-[10px] text-ink">{t("home.emptyTitle")}</p>
            <p className="max-w-sm text-sm leading-relaxed text-mist">
              {t("home.emptyBody", { q: query.trim(), catSuffix })}
            </p>
            <button type="button" onClick={onClearFilters} className="btn-ghost h-10 text-sm">
              {t("home.clear")}
            </button>
          </div>
        ) : (
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {catalog.map((game) => (
              <li key={game.id}>
                <GameCard game={game} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export default function App() {
  const { route } = useHashRoute();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const catalog = useMemo(() => filterGames(GAMES, { query, category }), [query, category]);
  const game = route.view === "game" ? findGame(route.id) : null;

  const pickRandomAndGo = useCallback(() => {
    // Random means instant play, so the coin drops in a lit cabinet.
    const lit = GAMES.filter((g) => g.available);
    const pick = lit[Math.floor(Math.random() * lit.length)];
    if (pick) window.location.hash = `#/game/${pick.id}`;
  }, []);

  const clearFilters = useCallback(() => {
    setQuery("");
    setCategory("All");
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar
        query={query}
        onQuery={setQuery}
        category={category}
        onCategory={setCategory}
        onRandom={pickRandomAndGo}
        inPlayerView={Boolean(game)}
      />

      {game ? (
        <main className="flex-1">
          <PlayerView game={game} onRandom={pickRandomAndGo} />
        </main>
      ) : route.view === "game" ? (
        /* Unknown game id in the hash — show the floor instead */
        <main className="flex-1">
          <HomeView
            query={query}
            category={category}
            catalog={catalog}
            onClearFilters={clearFilters}
            onRandom={pickRandomAndGo}
          />
        </main>
      ) : (
        <main className="flex-1">
          <HomeView
            query={query}
            category={category}
            catalog={catalog}
            onClearFilters={clearFilters}
            onRandom={pickRandomAndGo}
          />
        </main>
      )}

      <Footer />
    </div>
  );
}
