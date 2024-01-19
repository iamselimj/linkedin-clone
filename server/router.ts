import { db } from '@/lib/prisma.client'
import { publicProcedure, router } from './trpc'

export const appRouter = router({
  getPosts: publicProcedure.query(async () => {
    return db.post.findMany()
  })
})

export type AppRouter = typeof appRouter
