# muyo.dev

Personal portfolio of [Musa Yohanes](https://github.com/Muyoouu), software developer and former financial auditor. Live at [https://muyo.dev](https://muyo.dev).

## Stack

- [Astro](https://astro.build) 7, static output
- SolidJS islands (theme toggle)
- Tailwind CSS 4
- Biome for lint and formatting
- pnpm as package manager

## Development

Requires Node >= 22.12 and pnpm (version pinned in `packageManager` in `package.json`).

```sh
pnpm install
pnpm dev
```

| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `pnpm dev`         | Start dev server at `localhost:4321`         |
| `pnpm build`       | Build the production site to `./dist/`       |
| `pnpm preview`     | Preview the production build locally         |
| `pnpm lint`        | Check code with Biome                        |
| `pnpm lint:fix`    | Fix lint and formatting issues               |
| `pnpm check`       | Run `astro check`                            |
| `pnpm check:ts`    | Type-check with tsgo                         |
| `pnpm deploy`      | Build and deploy to Cloudflare with Wrangler |

## Content

- Blog posts: `src/content/writing/` (Markdown collection)
- Project case studies: `src/content/projects/` (Markdown collection)
- Profile data (experience, skills, socials, certifications): single-sourced in `src/data/profile.ts`

## Deployment

Static assets deploy to Cloudflare Workers via [Cloudflare Workers Builds](https://developers.cloudflare.com/workers/ci-workers/), configured in `wrangler.jsonc`. Pushes to `main` trigger the build and deploy on Cloudflare's side; CI in this repo only lints, type-checks, and builds.

## Notes

- `public/images/projects/xero-integration.webp` shows the Xero product UI. It is a screenshot of my own integration, included as project documentation. Xero and its logo belong to Xero Ltd.
- The code is licensed under the [MIT license](LICENSE). Blog posts and case studies under `src/content/` are personal content and not covered by the code license.
