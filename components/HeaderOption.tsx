'use client'

import Link from 'next/link'

import { cn } from '@/lib/utilities'
import { MainNavItem } from '@/types'
import { signOut, useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { Avatar } from './Avatar'

export const HeaderOption = ({ Icon, heading, href }: MainNavItem) => {
  const path = usePathname()
  const session = useSession()

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
          <button onClick={() => signOut()}>
            <Avatar
              imageUrl={session.data?.user.image!}
              alt={'User profile picture'}
              width={26}
              height={1}
              className="rounded-full"
            />
          </button>
        )}

        <span className="text-xs hidden lg:flex">{heading}</span>
      </Link>
    </div>
  )
}
