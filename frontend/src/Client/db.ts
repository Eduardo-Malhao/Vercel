import { createClient } from '@supabase/supabase-js';

const dbUrl = import.meta.env.VITE_API_DB_URL;
const dbKey = import.meta.env.VITE_API_DB_KEY;

export const dbClient = createClient(dbUrl, dbKey);