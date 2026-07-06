import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#F97316',
        'accent-hover': '#C2410C',
        surface: '#141414',
        'surface-2': '#1E1E1E',
        muted: '#71717A',
        'muted-light': '#A1A1AA',
        'light-bg': '#F8F8F7',
      },
      maxWidth: {
        '8xl': '1280px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
      borderColor: {
        subtle: 'rgba(255,255,255,0.08)',
        'accent-subtle': 'rgba(249,115,22,0.2)',
      },
      backgroundColor: {
        'black-90': 'rgba(10,10,10,0.9)',
      },
    },
  },
  plugins: [],
}

export default config
