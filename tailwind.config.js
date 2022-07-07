module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontSize: {
        mainheading: [
          "50px",
          {
            lineHeight: "65px",
          },
        ],
        heading: [
          "45px",
          {
            lineHeight: "59px",
          },
        ],
        subheading: [
          "25px",
          {
            lineHeight: "33px",
          },
        ],
        miniheading: [
          "20px",
          {
            lineHeight: "29px",
          },
        ],
        para: [
          "16px",
          {
            lineHeight: "19px",
          },
        ],
        subpara: [
          "14px",
          {
            lineHeight: "17px",
          },
        ],
        subpara2: [
          "14px",
          {
            lineHeight: "20px",
          },
        ],
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Jost: ["Jost", "sans-serif"],
      },
      colors: {
        theme: "#1BA8B1",
        Gray: "#455A64",
        button: "#FF532D",
        tgray: "#DDDDDD",
        themetext: "#37474F",
        purple: "#7436FF",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
