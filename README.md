# TEDxLe Quy Don HS Binh Dinh — *Mã*

Single-page landing site for **TEDxLe Quy Don HS Binh Dinh 2026 — theme "Mã"**,
held **June 28, 2026** in Quy Nhon, Vietnam.

The page covers event information (speakers, schedule, FAQ) and the ticket registration flow.

---

## Stack

No framework, no build step. All HTML, CSS, and JS live in **one single file**: `index.html` (~3,900 lines).

| Piece | Details |
|---|---|
| Markup / style / script | `index.html` (inline CSS + vanilla JS) |
| Typefaces | Fraunces + Playfair Display (display), Be Vietnam Pro (body) via Google Fonts; `UTM Euphoria` served locally from `font/` |
| Media | `images/speakers/*.webp`, `video/*.mp4` (hero background) |
| Hosting | Netlify (`netlify.toml`, publishes the repo root) |
| Tooling (dev-only) | Puppeteer + pixelmatch for screenshot diffing, sharp for image compression |

---

## Running locally

```bash
npm install          # only needed for the screenshot / image tooling
npm run dev          # http://localhost:3000 (python3 -m http.server)
```

A server isn't strictly required — opening `index.html` directly in a browser works too.

---

## Scripts

```bash
npm run dev                # serve on http://localhost:3000
npm run screenshot         # capture 1440×900, diff against refs/target-desktop.png
npm run screenshot:mobile  # capture 390×844, diff against refs/target-mobile.png
node scripts/compress-images.mjs   # convert images/speakers/* → .webp (600px wide, q82)
```

`screenshot.js` exits with code 1 when the pixel mismatch exceeds 5%. Output lands in
`screenshots/` (`current.png`, `diff.png`) — that directory is gitignored.

**Creating the reference images for the first time:**

```bash
npm run dev                                          # terminal 1
npm run screenshot                                   # terminal 2 (no ref yet)
cp screenshots/current.png refs/target-desktop.png   # promote to reference
```

---

## Directory layout

```
.
├── index.html              ← the entire page: HTML + CSS + JS
├── images/speakers/        ← speaker photos (original .jpg + compressed .webp)
├── video/                  ← hero background video
├── font/                   ← UTM-Euphoria.ttf
├── QR CODE/                ← payment QR code
├── docs/design-system.md   ← color / typography tokens extracted from :root
├── design-system/          ← full brand kit (tokens, voice, components)
├── scripts/                ← screenshot.js, compress-images.mjs
├── refs/                   ← reference images for screenshot diffing (committed)
├── screenshots/            ← throwaway output (gitignored)
└── netlify.toml            ← publish dir + cache headers
```

---

## Page sections

`#hero` → `#about` → `#speakers` → `#schedule` → `#tickets` → `#faq`

The inline JS handles: countdown timer, speaker modal, custom cursor, canvas background shader,
scroll animations, and the "ticket sales closed" toast (`#closedToast`).

---

## Design system

`docs/design-system.md` is the source of truth for color and typography tokens — update it
whenever the `:root` variables in `index.html` change.

The full brand kit (logo, voice, component specs, Tailwind preset) lives in `design-system/` —
read `design-system/CLAUDE.md` before producing any new asset.

Non-negotiables:
- **Never** use Inter / Roboto / Arial / system-ui as a headline font.
- Every color goes through a CSS custom property — no hex values scattered through the file.
- Backgrounds are always layered (gradient / noise), never flat `#fff` or `#000`.

---

## Deploying

Push to `main` and Netlify builds automatically. `.netlifyignore` keeps `scripts/`, `refs/`,
`docs/`, and `*.md` out of the production bundle. Images and fonts are cached for a year
(immutable); HTML is cached for an hour.

---

## Notes for anyone editing this

- **Single file** — don't split CSS/JS into separate files; everything stays in `index.html`.
- Modal HTML **must** appear before the `<script>` tag, otherwise `getElementById` returns `null`.
- The custom cursor's `z-index` must stay above the modal's (cursor: 10002, modal: 10000).
- Bank / MoMo account numbers in the checkout flow are **placeholders** — replace them before sales open.
- Adding a speaker photo: drop the `.jpg`/`.png` into `images/speakers/`, run `compress-images.mjs`,
  then reference the generated `.webp` in the HTML.
