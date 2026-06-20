/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F1E6',
        beige: '#EDE6D8',
        'light-blue': '#D0DEE6',
        'secondary-blue': '#8DB1C4',
        navy: '#1E3A4F',
        'dark-navy': '#152C3D',
        'text-primary': '#1A2F3D',
        'text-body': '#2E4A5C',
      },
      fontFamily: {
        'heading': ['"Cormorant Garamond"', 'serif'],
        'body': ['"Inter"', 'sans-serif'],
        'nav': ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
