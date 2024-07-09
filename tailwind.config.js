/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "bromega-black": ["BROmegaVN-Black", "sans-serif"],
        "bromega-black-italic": ["BROmegaVN-BlackItalic", "sans-serif"],
        "bromega-bold": ["BROmegaVN-Bold", "sans-serif"],
        "bromega-bold-italic": ["BROmegaVN-BoldItalic", "sans-serif"],
        "bromega-light": ["BROmegaVN-Light", "sans-serif"],
        "bromega-light-italic": ["BROmegaVN-LightItalic", "sans-serif"],
        "bromega-regular": ["BROmegaVN-Regular", "sans-serif"],
        "bromega-regular-italic": ["BROmegaVN-RegularItalic", "sans-serif"],
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        customBlue: '#00ADEE',
        navbarColor: '#E6F0FE',
      }
    },
  },

  plugins: [],
};
