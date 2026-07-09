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

- Profile, links, research themes, advisory topics, and homepage photo live in `src/data/profile.ts`.
- Selected publications live in `src/data/publications.ts`.
- The full publication record is linked through Google Scholar rather than duplicated here.

## Deployment

The site is static and ready for Vercel preview deployments from pull requests.

Keep `www.davors.com` as the canonical domain and preserve the `/home` redirect in `vercel.json`.
