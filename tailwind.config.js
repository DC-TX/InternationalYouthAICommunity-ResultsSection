/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FBFAF6",
        bone: "#F1EFE6",
        ink: "#15141A",
        charcoal: "#5B5862",
        mute: "#928E83",
        line: "#E7E4D9",
        card: "rgba(255,255,255,0.72)",

        premiumBg: "#FBFAF6",
        premiumPanel: "#F1EFE6",
        premiumCard: "rgba(255,255,255,0.72)",
        premiumText: "#15141A",
        premiumMute: "#5B5862",
        premiumLine: "#E7E4D9",

        neonGreen: "#2536E8",
        electricCyan: "#0C8C7A",
        violet: "#2536E8",
        gold: "#FFC400",
        github: "#24292F",

        paleBlue: "#E7EAFF",
        paleGreen: "#DDEFEA",
        paleYellow: "#FFF3BF",
        paleRed: "#FFE3DC",
        palePurple: "#E7EAFF",

        brand: "#2536E8",
        coral: "#FF4A2B",
        teal: "#0C8C7A",
        sun: "#FFC400"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(21,20,26,0.12)",
        glowGreen: "0 14px 34px rgba(37,54,232,0.24)",
        glowCyan: "0 14px 34px rgba(12,140,122,0.18)",
        glowViolet: "0 14px 34px rgba(255,74,43,0.16)"
      },
      fontFamily: {
        sans: [
          "Noto Sans SC",
          "Hanken Grotesk",
          "SF Pro Display",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        serif: [
          "Newsreader",
          "Instrument Serif",
          "Georgia",
          "serif"
        ],
        mono: [
          "Geist Mono",
          "SF Mono",
          "JetBrains Mono",
          "monospace"
        ]
      }
    }
  },
  plugins: []
};
