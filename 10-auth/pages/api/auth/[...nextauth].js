import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import getSupaClient from "../../../utils/db";
import { checkPass } from "../../../utils/auth";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const supabase = getSupaClient();

        const { data } = await supabase
          .from("NextUsers")
          .select("*")
          .eq("email", credentials.email);

        if (data.length === 0) {
          throw new Error("No user found!");
        }

        const passIsValid = await checkPass(credentials.pass, data[0].pass);

        if (!passIsValid) {
          throw new Error("Could not log in");
        }

        return { email: data[0].email };
      },
    }),
  ],
});
