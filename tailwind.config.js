/** @type {import('tailwindcss').Config} */
export default {
  content: ["/src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "linear-gradient(173deg, rgba(255,255,242,1) 0%, rgba(214,210,181,1) 93%)",
      },
      colors: {
        primary: "#684756",
        secondary: "#FFFFF2",
        tertiary: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
