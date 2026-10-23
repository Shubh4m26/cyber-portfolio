export const theme = {
  colors: {
    background: "#030712",
    surface: "#111827",
    primary: "#3B82F6",
    secondary: "#06B6D4",
    accent: "#8B5CF6",
    text: "#F9FAFB",
    muted: "#9CA3AF",
    border: "#1F2937",
  },

  gradients: {
    primary:
      "from-cyan-400 via-blue-500 to-indigo-600",
    glow:
      "from-cyan-500/20 via-blue-500/10 to-transparent",
  },

  animation: {
    duration: 0.6,
    ease: "easeOut",
  },
} as const;