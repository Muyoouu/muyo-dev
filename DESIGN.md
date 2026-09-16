# DESIGN.md — muyo-dev-web (muyo.dev)

Recorded from the built world — ground truth, not intention: `src/layouts/BaseLayout.astro`, `src/pages/` (index, portfolio, about, blog, 404, `projects/[slug]`, `blog/[slug]`), `src/components/{Header,Footer,SpecCard}.astro`, `src/islands/ThemeToggle.tsx`, `src/styles/global.css`, `src/data/profile.ts`, `src/content/{projects,writing}/`. Review captures in `.impeccable/review/` are review evidence only — none of them ship (see Provenance).

> Superseded: any prior DESIGN.md describing the "Civic Bureau Prospectus" world (bone `#f7f7fa`, violet `#6b5ce7`, Archivo, `Ribbon.astro`) documented a rejected build that no longer exists in the code. Do not follow it. The old header typo ("musyo-dev-web") is corrected; the codebase contains no occurrence of it.

## Identity

- **Direction:** Component Datasheet — seed `a529239b`, assigned direction, code-led build. The contract comment lives verbatim in `BaseLayout.astro`'s body.
- **Thesis:** The portfolio printed as the datasheet for a human component: part number, features, absolute maximum ratings, pinout, application notes. It refuses the centered-hero-plus-card dev-portfolio default and every warm cream ground; the light sheet is crisp white.
- **Story told in seconds:** "I used to check the numbers. / Now I build the systems that move them." — home hero, first line ink, second line red (`src/pages/index.astro`). A hiring manager reads the ratings table and the application cards and gets it: ex-PwC auditor, now builds the data systems finance runs on.
- **Site:** Musa Yohanes, software developer in Jakarta, ex-PwC auditor (`src/data/profile.ts`, Person JSON-LD in `BaseLayout.astro`).

## Personality

Restrained late-modern engineering register. The page is a drawing sheet: sticky title-block header, 2px drawing frames, 1px table rules, mono uppercase labels, section indices 00–04 in red mono. Wit is confined to the copy voice (casual first-person) and the 404's four-cell error title block ("Cause: Sheet not found", "Severity: Cosmetic"). No decoration exists that isn't a rule, a cell, or a filled control.

## Palette

One signal-red voice on white stock. No cream, no bone, no gradient anywhere in the shipped code.

### Light (default, `data-theme="light"` — global.css `@theme`)

| Token | Hex | Role |
|---|---|---|
| `--color-background` | `#ffffff` | White stock |
| `--color-foreground` / `--color-primary` | `#14171c` | Cool ink |
| `--color-secondary` / `--color-muted-foreground` | `#545e6b` | Secondary deck |
| `--color-muted` | `#f2f4f7` | Table shade / header cell fill |
| `--color-card` | `#ffffff` | Card surface |
| `--color-border` | `#cdd3db` | 1px table rules / hairlines |
| `--color-accent` | `#c8102e` | Signal red — text, links, figures, indices, focus ring |
| `--color-accent-deep` | `#9d0c24` | Link hover on red text |
| `--color-accent-fill` | `#c8102e` | Filled control surface, white text |
| `--color-accent-fill-hover` | `#9d0c24` | Filled control hover |
| `--color-destructive` | `#b3261e` | (tokened; unused in pages) |
| `--color-ring` | `#c8102e` | Focus ring |

### Dark ("night bench", `[data-theme="dark"]`)

| Token | Hex | Role |
|---|---|---|
| background | `#0f1418` | Night bench ground |
| foreground / primary | `#e7ebee` | |
| secondary / muted-foreground | `#a3adb8` | |
| muted | `#1b232b` | Table shade |
| card | `#151b21` | Card surface |
| border | `#2b333c` | Rules |
| accent | `#ff5964` | Brightened for text/links on the dark ground |
| accent-deep | `#ff7a83` | |
| accent-fill | `#c8102e` — unchanged | Filled controls keep signal red + white text in both themes (white on `#c8102e` ≈ 5.9:1) |
| accent-fill-hover | `#e02840` | |
| destructive | `#ff5964` | |
| ring | `#ff5964` | |

