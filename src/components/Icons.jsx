/**
 * Reaksa Arcade icon set — one consistent system: 24×24 grid, 2px round strokes,
 * drawn geometry only (no unicode glyphs standing in for icons).
 */

function Svg({ children, size = 18, filled = false, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const SearchIcon = (p) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </Svg>
);

export const DiceIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <circle cx="8.5" cy="8.5" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="15.5" cy="8.5" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="8.5" cy="15.5" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="15.5" cy="15.5" r="1.1" fill="currentColor" stroke="none" />
  </Svg>
);

export const ExpandIcon = (p) => (
  <Svg {...p}>
    <path d="M8 3H5a2 2 0 0 0-2 2v3" />
    <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
    <path d="M3 16v3a2 2 0 0 0 2 2h3" />
    <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
  </Svg>
);

export const ShrinkIcon = (p) => (
  <Svg {...p}>
    <path d="M8 3v3a2 2 0 0 1-2 2H3" />
    <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
    <path d="M3 16h3a2 2 0 0 1 2 2v3" />
    <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
  </Svg>
);

export const RestartIcon = (p) => (
  <Svg {...p}>
    <path d="M3 12a9 9 0 1 0 2.6-6.4" />
    <path d="M3 3v5h5" />
  </Svg>
);

export const TheaterIcon = (p) => (
  <Svg {...p}>
    <rect x="2" y="5" width="20" height="14" rx="2.5" />
    <path d="M16.5 5v14" />
    <path d="M6 9.5h7M6 13h5" />
  </Svg>
);

export const BackIcon = (p) => (
  <Svg {...p}>
    <path d="m15 18-6-6 6-6" />
  </Svg>
);

export const PlayIcon = (p) => (
  <Svg filled {...p}>
    <path d="M7 4.5 19.5 12 7 19.5z" />
  </Svg>
);

export const CoinIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4.5" />
  </Svg>
);

export const CartridgeIcon = (p) => (
  <Svg {...p}>
    <path d="M6 21h12v-9l-2-3H8l-2 3z" />
    <path d="M9 21v-4h6v4" />
    <path d="M9 3h6v6H9z" />
    <path d="M11 5.5h2M11 7.5h2" />
  </Svg>
);

export const WarnIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3 2.5 20h19z" />
    <path d="M12 9.5v5" />
    <circle cx="12" cy="17.2" r="0.4" fill="currentColor" stroke="none" />
  </Svg>
);

export const CubeIcon = (p) => (
  <Svg {...p}>
    <path d="M12 2.5 21 7v10l-9 4.5L3 17V7z" />
    <path d="M3 7l9 4.5L21 7" />
    <path d="M12 11.5V21.5" />
  </Svg>
);

/** Mouse icon for control layouts. `button`: "left" highlights LMB. */
export const MouseIcon = ({ button, size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <rect x="7" y="2.5" width="10" height="19" rx="5" />
    <path d="M12 2.5v6" />
    {button === "left" && <path d="M7.6 8.5H12V4.5c-2.6 0-4.4 1.9-4.4 4z" fill="currentColor" stroke="none" />}
  </svg>
);

/** Tiny arrows for keycap clusters. */
export const ArrowIcon = ({ dir, size = 12 }) => {
  const rot = { up: 0, right: 90, down: 180, left: 270 }[dir] ?? 0;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      style={{ transform: `rotate(${rot}deg)` }}
    >
      <path d="M12 19V6" />
      <path d="m5.5 12.5 6.5-6.5 6.5 6.5" />
    </svg>
  );
};

export const GithubIcon = (p) => (
  <Svg {...p}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </Svg>
);

export const LinkedinIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10.5V17" />
    <circle cx="8" cy="7.3" r="0.4" fill="currentColor" stroke="none" />
    <path d="M12 17v-4a2.5 2.5 0 0 1 5 0v4" />
    <path d="M12 10.5V17" />
  </Svg>
);

export const GlobeIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14.5 14.5 0 0 0-3.7 9 14.5 14.5 0 0 0 3.7 9 14.5 14.5 0 0 0 3.7-9 14.5 14.5 0 0 0-3.7-9z" />
  </Svg>
);

export const LangIcon = (p) => (
  <Svg {...p}>
    <path d="M3 5h10" />
    <path d="M8 3v2" />
    <path d="M10.5 5a12 12 0 0 1-6.7 9.5" />
    <path d="M6 8.5A12 12 0 0 0 11 13" />
    <path d="m13 21 4.5-10L22 21" />
    <path d="M14.7 17h5.6" />
  </Svg>
);

/** Pixel joystick — the logo mark. */
export const JoystickIcon = ({ size = 26 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    shapeRendering="crispEdges"
    aria-hidden="true"
    focusable="false"
  >
    {/* red ball top */}
    <rect x="6" y="0" width="4" height="3" fill="#ff5a5f" />
    <rect x="5" y="1" width="1" height="1" fill="#ff5a5f" />
    <rect x="10" y="1" width="1" height="1" fill="#ff5a5f" />
    {/* shaft */}
    <rect x="7" y="3" width="2" height="6" fill="#9aa0b5" />
    {/* base */}
    <rect x="3" y="9" width="10" height="3" fill="#1d1d2a" />
    <rect x="4" y="12" width="8" height="1" fill="#34344c" />
    {/* fire button */}
    <rect x="3" y="10" width="2" height="1" fill="#ffc53d" />
    <rect x="11" y="10" width="2" height="1" fill="#ffc53d" />
  </svg>
);
