import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const AuthOptions: NextAuthOptions = {
  pages: { signIn: "/auth/login" },// to make user redirect to this page when not logged in instead of default sign in page of next auth
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "hana@gmail.com" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "**********",
        },
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.API_BASE_URL}/api/v1/auth/signin`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (res.ok && data)
          return { id: "555", user: data.user, token: data.token };
        else throw new Error(data.message || "Invalid data");
      },
    }),
  ],
};
