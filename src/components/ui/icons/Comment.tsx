import { COLORS } from '@/constants'
import { type SVGProps } from '@/types'

export const Comment = ({ fill = COLORS.main }: SVGProps) => {
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
      d='M18 5v8a2 2 0 0 1-2 2h-5l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2ZM7 8H5v2h2V8Zm2 0h2v2H9V8Zm6 0h-2v2h2V8Z'
      clipRule='evenodd'
    />
  </svg>
  )
}
