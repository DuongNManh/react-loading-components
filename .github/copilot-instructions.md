<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# React Loading Component Library

This is a React TypeScript component library for creating reusable loading spinners and indicators. The library is designed to be:

- **Lightweight and performant**
- **Highly customizable** with props for size, color, animation speed
- **TypeScript-first** with full type definitions
- **Tree-shakeable** for optimal bundle size
- **Accessible** with proper ARIA labels

## Development Guidelines

- Use React hooks and functional components
- Implement proper TypeScript types and interfaces
- Follow React best practices for component composition
- Ensure components are accessible (ARIA labels, keyboard navigation)
- Write comprehensive JSDoc comments for all public APIs
- Use CSS-in-JS or CSS modules for styling to avoid global style conflicts
- Export all components and types from the main index file

## Component Structure

- Keep components small and focused
- Use composition over inheritance
- Implement proper prop validation with TypeScript
- Support both controlled and uncontrolled usage patterns where applicable
- Provide sensible defaults for all optional props
