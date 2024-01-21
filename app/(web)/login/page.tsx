import { LoginForm } from '@/components/LoginForm'
import Image from 'next/image'
import React from 'react'

export default function LoginPage() {
  return (
    <div className="container h-screen flex justify-center -mt-20">
      <div className="w-[380px] flex flex-col justify-center space-y-10">
        <Image
          src={'/LinkedInLogo.svg'}
          alt={''}
          width={200}
          height={1}
          className="mx-auto"
        />
        <LoginForm />
      </div>
    </div>
  )
}
