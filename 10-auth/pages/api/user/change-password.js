import { getSession } from "next-auth/client";
import getSupaClient from "../../../utils/db";
import { checkPass, hashPass } from "../../../utils/auth";

export default async function handler(req, res) {
  if (req.method !== "PATCH") return;
  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ message: "Not authenticated" });
    return;
  }

  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const supabase = getSupaClient();
  const { data, error } = await supabase
    .from("NextUsers")
    .select("*")
    .eq("email", userEmail);
  const userData = data[0];
  
  if (await checkPass(oldPassword, userData.pass)) {
    const hashNewPass = await hashPass(newPassword);
    const { data, error } = await supabase
    .from("NextUsers")
    .update({ email: hashNewPass })
    .eq("email", userEmail);
    if (data) {
      res.status(201).json({ message: "Password changed correctly" });
    }
  }
}
