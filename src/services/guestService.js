import { supabase } from "../lib/supabase";

export async function createGuest(payload) {
  return await supabase
    .from("guests")
    .insert(payload)
    .select()
    .single();
}