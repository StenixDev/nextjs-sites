import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#081f3d",
        patriot: "#c3192d",
        cream: "#f7f5f0",
        sky: "#dce8f4",
      },
      boxShadow: {
        soft: "0 24px 60px rgba(8,31,61,.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
