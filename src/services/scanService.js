import { supabase } from "../lib/supabase";

export async function findGuestByUuid(uuid) {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("guest_uuid", uuid)
    .single();

  return { data, error };
}

export async function checkInGuest(id) {
  const { data, error } = await supabase
    .from("guests")
    .update({ checked_in: true })
    .eq("id", id)
    .select();

  return { data, error };
}

export async function getCheckedInCount() {
  const { count, error } = await supabase
    .from("guests")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("checked_in", true);

  return { count, error };
}