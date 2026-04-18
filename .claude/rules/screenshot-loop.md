# Screenshot Loop — Primary Workflow

IMPORTANT: For every visual build or edit task, follow this exact loop.

## Setup (one-time)

```bash
npm i puppeteer pixelmatch pngjs
mkdir -p screenshots refs scripts
```

Create `scripts/screenshot.js`:
```javascript
import puppeteer from 'puppeteer';
import fs from 'fs';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const LOCAL_URL   = 'http://localhost:3000';
const REFERENCE   = './refs/target.png';
const CURRENT_OUT = './screenshots/current.png';
const DIFF_OUT    = './screenshots/diff.png';
const VIEWPORT    = { width: 1440, height: 900 };

const browser = await puppeteer.launch();
const page    = await browser.newPage();
await page.setViewport(VIEWPORT);
await page.goto(LOCAL_URL, { waitUntil: 'networkidle2' });
await page.screenshot({ path: CURRENT_OUT, fullPage: true });
await browser.close();

const ref  = PNG.sync.read(fs.readFileSync(REFERENCE));
const curr = PNG.sync.read(fs.readFileSync(CURRENT_OUT));
const { width, height } = ref;
const diff = new PNG({ width, height });
const mismatch = pixelmatch(ref.data, curr.data, diff.data, width, height, { threshold: 0.1 });
fs.writeFileSync(DIFF_OUT, PNG.sync.write(diff));

const pct = ((mismatch / (width * height)) * 100).toFixed(2);
console.log(`Pixel mismatch: ${pct}% — diff saved to ${DIFF_OUT}`);
if (pct > 5) process.exit(1);
```

Add to `package.json`: `"screenshot": "node scripts/screenshot.js"`

## The Loop

```
STEP 1 — Receive reference
  Read ./refs/target.png. Analyze: layout, spacing, colors, typography, grid.
  Do NOT write code yet.

STEP 2 — Plan the section
  Pick one section: Header / Hero / Features / CTA / Footer.
  Never attempt the full page in one pass.

STEP 3 — Build
  Write code for this section only.

STEP 4 — Capture
  Run: node scripts/screenshot.js
  Read ./screenshots/current.png visually.

STEP 5 — Diff
  Read ./screenshots/diff.png — red pixels = mismatch.
  Note pixel mismatch % from console. Identify top 1–3 deltas only.

STEP 6 — Fix (targeted)
  Fix only the identified deltas. Do NOT touch things that already match.

STEP 7 — Repeat from STEP 4
  Continue until mismatch < 5% OR user approves visually.

STOP: Do not loop more than 6 iterations per section without asking the user.
```

IMPORTANT: Never clone an entire page in one pass. One section per loop.

## Reference Setup

- Desktop: 1440×900. Mobile: 390×844 (iPhone 14).
- Store refs in `./refs/`: `target-desktop.png`, `target-mobile.png`, `hero.png`, `nav.png`, `footer.png`
- Section crop: use `clip: { x: 0, y: 0, width: 1440, height: 800 }` in Puppeteer

## Delta Fix Priority

| Priority | Type | Common fix |
|---|---|---|
| 1 | Layout / spacing | margin, padding, gap, height |
| 2 | Typography | font-family, size, weight, line-height |
| 3 | Color | hex, opacity, gradient stops |
| 4 | Alignment | flexbox axis, justify-content, align-items |
| 5 | Shape | border-radius, box-shadow, border-width |
| 6 | Images | missing asset, wrong aspect ratio |

## Design System Extraction (first run)

Send with reference screenshot:
> "Analyze this screenshot. Extract font families, size scale, full color palette, spacing scale, border-radius, shadows. Output as CSS `:root` variables block. Save to `docs/design-system.md`."
