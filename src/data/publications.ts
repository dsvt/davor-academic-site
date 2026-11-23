export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'Journal' | 'Conference';
  url: string;
  /** One plain-language sentence on what the work contributes. */
  summary?: string;
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    title: 'Large language models as human proxies',
    authors: 'Nikita Karetnikov, Iyad Rahwan, Davor Svetinovic',
    venue: 'Nature Computational Science',
    year: 2026,
    type: 'Journal',
    url: 'https://doi.org/10.1038/s43588-026-01060-3',
    summary:
      'A review of four ways language models stand in for people, and why each use needs its own validity criteria.',
    featured: true
  },
  {
    title: 'MEV Detection for Ethereum Security: An Empirical Analysis on Agreement and Scalability',
    authors: 'Shraddha M. Naik, Huned Materwala, Davor Svetinovic',
    venue: 'IEEE Transactions on Emerging Topics in Computing',
    year: 2026,
    type: 'Journal',
    url: 'https://doi.org/10.1109/TETC.2026.3700162',
    summary:
      'Compares methods for detecting maximal extractable value on Ethereum: how far they agree, and how well they scale.',
    featured: true
  },
  {
    title:
      'An AI-Based Supervisory Measurement Integrity Validation Layer for Cyber-Resilient AC/DC Protection in Inverter-Based Microgrids',
    authors:
      'Ahmad Mohammad Saber, Ahmed Saber Refae, Davor Svetinovic, Hatem Zeineldin, Amr Youssef, Deepa Kundur, Ehab F. El-Saadany',
    venue: 'IEEE Transactions on Instrumentation and Measurement',
    year: 2026,
    type: 'Journal',
    url: 'https://doi.org/10.1109/TIM.2026.3694725',
    summary:
      'An AI-based supervisory layer that validates measurements so microgrid protection stays reliable under cyberattack.'
  },
  {
    title: 'On the Security and Privacy Implications of Large Language Models: In-Depth Threat Analysis',
    authors: 'Luis Ruhländer, Emilian Popp, Maria Stylidou, Sajjad Khan, Davor Svetinovic',
    venue: 'IEEE Cybermatics 2024',
    year: 2024,
    type: 'Conference',
    url: 'https://doi.org/10.1109/iThings-GreenCom-CPSCom-SmartData-Cybermatics62450.2024.00102',
    summary:
      'A structured analysis of the security and privacy threats that large language models introduce.',
    featured: true
  },
  {
    title: 'Blockchain Censorship',
    authors:
      'Anton Wahrstätter, Jens Ernstberger, Aviv Yaish, Liyi Zhou, Kaihua Qin, Taro Tsuchiya, Sebastian Steinhorst, Davor Svetinovic, Nicolas Christin, Mikolaj Barczentewicz, Arthur Gervais',
    venue: 'The ACM Web Conference',
    year: 2024,
    type: 'Conference',
    url: 'https://doi.org/10.1145/3589334.3645431',
    summary:
      'Measures censorship in Ethereum block production and what it means for the neutrality of transaction inclusion.'
  },
  {
    title: 'BaseSAP: Modular Stealth Address Protocol for Programmable Blockchains',
    authors: 'Anton Wahrstätter, Matthew Solomon, Ben DiFrancesco, Vitalik Buterin, Davor Svetinovic',
    venue: 'IEEE Transactions on Information Forensics and Security',
    year: 2024,
    type: 'Journal',
    url: 'https://doi.org/10.1109/TIFS.2024.3364081',
    summary:
      'A modular stealth-address protocol that lets programmable-blockchain users receive payments at unlinkable addresses.'
  }
];

export const publicationsByYear = publications
  .slice()
  .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
