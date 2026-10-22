# tarikgungor.com

Personal website and long-term public platform for Tarik Gungor.

## Current status

- Production site: `main`
- Active redesign work: `redesign-v1` (not merged to production yet)

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4

## Local development

```bash
npm ci
npm run dev
```

Other scripts: `npm run lint`, `npm run build`.

## GitHub Pages

Production deploys from `main` to GitHub Pages. `npm run build` creates a static export in `out/`; the Pages workflow publishes that directory and preserves the custom-domain `CNAME` from `public/`.

## Repository structure

- `app/` — Next.js routes, layout, and global styles
- `components/layout/` — shared layout components
- `components/sections/` — page-level sections
- `components/ui/` — reusable UI primitives
- `public/assets/` — production website assets only
  - `images/`
  - `logos/`
  - `icons/`
  - `projects/`
  - `documents/`
- `references/` — design references for humans and implementation agents; not production assets
- `lib/` — helpers, utilities, and structured content/data when needed
- `types/` — shared TypeScript types when needed

## Asset rule

Do not place random images, screenshots, documents, or SVG files in the repository root. Production assets belong under `public/assets/`. Design-only references belong under `references/`.
