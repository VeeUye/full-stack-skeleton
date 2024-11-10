import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '../../test/utils'
import { useTheme } from '../../hooks/useTheme'

const TestComponent: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()
  return (
    <button onClick={toggleTheme} data-testid="theme-toggle">
      Theme is {isDark ? 'dark' : 'light'}
    </button>
  )
}

describe('Theme', () => {
  it('provides theme context', () => {
    render(<TestComponent />)
    const button = screen.getByTestId('theme-toggle')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/Theme is light/i)
  })

  it('toggles theme when clicked', () => {
    render(<TestComponent />)
    const button = screen.getByTestId('theme-toggle')

    fireEvent.click(button)
    expect(button).toHaveTextContent(/Theme is dark/i)

    fireEvent.click(button)
    expect(button).toHaveTextContent(/Theme is light/i)
  })
})
