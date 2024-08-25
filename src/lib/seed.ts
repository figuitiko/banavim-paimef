"use server";
import bcrypt from 'bcrypt'
import { prisma } from './util'

export const seed = async () => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: 'admin@example.com'
    }
  })

  if (existingUser !== null) {
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
seed().then((user) => {
  process.exit(0)
}).catch((error) => {
  process.exit(1)
})
