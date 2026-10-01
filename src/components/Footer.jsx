import { JoystickIcon, GithubIcon, LinkedinIcon, GlobeIcon } from "./Icons.jsx";
import { useI18n } from "../i18n/index.js";

const SOCIAL = [
  {
    id: "portfolio",
    label: "Portfolio",
    href: "https://hoengreaksa.vercel.app",
    Icon: GlobeIcon,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Poseidon9991",
    Icon: GithubIcon,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hoeng-reaksa-48b5842b3",
    Icon: LinkedinIcon,
  },
];

const linkCls =
  "text-p2 underline decoration-edge-2 underline-offset-4 hover:decoration-p2";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-16 border-t border-edge bg-hall">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <JoystickIcon size={24} />
            <span className="pixel text-[11px] text-ink">
              <span className="text-coin">REAKSA</span> ARCADE
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-mist">{t("footer.blurb")}</p>
          <p className="text-sm text-mist">
            {t("footer.built")}{" "}
            <a
              className={`${linkCls} font-semibold text-coin hover:text-ink`}
              href="https://hoengreaksa.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Reaksa Hoeng
            </a>
          </p>
        </div>

        <div className="text-sm leading-relaxed text-mist">
          <h2 className="pixel mb-3 text-[10px] text-ink">{t("footer.credits")}</h2>
          <p>
            {t("footer.creditGamesPre")}{" "}
            <a
              className={linkCls}
              href="https://github.com/EvidentlyCube/LegacyGames"
              target="_blank"
              rel="noreferrer"
            >
              {t("footer.creditGamesArchive")}
            </a>{" "}
            {t("footer.creditGamesMid")}{" "}
            <a className={linkCls} href="https://ruffle.rs" target="_blank" rel="noreferrer">
              Ruffle
            </a>
            . {t("footer.creditClassics")}
          </p>
        </div>

        <div className="text-sm leading-relaxed text-mist">
          <h2 className="pixel mb-3 text-[10px] text-ink">{t("footer.links")}</h2>
          <ul className="flex flex-col gap-2.5">
            {SOCIAL.map(({ id, label, href, Icon }) => (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 text-mist transition-colors duration-150 hover:text-coin"
                >
                  <Icon size={17} className="text-mist transition-colors group-hover:text-coin" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-edge/60 py-4 text-center text-xs text-mist/80">
        © {new Date().getFullYear()} Reaksa Hoeng — {t("footer.bottom")}
      </div>
    </footer>
  );
}
