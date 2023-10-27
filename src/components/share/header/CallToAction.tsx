import { ButtonPrimary } from '@/components/ui/Buttons'
import { COLORS } from '@/constants'
import React from 'react'

const CallToAction = () => {
  return (
    <div className='flex justify-center items-center'>
      <ButtonPrimary text='contacto' bgColor={COLORS.third} />
    </div>
  )
}

export default CallToAction
