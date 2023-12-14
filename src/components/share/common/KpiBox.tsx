'use client'
import { ButtonPrimary } from '@/components/ui/Buttons'
import { type KpiProps } from '@/types'
import { useState } from 'react'

const KpiBox = ({ items, title }: KpiProps) => {
  const [showAll, setShowAll] = useState(false)
  const itemsToShow = showAll ? items : items.slice(0, 5)
  return (
    <div className='flex flex-col p-8 flex-1'>
      <h3 className='text-xl uppercase'>{title}</h3>
      <div className='flex flex-col flex-wrap justify-between'>
        {itemsToShow.map((item, index) => (
          <div key={index} className='flex items-center w-full h-[38px] m-4 gap-2 bg-slate-200'>
            <span className='font-bold text-center h-full px-4 flex justify-center items-center bg-third text-white'>{item.value}</span>
            <p className='text-sm font-semibold text-center p-4'>{item.label}</p>
          </div>
        ))}
    </div>
    {
      items.length > 5 && (
      <div className='w-full flex justify-center'>
        <ButtonPrimary linkButtonFn={() => { setShowAll(!showAll) }} text={showAll ? 'Ver menos' : 'Ver más'} />
      </div>
      )
    }
    </div>
  )
}

export default KpiBox
