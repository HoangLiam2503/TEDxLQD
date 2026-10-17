# Email — Application Guidelines

## Triggered emails (via Google Apps Script / GmailApp)

### Order confirmation
- **From:** TEDxLe Quy Don HS Binh Dinh `<tedxlequydonbinhdinh@gmail.com>`
- **Display name:** TEDxLe Quy Don HS Binh Dinh
- **Subject:** Xác nhận đặt vé — TEDxLe Quy Don HS Binh Dinh 2026
- **Tone:** Warm + professional. Second person "bạn."

### Key data in confirmation email
- Họ tên, email, số điện thoại
- Mã đơn hàng (TEDX2026-XXXX)
- Số lượng vé + tổng tiền
- Ngày sự kiện: 28/06/2026 · Gia Lai
- Contact: tedxlequydonbinhdinh@gmail.com

## HTML email constraints
- Inline CSS only (no `<style>` blocks for Gmail)
- Max width: `600px`
- Dark background (`#141414`) may render as white in some clients — test on Gmail/Apple Mail
- Safe fonts: Georgia (serif fallback for Fraunces), Arial (sans fallback for Be Vietnam Pro)

## Plain-text fallback
Always include a plain-text version. Strip HTML, keep all data fields.
