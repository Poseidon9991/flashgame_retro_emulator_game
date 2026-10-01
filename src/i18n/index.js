import { useSyncExternalStore } from "react";
import en from "./en.js";
import km from "./km.js";

export const BRAND = "Reaksa Arcade";

const DICTS = { en, km };
const STORAGE_KEY = "reaksa-arcade-lang";
const listeners = new Set();

let lang =
  typeof localStorage !== "undefined" && DICTS[localStorage.getItem(STORAGE_KEY)]
    ? localStorage.getItem(STORAGE_KEY)
    : typeof navigator !== "undefined" && navigator.language?.startsWith("km")
      ? "km"
      : "en";

if (typeof document !== "undefined") {
  document.documentElement.lang = lang;
}

function lookup(dict, path) {
  return path.split(".").reduce((o, k) => (o == null ? o : o[k]), dict);
}

/** Translate a dotted key, interpolate {vars}, fall back to English. */
export function t(path, vars) {
  let s = lookup(DICTS[lang], path) ?? lookup(en, path) ?? path;
  if (vars) {
    s = s.replace(/\{(\w+)\}/g, (_, k) => (vars[k] != null ? vars[k] : `{${k}}`));
  }
  return s;
}

export function setLang(next) {
  lang = DICTS[next] ? next : "en";
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
  listeners.forEach((fn) => fn());
}

function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/** Reactive hook: re-renders the component when the language changes. */
export function useI18n() {
  const current = useSyncExternalStore(subscribe, () => lang);
  return { lang: current, t, setLang };
}
