import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'
import { profile } from '../data/profile'
import { sortProjectsByOrder } from '../lib/projects'
import { sortPostsDesc } from '../lib/writing'

const SITE = 'https://muyo.dev'

export async function GET(_context: APIContext) {
  const posts = sortPostsDesc(await getCollection('writing')).slice(0, 5)
  const projects = sortProjectsByOrder(
    (await getCollection('projects')).filter((project) => project.data.featured),
  ).slice(0, 3)

  const lines = [
    `# ${profile.name}`,
    '',
    `> ${profile.summary}`,
    '',
    `- Role: ${profile.role}`,
    `- Location: ${profile.location}`,
    `- Email: ${profile.socials.email}`,
    `- GitHub: ${profile.socials.github}`,
    `- LinkedIn: ${profile.socials.linkedin}`,
    '',
    '## Pages',
    '',
    `- [About](${SITE}/about/index.md): Career story from PwC audit and accounting lecturing to software development`,
    `- [Writing](${SITE}/blog/index.md): Articles on data analysis, automation, and the move from finance into software`,
    `- [Portfolio](${SITE}/portfolio/index.md): Case studies across B2B data platforms, finance automation, and data analysis`,
    '',
    '## Featured projects',
    '',
    ...projects.map(
      (project) =>
        `- [${project.data.title}](${SITE}/projects/${project.id}/index.md): ${project.data.description}`,
    ),
    '',
    '## Latest writing',
    '',
    ...posts.map(
      (post) =>
        `- [${post.data.title}](${SITE}/blog/${post.id}/index.md): ${post.data.description}`,
    ),
    '',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
