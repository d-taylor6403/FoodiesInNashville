import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    PROCESS.ENV.URL,
    PROCESS.ENV.API_KEY
    
)
export default (_, inject) => {
    inject('supabase', supabase)
}