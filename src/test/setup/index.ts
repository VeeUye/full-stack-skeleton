/// <reference types="vitest" />
import { expect, vi, beforeAll, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom'

// Extend vitest's expect with jest-dom matchers
expect.extend(matchers)

// Mock localStorage
const storageMock = {
  getItem: vi.fn(() => null),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
  key: vi.fn(() => null),
}

beforeAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: storageMock,
    writable: true,
  })
})

afterEach(() => {
  cleanup()
})

export { storageMock }
