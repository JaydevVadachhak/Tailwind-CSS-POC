/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Clipboard
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
      },
    },
    fontFamily: {
      sans: ['Mulish', 'sans-serif'], // General
      clipSans: ["Bai Jamjuree", "sans-serif"], // Clipboard
      tgSans: ["Barlow Semi Condensed", "sans-serif"], // Testimonial Grid
      mono: ["Rokkitt", "monospace"], // General
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
