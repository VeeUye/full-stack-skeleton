import { DataSource, QueryFailedError } from 'typeorm'
import { config } from 'dotenv'

config()

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'fullstack_dev',
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV !== 'production',
  entities: [],
  subscribers: [],
  migrations: [],
})

export const initializeDatabase = async () => {
  try {
    await AppDataSource.initialize()
    console.log('Database connected successfully')
    return true
  } catch (error) {
    if (error instanceof QueryFailedError) {
      console.error('Database query failed:', {
        message: error.message,
        query: error.query,
        parameters: error.parameters,
      })
    } else {
      console.error('Database connection failed:', {
        message: (error as Error).message,
      })
    }
    return false
  }
}
