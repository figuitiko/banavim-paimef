import DropZoneFile from '@/components/share/file/DropZoneFile'
import { getServerSession } from 'next-auth'

const page = async () => {
  const session = await getServerSession()
  console.log({ session })
  return (
    <>
      <DropZoneFile />
    </>
  )
}

export default page
