/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0C71C3",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        fs20: "20px",
        fs25: "25px",
        fs30: "30px",
      },
    },
  },
  plugins: [],
};
