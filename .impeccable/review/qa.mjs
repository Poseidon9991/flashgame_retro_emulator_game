/* Headless QA: functional + layout verification of the RetroArcade build. */
import { chromium } from "playwright";

const BASE = "http://localhost:5173";
const results = [];
const note = (ok, label, extra = "") =>
  results.push(`${ok ? "PASS" : "FAIL"}  ${label}${extra ? ` — ${extra}` : ""}`);

const browser = await chromium.launch();

async function newPage(viewport) {
  const ctx = await browser.newContext({ viewport });
  const page = await ctx.newPage();
  const consoleErrors = [];
  const failedRequests = [];
  page.on("console", (m) => {
    if (m.type() === "error") consoleErrors.push(m.text());
  });
  page.on("requestfailed", (r) => failedRequests.push(`${r.url()} ${r.failure()?.errorText}`));
  page.on("response", (r) => {
    if (r.status() >= 400) failedRequests.push(`${r.status()} ${r.url()}`);
  });
  return { ctx, page, consoleErrors, failedRequests };
}

/* ---------- 1. Home, desktop ---------- */
{
  const { ctx, page, consoleErrors, failedRequests } = await newPage({ width: 1440, height: 900 });
  await page.goto(BASE, { waitUntil: "load" });
  await page.waitForTimeout(1200);

  note((await page.title()).includes("Reaksa Arcade"), "document title");
  note(await page.locator("header a[aria-label*='Reaksa Arcade']").count() === 1, "logo present");
  note(await page.locator("input[type=search]").count() === 1, "search input present");
  note((await page.locator("nav[aria-label*=Filter] button").count()) === 5, "5 category chips");
  note((await page.locator("main ul li a.cabinet").count()) === 21, "21 game cards on the floor");
  note((await page.locator("a.cabinet-dark").count()) === 10, "10 dark cabinets");
  note(await page.locator("button:has-text('Random Game')").count() === 1, "random button");
  note(await page.locator("text=INSERT COIN").count() >= 1, "attract strip present");

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth
  );
  note(overflow <= 0, "no horizontal scroll at 1440", `delta=${overflow}px`);
  note(consoleErrors.length === 0, "no console errors (home)", consoleErrors.slice(0, 3).join(" | "));
  note(failedRequests.length === 0, "no failed requests (home)", failedRequests.slice(0, 3).join(" | "));

  // Category filter: Action (tag-inclusive: category OR tag matches)
  await page.locator("nav[aria-label*=Filter] button", { hasText: "Action" }).click();
  await page.waitForTimeout(300);
  const actionCount = await page.locator("main ul li a.cabinet").count();
  note(actionCount === 13, "Action filter shows 13 tagged cards", `got ${actionCount}`);
  note((await page.locator("text=13 of 21 cabinets showing").count()) === 1, "count line updates");

  // Search with active filter → empty state
  await page.locator("input[type=search]").fill("zzzz");
  await page.waitForTimeout(300);
  note((await page.locator("text=NO CABINETS MATCH").count()) === 1, "empty state on no match");
  await page.locator("button:has-text('Clear filters')").click();
  await page.waitForTimeout(300);
  note((await page.locator("main ul li a.cabinet").count()) === 21, "clear filters restores 21");

  // Search matches tagline text (mario → squario2)
  await page.locator("input[type=search]").fill("mario");
  await page.waitForTimeout(300);
  const marioCards = await page.locator("main ul li a.cabinet").count();
  note(marioCards === 1, "search 'mario' finds Squario 2", `got ${marioCards}`);
  await ctx.close();
}

/* ---------- 2. Home, mobile ---------- */
{
  const { ctx, page, consoleErrors } = await newPage({ width: 390, height: 844 });
  await page.goto(BASE, { waitUntil: "load" });
  await page.waitForTimeout(1200);
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth
  );
  note(overflow <= 0, "no horizontal scroll at 390", `delta=${overflow}px`);
  // touch target size for chips
  const chipBox = await page.locator("nav[aria-label*=Filter] button").first().boundingBox();
  note(chipBox && chipBox.height >= 36, "chip touch height ≥ 36px", `h=${chipBox?.height}`);
  const searchBox = await page.locator("input[type=search]").boundingBox();
  note(searchBox && searchBox.height >= 44, "search touch height ≥ 44px", `h=${searchBox?.height}`);
  note(consoleErrors.length === 0, "no console errors (mobile home)");
  await ctx.close();
}

