import { getServerSession } from 'next-auth'

const page = async () => {
  const session = await getServerSession()
  console.log({ session })
  return (
    <>
      hello
    </>
  )
}

export default page
