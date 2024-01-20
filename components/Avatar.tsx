import { cn } from '@/lib/utilities'
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
    <Image
      src={imageUrl}
      alt="Profile picture"
      width={width}
      height={height}
      loading="lazy"
      className={cn('rounded-full', className)}
    />
  )
}
