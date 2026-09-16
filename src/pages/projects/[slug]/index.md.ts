import type { CollectionEntry } from 'astro:content'
import { getCollection } from 'astro:content'
import type { APIRoute, GetStaticPaths } from 'astro'

interface Props {
  project: CollectionEntry<'projects'>
}

export const getStaticPaths = (async () => {
  const projects = await getCollection('projects')
  return projects.map((project) => ({ params: { slug: project.id }, props: { project } }))
}) satisfies GetStaticPaths

export const GET: APIRoute<Props> = async ({ props }) => {
  const { project } = props
  const { title, description, tags, url, repo, demo, date } = project.data

  const quote = (value: string) => value.replace(/"/g, '\\"')
  const lines = [
    '---',
    `title: "${quote(title)}"`,
    `description: "${quote(description)}"`,
    `tags: [${tags.join(', ')}]`,
    `date: ${date.toISOString().slice(0, 10)}`,
    `canonical: ${new URL(`/projects/${project.id}/`, 'https://muyo.dev')}`,
  ]
  if (url) lines.push(`url: "${url}"`)
  if (repo) lines.push(`repo: "${repo}"`)
  if (demo) lines.push(`demo: "${demo}"`)
  lines.push('---', '')

  return new Response(`${lines.join('\n')}${project.body}\n`, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
