import { type AccordionItemProp } from '@/types'
import React from 'react'

const Disclaimer = ({ title, content }: AccordionItemProp) => {
  return (
  <div className='flex flex-col'>
    <h3 className='font-bold tex-2xl uppercase'>{title}</h3>
    <p>
      {content}
    </p>
  </div>
  )
}

export default Disclaimer
