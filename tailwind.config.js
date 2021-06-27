module.exports = {
   mode: 'jit',
   purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         fontFamily: {
            'raleway': ['Raleway', 'Roboto'],
            'roboto': ['Roboto', 'Raleway']
         },
         backgroundColor: {
            default: "var(--color-bg-default)",
            paper: "var(--color-bg-paper)",
            hoverPaper: "var(--color-bg-hover-paper)",
            primary: "var(--color-bg-primary)",
            shadow: "var(--color-bg-shadow)"
         },
         textColor: {
            default: "var(--color-text-default)",
            disabled: "var(--color-text-disabled)",
            icon: "var(--color-text-icon)",
            primary: "var(--color-text-primary)",
            secondary: "var(--color-text-secondary)",
         },
         spacing: {
            104: "26rem",
            112: "28rem"
         },
         animation: {
            'open-bg-shadow': 'animation-open-bg-shadow 0.7s',
            'close-bg-shadow': 'animation-close-bg-shadow 0.7s',
            'open-drawer': 'animation-open-drawer 0.7s',
            'close-drawer': 'animation-close-drawer 0.7s',
            'expand-height': 'animation-expand-height 0.7s',
            'collapse-height': 'animation-collapse-height 0.7s'
         },
         keyframes: {
            'animation-open-bg-shadow': {
               '0%': { opacity: 0 },
               '100%': { opacity: 1 }
            },
            'animation-close-bg-shadow': {
               '0%': { opacity: 1 },
               '100%': { opacity: 0 }
            },
            'animation-open-drawer': {
               '0%': { transform: 'translateX(-100%)' },
               '100%': { transform: 'translateX(0)' }
            },
            'animation-close-drawer': {
               '0%': { transform: 'translateX(0)' },
               '100%': { transform: 'translateX(-100%)' }
            },
            'animation-expand-height': {
               '0%': { maxHeight: '0', opacity: 0.5 },
               '100%': { maxHeight: '15rem', opacity: 1 }
            },
            'animation-collapse-height': {
               '0%': { maxHeight: '15rem', opacity: 1 },
               '100%': { maxHeight: '0', opacity: 0 }
            }
         }
      },
      screens: {
         'sm': '540px',
         // => @media (min-width: 640px) { ... }
         'md': '768px',
         // => @media (min-width: 768px) { ... }
         'lg': '1024px',
         // => @media (min-width: 1024px) { ... }
         'xl': '1320px',
         // => @media (min-width: 1280px) { ... }
         '2xl': '1536px',
         // => @media (min-width: 1536px) { ... }
      },
      boxShadow: {
         DEFAULT: 'var(--color-shadow-default) 0px 1.5px 5px 0px',
         sm: '0 1px 2px 2px var(--color-shadow-default)',
         md: '0 4px 6px -1px var(--color-shadow-default), 0 2px 4px -1px var(--color-shadow-default)',
         lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
         xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
         '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
         '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
         inner: 'inset 0 2px 4px 0 var(--color-shadow-default)',
         none: 'none',
      },
      minWidth: {
         '0': '0',
         '8': '2rem',
         '12': '3rem',
         '1/4': '25%',
         '1/2': '50%',
         '3/4': '75%',
         'full': '100%',
      },
      minHeight: {
         '0': '0',
         '8': '2rem',
         '16': '4rem',
         '32': '8rem',
         '64': '16rem',
         '72': '18rem',
         '80': '20rem',
         '12': '3rem',
         '1/4': '25%',
         '1/2': '50%',
         '3/4': '75%',
         'full': '100%',
         'screen': '100vh'
      }
   },
   variants: {
      extend: {
         transitionProperty: ['hover', 'focus'],
         transitionDuration: ['hover', 'focus'],
         transitionTimingFunction: ['hover', 'focus'],
         animation: ['hover', 'focus', 'active'],
      },
   },
   plugins: [],
}