module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    fontFamily: {
      sans: "Helvetica, Arial, sans-serif",
    },
    extend: {
      screens: {
        short: { raw: "(max-width: 682px)" },
        shortt: { raw: "(max-width: 430px)" },


        average: { raw: "(max-height: 700px)" },
        // => @media (min-height: 800px) { ... }
      },
    },
  },
  plugins: [],
};
