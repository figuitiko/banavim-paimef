"use server"
import { prisma } from '@/lib/util'

import bcrypt from 'bcryptjs';
import { createSession, deleteSession } from './session';
import { FormState, LoginFormSchema } from '@/types/definitions';

export async function login (
  state: FormState,
  formData: FormData
): Promise<FormState> {
  // 1. Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  })
  const errorMessage = { message: 'Invalid login credentials.' }

  // If any form fields are invalid, return early
  if (!(validatedFields.success)) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    }
  }

  // 2. Query the database for the user with the given email  
  const user = await prisma.user.findFirst({
    where: {
      email: validatedFields.data.email
    }
  })

  // If user is not found, return early
  if (!user) {
    return errorMessage
  }
  // 3. Compare the user's password with the hashed password in the database
  const passwordMatch = await bcrypt.compare(
    validatedFields.data.password,
    user.password
  )
  // If the password does not match, return early
  if (!passwordMatch) {
    return errorMessage
  }

  // 4. If login successful, create a session for the user and redirect
  const userId = user.id.toString()
  await createSession(userId)
}

export async function logout () {
  deleteSession()
}