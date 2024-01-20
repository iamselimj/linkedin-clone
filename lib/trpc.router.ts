import { db } from '@/lib/prisma.client'
import { publicProcedure, router } from './trpc.server'

export const appRouter = router({
  getPosts: publicProcedure.query(async () => {
    return await db.post.findMany()
  })
})

export type AppRouter = typeof appRouter
