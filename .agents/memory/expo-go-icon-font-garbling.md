---
name: Expo Go icon font garbling
description: Why @expo/vector-icons shows garbled glyphs instead of icons in Expo Go, and the permanent SVG-based fix.
---

## The rule
When an app registers a TTF via the `expo-font` plugin in `app.json` (e.g. `Feather.ttf`) **and** later switches to a different `@expo/vector-icons` set (e.g. Ionicons), the stale font registration causes the new set's unicode code points to be rendered through the old font — producing garbled script-like characters, not blank squares.

**Why:** All `@expo/vector-icons` sets are font-based and each uses its own unicode private-use-area code points. If the wrong TTF is active for a component's font family, the code points map to wrong glyphs in that font.

**How to apply:** Any time icons render as garbled characters (not blank boxes) in Expo Go:
1. Check `app.json` for leftover `expo-font` plugin font entries.
2. Switching icon sets within `@expo/vector-icons` does NOT fix the problem if the old font is still registered.
3. **Permanent fix:** migrate to `lucide-react-native` — it uses `react-native-svg` (bundled in Expo Go), requires zero font loading, and the component name IS the icon (e.g. `<Heart size={22} color="green" />`).

## Migration notes
- Install: `pnpm --filter @workspace/mobile add lucide-react-native`
- Dynamic icon pattern: use a `Record<string, LucideIcon>` lookup map; import `LucideIcon` type from `lucide-react-native`.
- Remove `@expo/vector-icons` import from all app files (keep the package in `package.json` — other Expo packages need it as a peer dep).
- Fix any `Category.icon` type that was `keyof typeof Feather.glyphMap` → change to plain `string`.
- After migration: clear Metro cache (`--clear` flag once) so Expo Go gets the fresh bundle.
