# Typography

## Font stack

| Role    | Family            | Weight(s)     | Usage |
|---------|-------------------|---------------|-------|
| Display | Fraunces          | 700, 900      | All section headings, nav logo, modal titles |
| Serif   | Playfair Display  | 400i, 700, 700i | Taglines, blockquotes, italic accents |
| Body    | Be Vietnam Pro    | 300, 400, 500, 600 | All body copy, UI labels, buttons |
| Hero only | UTM Euphoria   | 400 (only weight) | "Mã" hero title — do not use elsewhere |

## Google Fonts import
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,900;1,9..144,400;1,9..144,700&family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Playfair+Display:ital,wght@0,700;1,400;1,700&display=swap" rel="stylesheet">
```

## Scale

| Token          | Value                         | Usage |
|----------------|-------------------------------|-------|
| `--text-hero`  | `clamp(88px, 20vw, 240px)`   | Hero title "Mã" |
| `--text-section`| `clamp(40px, 6vw, 80px)`   | Section headings |
| Speaker name   | `clamp(18px, 1.8vw, 24px)`  | Speaker cards |
| Body           | `clamp(0.88rem, 1.2vw, 1.05rem)` | Paragraphs |
| Nav links      | `0.72rem`                    | Navigation |
| Labels         | `0.6rem` uppercase           | Section labels ("01 Về sự kiện") |
| Captions       | `0.72rem`                    | Fine print, notes |

## Line heights
- Headings: `1.0–1.15`
- Body: `1.6`
- Long-form / FAQ: `1.85`

## Rules
- Sentence case for all headings. No Title Case. No ALL CAPS except ≤3-word labels.
- Section labels use: `font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase`
- Never use Inter, Roboto, or system-ui as headline. Fraunces is the display face.
- Playfair Display is italic-only on this brand (quotes, taglines). Use sparingly.
