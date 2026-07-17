import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zpfozgmmmtbpszoedabl.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwZm96Z21tbXRicHN6b2VkYWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyNzg2ODcsImV4cCI6MjA5OTg1NDY4N30.bnUNfcKbRfM573FAkHFXFTQq_XkW1Yfwk9m-TgSp9Rk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('order', { ascending: true })

  if (error) throw error
  return data
}

export async function sendContactMessage({ name, email, subject, message }) {
  const { error } = await supabase
    .from('contact_messages')
    .insert([{ name, email, subject, message }])

  if (error) throw error
}

export function getPublicUrl(bucket, path) {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path)
  return data.publicUrl
}
