import "react-native-url-polyfill";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cdiirumvycfasaacyjef.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkaWlydW12eWNmYXNhYWN5amVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3MDQ1NjMsImV4cCI6MjA0MjI4MDU2M30.r36a620Us8goMHKPMcDUQwe9XowXe2UHTMnfrUTsEpI";

export const supabase = createClient(supabaseUrl, supabaseKey);