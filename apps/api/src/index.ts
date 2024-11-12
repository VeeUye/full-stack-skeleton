import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { initializeDatabase } from './config/database'
import 'reflect-metadata'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/health', async (_req, res) => {
  const dbConnected = await initializeDatabase()
  res.json({
    status: 'healthy',
    database: dbConnected ? 'connected' : 'disconnected',
  })
})

const port = process.env.PORT || 3000

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })
}

export default app
