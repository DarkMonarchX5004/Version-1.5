/**
 * CANEVIA Sovereign Sugarcane Reserve — Living Design Tokens
 * Conforms to Award-Winning Design System Guidelines (Awwwards / FWA standard)
 */

export const designTokens = {
  brand: {
    name: "CANEVIA",
    legalName: "Kothule Industries",
    tagline: "Pure Strength. Timeless Taste.",
    subtagline: "Sovereign Sugarcane Reserve",
    fssaiLicense: "10022022000543",
    whatsappChannel: "+91 99223 41509",
    conciergeEmail: "princegojo5004@gmail.com",
    origin: "Pune & Kolhapur Valley, Maharashtra, India",
  },

  color: {
    // Obsidian Dark Luxury Base
    obsidian: {
      void: "#080807", // Deepest background canvas
      surface: "#11110F", // Primary card and container surfaces
      raised: "#181815", // Elevated dropdowns, modals, drawers
      highlight: "#22221E", // Interactive element hovers
      border: "#2A2A24", // Delicate luxury dividers
      borderLight: "#383830",
    },

    // 24K Sovereign Metallic Gold
    gold: {
      primary: "#D4AF37", // Historic metallic gold
      foil: "#C5A059", // Hot-stamped paper gold
      light: "#EAD698", // Specular highlight gleam
      dark: "#997A2E", // Deep shadow contour
      glow: "rgba(212, 175, 55, 0.18)",
      glowSubtle: "rgba(212, 175, 55, 0.08)",
    },

    // Warm Estate Parchment & Ivory
    parchment: {
      pure: "#FAF7F0", // Pure text & high-contrast labels
      warm: "#EDE8DF", // Primary headlines & prominent copy
      muted: "#A8A49A", // Descriptive body copy
      subtle: "#706E66", // Metadata & coordinates
      dark: "#3A3935", // Low contrast boundaries
    },

    // Botanical Earth
    botanical: {
      emerald: "#244030", // Ayurvedic okra plant green
      amber: "#9E6928", // Caramelized cane molasses
      clay: "#5A3825", // Riverbank alluvial soil
    },
  },

  typography: {
    display: {
      fontFamily: '"Cinzel", "Cormorant Garamond", Georgia, serif',
      letterSpacing: "-0.02em",
      weights: { regular: 400, medium: 600, bold: 700 },
    },
    serif: {
      fontFamily: '"Cormorant Garamond", Garamond, Georgia, serif',
      letterSpacing: "0",
      weights: { regular: 400, italic: 400, medium: 600, bold: 700 },
    },
    sans: {
      fontFamily: '"Plus Jakarta Sans", "Manrope", -apple-system, sans-serif',
      letterSpacing: "-0.01em",
      weights: { light: 300, regular: 400, medium: 500, semiBold: 600, bold: 700 },
    },
    mono: {
      fontFamily: '"Space Mono", "JetBrains Mono", monospace',
      letterSpacing: "0.12em",
      weights: { regular: 400, bold: 700 },
    },
  },

  spacing: {
    unit: 4,
    scale: {
      xs: "0.5rem", // 8px
      sm: "0.75rem", // 12px
      md: "1rem", // 16px
      lg: "1.5rem", // 24px
      xl: "2rem", // 32px
      "2xl": "3rem", // 48px
      "3xl": "4.5rem", // 72px
      "4xl": "6rem", // 96px
      "5xl": "8rem", // 128px
    },
  },

  radii: {
    sm: "8px",
    md: "14px",
    lg: "22px",
    xl: "32px",
    full: "9999px",
  },

  motion: {
    easing: {
      luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    duration: {
      micro: "150ms",
      standard: "350ms",
      cinematic: "700ms",
      ambient: "1400ms",
    },
  },

  elevation: {
    card: "0 18px 45px rgba(0, 0, 0, 0.4)",
    glow: "0 0 50px rgba(212, 175, 55, 0.15)",
    modal: "0 35px 90px rgba(0, 0, 0, 0.75)",
  },
} as const;

export type DesignTokens = typeof designTokens;
