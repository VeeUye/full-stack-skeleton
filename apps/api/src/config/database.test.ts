import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest'
import { AppDataSource, initializeDatabase } from './database'

describe('Database Configuration', () => {
  beforeAll(() => {
    vi.mock('typeorm', () => ({
      DataSource: vi.fn().mockImplementation(() => ({
        initialize: vi.fn().mockResolvedValue(true),
      })),
    }))
  })

  afterAll(() => {
    vi.clearAllMocks()
  })

  it('initializes database connection', async () => {
    const result = await initializeDatabase()
    expect(result).toBe(true)
  })

  it('handles connection errors gracefully', async () => {
    vi.mocked(AppDataSource.initialize).mockRejectedValueOnce(
      new Error('Connection failed')
    )
    const result = await initializeDatabase()
    expect(result).toBe(false)
  })
})
