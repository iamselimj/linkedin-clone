import React from 'react'
import Image from 'next/image'
import { Avatar } from './Avatar'

export const Post = () => {
  return (
    <div className="w-full border-2 rounded-lg px-3 py-2 shadow-md">
      <div className="flex">
        <Avatar imageUrl="/avatar.jpg" width={54} height={54} />
        <div className="flex flex-col">
          <div className="flex gap-2">
            <span>Username</span>
            <span>Title</span>
          </div>
          <div>Description</div>
          <div className="flex gap-2">
            <span>Lifetime - date now minus timestamp</span>
            <span>Icon - public or private</span>
          </div>
        </div>
      </div>
      <div>
        <p>Post Body</p>
      </div>
      <div>
        <p>Post Image</p>
        <Image src="/avatar.jpg" alt="" width={150} height={150} />
      </div>
      <div>Likes</div>
      <div className="border-t">Post Options</div>
    </div>
  )
}
