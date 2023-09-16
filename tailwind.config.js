const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const alpha = { 100: 'FF', 90: 'E6', 80: 'CC', 70: 'B3', 60: '99', 50: '80', 40: '66', 30: '4D', 20: '33', 10: '1A' };

module.exports = {
  purge: {
    enabled: true,
    content: [
      './templates/**/*.twig',
      './src/scss/*.scss',
      './src/**/*.vue',
      './src/**/*.jsx',
      './src/**/*.js'
    ],
    options: {
      // Generic whitelist safelist for usual CMS class generation
      safelist: [/^bg-/, /^text-/, /^border-/, /^grid-cols-/, /^w-/, /^h-/, /^max-w-/, /^col-span-/]
    }
  },
  theme: {
    extend: {
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      colors: {
        primary: colors.black,
        gray: colors.gray,
        coolGreen: '#cfffd0',
        coolGray: '#CCD5DC',
        paleCoolGray: '#EEF2F4',
        darkBlue: '#111D3E',
        paleBlue: '#edf3f5',
        sand: '#f6f0e9', 
        brands: {
          facebook: '#3b5998',
          twitter: '#55acee',
          instagram: '#3f729b',
          linkedin: '#0976b4',
          youtube: '#e52d27',
          vimeo: '#1ab7ea',
          pinterest: '#cc2127'
        }
      },
      fontSize: theme => ({
        'xs':   ['0.75rem', theme('lineHeight.relaxed')],  // 12
        'sm':   ['0.875rem', theme('lineHeight.relaxed')], // 14
        'base': ['1.1rem', theme('lineHeight.relaxed')], // 16
        'md':   ['1.175rem', theme('lineHeight.relaxed')], // 18
        'lg':   ['1.25rem', theme('lineHeight.relaxed')],  // 20
        'xl':   ['1.5rem', theme('lineHeight.relaxed')],   // 24
        '2xl':  ['1.95rem', theme('lineHeight.relaxed')], // 30
        '3xl':  ['2.2rem', theme('lineHeight.relaxed')],  // 36
        '4xl':  ['3rem', theme('lineHeight.relaxed')],     // 48
        '5xl':  ['4rem', theme('lineHeight.relaxed')],     // 64
        '6xl':  ['4.4rem', theme('lineHeight.relaxed')],    // 72
        '7xl':  ['5rem', theme('lineHeight.relaxed')]    // 78
      }),
      fontFamily: {
        'sans-primary': [
          'Manrope', ...defaultTheme.fontFamily.sans
        ]
      },
      boxShadow: theme => ({
        'outline': '0 0 0 3px ' + theme('colors.primary.500') + alpha[20],
        'focus': '0 0 0 3px ' + theme('colors.primary.500') + alpha[20]
      }),
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem'
        }
      },
      height: {
        'screen-fix': 'calc(var(--vh, 1vh) * 100);'
      },
      inset: {
        '0': 0,
        '1/2': '50%'
      },
      transitionDuration: {
        DEFAULT: '500ms'
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    },
    screens: {
      ...defaultTheme.screens,
      '3xl': '1820px'
    }
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      bgColor: ['group-hover'],
      bgGradient: ['group-hover'],
      scale: ['group-hover']
    }
  },
  plugins: [
    require('tailwindcss-aspect-ratio'),
    require('tailwindcss-typography')({ componentPrefix: '' })
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
