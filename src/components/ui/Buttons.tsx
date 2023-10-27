import { COLORS } from '@/constants'
import { type ButtonsProps } from '@/types'

export const ButtonPrimary = ({ text, bgColor = COLORS.primary }: ButtonsProps) => {
  return (
   <button type='button' style={{ backgroundColor: bgColor }} className='px-3 py-2 text-white rounded-md max-w-fit'>
      <span>{text}</span>
    </button>
  )
}
