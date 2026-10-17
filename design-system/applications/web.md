# Web — Application Guidelines

## Stack
Single-file: HTML + CSS + vanilla JS in `index.html`. No framework, no build step.

## Layout system
- Max width: `1280px`, centered with `margin-inline: auto`
- Container padding: `24px` each side (reduces to `16px` at 480px)
- Section padding: `clamp(88px, 11vw, 160px)` vertical

## Navigation
- Fixed top, `60px` height, `backdrop-filter: blur(20px)` on scroll
- Links: `0.72rem` uppercase, `letter-spacing: 0.18em`
- CTA button: red pill (`border-radius: 999px`), white text
- Mobile: hamburger at 768px → full-screen overlay menu

## Hero
- Full viewport (`min-height: 100svh`)
- Background: WebGL page-shader canvas (animated gradient) + CSS grid pattern + grain overlay
- Title: UTM Euphoria font, `clamp(88px, 20vw, 240px)`, `letter-spacing: 0.06em`
- Countdown: 4-unit grid (Days / Hours / Minutes / Seconds)

## Speaker cards grid
- Desktop: `repeat(3, 1fr)` with `gap: 1px`, surface-color background (gives thin-line grid effect)
- Tablet (1024px): 2 columns
- Mobile (768px): 1 column
- Portrait aspect ratio: `3/4`
- Hover: dimmed grid with active card at full brightness + scale(1.03)

## Video section
- 16:9 aspect ratio facade with YouTube thumbnail
- Click-to-load local MP4 (23MB) with autoplay
- Play button: `80px` red circle, centered

## Checkout modal
- Max width: `480px`, `max-height: 90vh`, scrollable
- 3 steps: Form → QR Payment → Confirmation
- VietQR dynamic QR (MB Bank, account 0905242000)
- Reference format: `TEDX{YEAR}-{TIER_PREFIX}{RANDOM}`

## Performance
- Speaker images: WebP, max 600px wide, lazy-loaded
- Fonts: preconnect + `font-display: swap`
- Images: `loading="lazy"` on non-above-fold images
- Cache headers: 1 year for images/fonts (via vercel.json)
