import { type AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db } from './prisma.client'
import { env } from '@/env.mjs'

export const NextAuthOptions: AuthOptions = {
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login',
    signOut: '/login',
    newUser: '/feed'
  },
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },

      async authorize(credentials, req) {
        const res = await fetch(`${env.NEXT_PUBLIC_APP_URL}/api/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password
          })
        })

        const user = await res.json()

        if (!user) {
          return null
        }

        return user
      }
    })
  ],
  callbacks: {}
}
