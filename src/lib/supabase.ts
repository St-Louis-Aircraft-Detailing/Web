import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  // Fails loudly in dev/build rather than silently sending requests to
  // "undefined" — if you see this, VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY
  // aren't set (locally: .env.local; on Render: the Environment tab).
  console.warn(
    'Supabase env vars are missing — the contact form will not be able to submit.',
  )
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '')
