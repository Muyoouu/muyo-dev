import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { sortPostsDesc } from '../lib/writing'

export async function GET(context: APIContext) {
  const posts = sortPostsDesc(await getCollection('writing'))

  return rss({
    title: 'Musa Yohanes — Writing',
    description:
      'Articles by Musa Yohanes on software development, data analysis, finance automation, and career change.',
    site: context.site ?? 'https://muyo.dev',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: '<language>en-us</language>',
  })
}
