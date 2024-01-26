import { db } from '@/lib/prisma.client'
import * as bcrypt from 'bcrypt'

interface RequestBody {
  email: string
  profilePicture?: string
  username: string
  password: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  if (body.profilePicture == '') {
    body.profilePicture =
      'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
  }

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
