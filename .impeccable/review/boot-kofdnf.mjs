import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));

await page.goto("http://localhost:5173/#/game/kof-vs-dnf", { waitUntil: "load" });
await page.waitForSelector("ruffle-player", { timeout: 30000 }).catch(() => {});
await page.waitForTimeout(12000); // 17.6MB movie — give it room

const state = await page.evaluate(() => {
  const p = document.querySelector("ruffle-player");
  const canvas = p?.shadowRoot?.querySelector("canvas");
  return {
    mounted: !!p,
    canvas: canvas ? `${canvas.width}x${canvas.height}` : null,
    readyState: p?.readyState,
    isPlaying: p?.isPlaying,
    metadata: p?.metadata
      ? {
          swfVersion: p.metadata.swfVersion,
          width: p.metadata.width,
          height: p.metadata.height,
          frameRate: p.metadata.frameRate,
          isActionScript3: p.metadata.isActionScript3,
        }
      : null,
    overlay: document.body.innerText.includes("LOADING"),
  };
});
console.log(JSON.stringify(state, null, 2));
console.log("console errors:", errors.slice(0, 5));
await browser.close();
