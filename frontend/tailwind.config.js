/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./app/**/*.{js,jsx}",
],
  theme: {
    extend: {

      // ── FONTS ──────────────────────────────
      fontFamily: {
        display: ['var(--font-geist-sans)'],
        body:    ['var(--font-geist-sans)'],
        mono:    ['var(--font-geist-mono)'],
      },

      // ── FONT SIZE ──────────────────────────
      fontSize: {
        xs:    '12px',
        sm:    '14px',
        base:  '16px',
        lg:    '18px',
        xl:    '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
      },

      // ── FONT WEIGHT ────────────────────────
      fontWeight: {
        extralight: '200',
        light:      '300',
        regular:    '400',
        medium:     '500',
        semibold:   '600',
        bold:       '700',
      },

      // ── LETTER SPACING ─────────────────────
      letterSpacing: {
        tight:  '-0.5px',
        normal: '0px',
        wide:   '1px',
        wider:  '2px',
      },

      // ── COLORS ─────────────────────────────
      colors: {
  bg: {
    base:     'var(--color-bg-base)',
    subtle:   'var(--color-bg-subtle)',
    elevated: 'var(--color-bg-elevated)',
  },
  border: {
    default: 'var(--color-border-default)',
    subtle:  'var(--color-border-subtle)',
  },
  text: {
    primary:   'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    muted:     'var(--color-text-muted)',
    disabled:  'var(--color-text-disabled)',
  },
  accent: {
    default: 'var(--color-accent-default)',
    hover:   'var(--color-accent-hover)',
    muted:   'var(--color-accent-muted)',
  },
},

      // ── SPACING ────────────────────────────
    spacing: {
  1:  '4px',
  2:  '8px',
  3:  '12px',
  4:  '16px',
  6:  '24px',
  8:  '32px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
},

      // ── BORDER RADIUS ──────────────────────
      borderRadius: {
        none: '0px',
        sm:   '4px',
        md:   '8px',
        lg:   '12px',
        xl:   '16px',
        full: '9999px',
      },

      // ── SHADOWS ────────────────────────────
      boxShadow: {
        sm:   '0 1px 2px 0 rgba(0,0,0,0.4)',
        md:   '0 4px 12px 0 rgba(0,0,0,0.5)',
        glow: '0 0 20px 0 rgba(255,255,255,0.08)',
      },

    },
  },
  plugins: [],
}