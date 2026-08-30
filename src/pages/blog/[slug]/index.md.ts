import type { CollectionEntry } from 'astro:content'
import { getCollection } from 'astro:content'
import type { APIRoute, GetStaticPaths } from 'astro'

interface Props {
  post: CollectionEntry<'writing'>
}

export const getStaticPaths = (async () => {
  const posts = await getCollection('writing')
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }))
}) satisfies GetStaticPaths

export const GET: APIRoute<Props> = async ({ props }) => {
  const { post } = props
  const { title, description, pubDate, url, tags } = post.data

  const frontmatter = [
    '---',
    `title: "${title.replace(/"/g, '\\"')}"`,
    `description: "${description.replace(/"/g, '\\"')}"`,
    `pubDate: ${pubDate.toISOString().slice(0, 10)}`,
    `url: "${url}"`,
    `tags: [${tags.join(', ')}]`,
    `canonical: ${new URL(`/blog/${post.id}/`, 'https://muyo.dev')}`,
    '---',
    '',
  ].join('\n')

  return new Response(`${frontmatter}${post.body}\n`, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
