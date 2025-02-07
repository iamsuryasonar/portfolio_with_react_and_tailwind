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
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        buttonBg: 'var(--color-buttonBg)',
        buttonText: 'var(--color-buttonText)',
        typography: 'var(--color-typography)',
      },
      backgroundImage: {
        gradient: 'var(--color-gradient)'
      }
    },
  },
  plugins: [],
}

