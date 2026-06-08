const express = require('express')
const { verifyToken } = require('../middleware/auth')
const { getAll, create, remove } = require('../services/crud.service')
const router = express.Router()

router.get('/', verifyToken, async (req, res) => {
  try {
    const data = await getAll('items', { user_id: req.user.id })
    res.json({ data })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

router.post('/', verifyToken, async (req, res) => {
  try {
    const data = await create('items', { ...req.body, user_id: req.user.id })
    res.json({ data })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

router.delete('/:id', verifyToken, async (req, res) => {
  try {
    await remove('items', req.params.id)
    res.json({ success: true })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

module.exports = router