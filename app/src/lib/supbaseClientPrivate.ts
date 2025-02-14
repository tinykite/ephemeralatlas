import { createClient } from '@supabase/supabase-js';
import { PRIVATE_SUPABASE_URL } from '$env/static/private';
import { PRIVATE_SUPABASE_KEY } from '$env/static/private';

export const supabasePrivate = createClient(PRIVATE_SUPABASE_URL, PRIVATE_SUPABASE_KEY);
