import { type } from 'os';
// import { type Icons } from '@/components/ui/icons'
import { type PRIMARY_MENU, type COLORS } from '../constants'
import type React from 'react'

export type SingleColor = typeof COLORS[keyof typeof COLORS_BUTTONS]

export type ButtonsProps = {
  text: string
  bgColor?: SingleColor
}
export type SVGProps = {
  fill?: SingleColor
}

export type IconsProps = {
  children: React.ReactNode
  bgColor?: SingleColor
}
export type NavBarItem = typeof PRIMARY_MENU[keyof typeof PRIMARY_MENU]

export type NavBarProps = {
  items: NavBarItem[]
}

export type IndicatorsObj = typeof PRIMARY_MENU['indicators']
export type IndicatorsObjeItem = typeof IndicatorsObj[keyof IndicatorsObj]
