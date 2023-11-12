import { seed } from '@/lib/seed'
import { NextResponse } from 'next/server'

export const GET = async (req: Request) => {
  const user = await seed()
  return NextResponse.json({ user })
}
