/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F6F3",
        bone: "#FBFBFA",
        ink: "#151515",
        charcoal: "#2F3437",
        mute: "#787774",
        line: "#EAEAEA",
        card: "#FFFFFF",
        paleBlue: "#E1F3FE",
        paleGreen: "#EDF3EC",
        paleYellow: "#FBF3DB",
        paleRed: "#FDEBEC",
        palePurple: "#EEEAF7",
        github: "#24292F"
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0,0,0,0.04)"
      },
      fontFamily: {
        sans: [
          "SF Pro Display",
          "Geist Sans",
          "Helvetica Neue",
          "Switzer",
          "Arial",
          "sans-serif"
        ],
        serif: [
          "Newsreader",
          "Instrument Serif",
          "Playfair Display",
          "Georgia",
          "serif"
        ],
        mono: ["Geist Mono", "SF Mono", "JetBrains Mono", "monospace"]
      }
    }
  },
  plugins: []
};
