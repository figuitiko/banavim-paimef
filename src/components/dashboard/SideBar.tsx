import { getUser } from '@/app/auth/dal'
import BoxUserInfo from './BoxUserInfo'
import MenuOptions from './MenuOptions'
// import { type Session, getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { User } from '@prisma/client'

const SideBar = async ({user}: {user: User}) => {
  
  
  const { name, email } = user as unknown as { name: string, email: string }

  return (
    <div className='flex flex-col max-w-[300px] h-screen bg-primary p-8 rounded-xl gap-8'>
      <BoxUserInfo name={ name } email={email} />
      <MenuOptions />
    </div>
  )
}

export default SideBar
