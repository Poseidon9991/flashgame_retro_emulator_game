import { useEffect, useRef, useState } from "react";
import { loadRuffle, webAssemblySupported } from "../../lib/ruffle.js";
import { swfUrl } from "../../data/games.js";
import { CartridgeIcon, CubeIcon, WarnIcon, DiceIcon } from "../Icons.jsx";
import { useI18n } from "../../i18n/index.js";

/**
 * Owns the Ruffle lifecycle for one cabinet:
 * boot → (wasm check) → (script load) → player create → swf load → ready.
 * Every failure maps to a friendly panel — never a dead gray box.
 *
 * apiRef is populated with { restart, toggleFullscreen } for the controls bar.
 */
export default function RufflePlayer({ game, apiRef, onRandom }) {
  const { t } = useI18n();
  const hostRef = useRef(null);
  const playerElRef = useRef(null);
  const [status, setStatus] = useState(game.available ? "boot" : "error");
  const [errorKind, setErrorKind] = useState(game.available ? null : "cartridge");
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    if (!game.available) return; // cartridge panel is a pure render state

    let cancelled = false;
    const host = hostRef.current;
    setStatus("boot");
    setErrorKind(null);

    async function start() {
      try {
        if (!webAssemblySupported()) {
          throw new Error("wasm");
        }
        const ruffle = await loadRuffle();
        if (cancelled) return;

        const player = ruffle.createPlayer();
        playerElRef.current = player;
        host.replaceChildren(player);

        // Ruffle's load() doesn't reject on an HTTP miss — it renders its own
        // error inside the shadow root — so we preflight the URL ourselves to
        // keep the friendly panel in charge of every failure state.
        const loadSwf = async (p) => {
          const res = await fetch(swfUrl(game), { cache: "force-cache" });
          if (!res.ok) throw new Error(`swf-http-${res.status}`);
          await p.load(swfUrl(game));
        };

        apiRef.current = {
          restart: async () => {
            const p = playerElRef.current;
            if (!p) return;
            setStatus("loading");
            try {
              await loadSwf(p);
              setStatus("ready");
              p.focus?.();
            } catch {
              setStatus("error");
              setErrorKind("swf");
            }
          },
          toggleFullscreen: () => {
            const p = playerElRef.current;
            if (p && typeof p.toggleFullscreen === "function") {
              p.toggleFullscreen();
              return;
            }
            const el = host.parentElement;
            if (document.fullscreenElement) {
              document.exitFullscreen?.();
            } else {
              el?.requestFullscreen?.();
            }
          },
        };

        setStatus("loading");
        await loadSwf(player);
        if (cancelled) return;
        setStatus("ready");
        player.focus?.();
      } catch (err) {
        if (cancelled) return;
        setStatus("error");
        if (err?.message === "wasm") setErrorKind("wasm");
        else if (err?.message === "ruffle-cdn" || err?.message === "ruffle-no-api") setErrorKind("cdn");
        else setErrorKind("swf");
      }
    }

    start();

    return () => {
      cancelled = true;
      apiRef.current = null;
      playerElRef.current = null;
      host?.replaceChildren();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.id, retryKey]);

  const retry = () => setRetryKey((k) => k + 1);

  return (
    <>
      {/* The emulator mounts here imperatively */}
      {game.available && <div ref={hostRef} className="player-host" />}

      {(status === "boot" || status === "loading") && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-5 bg-[#06060a]">
          <p className="pixel text-center text-[10px] text-coin">
            {t("player.loading")}
            <span className="blink">_</span>
          </p>
          <div className="load-bar" aria-hidden="true" />
          <p className="font-mono text-[11px] text-mist/70">{swfUrl(game)}</p>
        </div>
      )}

      {status === "error" && (
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-[#08070c] px-6 text-center"
          role="alert"
        >
          {errorKind === "cartridge" ? (
            <>
              <CartridgeIcon size={34} className="text-ember" />
              <p className="pixel text-[10px] text-ember">{t("player.panel.cartridgeTitle")}</p>
              <p className="max-w-md text-sm leading-relaxed text-mist">
                {t("player.panel.cartridgeP1")}{" "}
                <code className="rounded bg-chassis-2 px-1.5 py-0.5 text-xs text-ink">
                  games/{game.id}.swf
                </code>
                {t("player.panel.cartridgeP2")}{" "}
                <code className="rounded bg-chassis-2 px-1.5 py-0.5 text-xs text-ink">
                  public/games/
                </code>{" "}
                {t("player.panel.cartridgeP3")}
              </p>
            </>
          ) : errorKind === "wasm" ? (
            <>
              <CubeIcon size={34} className="text-p2" />
              <p className="pixel text-[10px] text-p2">{t("player.panel.wasmTitle")}</p>
              <p className="max-w-md text-sm leading-relaxed text-mist">
                {t("player.panel.wasmBody")}
              </p>
            </>
          ) : errorKind === "cdn" ? (
            <>
              <WarnIcon size={34} className="text-coin" />
              <p className="pixel text-[10px] text-coin">{t("player.panel.cdnTitle")}</p>
              <p className="max-w-md text-sm leading-relaxed text-mist">
                {t("player.panel.cdnBody")}
              </p>
            </>
          ) : (
            <>
              <WarnIcon size={34} className="text-coin" />
              <p className="pixel text-[10px] text-coin">{t("player.panel.swfTitle")}</p>
              <p className="max-w-md text-sm leading-relaxed text-mist">
                {t("player.panel.swfP1")}{" "}
                <code className="rounded bg-chassis-2 px-1.5 py-0.5 text-xs text-ink">
                  games/{game.id}.swf
                </code>{" "}
                {t("player.panel.swfP2")}
              </p>
            </>
          )}

          <div className="mt-1 flex flex-wrap items-center justify-center gap-3">
            {errorKind !== "cartridge" && errorKind !== "wasm" && (
              <button type="button" onClick={retry} className="btn-ghost h-10 text-sm">
                {t("player.tryAgain")}
              </button>
            )}
            <button type="button" onClick={onRandom} className="btn-coin h-10 text-sm">
              <DiceIcon size={15} />
              {t("player.randomEscape")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
