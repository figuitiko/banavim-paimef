import { createAgressorRecords } from '@/lib/util'
import { type NextRequest, type NextResponse } from 'next/server'

const handler = async (
  req: NextRequest,
  res: NextResponse
) => {
  try {
    const { data } = await req.json()
    const newData = createAgressorRecords(data)
    return new Response(JSON.stringify(newData), { status: 201 })
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify(error), { status: 500 })
  }
}

export { handler as GET, handler as POST }
