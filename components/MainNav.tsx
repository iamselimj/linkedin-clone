'use client'
import { MainNavItem } from '@/types'
import { useSession } from 'next-auth/react'
import { HeaderOption } from './HeaderOption'

interface MainNavProps {
  items: MainNavItem[]
}

export const MainNav = ({ items }: MainNavProps) => {
  const session = useSession()

  return (
    <nav className="flex items-center">
      {items.map((item, idx) => (
        <HeaderOption
          key={idx}
          Icon={item.Icon}
          Avatar={session.data?.user.image!}
          heading={item.heading}
          href={item.href}
        />
      ))}
    </nav>
  )
}
