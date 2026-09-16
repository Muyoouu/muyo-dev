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
  tagline: 'Software Developer · Former Financial Auditor at PwC',
  location: 'Jakarta, Indonesia',
  summary:
    'I build data platforms for treasury teams at a SaaS company. I got here through PwC audit rooms and accounting classrooms, so I have done the work my software now automates.',
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
    'Data Pipelines',
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
        'Built the backend, React frontend, and infrastructure for a treasury data platform',
        'Made the early product decisions: data model, service layout, deployment',
        'Handle deploys, monitoring, bugs, and onboarding new users',
      ],
    },
    {
      company: 'Upwork',
      role: 'SME Accounting & Bookkeeping | Data Analytics',
      period: 'Nov 2023 – Sep 2024',
      points: ['Freelance bookkeeping and data work for small businesses'],
    },
    {
      company: 'PwC Indonesia',
      role: 'Assurance Associate',
      period: 'Aug 2021 – Sep 2022',
      points: [
        'Audited financial statements, mostly financial services companies',
        'Checked transactions against evidence and flagged risky bookkeeping',
      ],
    },
    {
      company: 'Universitas Tarumanagara',
      role: 'Accounting Practical Class Lecturer',
      period: 'Jan 2020 – Dec 2020',
      points: ['Taught cost and management accounting practice classes'],
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
    email: 'hello@muyo.dev',
  },
  site: {
    title: 'Musa Yohanes',
    description:
      'Software developer in Jakarta. I build data platforms for treasury teams at a SaaS company. Former financial auditor at PwC.',
  },
}
