/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minHeight: {
        fillSpace: "calc(100vh - 8rem)",
      },
    },
  },
  plugins: [],
};
