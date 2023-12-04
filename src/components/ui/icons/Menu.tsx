import { COLORS } from '@/constants'
import { type SVGProps } from '@/types'

export const Menu = ({ fill = COLORS.main }: SVGProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={20}
      height={20}
      fill='none'
    >
      <path
        fill={fill}
        fillRule='evenodd'
        d='M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM3 10a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM3 15a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
