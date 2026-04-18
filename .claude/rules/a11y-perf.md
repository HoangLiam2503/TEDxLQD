# Accessibility & Performance

## A11Y
- All images: descriptive `alt` text.
- Color contrast: 4.5:1 minimum body text (WCAG 2.1 AA).
- Focus states: `:focus-visible` on all interactive elements.
- Semantic HTML: `<nav>` `<main>` `<article>` `<button>` — never `<div onClick>`.
- `aria-label` on all icon-only buttons.

## Performance
- Images: Next.js `<Image>` or `loading="lazy"`.
- Fonts: preload + `font-display: swap`.
- Targets: LCP < 2.5s, CLS < 0.1, FID < 100ms.
- Lighthouse > 90 before shipping.
