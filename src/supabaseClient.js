import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rvkpyduejmvfwuahehhb.supabase.co'
const supabaseKey = 'sb_publishable_ibF1KsY4r5KLYcgCYt3LlQ_2ekWlFNN'

export const supabase = createClient(supabaseUrl, supabaseKey)
