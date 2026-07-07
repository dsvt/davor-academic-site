# Davor academic site starter

This is a small Astro static-site starter for porting `www.davors.com` from the current Google Sites style page to a maintainable academic website on Vercel. It is intentionally simple: static HTML, typed TypeScript data files, minimal CSS, no CMS, and no client-side framework.

## Why this stack

- Provider: Vercel, to align with the likely REQS provider if `*.reqs.org` wildcard colleague/lab subdomains are needed.
- Framework: Astro, because the personal academic site is content-first and static by default.
- Content: TypeScript data files at first, with a DBLP BibTeX import helper for later curation.
- Styling: plain CSS with reusable design tokens.

## Local setup

```bash
pnpm install
pnpm dev
```

The development site will run at the local URL printed by Astro.

## Build

```bash
pnpm build
pnpm preview
```

The static output is created in `dist/`.

## Deploy to Vercel

1. Create a GitHub repository, for example `davor-academic-site`.
2. Push this starter to the repository.
3. In Vercel, import the GitHub repository.
4. Use the default Astro settings:
   - Install command: `pnpm install`
   - Build command: `pnpm build`
   - Output directory: `dist`
5. Add both `www.davors.com` and `davors.com` in Vercel Project Settings > Domains.
6. Make `www.davors.com` the canonical primary domain, matching the current public URL.
7. Redirect the apex `davors.com` to `www.davors.com`.
8. Keep the `/home` redirect in `vercel.json` so old Google Sites links resolve to `/`.

Use Vercel's domain inspection command or dashboard to copy the exact DNS records for the domain:

```bash
vercel domains inspect davors.com
```

Vercel commonly uses an A record for the apex and a CNAME record for `www`, but copy the values shown by your project rather than assuming.

## Content editing

Edit these files first:

- `src/data/profile.ts` for the home page, external links, research areas, and services.
- `src/data/publications.ts` for selected publications.
- `src/pages/research.astro` to turn generic research-area cards into polished descriptions.
- `src/pages/advising.astro` to refine advisory and executive education language.
- `src/pages/contact.astro` for email, institutional profile, or contact instructions.

## DBLP import helper

Run:

```bash
pnpm import:dblp
```

This downloads raw BibTeX from DBLP into `src/data/generated/dblp.bib`. Review manually before publishing. The selected publication list should remain curated, not auto-overwritten.

## Later integration with REQS

Keep this personal site in a separate repository during the initial port. Later, you can share theme tokens and content conventions with the REQS site while keeping canonical domains distinct:

- Personal canonical: `https://www.davors.com`
- REQS canonical: `https://reqs.org`
- Optional future alias or profile: `https://davor.reqs.org`

The personal site should link to REQS once launched, and REQS should link back to this site as the canonical personal academic profile.
