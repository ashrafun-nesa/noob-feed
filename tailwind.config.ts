import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./HOC/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "300px",
      "2xs": "375px",
      sm: "600px",
      // => @media (min-width: 600px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1680px",
      // => @media (min-width: 1600px) { ... }
    },
    extend: {
      width: {
        max85: "85%",
        cardLg: "calc(100% / 6 - 14px)",
        cardMd: "calc(100% / 4 - 6px)",
        cardSm: "calc(100% / 2 - 4px)",
        newsCardLg: "calc(100% / 4 - 18px)",
        newsCardMd: "calc(100% / 2 - 16px)",
        reviewCardLg: "calc(100% / 3 - 11px)",
        filterCardLg: "calc(100% / 4 - 12px)",
        filterCardMd: "calc(100% / 3 - 6px)",
      },
      fontSize: {
        md: [
          "22px",
          {
            lineHeight: "1.5rem",
            fontWeight: "600",
          },
        ],
        18: [
          "18px",
          {
            lineHeight: "1.1",
            fontWeight: "600",
          },
        ],
      },
      colors: {
        brand: {
          primary: "#FF0049",
          secondary: "#A3002F",
          tertiary: "#0070D1",
          quaternary: "#49C1D9",
          rating: "#fabb05",
        },
        social: {
          facebook: "#2563eb",
          instagram: "#e1306c",
          linkedin: "#00a0dc",
        },
        light: {
          primary: "#EAF1F9",
          title: "#DDDDE0",
          paragraph: "#C7C5CB",
          background: "#F9FCFF",
        },
        dark: {
          primary: "#353535",
          title: "#2F3043",
          paragraph: "#484848",
          background: "#040615",
        },
      },
    },
  },
  plugins: [],
};
export default config;
