export type NewsItem = {
  /** ISO date, used for ordering and the <time> element. */
  date: string;
  kind: 'Grant' | 'Talk' | 'Publication';
  title: string;
  summary: string;
  /** Full update, normally on the Trust Lab news page. */
  href: string;
};

/** Recent items mirrored from https://trust.reqs.org/news. Keep the newest three. */
export const news: NewsItem[] = [
  {
    date: '2026-11-16',
    kind: 'Grant',
    title: 'ADIA Lab award for research on verifiable autonomous finance',
    summary:
      'Funding for a project on loyal and verifiable control infrastructure for authorized autonomous financial agents.',
    href: 'https://trust.reqs.org/news/adia-lab-digital-economy-grant'
  },
  {
    date: '2026-10-28',
    kind: 'Talk',
    title: 'ADIA Lab Symposium 2026, Abu Dhabi',
    summary: 'A talk on planned research in agentic AI and autonomous finance.',
    href: 'https://trust.reqs.org/news/davor-svetinovic-adia-lab-symposium-2026'
  },
  {
    date: '2026-09-18',
    kind: 'Publication',
    title: 'Large language models as human proxies',
    summary:
      'A Nature Computational Science review on validating language models used in place of human participants.',
    href: 'https://trust.reqs.org/news/large-language-models-as-human-proxies'
  }
];

export const recentNews = news
  .slice()
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3);

export const allNewsUrl = 'https://trust.reqs.org/news';
