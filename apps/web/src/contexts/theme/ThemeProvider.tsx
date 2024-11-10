import React, { useState, useEffect } from 'react'
import { ThemeContext } from './ThemeContext'
import { lightTheme, darkTheme } from './types'

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('theme')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDark))
  }, [isDark])

  const toggleTheme = () => setIsDark((prev: any) => !prev)

  const value = {
    theme: isDark ? darkTheme : lightTheme,
    isDark,
    toggleTheme,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
