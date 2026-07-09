export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'Journal' | 'Conference' | 'Book' | 'Other';
  url?: string;
  sourceLabel?: string;
  note?: string;
};

export const publications: Publication[] = [
  {
    title: 'TrustFed: A Framework for Fair and Trustworthy Cross-Device Federated Learning in IIoT',
    authors: 'Muhammad Habib Ur Rehman, Ali M. Dirir, Khaled Salah, Ernesto Damiani, Davor Svetinovic',
    venue: 'IEEE Transactions on Industrial Informatics',
    year: 2021,
    type: 'Journal',
    url: 'https://dblp.org/rec/journals/tii/RehmanD0DS21',
    sourceLabel: 'DBLP'
  },
  {
    title: 'Blockchain for explainable and trustworthy artificial intelligence',
    authors: 'Mohamed Nassar, Khaled Salah, Muhammad Habib Ur Rehman, Davor Svetinovic',
    venue: 'WIREs Data Mining and Knowledge Discovery',
    year: 2020,
    type: 'Journal',
    url: 'https://dblp.org/rec/journals/widm/NassarSRS20',
    sourceLabel: 'DBLP'
  },
  {
    title: 'Trustworthy Blockchain Oracles: Review, Comparison, and Open Research Challenges',
    authors: 'Hamda Al Breiki, Muhammad Habib Ur Rehman, Khaled Salah, Davor Svetinovic',
    venue: 'IEEE Access',
    year: 2020,
    type: 'Journal',
    url: 'https://dblp.org/rec/journals/access/BreikiRSS20',
    sourceLabel: 'DBLP'
  },
  {
    title: 'Trust in Blockchain Cryptocurrency Ecosystem',
    authors: 'Muhammad Habib Ur Rehman, Khaled Salah, Ernesto Damiani, Davor Svetinovic',
    venue: 'IEEE Transactions on Engineering Management',
    year: 2020,
    type: 'Journal',
    url: 'https://dblp.org/rec/journals/tem/RehmanSDS20',
    sourceLabel: 'DBLP'
  }
];

export const publicationsByYear = publications
  .slice()
  .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
