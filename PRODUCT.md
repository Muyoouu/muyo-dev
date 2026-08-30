# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 (static) + SolidJS islands + Tailwind CSS 4, self-hosted Inter Variable, deployed to Cloudflare (Wrangler). Biome for lint/format.

## Users

- Primary: hiring managers and recruiters screening Musa for software developer roles.
- Secondary: freelance/consulting clients seeking automation or data work.
- Tertiary: peers and community (developers, data folks) who arrive via shared links and read the writing.

## Product Purpose

A personal portfolio that proves Musa Yohanes is a credible, thoughtful software developer with an unusual background: former PwC financial auditor and accounting lecturer who now builds workflow-automation SaaS. Success is a visitor reading his writing or contacting him (email/LinkedIn). Project case studies exist but are dated; writing and contact are the near-term conversion paths. Cloudflare analytics may be added later to observe which path converts.

## Positioning

He has sat on both sides of the systems he builds: he audited the financial workflows at PwC that his software now automates. Few developers can evaluate finance-domain software as both its user and its builder. The site must make this dual fluency (accounting rigor × software craft) legible without gimmicks.

## Operating Context

- Job-hunt sharing: links sent in applications, DMs, and peer chats; often first viewed on a phone.
- Solo maintainer: Musa edits content (Markdown collections) and ships himself; the design must survive content-only updates.
- Deployed on Cloudflare Pages/Workers; static output, no server runtime beyond workers config.

## Capabilities and Constraints

- Content collections: `projects` (7 case studies, some outdated, do not fabricate freshness), `writing` (6 posts, real, also mirrored on Medium).
- Real profile data single-sourced in `src/data/profile.ts` (experience, certifications, education, socials).
- Real socials only: GitHub, LinkedIn, Medium, YouTube (@DataDrivenDuck), email.
- No testimonials, no usage statistics, no client logos exist. The site must not invent them.
- Dark-first theming with a working light toggle is an existing commitment (localStorage `muyo-theme`, no-FOUC inline script).
- Static export; interactive behavior limited to small islands.

## Brand Commitments

- Personality direction from the owner: simple, pleasing, pastel, minimalist, but "too ordinary, no personality" today. He asked for surprise and personality within that calm base.
- Visual world decisions live in DESIGN.md / new-work, not here. The old design-system/ directory (Swiss Minimal × Catppuccin) was removed with the datasheet redesign.
- Name to keep: Musa Yohanes. Existing favicon/OG assets in `public/`.

## Evidence on Hand

- Verifiable career facts in `src/data/profile.ts` (PwC Assurance 2021-2022, Automation Boutique Oct 2024-present, lecturer role, Upwork).
- Certifications: CS50, Google Data Analytics, QuickBooks ProAdvisor, Tableau design, C2 English.
- 6 real writing pieces in `src/content/writing/` + Medium profile.
- 7 real project case studies in `src/content/projects/` with some real screenshots in `public/images/projects/`.
- Absences future work must not fabricate: testimonials, client logos, traffic/user numbers, revenue claims.

## Product Principles

1. Evidence over adjectives: every claim traceable to profile data or content collections.
2. The auditor-developer duality is the story; hierarchy and copy should surface it, not bury it under skill-tag soup.
3. Writing is a first-class surface, not a footer afterthought.
4. Calm base, specific personality: minimalism earns character through detail, not decoration.
5. Survives content-only edits: layout must tolerate one post or ten, three projects or seven.

## Accessibility & Inclusion

- WCAG AA contrast in both themes (4.5:1 normal text, 3:1 large text).
- Full keyboard operability with visible focus.
- `prefers-reduced-motion` respected.
- Mobile (375px) is a primary viewing context, not an afterthought.
