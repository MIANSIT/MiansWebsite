import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        // Static brand palette
        'brand-white':  '#FAFEFF',
        'brand-black':  '#090909',
        'brand-stone':  '#50505F',
        'brand-gray':   '#C0C0C0',
        // Semantic CSS-variable–backed tokens
        'bg':        'var(--bg)',
        'bg-subtle': 'var(--bg-subtle)',
        'bg-card':   'var(--bg-card)',
        'text-pri':  'var(--text-primary)',
        'text-sec':  'var(--text-secondary)',
        'text-muted':'var(--text-muted)',
        'border-col':'var(--border)',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        hind:    ['var(--font-hind)', 'sans-serif'],
      },
      animation: {
        'marquee':         'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'float':           'float 5s ease-in-out infinite',
        'spin-slow':       'spin 25s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
