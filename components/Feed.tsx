import React from 'react'
import { Avatar } from './Avatar'
import { InputOption } from './InputOption'
import { Icons } from './Icons'

export const Feed = () => {
  return (
    <div className="w-3/5 px-5">
      {/* ADD POST SECTION */}
      <div className="flex flex-col border-2 rounded-lg shadow-md">
        <div className="flex justify-center gap-2 px-3 py-2 ">
          <Avatar imageUrl="/avatar.jpg" width={54} height={54} />
          <input
            className="border-2 rounded-full w-full pl-3"
            placeholder="Start a post"
          />
        </div>
        <div className="flex justify-evenly py-3">
          <InputOption Icon={Icons.image} heading="Media" color="#378EE9" />
          <InputOption Icon={Icons.event} heading="Event" color="#C37D16" />
          <InputOption
            Icon={Icons.article}
            heading="Write article"
            color="#E06746"
          />
        </div>
      </div>

      {/* DIVIDER SECTION */}
      <button className="w-full flex items-center text-xs py-3">
        <hr className="w-full mr-5" />
        <div className="flex">
          <p className="mr-1 text-gray-500 whitespace-nowrap">
            Select feed view:
          </p>
          <p className="font-medium mr-1 whitespace-nowrap">
            Most relevant first
          </p>
          <span>▼</span>
        </div>
      </button>

      {/* POST SECTION */}
    </div>
  )
}
