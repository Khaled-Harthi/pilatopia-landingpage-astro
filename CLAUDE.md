# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

This is an Astro 5 landing page for Pilatopia (a Pilates studio in Riyadh) deployed to Cloudflare Workers with SSR.

### Tech Stack
- **Framework**: Astro 5 with SSR (`output: 'server'`)
- **Styling**: Tailwind CSS 4 (via Vite plugin)
- **Interactivity**: React 19 islands with Framer Motion
- **Deployment**: Cloudflare Workers adapter

### Component Pattern: Islands Architecture

The project uses Astro's islands architecture to minimize JavaScript:

- **Static Astro sections** (`src/components/sections/*.astro`): Zero client JS, server-rendered
- **React islands** (`src/components/islands/*.tsx`): Client-side interactive components

Islands use different hydration strategies based on interactivity needs:
- `client:load` - Navigation, Hero (immediate interactivity)
- `client:visible` - Gift, Pricing, FAQ (hydrate when visible)
- `client:idle` - MembershipModal (hydrate when browser idle)

### Bilingual Support (EN/AR)

- Language stored in `pilatopia-lang` cookie, read server-side in `index.astro`
- All translations in `src/lib/translations.ts` with type `Language = "en" | "ar"`
- RTL support via `dir` attribute on `<html>` and CSS rules in `global.css`
- Components receive `lang` prop and use `translations[lang]` for text

### File Structure

```
src/
├── components/
│   ├── islands/     # React interactive components (Navigation, Hero, Pricing, FAQ, etc.)
│   └── sections/    # Static Astro components (Studio, Classes, App, Location, CTA, Footer)
├── layouts/
│   └── Layout.astro # Base HTML with SEO, structured data, analytics
├── lib/
│   ├── translations.ts  # All EN/AR text content
│   └── utils.ts         # cn() utility for class merging
├── pages/
│   └── index.astro      # Main page, composes all sections
└── styles/
    └── global.css       # CSS variables, Tailwind config, RTL rules
```

### Path Aliases

Use `@/` to import from `src/`:
```typescript
import { translations } from "@/lib/translations";
```

### Custom Events

Modal communication between islands uses custom events:
```javascript
window.dispatchEvent(new CustomEvent("open-membership"));
```

### CSS Design Tokens

Brand colors and spacing defined as CSS variables in `global.css`:
- `--primary`, `--primary-dark`, `--primary-light` (gold/tan tones)
- `--bg-cream`, `--bg-section` (off-white backgrounds)
- Typography: Rufina (serif headlines), IBM Plex Sans Arabic (body)
