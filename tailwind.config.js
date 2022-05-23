module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'top-desktop': "url('/bg-pattern-top-desktop')",
        'top-mobile': 'url(/bg-pattern-top-mobile)',
        'bottom-mobile': 'url(/bg-pattern-bottom-mobile)',
        'bottom-desktop': 'url(/bg-pattern-bottom-desktop)',
      }
    },
  },
  plugins: [],
}
