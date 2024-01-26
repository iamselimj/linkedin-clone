import { db } from '@/lib/prisma.client'

interface RequestBody {
  username: string
  description: string
  image?: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  const post = await db.post.create({
    data: {
      username: body.username,
      description: body.description,
      image: body.image
    }
  })
}
