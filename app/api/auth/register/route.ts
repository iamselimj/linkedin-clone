import { db } from '@/lib/prisma.client'
import * as bcrypt from 'bcrypt'
import { signIn } from 'next-auth/react'

interface RequestBody {
  email: string
  profilePicture?: string
  username: string
  password: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  const user = await db.user.create({
    data: {
      email: body.email,
      avatar: body.profilePicture,
      username: body.username,
      password: await bcrypt.hash(body.password, 10)
    }
  })

  const { password, ...userWithoutPassword } = user

  return new Response(JSON.stringify(userWithoutPassword))
}
