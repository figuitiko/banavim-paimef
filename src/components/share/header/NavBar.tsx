'use client'
import { Icons } from '@/components/ui/icons'
import { PRIMARY_MENU } from '@/constants'
import { type IndicatorsObjeItem } from '@/types'
import Link from 'next/link'
import { useState } from 'react'

const NavBar = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <nav className='ml-auto flex items-center justify-center'>
      <ul className='flex gap-4'>
        {
          Object.entries(PRIMARY_MENU).map((item) => {
            const [keyMainObj, valMainObj] = item
            if (typeof valMainObj === 'string') {
              return (
                <li key={keyMainObj} className='text-white text-sm font-normal'>
                  <Link href={`/${keyMainObj}`}>
                    {
                      valMainObj
                    }
                  </Link>
                </li>
              )
            } else {
              return (
                <li key={keyMainObj} className='text-white text-sm cursor-pointer' onClick={() => { setIsShow(!isShow) }}>
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
                          Object.entries(valMainObj).map((subItem) => {
                            const [keyObj, valObj] = subItem
                            return (
                              <li key={keyObj} className='text-white text-sm font-normal'>
                                <Link href={`/indicators/${keyObj}`}>
                                {
                                  valObj as IndicatorsObjeItem
                                }
                              </Link>
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
