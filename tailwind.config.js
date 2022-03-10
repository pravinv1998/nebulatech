module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(17,24,40)",
        secondry: "rgb(7,42,100)",
        info: "rgb(5,39,94)",
        try: "rgb(3,13,33)",
        background: "rgb(242,242,242)",
      },
      animation: {
        nav: "nav-load 400ms ease-in",
        nav_item_middle: "nav-load 400ms ease-in",
        navafter: "name 700ms ease-in 400ms",
        company_logo: "logo 700ms ease-in 400ms",
        // spin: "spin 1s infinite 500ms",
      },
      keyframes: {
        "nav-load": {
          "0%": { transform: "translateY(-100%)", scale: 0 },
          "100%": { transform: "translateY(0)", scale: 1 },
        },
        logo: {
          "0%": { transform: "translateX(100%)", scale: 0 },
          "100%": { transform: "translateX(0)", scale: 1 },
        },
        name: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      fontFamily: {
        Sansita: ["Sansita Swashed", "cursive"],
        Dynalight: ["Dynalight", " cursive"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
