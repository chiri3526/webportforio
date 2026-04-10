import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f2937",
        surface: "#f4f6fb",
        accent: "#4f46e5",
        accentSoft: "#eef0ff",
        line: "#e6eaf2"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(79, 70, 229, 0.12)",
        card: "0 18px 50px rgba(15, 23, 42, 0.08)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        halo:
          "radial-gradient(circle at top right, rgba(103, 80, 255, 0.12), transparent 34%), radial-gradient(circle at top left, rgba(56, 189, 248, 0.08), transparent 26%)"
      }
    }
  },
  plugins: []
} satisfies Config;
