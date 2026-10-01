import { useEffect, useRef } from "react";
import { CATEGORIES, categoryCount } from "../data/games.js";
import { SearchIcon, DiceIcon, JoystickIcon } from "./Icons.jsx";
import { useI18n } from "../i18n/index.js";

function LangSwitch() {
  const { lang, setLang, t } = useI18n();
  return (
    <div
      role="group"
      aria-label={t("nav.langLabel")}
      className="flex shrink-0 items-center gap-0.5 self-start rounded-lg border border-edge-2 bg-chassis-2 p-1 lg:self-auto"
    >
      {[
        ["en", "EN"],
        ["km", "ខ្មែរ"],
      ].map(([id, label]) => (
        <button
          key={id}
          type="button"
          onClick={() => setLang(id)}
          aria-pressed={lang === id}
          className={`h-9 min-w-10 rounded-md px-2.5 text-xs font-bold transition-colors duration-150 ${
            lang === id ? "bg-coin text-[#221500]" : "text-mist hover:text-ink"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default function NavBar({ query, onQuery, category, onCategory, onRandom, inPlayerView }) {
  const searchRef = useRef(null);
  const { t } = useI18n();

  // "/" anywhere (outside a field) jumps to search — arcade-fast.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "/" && !e.ctrlKey && !e.metaKey && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-edge bg-chassis/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:gap-6">
        {/* Logo + wordmark */}
        <a
          href="#/"
          className="flex shrink-0 items-center gap-3 self-start"
          aria-label={t("nav.logoAria")}
        >
          <JoystickIcon size={30} />
          <span className="pixel text-sm text-ink">
            <span className="text-coin">REAKSA</span> ARCADE
          </span>
        </a>

        {/* Search — always visible, arcade-fast */}
        <div className="relative min-w-0 flex-1">
          <SearchIcon
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-mist"
          />
          <input
            ref={searchRef}
            type="search"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder={t("nav.searchPlaceholder")}
            aria-label={t("nav.searchAria")}
            className="h-11 w-full rounded-lg border border-edge-2 bg-chassis-2 pl-9 pr-10 text-sm text-ink placeholder:text-mist/80 focus:border-coin focus:outline-none focus:ring-1 focus:ring-coin"
          />
          <kbd
            className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded border border-edge-2 bg-chassis px-1.5 py-0.5 text-[10px] text-mist md:block"
            aria-hidden="true"
          >
            /
          </kbd>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {/* Random game */}
          <button
            type="button"
            onClick={onRandom}
            className="btn-coin shrink-0 self-start lg:self-auto"
            title={t("nav.randomTitle")}
          >
            <DiceIcon size={17} />
            <span className="hidden sm:inline">{t("nav.random")}</span>
            <span className="sm:hidden">{t("nav.randomShort")}</span>
          </button>

          <LangSwitch />
        </div>
      </div>

      {/* Category rail */}
      <nav
        aria-label={t("nav.filterAria")}
        className="mx-auto max-w-6xl overflow-x-auto px-4 pb-3 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex min-w-max items-center gap-2">
          {CATEGORIES.map((c) => {
            const pressed = category === c.id;
            return (
              <button
                key={c.id}
                type="button"
                className="chip"
                style={pressed ? { "--chip-color": c.color } : undefined}
                aria-pressed={pressed}
                onClick={() => {
                  onCategory(c.id);
                  if (inPlayerView) window.location.hash = "#/";
                }}
              >
                <span className="dot" style={{ "--chip-color": c.color }} aria-hidden="true" />
                {c.id === "All" ? t("nav.allGames") : t(`cat.${c.id}`)}
                <span className="tabular-nums opacity-70">{categoryCount(c.id)}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
