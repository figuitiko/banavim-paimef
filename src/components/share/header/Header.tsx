import CallToAction from './CallToAction'
import LogoBox from './LogoBox'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className='flex w-full h-full md:h-[64px] justify-center items-center bg-primary text-white px-0 md:px-16 sticky top-0'>
      <div className='flex justify-between md:justify-start md:flex-row py-2 w-full gap-4 max-w-[1142px]'>
        <LogoBox />
        <NavBar />
        <CallToAction />
      </div>
    </header>
  )
}

export default Header
