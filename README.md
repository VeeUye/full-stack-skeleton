# Full-Stack Skeleton Template

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express-4.18.2-blue.svg)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.10-blue.svg)](https://vitejs.dev/)
[![Testing Library](https://img.shields.io/badge/Testing%20Library-16.0.1-blue.svg)](https://testing-library.com/)
[![Vitest](https://img.shields.io/badge/Vitest-2.1.4-blue.svg)](https://vitest.dev/)
[![Storybook](https://img.shields.io/badge/Storybook-8.4.2-blue.svg)](https://storybook.js.org/)
[![Deploy](https://github.com/veeuye/full-stack-skeleton/actions/workflows/deploy.yml/badge.svg)](https://github.com/veeuye/full-stack-skeleton/actions/workflows/deploy.yml)

A modern full-stack monorepo template with TypeScript, React, Express, Vite, and comprehensive testing setup. Features
atomic design principles, CSS Modules, and theme system.

## Project Structure

```
.
├── apps
│   ├── api             # Express backend
│   │   ├── src
│   │   │   ├── __tests__
│   │   │   └── index.ts
│   │   └── ...
│   └── web            # React frontend
│       ├── src
│       │   ├── components
│       │   ├── contexts
│       │   ├── hooks
│       │   └── styles
│       └── ...
├── packages           # Shared packages
│   ├── configs       # Shared configurations
│   └── shared       # Shared utilities/types
└── ...
```

## Features

### Frontend (Web)

- 🚀 **Vite** - Lightning fast build tool
- 📝 **TypeScript** - Type safety with strict mode
- 🎨 **CSS Modules** + **SASS** - Scoped styling with preprocessor
- 📚 **Storybook** - Component documentation and testing
- ✅ **Vitest** + **Testing Library** - Component and integration testing
- 🎭 **Theme System** - Dark/light theme with system preference detection

### Backend (API)

- 🛠 **Express** - Robust backend API
- 🔒 **TypeScript** - Type-safe backend development
- 🧪 **Vitest** - Unit and integration testing
- 🛡 **Helmet** - Security middleware
- 🌐 **CORS** - Cross-origin resource sharing

### Shared

- 📦 **pnpm** - Fast, disk space efficient package manager
- 🔍 **ESLint** + **Prettier** - Code quality tools
- 🪝 **Husky** + **lint-staged** - Git hooks
- 📋 **Semantic Commits** - Standardized commit messages
- 🚀 **GitHub Actions** - CI/CD pipeline

## Quick Start

```bash
# Clone the template
1. Click "Use this template" button above
2. Create your new repository from this template
3. Clone your new repository:

  git clone https://github.com/YOUR_USERNAME/YOUR_NEW_REPO.git
  
cd YOUR_NEW_REPO

# Install dependencies
pnpm install
pnpm dev              # Start all apps in parallel

```

## Available Scripts

### Workspace Scripts

Run these commands from the root directory to manage all apps:

```bash
# Development
pnpm dev              # Start all apps in parallel
pnpm --filter web dev # Start only frontend
pnpm --filter api dev # Start only backend

# Testing
pnpm test            # Test all apps
pnpm --filter web test
pnpm --filter api test

# Building
pnpm build           # Build all apps
pnpm --filter web build
pnpm --filter web preview
pnpm --filter api build


# Other
pnpm lint           # Lint all apps
pnpm type-check     # Type check all code
pnpm format         # Format all code
pnpm commit         # Interactive commit helper
```

### Available Commands

| Command           | Description               | Scope     |
|-------------------|---------------------------|-----------|
| `pnpm dev`        | Start development servers | All apps  |
| `pnpm build`      | Build for production      | All apps  |
| `pnpm test`       | Run tests                 | All apps  |
| `pnpm lint`       | Run linter                | All apps  |
| `pnpm type-check` | Check TypeScript          | All apps  |
| `pnpm format`     | Format code               | All apps  |
| `pnpm commit`     | Interactive commit helper | Root only |

### Frontend-specific Commands

Use `pnpm --filter web` followed by:

| Command      | Description             |
|--------------|-------------------------|
| `dev`        | Start Vite dev server   |
| `test`       | Run Vitest tests        |
| `test:watch` | Run tests in watch mode |
| `lint`       | Lint frontend code      |
| `storybook`  | Start Storybook server  |

### Backend-specific Commands

Use `pnpm --filter api` followed by:

| Command | Description              |
|---------|--------------------------|
| `dev`   | Start development server |
| `build` | Build for production     |
| `start` | Start production server  |
| `test`  | Run Vitest tests         |
| `lint`  | Lint backend code        |

### Examples

```bash
# Development examples
pnpm dev                  # Start everything
pnpm --filter web dev     # Only start frontend
pnpm --filter api dev     # Only start backend

# Testing examples
pnpm test                 # Test everything
pnpm --filter web test    # Only test frontend
pnpm --filter api test    # Only test backend

# Building examples
pnpm build                # Build everything
pnpm --filter web build   # Only build frontend
pnpm --filter api build   # Only build backend
```

Pro Tips:

- Use `--filter` to target specific apps
- Multiple filters can be applied: `pnpm --filter web --filter api test`
- Use `pnpm -r run <script>` to run a script in all packages that have it
- Add `-w` flag to run a script in the root workspace: `pnpm -w lint`

## Semantic Commits

This project uses an interactive commit script to ensure consistent, meaningful commit messages. The script guides you
through creating semantic commits that follow conventional commits specification.

### Using the Commit Script

```bash
# Instead of git commit, use:
pnpm commit
```

The script will:

1. Show available commit types with descriptions
2. Prompt you to select a type
3. Guide you through writing a clear commit message
4. Format and create the commit

### Commit Types

| Type       | Description                                         | Example                             |
|------------|-----------------------------------------------------|-------------------------------------|
| `feat`     | New features                                        | `feat: add user authentication`     |
| `fix`      | Bug fixes                                           | `fix: resolve button click handler` |
| `docs`     | Documentation only                                  | `docs: update API readme`           |
| `style`    | Code style/formatting                               | `style: format with prettier`       |
| `refactor` | Code changes that neither fix bugs nor add features | `refactor: simplify user model`     |
| `test`     | Adding or modifying tests                           | `test: add user registration tests` |
| `chore`    | Maintenance tasks, deps, etc                        | `chore: update dependencies`        |
| `perf`     | Performance improvements                            | `perf: optimize image loading`      |
| `ci`       | CI/CD changes                                       | `ci: add github actions workflow`   |
| `revert`   | Revert previous changes                             | `revert: remove faulty feature`     | 

## Testing Strategy

### Frontend Testing

- Uses Vitest with Testing Library
- Component tests with familiar jest-dom assertions
- Integration tests for key user flows
- Storybook for visual testing

```typescript
// Example component test
import { render, screen } from '@/test/utils'

test('renders component', () => {
  render(<MyComponent / >)
  expect(screen.getByText('Hello')).toBeInTheDocument()
})
```

### Backend Testing

- Uses Vitest for unit tests
- Supertest for API integration tests
- Isolated test database for data layer tests

```typescript
// Example API test
import request from 'supertest'
import app from '../index'

test('health check', async () => {
  const response = await request(app).get('/health')
  expect(response.status).toBe(200)
})
```

## Development Guidelines

### Component Structure

```
ComponentName/
├── index.tsx           # Component implementation
├── index.test.tsx      # Component tests
├── index.stories.tsx   # Storybook stories
└── styles.module.scss  # Scoped styles
```

## Development Mode

The template runs in a fully local development environment:

- Frontend: `http://localhost:5173`
- API: `http://localhost:3000`

## Production Deployment

### Frontend (GitHub Pages)

The frontend is automatically deployed to GitHub Pages when pushing to main.

To set up:

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"

To verify deployment:

```bash
# Build and preview frontend locally
pnpm build:web
pnpm --filter web preview
```

### API (Development)

Currently configured for local development only. For production deployment, you would need to:

1. Choose a hosting platform (Render, Railway, Heroku, etc.)
2. Update API URL in frontend environment
3. Configure CORS settings in backend

## License

MIT



