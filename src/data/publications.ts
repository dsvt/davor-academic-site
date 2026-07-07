export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'Journal' | 'Conference' | 'Book' | 'Other';
  status?: 'selected' | 'recent' | 'legacy' | 'review';
  url?: string;
  sourceLabel?: string;
  note?: string;
};

// TODO: VERIFY this curated list against the latest public CV before launch.
// It is not a complete bibliography and should not be presented as one.
// TODO: VERIFY recent DBLP/arXiv-visible records before moving them into the
// selected list or adding publisher-specific metadata.
export const publications: Publication[] = [
  {
    title: 'Split Averaging: Bridging the Heterogeneity Gap in Clients Data for Federated Learning',
    authors: 'Sajjad Khan, Nikita Karetnikov, Muhammad Habib Ur Rehman, Davor Svetinovic',
    venue: 'IEEE Access',
    year: 2026,
    type: 'Journal',
    status: 'recent',
    url: 'https://dblp.org/rec/journals/access/KhanKRS26',
    sourceLabel: 'DBLP'
  },
  {
    title: 'Accurate and Energy-Efficient Detection of Cyberattacks Against Non-Linear AGC Systems',
    authors:
      'Muhammad Sharshar, Ahmad Mohammad Saber, Davor Svetinovic, Hatem H. Zeineldin, Ehab F. El-Saadany',
    venue: 'IEEE Transactions on Smart Grid',
    year: 2026,
    type: 'Journal',
    status: 'recent',
    url: 'https://dblp.org/rec/journals/tsg/SharsharSSZE26',
    sourceLabel: 'DBLP'
  },
  {
    title: 'Adaptive privacy-preserving federated learning for robust IoT systems: A defense against data poisoning attacks',
    authors: 'Sajjad Khan, Davor Svetinovic',
    venue: 'Internet of Things and Cyber-Physical Systems',
    year: 2025,
    type: 'Journal',
    status: 'recent',
    url: 'https://dblp.org/rec/journals/iotcps/KhanS25',
    sourceLabel: 'DBLP'
  },
  {
    title: 'Maximal Extractable Value in Decentralized Finance: Taxonomy, Detection, and Mitigation',
    authors:
      'Huned Materwala, Shraddha M. Naik, Aya Taha, Tala Abdulrahman Abed, Davor Svetinovic',
    venue: 'IEEE Transactions on Services Computing',
    year: 2025,
    type: 'Journal',
    status: 'recent',
    url: 'https://dblp.org/rec/journals/tsc/MaterwalaNTAS25',
    sourceLabel: 'DBLP'
  },
  {
    title: 'BaseSAP: Modular Stealth Address Protocol for Programmable Blockchains',
    authors:
      'Anton Wahrstatter, Matthew Solomon, Ben DiFrancesco, Vitalik Buterin, Davor Svetinovic',
    venue: 'arXiv',
    year: 2024,
    type: 'Other',
    status: 'recent',
    url: 'https://arxiv.org/abs/2306.14272',
    sourceLabel: 'arXiv'
  },
  {
    title: 'OpenFL: A scalable and secure decentralized federated learning system on the Ethereum blockchain',
    authors: 'Anton Wahrstatter, Sajjad Khan, Davor Svetinovic',
    venue: 'Internet of Things',
    year: 2024,
    type: 'Journal',
    status: 'recent',
    url: 'https://dblp.org/rec/journals/iot/WahrstatterKS24',
    sourceLabel: 'DBLP'
  },
  {
    title: 'Blockchain Censorship',
    authors:
      'Anton Wahrstatter, Jens Ernstberger, Aviv Yaish, Liyi Zhou, Kaihua Qin, Taro Tsuchiya, Sebastian Steinhorst, Davor Svetinovic, Nicolas Christin, Mikolaj Barczentewicz, Arthur Gervais',
    venue: 'The Web Conference',
    year: 2024,
    type: 'Conference',
    status: 'recent',
    url: 'https://arxiv.org/abs/2305.18545',
    sourceLabel: 'arXiv'
  },
  {
    title: 'Trends in Smart Grid Cyber-Physical Security: Components, Threats, and Solutions',
    authors:
      'Dimitris M. Manias, Ahmad Mohammad Saber, Mohammed I. Radaideh, Abdelrahman Tarek Gaber, Michail Maniatakos, Hatem H. Zeineldin, Davor Svetinovic, Ehab F. El-Saadany',
    venue: 'IEEE Access',
    year: 2024,
    type: 'Journal',
    status: 'recent',
    url: 'https://dblp.org/rec/journals/access/ManiasSRGMZSE24',
    sourceLabel: 'DBLP'
  },
  {
    title: 'Fortifying the Blockchain: A Systematic Review and Classification of Post-Quantum Consensus Solutions for Enhanced Security and Resilience',
    authors: 'Jorao Gomes Jr., Sajjad Khan, Davor Svetinovic',
    venue: 'IEEE Access',
    year: 2023,
    type: 'Journal',
    status: 'recent',
    url: 'https://dblp.org/rec/journals/access/GomesKS23',
    sourceLabel: 'DBLP'
  },
  {
    title: 'Dynamic behavior assessment protocol for secure Decentralized Federated Learning',
    authors: 'Sajjad Khan, Jorao Gomes Jr., Muhammad Habib Ur Rehman, Davor Svetinovic',
    venue: 'Internet of Things',
    year: 2023,
    type: 'Journal',
    status: 'recent',
    url: 'https://dblp.org/rec/journals/iot/KhanGRS23',
    sourceLabel: 'DBLP'
  },
  {
    title: 'TrustFed: A Framework for Fair and Trustworthy Cross-Device Federated Learning in IIoT',
    authors: 'Muhammad Habib Ur Rehman, Ali M. Dirir, Khaled Salah, Ernesto Damiani, Davor Svetinovic',
    venue: 'IEEE Transactions on Industrial Informatics',
    year: 2021,
    type: 'Journal',
    status: 'selected',
    url: 'https://dblp.org/rec/journals/tii/RehmanD0DS21',
    sourceLabel: 'DBLP'
  },
  {
    title: 'Blockchain for explainable and trustworthy artificial intelligence',
    authors: 'Mohamed Nassar, Khaled Salah, Muhammad Habib Ur Rehman, Davor Svetinovic',
    venue: 'WIREs Data Mining and Knowledge Discovery',
    year: 2020,
    type: 'Journal',
    status: 'selected',
    url: 'https://dblp.org/rec/journals/widm/NassarSRS20',
    sourceLabel: 'DBLP'
  },
  {
    title: 'Trustworthy Blockchain Oracles: Review, Comparison, and Open Research Challenges',
    authors: 'Hamda Al Breiki, Muhammad Habib Ur Rehman, Khaled Salah, Davor Svetinovic',
    venue: 'IEEE Access',
    year: 2020,
    type: 'Journal',
    status: 'selected',
    url: 'https://dblp.org/rec/journals/access/BreikiRSS20',
    sourceLabel: 'DBLP'
  },
  {
    title: 'Trust in Blockchain Cryptocurrency Ecosystem',
    authors: 'Muhammad Habib Ur Rehman, Khaled Salah, Ernesto Damiani, Davor Svetinovic',
    venue: 'IEEE Transactions on Engineering Management',
    year: 2020,
    type: 'Journal',
    status: 'selected',
    url: 'https://dblp.org/rec/journals/tem/RehmanSDS20',
    sourceLabel: 'DBLP'
  },
  {
    title: 'Security and Privacy in Decentralized Energy Trading through Multi-signatures, Blockchain and Anonymous Messaging Streams',
    authors: 'N. Z. Aitzhan and Davor Svetinovic',
    venue: 'IEEE Transactions on Dependable and Secure Computing',
    year: 2016,
    type: 'Journal',
    status: 'legacy',
    sourceLabel: 'Current site'
  },
  {
    title: 'Semi-Automatic System Domain Data Analysis: A Smart Grid Feasibility Case Study',
    authors: 'E. Casagrande, E. Arnautovic, W. L. Woon, H. H. Zeineldin, and Davor Svetinovic',
    venue: 'IEEE Transactions on Systems, Man, and Cybernetics: Systems',
    year: 2016,
    type: 'Journal',
    status: 'legacy',
    sourceLabel: 'Current site'
  },
  {
    title: 'Goal-Oriented Requirements Engineering for Research-Intensive Complex Systems: A Case Study',
    authors: 'S. Woldeamlak, A. Diabat, and Davor Svetinovic',
    venue: 'Systems Engineering',
    year: 2016,
    type: 'Journal',
    status: 'legacy',
    sourceLabel: 'Current site'
  },
  {
    title: 'Integrated Smart Grid Systems Security Threat Model',
    authors: 'H. Suleiman, I. Alqassem, A. Diabat, E. Arnautovic, and Davor Svetinovic',
    venue: 'Information Systems',
    year: 2015,
    type: 'Journal',
    status: 'legacy',
    sourceLabel: 'Current site'
  },
  {
    title: 'Bitcoin-Based Decentralized Carbon Emissions Trading Infrastructure Model',
    authors: 'E. Alkawasmi, E. Arnautovic, and Davor Svetinovic',
    venue: 'Systems Engineering',
    year: 2015,
    type: 'Journal',
    status: 'legacy',
    sourceLabel: 'Current site'
  },
  {
    title: 'NLP-KAOS for Systems Goal Elicitation: Smart Metering System Case Study',
    authors:
      'E. Casagrande, S. Woldeamlak, W. L. Woon, H. H. Zeineldin, and Davor Svetinovic',
    venue: 'IEEE Transactions on Software Engineering',
    year: 2014,
    type: 'Journal',
    status: 'legacy',
    sourceLabel: 'Current site'
  },
  {
    title: 'System Security Requirements Analysis: A Smart Grid Case Study',
    authors: 'N. Zafar, E. Arnautovic, A. Diabat, and Davor Svetinovic',
    venue: 'Systems Engineering',
    year: 2014,
    type: 'Journal',
    status: 'legacy',
    sourceLabel: 'Current site'
  },
  {
    title: 'Strategic Requirements Engineering for Complex Sustainable Systems',
    authors: 'Davor Svetinovic',
    venue: 'Systems Engineering',
    year: 2013,
    type: 'Journal',
    status: 'legacy',
    sourceLabel: 'Current site'
  },
  {
    title: 'Unified Use Case Statecharts: Case Studies',
    authors: 'Davor Svetinovic, D. M. Berry, N. Day, and M. Godfrey',
    venue: 'Requirements Engineering',
    year: 2007,
    type: 'Journal',
    status: 'legacy',
    sourceLabel: 'Current site'
  }
];

export const publicationsByYear = publications
  .slice()
  .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
