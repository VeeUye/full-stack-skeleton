import '@testing-library/jest-dom'
import { Window } from 'happy-dom'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// Set up happy-dom window
const window = new Window()
const document = window.document

// Extend the global object
Object.defineProperties(global, {
  window: {
    value: window,
    writable: true,
  },
  document: {
    value: document,
    writable: true,
  },
  navigator: {
    value: window.navigator,
    writable: true,
  },
})

// Add localStorage mock
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  key: vi.fn(),
  length: 0,
}

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
})

// Clean up after each test
afterEach(() => {
  cleanup()
  vi.clearAllMocks()
})
