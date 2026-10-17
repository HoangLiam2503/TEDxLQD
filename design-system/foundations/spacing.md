# Spacing

## Layout tokens
| Token           | Value                         | Usage |
|-----------------|-------------------------------|-------|
| `--nav-h`       | `60px`                        | Navigation bar height |
| `--max-w`       | `1280px`                      | Max content width |
| `--section-py`  | `clamp(88px, 11vw, 160px)`   | Section vertical padding |

## Container
```css
.container { width: min(1280px, 100% - 48px); margin-inline: auto; }
/* 480px and below: */
.container { width: min(1280px, 100% - 32px); }
```

## Key spacing values (from extracted scale)
`2, 3, 4, 6, 7, 8, 9, 10, 12, 13, 14, 16, 20, 22, 24, 28, 32, 40, 56, 160px`

## Breakpoints
| Name    | Value  | Change |
|---------|--------|--------|
| Desktop | >1024px | Full layout |
| Tablet  | 1024px | FAQ/footer collapse to 1-col |
| Mobile  | 768px  | Nav hides, hamburger appears; speakers 1-col |
| Small   | 480px  | Reduced padding, smaller buttons |
