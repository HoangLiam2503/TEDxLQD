# Shadow

The brand uses minimal shadows — the dark canvas makes depth hierarchy through color, not drop shadows.

## Shadows in use
| Context | Value |
|---------|-------|
| Play button glow | `0 8px 32px rgba(230,43,30,0.45)` |
| Play button hover glow | `0 12px 40px rgba(230,43,30,0.6)` |
| CTA button depth | `0 0 0 2px rgba(255,255,255,0.25)` |

## Rules
- No `box-shadow` on cards or panels — use border (`1px solid var(--color-border)`) instead
- Red glow is reserved for the play button only
- Never use `filter: drop-shadow` on text
