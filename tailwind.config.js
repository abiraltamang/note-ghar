module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
      },
    },
  },
  plugins: [],
};
