import CallToAction from './CallToAction'
import LogoBox from './LogoBox'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className='flex w-full h-[64px] justify-center items-center bg-primary text-white px-16 '>
      <div className='flex py-2 w-full gap-4'>
        <LogoBox />
        <NavBar />
        <CallToAction />
      </div>
    </header>
  )
}

export default Header
