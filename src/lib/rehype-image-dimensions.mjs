// @ts-check
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { defineHastPlugin } from 'satteri'
import { imageSize } from 'image-size'

const CACHE_FILE = 'node_modules/.cache/astro-img-dimensions.json'

/** @type {Record<string, {width: number, height: number}>} */
let cache = {}

async function loadCache() {
  try {
    cache = JSON.parse(await readFile(CACHE_FILE, 'utf8'))
  } catch {
    cache = {}
  }
  return cache
}

async function persistCache() {
  await mkdir('node_modules/.cache', { recursive: true })
  await writeFile(CACHE_FILE, JSON.stringify(cache, null, 2))
}

/**
 * @param {string} src
 * @returns {Promise<{width: number, height: number} | undefined>}
 */
async function dimensionsFor(src) {
  const cached = await loadCache()
  if (cached[src]) return cached[src]

  /** @type {{width: number, height: number} | undefined} */
  let dims
  if (src.startsWith('/')) {
    const buf = await readFile(new URL(`../public${src}`, import.meta.url))
    dims = imageSize(buf)
  } else if (/^https?:\/\//.test(src)) {
    const res = await fetch(src)
    if (!res.ok) throw new Error(`Failed to fetch ${src}: ${res.status}`)
    dims = imageSize(Buffer.from(await res.arrayBuffer()))
  }
  if (dims?.width && dims?.height) {
    cached[src] = { width: dims.width, height: dims.height }
    await persistCache()
  }
  return dims
}

/**
 * Stamps width/height on images that lack them so the browser reserves
 * space before load (no layout shift). Runs before Sätteri's image-marker
 * plugin, so known dimensions flow into astro:assets without a
 * build-time `inferSize` fetch.
 */
export default defineHastPlugin({
  name: 'image-dimensions',
  element: {
    filter: ['img'],
    async visit(node, ctx) {
      const props = node.properties
      const src = typeof props?.src === 'string' ? props.src : undefined
      if (!src) return
      try {
        const dims = await dimensionsFor(src)
        if (dims) {
          ctx.setProperty(node, 'width', dims.width)
          ctx.setProperty(node, 'height', dims.height)
        }
      } catch (err) {
        console.warn(`[image-dimensions] ${src}: ${/** @type {Error} */ (err).message}`)
      }
    },
  },
})
