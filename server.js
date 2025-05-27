import express from 'express'
import helmet from 'helmet'
import { db, initializeDatabase } from './database.js'
import process from 'process'
import postsRouter from './routes/postsRouter.js'
import formRouter from './routes/formRouter.js'

const app = express()
// Trust the proxy if behind one (important for correct IP detection)
app.set('trust proxy', 1)
// Security headers
app.use(helmet())
// Body parser
app.use(express.json())
// Serve static files (not rate limited) - Should I be adding a rate limit here? 
app.use('/', express.static('dist'))
// Registering routes
app.use('/api/form/', formRouter)
app.use('/api/posts/', postsRouter)

// GET homepage
app.get('/', (req, res) => {
  res.send('mamati')
})

initializeDatabase()
// Server start
const PORT = 5000
app.listen(PORT, () => {
  console.log(`-----------------------------`)
  console.log(`Backend running on port ${PORT}`)
  console.log(`-----------------------------`)
})
process.on('SIGINT', () => {
  db.close()
  process.exit(0)
})

process.on('SIGTERM', () => {
  db.close()
  process.exit(0)
})