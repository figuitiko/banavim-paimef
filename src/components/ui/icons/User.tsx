import { COLORS } from '@/constants'
import { type SVGProps } from '@/types'

export const User = ({ fill = COLORS.main }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
  >
    <path
      fill={fill}
      d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 18a7 7 0 1 1 14 0H3Z"
    />
  </svg>
)
