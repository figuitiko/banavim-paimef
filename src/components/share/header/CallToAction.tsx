'use client'
import { ButtonPrimary } from '@/components/ui/Buttons'
import React from 'react'

const CallToAction = () => {
  return (
    <div className='hidden md:flex justify-center items-center'>
      <ButtonPrimary text='contacto' className='bg-third' linkButtonFn={() => { console.log('text') }}/>
    </div>
  )
}

export default CallToAction
