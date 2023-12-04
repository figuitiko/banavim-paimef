import { COLORS } from '@/constants'
import { type SVGProps } from '@/types'

export const LightBolt = ({ fill = COLORS.main }: SVGProps) => {
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
      d='M11.3 1.046A1 1 0 0 1 12 2v5h4a1 1 0 0 1 .82 1.573l-7 10A1 1 0 0 1 8 18v-5H4a1 1 0 0 1-.82-1.573l7-10a1 1 0 0 1 1.12-.38Z'
      clipRule='evenodd'
    />
  </svg>
  )
}
