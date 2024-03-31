import { handleOnDropOrders, handleOnDropAgressorsServer, handleOnDropCase, handleOnDropServices } from '@/actions'
import { handleOnDropUtil } from '@/lib/util'
import { type TuploaderItem } from '@/types'
import { type ViolenceCase, type Agressor, type Order, type Service } from '@prisma/client'
import { useState, useTransition } from 'react'

const useOndrop = (upLoadType: TuploaderItem) => {
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [isPending, startTransition] = useTransition()
  const handleOndrop = (files: File[]) => {
    handleOnDropUtil(files, upLoadType).then((resultFromFiles) => {
      startTransition(() => {
        if (upLoadType === 'agressors') {
          handleOnDropAgressorsServer(resultFromFiles as Agressor[])
        }
        if (upLoadType === 'cases') {
          handleOnDropCase(resultFromFiles as ViolenceCase[])
        }
        if (upLoadType === 'orders') {
          handleOnDropOrders(resultFromFiles as Order[])
        }
        if (upLoadType === 'services') {
          handleOnDropServices(resultFromFiles as Service[])
        }
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
