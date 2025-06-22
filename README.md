# React Loading Components

A lightweight and customizable React component library for loading indicators and skeleton screens. Built with TypeScript for full type safety and excellent developer experience.

## ✨ Features

- 🚀 **Lightweight** - Minimal bundle size impact
- 🎨 **Customizable** - Full control over appearance and behavior
- 📝 **TypeScript** - Complete type definitions included
- ♿ **Accessible** - ARIA labels and screen reader support
- 🌳 **Tree-shakeable** - Import only what you need
- ⚡ **Performance** - Optimized animations using CSS

## 📦 Installation

```bash
npm install react-loading-components
```

```bash
yarn add react-loading-components
```

```bash
pnpm add react-loading-components
```

## 🚀 Quick Start

```tsx
import {
  LoadingSpinner,
  PulseLoader,
  Skeleton,
} from "react-loading-components";

function App() {
  return (
    <div>
      {/* Basic spinner */}
      <LoadingSpinner />

      {/* Customized spinner */}
      <LoadingSpinner
        size={50}
        color="#ff6b6b"
        showText={true}
        text="Loading data..."
      />

      {/* Pulse loader */}
      <PulseLoader count={5} color="#10b981" />

      {/* Skeleton placeholder */}
      <Skeleton width="100%" height={24} />
    </div>
  );
}
```

## 📖 Components

### LoadingSpinner

A classic spinning loading indicator.

```tsx
<LoadingSpinner
  size={40} // Size in pixels (default: 40)
  color="#3b82f6" // Color (default: "#3b82f6")
  speed={1} // Animation speed in seconds (default: 1)
  thickness={4} // Border thickness (default: 4)
  showText={false} // Show loading text (default: false)
  text="Loading..." // Custom text (default: "Loading...")
  ariaLabel="Loading..." // ARIA label (default: "Loading...")
  className="" // Additional CSS class
/>
```

### PulseLoader

An animated pulse loading indicator with multiple dots.

```tsx
<PulseLoader
  size={12} // Dot size in pixels (default: 12)
  color="#3b82f6" // Dot color (default: "#3b82f6")
  speed={1.4} // Animation speed in seconds (default: 1.4)
  count={3} // Number of dots (default: 3)
  ariaLabel="Loading..." // ARIA label (default: "Loading...")
  className="" // Additional CSS class
/>
```

### Skeleton

A skeleton placeholder for content loading states.

```tsx
<Skeleton
  width="100%" // Width (default: "100%")
  height={20} // Height in pixels (default: 20)
  borderRadius={4} // Border radius (default: 4)
  animate={true} // Enable animation (default: true)
  speed={2} // Animation speed in seconds (default: 2)
  className="" // Additional CSS class
/>
```

## 🚀 Publishing to NPM

This library is set up for easy publishing to NPM:

1. **Build the library**: `npm run build:lib`
2. **Update version**: `npm version patch` (or `minor`/`major`)
3. **Publish**: `npm publish`

The `prepublishOnly` script ensures the library is built before publishing.

## 🛠️ Development

```bash
# Start development server
npm run dev

# Build the library
npm run build:lib
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
