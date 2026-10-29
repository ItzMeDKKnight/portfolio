# Ansh Anand Mutatkar — Portfolio

Personal portfolio website built with plain **HTML, CSS and TypeScript** (no framework).

## Quick start

```sh
npm install      # once: installs TypeScript + esbuild
npm run build    # type-checks src/ and bundles it into dist/main.js
```

Then open `index.html` in a browser. While editing TypeScript, run `npm run watch` to rebuild on every save.

## Where things live

```
Portfolio/
├── index.html                  Page structure: every section's markup, in page order
│
├── src/                        TypeScript (bundled into dist/main.js)
│   ├── main.ts                 Entry point: renders sections, starts page behaviours
│   ├── data/                   ★ ALL SITE CONTENT — edit these to update the site
│   │   ├── profile.ts          Name, title, bio, contact details
│   │   ├── projects.ts         "Selected work" projects
│   │   ├── skills.ts           Technical skill highlights, skill groups
│   │   ├── tools.ts            Tools and Technologies rows
│   │   ├── achievements.ts     Achievements
│   │   └── tech-icons.ts       Label + logo for each technology key
│   ├── types/content.ts        Type definitions for everything in data/
│   ├── components/             Reusable UI builders
│   │   ├── project-card.ts     One Selected-work card (hover reveal)
│   │   ├── tech-icon.ts        Tech logo tile and logo+label chip
│   │   └── icons.ts            Inline SVG icons
│   ├── sections/               One renderer per data-driven section
│   │   ├── profile-section.ts  Fills [data-profile] fields (name, bio, contact…)
│   │   ├── work-section.ts     Selected work grid + "more projects" toggle
│   │   ├── skills-section.ts
│   │   ├── tools-section.ts
│   │   └── achievements-section.ts
│   ├── ui/                     Page behaviours
│   │   ├── navbar.ts           Mobile menu, active link, scrolled state
│   │   └── scroll-reveal.ts    Fade-in on scroll
│   └── utils/dom.ts            Element-creation helpers
│
├── styles/                     CSS (main.css imports everything in order)
│   ├── main.css
│   ├── base/                   variables (colours, fonts) · reset · typography
│   ├── components/             buttons · image-frames · chips · text-block · project-card · reveal
│   ├── layout/                 container · navbar · section · footer
│   └── sections/               hero · about · work · skills · tools · achievements · contact
│
├── assets/
│   ├── images/photos/          Section photos (named <section>-<subject>.jpg)
│   ├── images/projects/        Project cover images (placeholders for now)
│   └── icons/                  Favicon and logos not on the devicon CDN
│
├── dist/main.js                Built output — generated, don't edit by hand
└── Portfolio.pdf               Original design reference (local only, git-ignored)
```

## Common edits

| I want to…                         | Edit                                                        |
| ---------------------------------- | ----------------------------------------------------------- |
| Change my bio or contact details   | `src/data/profile.ts`                                       |
| Add / reorder / remove a project   | `src/data/projects.ts`                                      |
| Replace a project cover            | Drop an image in `assets/images/projects/`, update `cover`  |
| Add a skill or tool                | `src/data/skills.ts` / `src/data/tools.ts` (new logo → `tech-icons.ts`) |
| Add an achievement                 | `src/data/achievements.ts`                                  |
| Change colours or fonts            | `styles/base/variables.css`                                 |
| Restyle one section                | `styles/sections/<section>.css`                             |

Run `npm run build` after changing anything in `src/`.
