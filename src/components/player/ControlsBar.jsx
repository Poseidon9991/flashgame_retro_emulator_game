import { RestartIcon, TheaterIcon, ExpandIcon, ShrinkIcon } from "../Icons.jsx";
import { useEffect, useState } from "react";
import { useI18n } from "../../i18n/index.js";

export default function ControlsBar({ apiRef, theater, onTheater, disabled }) {
  const { t } = useI18n();
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const onChange = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  return (
    <div className="mt-3 flex items-center gap-2 border-t border-edge/70 pt-3">
      <div className="flex flex-1 flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => apiRef.current?.restart?.()}
          disabled={disabled}
          className="btn-ghost h-10 px-3 text-sm disabled:cursor-not-allowed disabled:opacity-40"
          title={t("player.restartTitle")}
        >
          <RestartIcon size={16} />
          <span className="hidden sm:inline">{t("player.restart")}</span>
        </button>
        <button
          type="button"
          onClick={() => apiRef.current?.toggleFullscreen?.()}
          disabled={disabled}
          className="btn-ghost h-10 px-3 text-sm disabled:cursor-not-allowed disabled:opacity-40"
          title={t("player.fullscreenTitle")}
        >
          {fullscreen ? <ShrinkIcon size={16} /> : <ExpandIcon size={16} />}
          <span className="hidden sm:inline">{t("player.fullscreen")}</span>
        </button>
        <button
          type="button"
          onClick={onTheater}
          className={`btn-ghost h-10 px-3 text-sm ${theater ? "border-coin/60 text-coin" : ""}`}
          title={t("player.theaterTitle")}
          aria-pressed={theater}
        >
          <TheaterIcon size={16} />
          <span className="hidden sm:inline">{t("player.theater")}</span>
        </button>
      </div>

      {/* Cabinet hardware readout */}
      <div className="flex shrink-0 items-center gap-2.5 pl-2" aria-hidden="true">
        <span className="pixel text-[8px] text-mist">CH·01</span>
        <span className="h-2.5 w-2.5 rounded-full bg-phosphor shadow-[0_0_8px_#7cfc9a]" />
      </div>
    </div>
  );
}
