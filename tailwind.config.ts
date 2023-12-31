import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/lib/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        main: '#FFF',
        accent: '#F4F4F4',
        primary: '#0C231E',
        secondary: '#13322B',
        third: '#6A1B31',
        fourth: '#BC955C',
        'dark-text': '#111827',
        'highlight-text': '#6A1B31',
        paragraph: '#6B7280'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
export default config
