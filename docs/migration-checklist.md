# Migration checklist

## Before coding

- Confirm the canonical role line.
- Confirm primary institutional affiliation.
- Decide whether to keep the top-scientist claim on the home page.
- Download or provide the current profile photo.
- Export or locate a current CV PDF, if you want one published.

## Content migration

- Copy home page biography into `src/data/profile.ts`.
- Replace generic research descriptions in `src/pages/research.astro`.
- Curate `src/data/publications.ts` into three groups:
  - recent
  - selected
  - legacy
- Run the DBLP import helper and compare against current Google Scholar/DBLP records.
- Add DOI or publisher URLs for selected publications where possible.

## SEO and redirects

- Keep `www.davors.com` as canonical.
- Redirect `davors.com` to `www.davors.com`.
- Redirect `/home` to `/`.
- Keep `/publications` unchanged.
- Add a sitemap and robots.txt.
- Verify page titles and descriptions.

## Deployment

- Push to GitHub.
- Import project into Vercel.
- Confirm framework detection as Astro.
- Build command: `pnpm build`.
- Output directory: `dist`.
- Add `www.davors.com` and `davors.com` domains.
- Copy DNS records from Vercel domain inspection.
- Verify HTTPS certificate issuance.
- Test old and new URLs.

## After launch

- Add a link from the personal site to REQS once live.
- Add reciprocal link from REQS People profile to `www.davors.com`.
- Schedule a quarterly publication refresh.
- Keep social profile bios aligned with the canonical role line.
