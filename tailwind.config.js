/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./*.html",
    "./public/**/*.html",
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },

    backgroundSize: {
      "50%": "50%",
      "100%": "100%",
    },
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #7dd9ff, #ff90c7)",
        "hero-pattern": "url('/img/gif/autumn.gif')",
        "radial-custom": "radial-gradient(circle, #a5baff, #5a94ff)",
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        hole: ["Hole-Hearted", "sans-serif"],
        blanka: ["Blanka", "sans-serif"],
        ample: ["Ample", "sans-serif"],
      },
      keyframes: {
        glowing: {
          "0%": { backgroundPosition: "0 0" },
          "50%": { backgroundPosition: "400% 0" },
          "100%": { backgroundPosition: "0 0" },
        },
      },
      animation: {
        glowing: "glowing 20s linear infinite",
      },
    },
  },
  plugins: [],
};
