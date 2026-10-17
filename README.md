# TEDxLe Quy Don HS Binh Dinh — *Mã*

> 🇬🇧 [Read this in English](README.en.md)

**Live:** <https://tedxlequydon.org/>

Landing page một trang cho sự kiện **TEDxLe Quy Don HS Binh Dinh 2026 — chủ đề "Mã"**,
ngày **28/06/2026** tại Quy Nhơn.

Trang cung cấp thông tin sự kiện (diễn giả, lịch trình, FAQ) và luồng đăng ký vé.

---

## Stack

Không framework, không build step. Toàn bộ HTML + CSS + JS nằm trong **một file duy nhất**: `index.html` (~3.900 dòng).

| Thành phần | Chi tiết |
|---|---|
| Markup / style / script | `index.html` (inline CSS + vanilla JS) |
| Font chữ | Fraunces + Playfair Display (display), Be Vietnam Pro (body) — Google Fonts; `UTM Euphoria` local ở `font/` |
| Media | `images/speakers/*.webp`, `video/*.mp4` (hero background) |
| Deploy | Netlify → <https://tedxlequydon.org/> (`netlify.toml`, publish thư mục gốc) |
| Tooling (dev-only) | Puppeteer + pixelmatch cho screenshot diff, sharp cho nén ảnh |

---

## Chạy local

```bash
npm install          # chỉ cần cho tooling screenshot/ảnh
npm run dev          # http://localhost:3000 (python3 -m http.server)
```

Không cần server cũng được — mở thẳng `index.html` trong trình duyệt là chạy.

---

## Scripts

```bash
npm run dev                # serve tại http://localhost:3000
npm run screenshot         # chụp 1440×900, diff với refs/target-desktop.png
npm run screenshot:mobile  # chụp 390×844, diff với refs/target-mobile.png
node scripts/compress-images.mjs   # convert images/speakers/* → .webp (600px, q82)
```

`screenshot.js` thoát với mã lỗi 1 nếu sai lệch pixel > 5%. Kết quả ghi vào `screenshots/`
(`current.png`, `diff.png`) — thư mục này đã được gitignore.

**Tạo reference lần đầu:**

```bash
npm run dev                                          # terminal 1
npm run screenshot                                   # terminal 2 (chưa có ref)
cp screenshots/current.png refs/target-desktop.png   # promote thành reference
```

---

## Cấu trúc thư mục

```
.
├── index.html              ← toàn bộ trang: HTML + CSS + JS
├── images/speakers/        ← ảnh diễn giả (.jpg gốc + .webp đã nén)
├── video/                  ← video nền hero
├── font/                   ← UTM-Euphoria.ttf
├── QR CODE/                ← QR thanh toán
├── docs/design-system.md   ← token màu / typography trích từ :root
├── design-system/          ← brand kit đầy đủ (tokens, voice, components)
├── scripts/                ← screenshot.js, compress-images.mjs
├── refs/                   ← ảnh reference cho screenshot diff (commit vào git)
├── screenshots/            ← output tạm (gitignored)
└── netlify.toml            ← publish dir + cache headers
```

---

## Các section của trang

`#hero` → `#about` → `#speakers` → `#schedule` → `#tickets` → `#faq`

JS trong trang xử lý: countdown, modal diễn giả, custom cursor, shader nền canvas,
scroll animation, và toast "đã đóng bán vé" (`#closedToast`).

---

## Design system

`docs/design-system.md` là nguồn chuẩn cho token màu/typography — cập nhật file này mỗi khi
đổi biến trong `:root` của `index.html`.

Brand kit đầy đủ (logo, voice, component spec, Tailwind preset) nằm ở `design-system/` —
đọc `design-system/CLAUDE.md` trước khi tạo asset mới.

Nguyên tắc bắt buộc:
- **Không** dùng Inter / Roboto / Arial / system-ui làm font tiêu đề.
- Mọi token màu đi qua CSS custom properties, không hardcode hex rải rác.
- Nền luôn có layer (gradient / noise), không dùng `#fff` hay `#000` phẳng.

---

## Deploy

Push lên `main` → Netlify tự build và publish lên <https://tedxlequydon.org/>. `.netlifyignore` loại `scripts/`, `refs/`, `docs/`, `*.md`
khỏi bundle production. Ảnh và font được cache 1 năm (immutable), HTML cache 1 giờ.

---

## Lưu ý khi sửa code

- **Một file duy nhất** — đừng tách CSS/JS ra file riêng, mọi thứ nằm trong `index.html`.
- HTML của modal **phải** đặt trước thẻ `<script>`, nếu không `getElementById` trả về `null`.
- `z-index` của custom cursor phải lớn hơn modal (cursor: 10002, modal: 10000).
- Số tài khoản ngân hàng / MoMo trong luồng checkout hiện là **placeholder** — thay trước khi mở bán.
- Ảnh diễn giả: thêm file `.jpg`/`.png` vào `images/speakers/`, chạy `compress-images.mjs`,
  rồi tham chiếu bản `.webp` trong HTML.
