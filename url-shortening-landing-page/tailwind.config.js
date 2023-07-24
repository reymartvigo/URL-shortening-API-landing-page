/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "100px",
      sm2: "375px",
      sm3: "640px",
      md: "768px",
      lg: "1024px",
      lg2: "1280px",
      xl: "1440px",
    },
    colors: {
      white: "rgb(255 255 255)",
      cyan: "hsl(180, 66%, 49%)",
      darkviolet: "hsl(257, 27%, 26%)",
      secondaryred: "hsl(0, 87%, 67%)",
      neutralgray: "hsl(0, 0%, 75%)",
      neutralgray2: "hsla(0, 0%, 75%,.3)",
      grayishviolet: "hsl(257, 7%, 63%)",
      verydarkblue: "hsl(255, 11%, 22%)",
      verydarkviolet: "hsl(260, 8%, 14%)",
    },
  },
  plugins: [],
};
