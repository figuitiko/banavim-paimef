import type { Metadata } from 'next'
import '../globals.css'
import Header from '@/components/share/header/Header'
import Footer from '@/components/share/footer/Footer'

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
      <main className='flex flex-col max-w-[1142px] m-auto py-6 flex-1 w-full'>
        {children}
      </main>
      <Footer />
    </>
  )
}
