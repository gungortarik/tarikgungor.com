export interface RightNowItem {
  index: string;
  label: string;
  title: string;
  description: string;
  metric?: string;
}

export interface SoftwareProject {
  id: string;
  name: string;
  badge?: string;
  status: string;
  summary: string;
  architectureNote: string;
  stack: string[];
  highlights: string[];
  image?: string;
  imageAlt?: string;
  githubUrl?: string;
  isPrivate?: boolean;
}

export interface NoteEntry {
  date: string;
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  readTime: string;
  tags: string[];
}

export interface PathMilestone {
  year: string;
  phase: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
}

export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  period: string;
  scaleBadge: string;
  highlights: string[];
}

export interface InfrastructureLab {
  id: string;
  name: string;
  category: string;
  description: string;
  protocols: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationEntry {
  institution: string;
  credential: string;
  location?: string;
  period: string;
  focus: string;
}

export const siteContent = {
  meta: {
    name: 'Tarik Gungor',
    title: 'Tarik Gungor — Building. Learning. Living.',
    resumeTitle: 'Tarik Gungor — Resume | IT Support & Systems Infrastructure',
    description:
      "Tarik Gungor's personal platform for technology, projects, learning, systems, and life in progress.",
    resumeDescription:
      'IT Support Specialist focused on infrastructure, endpoint support, networking, Windows systems, and technical operations.',
    url: 'https://tarikgungor.com',
    location: 'Toronto, Canada',
    region: 'Toronto, ON',
    coordinates: {
      lat: '43.6532° N',
      lng: '79.3832° W',
    },
    email: 'gungortarik@icloud.com',
    secondaryEmail: 'tarik.gungor.ca@gmail.com',
    github: 'https://github.com/gungortarik',
    githubHandle: 'gungortarik',
    linkedin: 'https://www.linkedin.com/in/tarikgungor/',
    systemVersion: '2.0.0',
  },

  hero: {
    eyebrowPrimary: 'Toronto, Canada',
    eyebrowSecondary: 'A Life in Progress',
    headlineLines: [
      { text: 'Building systems.', italicWord: '' },
      { text: 'Learning continuously.', italicWord: '' },
      { text: 'Living intentionally.', italicWord: 'Living' },
    ],
    bio: "I'm Tarik Gungor. I study Computer Systems Technology in Toronto and build practical tools while learning how systems work — from networks and Linux to software and design. This site is where I document the work, the lessons, and the life around them.",
    nowTerminal: [
      { key: 'building', value: 'Sonoma · CertForge' },
      { key: 'studying', value: 'Computer Systems Technology' },
      { key: 'learning', value: 'Network+ → Security+' },
      { key: 'documenting', value: 'Work as it happens' },
    ],
    telemetryNodes: [
      { id: 'NODE-01', label: 'Endpoint Fleet', value: '60+ Active Hosts', status: 'ONLINE' },
      { id: 'NODE-02', label: 'Lab Hypervisor', value: 'Hyper-V · ESXi Nested', status: 'SYNCED' },
      { id: 'NODE-03', label: 'Core Stack', value: 'TCP/IP · AD · Linux · TS', status: 'READY' },
    ],
  },

  rightNow: [
    {
      index: '01',
      label: 'BUILDING',
      title: 'Software projects',
      description:
        'Building Sonoma, CertForge, and small tools around problems I actually have.',
      metric: '2 Active Products',
    },
    {
      index: '02',
      label: 'STUDYING',
      title: 'Computer Systems Technology',
      description: 'Currently studying at George Brown College in Toronto.',
      metric: 'Advanced Diploma',
    },
    {
      index: '03',
      label: 'LEARNING',
      title: 'Network+ → Security+',
      description:
        'Strengthening networking fundamentals and working toward the next layer of IT systems knowledge.',
      metric: 'Routing & Defense',
    },
    {
      index: '04',
      label: 'DOCUMENTING',
      title: 'Work as it happens',
      description:
        'Projects, technical lessons, decisions, mistakes, and progress — documented honestly over time.',
      metric: 'Open Lab Log',
    },
  ] satisfies RightNowItem[],

  projects: [
    {
      id: 'sonoma',
      name: 'Sonoma',
      badge: 'Private · In Progress',
      status: 'Active Development',
      summary: 'A private expense and document management tool I built for personal use.',
      architectureNote:
        'Designed around zero-friction personal bookkeeping, receipt indexing, and structured monthly financial visibility without exposing sensitive records to third-party aggregators.',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      highlights: [
        'Private expense ledger & recurring cashflow tracking',
        'Document vault with fast metadata tagging and search',
        'High-contrast dashboard tailored for daily personal operations',
      ],
      image: '/assets/projects/sonoma-dashboard.png',
      imageAlt: 'Sonoma private expense and document management dashboard',
      isPrivate: true,
    },
    {
      id: 'certforge',
      name: 'CertForge',
      badge: 'Open Source · Study Platform',
      status: 'Public Repository',
      summary:
        'An IT certification study platform I built around Network+ and CCNA preparation.',
      architectureNote:
        'Built to turn passive certification reading into active recall across OSI layers, subnetting, routing protocols, and infrastructure troubleshooting scenarios.',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      highlights: [
        'CompTIA Network+ objective mapping & active drills',
        'Cisco CCNA routing, switching & VLAN topology scenarios',
        'Systems & routing fundamentals structured for self-directed study',
      ],
      githubUrl: 'https://github.com/gungortarik/certforge',
      isPrivate: false,
    },
  ] satisfies SoftwareProject[],

  notes: [
    {
      date: 'July 2026',
      category: 'Newsletter · Field Note',
      title: 'Flexible, but Not Free',
      subtitle: 'The hidden cost of gig work for Toronto polytechnic students',
      summary:
        'A piece about the trade-offs of app-based gig work while studying in Toronto — examining attention fragmentation, vehicle depreciation, and the real opportunity cost against deep technical study.',
      readTime: '6 min read',
      tags: ['Toronto', 'Student Life', 'Systems Thinking', 'Economics'],
    },
  ] satisfies NoteEntry[],

  updatesLog: [
    { key: 'site', value: 'Re-engineered on Astro 5, GSAP ScrollTrigger & Lenis.' },
    { key: 'building', value: 'Sonoma · CertForge' },
    { key: 'learning', value: 'Computer Systems Technology · Network+' },
    { key: 'next', value: 'Document the work as it happens.' },
  ],

  pathSoFar: [
    {
      year: '2023',
      phase: 'FOUNDATION',
      title: 'BCIT — Technology Support Professional',
      organization: 'British Columbia Institute of Technology',
      description:
        'Completed hands-on training across Windows infrastructure, networking, virtualization, Linux, and IT support.',
      tags: ['Windows Admin', 'Networking', 'Linux', 'Virtualization'],
    },
    {
      year: '2023',
      phase: 'ENTERPRISE FIELD',
      title: 'Payment Source — Technology Support Intern',
      organization: 'Payment Source · Toronto, ON',
      description:
        'Worked on endpoint management, migration, patching, inventory, and day-to-day technology support.',
      tags: ['ManageEngine', 'MDM', '50+ Endpoints', 'Policy Deployment'],
    },
    {
      year: '2026',
      phase: 'SYSTEMS DEPTH',
      title: 'George Brown College',
      organization: 'Computer Systems Technology',
      description:
        'Started the Computer Systems Technology advanced diploma and returned deeper into networking, Linux, Windows systems, and infrastructure.',
      tags: ['Routing & Switching', 'Linux Systems', 'Active Directory', 'SAN/iSCSI'],
    },
    {
      year: '2026',
      phase: 'PRODUCT & CRAFT',
      title: 'Sonoma & CertForge',
      organization: 'Independent Software & Lab Engineering',
      description:
        'Began building private and open-source software products around expenses, documents, certification study, and real personal workflows.',
      tags: ['TypeScript', 'Next.js', 'System Design', 'Tooling'],
    },
  ] satisfies PathMilestone[],

  resume: {
    headline: 'IT Support Specialist',
    subheadline: 'Infrastructure & Endpoint-Focused',
    summary:
      'Infrastructure-focused IT support professional supporting 60+ endpoints across hybrid business environments. Experienced in Windows 10/11 administration, Active Directory user management, Microsoft 365 support, endpoint configuration, and network troubleshooting (TCP/IP, DNS, DHCP, VPN). Skilled in hardware support, device deployment, remote troubleshooting, and maintaining operational system reliability. Actively expanding into systems administration through virtualization and server-based lab environments.',
    skills: [
      {
        category: 'OPERATING SYSTEMS',
        items: ['Windows 10/11', 'Ubuntu Linux'],
      },
      {
        category: 'DIRECTORY SERVICES',
        items: ['Active Directory — User & Group Management'],
      },
      {
        category: 'CLOUD & PRODUCTIVITY',
        items: ['Microsoft 365'],
      },
      {
        category: 'NETWORKING',
        items: ['TCP/IP', 'DNS', 'DHCP', 'VPN', 'Network Segmentation'],
      },
      {
        category: 'ENDPOINT MANAGEMENT',
        items: ['Device configuration', 'Policy deployment', 'System updates'],
      },
      {
        category: 'VIRTUALIZATION',
        items: ['Hyper-V', 'Ubuntu VM Lab Environment'],
      },
      {
        category: 'SECURITY',
        items: ['Endpoint monitoring', 'Configuration hardening'],
      },
      {
        category: 'HARDWARE',
        items: ['Desktop/laptop troubleshooting', 'Device setup & deployment'],
      },
      {
        category: 'REMOTE SUPPORT',
        items: ['Remote diagnostics', 'Issue resolution'],
      },
    ] satisfies SkillGroup[],

    experience: [
      {
        company: 'BETA PREP',
        role: 'IT Specialist',
        location: 'Toronto, ON',
        period: '2024 — Present',
        scaleBadge: '38 Endpoints · Hybrid',
        highlights: [
          'Support and maintain 38 endpoints in a hybrid business environment',
          'Manage and resolve user incidents ensuring minimal operational disruption',
          'Configure and maintain Windows 10/11 devices',
          'Assist with Microsoft 365 administration and user account management',
          'Troubleshoot network connectivity issues (DNS, DHCP, IP configuration)',
          'Deploy and configure new devices for staff use',
        ],
      },
      {
        company: 'Bestof Floor LTD',
        role: 'IT Support Specialist',
        location: 'Toronto, ON',
        period: '2023 — Present',
        scaleBadge: '23 Devices · On-Prem & AD',
        highlights: [
          'Provide technical support across a 23-device environment',
          'Diagnose and resolve user-reported hardware and software issues',
          'Perform Active Directory user account management',
          'Support internal network infrastructure and connectivity',
          'Maintain system reliability and ensure daily operational continuity',
        ],
      },
      {
        company: 'Payment Source',
        role: 'IT Analyst — Internship',
        location: 'Toronto, ON',
        period: '2023',
        scaleBadge: '50+ Endpoints · MDM',
        highlights: [
          'Worked with ManageEngine Endpoint Central for device configuration',
          'Assisted in mobile device management (MDM) deployments',
          'Contributed to 50+ endpoint configurations',
          'Supported endpoint monitoring and structured policy implementation',
        ],
      },
    ] satisfies WorkExperience[],

    labs: [
      {
        id: 'LAB-01',
        name: 'Virtualized Enterprise Lab',
        category: 'Enterprise Topology',
        description:
          'NAT/firewall routing, multi-DC design, Linux DHCP, DNS, SAN/iSCSI and failover testing using Hyper-V and VMware/ESXi.',
        protocols: ['Hyper-V', 'ESXi', 'Multi-DC', 'NAT/Firewall'],
      },
      {
        id: 'LAB-02',
        name: 'Active Directory — Users, OUs & GPO',
        category: 'Identity & Policy',
        description:
          'Structured OU design, security groups, permissions and policy-based workstation/user settings.',
        protocols: ['AD DS', 'GPO', 'RBAC', 'OU Hierarchy'],
      },
      {
        id: 'LAB-03',
        name: 'DNS — Primary/Secondary + AD-Integrated Zones',
        category: 'Name Resolution',
        description: 'Service configuration, zone design and troubleshooting.',
        protocols: ['DNS Zones', 'Replication', 'Forwarders', 'PTR'],
      },
      {
        id: 'LAB-04',
        name: 'DHCP — Linux + Advanced DHCP Service',
        category: 'IP Address Management',
        description:
          'Scope planning, options, reservations and validation in a segmented environment.',
        protocols: ['Linux DHCP', 'VLAN Scopes', 'Reservations', 'Relay'],
      },
      {
        id: 'LAB-05',
        name: 'Storage — SAN + iSCSI + RAID',
        category: 'Block Storage & Redundancy',
        description:
          'iSCSI connectivity and redundancy testing, including multi-disk failure scenarios.',
        protocols: ['SAN', 'iSCSI Target/Initiator', 'RAID', 'MPIO'],
      },
      {
        id: 'LAB-06',
        name: 'Failover Cluster — File Servers + Shared Storage',
        category: 'High Availability',
        description:
          'Cluster design, shared storage using VHD Set, and availability testing.',
        protocols: ['Failover Clustering', 'VHD Set', 'Quorum', 'SMB'],
      },
      {
        id: 'LAB-07',
        name: 'VMware ESXi — Nested Build & Management',
        category: 'Hypervisor Infrastructure',
        description:
          'Workstation and nested ESXi environment setup for repeatable lab workflows.',
        protocols: ['VMware ESXi', 'vSwitch', 'Nested Virtualization'],
      },
    ] satisfies InfrastructureLab[],

    education: [
      {
        institution: 'George Brown College',
        credential: 'Computer Systems Technology — Advanced Diploma',
        location: 'Toronto, ON',
        period: '2026 — Ongoing',
        focus: 'Networking, Linux Systems, Windows Server Infrastructure & Virtualization',
      },
      {
        institution: 'British Columbia Institute of Technology',
        credential: 'Technology Support Professional',
        location: 'British Columbia',
        period: '2022 — 2023',
        focus: 'Enterprise Support, Endpoint Administration, Networking & Virtualization',
      },
    ] satisfies EducationEntry[],
  },
} as const;
