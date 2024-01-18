import React from 'react'
import Image from 'next/image'
import { Avatar } from './Avatar'

export const Post = () => {
  return (
    <div className="w-full border-2 rounded-lg px-3 py-2">
      <div className="flex">
        <Avatar imageUrl="/avatar.jpg" width={54} height={54} />
        <div className="flex flex-col">
          <div className="flex gap-2">
            <span>Username</span>
            <span>Title</span>
          </div>
          <div>Description</div>
          <div className="flex gap-2">
            <span>Timestamp</span>
            <span>Icon</span>
          </div>
        </div>
      </div>
      <div>
        <p>Post Body</p>
      </div>
      <div>
        <p>Post Image</p>
        <Image src="" alt="" width={150} height={150} />
      </div>
      <div>Likes</div>
      <div className="border-t">Post Options</div>
    </div>
  )
}
