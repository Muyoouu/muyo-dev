import { createHash } from 'node:crypto'
import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const WRITING_DIR = 'src/content/writing'
const MANIFEST_PATH = 'scripts/frozen-bodies.json'

const bodyOf = (source) => {
  const lines = source.replace(/\r\n?/g, '\n').split('\n')
  if (lines[0] !== '---') return lines.join('\n')
  const close = lines.indexOf('---', 1)
  if (close === -1) return lines.join('\n')
  return lines.slice(close + 1).join('\n')
}

const normalise = (body) =>
  body
    .split('\n')
    .map((line) => line.replace(/[ \t]+$/, ''))
    .join('\n')
    .replace(/\n*$/, '\n')

const hashBody = (source) =>
  createHash('sha256').update(normalise(bodyOf(source))).digest('hex')

const postNames = readdirSync(WRITING_DIR)
  .filter((name) => name.endsWith('.md'))
  .sort()

const currentHashes = () =>
  Object.fromEntries(
    postNames.map((name) => [name, hashBody(readFileSync(join(WRITING_DIR, name), 'utf8'))]),
  )

if (process.argv.includes('--update')) {
  writeFileSync(MANIFEST_PATH, `${JSON.stringify(currentHashes(), null, 2)}\n`)
  console.log(`Wrote ${postNames.length} frozen article bodies to ${MANIFEST_PATH}.`)
  process.exit(0)
}

const readManifest = () => {
  try {
    return JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'))
  } catch {
    console.error(
      `Could not read ${MANIFEST_PATH}. Generate it with: pnpm check:frozen --update`,
    )
    process.exit(1)
  }
}

const manifest = readManifest()
const hashes = currentHashes()
const problems = []

for (const name of postNames) {
  const expected = manifest[name]
  if (expected === undefined) {
    problems.push(`  ${name}: not tracked in ${MANIFEST_PATH}`)
  } else if (expected !== hashes[name]) {
    problems.push(`  ${name}: body has changed since it was frozen`)
  }
}

for (const name of Object.keys(manifest)) {
  if (!postNames.includes(name)) {
    problems.push(`  ${name}: tracked in ${MANIFEST_PATH} but no longer present`)
  }
}

if (problems.length > 0) {
  console.error(`Frozen article body check failed.\n\n${problems.join('\n')}\n`)
  console.error(
    'These bodies are frozen because they mirror the versions published on Medium,',
  )
  console.error('so any edit makes this site drift from the published copy.')
  console.error('Frontmatter (title, description, tags, url, pubDate) is still editable.')
  console.error('\nIf a post was legitimately republished, regenerate the manifest:')
  console.error('  pnpm check:frozen --update')
  process.exit(1)
}

console.log(`${postNames.length} frozen article bodies match the manifest.`)
