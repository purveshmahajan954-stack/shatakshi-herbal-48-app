/**
 * Semantic design tokens for the Shatakshi Herbal mobile app.
 * Palette: warm cream background · dark slate headings · gold accent.
 */

const colors = {
  light: {
    text: "#1F2937",
    tint: "#07502C",

    // Backgrounds
    background: "#F8F6F2",   // Cream
    foreground: "#1F2937",   // Dark slate — headings & primary text

    // Cards / sidebar panels
    card: "#EFE9DD",         // Halka cream
    cardForeground: "#1F2937",

    // Brand green (kept for logo, badges, nav active state)
    primary: "#07502C",
    primaryForeground: "#FFFFFF",

    // Muted / secondary surfaces
    secondary: "#EFE9DD",
    secondaryForeground: "#1F2937",

    muted: "#EFE9DD",
    mutedForeground: "#4B5563",  // Soft grey — body text

    // Gold accent — section underlines, bullet points, links, highlights
    accent: "#C89B3C",
    accentForeground: "#FFFFFF",

    destructive: "#C0392B",
    destructiveForeground: "#FFFFFF",

    // Dividers & inputs
    border: "#D6CFC2",
    input: "#D6CFC2",
  },

  radius: 16,
};

export default colors;
