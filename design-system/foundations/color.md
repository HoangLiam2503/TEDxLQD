# Color

## Philosophy
One primary color (TED red). Everything else is shades of near-black and warm off-white. No competing accent colors.

## Palette

| Token            | Hex / Value                  | Usage |
|------------------|------------------------------|-------|
| `--color-bg`     | `#141414`                    | Page background |
| `--color-surface`| `#1c1d1d`                    | Cards, modals, panels |
| `--color-border` | `#272828`                    | Default borders, dividers |
| `--color-border-light` | `#333434`             | Subtle separators |
| `--color-red`    | `#eb0028`                    | CTAs, accents, badges — TED brand red |
| `--color-red-dim`| `rgba(235, 0, 40, 0.15)`   | Red tint backgrounds (icons, highlights) |
| `--color-text`   | `#f0ede8`                    | Primary text — warm off-white |
| `--color-text-dim` | `#a8a8a8`                  | Secondary text, captions |
| `--color-text-muted` | `#b8ab96`                | Labels, fine print |

## Rules
- Red (`#eb0028`) is reserved for: primary CTA buttons, section number labels, accent lines. Never use as a background fill on large areas.
- Never use pure white (`#ffffff`) or pure black (`#000000`) as a canvas. The brand canvas is `#141414`.
- Text on dark: always `#f0ede8` (primary) or `#a8a8a8` (secondary). Never pure white.
- Do not introduce additional accent colors (purple, blue, green) — any semantic color (success, error) uses red tints or neutral grays.
