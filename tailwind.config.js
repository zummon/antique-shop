/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'custom': "'Sacramento', cursive",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

