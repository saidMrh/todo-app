import { createClient } from "@supabase/supabase-js";

// const SUPABASE_URL = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
// const SUPABASE_KEY = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

const SUPABASE_KEY='https://okyivszntshlcgdwwget.supabase.co'
const SUPABASE_URL='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9reWl2c3pudHNobGNnZHd3Z2V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI4MjA0OTMsImV4cCI6MTk2ODM5NjQ5M30.Mxx_1wv9dqhkrSz6cLugI021QZQL6TWjzsiQP6orzI0'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);