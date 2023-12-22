'use client'
import { type TooltipLocatorProps } from '@/types'
import { Tooltip } from 'flowbite-react'
import Image from 'next/image'
import { MotionDiv } from '../share/common/Motion'
import { textVariant } from '@/lib/motion'

const TooltipLocator = ({ left, top, tooltipContent, delay }: TooltipLocatorProps) => {
  return (
    <MotionDiv
    variants={textVariant(delay ?? 0.2)}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true, amount: 0.25 }} style={{ top, left }} className='absolute'>
      <Tooltip className="bg-gray-800 text-white w-max" content={tooltipContent} >
        <picture>
          <Image src="/images/locator.png" alt="Locator" width={40} height={40} />
        </picture>
      </Tooltip>
    </MotionDiv>
  )
}

export default TooltipLocator
