/**
 * Ruffle lifecycle, kept fully outside React.
 *
 * - loadRuffle(): once per page — injects the emulator script from unpkg,
 *   resolves with the RufflePlayer API (window.RufflePlayer.newest()).
 * - webAssemblySupported(): probes whether Wasm actually compiles, because
 *   "typeof WebAssembly" can be truthy in browsers where it is blocked.
 *
 * Every failure mode here maps to a friendly panel in <RufflePlayer>, never
 * a dead gray box.
 */

const RUFFLE_SRC = "https://unpkg.com/@ruffle-rs/ruffle";

let scriptPromise = null;

export function webAssemblySupported() {
  try {
    if (typeof WebAssembly === "undefined" || WebAssembly === null) return false;
    // Minimal valid module header: magic + version. Compiling it proves the
    // engine is really usable rather than merely present.
    const module = new WebAssembly.Module(
      new Uint8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00])
    );
    return module instanceof WebAssembly.Module;
  } catch {
    return false;
  }
}

export function loadRuffle() {
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      scriptPromise = null;
      reject(new Error("no-window"));
      return;
    }

    window.RufflePlayer = window.RufflePlayer || {};
    window.RufflePlayer.config = {
      autoplay: "on",
      unmuteOverlay: "visible",
      letterbox: "on",
      contextMenu: "on",
      splashScreen: false,
      warnOnUnsupportedContent: false,
      scale: "showAll",
      logLevel: "error",
    };

    // Script already present (e.g. HMR or a second player mount)?
    if (window.RufflePlayer?.newest) {
      const api = window.RufflePlayer.newest();
      if (api) {
        resolve(api);
        return;
      }
    }

    const script = document.createElement("script");
    script.src = RUFFLE_SRC;
    script.async = true;
    script.onload = () => {
      const api = window.RufflePlayer?.newest?.();
      if (api) {
        resolve(api);
      } else {
        scriptPromise = null;
        reject(new Error("ruffle-no-api"));
      }
    };
    script.onerror = () => {
      scriptPromise = null;
      reject(new Error("ruffle-cdn"));
    };
    document.head.appendChild(script);
  });

  return scriptPromise;
}
