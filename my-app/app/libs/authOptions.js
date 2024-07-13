import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import db from "@/app/libs/db";
import {compare} from "bcrypt";


const authOptions = {
    adapter:PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Check if user credentials are not empty
        if (!credentials?.email || !credentials?.password) {
            console.log("No Inputs");
          return null;
        }
        //Check if user exists
        const existingUser = await db.user.findUnique({
          where: { email: credentials.email },
        });
        if (!existingUser) {
            console.log("No user found");
          return;
        }
        //Check if Password is correct
        const passwordMatch = await compare(
          credentials.password,
          existingUser.password
        );
        if (!passwordMatch) {
            console.log("Wrong Password");
          return null;
        }
       const user= {
          id: existingUser.id,
          name: existingUser.name,
          email: existingUser.email,
        };
        console.log(user);
        return user;
      },
    }),
  ],
};

export { authOptions };