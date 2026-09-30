/**
 * Responsive audit — visits every route at 5 widths and reports:
 *   (a) horizontal overflow + offending elements
 *   (b) tappable elements under 44×44 px
 *   (c) saves full-page screenshots to /tmp/responsive/
 *
 * Usage:  pnpm exec ts-node --project tsconfig.scripts.json scripts/responsive-audit.ts
 *   OR    pnpm exec playwright test scripts/responsive-audit.ts --headed
 *
 * Requires the dev server to be running on http://localhost:3100
 */

import { chromium, type Page } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const BASE = "http://localhost:3100";
const WIDTHS = [320, 360, 390, 768, 1024];
const OUT_DIR = join("C:\\", "tmp", "responsive");

const ROUTES = [
  "/",
  "/services",
  "/industries",
  "/industries/caredesk",
  "/industries/pharmacydesk",
  "/work",
  "/work/afyahero",
  "/about",
  "/pricing",
  "/contact",
];

type OverflowElement = { tag: string; id: string; classes: string; rightEdge: number };
type SmallTarget = { tag: string; id: string; classes: string; text: string; w: number; h: number };

async function checkOverflow(page: Page, width: number): Promise<OverflowElement[]> {
  return page.evaluate((vw) => {
    const offenders: OverflowElement[] = [];
    document.querySelectorAll("*").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.right > vw + 1) {
        offenders.push({
          tag: el.tagName.toLowerCase(),
          id: el.id || "",
          classes: (el.className || "").toString().slice(0, 80),
          rightEdge: Math.round(r.right),
        });
      }
    });
    return offenders;
  }, width);
}

async function checkTapTargets(page: Page): Promise<SmallTarget[]> {
  return page.evaluate(() => {
    const MIN = 44;
    const interactive = [
      "a[href]",
      "button",
      "input",
      "select",
      "textarea",
      "[role='button']",
      "[role='link']",
    ].join(",");
    const results: SmallTarget[] = [];
    document.querySelectorAll(interactive).forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width < MIN || r.height < MIN) {
        results.push({
          tag: el.tagName.toLowerCase(),
          id: el.id || "",
          classes: (el.className || "").toString().slice(0, 80),
          text: (el.textContent || "").trim().slice(0, 40),
          w: Math.round(r.width),
          h: Math.round(r.height),
        });
      }
    });
    return results;
  });
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  const results: Record<string, Record<number, { overflow: OverflowElement[]; small: SmallTarget[] }>> = {};

  for (const route of ROUTES) {
    results[route] = {};
    for (const width of WIDTHS) {
      const page = await browser.newPage();
      await page.setViewportSize({ width, height: 812 });
      await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });

      const overflow = await checkOverflow(page, width);
      const small = await checkTapTargets(page);

      results[route][width] = { overflow, small };

      const slug = route.replace(/\//g, "_") || "_home";
      const file = join(OUT_DIR, `${slug}__${width}.png`);
      await page.screenshot({ path: file, fullPage: true });

      await page.close();
      process.stdout.write(overflow.length || small.length ? "✗" : "✓");
    }
    process.stdout.write(` ${route}\n`);
  }

  await browser.close();

  // ── Print report ──
  console.log("\n=== RESPONSIVE AUDIT REPORT ===\n");
  let totalOverflow = 0;
  let totalSmall = 0;

  for (const route of ROUTES) {
    let routeHasIssues = false;
    for (const width of WIDTHS) {
      const { overflow, small } = results[route][width];
      if (overflow.length || small.length) {
        if (!routeHasIssues) {
          console.log(`\n── ${route}`);
          routeHasIssues = true;
        }
        console.log(`  @${width}px`);
        if (overflow.length) {
          totalOverflow += overflow.length;
          console.log(`    OVERFLOW (${overflow.length} elements):`);
          overflow.slice(0, 5).forEach((e) =>
            console.log(`      <${e.tag}> rightEdge=${e.rightEdge}px  id="${e.id}"  class="${e.classes}"`)
          );
          if (overflow.length > 5) console.log(`      …and ${overflow.length - 5} more`);
        }
        if (small.length) {
          totalSmall += small.length;
          console.log(`    SMALL TARGETS (${small.length}):`);
          small.slice(0, 5).forEach((e) =>
            console.log(`      <${e.tag}> ${e.w}×${e.h}px  "${e.text}"  class="${e.classes}"`)
          );
          if (small.length > 5) console.log(`      …and ${small.length - 5} more`);
        }
      }
    }
  }

  console.log(`\n=== TOTALS: ${totalOverflow} overflow elements, ${totalSmall} small targets ===`);
  console.log(`Screenshots saved to ${OUT_DIR}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
