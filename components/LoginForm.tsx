'use client'

import { LoginFormSchema } from '@/lib/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { z } from 'zod'

type FormData = z.infer<typeof LoginFormSchema>

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  })

  async function onSubmit(data: FormData) {
    const loginResult = await signIn('credentials', {
      username: data.username.toLowerCase(),
      password: data.password,
      callbackUrl: 'http://localhost:3000/feed'
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex flex-col gap-">
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
        Sign In
      </button>
    </form>
  )
}
