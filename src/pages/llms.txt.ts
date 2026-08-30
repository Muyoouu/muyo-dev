import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'

const SITE = 'https://muyo.dev'

export async function GET(_context: APIContext) {
  const posts = (await getCollection('writing')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  )
  const projects = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order)

  const lines = [
    '# Musa Yohanes',
    '',
    '> Software developer in Jakarta. Builds data platforms for treasury teams at a SaaS company. Former financial auditor at PwC and accounting lecturer. This portfolio covers his projects, writing, and experience at the intersection of software and finance.',
    '',
    'The site is static, fast, and serves clean markdown twins of every page: append `index.md` to any blog or project URL, or read llms-full.txt for all content at once.',
    '',
    '## Pages',
    '',
    `- [Home](${SITE}/): Overview, featured projects, and work experience`,
    `- [About](${SITE}/about/): Career story from PwC audit and accounting lecturing to software development`,
    `- [Writing](${SITE}/blog/): Articles on data analysis, automation, and engineering`,
    `- [Portfolio](${SITE}/projects/): Selected projects across SaaS, data pipelines, and finance systems`,
    '',
    '## Blog',
    '',
    ...posts.map(
      (post) => `- [${post.data.title}](${SITE}/blog/${post.id}/): ${post.data.description}`,
    ),
    '',
    '## Projects',
    '',
    ...projects.map(
      (project) =>
        `- [${project.data.title}](${SITE}/projects/${project.id}/): ${project.data.description}`,
    ),
    '',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
