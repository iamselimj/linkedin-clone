'use client'

import React from 'react'
import { CreatePost } from './CreatePost'

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
      <div className="h-full text-center text-lg text-gray-600 items-center">
        <p>There is no posts yet.</p>
      </div>
    </div>
  )
}
