const defaultTheme = require('tailwindcss/defaultTheme')
const windmill = require('@windmill/react-ui/config')

module.exports = windmill({
  purge: {
    content: [
      './pages/**/*.js',
      './pages/**/*.mdx',
      './containers/**/*.js',
      './components/**/*.js',
      './layouts/**/*.js',
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: '#02f8ba',
      },
      listStyleType: {
        square: '"▫"',
      },
      boxShadow: {
        primary: '0 10px 15px -3px rgba(2,248,186, 0.1), 0 4px 6px -2px rgba(2,248,186, 0.05)',
      },
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {
    display: ['responsive', 'group-hover'],
  },
})
