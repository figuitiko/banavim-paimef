import { type InternalSideBarProps } from '@/types'

const InternalSideBar = ({ items }: InternalSideBarProps) => {
  return (
    <ul className=' hidden md:flex flex-col list-none'>
      {items.map((item, index) => (
        <li className='px-4 py-2 hover:bg-green-500 rounded-md  bg-secondary opacity-2 text-white hover:text-green-200' key={index}>
          <a href={item.href}>{item.title}</a>
        </li>
      ))}
    </ul>
  )
}

export default InternalSideBar
