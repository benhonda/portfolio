/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["_site/**/*.html"],
  darkMode: "class",
  theme: {
    fontFamily: {
      // sans: ["ui-sans-serif", "system-ui"],
      sans: ["Satoshi", "ui-sans-serif", "system-ui"],
      body: ["ui-sans-serif", "system-ui"],
      display: ["ClashDisplay", "ui-sans-serif", "system-ui"],
    },
    extend: {
      cursor: {
        click: 'url("/assets/images/click.cur") 25 25, pointer',
      },
    },
  },
  plugins: [],
};
