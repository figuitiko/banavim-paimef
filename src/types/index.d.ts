import { type ViolenceCase, type Agressor, type Order, type Service } from '@prisma/client'
import { type PRIMARY_MENU, type COLORS, type UPLOAD_ITEMS, type MAPPED_INDICATORS_CASES } from '../constants'
import type React from 'react'

export type SingleColor = typeof COLORS[keyof typeof COLORS_BUTTONS]

export type ButtonsProps = {
  text: string
  className?: string
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

export type User = {
  name: string
  email: string
  id: string
}
export type BoxUserInfoProps = Pick<User, 'name' | 'email'>

export type TuploaderItem = typeof UPLOAD_ITEMS[number]

export type DropzoneProps = {
  upLoadType: TuploaderItem
}

export type IndicatorAgressorItem = typeof MAPPED_INDICATORS_AGRESSORS[keyof typeof MAPPED_INDICATORS_AGRESSORS]

export type TkeyCases = keyof typeof MAPPED_INDICATORS_CASES

export type TypeHandlerReducersResultItem = Agressor | ViolenceCase | Order | Service

export type TypeHandleReaderArg = {
  reader: FileReader
  result: TypeHandlerReducersResultItem[]
  file: File
  type: TuploaderItem
}
