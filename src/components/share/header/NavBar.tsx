'use client'
import { Icons } from '@/components/ui/icons'
import { PRIMARY_MENU } from '@/constants'
import { cn } from '@/lib/util'
import { type IndicatorsObjeItem } from '@/types'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const NavBar = () => {
  const [isShow, setIsShow] = useState(false)
  const [isShowBurger, setIsShowBurger] = useState(false)
  const menuRef = useRef<HTMLUListElement>(null)
  useEffect(() => {
    menuRef.current?.addEventListener('mouseleave', () => {
      setIsShow(false)
    })
    return () => {
      menuRef.current?.removeEventListener('mouseleave', () => {
        setIsShow(false)
      })
    }
  }, [isShow])
  return (
    <nav className='ml-auto flex flex-col md:flex-row items-end md:items-center justify-center px-4 w-full'>
      <button className='flex md:hidden'
      aria-controls='navbar-default'
      aria-expanded='false'
      onClick={() => { setIsShowBurger(!isShowBurger) }}>
        <Icons.Menu />
      </button>
      <ul className={
        cn('flex md:flex flex-col md:flex-row gap-4 w-full items-end md:items-center md:justify-end', {
          hidden: !isShowBurger
        })
      } id='navbar-default'>
        {
          Object.entries(PRIMARY_MENU).map((item) => {
            const [keyMainObj, valMainObj] = item
            if (typeof valMainObj === 'string') {
              return (
                <li key={keyMainObj} className='text-white text-sm font-normal min-w-[169px] md:min-w-fit'>
                  <Link href={`/${keyMainObj}`}>
                    {
                      valMainObj
                    }
                  </Link>
                </li>
              )
            } else {
              return (
                <li key={keyMainObj} className='text-white text-sm cursor-pointer min-w-[169px] md:min-w-fit' onClick={() => { setIsShow(!isShow) }}>
                  <div className='flex items-center justify-start md:justify-center'>
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
                      <ul ref={menuRef} className='absolute flex flex-col z-10 bg-primary px-2 py-4 gap-3'>
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
