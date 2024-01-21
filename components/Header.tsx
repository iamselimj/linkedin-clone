'use client'
import { Logo } from './Logo'
import { SearchBar } from './SearchBar'
import { MainNav } from './MainNav'
import { webConfig } from '@/config/web'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

export const Header = () => {
  const session = useSession()
  return (
    <header className="w-full z-50 sticky top-0 items-center border-b shadow-md bg-white">
      <div className="container mx-auto h-16 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Logo />
          <SearchBar />
        </div>

        {session.status == 'authenticated' ? (
          <div className="flex items-center">
            <MainNav items={webConfig.mainNav} />
            <Link
              href="/"
              className="hidden lg:inline-flex text-xs font-light text-center text-amber-700 underline hover:text-amber-900"
            >
              Get hired faster. <br />
              Try Premium <br />
              free.
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link
              href={'/login'}
              className="border border-black px-3 py-1.5 rounded-lg"
            >
              Login
            </Link>
            <Link
              href={'/register'}
              className="bg-linkedin text-white px-3 py-1.5 rounded-lg"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
