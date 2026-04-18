# Code Style

- **Language:** TypeScript strict mode. No `any`.
- **Modules:** ES modules (import/export). Never CommonJS (require).
- **Components:** Functional + hooks only. No class components.
- **Exports:** Named exports. Default export only for pages/routes.
- **State:** Zustand for global state. See `src/stores/`.
- **Styling:** Tailwind utilities + CSS variables for tokens. No inline styles.
- **Formatting:** Prettier on save. 2-space indent. Single quotes.
- **File names:** kebab-case files, PascalCase components.
