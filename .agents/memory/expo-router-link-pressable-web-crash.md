---
name: Expo Router Link+Pressable web crash
description: Wrapping a Pressable in Link asChild can crash react-native-web with a CSSStyleDeclaration indexed-property error, even though the same pattern works fine elsewhere in the app.
---

Symptom: on web preview (react-native-web via Expo Router), a specific screen crashes with
`TypeError: Failed to set an indexed property [0] on 'CSSStyleDeclaration': Indexed property setter is not supported`
thrown deep inside `setValueForStyle` / `setInitialProperties`, caught by an ErrorBoundary as a generic "Something went wrong" screen.

Root cause found in one case: a `<Link href="..." asChild><Pressable style={[staticStyleObj, {backgroundColor: dynamicColor}]}>...</Pressable></Link>` combination on a specific button. Visually identical `Link asChild` + `Pressable` patterns elsewhere in the same app (e.g. card components using a function-form style `({pressed}) => [...]`) rendered fine — so the bug is not "Link+Pressable is always broken," it's a narrower interaction that's hard to predict from reading the code alone.

**Why:** the failure is silent about which component triggers it (no useful stack trace pointing at app code), so trial-and-error is unreliable without a systematic method — you can spend a long time changing the wrong thing.

**How to apply:** when you hit this exact crash signature on web:
1. Bisect the screen's JSX by deleting large chunks (half at a time) and re-testing until the crash disappears, then narrow to the single element.
2. If a `Link asChild` + `Pressable` combo is the last suspect, try replacing it with a plain `Pressable` + `useRouter().push(...)` in `onPress` — this sidesteps the crash while preserving navigation behavior.
3. Don't assume the same fix is needed for every `Link asChild` usage in the file — other instances using a different style prop shape (function vs. static array) may already work fine; only change the one that reproduces the crash.
