# TEDxLe Quy Don HS Binh Dinh — Design System

Extracted from the live site at **tedxlequydon.org** on 2026-05-17.

## Quick start

1. Import tokens: `design-system/tokens/tokens.css`
2. Read non-negotiables: `design-system/CLAUDE.md`
3. Check voice rules before writing copy: `design-system/voice/examples.md`

## Folder structure

```
design-system/
├── CLAUDE.md                 ← Load first. Non-negotiables for any LLM.
├── BRAND-SUMMARY.md          ← One-page brand snapshot
├── foundations/
│   ├── brand.md              ← Identity, personality, event facts
│   ├── color.md              ← Palette + usage rules
│   ├── typography.md         ← Font stack + scale
│   ├── spacing.md            ← Layout tokens + breakpoints
│   ├── radius.md             ← Border radius by context
│   ├── shadow.md             ← Shadow usage
│   ├── motion.md             ← Animation patterns + durations
│   ├── iconography.md        ← Icon library + rules
│   └── imagery.md            ← Photography direction
├── tokens/
│   ├── tokens.json           ← W3C-ish token schema
│   ├── tokens.css            ← CSS custom properties (import this)
│   └── tailwind.preset.js    ← Drop-in Tailwind preset
├── logo/
│   └── usage.md              ← TEDx logo rules + clearspace
├── voice/
│   ├── examples.md           ← Do/don't pairs per surface
│   └── homepage-copy.md      ← Drop-in copy variants
└── applications/
    ├── web.md                ← Web implementation guide
    ├── social-instagram.md   ← Instagram post/story guidelines
    └── email.md              ← Transactional email guidelines
```

## What's not here yet
- Logo SVG files (pending official TEDx license files from the organizer)
- React components (this project uses vanilla HTML/CSS/JS — no React)
- Deck/presentation templates (none shipped yet)
