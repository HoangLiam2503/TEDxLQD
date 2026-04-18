# Security Rules

IMPORTANT: Every session, every task — no exceptions.

- NEVER commit `.env`. Add to `.gitignore` before first commit.
- NEVER hardcode API keys, tokens, or secrets in source code.
- Secrets → environment variables → `process.env.VAR_NAME`
- Database → Row Level Security (Supabase RLS).
- Auth → OAuth (Google/GitHub). No plain email+password unless explicitly required.
- All user inputs → validate and sanitize server-side.
- HTTPS everywhere.
- Run `npm audit` before shipping.
- NEVER store sensitive data in localStorage.
