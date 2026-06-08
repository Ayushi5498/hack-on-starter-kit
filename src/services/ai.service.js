const { gemini, callOpenAI } = require('../config/ai')

async function askAI(prompt, systemPrompt = '') {
  try {
    return await askGemini(prompt, systemPrompt)
  } catch (err) {
    console.warn('Gemini failed, trying OpenAI:', err.message)
    return await askOpenAI(prompt, systemPrompt)
  }
}

async function askGemini(prompt, systemPrompt = '') {
  const model = gemini.getGenerativeModel({ model: 'gemini-1.5-flash' })
  const fullPrompt = systemPrompt ? `${systemPrompt}\n\n${prompt}` : prompt
  const result = await model.generateContent(fullPrompt)
  return result.response.text()
}

async function askOpenAI(prompt, systemPrompt = '') {
  const messages = []
  if (systemPrompt) messages.push({ role: 'system', content: systemPrompt })
  messages.push({ role: 'user', content: prompt })
  return await callOpenAI(messages)
}

async function analyzeText(text, task) {
  const prompt = `
${task}

Text: ${text}

Respond ONLY with valid JSON. No explanation, no markdown backticks.
`
  const result = await askAI(prompt)
  try {
    return JSON.parse(result)
  } catch {
    return { raw: result }
  }
}

module.exports = { askAI, askGemini, askOpenAI, analyzeText }