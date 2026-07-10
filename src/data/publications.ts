export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'Journal' | 'Conference';
  url: string;
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    title: 'MEV Detection for Ethereum Security: An Empirical Analysis on Agreement and Scalability',
    authors: 'Shraddha M. Naik, Huned Materwala, Davor Svetinovic',
    venue: 'IEEE Transactions on Emerging Topics in Computing',
    year: 2026,
    type: 'Journal',
    url: 'https://doi.org/10.1109/TETC.2026.3700162',
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
    featured: true
  },
  {
    title:
      'Adaptive Privacy-Preserving Federated Learning for Robust IoT Systems: A Defense Against Data Poisoning Attacks',
    authors: 'Sajjad Khan, Davor Svetinovic',
    venue: 'Internet of Things and Cyber-Physical Systems',
    year: 2026,
    type: 'Journal',
    url: 'https://doi.org/10.1016/j.iotcps.2026.03.006'
  },
  {
    title: 'Maximal Extractable Value in Decentralized Finance: Taxonomy, Detection, and Mitigation',
    authors: 'Huned Materwala, Shraddha M. Naik, Aya Taha, Tala Abdulrahman Abed, Davor Svetinovic',
    venue: 'IEEE Transactions on Services Computing',
    year: 2025,
    type: 'Journal',
    url: 'https://doi.org/10.1109/TSC.2025.3620604'
  },
  {
    title: 'On the Security and Privacy Implications of Large Language Models: In-Depth Threat Analysis',
    authors: 'Luis Ruhländer, Emilian Popp, Maria Stylidou, Sajjad Khan, Davor Svetinovic',
    venue: 'IEEE Cybermatics 2024',
    year: 2024,
    type: 'Conference',
    url: 'https://doi.org/10.1109/iThings-GreenCom-CPSCom-SmartData-Cybermatics62450.2024.00102',
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
    featured: true
  },
  {
    title: 'BaseSAP: Modular Stealth Address Protocol for Programmable Blockchains',
    authors: 'Anton Wahrstätter, Matthew Solomon, Ben DiFrancesco, Vitalik Buterin, Davor Svetinovic',
    venue: 'IEEE Transactions on Information Forensics and Security',
    year: 2024,
    type: 'Journal',
    url: 'https://doi.org/10.1109/TIFS.2024.3364081'
  },
  {
    title: 'Cyber-Immune Line Current Differential Relays',
    authors: 'Ahmad Mohammad Saber, Amr Youssef, Davor Svetinovic, Hatem Zeineldin, Ehab F. El-Saadany',
    venue: 'IEEE Transactions on Industrial Informatics',
    year: 2024,
    type: 'Journal',
    url: 'https://doi.org/10.1109/TII.2023.3310769'
  }
];

export const publicationsByYear = publications
  .slice()
  .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
