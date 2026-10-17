# CLAUDE.md — TEDx Web Project
> Last updated: April 2026 | Keep this file under 100 lines. Rules live in `.claude/rules/`.

---

## 1. MAINTENANCE

- Per line: *"Would removing this cause Claude to make mistakes?"* If no → cut it.
- Update rules in `.claude/rules/` — do not paste specs inline here.
- Prefix critical rules with `IMPORTANT:` or `YOU MUST`.

---

## 2. PROJECT CONTEXT

```
- Name:            TEDxLe Quy Don Gia Lai Youth — identity "Nét" (key visual: images/Theme.jpg)
- Type:            Single-page organisation site (past season "Mã", 28.06.2026, is over)
- Stack:           Plain HTML + CSS + vanilla JS (single file: index.html)
- Target audience: Students, local community, Gia Lai province
- Primary goal:    Introduce the core team + recap season Mã (no ticketing)
- Local URL:       Open index.html directly in browser (no server needed)
```

---

## 3. COMMANDS

```bash
npm run dev              # serve at http://localhost:3000 (python3 http.server)
npm run screenshot       # capture + diff vs refs/target-desktop.png
npm run screenshot:mobile  # capture + diff vs refs/target-mobile.png
```

**First-time reference setup:**
```bash
npm run dev              # start server in one terminal
npm run screenshot       # captures current.png (no ref yet)
cp screenshots/current.png refs/target-desktop.png  # promote to reference
```

**Design system:** @docs/design-system.md

---

## 4. GOTCHAS

- Single file architecture: all CSS, HTML, JS in `index.html`. No separate files.
- Vietnamese typography: Grenze Gotisch (blackletter titles) + Be Vietnam Pro (body) + Playfair Display
  italic (accents). Most blackletter fonts (Pirata One, UnifrakturMaguntia) and Bodoni Moda have NO
  Vietnamese subset — check Google Fonts subsets before swapping. Never Bebas Neue.
- Light theme only (no dark mode). `--plum-net` (#c35b8e) is for large display text only (3.7:1).
- Dialog/lightbox HTML must come **before** `<script>` tag or getElementById returns null.
- SVG illustrations reuse the `<defs>` sprite at top of `<body>` (`#plum`, `#sakura`, `#cloud`, `#fall`…).
- Photos: originals in `images/_source/` (gitignored, not deployed), served copies in `images/team/` (720px) and `images/recap/` (1600 + -800).
  Re-encode with `node scripts/compress-images.mjs <src> <outDir> <width> [slug]`.
  sharp can't read HEIC — convert first: `sips -s format jpeg in.HEIC --out x.jpg`.

---

## 5. RULES

@.claude/rules/screenshot-loop.md

@.claude/rules/anti-slop.md

@.claude/rules/code-style.md

@.claude/rules/security.md

@.claude/rules/a11y-perf.md

@.claude/rules/git-workflow.md

---

## 6. CHANGELOG

```
- 2026-10-17: Rebrand to "Nét" (TEDxLe Quy Don Gia Lai Youth): core team + recap Mã, removed ticketing (Lam).
- 2026-10-16: Redesign to Iris Folio "Dusk" (light + dark), removed shader/cursor (Lam).
- 2026-04-12: Split rules into .claude/rules/ component files (Lam).
- 2026-04-07: Rewrote around screenshot-driven loop as primary workflow (Lam).
```
