'use client'

import Link from 'next/link'
import React from 'react'

import { MainNavItem } from '@/types'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { Avatar } from './Avatar'

export const HeaderOption = ({ Icon, heading, href }: MainNavItem) => {
  const path = usePathname()
  return (
    <div
      className={cn(
        'm-0 px-3 py-1 text-gray-500 hover:text-black last:border-l-2',
        path == href ? 'text-black border-b-2 border-b-black' : ''
      )}
    >
      <Link href={href} className="flex flex-col items-center">
        {Icon ? (
          <Icon />
        ) : (
          <Avatar imageUrl="/avatar.jpg" width={28} height={28} />
        )}
        <span className="text-xs hidden lg:flex">{heading}</span>
      </Link>
    </div>
  )
}
