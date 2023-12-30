import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const seed = async () => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: 'admin@example.com'
    }
  })

  if (existingUser !== null) {
    console.log('User already exists')
    return existingUser
  }
  const password = await bcrypt.hash('zaq123', 10)
  const user = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin',
      password
    }
  })
  return user
}
