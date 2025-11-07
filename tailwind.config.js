/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D47A1', // A strong, trustworthy blue
        secondary: '#1565C0',
        accent: '#FFC107', // A vibrant, attention-grabbing yellow/gold
        neutral: {
          'light': '#F5F5F5',
          'DEFAULT': '#424242',
          'dark': '#212121',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
