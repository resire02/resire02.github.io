import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "seaspace": "linear-gradient(to bottom, blue, black)",
      },
      colors: {
        'navy-sea': '#001944',
        'golden': '#f2af11',
      },
      gridTemplateColumns: {
        'fillmax': 'repeat(auto-fill, minmax(350px, 1fr))',
      },
    },
  },
  plugins: [],
};
export default config;
