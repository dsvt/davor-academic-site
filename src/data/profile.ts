export type ResearchTheme = {
  slug: string;
  title: string;
  summary: string;
  topics: string[];
};

export type AdvisingTopic = {
  title: string;
  summary: string;
  examples: string[];
};

export type LeadershipHighlight = {
  role: string;
  organization: string;
  period?: string;
};

export const researchThemes: ResearchTheme[] = [
  {
    slug: 'agentic-ai-security',
    title: 'Agentic AI security and resilience',
    summary:
      'Current work examines how autonomous agents and multi-agent systems can be audited, secured, and made resilient when they interact with smart contracts, digital markets, and critical infrastructure.',
    topics: [
      'Agent verification and security auditing',
      'Adversarial and cooperative multi-agent learning',
      'Decentralized AI and secure agent infrastructure',
      'Security requirements for autonomous systems'
    ]
  },
  {
    slug: 'blockchain-security',
    title: 'Blockchain security and digital economies',
    summary:
      'Research on privacy, censorship resistance, maximal extractable value, decentralized finance, and protocol security in programmable blockchains.',
    topics: [
      'Blockchain privacy and stealth addresses',
      'Censorship resistance and protocol trust',
      'DeFi security, MEV detection, and market behavior'
    ]
  },
  {
    slug: 'cyber-physical-security',
    title: 'Cyber-physical and infrastructure security',
    summary:
      'Security for smart grids, microgrids, connected vehicles, and other systems where software and AI act on physical infrastructure.',
    topics: [
      'Cyber-resilient power-system protection',
      'Attack detection for smart grids and industrial systems',
      'Threat modeling for connected and IoT systems',
      'Secure decentralized energy systems'
    ]
  },
  {
    slug: 'software-engineering',
    title: 'Software and requirements engineering',
    summary:
      'Requirements and systems engineering provide the methods used to study trust, security, and failure in complex digital systems.',
    topics: [
      'Security and privacy requirements',
      'Requirements engineering for decentralized systems',
      'Software architecture and architecture recovery'
    ]
  }
];

export const advisingTopics: AdvisingTopic[] = [
  {
    title: 'Research collaboration and graduate supervision',
    summary:
      'Current collaboration interests center on agentic AI security, decentralized AI, blockchain protocols, and cyber-physical security.',
    examples: [
      'Agent auditing and multi-agent security',
      'Decentralized AI and blockchain systems',
      'Security for critical digital infrastructure',
      'Research methods for trustworthy systems'
    ]
  },
  {
    title: 'Academic and research leadership',
    summary:
      'Experience includes graduate program leadership, research institute direction, and interdisciplinary research programs.',
    examples: [
      'Graduate program and curriculum development',
      'Research group and institute development',
      'Interdisciplinary research planning'
    ]
  },
  {
    title: 'Invited talks and expert briefings',
    summary:
      'Talks connect current research in AI security and decentralized systems to decisions in academia, industry, and public institutions.',
    examples: [
      'Agentic AI security and resilient digital economies',
      'Blockchain privacy, censorship, and protocol risk',
      'Cybersecurity for infrastructure and public systems',
      'Trustworthy AI and federated learning'
    ]
  }
];

export const leadershipHighlights: LeadershipHighlight[] = [
  {
    role: 'Associate Chair for Graduate Studies',
    organization: 'Khalifa University',
    period: '2025-present'
  },
  {
    role: 'Head and Director, Research Institute for Cryptoeconomics',
    organization: 'WU Vienna',
    period: '2021-2024'
  },
  {
    role: 'Theme Lead, Cyber-Physical Systems and Blockchain Technology',
    organization: 'Khalifa University'
  }
];

export const profile = {
  name: 'Davor Svetinovic',
  canonicalUrl: 'https://www.davors.com',
  scholarUrl: 'https://scholar.google.com/citations?user=LpV-B0IAAAAJ',
  photo: {
    src: '/davor-talk.jpg',
    alt: 'Davor Svetinovic speaking at a lectern'
  },
  title:
    'Associate Professor of Computer Science at Khalifa University and Visiting Fellow at ADIA Lab',
  tagline:
    'Research on agentic AI security, decentralized systems, blockchain privacy and censorship resistance, and cyber-physical resilience.',
  location: 'Abu Dhabi, United Arab Emirates',
  shortBio:
    'Davor Svetinovic is an Associate Professor of Computer Science and Associate Chair for Graduate Studies at Khalifa University. He is also a Visiting Fellow at ADIA Lab.',
  longBio: [
    'His current research asks how autonomous agents, multi-agent learning systems, smart contracts, and cyber-physical infrastructure can be made secure, auditable, and resilient.',
    'He previously served as a Full Professor and Director of the Research Institute for Cryptoeconomics at WU Vienna, and held visiting and affiliated research roles at MIT. He holds a PhD in Computer Science from the University of Waterloo.'
  ],
  researchAreas: researchThemes.map((theme) => theme.title),
  links: [
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=LpV-B0IAAAAJ',
      primary: true
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/davor-svetinovic/',
      primary: true
    },
    {
      label: 'ORCID',
      href: 'https://orcid.org/0000-0002-3020-9556',
      primary: true
    },
    {
      label: 'DBLP',
      href: 'https://dblp.org/pid/68/6669.html',
      primary: false
    },
    {
      label: 'ResearchGate',
      href: 'https://www.researchgate.net/profile/Davor-Svetinovic',
      primary: false
    },
    {
      label: 'X',
      href: 'https://x.com/dsvetino',
      primary: false
    }
  ]
};
