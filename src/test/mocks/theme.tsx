import React from 'react'
import { vi } from 'vitest'
import { ThemeContext } from '../../contexts/theme/ThemeContext'
import type { Theme } from '../../contexts/theme/types'

// Define base theme types inline to avoid circular dependencies
const lightTheme = {
  colors: {
    primary: '#0066cc',
    secondary: '#666666',
    background: '#f5f5f5',
    surface: '#ffffff',
    text: {
      primary: '#333333',
      secondary: '#666666',
      inverse: '#ffffff',
    },
    border: '#cccccc',
  },
} as const

const darkTheme = {
  colors: {
    primary: '#66b3ff',
    secondary: '#999999',
    background: '#1a1a1a',
    surface: '#2d2d2d',
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
      inverse: '#333333',
    },
    border: '#404040',
  },
} as const

interface MockThemeProviderProps {
  theme?: Theme
  isDark?: boolean
  children: React.ReactNode
}

export const mockThemeContext = {
  theme: lightTheme,
  isDark: false,
  toggleTheme: vi.fn(),
}

export const MockThemeProvider: React.FC<MockThemeProviderProps> = ({
  theme = lightTheme,
  isDark = false,
  children,
}) => {
  const value = {
    theme,
    isDark,
    toggleTheme: vi.fn(),
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const MockLightThemeProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => (
  <MockThemeProvider theme={lightTheme} isDark={false}>
    {children}
  </MockThemeProvider>
)

export const MockDarkThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <MockThemeProvider theme={darkTheme} isDark={true}>
    {children}
  </MockThemeProvider>
)

export const createMockTheme = (overrides?: Partial<Theme>): Theme => ({
  ...lightTheme,
  ...overrides,
})

export const createMockThemeContext = (
  overrides?: Partial<typeof mockThemeContext>
) => ({
  ...mockThemeContext,
  ...overrides,
})

export { lightTheme, darkTheme }
