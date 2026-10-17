# Iconography

## Library
Inline SVG icons from Lucide (stroke-based, 24×24 viewBox). No icon font, no external sprite.

## Style
- `stroke-width: 2`
- `stroke: currentColor` (inherits text color)
- `fill: none`
- `aria-hidden="true"` on all decorative icons

## Sizes in use
| Context | Size |
|---------|------|
| Button arrow | 14×14px |
| Nav CTA arrow | 12×12px |
| FAQ toggle (+ / ×) | 18×18px via CSS pseudo-elements |
| Play button | 32×32px (inside 80px red circle) |
| Success checkmark | 28×28px |
| Copy icon | 14×14px |

## Rules
- Always `aria-hidden="true"` on decorative icons
- Icon-only buttons must have `aria-label`
- Never use emoji as icons in UI
