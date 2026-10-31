import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'
import { sortProjectsByOrder } from '../../lib/projects'

const SITE = 'https://muyo.dev'

export async function GET(_context: APIContext) {
  const projects = sortProjectsByOrder(await getCollection('projects'))

  const lines = [
    '# Portfolio',
    '',
    '> Case studies by Musa Yohanes across B2B data platforms, finance automation, and data analysis.',
    '',
    ...projects.flatMap((project) => [
      `## ${project.data.title}`,
      '',
      `- Role: ${project.data.role ?? 'Developer'}`,
      `- Date: ${project.data.date.toISOString().slice(0, 10)}`,
      `- Tags: ${project.data.tags.join(', ')}`,
      ...(project.data.repo ? [`- Repository: ${project.data.repo}`] : []),
      ...(project.data.demo ? [`- Demo: ${project.data.demo}`] : []),
      ...(project.data.url ? [`- Related article: ${project.data.url}`] : []),
      `- Markdown: ${SITE}/projects/${project.id}/index.md`,
      `- HTML: ${SITE}/projects/${project.id}/`,
      '',
      project.data.description,
      '',
    ]),
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
