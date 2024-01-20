import React from 'react'
import { Avatar } from './Avatar'
import { Icons } from './Icons'
import { InputOption } from './InputOption'

export const PostForm = () => {
  return (
    <div className="flex flex-col border-2 rounded-lg shadow-md">
      <div className="flex justify-center gap-2 px-3 py-2 ">
        <Avatar imageUrl="/avatar.jpg" width={40} height={40} />
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
  )
}
