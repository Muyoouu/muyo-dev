import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'
import { sortPostsDesc } from '../../lib/writing'

const SITE = 'https://muyo.dev'

export async function GET(_context: APIContext) {
  const posts = sortPostsDesc(await getCollection('writing'))

  const lines = [
    '# Writing',
    '',
    '> Articles by Musa Yohanes on data analysis, automation, and the move from finance into software.',
    '',
    ...posts.flatMap((post) => [
      `## ${post.data.title}`,
      '',
      `- Published: ${post.data.pubDate.toISOString().slice(0, 10)}`,
      `- Tags: ${post.data.tags.join(', ')}`,
      `- Markdown: ${SITE}/blog/${post.id}/index.md`,
      `- HTML: ${SITE}/blog/${post.id}/`,
      `- Medium: ${post.data.url}`,
      '',
      post.data.description,
      '',
    ]),
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
