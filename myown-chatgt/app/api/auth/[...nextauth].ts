import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET_KEY!
        })
    ],
    // callbacks: {
    //     async session(session, token) {
    //         return {
    //           ...session,
    //             user: {
    //               ...session.user,
    //                 id: session.user.sub
    //             }
    //         }
    //     }
    // }
}

export default NextAuth(authOptions)