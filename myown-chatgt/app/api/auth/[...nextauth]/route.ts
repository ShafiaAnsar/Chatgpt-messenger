import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_clientId,
    //   clientSecret: process.env.GITHUB_clientSecret,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '' ,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY || ''
    }),
  ],
  // callbacks: {
  //   async session({ session, token, user }) {
  //     session.user.username = session?.user?.name
  //       .split(" ")
  //       .join("")
  //       .toLocaleLowerCase();

  //     session.user.uid = token.sub;

  //     return session;
  //   },
  // },
  secret: process.env.NEXTAUTH_SECRET_KEY
  
};

const handler = NextAuth(authOptions);

export {
  handler as GET, handler as POST,
  // }),
  authOptions
};