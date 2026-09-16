/*
 * Light code theme, built from the sheet's own colours instead of a bundled one.
 *
 * Every bundled light shiki theme fails WCAG AA on this content. Highlighting all
 * 68 fenced blocks in the collections, github-light puts one token at 3.49:1 on
 * white, and tinting the surface pushes three of seven below 4.5:1. Each colour
 * below clears 4.5:1 on the light code surface, --color-muted (#f2f4f7).
 */
export default {
  name: 'datasheet-light',
  /** @type {'light'} */
  type: 'light',
  colors: {
    'editor.background': '#f2f4f7',
    'editor.foreground': '#14171c',
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#545e6b' },
    },
    {
      scope: [
        'keyword',
        'keyword.control',
        'keyword.operator',
        'storage',
        'storage.type',
        'storage.modifier',
      ],
      settings: { foreground: '#c8102e' },
    },
    {
      scope: ['string', 'string.quoted', 'string.regexp', 'punctuation.definition.string'],
      settings: { foreground: '#1f5fa8' },
    },
    {
      scope: ['constant.numeric', 'constant.language', 'constant.character', 'support.constant'],
      settings: { foreground: '#9d0c24' },
    },
    {
      scope: [
        'entity.name.function',
        'support.function',
        'meta.function-call',
        'entity.name.type',
        'entity.name.class',
        'support.type',
        'support.class',
      ],
      settings: { foreground: '#6b3fa0' },
    },
  ],
}
