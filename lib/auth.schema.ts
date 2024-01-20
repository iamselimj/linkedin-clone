import { z } from 'zod'

export const LoginFormSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(3).max(50)
})

export const RegisterFormSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(3).max(50)
})
