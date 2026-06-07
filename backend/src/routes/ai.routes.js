const express = require('express')
const { verifyToken } = require('../middleware/auth')
const { askAI, analyzeText } = require('../services/ai.service')
const router = express.Router()

router.post('/ask', verifyToken, async (req, res) => {
  try {
    const { prompt, systemPrompt } = req.body
    const result = await askAI(prompt, systemPrompt)
    res.json({ result })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.post('/analyze', verifyToken, async (req, res) => {
  try {
    const { text, task } = req.body
    const result = await analyzeText(text, task)
    res.json({ result })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router