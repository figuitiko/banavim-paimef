import { cn } from '@/lib/util'
import { type ButtonsProps } from '@/types'

export const ButtonPrimary = ({ text, className }: ButtonsProps) => {
  return (
   <button type='button' className={
    cn(
      'px-3 py-2 text-white rounded-md max-w-fit', className
    )
   }>
      <span>{text}</span>
    </button>
  )
}
