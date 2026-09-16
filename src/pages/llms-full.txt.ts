import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'
import { sortProjectsByOrder } from '../lib/projects'
import { sortPostsDesc } from '../lib/writing'

const SITE = 'https://muyo.dev'

export async function GET(_context: APIContext) {
  const posts = sortPostsDesc(await getCollection('writing'))
  const projects = sortProjectsByOrder(await getCollection('projects'))

  const blogSections = posts.map((post) =>
    [
      `## ${post.data.title}`,
      '',
      `- Source: ${SITE}/blog/${post.id}/`,
      `- Published: ${post.data.pubDate.toISOString().slice(0, 10)}`,
      `- Also on Medium: ${post.data.url}`,
      `- Tags: ${post.data.tags.join(', ')}`,
      '',
      post.body,
      '',
      '---',
      '',
    ].join('\n'),
  )

  const projectSections = projects.map((project) =>
    [
      `## ${project.data.title}`,
      '',
      `- Source: ${SITE}/projects/${project.id}/`,
      `- Tags: ${project.data.tags.join(', ')}`,
      ...(project.data.repo ? [`- Repository: ${project.data.repo}`] : []),
      ...(project.data.demo ? [`- Demo: ${project.data.demo}`] : []),
      ...(project.data.url ? [`- Related article: ${project.data.url}`] : []),
      '',
      project.body,
      '',
      '---',
      '',
    ].join('\n'),
  )

  const content = [
    '# Musa Yohanes · Full Content',
    '',
    '> Software developer in Jakarta. Builds data platforms for treasury teams at a SaaS company. Former financial auditor at PwC and accounting lecturer.',
    '',
    '# Blog Articles',
    '',
    ...blogSections,
    '# Projects',
    '',
    ...projectSections,
  ].join('\n')

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
