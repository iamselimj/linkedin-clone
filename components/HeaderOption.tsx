'use client'

import Link from 'next/link'
import React from 'react'

import { MainNavItem } from '@/types'
import { cn } from '@/lib/utilities'
import { usePathname } from 'next/navigation'
import { Avatar } from './Avatar'
import { signOut } from 'next-auth/react'

export const HeaderOption = ({ Icon, heading, href }: MainNavItem) => {
  const path = usePathname()
  return (
    <div
      className={cn(
        'm-1 py-2 px-3 text-gray-500 hover:text-black last:border-l-2 last:hidden last:md:inline-flex',
        path == href ? 'text-black border-b-2 border-b-black' : ''
      )}
    >
      <Link href={href} className="flex flex-col items-center">
        {Icon ? (
          <Icon />
        ) : (
          <button className="" onClick={() => signOut()}>
            <Avatar
              imageUrl="/avatar.jpg"
              width={28}
              height={28}
              className=""
            />
          </button>
        )}
        <span className="text-xs hidden lg:flex">{heading}</span>
      </Link>
    </div>
  )
}
