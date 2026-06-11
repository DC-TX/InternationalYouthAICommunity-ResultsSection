/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#070A12",
        bone: "#0B1020",
        ink: "#F8FAFC",
        charcoal: "#CBD5E1",
        mute: "#8A93A6",
        line: "rgba(255,255,255,0.12)",
        card: "rgba(255,255,255,0.075)",

        premiumBg: "#070A12",
        premiumPanel: "#0B1020",
        premiumCard: "rgba(255,255,255,0.075)",
        premiumText: "#F8FAFC",
        premiumMute: "#8A93A6",
        premiumLine: "rgba(255,255,255,0.12)",

        neonGreen: "#4BFF5E",
        electricCyan: "#35E7FF",
        violet: "#9B5CFF",
        gold: "#FFD166",
        github: "#24292F",

        paleBlue: "#142B42",
        paleGreen: "#16351F",
        paleYellow: "#3A3214",
        paleRed: "#3A171A",
        palePurple: "#241A3A"
      },
      boxShadow: {
        soft: "0 20px 80px rgba(0,0,0,0.28)",
        glowGreen: "0 0 45px rgba(75,255,94,0.24)",
        glowCyan: "0 0 45px rgba(53,231,255,0.22)",
        glowViolet: "0 0 45px rgba(155,92,255,0.22)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "SF Pro Display",
          "Geist Sans",
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
