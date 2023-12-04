import { COLORS } from '@/constants'
import { type IconsProps } from '@/types'

const IconWrapper = ({ children, bgColor = COLORS.third }: IconsProps) => {
  return (
    <div style = {{ backgroundColor: bgColor }} className='flex justify-center w-[48px] h-[48px] min-w-[48px] items-center rounded-md'>
      {children}
    </div>
  )
}

export default IconWrapper
