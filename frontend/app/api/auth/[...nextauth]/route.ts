import NextAuth from "next-auth/next"
import { authOptions} from "@/app/utils/auth"

// Inside Auth, give options to generate tokens
const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}