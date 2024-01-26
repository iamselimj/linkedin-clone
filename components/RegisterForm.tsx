'use client'

import { RegisterFormSchema } from '@/lib/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type FormData = z.infer<typeof RegisterFormSchema>

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: '',
      profilePicture: '',
      username: '',
      password: ''
    }
  })

  async function onSubmit(data: FormData) {
    const registerResult = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (registerResult.ok) {
      signIn('credentials', {
        username: data.username.toLowerCase(),
        password: data.password,
        callbackUrl: 'http://localhost:3000/feed'
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex flex-col gap-">
        <label id="email" className="">
          Email
        </label>
        <input
          id="email"
          type="text"
          className="p-1 border-2 rounded-lg"
          {...register('email')}
        />
      </div>

      <div className="flex flex-col gap-">
        <label id="profilePicture" className="">
          Profile Picture
        </label>
        <input
          id="profilePicture"
          type="text"
          className="p-1 border-2 rounded-lg"
          {...register('profilePicture')}
        />
      </div>

      <div className="flex flex-col">
        <label id="username" className="">
          Username
        </label>
        <input
          id="username"
          type="text"
          className="p-1 border-2 rounded-lg"
          {...register('username')}
        />
      </div>

      <div className="flex flex-col">
        <label id="password" className="">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="p-1 border-2 rounded-lg"
          {...register('password')}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-linkedin py-2 text-white rounded-lg"
      >
        Register
      </button>
    </form>
  )
}
