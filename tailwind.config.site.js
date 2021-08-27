//--------------------------------------------------------------------------
// Tailwind site configuration
//--------------------------------------------------------------------------
//
// Use this file to completely define the current sites design system by
// adding and extending to Tailwinds default utility classes.
//

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    // Here we define the default colors available. If you want to include
    // all default Tailwind colors you should extend the colors instead.
    colors: {
      transparent: 'transparent',
      black:   '#000',
      white:  '#fff',
      // Neutrals: neutral colors, with a default fallback if you don't need shades. Always set a DEFAULT when you use shades.
      neutral: {
        DEFAULT: '#231F16',
        light: '#FBF9F7',
        footer: '#BCB8A8',
        medium: '#808080',
        dark: '#231F16',
      },
      // Primary: primary brand color with a default fallback if you don't need shades. Always set a DEFAULT when you use shades.
      primary: {
        DEFAULT: '#BBA25F',
      },
      green: {
        DEFAULT: '#3A6F3B',
      },
      gold: {
        DEFAULT: '#BBA25F',
      },
      blue: {
        DEFAULT: '#4B5061',
        light: '#8BB4DD',
        dark: '#4B5061',
      },
      brown: {
        DEFAULT: '#645F4C',
      }
    },
    extend: {
      // Set default transition durations and easing when using the transition utilities.
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
    // Remove the font families you don't want to use.
    fontFamily: {
      sans: [
        // Use a custom sans serif font for this site by changing 'Gaultier' to the
        // font name you want and uncommenting the following line.
        'adobe-garamond-pro',
        ...defaultTheme.fontFamily.sans,
      ],
    },
    // The font weights available for this site.
    fontWeight: {
      // hairline: 100,
      // thin: 200,
      // light: 300,
      normal: 400,
      // medium: 500,
      // semibold: 600,
      bold: 700,
      // extrabold: 800,
      // black: 900,
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        // Default color transition on links unless user prefers reduced motion.
        '@media (prefers-reduced-motion: no-preference)': {
          'a': {
            transition: 'color .3s ease-in-out',
          },
        },
        'html': {
            fontDisplay: 'swap',
            color: theme('colors.neutral.DEFAULT'),
            //--------------------------------------------------------------------------
            // Set sans, serif or mono stack with optional custom font as default.
            //--------------------------------------------------------------------------
            // fontFamily: theme('fontFamily.mono'),
            fontFamily: theme('fontFamily.sans'),
            // fontFamily: theme('fontFamily.serif'),
        },
        // Style fyle upload form elements.
        'input[type="file"]::file-selector-button, input[type="file"]::-webkit-file-upload-button': {
            paddingTop: theme('spacing.2'),
            paddingBottom: theme('spacing.2'),
            paddingRight: theme('spacing.4'),
            paddingLeft: theme('spacing.4'),
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: theme('colors.primary.DEFAULT'),
            backgroundColor: theme('colors.white'),
            color: theme('colors.primary.DEFAULT'),
            fontSize: theme('fontSize.xs'),
            textTransform: 'uppercase',
            letterSpacing: theme('letterSpacing.widest'),
            fontWeight: theme('fontWeight.bold'),
        }
      })
    }),

    // Custom components for this particular site.
    plugin(function({ addComponents, theme }) {
      const components = {

      }
      addComponents(components)
    }),

    // Custom utilities for this particular site.
    plugin(function({ addUtilities, theme, variants }) {
      const newUtilities = {
        '.bg-neutral-dark-blur': {
          backgroundColor: 'rgba(35, 31, 22, .95)',
          '@supports (backdrop-filter: blur(20px))': {
            backgroundColor: 'rgba(35, 31, 22, .85)',
            backdropFilter: 'blur(20px) saturate(160%)',
          }
        },
        '.draw-stroke': {
          strokeDashoffset: '-39',
        },
        '.mix-blend-overlay': {
          mixBlendMode: 'overlay',
        },
        '.text-decoration-gold': {
          textDecorationColor: theme('colors.gold.DEFAULT'),
        },
        '.underline-thickness-2': {
          textDecorationThickness: '2px',
        },
        '.underline-offset-2': {
          textUnderlineOffset: '2px',
        },
        '.ltr': {
          direction: 'ltr',
        },
        '.rtl': {
          direction: 'rtl',
          '> *': {
            direction: 'ltr',
          },
        },
      }
      addUtilities(newUtilities)
    }),
  ]
}
