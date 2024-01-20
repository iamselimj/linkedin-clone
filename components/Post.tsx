import React from 'react'
import Image from 'next/image'
import { Avatar } from './Avatar'
import { Icons } from './Icons'

interface PostProps {
  author: string | null
  description: string | null
  imageUrl: string | null
}

export const Post = ({ author, description, imageUrl }: PostProps) => {
  return (
    <div className="w-full border-2 rounded-lg p-3 shadow-md mb-">
      {/* USER INFO */}
      <div className="flex">
        <Avatar imageUrl="/avatar.jpg" width={54} height={54} />
        <div className="flex flex-col">
          <div className="flex gap-2">
            <span>{author}</span>
            <span>Title</span>
          </div>
          <div className="flex gap-2 items-center">
            <span>Lifetime - date now minus timestamp</span>
            <Icons.world fontSize="small" className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* POST INFO */}
      {description ?? (
        <div className="">
          <p>{description}</p>
        </div>
      )}

      {imageUrl && (
        <div>
          <Image src={imageUrl} alt="" width={150} height={150} />
        </div>
      )}
    </div>
  )
}
