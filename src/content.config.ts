import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    role: z.string().optional(),
    url: z.url().optional(),
    repo: z.url().optional(),
    demo: z.url().optional(),
    image: z.url().optional(),
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
    url: z.url(),
    tags: z.array(z.string()).default([]),
  }),
})

export const collections = { projects, writing }
