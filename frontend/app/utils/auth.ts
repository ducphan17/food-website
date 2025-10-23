import {NextAuthOptions, getServerSession} from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./connect";

// Instead of having the providers in the [...nextauth]/route.ts, we have it here
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      // listing the providers
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
};

// get user and status in server components and api
export const getAuthSessions = ()=>getServerSession(authOptions)