const { supabase } = require('../config/supabase')

async function uploadFile(bucket, userId, fileBuffer, fileName, mimeType) {
  const ext = fileName.split('.').pop()
  const path = `${userId}/${Date.now()}.${ext}`

  const { error } = await supabase.storage
    .from(bucket)
    .upload(path, fileBuffer, { contentType: mimeType, upsert: true })

  if (error) throw new Error(error.message)

  const { data } = supabase.storage.from(bucket).getPublicUrl(path)
  return { url: data.publicUrl, path }
}

async function deleteFile(bucket, path) {
  const { error } = await supabase.storage.from(bucket).remove([path])
  if (error) throw new Error(error.message)
  return { success: true }
}

function getFileUrl(bucket, path) {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path)
  return data.publicUrl
}

module.exports = { uploadFile, deleteFile, getFileUrl }