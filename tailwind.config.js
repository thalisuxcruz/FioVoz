export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        fio: {
          teal: '#0F4C5C',
          tealLight: '#1B5E6F',
          paper: '#FAFAF7',
          paperDark: '#F4F4F0',
          text: '#1A1F2B',
          textLight: '#4A5568',
          sage: '#7A9E7E',
          sand: '#C9A961',
          sandLight: '#E8DDB5',
          border: '#E5E2DA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(15, 76, 92, 0.05)',
        card: '0 2px 10px -1px rgba(26, 31, 43, 0.04), 0 1px 3px -1px rgba(26, 31, 43, 0.02)',
      },
    },
  },
  plugins: [],
}
