import Image from 'next/image'
import Link from 'next/link'

const LogoBox = () => {
  return (
    <Link href={'/'} className='flex gap-1 items-start md:items-center  w-full flex-1'>
      <picture className='min-w-[26px]'>
        <Image src='/images/logo-1.svg' alt='Logo' width={26} height={26} />
      </picture>
      <h1 className='text-white text-md font-bold uppercase'>Paimef</h1>
    </Link>
  )
}

export default LogoBox
