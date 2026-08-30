# Musa Yohanes Portfolio — Design System (Master)

Source of truth. Page-specific overrides go in `pages/<page>.md` (none yet).

## Style

- **Name:** Swiss Minimal × Catppuccin (dark-first)
- **Keywords:** clean, grid-based, spacious, high contrast, soft pastel accents, eye-friendly dark
- **Reference palette:** [Catppuccin](https://github.com/catppuccin/catppuccin) — Mocha (dark, default) / Latte (light)
- **Mode:** dark-first; light available via toggle (`data-theme="light"`, persisted in `localStorage["muyo-theme"]`)
- **Accessibility:** contrast ≥ 4.5:1, visible focus (`--color-ring`), `prefers-reduced-motion` respected, radius 0

## Pattern

Hero (name/role/CTA) → Featured projects → Experience timeline → Contact CTA → Footer.
Secondary pages: Portfolio grid, Writing list (Medium links), About, 404.

## Tokens

CSS variables defined in `src/styles/global.css` (`@theme` = Mocha default, `[data-theme="light"]` = Latte).

| Role | Mocha (dark, default) | Latte (light) | Source |
|------|-------------|-------|--------|
| background | `#1e1e2e` base | `#eff1f5` base | catppuccin |
| foreground | `#cdd6f4` text | `#4c4f69` text | catppuccin |
| primary | `#cdd6f4` text | `#4c4f69` text | catppuccin |
| secondary | `#9399b2` overlay2 | `#8c8fa1` overlay0 | catppuccin |
| muted | `#313244` surface0 | `#ccd0da` surface0 | catppuccin |
| muted-foreground | `#a6adc8` subtext0 | `#6c6f85` subtext0 | catppuccin |
| border | `#45475a` surface1 | `#bcc0cc` surface1 | catppuccin |
| card | `#181825` mantle | `#e6e9ef` mantle | catppuccin |
| accent | `#89b4fa` blue | `#1e66f5` blue | catppuccin |
| destructive | `#f38ba8` red | `#d20f39` red | catppuccin |
| ring | `#b4befe` lavender | `#7287fd` lavender | catppuccin |

## Typography

- **Font:** Inter Variable (self-hosted via Fontsource)
- **Scale:** 4xl/5xl hero → lg body → sm meta; tracking-tight on headings, tracking-widest uppercase labels

## Effects & Motion

- Hover transitions 200–250ms (colors only)
- No gradients, no glow, shadows minimal (`--shadow-minimal`)
- `prefers-reduced-motion`: all animation/transition ≈ 0

## Anti-patterns (avoid)

- Neon glow effects, pure black `#000000` backgrounds
- AI purple/pink gradients
- Emoji as icons (inline SVG only)
- Borders on dark theme lighter than `surface1` (vibrating contrast)

## Pre-delivery checklist

- [ ] Text contrast ≥ 4.5:1 in both themes
- [ ] Focus states visible (`outline-ring`)
- [ ] Clickable elements `cursor-pointer`
- [ ] Responsive 375 / 768 / 1024 / 1440px
- [ ] Theme toggle persists, no FOUC (inline script in `<head>`)
