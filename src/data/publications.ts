export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'Journal' | 'Conference' | 'Book' | 'Other';
  status?: 'selected' | 'recent' | 'legacy' | 'review';
  url?: string;
  note?: string;
};

export const publications: Publication[] = [
  {
    title: 'BaseSAP: Modular Stealth Address Protocol for Programmable Blockchains',
    authors:
      'Anton Wahrstatter, Matthew Solomon, Ben DiFrancesco, Vitalik Buterin, Davor Svetinovic',
    venue: 'IEEE Transactions on Information Forensics and Security',
    year: 2024,
    type: 'Journal',
    status: 'recent'
  },
  {
    title: 'OpenFL: A scalable and secure decentralized federated learning system on the Ethereum blockchain',
    authors: 'Anton Wahrstatter, Sajjad Khan, Davor Svetinovic',
    venue: 'Internet of Things',
    year: 2024,
    type: 'Journal',
    status: 'recent'
  },
  {
    title: 'Blockchain Censorship',
    authors:
      'Anton Wahrstatter, Jens Ernstberger, Aviv Yaish, Liyi Zhou, Kaihua Qin, Taro Tsuchiya, Sebastian Steinhorst, Davor Svetinovic, Nicolas Christin, Mikolaj Barczentewicz, Arthur Gervais',
    venue: 'The Web Conference',
    year: 2024,
    type: 'Conference',
    status: 'recent'
  },
  {
    title: 'Fortifying the Blockchain: A Systematic Review and Classification of Post-Quantum Consensus Solutions for Enhanced Security and Resilience',
    authors: 'Jorao Gomes Jr., Sajjad Khan, Davor Svetinovic',
    venue: 'IEEE Access',
    year: 2023,
    type: 'Journal',
    status: 'recent'
  },
  {
    title: 'Dynamic behavior assessment protocol for secure Decentralized Federated Learning',
    authors: 'Sajjad Khan, Jorao Gomes Jr., Muhammad Habib Ur Rehman, Davor Svetinovic',
    venue: 'Internet of Things',
    year: 2023,
    type: 'Journal',
    status: 'recent'
  },
  {
    title: 'Towards situational aware cyber-physical systems: A security-enhancing use case of blockchain-based digital twins',
    authors:
      'Sabah Suhail, Saif Ur Rehman Malik, Raja Jurdak, Rasheed Hussain, Raimundas Matulevicius, Davor Svetinovic',
    venue: 'Computers in Industry',
    year: 2022,
    type: 'Journal',
    status: 'recent'
  },
  {
    title: 'TrustFed: A Framework for Fair and Trustworthy Cross-Device Federated Learning in IIoT',
    authors: 'M. H. ur Rehman, A. M. Dirir, K. Salah, E. Damiani, Davor Svetinovic',
    venue: 'IEEE Transactions on Industrial Informatics',
    year: 2021,
    type: 'Journal',
    status: 'selected'
  },
  {
    title: 'Blockchain for explainable and trustworthy artificial intelligence',
    authors: 'M. Nassar, K. Salah, M. H. Ur Rehman, Davor Svetinovic',
    venue: 'WIREs Data Mining and Knowledge Discovery',
    year: 2020,
    type: 'Journal',
    status: 'selected'
  },
  {
    title: 'Trustworthy blockchain oracles: Review, comparison, and open research challenges',
    authors: 'H. Al-Breiki, M. H. U. Rehman, K. Salah, Davor Svetinovic',
    venue: 'IEEE Access',
    year: 2020,
    type: 'Journal',
    status: 'selected'
  },
  {
    title: 'Trust in blockchain cryptocurrency ecosystem',
    authors: 'M. H. ur Rehman, K. Salah, E. Damiani, Davor Svetinovic',
    venue: 'IEEE Transactions on Engineering Management',
    year: 2019,
    type: 'Journal',
    status: 'selected'
  },
  {
    title: 'Security and Privacy in Decentralized Energy Trading through Multi-signatures, Blockchain and Anonymous Messaging Streams',
    authors: 'N. Z. Aitzhan and Davor Svetinovic',
    venue: 'IEEE Transactions on Dependable and Secure Computing',
    year: 2016,
    type: 'Journal',
    status: 'legacy'
  },
  {
    title: 'Goal-Oriented Requirements Engineering for Research-Intensive Complex Systems: A Case Study',
    authors: 'S. Woldeamlak, A. Diabat, and Davor Svetinovic',
    venue: 'Systems Engineering',
    year: 2016,
    type: 'Journal',
    status: 'legacy'
  },
  {
    title: 'Integrated Smart Grid Systems Security Threat Model',
    authors: 'H. Suleiman, I. Alqassem, A. Diabat, E. Arnautovic, and Davor Svetinovic',
    venue: 'Information Systems',
    year: 2015,
    type: 'Journal',
    status: 'legacy'
  },
  {
    title: 'Bitcoin-Based Decentralized Carbon Emissions Trading Infrastructure Model',
    authors: 'E. Alkawasmi, E. Arnautovic, and Davor Svetinovic',
    venue: 'Systems Engineering',
    year: 2015,
    type: 'Journal',
    status: 'legacy'
  },
  {
    title: 'NLP-KAOS for Systems Goal Elicitation: Smart Metering System Case Study',
    authors:
      'E. Casagrande, S. Woldeamlak, W. L. Woon, H. H. Zeineldin, and Davor Svetinovic',
    venue: 'IEEE Transactions on Software Engineering',
    year: 2014,
    type: 'Journal',
    status: 'legacy'
  },
  {
    title: 'System Security Requirements Analysis: A Smart Grid Case Study',
    authors: 'N. Zafar, E. Arnautovic, A. Diabat, and Davor Svetinovic',
    venue: 'Systems Engineering',
    year: 2014,
    type: 'Journal',
    status: 'legacy'
  },
  {
    title: 'Strategic Requirements Engineering for Complex Sustainable Systems',
    authors: 'Davor Svetinovic',
    venue: 'Systems Engineering',
    year: 2013,
    type: 'Journal',
    status: 'legacy'
  },
  {
    title: 'Unified Use Case Statecharts: Case Studies',
    authors: 'Davor Svetinovic, D. M. Berry, N. Day, and M. Godfrey',
    venue: 'Requirements Engineering',
    year: 2007,
    type: 'Journal',
    status: 'legacy'
  }
];

export const publicationsByYear = publications
  .slice()
  .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
