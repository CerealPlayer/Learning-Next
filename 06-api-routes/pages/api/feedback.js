import getDb from "../../utils/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const payload = req.body;

    const supabase = getDb();

    const { data, error } = await supabase
      .from("Entries")
      .insert([{ email: payload.email, enText: payload.text }]);

    if(!error) {
      res.status(200).json({ date: data[0].created_at });
    }
  }
}
