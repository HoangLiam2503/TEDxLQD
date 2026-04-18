# Anti-"AI Slop" Rules

Apply whether using a reference screenshot or building from scratch.

**Typography:** NEVER use Inter, Roboto, Arial, system-ui as headline font.
Choose distinctive fonts. Pair serif headline + clean sans-serif body.

**Color:** NEVER default to purple gradient on white. Use CSS variables for all tokens.
Draw from IDE themes (One Dark, Catppuccin), editorial design, cultural aesthetics.

```css
:root {
  --color-bg:      #0f0f0f;
  --color-surface: #1a1a1a;
  --color-accent:  #e8ff47;
  --color-text:    #f0ede8;
  --color-muted:   #6b6b6b;
  --font-display:  'Playfair Display', serif;
  --font-body:     'DM Sans', sans-serif;
}
```

**Motion:** One orchestrated page-load stagger (`animation-delay`). CSS-only for HTML, Framer Motion for React. No scattered micro-interactions.

**Backgrounds:** Layer CSS gradients, patterns, or noise. Never flat `#fff` / `#000`.

**Layout:** Avoid card-grid-card-grid. Use asymmetry, large type, whitespace as design element.
Landing structure: `Hero → Problem → Solution → Features → Proof → CTA`
