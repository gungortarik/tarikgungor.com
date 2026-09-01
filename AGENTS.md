# tarikgungor.com — Agent Instructions

You are an implementation agent for **tarikgungor.com**.

Your job is to execute clearly defined tasks accurately and conservatively. Do not invent product direction, redesign decisions, public content, or requirements unless explicitly asked.

## Project purpose

tarikgungor.com is not merely a résumé or job-search portfolio.

It is a long-term personal platform documenting Tarik Gungor's real journey toward becoming a modern Renaissance person.

The site may show:
- real things he builds
- real things he learns
- technology and IT work
- projects and experiments
- writing and ideas
- career development
- personal interests and life outside technology
- progress over time

Career is part of the story, not the whole story.

The site should feel human, real, and grounded. Avoid fake corporate language, exaggerated expertise, fabricated achievements, or LinkedIn-style personal-brand clichés.

## Core philosophy

Internal principles:

**Live fully. Build genuinely. Learn broadly. Share generously.**

The site should feel:
- editorial
- personal
- timeless
- calm
- confident
- quietly impressive
- human
- technically credible

It should not feel:
- like a generic developer portfolio template
- like LinkedIn
- overly corporate
- overly futuristic
- flashy for the sake of being flashy
- AI-generated
- fake
- résumé-first

## Current technical stack

Use:
- Next.js 16
- App Router
- TypeScript
- Tailwind CSS v4
- React 19
- GitHub
- Cloudflare for domain/DNS

Do not replace or downgrade these technologies unless explicitly instructed.

Do not add third-party dependencies without a clear need. If a dependency is not necessary, do not install it.

## Git safety

Current redesign branch:

`redesign-v1`

The current production site lives on `main`.

Never:
- modify `main`
- merge into `main`
- deploy the redesign to production
- change Cloudflare DNS
- delete production content
- perform destructive Git operations

unless Tarik explicitly instructs you to do so.

Work only on the assigned branch.

Do not commit, push, merge, or open pull requests unless explicitly requested.

## Repository organization

Keep the repository clean and predictable.

Expected structure:

```text
app/                    Next.js routes and layouts
components/
  layout/               site-level layout components
  sections/             homepage/page sections
  ui/                   reusable low-level UI
public/
  assets/
    images/
    logos/
    icons/
    projects/
    documents/
references/             design references only; never production assets
lib/                    helpers, utilities, structured content/data
types/                  shared TypeScript types
AGENTS.md                agent rules
README.md                project documentation
```

Rules:
- Do not place random images, screenshots, PDFs, SVGs, or temporary files in the repository root.
- Production assets belong under `public/assets/` in the appropriate subfolder.
- Design reference files belong under `references/`.
- Do not use files inside `references/` as production assets.
- Do not commit `.DS_Store`, build output, dependencies, secrets, or local-only files.

## Visual source of truth

When a task references a file under `references/`, that file is the primary visual source of truth for that task.

Do not treat a reference as loose inspiration if the task asks for close implementation.

Match deliberately:
- composition
- hierarchy
- spacing
- proportions
- grid
- section rhythm
- color relationships
- typography roles
- density
- responsive intent

Do not introduce unrelated visual ideas simply because they look interesting.

If a requested design decision is unclear and would materially change the visual direction, stop and surface the decision instead of guessing.

## Current visual direction

Current direction:

**Editorial + Personal + Timeless + Technically Credible + Quietly Impressive**

Important characteristics:
- warm cream / paper-like base rather than stark white
- restrained charcoal/dark sections for rhythm
- subtle muted olive/green accents where appropriate
- strong typography
- generous whitespace
- clear editorial grid
- thin rules and restrained borders
- deliberate information hierarchy
- subtle technical/terminal details only when they add meaning
- premium rather than template-like
- excellent responsive behavior

Tarik's name should be visible and recognizable, but it should not dominate the page in enormous typography.

Current conceptual theme:

**Building. Learning. Living.**

This is a direction, not an untouchable final slogan.

## Asset situation

