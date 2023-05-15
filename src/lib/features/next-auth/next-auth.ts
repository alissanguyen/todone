import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { z } from "zod"

// const GOOGLE_CLIENT_ID = z
//     .string({
//         required_error: "GOOGLE_CLIENT_ID missing"
//     })
//     .parse(process.env.GOOGLE_CLIENT_ID)

// const GOOGLE_SECRET = z
//     .string({
//         required_error: "GOOGLE_SECRET missing"
//     })
//     .parse(process.env.GOOGLE_SECRET)


export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXT_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    // ...add more providers here
  ],
}
export const nextAuthHandler = NextAuth(authOptions)