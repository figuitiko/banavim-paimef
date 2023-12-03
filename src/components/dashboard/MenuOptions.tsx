import Link from 'next/link'
import React from 'react'

const MenuOptions = () => {
  return (
    <nav className='flex justify-center flex-col text-white items-center'>
      <ul className='flex flex-col gap-8 [&>li]:text-xl'>
        <li>
          <Link href={'/dashboard'}>Agresores</Link>
        </li>
        <li>
          <Link href={'/dashboard/cases'}>Casos de Violencia</Link>
        </li>
        <li>
          <Link href={'/dashboard/orders'}>Ordenes</Link>
        </li>
        <li>
          <Link href={'/dashboard/services'}>Servicios</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MenuOptions
