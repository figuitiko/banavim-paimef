'use client'
import { APP_MESSAGES } from '@/constants'
import useOndrop from '@/hooks/useOndrop'
import { type DropzoneProps } from '@/types'
import Dropzone from 'react-dropzone'

const DropZoneFile = ({ upLoadType }: DropzoneProps) => {
  const { isPending, errorMsg, handleOndrop } = useOndrop(upLoadType)
  if (isPending) return <p>loading...</p>
  if (errorMsg !== '') return <p>{errorMsg}</p>
  return (
    <Dropzone onDrop={handleOndrop}>
      {({ getRootProps, getInputProps }) => (
        <section className='flex p-8 justify-center w-full bg-slate-300 opacity-4 h-full rounded-xl'>
          <div {...getRootProps()} className='flex w-full justify-center'>
            <input {...getInputProps()} />
            <p className='text-primary'>{APP_MESSAGES.DROPZONE_DROP}</p>
          </div>
        </section>
      )}
    </Dropzone>
  )
}

export default DropZoneFile
