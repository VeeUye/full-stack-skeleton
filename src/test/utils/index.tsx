import React from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '../../contexts/theme'

function render(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider>{children}</ThemeProvider>
  }

  return rtlRender(ui, {
    wrapper: Wrapper,
    ...options,
  })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }
