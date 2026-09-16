import type { CollectionEntry } from 'astro:content'

export type WritingPost = CollectionEntry<'writing'>

/** Newest first: the order the home page, writing index, feeds, and llms files all publish. */
export const sortPostsDesc = (posts: WritingPost[]): WritingPost[] =>
  [...posts].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())

export interface PostNeighbors {
  newer: WritingPost | undefined
  older: WritingPost | undefined
}

/**
 * Adjacent posts in the published order, derived from the same comparator as
 * the listing so article end matter can never point at a different sequence.
 */
export const getPostNeighbors = (posts: WritingPost[], id: string): PostNeighbors => {
  const sorted = sortPostsDesc(posts)
  const index = sorted.findIndex((post) => post.id === id)

  return {
    newer: index > 0 ? sorted[index - 1] : undefined,
    older: index >= 0 && index < sorted.length - 1 ? sorted[index + 1] : undefined,
  }
}
