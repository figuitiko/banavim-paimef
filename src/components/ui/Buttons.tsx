'use client'
import { cn } from '@/lib/util'
import { type ButtonsProps } from '@/types'
import Link from 'next/link'

export const ButtonPrimary = ({ text, className, linkButtonFn }: ButtonsProps) => {
  return (
    (typeof linkButtonFn === 'string'
      ? <Link href={linkButtonFn} passHref className={
        cn(
          'px-3 py-2 text-white rounded-md max-w-fit', className
        )}>{text}</Link>
      : <button className={
      cn(
        'px-3 py-2 text-white rounded-md max-w-fit bg-third', className
      )
    } onClick={linkButtonFn}> {text} </button>)
  )
}
