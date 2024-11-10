import { describe, it, expect } from 'vitest'
import { render, screen } from './test/utils'
import App from './App'

describe('App', () => {
  it('renders main heading', () => {
    render(<App />)

    const heading = screen.getByText('My awesome app')
    expect(heading).toBeInTheDocument()
  })

  it('includes theme toggle', () => {
    render(<App />)

    const themeToggle = screen.getByTestId('theme-toggle')
    expect(themeToggle).toBeInTheDocument()
  })

  it('applies initial theme correctly', () => {
    render(<App />)

    const app = screen.getByTestId('app-root')
    const styles = window.getComputedStyle(app)
    expect(styles.backgroundColor).not.toBe('')
  })
})
