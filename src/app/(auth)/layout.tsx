import '../globals.css'
import AuthProvider from '../context/AuthProvider'
import SideBar from '@/components/dashboard/SideBar'

export default function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <div className='flex p-8 gap-8'>
        <SideBar />
        {children}
      </div>
    </AuthProvider>
  )
}
