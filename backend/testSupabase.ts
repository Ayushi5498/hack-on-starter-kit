import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
dotenv.config()

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
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
    console.log('Profiles table exists. Rows found:', data.length)
  }
}

test()