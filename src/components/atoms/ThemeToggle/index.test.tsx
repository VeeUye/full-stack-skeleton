import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@/test/utils'
import { ThemeToggle } from '.'
import styles from './styles.module.scss'

describe('ThemeToggle', () => {
  it('renders with initial light theme state', () => {
    render(<ThemeToggle />)

    const toggle = screen.getByTestId('theme-toggle')
    expect(toggle).toHaveClass(styles.toggle)
    expect(toggle).not.toHaveClass(styles.dark)
    expect(toggle).toHaveAttribute('aria-label', 'Switch to dark mode')
  })

  it('toggles theme when clicked', () => {
    render(<ThemeToggle />)

    const toggle = screen.getByTestId('theme-toggle')
    fireEvent.click(toggle)

    expect(toggle).toHaveClass(styles.dark)
    expect(toggle).toHaveAttribute('aria-label', 'Switch to light mode')
  })

  it('renders correct icon for current theme', () => {
    render(<ThemeToggle />)

    // Light theme initially
    expect(screen.getByText('☀️')).toBeInTheDocument()
    expect(screen.queryByText('🌙')).not.toBeInTheDocument()

    // Switch to dark theme
    fireEvent.click(screen.getByTestId('theme-toggle'))

    expect(screen.getByText('🌙')).toBeInTheDocument()
    expect(screen.queryByText('☀️')).not.toBeInTheDocument()
  })
})
