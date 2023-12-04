import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='h-[168px] bg-third flex py-4 items-center justify-evenly flex-col text-main gap-4' >
      <div className='flex gap-1 items-center justify-center w-full'>
        <picture>
          <Image src='/images/logo-1.svg' alt='logo banavim' width={20} height={20} />
        </picture>
        <h3 className='text- font-bold uppercase'>PAIMEF</h3>
      </div>
      <div className='flex flex-col items-center w-full'>
        <span className='capitalize mb-2'>enlaces</span>
        <a href='#' className='underline text-[12px] capitalize'>Portal Durango</a>
        <a href='#' className='underline text-[12px] capitalize' >Fiscalia del Estado de Durango</a>
      </div>
    </footer>
  )
}

export default Footer
