'use client'
import { Icons } from '@/components/ui/icons'
import { PRIMARY_MENU } from '@/constants'
import { useState } from 'react'

const NavBar = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <nav className='ml-auto flex items-center justify-center'>
      <ul className='flex gap-4'>
        {
          Object.values(PRIMARY_MENU).map((item, index) => {
            if (typeof item === 'string') {
              return (
                <li key={index} className='text-white text-sm font-normal'>
                  {
                    item
                  }
                </li>
              )
            } else {
              return (
                <li key={index} className='text-white text-sm cursor-pointer' onClick={() => { setIsShow(!isShow) }}>
                  <div className='flex items-center justify-center'>
                    <span>Indicadores</span>
                    <div>
                      {
                        isShow
                          ? (
                            <Icons.ArrowUp />
                            )
                          : (
                            <Icons.ArrowDown />
                            )
                      }
                    </div>
                  </div>
                  {
                    isShow && (
                      <ul className='absolute flex flex-col z-10 bg-primary px-2 py-4 gap-3'>
                        {
                          Object.values(item).map((subItem, index) => {
                            return (
                              <li key={index} className='text-white text-sm font-normal'>
                                {
                                  subItem
                                }
                              </li>
                            )
                          })
                        }
                      </ul>
                    )
                  }
                </li>
              )
            }
          })
        }
      </ul>
    </nav>
  )
}

export default NavBar
