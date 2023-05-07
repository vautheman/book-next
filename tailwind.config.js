/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': '#A277FF',
        'secondary': '#61FFCA',
        'secondary-soft': '#54c59f',
        'background': '#0D1117',
        'purple-dark': '#29263C',
        'body-secondary': '#9E9E9E',
      },

      fontFamily: {
        title: "var(--font-title)",
        body: "var(--font-body)"
      }
    },
  },
  plugins: [],
}
