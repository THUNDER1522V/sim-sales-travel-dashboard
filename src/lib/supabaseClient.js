import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://uajeokilxbavzcoioetn.supabase.co'
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhamVva2lseGJhdnpjb2lvZXRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwMTc1MTksImV4cCI6MjEwMTU5MzUxOX0.3y0etVk472RIf8eaBGDqhVXt24fXR2oLhJvAMPrsnfU'

export const isSupabaseConfigured = () => {
  return Boolean(
    SUPABASE_URL &&
    SUPABASE_ANON_KEY &&
    SUPABASE_URL !== 'YOUR_SUPABASE_URL' &&
    SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY'
  )
}

export const supabase = isSupabaseConfigured()
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null

export const testSupabaseConnection = async () => {
  if (!supabase) {
    return {
      connected: false,
      error: 'Supabase client is not configured. Missing valid URL or Anon Key.',
      url: SUPABASE_URL || 'None',
      latencyMs: null,
    }
  }

  const startTime = performance.now()
  try {
    const { error } = await supabase.from('orders').select('count', { count: 'exact', head: true })
    const latencyMs = Math.round(performance.now() - startTime)
    
    if (error) {
      return {
        connected: false,
        error: error.message,
        url: SUPABASE_URL,
        latencyMs,
      }
    }

    return {
      connected: true,
      error: null,
      url: SUPABASE_URL,
      latencyMs,
    }
  } catch (err) {
    const latencyMs = Math.round(performance.now() - startTime)
    return {
      connected: false,
      error: err instanceof Error ? err.message : 'Unknown connection error',
      url: SUPABASE_URL,
      latencyMs,
    }
  }
}

export { SUPABASE_URL, SUPABASE_ANON_KEY }
