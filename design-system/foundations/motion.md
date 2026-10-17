# Motion

## Philosophy
Minimal. One orchestrated page-load stagger. No parallax, no looping video, no scroll-jacking.

## Easing
- `--ease-out: cubic-bezier(.165, .84, .44, 1)` — default for reveals and entrances
- `--ease-in-out: cubic-bezier(.455, .03, .515, .955)` — for toggles and transitions

## Durations
- Fast (hover, micro): `160ms – 240ms`
- Reveal (scroll-triggered): `900ms`
- Stagger delay per item: `0.1s, 0.2s, 0.3s, 0.45s`

## Patterns in use

| Pattern | CSS | Usage |
|---------|-----|-------|
| `slideUp` | `translateY(110%) → 0`, 1.1s ease-out | Hero title entrance |
| `fadeIn` | `opacity 0 → 1` | Hero badge, buttons, tagline |
| `reveal` | `opacity 0, translateY(32px) → visible` | All scroll-triggered sections |
| `ticker` | `translateX 0 → -50%`, 28s linear infinite | Bottom marquee strip |

## Rules
- Never animate layout properties (width, height, top, left). Only transform + opacity.
- Grain overlay: `steps(1)` timing — avoid on low-end devices.
- Always respect `@media (prefers-reduced-motion: reduce)` — disable all animation when set.
