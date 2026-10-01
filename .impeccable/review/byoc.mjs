// Verifies the bring-your-own-cartridge path on a dark cabinet:
// pick a real .swf through the hidden file input → Ruffle boots the blob.
import { chromium } from "playwright";

const BASE = "http://localhost:5173";
const results = [];
const note = (ok, label, extra = "") => {
  results.push({ ok, label });
  console.log(`${ok ? "PASS " : "FAIL "} ${label}${extra ? " — " + extra : ""}`);
};

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto(`${BASE}/#/game/super-smash-flash`, { waitUntil: "load" });
await page.waitForTimeout(1500);

note(
  (await page.locator("text=NO CARTRIDGE IN THIS CABINET").count()) === 1,
  "cartridge panel shows"
);
note(
  (await page.locator("button:has-text('Insert your own')").count()) === 1,
  "insert cartridge button present"
);
note(
  (await page.locator("input[type=file]").count()) === 1,
  "hidden file input present"
);

// Feed it a real cartridge through the picker.
await page
  .locator("input[type=file]")
  .setInputFiles("C:/Users/Poseidon/Documents/GitHub/OG_game/public/games/galagian.swf");

await page.waitForTimeout(4000);
await page.waitForSelector("ruffle-player", { timeout: 15000 }).catch(() => {});
await page.waitForTimeout(3000);

note(
  (await page.locator("ruffle-player").count()) === 1,
  "ruffle mounts after file pick"
);
note(
  (await page.locator("text=NO CARTRIDGE IN THIS CABINET").count()) === 0,
  "cartridge panel cleared"
);
const canvasLive = await page.evaluate(() => {
  const p = document.querySelector("ruffle-player");
  const canvas = p?.shadowRoot?.querySelector("canvas");
  return canvas ? `${canvas.width}x${canvas.height}` : null;
});
note(!!canvasLive, "canvas live in shadow root", canvasLive || "none");

// Controls should wake up once a visitor cartridge is live.
const restartDisabled = await page
  .locator("button:has-text('Restart')")
  .first()
  .evaluate((b) => b.disabled);
note(restartDisabled === false, "controls enabled after insert");

await browser.close();
const passed = results.filter((r) => r.ok).length;
console.log(`\n${passed}/${results.length} BYOC checks passed`);
process.exit(passed === results.length ? 0 : 1);
