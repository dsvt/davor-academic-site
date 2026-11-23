export type ResearchTheme = {
  slug: string;
  title: string;
  summary: string;
  topics: string[];
  /** Exactly one theme is the current programme; the others are its foundations. */
  current?: boolean;
};

export type CollaborationRoute = {
  title: string;
  summary: string;
  href: string;
  linkLabel: string;
  external?: boolean;
};

export type ResearchInitiative = {
  id: 'reqs-labs' | 'trust-lab';
  name: string;
  shortName: string;
  role: string;
  summary: string;
  href: string;
};

export type ProfileLink = {
  label: string;
  /** Academic profiles are listed as records; social profiles are contact routes. */
  kind: 'academic' | 'social';
  href: string;
  primary: boolean;
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
    current: true,
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

export const researchInitiatives: ResearchInitiative[] = [
  {
    id: 'reqs-labs',
    name: 'REQS Labs',
    shortName: 'REQS Labs',
    role: 'Research network',
    summary:
      'A network of independent labs studying complex digital, financial, and biological systems, with a shared route from research to prototypes and technology transfer.',
    href: 'https://www.reqs.org'
  },
  {
    id: 'trust-lab',
    name: 'Trusted Agentic Systems Lab',
    shortName: 'Trust Lab',
    role: 'Research group',
    summary:
      'The group Davor leads, studying how autonomous agents, blockchains, and connected infrastructure can be secured and trusted.',
    href: 'https://trust.reqs.org'
  }
];

const currentThemes = researchThemes.filter((theme) => theme.current);
if (currentThemes.length !== 1) {
  throw new Error(`Expected exactly one current research theme, found ${currentThemes.length}.`);
}

/** The theme presented as the current programme. */
export const currentTheme = currentThemes[0];
/** The remaining themes, in data order, presented as research foundations. */
export const foundationThemes = researchThemes.filter((theme) => !theme.current);

const foundTrustLab = researchInitiatives.find((initiative) => initiative.id === 'trust-lab');
if (!foundTrustLab) {
  throw new Error("Research initiative with id 'trust-lab' is missing.");
}

/** The lab that hosts the current programme. */
export const trustLab = foundTrustLab;

export const collaborationRoutes: CollaborationRoute[] = [
  {
    title: 'Research collaboration',
    summary:
      'Researchers who want to work on agent assurance, blockchain security, or cyber-physical resilience can join projects through Trust Lab.',
    href: 'https://trust.reqs.org/about',
    linkLabel: 'How Trust Lab works',
    external: true
  },
  {
    title: 'Labs and partners',
    summary:
      'Research groups and organisations interested in joint research or technology transfer can work with the wider REQS Labs network.',
    href: 'https://www.reqs.org/collaborate',
    linkLabel: 'Collaborate with REQS Labs',
    external: true
  },
  {
    title: 'Talks and institutional enquiries',
    summary: 'For invited talks, graduate programme matters, and institutional work, write directly.',
    href: '/contact',
    linkLabel: 'Contact Davor'
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
  email: 'davor.svetinovic@ku.ac.ae',
  photo: {
    src: '/davor-talk.jpg',
    alt: 'Davor Svetinovic speaking at a lectern'
  },
  /** 1200x630 crop of the photo for link previews. */
  socialImage: {
    src: '/social-card.jpg',
    width: 1200,
    height: 630
  },
  title:
    'Computer science professor at Khalifa University and Visiting Fellow at ADIA Lab',
  tagline:
    'Agentic AI security, resilient autonomous systems, and the digital infrastructure they increasingly control.',
  location: 'Abu Dhabi, United Arab Emirates',
  shortBio:
    'Davor Svetinovic is a computer science professor and Associate Chair for Graduate Studies at Khalifa University. He is also a Visiting Fellow at ADIA Lab.',
  longBio: [
    'He studies the security and resilience of autonomous agents, multi-agent systems, programmable blockchains, and cyber-physical infrastructure, using software and requirements engineering to examine trust, failure, and control in complex digital systems.',
    'He initiated REQS Labs and leads its first member lab, the Trusted Agentic Systems Lab.',
    'He previously served as a Full Professor and Director of the Research Institute for Cryptoeconomics at WU Vienna, and held visiting and affiliated research roles at MIT. He holds a PhD in Computer Science from the University of Waterloo.',
    'He has published more than 100 papers in journals and conferences and is a Senior Member of IEEE and ACM.'
  ],
  researchAreas: researchThemes.map((theme) => theme.title),
  links: [
    {
      label: 'Google Scholar',
      kind: 'academic',
      href: 'https://scholar.google.com/citations?user=LpV-B0IAAAAJ',
      primary: true
    },
    {
      label: 'LinkedIn',
      kind: 'social',
      href: 'https://www.linkedin.com/in/davor-svetinovic/',
      primary: true
    },
    {
      label: 'ORCID',
      kind: 'academic',
      href: 'https://orcid.org/0000-0002-3020-9556',
      primary: true
    },
    {
      label: 'DBLP',
      kind: 'academic',
      href: 'https://dblp.org/pid/68/6669.html',
      primary: false
    },
    {
      label: 'ResearchGate',
      kind: 'academic',
      href: 'https://www.researchgate.net/profile/Davor-Svetinovic',
      primary: false
    },
    {
      label: 'X',
      kind: 'social',
      href: 'https://x.com/dsvetino',
      primary: false
    }
  ] satisfies ProfileLink[]
};