`::selection` = `accent-fill` background, white text (both themes). Scrollbar track = muted, thumb = border, hovers to accent. `theme-color` meta: `#0f1418` dark / `#ffffff` light.

## Typography

- **Families:** Barlow 400/500/600/700 plus 400 italic (`@fontsource/barlow`) for all sans text; JetBrains Mono Variable (`@fontsource-variable/jetbrains-mono`) for part numbers, dates, figures, uppercase labels. No other faces.
- **`hero-display` utility:** `clamp(2.5rem, 5.5vw, 4.75rem)` / 1.02 / −0.015em / **weight 600** / `text-wrap: balance`. Home hero and 404 only.
- **`mono-label` utility:** JetBrains Mono, 11px (0.6875rem), weight 500, `letter-spacing: 0.12em`, uppercase. The sheet's label voice — nav cells, buttons, card bars, table heads, section side-links, tags, footer links all use it.
- **`section-head` utility:** flex row, `border-top: 2px solid var(--color-foreground)`, 1rem padding-top; red mono index (e.g. `01`) + H2 (`text-2xl md:text-3xl`, weight 600, tracking-tight) + right-aligned `mono-label` link. Interior H1s use the same row at `text-3xl md:text-4xl`. Section numbering 00–04 is the sheet's wayfinding.
- **Body:** 18px (`text-lg`) for statements and section intros; 15px for card descriptions and list decks; metadata 12px mono `tabular-nums` for every date/period.
- **Prose** (`@tailwindcss/typography`, project/article pages): headings weight 600 tracking-tight ink; body secondary; links red, no underline → underline on hover; code on `bg-muted` chip; blockquote left border **2px red**, weight 400 italic ink, with its inner `p` forced to `inherit` (a `prose-p:` rule otherwise wins) and the plugin's generated `open-quote` / `close-quote` pseudo-elements suppressed, since the markdown carries its own punctuation; images and pre blocks `border-2 border-foreground`.
- **Code blocks** (`src/lib/code-theme.mjs`, `global.css`): the panel surface is `--color-muted`, not the theme's own background, so it reads as a shaded cell on the white sheet instead of matching the page. Light mode uses a local shiki theme built from the sheet's ink, secondary, accent and accent-deep, plus two hues the sheet does not otherwise carry (blue `#1f5fa8` for strings, purple `#6b3fa0` for functions and types); dark mode uses `github-dark-default`. Every colour clears WCAG AA on its surface, which no bundled light theme manages: highlighted across all 68 fenced blocks, `github-light` puts one token at 3.49:1 and `github-dark` puts one at 3.05:1. `defaultColor: false` keeps the colours in CSS variables. `wrap` is off, so long lines scroll inside the block rather than reflowing, and the `pre` keeps `tabindex="0"` so the scroller stays keyboard reachable. A `@media print` rule pins the light palette, a white fill and an ink border whatever theme is active on screen; forced-colors needs no rule, because the `pre` border survives a forced palette on its own.
- Numbers (dates, periods, ratings) are always `tabular-nums` — most sit in JetBrains Mono.

## Spacing & Layout

- **Container:** `max-w-[1240px]`, `px-6` gutters, centered. Never wider.
- **Header** (`Header.astro`): sticky, `top-0 z-50`, `border-b-2 border-foreground`, opaque `bg-background` (no blur). Inner bar `h-16`: name block left ("Musa Yohanes" uppercase semibold + "Part No. MY‑JKT‑01" mono-label beneath), nav cells center-right (1px `border-l`/`border-r` divided, `px-5`, mono-label, red index `01/02/03` at 60% opacity), ThemeToggle + filled EMAIL cell right. Mobile: hamburger (`border` button) opens a `divide-y` panel; Escape closes; link click closes; `aria-expanded` maintained; Email moves into the panel.
- **Body:** flex column `min-height: 100vh`; main is `flex-1`; footer in flow.
- **Drawing frames:** `border-2 border-foreground` sheets — home cover, project datasheet header, 404 block. Title-block rows inside frames are 2/4-col grids with 1px internal rules and responsive border surgery via `max-md:[&:nth-child(...)]:` utilities.
- **Section rhythm:** `py-16 md:py-20` (Operator: `py-20 md:py-24`); full-bleed `border-y-2` / `border-t-2 border-foreground` bands separate major sections. Depth comes from 2px frames + 1px rules, never shadow.
- **Grids:** home Applications 3-up (`md:grid-cols-3`, gap-6); portfolio Catalog 2-up; home Record 2-col; About 2:1 with sidebar.
- **Ruled lists:** `divide-y divide-border border-y border-border` — publications, experience, education, certifications, and the writing index all share this construction. Whole row is the link; title turns red on hover.

