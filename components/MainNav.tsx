import { MainNavItem } from '@/types'
import React from 'react'
import { HeaderOption } from './HeaderOption'

interface MainNavProps {
  items: MainNavItem[]
}

export const MainNav = ({ items }: MainNavProps) => {
  return (
    <nav className="flex items-center">
      {items.map((item, idx) => (
        <HeaderOption
          key={idx}
          Icon={item.Icon}
          heading={item.heading}
          href={item.href}
        />
      ))}
    </nav>
  )
}