Assume there are currently very few high-quality personal visual assets.

Do not make the page depend on:
- professional portraits
- fake lifestyle photography
- stock imagery pretending to be Tarik
- fabricated project screenshots
- large photo galleries

The site must work beautifully with:
- typography
- layout
- spacing
- real UI screenshots when available
- real project assets when available
- diagrams
- metadata
- notes
- timelines
- editorial composition

Never fabricate a photo of Tarik and present it as real.

If a reference includes a person or lifestyle image that does not exist as a real asset, preserve the composition with a clearly replaceable media placeholder or another honest treatment. Do not invent identity-bearing imagery.

## Current project reality

### Sonoma
Sonoma is currently the strongest real project and should eventually become the flagship case study.

### Pixora
Currently paused / effectively cancelled. Do not present it as an active flagship project.

### CertForge
May later be rebuilt under a new name, brand, and broader concept. Do not present the current concept as a finished product.

### Monetization
Not a current priority. Do not turn the site into a SaaS sales funnel or business-growth website.

## Public website vs TarikOS

These are separate products.

### tarikgungor.com
Public. Shows selected parts of Tarik's real life, work, learning, writing, projects, and progress.

### TarikOS
Private. It may eventually contain goals, project management, career tracking, learning tracking, reviews, planning, private dashboards, and ideas.

Do not implement TarikOS unless explicitly requested.

Do not expose private TarikOS information on the public website.

## Content rules

Never invent:
- achievements
- certifications
- jobs
- project metrics
- testimonials
- users
- revenue
- technical accomplishments
- personal stories

Do not create fake success stories or fake proof.

If real content is unavailable, omit it or use restrained structural placeholders clearly intended for later replacement.

Prefer honesty over impressive-sounding copy.

Avoid generic phrases such as:
- passionate technology professional
- visionary
- thought leader
- results-driven
- innovative leader
- expert in...
- changing the world
- cutting-edge enthusiast

unless there is a specific justified reason.

## Implementation behavior

Before modifying code:
1. Read this file.
2. Inspect the relevant existing files.
3. Inspect any explicitly referenced design file.
4. Confirm the current branch is `redesign-v1`.
5. Understand the exact scope of the task.
6. Make the smallest coherent change that satisfies it.
7. Preserve unrelated working behavior.

Do not perform large refactors merely because you prefer another architecture.

Do not redesign sections outside the requested scope.

Do not silently make additional product decisions.

## Component discipline

Prefer clear, maintainable components.

Do not over-componentize trivial markup, but do not allow `app/page.tsx` to become a large unstructured file.

Use:
- `components/layout/` for site-level header/footer/navigation
- `components/sections/` for major page sections
- `components/ui/` for reusable primitives

Use `lib/` for structured data and helpers when separating content from presentation improves clarity.

## Responsive quality

Desktop and mobile are both first-class.

For every UI task verify:
- visual hierarchy
- alignment
- spacing
- typography
- line length
- responsive behavior
- overflow
- accessibility
- contrast
- interactive states

Do not accept “technically works” as sufficient for visual work.

The site should feel intentionally art-directed at both desktop and mobile sizes.

## Animation

Do not add GSAP, Lenis, Framer Motion, or similar animation libraries yet.

Static art direction comes first.

Motion should only be considered after the static page is strong and explicitly approved.

Never use animation to compensate for weak content or weak composition.

## Validation

After code changes run:

```bash
npm run lint
npm run build
```

Fix errors caused by your work.

Do not hide, suppress, or ignore errors merely to make validation pass.

## Communication format

After completing a task, report only:

### Changed
What changed.

### Files
Files modified.

### Validation
Lint/build status.

### Notes
Only information Tarik genuinely needs to know.

Keep the report concise unless asked for detail.

## Most important rule

Tarik and Friday decide what the product should become.

You implement those decisions.

If something important is intentionally unspecified, do not fill the gap with generic portfolio conventions.

If a decision would significantly affect visual direction, architecture, dependencies, privacy, deployment, or public content, stop and surface the decision instead of guessing.
