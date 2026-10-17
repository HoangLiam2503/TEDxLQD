# Design System — TEDxLe Quy Don Gia Lai Youth — "Nét"

> Extracted from `index.html` :root tokens. This is the source of truth for all visual decisions.
> Update this file whenever tokens change in CSS.
>
> Key visual: `images/Theme.jpg` — cream paper, pink folding fan with a cherry branch,
> layered pastel cloud corners, plum blossoms, concentric arcs, blackletter "Nét".
> Light theme only.

---

## Color Palette

Sampled from the key visual, then adjusted for contrast.

```css
:root {
  --paper:     #fdf6e4;  /* page ground (cream) */
  --paper-2:   #f7eed6;
  --circle:    #eef0dc;  /* soft background discs */
  --mint:      #bce3d1;  /* cloud bands */
  --sky:       #a6d9ea;
  --lilac:     #cfc3ea;
  --blush:     #f2c3cf;
  --pink:      #f5b4d2;  /* fan, blossoms */
  --pink-2:    #f9d2e3;
  --pink-deep: #e48bb4;  /* cord, beads, petal edges */
  --plum-net:  #c35b8e;  /* "Nét" in the key visual — LARGE display text only (3.7:1) */
  --plum:      #a3416f;  /* titles, links, buttons, kickers */
  --bark:      #4a2b28;  /* cherry branch, polaroid captions */
  --text:      #3a2a2d;
  --soft:      #6b5458;  /* secondary copy, meta labels */
  --handle:    #fcd8a6;  /* fan guard / inner ribs */
  --gold:      #f3c64a;  /* blossom eyes */
  --ted-red:   #e62b1e;  /* "TEDx" wordmark ONLY (TED licence) */
}
```

Derived: `--line` (plum 22% + paper) for hairlines, `--wash` (pink 16% + paper) for the recap band.

Measured contrast (WCAG): text/paper 12.6 · soft/paper 6.4 · soft/wash 6.0 · plum/paper 5.5 ·
plum/wash 5.1 · paper on plum (buttons) 5.5 · plum-net/paper 3.7 (large text only).

---

## Typography

```css
--font-display: 'Grenze Gotisch', 'Playfair Display', serif;   /* "Nét", section titles, stats */
--font-serif:   'Playfair Display', 'Iowan Old Style', Georgia, serif; /* italic accents */
--font-body:    'Be Vietnam Pro', -apple-system, 'Segoe UI', sans-serif;
```

Grenze Gotisch is the blackletter with a `vietnamese` subset on Google Fonts. Pirata One,
UnifrakturMaguntia, Jacquard 24 and Bodoni Moda have none — diacritics would fall back.

| Role | Size | Style |
|---|---|---|
| Hero "Nét" | `clamp(110px, 17vw, 210px)` / .8 | Grenze 600, `--plum-net` |
| Section title `.sectitle` | `clamp(56px, 9vw, 128px)` / .95 | Grenze 600, `--plum` |
| Contact title | `clamp(64px, 11vw, 160px)` | Grenze 600 |
| Stats | `clamp(42px, 4.4vw, 64px)` | Grenze 600 |
| Kicker, nav links, buttons, names, captions | 15–23px | Playfair italic 400 |
| Meta labels / roles | 10–12px, `.14–.32em`, uppercase | Be Vietnam Pro 500 |
| Body | 16px / 1.7 | Be Vietnam Pro, `--soft` |
| Lockup | TEDx 800 red · "Le Quy Don Gia Lai" 300 · "Youth" 700 | Be Vietnam Pro |

---

## Layout & Spacing

```css
.wrap { max-width: 1320px; padding: 0 clamp(16px, 4vw, 48px); }
.sec  { padding: clamp(72px, 10vw, 140px) 0; }
--nav-h: 62px;
```

Page order: Nav → Hero "Nét" → ticker → 01 Core Team → 02 Recap mùa Mã → 03 Contact/footer.

- Core team (after 21st.dev "Team Showcase"): 3 staggered photo columns + sticky grouped name
  list; hovering a photo or a name highlights both (`data-member`). ≤900px: 2-col grid with
  captions, Organizer full-width on top, list hidden.
- Recap (after 21st.dev "Hanging Polaroid Image Carousel"): count-up stats + polaroids pegged
  on a beaded string; drag / ‹ › / ←→, autoplay 5s (pauses on hover/focus), click/Enter on the
  centre print opens a `<dialog>` lightbox.

## Shape

| Pattern | Value |
|---|---|
| Buttons, pills | `border-radius: 99px` |
| Nav mail pill | elliptical `border-radius: 50%` |
| Team photos | arch `999px 999px 10px 10px`, 3:4 |
| Polaroids | white print, 10px border, 48px caption strip, wooden peg |

## Motion

```css
--ease:   cubic-bezier(.2, .7, .2, 1);
--spring: cubic-bezier(.3, 1.5, .5, 1);
```

Hero load sequence: clouds slide in from corners (0–1.4s) → fan ribs unfold (`--i` stagger,
.35s+) → inner band pops → "Nét" clip-opens (1s) → branch draws (1.2s) → blossoms bloom
(1.7s+) → text/buttons rise. Ambient: clouds breathe (`bob`), cord sways, sparkles twinkle,
petals fall (JS-generated, 14 desktop / 8 mobile), mouse parallax on `.ly1–.ly3`.
Sections: `.reveal` + IntersectionObserver. All motion off under `prefers-reduced-motion`.

## Illustration sprite

`<defs>` at top of `<body>`: `#plum` (colour via `.plum--white` / `.plum--pink`, which set
`--pf/--pe/--pr`), `#sakura`, `#fall`, `#spark`, `#cloud` (four nested scalloped bands),
`#arcs`, gradients `#g-fan-a/b`, `#g-fan-inner`, `#g-handle`, `#g-sakura`, `#g-gold`
(stops coloured through `.st-*` classes).

## Z-Index Stack

| Layer | Value |
|---|---|
| Lightbox | `<dialog>` top layer |
| Nav (sticky) | 40 |
| Hero title | 2 |
| Falling petals | 1 |
