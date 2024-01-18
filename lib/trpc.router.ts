import { db } from './prisma.client'
import { publicProcedure, router } from './trpc.server'

export const appRouter = router({
  getAllPosts: publicProcedure.query(async () => {
    const posts = db.post.findMany()
    return posts
  })
})

export type AppRouter = typeof appRouter
