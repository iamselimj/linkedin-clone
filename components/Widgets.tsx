import Link from 'next/link'
import React from 'react'
import { Avatar } from './Avatar'
import { Icons } from './Icons'

export const Widgets = () => {
  const users = [
    {
      imageUrl: '/avatar.jpg',
      userName: 'GreatFrontEnd',

      domain: 'Computer Software'
    },
    {
      imageUrl: '/avatar.jpg',
      userName: 'EVERECITY',

      domain: 'Real Estate'
    },
    {
      imageUrl: '/avatar.jpg',
      userName: 'Daniel Moka',
      domain: 'Test-Driven Development (TDD)'
    }
  ]

  const UsersList = () => {
    return users.map((user, idx) => (
      <div className="py-2">
        <div className="flex gap-1">
          <Avatar imageUrl={user.imageUrl} width={46} height={46} />
          <div className="flex flex-col">
            <h3 className="font-medium">{user.userName}</h3>
            <div className="flex text-xs text-gray-500">
              <span>{user.domain}</span>
            </div>
          </div>
        </div>
        <div className="w-full flex ml-12">
          <button className="border flex items-center border-gray-500 px-3 py-1 rounded-full font-medium text-gray-600 text-sm">
            <Icons.plus fontSize={'small'} />
            Follow
          </button>
        </div>
      </div>
    ))
  }

  return (
    <div className="sticky w-1/4 flex flex-col">
      <div className="flex flex-col border-2 rounded-lg shadow-md">
        <div className="p-2 flex justify-between items-center w-full text-sm font-medium border-b">
          <span>Add to your feed</span>
          <Icons.info fontSize="inherit" />
        </div>

        <div className="p-2">
          <UsersList />
        </div>
        <div className="cursor-pointer border-t px-2 py-3 text-center text-sm text-gray-500 font-medium hover:text-gray-600">
          <Link href="">View all recommandations </Link>
        </div>
      </div>
    </div>
  )
}