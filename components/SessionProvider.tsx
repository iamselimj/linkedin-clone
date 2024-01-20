'use client'

import { SessionProvider as NextAuthProvider } from 'next-auth/react'
import { ReactNode } from 'react'

interface SessionProviderProps {
  children: ReactNode
}

export const SessionProvider = ({ children }: SessionProviderProps) => {
  return <NextAuthProvider>{children}</NextAuthProvider>
}
