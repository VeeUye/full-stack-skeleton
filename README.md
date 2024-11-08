# Modern React Project Template

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.10-blue.svg)](https://vitejs.dev/)
[![Testing Library](https://img.shields.io/badge/Testing%20Library-16.0.1-blue.svg)](https://testing-library.com/)
[![Storybook](https://img.shields.io/badge/Storybook-8.4.2-blue.svg)](https://storybook.js.org/)
[![Deploy](https://github.com/veeuye/vite-react-starter-project/actions/workflows/deploy.yml/badge.svg)](https://github.com/veeuye/vite-react-starter-project/actions/workflows/deploy.yml)

A modern React project template with TypeScript, Vite, Testing Library, and Storybook. Features atomic design
principles, CSS Modules, comprehensive testing setup, and theme toggle component.

## Features

- 🚀 **Vite** - Lightning fast build tool
- 📝 **TypeScript** - Type safety with strict mode
- 🎨 **CSS Modules** + **SASS** - Scoped styling with preprocessor
- 📚 **Storybook** - Component documentation and testing
- ✅ **Testing Library** - Component and integration testing
- 🎭 **Theme System** - Built-in dark/light theme switching with persistent storage
    - Elegant theme toggle component with smooth transitions
    - Type-safe theme configuration
    - Automatic system preference detection
    - Local storage persistence
- 📐 **Atomic Design** - Scalable component architecture
- 🔍 **ESLint** + **Prettier** - Code quality tools
- 🪝 **Husky** + **lint-staged** - Git hooks for quality control
- 📋 **Semantic Commits** - Standardized commit messages
- 🚀 **GitHub Actions** - Automated deployment to GitHub Pages

## Quick Start

```bash
# Clone the template
1. Click "Use this template" button above
2. Create your new repository from this template
3. Clone your new repository:

  git clone https://github.com/YOUR_USERNAME/YOUR_NEW_REPO.git
  
cd YOUR_NEW_REPO

# Install dependencies
npm install
# Start development server

npm run dev
```

## Available Scripts

| Command                 | Description               |
|-------------------------|---------------------------|
| `npm run dev`           | Start development server  |
| `npm run build`         | Build for production      |
| `npm test`              | Run tests                 |
| `npm run test:coverage` | Run tests with coverage   |
| `npm run storybook`     | Start Storybook server    |
| `npm run lint`          | Run ESLint                |
| `npm run format`        | Format code with Prettier |
| `npm run type-check`    | Check TypeScript types    |
| `npm run commit`        | Interactive commit helper |

## Deployment

This project uses GitHub Actions for automated deployment to GitHub Pages.

### Deployment Process

1. Push changes to the `main` branch
2. GitHub Actions automatically:
    - Builds the project
    - Runs tests
    - Deploys to GitHub Pages

### Manual Deployment

```bash
# Build locally
npm run build

# Preview build
npm run preview
```

View the deployment status in the [Actions tab](https://github.com/[your-username]/[repo-name]/actions)

## Project Structure

```
src/
├── components/        # Components following atomic design
│   ├── atoms/        # Basic building blocks
│   ├── molecules/    # Combinations of atoms
│   └── organisms/    # Complex components
├── contexts/         # React contexts
├── hooks/           # Custom React hooks
├── styles/          # Global styles and variables
└── test/            # Test utilities and setup
```

## Component Structure

```
ComponentName/
├── index.tsx           # Component implementation
├── index.test.tsx      # Component tests
├── index.stories.tsx   # Storybook stories
└── styles.module.scss  # Scoped styles
```

## Semantic Commits

The project uses an interactive commit script to ensure consistent commit messages.

### Usage

```bash
# Run the interactive commit script
npm run commit
```

The script will prompt you to:

1. Select a commit type (1-10)
2. Enter your commit message

### Available Types

| Type       | Description    | Example                             |
|------------|----------------|-------------------------------------|
| `feat`     | New feature    | `feat: add user authentication`     |
| `fix`      | Bug fix        | `fix: resolve button click event`   |
| `docs`     | Documentation  | `docs: update API references`       |
| `style`    | Code style     | `style: format using prettier`      |
| `refactor` | Code refactor  | `refactor: simplify error handling` |
| `test`     | Testing        | `test: add unit tests for auth`     |
| `chore`    | Maintenance    | `chore: update dependencies`        |
| `perf`     | Performance    | `perf: optimize image loading`      |
| `ci`       | CI/CD changes  | `ci: add github actions workflow`   |
| `revert`   | Revert changes | `revert: remove faulty feature`     |

## Theme System

A type-safe theme implementation combining CSS Modules with React Context.

### Usage

```tsx
import { ThemeToggle } from '@/components/atoms/ThemeToggle'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <ThemeToggle />
    </header>
  )
}
```

### Features

- 🎨 CSS Modules for scoped styling
- 💾 Theme persistence across sessions
- ⌨️ Keyboard accessible theme toggle
- 🔒 Type-safe theme values
- 🎭 Light/Dark mode with system preference detection

## License

MIT

---