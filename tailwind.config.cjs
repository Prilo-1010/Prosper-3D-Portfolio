/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#aaa6c3",
        tertiary: "#1e1e1e",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/nine.png')",
      },
    },
  },
  plugins: [],
};

// :root {
//   --black: #121212;
//   --myblack: #0d0d0d;
//   --yellow: #e2ad24;
//   --white: #ffffff;
//   --mywhite: #131313;
// }