import type { CollectionEntry } from 'astro:content'

export type Project = CollectionEntry<'projects'>

/**
 * Catalogue order, the sequence the portfolio grid, home page, and llms files
 * publish. It is curated rather than chronological, so project neighbours are
 * previous and next in this order, not older and newer.
 */
export const sortProjectsByOrder = (projects: Project[]): Project[] =>
  [...projects].sort((a, b) => a.data.order - b.data.order)

export interface ProjectNeighbors {
  previous: Project | undefined
  next: Project | undefined
}

export const getProjectNeighbors = (projects: Project[], id: string): ProjectNeighbors => {
  const sorted = sortProjectsByOrder(projects)
  const index = sorted.findIndex((project) => project.id === id)

  return {
    previous: index > 0 ? sorted[index - 1] : undefined,
    next: index >= 0 && index < sorted.length - 1 ? sorted[index + 1] : undefined,
  }
}