/* ---------- 3. Player — playable cartridge (galagian, mouse game) ---------- */
{
  const { ctx, page, consoleErrors, failedRequests } = await newPage({ width: 1440, height: 900 });
  await page.goto(`${BASE}/#/game/galagian`, { waitUntil: "load" });
  // wait for ruffle to boot the movie: ruffle-player + inner container
  try {
    await page.waitForSelector("ruffle-player", { timeout: 20000 });
    await page.waitForFunction(
      () => {
        const el = document.querySelector("ruffle-player");
        const canvas = el?.shadowRoot?.querySelector("canvas");
        return canvas && canvas.width > 0;
      },
      null,
      { timeout: 30000 }
    );
    note(true, "ruffle-player mounted, canvas live");
  } catch {
    note(false, "ruffle-player mounted, canvas live");
  }
  await page.waitForTimeout(2500);

  const overlayGone = await page.locator("text=LOADING CARTRIDGE").count();
  note(overlayGone === 0, "loading overlay cleared (movie running)");
  note((await page.locator("h1:has-text('Galagian')").count()) === 1, "player title h1");
  note(await page.locator("button:has-text('Restart')").count() === 1, "restart button");
  note(await page.locator("button:has-text('Fullscreen')").count() === 1, "fullscreen button");
  note(await page.locator("button:has-text('Theater mode')").count() === 1, "theater button");
  note(await page.locator("text=How to play").count() === 1, "instructions card");
  const keycaps = await page.locator(".keycap").count();
  note(keycaps >= 3, "keycaps rendered (mouse game)", `n=${keycaps}`);
  note((await page.locator("text=More on the floor").count()) === 1, "related grid header");
  const related = await page.locator("section[aria-label='Related games'] a.cabinet").count();
  note(related === 4, "4 related cabinets", `got ${related}`);
  note(consoleErrors.length === 0, "no console errors (player)", consoleErrors.slice(0, 3).join(" | "));
  note(failedRequests.length === 0, "no failed requests (player)", failedRequests.slice(0, 3).join(" | "));

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth
  );
  note(overflow <= 0, "no horizontal scroll (player desktop)");

  // Theater mode toggle
  await page.locator("button:has-text('Theater mode')").click();
  await page.waitForTimeout(500);
  note((await page.locator("text=More on the floor").count()) === 0, "theater hides extras");
  await page.locator("button:has-text('Theater mode')").click();
  await page.waitForTimeout(500);
  note((await page.locator("text=More on the floor").count()) === 1, "theater restores extras");

  // Restart keeps a running movie
  await page.locator("button:has-text('Restart')").click();
  await page.waitForTimeout(4000);
  note((await page.locator("text=CARTRIDGE WON’T LOAD").count()) === 0, "restart does not error");
  note((await page.locator("ruffle-player > *").count()) >= 1, "movie still mounted after restart");
  await ctx.close();
}

/* ---------- 4. Player — dark cabinet (super-smash-flash) ---------- */
{
  const { ctx, page } = await newPage({ width: 1440, height: 900 });
  await page.goto(`${BASE}/#/game/super-smash-flash`, { waitUntil: "load" });
  await page.waitForTimeout(1500);
  note((await page.locator("text=NO CARTRIDGE IN THIS CABINET").count()) === 1, "cartridge panel shows");
  note((await page.locator("text=games/super-smash-flash.swf").count()) >= 1, "panel names the swf path");
  note((await page.locator("button:has-text('Play a random game')").count()) === 1, "random escape hatch");
  note((await page.locator("ruffle-player").count()) === 0, "no ruffle boot for dark cabinet");
  // WASD cluster present in instructions (P1 move: W A S D)
  const wasd = await page.locator(".keycap").filter({ hasText: /^W$/ }).count();
  note(wasd === 1, "WASD move cluster rendered");
  const fgh = await page.locator(".keycap").filter({ hasText: /^F$/ }).count();
  note(fgh === 1, "attack tier keycaps listed");
  // deep link back home
  await page.locator("a[aria-label='Back to the game floor']").click();
  await page.waitForTimeout(400);
  note(page.url().endsWith("#/"), "back link returns to the floor");
  await ctx.close();
}

/* ---------- 5. Player, mobile ---------- */
{
  const { ctx, page, consoleErrors } = await newPage({ width: 390, height: 844 });
  await page.goto(`${BASE}/#/game/kulkis`, { waitUntil: "load" });
  try {
    await page.waitForFunction(
      () => {
        const el = document.querySelector("ruffle-player");
        const canvas = el?.shadowRoot?.querySelector("canvas");
        return canvas && canvas.width > 0;
      },
      null,
      { timeout: 30000 }
    );
    note(true, "movie boots on mobile viewport");
  } catch {
    note(false, "movie boots on mobile viewport");
  }
  await page.waitForTimeout(1500);
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth
  );
  note(overflow <= 0, "no horizontal scroll (player mobile)", `delta=${overflow}px`);
  note(consoleErrors.length === 0, "no console errors (player mobile)");
  await ctx.close();
}

/* ---------- 6. Random + deep links ---------- */
{
  const { ctx, page } = await newPage({ width: 1280, height: 800 });
  await page.goto(BASE, { waitUntil: "load" });
  await page.waitForTimeout(800);
  await page.locator("button:has-text('Random Game')").click();
  await page.waitForTimeout(1500);
  const hash = page.url().split("#")[1] ?? "";
  note(/^\/game\/[a-z0-9-]+$/.test(hash), "random lands on a game route", hash);
  const game = hash.replace("/game/", "");
  const known = ["galagian","asteroidase","slimower","kulkis","weirdtris","rockrush","squario2","galaxus","trapdoorer","kof-wing","kof-vs-dnf"];
  note(known.includes(game), "random picked a lit cabinet", game);
  await ctx.close();
}

await browser.close();

const fails = results.filter((r) => r.startsWith("FAIL"));
console.log(results.join("\n"));
console.log(`\n${results.length - fails.length}/${results.length} checks passed`);
if (fails.length) process.exit(1);