## Components

- **SpecCard** (`SpecCard.astro`) — the package-flip card, the signature component. Outer `.package` gives `perspective: 1400px`. Front face: `border-2 border-foreground bg-card`, a muted spec bar (`Component` mono-label left, mono date right), title link (red on group hover), 15px description, mono-label bordered tags. Rear face: `absolute inset-0`, `rotateY(180deg)`, `border-2 border-accent`, red SPEC bar with white mono text, `divide-y` dl (ROLE text-right; STACK as right-justified `flex-wrap` mono spans separated by `·`), footer with filled "Full datasheet" + up to two hairline links (Source/Demo/Article). See Motion for gating.
- **Buttons:** two shapes only, both `mono-label`. Filled — `bg-accent-fill`, white text, hover `accent-fill-hover` (EMAIL cell, SEE THE WORK, Email me, Full datasheet, Back to the cover). Hairline — `border-2 border-foreground`, ink text, hover swaps border/text to red (Read my writing, LinkedIn, GitHub, See the work, rear-face links use 1px `border-border`). All `transition-colors duration-200`.
- **Tags:** mono-label, 1px `border-border`, `px-2 py-1`, 10px, secondary. No fill.
- **Ratings table** (home): full `border-collapse`, 1px `border-border` row rules, mono-label header row, mono red right-aligned ratings. Six entries — `3` years finance work, PwC assurance `Done`, `1` SaaS product shipped, `3.5M` bike trips analyzed, `1` OAuth2 flow from scratch, `60 days` token cache validity — each traceable to the record (profile.ts, project content). Footnote binds it: "* Every rating above is on the record. No fabrication, no rounding up."
- **Title-block rows:** TITLE / DRAWN BY / LOCATION / REV cells (home cover; REV `2026·A` in mono red, bumped by hand when the sheet itself changes rather than by the calendar (the footer carries the live year)). 404 reuses the row as ERROR / CAUSE / RECOVERY / SEVERITY. Project pages use ROLE / DATE / PRIMARY / LINKS.
- **Article end matter** (`src/components/EndMatter.astro`, used by `blog/[slug]/index.astro` and `projects/[slug]/index.astro`): the block above the footer, opened by a `border-t-2 border-foreground` rule. Tier 1 is `<nav aria-label>`, `flex-col` stacked under `md` and `flex-row` above, with `divide-y` / `md:divide-x md:divide-y-0` rules between the cells. Each neighbour is one whole-cell link (`min-w-0 flex-1 py-6`) carrying a `mono-label` direction word, the title in `text-lg font-medium tracking-tight` that turns red on hover, and the mono `tabular-nums` date. The first neighbour sits left; the second right-aligns (`md:pl-8 md:text-right`) only when both exist. A missing neighbour renders nothing and the lone cell spans the row; there is no disabled or placeholder cell. Tier 2 is a `border-t border-border` row holding a `mono-label` back link at `min-h-11` (44px tap target) plus an `extra` slot: blog posts fill it with "Continue on Medium" in accent, project pages leave it empty. Links carry `rel="prev"` / `rel="next"`; the block is static HTML, no island, no reveal.
- **End-matter direction words:** the blog says **Older / Newer** because the writing index sorts newest first, so list position and time position disagree, and naming recency removes the ambiguity. Project pages say **Previous / Next** because the catalogue follows the curated `order` field, which is not chronological (order 3 is dated later than order 4), so recency words would be wrong there. The back links reuse the destination pages' own headings: "Application notes" for `/blog`, "Catalog" for `/portfolio`. The header nav names those same routes "Writing" and "Work", so the two vocabularies coexist on purpose.
- **Footer** (`Footer.astro`): `border-t-2 border-foreground`; name uppercase + mono line "© year · Jakarta, Indonesia · Doc No. MY-WEB-01 · Status: live" left; five mono-label links (GitHub, LinkedIn, Medium, YouTube, Email) right, secondary → red hover, external `noopener noreferrer`.
- **ThemeToggle** (`ThemeToggle.tsx`, SolidJS island, `client:load`): 36×36 (`h-9 w-9`) `rounded-none` bordered button, 18px stroke sun/moon icon, `aria-label` + `aria-pressed`, persists `localStorage["muyo-theme"]`. Hover: border + icon red. Inline head script applies stored theme before paint (no flash); default light.
- **Reveal system** (`BaseLayout.astro`): `[data-reveal]` targets, IntersectionObserver threshold 0.12, unobserve after fire, gated behind `html.js-reveal` (added by the inline head script only when reduced-motion is absent). `data-reveal="flip"` variant on featured SpecCards.

