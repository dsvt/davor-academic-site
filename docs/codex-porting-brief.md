# Codex porting brief: Davor academic website

## Objective

Port the current personal academic site at `https://www.davors.com/` to a simple, fast, static Astro site hosted on Vercel. This should be a first step toward a broader REQS presence architecture, without overbuilding the personal site.

## Current site structure

The current site is compact and has two public pages:

- `/` or `/home`: profile home page
- `/publications`: selected publications page

The home page currently contains:

- Name: Davor Svetinovic
- Role line around computer science, blockchain, cybersecurity, AI, ethics, innovation, and top-scientist positioning
- Links to LinkedIn, X, DBLP, ORCID, Google Scholar, and ResearchGate
- A short professional biography
- Services/advisory items

The publications page currently points to Google Scholar for the full list and contains selected older journal, conference, report, article, and thesis entries. Since public DBLP and Google Scholar results show later publications, the new site should separate:

- Recent publications to review
- Selected/high-impact publications
- Legacy selected publications from the old site
- Full bibliography import workflow

## Recommended IA

```txt
/
/research
/publications
/advising
/contact
```

Avoid adding a blog or CMS until the basic port is finished.

## Implementation tasks

1. Keep the site static: no database, login, CMS, or posting automation.
2. Move the profile, links, research areas, and services into `src/data/profile.ts`.
3. Move selected publications into `src/data/publications.ts`.
4. Add a DBLP BibTeX import helper but keep manual curation.
5. Preserve old URL compatibility with a `/home` -> `/` permanent redirect.
6. Add SEO basics: title, description, canonical URLs, sitemap, robots.txt, Open Graph metadata.
7. Make `www.davors.com` canonical and redirect `davors.com` to it.
8. Add a placeholder for a profile photo only after a real image file is added.
9. Keep design academic, clean, credible, and lightweight.
10. Add a link to REQS after `reqs.org` is launched.

## Non-goals for this phase

- No LinkedIn/X automation.
- No multi-author subdomain routing.
- No publication scraping from Google Scholar.
- No server-side personalization.
- No complex design system.

## Acceptance criteria

- `pnpm build` succeeds.
- `/`, `/research`, `/publications`, `/advising`, `/contact`, and `/404` render.
- `/home` redirects to `/` in Vercel.
- The site can be deployed as a Vercel static build with output directory `dist`.
- All public claims that may be stale are marked for verification before launch.
