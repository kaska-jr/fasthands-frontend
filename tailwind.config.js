/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skyBlue900: "#3498db",
        skyBlue700: "#49b6ff",
        skyBlue500: "#77c8ff",
        skyBlue200: "#b4e1ff",
        pink900: "#ff6f61",
        pink700: "#f58b81",
        pink500: "#ffa9a0",
        pink200: "#ffc3bd",
        textGray: "#2f2f2f",
      },
      screens: {
        "2sm": "300px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1600px",
      },
    },
  },
  plugins: [require("daisyui")],
};
