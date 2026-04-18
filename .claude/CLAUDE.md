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
- Name:            TEDxLe Quy Don HS Binh Dinh — Mã
- Type:            Single-page event landing page
- Stack:           Plain HTML + CSS + vanilla JS (single file: index.html)
- Target audience: Students, local community, Gia Lai province
- Primary goal:    Event info + ticket registration
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
- Vietnamese typography: use Fraunces (display) + Be Vietnam Pro (body). Never Bebas Neue.
- Modal HTML must come **before** `<script>` tag or getElementById returns null.
- Custom cursor z-index must exceed modal z-index (cursor: 10002, modal: 10000).
- Video background: local file at `./YTDown.com_YouTube_TEDx-intro-video_Media_JSP7GPU3Eic_001_1080p.mp4`
- Bank/MoMo account numbers in checkout modal are placeholders — replace before launch.

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
- 2026-04-12: Split rules into .claude/rules/ component files (Lam).
- 2026-04-07: Rewrote around screenshot-driven loop as primary workflow (Lam).
```
