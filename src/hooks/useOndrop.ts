import { handleOnDropAgressorsServer } from '@/actions'
import { handleOnDropAgressors } from '@/lib/util'
import { useState, useTransition } from 'react'

const useOndrop = (upLoadType: string) => {
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [isPending, startTransition] = useTransition()
  const handleOndrop = (files: File[]) => {
    handleOnDropAgressors(files, upLoadType).then((resultFromFiles) => {
      startTransition(() => {
        handleOnDropAgressorsServer(resultFromFiles)
      })
    }).catch((err) => {
      setErrorMsg(err.message)
      setTimeout(() => {
        setErrorMsg('')
      }, 3000)
    })
  }
  return { handleOndrop, errorMsg, isPending }
}

export default useOndrop
