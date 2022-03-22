import getSupaClient from "../../../utils/db";
import { hashPass } from "../../../utils/auth";

export default async function handler(req, res) {
  if (req.method !== "POST") return;
  const supabase = getSupaClient();
  const { email, name, pass } = req.body;

  if (!email || !email.includes("@") || !name || !pass || pass.length < 7) {
    res.status(422).json({ message: "Invalid credentials" });
    return;
  }

  const { data } = await supabase
    .from("NextUsers")
    .select("*")
    .eq("email", email);

  if (data.length > 0) {
    res.status(418).json({ message: "User already exists" });
    return;
  }

  const hashedPassword = await hashPass(pass);

  const { error } = await supabase.from("NextUsers").insert([
    {
      username: name,
      email: email,
      pass: hashedPassword,
    },
  ]);

  if (error) {
    res.status(500).json({
      message: "Something happened on our side, try again in a few minutes.",
    });
  } else {
    res.status(201).json({ message: "User created succesfully" });
  }
}
