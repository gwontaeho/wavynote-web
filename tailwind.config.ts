import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "rgb(var(--color-main) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
