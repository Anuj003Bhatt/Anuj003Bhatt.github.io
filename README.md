# Anuj Bhatt — Systems Architect Portfolio

React + Vite + TypeScript portfolio.

## Architecture

- `src/data/` — content and configuration; no presentation markup.
- `src/components/` — reusable presentation and layout components.
- `src/pages/` — route-level compositions.
- `src/app/` — application shell and routing.
- `src/styles/` — the existing Systems // Architect design system plus React-specific refinements.
- `public/assets/` — existing portfolio assets, résumé and static files.

The navigation, footer, testimonials, toolkit, experience, projects and case studies are now data-driven. A content change should normally happen in `src/data/` without editing multiple pages.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the Vite app and copies the SPA entry point to `dist/404.html`. This keeps clean React Router URLs working when GitHub Pages receives a direct request for a nested route.

