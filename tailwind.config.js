/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#ea723d",
        "secondary-color": "#1ea69a",
        "Third-color": "#0b8278",
        "bg-secondary": "#303030",
        "bg-third": "#f7f7f7",
        "text-secondary": "#808080",
        "primary-inverse": "rgb(var(--primary-inverse))",
        "primary-hover": "rgb(var(--primary-hover))",
        "primary-active-color": "rgb(var(--primary-active-color))",
        "primary-highlight":
          "rgb(var(--primary)/var(--primary-highlight-opacity))",
        "primary-highlight-inverse": "rgb(var(--primary-highlight-inverse))",
        "primary-highlight-hover":
          "rgb(var(--primary)/var(--primary-highlight-hover-opacity))",
        "primary-50": "rgb(236 253 245)",
        "primary-100": "rgb(209 250 229)",
        "primary-200": "rgb(167 243 208)",
        "primary-300": "rgb(110 231 183)",
        "primary-400": "rgb(52 211 153)",
        "primary-500": "rgb(16 185 129)",
        "primary-600": "rgb(5 150 105)",
        "primary-700": "rgb(4 120 87)",
        "primary-800": "rgb(6 95 70)",
        "primary-900": "rgb(4 78 56)",
        "primary-950": "rgb(2 44 34)",

        "surface-0": "rgb(255 255 255)",
        "surface-50": "rgb(250 250 250)",
        "surface-100": "rgb(244 244 245)",
        "surface-200": "rgb(228 228 231)",
        "surface-300": "rgb(212 212 216)",
        "surface-400": "rgb(161 161 170)",
        "surface-500": "rgb(113 113 122)",
        "surface-600": "rgb(82 82 91)",
        "surface-700": "rgb(63 63 70)",
        "surface-800": "rgb(39 39 42)",
        "surface-900": "rgb(24 24 27)",
        "surface-950": "rgb(9 9 11)",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(192, 192, 192, 0) 100%)",
      },
      fontFamily: {
        bodyFont: ["Playwrite ES"],
      },
    },
  },
  plugins: [],
};
