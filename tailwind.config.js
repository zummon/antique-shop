/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'custom': "'Sacramento', cursive",
        'serif': "'Platypi', serif",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config