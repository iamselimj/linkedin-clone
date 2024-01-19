import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db } from './prisma.client'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {},
  pages: {},
  providers: [],
  callbacks: {}
}
