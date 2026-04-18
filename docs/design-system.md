# Design System — TEDxLe Quy Don HS — Mã

> Extracted from `index.html` :root tokens. This is the source of truth for all visual decisions.
> Update this file whenever tokens change in CSS.

---

## Color Palette

```css
:root {
  /* Backgrounds */
  --bg:           #141414;   /* page background — charcoal warm */
  --surface:      #1c1d1d;   /* cards, panels */
  --border:       #272828;   /* default borders */
  --border-light: #333434;   /* hover / emphasis borders */

  /* Brand */
  --red:          #E62B1E;   /* TED red — CTAs, accents, icons */
  --red-dim:      rgba(230, 43, 30, 0.15); /* red tint backgrounds */

  /* Text */
  --text:         #f0ede8;   /* primary — warm white */
  --text-dim:     #a8a8a8;   /* secondary — mid grey */
  --text-muted:   #6a6a6a;   /* tertiary — dark grey */
}
```

### Usage rules
| Token | Use for |
|---|---|
| `--bg` | Page background, hero section |
| `--surface` | Cards, modal, nav scrolled state |
| `--border` | All hairline separators |
| `--border-light` | Hover states, active borders |
| `--red` | Buttons, badges, section label accents, links |
| `--text` | Headings, body copy |
| `--text-dim` | Labels, nav links, captions |
| `--text-muted` | Placeholders, decorative copy |

---

## Typography

### Font Families

```css
--font-display: 'Fraunces', serif;        /* hero title, large headings */
--font-serif:   'Playfair Display', serif; /* pull quotes, italic accents */
--font-body:    'Be Vietnam Pro', sans-serif; /* all body copy, UI labels */
```

**Google Fonts import:**
```
Fraunces: ital,opsz,wght @ 0,9..144,700; 0,9..144,900; 1,9..144,400; 1,9..144,700
Be Vietnam Pro: ital,wght @ 0,300; 0,400; 0,500; 0,600; 1,300; 1,400
Playfair Display: ital,wght @ 0,700; 1,400; 1,700
```

### Type Scale

| Role | Size | Weight | Tracking | Font |
|---|---|---|---|---|
| Hero title | `clamp(80px, 18vw, 220px)` | 900 | -0.01em | Fraunces |
| Section title | `clamp(26px, 3vw, 44px)` | 700 | 0.01em | Fraunces |
| Section subtitle | `clamp(20px, 2.5vw, 34px)` | 700 | — | Fraunces |
| Hero tagline | `clamp(17px, 1.8vw, 24px)` | 400 | 0.02em | Be Vietnam Pro |
| Body / quote | `clamp(0.88rem, 1.2vw, 1.05rem)` | 400 | — | Playfair Display |
| Section label | `0.6rem` | 700 | 0.2em | Be Vietnam Pro |
| Nav links | `0.72rem` | 500 | 0.14em | Be Vietnam Pro |
| Buttons | `0.72–0.85rem` | 600–700 | 0.06–0.16em | Be Vietnam Pro |
| Tags / pills | `0.58–0.68rem` | 700 | 0.18–0.28em | Be Vietnam Pro |
| Base body | `16px` | 400 | — | Be Vietnam Pro |

---

## Spacing

```css
--nav-h:      60px;                        /* fixed nav height */
--max-w:      1280px;                      /* container max width */
--section-py: clamp(88px, 11vw, 160px);   /* section vertical padding */
```

### Common padding values
| Context | Value |
|---|---|
| Container | `width: min(1280px, 100% - 48px)` |
| Section horizontal | `48px` (via container) |
| Card padding | `24–32px` |
| Pill padding | `6–10px vertical, 14–20px horizontal` |
| Nav link padding | `0 22px` |

---

## Border Radius

| Pattern | Value | Used for |
|---|---|---|
| Pill | `999px` | All CTAs, badges, tags, labels |
| Card | `12–16px` | Modal, ticket cards (if any) |
| Circle | `50%` | Cursor, avatars |

---

## Shadows & Effects

```css
/* Film grain overlay */
.grain-overlay {
  opacity: 0.045;
  background-image: url("data:image/svg+xml,...feTurbulence...");
  background-size: 300px 300px;
  animation: grain-shift 0.6s steps(1) infinite;
}

/* Vignette */
.vignette {
  background: radial-gradient(ellipse 80% 70% at 50% 50%,
    transparent 50%, rgba(10,10,10,0.55) 100%);
}

/* Glassmorphism pill (hero badge, scroll hint) */
border: 1px solid rgba(255,255,255,.12);
background: rgba(255,255,255,.05);
backdrop-filter: blur(8px);
border-radius: 999px;
```

---

## Easing

```css
--ease-out:    cubic-bezier(.165, .84, .44, 1);  /* reveals, opens */
--ease-in-out: cubic-bezier(.455, .03, .515, .955); /* toggles */
```

---

## Z-Index Stack

| Layer | Value | Element |
|---|---|---|
| Cursor dot | 10002 | `.cursor` |
| Cursor ring | 10001 | `.cursor-ring` |
| Modal backdrop | 10000 | `.modal-backdrop` |
| Grain overlay | 9990 | `.grain-overlay` |
| Vignette | 9989 | `.vignette` |
| Nav | 100 | `.nav` |
| Hero content | 3 | `.hero__center`, `.hero__bottom` |
| Hero overlays | 2 | `::before` grid, `::after` glow, `.hero__bg-bottom` |
| Hero video scrim | 1 | `.hero__video-overlay` |
| Hero video | 0 | `.hero__video-bg` |

---

## Component Patterns

### Section Label
```html
<p class="section-label"><em>01</em> Label text</p>
```
```css
/* pill with red number badge + uppercase tracking */
border: 1px solid rgba(255,255,255,.1);
background: rgba(255,255,255,.04);
border-radius: 999px;
padding: 7px 16px 7px 8px;
```

### CTA Button (primary)
```css
background: var(--red);
color: #fff;
border-radius: 999px;
padding: 9–15px 20–24px;
font-weight: 600–700;
letter-spacing: 0.06–0.16em;
text-transform: uppercase;
```

### CTA Button (outline)
```css
border: 1px solid var(--border-light);
color: var(--text-dim);
border-radius: 999px;
```
