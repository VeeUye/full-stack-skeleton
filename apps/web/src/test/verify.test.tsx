import { describe, it, expect } from 'vitest'
import { render, screen } from './utils'

describe('Test Environment', () => {
  it('can render simple components', () => {
    render(<div data-testid="test">Test Content</div>)
    expect(screen.getByTestId('test')).toBeInTheDocument()
  })

  it('has theme context working', () => {
    render(<div data-testid="themed">Themed Content</div>)
    const element = screen.getByTestId('themed')
    expect(element).toBeInTheDocument()
  })
})
