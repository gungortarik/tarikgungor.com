# tarikgungor.com

Personal website and long-term public platform for Tarik Gungor.

## Current status

The redesign is being developed on `redesign-v1`. The production website remains on `main` until the redesign is explicitly approved and merged.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4

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
