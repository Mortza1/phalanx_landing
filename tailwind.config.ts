import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#060A0F",
          900: "#0B0F14",
          800: "#111820",
          700: "#18222D",
          600: "#1E2A38",
          500: "#253244",
        },
        steel: {
          400: "#93C5FD",
          500: "#60A5FA",
          600: "#38BDF8",
        },
        teal: {
          400: "#2DD4BF",
          500: "#14B8A6",
        },
        silver: {
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease forwards",
        "fade-up": "fadeUp 0.8s ease forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "flow-down": "flowDown 3s ease-in-out infinite",
        "flow-up": "flowUp 3s ease-in-out infinite",
        "scan": "scan 6s linear infinite",
        "node-pulse": "nodePulse 2s ease-in-out infinite",
        "grid-fade": "gridFade 8s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        flowDown: {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(8px)" },
        },
        flowUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(-8px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        nodePulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.3)" },
        },
        gridFade: {
          "0%": { opacity: "0.03" },
          "100%": { opacity: "0.07" },
        },
      },
      backgroundImage: {
        "grid-pattern": `linear-gradient(rgba(56,189,248,0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(56,189,248,0.05) 1px, transparent 1px)`,
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
    },
  },
  plugins: [],
};
export default config;
