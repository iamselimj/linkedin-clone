import React from 'react'
import { Avatar } from './Avatar'
import { InputOption } from './InputOption'
import { Icons } from './Icons'
import { CreatePost } from './CreatePost'
import { Post } from './Post'

export const Feed = () => {
  return (
    <div className="w-3/5 px-5">
      {/* ADD POST SECTION */}
      <CreatePost />

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
      <div>
        <Post />
      </div>
    </div>
  )
}