## Motion

- **Package flip:** 0.55s `var(--ease-sheet)` rotateY(180°) on `.package-inner`. Hover gated `(hover: hover) and (prefers-reduced-motion: no-preference)`; focus-within gated `(prefers-reduced-motion: no-preference)` alone. Under `(prefers-reduced-motion: reduce)` the rear face is `display: none` (so no invisible focus targets remain), the transition is killed, and the front face — which always carries title, description, tags, date, and the detail link — is the whole card.
- **Reveal-on-scroll:** 20px rise / 0.7s / `cubic-bezier(0.165, 0.84, 0.44, 1)` (opacity 0.001 → 1); `data-reveal="flip"` variant adds `perspective(1200px) rotateX(-8deg)` with `transform-origin: center top`. Gated behind `html.js-reveal`; a reduced-motion media query force-sets opacity 1 / transform none / no transition; the head script never adds the class under reduced motion, and the BaseLayout script reveals everything immediately if IO is missing.
- **Micro-transitions:** color transitions 200ms everywhere (links, buttons, toggle, icons). No other durations, no keyframe animations, no page transitions.
- **Smooth scroll:** `html { scroll-behavior: smooth }`; under reduced motion it becomes `auto` plus a global `0.01ms` animation/transition kill.
- **Reduced motion:** flip → static card (rear hidden), reveals disabled at both gates, scroll-behavior auto, global kill switch. Nothing animated survives reduce except nothing — the page is fully still.

## States

- **Hover:** text links / mono-labels → red (red links deepen via `accent-deep` on detail pages); filled buttons → `#9d0c24` light / `#e02840` dark; hairline buttons → red border/text; card titles → red; nav inactive cells → `bg-muted` + ink; scrollbar thumb → red.
- **Active nav:** `bg-muted text-accent` cell + `aria-current="page"`; inactive secondary. Mobile: red text only.
- **Focus:** `:focus-visible` = 2px `--color-ring` outline, 2px offset, globally.
- **No-JS:** mobile menu won't open; reveal gating never applies (content fully visible — `js-reveal` is JS-added); theme stays server-default light. No-JS never hides content.
- **Empty/minimal:** 404 is a four-cell error title block (ERROR `404` mono red / CAUSE "Sheet not found" / RECOVERY "Use the links below" / SEVERITY "Cosmetic") above hero-display "This sheet doesn't exist." and the filled "Back to the cover" + hairline "See the work" pair — the only page besides home with that CTA pair. Both collection indexes carry an empty state: with nothing published, `/portfolio` drops the flip hint and shows "No case studies published yet." on a ruled line, and `/blog` shows "No posts published yet." as the single row inside its ruled list.

## Themes

Two themes, light default, both first-class; toggle persisted (`muyo-theme`), pre-paint inline script prevents flash, `color-scheme` follows `data-theme`. Dark is a true inverse (night bench): every surface token flips. The one asymmetry: `--color-accent` brightens `#c8102e → #ff5964` for text/links/figures on the dark ground, while `--color-accent-fill` stays `#c8102e` so filled controls keep signal red + white text (≈5.9:1) in both themes; its hover brightens to `#e02840`. No gradient exists in either theme.

