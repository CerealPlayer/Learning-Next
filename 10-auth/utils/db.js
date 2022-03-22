import * as config from './config';
import { createClient } from '@supabase/supabase-js';

export default function getSupaClient() {
  return createClient(config.supaURL, config.supaKey);
}