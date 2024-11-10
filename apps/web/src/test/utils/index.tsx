import React from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '../../contexts/theme'

// Create wrapper with theme provider
function TestWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}

// Custom render function
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
