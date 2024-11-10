import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { ThemeProvider } from '@/contexts/theme'
import type { RenderOptions } from '@testing-library/react'

// Custom wrapper that provides theme context
function TestWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}

// Custom render method
function render(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return rtlRender(ui, {
    wrapper: TestWrapper,
    ...options,
  })
}

// Re-export everything
export * from '@testing-library/react'
export { render }
