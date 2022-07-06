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
