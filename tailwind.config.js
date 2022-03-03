module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(17,24,40)",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
