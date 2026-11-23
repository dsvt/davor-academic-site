# Davor Svetinovic Academic Website

Static Astro website for `https://www.davors.com`.

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Content

- Profile, links, research themes, initiatives, collaboration routes, and homepage photo live in `src/data/profile.ts`.
- Selected publications live in `src/data/publications.ts`.
- Recent news (grants, talks, papers) lives in `src/data/news.ts`, mirrored from https://trust.reqs.org/news; keep the newest three.
- The link-preview image is `public/social-card.jpg` (1200x630 crop of the homepage photo).
- The full publication record is linked through Google Scholar rather than duplicated here.

## Deployment

The site is static and ready for Vercel preview deployments from pull requests.

Keep `www.davors.com` as the canonical domain and preserve the `/home` and `/advising` → `/opportunities` redirects in `vercel.json`.
