/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: ".25rem",
      lg: ".5rem",
      full: "9999px",
      curl: "17px", // to be used for default rounded borders
      chip: "5px", // to use on chips and badges
      norm: "8px",
    },
    extend: {
      colors: {
        blue: {
          accent: "#1F6FEB",
          light: "#388BFD",
          lightish: "#BFDAFF",
        },
        sky: {
          white: "#FFFFFF",
        },
        gray: {
          100: "#C9D1D9",
          200: "#B2BDCD",
          300: "#8B949E",
          400: "#4F617A",
          500: "#404F64",
          600: "#30363D",
          700: "#21262D",
          800: "#161B22",
          900: "#0B0E11",
        },
        grayLightMode: {
          100: "#F6F8FA",
          200: "#D0D7DE",
          300: "#8D959F",
          400: "#58606A",
          500: "#24292F",
        },
      },
      backgroundColor: {
        blue: {
          accent: "#1F6FEB",
          light: "#388BFD",
          lightish: "#BFDAFF",
        },
        sky: {
          white: "#FFFFFF",
        },
        gray: {
          100: "#C9D1D9",
          200: "#B2BDCD",
          300: "#8B949E",
          400: "#4F617A",
          500: "#404F64",
          600: "#30363D",
          700: "#21262D",
          800: "#161B22",
          900: "#0B0E11",
        },
        grayLightMode: {
          100: "#F6F8FA",
          200: "#D0D7DE",
          300: "#8D959F",
          400: "#58606A",
          500: "#24292F",
        },
      },
      borderColor: {
        blue: {
          accent: "#1F6FEB",
          light: "#388BFD",
          lightish: "#BFDAFF",
        },
        sky: {
          white: "#FFFFFF",
        },
        gray: {
          100: "#C9D1D9",
          200: "#B2BDCD",
          300: "#8B949E",
          400: "#4F617A",
          500: "#404F64",
          600: "#30363D",
          700: "#21262D",
          800: "#161B22",
          900: "#0B0E11",
        },
        c: {
          100: "#F6F8FA",
          200: "#D0D7DE",
          300: "#8D959F",
          400: "#58606A",
          500: "#24292F",
        },
      },
      backgroundImage: {
        orangelike: "linear-gradient(to bottom, #EA12B0, #FFB40B)",
        // 'leafs'
      },
      fontFamily: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
