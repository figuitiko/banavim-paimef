import DropZoneFile from '@/components/share/file/DropZoneFile'
import { KEY_CASES } from '@/constants'

const page = async () => {
  return (
    <>
      <DropZoneFile upLoadType={KEY_CASES[0]} />
    </>
  )
}

export default page
