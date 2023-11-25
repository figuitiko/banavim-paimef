import Link from 'next/link'
import React from 'react'

const MenuOptions = () => {
  return (
    <nav className='flex justify-center flex-col'>
      <h3 className='text-2xl'>Menu</h3>
      <ul className='flex flex-col'>
        <li>
          <Link href={'/dashboard'}>Agressors</Link>
        </li>
        <li>
          <Link href={'/dashboard/victims'}>Victims</Link>
        </li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </nav>
  )
}

export default MenuOptions
