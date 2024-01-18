import { Logo } from './Logo'
import { SearchBar } from './SearchBar'
import { MainNav } from './MainNav'
import { webConfig } from '@/config/web'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="w-full sticky top-0 items-center border-b backdrop-blur-sm shadow-md">
      <div className="container mx-auto h-16 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Logo />
          <SearchBar />
        </div>

        <div className="flex items-center">
          <MainNav items={webConfig.mainNav} />
          <Link
            href="/"
            className="hidden md:inline-flex text-xs font-light text-center text-amber-700 underline hover:text-amber-900"
          >
            Get hired faster. <br />
            Try Premium <br />
            free.
          </Link>
        </div>
      </div>
    </header>
  )
}
