import DropZoneFile from '@/components/share/file/DropZoneFile'
import { FILE_NAMES, UPLOAD_ITEMS } from '@/constants'
import { type TuploaderItem } from '@/types'
import { permanentRedirect } from 'next/navigation'

const CasesPage = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug[0]
  if (!UPLOAD_ITEMS.includes(slug as TuploaderItem)) {
    permanentRedirect(`/dashboard/${UPLOAD_ITEMS[0]}`)
  }
  return (
    <div className='h-[50vh] flex flex-col gap-4'>
      <h1 className='text-2xl'>Sube los ficheros para { FILE_NAMES[slug as keyof typeof FILE_NAMES]}</h1>
      <DropZoneFile upLoadType={slug as TuploaderItem} />
    </div>
  )
}

export default CasesPage
