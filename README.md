# TEXAS Restaurant — Landing Page

A premium, single-page restaurant website built with React, TypeScript, Vite and Tailwind CSS. This is a demo/portfolio build — all copy, prices, and photos are placeholders ready to be swapped for the real thing.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build locally
```

## Replacing placeholder content

Everything editable lives in `src/data/`:

| File | Controls |
| --- | --- |
| `src/data/site.ts` | Restaurant name, tagline, phone, email, WhatsApp, address, map, opening hours, social links |
| `src/data/dishes.ts` | Featured Dishes menu cards |
| `src/data/features.ts` | "Why Choose Us" cards |
| `src/data/gallery.ts` | Gallery images |
| `src/data/testimonials.ts` | Customer reviews |
| `src/data/navigation.ts` | Navbar / footer links |

Swap the placeholder logo mark in `src/components/ui/Logo.tsx` for a real logo file whenever it's ready. All food/interior photography is sourced from Unsplash (free to use) purely as a stand-in — replace the `image`/`src` URLs with real photography before launch.

**Map & location**: `src/data/site.ts` drives the live Google Map and "Get Directions" button via a place-name query, so it resolves straight to the restaurant's real Google Maps listing. If the owner provides a confirmed exact address, update `addressLines` and `MAP_QUERY` there.

## Deployment (Vercel)

The repo includes `vercel.json` (framework: Vite, output: `dist`). Push to a Git repo and import it in Vercel, or deploy directly:

```bash
npx vercel
```

No environment variables are required.
