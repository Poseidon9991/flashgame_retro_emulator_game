import { chromium } from "playwright";

const browser = await chromium.launch();

/* --- kof-wing keycaps --- */
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:5173/#/game/kof-wing", { waitUntil: "load" });
  await page.waitForTimeout(1200);
  const caps = await page.locator(".keycap").allTextContents();
  console.log("kof keycaps:", JSON.stringify(caps));
  const cluster = await page.locator(".keycap", { hasText: "W" }).count();
  console.log("keycaps containing W:", cluster);
  await page.close();
}

/* --- galagian movie render state --- */
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:5173/#/game/galagian", { waitUntil: "load" });
  await page.waitForTimeout(12000);
  const state = await page.evaluate(() => {
    const el = document.querySelector("ruffle-player");
    if (!el) return { exists: false };
    const canvas = el.shadowRoot?.querySelector("canvas");
    const inner = el.shadowRoot?.querySelector("*");
    const r = el.getBoundingClientRect();
    return {
      exists: true,
      hasShadow: Boolean(el.shadowRoot),
      shadowChildren: el.shadowRoot?.children.length ?? 0,
      canvas: canvas ? { w: canvas.width, h: canvas.height, cw: canvas.clientWidth } : null,
      rect: { x: r.x, y: r.y, w: r.width, h: r.height },
      instance: typeof el.playerController,
    };
  });
  console.log("galagian player state:", JSON.stringify(state, null, 1));
  await page.close();
}

/* --- kulkis mobile --- */
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto("http://localhost:5173/#/game/kulkis", { waitUntil: "load" });
  await page.waitForTimeout(12000);
  const state = await page.evaluate(() => {
    const el = document.querySelector("ruffle-player");
    const canvas = el?.shadowRoot?.querySelector("canvas");
    const r = el?.getBoundingClientRect();
    return {
      exists: Boolean(el),
      canvas: canvas ? { w: canvas.width, h: canvas.height } : null,
      rect: r ? { w: r.width, h: r.height } : null,
    };
  });
  console.log("kulkis mobile player:", JSON.stringify(state));
  await page.close();
}

await browser.close();
