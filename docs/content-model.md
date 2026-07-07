# Content model

## Profile

Located in `src/data/profile.ts`.

Fields:

- `name`: display name
- `canonicalUrl`: canonical website URL
- `title`: short academic/professional title
- `tagline`: one-sentence positioning
- `location`: broad location only
- `shortBio`: homepage paragraph
- `longBio`: additional paragraphs
- `currentRoleNote`: launch verification note
- `researchAreas`: array of research themes
- `services`: advising/training/collaboration topics
- `links`: external academic and social profiles

## Publications

Located in `src/data/publications.ts`.

Fields:

- `title`
- `authors`
- `venue`
- `year`
- `type`: Journal, Conference, Book, Other
- `status`: recent, selected, legacy, review
- `url`: optional
- `note`: optional

Use statuses to control display without overfitting the data model.

## Future upgrade path

When the personal site grows, migrate from TypeScript arrays to Astro content collections:

```txt
src/content/
  publications/
    2024-basesap.md
    2024-openfl.md
  talks/
  news/
```

For now, TypeScript data files are faster and easier for the port.
