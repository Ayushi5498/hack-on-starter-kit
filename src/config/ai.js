const { GoogleGenerativeAI } = require('@google/generative-ai')
require('dotenv').config()

const gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

// Simple OpenAI wrapper without importing the package
// We'll use fetch directly to avoid import issues
async function callOpenAI(messages) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages,
      max_tokens: 1000
    })
  })
  const data = await response.json()
  return data.choices[0].message.content || ''
}

module.exports = { gemini, callOpenAI }