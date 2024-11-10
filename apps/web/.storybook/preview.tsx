import type { Preview } from '@storybook/react'
import { ThemeProvider } from '../src/contexts/theme'
import React from 'react'

// Decorator for theming
const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
)

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