## Copy voice

Casual first-person throughout, authored pages only: "I used to check the numbers. Now I build the systems that move them." / "I wrote the whole OAuth2 flow myself, including the part where Internet Explorer used to live." / "No fabrication, no rounding up." / "The habit that came with me is the audit trail: I want to know where a number came from before I trust it." The origin story (ex-PwC auditor, accounting lecturer, now data platforms for treasury teams) is stated in a page's opening paragraph; the head metadata and the llms files carry shorter forms of the same facts, worded per surface. The company/product reads as a treasury data platform everywhere (deck, profile.ts, JSON-LD, llms.txt); project frontmatter descriptions are rewritten in the same voice (e.g. treasury-data-platform, xero-excel-integration, cyclistic-data-analysis). The contact section offers help, not a job pitch. Exempt from the no-em-dash rule as user-authored: the writing collection, `src/data/profile.ts` fields, and certification names (which keep their em dashes — "CS50 — Introduction to Computer Science").

## Anti-patterns to avoid

- **No warm grounds.** Light is `#ffffff` stock, dark is `#0f1418`. No cream, no bone, no tinted paper.
- **No second accent, no gradient.** Signal red is the single voice; secondary and hairlines do the rest. No gradient text, fills, or backgrounds anywhere.
- **Radius zero.** No rounded corners on anything — cards, buttons, chips, toggle, images, code. Depth is carried by 2px drawing frames and 1px table rules.
- **No soft shadows.** No `box-shadow` elevation anywhere; rules only.
- **No faces besides Barlow and JetBrains Mono.** Mono is for part numbers, dates, figures, uppercase labels — not body prose.
- **Don't fill controls with `--color-accent` on dark.** Text/links/figures use brightened `#ff5964`; filled surfaces use `#c8102e` + white text.
- **Don't animate ungated.** The flip is media-query gated; reveals are double-gated (`js-reveal` + reduced-motion); under reduce the rear face is display:none, not merely unflipped.
- **Don't fabricate ratings or metrics.** Ratings-table entries must trace to the record (profile.ts, project content); the footnote is a binding promise, not a joke.
- **Don't break the title-block constructions** — title-block rows, `section-head` indices 00–04, and the ruled-list pattern are the layout signature. The article end matter follows the same ruled logic: a 2px opener, cells inside it, 1px rules between them.
- **Don't ship generated or stock rasters.** See Provenance.
- **Don't let the code surface match the page.** Code panels fill with `--color-muted`; a white panel on white stock reads as boxed text, not a panel.

## Provenance

The only shipping rasters are `public/images/projects/ar-dashboard.webp` and `public/images/projects/xero-integration.webp` — both pre-existing, user-supplied screenshots rendered on project detail pages (referenced from `excel-ar-dashboard.md` and `xero-excel-integration.md` frontmatter, drawn with `border-2 border-foreground`). The favicon set (`favicon.svg`, `favicon.ico`, `apple-touch-icon.png`) is the site mark: signal-red `#c8102e` square, radius zero, white "M" stroke, restyled from the old Catppuccin blue; the PNG/ICO are rendered from the SVG. No generated or stock rasters ship beyond the icon set. All screenshots under `.impeccable/review/` are review evidence, not shipping assets. Everything else visual is CSS rules, type, and inline SVG icons (hamburger, sun/moon).

## Dials

Surface: **Experience** (personal portfolio; conversion target = flip a package, read the record, or make contact).
ENERGY 2 / RHYTHM 3 / MOTION 1 — restrained late-modern engineering register.

- **ENERGY 2** — one signal-red voice on white stock, weight-600 headings and mono labels; the energy lives in the red accents and the copy voice, not in decoration.
- **RHYTHM 3** — strict ruled construction everywhere: 2px frames, 1px table rules, title-block grids, `section-head` indices 00–04, tabular mono figures; the page reads as ruled datasheet columns, tightly metered.
- **MOTION 1** — exactly two moving systems (the 0.55s package flip; the gated 20px reveal), both reduced-motion-gated, plus 200ms color transitions; under reduce the page is perfectly still with zero hidden focus targets.
