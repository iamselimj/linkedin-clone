import { z } from 'zod'

export const PostFormSchema = z.object({
  image: z.string().optional(),
  description: z.string().min(1)
})
