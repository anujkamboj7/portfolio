module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bg_dark: "#222222",
      heading_dark: "#f5f5f5",
      links_dark: "#f5f5f5",
      base_dark: "#d5d5d5",
      sub_heading_dark: "#aaaaaa",
      primary: "#007ced",
      cta_dark: "#333333",
      red: {
        600: "#dc2626",
      },
      green: {
        600: "#16a34a",
      },
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: "30px",

      // default breakpoints but with 40px removed
      screens: {
        xl: "1200px",
      },
    },
    extend: {},
    hyphens: {
      "foo-bar": "foo-bar",
    },
  },
};
