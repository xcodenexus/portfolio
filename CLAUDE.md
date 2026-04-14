# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js 16 + Turbopack) — hot reload on save
npm run build    # Production build
npm start        # Serve production build
npm run lint     # ESLint (next/core-web-vitals + typescript rules)
```

No test framework is configured.

## Architecture

Single-page portfolio. `src/app/page.tsx` composes all sections in order:
`Navbar → Hero → About → Skills → Projects → Contact → Footer`

Every component is `"use client"` — required because Framer Motion animations run on the client. Components are self-contained with their data arrays defined at the top of the file.

**Path alias:** `@/*` → `./src/*`

## Design System

Design tokens are CSS variables defined in `src/app/globals.css` and exposed to Tailwind v4 via `@theme inline`:

| Token | Value | Tailwind class |
|---|---|---|
| `--accent` | `#FF5C00` | `text-accent`, `bg-accent` |
| `--background` | `#F8F7F2` | `bg-background` |
| `--foreground` | `#000000` | `text-foreground` |
| `--secondary` | `#111111` | `text-secondary`, `bg-secondary` |

Font is Inter loaded via `next/font/google` in `layout.tsx`, exposed as CSS variable `--font-inter` and applied through `--font-sans` in the theme.

**Do not change colors, fonts, layout, spacing, or animations.** Content-only updates are the norm — slot data into the existing arrays/components without touching className strings.

## Content Data Patterns

**Projects** (`src/components/Projects.tsx`): each entry needs `name`, `desc`, `tech[]`, `github`, `live`, `image` (Unsplash URL). Grid is `1 → 2 → 3` columns responsive.

**Skills** (`src/components/Skills.tsx`): `{ name, level (0–100), icon }` where icon is a Lucide React component. Add new icon imports at the top of the file.

**Experience / Education** (`src/components/Skills.tsx`): `{ year, role, company }` and `{ year, degree, school }` arrays — displayed as a timeline, no icon needed.

**About services** (`src/components/About.tsx`): `{ title, projects, image }` array — rendered as horizontal cards. The nav label "Services" links to `#about`.

**Social links** (Hero + Footer): use the `{ Icon, href }` object array pattern with `key={href}` — never use array index as key. Always include `target="_blank" rel="noopener noreferrer"` on external links.

## Known Limitations

- Uses `<img>` tags instead of `next/image` throughout — keep consistent when adding new images.
- Contact form submits to Formspree (`https://formspree.io/f/xvzdgody`) with idle/loading/success/error states — no backend changes needed for email delivery.
- `/pic.PNG` in `Hero.tsx` uses uppercase extension — case-sensitive on Linux/production servers.
