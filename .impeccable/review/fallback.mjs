/* Fallback-path QA: every Ruffle failure mode must surface a friendly panel. */
import { chromium } from "playwright";

const BASE = "http://localhost:5173";
const results = [];
const note = (ok, label, extra = "") =>
  results.push(`${ok ? "PASS" : "FAIL"}  ${label}${extra ? ` — ${extra}` : ""}`);

const browser = await chromium.launch();

/* A. Ruffle CDN blocked → "EMULATOR NOT FOUND" */
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();
  await page.route("**/unpkg.com/**", (route) => route.abort());
  await page.goto(`${BASE}/#/game/galagian`, { waitUntil: "load" });
  await page.waitForTimeout(2500);
  note((await page.locator("text=EMULATOR NOT FOUND").count()) === 1, "CDN blocked → emulator panel");
  note((await page.locator("button:has-text('Try again')").count()) === 1, "CDN panel has retry");
  note((await page.locator("button:has-text('Play a random game')").count()) === 1, "CDN panel has escape");
  await ctx.close();
}

/* B. WebAssembly removed → "WEBASSEMBLY IS OFF" */
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();
  await page.addInitScript(() => {
    delete window.WebAssembly;
  });
  await page.goto(`${BASE}/#/game/galagian`, { waitUntil: "load" });
  await page.waitForTimeout(2000);
  note((await page.locator("text=WEBASSEMBLY IS OFF").count()) === 1, "WASM blocked → wasm panel");
  note((await page.locator("ruffle-player").count()) === 0, "wasm block never boots the player");
  await ctx.close();
}

/* C. SWF 404 → "CARTRIDGE WON'T LOAD" */
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();
  await page.route("**/games/galagian.swf", (route) =>
    route.fulfill({ status: 404, body: "nope" })
  );
  await page.goto(`${BASE}/#/game/galagian`, { waitUntil: "load" });
  // ruffle boot takes a moment; the panel replaces the loading overlay
  try {
    await page.waitForSelector("text=CARTRIDGE WON", { timeout: 30000 });
    note(true, "404 SWF → cartridge-won't-load panel");
  } catch {
    note(false, "404 SWF → cartridge-won't-load panel");
  }
  note((await page.locator("button:has-text('Try again')").count()) === 1, "SWF panel has retry");
  await ctx.close();
}

await browser.close();
const fails = results.filter((r) => r.startsWith("FAIL"));
console.log(results.join("\n"));
console.log(`\n${results.length - fails.length}/${results.length} fallback checks passed`);
if (fails.length) process.exit(1);
