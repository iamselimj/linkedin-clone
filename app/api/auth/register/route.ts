import { db } from '@/lib/prisma.client'
import * as bcrypt from 'bcrypt'

interface RequestBody {
  email: string
  username: string
  password: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  const user = await db.user.create({
    data: {
      email: body.email,
      userName: body.username,
      password: await bcrypt.hash(body.password, 10)
    }
  })

  const { password, ...userWithoutPassword } = user

  return new Response(JSON.stringify(userWithoutPassword))
}
