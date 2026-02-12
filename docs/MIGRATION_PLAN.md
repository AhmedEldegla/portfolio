# Portfolio Migration Plan (HTML/CSS/JS → Angular)

## Current state summary
- Single-page static portfolio with handcrafted HTML/CSS/JS and section anchors.
- Visual identity is strong (dark-first, gradients, personal branding) and should be preserved.
- JavaScript bundles multiple concerns in one file (theme, nav, contact/email, reveals, cursor effects).
- SEO basics exist (meta tags + JSON-LD), but route-level metadata and crawl artifacts are limited.
- Contact form currently includes provider credentials in client code, which is unsafe for production.

## Target architecture
- Angular latest (standalone-first, strict TypeScript).
- `src/app/core`: singleton services (SEO, theme, projects API abstraction).
- `src/app/shared`: reusable UI shell components (navbar/footer/button cards over time).
- `src/app/features`: route-level pages (home/about/projects/skills/contact) with lazy loading.
- Data-driven projects from service/source to keep updates low-friction.
- Global design tokens via CSS variables for light/dark themes.

## Step-by-step plan
1. Bootstrap Angular workspace scaffold and strict tooling baseline.
2. Implement shell layout + sticky navbar + route skeleton.
3. Migrate sections to feature pages with semantic HTML and responsive styles.
4. Move project cards to typed data source and render with templates.
5. Implement reactive contact form and safe backend strategy (serverless endpoint + env vars).
6. Add route-level SEO updates, robots/sitemap, and structured data.
7. Add linting, formatting, unit tests, and minimal e2e sample.
8. Refresh README with setup/deploy/customization guidance.

## Risks and mitigations
- **Dependency installation constraints**: if registry access is blocked, commit scaffold/config and document install step for CI/local.
- **SEO on SPA routes**: recommend prerender/SSR follow-up for richer indexing if required.
- **Visual regressions**: preserve prior palette/identity and apply incremental enhancements.
- **Form security**: never ship provider secrets client-side; route through serverless function.
