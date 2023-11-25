import Link from 'next/link'
import React from 'react'

const MenuOptions = () => {
  return (
    <nav className='flex justify-center flex-col text-white items-center'>
      <ul className='flex flex-col gap-8 [&>li]:text-xl'>
      <h3 className='text-3xl mb-4'>Menu</h3>
        <li>
          <Link href={'/dashboard'}>Agresores</Link>
        </li>
        <li>
          <Link href={'/dashboard/victims'}>Casos de Violencia</Link>
        </li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </nav>
  )
}

export default MenuOptions
