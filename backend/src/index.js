const express = require('express')
const cors = require('cors')
require('dotenv').config()

const authRoutes = require('./routes/auth.routes')
const aiRoutes = require('./routes/ai.routes')
const uploadRoutes = require('./routes/upload.routes')
const itemsRoutes = require('./routes/items.routes')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }))
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/ai', aiRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/items', itemsRoutes)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Global error handler
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: err.message || 'Server error' })
})

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`)
})