import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fwqgrzotrjynaeuzfsqr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3cWdyem90cmp5bmFldXpmc3FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM0ODE1NjUsImV4cCI6MjAxOTA1NzU2NX0.H-XGK9rX1KwEt7knRwj3JiwVh0sVwV2pSVQNPHI_9pY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
