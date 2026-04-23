# Frans Budi Kashira Portfolio

Static professional portfolio website for Frans Budi Kashira, built with Next.js App Router, TypeScript, Tailwind CSS, and shadcn/ui.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Content

Portfolio content is stored in local TypeScript files:

- `src/content/site.ts`
- `src/content/projects.ts`

Project pages are generated statically from `src/content/projects.ts`. Replace SVG placeholders in `public/media` with final optimized screenshots when available.

## Routes

- `/`
- `/projects`
- `/projects/[slug]`
- `/resume`
- `/contact`
