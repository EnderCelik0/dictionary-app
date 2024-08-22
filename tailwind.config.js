/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        black: "hsl(var(--color-black) / <alpha-value>)",
        white: "hsl(var(--color-white) / <alpha-value>)",

      },

      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        serif: ["Noto Serif", "serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
