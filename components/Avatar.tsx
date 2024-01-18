import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface AvatarProps {
  imageUrl: string
  width: number
  height: number
  className?: string
}

export const Avatar = ({ imageUrl, width, height, className }: AvatarProps) => {
  return (
    <div className={cn('', className)}>
      <Image
        src={imageUrl}
        alt="Profile picture"
        width={width}
        height={height}
        loading="lazy"
        className="rounded-full border-2 border-white"
      />
    </div>
  )
}
