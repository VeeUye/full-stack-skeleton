import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '../../../test/utils'
import { Button } from './index.tsx'

import styles from './styles.module.scss'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('can be disabled', () => {
    const handleClick = vi.fn()
    render(
      <Button disabled onClick={handleClick}>
        Click me
      </Button>
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(handleClick).not.toHaveBeenCalled()
    expect(button).toBeDisabled()
  })

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Button variant="primary">Button</Button>)
    expect(screen.getByRole('button')).toHaveClass(styles.primary)

    rerender(<Button variant="secondary">Button</Button>)
    expect(screen.getByRole('button')).toHaveClass(styles.secondary)
  })

  it('combines custom className with default classes', () => {
    const customClass = 'custom-class'
    render(<Button className={customClass}>Button</Button>)

    const button = screen.getByRole('button')
    expect(button).toHaveClass(styles.button)
    expect(button).toHaveClass(styles.primary)
    expect(button).toHaveClass(customClass)
  })
})
