import { supabase } from "../../lib/supabase";

function TestSupabase() {
  async function handleTest() {
    const { data, error } = await supabase
      .from("guests")
      .insert({
        fullname: "Candy Test",
        phone: "243999999999",
        attendance: "accepted",
        message: "First Supabase test",
      });

    console.log("DATA:", data);
    console.log("ERROR:", error);
  }

  return (
    <button onClick={handleTest}>
      Test Supabase
    </button>
  );
}

export default TestSupabase;