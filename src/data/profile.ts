export type ResearchTheme = {
  title: string;
  summary: string;
  topics: string[];
};

export type AdvisingTopic = {
  title: string;
  summary: string;
  examples: string[];
};

export const researchThemes: ResearchTheme[] = [
  {
    title: 'Blockchain and Web3 systems',
    summary:
      'Research on programmable blockchains, privacy, decentralized finance, blockchain oracles, censorship, and protocol design. The public record includes work on stealth addresses, Ethereum-based federated learning, blockchain censorship, decentralized energy trading, and trust in cryptocurrency systems.',
    topics: [
      'Privacy and identity in programmable blockchains',
      'Blockchain oracles, censorship, and trust assumptions',
      'Decentralized finance and energy trading'
    ]
  },
  {
    title: 'Cybersecurity for cyber-physical systems',
    summary:
      'Work on security requirements, threat modeling, and attack detection for systems where software connects to physical infrastructure. Public publications cover smart grids, microgrids, IoT systems, decentralized energy markets, and cyber-physical security for industrial settings.',
    topics: [
      'Smart-grid and microgrid security',
      'Threat models for cyber-physical infrastructure',
      'IoT privacy and security requirements'
    ]
  },
  {
    title: 'Secure AI and federated learning',
    summary:
      'Recent work studies decentralized and privacy-preserving federated learning, including blockchain-supported learning systems, poisoning resistance, cross-device trust, and links between blockchain infrastructure and trustworthy AI.',
    topics: [
      'Decentralized federated learning',
      'Data-poisoning defenses and client trust',
      'Blockchain support for explainable and trustworthy AI'
    ]
  },
  {
    title: 'Software and requirements engineering',
    summary:
      'Earlier and continuing work focuses on requirements engineering, software architecture, goal modeling, security requirements, and architecture recovery. This thread connects older work on use-case statecharts and domain analysis with newer requirements questions in Web3 systems.',
    topics: [
      'Requirements engineering for complex systems',
      'Security requirements analysis',
      'Software architecture and architecture recovery'
    ]
  },
  {
    title: 'Digital governance and trustworthy infrastructure',
    summary:
      'Public-facing advisory topics stay close to the research record: blockchain governance, public-sector transparency, infrastructure security, and executive education around AI, blockchain, cybersecurity, and digital systems.',
    topics: [
      'Blockchain governance and transparency',
      'Digital infrastructure risk',
      'Executive education for emerging technology'
    ]
  }
];

export const advisingTopics: AdvisingTopic[] = [
  {
    title: 'Blockchain governance and transparency',
    summary:
      'Advising on how blockchain systems can support auditability, accountability, and institutional trust without ignoring privacy, governance, or implementation limits.',
    examples: [
      'Public-sector blockchain use cases',
      'Governance models for decentralized systems',
      'Risk review for Web3 and digital-asset initiatives'
    ]
  },
  {
    title: 'Cybersecurity for infrastructure and public systems',
    summary:
      'Security guidance rooted in research on smart grids, IoT, cyber-physical systems, and software requirements, with attention to threat models and operational constraints.',
    examples: [
      'Security requirements and threat modeling',
      'Smart-grid and IoT risk review',
      'Cybersecurity briefings for technical and executive teams'
    ]
  },
  {
    title: 'Executive training on AI, blockchain, and cybersecurity',
    summary:
      'Briefings and short courses for leaders who need clear technical grounding before making policy, investment, or governance decisions.',
    examples: [
      'AI and blockchain foundations',
      'Cybersecurity and digital-governance workshops',
      'Research translation for senior decision-makers'
    ]
  }
];

export const profile = {
  name: 'Davor Svetinovic',
  canonicalUrl: 'https://www.davors.com',
  scholarUrl: 'https://scholar.google.com/citations?user=LpV-B0IAAAAJ',
  photo: {
    src: '/davor-talk.jpg',
    alt: 'Davor Svetinovic giving a talk'
  },
  title: 'Computer scientist working on blockchain, cybersecurity, secure AI, and software engineering',
  tagline:
    'Research on trustworthy decentralized systems, cyber-physical security, federated learning, and requirements engineering.',
  location: 'United Arab Emirates',
  shortBio:
    'Davor Svetinovic is a UAE-based computer scientist whose work sits at the intersection of blockchain systems, cybersecurity, federated learning, and software engineering.',
  longBio: [
    'His public research record includes secure decentralized energy trading, smart-grid and IoT security, blockchain oracles, trustworthy AI, and requirements engineering for complex systems.',
    'This site is a concise academic profile and curated publication hub. For a complete publication index, use the linked DBLP, ORCID, and Google Scholar profiles.'
  ],
  researchAreas: researchThemes.map((theme) => theme.title),
  services: advisingTopics.map((topic) => topic.title),
  links: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/davor-svetinovic/'
    },
    {
      label: 'X',
      href: 'https://x.com/dsvetino'
    },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=LpV-B0IAAAAJ'
    },
    {
      label: 'DBLP',
      href: 'https://dblp.org/pid/68/6669.html'
    },
    {
      label: 'ORCID',
      href: 'https://orcid.org/0000-0002-3020-9556'
    },
    {
      label: 'ResearchGate',
      href: 'https://www.researchgate.net/profile/Davor-Svetinovic'
    }
  ]
};
