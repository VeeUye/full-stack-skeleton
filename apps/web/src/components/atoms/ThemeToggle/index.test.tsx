import { describe, it, expect } from 'vitest'
import { render, screen } from '../../../test/utils'
import { ThemeToggle } from '.'

describe('ThemeToggle', () => {
  it('renders without crashing', () => {
    render(<ThemeToggle />)
    const button = screen.getByTestId('theme-toggle')
    expect(button).toBeInTheDocument()
  })

  it('displays correct initial theme icon', () => {
    render(<ThemeToggle />)
    const button = screen.getByTestId('theme-toggle')
    expect(button).toHaveTextContent('☀️')
  })
})
