'use client'

import React from 'react'
import { PostForm } from './PostForm'
import { trpc } from '@/lib/trpc.client'
import { Post } from './Post'

export const Feed = () => {
  const posts = trpc.getPosts.useQuery()

  return (
    <div className="w-full h-full lg:w-3/5 md:pl-5 lg:pr-5 mt-3 md:mt-0">
      {/* ADD POST SECTION */}
      <PostForm />

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

      <div className="w-full h-full ">
        {posts.data?.map((post) => {
          return (
            <Post
              key={post.id}
              author={post.userName}
              description={post.description}
              imageUrl={post.image}
            />
          )
        })}
      </div>
    </div>
  )
}
