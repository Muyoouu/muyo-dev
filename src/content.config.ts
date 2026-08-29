import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number(),
    date: z.coerce.date(),
  }),
})

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    url: z.string().url(),
  }),
})

export const collections = { projects, writing }
