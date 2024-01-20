import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src={'/LinkedInIcon.svg'} alt="" width={35} height={35} />
    </Link>
  )
}
