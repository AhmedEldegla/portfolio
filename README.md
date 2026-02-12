# Ahmed Eldegla Portfolio (Angular)

Production-grade migration of the previous static portfolio into a modern Angular architecture.

## Tech Stack
- Angular 20 (standalone components + lazy route components)
- TypeScript (strict mode)
- SCSS with CSS variables for light/dark theme
- ESLint + Prettier + EditorConfig
- Jasmine/Karma unit tests + Playwright e2e example

## Architecture
- `src/app/core`: app-wide services/models
- `src/app/shared`: reusable UI shell components
- `src/app/features`: page-level features (`home`, `about`, `projects`, `skills`, `contact`)

## Local Setup
```bash
npm install
npm run start
```

## Build
```bash
npm run build:prod
```

## Quality Checks
```bash
npm run lint
npm run format:check
npm run test
```

## e2e (example)
```bash
npm run e2e
```

## Contact form strategy (secure)
Use a serverless API endpoint (Netlify Functions / Vercel Functions) that receives contact payload and sends email using provider keys from server-side environment variables. Do not expose secrets in the Angular client.

## SEO included
- Base + route-level meta updates
- OpenGraph/Twitter tags
- `public/robots.txt`
- `public/sitemap.xml`
- JSON-LD Person schema in `src/index.html`

## Deploy options
- **Netlify**: Build command `npm run build:prod`, publish `dist/portfolio-angular/browser`.
- **Vercel**: Framework preset Angular or static output from dist folder.
- **GitHub Pages**: Build and publish `dist/portfolio-angular/browser` with SPA fallback.

## Customization
- Edit project data in `ProjectsService`.
- Update colors in `src/styles.scss` CSS variables.
- Update personal links/content in feature page templates.
