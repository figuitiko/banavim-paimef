import { COLORS } from '@/constants'
import { type SVGProps } from '@/types'

export const User = ({ fill = COLORS.main }: SVGProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill={fill}
  >
    <path
      stroke='#111827'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7Z'
    />
  </svg>
)
