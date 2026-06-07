const express = require('express')
const { signup, login } = require('../services/auth.service')
const router = express.Router()

router.post('/signup', async (req, res) => {
  try {
    const { email, password, fullName } = req.body
    const result = await signup(email, password, fullName)
    res.json(result)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const result = await login(email, password)
    res.json(result)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

module.exports = router