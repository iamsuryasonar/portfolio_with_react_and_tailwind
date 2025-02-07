/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-content': 'var(--color-primary-content)',
        'base-100': 'var(--color-base-100)',
        'base-200': 'var(--color-base-200)',
        accent: 'var(--color-accent)',
        buttonBg: 'var(--color-buttonBg)',
        buttonText: 'var(--color-buttonText)',
        typography: 'var(--color-typography)',
      },
      backgroundImage: {
        gradient: 'var(--color-gradient)',
      }
    },
  },
  plugins: [],
}

