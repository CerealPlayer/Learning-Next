import { supaURL, supaKey } from "./config";
import { createClient } from "@supabase/supabase-js";

export default function getDb() {
  return createClient(supaURL, supaKey);
}
