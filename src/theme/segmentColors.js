/**
 * Segment/card color keys and their Tailwind utility classes.
 * Color values live in style.css @theme; this only maps keys → class names for bg and fill.
 */
export const segmentColorKeys = [
  'white',
  'gray-50',
  'gray-100',
  'cream',
  'primary',
  'primary-dark',
  'accent',
  'accent-yellow',
]

/** Tailwind class names for segment background and SVG fill (must match @theme in style.css) */
export const segmentColorClasses = {
  white: { bg: 'bg-white', fill: 'fill-white' },
  'gray-50': { bg: 'bg-gray-50', fill: 'fill-gray-50' },
  'gray-100': { bg: 'bg-gray-100', fill: 'fill-gray-100' },
  cream: { bg: 'bg-cream', fill: 'fill-cream' },
  primary: { bg: 'bg-primary', fill: 'fill-primary' },
  'primary-dark': { bg: 'bg-primary-dark', fill: 'fill-primary-dark' },
  accent: { bg: 'bg-accent', fill: 'fill-accent' },
  'accent-yellow': { bg: 'bg-accent-yellow', fill: 'fill-accent-yellow' },
}
