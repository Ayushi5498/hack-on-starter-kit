const { supabase } = require('../config/supabase')

// Get all rows from any table
async function getAll(table, filters = {}) {
  let query = supabase.from(table).select('*')
  Object.entries(filters).forEach(([key, value]) => {
    query = query.eq(key, value)
  })
  const { data, error } = await query.order('created_at', { ascending: false })
  if (error) throw new Error(error.message)
  return data
}

// Get single row by id
async function getById(table, id) {
  const { data, error } = await supabase
    .from(table)
    .select('*')
    .eq('id', id)
    .single()
  if (error) throw new Error(error.message)
  return data
}

// Create new row
async function create(table, payload) {
  const { data, error } = await supabase
    .from(table)
    .insert(payload)
    .select()
    .single()
  if (error) throw new Error(error.message)
  return data
}

// Update row by id
async function update(table, id, payload) {
  const { data, error } = await supabase
    .from(table)
    .update(payload)
    .eq('id', id)
    .select()
    .single()
  if (error) throw new Error(error.message)
  return data
}

// Delete row by id
async function remove(table, id) {
  const { error } = await supabase
    .from(table)
    .delete()
    .eq('id', id)
  if (error) throw new Error(error.message)
  return { success: true }
}

module.exports = { getAll, getById, create, update, remove }