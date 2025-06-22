# Publishing Your React Loading Components to NPM

This guide will walk you through the process of publishing your custom loading component library to NPM.

## Prerequisites

1. **NPM Account**: Create an account at [npmjs.com](https://www.npmjs.com/)
2. **NPM CLI**: Install globally with `npm install -g npm`
3. **Authentication**: Log in to NPM with `npm login`

## Step-by-Step Publishing Process

### 1. Prepare Your Package

Update the `package.json` with your information:

```json
{
  "name": "your-unique-package-name",
  "version": "1.0.0",
  "description": "Your package description",
  "author": "Your Name",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/yourusername/your-repo.git"
  }
}
```

### 2. Check Package Name Availability

```bash
npm view your-package-name
```

If you get an error, the name is available!

### 3. Build Your Library

```bash
npm run build:lib
```

This creates the `dist/` folder with your compiled library.

### 4. Test Locally (Optional)

Test your package locally before publishing:

```bash
# In your library directory
npm pack

# In a test project
npm install /path/to/your-package.tgz
```

### 5. Publish to NPM

For the first publish:

```bash
npm publish
```

For updates:

```bash
# Update version
npm version patch  # for bug fixes
npm version minor  # for new features
npm version major  # for breaking changes

# Publish
npm publish
```

## Using Your Published Package

Once published, anyone can install and use your package:

```bash
npm install your-package-name
```

```tsx
import { LoadingSpinner, PulseLoader, Skeleton } from "your-package-name";

function App() {
  return (
    <div>
      <LoadingSpinner size={50} color="#ff6b6b" />
      <PulseLoader count={3} />
      <Skeleton width="100%" height={24} />
    </div>
  );
}
```

## Best Practices

1. **Semantic Versioning**: Use meaningful version numbers
2. **Changelog**: Keep a CHANGELOG.md file
3. **Testing**: Test your package before publishing
4. **Documentation**: Maintain good README.md
5. **Keywords**: Use relevant keywords in package.json

## Package.json Configuration

Your package.json is already configured with:

- ✅ **Main entry point**: `dist/index.js`
- ✅ **TypeScript definitions**: `dist/index.d.ts`
- ✅ **Files whitelist**: Only `dist/` folder is published
- ✅ **Build script**: `prepublishOnly` runs before publishing
- ✅ **Keywords**: For better discoverability

## Troubleshooting

**Error: Package already exists**

- Choose a unique package name
- Check npmjs.com for name conflicts

**Error: Authentication required**

- Run `npm login` and enter your credentials

**Error: Build failed**

- Run `npm run build:lib` manually to see detailed errors
- Fix TypeScript/build issues before publishing

## Example Commands

```bash
# Login to NPM
npm login

# Check current user
npm whoami

# Check package name availability
npm view react-my-loading-components

# Build library
npm run build:lib

# Publish (first time)
npm publish

# Update and republish
npm version patch
npm publish
```

Remember to replace placeholder values with your actual information!
