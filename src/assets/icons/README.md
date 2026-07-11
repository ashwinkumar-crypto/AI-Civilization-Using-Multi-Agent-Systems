# Icons

This project uses [lucide-react](https://lucide.dev) for all iconography, imported directly as React components (e.g. `import { Sparkles } from "lucide-react"`).

This folder is reserved for custom SVG icon assets only if a design requires an icon not available in Lucide's set (e.g. a custom brand mark or agent-role glyph). Drop standalone `.svg` files here and import them as static assets, e.g.:

```tsx
import CustomIcon from "@/assets/icons/custom-icon.svg";
```

No custom icons were required for this build — all UI icons come from `lucide-react`.