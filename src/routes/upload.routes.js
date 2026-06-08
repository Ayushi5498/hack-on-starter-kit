const express = require('express')
const multer = require('multer')
const { verifyToken } = require('../middleware/auth')
const { uploadFile } = require('../services/storage.service')
const router = express.Router()

const upload = multer({ storage: multer.memoryStorage() })

router.post('/', verifyToken, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file provided' })
    const result = await uploadFile(
      'uploads',
      req.user.id,
      req.file.buffer,
      req.file.originalname,
      req.file.mimetype
    )
    res.json(result)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router