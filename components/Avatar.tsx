import { cn } from '@/lib/utilities'
import Image from 'next/image'

interface AvatarProps {
  imageUrl: string
  alt: string
  width: number
  height: number
  className?: string
}

export const Avatar = ({
  imageUrl,
  alt,
  width,
  height,
  className
}: AvatarProps) => {
  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={cn('', className)}
    />
  )
}
