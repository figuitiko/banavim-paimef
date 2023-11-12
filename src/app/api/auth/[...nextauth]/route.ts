import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Usuario', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Contraseña', type: 'password' }
      },
      async authorize (credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        // console.log('credentials', credentials)
        // let user = { id: '1', name: 'frank freeman', email: 'ffreeman@example.com' }

        if (credentials === null) {
          return null
        }
        // const {username, password} = credentials
        const userFromDb = await prisma.user.findUnique({
          where: {
            email: credentials?.username
          }
        })
        if (userFromDb !== null && userFromDb.email !== credentials?.username && userFromDb.password !== undefined && credentials?.password !== undefined) {
          return null
        }
        const passwordMatch = await bcrypt.compare(credentials?.password as string, userFromDb?.password as string)
        if (!passwordMatch) {
          return null
        }
        const user = { name: userFromDb?.name as string, email: userFromDb?.email as string, id: userFromDb?.id.toString() as string }
        return user
      }
    })
  ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
