/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // backgroundImage: {
      //   whiteCobblestone:
      //     "url('assets/labels/af1_label_white_cobblestone.jpeg')",
      //   whiteBlack: "url('assets/labels/AF1Label10a00a.jpeg')",
      //   blackWhite: "url('assets/labels/AF1Label00a10a.jpeg')",
      //   cobblestoneWhite:
      //     "url('assets/labels/af1_label_cobblestone_white.jpeg')",
      // },
    },
    fontFamily: {
      sans: [
        'Helvetica Now Text',
        'Helvetica Now DM',
        'Helvetica Now Text Medium',
        'sans-serif',
      ],
    },
  },
  plugins: [],
};
