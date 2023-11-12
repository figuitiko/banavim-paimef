import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const seed = async () => {
  const password = await bcrypt.hash('zaq123', 10)
  const user = await prisma.user.create({
    data: {
      email: 'ffreeman@example.com',
      name: 'Fred Freeman',
      password
    }
  })
  console.log({ user })
  return user
}
