/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#04110B',
          900: '#071A12',
          800: '#0B261B',
          700: '#113828'
        },
        emerald: {
          400: '#34D399',
          500: '#10B981',
          600: '#059669'
        },
        lime: {
          300: '#BEF264',
          400: '#A3E635',
          500: '#84CC16'
        },
        ivory: {
          50: '#FAF8F5',
          100: '#F3EFE6',
          200: '#E5DEC9'
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: []
};
