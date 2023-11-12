import type { Metadata } from 'next'
import '../globals.css'
import Header from '@/components/share/header/Header'

export const metadata: Metadata = {
  title: 'Banavim',
  description: 'Sitio banavim Durango'
}

export default function PublicLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className='flex flex-col max-w-[1142px] m-auto py-6'>
        {children}
      </main>
    </>
  )
}
