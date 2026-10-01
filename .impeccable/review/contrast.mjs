/* Contrast spot-checks on the live build (WCAG relative luminance). */
import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:5173", { waitUntil: "networkidle" });
await page.waitForTimeout(600);

function lum(r, g, b) {
  const f = (c) => {
    c /= 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}
function parseRgb(s) {
  const m = s.match(/rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s/]+([\d.]+))?\)/);
  if (!m) return null;
  return { r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : +m[4] };
}
function blend(fg, bg) {
  // composite fg over bg (both rgb + alpha)
  return {
    r: fg.r * fg.a + bg.r * (1 - fg.a),
    g: fg.g * fg.a + bg.g * (1 - fg.a),
    b: fg.b * fg.a + bg.b * (1 - fg.a),
  };
}
function ratio(fg, bg) {
  const l1 = lum(fg.r, fg.g, fg.b);
  const l2 = lum(bg.r, bg.g, bg.b);
  return ((Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)).toFixed(2);
}

async function check(label, selector, minRatio) {
  const data = await page.evaluate((sel) => {
    const parseRgb = (s) => {
      const m = String(s).match(/rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s/]+([\d.]+))?\)/);
      if (!m) return null;
      return { r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : +m[4] };
    };
    const el = document.querySelector(sel);
    if (!el) return null;
    const cs = getComputedStyle(el);
    let bgEl = el;
    let bg = null;
    while (bgEl) {
      const c = parseRgb(getComputedStyle(bgEl).backgroundColor);
      if (c && c.a > 0) {
        bg = c;
        break;
      }
      bgEl = bgEl.parentElement;
    }
    return { fg: parseRgb(cs.color), bg: bg ?? { r: 12, g: 12, b: 19, a: 1 } };
  }, selector);
  if (!data || !data.fg) return console.log(`SKIP  ${label} (selector not found)`);
  const fg = data.fg.a < 1 ? blend(data.fg, data.bg) : data.fg;
  const r = ratio(fg, data.bg);
  const ok = parseFloat(r) >= minRatio;
  console.log(`${ok ? "PASS" : "FAIL"}  ${label} — ${r}:1 (min ${minRatio})`);
}

// Body text on hall ground
await check("muted text on void (body)", "footer p", 4.5);
// Card title on chassis
await check("card title on chassis", "main ul li h3", 4.5);
// Plays badge (phosphor on chassis)
await check("plays badge (phosphor)", "main ul li a.cabinet-lit span.text-phosphor", 4.5);
// Dark-cabinet note (ember on chassis)
await check("cartridge-missing note (ember)", "main ul li a.cabinet-dark span.text-ember", 4.5);
// Coin button text
await check("coin button text", "header button.btn-coin", 4.5);
// Tag chips — colored text on tinted bg
await check("category tag (red)", "main .tag", 4.5);
// Pixel INSERT COIN (coin on dark strip)
await check("insert coin (gold on attract)", ".attract .pixel", 4.5);
// Search placeholder
await check("search placeholder", "input[type=search]", 4.5);

await page.goto("http://localhost:5173/#/game/kof-wing", { waitUntil: "load" });
await page.waitForTimeout(800);
// Cartridge panel copy
await check("cartridge panel body text", "div[role=alert] p.text-mist", 4.5);
await check("cartridge panel pixel title (ember)", "div[role=alert] p.pixel", 3);

await page.goto("http://localhost:5173/#/game/kulkis", { waitUntil: "load" });
await page.waitForTimeout(800);
await check("instructions body", "section[aria-label^='How to play'] p", 4.5);
await check("controls header (coin on chassis)", "section h3.pixel", 4.5);

await browser.close();
