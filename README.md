# tarikgungor.com (v2.0 — Engineered from Zero)

Personal platform, systems engineering lab log, and interactive resume for **Tarik Gungor** (`https://tarikgungor.com`).

## Architecture & Stack

- **Framework:** [Astro 5](https://astro.build) (Zero unnecessary client framework overhead, instant static HTML delivery)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) + Custom Editorial Paper / Deep Ink / Olive design tokens
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/) coupled directly to the GSAP ticker
- **Motion & Choreography:** [GSAP 3 + ScrollTrigger](https://gsap.com/) (Masked headline reveals, scroll-scrubbed progress & timeline tracks, staggered section reveals, magnetic buttons)
- **Command Palette & Shell:** Native `<dialog>` (`⌘K` / `Ctrl+K`) with quick navigation and terminal commands (`whoami`, `stack`, `status`, `contact`, `theme`, `clear`)
- **Single Source of Truth:** All content, projects, 7 infrastructure labs, work history, skills, and notes live in [`src/data/siteContent.ts`](./src/data/siteContent.ts)

## Preserved Assets & Routes

- `/` — Main portfolio, live Systems & Telemetry Cockpit, Right Now, Software Projects (*Sonoma*, *CertForge*), Recent Notes (*Flexible, but Not Free*), Systems & Infrastructure Labs, and Path So Far
- `/resume` — Full interactive & print-ready curriculum vitae
- `/resume/tarik-gungor-resume.pdf` — Original ATS-friendly PDF resume
- `/resume/tarik-gungor-resume.json` — Machine-readable JSON Resume schema
- `/assets/logos/*`, `/assets/icons/*`, `/assets/projects/sonoma-dashboard.png` — All original brand & project media preserved

## Commands

```bash
npm run dev       # Start local dev server
npm run build     # Build production static bundle into dist/
npm run preview   # Preview production build locally
```
