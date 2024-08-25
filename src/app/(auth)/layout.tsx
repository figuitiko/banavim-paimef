import { User } from '@prisma/client'
import { getUser } from '../auth/dal'
import '../globals.css'

import SideBar from '@/components/dashboard/SideBar'

export default async function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const user = await getUser()
  return (    
      <div className='flex p-8 gap-8'>
        <SideBar user={user as User} />
        {children}
      </div>    
  )
}
