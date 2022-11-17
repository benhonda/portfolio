/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["_site/**/*.html"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["S", "ui-sans-serif", "system-ui"],
      serif: ["Tabular", "ui-sans-serif", "system-ui"],
    },
    extend: {
      cursor: {
        click: 'url("/assets/images/click.cur") 25 25, pointer',
      },
    },
  },
  plugins: [],
};
