export interface Experience {
  company: string
  role: string
  period: string
  location?: string
  points: string[]
}

export interface Education {
  school: string
  degree: string
  period: string
}

export interface Socials {
  github: string
  linkedin: string
  medium: string
  youtube: string
  email: string
}

export interface SiteConfig {
  title: string
  description: string
}

export interface Profile {
  name: string
  role: string
  tagline: string
  location: string
  summary: string
  skills: string[]
  experience: Experience[]
  certifications: string[]
  education: Education[]
  socials: Socials
  site: SiteConfig
}

export const profile: Profile = {
  name: 'Musa Yohanes',
  role: 'Software Developer',
  tagline: 'Software Developer | Data | Finance | Process Automation',
  location: 'Jakarta, Indonesia',
  summary:
    'Software developer building SaaS workflow automation, with a unique background as a former PwC auditor and accounting lecturer. That experience means I build systems that make sense both technically and business-wise — I speak the language of finance teams as fluently as the language of code.',
  skills: [
    'Python',
    'React',
    'TypeScript',
    'Astro',
    'SolidJS',
    'Docker',
    'Azure',
    'MongoDB',
    'PostgreSQL',
    'Workflow Automation',
    'Financial Systems',
    'Data Analytics',
  ],
  experience: [
    {
      company: 'Automation Boutique',
      role: 'Software Developer',
      period: 'Oct 2024 – Present',
      location: 'Utrecht, Netherlands (remote)',
      points: [
        'Architect and build SaaS platform end-to-end: backend APIs, React frontend, infrastructure',
        'Built entire product architecture from ground up',
        'Own deployment, monitoring, production issues, and user onboarding',
      ],
    },
    {
      company: 'Upwork',
      role: 'SME Accounting & Bookkeeping | Data Analytics',
      period: 'Nov 2023 – Sep 2024',
      points: ['Freelance accounting automation and data analytics for SMBs'],
    },
    {
      company: 'PwC Indonesia',
      role: 'Assurance Associate',
      period: 'Aug 2021 – Sep 2022',
      points: [
        'Audited financial statements for financial services industry',
        'Verified transactions, identified key business and bookkeeping risks',
      ],
    },
    {
      company: 'Universitas Tarumanagara',
      role: 'Accounting Practical Class Lecturer',
      period: 'Jan 2020 – Dec 2020',
      points: ['Taught management accounting and cost accounting practice classes'],
    },
  ],
  certifications: [
    'CS50 — Introduction to Computer Science',
    'Google Data Analytics',
    'QuickBooks Certified ProAdvisor',
    'Essential Design Principles for Tableau',
    'C2 Proficient (CEFR Level)',
  ],
  education: [
    {
      school: 'Universitas Tarumanagara',
      degree: "Bachelor's, Accounting and Finance",
      period: '2017 – 2021',
    },
    {
      school: 'Djarum Beasiswa Plus',
      degree: 'Beswan Djarum 2019/2020',
      period: '2019 – 2020',
    },
  ],
  socials: {
    github: 'https://github.com/Muyoouu',
    linkedin: 'https://www.linkedin.com/in/musayohanes',
    medium: 'https://medium.com/@musayohanes00',
    youtube: 'https://www.youtube.com/@DataDrivenDuck',
    email: 'musayohanes00@gmail.com',
  },
  site: {
    title: 'Musa Yohanes',
    description:
      'Software developer portfolio — SaaS, workflow automation, data, and finance systems. ex-PwC.',
  },
}
