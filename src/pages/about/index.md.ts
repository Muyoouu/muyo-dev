import type { APIContext } from 'astro'
import { profile } from '../../data/profile'

const SITE = 'https://muyo.dev'

export async function GET(_context: APIContext) {
  const lines = [
    `# About ${profile.name}`,
    '',
    `> ${profile.summary}`,
    '',
    `- Role: ${profile.role}`,
    `- Tagline: ${profile.tagline}`,
    `- Location: ${profile.location}`,
    '',
    '## Experience',
    '',
    ...profile.experience.flatMap((job) => [
      `### ${job.role} at ${job.company}`,
      '',
      `- Period: ${job.period}`,
      ...(job.location ? [`- Location: ${job.location}`] : []),
      '',
      ...job.points.map((point) => `- ${point}`),
      '',
    ]),
    '## Education',
    '',
    ...profile.education.map((entry) => `- ${entry.degree}, ${entry.school} (${entry.period})`),
    '',
    '## Certifications',
    '',
    ...profile.certifications.map((certification) => `- ${certification}`),
    '',
    '## Skills',
    '',
    profile.skills.join(', '),
    '',
    '## Elsewhere',
    '',
    `- GitHub: ${profile.socials.github}`,
    `- LinkedIn: ${profile.socials.linkedin}`,
    `- Medium: ${profile.socials.medium}`,
    `- YouTube: ${profile.socials.youtube}`,
    `- Email: ${profile.socials.email}`,
    '',
    `Source: ${SITE}/about/`,
    '',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
