import { describe, it, expect } from 'vitest'
import { render, screen } from './test/utils'
import App from './App'

describe('App', () => {
  it('renders main heading', () => {
    render(<App />)
    expect(screen.getByText('My awesome app')).toBeInTheDocument()
  })

  it('includes theme toggle', () => {
    render(<App />)
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument()
  })

  it('applies theme colors', () => {
    render(<App />)
    const app = screen.getByTestId('app-root')
    expect(app).toHaveStyle({
      backgroundColor: '#f5f5f5',
      color: '#333333',
    })
  })
})
