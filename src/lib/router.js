import { useCallback, useEffect, useState } from "react";

/**
 * Minimal hash router: "#/" is the floor (home), "#/game/<id>" the player.
 * Hash routing keeps the portal deployable as a plain static bundle —
 * no server rewrite rules needed for deep links like #/game/galagian.
 */

function parse(hash) {
  const clean = (hash || "").replace(/^#/, "");
  const parts = clean.split("/").filter(Boolean);
  if (parts[0] === "game" && parts[1]) {
    return { view: "game", id: parts[1] };
  }
  return { view: "home", id: null };
}

export function useHashRoute() {
  const [route, setRoute] = useState(() => parse(window.location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parse(window.location.hash));
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  const navigate = useCallback((path) => {
    window.location.hash = path;
  }, []);

  return { route, navigate };
}
