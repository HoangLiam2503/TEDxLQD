import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const isMobile = process.argv.includes('--mobile');

const CONFIG = {
  url:       'http://localhost:3000',
  viewport:  isMobile ? { width: 390, height: 844 }
                      : { width: 1440, height: 900 },
  reference: isMobile ? './refs/target-mobile.png'
                      : './refs/target-desktop.png',
  current:   isMobile ? './screenshots/current-mobile.png'
                      : './screenshots/current.png',
  diff:      isMobile ? './screenshots/diff-mobile.png'
                      : './screenshots/diff.png',
  threshold: 0.1,
  failAt:    5, // % mismatch before exit(1)
};

// ---- Capture ----
const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport(CONFIG.viewport);

console.log(`📸  Navigating to ${CONFIG.url} …`);
await page.goto(CONFIG.url, { waitUntil: 'networkidle2', timeout: 15000 });

// Wait for video/fonts to settle
await new Promise(r => setTimeout(r, 800));

await page.screenshot({ path: CONFIG.current, fullPage: true });
await browser.close();
console.log(`✅  Saved → ${CONFIG.current}`);

// ---- Diff (only if reference exists) ----
if (!fs.existsSync(CONFIG.reference)) {
  console.log(`ℹ️   No reference found at ${CONFIG.reference}`);
  console.log(`    To set one: cp ${CONFIG.current} ${CONFIG.reference}`);
  process.exit(0);
}

const ref  = PNG.sync.read(fs.readFileSync(CONFIG.reference));
const curr = PNG.sync.read(fs.readFileSync(CONFIG.current));

// Handle size mismatch gracefully
if (ref.width !== curr.width || ref.height !== curr.height) {
  console.warn(`⚠️   Size mismatch: ref ${ref.width}×${ref.height} vs current ${curr.width}×${curr.height}`);
  console.warn('    Skipping diff. Re-capture reference at the same viewport.');
  process.exit(0);
}

const diff = new PNG({ width: ref.width, height: ref.height });
const mismatch = pixelmatch(
  ref.data, curr.data, diff.data,
  ref.width, ref.height,
  { threshold: CONFIG.threshold }
);

fs.writeFileSync(CONFIG.diff, PNG.sync.write(diff));

const pct = ((mismatch / (ref.width * ref.height)) * 100).toFixed(2);
const icon = pct <= CONFIG.failAt ? '✅' : '❌';
console.log(`${icon}  Pixel mismatch: ${pct}% — diff → ${CONFIG.diff}`);

if (pct > CONFIG.failAt) process.exit(1);
