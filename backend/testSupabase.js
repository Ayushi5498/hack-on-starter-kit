const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

async function test() {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .limit(1)

  if (error) {
    console.log('❌ Connection FAILED:', error.message)
  } else {
    console.log('✅ Supabase Connected Successfully!')
    console.log('Rows found:', data.length)
  }
}

test()