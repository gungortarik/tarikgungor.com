# tarikgungor.com (v2.0 — Engineered from Zero)

Personal platform, systems engineering lab log, and interactive resume for **Tarik Gungor** (`https://tarikgungor.com`).

## Architecture & Stack

- Production site: `main`
- Active redesign work: `redesign-v1` (not merged to production yet)

## Preserved Assets & Routes

- `/` — Main portfolio, live Systems & Telemetry Cockpit, Right Now, Software Projects (*Sonoma*, *CertForge*), Recent Notes (*Flexible, but Not Free*), Systems & Infrastructure Labs, and Path So Far
- `/resume` — Full interactive & print-ready curriculum vitae
- `/resume/tarik-gungor-resume.pdf` — Original ATS-friendly PDF resume
- `/resume/tarik-gungor-resume.json` — Machine-readable JSON Resume schema
- `/assets/logos/*`, `/assets/icons/*`, `/assets/projects/sonoma-dashboard.png` — All original brand & project media preserved

## Local development

```bash
npm ci
npm run dev
```

Other scripts: `npm run lint`, `npm run build`.

## GitHub Pages

Production deploys from `main` to GitHub Pages. `npm run build` creates a static export in `out/`; the Pages workflow publishes that directory and preserves the custom-domain `CNAME` from `public/`.

## Repository structure

```bash
npm run dev       # Start local dev server
npm run build     # Build production static bundle into dist/
npm run preview   # Preview production build locally
```
