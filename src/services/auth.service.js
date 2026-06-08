const { supabase } = require('../config/supabase')
const jwt = require('jsonwebtoken')

async function signup(email, password, fullName) {
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    user_metadata: { full_name: fullName },
    email_confirm: true
  })
  if (error) throw new Error(error.message)

  const token = jwt.sign(
    { id: data.user.id, email: data.user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  )
  return { token, user: data.user }
}

async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  if (error) throw new Error(error.message)

  const token = jwt.sign(
    { id: data.user.id, email: data.user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  )
  return { token, user: data.user }
}

module.exports = { signup, login }