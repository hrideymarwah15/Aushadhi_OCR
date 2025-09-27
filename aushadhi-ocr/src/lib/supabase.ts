import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Medicine {
  id: string
  brand_name: string
  generic_name: string
  manufacturer: string
  created_at: string
  updated_at: string
}

export interface ScanResult {
  id: string
  user_id: string
  extracted_text: string
  matched_medicines: Medicine[]
  confidence_score: number
  is_suspicious: boolean
  created_at: string
}

export interface UserScan {
  id: string
  user_id: string
  scan_result_id: string
  created_at: string
}