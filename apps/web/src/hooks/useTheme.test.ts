import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useTheme } from './useTheme'
import { ThemeProvider } from '@/contexts/theme'

// Suppress React warning messages in test output
vi.mock('react', async () => {
  const actual = await vi.importActual('react')
  return {
    ...actual,
    useLayoutEffect: vi.fn().mockImplementation(fn => fn()),
  }
})

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('provides theme context', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    })

    expect(result.current).toBeDefined()
    expect(typeof result.current.toggleTheme).toBe('function')
    expect(typeof result.current.isDark).toBe('boolean')
    expect(result.current.theme).toBeDefined()
  })

  it('toggles theme', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    })

    expect(result.current.isDark).toBe(false)

    act(() => {
      result.current.toggleTheme()
    })

    expect(result.current.isDark).toBe(true)
  })

  it('provides light theme by default', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    })

    expect(result.current.isDark).toBe(false)
    expect(result.current.theme.colors).toBeDefined()
  })
})
