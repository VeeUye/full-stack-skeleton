import { createContext } from 'react'
import type { Theme } from './types'

interface ThemeContextType {
  theme: Theme
  isDark: boolean
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)
