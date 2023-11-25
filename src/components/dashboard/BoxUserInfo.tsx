import { type BoxUserInfoProps } from '@/types'
import IconWrapper from '../ui/IconWrapper'
import { Icons } from '../ui/icons'

const BoxUserInfo = ({ name, email }: BoxUserInfoProps) => {
  return (
    <div className='flex text-white text-sm gap-2'>
      <IconWrapper>
        <Icons.User />
      </IconWrapper>
      <div className='flex flex-col'>
        <h6 className='text-sm'>{name}</h6>
        <p className='text-sm'>
          {email}
        </p>
      </div>
    </div>
  )
}

export default BoxUserInfo
